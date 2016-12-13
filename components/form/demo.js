webpackJsonp([2,204],{

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

/***/ 33:
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

	var _rcRadio = __webpack_require__(160);

	var _rcRadio2 = _interopRequireDefault(_rcRadio);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _PureRenderMixin = __webpack_require__(19);

	var _PureRenderMixin2 = _interopRequireDefault(_PureRenderMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Radio = function (_React$Component) {
	    (0, _inherits3.default)(Radio, _React$Component);

	    function Radio() {
	        (0, _classCallCheck3.default)(this, Radio);
	        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	    }

	    Radio.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _PureRenderMixin2.default.shouldComponentUpdate.apply(this, args);
	    };

	    Radio.prototype.render = function render() {
	        var _classNames, _classNames2;

	        var _props = this.props,
	            prefixCls = _props.prefixCls,
	            children = _props.children,
	            checked = _props.checked,
	            disabled = _props.disabled,
	            _props$className = _props.className,
	            className = _props$className === undefined ? '' : _props$className,
	            style = _props.style;

	        var wrapperClassString = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-wrapper', true), (0, _defineProperty3.default)(_classNames, prefixCls + '-wrapper-checked', checked), (0, _defineProperty3.default)(_classNames, prefixCls + '-wrapper-disabled', disabled), _classNames), className);
	        var classString = (0, _classnames2.default)(prefixCls, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, prefixCls + '-checked', checked), (0, _defineProperty3.default)(_classNames2, prefixCls + '-disabled', disabled), _classNames2));
	        return _react2.default.createElement(
	            'label',
	            { className: wrapperClassString, style: style, onMouseEnter: this.props.onMouseEnter, onMouseLeave: this.props.onMouseLeave },
	            _react2.default.createElement(_rcRadio2.default, (0, _extends3.default)({}, this.props, { className: classString, style: null, children: null })),
	            children ? _react2.default.createElement(
	                'span',
	                null,
	                children
	            ) : null
	        );
	    };

	    return Radio;
	}(_react2.default.Component);

	exports.default = Radio;

	Radio.defaultProps = {
	    prefixCls: 'ant-radio'
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

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Group = exports.Button = undefined;

	var _radio = __webpack_require__(33);

	var _radio2 = _interopRequireDefault(_radio);

	var _group = __webpack_require__(97);

	var _group2 = _interopRequireDefault(_group);

	var _radioButton = __webpack_require__(54);

	var _radioButton2 = _interopRequireDefault(_radioButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_radio2.default.Button = _radioButton2.default;
	_radio2.default.Group = _group2.default;
	exports.Button = _radioButton2.default;
	exports.Group = _group2.default;
	exports.default = _radio2.default;

/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(87);

/***/ },

/***/ 54:
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

	var _radio = __webpack_require__(33);

	var _radio2 = _interopRequireDefault(_radio);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RadioButton = function (_React$Component) {
	    (0, _inherits3.default)(RadioButton, _React$Component);

	    function RadioButton() {
	        (0, _classCallCheck3.default)(this, RadioButton);
	        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	    }

	    RadioButton.prototype.render = function render() {
	        return _react2.default.createElement(_radio2.default, this.props);
	    };

	    return RadioButton;
	}(_react2.default.Component);

	exports.default = RadioButton;

	RadioButton.defaultProps = {
	    prefixCls: 'ant-radio-button'
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

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Form = __webpack_require__(280);

	var _Form2 = _interopRequireDefault(_Form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Form2.default;
	module.exports = exports['default'];

/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(249);

	__webpack_require__(282);

/***/ },

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

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(189);

	__webpack_require__(21);

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _objectAssign = __webpack_require__(9);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _rcCalendar = __webpack_require__(182);

	var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

	var _MonthCalendar = __webpack_require__(180);

	var _MonthCalendar2 = _interopRequireDefault(_MonthCalendar);

	var _createPicker = __webpack_require__(278);

	var _createPicker2 = _interopRequireDefault(_createPicker);

	var _wrapPicker = __webpack_require__(279);

	var _wrapPicker2 = _interopRequireDefault(_wrapPicker);

	var _RangePicker = __webpack_require__(277);

	var _RangePicker2 = _interopRequireDefault(_RangePicker);

	var _Calendar = __webpack_require__(276);

	var _Calendar2 = _interopRequireDefault(_Calendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DatePicker = (0, _wrapPicker2.default)((0, _createPicker2.default)(_rcCalendar2.default));
	var MonthPicker = (0, _wrapPicker2.default)((0, _createPicker2.default)(_MonthCalendar2.default), 'YYYY-MM');
	(0, _objectAssign2.default)(DatePicker, {
	    RangePicker: (0, _wrapPicker2.default)(_RangePicker2.default),
	    Calendar: _Calendar2.default,
	    MonthPicker: MonthPicker
	});
	exports.default = DatePicker;
	module.exports = exports['default'];

/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(248);

	__webpack_require__(21);

	__webpack_require__(76);

/***/ },

/***/ 86:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 87:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 88:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 97:
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

	var _radio = __webpack_require__(33);

	var _radio2 = _interopRequireDefault(_radio);

	var _radioButton = __webpack_require__(54);

	var _radioButton2 = _interopRequireDefault(_radioButton);

	var _PureRenderMixin = __webpack_require__(19);

	var _PureRenderMixin2 = _interopRequireDefault(_PureRenderMixin);

	var _objectAssign = __webpack_require__(9);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getCheckedValue(children) {
	    var value = null;
	    var matched = false;
	    _react2.default.Children.forEach(children, function (radio) {
	        if (radio && radio.props && radio.props.checked) {
	            value = radio.props.value;
	            matched = true;
	        }
	    });
	    return matched ? { value: value } : undefined;
	}

	var RadioGroup = function (_React$Component) {
	    (0, _inherits3.default)(RadioGroup, _React$Component);

	    function RadioGroup(props) {
	        (0, _classCallCheck3.default)(this, RadioGroup);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

	        _this.onRadioChange = function (ev) {
	            if (!('value' in _this.props)) {
	                _this.setState({
	                    value: ev.target.value
	                });
	            }
	            var onChange = _this.props.onChange;
	            if (onChange) {
	                onChange(ev);
	            }
	        };
	        var value = void 0;
	        if ('value' in props) {
	            value = props.value;
	        } else if ('defaultValue' in props) {
	            value = props.defaultValue;
	        } else {
	            var checkedValue = getCheckedValue(props.children);
	            value = checkedValue && checkedValue.value;
	        }
	        _this.state = {
	            value: value
	        };
	        return _this;
	    }

	    RadioGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if ('value' in nextProps) {
	            this.setState({
	                value: nextProps.value
	            });
	        } else {
	            var checkedValue = getCheckedValue(nextProps.children);
	            if (checkedValue) {
	                this.setState({
	                    value: checkedValue.value
	                });
	            }
	        }
	    };

	    RadioGroup.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _PureRenderMixin2.default.shouldComponentUpdate.apply(this, args);
	    };

	    RadioGroup.prototype.render = function render() {
	        var _this2 = this;

	        var props = this.props;
	        var children = !props.children ? [] : _react2.default.Children.map(props.children, function (radio) {
	            if (radio && (radio.type === _radio2.default || radio.type === _radioButton2.default) && radio.props) {
	                return _react2.default.cloneElement(radio, (0, _objectAssign2.default)({}, radio.props, {
	                    onChange: _this2.onRadioChange,
	                    checked: _this2.state.value === radio.props.value,
	                    disabled: radio.props.disabled || _this2.props.disabled
	                }));
	            }
	            return radio;
	        });
	        var _props$prefixCls = props.prefixCls,
	            prefixCls = _props$prefixCls === undefined ? 'ant-radio-group' : _props$prefixCls,
	            _props$className = props.className,
	            className = _props$className === undefined ? '' : _props$className;

	        var classString = (0, _classnames2.default)(prefixCls, (0, _defineProperty3.default)({}, prefixCls + '-' + props.size, props.size), className);
	        return _react2.default.createElement(
	            'div',
	            { className: classString, style: props.style, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave },
	            children
	        );
	    };

	    return RadioGroup;
	}(_react2.default.Component);

	exports.default = RadioGroup;

	RadioGroup.defaultProps = {
	    disabled: false
	};
	module.exports = exports['default'];

/***/ },

/***/ 111:
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

	var _rcCascader = __webpack_require__(365);

	var _rcCascader2 = _interopRequireDefault(_rcCascader);

	var _arrayTreeFilter = __webpack_require__(320);

	var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _omit = __webpack_require__(23);

	var _omit2 = _interopRequireDefault(_omit);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _splitObject3 = __webpack_require__(18);

	var _splitObject4 = _interopRequireDefault(_splitObject3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function highlightKeyword(str, keyword, prefixCls) {
	    return str.split(keyword).map(function (node, index) {
	        return index === 0 ? node : [_react2.default.createElement(
	            'span',
	            { className: prefixCls + '-menu-item-keyword', key: 'seperator' },
	            keyword
	        ), node];
	    });
	}
	function defaultFilterOption(inputValue, path) {
	    return path.some(function (option) {
	        return option.label.indexOf(inputValue) > -1;
	    });
	}
	function defaultRenderFilteredOption(inputValue, path, prefixCls) {
	    return path.map(function (_ref, index) {
	        var label = _ref.label;

	        var node = label.indexOf(inputValue) > -1 ? highlightKeyword(label, inputValue, prefixCls) : label;
	        return index === 0 ? node : [' / ', node];
	    });
	}
	function defaultSortFilteredOption(a, b, inputValue) {
	    function callback(elem) {
	        return elem.label.indexOf(inputValue) > -1;
	    }
	    return a.findIndex(callback) - b.findIndex(callback);
	}
	var defaultDisplayRender = function defaultDisplayRender(label) {
	    return label.join(' / ');
	};

	var Cascader = function (_React$Component) {
	    (0, _inherits3.default)(Cascader, _React$Component);

	    function Cascader(props) {
	        (0, _classCallCheck3.default)(this, Cascader);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

	        _this.handleChange = function (value, selectedOptions) {
	            _this.setState({ inputValue: '' });
	            if (selectedOptions[0].__IS_FILTERED_OPTION) {
	                var unwrappedValue = value[0];
	                var unwrappedSelectedOptions = selectedOptions[0].path;
	                _this.setValue(unwrappedValue, unwrappedSelectedOptions);
	                return;
	            }
	            _this.setValue(value, selectedOptions);
	        };
	        _this.handlePopupVisibleChange = function (popupVisible) {
	            _this.setState({
	                popupVisible: popupVisible,
	                inputFocused: popupVisible,
	                inputValue: popupVisible ? _this.state.inputValue : ''
	            });
	            var onPopupVisibleChange = _this.props.onPopupVisibleChange;
	            if (onPopupVisibleChange) {
	                onPopupVisibleChange(popupVisible);
	            }
	        };
	        _this.handleInputBlur = function () {
	            _this.setState({
	                inputFocused: false
	            });
	        };
	        _this.handleInputClick = function (e) {
	            var _this$state = _this.state,
	                inputFocused = _this$state.inputFocused,
	                popupVisible = _this$state.popupVisible;
	            // Prevent `Trigger` behaviour.

	            if (inputFocused || popupVisible) {
	                e.stopPropagation();
	                e.nativeEvent.stopImmediatePropagation();
	            }
	        };
	        _this.handleInputChange = function (e) {
	            var inputValue = e.target.value;
	            _this.setState({ inputValue: inputValue });
	        };
	        _this.setValue = function (value) {
	            var selectedOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	            if (!('value' in _this.props)) {
	                _this.setState({ value: value });
	            }
	            var onChange = _this.props.onChange;
	            if (onChange) {
	                onChange(value, selectedOptions);
	            }
	        };
	        _this.clearSelection = function (e) {
	            e.preventDefault();
	            e.stopPropagation();
	            if (!_this.state.inputValue) {
	                _this.setValue([]);
	                _this.setState({ popupVisible: false });
	            } else {
	                _this.setState({ inputValue: '' });
	            }
	        };
	        _this.state = {
	            value: props.value || props.defaultValue || [],
	            inputValue: '',
	            inputFocused: false,
	            popupVisible: false,
	            flattenOptions: props.showSearch && _this.flattenTree(props.options, props.changeOnSelect)
	        };
	        return _this;
	    }

	    Cascader.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if ('value' in nextProps) {
	            this.setState({ value: nextProps.value || [] });
	        }
	        if (nextProps.showSearch && this.props.options !== nextProps.options) {
	            this.setState({ flattenOptions: this.flattenTree(nextProps.options, nextProps.changeOnSelect) });
	        }
	    };

	    Cascader.prototype.getLabel = function getLabel() {
	        var _props = this.props,
	            options = _props.options,
	            _props$displayRender = _props.displayRender,
	            displayRender = _props$displayRender === undefined ? defaultDisplayRender : _props$displayRender;

	        var value = this.state.value;
	        var unwrappedValue = Array.isArray(value[0]) ? value[0] : value;
	        var selectedOptions = (0, _arrayTreeFilter2.default)(options, function (o, level) {
	            return o.value === unwrappedValue[level];
	        });
	        var label = selectedOptions.map(function (o) {
	            return o.label;
	        });
	        return displayRender(label, selectedOptions);
	    };

	    Cascader.prototype.flattenTree = function flattenTree(options, changeOnSelect) {
	        var _this2 = this;

	        var ancestor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

	        var flattenOptions = [];
	        options.forEach(function (option) {
	            var path = ancestor.concat(option);
	            if (changeOnSelect || !option.children) {
	                flattenOptions.push(path);
	            }
	            if (option.children) {
	                flattenOptions = flattenOptions.concat(_this2.flattenTree(option.children, changeOnSelect, path));
	            }
	        });
	        return flattenOptions;
	    };

	    Cascader.prototype.generateFilteredOptions = function generateFilteredOptions(prefixCls) {
	        var _this3 = this;

	        var _props2 = this.props,
	            showSearch = _props2.showSearch,
	            notFoundContent = _props2.notFoundContent;
	        var _showSearch$filter = showSearch.filter,
	            filter = _showSearch$filter === undefined ? defaultFilterOption : _showSearch$filter,
	            _showSearch$render = showSearch.render,
	            render = _showSearch$render === undefined ? defaultRenderFilteredOption : _showSearch$render,
	            _showSearch$sort = showSearch.sort,
	            sort = _showSearch$sort === undefined ? defaultSortFilteredOption : _showSearch$sort;
	        var _state = this.state,
	            flattenOptions = _state.flattenOptions,
	            inputValue = _state.inputValue;

	        var filtered = flattenOptions.filter(function (path) {
	            return filter(_this3.state.inputValue, path);
	        }).sort(function (a, b) {
	            return sort(a, b, inputValue);
	        });
	        if (filtered.length > 0) {
	            return filtered.map(function (path) {
	                return {
	                    __IS_FILTERED_OPTION: true,
	                    path: path,
	                    label: render(inputValue, path, prefixCls),
	                    value: path.map(function (o) {
	                        return o.value;
	                    })
	                };
	            });
	        }
	        return [{ label: notFoundContent, value: 'ANT_CASCADER_NOT_FOUND', disabled: true }];
	    };

	    Cascader.prototype.render = function render() {
	        var _classNames, _classNames2, _classNames3;

	        var props = this.props,
	            state = this.state;

	        var _splitObject = (0, _splitObject4.default)(props, ['prefixCls', 'inputPrefixCls', 'children', 'placeholder', 'size', 'disabled', 'className', 'style', 'allowClear', 'showSearch']),
	            _splitObject2 = (0, _slicedToArray3.default)(_splitObject, 2),
	            _splitObject2$ = _splitObject2[0],
	            prefixCls = _splitObject2$.prefixCls,
	            inputPrefixCls = _splitObject2$.inputPrefixCls,
	            children = _splitObject2$.children,
	            placeholder = _splitObject2$.placeholder,
	            size = _splitObject2$.size,
	            disabled = _splitObject2$.disabled,
	            className = _splitObject2$.className,
	            style = _splitObject2$.style,
	            allowClear = _splitObject2$.allowClear,
	            showSearch = _splitObject2$.showSearch,
	            otherProps = _splitObject2[1];

	        var value = state.value;
	        var sizeCls = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, inputPrefixCls + '-lg', size === 'large'), (0, _defineProperty3.default)(_classNames, inputPrefixCls + '-sm', size === 'small'), _classNames));
	        var clearIcon = allowClear && !disabled && value.length > 0 || state.inputValue ? _react2.default.createElement(_icon2.default, { type: 'cross-circle', className: prefixCls + '-picker-clear', onClick: this.clearSelection }) : null;
	        var arrowCls = (0, _classnames2.default)((_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, prefixCls + '-picker-arrow', true), (0, _defineProperty3.default)(_classNames2, prefixCls + '-picker-arrow-expand', state.popupVisible), _classNames2));
	        var pickerCls = (0, _classnames2.default)(className, (_classNames3 = {}, (0, _defineProperty3.default)(_classNames3, prefixCls + '-picker', true), (0, _defineProperty3.default)(_classNames3, prefixCls + '-picker-with-value', state.inputValue), (0, _defineProperty3.default)(_classNames3, prefixCls + '-picker-disabled', disabled), _classNames3));
	        // Fix bug of https://github.com/facebook/react/pull/5004
	        // and https://fb.me/react-unknown-prop
	        var inputProps = (0, _omit2.default)(otherProps, ['onChange', 'options', 'popupPlacement', 'transitionName', 'displayRender', 'onPopupVisibleChange', 'changeOnSelect', 'expandTrigger', 'popupVisible', 'getPopupContainer', 'loadData', 'popupClassName', 'filterOption', 'renderFilteredOption', 'sortFilteredOption', 'notFoundContent']);
	        var options = props.options;
	        if (state.inputValue) {
	            options = this.generateFilteredOptions(prefixCls);
	        }
	        // Dropdown menu should keep previous status until it is fully closed.
	        if (!state.popupVisible) {
	            options = this.cachedOptions;
	        } else {
	            this.cachedOptions = options;
	        }
	        var dropdownMenuColumnStyle = {};
	        var isNotFound = (options || []).length === 1 && options[0].value === 'ANT_CASCADER_NOT_FOUND';
	        if (isNotFound) {
	            dropdownMenuColumnStyle.height = 'auto'; // Height of one row.
	        }
	        // The default value of `matchInputWidth` is `true`
	        var resultListMatchInputWidth = showSearch.matchInputWidth === false ? false : true;
	        if (resultListMatchInputWidth && state.inputValue && this.refs.input) {
	            dropdownMenuColumnStyle.width = this.refs.input.refs.input.offsetWidth;
	        }
	        var input = children || _react2.default.createElement(
	            'span',
	            { style: style, className: pickerCls },
	            _react2.default.createElement(_input2.default, (0, _extends3.default)({}, inputProps, { ref: 'input', placeholder: value && value.length > 0 ? null : placeholder, className: prefixCls + '-input ' + sizeCls, value: state.inputValue, disabled: disabled, readOnly: !showSearch, autoComplete: 'off', onClick: showSearch ? this.handleInputClick : undefined, onBlur: showSearch ? this.handleInputBlur : undefined, onChange: showSearch ? this.handleInputChange : undefined })),
	            _react2.default.createElement(
	                'span',
	                { className: prefixCls + '-picker-label' },
	                this.getLabel()
	            ),
	            clearIcon,
	            _react2.default.createElement(_icon2.default, { type: 'down', className: arrowCls })
	        );
	        return _react2.default.createElement(
	            _rcCascader2.default,
	            (0, _extends3.default)({}, props, { options: options, value: value, popupVisible: state.popupVisible, onPopupVisibleChange: this.handlePopupVisibleChange, onChange: this.handleChange, dropdownMenuColumnStyle: dropdownMenuColumnStyle }),
	            input
	        );
	    };

	    return Cascader;
	}(_react2.default.Component);

	exports.default = Cascader;

	Cascader.defaultProps = {
	    prefixCls: 'ant-cascader',
	    inputPrefixCls: 'ant-input',
	    placeholder: 'Please select',
	    transitionName: 'slide-up',
	    popupPlacement: 'bottomLeft',
	    options: [],
	    disabled: false,
	    allowClear: true,
	    showSearch: false,
	    notFoundContent: 'Not Found'
	};
	module.exports = exports['default'];

