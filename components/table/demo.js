webpackJsonp([0,204],{

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

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Table = __webpack_require__(483);

	var _Table2 = _interopRequireDefault(_Table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Table2.default;
	module.exports = exports['default'];

/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(393);

	__webpack_require__(44);

	__webpack_require__(56);

	__webpack_require__(95);

	__webpack_require__(148);

	__webpack_require__(85);

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

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PaginationProps = undefined;

	var _Pagination = __webpack_require__(286);

	Object.defineProperty(exports, 'PaginationProps', {
	  enumerable: true,
	  get: function get() {
	    return _Pagination.PaginationProps;
	  }
	});

	var _Pagination2 = _interopRequireDefault(_Pagination);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Pagination2.default;

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(252);

	__webpack_require__(34);

	__webpack_require__(21);

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

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dropdown = __webpack_require__(113);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _dropdownButton = __webpack_require__(209);

	var _dropdownButton2 = _interopRequireDefault(_dropdownButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_dropdown2.default.Button = _dropdownButton2.default;
	exports.default = _dropdown2.default;
	module.exports = exports['default'];

/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(188);

	__webpack_require__(14);

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

/***/ 113:
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

	var _rcDropdown = __webpack_require__(256);

	var _rcDropdown2 = _interopRequireDefault(_rcDropdown);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Dropdown = function (_React$Component) {
	    (0, _inherits3.default)(Dropdown, _React$Component);

	    function Dropdown() {
	        (0, _classCallCheck3.default)(this, Dropdown);
	        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	    }

	    Dropdown.prototype.render = function render() {
	        var _props = this.props,
	            children = _props.children,
	            prefixCls = _props.prefixCls;

	        var dropdownTrigger = (0, _react.cloneElement)(children, {
	            className: (0, _classnames2.default)(children.props.className, prefixCls + '-trigger')
	        });
	        return _react2.default.createElement(
	            _rcDropdown2.default,
	            this.props,
	            dropdownTrigger
	        );
	    };

	    return Dropdown;
	}(_react2.default.Component);

	exports.default = Dropdown;

	Dropdown.defaultProps = {
	    transitionName: 'slide-up',
	    prefixCls: 'ant-dropdown',
	    mouseEnterDelay: 0.15,
	    mouseLeaveDelay: 0.1
	};
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

/***/ 145:
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

	var _tooltip = __webpack_require__(120);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _splitObject3 = __webpack_require__(18);

	var _splitObject4 = _interopRequireDefault(_splitObject3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Popconfirm = function (_React$Component) {
	    (0, _inherits3.default)(Popconfirm, _React$Component);

	    function Popconfirm(props) {
	        (0, _classCallCheck3.default)(this, Popconfirm);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

	        _this.confirm = function () {
	            _this.setVisible(false);
	            var onConfirm = _this.props.onConfirm;
	            if (onConfirm) {
	                onConfirm.call(_this);
	            }
	        };
	        _this.cancel = function () {
	            _this.setVisible(false);
	            var onCancel = _this.props.onCancel;
	            if (onCancel) {
	                onCancel.call(_this);
	            }
	        };
	        _this.onVisibleChange = function (visible) {
	            _this.setVisible(visible);
	        };
	        _this.state = {
	            visible: props.visible
	        };
	        return _this;
	    }

	    Popconfirm.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if ('visible' in nextProps) {
	            this.setState({ visible: nextProps.visible });
	        }
	    };

	    Popconfirm.prototype.setVisible = function setVisible(visible) {
	        var props = this.props;
	        if (!('visible' in props)) {
	            this.setState({ visible: visible });
	        }
	        var onVisibleChange = props.onVisibleChange;
	        if (onVisibleChange) {
	            onVisibleChange(visible);
	        }
	    };

	    Popconfirm.prototype.render = function render() {
	        var props = this.props,
	            context = this.context;

	        var _splitObject = (0, _splitObject4.default)(props, ['prefixCls', 'title', 'placement']),
	            _splitObject2 = (0, _slicedToArray3.default)(_splitObject, 2),
	            _splitObject2$ = _splitObject2[0],
	            prefixCls = _splitObject2$.prefixCls,
	            title = _splitObject2$.title,
	            placement = _splitObject2$.placement,
	            restProps = _splitObject2[1];

	        var okText = props.okText,
	            cancelText = props.cancelText;

	        var popconfirmLocale = context.antLocale && context.antLocale.Popconfirm;
	        if (popconfirmLocale) {
	            okText = okText || popconfirmLocale.okText;
	            cancelText = cancelText || popconfirmLocale.cancelText;
	        }
	        var overlay = _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                'div',
	                { className: prefixCls + '-inner-content' },
	                _react2.default.createElement(
	                    'div',
	                    { className: prefixCls + '-message' },
	                    _react2.default.createElement(_icon2.default, { type: 'exclamation-circle' }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: prefixCls + '-message-title' },
	                        title
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: prefixCls + '-buttons' },
	                    _react2.default.createElement(
	                        _button2.default,
	                        { onClick: this.cancel, type: 'ghost', size: 'small' },
	                        cancelText || '取消'
	                    ),
	                    _react2.default.createElement(
	                        _button2.default,
	                        { onClick: this.confirm, type: 'primary', size: 'small' },
	                        okText || '确定'
	                    )
	                )
	            )
	        );
	        return _react2.default.createElement(_tooltip2.default, (0, _extends3.default)({}, restProps, { prefixCls: prefixCls, placement: placement, onVisibleChange: this.onVisibleChange, visible: this.state.visible, overlay: overlay }));
	    };

	    return Popconfirm;
	}(_react2.default.Component);

	exports.default = Popconfirm;

	Popconfirm.defaultProps = {
	    prefixCls: 'ant-popover',
	    transitionName: 'zoom-big',
	    placement: 'top',
	    trigger: 'click'
	};
	Popconfirm.contextTypes = {
	    antLocale: _react2.default.PropTypes.object
	};
	module.exports = exports['default'];

/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(128);

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

/***/ 174:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var FIELD_META_PROP = exports.FIELD_META_PROP = 'data-__meta';

/***/ },

/***/ 188:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

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

/***/ 209:
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

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _dropdown = __webpack_require__(113);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _splitObject3 = __webpack_require__(18);

	var _splitObject4 = _interopRequireDefault(_splitObject3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ButtonGroup = _button2.default.Group;

	var DropdownButton = function (_React$Component) {
	    (0, _inherits3.default)(DropdownButton, _React$Component);

	    function DropdownButton() {
	        (0, _classCallCheck3.default)(this, DropdownButton);
	        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	    }

	    DropdownButton.prototype.render = function render() {
	        var _splitObject = (0, _splitObject4.default)(this.props, ['type', 'overlay', 'trigger', 'align', 'children', 'className', 'onClick', 'prefixCls', 'disabled', 'visible', 'onVisibleChange']),
	            _splitObject2 = (0, _slicedToArray3.default)(_splitObject, 2),
	            _splitObject2$ = _splitObject2[0],
	            type = _splitObject2$.type,
	            overlay = _splitObject2$.overlay,
	            trigger = _splitObject2$.trigger,
	            align = _splitObject2$.align,
	            children = _splitObject2$.children,
	            className = _splitObject2$.className,
	            onClick = _splitObject2$.onClick,
	            prefixCls = _splitObject2$.prefixCls,
	            disabled = _splitObject2$.disabled,
	            visible = _splitObject2$.visible,
	            onVisibleChange = _splitObject2$.onVisibleChange,
	            restProps = _splitObject2[1];

	        var cls = (0, _classnames2.default)(prefixCls, className);
	        var dropdownProps = {
	            align: align,
	            overlay: overlay,
	            trigger: disabled ? [] : trigger,
	            onVisibleChange: onVisibleChange
	        };
	        if ('visible' in this.props) {
	            dropdownProps.visible = visible;
	        }
	        return _react2.default.createElement(
	            ButtonGroup,
	            (0, _extends3.default)({}, restProps, { className: cls }),
	            _react2.default.createElement(
	                _button2.default,
	                { type: type, onClick: onClick, disabled: disabled },
	                children
	            ),
	            _react2.default.createElement(
	                _dropdown2.default,
	                dropdownProps,
	                _react2.default.createElement(
	                    _button2.default,
	                    { type: type, disabled: disabled },
	                    _react2.default.createElement(_icon2.default, { type: 'down' })
	                )
	            )
	        );
	    };

	    return DropdownButton;
	}(_react2.default.Component);

	exports.default = DropdownButton;

	DropdownButton.defaultProps = {
	    align: {
	        points: ['tr', 'br'],
	        overlay: {
	            adjustX: 1,
	            adjustY: 1
	        },
	        offset: [0, 4],
	        targetOffset: [0, 0]
	    },
	    type: 'default',
	    prefixCls: 'ant-dropdown-button'
	};
	module.exports = exports['default'];

/***/ },

/***/ 249:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 252:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 254:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

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

/***/ 285:
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

	var _select = __webpack_require__(31);

	var _select2 = _interopRequireDefault(_select);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MiniSelect = function (_React$Component) {
	    (0, _inherits3.default)(MiniSelect, _React$Component);

	    function MiniSelect() {
	        (0, _classCallCheck3.default)(this, MiniSelect);
	        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	    }

	    MiniSelect.prototype.render = function render() {
	        return _react2.default.createElement(_select2.default, (0, _extends3.default)({ size: 'small' }, this.props));
	    };

	    return MiniSelect;
	}(_react2.default.Component);

	exports.default = MiniSelect;

	MiniSelect.Option = _select2.default.Option;
	module.exports = exports['default'];

/***/ },

/***/ 286:
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

	var _rcPagination = __webpack_require__(324);

	var _rcPagination2 = _interopRequireDefault(_rcPagination);

	var _select = __webpack_require__(31);

	var _select2 = _interopRequireDefault(_select);

	var _MiniSelect = __webpack_require__(285);

	var _MiniSelect2 = _interopRequireDefault(_MiniSelect);

	var _zh_CN = __webpack_require__(287);

	var _zh_CN2 = _interopRequireDefault(_zh_CN);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Pagination = function (_React$Component) {
	    (0, _inherits3.default)(Pagination, _React$Component);

	    function Pagination() {
	        (0, _classCallCheck3.default)(this, Pagination);
	        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	    }

	    Pagination.prototype.render = function render() {
	        var className = this.props.className;
	        var selectComponentClass = _select2.default;
	        var locale = void 0;
	        if (this.context.antLocale && this.context.antLocale.Pagination) {
	            locale = this.context.antLocale.Pagination;
	        } else {
	            locale = this.props.locale;
	        }
	        if (this.props.size === 'small') {
	            className += ' mini';
	            selectComponentClass = _MiniSelect2.default;
	        }
	        return _react2.default.createElement(_rcPagination2.default, (0, _extends3.default)({ selectComponentClass: selectComponentClass, selectPrefixCls: this.props.selectPrefixCls }, this.props, { locale: locale, className: className }));
	    };

	    return Pagination;
	}(_react2.default.Component);

	exports.default = Pagination;

	Pagination.defaultProps = {
	    locale: _zh_CN2.default,
	    className: '',
	    prefixCls: 'ant-pagination',
	    selectPrefixCls: 'ant-select'
	};
	Pagination.contextTypes = {
	    antLocale: _react2.default.PropTypes.object
	};
	module.exports = exports['default'];

/***/ },

/***/ 287:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _zh_CN = __webpack_require__(258);

	var _zh_CN2 = _interopRequireDefault(_zh_CN);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _zh_CN2.default;
	module.exports = exports['default'];

/***/ },

/***/ 289:
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

	var _rcTable = __webpack_require__(139);

	var _rcTable2 = _interopRequireDefault(_rcTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Column = function (_RcTable$Column) {
	  (0, _inherits3.default)(Column, _RcTable$Column);

	  function Column() {
	    (0, _classCallCheck3.default)(this, Column);
	    return (0, _possibleConstructorReturn3.default)(this, _RcTable$Column.apply(this, arguments));
	  }

	  return Column;
	}(_rcTable2.default.Column);

	exports.default = Column;
	module.exports = exports['default'];

/***/ },

/***/ 290:
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

	var _rcTable = __webpack_require__(139);

	var _rcTable2 = _interopRequireDefault(_rcTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ColumnGroup = function (_RcTable$ColumnGroup) {
	  (0, _inherits3.default)(ColumnGroup, _RcTable$ColumnGroup);

	  function ColumnGroup() {
	    (0, _classCallCheck3.default)(this, ColumnGroup);
	    return (0, _possibleConstructorReturn3.default)(this, _RcTable$ColumnGroup.apply(this, arguments));
	  }

	  return ColumnGroup;
	}(_rcTable2.default.ColumnGroup);

	exports.default = ColumnGroup;
	module.exports = exports['default'];

/***/ },

/***/ 393:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 480:
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FilterDropdownMenuWrapper = function (_React$Component) {
	    (0, _inherits3.default)(FilterDropdownMenuWrapper, _React$Component);

	    function FilterDropdownMenuWrapper() {
	        (0, _classCallCheck3.default)(this, FilterDropdownMenuWrapper);
	        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	    }

	    FilterDropdownMenuWrapper.prototype.render = function render() {
	        var _props = this.props,
	            onClick = _props.onClick,
	            children = _props.children,
	            className = _props.className;

	        return _react2.default.createElement(
	            'div',
	            { className: className, onClick: onClick },
	            children
	        );
	    };

	    return FilterDropdownMenuWrapper;
	}(_react2.default.Component);

	exports.default = FilterDropdownMenuWrapper;
	module.exports = exports['default'];

/***/ },

/***/ 481:
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

	var _checkbox = __webpack_require__(40);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _radio = __webpack_require__(41);

	var _radio2 = _interopRequireDefault(_radio);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SelectionBox = function (_React$Component) {
	    (0, _inherits3.default)(SelectionBox, _React$Component);

	    function SelectionBox(props) {
	        (0, _classCallCheck3.default)(this, SelectionBox);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

	        _this.state = {
	            checked: _this.getCheckState(props)
	        };
	        return _this;
	    }

	    SelectionBox.prototype.componentDidMount = function componentDidMount() {
	        this.subscribe();
	    };

	    SelectionBox.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.unsubscribe) {
	            this.unsubscribe();
	        }
	    };

	    SelectionBox.prototype.subscribe = function subscribe() {
	        var _this2 = this;

	        var store = this.props.store;

	        this.unsubscribe = store.subscribe(function () {
	            var checked = _this2.getCheckState(_this2.props);
	            _this2.setState({ checked: checked });
	        });
	    };

	    SelectionBox.prototype.getCheckState = function getCheckState(props) {
	        var store = props.store,
	            defaultSelection = props.defaultSelection,
	            rowIndex = props.rowIndex;

	        var checked = false;
	        if (store.getState().selectionDirty) {
	            checked = store.getState().selectedRowKeys.indexOf(rowIndex) >= 0;
	        } else {
	            checked = store.getState().selectedRowKeys.indexOf(rowIndex) >= 0 || defaultSelection.indexOf(rowIndex) >= 0;
	        }
	        return checked;
	    };

	    SelectionBox.prototype.render = function render() {
	        var _props = this.props,
	            type = _props.type,
	            rowIndex = _props.rowIndex,
	            disabled = _props.disabled,
	            onChange = _props.onChange;
	        var checked = this.state.checked;

	        if (type === 'radio') {
	            return _react2.default.createElement(_radio2.default, { disabled: disabled, onChange: onChange, value: rowIndex, checked: checked });
	        }
	        return _react2.default.createElement(_checkbox2.default, { checked: checked, disabled: disabled, onChange: onChange });
	    };

	    return SelectionBox;
	}(_react2.default.Component);

	exports.default = SelectionBox;
	module.exports = exports['default'];

/***/ },