/***/ },

/***/ 112:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(391);

	__webpack_require__(21);

/***/ },

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _progress = __webpack_require__(288);

	var _progress2 = _interopRequireDefault(_progress);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _progress2.default;
	module.exports = exports['default'];

/***/ },

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(253);

/***/ },

/***/ 118:
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

	var _moment = __webpack_require__(20);

	var _moment2 = _interopRequireDefault(_moment);

	var _TimePicker = __webpack_require__(331);

	var _TimePicker2 = _interopRequireDefault(_TimePicker);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _objectAssign = __webpack_require__(9);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _zh_CN = __webpack_require__(119);

	var _zh_CN2 = _interopRequireDefault(_zh_CN);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TimePicker = function (_React$Component) {
	    (0, _inherits3.default)(TimePicker, _React$Component);

	    function TimePicker(props) {
	        (0, _classCallCheck3.default)(this, TimePicker);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

	        _this.handleChange = function (value) {
	            if (!('value' in _this.props)) {
	                _this.setState({ value: value });
	            }
	            var _this$props = _this.props,
	                onChange = _this$props.onChange,
	                _this$props$format = _this$props.format,
	                format = _this$props$format === undefined ? 'HH:mm:ss' : _this$props$format;

	            if (onChange) {
	                onChange(value, value && value.format(format) || '');
	            }
	        };
	        var value = props.value || props.defaultValue;
	        if (value && !_moment2.default.isMoment(value)) {
	            throw new Error('The value/defaultValue of TimePicker must be a moment object after `antd@2.0`, ' + 'see: http://u.ant.design/time-picker-value');
	        }
	        _this.state = {
	            value: value
	        };
	        return _this;
	    }

	    TimePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if ('value' in nextProps) {
	            this.setState({ value: nextProps.value });
	        }
	    };

	    TimePicker.prototype.getLocale = function getLocale() {
	        var antLocale = this.context.antLocale;
	        var timePickerLocale = antLocale && antLocale.TimePicker || _zh_CN2.default;
	        return timePickerLocale;
	    };

	    TimePicker.prototype.render = function render() {
	        var props = (0, _objectAssign2.default)({ format: 'HH:mm:ss' }, this.props);
	        delete props.defaultValue;
	        var className = (0, _classnames2.default)(props.className, (0, _defineProperty3.default)({}, props.prefixCls + '-' + props.size, !!props.size));
	        var addon = function addon(panel) {
	            return props.addon ? _react2.default.createElement(
	                'div',
	                { className: props.prefixCls + '-panel-addon' },
	                props.addon(panel)
	            ) : null;
	        };
	        return _react2.default.createElement(_TimePicker2.default, (0, _extends3.default)({}, props, { className: className, value: this.state.value, placeholder: props.placeholder || this.getLocale().placeholder, showHour: props.format.indexOf('HH') > -1, showMinute: props.format.indexOf('mm') > -1, showSecond: props.format.indexOf('ss') > -1, onChange: this.handleChange, addon: addon }));
	    };

	    return TimePicker;
	}(_react2.default.Component);

	exports.default = TimePicker;

	TimePicker.defaultProps = {
	    prefixCls: 'ant-time-picker',
	    align: {
	        offset: [0, -2]
	    },
	    disabled: false,
	    disabledHours: undefined,
	    disabledMinutes: undefined,
	    disabledSeconds: undefined,
	    hideDisabledOptions: false,
	    placement: 'bottomLeft',
	    transitionName: 'slide-up'
	};
	TimePicker.contextTypes = {
	    antLocale: _react2.default.PropTypes.object
	};
	module.exports = exports['default'];

/***/ },

/***/ 119:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var locale = {
	    placeholder: '请选择时间'
	};
	exports.default = locale;
	module.exports = exports['default'];

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

/***/ 143:
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

	var _rcInputNumber = __webpack_require__(346);

	var _rcInputNumber2 = _interopRequireDefault(_rcInputNumber);

	var _splitObject3 = __webpack_require__(18);

	var _splitObject4 = _interopRequireDefault(_splitObject3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InputNumber = function (_React$Component) {
	    (0, _inherits3.default)(InputNumber, _React$Component);

	    function InputNumber() {
	        (0, _classCallCheck3.default)(this, InputNumber);
	        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	    }

	    InputNumber.prototype.render = function render() {
	        var _classNames;

	        var _splitObject = (0, _splitObject4.default)(this.props, ['size', 'className']),
	            _splitObject2 = (0, _slicedToArray3.default)(_splitObject, 2),
	            _splitObject2$ = _splitObject2[0],
	            className = _splitObject2$.className,
	            size = _splitObject2$.size,
	            others = _splitObject2[1];

	        var inputNumberClass = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, this.props.prefixCls + '-lg', size === 'large'), (0, _defineProperty3.default)(_classNames, this.props.prefixCls + '-sm', size === 'small'), _classNames), className);
	        return _react2.default.createElement(_rcInputNumber2.default, (0, _extends3.default)({ className: inputNumberClass }, others));
	    };

	    return InputNumber;
	}(_react2.default.Component);

	exports.default = InputNumber;

	InputNumber.defaultProps = {
	    prefixCls: 'ant-input-number',
	    step: 1
	};
	module.exports = exports['default'];

/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(251);

/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = exports.UploadProps = undefined;

	var _defineProperty2 = __webpack_require__(8);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	exports.Dragger = Dragger;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _rcUpload = __webpack_require__(418);

	var _rcUpload2 = _interopRequireDefault(_rcUpload);

	var _uploadList = __webpack_require__(494);

	var _uploadList2 = _interopRequireDefault(_uploadList);

	var _getFileItem = __webpack_require__(492);

	var _getFileItem2 = _interopRequireDefault(_getFileItem);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _objectAssign = __webpack_require__(9);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _interface = __webpack_require__(493);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function T() {
	    return true;
	}
	// Fix IE file.status problem
	// via coping a new Object
	function fileToObject(file) {
	    return {
	        lastModified: file.lastModified,
	        lastModifiedDate: file.lastModifiedDate,
	        name: file.filename || file.name,
	        size: file.size,
	        type: file.type,
	        uid: file.uid,
	        response: file.response,
	        error: file.error,
	        percent: 0,
	        originFileObj: file,
	        status: null
	    };
	}
	/**
	 * 生成Progress percent: 0.1 -> 0.98
	 *   - for ie
	 */
	function genPercentAdd() {
	    var k = 0.1;
	    var i = 0.01;
	    var end = 0.98;
	    return function (s) {
	        var start = s;
	        if (start >= end) {
	            return start;
	        }
	        start += k;
	        k = k - i;
	        if (k < 0.001) {
	            k = 0.001;
	        }
	        return start * 100;
	    };
	}
	exports.UploadProps = _interface.UploadProps;
	function Dragger(props) {
	    return _react2.default.createElement(Upload, (0, _extends3.default)({}, props, { type: 'drag', style: { height: props.height } }));
	}

	var Upload = function (_React$Component) {
	    (0, _inherits3.default)(Upload, _React$Component);

	    function Upload(props) {
	        (0, _classCallCheck3.default)(this, Upload);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

	        _this.onStart = function (file) {
	            var targetItem = void 0;
	            var nextFileList = _this.state.fileList.concat();
	            if (file.length > 0) {
	                targetItem = file.map(function (f) {
	                    var fileObject = fileToObject(f);
	                    fileObject.status = 'uploading';
	                    return fileObject;
	                });
	                nextFileList = nextFileList.concat(targetItem);
	            } else {
	                targetItem = fileToObject(file);
	                targetItem.status = 'uploading';
	                nextFileList.push(targetItem);
	            }
	            _this.onChange({
	                file: targetItem,
	                fileList: nextFileList
	            });
	            // fix ie progress
	            if (!window.FormData) {
	                _this.autoUpdateProgress(0, targetItem);
	            }
	        };
	        _this.onSuccess = function (response, file) {
	            _this.clearProgressTimer();
	            try {
	                if (typeof response === 'string') {
	                    response = JSON.parse(response);
	                }
	            } catch (e) {}
	            var fileList = _this.state.fileList;
	            var targetItem = (0, _getFileItem2.default)(file, fileList);
	            // removed
	            if (!targetItem) {
	                return;
	            }
	            targetItem.status = 'done';
	            targetItem.response = response;
	            _this.onChange({
	                file: targetItem,
	                fileList: fileList
	            });
	        };
	        _this.onProgress = function (e, file) {
	            var fileList = _this.state.fileList;
	            var targetItem = (0, _getFileItem2.default)(file, fileList);
	            // removed
	            if (!targetItem) {
	                return;
	            }
	            targetItem.percent = e.percent;
	            _this.onChange({
	                event: e,
	                file: targetItem,
	                fileList: _this.state.fileList
	            });
	        };
	        _this.onError = function (error, response, file) {
	            _this.clearProgressTimer();
	            var fileList = _this.state.fileList;
	            var targetItem = (0, _getFileItem2.default)(file, fileList);
	            // removed
	            if (!targetItem) {
	                return;
	            }
	            targetItem.error = error;
	            targetItem.response = response;
	            targetItem.status = 'error';
	            _this.handleRemove(targetItem);
	        };
	        _this.handleManualRemove = function (file) {
	            _this.refs.upload.abort(file);
	            file.status = 'removed'; // eslint-disable-line
	            _this.handleRemove(file);
	        };
	        _this.onChange = function (info) {
	            if (!('fileList' in _this.props)) {
	                _this.setState({ fileList: info.fileList });
	            }
	            var onChange = _this.props.onChange;
	            if (onChange) {
	                onChange(info);
	            }
	        };
	        _this.onFileDrop = function (e) {
	            _this.setState({
	                dragState: e.type
	            });
	        };
	        _this.state = {
	            fileList: _this.props.fileList || _this.props.defaultFileList || [],
	            dragState: 'drop'
	        };
	        return _this;
	    }

	    Upload.prototype.autoUpdateProgress = function autoUpdateProgress(_, file) {
	        var _this2 = this;

	        var getPercent = genPercentAdd();
	        var curPercent = 0;
	        this.progressTimer = setInterval(function () {
	            curPercent = getPercent(curPercent);
	            _this2.onProgress({
	                percent: curPercent
	            }, file);
	        }, 200);
	    };

	    Upload.prototype.removeFile = function removeFile(file) {
	        var fileList = this.state.fileList;
	        var targetItem = (0, _getFileItem2.default)(file, fileList);
	        var index = fileList.indexOf(targetItem);
	        if (index !== -1) {
	            fileList.splice(index, 1);
	            return fileList;
	        }
	        return null;
	    };

	    Upload.prototype.handleRemove = function handleRemove(file) {
	        var onRemove = this.props.onRemove;
	        if (onRemove) {
	            onRemove(file);
	        }
	        var fileList = this.removeFile(file);
	        if (fileList) {
	            this.onChange({
	                file: file,
	                fileList: fileList
	            });
	        }
	    };

	    Upload.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if ('fileList' in nextProps) {
	            this.setState({
	                fileList: nextProps.fileList || []
	            });
	        }
	    };

	    Upload.prototype.clearProgressTimer = function clearProgressTimer() {
	        clearInterval(this.progressTimer);
	    };

	    Upload.prototype.render = function render() {
	        var _classNames2;

	        var _props = this.props,
	            _props$prefixCls = _props.prefixCls,
	            prefixCls = _props$prefixCls === undefined ? '' : _props$prefixCls,
	            showUploadList = _props.showUploadList,
	            listType = _props.listType,
	            onPreview = _props.onPreview,
	            type = _props.type,
	            disabled = _props.disabled,
	            children = _props.children,
	            className = _props.className;

	        var rcUploadProps = (0, _objectAssign2.default)({}, this.props, {
	            onStart: this.onStart,
	            onError: this.onError,
	            onProgress: this.onProgress,
	            onSuccess: this.onSuccess
	        });
	        delete rcUploadProps.className;
	        var uploadList = showUploadList ? _react2.default.createElement(_uploadList2.default, { listType: listType, items: this.state.fileList, onPreview: onPreview, onRemove: this.handleManualRemove }) : null;
	        if (type === 'drag') {
	            var _classNames;

	            var dragCls = (0, _classnames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-drag', true), (0, _defineProperty3.default)(_classNames, prefixCls + '-drag-uploading', this.state.fileList.some(function (file) {
	                return file.status === 'uploading';
	            })), (0, _defineProperty3.default)(_classNames, prefixCls + '-drag-hover', this.state.dragState === 'dragover'), (0, _defineProperty3.default)(_classNames, prefixCls + '-disabled', disabled), _classNames));
	            return _react2.default.createElement(
	                'span',
	                { className: className },
	                _react2.default.createElement(
	                    'div',
	                    { className: dragCls, onDrop: this.onFileDrop, onDragOver: this.onFileDrop, onDragLeave: this.onFileDrop },
	                    _react2.default.createElement(
	                        _rcUpload2.default,
	                        (0, _extends3.default)({}, rcUploadProps, { ref: 'upload', className: prefixCls + '-btn' }),
	                        _react2.default.createElement(
	                            'div',
	                            { className: prefixCls + '-drag-container' },
	                            children
	                        )
	                    )
	                ),
	                uploadList
	            );
	        }
	        var uploadButtonCls = (0, _classnames2.default)(prefixCls, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, prefixCls + '-select', true), (0, _defineProperty3.default)(_classNames2, prefixCls + '-select-' + listType, true), (0, _defineProperty3.default)(_classNames2, prefixCls + '-disabled', disabled), _classNames2));
	        var uploadButton = _react2.default.createElement(
	            'div',
	            { className: uploadButtonCls, style: { display: children ? '' : 'none' } },
	            _react2.default.createElement(_rcUpload2.default, (0, _extends3.default)({}, rcUploadProps, { ref: 'upload' }))
	        );
	        if (listType === 'picture-card') {
	            return _react2.default.createElement(
	                'span',
	                { className: className },
	                uploadList,
	                uploadButton
	            );
	        }
	        return _react2.default.createElement(
	            'span',
	            { className: className },
	            uploadButton,
	            uploadList
	        );
	    };

	    return Upload;
	}(_react2.default.Component);

	exports.default = Upload;

	Upload.Dragger = Dragger;
	Upload.defaultProps = {
	    prefixCls: 'ant-upload',
	    type: 'select',
	    multiple: false,
	    action: '',
	    data: {},
	    accept: '',
	    beforeUpload: T,
	    showUploadList: true,
	    listType: 'text',
	    className: '',
	    disabled: false,
	    supportServerRender: true
	};

/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(395);

	__webpack_require__(115);

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = getLocale;

	var _objectAssign = __webpack_require__(9);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getLocale(props, context, componentName, getDefaultLocale) {
	    var locale = context && context.antLocale && context.antLocale[componentName] ? context.antLocale[componentName] : getDefaultLocale();
	    var result = (0, _objectAssign2.default)({}, locale, props.locale);
	    result.lang = (0, _objectAssign2.default)({}, locale.lang, props.locale.lang);
	    return result;
	}
	module.exports = exports['default'];

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _zh_CN = __webpack_require__(155);

	var _zh_CN2 = _interopRequireDefault(_zh_CN);

	var _zh_CN3 = __webpack_require__(119);

	var _zh_CN4 = _interopRequireDefault(_zh_CN3);

	var _objectAssign = __webpack_require__(9);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _moment = __webpack_require__(20);

	var _moment2 = _interopRequireDefault(_moment);

	__webpack_require__(225);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_moment2.default.locale('zh-cn');
	// 统一合并为完整的 Locale
	var locale = {
	    lang: (0, _objectAssign2.default)({
	        placeholder: '请选择日期',
	        rangePlaceholder: ['开始日期', '结束日期']
	    }, _zh_CN2.default),
	    timePickerLocale: (0, _objectAssign2.default)({}, _zh_CN4.default)
	};
	// should add whitespace between char in Button
	locale.lang.ok = '确 定';
	exports.default = locale;
	module.exports = exports['default'];

/***/ },

/***/ 174:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var FIELD_META_PROP = exports.FIELD_META_PROP = 'data-__meta';

/***/ },

/***/ 177:
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

	var _rcSlider = __webpack_require__(471);

	var _rcSlider2 = _interopRequireDefault(_rcSlider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Slider = function (_React$Component) {
	    (0, _inherits3.default)(Slider, _React$Component);

	    function Slider() {
	        (0, _classCallCheck3.default)(this, Slider);
	        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	    }

	    Slider.prototype.render = function render() {
	        return _react2.default.createElement(_rcSlider2.default, this.props);
	    };

	    return Slider;
	}(_react2.default.Component);

	exports.default = Slider;

	Slider.defaultProps = {
	    prefixCls: 'ant-slider',
	    tooltipPrefixCls: 'ant-tooltip',
	    tipTransitionName: 'zoom-down'
	};
	Slider.propTypes = {
	    prefixCls: _react.PropTypes.string,
	    tipTransitionName: _react.PropTypes.string
	};
	module.exports = exports['default'];

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(392);

	__webpack_require__(149);

/***/ },

/***/ 189:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 248:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 249:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 251:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 253:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 276:
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

	var _zh_CN = __webpack_require__(155);

	var _zh_CN2 = _interopRequireDefault(_zh_CN);

	var _rcCalendar = __webpack_require__(182);

	var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Calendar = function (_React$Component) {
	    (0, _inherits3.default)(Calendar, _React$Component);

	    function Calendar() {
	        (0, _classCallCheck3.default)(this, Calendar);
	        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	    }

	    Calendar.prototype.render = function render() {
	        return _react2.default.createElement(_rcCalendar2.default, this.props);
	    };

	    return Calendar;
	}(_react2.default.Component);

	exports.default = Calendar;

	Calendar.defaultProps = {
	    locale: _zh_CN2.default,
	    prefixCls: 'ant-calendar'
	};
	module.exports = exports['default'];

/***/ },

/***/ 277:
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

	var _moment = __webpack_require__(20);

	var _moment2 = _interopRequireDefault(_moment);

	var _RangeCalendar = __webpack_require__(363);

	var _RangeCalendar2 = _interopRequireDefault(_RangeCalendar);

	var _Picker = __webpack_require__(181);

	var _Picker2 = _interopRequireDefault(_Picker);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _objectAssign = __webpack_require__(9);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RangePicker = function (_React$Component) {
	    (0, _inherits3.default)(RangePicker, _React$Component);

	    function RangePicker(props) {
	        (0, _classCallCheck3.default)(this, RangePicker);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

	        _this.clearSelection = function (e) {
	            e.preventDefault();
	            e.stopPropagation();
	            _this.setState({ value: [] });
	            _this.handleChange([]);
	        };
	        _this.handleChange = function (value) {
	            var props = _this.props;
	            if (!('value' in props)) {
	                _this.setState({ value: value });
	            }
	            props.onChange(value, [value[0] && value[0].format(props.format) || '', value[1] && value[1].format(props.format) || '']);
	        };
	        _this.handleOpenChange = function (open) {
	            _this.setState({ open: open });
	            var onOpenChange = _this.props.onOpenChange;
	            if (onOpenChange) {
	                onOpenChange(open);
	            }
	        };
	        _this.renderFooter = function () {
	            var _this$props = _this.props,
	                prefixCls = _this$props.prefixCls,
	                ranges = _this$props.ranges;

	            if (!ranges) {
	                return null;
	            }
	            var operations = Object.keys(ranges).map(function (range) {
	                var value = ranges[range];
	                return _react2.default.createElement(
	                    'a',
	                    { key: range, onClick: function onClick() {
	                            return _this.setValue(value);
	                        } },
	                    range
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                { className: prefixCls + '-range-quick-selector' },
	                operations
	            );
	        };
	        var value = props.value || props.defaultValue || [];
	        if (value[0] && !_moment2.default.isMoment(value[0]) || value[1] && !_moment2.default.isMoment(value[1])) {
	            throw new Error('The value/defaultValue of RangePicker must be a moment object array after `antd@2.0`, ' + 'see: http://u.ant.design/date-picker-value');
	        }
	        _this.state = {
	            value: value,
	            open: props.open
	        };
	        return _this;
	    }

	    RangePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if ('value' in nextProps) {
	            this.setState({
	                value: nextProps.value || []
	            });
	        }
	        if ('open' in nextProps) {
	            this.setState({
	                open: nextProps.open
	            });
	        }
	    };

	    RangePicker.prototype.setValue = function setValue(value) {
	        this.handleChange(value);
	        if (!this.props.showTime) {
	            this.setState({ open: false });
	        }
	    };

	    RangePicker.prototype.render = function render() {
	        var _classNames,
	            _this2 = this;

	        var props = this.props;
	        var disabledDate = props.disabledDate,
	            disabledTime = props.disabledTime,
	            showTime = props.showTime,
	            showToday = props.showToday,
	            ranges = props.ranges,
	            prefixCls = props.prefixCls,
	            popupStyle = props.popupStyle,
	            style = props.style,
	            onOk = props.onOk,
	            locale = props.locale,
	            format = props.format;

	        var state = this.state;
	        var calendarClassName = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-time', showTime), (0, _defineProperty3.default)(_classNames, prefixCls + '-range-with-ranges', ranges), _classNames));
	        // 需要选择时间时，点击 ok 时才触发 onChange
	        var pickerChangeHandler = {
	            onChange: this.handleChange
	        };
	        var calendarHandler = {
	            onOk: this.handleChange
	        };
	        if (props.timePicker) {
	            pickerChangeHandler.onChange = function (value) {
	                return _this2.handleChange(value);
	            };
	        } else {
	            calendarHandler = {};
	        }
	        var startPlaceholder = 'placeholder' in props ? props.placeholder[0] : locale.lang.rangePlaceholder[0];
	        var endPlaceholder = 'placeholder' in props ? props.placeholder[1] : locale.lang.rangePlaceholder[1];
	        var calendar = _react2.default.createElement(_RangeCalendar2.default, (0, _extends3.default)({}, calendarHandler, { format: format, prefixCls: prefixCls, className: calendarClassName, renderFooter: this.renderFooter, timePicker: props.timePicker, disabledDate: disabledDate, disabledTime: disabledTime, dateInputPlaceholder: [startPlaceholder, endPlaceholder], locale: locale.lang, onOk: onOk, defaultValue: props.defaultPickerValue || [(0, _moment2.default)(), (0, _moment2.default)()], showToday: showToday }));
	        // default width for showTime
	        var pickerStyle = {};
	        if (props.showTime) {
	            pickerStyle.minWidth = 300;
	        }
	        var clearIcon = !props.disabled && props.allowClear && state.value && (state.value[0] || state.value[1]) ? _react2.default.createElement(_icon2.default, { type: 'cross-circle', className: prefixCls + '-picker-clear', onClick: this.clearSelection }) : null;
	        var input = function input(_ref) {
	            var value = _ref.value;

	            var start = value[0];
	            var end = value[1];
	            return _react2.default.createElement(
	                'span',
	                { className: props.pickerInputClass, disabled: props.disabled },
	                _react2.default.createElement('input', { disabled: props.disabled, readOnly: true, value: start && start.format(props.format) || '', placeholder: startPlaceholder, className: prefixCls + '-range-picker-input' }),
	                _react2.default.createElement(
	                    'span',
	                    { className: prefixCls + '-range-picker-separator' },
	                    ' ~ '
	                ),
	                _react2.default.createElement('input', { disabled: props.disabled, readOnly: true, value: end && end.format(props.format) || '', placeholder: endPlaceholder, className: prefixCls + '-range-picker-input' }),
	                clearIcon,
	                _react2.default.createElement('span', { className: prefixCls + '-picker-icon' })
	            );
	        };
	        return _react2.default.createElement(
	            'span',
	            { className: props.pickerClass, style: (0, _objectAssign2.default)({}, style, pickerStyle) },
	            _react2.default.createElement(
	                _Picker2.default,
	                (0, _extends3.default)({}, props, pickerChangeHandler, { calendar: calendar, value: state.value, open: state.open, onOpenChange: this.handleOpenChange, prefixCls: prefixCls + '-picker-container', style: popupStyle }),
	                input
	            )
	        );
	    };

	    return RangePicker;
	}(_react2.default.Component);

	exports.default = RangePicker;

	RangePicker.defaultProps = {
	    prefixCls: 'ant-calendar',
	    allowClear: true,
	    showToday: false
	};
	module.exports = exports['default'];

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(8);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	exports.default = createPicker;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(20);

	var _moment2 = _interopRequireDefault(_moment);

	var _MonthCalendar = __webpack_require__(180);

	var _MonthCalendar2 = _interopRequireDefault(_MonthCalendar);

	var _Picker = __webpack_require__(181);

	var _Picker2 = _interopRequireDefault(_Picker);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _omit = __webpack_require__(23);

	var _omit2 = _interopRequireDefault(_omit);

	var _objectAssign = __webpack_require__(9);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createPicker(TheCalendar) {
	    // use class typescript error
	    var CalenderWrapper = _react2.default.createClass({
	        displayName: 'CalenderWrapper',
	        getDefaultProps: function getDefaultProps() {
	            return {
	                prefixCls: 'ant-calendar',
	                allowClear: true,
	                showToday: true
	            };
	        },
	        getInitialState: function getInitialState() {
	            var props = this.props;
	            var value = props.value || props.defaultValue;
	            if (value && !_moment2.default.isMoment(value)) {
	                throw new Error('The value/defaultValue of DatePicker or MonthPicker must be ' + 'a moment object after `antd@2.0`, see: http://u.ant.design/date-picker-value');
	            }
	            return {
	                value: value,
	                tempValue: undefined
	            };
	        },
	        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	            if ('value' in nextProps) {
	                this.setState({
	                    value: nextProps.value,
	                    tempValue: nextProps.value
	                });
	            }
	        },
	        clearSelection: function clearSelection(e) {
	            e.preventDefault();
	            e.stopPropagation();
	            this.setState({ value: null });
	            this.handleChange(null);
	        },
	        handleChange: function handleChange(value) {
	            var props = this.props;
	            if (!('value' in props)) {
	                this.setState({ value: value });
	            }
	            props.onChange(value, value && value.format(props.format) || '');
	        },
	        handleTempChange: function handleTempChange(tempValue) {
	            this.setState({ tempValue: tempValue });
	        },

	        // Clear temp value and trigger onChange when hide DatePicker[showTime] panel
	        handleOpenChange: function handleOpenChange(open) {
	            var _this = this;

	            var _props = this.props,
	                showTime = _props.showTime,
	                onOpenChange = _props.onOpenChange,
	                onChange = _props.onChange,
	                format = _props.format;

	            if (!open) {
	                (function () {
	                    // tricky code to avoid triggering onChange multiple times
	                    // when click `Now` button
	                    var tempValue = void 0;
	                    _this.setState(function (prevState) {
	                        tempValue = prevState.tempValue;
	                        var nextState = { tempValue: undefined };
	                        if (showTime && tempValue) {
	                            nextState.value = tempValue;
	                            onChange(tempValue, tempValue && tempValue.format(format) || '');
	                        }
	                        return nextState;
	                    });
	                })();
	            }
	            if (onOpenChange) {
	                onOpenChange(open);
	            }
	        },
	        render: function render() {
	            var _classNames,
	                _this2 = this;

	            var props = (0, _omit2.default)(this.props, ['onChange']);
	            var prefixCls = props.prefixCls;
	            var locale = props.locale;
	            var placeholder = 'placeholder' in props ? props.placeholder : locale.lang.placeholder;
	            var disabledTime = props.showTime ? props.disabledTime : null;
	            var calendarClassName = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-time', props.showTime), (0, _defineProperty3.default)(_classNames, prefixCls + '-month', _MonthCalendar2.default === TheCalendar), _classNames));
	            // 需要选择时间时，点击 ok 时才触发 onChange
	            var pickerChangeHandler = {};
	            var calendarHandler = {};
	            if (props.showTime) {
	                calendarHandler = {
	                    // fix https://github.com/ant-design/ant-design/issues/1902
	                    onSelect: function onSelect(value) {
	                        _this2.handleTempChange(value);
	                    }
	                };
	            } else {
	                pickerChangeHandler = {
	                    onChange: this.handleChange
	                };
	            }
	            var calendar = _react2.default.createElement(TheCalendar, (0, _extends3.default)({}, calendarHandler, { disabledDate: props.disabledDate, disabledTime: disabledTime, locale: locale.lang, timePicker: props.timePicker, defaultValue: props.defaultPickerValue || (0, _moment2.default)(), dateInputPlaceholder: placeholder, prefixCls: prefixCls, className: calendarClassName, onOk: props.onOk, format: props.format, showToday: props.showToday }));
	            // default width for showTime
	            var pickerStyle = {};
	            if (props.showTime) {
	                pickerStyle.minWidth = 154;
	            }
	            var clearIcon = !props.disabled && props.allowClear && this.state.value ? _react2.default.createElement(_icon2.default, { type: 'cross-circle', className: prefixCls + '-picker-clear', onClick: this.clearSelection }) : null;
	            var input = function input(_ref) {
	                var value = _ref.value;
	                return _react2.default.createElement(
	                    'span',
	                    null,
	                    _react2.default.createElement('input', { disabled: props.disabled, readOnly: true, value: value && value.format(props.format) || '', placeholder: placeholder, className: props.pickerInputClass }),
	                    clearIcon,
	                    _react2.default.createElement('span', { className: prefixCls + '-picker-icon' })
	                );
	            };
	            return _react2.default.createElement(
	                'span',
	                { className: props.pickerClass, style: (0, _objectAssign2.default)({}, props.style, pickerStyle) },
	                _react2.default.createElement(
	                    _Picker2.default,
	                    (0, _extends3.default)({}, props, pickerChangeHandler, { onOpenChange: this.handleOpenChange, calendar: calendar, value: this.state.tempValue || this.state.value, prefixCls: prefixCls + '-picker-container', style: props.popupStyle }),
	                    input
	                )
	            );
	        }
	    });
	    return CalenderWrapper;
	}
	module.exports = exports['default'];

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(8);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	exports.default = wrapPicker;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Panel = __webpack_require__(263);

	var _Panel2 = _interopRequireDefault(_Panel);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _warning = __webpack_require__(65);

	var _warning2 = _interopRequireDefault(_warning);

	var _getLocale = __webpack_require__(170);

	var _getLocale2 = _interopRequireDefault(_getLocale);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getColumns(_ref) {
	    var showHour = _ref.showHour,
	        showMinute = _ref.showMinute,
	        showSecond = _ref.showSecond;

	    var column = 0;
	    if (showHour) {
	        column += 1;
	    }
	    if (showMinute) {
	        column += 1;
	    }
	    if (showSecond) {
	        column += 1;
	    }
	    return column;
	}
	function wrapPicker(Picker, defaultFormat) {
	    var PickerWrapper = _react2.default.createClass({
	        displayName: 'PickerWrapper',

	        contextTypes: {
	            antLocale: _react.PropTypes.object
	        },
	        getDefaultProps: function getDefaultProps() {
	            return {
	                format: defaultFormat || 'YYYY-MM-DD',
	                transitionName: 'slide-up',
	                popupStyle: {},
	                onChange: function onChange() {},
	                onOk: function onOk() {},
	                onOpenChange: function onOpenChange() {},

	                locale: {},
	                align: {
	                    offset: [0, -9]
	                },
	                prefixCls: 'ant-calendar',
	                inputPrefixCls: 'ant-input'
	            };
	        },
	        handleOpenChange: function handleOpenChange(open) {
	            var _props = this.props,
	                onOpenChange = _props.onOpenChange,
	                toggleOpen = _props.toggleOpen;

	            onOpenChange(open);
	            if (toggleOpen) {
	                (0, _warning2.default)(false, '`toggleOpen` is deprecated and will be removed in the future, ' + 'please use `onOpenChange` instead, see: http://u.ant.design/date-picker-on-open-change');
	                toggleOpen({ open: open });
	            }
	        },
	        render: function render() {
	            var _classNames2, _classNames3;

	            var props = this.props;
	            var prefixCls = props.prefixCls,
	                inputPrefixCls = props.inputPrefixCls;

	            var pickerClass = (0, _classnames2.default)((0, _defineProperty3.default)({}, prefixCls + '-picker', true));
	            var pickerInputClass = (0, _classnames2.default)((_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, prefixCls + '-picker-input', true), (0, _defineProperty3.default)(_classNames2, inputPrefixCls, true), (0, _defineProperty3.default)(_classNames2, inputPrefixCls + '-lg', props.size === 'large'), (0, _defineProperty3.default)(_classNames2, inputPrefixCls + '-sm', props.size === 'small'), _classNames2));
	            var locale = (0, _getLocale2.default)(props, this.context, 'DatePicker', function () {
	                return __webpack_require__(173);
	            });
	            var timeFormat = props.showTime && props.showTime.format || 'HH:mm:ss';
	            var rcTimePickerProps = {
	                format: timeFormat,
	                showSecond: timeFormat.indexOf('ss') >= 0,
	                showMinute: timeFormat.indexOf('mm') >= 0,
	                showHour: timeFormat.indexOf('HH') >= 0
	            };
	            var columns = getColumns(rcTimePickerProps);
	            var timePickerCls = (0, _classnames2.default)((_classNames3 = {}, (0, _defineProperty3.default)(_classNames3, prefixCls + '-time-picker-1-column', columns === 1), (0, _defineProperty3.default)(_classNames3, prefixCls + '-time-picker-2-columns', columns === 2), _classNames3));
	            var timePicker = props.showTime ? _react2.default.createElement(_Panel2.default, (0, _extends3.default)({}, rcTimePickerProps, props.showTime, { prefixCls: prefixCls + '-time-picker', className: timePickerCls, placeholder: locale.timePickerLocale.placeholder, transitionName: 'slide-up' })) : null;
	            return _react2.default.createElement(Picker, (0, _extends3.default)({}, props, { pickerClass: pickerClass, pickerInputClass: pickerInputClass, locale: locale, timePicker: timePicker, onOpenChange: this.handleOpenChange }));
	        }
	    });
	    return PickerWrapper;
	}
	module.exports = exports['default'];

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = exports.FormComponent = undefined;

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

	var _createDOMForm = __webpack_require__(321);

	var _createDOMForm2 = _interopRequireDefault(_createDOMForm);

	var _PureRenderMixin = __webpack_require__(19);

	var _PureRenderMixin2 = _interopRequireDefault(_PureRenderMixin);

	var _omit = __webpack_require__(23);

	var _omit2 = _interopRequireDefault(_omit);

	var _objectAssign = __webpack_require__(9);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _warning = __webpack_require__(65);

	var _warning2 = _interopRequireDefault(_warning);

	var _FormItem = __webpack_require__(281);

	var _FormItem2 = _interopRequireDefault(_FormItem);

	var _constants = __webpack_require__(174);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FormComponent = exports.FormComponent = function (_React$Component) {
	    (0, _inherits3.default)(FormComponent, _React$Component);

	    function FormComponent() {
	        (0, _classCallCheck3.default)(this, FormComponent);
	        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	    }

	    return FormComponent;
	}(_react2.default.Component);

	var Form = function (_React$Component2) {
	    (0, _inherits3.default)(Form, _React$Component2);

	    function Form(props) {
	        (0, _classCallCheck3.default)(this, Form);

	        var _this2 = (0, _possibleConstructorReturn3.default)(this, _React$Component2.call(this, props));

	        (0, _warning2.default)(!props.form, 'It is unnecessary to pass `form` to `Form` after antd@1.7.0.');
	        return _this2;
	    }

	    Form.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _PureRenderMixin2.default.shouldComponentUpdate.apply(this, args);
	    };

	    Form.prototype.render = function render() {
	        var _classNames;

	        var _props = this.props,
	            prefixCls = _props.prefixCls,
	            _props$className = _props.className,
	            className = _props$className === undefined ? '' : _props$className,
	            inline = _props.inline,
	            horizontal = _props.horizontal,
	            vertical = _props.vertical;

	        var formClassName = (0, _classnames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-horizontal', horizontal), (0, _defineProperty3.default)(_classNames, prefixCls + '-vertical', vertical), (0, _defineProperty3.default)(_classNames, prefixCls + '-inline', inline), _classNames), className);
	        var formProps = (0, _omit2.default)(this.props, ['prefixCls', 'className', 'inline', 'horizontal', 'vertical', 'form']);
	        return _react2.default.createElement('form', (0, _extends3.default)({}, formProps, { className: formClassName }));
	    };

	    return Form;
	}(_react2.default.Component);

	exports.default = Form;

	Form.defaultProps = {
	    prefixCls: 'ant-form',
	    onSubmit: function onSubmit(e) {
	        e.preventDefault();
	    }
	};
	Form.propTypes = {
	    prefixCls: _react2.default.PropTypes.string,
	    vertical: _react2.default.PropTypes.bool,
	    horizontal: _react2.default.PropTypes.bool,
	    inline: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.any,
	    onSubmit: _react2.default.PropTypes.func
	};
	Form.Item = _FormItem2.default;
	Form.create = function (options) {
	    var formWrapper = (0, _createDOMForm2.default)((0, _objectAssign2.default)({
	        fieldNameProp: 'id'
	    }, options, {
	        fieldMetaProp: _constants.FIELD_META_PROP
	    }));
	    /* eslint-disable react/prefer-es6-class */
	    return function (Component) {
	        return formWrapper(_react2.default.createClass({
	            propTypes: {
	                form: _react.PropTypes.object.isRequired
	            },
	            childContextTypes: {
	                form: _react.PropTypes.object.isRequired
	            },
	            getChildContext: function getChildContext() {
	                return {
	                    form: this.props.form
	                };
	            },
	            componentWillMount: function componentWillMount() {
	                this.__getFieldProps = this.props.form.getFieldProps;
	            },
	            deprecatedGetFieldProps: function deprecatedGetFieldProps(name, option) {
	                (0, _warning2.default)(false, '`getFieldProps` is not recommended, please use `getFieldDecorator` instead, ' + 'see: http://u.ant.design/get-field-decorator');
	                return this.__getFieldProps(name, option);
	            },
	            render: function render() {
	                this.props.form.getFieldProps = this.deprecatedGetFieldProps;
	                var withRef = {};
	                if (options && options.withRef) {
	                    withRef.ref = 'formWrappedComponent';
	                }
	                return _react2.default.createElement(Component, (0, _extends3.default)({}, this.props, withRef));
	            }
	        }));
	    };
	};