/***/ 482:
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

	var _checkbox = __webpack_require__(40);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SelectionCheckboxAll = function (_React$Component) {
	    (0, _inherits3.default)(SelectionCheckboxAll, _React$Component);

	    function SelectionCheckboxAll(props) {
	        (0, _classCallCheck3.default)(this, SelectionCheckboxAll);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

	        _this.state = {
	            checked: _this.getCheckState(props),
	            indeterminate: _this.getIndeterminateState(props)
	        };
	        return _this;
	    }

	    SelectionCheckboxAll.prototype.componentDidMount = function componentDidMount() {
	        this.subscribe();
	    };

	    SelectionCheckboxAll.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.setCheckState(nextProps);
	    };

	    SelectionCheckboxAll.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.unsubscribe) {
	            this.unsubscribe();
	        }
	    };

	    SelectionCheckboxAll.prototype.subscribe = function subscribe() {
	        var _this2 = this;

	        var store = this.props.store;

	        this.unsubscribe = store.subscribe(function () {
	            _this2.setCheckState(_this2.props);
	        });
	    };

	    SelectionCheckboxAll.prototype.checkSelection = function checkSelection(data, type, byDefaultChecked) {
	        var _props = this.props,
	            store = _props.store,
	            getCheckboxPropsByItem = _props.getCheckboxPropsByItem,
	            getRecordKey = _props.getRecordKey;
	        // type should be 'every' | 'some'

	        if (type === 'every' || type === 'some') {
	            return byDefaultChecked ? data[type](function (item) {
	                return getCheckboxPropsByItem(item).defaultChecked;
	            }) : data[type](function (item, i) {
	                return store.getState().selectedRowKeys.indexOf(getRecordKey(item, i)) >= 0;
	            });
	        }
	        return false;
	    };

	    SelectionCheckboxAll.prototype.setCheckState = function setCheckState(props) {
	        var checked = this.getCheckState(props);
	        var indeterminate = this.getIndeterminateState(props);
	        if (checked !== this.state.checked) {
	            this.setState({ checked: checked });
	        }
	        if (indeterminate !== this.state.indeterminate) {
	            this.setState({ indeterminate: indeterminate });
	        }
	    };

	    SelectionCheckboxAll.prototype.getCheckState = function getCheckState(props) {
	        var store = props.store,
	            data = props.data;

	        var checked = void 0;
	        if (!data.length) {
	            checked = false;
	        } else {
	            checked = store.getState().selectionDirty ? this.checkSelection(data, 'every', false) : this.checkSelection(data, 'every', false) || this.checkSelection(data, 'every', true);
	        }
	        return checked;
	    };

	    SelectionCheckboxAll.prototype.getIndeterminateState = function getIndeterminateState(props) {
	        var store = props.store,
	            data = props.data;

	        var indeterminate = void 0;
	        if (!data.length) {
	            indeterminate = false;
	        } else {
	            indeterminate = store.getState().selectionDirty ? this.checkSelection(data, 'some', false) && !this.checkSelection(data, 'every', false) : this.checkSelection(data, 'some', false) && !this.checkSelection(data, 'every', false) || this.checkSelection(data, 'some', true) && !this.checkSelection(data, 'every', true);
	        }
	        return indeterminate;
	    };

	    SelectionCheckboxAll.prototype.render = function render() {
	        var _props2 = this.props,
	            disabled = _props2.disabled,
	            onChange = _props2.onChange;
	        var _state = this.state,
	            checked = _state.checked,
	            indeterminate = _state.indeterminate;

	        return _react2.default.createElement(_checkbox2.default, { checked: checked, indeterminate: indeterminate, disabled: disabled, onChange: onChange });
	    };

	    return SelectionCheckboxAll;
	}(_react2.default.Component);

	exports.default = SelectionCheckboxAll;
	module.exports = exports['default'];

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _slicedToArray2 = __webpack_require__(15);

	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

	var _rcTable = __webpack_require__(139);

	var _rcTable2 = _interopRequireDefault(_rcTable);

	var _filterDropdown = __webpack_require__(485);

	var _filterDropdown2 = _interopRequireDefault(_filterDropdown);

	var _pagination = __webpack_require__(84);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _spin = __webpack_require__(147);

	var _spin2 = _interopRequireDefault(_spin);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _util = __webpack_require__(486);

	var _objectAssign = __webpack_require__(9);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _splitObject3 = __webpack_require__(18);

	var _splitObject4 = _interopRequireDefault(_splitObject3);

	var _warning = __webpack_require__(65);

	var _warning2 = _interopRequireDefault(_warning);

	var _createStore = __webpack_require__(484);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _SelectionBox = __webpack_require__(481);

	var _SelectionBox2 = _interopRequireDefault(_SelectionBox);

	var _SelectionCheckboxAll = __webpack_require__(482);

	var _SelectionCheckboxAll2 = _interopRequireDefault(_SelectionCheckboxAll);

	var _Column = __webpack_require__(289);

	var _Column2 = _interopRequireDefault(_Column);

	var _ColumnGroup = __webpack_require__(290);

	var _ColumnGroup2 = _interopRequireDefault(_ColumnGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function noop() {}
	function stopPropagation(e) {
	    e.stopPropagation();
	    if (e.nativeEvent.stopImmediatePropagation) {
	        e.nativeEvent.stopImmediatePropagation();
	    }
	}
	var defaultLocale = {
	    filterTitle: '筛选',
	    filterConfirm: '确定',
	    filterReset: '重置',
	    emptyText: _react2.default.createElement(
	        'span',
	        null,
	        _react2.default.createElement(_icon2.default, { type: 'frown-o' }),
	        '\u6682\u65E0\u6570\u636E'
	    )
	};
	var defaultPagination = {
	    onChange: noop,
	    onShowSizeChange: noop
	};

	var Table = function (_React$Component) {
	    (0, _inherits3.default)(Table, _React$Component);

	    function Table(props) {
	        (0, _classCallCheck3.default)(this, Table);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

	        _this.getCheckboxPropsByItem = function (item) {
	            var _this$props$rowSelect = _this.props.rowSelection,
	                rowSelection = _this$props$rowSelect === undefined ? {} : _this$props$rowSelect;

	            if (!rowSelection.getCheckboxProps) {
	                return {};
	            }
	            var key = _this.getRecordKey(item);
	            // Cache checkboxProps
	            if (!_this.CheckboxPropsCache[key]) {
	                _this.CheckboxPropsCache[key] = rowSelection.getCheckboxProps(item);
	            }
	            return _this.CheckboxPropsCache[key];
	        };
	        _this.handleFilter = function (column, nextFilters) {
	            var props = _this.props;
	            var pagination = (0, _objectAssign2.default)({}, _this.state.pagination);
	            var filters = (0, _objectAssign2.default)({}, _this.state.filters, (0, _defineProperty3.default)({}, _this.getColumnKey(column), nextFilters));
	            // Remove filters not in current columns
	            var currentColumnKeys = [];
	            (0, _util.treeMap)(_this.columns, function (c) {
	                if (!c.children) {
	                    currentColumnKeys.push(_this.getColumnKey(c));
	                }
	            });
	            Object.keys(filters).forEach(function (columnKey) {
	                if (currentColumnKeys.indexOf(columnKey) < 0) {
	                    delete filters[columnKey];
	                }
	            });
	            if (props.pagination) {
	                // Reset current prop
	                pagination.current = 1;
	                pagination.onChange(pagination.current);
	            }
	            var newState = {
	                pagination: pagination,
	                filters: {}
	            };
	            var filtersToSetState = (0, _objectAssign2.default)({}, filters);
	            // Remove filters which is controlled
	            _this.getFilteredValueColumns().forEach(function (col) {
	                var columnKey = _this.getColumnKey(col);
	                if (columnKey) {
	                    delete filtersToSetState[columnKey];
	                }
	            });
	            if (Object.keys(filtersToSetState).length > 0) {
	                newState.filters = filtersToSetState;
	            }
	            // Controlled current prop will not respond user interaction
	            if (props.pagination && 'current' in props.pagination) {
	                newState.pagination = (0, _objectAssign2.default)({}, pagination, {
	                    current: _this.state.pagination.current
	                });
	            }
	            _this.setState(newState, function () {
	                _this.store.setState({
	                    selectionDirty: false
	                });
	                var onChange = _this.props.onChange;
	                if (onChange) {
	                    onChange.apply(null, _this.prepareParamsArguments((0, _objectAssign2.default)({}, _this.state, {
	                        selectionDirty: false,
	                        filters: filters,
	                        pagination: pagination
	                    })));
	                }
	            });
	        };
	        _this.handleSelect = function (record, rowIndex, e) {
	            var checked = e.target.checked;
	            var defaultSelection = _this.store.getState().selectionDirty ? [] : _this.getDefaultSelection();
	            var selectedRowKeys = _this.store.getState().selectedRowKeys.concat(defaultSelection);
	            var key = _this.getRecordKey(record, rowIndex);
	            if (checked) {
	                selectedRowKeys.push(_this.getRecordKey(record, rowIndex));
	            } else {
	                selectedRowKeys = selectedRowKeys.filter(function (i) {
	                    return key !== i;
	                });
	            }
	            _this.store.setState({
	                selectionDirty: true
	            });
	            _this.setSelectedRowKeys(selectedRowKeys, {
	                selectWay: 'onSelect',
	                record: record,
	                checked: checked
	            });
	        };
	        _this.handleRadioSelect = function (record, rowIndex, e) {
	            var checked = e.target.checked;
	            var defaultSelection = _this.store.getState().selectionDirty ? [] : _this.getDefaultSelection();
	            var selectedRowKeys = _this.store.getState().selectedRowKeys.concat(defaultSelection);
	            var key = _this.getRecordKey(record, rowIndex);
	            selectedRowKeys = [key];
	            _this.store.setState({
	                selectionDirty: true
	            });
	            _this.setSelectedRowKeys(selectedRowKeys, {
	                selectWay: 'onSelect',
	                record: record,
	                checked: checked
	            });
	        };
	        _this.handleSelectAllRow = function (e) {
	            var checked = e.target.checked;
	            var data = _this.getFlatCurrentPageData();
	            var defaultSelection = _this.store.getState().selectionDirty ? [] : _this.getDefaultSelection();
	            var selectedRowKeys = _this.store.getState().selectedRowKeys.concat(defaultSelection);
	            var changableRowKeys = data.filter(function (item) {
	                return !_this.getCheckboxPropsByItem(item).disabled;
	            }).map(function (item, i) {
	                return _this.getRecordKey(item, i);
	            });
	            // 记录变化的列
	            var changeRowKeys = [];
	            if (checked) {
	                changableRowKeys.forEach(function (key) {
	                    if (selectedRowKeys.indexOf(key) < 0) {
	                        selectedRowKeys.push(key);
	                        changeRowKeys.push(key);
	                    }
	                });
	            } else {
	                changableRowKeys.forEach(function (key) {
	                    if (selectedRowKeys.indexOf(key) >= 0) {
	                        selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
	                        changeRowKeys.push(key);
	                    }
	                });
	            }
	            _this.store.setState({
	                selectionDirty: true
	            });
	            _this.setSelectedRowKeys(selectedRowKeys, {
	                selectWay: 'onSelectAll',
	                checked: checked,
	                changeRowKeys: changeRowKeys
	            });
	        };
	        _this.handlePageChange = function (current) {
	            var props = _this.props;
	            var pagination = (0, _objectAssign2.default)({}, _this.state.pagination);
	            if (current) {
	                pagination.current = current;
	            } else {
	                pagination.current = pagination.current || 1;
	            }
	            pagination.onChange(pagination.current);
	            var newState = {
	                pagination: pagination
	            };
	            // Controlled current prop will not respond user interaction
	            if (props.pagination && 'current' in props.pagination) {
	                newState.pagination = (0, _objectAssign2.default)({}, pagination, {
	                    current: _this.state.pagination.current
	                });
	            }
	            _this.setState(newState);
	            _this.store.setState({
	                selectionDirty: false
	            });
	            var onChange = _this.props.onChange;
	            if (onChange) {
	                onChange.apply(null, _this.prepareParamsArguments((0, _objectAssign2.default)({}, _this.state, {
	                    selectionDirty: false,
	                    pagination: pagination
	                })));
	            }
	        };
	        _this.renderSelectionBox = function (type) {
	            return function (_, record, index) {
	                var rowIndex = _this.getRecordKey(record, index); // 从 1 开始
	                var props = _this.getCheckboxPropsByItem(record);
	                var handleChange = function handleChange(e) {
	                    type === 'radio' ? _this.handleRadioSelect(record, rowIndex, e) : _this.handleSelect(record, rowIndex, e);
	                };
	                return _react2.default.createElement(
	                    'span',
	                    { onClick: stopPropagation },
	                    _react2.default.createElement(_SelectionBox2.default, { type: type, store: _this.store, rowIndex: rowIndex, disabled: props.disabled, onChange: handleChange, defaultSelection: _this.getDefaultSelection() })
	                );
	            };
	        };
	        _this.getRecordKey = function (record, index) {
	            var rowKey = _this.props.rowKey;
	            if (typeof rowKey === 'function') {
	                return rowKey(record, index);
	            }
	            var recordKey = record[rowKey] !== undefined ? record[rowKey] : index;
	            (0, _warning2.default)(recordKey !== undefined, 'Each record in table should have a unique `key` prop, or set `rowKey` to an unique primary key.');
	            return recordKey;
	        };
	        _this.handleShowSizeChange = function (current, pageSize) {
	            var pagination = _this.state.pagination;
	            pagination.onShowSizeChange(current, pageSize);
	            var nextPagination = (0, _objectAssign2.default)({}, pagination, { pageSize: pageSize, current: current });
	            _this.setState({ pagination: nextPagination });
	            var onChange = _this.props.onChange;
	            if (onChange) {
	                onChange.apply(null, _this.prepareParamsArguments((0, _objectAssign2.default)({}, _this.state, {
	                    pagination: nextPagination
	                })));
	            }
	        };
	        (0, _warning2.default)(!('columnsPageRange' in props || 'columnsPageSize' in props), '`columnsPageRange` and `columnsPageSize` are removed, please use ' + 'fixed columns instead, see: http://u.ant.design/fixed-columns.');
	        var pagination = props.pagination || {};
	        _this.columns = props.columns || (0, _util.normalizeColumns)(props.children);
	        _this.state = (0, _objectAssign2.default)({}, _this.getSortStateFromColumns(), {
	            // 减少状态
	            filters: _this.getFiltersFromColumns(),
	            pagination: _this.hasPagination() ? (0, _objectAssign2.default)({}, defaultPagination, pagination, {
	                current: pagination.defaultCurrent || pagination.current || 1,
	                pageSize: pagination.defaultPageSize || pagination.pageSize || 10
	            }) : {}
	        });
	        _this.CheckboxPropsCache = {};
	        _this.store = (0, _createStore2.default)({
	            selectedRowKeys: (props.rowSelection || {}).selectedRowKeys || [],
	            selectionDirty: false
	        });
	        return _this;
	    }

	    Table.prototype.getDefaultSelection = function getDefaultSelection() {
	        var _this2 = this;

	        var _props$rowSelection = this.props.rowSelection,
	            rowSelection = _props$rowSelection === undefined ? {} : _props$rowSelection;

	        if (!rowSelection.getCheckboxProps) {
	            return [];
	        }
	        return this.getFlatData().filter(function (item) {
	            return _this2.getCheckboxPropsByItem(item).defaultChecked;
	        }).map(function (record, rowIndex) {
	            return _this2.getRecordKey(record, rowIndex);
	        });
	    };

	    Table.prototype.getLocale = function getLocale() {
	        var locale = {};
	        if (this.context.antLocale && this.context.antLocale.Table) {
	            locale = this.context.antLocale.Table;
	        }
	        return (0, _objectAssign2.default)({}, defaultLocale, locale, this.props.locale);
	    };

	    Table.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        var _this3 = this;

	        if ('pagination' in nextProps && nextProps.pagination !== false) {
	            this.setState(function (previousState) {
	                var newPagination = (0, _objectAssign2.default)({}, defaultPagination, previousState.pagination, nextProps.pagination);
	                newPagination.current = newPagination.current || 1;
	                return { pagination: newPagination };
	            });
	        }
	        // dataSource 的变化会清空选中项
	        if ('dataSource' in nextProps && nextProps.dataSource !== this.props.dataSource) {
	            this.store.setState({
	                selectionDirty: false
	            });
	            this.CheckboxPropsCache = {};
	        }
	        if (nextProps.rowSelection && 'selectedRowKeys' in nextProps.rowSelection) {
	            this.store.setState({
	                selectedRowKeys: nextProps.rowSelection.selectedRowKeys || []
	            });
	            var rowSelection = this.props.rowSelection;

	            if (rowSelection && nextProps.rowSelection.getCheckboxProps !== rowSelection.getCheckboxProps) {
	                this.CheckboxPropsCache = {};
	            }
	        }
	        if (this.getSortOrderColumns(nextProps.columns).length > 0) {
	            var sortState = this.getSortStateFromColumns(nextProps.columns);
	            if (sortState.sortColumn !== this.state.sortColumn || sortState.sortOrder !== this.state.sortOrder) {
	                this.setState(sortState);
	            }
	        }
	        var filteredValueColumns = this.getFilteredValueColumns(nextProps.columns);
	        if (filteredValueColumns.length > 0) {
	            (function () {
	                var filtersFromColumns = _this3.getFiltersFromColumns(nextProps.columns);
	                var newFilters = (0, _objectAssign2.default)({}, _this3.state.filters);
	                Object.keys(filtersFromColumns).forEach(function (key) {
	                    newFilters[key] = filtersFromColumns[key];
	                });
	                if (_this3.isFiltersChanged(newFilters)) {
	                    _this3.setState({ filters: newFilters });
	                }
	            })();
	        }
	        this.columns = nextProps.columns || (0, _util.normalizeColumns)(nextProps.children);
	    };

	    Table.prototype.setSelectedRowKeys = function setSelectedRowKeys(selectedRowKeys, _ref) {
	        var _this4 = this;

	        var selectWay = _ref.selectWay,
	            record = _ref.record,
	            checked = _ref.checked,
	            changeRowKeys = _ref.changeRowKeys;
	        var _props$rowSelection2 = this.props.rowSelection,
	            rowSelection = _props$rowSelection2 === undefined ? {} : _props$rowSelection2;

	        if (rowSelection && !('selectedRowKeys' in rowSelection)) {
	            this.store.setState({ selectedRowKeys: selectedRowKeys });
	        }
	        var data = this.getFlatData();
	        if (!rowSelection.onChange && !rowSelection[selectWay]) {
	            return;
	        }
	        var selectedRows = data.filter(function (row, i) {
	            return selectedRowKeys.indexOf(_this4.getRecordKey(row, i)) >= 0;
	        });
	        if (rowSelection.onChange) {
	            rowSelection.onChange(selectedRowKeys, selectedRows);
	        }
	        if (selectWay === 'onSelect' && rowSelection.onSelect) {
	            rowSelection.onSelect(record, checked, selectedRows);
	        } else if (selectWay === 'onSelectAll' && rowSelection.onSelectAll) {
	            var changeRows = data.filter(function (row, i) {
	                return changeRowKeys.indexOf(_this4.getRecordKey(row, i)) >= 0;
	            });
	            rowSelection.onSelectAll(checked, selectedRows, changeRows);
	        }
	    };

	    Table.prototype.hasPagination = function hasPagination() {
	        return this.props.pagination !== false;
	    };

	    Table.prototype.isFiltersChanged = function isFiltersChanged(filters) {
	        var _this5 = this;

	        var filtersChanged = false;
	        if (Object.keys(filters).length !== Object.keys(this.state.filters).length) {
	            filtersChanged = true;
	        } else {
	            Object.keys(filters).forEach(function (columnKey) {
	                if (filters[columnKey] !== _this5.state.filters[columnKey]) {
	                    filtersChanged = true;
	                }
	            });
	        }
	        return filtersChanged;
	    };

	    Table.prototype.getSortOrderColumns = function getSortOrderColumns(columns) {
	        return (columns || this.columns || []).filter(function (column) {
	            return 'sortOrder' in column;
	        });
	    };

	    Table.prototype.getFilteredValueColumns = function getFilteredValueColumns(columns) {
	        return (columns || this.columns || []).filter(function (column) {
	            return column.filteredValue;
	        });
	    };

	    Table.prototype.getFiltersFromColumns = function getFiltersFromColumns(columns) {
	        var _this6 = this;

	        var filters = {};
	        this.getFilteredValueColumns(columns).forEach(function (col) {
	            filters[_this6.getColumnKey(col)] = col.filteredValue;
	        });
	        return filters;
	    };

	    Table.prototype.getSortStateFromColumns = function getSortStateFromColumns(columns) {
	        // return fisrt column which sortOrder is not falsy
	        var sortedColumn = this.getSortOrderColumns(columns).filter(function (col) {
	            return col.sortOrder;
	        })[0];
	        if (sortedColumn) {
	            return {
	                sortColumn: sortedColumn,
	                sortOrder: sortedColumn.sortOrder
	            };
	        }
	        return {
	            sortColumn: null,
	            sortOrder: null
	        };
	    };

	    Table.prototype.getSorterFn = function getSorterFn() {
	        var _state = this.state,
	            sortOrder = _state.sortOrder,
	            sortColumn = _state.sortColumn;

	        if (!sortOrder || !sortColumn || typeof sortColumn.sorter !== 'function') {
	            return;
	        }
	        return function (a, b) {
	            var result = sortColumn.sorter(a, b);
	            if (result !== 0) {
	                return sortOrder === 'descend' ? -result : result;
	            }
	            return 0;
	        };
	    };

	    Table.prototype.toggleSortOrder = function toggleSortOrder(order, column) {
	        var _state2 = this.state,
	            sortColumn = _state2.sortColumn,
	            sortOrder = _state2.sortOrder;
	        // 只同时允许一列进行排序，否则会导致排序顺序的逻辑问题

	        var isSortColumn = this.isSortColumn(column);
	        if (!isSortColumn) {
	            sortOrder = order;
	            sortColumn = column;
	        } else {
	            if (sortOrder === order) {
	                sortOrder = '';
	                sortColumn = null;
	            } else {
	                sortOrder = order;
	            }
	        }
	        var newState = {
	            sortOrder: sortOrder,
	            sortColumn: sortColumn
	        };
	        // Controlled
	        if (this.getSortOrderColumns().length === 0) {
	            this.setState(newState);
	        }
	        var onChange = this.props.onChange;
	        if (onChange) {
	            onChange.apply(null, this.prepareParamsArguments((0, _objectAssign2.default)({}, this.state, newState)));
	        }
	    };

	    Table.prototype.renderRowSelection = function renderRowSelection() {
	        var _this7 = this;

	        var _props = this.props,
	            prefixCls = _props.prefixCls,
	            rowSelection = _props.rowSelection;

	        var columns = this.columns.concat();
	        if (rowSelection) {
	            var data = this.getFlatCurrentPageData().filter(function (item) {
	                if (rowSelection.getCheckboxProps) {
	                    return !_this7.getCheckboxPropsByItem(item).disabled;
	                }
	                return true;
	            });
	            var selectionColumn = {
	                key: 'selection-column',
	                render: this.renderSelectionBox(rowSelection.type),
	                className: prefixCls + '-selection-column'
	            };
	            if (rowSelection.type !== 'radio') {
	                var checkboxAllDisabled = data.every(function (item) {
	                    return _this7.getCheckboxPropsByItem(item).disabled;
	                });
	                selectionColumn.title = _react2.default.createElement(_SelectionCheckboxAll2.default, { store: this.store, data: data, getCheckboxPropsByItem: this.getCheckboxPropsByItem, getRecordKey: this.getRecordKey, disabled: checkboxAllDisabled, onChange: this.handleSelectAllRow });
	            }
	            if (columns.some(function (column) {
	                return column.fixed === 'left' || column.fixed === true;
	            })) {
	                selectionColumn.fixed = 'left';
	            }
	            if (columns[0] && columns[0].key === 'selection-column') {
	                columns[0] = selectionColumn;
	            } else {
	                columns.unshift(selectionColumn);
	            }
	        }
	        return columns;
	    };

	    Table.prototype.getColumnKey = function getColumnKey(column, index) {
	        return column.key || column.dataIndex || index;
	    };

	    Table.prototype.getMaxCurrent = function getMaxCurrent(total) {
	        var _state$pagination = this.state.pagination,
	            current = _state$pagination.current,
	            pageSize = _state$pagination.pageSize;

	        if ((current - 1) * pageSize >= total) {
	            return current - 1;
	        }
	        return current;
	    };

	    Table.prototype.isSortColumn = function isSortColumn(column) {
	        var sortColumn = this.state.sortColumn;

	        if (!column || !sortColumn) {
	            return false;
	        }
	        return this.getColumnKey(sortColumn) === this.getColumnKey(column);
	    };

	    Table.prototype.renderColumnsDropdown = function renderColumnsDropdown(columns) {
	        var _this8 = this;

	        var _props2 = this.props,
	            prefixCls = _props2.prefixCls,
	            dropdownPrefixCls = _props2.dropdownPrefixCls;
	        var sortOrder = this.state.sortOrder;

	        var locale = this.getLocale();
	        return (0, _util.treeMap)(columns, function (originColumn, i) {
	            var column = (0, _objectAssign2.default)({}, originColumn);
	            var key = _this8.getColumnKey(column, i);
	            var filterDropdown = void 0;
	            var sortButton = void 0;
	            if (column.filters && column.filters.length > 0 || column.filterDropdown) {
	                var colFilters = _this8.state.filters[key] || [];
	                filterDropdown = _react2.default.createElement(_filterDropdown2.default, { locale: locale, column: column, selectedKeys: colFilters, confirmFilter: _this8.handleFilter, prefixCls: prefixCls + '-filter', dropdownPrefixCls: dropdownPrefixCls || 'ant-dropdown' });
	            }
	            if (column.sorter) {
	                var isSortColumn = _this8.isSortColumn(column);
	                if (isSortColumn) {
	                    column.className = column.className || '';
	                    if (sortOrder) {
	                        column.className += ' ' + prefixCls + '-column-sort';
	                    }
	                }
	                var isAscend = isSortColumn && sortOrder === 'ascend';
	                var isDescend = isSortColumn && sortOrder === 'descend';
	                sortButton = _react2.default.createElement(
	                    'div',
	                    { className: prefixCls + '-column-sorter' },
	                    _react2.default.createElement(
	                        'span',
	                        { className: prefixCls + '-column-sorter-up ' + (isAscend ? 'on' : 'off'), title: '\u2191', onClick: function onClick() {
	                                return _this8.toggleSortOrder('ascend', column);
	                            } },
	                        _react2.default.createElement(_icon2.default, { type: 'caret-up' })
	                    ),
	                    _react2.default.createElement(
	                        'span',
	                        { className: prefixCls + '-column-sorter-down ' + (isDescend ? 'on' : 'off'), title: '\u2193', onClick: function onClick() {
	                                return _this8.toggleSortOrder('descend', column);
	                            } },
	                        _react2.default.createElement(_icon2.default, { type: 'caret-down' })
	                    )
	                );
	            }
	            column.title = _react2.default.createElement(
	                'span',
	                null,
	                column.title,
	                sortButton,
	                filterDropdown
	            );
	            return column;
	        });
	    };

	    Table.prototype.renderPagination = function renderPagination() {
	        // 强制不需要分页
	        if (!this.hasPagination()) {
	            return null;
	        }
	        var size = 'default';
	        var pagination = this.state.pagination;

	        if (pagination.size) {
	            size = pagination.size;
	        } else if (this.props.size === 'middle' || this.props.size === 'small') {
	            size = 'small';
	        }
	        var total = pagination.total || this.getLocalData().length;
	        return total > 0 ? _react2.default.createElement(_pagination2.default, (0, _extends3.default)({}, pagination, { className: this.props.prefixCls + '-pagination', onChange: this.handlePageChange, total: total, size: size, current: this.getMaxCurrent(total), onShowSizeChange: this.handleShowSizeChange })) : null;
	    };

	    Table.prototype.prepareParamsArguments = function prepareParamsArguments(state) {
	        // 准备筛选、排序、分页的参数
	        var pagination = state.pagination;
	        var filters = state.filters;
	        var sorter = {};
	        if (state.sortColumn && state.sortOrder) {
	            sorter.column = state.sortColumn;
	            sorter.order = state.sortOrder;
	            sorter.field = state.sortColumn.dataIndex;
	            sorter.columnKey = this.getColumnKey(state.sortColumn);
	        }
	        return [pagination, filters, sorter];
	    };

	    Table.prototype.findColumn = function findColumn(myKey) {
	        var _this9 = this;

	        var column = void 0;
	        (0, _util.treeMap)(this.columns, function (c) {
	            if (_this9.getColumnKey(c) === myKey) {
	                column = c;
	            }
	        });
	        return column;
	    };

	    Table.prototype.getCurrentPageData = function getCurrentPageData() {
	        var data = this.getLocalData();
	        var current = void 0;
	        var pageSize = void 0;
	        var state = this.state;
	        // 如果没有分页的话，默认全部展示
	        if (!this.hasPagination()) {
	            pageSize = Number.MAX_VALUE;
	            current = 1;
	        } else {
	            pageSize = state.pagination.pageSize;
	            current = this.getMaxCurrent(state.pagination.total || data.length);
	        }
	        // 分页
	        // ---
	        // 当数据量少于等于每页数量时，直接设置数据
	        // 否则进行读取分页数据
	        if (data.length > pageSize || pageSize === Number.MAX_VALUE) {
	            data = data.filter(function (_, i) {
	                return i >= (current - 1) * pageSize && i < current * pageSize;
	            });
	        }
	        return data;
	    };

	    Table.prototype.getFlatData = function getFlatData() {
	        return (0, _util.flatArray)(this.getLocalData());
	    };

	    Table.prototype.getFlatCurrentPageData = function getFlatCurrentPageData() {
	        return (0, _util.flatArray)(this.getCurrentPageData());
	    };

	    Table.prototype.recursiveSort = function recursiveSort(data, sorterFn) {
	        var _this10 = this;

	        var _props$childrenColumn = this.props.childrenColumnName,
	            childrenColumnName = _props$childrenColumn === undefined ? 'children' : _props$childrenColumn;

	        return data.sort(sorterFn).map(function (item) {
	            return item[childrenColumnName] ? (0, _objectAssign2.default)({}, item, (0, _defineProperty3.default)({}, childrenColumnName, _this10.recursiveSort(item[childrenColumnName], sorterFn))) : item;
	        });
	    };

	    Table.prototype.getLocalData = function getLocalData() {
	        var _this11 = this;

	        var state = this.state;
	        var dataSource = this.props.dataSource;

	        var data = dataSource || [];
	        // 优化本地排序
	        data = data.slice(0);
	        var sorterFn = this.getSorterFn();
	        if (sorterFn) {
	            data = this.recursiveSort(data, sorterFn);
	        }
	        // 筛选
	        if (state.filters) {
	            Object.keys(state.filters).forEach(function (columnKey) {
	                var col = _this11.findColumn(columnKey);
	                if (!col) {
	                    return;
	                }
	                var values = state.filters[columnKey] || [];
	                if (values.length === 0) {
	                    return;
	                }
	                var onFilter = col.onFilter;
	                data = onFilter ? data.filter(function (record) {
	                    return values.some(function (v) {
	                        return onFilter(v, record);
	                    });
	                }) : data;
	            });
	        }
	        return data;
	    };

	    Table.prototype.render = function render() {
	        var _classNames,
	            _this12 = this;

	        var _splitObject = (0, _splitObject4.default)(this.props, ['style', 'className', 'prefixCls']),
	            _splitObject2 = (0, _slicedToArray3.default)(_splitObject, 2),
	            _splitObject2$ = _splitObject2[0],
	            style = _splitObject2$.style,
	            className = _splitObject2$.className,
	            prefixCls = _splitObject2$.prefixCls,
	            restProps = _splitObject2[1];

	        var data = this.getCurrentPageData();
	        var columns = this.renderRowSelection();
	        var expandIconAsCell = this.props.expandedRowRender && this.props.expandIconAsCell !== false;
	        var locale = this.getLocale();
	        var classString = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-' + this.props.size, true), (0, _defineProperty3.default)(_classNames, prefixCls + '-bordered', this.props.bordered), (0, _defineProperty3.default)(_classNames, prefixCls + '-empty', !data.length), _classNames));
	        columns = this.renderColumnsDropdown(columns);
	        columns = columns.map(function (column, i) {
	            var newColumn = (0, _objectAssign2.default)({}, column);
	            newColumn.key = _this12.getColumnKey(newColumn, i);
	            return newColumn;
	        });
	        var expandIconColumnIndex = columns[0] && columns[0].key === 'selection-column' ? 1 : 0;
	        if ('expandIconColumnIndex' in restProps) {
	            expandIconColumnIndex = restProps.expandIconColumnIndex;
	        }
	        var table = _react2.default.createElement(_rcTable2.default, (0, _extends3.default)({}, restProps, { prefixCls: prefixCls, data: data, columns: columns, className: classString, expandIconColumnIndex: expandIconColumnIndex, expandIconAsCell: expandIconAsCell, emptyText: function emptyText() {
	                return locale.emptyText;
	            } }));
	        // if there is no pagination or no data,
	        // the height of spin should decrease by half of pagination
	        var paginationPatchClass = this.hasPagination() && data && data.length !== 0 ? prefixCls + '-with-pagination' : prefixCls + '-without-pagination';
	        var spinClassName = this.props.loading ? paginationPatchClass + ' ' + prefixCls + '-spin-holder' : '';
	        table = _react2.default.createElement(
	            _spin2.default,
	            { className: spinClassName, spinning: this.props.loading },
	            table
	        );
	        return _react2.default.createElement(
	            'div',
	            { className: className + ' clearfix', style: style },
	            table,
	            this.renderPagination()
	        );
	    };

	    return Table;
	}(_react2.default.Component);

	exports.default = Table;

	Table.Column = _Column2.default;
	Table.ColumnGroup = _ColumnGroup2.default;
	Table.propTypes = {
	    dataSource: _react2.default.PropTypes.array,
	    columns: _react2.default.PropTypes.array,
	    prefixCls: _react2.default.PropTypes.string,
	    useFixedHeader: _react2.default.PropTypes.bool,
	    rowSelection: _react2.default.PropTypes.object,
	    className: _react2.default.PropTypes.string,
	    size: _react2.default.PropTypes.string,
	    loading: _react2.default.PropTypes.bool,
	    bordered: _react2.default.PropTypes.bool,
	    onChange: _react2.default.PropTypes.func,
	    locale: _react2.default.PropTypes.object,
	    dropdownPrefixCls: _react2.default.PropTypes.string
	};
	Table.defaultProps = {
	    dataSource: [],
	    prefixCls: 'ant-table',
	    useFixedHeader: false,
	    rowSelection: null,
	    className: '',
	    size: 'large',
	    loading: false,
	    bordered: false,
	    indentSize: 20,
	    locale: {},
	    rowKey: 'key'
	};
	Table.contextTypes = {
	    antLocale: _react2.default.PropTypes.object
	};
	module.exports = exports['default'];