/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _defineProperty2 = __webpack_require__(8);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _PureRenderMixin = __webpack_require__(19);

	var _PureRenderMixin2 = _interopRequireDefault(_PureRenderMixin);

	var _row = __webpack_require__(60);

	var _row2 = _interopRequireDefault(_row);

	var _col = __webpack_require__(49);

	var _col2 = _interopRequireDefault(_col);

	var _constants = __webpack_require__(174);

	var _warning = __webpack_require__(65);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FormItem = function (_React$Component) {
	    (0, _inherits3.default)(FormItem, _React$Component);

	    function FormItem() {
	        (0, _classCallCheck3.default)(this, FormItem);
	        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	    }

	    FormItem.prototype.componentDidMount = function componentDidMount() {
	        (0, _warning2.default)(this.getControls(this.props.children, true).length <= 1, '`Form.Item` cannot generate `validateStatus` and `help` automatically, ' + 'while there are more than one `getFieldDecorator` in it.');
	    };

	    FormItem.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _PureRenderMixin2.default.shouldComponentUpdate.apply(this, args);
	    };

	    FormItem.prototype.getHelpMsg = function getHelpMsg() {
	        var context = this.context;
	        var props = this.props;
	        if (props.help === undefined && context.form) {
	            return this.getId() ? (context.form.getFieldError(this.getId()) || []).join(', ') : '';
	        }
	        return props.help;
	    };

	    FormItem.prototype.getControls = function getControls(children, recursively) {
	        var controls = [];
	        var childrenArray = _react2.default.Children.toArray(children);
	        for (var i = 0; i < childrenArray.length; i++) {
	            if (!recursively && controls.length > 0) {
	                break;
	            }
	            var child = childrenArray[i];
	            if (child.type === FormItem) {
	                continue;
	            }
	            if (!child.props) {
	                continue;
	            }
	            if (_constants.FIELD_META_PROP in child.props) {
	                controls.push(child);
	            } else if (child.props.children) {
	                controls = controls.concat(this.getControls(child.props.children, recursively));
	            }
	        }
	        return controls;
	    };

	    FormItem.prototype.getOnlyControl = function getOnlyControl() {
	        var child = this.getControls(this.props.children, false)[0];
	        return child !== undefined ? child : null;
	    };

	    FormItem.prototype.getChildProp = function getChildProp(prop) {
	        var child = this.getOnlyControl();
	        return child && child.props && child.props[prop];
	    };

	    FormItem.prototype.getId = function getId() {
	        return this.getChildProp('id');
	    };

	    FormItem.prototype.getMeta = function getMeta() {
	        return this.getChildProp(_constants.FIELD_META_PROP);
	    };

	    FormItem.prototype.renderHelp = function renderHelp() {
	        var prefixCls = this.props.prefixCls;
	        var help = this.getHelpMsg();
	        return help ? _react2.default.createElement(
	            'div',
	            { className: prefixCls + '-explain', key: 'help' },
	            help
	        ) : null;
	    };

	    FormItem.prototype.renderExtra = function renderExtra() {
	        var _props = this.props,
	            prefixCls = _props.prefixCls,
	            extra = _props.extra;

	        return extra ? _react2.default.createElement(
	            'div',
	            { className: prefixCls + '-extra' },
	            extra
	        ) : null;
	    };

	    FormItem.prototype.getValidateStatus = function getValidateStatus() {
	        var _context$form = this.context.form,
	            isFieldValidating = _context$form.isFieldValidating,
	            getFieldError = _context$form.getFieldError,
	            getFieldValue = _context$form.getFieldValue;

	        var fieldId = this.getId();
	        if (!fieldId) {
	            return '';
	        }
	        if (isFieldValidating(fieldId)) {
	            return 'validating';
	        }
	        if (!!getFieldError(fieldId)) {
	            return 'error';
	        }
	        var fieldValue = getFieldValue(fieldId);
	        if (fieldValue !== undefined && fieldValue !== null && fieldValue !== '') {
	            return 'success';
	        }
	        return '';
	    };

	    FormItem.prototype.renderValidateWrapper = function renderValidateWrapper(c1, c2, c3) {
	        var classes = '';
	        var form = this.context.form;
	        var props = this.props;
	        var validateStatus = props.validateStatus === undefined && form ? this.getValidateStatus() : props.validateStatus;
	        if (validateStatus) {
	            classes = (0, _classnames2.default)({
	                'has-feedback': props.hasFeedback,
	                'has-success': validateStatus === 'success',
	                'has-warning': validateStatus === 'warning',
	                'has-error': validateStatus === 'error',
	                'is-validating': validateStatus === 'validating'
	            });
	        }
	        return _react2.default.createElement(
	            'div',
	            { className: this.props.prefixCls + '-item-control ' + classes },
	            c1,
	            c2,
	            c3
	        );
	    };

	    FormItem.prototype.renderWrapper = function renderWrapper(children) {
	        var wrapperCol = this.props.wrapperCol;
	        return _react2.default.createElement(
	            _col2.default,
	            (0, _extends3.default)({}, wrapperCol, { key: 'wrapper' }),
	            children
	        );
	    };

	    FormItem.prototype.isRequired = function isRequired() {
	        if (this.context.form) {
	            var meta = this.getMeta() || {};
	            var validate = meta.validate || [];
	            return validate.filter(function (item) {
	                return !!item.rules;
	            }).some(function (item) {
	                return item.rules.some(function (rule) {
	                    return rule.required;
	                });
	            });
	        }
	        return false;
	    };

	    FormItem.prototype.renderLabel = function renderLabel() {
	        var props = this.props;
	        var labelCol = props.labelCol;
	        var required = props.required === undefined ? this.isRequired() : props.required;
	        var className = (0, _classnames2.default)((0, _defineProperty3.default)({}, props.prefixCls + '-item-required', required));
	        // remove user input colon
	        var label = props.label;
	        if (typeof label === 'string' && label.trim() !== '') {
	            label = props.label.replace(/[：|:]\s*$/, '');
	        }
	        return props.label ? _react2.default.createElement(
	            _col2.default,
	            (0, _extends3.default)({}, labelCol, { key: 'label', className: props.prefixCls + '-item-label' }),
	            _react2.default.createElement(
	                'label',
	                { htmlFor: props.id || this.getId(), className: className },
	                label
	            )
	        ) : null;
	    };

	    FormItem.prototype.renderChildren = function renderChildren() {
	        var props = this.props;
	        var children = _react2.default.Children.map(props.children, function (child) {
	            if (child && typeof child.type === 'function' && !child.props.size) {
	                return _react2.default.cloneElement(child, { size: 'large' });
	            }
	            return child;
	        });
	        return [this.renderLabel(), this.renderWrapper(this.renderValidateWrapper(children, this.renderHelp(), this.renderExtra()))];
	    };

	    FormItem.prototype.renderFormItem = function renderFormItem(children) {
	        var _itemClassName;

	        var props = this.props;
	        var prefixCls = props.prefixCls;
	        var style = props.style;
	        var itemClassName = (_itemClassName = {}, (0, _defineProperty3.default)(_itemClassName, prefixCls + '-item', true), (0, _defineProperty3.default)(_itemClassName, prefixCls + '-item-with-help', !!this.getHelpMsg()), (0, _defineProperty3.default)(_itemClassName, prefixCls + '-item-no-colon', !props.colon), (0, _defineProperty3.default)(_itemClassName, '' + props.className, !!props.className), _itemClassName);
	        return _react2.default.createElement(
	            _row2.default,
	            { className: (0, _classnames2.default)(itemClassName), style: style },
	            children
	        );
	    };

	    FormItem.prototype.render = function render() {
	        var children = this.renderChildren();
	        return this.renderFormItem(children);
	    };

	    return FormItem;
	}(_react2.default.Component);

	exports.default = FormItem;

	FormItem.defaultProps = {
	    hasFeedback: false,
	    prefixCls: 'ant-form',
	    colon: true
	};
	FormItem.propTypes = {
	    prefixCls: _react2.default.PropTypes.string,
	    label: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.node]),
	    labelCol: _react2.default.PropTypes.object,
	    help: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.node, _react2.default.PropTypes.bool]),
	    validateStatus: _react2.default.PropTypes.oneOf(['', 'success', 'warning', 'error', 'validating']),
	    hasFeedback: _react2.default.PropTypes.bool,
	    wrapperCol: _react2.default.PropTypes.object,
	    className: _react2.default.PropTypes.string,
	    id: _react2.default.PropTypes.string,
	    children: _react2.default.PropTypes.node,
	    colon: _react2.default.PropTypes.bool
	};
	FormItem.contextTypes = {
	    form: _react2.default.PropTypes.object
	};
	module.exports = exports['default'];

/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(250);

/***/ },

/***/ 288:
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

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _rcProgress = __webpack_require__(330);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _splitObject3 = __webpack_require__(18);

	var _splitObject4 = _interopRequireDefault(_splitObject3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var statusColorMap = {
	    normal: '#108ee9',
	    exception: '#ff5500',
	    success: '#87d068'
	};

	var Progress = function (_React$Component) {
	    (0, _inherits3.default)(Progress, _React$Component);

	    function Progress() {
	        (0, _classCallCheck3.default)(this, Progress);
	        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	    }

	    Progress.prototype.render = function render() {
	        var _classNames;

	        var _splitObject = (0, _splitObject4.default)(this.props, ['prefixCls', 'status', 'format', 'percent', 'trailColor', 'type', 'strokeWidth', 'width', 'className', 'showInfo']),
	            _splitObject2 = (0, _slicedToArray3.default)(_splitObject, 2),
	            _splitObject2$ = _splitObject2[0],
	            prefixCls = _splitObject2$.prefixCls,
	            status = _splitObject2$.status,
	            format = _splitObject2$.format,
	            percent = _splitObject2$.percent,
	            trailColor = _splitObject2$.trailColor,
	            type = _splitObject2$.type,
	            strokeWidth = _splitObject2$.strokeWidth,
	            width = _splitObject2$.width,
	            className = _splitObject2$.className,
	            showInfo = _splitObject2$.showInfo,
	            restProps = _splitObject2[1];

	        var progressStatus = parseInt(percent, 10) >= 100 && !('status' in this.props) ? 'success' : status || 'normal';
	        var progressInfo = void 0;
	        var progress = void 0;
	        var textFormatter = format || function (percentNumber) {
	            return percentNumber + '%';
	        };
	        if (showInfo) {
	            var text = void 0;
	            var iconType = type === 'circle' ? '' : '-circle';
	            if (progressStatus === 'exception') {
	                text = format ? textFormatter(percent) : _react2.default.createElement(_icon2.default, { type: 'cross' + iconType });
	            } else if (progressStatus === 'success') {
	                text = format ? textFormatter(percent) : _react2.default.createElement(_icon2.default, { type: 'check' + iconType });
	            } else {
	                text = textFormatter(percent);
	            }
	            progressInfo = _react2.default.createElement(
	                'span',
	                { className: prefixCls + '-text' },
	                text
	            );
	        }
	        if (type === 'line') {
	            var percentStyle = {
	                width: percent + '%',
	                height: strokeWidth || 10
	            };
	            progress = _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: prefixCls + '-outer' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: prefixCls + '-inner' },
	                        _react2.default.createElement('div', { className: prefixCls + '-bg', style: percentStyle })
	                    )
	                ),
	                progressInfo
	            );
	        } else if (type === 'circle') {
	            var circleSize = width || 132;
	            var circleStyle = {
	                width: circleSize,
	                height: circleSize,
	                fontSize: circleSize * 0.16 + 6
	            };
	            var circleWidth = strokeWidth || 6;
	            progress = _react2.default.createElement(
	                'div',
	                { className: prefixCls + '-inner', style: circleStyle },
	                _react2.default.createElement(_rcProgress.Circle, { percent: percent, strokeWidth: circleWidth, trailWidth: circleWidth, strokeColor: statusColorMap[progressStatus], trailColor: trailColor }),
	                progressInfo
	            );
	        }
	        var classString = (0, _classnames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-' + type, true), (0, _defineProperty3.default)(_classNames, prefixCls + '-status-' + progressStatus, true), (0, _defineProperty3.default)(_classNames, prefixCls + '-show-info', showInfo), _classNames), className);
	        return _react2.default.createElement(
	            'div',
	            (0, _extends3.default)({}, restProps, { className: classString }),
	            progress
	        );
	    };

	    return Progress;
	}(_react2.default.Component);

	exports.default = Progress;

	Progress.defaultProps = {
	    type: 'line',
	    percent: 0,
	    showInfo: true,
	    trailColor: '#f3f3f3',
	    prefixCls: 'ant-progress'
	};
	Progress.propTypes = {
	    status: _react.PropTypes.oneOf(['normal', 'exception', 'active', 'success']),
	    type: _react.PropTypes.oneOf(['line', 'circle']),
	    showInfo: _react.PropTypes.bool,
	    percent: _react.PropTypes.number,
	    width: _react.PropTypes.number,
	    strokeWidth: _react.PropTypes.number,
	    trailColor: _react.PropTypes.string,
	    format: _react.PropTypes.func
	};
	module.exports = exports['default'];

/***/ },

/***/ 391:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 392:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 395:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 492:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = getFileItem;
	function getFileItem(file, fileList) {
	    var matchWay = !file.uid ? 'byName' : 'byUid';
	    var target = fileList.filter(function (item) {
	        if (matchWay === 'byName') {
	            return item.name === file.name;
	        }
	        return item.uid === file.uid;
	    })[0];
	    return target;
	}
	module.exports = exports['default'];

/***/ },

/***/ 493:
/***/ function(module, exports) {

	"use strict";

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _defineProperty2 = __webpack_require__(8);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _progress = __webpack_require__(114);

	var _progress2 = _interopRequireDefault(_progress);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
	var previewFile = function previewFile(file, callback) {
	    var reader = new FileReader();
	    reader.onloadend = function () {
	        return callback(reader.result);
	    };
	    reader.readAsDataURL(file);
	};

	var UploadList = function (_React$Component) {
	    (0, _inherits3.default)(UploadList, _React$Component);

	    function UploadList() {
	        (0, _classCallCheck3.default)(this, UploadList);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));

	        _this.handleClose = function (file) {
	            var onRemove = _this.props.onRemove;
	            if (onRemove) {
	                onRemove(file);
	            }
	        };
	        _this.handlePreview = function (file, e) {
	            var onPreview = _this.props.onPreview;

	            if (!onPreview) {
	                return;
	            }
	            e.preventDefault();
	            return onPreview(file);
	        };
	        return _this;
	    }

	    UploadList.prototype.componentDidUpdate = function componentDidUpdate() {
	        var _this2 = this;

	        if (this.props.listType !== 'picture' && this.props.listType !== 'picture-card') {
	            return;
	        }
	        (this.props.items || []).forEach(function (file) {
	            if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File) || file.thumbUrl !== undefined) {
	                return;
	            }
	            /*eslint-disable */
	            file.thumbUrl = '';
	            /*eslint-enable */
	            previewFile(file.originFileObj, function (previewDataUrl) {
	                /*eslint-disable */
	                file.thumbUrl = previewDataUrl;
	                /*eslint-enable */
	                _this2.forceUpdate();
	            });
	        });
	    };

	    UploadList.prototype.render = function render() {
	        var _this3 = this,
	            _classNames2;

	        var _props = this.props,
	            prefixCls = _props.prefixCls,
	            _props$items = _props.items,
	            items = _props$items === undefined ? [] : _props$items,
	            listType = _props.listType;

	        var list = items.map(function (file) {
	            var _classNames;

	            var progress = void 0;
	            var icon = _react2.default.createElement(_icon2.default, { type: 'paper-clip' });
	            if (listType === 'picture' || listType === 'picture-card') {
	                if (file.status === 'uploading' || !file.thumbUrl && !file.url) {
	                    if (listType === 'picture-card') {
	                        icon = _react2.default.createElement(
	                            'div',
	                            { className: prefixCls + '-list-item-uploading-text' },
	                            '\u6587\u4EF6\u4E0A\u4F20\u4E2D'
	                        );
	                    } else {
	                        icon = _react2.default.createElement(_icon2.default, { className: prefixCls + '-list-item-thumbnail', type: 'picture' });
	                    }
	                } else {
	                    icon = _react2.default.createElement(
	                        'a',
	                        { className: prefixCls + '-list-item-thumbnail', onClick: function onClick(e) {
	                                return _this3.handlePreview(file, e);
	                            }, href: file.url || file.thumbUrl, target: '_blank', rel: 'noopener noreferrer' },
	                        _react2.default.createElement('img', { src: file.url || file.thumbUrl, alt: file.name })
	                    );
	                }
	            }
	            if (file.status === 'uploading') {
	                progress = _react2.default.createElement(
	                    'div',
	                    { className: prefixCls + '-list-item-progress' },
	                    _react2.default.createElement(_progress2.default, (0, _extends3.default)({ type: 'line' }, _this3.props.progressAttr, { percent: file.percent }))
	                );
	            }
	            var infoUploadingClass = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-list-item', true), (0, _defineProperty3.default)(_classNames, prefixCls + '-list-item-' + file.status, true), _classNames));
	            var preview = file.url ? _react2.default.createElement(
	                'a',
	                { href: file.url, target: '_blank', rel: 'noopener noreferrer', className: prefixCls + '-list-item-name', onClick: function onClick(e) {
	                        return _this3.handlePreview(file, e);
	                    } },
	                file.name
	            ) : _react2.default.createElement(
	                'span',
	                { className: prefixCls + '-list-item-name', onClick: function onClick(e) {
	                        return _this3.handlePreview(file, e);
	                    } },
	                file.name
	            );
	            var style = file.url || file.thumbUrl ? undefined : {
	                pointerEvents: 'none',
	                opacity: 0.5
	            };
	            var actions = listType === 'picture-card' && file.status !== 'uploading' ? _react2.default.createElement(
	                'span',
	                null,
	                _react2.default.createElement(
	                    'a',
	                    { href: file.url || file.thumbUrl, target: '_blank', rel: 'noopener noreferrer', style: style, onClick: function onClick(e) {
	                            return _this3.handlePreview(file, e);
	                        } },
	                    _react2.default.createElement(_icon2.default, { type: 'eye-o' })
	                ),
	                _react2.default.createElement(_icon2.default, { type: 'delete', title: 'Remove file', onClick: function onClick() {
	                        return _this3.handleClose(file);
	                    } })
	            ) : _react2.default.createElement(_icon2.default, { type: 'cross', title: 'Remove file', onClick: function onClick() {
	                    return _this3.handleClose(file);
	                } });
	            return _react2.default.createElement(
	                'div',
	                { className: infoUploadingClass, key: file.uid },
	                _react2.default.createElement(
	                    'div',
	                    { className: prefixCls + '-list-item-info' },
	                    icon,
	                    preview,
	                    actions
	                ),
	                progress
	            );
	        });
	        var listClassNames = (0, _classnames2.default)((_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, prefixCls + '-list', true), (0, _defineProperty3.default)(_classNames2, prefixCls + '-list-' + listType, true), _classNames2));
	        return _react2.default.createElement(
	            _rcAnimate2.default,
	            { transitionName: prefixCls + '-margin-top', component: 'div', className: listClassNames },
	            list
	        );
	    };

	    return UploadList;
	}(_react2.default.Component);

	exports.default = UploadList;

	UploadList.defaultProps = {
	    listType: 'text',
	    progressAttr: {
	        strokeWidth: 3,
	        showInfo: false
	    },
	    prefixCls: 'ant-upload'
	};
	module.exports = exports['default'];