/***/ },

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = createStore;

	var _objectAssign = __webpack_require__(9);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createStore(initialState) {
	    var state = initialState;
	    var listeners = [];
	    function setState(partial) {
	        state = (0, _objectAssign2.default)({}, state, partial);
	        for (var i = 0; i < listeners.length; i++) {
	            listeners[i]();
	        }
	    }
	    function getState() {
	        return state;
	    }
	    function subscribe(listener) {
	        listeners.push(listener);
	        return function unsubscribe() {
	            var index = listeners.indexOf(listener);
	            listeners.splice(index, 1);
	        };
	    }
	    return {
	        setState: setState,
	        getState: getState,
	        subscribe: subscribe
	    };
	}
	module.exports = exports['default'];

/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _typeof2 = __webpack_require__(46);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _rcMenu = __webpack_require__(169);

	var _rcMenu2 = _interopRequireDefault(_rcMenu);

	var _dropdown = __webpack_require__(94);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _checkbox = __webpack_require__(40);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _radio = __webpack_require__(41);

	var _radio2 = _interopRequireDefault(_radio);

	var _FilterDropdownMenuWrapper = __webpack_require__(480);

	var _FilterDropdownMenuWrapper2 = _interopRequireDefault(_FilterDropdownMenuWrapper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FilterMenu = function (_React$Component) {
	    (0, _inherits3.default)(FilterMenu, _React$Component);

	    function FilterMenu(props) {
	        (0, _classCallCheck3.default)(this, FilterMenu);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

	        _this.setSelectedKeys = function (_ref) {
	            var selectedKeys = _ref.selectedKeys;

	            _this.setState({ selectedKeys: selectedKeys });
	        };
	        _this.handleClearFilters = function () {
	            _this.setState({
	                selectedKeys: []
	            }, _this.handleConfirm);
	        };
	        _this.handleConfirm = function () {
	            _this.setVisible(false);
	            _this.confirmFilter();
	        };
	        _this.onVisibleChange = function (visible) {
	            _this.setVisible(visible);
	            if (!visible) {
	                _this.confirmFilter();
	            }
	        };
	        _this.handleMenuItemClick = function (info) {
	            if (info.keyPath.length <= 1) {
	                return;
	            }
	            var keyPathOfSelectedItem = _this.state.keyPathOfSelectedItem;
	            if (_this.state.selectedKeys.indexOf(info.key) >= 0) {
	                // deselect SubMenu child
	                delete keyPathOfSelectedItem[info.key];
	            } else {
	                // select SubMenu child
	                keyPathOfSelectedItem[info.key] = info.keyPath;
	            }
	            _this.setState({ keyPathOfSelectedItem: keyPathOfSelectedItem });
	        };
	        var visible = 'filterDropdownVisible' in props.column ? props.column.filterDropdownVisible : false;
	        _this.state = {
	            selectedKeys: props.selectedKeys,
	            keyPathOfSelectedItem: {},
	            visible: visible
	        };
	        return _this;
	    }

	    FilterMenu.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        var column = nextProps.column;

	        var newState = {};
	        if ('selectedKeys' in nextProps) {
	            newState.selectedKeys = nextProps.selectedKeys;
	        }
	        if ('filterDropdownVisible' in column) {
	            newState.visible = column.filterDropdownVisible;
	        }
	        if (Object.keys(newState).length > 0) {
	            this.setState(newState);
	        }
	    };

	    FilterMenu.prototype.setVisible = function setVisible(visible) {
	        var column = this.props.column;

	        if (!('filterDropdownVisible' in column)) {
	            this.setState({ visible: visible });
	        }
	        if (column.onFilterDropdownVisibleChange) {
	            column.onFilterDropdownVisibleChange(visible);
	        }
	    };

	    FilterMenu.prototype.confirmFilter = function confirmFilter() {
	        if (this.state.selectedKeys !== this.props.selectedKeys) {
	            this.props.confirmFilter(this.props.column, this.state.selectedKeys);
	        }
	    };

	    FilterMenu.prototype.renderMenuItem = function renderMenuItem(item) {
	        var column = this.props.column;

	        var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
	        var input = multiple ? _react2.default.createElement(_checkbox2.default, { checked: this.state.selectedKeys.indexOf(item.value.toString()) >= 0 }) : _react2.default.createElement(_radio2.default, { checked: this.state.selectedKeys.indexOf(item.value.toString()) >= 0 });
	        return _react2.default.createElement(
	            _rcMenu.Item,
	            { key: item.value },
	            input,
	            _react2.default.createElement(
	                'span',
	                null,
	                item.text
	            )
	        );
	    };

	    FilterMenu.prototype.renderMenus = function renderMenus(items) {
	        var _this2 = this;

	        return items.map(function (item) {
	            if (item.children && item.children.length > 0) {
	                var _ret = function () {
	                    var keyPathOfSelectedItem = _this2.state.keyPathOfSelectedItem;

	                    var containSelected = Object.keys(keyPathOfSelectedItem).some(function (key) {
	                        return keyPathOfSelectedItem[key].indexOf(item.value) >= 0;
	                    });
	                    var subMenuCls = containSelected ? _this2.props.dropdownPrefixCls + '-submenu-contain-selected' : '';
	                    return {
	                        v: _react2.default.createElement(
	                            _rcMenu.SubMenu,
	                            { title: item.text, className: subMenuCls, key: item.value.toString() },
	                            item.children.map(function (child) {
	                                return _this2.renderMenuItem(child);
	                            })
	                        )
	                    };
	                }();

	                if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	            }
	            return _this2.renderMenuItem(item);
	        });
	    };

	    FilterMenu.prototype.render = function render() {
	        var _props = this.props,
	            column = _props.column,
	            locale = _props.locale,
	            prefixCls = _props.prefixCls,
	            dropdownPrefixCls = _props.dropdownPrefixCls;
	        // default multiple selection in filter dropdown

	        var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
	        var menus = column.filterDropdown ? _react2.default.createElement(
	            _FilterDropdownMenuWrapper2.default,
	            null,
	            column.filterDropdown
	        ) : _react2.default.createElement(
	            _FilterDropdownMenuWrapper2.default,
	            { className: prefixCls + '-dropdown' },
	            _react2.default.createElement(
	                _rcMenu2.default,
	                { multiple: multiple, onClick: this.handleMenuItemClick, prefixCls: dropdownPrefixCls + '-menu', onSelect: this.setSelectedKeys, onDeselect: this.setSelectedKeys, selectedKeys: this.state.selectedKeys },
	                this.renderMenus(column.filters)
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: prefixCls + '-dropdown-btns' },
	                _react2.default.createElement(
	                    'a',
	                    { className: prefixCls + '-dropdown-link confirm', onClick: this.handleConfirm },
	                    locale.filterConfirm
	                ),
	                _react2.default.createElement(
	                    'a',
	                    { className: prefixCls + '-dropdown-link clear', onClick: this.handleClearFilters },
	                    locale.filterReset
	                )
	            )
	        );
	        var dropdownSelectedClass = this.props.selectedKeys.length > 0 ? prefixCls + '-selected' : '';
	        return _react2.default.createElement(
	            _dropdown2.default,
	            { trigger: ['click'], overlay: menus, visible: this.state.visible, onVisibleChange: this.onVisibleChange },
	            _react2.default.createElement(_icon2.default, { title: locale.filterTitle, type: 'filter', className: dropdownSelectedClass })
	        );
	    };

	    return FilterMenu;
	}(_react2.default.Component);

	exports.default = FilterMenu;

	FilterMenu.defaultProps = {
	    handleFilter: function handleFilter() {},

	    column: {}
	};
	module.exports = exports['default'];

/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.flatArray = flatArray;
	exports.treeMap = treeMap;
	exports.normalizeColumns = normalizeColumns;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _objectAssign = __webpack_require__(9);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _Column = __webpack_require__(289);

	var _Column2 = _interopRequireDefault(_Column);

	var _ColumnGroup = __webpack_require__(290);

	var _ColumnGroup2 = _interopRequireDefault(_ColumnGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function flatArray() {
	    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var childrenName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';

	    var result = [];
	    var loop = function loop(array) {
	        array.forEach(function (item) {
	            var newItem = (0, _objectAssign2.default)({}, item);
	            delete newItem[childrenName];
	            result.push(newItem);
	            if (item[childrenName] && item[childrenName].length > 0) {
	                loop(item[childrenName]);
	            }
	        });
	    };
	    loop(data);
	    return result;
	}
	function treeMap(tree, mapper) {
	    var childrenName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';

	    return tree.map(function (node, index) {
	        var extra = {};
	        if (node[childrenName]) {
	            extra[childrenName] = treeMap(node[childrenName], mapper, childrenName);
	        }
	        return (0, _objectAssign2.default)({}, mapper(node, index), extra);
	    });
	}
	function normalizeColumns(elements) {
	    var columns = [];
	    _react2.default.Children.forEach(elements, function (element) {
	        if (!isColumnElement(element)) {
	            return;
	        }
	        var column = (0, _objectAssign2.default)({}, element.props);
	        if (element.key) {
	            column.key = element.key;
	        }
	        if (element.type === _ColumnGroup2.default) {
	            column.children = normalizeColumns(column.children);
	        }
	        columns.push(column);
	    });
	    return columns;
	}
	function isColumnElement(element) {
	    return element && (element.type === _Column2.default || element.type === _ColumnGroup2.default);
	}

/***/ },

/***/ 779:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'ajax': __webpack_require__(1717),
	    'basic': __webpack_require__(1718),
	    'bordered': __webpack_require__(1719),
	    'colspan-rowspan': __webpack_require__(1720),
	    'custom-filter-panel': __webpack_require__(1721),
	    'dynamic-settings': __webpack_require__(1722),
	    'edit-cell': __webpack_require__(1723),
	    'edit-row': __webpack_require__(1724),
	    'expand-children': __webpack_require__(1725),
	    'expand': __webpack_require__(1726),
	    'fixed-columns-header': __webpack_require__(1727),
	    'fixed-columns': __webpack_require__(1728),
	    'fixed-header': __webpack_require__(1729),
	    'grouping-columns': __webpack_require__(1730),
	    'head': __webpack_require__(1731),
	    'jsx': __webpack_require__(1732),
	    'paging': __webpack_require__(1733),
	    'reset-filter': __webpack_require__(1734),
	    'row-selection-and-operation': __webpack_require__(1735),
	    'row-selection': __webpack_require__(1736),
	    'size': __webpack_require__(1737),
	}

/***/ },