/***/ },

/***/ 758:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'advanced-search': __webpack_require__(1538),
	    'coordinated': __webpack_require__(1539),
	    'customized-form-controls': __webpack_require__(1540),
	    'dynamic-form-item': __webpack_require__(1541),
	    'form-in-modal': __webpack_require__(1542),
	    'global-state': __webpack_require__(1543),
	    'horizontal-login': __webpack_require__(1544),
	    'normal-login': __webpack_require__(1545),
	    'register': __webpack_require__(1546),
	    'time-related-controls': __webpack_require__(1547),
	    'validate-other': __webpack_require__(1548),
	    'validate-static': __webpack_require__(1549),
	    'without-form-create': __webpack_require__(1550),
	}

/***/ },

/***/ 1538:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style7 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _style8 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style9 = __webpack_require__(74);

	var _row = __webpack_require__(60);

	var _row2 = _interopRequireDefault(_row);

	var _style10 = __webpack_require__(62);

	var _col = __webpack_require__(49);

	var _col2 = _interopRequireDefault(_col);

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style11 = __webpack_require__(21);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _style12 = __webpack_require__(67);

	var _form = __webpack_require__(66);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "三列栅格式的表单排列方式，常用于数据表格的高级搜索。"], ["p", "有部分定制的样式代码，由于输入标签长度不确定，需要根据具体情况自行调整。"]],
	    "en-US": [["p", "Three columns layout is often used for advanced searching of data table."], ["p", "Because the width of label is not fixed, you may need to adjust it by customizing its style."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "高级搜索",
	      "en-US": "Advanced search"
	    },
	    "filename": "components/form/demo/advanced-search.md",
	    "id": "components-form-demo-advanced-search"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">,</span> Col<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">AdvancedSearchForm</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    expand<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleSearch <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleReset <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">resetFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  toggle <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> expand <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> expand<span class=\"token punctuation\">:</span> <span class=\"token operator\">!</span>expand <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      labelCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">19</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// To generate mock Form.Item</span>\n    <span class=\"token keyword\">const</span> children <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">10</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      children<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">8</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>i<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token operator\">&lt;</span>FormItem <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span> label<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token template-string\"><span class=\"token string\">`Field </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n            <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`field-</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>placeholder<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token keyword\">const</span> expand <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>expand<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> shownCount <span class=\"token operator\">=</span> expand <span class=\"token operator\">?</span> children<span class=\"token punctuation\">.</span>length <span class=\"token punctuation\">:</span> <span class=\"token number\">6</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span>\n        <span class=\"token attr-name\">horizontal</span>\n        <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-advanced-search-form<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSearch<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Row</span> <span class=\"token attr-name\">gutter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">40</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span>children<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> shownCount<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Row</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Row</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">24</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> textAlign<span class=\"token punctuation\">:</span> <span class=\"token string\">'right'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">htmlType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Search<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleReset<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              Clear\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span><span class=\"token punctuation\">,</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>toggle<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              Collapse <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>expand <span class=\"token operator\">?</span> <span class=\"token string\">'up'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'down'</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Row</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> WrappedAdvancedSearchForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>AdvancedSearchForm<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>WrappedAdvancedSearchForm</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>search-result-list<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Search Result List<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var FormItem = _form2.default.Item;
	    var AdvancedSearchForm = function (_React$Component) {
	      (0, _inherits3.default)(AdvancedSearchForm, _React$Component);

	      function AdvancedSearchForm() {
	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, AdvancedSearchForm);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { expand: false }, _this.handleSearch = function (e) {
	          e.preventDefault();_this.props.form.validateFields(function (err, values) {
	            console.log('Received values of form: ', values);
	          });
	        }, _this.handleReset = function () {
	          _this.props.form.resetFields();
	        }, _this.toggle = function () {
	          var expand = _this.state.expand;
	          _this.setState({ expand: !expand });
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      }

	      AdvancedSearchForm.prototype.render = function render() {
	        var getFieldDecorator = this.props.form.getFieldDecorator;
	        var formItemLayout = { labelCol: { span: 5 }, wrapperCol: { span: 19 } }; // To generate mock Form.Item
	        var children = [];for (var i = 0; i < 10; i++) {
	          children.push(_react2.default.createElement(
	            _col2.default,
	            { span: 8, key: i },
	            _react2.default.createElement(
	              FormItem,
	              (0, _extends3.default)({}, formItemLayout, { label: 'Field ' + i }),
	              getFieldDecorator('field-' + i)(_react2.default.createElement(_input2.default, { placeholder: 'placeholder' }))
	            )
	          ));
	        }var expand = this.state.expand;var shownCount = expand ? children.length : 6;return _react2.default.createElement(
	          _form2.default,
	          { horizontal: true, className: 'ant-advanced-search-form', onSubmit: this.handleSearch },
	          _react2.default.createElement(
	            _row2.default,
	            { gutter: 40 },
	            children.slice(0, shownCount)
	          ),
	          _react2.default.createElement(
	            _row2.default,
	            null,
	            _react2.default.createElement(
	              _col2.default,
	              { span: 24, style: { textAlign: 'right' } },
	              _react2.default.createElement(
	                _button2.default,
	                { type: 'primary', htmlType: 'submit' },
	                'Search'
	              ),
	              _react2.default.createElement(
	                _button2.default,
	                { style: { marginLeft: 8 }, onClick: this.handleReset },
	                'Clear'
	              ),
	              _react2.default.createElement(
	                'a',
	                { style: { marginLeft: 8, fontSize: 12 }, onClick: this.toggle },
	                'Collapse ',
	                _react2.default.createElement(_icon2.default, { type: expand ? 'up' : 'down' })
	              )
	            )
	          )
	        );
	      };

	      return AdvancedSearchForm;
	    }(_react2.default.Component);

	    var WrappedAdvancedSearchForm = _form2.default.create()(AdvancedSearchForm);return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(WrappedAdvancedSearchForm, null),
	      _react2.default.createElement(
	        'div',
	        { className: 'search-result-list' },
	        'Search Result List'
	      )
	    );
	  },
	  "style": "#components-form-demo-advanced-search .ant-advanced-search-form {\n  padding: 24px;\n  background: #fbfbfb;\n  border: 1px solid #d9d9d9;\n  border-radius: 6px;\n}\n#components-form-demo-advanced-search .ant-form-horizontal {\n  max-width: none;\n}\n#components-form-demo-advanced-search .search-result-list {\n  margin-top: 16px;\n  border: 1px dashed #e9e9e9;\n  border-radius: 6px;\n  background-color: #fafafa;\n  min-height: 200px;\n  text-align: center;\n  padding-top: 80px;\n}\n",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-form-demo-advanced-search</span> <span class=\"token class\">.ant-advanced-search-form</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fbfbfb</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#d9d9d9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1539:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(21);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	var _style7 = __webpack_require__(34);

	var _select = __webpack_require__(31);

	var _select2 = _interopRequireDefault(_select);

	var _style8 = __webpack_require__(67);

	var _form = __webpack_require__(66);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "使用 ", ["code", "setFieldsValue"], " 来动态设置其他控件的值。"]],
	    "en-US": [["p", "Use ", ["code", "setFieldsValue"], " to set other control's value programmaticly."]]
	  },
	  "meta": {
	    "order": 12,
	    "title": {
	      "zh-CN": "表单联动",
	      "en-US": "Coordinated Controls"
	    },
	    "filename": "components/form/demo/coordinated.md",
	    "id": "components-form-demo-coordinated"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Select<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">.</span>Option<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">handleSubmit</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleSelectChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">setFieldsValue</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      note<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`Hi, </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>value <span class=\"token operator\">===</span> <span class=\"token string\">'male'</span> <span class=\"token operator\">?</span> <span class=\"token string\">'man'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'lady'</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">!`</span></span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n          <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Note<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">labelCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'note'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your note!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n          <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Gender<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">labelCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'gender'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select your gender!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n            onChange<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSelectChange<span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Select</span> <span class=\"token attr-name\">a</span> <span class=\"token attr-name\">option</span> <span class=\"token attr-name\">and</span> <span class=\"token attr-name\">change</span> <span class=\"token attr-name\">input</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">above\"</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>male<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>male<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>female<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>female<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">htmlType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            Submit\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var FormItem = _form2.default.Item;var Option = _select2.default.Option;var App = _form2.default.create()(_react2.default.createClass({
	      displayName: 'App',
	      handleSubmit: function handleSubmit(e) {
	        e.preventDefault();this.props.form.validateFields(function (err, values) {
	          if (!err) {
	            console.log('Received values of form: ', values);
	          }
	        });
	      },
	      handleSelectChange: function handleSelectChange(value) {
	        console.log(value);this.props.form.setFieldsValue({ note: 'Hi, ' + (value === 'male' ? 'man' : 'lady') + '!' });
	      },
	      render: function render() {
	        var getFieldDecorator = this.props.form.getFieldDecorator;
	        return _react2.default.createElement(
	          _form2.default,
	          { onSubmit: this.handleSubmit },
	          _react2.default.createElement(
	            FormItem,
	            { label: 'Note', labelCol: { span: 4 }, wrapperCol: { span: 8 } },
	            getFieldDecorator('note', { rules: [{ required: true, message: 'Please input your note!' }] })(_react2.default.createElement(_input2.default, null))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            { label: 'Gender', labelCol: { span: 4 }, wrapperCol: { span: 8 } },
	            getFieldDecorator('gender', { rules: [{ required: true, message: 'Please select your gender!' }], onChange: this.handleSelectChange })(_react2.default.createElement(
	              _select2.default,
	              { placeholder: 'Select a option and change input text above' },
	              _react2.default.createElement(
	                Option,
	                { value: 'male' },
	                'male'
	              ),
	              _react2.default.createElement(
	                Option,
	                { value: 'female' },
	                'female'
	              )
	            ))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            { wrapperCol: { span: 8, offset: 4 } },
	            _react2.default.createElement(
	              _button2.default,
	              { type: 'primary', htmlType: 'submit' },
	              'Submit'
	            )
	          )
	        );
	      }
	    }));return _react2.default.createElement(App, null);
	  }
	};

/***/ },

/***/ 1540:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(21);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	var _style7 = __webpack_require__(34);

	var _select = __webpack_require__(31);

	var _select2 = _interopRequireDefault(_select);

	var _style8 = __webpack_require__(67);

	var _form = __webpack_require__(66);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "自定义或第三方的表单控件，也可以与 Form 组件一起使用。只要该组件遵循以下的约定："], ["blockquote", ["ul", ["li", ["p", "提供受控属性 ", ["code", "value"], " 或其它与 ", ["a", {
	      "title": null,
	      "href": "http://ant.design/components/form/#getFieldDecorator-参数"
	    }, ["code", "valuePropName"]], " 的值同名的属性。"]], ["li", ["p", "提供 ", ["code", "onChange"], " 事件或 ", ["a", {
	      "title": null,
	      "href": "http://ant.design/components/form/#getFieldDecorator-参数"
	    }, ["code", "trigger"]], " 的值同名的事件。"]]]]],
	    "en-US": [["p", "Customized or third-party form controls can be used in Form, too. Controls must follow these conventions:"], ["blockquote", ["ul", ["li", ["p", "It has a controlled property ", ["code", "value"], " or other name which is equal to the value of ", ["a", {
	      "title": null,
	      "href": "http://ant.design/components/form/?locale=en-US#getFieldDecorator's-parameters"
	    }, ["code", "valuePropName"]], "."]], ["li", ["p", "It has event ", ["code", "onChange"], " or an event which name is equal to the value of ", ["a", {
	      "title": null,
	      "href": "http://ant.design/components/form/?locale=en-US#getFieldDecorator's-parameters"
	    }, ["code", "trigger"]], "."]]]]]
	  },
	  "meta": {
	    "order": 7,
	    "title": {
	      "zh-CN": "自定义表单控件",
	      "en-US": "Customized Form Controls"
	    },
	    "filename": "components/form/demo/customized-form-controls.md",
	    "id": "components-form-demo-customized-form-controls"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Select<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">.</span>Option<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> PriceInput <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> value <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>value <span class=\"token operator\">||</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      number<span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">.</span>number <span class=\"token operator\">||</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n      currency<span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">.</span>currency <span class=\"token operator\">||</span> <span class=\"token string\">'rmb'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">componentWillReceiveProps</span><span class=\"token punctuation\">(</span>nextProps<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// Should be a controlled component.</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token string\">'value'</span> <span class=\"token keyword\">in</span> nextProps<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> value <span class=\"token operator\">=</span> nextProps<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleNumberChange</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> number <span class=\"token operator\">=</span> <span class=\"token function\">parseInt</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value <span class=\"token operator\">||</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">10</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token function\">isNaN</span><span class=\"token punctuation\">(</span>number<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span><span class=\"token punctuation\">(</span><span class=\"token string\">'value'</span> <span class=\"token keyword\">in</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> number <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">triggerChange</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> number <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleCurrencyChange</span><span class=\"token punctuation\">(</span>currency<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span><span class=\"token punctuation\">(</span><span class=\"token string\">'value'</span> <span class=\"token keyword\">in</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> currency <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">triggerChange</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> currency <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">triggerChange</span><span class=\"token punctuation\">(</span>changedValue<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// Should provide an event to pass value to Form.</span>\n    <span class=\"token keyword\">const</span> onChange <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>onChange<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>Object<span class=\"token punctuation\">.</span><span class=\"token function\">assign</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">,</span> changedValue<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> size <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> state <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span>\n          <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>text<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">size</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>size<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>state<span class=\"token punctuation\">.</span>number<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleNumberChange<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'65%'</span><span class=\"token punctuation\">,</span> marginRight<span class=\"token punctuation\">:</span> <span class=\"token string\">'3%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span>\n          <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>state<span class=\"token punctuation\">.</span>currency<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">size</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>size<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'32%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleCurrencyChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>rmb<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>RMB<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>dollar<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Dollar<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Demo <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">handleSubmit</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">checkPrice</span><span class=\"token punctuation\">(</span>rule<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">,</span> callback<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">.</span>number <span class=\"token operator\">></span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Price must greater than zero!'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">inline</span> <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Price<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'price'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            initialValue<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> number<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> currency<span class=\"token punctuation\">:</span> <span class=\"token string\">'rmb'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> validator<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>checkPrice <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>PriceInput</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">htmlType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Submit<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var FormItem = _form2.default.Item;var Option = _select2.default.Option;var PriceInput = _react2.default.createClass({
	      displayName: 'PriceInput',
	      getInitialState: function getInitialState() {
	        var value = this.props.value || {};return { number: value.number || 0,
	          currency: value.currency || 'rmb' };
	      },
	      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        // Should be a controlled component.
	        if ('value' in nextProps) {
	          var value = nextProps.value;this.setState(value);
	        }
	      },
	      handleNumberChange: function handleNumberChange(e) {
	        var number = parseInt(e.target.value || 0, 10);if (isNaN(number)) {
	          return;
	        }if (!('value' in this.props)) {
	          this.setState({ number: number });
	        }this.triggerChange({ number: number });
	      },
	      handleCurrencyChange: function handleCurrencyChange(currency) {
	        if (!('value' in this.props)) {
	          this.setState({
	            currency: currency });
	        }this.triggerChange({ currency: currency
	        });
	      },
	      triggerChange: function triggerChange(changedValue) {
	        // Should provide an event to pass value to Form.
	        var onChange = this.props.onChange;if (onChange) {
	          onChange(Object.assign({}, this.state, changedValue));
	        }
	      },
	      render: function render() {
	        var size = this.props.size;

	        var state = this.state;return _react2.default.createElement(
	          'span',
	          null,
	          _react2.default.createElement(_input2.default, { type: 'text', size: size, value: state.number, onChange: this.handleNumberChange, style: { width: '65%', marginRight: '3%' } }),
	          _react2.default.createElement(
	            _select2.default,
	            { value: state.currency, size: size, style: { width: '32%' }, onChange: this.handleCurrencyChange },
	            _react2.default.createElement(
	              Option,
	              { value: 'rmb' },
	              'RMB'
	            ),
	            _react2.default.createElement(
	              Option,
	              { value: 'dollar' },
	              'Dollar'
	            )
	          )
	        );
	      }
	    });var Demo = _form2.default.create()(_react2.default.createClass({
	      displayName: 'Demo',
	      handleSubmit: function handleSubmit(e) {
	        e.preventDefault();this.props.form.validateFields(function (err, values) {
	          if (!err) {
	            console.log('Received values of form: ', values);
	          }
	        });
	      },
	      checkPrice: function checkPrice(rule, value, callback) {
	        if (value.number > 0) {
	          callback();return;
	        }callback('Price must greater than zero!');
	      },
	      render: function render() {
	        var getFieldDecorator = this.props.form.getFieldDecorator;

	        return _react2.default.createElement(
	          _form2.default,
	          { inline: true, onSubmit: this.handleSubmit },
	          _react2.default.createElement(
	            FormItem,
	            { label: 'Price' },
	            getFieldDecorator('price', { initialValue: { number: 0, currency: 'rmb' }, rules: [{ validator: this.checkPrice }] })(_react2.default.createElement(PriceInput, null))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            null,
	            _react2.default.createElement(
	              _button2.default,
	              { type: 'primary', htmlType: 'submit' },
	              'Submit'
	            )
	          )
	        );
	      }
	    }));return _react2.default.createElement(Demo, null);
	  }
	};

/***/ },

/***/ 1541:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style6 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _style7 = __webpack_require__(21);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _style8 = __webpack_require__(67);

	var _form = __webpack_require__(66);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "动态增加、减少表单项。"]],
	    "en-US": [["p", "Add or remove form items dynamically."]]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "动态增减表单项",
	      "en-US": "Dynamic Form Item"
	    },
	    "filename": "components/form/demo/dynamic-form-item.md",
	    "id": "components-form-demo-dynamic-form-item"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">let</span> uuid <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">DynamicFieldSet</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">componentWillMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">setFieldsValue</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      keys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  remove <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>k<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> form <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// can use data-binding to get</span>\n    <span class=\"token keyword\">const</span> keys <span class=\"token operator\">=</span> form<span class=\"token punctuation\">.</span><span class=\"token function\">getFieldValue</span><span class=\"token punctuation\">(</span><span class=\"token string\">'keys'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// We need at least one passenger</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>keys<span class=\"token punctuation\">.</span>length <span class=\"token operator\">===</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// can use data-binding to set</span>\n    form<span class=\"token punctuation\">.</span><span class=\"token function\">setFieldsValue</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      keys<span class=\"token punctuation\">:</span> keys<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>key <span class=\"token operator\">=</span><span class=\"token operator\">></span> key <span class=\"token operator\">!==</span> k<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  add <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    uuid<span class=\"token operator\">++</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> form <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// can use data-binding to get</span>\n    <span class=\"token keyword\">const</span> keys <span class=\"token operator\">=</span> form<span class=\"token punctuation\">.</span><span class=\"token function\">getFieldValue</span><span class=\"token punctuation\">(</span><span class=\"token string\">'keys'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> nextKeys <span class=\"token operator\">=</span> keys<span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span>uuid<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// can use data-binding to set</span>\n    <span class=\"token comment\" spellcheck=\"true\">// important! notify form to detect changes</span>\n    form<span class=\"token punctuation\">.</span><span class=\"token function\">setFieldsValue</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      keys<span class=\"token punctuation\">:</span> nextKeys<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator<span class=\"token punctuation\">,</span> getFieldValue <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      labelCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayoutWithOutLabel <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">20</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">const</span> keys <span class=\"token operator\">=</span> <span class=\"token function\">getFieldValue</span><span class=\"token punctuation\">(</span><span class=\"token string\">'keys'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formItems <span class=\"token operator\">=</span> keys<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>k<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span><span class=\"token punctuation\">(</span>index <span class=\"token operator\">===</span> <span class=\"token number\">0</span> <span class=\"token operator\">?</span> formItemLayout <span class=\"token punctuation\">:</span> formItemLayoutWithOutLabel<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>index <span class=\"token operator\">===</span> <span class=\"token number\">0</span> <span class=\"token operator\">?</span> <span class=\"token string\">'Passengers'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">}</span>\n          required<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span>\n          key<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>k<span class=\"token punctuation\">}</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`names-</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>k<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            validateTrigger<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'onChange'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'onBlur'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n              required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n              whitespace<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n              message<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Please input passenger's name or delete this field.\"</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>passenger</span> <span class=\"token attr-name\">name\"</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'60%'</span><span class=\"token punctuation\">,</span> marginRight<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span>\n            <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>dynamic-delete-button<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>minus-circle-o<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">disabled</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>keys<span class=\"token punctuation\">.</span>length <span class=\"token operator\">===</span> <span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">remove</span><span class=\"token punctuation\">(</span>k<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">horizontal</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>formItems<span class=\"token punctuation\">}</span>\n        <span class=\"token operator\">&lt;</span>FormItem <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayoutWithOutLabel<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>dashed<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>add<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'60%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>plus<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Add\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> WrappedDynamicFieldSet <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>DynamicFieldSet<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>WrappedDynamicFieldSet</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var FormItem = _form2.default.Item;var uuid = 0;
	    var DynamicFieldSet = function (_React$Component) {
	      (0, _inherits3.default)(DynamicFieldSet, _React$Component);

	      function DynamicFieldSet() {
	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, DynamicFieldSet);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.remove = function (k) {
	          var form = _this.props.form; // can use data-binding to get

	          var keys = form.getFieldValue('keys'); // We need at least one passenger
	          if (keys.length === 1) {
	            return;
	          } // can use data-binding to set
	          form.setFieldsValue({ keys: keys.filter(function (key) {
	              return key !== k;
	            }) });
	        }, _this.add = function () {
	          uuid++;var form = _this.props.form; // can use data-binding to get

	          var keys = form.getFieldValue('keys');var nextKeys = keys.concat(uuid); // can use data-binding to set
	          // important! notify form to detect changes
	          form.setFieldsValue({ keys: nextKeys });
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      }

	      DynamicFieldSet.prototype.componentWillMount = function componentWillMount() {
	        this.props.form.setFieldsValue({ keys: [0] });
	      };

	      DynamicFieldSet.prototype.render = function render() {
	        var _this2 = this;

	        var _props$form = this.props.form,
	            getFieldDecorator = _props$form.getFieldDecorator,
	            getFieldValue = _props$form.getFieldValue;
	        var formItemLayout = { labelCol: { span: 4 }, wrapperCol: { span: 20 } };var formItemLayoutWithOutLabel = { wrapperCol: { span: 20, offset: 4 } };var keys = getFieldValue('keys');var formItems = keys.map(function (k, index) {
	          return _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, index === 0 ? formItemLayout : formItemLayoutWithOutLabel, { label: index === 0 ? 'Passengers' : '', required: false, key: k }),
	            getFieldDecorator('names-' + k, { validateTrigger: ['onChange', 'onBlur'], rules: [{ required: true, whitespace: true, message: "Please input passenger's name or delete this field." }] })(_react2.default.createElement(_input2.default, { placeholder: 'passenger name', style: { width: '60%', marginRight: 8 } })),
	            _react2.default.createElement(_icon2.default, { className: 'dynamic-delete-button', type: 'minus-circle-o', disabled: keys.length === 1, onClick: function onClick() {
	                return _this2.remove(k);
	              } })
	          );
	        });return _react2.default.createElement(
	          _form2.default,
	          { horizontal: true },
	          formItems,
	          _react2.default.createElement(
	            FormItem,
	            formItemLayoutWithOutLabel,
	            _react2.default.createElement(
	              _button2.default,
	              { type: 'dashed', onClick: this.add, style: { width: '60%' } },
	              _react2.default.createElement(_icon2.default, { type: 'plus' }),
	              ' Add'
	            )
	          )
	        );
	      };

	      return DynamicFieldSet;
	    }(_react2.default.Component);

	    var WrappedDynamicFieldSet = _form2.default.create()(DynamicFieldSet);return _react2.default.createElement(WrappedDynamicFieldSet, null);
	  },
	  "style": ".dynamic-delete-button {\n  cursor: pointer;\n  position: relative;\n  top: 4px;\n  font-size: 24px;\n  color: #999;\n  transition: all .3s;\n}\n.dynamic-delete-button:hover {\n  color: #777;\n}\n.dynamic-delete-button[disabled] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.dynamic-delete-button</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">cursor</span><span class=\"token punctuation\">:</span> pointer<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.dynamic-delete-button</span><span class=\"token pseudo-class\">:hover</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#777</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.dynamic-delete-button</span><span class=\"token attribute\">[disabled]</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">cursor</span><span class=\"token punctuation\">:</span> not-allowed<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">opacity</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0.5</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1542:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style6 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style7 = __webpack_require__(104);

	var _modal = __webpack_require__(96);

	var _modal2 = _interopRequireDefault(_modal);

	var _style8 = __webpack_require__(44);

	var _radio = __webpack_require__(41);

	var _radio2 = _interopRequireDefault(_radio);

	var _style9 = __webpack_require__(21);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	var _style10 = __webpack_require__(67);

	var _form = __webpack_require__(66);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "当用户访问一个展示了某个列表的页面，想新建一项但又不想跳转页面时，可以用 Modal 弹出一个表单，用户填写必要信息后创建新的项。"]],
	    "en-US": [["p", "When user visit a page with a list of items, and want to create a new item. The page can popup a form in Modal, then let user fills in the form to create an item."]]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "弹出层中的新建表单",
	      "en-US": "Form in Modal to Create"
	    },
	    "filename": "components/form/demo/form-in-modal.md",
	    "id": "components-form-demo-form-in-modal"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button<span class=\"token punctuation\">,</span> Modal<span class=\"token punctuation\">,</span> Form<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Radio <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> CollectionCreateForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n  <span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> visible<span class=\"token punctuation\">,</span> onCancel<span class=\"token punctuation\">,</span> onCreate<span class=\"token punctuation\">,</span> form <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> props<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Modal</span>\n        <span class=\"token attr-name\">visible</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>visible<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Create</span> <span class=\"token attr-name\">a</span> <span class=\"token attr-name\">new</span> <span class=\"token attr-name\">collection\"</span>\n        <span class=\"token attr-name\">okText</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Create<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">onCancel</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onCancel<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onOk</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onCreate<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">vertical</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Title<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'title'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n              rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input the title of collection!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Description<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'description'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>textarea<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>collection-create-form_last-form-item<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'modifier'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n              initialValue<span class=\"token punctuation\">:</span> <span class=\"token string\">'public'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Group</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>public<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Public<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>private<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Private<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Group</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Modal</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> CollectionsPage <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span> visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">showModal</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleCancel</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleCreate</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> form <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      form<span class=\"token punctuation\">.</span><span class=\"token function\">resetFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">saveFormRef</span><span class=\"token punctuation\">(</span>form<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>form <span class=\"token operator\">=</span> form<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>showModal<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>New <span class=\"token class-name\">Collection</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CollectionCreateForm</span>\n          <span class=\"token attr-name\">ref</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>saveFormRef<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">visible</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>visible<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onCancel</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleCancel<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onCreate</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleCreate<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CollectionsPage</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var FormItem = _form2.default.Item;var CollectionCreateForm = _form2.default.create()(function (props) {
	      var visible = props.visible,
	          onCancel = props.onCancel,
	          onCreate = props.onCreate,
	          form = props.form;
	      var getFieldDecorator = form.getFieldDecorator;
	      return _react2.default.createElement(
	        _modal2.default,
	        { visible: visible, title: 'Create a new collection', okText: 'Create', onCancel: onCancel, onOk: onCreate },
	        _react2.default.createElement(
	          _form2.default,
	          { vertical: true },
	          _react2.default.createElement(
	            FormItem,
	            { label: 'Title' },
	            getFieldDecorator('title', { rules: [{ required: true, message: 'Please input the title of collection!' }] })(_react2.default.createElement(_input2.default, null))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            { label: 'Description' },
	            getFieldDecorator('description')(_react2.default.createElement(_input2.default, { type: 'textarea' }))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            { className: 'collection-create-form_last-form-item' },
	            getFieldDecorator('modifier', {
	              initialValue: 'public' })(_react2.default.createElement(
	              _radio2.default.Group,
	              null,
	              _react2.default.createElement(
	                _radio2.default,
	                { value: 'public' },
	                'Public'
	              ),
	              _react2.default.createElement(
	                _radio2.default,
	                { value: 'private' },
	                'Private'
	              )
	            ))
	          )
	        )
	      );
	    });var CollectionsPage = _react2.default.createClass({
	      displayName: 'CollectionsPage',
	      getInitialState: function getInitialState() {
	        return { visible: false };
	      },
	      showModal: function showModal() {
	        this.setState({ visible: true });
	      },
	      handleCancel: function handleCancel() {
	        this.setState({ visible: false });
	      },
	      handleCreate: function handleCreate() {
	        var _this = this;

	        var form = this.form;form.validateFields(function (err, values) {
	          if (err) {
	            return;
	          }console.log('Received values of form: ', values);form.resetFields();_this.setState({ visible: false });
	        });
	      },
	      saveFormRef: function saveFormRef(form) {
	        this.form = form;
	      },
	      render: function render() {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _button2.default,
	            { type: 'primary', onClick: this.showModal },
	            'New Collection'
	          ),
	          _react2.default.createElement(CollectionCreateForm, { ref: this.saveFormRef, visible: this.state.visible, onCancel: this.handleCancel, onCreate: this.handleCreate })
	        );
	      }
	    });return _react2.default.createElement(CollectionsPage, null);
	  },
	  "style": ".collection-create-form_last-form-item {\n  margin-bottom: 0;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.collection-create-form_last-form-item</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1543:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(21);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style4 = __webpack_require__(67);

	var _form = __webpack_require__(66);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "通过使用 ", ["code", "onFieldsChange"], " 与 ", ["code", "mapPropsToFields"], "，可以把表单的数据存储到上层组件或者 ", ["a", {
	      "title": null,
	      "href": "https://github.com/reactjs/redux"
	    }, "Redux"], "、", ["a", {
	      "title": null,
	      "href": "https://github.com/dvajs/dva"
	    }, "dva"], " 中。"]],
	    "en-US": [["p", "We can store form data into upper component or ", ["a", {
	      "title": null,
	      "href": "https://github.com/reactjs/redux"
	    }, "Redux"], " or ", ["a", {
	      "title": null,
	      "href": "https://github.com/dvajs/dva"
	    }, "dva"], " by using ", ["code", "onFieldsChange"], " and ", ["code", "mapPropsToFields"], "."]]
	  },
	  "meta": {
	    "order": 8,
	    "title": {
	      "zh-CN": "表单数据存储于上层组件",
	      "en-US": "Store Form Data into Upper Component"
	    },
	    "filename": "components/form/demo/global-state.md",
	    "id": "components-form-demo-global-state"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> CustomizedForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">onFieldsChange</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">,</span> changedFields<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    props<span class=\"token punctuation\">.</span><span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>changedFields<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">mapPropsToFields</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      username<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token operator\">...</span>props<span class=\"token punctuation\">.</span>username<span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> props<span class=\"token punctuation\">.</span>username<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">.</span><span class=\"token function\">toUpperCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">inline</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Username<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'username'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n          rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Username is required!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Demo <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      fields<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        username<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n          value<span class=\"token punctuation\">:</span> <span class=\"token string\">'benjycui'</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleFormChange</span><span class=\"token punctuation\">(</span>changedFields<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      fields<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> <span class=\"token operator\">...</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>fields<span class=\"token punctuation\">,</span> <span class=\"token operator\">...</span>changedFields <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> fields <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>fields<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>CustomizedForm <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>fields<span class=\"token punctuation\">}</span> onChange<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleFormChange<span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>pre</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>language-bash<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span>JSON<span class=\"token punctuation\">.</span><span class=\"token function\">stringify</span><span class=\"token punctuation\">(</span>fields<span class=\"token punctuation\">,</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>pre</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var FormItem = _form2.default.Item;
	    var CustomizedForm = _form2.default.create({
	      onFieldsChange: function onFieldsChange(props, changedFields) {
	        props.onChange(changedFields);
	      },
	      mapPropsToFields: function mapPropsToFields(props) {
	        return { username: (0, _extends3.default)({}, props.username, { value: props.username.value.toUpperCase() }) };
	      }
	    })(function (props) {
	      var getFieldDecorator = props.form.getFieldDecorator;
	      return _react2.default.createElement(
	        _form2.default,
	        { inline: true },
	        _react2.default.createElement(
	          FormItem,
	          { label: 'Username' },
	          getFieldDecorator('username', { rules: [{ required: true, message: 'Username is required!' }] })(_react2.default.createElement(_input2.default, null))
	        )
	      );
	    });
	    var Demo = _react2.default.createClass({
	      displayName: 'Demo',
	      getInitialState: function getInitialState() {
	        return { fields: { username: {
	              value: 'benjycui' } } };
	      },
	      handleFormChange: function handleFormChange(changedFields) {
	        this.setState({ fields: (0, _extends3.default)({}, this.state.fields, changedFields) });
	      },
	      render: function render() {
	        var fields = this.state.fields;return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(CustomizedForm, (0, _extends3.default)({}, fields, { onChange: this.handleFormChange })),
	          _react2.default.createElement(
	            'pre',
	            { className: 'language-bash' },
	            JSON.stringify(fields, null, 2)
	          )
	        );
	      }
	    });return _react2.default.createElement(Demo, null);
	  },
	  "style": "\n#components-form-demo-global-state .language-bash {\n  max-width: 400px;\n  border-radius: 6px;\n  margin-top: 24px;\n}\n"
	};