/***/ 1119:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * Reqwest! A general purpose XHR connection manager
	  * license MIT (c) Dustin Diaz 2015
	  * https://github.com/ded/reqwest
	  */

	!function (name, context, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else context[name] = definition()
	}('reqwest', this, function () {

	  var context = this

	  if ('window' in context) {
	    var doc = document
	      , byTag = 'getElementsByTagName'
	      , head = doc[byTag]('head')[0]
	  } else {
	    var XHR2
	    try {
	      XHR2 = __webpack_require__(2012)
	    } catch (ex) {
	      throw new Error('Peer dependency `xhr2` required! Please npm install xhr2')
	    }
	  }


	  var httpsRe = /^http/
	    , protocolRe = /(^\w+):\/\//
	    , twoHundo = /^(20\d|1223)$/ //http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	    , readyState = 'readyState'
	    , contentType = 'Content-Type'
	    , requestedWith = 'X-Requested-With'
	    , uniqid = 0
	    , callbackPrefix = 'reqwest_' + (+new Date())
	    , lastValue // data stored by the most recent JSONP callback
	    , xmlHttpRequest = 'XMLHttpRequest'
	    , xDomainRequest = 'XDomainRequest'
	    , noop = function () {}

	    , isArray = typeof Array.isArray == 'function'
	        ? Array.isArray
	        : function (a) {
	            return a instanceof Array
	          }

	    , defaultHeaders = {
	          'contentType': 'application/x-www-form-urlencoded'
	        , 'requestedWith': xmlHttpRequest
	        , 'accept': {
	              '*':  'text/javascript, text/html, application/xml, text/xml, */*'
	            , 'xml':  'application/xml, text/xml'
	            , 'html': 'text/html'
	            , 'text': 'text/plain'
	            , 'json': 'application/json, text/javascript'
	            , 'js':   'application/javascript, text/javascript'
	          }
	      }

	    , xhr = function(o) {
	        // is it x-domain
	        if (o['crossOrigin'] === true) {
	          var xhr = context[xmlHttpRequest] ? new XMLHttpRequest() : null
	          if (xhr && 'withCredentials' in xhr) {
	            return xhr
	          } else if (context[xDomainRequest]) {
	            return new XDomainRequest()
	          } else {
	            throw new Error('Browser does not support cross-origin requests')
	          }
	        } else if (context[xmlHttpRequest]) {
	          return new XMLHttpRequest()
	        } else if (XHR2) {
	          return new XHR2()
	        } else {
	          return new ActiveXObject('Microsoft.XMLHTTP')
	        }
	      }
	    , globalSetupOptions = {
	        dataFilter: function (data) {
	          return data
	        }
	      }

	  function succeed(r) {
	    var protocol = protocolRe.exec(r.url)
	    protocol = (protocol && protocol[1]) || context.location.protocol
	    return httpsRe.test(protocol) ? twoHundo.test(r.request.status) : !!r.request.response
	  }

	  function handleReadyState(r, success, error) {
	    return function () {
	      // use _aborted to mitigate against IE err c00c023f
	      // (can't read props on aborted request objects)
	      if (r._aborted) return error(r.request)
	      if (r._timedOut) return error(r.request, 'Request is aborted: timeout')
	      if (r.request && r.request[readyState] == 4) {
	        r.request.onreadystatechange = noop
	        if (succeed(r)) success(r.request)
	        else
	          error(r.request)
	      }
	    }
	  }

	  function setHeaders(http, o) {
	    var headers = o['headers'] || {}
	      , h

	    headers['Accept'] = headers['Accept']
	      || defaultHeaders['accept'][o['type']]
	      || defaultHeaders['accept']['*']

	    var isAFormData = typeof FormData !== 'undefined' && (o['data'] instanceof FormData);
	    // breaks cross-origin requests with legacy browsers
	    if (!o['crossOrigin'] && !headers[requestedWith]) headers[requestedWith] = defaultHeaders['requestedWith']
	    if (!headers[contentType] && !isAFormData) headers[contentType] = o['contentType'] || defaultHeaders['contentType']
	    for (h in headers)
	      headers.hasOwnProperty(h) && 'setRequestHeader' in http && http.setRequestHeader(h, headers[h])
	  }

	  function setCredentials(http, o) {
	    if (typeof o['withCredentials'] !== 'undefined' && typeof http.withCredentials !== 'undefined') {
	      http.withCredentials = !!o['withCredentials']
	    }
	  }

	  function generalCallback(data) {
	    lastValue = data
	  }

	  function urlappend (url, s) {
	    return url + (/\?/.test(url) ? '&' : '?') + s
	  }

	  function handleJsonp(o, fn, err, url) {
	    var reqId = uniqid++
	      , cbkey = o['jsonpCallback'] || 'callback' // the 'callback' key
	      , cbval = o['jsonpCallbackName'] || reqwest.getcallbackPrefix(reqId)
	      , cbreg = new RegExp('((^|\\?|&)' + cbkey + ')=([^&]+)')
	      , match = url.match(cbreg)
	      , script = doc.createElement('script')
	      , loaded = 0
	      , isIE10 = navigator.userAgent.indexOf('MSIE 10.0') !== -1

	    if (match) {
	      if (match[3] === '?') {
	        url = url.replace(cbreg, '$1=' + cbval) // wildcard callback func name
	      } else {
	        cbval = match[3] // provided callback func name
	      }
	    } else {
	      url = urlappend(url, cbkey + '=' + cbval) // no callback details, add 'em
	    }

	    context[cbval] = generalCallback

	    script.type = 'text/javascript'
	    script.src = url
	    script.async = true
	    if (typeof script.onreadystatechange !== 'undefined' && !isIE10) {
	      // need this for IE due to out-of-order onreadystatechange(), binding script
	      // execution to an event listener gives us control over when the script
	      // is executed. See http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
	      script.htmlFor = script.id = '_reqwest_' + reqId
	    }

	    script.onload = script.onreadystatechange = function () {
	      if ((script[readyState] && script[readyState] !== 'complete' && script[readyState] !== 'loaded') || loaded) {
	        return false
	      }
	      script.onload = script.onreadystatechange = null
	      script.onclick && script.onclick()
	      // Call the user callback with the last value stored and clean up values and scripts.
	      fn(lastValue)
	      lastValue = undefined
	      head.removeChild(script)
	      loaded = 1
	    }

	    // Add the script to the DOM head
	    head.appendChild(script)

	    // Enable JSONP timeout
	    return {
	      abort: function () {
	        script.onload = script.onreadystatechange = null
	        err({}, 'Request is aborted: timeout', {})
	        lastValue = undefined
	        head.removeChild(script)
	        loaded = 1
	      }
	    }
	  }

	  function getRequest(fn, err) {
	    var o = this.o
	      , method = (o['method'] || 'GET').toUpperCase()
	      , url = typeof o === 'string' ? o : o['url']
	      // convert non-string objects to query-string form unless o['processData'] is false
	      , data = (o['processData'] !== false && o['data'] && typeof o['data'] !== 'string')
	        ? reqwest.toQueryString(o['data'])
	        : (o['data'] || null)
	      , http
	      , sendWait = false

	    // if we're working on a GET request and we have data then we should append
	    // query string to end of URL and not post data
	    if ((o['type'] == 'jsonp' || method == 'GET') && data) {
	      url = urlappend(url, data)
	      data = null
	    }

	    if (o['type'] == 'jsonp') return handleJsonp(o, fn, err, url)

	    // get the xhr from the factory if passed
	    // if the factory returns null, fall-back to ours
	    http = (o.xhr && o.xhr(o)) || xhr(o)

	    http.open(method, url, o['async'] === false ? false : true)
	    setHeaders(http, o)
	    setCredentials(http, o)
	    if (context[xDomainRequest] && http instanceof context[xDomainRequest]) {
	        http.onload = fn
	        http.onerror = err
	        // NOTE: see
	        // http://social.msdn.microsoft.com/Forums/en-US/iewebdevelopment/thread/30ef3add-767c-4436-b8a9-f1ca19b4812e
	        http.onprogress = function() {}
	        sendWait = true
	    } else {
	      http.onreadystatechange = handleReadyState(this, fn, err)
	    }
	    o['before'] && o['before'](http)
	    if (sendWait) {
	      setTimeout(function () {
	        http.send(data)
	      }, 200)
	    } else {
	      http.send(data)
	    }
	    return http
	  }

	  function Reqwest(o, fn) {
	    this.o = o
	    this.fn = fn

	    init.apply(this, arguments)
	  }

	  function setType(header) {
	    // json, javascript, text/plain, text/html, xml
	    if (header === null) return undefined; //In case of no content-type.
	    if (header.match('json')) return 'json'
	    if (header.match('javascript')) return 'js'
	    if (header.match('text')) return 'html'
	    if (header.match('xml')) return 'xml'
	  }

	  function init(o, fn) {

	    this.url = typeof o == 'string' ? o : o['url']
	    this.timeout = null

	    // whether request has been fulfilled for purpose
	    // of tracking the Promises
	    this._fulfilled = false
	    // success handlers
	    this._successHandler = function(){}
	    this._fulfillmentHandlers = []
	    // error handlers
	    this._errorHandlers = []
	    // complete (both success and fail) handlers
	    this._completeHandlers = []
	    this._erred = false
	    this._responseArgs = {}

	    var self = this

	    fn = fn || function () {}

	    if (o['timeout']) {
	      this.timeout = setTimeout(function () {
	        timedOut()
	      }, o['timeout'])
	    }

	    if (o['success']) {
	      this._successHandler = function () {
	        o['success'].apply(o, arguments)
	      }
	    }

	    if (o['error']) {
	      this._errorHandlers.push(function () {
	        o['error'].apply(o, arguments)
	      })
	    }

	    if (o['complete']) {
	      this._completeHandlers.push(function () {
	        o['complete'].apply(o, arguments)
	      })
	    }

	    function complete (resp) {
	      o['timeout'] && clearTimeout(self.timeout)
	      self.timeout = null
	      while (self._completeHandlers.length > 0) {
	        self._completeHandlers.shift()(resp)
	      }
	    }

	    function success (resp) {
	      var type = o['type'] || resp && setType(resp.getResponseHeader('Content-Type')) // resp can be undefined in IE
	      resp = (type !== 'jsonp') ? self.request : resp
	      // use global data filter on response text
	      var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type)
	        , r = filteredResponse
	      try {
	        resp.responseText = r
	      } catch (e) {
	        // can't assign this in IE<=8, just ignore
	      }
	      if (r) {
	        switch (type) {
	        case 'json':
	          try {
	            resp = context.JSON ? context.JSON.parse(r) : eval('(' + r + ')')
	          } catch (err) {
	            return error(resp, 'Could not parse JSON in response', err)
	          }
	          break
	        case 'js':
	          resp = eval(r)
	          break
	        case 'html':
	          resp = r
	          break
	        case 'xml':
	          resp = resp.responseXML
	              && resp.responseXML.parseError // IE trololo
	              && resp.responseXML.parseError.errorCode
	              && resp.responseXML.parseError.reason
	            ? null
	            : resp.responseXML
	          break
	        }
	      }

	      self._responseArgs.resp = resp
	      self._fulfilled = true
	      fn(resp)
	      self._successHandler(resp)
	      while (self._fulfillmentHandlers.length > 0) {
	        resp = self._fulfillmentHandlers.shift()(resp)
	      }

	      complete(resp)
	    }

	    function timedOut() {
	      self._timedOut = true
	      self.request.abort()
	    }

	    function error(resp, msg, t) {
	      resp = self.request
	      self._responseArgs.resp = resp
	      self._responseArgs.msg = msg
	      self._responseArgs.t = t
	      self._erred = true
	      while (self._errorHandlers.length > 0) {
	        self._errorHandlers.shift()(resp, msg, t)
	      }
	      complete(resp)
	    }

	    this.request = getRequest.call(this, success, error)
	  }

	  Reqwest.prototype = {
	    abort: function () {
	      this._aborted = true
	      this.request.abort()
	    }

	  , retry: function () {
	      init.call(this, this.o, this.fn)
	    }

	    /**
	     * Small deviation from the Promises A CommonJs specification
	     * http://wiki.commonjs.org/wiki/Promises/A
	     */

	    /**
	     * `then` will execute upon successful requests
	     */
	  , then: function (success, fail) {
	      success = success || function () {}
	      fail = fail || function () {}
	      if (this._fulfilled) {
	        this._responseArgs.resp = success(this._responseArgs.resp)
	      } else if (this._erred) {
	        fail(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
	      } else {
	        this._fulfillmentHandlers.push(success)
	        this._errorHandlers.push(fail)
	      }
	      return this
	    }

	    /**
	     * `always` will execute whether the request succeeds or fails
	     */
	  , always: function (fn) {
	      if (this._fulfilled || this._erred) {
	        fn(this._responseArgs.resp)
	      } else {
	        this._completeHandlers.push(fn)
	      }
	      return this
	    }

	    /**
	     * `fail` will execute when the request fails
	     */
	  , fail: function (fn) {
	      if (this._erred) {
	        fn(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
	      } else {
	        this._errorHandlers.push(fn)
	      }
	      return this
	    }
	  , 'catch': function (fn) {
	      return this.fail(fn)
	    }
	  }

	  function reqwest(o, fn) {
	    return new Reqwest(o, fn)
	  }

	  // normalize newline variants according to spec -> CRLF
	  function normalize(s) {
	    return s ? s.replace(/\r?\n/g, '\r\n') : ''
	  }

	  function serial(el, cb) {
	    var n = el.name
	      , t = el.tagName.toLowerCase()
	      , optCb = function (o) {
	          // IE gives value="" even where there is no value attribute
	          // 'specified' ref: http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-862529273
	          if (o && !o['disabled'])
	            cb(n, normalize(o['attributes']['value'] && o['attributes']['value']['specified'] ? o['value'] : o['text']))
	        }
	      , ch, ra, val, i

	    // don't serialize elements that are disabled or without a name
	    if (el.disabled || !n) return

	    switch (t) {
	    case 'input':
	      if (!/reset|button|image|file/i.test(el.type)) {
	        ch = /checkbox/i.test(el.type)
	        ra = /radio/i.test(el.type)
	        val = el.value
	        // WebKit gives us "" instead of "on" if a checkbox has no value, so correct it here
	        ;(!(ch || ra) || el.checked) && cb(n, normalize(ch && val === '' ? 'on' : val))
	      }
	      break
	    case 'textarea':
	      cb(n, normalize(el.value))
	      break
	    case 'select':
	      if (el.type.toLowerCase() === 'select-one') {
	        optCb(el.selectedIndex >= 0 ? el.options[el.selectedIndex] : null)
	      } else {
	        for (i = 0; el.length && i < el.length; i++) {
	          el.options[i].selected && optCb(el.options[i])
	        }
	      }
	      break
	    }
	  }

	  // collect up all form elements found from the passed argument elements all
	  // the way down to child elements; pass a '<form>' or form fields.
	  // called with 'this'=callback to use for serial() on each element
	  function eachFormElement() {
	    var cb = this
	      , e, i
	      , serializeSubtags = function (e, tags) {
	          var i, j, fa
	          for (i = 0; i < tags.length; i++) {
	            fa = e[byTag](tags[i])
	            for (j = 0; j < fa.length; j++) serial(fa[j], cb)
	          }
	        }

	    for (i = 0; i < arguments.length; i++) {
	      e = arguments[i]
	      if (/input|select|textarea/i.test(e.tagName)) serial(e, cb)
	      serializeSubtags(e, [ 'input', 'select', 'textarea' ])
	    }
	  }

	  // standard query string style serialization
	  function serializeQueryString() {
	    return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
	  }

	  // { 'name': 'value', ... } style serialization
	  function serializeHash() {
	    var hash = {}
	    eachFormElement.apply(function (name, value) {
	      if (name in hash) {
	        hash[name] && !isArray(hash[name]) && (hash[name] = [hash[name]])
	        hash[name].push(value)
	      } else hash[name] = value
	    }, arguments)
	    return hash
	  }

	  // [ { name: 'name', value: 'value' }, ... ] style serialization
	  reqwest.serializeArray = function () {
	    var arr = []
	    eachFormElement.apply(function (name, value) {
	      arr.push({name: name, value: value})
	    }, arguments)
	    return arr
	  }

	  reqwest.serialize = function () {
	    if (arguments.length === 0) return ''
	    var opt, fn
	      , args = Array.prototype.slice.call(arguments, 0)

	    opt = args.pop()
	    opt && opt.nodeType && args.push(opt) && (opt = null)
	    opt && (opt = opt.type)

	    if (opt == 'map') fn = serializeHash
	    else if (opt == 'array') fn = reqwest.serializeArray
	    else fn = serializeQueryString

	    return fn.apply(null, args)
	  }

	  reqwest.toQueryString = function (o, trad) {
	    var prefix, i
	      , traditional = trad || false
	      , s = []
	      , enc = encodeURIComponent
	      , add = function (key, value) {
	          // If value is a function, invoke it and return its value
	          value = ('function' === typeof value) ? value() : (value == null ? '' : value)
	          s[s.length] = enc(key) + '=' + enc(value)
	        }
	    // If an array was passed in, assume that it is an array of form elements.
	    if (isArray(o)) {
	      for (i = 0; o && i < o.length; i++) add(o[i]['name'], o[i]['value'])
	    } else {
	      // If traditional, encode the "old" way (the way 1.3.2 or older
	      // did it), otherwise encode params recursively.
	      for (prefix in o) {
	        if (o.hasOwnProperty(prefix)) buildParams(prefix, o[prefix], traditional, add)
	      }
	    }

	    // spaces should be + according to spec
	    return s.join('&').replace(/%20/g, '+')
	  }

	  function buildParams(prefix, obj, traditional, add) {
	    var name, i, v
	      , rbracket = /\[\]$/

	    if (isArray(obj)) {
	      // Serialize array item.
	      for (i = 0; obj && i < obj.length; i++) {
	        v = obj[i]
	        if (traditional || rbracket.test(prefix)) {
	          // Treat each array item as a scalar.
	          add(prefix, v)
	        } else {
	          buildParams(prefix + '[' + (typeof v === 'object' ? i : '') + ']', v, traditional, add)
	        }
	      }
	    } else if (obj && obj.toString() === '[object Object]') {
	      // Serialize object item.
	      for (name in obj) {
	        buildParams(prefix + '[' + name + ']', obj[name], traditional, add)
	      }

	    } else {
	      // Serialize scalar item.
	      add(prefix, obj)
	    }
	  }

	  reqwest.getcallbackPrefix = function () {
	    return callbackPrefix
	  }

	  // jQuery and Zepto compatibility, differences can be remapped here so you can call
	  // .ajax.compat(options, callback)
	  reqwest.compat = function (o, fn) {
	    if (o) {
	      o['type'] && (o['method'] = o['type']) && delete o['type']
	      o['dataType'] && (o['type'] = o['dataType'])
	      o['jsonpCallback'] && (o['jsonpCallbackName'] = o['jsonpCallback']) && delete o['jsonpCallback']
	      o['jsonp'] && (o['jsonpCallback'] = o['jsonp'])
	    }
	    return new Reqwest(o, fn)
	  }

	  reqwest.ajaxSetup = function (options) {
	    options = options || {}
	    for (var k in options) {
	      globalSetupOptions[k] = options[k]
	    }
	  }

	  return reqwest
	});


/***/ },

/***/ 1717:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(43);

	var _table = __webpack_require__(42);

	var _table2 = _interopRequireDefault(_table);

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reqwest = __webpack_require__(1119);

	var _reqwest2 = _interopRequireDefault(_reqwest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "这个例子通过简单的 ajax 读取方式，演示了如何从服务端读取并展现数据，具有筛选、排序等功能以及页面 loading 效果。开发者可以自行接入其他数据处理方式。"], ["p", "另外，本例也展示了筛选排序功能如何交给服务端实现，列不需要指定具体的 ", ["code", "onFilter"], " 和 ", ["code", "sorter"], " 函数，而是在把筛选和排序的参数发到服务端来处理。"], ["p", ["strong", "注意，此示例使用 ", ["a", {
	      "title": null,
	      "href": "https://randomuser.me"
	    }, "模拟接口"], "，展示数据可能不准确，请打开网络面板查看请求。"]]],
	    "en-US": [["p", "This example shows how to fetch and present data from remote server, and how to implement filtering and sorting in server side by sending related parameters to server."], ["p", ["strong", "Note, this example use ", ["a", {
	      "title": null,
	      "href": "https://randomuser.me"
	    }, "Mock API"], " that you can look up in Network Console."]]]
	  },
	  "meta": {
	    "order": 9,
	    "title": {
	      "en-US": "Ajax",
	      "zh-CN": "远程加载数据"
	    },
	    "filename": "components/table/demo/ajax.md",
	    "id": "components-table-demo-ajax"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> reqwest <span class=\"token keyword\">from</span> <span class=\"token string\">'reqwest'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  sorter<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> name <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>name<span class=\"token punctuation\">.</span>first<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>name<span class=\"token punctuation\">.</span>last<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token string\">'20%'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Gender'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'gender'</span><span class=\"token punctuation\">,</span>\n  filters<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span> text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Male'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'male'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span> text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Female'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'female'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token string\">'20%'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Email'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'email'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Test <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      data<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      pagination<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleTableChange</span><span class=\"token punctuation\">(</span>pagination<span class=\"token punctuation\">,</span> filters<span class=\"token punctuation\">,</span> sorter<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> pager <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>pagination<span class=\"token punctuation\">;</span>\n    pager<span class=\"token punctuation\">.</span>current <span class=\"token operator\">=</span> pagination<span class=\"token punctuation\">.</span>current<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      pagination<span class=\"token punctuation\">:</span> pager<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">fetch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      results<span class=\"token punctuation\">:</span> pagination<span class=\"token punctuation\">.</span>pageSize<span class=\"token punctuation\">,</span>\n      page<span class=\"token punctuation\">:</span> pagination<span class=\"token punctuation\">.</span>current<span class=\"token punctuation\">,</span>\n      sortField<span class=\"token punctuation\">:</span> sorter<span class=\"token punctuation\">.</span>field<span class=\"token punctuation\">,</span>\n      sortOrder<span class=\"token punctuation\">:</span> sorter<span class=\"token punctuation\">.</span>order<span class=\"token punctuation\">,</span>\n      <span class=\"token operator\">...</span>filters<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">fetch</span><span class=\"token punctuation\">(</span>params <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'params:'</span><span class=\"token punctuation\">,</span> params<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token function\">reqwest</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      url<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://randomuser.me/api'</span><span class=\"token punctuation\">,</span>\n      method<span class=\"token punctuation\">:</span> <span class=\"token string\">'get'</span><span class=\"token punctuation\">,</span>\n      data<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        results<span class=\"token punctuation\">:</span> <span class=\"token number\">10</span><span class=\"token punctuation\">,</span>\n        <span class=\"token operator\">...</span>params<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'json'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">then</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> pagination <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>pagination<span class=\"token punctuation\">;</span>\n      <span class=\"token comment\" spellcheck=\"true\">// Read total count from server</span>\n      <span class=\"token comment\" spellcheck=\"true\">// pagination.total = data.totalCount;</span>\n      pagination<span class=\"token punctuation\">.</span>total <span class=\"token operator\">=</span> <span class=\"token number\">200</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        data<span class=\"token punctuation\">:</span> data<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">,</span>\n        pagination<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">fetch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">rowKey</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>record <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>registered<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">pagination</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>pagination<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">loading</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleTableChange<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Test</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name', sorter: true, render: function render(name) {
	        return name.first + ' ' + name.last;
	      }, width: '20%' }, { title: 'Gender', dataIndex: 'gender', filters: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }],
	      width: '20%' }, { title: 'Email', dataIndex: 'email' }];var Test = _react2.default.createClass({
	      displayName: 'Test',
	      getInitialState: function getInitialState() {
	        return { data: [],
	          pagination: {}, loading: false };
	      },
	      handleTableChange: function handleTableChange(pagination, filters, sorter) {
	        var pager = this.state.pagination;pager.current = pagination.current;this.setState({ pagination: pager });this.fetch((0, _extends3.default)({ results: pagination.pageSize, page: pagination.current, sortField: sorter.field, sortOrder: sorter.order }, filters));
	      },
	      fetch: function fetch() {
	        var _this = this;

	        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        console.log('params:', params);this.setState({ loading: true });(0, _reqwest2.default)({ url: 'https://randomuser.me/api', method: 'get', data: (0, _extends3.default)({ results: 10 }, params), type: 'json' }).then(function (data) {
	          var pagination = _this.state.pagination; // Read total count from server
	          // pagination.total = data.totalCount;
	          pagination.total = 200;_this.setState({ loading: false, data: data.results, pagination: pagination });
	        });
	      },
	      componentDidMount: function componentDidMount() {
	        this.fetch();
	      },
	      render: function render() {
	        return _react2.default.createElement(_table2.default, { columns: columns, rowKey: function rowKey(record) {
	            return record.registered;
	          }, dataSource: this.state.data, pagination: this.state.pagination, loading: this.state.loading, onChange: this.handleTableChange });
	      }
	    });return _react2.default.createElement(Test, null);
	  }
	};

/***/ },

/***/ 1718:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(43);

	var _table = __webpack_require__(42);

	var _table2 = _interopRequireDefault(_table);

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
	    "zh-CN": [["p", "简单的表格，最后一列是各种操作。"]],
	    "en-US": [["p", "Simple table with actions."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "en-US": "Basic Usage",
	      "zh-CN": "基本用法"
	    },
	    "filename": "components/table/demo/basic.md",
	    "id": "components-table-demo-basic"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> text <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Action'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'action'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Action 一 <span class=\"token punctuation\">{</span>record<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-divider<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Delete<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-divider<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-dropdown-link<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        More actions <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>down<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name', key: 'name', render: function render(text) {
	        return _react2.default.createElement(
	          'a',
	          { href: '#' },
	          text
	        );
	      } }, { title: 'Age', dataIndex: 'age', key: 'age' }, { title: 'Address', dataIndex: 'address', key: 'address' }, { title: 'Action', key: 'action', render: function render(text, record) {
	        return _react2.default.createElement(
	          'span',
	          null,
	          _react2.default.createElement(
	            'a',
	            { href: '#' },
	            'Action \u4E00 ',
	            record.name
	          ),
	          _react2.default.createElement('span', { className: 'ant-divider' }),
	          _react2.default.createElement(
	            'a',
	            { href: '#' },
	            'Delete'
	          ),
	          _react2.default.createElement('span', { className: 'ant-divider' }),
	          _react2.default.createElement(
	            'a',
	            { href: '#', className: 'ant-dropdown-link' },
	            'More actions ',
	            _react2.default.createElement(_icon2.default, { type: 'down' })
	          )
	        );
	      } }];var data = [{ key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' }, { key: '2', name: 'Jim Green',
	      age: 42,
	      address: 'London No. 1 Lake Park' }, { key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park' }];return _react2.default.createElement(_table2.default, { columns: columns, dataSource: data });
	  }
	};

/***/ },

/***/ 1719:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(43);

	var _table = __webpack_require__(42);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "添加表格边框线，页头和页脚。"]],
	    "en-US": [["p", "Add border, title and footer for table."]]
	  },
	  "meta": {
	    "order": 11,
	    "title": {
	      "en-US": "border, title and footer",
	      "zh-CN": "带边框"
	    },
	    "filename": "components/table/demo/bordered.md",
	    "id": "components-table-demo-bordered"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> text <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Cash Assets'</span><span class=\"token punctuation\">,</span>\n  className<span class=\"token punctuation\">:</span> <span class=\"token string\">'column-money'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'money'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  money<span class=\"token punctuation\">:</span> <span class=\"token string\">'￥300,000.00'</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  money<span class=\"token punctuation\">:</span> <span class=\"token string\">'￥1,256,000.00'</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  money<span class=\"token punctuation\">:</span> <span class=\"token string\">'￥120,000.00'</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span>\n    <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">bordered</span>\n    <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token string\">'Header'</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">footer</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token string\">'Footer'</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name', render: function render(text) {
	        return _react2.default.createElement(
	          'a',
	          { href: '#' },
	          text
	        );
	      } }, { title: 'Cash Assets', className: 'column-money', dataIndex: 'money' }, { title: 'Address', dataIndex: 'address' }];var data = [{ key: '1', name: 'John Brown', money: '￥300,000.00', address: 'New York No. 1 Lake Park' }, { key: '2', name: 'Jim Green', money: '￥1,256,000.00', address: 'London No. 1 Lake Park' }, { key: '3', name: 'Joe Black', money: '￥120,000.00', address: 'Sidney No. 1 Lake Park' }];return _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, bordered: true, title: function title() {
	        return 'Header';
	      }, footer: function footer() {
	        return 'Footer';
	      } });
	  },
	  "style": ".column-money {\n  text-align: right;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.column-money</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> right<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1720:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(43);

	var _table = __webpack_require__(42);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// In the fifth row, other columns are merged into first column
	// by setting it's colSpan to be 0
	module.exports = {
	  "content": {
	    "zh-CN": [["p", "表头只支持列合并，使用 column 里的 colSpan 进行设置。"], ["p", "表格支持行/列合并，使用 render 里的单元格属性 colSpan 或者 rowSpan 设值为 0 时，设置的表格不会渲染。"]],
	    "en-US": [["p", "Table column title supports ", ["code", "colSpan"], " that set in ", ["code", "column"], "."], ["p", "Table cell supports ", ["code", "colSpan"], " and ", ["code", "rowSpan"], " that set in render return object. When each of them is set to ", ["code", "0"], ", the cell will not be rendered."]]
	  },
	  "meta": {
	    "order": 14,
	    "title": {
	      "en-US": "colSpan and rowSpan",
	      "zh-CN": "表格行/列合并"
	    },
	    "filename": "components/table/demo/colspan-rowspan.md",
	    "id": "components-table-demo-colspan-rowspan"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// In the fifth row, other columns are merged into first column</span>\n<span class=\"token comment\" spellcheck=\"true\">// by setting it's colSpan to be 0</span>\n<span class=\"token keyword\">const</span> renderContent <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> row<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> obj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    children<span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">,</span>\n    props<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>index <span class=\"token operator\">===</span> <span class=\"token number\">4</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    obj<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>colSpan <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> obj<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> row<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>index <span class=\"token operator\">&lt;</span> <span class=\"token number\">4</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      children<span class=\"token punctuation\">:</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n      props<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        colSpan<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> renderContent<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Home phone'</span><span class=\"token punctuation\">,</span>\n  colSpan<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'tel'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> row<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> obj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      children<span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">,</span>\n      props<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>index <span class=\"token operator\">===</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      obj<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>rowSpan <span class=\"token operator\">=</span> <span class=\"token number\">2</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token comment\" spellcheck=\"true\">// These two are merged into above cell</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>index <span class=\"token operator\">===</span> <span class=\"token number\">3</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      obj<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>rowSpan <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>index <span class=\"token operator\">===</span> <span class=\"token number\">4</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      obj<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>colSpan <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> obj<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Phone'</span><span class=\"token punctuation\">,</span>\n  colSpan<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'phone'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> renderContent<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> renderContent<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  tel<span class=\"token punctuation\">:</span> <span class=\"token string\">'0571-22098909'</span><span class=\"token punctuation\">,</span>\n  phone<span class=\"token punctuation\">:</span> <span class=\"token number\">18889898989</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  tel<span class=\"token punctuation\">:</span> <span class=\"token string\">'0571-22098333'</span><span class=\"token punctuation\">,</span>\n  phone<span class=\"token punctuation\">:</span> <span class=\"token number\">18889898888</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  tel<span class=\"token punctuation\">:</span> <span class=\"token string\">'0575-22098909'</span><span class=\"token punctuation\">,</span>\n  phone<span class=\"token punctuation\">:</span> <span class=\"token number\">18900010002</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'4'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Red'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">18</span><span class=\"token punctuation\">,</span>\n  tel<span class=\"token punctuation\">:</span> <span class=\"token string\">'0575-22098909'</span><span class=\"token punctuation\">,</span>\n  phone<span class=\"token punctuation\">:</span> <span class=\"token number\">18900010002</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 2 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'5'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jake White'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">18</span><span class=\"token punctuation\">,</span>\n  tel<span class=\"token punctuation\">:</span> <span class=\"token string\">'0575-22098909'</span><span class=\"token punctuation\">,</span>\n  phone<span class=\"token punctuation\">:</span> <span class=\"token number\">18900010002</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Dublin No. 2 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">bordered</span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var renderContent = function renderContent(value, row, index) {
	      var obj = { children: value, props: {} };if (index === 4) {
	        obj.props.colSpan = 0;
	      }return obj;
	    };var columns = [{ title: 'Name', dataIndex: 'name', render: function render(text, row, index) {
	        if (index < 4) {
	          return _react2.default.createElement(
	            'a',
	            { href: '#' },
	            text
	          );
	        }
	        return { children: _react2.default.createElement(
	            'a',
	            { href: '#' },
	            text
	          ), props: { colSpan: 5 } };
	      } }, { title: 'Age',
	      dataIndex: 'age', render: renderContent
	    }, { title: 'Home phone', colSpan: 2, dataIndex: 'tel', render: function render(value, row, index) {
	        var obj = { children: value, props: {} };
	        if (index === 2) {
	          obj.props.rowSpan = 2;
	        } // These two are merged into above cell
	        if (index === 3) {
	          obj.props.rowSpan = 0;
	        }if (index === 4) {
	          obj.props.colSpan = 0;
	        }return obj;
	      } }, { title: 'Phone', colSpan: 0, dataIndex: 'phone', render: renderContent }, { title: 'Address',
	      dataIndex: 'address', render: renderContent }];var data = [{ key: '1', name: 'John Brown', age: 32, tel: '0571-22098909', phone: 18889898989, address: 'New York No. 1 Lake Park' }, { key: '2', name: 'Jim Green', tel: '0571-22098333', phone: 18889898888, age: 42, address: 'London No. 1 Lake Park' }, { key: '3', name: 'Joe Black', age: 32, tel: '0575-22098909', phone: 18900010002, address: 'Sidney No. 1 Lake Park' }, { key: '4', name: 'Jim Red', age: 18, tel: '0575-22098909', phone: 18900010002, address: 'London No. 2 Lake Park' }, { key: '5', name: 'Jake White', age: 18, tel: '0575-22098909', phone: 18900010002, address: 'Dublin No. 2 Lake Park' }];return _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, bordered: true });
	  }
	};

/***/ },

/***/ 1721:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(43);

	var _table = __webpack_require__(42);

	var _table2 = _interopRequireDefault(_table);

	var _style5 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(21);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "通过 ", ["code", "filterDropdown"], "、", ["code", "filterDropdownVisible"], " 和 ", ["code", "filterDropdownVisibleChange"], " 定义自定义的列筛选功能，并实现一个搜索列的示例。"]],
	    "en-US": [["p", "Implement a customized column search example via ", ["code", "filterDropdown"], ", ", ["code", "filterDropdownVisible"], " and ", ["code", "filterDropdownVisibleChange"], "."]]
	  },
	  "meta": {
	    "order": 8,
	    "title": {
	      "en-US": "Customized filter panel",
	      "zh-CN": "自定义筛选菜单"
	    },
	    "filename": "components/table/demo/custom-filter-panel.md",
	    "id": "components-table-demo-custom-filter-panel"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'4'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Red'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 2 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      filterDropdownVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      data<span class=\"token punctuation\">,</span>\n      searchText<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onInputChange</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> searchText<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onSearch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> searchText <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> reg <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">RegExp</span><span class=\"token punctuation\">(</span>searchText<span class=\"token punctuation\">,</span> <span class=\"token string\">'gi'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      filterDropdownVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      data<span class=\"token punctuation\">:</span> data<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">const</span> match <span class=\"token operator\">=</span> record<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span><span class=\"token function\">match</span><span class=\"token punctuation\">(</span>reg<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>match<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n          <span class=\"token keyword\">return</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n        <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n          <span class=\"token operator\">...</span>record<span class=\"token punctuation\">,</span>\n          name<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">{</span>record<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span><span class=\"token function\">split</span><span class=\"token punctuation\">(</span>reg<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> i<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n                i <span class=\"token operator\">></span> <span class=\"token number\">0</span> <span class=\"token operator\">?</span> <span class=\"token punctuation\">[</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>highlight<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>match<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> text<span class=\"token punctuation\">]</span> <span class=\"token punctuation\">:</span> text\n              <span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>record <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">!</span><span class=\"token operator\">!</span>record<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n      filterDropdown<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>custom-filter-dropdown<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span>\n            <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Search</span> <span class=\"token attr-name\">name\"</span>\n            <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>searchText<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onInputChange<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onPressEnter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onSearch<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onSearch<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Search<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      filterDropdownVisible<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>filterDropdownVisible<span class=\"token punctuation\">,</span>\n      onFilterDropdownVisibleChange<span class=\"token punctuation\">:</span> visible <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> filterDropdownVisible<span class=\"token punctuation\">:</span> visible <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var data = [{ key: '1', name: 'John Brown',
	      age: 32, address: 'New York No. 1 Lake Park' }, { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' }, { key: '3', name: 'Joe Black',
	      age: 32,
	      address: 'Sidney No. 1 Lake Park' }, { key: '4', name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' }];var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return { filterDropdownVisible: false, data: data, searchText: '' };
	      },
	      onInputChange: function onInputChange(e) {
	        this.setState({
	          searchText: e.target.value });
	      },
	      onSearch: function onSearch() {
	        var searchText = this.state.searchText;
	        var reg = new RegExp(searchText, 'gi');this.setState({ filterDropdownVisible: false, data: data.map(function (record) {
	            var match = record.name.match(reg);if (!match) {
	              return null;
	            }return (0, _extends3.default)({}, record, { name: _react2.default.createElement(
	                'span',
	                null,
	                record.name.split(reg).map(function (text, i) {
	                  return i > 0 ? [_react2.default.createElement(
	                    'span',
	                    { className: 'highlight' },
	                    match[0]
	                  ), text] : text;
	                })
	              ) });
	          }).filter(function (record) {
	            return !!record;
	          }) });
	      },
	      render: function render() {
	        var _this = this;

	        var columns = [{ title: 'Name', dataIndex: 'name', key: 'name', filterDropdown: _react2.default.createElement(
	            'div',
	            { className: 'custom-filter-dropdown' },
	            _react2.default.createElement(_input2.default, { placeholder: 'Search name', value: this.state.searchText, onChange: this.onInputChange, onPressEnter: this.onSearch }),
	            _react2.default.createElement(
	              _button2.default,
	              { type: 'primary', onClick: this.onSearch },
	              'Search'
	            )
	          ), filterDropdownVisible: this.state.filterDropdownVisible, onFilterDropdownVisibleChange: function onFilterDropdownVisibleChange(visible) {
	            return _this.setState({ filterDropdownVisible: visible });
	          } }, { title: 'Age', dataIndex: 'age', key: 'age' }, { title: 'Address', dataIndex: 'address', key: 'address' }];return _react2.default.createElement(_table2.default, { columns: columns, dataSource: this.state.data });
	      }
	    });return _react2.default.createElement(App, null);
	  },
	  "style": ".custom-filter-dropdown {\n  padding: 8px;\n  border-radius: 6px;\n  background: #fff;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, .2);\n}\n\n.custom-filter-dropdown input {\n  width: 130px;\n  margin-right: 8px;\n}\n\n.highlight {\n  color: #f50;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.custom-filter-dropdown</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">box-shadow</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">1</span>px <span class=\"token number\">6</span>px <span class=\"token function\">rgba</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span>, <span class=\"token number\">0</span>, <span class=\"token number\">0</span>, <span class=\"token number\">.2</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.custom-filter-dropdown</span> input </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">130</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.highlight</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#f50</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1722:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style6 = __webpack_require__(43);

	var _table = __webpack_require__(42);

	var _table2 = _interopRequireDefault(_table);

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style7 = __webpack_require__(44);

	var _radio = __webpack_require__(41);

	var _radio2 = _interopRequireDefault(_radio);

	var _style8 = __webpack_require__(71);

	var _switch = __webpack_require__(70);

	var _switch2 = _interopRequireDefault(_switch);

	var _defineProperty2 = __webpack_require__(8);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

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
	    "zh-CN": [["p", "选择不同配置组合查看效果。"]],
	    "en-US": [["p", "Select different settings to see the result."]]
	  },
	  "meta": {
	    "order": 22,
	    "title": {
	      "en-US": "Dynamic Settings",
	      "zh-CN": "动态控制表格属性"
	    },
	    "filename": "components/table/demo/dynamic-settings.md",
	    "id": "components-table-demo-dynamic-settings"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Switch<span class=\"token punctuation\">,</span> Radio<span class=\"token punctuation\">,</span> Form <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> text <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token number\">70</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Action'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'action'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token number\">360</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Action 一 <span class=\"token punctuation\">{</span>record<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-divider<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Delete<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-divider<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-dropdown-link<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        More actions <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>down<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;=</span> <span class=\"token number\">10</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  data<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">2`</span></span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`New York No. </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> Lake Park`</span></span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`My name is John Brown, I am </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">2 years old, living in New York No. </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> Lake Park.`</span></span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> expandedRowRender <span class=\"token operator\">=</span> record <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>record<span class=\"token punctuation\">.</span>description<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> title <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token string\">'Here is title'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> footer <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token string\">'Here is footer'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> scroll <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> y<span class=\"token punctuation\">:</span> <span class=\"token number\">240</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    bordered<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    pagination<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    size<span class=\"token punctuation\">:</span> <span class=\"token string\">'default'</span><span class=\"token punctuation\">,</span>\n    expandedRowRender<span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">,</span>\n    footer<span class=\"token punctuation\">,</span>\n    rowSelection<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    scroll<span class=\"token punctuation\">:</span> undefined<span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleToggle <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>prop<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>enable<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> <span class=\"token punctuation\">[</span>prop<span class=\"token punctuation\">]</span><span class=\"token punctuation\">:</span> enable <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleSizeChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> size<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleExpandChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>enable<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> expandedRowRender<span class=\"token punctuation\">:</span> enable <span class=\"token operator\">?</span> expandedRowRender <span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleTitleChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>enable<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> enable <span class=\"token operator\">?</span> title <span class=\"token punctuation\">:</span> undefined <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleFooterChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>enable<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> footer<span class=\"token punctuation\">:</span> enable <span class=\"token operator\">?</span> footer <span class=\"token punctuation\">:</span> undefined <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleRowSelectionChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>enable<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> rowSelection<span class=\"token punctuation\">:</span> enable <span class=\"token operator\">?</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span> <span class=\"token punctuation\">:</span> undefined <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleScollChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>enable<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> scroll<span class=\"token punctuation\">:</span> enable <span class=\"token operator\">?</span> scroll <span class=\"token punctuation\">:</span> undefined <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> state <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>components-table-demo-control-bar<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">inline</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Bordered<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>state<span class=\"token punctuation\">.</span>bordered<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleToggle</span><span class=\"token punctuation\">(</span><span class=\"token string\">'bordered'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>loading<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>state<span class=\"token punctuation\">.</span>loading<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleToggle</span><span class=\"token punctuation\">(</span><span class=\"token string\">'loading'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Pagination<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>state<span class=\"token punctuation\">.</span>pagination<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleToggle</span><span class=\"token punctuation\">(</span><span class=\"token string\">'pagination'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Title<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">!</span><span class=\"token operator\">!</span>state<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleTitleChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Footer<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">!</span><span class=\"token operator\">!</span>state<span class=\"token punctuation\">.</span>footer<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleFooterChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Expandable<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">!</span><span class=\"token operator\">!</span>state<span class=\"token punctuation\">.</span>expandedRowRender<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleExpandChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Checkbox<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">!</span><span class=\"token operator\">!</span>state<span class=\"token punctuation\">.</span>rowSelection<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleRowSelectionChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Fixed</span> <span class=\"token attr-name\">Header\"</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">!</span><span class=\"token operator\">!</span>state<span class=\"token punctuation\">.</span>scroll<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleScollChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Size<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Group</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>default<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>state<span class=\"token punctuation\">.</span>size<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSizeChange<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>default<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Default<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>middle<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Middle<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Small<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Group</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>Table <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">}</span> columns<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span> dataSource<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var FormItem = _form2.default.Item;var columns = [{ title: 'Name', dataIndex: 'name', key: 'name', width: 150, render: function render(text) {
	        return _react2.default.createElement(
	          'a',
	          { href: '#' },
	          text
	        );
	      } }, { title: 'Age', dataIndex: 'age', key: 'age', width: 70 }, { title: 'Address', dataIndex: 'address', key: 'address' }, { title: 'Action', key: 'action', width: 360, render: function render(text, record) {
	        return _react2.default.createElement(
	          'span',
	          null,
	          _react2.default.createElement(
	            'a',
	            { href: '#' },
	            'Action \u4E00 ',
	            record.name
	          ),
	          _react2.default.createElement('span', { className: 'ant-divider' }),
	          _react2.default.createElement(
	            'a',
	            { href: '#' },
	            'Delete'
	          ),
	          _react2.default.createElement('span', { className: 'ant-divider' }),
	          _react2.default.createElement(
	            'a',
	            { href: '#', className: 'ant-dropdown-link' },
	            'More actions ',
	            _react2.default.createElement(_icon2.default, { type: 'down' })
	          )
	        );
	      } }];var data = [];for (var i = 1; i <= 10; i++) {
	      data.push({
	        key: i, name: 'John Brown', age: i + '2', address: 'New York No. ' + i + ' Lake Park', description: 'My name is John Brown, I am ' + i + '2 years old, living in New York No. ' + i + ' Lake Park.' });
	    }var expandedRowRender = function expandedRowRender(record) {
	      return _react2.default.createElement(
	        'p',
	        null,
	        record.description
	      );
	    };var title = function title() {
	      return 'Here is title';
	    };var footer = function footer() {
	      return 'Here is footer';
	    };var scroll = { y: 240 };
	    var Demo = function (_React$Component) {
	      (0, _inherits3.default)(Demo, _React$Component);

	      function Demo() {
	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, Demo);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { bordered: false, loading: false, pagination: true, size: 'default', expandedRowRender: expandedRowRender, title: title, footer: footer, rowSelection: {}, scroll: undefined }, _this.handleToggle = function (prop) {
	          return function (enable) {
	            _this.setState((0, _defineProperty3.default)({}, prop, enable));
	          };
	        }, _this.handleSizeChange = function (e) {
	          _this.setState({ size: e.target.value });
	        }, _this.handleExpandChange = function (enable) {
	          _this.setState({ expandedRowRender: enable ? expandedRowRender : false });
	        }, _this.handleTitleChange = function (enable) {
	          _this.setState({ title: enable ? title : undefined });
	        }, _this.handleFooterChange = function (enable) {
	          _this.setState({ footer: enable ? footer : undefined });
	        }, _this.handleRowSelectionChange = function (enable) {
	          _this.setState({ rowSelection: enable ? {} : undefined });
	        }, _this.handleScollChange = function (enable) {
	          _this.setState({ scroll: enable ? scroll : undefined });
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      }

	      Demo.prototype.render = function render() {
	        var state = this.state;return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'components-table-demo-control-bar' },
	            _react2.default.createElement(
	              _form2.default,
	              { inline: true },
	              _react2.default.createElement(
	                FormItem,
	                { label: 'Bordered' },
	                _react2.default.createElement(_switch2.default, { checked: state.bordered, onChange: this.handleToggle('bordered') })
	              ),
	              _react2.default.createElement(
	                FormItem,
	                { label: 'loading' },
	                _react2.default.createElement(_switch2.default, { checked: state.loading, onChange: this.handleToggle('loading') })
	              ),
	              _react2.default.createElement(
	                FormItem,
	                { label: 'Pagination' },
	                _react2.default.createElement(_switch2.default, { checked: state.pagination, onChange: this.handleToggle('pagination') })
	              ),
	              _react2.default.createElement(
	                FormItem,
	                { label: 'Title' },
	                _react2.default.createElement(_switch2.default, { checked: !!state.title, onChange: this.handleTitleChange })
	              ),
	              _react2.default.createElement(
	                FormItem,
	                { label: 'Footer' },
	                _react2.default.createElement(_switch2.default, { checked: !!state.footer, onChange: this.handleFooterChange })
	              ),
	              _react2.default.createElement(
	                FormItem,
	                { label: 'Expandable' },
	                _react2.default.createElement(_switch2.default, { checked: !!state.expandedRowRender, onChange: this.handleExpandChange })
	              ),
	              _react2.default.createElement(
	                FormItem,
	                { label: 'Checkbox' },
	                _react2.default.createElement(_switch2.default, { checked: !!state.rowSelection, onChange: this.handleRowSelectionChange })
	              ),
	              _react2.default.createElement(
	                FormItem,
	                { label: 'Fixed Header' },
	                _react2.default.createElement(_switch2.default, { checked: !!state.scroll, onChange: this.handleScollChange })
	              ),
	              _react2.default.createElement(
	                FormItem,
	                { label: 'Size' },
	                _react2.default.createElement(
	                  _radio2.default.Group,
	                  { size: 'default', value: state.size, onChange: this.handleSizeChange },
	                  _react2.default.createElement(
	                    _radio2.default.Button,
	                    { value: 'default' },
	                    'Default'
	                  ),
	                  _react2.default.createElement(
	                    _radio2.default.Button,
	                    { value: 'middle' },
	                    'Middle'
	                  ),
	                  _react2.default.createElement(
	                    _radio2.default.Button,
	                    { value: 'small' },
	                    'Small'
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(_table2.default, (0, _extends3.default)({}, this.state, { columns: columns, dataSource: data }))
	        );
	      };

	      return Demo;
	    }(_react2.default.Component);

	    return _react2.default.createElement(Demo, null);
	  },
	  "style": "\n.components-table-demo-control-bar {\n  margin-bottom: 10px;\n}\n.components-table-demo-control-bar .ant-form-item {\n  margin-right: 16px;\n  margin-bottom: 8px;\n}\n"
	};