/***/ },

/***/ 1544:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(21);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	var _style7 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _style8 = __webpack_require__(67);

	var _form = __webpack_require__(66);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "水平登录栏，常用在顶部导航栏中。"]],
	    "en-US": [["p", "Horizontal login form is often used in navigation bar."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "水平登录栏",
	      "en-US": "Horizontal Login Form"
	    },
	    "filename": "components/form/demo/horizontal-login.md",
	    "id": "components-form-demo-horizontal-login"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> HorizontalLoginForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">handleSubmit</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">inline</span> <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'userName'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your username!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">addonBefore={&lt;Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span> placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Username\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'password'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your Password!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">addonBefore={&lt;Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>lock<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"password\"</span> placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Password\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">htmlType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Log <span class=\"token keyword\">in</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>HorizontalLoginForm</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var FormItem = _form2.default.Item;var HorizontalLoginForm = _form2.default.create()(_react2.default.createClass({
	      displayName: 'HorizontalLoginForm',
	      handleSubmit: function handleSubmit(e) {
	        e.preventDefault();this.props.form.validateFields(function (err, values) {
	          if (!err) {
	            console.log('Received values of form: ', values);
	          }
	        });
	      },
	      render: function render() {
	        var getFieldDecorator = this.props.form.getFieldDecorator;
	        return _react2.default.createElement(
	          _form2.default,
	          { inline: true, onSubmit: this.handleSubmit },
	          _react2.default.createElement(
	            FormItem,
	            null,
	            getFieldDecorator('userName', { rules: [{ required: true, message: 'Please input your username!' }] })(_react2.default.createElement(_input2.default, { addonBefore: _react2.default.createElement(_icon2.default, { type: 'user' }), placeholder: 'Username' }))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            null,
	            getFieldDecorator('password', { rules: [{ required: true, message: 'Please input your Password!' }] })(_react2.default.createElement(_input2.default, { addonBefore: _react2.default.createElement(_icon2.default, { type: 'lock' }), type: 'password', placeholder: 'Password' }))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            null,
	            _react2.default.createElement(
	              _button2.default,
	              { type: 'primary', htmlType: 'submit' },
	              'Log in'
	            )
	          )
	        );
	      }
	    }));return _react2.default.createElement(HorizontalLoginForm, null);
	  }
	};

/***/ },

/***/ 1545:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style6 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style7 = __webpack_require__(56);

	var _checkbox = __webpack_require__(40);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _style8 = __webpack_require__(21);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	var _style9 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _style10 = __webpack_require__(67);

	var _form = __webpack_require__(66);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "普通的登录框，可以容纳更多的元素。"]],
	    "en-US": [["p", "Normal login form which can contain more elements."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "登录框",
	      "en-US": "Login Form"
	    },
	    "filename": "components/form/demo/normal-login.md",
	    "id": "components-form-demo-normal-login"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Checkbox <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> NormalLoginForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">handleSubmit</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>login-form<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'userName'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your username!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">addonBefore={&lt;Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span> placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Username\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'password'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your Password!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">addonBefore={&lt;Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>lock<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"password\"</span> placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Password\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'remember'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            valuePropName<span class=\"token punctuation\">:</span> <span class=\"token string\">'checked'</span><span class=\"token punctuation\">,</span>\n            initialValue<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Checkbox</span><span class=\"token punctuation\">></span></span>Remember me<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Checkbox</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>login-form-forgot<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Forgot password<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">htmlType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>login-form-button<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            Log <span class=\"token keyword\">in</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n          Or <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span><span class=\"token punctuation\">></span></span>register now<span class=\"token operator\">!</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>NormalLoginForm</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var FormItem = _form2.default.Item;var NormalLoginForm = _form2.default.create()(_react2.default.createClass({
	      displayName: 'NormalLoginForm',
	      handleSubmit: function handleSubmit(e) {
	        e.preventDefault();this.props.form.validateFields(function (err, values) {
	          if (!err) {
	            console.log('Received values of form: ', values);
	          }
	        });
	      },
	      render: function render() {
	        var getFieldDecorator = this.props.form.getFieldDecorator;
	        return _react2.default.createElement(
	          _form2.default,
	          { onSubmit: this.handleSubmit, className: 'login-form' },
	          _react2.default.createElement(
	            FormItem,
	            null,
	            getFieldDecorator('userName', { rules: [{ required: true, message: 'Please input your username!' }] })(_react2.default.createElement(_input2.default, { addonBefore: _react2.default.createElement(_icon2.default, { type: 'user' }), placeholder: 'Username' }))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            null,
	            getFieldDecorator('password', { rules: [{ required: true, message: 'Please input your Password!' }] })(_react2.default.createElement(_input2.default, { addonBefore: _react2.default.createElement(_icon2.default, { type: 'lock' }), type: 'password', placeholder: 'Password' }))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            null,
	            getFieldDecorator('remember', { valuePropName: 'checked', initialValue: true })(_react2.default.createElement(
	              _checkbox2.default,
	              null,
	              'Remember me'
	            )),
	            _react2.default.createElement(
	              'a',
	              { className: 'login-form-forgot' },
	              'Forgot password'
	            ),
	            _react2.default.createElement(
	              _button2.default,
	              { type: 'primary', htmlType: 'submit', className: 'login-form-button' },
	              'Log in'
	            ),
	            'Or ',
	            _react2.default.createElement(
	              'a',
	              null,
	              'register now!'
	            )
	          )
	        );
	      }
	    }));return _react2.default.createElement(NormalLoginForm, null);
	  },
	  "style": "#components-form-demo-normal-login .login-form {\n  max-width: 300px;\n}\n#components-form-demo-normal-login .login-form-forgot {\n  float: right;\n}\n#components-form-demo-normal-login .login-form-button {\n  width: 100%;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-form-demo-normal-login</span> <span class=\"token class\">.login-form</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">max-width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">300</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token id\">#components-form-demo-normal-login</span> <span class=\"token class\">.login-form-forgot</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">float</span><span class=\"token punctuation\">:</span> right<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token id\">#components-form-demo-normal-login</span> <span class=\"token class\">.login-form-button</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1546:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style11 = __webpack_require__(56);

	var _checkbox = __webpack_require__(40);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _style12 = __webpack_require__(74);

	var _row = __webpack_require__(60);

	var _row2 = _interopRequireDefault(_row);

	var _style13 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style14 = __webpack_require__(62);

	var _col = __webpack_require__(49);

	var _col2 = _interopRequireDefault(_col);

	var _style15 = __webpack_require__(112);

	var _cascader = __webpack_require__(111);

	var _cascader2 = _interopRequireDefault(_cascader);

	var _style16 = __webpack_require__(149);

	var _tooltip = __webpack_require__(120);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _style17 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style18 = __webpack_require__(21);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	var _style19 = __webpack_require__(34);

	var _select = __webpack_require__(31);

	var _select2 = _interopRequireDefault(_select);

	var _style20 = __webpack_require__(67);

	var _form = __webpack_require__(66);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "用户填写必须的信息以注册新用户。"]],
	    "en-US": [["p", "Fill in this form to create a new account for you."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "注册新用户",
	      "en-US": "Registration"
	    },
	    "filename": "components/form/demo/register.md",
	    "id": "components-form-demo-register"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Tooltip<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Cascader<span class=\"token punctuation\">,</span> Select<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">,</span> Col<span class=\"token punctuation\">,</span> Checkbox<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">.</span>Option<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> residences <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> RegistrationForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      passwordDirty<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleSubmit</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFieldsAndScroll</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handlePasswordBlur</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> value <span class=\"token operator\">=</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> passwordDirty<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>passwordDirty <span class=\"token operator\">||</span> <span class=\"token operator\">!</span><span class=\"token operator\">!</span>value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">checkPassowrd</span><span class=\"token punctuation\">(</span>rule<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">,</span> callback<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> form <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>value <span class=\"token operator\">&amp;&amp;</span> value <span class=\"token operator\">!==</span> form<span class=\"token punctuation\">.</span><span class=\"token function\">getFieldValue</span><span class=\"token punctuation\">(</span><span class=\"token string\">'password'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Two passwords that you enter is inconsistent!'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">checkConfirm</span><span class=\"token punctuation\">(</span>rule<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">,</span> callback<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> form <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>value <span class=\"token operator\">&amp;&amp;</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>passwordDirty<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token string\">'confirm'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> force<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      labelCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">14</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> tailFormItemLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        span<span class=\"token punctuation\">:</span> <span class=\"token number\">14</span><span class=\"token punctuation\">,</span>\n        offset<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> prefixSelector <span class=\"token operator\">=</span> <span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'prefix'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      initialValue<span class=\"token punctuation\">:</span> <span class=\"token string\">'86'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>icp-selector<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>86<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token operator\">+</span><span class=\"token number\">86</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">horizontal</span> <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"E-mail\"</span>\n          hasFeedback\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'email'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n              type<span class=\"token punctuation\">:</span> <span class=\"token string\">'email'</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'The input is not valid E-mail!'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n              required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your E-mail!'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Password\"</span>\n          hasFeedback\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'password'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n              required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your password!'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n              validator<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>checkConfirm<span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>password<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onBlur</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handlePasswordBlur<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Confirm Password\"</span>\n          hasFeedback\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'confirm'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n              required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please confirm your password!'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n              validator<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>checkPassowrd<span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>password<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n              Nickname<span class=\"token entity\" title=\"&nbsp;\">&amp;nbsp;</span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tooltip</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>What</span> <span class=\"token attr-name\">do</span> <span class=\"token attr-name\">you</span> <span class=\"token attr-name\">want</span> <span class=\"token attr-name\">other</span> <span class=\"token attr-name\">to</span> <span class=\"token attr-name\">call</span> <span class=\"token attr-name\">you?\"</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>question-circle-o<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tooltip</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          hasFeedback\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'nickname'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your nickname!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Habitual Residence\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'residence'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            initialValue<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'array'</span><span class=\"token punctuation\">,</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select your habitual residence!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Cascader</span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>residences<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Phone Number\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'phone'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your phone number!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">addonBefore</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>prefixSelector<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Captcha\"</span>\n          extra<span class=\"token operator\">=</span><span class=\"token string\">\"We must make sure that your are a human.\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Row</span> <span class=\"token attr-name\">gutter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">8</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">12</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'captcha'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n                rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input the captcha you got!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n              <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">12</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Get captcha<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Row</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>tailFormItemLayout<span class=\"token punctuation\">}</span> style<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'agreement'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            valuePropName<span class=\"token punctuation\">:</span> <span class=\"token string\">'checked'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Checkbox</span><span class=\"token punctuation\">></span></span>I had read the <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span><span class=\"token punctuation\">></span></span>agreement<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Checkbox</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>tailFormItemLayout<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">htmlType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Register<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RegistrationForm</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var FormItem = _form2.default.Item;var Option = _select2.default.Option;
	    var residences = [{ value: 'zhejiang', label: 'Zhejiang', children: [{ value: 'hangzhou', label: 'Hangzhou', children: [{ value: 'xihu', label: 'West Lake' }] }] }, { value: 'jiangsu', label: 'Jiangsu', children: [{ value: 'nanjing', label: 'Nanjing', children: [{
	          value: 'zhonghuamen', label: 'Zhong Hua Men' }] }] }];var RegistrationForm = _form2.default.create()(_react2.default.createClass({
	      displayName: 'RegistrationForm',
	      getInitialState: function getInitialState() {
	        return { passwordDirty: false };
	      },
	      handleSubmit: function handleSubmit(e) {
	        e.preventDefault();this.props.form.validateFieldsAndScroll(function (err, values) {
	          if (!err) {
	            console.log('Received values of form: ', values);
	          }
	        });
	      },
	      handlePasswordBlur: function handlePasswordBlur(e) {
	        var value = e.target.value;this.setState({ passwordDirty: this.state.passwordDirty || !!value });
	      },
	      checkPassowrd: function checkPassowrd(rule, value, callback) {
	        var form = this.props.form;if (value && value !== form.getFieldValue('password')) {
	          callback('Two passwords that you enter is inconsistent!');
	        } else {
	          callback();
	        }
	      },
	      checkConfirm: function checkConfirm(rule, value, callback) {
	        var form = this.props.form;if (value && this.state.passwordDirty) {
	          form.validateFields(['confirm'], { force: true });
	        }callback();
	      },
	      render: function render() {
	        var getFieldDecorator = this.props.form.getFieldDecorator;
	        var formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 14 } };var tailFormItemLayout = { wrapperCol: { span: 14, offset: 6 } };var prefixSelector = getFieldDecorator('prefix', { initialValue: '86' })(_react2.default.createElement(
	          _select2.default,
	          { className: 'icp-selector' },
	          _react2.default.createElement(
	            Option,
	            { value: '86' },
	            '+86'
	          )
	        ));return _react2.default.createElement(
	          _form2.default,
	          { horizontal: true, onSubmit: this.handleSubmit },
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'E-mail', hasFeedback: true }),
	            getFieldDecorator('email', { rules: [{ type: 'email', message: 'The input is not valid E-mail!' }, { required: true, message: 'Please input your E-mail!' }] })(_react2.default.createElement(_input2.default, null))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'Password', hasFeedback: true }),
	            getFieldDecorator('password', { rules: [{ required: true, message: 'Please input your password!' }, { validator: this.checkConfirm }] })(_react2.default.createElement(_input2.default, { type: 'password', onBlur: this.handlePasswordBlur }))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'Confirm Password', hasFeedback: true }),
	            getFieldDecorator('confirm', { rules: [{ required: true, message: 'Please confirm your password!' }, { validator: this.checkPassowrd }] })(_react2.default.createElement(_input2.default, { type: 'password' }))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: _react2.default.createElement(
	                'span',
	                null,
	                'Nickname\xA0',
	                _react2.default.createElement(
	                  _tooltip2.default,
	                  { title: 'What do you want other to call you?' },
	                  _react2.default.createElement(_icon2.default, { type: 'question-circle-o' })
	                )
	              ), hasFeedback: true }),
	            getFieldDecorator('nickname', { rules: [{ required: true, message: 'Please input your nickname!' }] })(_react2.default.createElement(_input2.default, null))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'Habitual Residence' }),
	            getFieldDecorator('residence', { initialValue: ['zhejiang', 'hangzhou', 'xihu'], rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }] })(_react2.default.createElement(_cascader2.default, { options: residences }))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'Phone Number' }),
	            getFieldDecorator('phone', { rules: [{ required: true, message: 'Please input your phone number!' }] })(_react2.default.createElement(_input2.default, { addonBefore: prefixSelector }))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'Captcha', extra: 'We must make sure that your are a human.' }),
	            _react2.default.createElement(
	              _row2.default,
	              { gutter: 8 },
	              _react2.default.createElement(
	                _col2.default,
	                { span: 12 },
	                getFieldDecorator('captcha', { rules: [{ required: true, message: 'Please input the captcha you got!' }] })(_react2.default.createElement(_input2.default, { size: 'large' }))
	              ),
	              _react2.default.createElement(
	                _col2.default,
	                { span: 12 },
	                _react2.default.createElement(
	                  _button2.default,
	                  { size: 'large' },
	                  'Get captcha'
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, tailFormItemLayout, { style: { marginBottom: 8 } }),
	            getFieldDecorator('agreement', { valuePropName: 'checked' })(_react2.default.createElement(
	              _checkbox2.default,
	              null,
	              'I had read the ',
	              _react2.default.createElement(
	                'a',
	                null,
	                'agreement'
	              )
	            ))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            tailFormItemLayout,
	            _react2.default.createElement(
	              _button2.default,
	              { type: 'primary', htmlType: 'submit', size: 'large' },
	              'Register'
	            )
	          )
	        );
	      }
	    }));return _react2.default.createElement(RegistrationForm, null);
	  },
	  "style": "#components-form-demo-register .icp-selector {\n  width: 60px;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-form-demo-register</span> <span class=\"token class\">.icp-selector</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">60</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1547:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(76);

	var _timePicker = __webpack_require__(118);

	var _timePicker2 = _interopRequireDefault(_timePicker);

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style7 = __webpack_require__(83);

	var _datePicker = __webpack_require__(82);

	var _datePicker2 = _interopRequireDefault(_datePicker);

	var _style8 = __webpack_require__(67);

	var _form = __webpack_require__(66);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", ["code", "antd@2.0"], " 之后，时间类组件的 ", ["code", "value"], " 改为 ", ["code", "moment"], " 类型，所以在提交前需要预处理。"]],
	    "en-US": [["p", "After ", ["code", "antd@2.0"], ", the ", ["code", "value"], " of time-related components had been changed to ", ["code", "moment"], ". So, we need to pre-process those values."]]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "时间类控件",
	      "en-US": "Time-related Controls"
	    },
	    "filename": "components/form/demo/time-related-controls.md",
	    "id": "components-form-demo-time-related-controls"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> DatePicker<span class=\"token punctuation\">,</span> TimePicker<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> MonthPicker <span class=\"token operator\">=</span> DatePicker<span class=\"token punctuation\">.</span>MonthPicker<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> RangePicker <span class=\"token operator\">=</span> DatePicker<span class=\"token punctuation\">.</span>RangePicker<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> TimeRelatedForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">handleSubmit</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> fieldsValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n\n      <span class=\"token comment\" spellcheck=\"true\">// Should format date value before submit.</span>\n      <span class=\"token keyword\">const</span> rangeValue <span class=\"token operator\">=</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'range-picker'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">const</span> rangeTimeValue <span class=\"token operator\">=</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'range-time-picker'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">const</span> values <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token operator\">...</span>fieldsValue<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'date-picker'</span><span class=\"token punctuation\">:</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'date-picker'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'date-time-picker'</span><span class=\"token punctuation\">:</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'date-time-picker'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'month-picker'</span><span class=\"token punctuation\">:</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'month-picker'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'range-picker'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>rangeValue<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> rangeValue<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'range-time-picker'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          rangeTimeValue<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n          rangeTimeValue<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'time-picker'</span><span class=\"token punctuation\">:</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'time-picker'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      labelCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> config <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'object'</span><span class=\"token punctuation\">,</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select time!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> rangeConfig <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'array'</span><span class=\"token punctuation\">,</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select time!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">horizontal</span> <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"DatePicker\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'date-picker'</span><span class=\"token punctuation\">,</span> config<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"DatePicker[showTime]\"</span>\n        <span class=\"token operator\">></span>\n        <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'date-time-picker'</span><span class=\"token punctuation\">,</span> config<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token attr-name\">showTime</span> <span class=\"token attr-name\">format</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>YYYY-MM-DD</span> <span class=\"token attr-name\"><span class=\"token namespace\">HH:</span><span class=\"token namespace\">mm:</span>ss\"</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"MonthPicker\"</span>\n        <span class=\"token operator\">></span>\n        <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'month-picker'</span><span class=\"token punctuation\">,</span> config<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>MonthPicker</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"RangePicker\"</span>\n        <span class=\"token operator\">></span>\n        <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'range-picker'</span><span class=\"token punctuation\">,</span> rangeConfig<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RangePicker</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"RangePicker[showTime]\"</span>\n        <span class=\"token operator\">></span>\n        <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'range-time-picker'</span><span class=\"token punctuation\">,</span> rangeConfig<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RangePicker</span> <span class=\"token attr-name\">showTime</span> <span class=\"token attr-name\">format</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>YYYY-MM-DD</span> <span class=\"token attr-name\"><span class=\"token namespace\">HH:</span><span class=\"token namespace\">mm:</span>ss\"</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"TimePicker\"</span>\n        <span class=\"token operator\">></span>\n        <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'time-picker'</span><span class=\"token punctuation\">,</span> config<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TimePicker</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">htmlType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Submit<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TimeRelatedForm</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var FormItem = _form2.default.Item;var MonthPicker = _datePicker2.default.MonthPicker;var RangePicker = _datePicker2.default.RangePicker;var TimeRelatedForm = _form2.default.create()(_react2.default.createClass({
	      displayName: 'TimeRelatedForm',
	      handleSubmit: function handleSubmit(e) {
	        e.preventDefault();this.props.form.validateFields(function (err, fieldsValue) {
	          if (err) {
	            return;
	          }
	          // Should format date value before submit.
	          var rangeValue = fieldsValue['range-picker'];
	          var rangeTimeValue = fieldsValue['range-time-picker'];var values = (0, _extends3.default)({}, fieldsValue, { 'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'), 'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'), 'month-picker': fieldsValue['month-picker'].format('YYYY-MM'), 'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')], 'range-time-picker': [rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'), rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss')], 'time-picker': fieldsValue['time-picker'].format('HH:mm:ss') });console.log('Received values of form: ', values);
	        });
	      },
	      render: function render() {
	        var getFieldDecorator = this.props.form.getFieldDecorator;
	        var formItemLayout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };var config = { rules: [{ type: 'object', required: true, message: 'Please select time!' }] };var rangeConfig = { rules: [{ type: 'array', required: true, message: 'Please select time!' }] };return _react2.default.createElement(
	          _form2.default,
	          { horizontal: true, onSubmit: this.handleSubmit },
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'DatePicker' }),
	            getFieldDecorator('date-picker', config)(_react2.default.createElement(_datePicker2.default, null))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'DatePicker[showTime]' }),
	            getFieldDecorator('date-time-picker', config)(_react2.default.createElement(_datePicker2.default, { showTime: true, format: 'YYYY-MM-DD HH:mm:ss' }))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'MonthPicker' }),
	            getFieldDecorator('month-picker', config)(_react2.default.createElement(MonthPicker, null))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'RangePicker' }),
	            getFieldDecorator('range-picker', rangeConfig)(_react2.default.createElement(RangePicker, null))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'RangePicker[showTime]' }),
	            getFieldDecorator('range-time-picker', rangeConfig)(_react2.default.createElement(RangePicker, { showTime: true, format: 'YYYY-MM-DD HH:mm:ss' }))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'TimePicker' }),
	            getFieldDecorator('time-picker', config)(_react2.default.createElement(_timePicker2.default, null))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            { wrapperCol: { span: 16, offset: 8 } },
	            _react2.default.createElement(
	              _button2.default,
	              { type: 'primary', htmlType: 'submit', size: 'large' },
	              'Submit'
	            )
	          )
	        );
	      }
	    }));return _react2.default.createElement(TimeRelatedForm, null);
	  }
	};