/***/ },

/***/ 1723:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style6 = __webpack_require__(43);

	var _table = __webpack_require__(42);

	var _table2 = _interopRequireDefault(_table);

	var _style7 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style8 = __webpack_require__(146);

	var _popconfirm = __webpack_require__(145);

	var _popconfirm2 = _interopRequireDefault(_popconfirm);

	var _toConsumableArray2 = __webpack_require__(61);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _style9 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _style10 = __webpack_require__(21);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

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
	    "zh-CN": [["p", "带单元格编辑功能的表格。"]],
	    "en-US": [["p", "Table with editable cells."]]
	  },
	  "meta": {
	    "order": 22,
	    "title": {
	      "en-US": "Editable Cells",
	      "zh-CN": "可编辑单元格"
	    },
	    "filename": "components/table/demo/edit-cell.md",
	    "id": "components-table-demo-edit-cell"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Popconfirm <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">EditableCell</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">,</span>\n    editable<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span>\n  handleChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> value <span class=\"token operator\">=</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  check <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> editable<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span><span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n  edit <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> editable<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value<span class=\"token punctuation\">,</span> editable <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>editable-cell<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">{</span>\n        editable <span class=\"token operator\">?</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>editable-cell-input-wrapper<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span>\n            <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>value<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onPressEnter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>check<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span>\n            <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>check<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>editable-cell-icon-check<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>check<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">:</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>editable-cell-text-wrapper<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span>value <span class=\"token operator\">||</span> <span class=\"token string\">' '</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span>\n            <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>edit<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>editable-cell-icon<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>edit<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">EditableTable</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n      width<span class=\"token punctuation\">:</span> <span class=\"token string\">'30%'</span><span class=\"token punctuation\">,</span>\n      render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EditableCell</span>\n          <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">onCellChange</span><span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">,</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'operation'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'operation'</span><span class=\"token punctuation\">,</span>\n      render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>dataSource<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">1</span> <span class=\"token operator\">?</span>\n          <span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popconfirm</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Sure</span> <span class=\"token attr-name\">to</span> <span class=\"token attr-name\">delete?\"</span> <span class=\"token attr-name\">onConfirm</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">onDelete</span><span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Delete<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popconfirm</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      dataSource<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Edward King 0'</span><span class=\"token punctuation\">,</span>\n        age<span class=\"token punctuation\">:</span> <span class=\"token string\">'32'</span><span class=\"token punctuation\">,</span>\n        address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London, Park Lane no. 0'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Edward King 1'</span><span class=\"token punctuation\">,</span>\n        age<span class=\"token punctuation\">:</span> <span class=\"token string\">'32'</span><span class=\"token punctuation\">,</span>\n        address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London, Park Lane no. 1'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      count<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  onCellChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> dataSource <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>dataSource<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n      dataSource<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>key<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> value<span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> dataSource <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  onDelete <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> dataSource <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>dataSource<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n      dataSource<span class=\"token punctuation\">.</span><span class=\"token function\">splice</span><span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> dataSource <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  handleAdd <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> count<span class=\"token punctuation\">,</span> dataSource <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> newData <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      key<span class=\"token punctuation\">:</span> count<span class=\"token punctuation\">,</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`Edward King </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>count<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n      age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n      address<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`London, Park Lane no. </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>count<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      dataSource<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>dataSource<span class=\"token punctuation\">,</span> newData<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      count<span class=\"token punctuation\">:</span> count <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> dataSource <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>columns<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>editable-add-btn<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ghost<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleAdd<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Add<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">bordered</span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>dataSource<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EditableTable</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var EditableCell = function (_React$Component) {
	      (0, _inherits3.default)(EditableCell, _React$Component);

	      function EditableCell() {
	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, EditableCell);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { value: _this.props.value, editable: false }, _this.handleChange = function (e) {
	          var value = e.target.value;_this.setState({ value: value });
	        }, _this.check = function () {
	          _this.setState({ editable: false });if (_this.props.onChange) {
	            _this.props.onChange(_this.state.value);
	          }
	        }, _this.edit = function () {
	          _this.setState({ editable: true });
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      }

	      EditableCell.prototype.render = function render() {
	        var _state = this.state,
	            value = _state.value,
	            editable = _state.editable;
	        return _react2.default.createElement(
	          'div',
	          { className: 'editable-cell' },
	          editable ? _react2.default.createElement(
	            'div',
	            { className: 'editable-cell-input-wrapper' },
	            _react2.default.createElement(_input2.default, { value: value, onChange: this.handleChange, onPressEnter: this.check }),
	            _react2.default.createElement(_icon2.default, { type: 'check', className: 'editable-cell-icon-check', onClick: this.check })
	          ) : _react2.default.createElement(
	            'div',
	            { className: 'editable-cell-text-wrapper' },
	            value || ' ',
	            _react2.default.createElement(_icon2.default, { type: 'edit', className: 'editable-cell-icon', onClick: this.edit })
	          )
	        );
	      };

	      return EditableCell;
	    }(_react2.default.Component);

	    var EditableTable = function (_React$Component2) {
	      (0, _inherits3.default)(EditableTable, _React$Component2);

	      function EditableTable(props) {
	        (0, _classCallCheck3.default)(this, EditableTable);

	        var _this2 = (0, _possibleConstructorReturn3.default)(this, _React$Component2.call(this, props));

	        _this2.onCellChange = function (index, key) {
	          return function (value) {
	            var dataSource = [].concat((0, _toConsumableArray3.default)(_this2.state.dataSource));dataSource[index][key] = value;_this2.setState({ dataSource: dataSource });
	          };
	        };

	        _this2.onDelete = function (index) {
	          return function () {
	            var dataSource = [].concat((0, _toConsumableArray3.default)(_this2.state.dataSource));dataSource.splice(index, 1);_this2.setState({ dataSource: dataSource });
	          };
	        };

	        _this2.handleAdd = function () {
	          var _this2$state = _this2.state,
	              count = _this2$state.count,
	              dataSource = _this2$state.dataSource;
	          var newData = { key: count, name: 'Edward King ' + count, age: 32, address: 'London, Park Lane no. ' + count };_this2.setState({ dataSource: [].concat((0, _toConsumableArray3.default)(dataSource), [newData]), count: count + 1 });
	        };

	        _this2.columns = [{ title: 'name', dataIndex: 'name', width: '30%', render: function render(text, record, index) {
	            return _react2.default.createElement(EditableCell, { value: text, onChange: _this2.onCellChange(index, 'name') });
	          } }, { title: 'age', dataIndex: 'age' }, { title: 'address', dataIndex: 'address' }, { title: 'operation', dataIndex: 'operation', render: function render(text, record, index) {
	            return _this2.state.dataSource.length > 1 ? _react2.default.createElement(
	              _popconfirm2.default,
	              { title: 'Sure to delete?', onConfirm: _this2.onDelete(index) },
	              _react2.default.createElement(
	                'a',
	                { href: '#' },
	                'Delete'
	              )
	            ) : null;
	          } }];_this2.state = { dataSource: [{ key: '0', name: 'Edward King 0', age: '32', address: 'London, Park Lane no. 0' }, { key: '1', name: 'Edward King 1', age: '32', address: 'London, Park Lane no. 1' }], count: 2 };
	        return _this2;
	      }

	      EditableTable.prototype.render = function render() {
	        var dataSource = this.state.dataSource;
	        var columns = this.columns;return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _button2.default,
	            { className: 'editable-add-btn', type: 'ghost', onClick: this.handleAdd },
	            'Add'
	          ),
	          _react2.default.createElement(_table2.default, { bordered: true, dataSource: dataSource, columns: columns })
	        );
	      };

	      return EditableTable;
	    }(_react2.default.Component);

	    return _react2.default.createElement(EditableTable, null);
	  },
	  "style": ".editable-cell {\n  position: relative;\n}\n\n.editable-cell-input-wrapper,\n.editable-cell-text-wrapper {\n  padding-right: 24px;\n}\n\n.editable-cell-text-wrapper {\n  padding: 5px 24px 5px 5px;\n}\n\n.editable-cell-icon,\n.editable-cell-icon-check {\n  position: absolute;\n  right: 0;\n  width: 20px;\n  cursor: pointer;\n}\n\n.editable-cell-icon {\n  line-height: 18px;\n  display: none;\n}\n\n.editable-cell-icon-check {\n  line-height: 28px;\n}\n\n.editable-cell:hover .editable-cell-icon {\n  display: inline-block;\n}\n\n.editable-cell-icon:hover,\n.editable-cell-icon-check:hover {\n  color:#2db7f5;\n}\n\n.editable-add-btn {\n  margin-bottom: 8px;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.editable-cell</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.editable-cell-input-wrapper</span>,\n<span class=\"token class\">.editable-cell-text-wrapper</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.editable-cell-text-wrapper</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">5</span>px <span class=\"token number\">24</span>px <span class=\"token number\">5</span>px <span class=\"token number\">5</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.editable-cell-icon</span>,\n<span class=\"token class\">.editable-cell-icon-check</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">cursor</span><span class=\"token punctuation\">:</span> pointer<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.editable-cell-icon</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">18</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> none<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.editable-cell-icon-check</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">28</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.editable-cell</span><span class=\"token pseudo-class\">:hover</span> <span class=\"token class\">.editable-cell-icon</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> inline-block<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.editable-cell-icon</span><span class=\"token pseudo-class\">:hover</span>,\n<span class=\"token class\">.editable-cell-icon-check</span><span class=\"token pseudo-class\">:hover</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span><span class=\"token hexcode\">#2db7f5</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.editable-add-btn</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1724:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(43);

	var _table = __webpack_require__(42);

	var _table2 = _interopRequireDefault(_table);

	var _style5 = __webpack_require__(146);

	var _popconfirm = __webpack_require__(145);

	var _popconfirm2 = _interopRequireDefault(_popconfirm);

	var _style6 = __webpack_require__(21);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

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
	    "zh-CN": [["p", "带行编辑功能的表格。"]],
	    "en-US": [["p", "Table with editable rows."]]
	  },
	  "meta": {
	    "order": 23,
	    "title": {
	      "en-US": "Editable Rows",
	      "zh-CN": "可编辑行"
	    },
	    "filename": "components/table/demo/edit-row.md",
	    "id": "components-table-demo-edit-row"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Popconfirm <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">EditableCell</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">,</span>\n    editable<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>editable <span class=\"token operator\">||</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token function\">componentWillReceiveProps</span><span class=\"token punctuation\">(</span>nextProps<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>nextProps<span class=\"token punctuation\">.</span>editable <span class=\"token operator\">!==</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>editable<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> editable<span class=\"token punctuation\">:</span> nextProps<span class=\"token punctuation\">.</span>editable <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>nextProps<span class=\"token punctuation\">.</span>editable<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>cacheValue <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>nextProps<span class=\"token punctuation\">.</span>status <span class=\"token operator\">&amp;&amp;</span> nextProps<span class=\"token punctuation\">.</span>status <span class=\"token operator\">!==</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>status<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>nextProps<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'save'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span><span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>nextProps<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'cancel'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>cacheValue <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span><span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>cacheValue<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token function\">shouldComponentUpdate</span><span class=\"token punctuation\">(</span>nextProps<span class=\"token punctuation\">,</span> nextState<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> nextProps<span class=\"token punctuation\">.</span>editable <span class=\"token operator\">!==</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>editable <span class=\"token operator\">||</span>\n           nextState<span class=\"token punctuation\">.</span>value <span class=\"token operator\">!==</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> value <span class=\"token operator\">=</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value<span class=\"token punctuation\">,</span> editable <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">{</span>\n        editable <span class=\"token operator\">?</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span>\n            <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>value<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>e <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">:</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>editable-row-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span>value <span class=\"token operator\">||</span> <span class=\"token string\">' '</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">EditableTable</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n      width<span class=\"token punctuation\">:</span> <span class=\"token string\">'25%'</span><span class=\"token punctuation\">,</span>\n      render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">renderColumns</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">,</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> text<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n      width<span class=\"token punctuation\">:</span> <span class=\"token string\">'15%'</span><span class=\"token punctuation\">,</span>\n      render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">renderColumns</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">,</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span> text<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n      width<span class=\"token punctuation\">:</span> <span class=\"token string\">'40%'</span><span class=\"token punctuation\">,</span>\n      render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">renderColumns</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">,</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> text<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'operation'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'operation'</span><span class=\"token punctuation\">,</span>\n      render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> editable <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>editable-row-operations<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span>\n            editable <span class=\"token operator\">?</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">editDone</span><span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">,</span> <span class=\"token string\">'save'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Save<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popconfirm</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Sure</span> <span class=\"token attr-name\">to</span> <span class=\"token attr-name\">cancel?\"</span> <span class=\"token attr-name\">onConfirm</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">editDone</span><span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">,</span> <span class=\"token string\">'cancel'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span><span class=\"token punctuation\">></span></span>Cancel<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popconfirm</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">:</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">edit</span><span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Edit<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      data<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n          editable<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n          value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Edward King 0'</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        age<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n          editable<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n          value<span class=\"token punctuation\">:</span> <span class=\"token string\">'32'</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        address<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n          value<span class=\"token punctuation\">:</span> <span class=\"token string\">'London, Park Lane no. 0'</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token function\">renderColumns</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">,</span> text<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> editable<span class=\"token punctuation\">,</span> status <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>key<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">typeof</span> editable <span class=\"token operator\">===</span> <span class=\"token string\">'undefined'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> text<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EditableCell</span>\n      <span class=\"token attr-name\">editable</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>editable<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>value <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">status</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>status<span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> data <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>key<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>value <span class=\"token operator\">=</span> value<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> data <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token function\">edit</span><span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> data <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    Object<span class=\"token punctuation\">.</span><span class=\"token function\">keys</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>item<span class=\"token punctuation\">]</span> <span class=\"token operator\">&amp;&amp;</span> <span class=\"token keyword\">typeof</span> data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>item<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>editable <span class=\"token operator\">!==</span> <span class=\"token string\">'undefined'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>item<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>editable <span class=\"token operator\">=</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> data <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token function\">editDone</span><span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> data <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    Object<span class=\"token punctuation\">.</span><span class=\"token function\">keys</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>item<span class=\"token punctuation\">]</span> <span class=\"token operator\">&amp;&amp;</span> <span class=\"token keyword\">typeof</span> data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>item<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>editable <span class=\"token operator\">!==</span> <span class=\"token string\">'undefined'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>item<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>editable <span class=\"token operator\">=</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">;</span>\n        data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>item<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>status <span class=\"token operator\">=</span> type<span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> data <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      Object<span class=\"token punctuation\">.</span><span class=\"token function\">keys</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>item<span class=\"token punctuation\">]</span> <span class=\"token operator\">&amp;&amp;</span> <span class=\"token keyword\">typeof</span> data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>item<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>editable <span class=\"token operator\">!==</span> <span class=\"token string\">'undefined'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n          <span class=\"token keyword\">delete</span> data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>item<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>status<span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> data <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> dataSource <span class=\"token operator\">=</span> data<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> obj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n      Object<span class=\"token punctuation\">.</span><span class=\"token function\">keys</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        obj<span class=\"token punctuation\">[</span>key<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> key <span class=\"token operator\">===</span> <span class=\"token string\">'key'</span> <span class=\"token operator\">?</span> item<span class=\"token punctuation\">[</span>key<span class=\"token punctuation\">]</span> <span class=\"token punctuation\">:</span> item<span class=\"token punctuation\">[</span>key<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">return</span> obj<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>columns<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">bordered</span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>dataSource<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EditableTable</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var EditableCell = function (_React$Component) {
	      (0, _inherits3.default)(EditableCell, _React$Component);

	      function EditableCell() {
	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, EditableCell);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { value: _this.props.value, editable: _this.props.editable || false }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      }

	      EditableCell.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (nextProps.editable !== this.state.editable) {
	          this.setState({ editable: nextProps.editable });if (nextProps.editable) {
	            this.cacheValue = this.state.value;
	          }
	        }
	        if (nextProps.status && nextProps.status !== this.props.status) {
	          if (nextProps.status === 'save') {
	            this.props.onChange(this.state.value);
	          } else if (nextProps.status === 'cancel') {
	            this.setState({ value: this.cacheValue });this.props.onChange(this.cacheValue);
	          }
	        }
	      };

	      EditableCell.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	        return nextProps.editable !== this.state.editable || nextState.value !== this.state.value;
	      };

	      EditableCell.prototype.handleChange = function handleChange(e) {
	        var value = e.target.value;this.setState({ value: value });
	      };

	      EditableCell.prototype.render = function render() {
	        var _this2 = this;

	        var _state = this.state,
	            value = _state.value,
	            editable = _state.editable;
	        return _react2.default.createElement(
	          'div',
	          null,
	          editable ? _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_input2.default, { value: value, onChange: function onChange(e) {
	                return _this2.handleChange(e);
	              } })
	          ) : _react2.default.createElement(
	            'div',
	            { className: 'editable-row-text' },
	            value || ' '
	          )
	        );
	      };

	      return EditableCell;
	    }(_react2.default.Component);

	    var EditableTable = function (_React$Component2) {
	      (0, _inherits3.default)(EditableTable, _React$Component2);

	      function EditableTable(props) {
	        (0, _classCallCheck3.default)(this, EditableTable);

	        var _this3 = (0, _possibleConstructorReturn3.default)(this, _React$Component2.call(this, props));

	        _this3.columns = [{ title: 'name', dataIndex: 'name', width: '25%', render: function render(text, record, index) {
	            return _this3.renderColumns(_this3.state.data, index, 'name', text);
	          } }, { title: 'age', dataIndex: 'age', width: '15%', render: function render(text, record, index) {
	            return _this3.renderColumns(_this3.state.data, index, 'age', text);
	          } }, { title: 'address', dataIndex: 'address', width: '40%', render: function render(text, record, index) {
	            return _this3.renderColumns(_this3.state.data, index, 'address', text);
	          } }, { title: 'operation', dataIndex: 'operation', render: function render(text, record, index) {
	            var editable = _this3.state.data[index].name.editable;
	            return _react2.default.createElement(
	              'div',
	              { className: 'editable-row-operations' },
	              editable ? _react2.default.createElement(
	                'span',
	                null,
	                _react2.default.createElement(
	                  'a',
	                  { onClick: function onClick() {
	                      return _this3.editDone(index, 'save');
	                    } },
	                  'Save'
	                ),
	                _react2.default.createElement(
	                  _popconfirm2.default,
	                  { title: 'Sure to cancel?', onConfirm: function onConfirm() {
	                      return _this3.editDone(index, 'cancel');
	                    } },
	                  _react2.default.createElement(
	                    'a',
	                    null,
	                    'Cancel'
	                  )
	                )
	              ) : _react2.default.createElement(
	                'span',
	                null,
	                _react2.default.createElement(
	                  'a',
	                  { onClick: function onClick() {
	                      return _this3.edit(index);
	                    } },
	                  'Edit'
	                )
	              )
	            );
	          } }];_this3.state = { data: [{ key: '0', name: { editable: false, value: 'Edward King 0' }, age: { editable: false, value: '32' }, address: { value: 'London, Park Lane no. 0' } }] };
	        return _this3;
	      }

	      EditableTable.prototype.renderColumns = function renderColumns(data, index, key, text) {
	        var _this4 = this;

	        var _data$index$key = data[index][key],
	            editable = _data$index$key.editable,
	            status = _data$index$key.status;
	        if (typeof editable === 'undefined') {
	          return text;
	        }return _react2.default.createElement(EditableCell, { editable: editable, value: text, onChange: function onChange(value) {
	            return _this4.handleChange(key, index, value);
	          }, status: status });
	      };

	      EditableTable.prototype.handleChange = function handleChange(key, index, value) {
	        var data = this.state.data;
	        data[index][key].value = value;this.setState({ data: data });
	      };

	      EditableTable.prototype.edit = function edit(index) {
	        var data = this.state.data;
	        Object.keys(data[index]).forEach(function (item) {
	          if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
	            data[index][item].editable = true;
	          }
	        });this.setState({ data: data });
	      };

	      EditableTable.prototype.editDone = function editDone(index, type) {
	        var data = this.state.data;
	        Object.keys(data[index]).forEach(function (item) {
	          if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
	            data[index][item].editable = false;data[index][item].status = type;
	          }
	        });this.setState({ data: data }, function () {
	          Object.keys(data[index]).forEach(function (item) {
	            if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
	              delete data[index][item].status;
	            }
	          });
	        });
	      };

	      EditableTable.prototype.render = function render() {
	        var data = this.state.data;
	        var dataSource = data.map(function (item) {
	          var obj = {};Object.keys(item).forEach(function (key) {
	            obj[key] = key === 'key' ? item[key] : item[key].value;
	          });return obj;
	        });var columns = this.columns;return _react2.default.createElement(_table2.default, { bordered: true, dataSource: dataSource, columns: columns });
	      };

	      return EditableTable;
	    }(_react2.default.Component);

	    return _react2.default.createElement(EditableTable, null);
	  },
	  "style": ".editable-row-text {\n  padding: 5px;\n}\n\n.editable-row-operations a {\n  margin-right: 8px;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.editable-row-text</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">5</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.editable-row-operations</span> a </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1725:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(43);

	var _table = __webpack_require__(42);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "表格支持树形数据的展示，可以通过设置 ", ["code", "indentSize"], " 以控制每一层的缩进宽度。"], ["blockquote", ["p", "注：暂不支持父子数据递归关联选择。"]]],
	    "en-US": [["p", "Display tree structure data in Table, control the indent width by setting ", ["code", "indentSize"], "."], ["blockquote", ["p", "Note, no support for recursive selection of tree structure data table yet."]]]
	  },
	  "meta": {
	    "order": 16,
	    "title": {
	      "en-US": "Tree data",
	      "zh-CN": "树形数据展示"
	    },
	    "filename": "components/table/demo/expand-children.md",
	    "id": "components-table-demo-expand-children"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token string\">'40%'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token string\">'30%'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token string\">'30%'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown sr.'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">60</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token number\">11</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 2 Lake Park'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown jr.'</span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token number\">30</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 3 Lake Park'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token number\">121</span><span class=\"token punctuation\">,</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jimmy Brown'</span><span class=\"token punctuation\">,</span>\n      age<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span>\n      address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 3 Lake Park'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token number\">13</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green sr.'</span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token number\">72</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token number\">131</span><span class=\"token punctuation\">,</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n      age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n      address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 2 Lake Park'</span><span class=\"token punctuation\">,</span>\n      children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token number\">1311</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green jr.'</span><span class=\"token punctuation\">,</span>\n        age<span class=\"token punctuation\">:</span> <span class=\"token number\">25</span><span class=\"token punctuation\">,</span>\n        address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 3 Lake Park'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token number\">1312</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jimmy Green sr.'</span><span class=\"token punctuation\">,</span>\n        age<span class=\"token punctuation\">:</span> <span class=\"token number\">18</span><span class=\"token punctuation\">,</span>\n        address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 4 Lake Park'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// rowSelection objects indicates the need for row selection</span>\n<span class=\"token keyword\">const</span> rowSelection <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  onChange<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>selectedRowKeys<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`selectedRowKeys: </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>selectedRowKeys<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span> <span class=\"token string\">'selectedRows: '</span><span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  onSelect<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">,</span> selected<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">,</span> selected<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  onSelectAll<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>selected<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">,</span> changeRows<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>selected<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">,</span> changeRows<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">rowSelection</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>rowSelection<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name', key: 'name', width: '40%' }, { title: 'Age', dataIndex: 'age', key: 'age', width: '30%' }, { title: 'Address', dataIndex: 'address', key: 'address', width: '30%' }];var data = [{ key: 1, name: 'John Brown sr.',
	      age: 60, address: 'New York No. 1 Lake Park', children: [{ key: 11, name: 'John Brown',
	        age: 42, address: 'New York No. 2 Lake Park' }, { key: 12, name: 'John Brown jr.', age: 30, address: 'New York No. 3 Lake Park', children: [{ key: 121, name: 'Jimmy Brown', age: 16,
	          address: 'New York No. 3 Lake Park' }] }, { key: 13, name: 'Jim Green sr.', age: 72, address: 'London No. 1 Lake Park', children: [{ key: 131, name: 'Jim Green', age: 42, address: 'London No. 2 Lake Park',
	          children: [{ key: 1311, name: 'Jim Green jr.', age: 25, address: 'London No. 3 Lake Park' }, { key: 1312, name: 'Jimmy Green sr.',
	            age: 18, address: 'London No. 4 Lake Park' }] }] }] }, { key: 2, name: 'Joe Black',
	      age: 32, address: 'Sidney No. 1 Lake Park' }]; // rowSelection objects indicates the need for row selection
	    var rowSelection = { onChange: function onChange(selectedRowKeys, selectedRows) {
	        console.log('selectedRowKeys: ' + selectedRowKeys, 'selectedRows: ', selectedRows);
	      }, onSelect: function onSelect(record, selected, selectedRows) {
	        console.log(record, selected, selectedRows);
	      }, onSelectAll: function onSelectAll(selected, selectedRows, changeRows) {
	        console.log(selected, selectedRows, changeRows);
	      } };return _react2.default.createElement(_table2.default, { columns: columns, rowSelection: rowSelection, dataSource: data });
	  }
	};