/***/ },

/***/ 1548:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style10 = __webpack_require__(151);

	var _upload = __webpack_require__(150);

	var _upload2 = _interopRequireDefault(_upload);

	var _style11 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style12 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _style13 = __webpack_require__(178);

	var _slider = __webpack_require__(177);

	var _slider2 = _interopRequireDefault(_slider);

	var _style14 = __webpack_require__(71);

	var _switch = __webpack_require__(70);

	var _switch2 = _interopRequireDefault(_switch);

	var _style15 = __webpack_require__(144);

	var _inputNumber = __webpack_require__(143);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style16 = __webpack_require__(44);

	var _radio = __webpack_require__(41);

	var _radio2 = _interopRequireDefault(_radio);

	var _style17 = __webpack_require__(34);

	var _select = __webpack_require__(31);

	var _select2 = _interopRequireDefault(_select);

	var _style18 = __webpack_require__(67);

	var _form = __webpack_require__(66);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "以上演示没有出现的表单控件对应的校验演示。"]],
	    "en-US": [["p", "Demostration for validataion configuration for form controls which are not show in the above demos."]]
	  },
	  "meta": {
	    "order": 11,
	    "title": {
	      "zh-CN": "校验其他组件",
	      "en-US": "Other Form Controls"
	    },
	    "filename": "components/form/demo/validate-other.md",
	    "id": "components-form-demo-validate-other"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>\n  Form<span class=\"token punctuation\">,</span> Select<span class=\"token punctuation\">,</span> InputNumber<span class=\"token punctuation\">,</span> Switch<span class=\"token punctuation\">,</span> Radio<span class=\"token punctuation\">,</span>\n  Slider<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Upload<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">.</span>Option<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> RadioButton <span class=\"token operator\">=</span> Radio<span class=\"token punctuation\">.</span>Button<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> RadioGroup <span class=\"token operator\">=</span> Radio<span class=\"token punctuation\">.</span>Group<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Demo <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">handleSubmit</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n\n  <span class=\"token function\">normFile</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>Array<span class=\"token punctuation\">.</span><span class=\"token function\">isArray</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> e<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> e <span class=\"token operator\">&amp;&amp;</span> e<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      labelCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">14</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">horizontal</span> <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Select\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'select'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n              <span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select your country!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please</span> <span class=\"token attr-name\">select</span> <span class=\"token attr-name\">a</span> <span class=\"token attr-name\">country\"</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>china<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>China<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>use<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>U<span class=\"token punctuation\">.</span>S<span class=\"token punctuation\">.</span>A<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Select[multiple]\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'select-multiple'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n              <span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select your favourite colors!'</span><span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'array'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">multiple</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please</span> <span class=\"token attr-name\">select</span> <span class=\"token attr-name\">favourite</span> <span class=\"token attr-name\">colors\"</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>red<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Red<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>green<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Green<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>blue<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Blue<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"InputNumber\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'input-number'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> initialValue<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InputNumber</span> <span class=\"token attr-name\">min</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">max</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">10</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-form-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span> machines<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Switch\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'switch'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> valuePropName<span class=\"token punctuation\">:</span> <span class=\"token string\">'checked'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Slider\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'slider'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Slider</span> <span class=\"token attr-name\">marks</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> <span class=\"token number\">0</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'A'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'B'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">40</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'C'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">60</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'D'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">80</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'E'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">100</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'F'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Radio.Group\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'radio-group'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RadioGroup</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>a<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>item <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>b<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>item <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>c<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>item <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>RadioGroup</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Radio.Button\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'radio-button'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RadioGroup</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RadioButton</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>a<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>item <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>RadioButton</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RadioButton</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>b<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>item <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>RadioButton</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RadioButton</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>c<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>item <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>RadioButton</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>RadioGroup</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Upload\"</span>\n          extra<span class=\"token operator\">=</span><span class=\"token string\">\"longgggggggggggggggggggggggggggggggggg\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'upload'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            valuePropName<span class=\"token punctuation\">:</span> <span class=\"token string\">'fileList'</span><span class=\"token punctuation\">,</span>\n            normalize<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>normFile<span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Upload</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>logo<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">action</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/upload.do<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">listType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>picture<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleUpload<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ghost<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Click to upload\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">htmlType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Submit<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var FormItem = _form2.default.Item;var Option = _select2.default.Option;var RadioButton = _radio2.default.Button;var RadioGroup = _radio2.default.Group;var Demo = _form2.default.create()(_react2.default.createClass({
	      displayName: 'Demo',
	      handleSubmit: function handleSubmit(e) {
	        e.preventDefault();this.props.form.validateFields(function (err, values) {
	          if (!err) {
	            console.log('Received values of form: ', values);
	          }
	        });
	      },
	      normFile: function normFile(e) {
	        if (Array.isArray(e)) {
	          return e;
	        }return e && e.fileList;
	      },
	      render: function render() {
	        var getFieldDecorator = this.props.form.getFieldDecorator;
	        var formItemLayout = { labelCol: { span: 6 }, wrapperCol: {
	            span: 14 } };
	        return _react2.default.createElement(
	          _form2.default,
	          { horizontal: true, onSubmit: this.handleSubmit },
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'Select' }),
	            getFieldDecorator('select', { rules: [{ required: true, message: 'Please select your country!' }] })(_react2.default.createElement(
	              _select2.default,
	              { placeholder: 'Please select a country' },
	              _react2.default.createElement(
	                Option,
	                { value: 'china' },
	                'China'
	              ),
	              _react2.default.createElement(
	                Option,
	                { value: 'use' },
	                'U.S.A'
	              )
	            ))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'Select[multiple]' }),
	            getFieldDecorator('select-multiple', { rules: [{ required: true, message: 'Please select your favourite colors!', type: 'array' }] })(_react2.default.createElement(
	              _select2.default,
	              { multiple: true, placeholder: 'Please select favourite colors' },
	              _react2.default.createElement(
	                Option,
	                { value: 'red' },
	                'Red'
	              ),
	              _react2.default.createElement(
	                Option,
	                { value: 'green' },
	                'Green'
	              ),
	              _react2.default.createElement(
	                Option,
	                { value: 'blue' },
	                'Blue'
	              )
	            ))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'InputNumber' }),
	            getFieldDecorator('input-number', { initialValue: 3 })(_react2.default.createElement(_inputNumber2.default, { min: 1, max: 10 })),
	            _react2.default.createElement(
	              'span',
	              { className: 'ant-form-text' },
	              ' machines'
	            )
	          ),
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'Switch' }),
	            getFieldDecorator('switch', { valuePropName: 'checked' })(_react2.default.createElement(_switch2.default, null))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'Slider' }),
	            getFieldDecorator('slider')(_react2.default.createElement(_slider2.default, { marks: { 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' } }))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'Radio.Group' }),
	            getFieldDecorator('radio-group')(_react2.default.createElement(
	              RadioGroup,
	              null,
	              _react2.default.createElement(
	                _radio2.default,
	                { value: 'a' },
	                'item 1'
	              ),
	              _react2.default.createElement(
	                _radio2.default,
	                { value: 'b' },
	                'item 2'
	              ),
	              _react2.default.createElement(
	                _radio2.default,
	                { value: 'c' },
	                'item 3'
	              )
	            ))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'Radio.Button' }),
	            getFieldDecorator('radio-button')(_react2.default.createElement(
	              RadioGroup,
	              null,
	              _react2.default.createElement(
	                RadioButton,
	                { value: 'a' },
	                'item 1'
	              ),
	              _react2.default.createElement(
	                RadioButton,
	                { value: 'b' },
	                'item 2'
	              ),
	              _react2.default.createElement(
	                RadioButton,
	                { value: 'c' },
	                'item 3'
	              )
	            ))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'Upload', extra: 'longgggggggggggggggggggggggggggggggggg' }),
	            getFieldDecorator('upload', { valuePropName: 'fileList', normalize: this.normFile })(_react2.default.createElement(
	              _upload2.default,
	              { name: 'logo', action: '/upload.do', listType: 'picture', onChange: this.handleUpload },
	              _react2.default.createElement(
	                _button2.default,
	                { type: 'ghost' },
	                _react2.default.createElement(_icon2.default, { type: 'upload' }),
	                ' Click to upload'
	              )
	            ))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            { wrapperCol: { span: 12, offset: 6 } },
	            _react2.default.createElement(
	              _button2.default,
	              { type: 'primary', htmlType: 'submit' },
	              'Submit'
	            )
	          )
	        );
	      }
	    }));return _react2.default.createElement(Demo, null);
	  }
	};

/***/ },

/***/ 1549:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(62);

	var _col = __webpack_require__(49);

	var _col2 = _interopRequireDefault(_col);

	var _style6 = __webpack_require__(83);

	var _datePicker = __webpack_require__(82);

	var _datePicker2 = _interopRequireDefault(_datePicker);

	var _style7 = __webpack_require__(21);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	var _style8 = __webpack_require__(67);

	var _form = __webpack_require__(66);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "我们为表单控件定义了三种校验状态，为 ", ["code", "<FormItem>"], " 定义 ", ["code", "validateStatus"], " 属性即可。"], ["p", "validateStatus: 'success', 'warning', 'error', 'validating'。"], ["p", "另外为输入框添加反馈图标，设置 ", ["code", "<FormItem>"], " 的 ", ["code", "hasFeedback"], " 属性值为 ", ["code", "true"], " 即可。"], ["p", ["strong", "注意"], ": 反馈图标只对 ", ["code", "<Input />"], " 有效。"]],
	    "en-US": [["p", "We provide three kinds of validation status for form. You can use it just define ", ["code", "validateStatus"], " property on ", ["code", "<FormItem>"], "."], ["p", "validateStatus: 'success', 'warning', 'error', 'validating'。"], ["p", "To set ", ["code", "hasFeedback"], " property to ", ["code", "true"], " enable to display feed icon of input control."], ["p", ["strong", "PS"], ": Feed icon is just available for ", ["code", "<Input />"], "."]]
	  },
	  "meta": {
	    "order": 10,
	    "title": {
	      "zh-CN": "校验提示",
	      "en-US": "Validation message"
	    },
	    "filename": "components/form/demo/validate-static.md",
	    "id": "components-form-demo-validate-static"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> DatePicker<span class=\"token punctuation\">,</span> Col <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">horizontal</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n      <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Fail<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">labelCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">validateStatus</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">help</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Should</span> <span class=\"token attr-name\">be</span> <span class=\"token attr-name\">combination</span> <span class=\"token attr-name\">of</span> <span class=\"token attr-name\">numbers</span> <span class=\"token attr-name\">&amp;</span> <span class=\"token attr-name\">alphabets\"</span>\n    <span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>unavailable</span> <span class=\"token attr-name\">choice\"</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n      <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">labelCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">validateStatus</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n      <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Validating<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">labelCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">hasFeedback</span>\n      <span class=\"token attr-name\">validateStatus</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>validating<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">help</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>The</span> <span class=\"token attr-name\">information</span> <span class=\"token attr-name\">is</span> <span class=\"token attr-name\">being</span> <span class=\"token attr-name\">validated...\"</span>\n    <span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>I<span class=\"token punctuation\">'</span>m</span> <span class=\"token attr-name\">the</span> <span class=\"token attr-name\">content</span> <span class=\"token attr-name\">is</span> <span class=\"token attr-name\">being</span> <span class=\"token attr-name\">validated\"</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>validating<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n      <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">labelCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">hasFeedback</span>\n      <span class=\"token attr-name\">validateStatus</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>I<span class=\"token punctuation\">'</span>m</span> <span class=\"token attr-name\">the</span> <span class=\"token attr-name\">content\"</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n      <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">labelCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">hasFeedback</span>\n      <span class=\"token attr-name\">validateStatus</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n      <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Fail<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">labelCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">hasFeedback</span>\n      <span class=\"token attr-name\">validateStatus</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">help</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Should</span> <span class=\"token attr-name\">be</span> <span class=\"token attr-name\">combination</span> <span class=\"token attr-name\">of</span> <span class=\"token attr-name\">numbers</span> <span class=\"token attr-name\">&amp;</span> <span class=\"token attr-name\">alphabets\"</span>\n    <span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>unavailable</span> <span class=\"token attr-name\">choice\"</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n      <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>inline<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">labelCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">help</span>\n    <span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">validateStatus</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">help</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please</span> <span class=\"token attr-name\">select</span> <span class=\"token attr-name\">the</span> <span class=\"token attr-name\">correct</span> <span class=\"token attr-name\">date\"</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-form-split<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token operator\">-</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var FormItem = _form2.default.Item;return _react2.default.createElement(
	      _form2.default,
	      { horizontal: true },
	      _react2.default.createElement(
	        FormItem,
	        { label: 'Fail', labelCol: { span: 5
	          }, wrapperCol: { span: 12 }, validateStatus: 'error', help: 'Should be combination of numbers & alphabets' },
	        _react2.default.createElement(_input2.default, { placeholder: 'unavailable choice', id: 'error' })
	      ),
	      _react2.default.createElement(
	        FormItem,
	        { label: 'Warning', labelCol: { span: 5 }, wrapperCol: { span: 12 }, validateStatus: 'warning' },
	        _react2.default.createElement(_input2.default, { placeholder: 'Warning', id: 'warning' })
	      ),
	      _react2.default.createElement(
	        FormItem,
	        { label: 'Validating', labelCol: { span: 5
	          }, wrapperCol: { span: 12 }, hasFeedback: true, validateStatus: 'validating', help: 'The information is being validated...' },
	        _react2.default.createElement(_input2.default, { placeholder: 'I\'m the content is being validated', id: 'validating' })
	      ),
	      _react2.default.createElement(
	        FormItem,
	        { label: 'Success', labelCol: { span: 5 }, wrapperCol: { span: 12 }, hasFeedback: true, validateStatus: 'success' },
	        _react2.default.createElement(_input2.default, { placeholder: 'I\'m the content', id: 'success' })
	      ),
	      _react2.default.createElement(
	        FormItem,
	        { label: 'Warning', labelCol: { span: 5 }, wrapperCol: { span: 12 }, hasFeedback: true, validateStatus: 'warning' },
	        _react2.default.createElement(_input2.default, { placeholder: 'Warning', id: 'warning' })
	      ),
	      _react2.default.createElement(
	        FormItem,
	        { label: 'Fail', labelCol: { span: 5 }, wrapperCol: { span: 12 }, hasFeedback: true, validateStatus: 'error', help: 'Should be combination of numbers & alphabets' },
	        _react2.default.createElement(_input2.default, { placeholder: 'unavailable choice', id: 'error' })
	      ),
	      _react2.default.createElement(
	        FormItem,
	        { label: 'inline', labelCol: { span: 5 }, help: true },
	        _react2.default.createElement(
	          _col2.default,
	          { span: '6' },
	          _react2.default.createElement(
	            FormItem,
	            { validateStatus: 'error', help: 'Please select the correct date' },
	            _react2.default.createElement(_datePicker2.default, null)
	          )
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: '1' },
	          _react2.default.createElement(
	            'p',
	            { className: 'ant-form-split' },
	            '-'
	          )
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: '6' },
	          _react2.default.createElement(
	            FormItem,
	            null,
	            _react2.default.createElement(_datePicker2.default, null)
	          )
	        )
	      )
	    );
	  }
	};

/***/ },

/***/ 1550:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(144);

	var _inputNumber = __webpack_require__(143);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _style4 = __webpack_require__(67);

	var _form = __webpack_require__(66);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "使用 ", ["code", "Form.create"], " 处理后的表单具有自动收集数据并校验的功能，但如果您不需要这个功能，或者默认的行为无法满足业务需求，可以选择不使用 ", ["code", "Form.create"], " 并自行处理数据。"]],
	    "en-US": [["p", ["code", "Form.create"], " will collect and validate form data automatically. But if you don't need this feature or the default behaviour cannot satisfy you business, you can drop ", ["code", "Form.create"], " and handle form data manually."]]
	  },
	  "meta": {
	    "order": 9,
	    "title": {
	      "zh-CN": "自行处理表单数据",
	      "en-US": "Handle Form Data Manually"
	    },
	    "filename": "components/form/demo/without-form-create.md",
	    "id": "components-form-demo-without-form-create"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> InputNumber <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">validatePrimeNumber</span><span class=\"token punctuation\">(</span>number<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>number <span class=\"token operator\">===</span> <span class=\"token number\">11</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      validateStatus<span class=\"token punctuation\">:</span> <span class=\"token string\">'success'</span><span class=\"token punctuation\">,</span>\n      errorMsg<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n    validateStatus<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span>\n    errorMsg<span class=\"token punctuation\">:</span> <span class=\"token string\">'The prime between 8 and 12 is 11!'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">RawForm</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    number<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n      value<span class=\"token punctuation\">:</span> <span class=\"token number\">11</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleNumberChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      number<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token operator\">...</span><span class=\"token function\">validatePrimeNumber</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      labelCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">7</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> number <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>number<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> tips <span class=\"token operator\">=</span> <span class=\"token string\">'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">horizontal</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Prime between 8 &amp; 12\"</span>\n          validateStatus<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>number<span class=\"token punctuation\">.</span>validateStatus<span class=\"token punctuation\">}</span>\n          help<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>number<span class=\"token punctuation\">.</span>errorMsg <span class=\"token operator\">||</span> tips<span class=\"token punctuation\">}</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InputNumber</span>\n            <span class=\"token attr-name\">min</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">8</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">max</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">12</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>number<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleNumberChange<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RawForm</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var FormItem = _form2.default.Item;
	    function validatePrimeNumber(number) {
	      if (number === 11) {
	        return { validateStatus: 'success', errorMsg: null };
	      }return { validateStatus: 'error',
	        errorMsg: 'The prime between 8 and 12 is 11!' };
	    }
	    var RawForm = function (_React$Component) {
	      (0, _inherits3.default)(RawForm, _React$Component);

	      function RawForm() {
	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, RawForm);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { number: { value: 11 } }, _this.handleNumberChange = function (value) {
	          _this.setState({ number: (0, _extends3.default)({}, validatePrimeNumber(value), { value: value }) });
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      }

	      RawForm.prototype.render = function render() {
	        var formItemLayout = { labelCol: { span: 7 }, wrapperCol: { span: 12 } };var number = this.state.number;var tips = 'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.';return _react2.default.createElement(
	          _form2.default,
	          { horizontal: true },
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'Prime between 8 & 12', validateStatus: number.validateStatus, help: number.errorMsg || tips }),
	            _react2.default.createElement(_inputNumber2.default, { min: 8, max: 12, value: number.value, onChange: this.handleNumberChange })
	          )
	        );
	      };

	      return RawForm;
	    }(_react2.default.Component);

	    return _react2.default.createElement(RawForm, null);
	  }
	};

/***/ }

});