/***/ },

/***/ 1726:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(43);

	var _table = __webpack_require__(42);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "当表格内容较多不能一次性完全展示时。"]],
	    "en-US": [["p", "When there's too much information to show and the table can't display all at once."]]
	  },
	  "meta": {
	    "order": 13,
	    "title": {
	      "en-US": "Expandable Row",
	      "zh-CN": "可展开"
	    },
	    "filename": "components/table/demo/expand.md",
	    "id": "components-table-demo-expand"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Action'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'x'</span><span class=\"token punctuation\">,</span> render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Delete<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span> key<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span> age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span> address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span> description<span class=\"token punctuation\">:</span> <span class=\"token string\">'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> key<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span> age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span> address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span> description<span class=\"token punctuation\">:</span> <span class=\"token string\">'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> key<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span> age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span> address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span> description<span class=\"token punctuation\">:</span> <span class=\"token string\">'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span>\n    <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">expandedRowRender</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>record <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>record<span class=\"token punctuation\">.</span>description<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>table<span class=\"token punctuation\">\"</span></span>\n  <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name', key: 'name'
	    }, { title: 'Age', dataIndex: 'age',
	      key: 'age'
	    }, { title: 'Address', dataIndex: 'address', key: 'address' }, { title: 'Action', dataIndex: '', key: 'x', render: function render() {
	        return _react2.default.createElement(
	          'a',
	          { href: '#' },
	          'Delete'
	        );
	      } }];var data = [{ key: 1, name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' }, {
	      key: 2, name: 'Jim Green',
	      age: 42, address: 'London No. 1 Lake Park', description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.' }, { key: 3, name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' }];return _react2.default.createElement(_table2.default, { columns: columns, expandedRowRender: function expandedRowRender(record) {
	        return _react2.default.createElement(
	          'p',
	          null,
	          record.description
	        );
	      }, dataSource: data, className: 'table' });
	  }
	};

/***/ },

/***/ 1727:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(43);

	var _table = __webpack_require__(42);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "适合同时展示有大量数据和数据列。"], ["blockquote", ["p", "若列头与内容不对齐，请指定每列宽度 ", ["code", "width"], "。"], ["p", "建议指定 ", ["code", "scroll.x"], " 为固定宽度。注意，非固定列宽度之和不要超过 ", ["code", "scroll.x"], "。"]]],
	    "en-US": [["p", "Suitable for large amounts of data with long columns."], ["blockquote", ["p", "Specify the width of each column if header and cell do not align properly."], ["p", "A fixed width for ", ["code", "scroll.x"], " is recommended. The sum of unfixed columns should not greater than ", ["code", "scroll.x"], "."]]]
	  },
	  "meta": {
	    "order": 19,
	    "title": {
	      "en-US": "Fixed Columns and Header",
	      "zh-CN": "固定头和列"
	    },
	    "filename": "components/table/demo/fixed-columns-header.md",
	    "id": "components-table-demo-fixed-columns-header"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Full Name'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span> fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 1'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 2'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 3'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 4'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'4'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 5'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'5'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 6'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'6'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 7'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'7'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 8'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'8'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Action'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'operation'</span><span class=\"token punctuation\">,</span>\n    fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'right'</span><span class=\"token punctuation\">,</span>\n    width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n    render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>action<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">100</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  data<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`Edrward </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`London Park no. </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">scroll</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> x<span class=\"token punctuation\">:</span> <span class=\"token number\">1500</span><span class=\"token punctuation\">,</span> y<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' }, { title: 'Age', width: 100, dataIndex: 'age', key: 'age',
	      fixed: 'left' }, { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 }, { title: 'Column 2',
	      dataIndex: 'address', key: '2', width: 150 }, { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 }, { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 }, { title: 'Column 5',
	      dataIndex: 'address', key: '5', width: 150 }, {
	      title: 'Column 6', dataIndex: 'address', key: '6', width: 150 }, { title: 'Column 7',
	      dataIndex: 'address', key: '7', width: 150 }, {
	      title: 'Column 8', dataIndex: 'address', key: '8' }, { title: 'Action', key: 'operation', fixed: 'right', width: 100, render: function render() {
	        return _react2.default.createElement(
	          'a',
	          { href: '#' },
	          'action'
	        );
	      } }];var data = [];
	    for (var i = 0; i < 100; i++) {
	      data.push({ key: i, name: 'Edrward ' + i, age: 32, address: 'London Park no. ' + i });
	    }return _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, scroll: { x: 1500, y: 300 } });
	  }
	};

/***/ },

/***/ 1728:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(43);

	var _table = __webpack_require__(42);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据，需要和 ", ["code", "scroll.x"], " 配合使用。"], ["blockquote", ["p", "若列头与内容不对齐，请指定每列宽度 ", ["code", "width"], "。"], ["p", "建议指定 scroll.x 为固定宽度。"]]],
	    "en-US": [["p", "Fix some columns and scroll in other columns. You must set ", ["code", "scoll.x"], " meanwhile."], ["blockquote", ["p", "Specify the width of each column if header and cell do not align properly."], ["p", "A fixed width for ", ["code", "scroll.x"], " is recommended."]]]
	  },
	  "meta": {
	    "order": 18,
	    "title": {
	      "en-US": "Fixed Columns",
	      "zh-CN": "固定列"
	    },
	    "filename": "components/table/demo/fixed-columns.md",
	    "id": "components-table-demo-fixed-columns"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Full Name'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span> fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 1'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 2'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 3'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 4'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'4'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 5'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'5'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 6'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'6'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 7'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'7'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 8'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'8'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Action'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'operation'</span><span class=\"token punctuation\">,</span>\n    fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'right'</span><span class=\"token punctuation\">,</span>\n    width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n    render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>action<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">40</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">scroll</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> x<span class=\"token punctuation\">:</span> <span class=\"token number\">1300</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Full Name', width: 100, dataIndex: 'name', key: 'name',
	      fixed: 'left' }, { title: 'Age', width: 100, dataIndex: 'age', key: 'age',
	      fixed: 'left' }, { title: 'Column 1', dataIndex: 'address', key: '1' }, { title: 'Column 2', dataIndex: 'address',
	      key: '2' }, { title: 'Column 3', dataIndex: 'address', key: '3'
	    }, { title: 'Column 4',
	      dataIndex: 'address', key: '4' }, { title: 'Column 5', dataIndex: 'address', key: '5' }, { title: 'Column 6', dataIndex: 'address', key: '6' }, { title: 'Column 7', dataIndex: 'address',
	      key: '7' }, { title: 'Column 8', dataIndex: 'address', key: '8' }, {
	      title: 'Action', key: 'operation',
	      fixed: 'right', width: 100, render: function render() {
	        return _react2.default.createElement(
	          'a',
	          { href: '#' },
	          'action'
	        );
	      } }];var data = [{ key: '1', name: 'John Brown', age: 32, address: 'New York Park' }, { key: '2', name: 'Jim Green', age: 40, address: 'London Park' }];return _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, scroll: { x: 1300 } });
	  }
	};

/***/ },

/***/ 1729:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(43);

	var _table = __webpack_require__(42);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "方便一页内展示大量数据。"], ["p", "需要指定 column 的 ", ["code", "width"], " 属性，否则列头和内容可能不对齐。"]],
	    "en-US": [["p", "Display large amounts of data in scrollable view."], ["blockquote", ["p", "Specify the width of each column if header and cell do not align properly."]]]
	  },
	  "meta": {
	    "order": 17,
	    "title": {
	      "en-US": "Fixed Header",
	      "zh-CN": "固定表头"
	    },
	    "filename": "components/table/demo/fixed-header.md",
	    "id": "components-table-demo-fixed-header"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">100</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  data<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`Edward King </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`London, Park Lane no. </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">pagination</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> pageSize<span class=\"token punctuation\">:</span> <span class=\"token number\">50</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">scroll</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> y<span class=\"token punctuation\">:</span> <span class=\"token number\">240</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name', width: 150
	    }, { title: 'Age',
	      dataIndex: 'age', width: 150 }, { title: 'Address', dataIndex: 'address'
	    }];var data = [];for (var i = 0; i < 100; i++) {
	      data.push({ key: i,
	        name: 'Edward King ' + i, age: 32, address: 'London, Park Lane no. ' + i });
	    }return _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, pagination: { pageSize: 50 }, scroll: { y: 240 } });
	  }
	};

/***/ },

/***/ 1730:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(43);

	var _table = __webpack_require__(42);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", ["code", "columns[n]"], " 可以内嵌 ", ["code", "children"], "，以渲染分组表头。"]],
	    "en-US": [["p", "Group table head with ", ["code", "columns[n].children"], "."]]
	  },
	  "meta": {
	    "order": 21,
	    "title": {
	      "en-US": "Grouping table head",
	      "zh-CN": "表头分组"
	    },
	    "filename": "components/table/demo/grouping-columns.md",
	    "id": "components-table-demo-grouping-columns"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n  fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span><span class=\"token punctuation\">,</span>\n  filters<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'John'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'John'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  onFilter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Other'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n    dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n    width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n    sorter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> a<span class=\"token punctuation\">.</span>age <span class=\"token operator\">-</span> b<span class=\"token punctuation\">.</span>age<span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Street'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'street'</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'street'</span><span class=\"token punctuation\">,</span>\n      width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Block'</span><span class=\"token punctuation\">,</span>\n      children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Building'</span><span class=\"token punctuation\">,</span>\n        dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'building'</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'building'</span><span class=\"token punctuation\">,</span>\n        width<span class=\"token punctuation\">:</span> <span class=\"token number\">50</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Door No.'</span><span class=\"token punctuation\">,</span>\n        dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'number'</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'number'</span><span class=\"token punctuation\">,</span>\n        width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Company'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Company Address'</span><span class=\"token punctuation\">,</span>\n    dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'companyAddress'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'companyAddress'</span><span class=\"token punctuation\">,</span>\n    width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Company Name'</span><span class=\"token punctuation\">,</span>\n    dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'companyName'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'companyName'</span><span class=\"token punctuation\">,</span>\n    width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Gender'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'gender'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'gender'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token number\">60</span><span class=\"token punctuation\">,</span>\n  fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'right'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">100</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  data<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n    street<span class=\"token punctuation\">:</span> <span class=\"token string\">'Lake Park'</span><span class=\"token punctuation\">,</span>\n    building<span class=\"token punctuation\">:</span> <span class=\"token string\">'C'</span><span class=\"token punctuation\">,</span>\n    number<span class=\"token punctuation\">:</span> <span class=\"token number\">2035</span><span class=\"token punctuation\">,</span>\n    companyAddress<span class=\"token punctuation\">:</span> <span class=\"token string\">'Lake Street 42'</span><span class=\"token punctuation\">,</span>\n    companyName<span class=\"token punctuation\">:</span> <span class=\"token string\">'SoftLake Co'</span><span class=\"token punctuation\">,</span>\n    gender<span class=\"token punctuation\">:</span> <span class=\"token string\">'M'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span>\n    <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">bordered</span>\n    <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>middle<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">scroll</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> x<span class=\"token punctuation\">:</span> <span class=\"token number\">1010</span><span class=\"token punctuation\">,</span> y<span class=\"token punctuation\">:</span> <span class=\"token number\">240</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name',
	      key: 'name', width: 100, fixed: 'left', filters: [{ text: 'Joe', value: 'Joe' }, { text: 'John', value: 'John' }], onFilter: function onFilter(value, record) {
	        return record.name.indexOf(value) === 0;
	      } }, { title: 'Other',
	      children: [{ title: 'Age', dataIndex: 'age',
	        key: 'age', width: 100, sorter: function sorter(a, b) {
	          return a.age - b.age;
	        } }, { title: 'Address', children: [{ title: 'Street', dataIndex: 'street', key: 'street', width: 200 }, { title: 'Block', children: [{ title: 'Building',
	            dataIndex: 'building', key: 'building', width: 50 }, { title: 'Door No.', dataIndex: 'number', key: 'number', width: 100 }]
	        }] }] }, { title: 'Company', children: [{ title: 'Company Address', dataIndex: 'companyAddress', key: 'companyAddress', width: 200
	      }, { title: 'Company Name', dataIndex: 'companyName', key: 'companyName', width: 200 }] }, { title: 'Gender', dataIndex: 'gender', key: 'gender', width: 60, fixed: 'right' }];var data = [];for (var i = 0; i < 100; i++) {
	      data.push({ key: i, name: 'John Brown', age: i + 1, street: 'Lake Park', building: 'C', number: 2035, companyAddress: 'Lake Street 42', companyName: 'SoftLake Co', gender: 'M' });
	    }return _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, bordered: true, size: 'middle', scroll: { x: 1010, y: 240 } });
	  }
	};

/***/ },

/***/ 1731:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(43);

	var _table = __webpack_require__(42);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "对某一列数据进行筛选，使用列的 ", ["code", "filters"], " 属性来指定需要筛选菜单的列，", ["code", "onFilter"], " 用于筛选当前数据，", ["code", "filterMultiple"], " 用于指定多选和单选。"], ["p", "对某一列数据进行排序，通过指定列的 ", ["code", "sorter"], " 函数即可启动排序按钮。", ["code", "sorter: function(a, b) { ... }"], "， a、b 为比较的两个列数据。"]],
	    "en-US": [["p", "Use ", ["code", "filters"], " to generate filter menu in columns, ", ["code", "onFilter"], " to determine filtered result, and ", ["code", "filterMultiple"], " to indicate whether it's multiple or single selection."], ["p", "Use ", ["code", "sorter"], " to make a column sortable. ", ["code", "sorter"], " can be a function ", ["code", "function(a, b) { ... }"], " for sorting data locally."]]
	  },
	  "meta": {
	    "order": 7,
	    "title": {
	      "en-US": "Filter and sorter",
	      "zh-CN": "筛选和排序"
	    },
	    "filename": "components/table/demo/head.md",
	    "id": "components-table-demo-head"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  filters<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Submenu'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Submenu'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Green'</span><span class=\"token punctuation\">,</span>\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Green'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Black'</span><span class=\"token punctuation\">,</span>\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Black'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token comment\" spellcheck=\"true\">// specify the condition of filtering result</span>\n  <span class=\"token comment\" spellcheck=\"true\">// here is that finding the name started with `value`</span>\n  onFilter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  sorter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> a<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> b<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  sorter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> a<span class=\"token punctuation\">.</span>age <span class=\"token operator\">-</span> b<span class=\"token punctuation\">.</span>age<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n  filters<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'London'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'London'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  filterMultiple<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  onFilter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>address<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  sorter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> a<span class=\"token punctuation\">.</span>address<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> b<span class=\"token punctuation\">.</span>address<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'4'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Red'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 2 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>pagination<span class=\"token punctuation\">,</span> filters<span class=\"token punctuation\">,</span> sorter<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'params'</span><span class=\"token punctuation\">,</span> pagination<span class=\"token punctuation\">,</span> filters<span class=\"token punctuation\">,</span> sorter<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name', filters: [{
	        text: 'Joe', value: 'Joe' }, { text: 'Jim',
	        value: 'Jim' }, { text: 'Submenu', value: 'Submenu', children: [{
	          text: 'Green',
	          value: 'Green' }, {
	          text: 'Black', value: 'Black' }] }],
	      // specify the condition of filtering result
	      // here is that finding the name started with `value`
	      onFilter: function onFilter(value, record) {
	        return record.name.indexOf(value) === 0;
	      }, sorter: function sorter(a, b) {
	        return a.name.length - b.name.length;
	      } }, { title: 'Age', dataIndex: 'age',
	      sorter: function sorter(a, b) {
	        return a.age - b.age;
	      } }, { title: 'Address', dataIndex: 'address', filters: [{ text: 'London', value: 'London' }, { text: 'New York', value: 'New York' }], filterMultiple: false, onFilter: function onFilter(value, record) {
	        return record.address.indexOf(value) === 0;
	      },
	      sorter: function sorter(a, b) {
	        return a.address.length - b.address.length;
	      } }];var data = [{ key: '1', name: 'John Brown', age: 32,
	      address: 'New York No. 1 Lake Park' }, { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' }, { key: '3', name: 'Joe Black',
	      age: 32, address: 'Sidney No. 1 Lake Park' }, { key: '4', name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' }];function onChange(pagination, filters, sorter) {
	      console.log('params', pagination, filters, sorter);
	    }return _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, onChange: onChange });
	  }
	};

/***/ },

/***/ 1732:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _style4 = __webpack_require__(43);

	var _table = __webpack_require__(42);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "使用 JSX 风格的 API（2.5.0 以后引入）"]],
	    "en-US": [["p", "Using JSX style API (introduced in 2.5.0)"]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "en-US": "JSX style API",
	      "zh-CN": "JSX 风格的 API"
	    },
	    "filename": "components/table/demo/jsx.md",
	    "id": "components-table-demo-jsx"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Column<span class=\"token punctuation\">,</span> ColumnGroup <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Table<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  firstName<span class=\"token punctuation\">:</span> <span class=\"token string\">'John'</span><span class=\"token punctuation\">,</span>\n  lastName<span class=\"token punctuation\">:</span> <span class=\"token string\">'Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  firstName<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim'</span><span class=\"token punctuation\">,</span>\n  lastName<span class=\"token punctuation\">:</span> <span class=\"token string\">'Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  firstName<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe'</span><span class=\"token punctuation\">,</span>\n  lastName<span class=\"token punctuation\">:</span> <span class=\"token string\">'Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">bordered</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ColumnGroup</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Name<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Column</span>\n        <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>First</span> <span class=\"token attr-name\">Name\"</span>\n        <span class=\"token attr-name\">dataIndex</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>firstName<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>firstName<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Column</span>\n        <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Last</span> <span class=\"token attr-name\">Name\"</span>\n        <span class=\"token attr-name\">dataIndex</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>lastName<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>lastName<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ColumnGroup</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Column</span>\n      <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Age<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">dataIndex</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>age<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>age<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Column</span>\n      <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Address<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">dataIndex</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>address<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>address<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Column</span>\n      <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Action<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>action<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">render</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Action 一 <span class=\"token punctuation\">{</span>record<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-divider<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Delete<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-divider<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-dropdown-link<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            More actions <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>down<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Table</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Column = _table2.default.Column,
	        ColumnGroup = _table2.default.ColumnGroup;
	    var data = [{ key: '1', firstName: 'John', lastName: 'Brown', age: 32,
	      address: 'New York No. 1 Lake Park' }, { key: '2',
	      firstName: 'Jim', lastName: 'Green', age: 42, address: 'London No. 1 Lake Park' }, { key: '3', firstName: 'Joe', lastName: 'Black', age: 32, address: 'Sidney No. 1 Lake Park' }];return _react2.default.createElement(
	      _table2.default,
	      { dataSource: data, bordered: true },
	      _react2.default.createElement(
	        ColumnGroup,
	        { title: 'Name' },
	        _react2.default.createElement(Column, { title: 'First Name', dataIndex: 'firstName', key: 'firstName' }),
	        _react2.default.createElement(Column, { title: 'Last Name', dataIndex: 'lastName', key: 'lastName' })
	      ),
	      _react2.default.createElement(Column, { title: 'Age', dataIndex: 'age', key: 'age' }),
	      _react2.default.createElement(Column, { title: 'Address', dataIndex: 'address', key: 'address' }),
	      _react2.default.createElement(Column, { title: 'Action', key: 'action', render: function render(text, record) {
	          return _react2.default.createElement(
	            'span',
	            null,
	            _react2.default.createElement(
	              'a',
	              { href: '#' },
	              'Action \u4E00 ',
	              record.name
	            ),
	            _react2.default.createElement('span', { className: 'ant-divider' }),
	            _react2.default.createElement(
	              'a',
	              { href: '#' },
	              'Delete'
	            ),
	            _react2.default.createElement('span', { className: 'ant-divider' }),
	            _react2.default.createElement(
	              'a',
	              { href: '#', className: 'ant-dropdown-link' },
	              'More actions ',
	              _react2.default.createElement(_icon2.default, { type: 'down' })
	            )
	          );
	        } })
	    );
	  }
	};

/***/ },

/***/ 1733:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(43);

	var _table = __webpack_require__(42);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "数据项较多时显示分页。"]],
	    "en-US": [["p", "when use pagination in table."]]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "en-US": "pagination",
	      "zh-CN": "分页"
	    },
	    "filename": "components/table/demo/paging.md",
	    "id": "components-table-demo-paging"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> text <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">46</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  data<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`Edward King </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`London, Park Lane no. </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> pagination <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  total<span class=\"token punctuation\">:</span> data<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">,</span>\n  showSizeChanger<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  onShowSizeChange<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>current<span class=\"token punctuation\">,</span> pageSize<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Current: '</span><span class=\"token punctuation\">,</span> current<span class=\"token punctuation\">,</span> <span class=\"token string\">'; PageSize: '</span><span class=\"token punctuation\">,</span> pageSize<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  onChange<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>current<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Current: '</span><span class=\"token punctuation\">,</span> current<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">pagination</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>pagination<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name', render: function render(text) {
	        return _react2.default.createElement(
	          'a',
	          { href: '#' },
	          text
	        );
	      } }, { title: 'Age', dataIndex: 'age' }, { title: 'Address', dataIndex: 'address' }];var data = [];for (var i = 0; i < 46; i++) {
	      data.push({ key: i, name: 'Edward King ' + i, age: 32, address: 'London, Park Lane no. ' + i });
	    }var pagination = { total: data.length,
	      showSizeChanger: true, onShowSizeChange: function onShowSizeChange(current, pageSize) {
	        console.log('Current: ', current, '; PageSize: ', pageSize);
	      }, onChange: function onChange(current) {
	        console.log('Current: ', current);
	      } };return _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, pagination: pagination });
	  }
	};

/***/ },

/***/ 1734:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(43);

	var _table = __webpack_require__(42);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "使用受控属性对筛选和排序状态进行控制。"], ["blockquote", ["ol", ["li", ["p", "columns 中定义了 fileredValue 和 sortOrder 属性即视为受控模式。"]], ["li", ["p", "只支持同时对一列进行排序，请保证只有一列的 sortOrder 属性是生效的。"]], ["li", ["p", "务必指定 ", ["code", "column.key"], "。"]]]]],
	    "en-US": [["p", "Control filters and sorters by ", ["code", "fileredValue"], " and ", ["code", "sortOrder"], "."], ["blockquote", ["ol", ["li", ["p", "Defining ", ["code", "fileredValue"], " or ", ["code", "sortOrder"], " means that it is in the controlled mode."]], ["li", ["p", "Make sure ", ["code", "sortOrder"], " is assigned for only one column."]], ["li", ["p", ["code", "column.key"], " is required."]]]]]
	  },
	  "meta": {
	    "order": 7,
	    "title": {
	      "en-US": "Reset filters and sorters",
	      "zh-CN": "可控的筛选和排序"
	    },
	    "filename": "components/table/demo/reset-filter.md",
	    "id": "components-table-demo-reset-filter"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'4'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Red'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 2 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      filteredInfo<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n      sortedInfo<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>pagination<span class=\"token punctuation\">,</span> filters<span class=\"token punctuation\">,</span> sorter<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Various parameters'</span><span class=\"token punctuation\">,</span> pagination<span class=\"token punctuation\">,</span> filters<span class=\"token punctuation\">,</span> sorter<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      filteredInfo<span class=\"token punctuation\">:</span> filters<span class=\"token punctuation\">,</span>\n      sortedInfo<span class=\"token punctuation\">:</span> sorter<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">clearFilters</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> filteredInfo<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">clearAll</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      filteredInfo<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n      sortedInfo<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">setAgeSort</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      sortedInfo<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        order<span class=\"token punctuation\">:</span> <span class=\"token string\">'descend'</span><span class=\"token punctuation\">,</span>\n        columnKey<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> <span class=\"token punctuation\">{</span> sortedInfo<span class=\"token punctuation\">,</span> filteredInfo <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    sortedInfo <span class=\"token operator\">=</span> sortedInfo <span class=\"token operator\">||</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    filteredInfo <span class=\"token operator\">=</span> filteredInfo <span class=\"token operator\">||</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n      filters<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span> text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      filteredValue<span class=\"token punctuation\">:</span> filteredInfo<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">,</span>\n      onFilter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span><span class=\"token function\">includes</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      sorter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> a<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> b<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">,</span>\n      sortOrder<span class=\"token punctuation\">:</span> sortedInfo<span class=\"token punctuation\">.</span>columnKey <span class=\"token operator\">===</span> <span class=\"token string\">'name'</span> <span class=\"token operator\">&amp;&amp;</span> sortedInfo<span class=\"token punctuation\">.</span>order<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n      sorter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> a<span class=\"token punctuation\">.</span>age <span class=\"token operator\">-</span> b<span class=\"token punctuation\">.</span>age<span class=\"token punctuation\">,</span>\n      sortOrder<span class=\"token punctuation\">:</span> sortedInfo<span class=\"token punctuation\">.</span>columnKey <span class=\"token operator\">===</span> <span class=\"token string\">'age'</span> <span class=\"token operator\">&amp;&amp;</span> sortedInfo<span class=\"token punctuation\">.</span>order<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n      filters<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span> text<span class=\"token punctuation\">:</span> <span class=\"token string\">'London'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'London'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> text<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      filteredValue<span class=\"token punctuation\">:</span> filteredInfo<span class=\"token punctuation\">.</span>address<span class=\"token punctuation\">,</span>\n      onFilter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>address<span class=\"token punctuation\">.</span><span class=\"token function\">includes</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      sorter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> a<span class=\"token punctuation\">.</span>address<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> b<span class=\"token punctuation\">.</span>address<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">,</span>\n      sortOrder<span class=\"token punctuation\">:</span> sortedInfo<span class=\"token punctuation\">.</span>columnKey <span class=\"token operator\">===</span> <span class=\"token string\">'address'</span> <span class=\"token operator\">&amp;&amp;</span> sortedInfo<span class=\"token punctuation\">.</span>order<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>table-operations<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>setAgeSort<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Age descending order<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>clearFilters<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Clear filters<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>clearAll<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Clear filters and sorting<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var data = [{ key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' }, { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' }, { key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park' }, { key: '4',
	      name: 'Jim Red', age: 32,
	      address: 'London No. 2 Lake Park' }];var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return { filteredInfo: null, sortedInfo: null };
	      },
	      handleChange: function handleChange(pagination, filters, sorter) {
	        console.log('Various parameters', pagination, filters, sorter);this.setState({ filteredInfo: filters,
	          sortedInfo: sorter });
	      },
	      clearFilters: function clearFilters(e) {
	        e.preventDefault();this.setState({ filteredInfo: null });
	      },
	      clearAll: function clearAll(e) {
	        e.preventDefault();this.setState({ filteredInfo: null, sortedInfo: null });
	      },
	      setAgeSort: function setAgeSort(e) {
	        e.preventDefault();this.setState({ sortedInfo: { order: 'descend', columnKey: 'age' } });
	      },
	      render: function render() {
	        var _state = this.state,
	            sortedInfo = _state.sortedInfo,
	            filteredInfo = _state.filteredInfo;
	        sortedInfo = sortedInfo || {};
	        filteredInfo = filteredInfo || {};var columns = [{
	          title: 'Name', dataIndex: 'name', key: 'name', filters: [{ text: 'Joe',
	            value: 'Joe' }, { text: 'Jim',
	            value: 'Jim' }], filteredValue: filteredInfo.name, onFilter: function onFilter(value, record) {
	            return record.name.includes(value);
	          }, sorter: function sorter(a, b) {
	            return a.name.length - b.name.length;
	          }, sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order }, { title: 'Age', dataIndex: 'age', key: 'age', sorter: function sorter(a, b) {
	            return a.age - b.age;
	          }, sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order }, { title: 'Address', dataIndex: 'address', key: 'address', filters: [{ text: 'London', value: 'London' }, { text: 'New York', value: 'New York' }], filteredValue: filteredInfo.address, onFilter: function onFilter(value, record) {
	            return record.address.includes(value);
	          }, sorter: function sorter(a, b) {
	            return a.address.length - b.address.length;
	          }, sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order }];return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'table-operations' },
	            _react2.default.createElement(
	              'a',
	              { href: '#', onClick: this.setAgeSort },
	              'Age descending order'
	            ),
	            _react2.default.createElement(
	              'a',
	              { href: '#', onClick: this.clearFilters },
	              'Clear filters'
	            ),
	            _react2.default.createElement(
	              'a',
	              { href: '#', onClick: this.clearAll },
	              'Clear filters and sorting'
	            )
	          ),
	          _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, onChange: this.handleChange })
	        );
	      }
	    });return _react2.default.createElement(App, null);
	  },
	  "style": ".table-operations {\n  font-size: 12px;\n  text-align: right;\n  margin-bottom: 16px;\n}\n\n.table-operations a {\n  margin-left: 8px;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.table-operations</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> right<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.table-operations</span> a </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-left</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1735:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(43);

	var _table = __webpack_require__(42);

	var _table2 = _interopRequireDefault(_table);

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
	    "zh-CN": [["p", "选择后进行操作，完成后清空选择，通过 ", ["code", "rowSelection.selectedRowKeys"], " 来控制选中项。"]],
	    "en-US": [["p", "To perform operations and clear selections after selecting some rows, use ", ["code", "rowSelection.selectedRowKeys"], " to control selected rows."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "en-US": "Selection and operation",
	      "zh-CN": "选择和操作"
	    },
	    "filename": "components/table/demo/row-selection-and-operation.md",
	    "id": "components-table-demo-row-selection-and-operation"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">46</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  data<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`Edward King </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`London, Park Lane no. </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      selectedRowKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>  <span class=\"token comment\" spellcheck=\"true\">// Check here to configure the default column</span>\n      loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">start</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// ajax request after empty completing</span>\n    <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        selectedRowKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onSelectChange</span><span class=\"token punctuation\">(</span>selectedRowKeys<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'selectedRowKeys changed: '</span><span class=\"token punctuation\">,</span> selectedRowKeys<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> selectedRowKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> loading<span class=\"token punctuation\">,</span> selectedRowKeys <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> rowSelection <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      selectedRowKeys<span class=\"token punctuation\">,</span>\n      onChange<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onSelectChange<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> hasSelected <span class=\"token operator\">=</span> selectedRowKeys<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>start<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">disabled</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">!</span>hasSelected<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">loading</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>loading<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">></span></span>Reload<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>hasSelected <span class=\"token operator\">?</span> <span class=\"token template-string\"><span class=\"token string\">`Selected </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>selectedRowKeys<span class=\"token punctuation\">.</span>length<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> items`</span></span> <span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">rowSelection</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>rowSelection<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name' }, { title: 'Age', dataIndex: 'age' }, { title: 'Address', dataIndex: 'address' }];var data = [];
	    for (var i = 0; i < 46; i++) {
	      data.push({ key: i, name: 'Edward King ' + i, age: 32, address: 'London, Park Lane no. ' + i });
	    }var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return { selectedRowKeys: [], // Check here to configure the default column
	          loading: false };
	      },
	      start: function start() {
	        var _this = this;

	        this.setState({ loading: true }); // ajax request after empty completing
	        setTimeout(function () {
	          _this.setState({ selectedRowKeys: [], loading: false });
	        }, 1000);
	      },
	      onSelectChange: function onSelectChange(selectedRowKeys) {
	        console.log('selectedRowKeys changed: ', selectedRowKeys);this.setState({ selectedRowKeys: selectedRowKeys });
	      },
	      render: function render() {
	        var _state = this.state,
	            loading = _state.loading,
	            selectedRowKeys = _state.selectedRowKeys;
	        var rowSelection = { selectedRowKeys: selectedRowKeys, onChange: this.onSelectChange
	        };
	        var hasSelected = selectedRowKeys.length > 0;return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { style: { marginBottom: 16 } },
	            _react2.default.createElement(
	              _button2.default,
	              { type: 'primary', onClick: this.start, disabled: !hasSelected, loading: loading },
	              'Reload'
	            ),
	            _react2.default.createElement(
	              'span',
	              { style: { marginLeft: 8 } },
	              hasSelected ? 'Selected ' + selectedRowKeys.length + ' items' : ''
	            )
	          ),
	          _react2.default.createElement(_table2.default, { rowSelection: rowSelection, columns: columns, dataSource: data })
	        );
	      }
	    });return _react2.default.createElement(App, null);
	  }
	};

/***/ },

/***/ 1736:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(43);

	var _table = __webpack_require__(42);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "第一列是联动的选择框。"]],
	    "en-US": [["p", "Rows can be selectable by making first column as a selectable column."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "en-US": "selection",
	      "zh-CN": "可选择"
	    },
	    "filename": "components/table/demo/row-selection.md",
	    "id": "components-table-demo-row-selection"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> text <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'4'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Disabled User'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">99</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// rowSelection object indicates the need for row selection</span>\n<span class=\"token keyword\">const</span> rowSelection <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  onChange<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>selectedRowKeys<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`selectedRowKeys: </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>selectedRowKeys<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span> <span class=\"token string\">'selectedRows: '</span><span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  onSelect<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">,</span> selected<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">,</span> selected<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  onSelectAll<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>selected<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">,</span> changeRows<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>selected<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">,</span> changeRows<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  getCheckboxProps<span class=\"token punctuation\">:</span> record <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    disabled<span class=\"token punctuation\">:</span> record<span class=\"token punctuation\">.</span>name <span class=\"token operator\">===</span> <span class=\"token string\">'Disabled User'</span><span class=\"token punctuation\">,</span>    <span class=\"token comment\" spellcheck=\"true\">// Column configuration not to be checked</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">rowSelection</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>rowSelection<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name', render: function render(text) {
	        return _react2.default.createElement(
	          'a',
	          { href: '#' },
	          text
	        );
	      } }, { title: 'Age', dataIndex: 'age' }, { title: 'Address', dataIndex: 'address' }];var data = [{ key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' }, { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' }, { key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park' }, { key: '4',
	      name: 'Disabled User', age: 99, address: 'Sidney No. 1 Lake Park' }]; // rowSelection object indicates the need for row selection
	    var rowSelection = { onChange: function onChange(selectedRowKeys, selectedRows) {
	        console.log('selectedRowKeys: ' + selectedRowKeys, 'selectedRows: ', selectedRows);
	      }, onSelect: function onSelect(record, selected, selectedRows) {
	        console.log(record, selected, selectedRows);
	      }, onSelectAll: function onSelectAll(selected, selectedRows, changeRows) {
	        console.log(selected, selectedRows, changeRows);
	      }, getCheckboxProps: function getCheckboxProps(record) {
	        return { disabled: record.name === 'Disabled User' };
	      } };return _react2.default.createElement(_table2.default, { rowSelection: rowSelection, columns: columns, dataSource: data });
	  }
	};

/***/ },

/***/ 1737:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(43);

	var _table = __webpack_require__(42);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "两种紧凑型的列表，小型列表只用于对话框内。"]],
	    "en-US": [["p", "Two compacted table size: ", ["code", "middle"], " and ", ["code", "small"], ", ", ["code", "small"], " size is used in Modal only."]]
	  },
	  "meta": {
	    "order": 10,
	    "title": {
	      "en-US": "size",
	      "zh-CN": "紧凑型"
	    },
	    "filename": "components/table/demo/size.md",
	    "id": "components-table-demo-size"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h4</span><span class=\"token punctuation\">></span></span>Middle size table<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h4</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>middle<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h4</span><span class=\"token punctuation\">></span></span>Small size table<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h4</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name' }, { title: 'Age', dataIndex: 'age' }, { title: 'Address',
	      dataIndex: 'address' }];var data = [{ key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' }, { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' }, {
	      key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park' }];return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h4',
	        null,
	        'Middle size table'
	      ),
	      _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, size: 'middle' }),
	      _react2.default.createElement(
	        'h4',
	        null,
	        'Small size table'
	      ),
	      _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, size: 'small' })
	    );
	  },
	  "style": "#components-table-demo-size h4 { margin-bottom: 16px; }"
	};

/***/ },

/***/ 2012:
/***/ function(module, exports) {

	/* (ignored) */

/***/ }

});