webpackJsonp([8,204],{

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

/***/ 174:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var FIELD_META_PROP = exports.FIELD_META_PROP = 'data-__meta';

/***/ },

/***/ 175:
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

	var _rcEditorMention = __webpack_require__(526);

	var _rcEditorMention2 = _interopRequireDefault(_rcEditorMention);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Mention = function (_React$Component) {
	    (0, _inherits3.default)(Mention, _React$Component);

	    function Mention(props) {
	        (0, _classCallCheck3.default)(this, Mention);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

	        _this.onSearchChange = function (value) {
	            if (_this.props.onSearchChange) {
	                return _this.props.onSearchChange(value);
	            }
	            return _this.defaultSearchChange(value);
	        };
	        _this.onChange = function (editorState) {
	            if (_this.props.onChange) {
	                _this.props.onChange(editorState);
	            }
	        };
	        _this.onFocus = function (ev) {
	            _this.setState({
	                focus: true
	            });
	            if (_this.props.onFocus) {
	                _this.props.onFocus(ev);
	            }
	        };
	        _this.onBlur = function (ev) {
	            _this.setState({
	                focus: false
	            });
	            if (_this.props.onBlur) {
	                _this.props.onBlur(ev);
	            }
	        };
	        _this.state = {
	            suggestions: props.suggestions,
	            focus: false
	        };
	        return _this;
	    }

	    Mention.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.setState({
	            suggestions: nextProps.suggestions
	        });
	    };

	    Mention.prototype.defaultSearchChange = function defaultSearchChange(value) {
	        var searchValue = value.toLowerCase();
	        var filteredSuggestions = (this.props.suggestions || []).filter(function (suggestion) {
	            return suggestion.toLowerCase().indexOf(searchValue) !== -1;
	        });
	        this.setState({
	            suggestions: filteredSuggestions
	        });
	    };

	    Mention.prototype.render = function render() {
	        var _props = this.props,
	            _props$className = _props.className,
	            className = _props$className === undefined ? '' : _props$className,
	            prefixCls = _props.prefixCls,
	            loading = _props.loading;
	        var _state = this.state,
	            suggestions = _state.suggestions,
	            focus = _state.focus;

	        var cls = (0, _classnames2.default)(className, (0, _defineProperty3.default)({}, prefixCls + '-active', focus));
	        var notFoundContent = loading ? _react2.default.createElement(_icon2.default, { type: 'loading' }) : this.props.notFoundContent;
	        return _react2.default.createElement(_rcEditorMention2.default, (0, _extends3.default)({}, this.props, { className: cls, onSearchChange: this.onSearchChange, onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onBlur, suggestions: suggestions, notFoundContent: notFoundContent }));
	    };

	    return Mention;
	}(_react2.default.Component);

	exports.default = Mention;

	Mention.Nav = _rcEditorMention.Nav;
	Mention.toString = _rcEditorMention.toString;
	Mention.toEditorState = _rcEditorMention.toEditorState;
	Mention.getMentions = _rcEditorMention.getMentions;
	Mention.defaultProps = {
	    prefixCls: 'ant-mention',
	    notFoundContent: '无匹配结果，轻敲空格完成输入',
	    loading: false,
	    multiLines: false
	};
	module.exports = exports['default'];

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(943);

/***/ },

/***/ 249:
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

/***/ 763:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'async': __webpack_require__(1586),
	    'avatar': __webpack_require__(1587),
	    'basic': __webpack_require__(1588),
	    'controllder-simple': __webpack_require__(1589),
	    'controlled': __webpack_require__(1590),
	    'custom-tag': __webpack_require__(1591),
	    'multilines': __webpack_require__(1592),
	    'popupContainer': __webpack_require__(1593),
	}

/***/ },

/***/ 943:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 1586:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(176);

	var _mention = __webpack_require__(175);

	var _mention2 = _interopRequireDefault(_mention);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "匹配内容列表为异步返回时。"]],
	    "en-US": [["p", "async"]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "异步加载",
	      "en-US": "Asynchronous loading"
	    },
	    "filename": "components/mention/demo/async.md",
	    "id": "components-mention-demo-async"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Mention <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> users <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'afc163'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'benjycui'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'yiminghe'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'jljsj33'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'dqaria'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'RaoHai'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> AsyncMention <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      suggestions<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">fetchSuggestions</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> callback<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>users<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">!==</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token number\">500</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onSearchChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">fetchSuggestions</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span>suggestions<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        suggestions<span class=\"token punctuation\">,</span>\n        loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> suggestions<span class=\"token punctuation\">,</span> loading <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Mention</span>\n        <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span><span class=\"token punctuation\">,</span> height<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">loading</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>loading<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">suggestions</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>suggestions<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onSearchChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onSearchChange<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>AsyncMention</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];var AsyncMention = _react2.default.createClass({
	      displayName: 'AsyncMention',
	      getInitialState: function getInitialState() {
	        return { suggestions: [], loading: false };
	      },
	      fetchSuggestions: function fetchSuggestions(value, callback) {
	        setTimeout(function () {
	          callback(users.filter(function (item) {
	            return item.indexOf(value) !== -1;
	          }));
	        }, 500);
	      },
	      onSearchChange: function onSearchChange(value) {
	        var _this = this;

	        this.fetchSuggestions(value, function (suggestions) {
	          _this.setState({ suggestions: suggestions, loading: false });
	        });
	        this.setState({ loading: true });
	      },
	      render: function render() {
	        var _state = this.state,
	            suggestions = _state.suggestions,
	            loading = _state.loading;
	        return _react2.default.createElement(_mention2.default, { style: { width: '100%', height: 100 }, loading: loading, suggestions: suggestions, onSearchChange: this.onSearchChange });
	      }
	    });return _react2.default.createElement(AsyncMention, null);
	  }
	};

/***/ },

/***/ 1587:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(176);

	var _mention = __webpack_require__(175);

	var _mention2 = _interopRequireDefault(_mention);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "自定义建议（含头像）"], ["p", "注意，自定义建议时，onSearchChange 必须不能为空。"]],
	    "en-US": [["p", "Customize suggestions"]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "头像",
	      "en-US": "Icon Image"
	    },
	    "filename": "components/mention/demo/avatar.md",
	    "id": "components-mention-demo-avatar"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Mention <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> Nav <span class=\"token operator\">=</span> Mention<span class=\"token punctuation\">.</span>Nav<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> webFrameworks <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'React'</span><span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'JavaScript'</span><span class=\"token punctuation\">,</span> icon<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Angular'</span><span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'JavaScript'</span><span class=\"token punctuation\">,</span> icon<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Dva'</span><span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'Javascript'</span><span class=\"token punctuation\">,</span> icon<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Flask'</span><span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'Python'</span><span class=\"token punctuation\">,</span> icon<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> CustomNavMention <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      suggestions<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onSearchChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> searchValue <span class=\"token operator\">=</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">toLowerCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> filtered <span class=\"token operator\">=</span> webFrameworks<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span>\n      item<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span><span class=\"token function\">toLowerCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>searchValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">!==</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">const</span> suggestions <span class=\"token operator\">=</span> filtered<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>suggestion <span class=\"token operator\">=</span><span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Nav</span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>suggestion<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">data</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>suggestion<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">disabled</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>suggestion<span class=\"token punctuation\">.</span>disabled<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">alt</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>suggestion<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> height<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> marginRight<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span><span class=\"token punctuation\">,</span> float<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">src</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>suggestion<span class=\"token punctuation\">.</span>icon<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">{</span>suggestion<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">}</span> <span class=\"token operator\">-</span> <span class=\"token punctuation\">{</span>suggestion<span class=\"token punctuation\">.</span>type<span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Nav</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      suggestions<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> suggestions <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Mention</span>\n        <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span><span class=\"token punctuation\">,</span> height<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">suggestions</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>suggestions<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onSearchChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onSearchChange<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CustomNavMention</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Nav = _mention2.default.Nav;
	    var webFrameworks = [{ name: 'React',
	      type: 'JavaScript',
	      icon: 'https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg' }, { name: 'Angular', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png' }, { name: 'Dva', type: 'Javascript', icon: 'https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png' }, { name: 'Flask', type: 'Python', icon: 'https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png' }];var CustomNavMention = _react2.default.createClass({
	      displayName: 'CustomNavMention',
	      getInitialState: function getInitialState() {
	        return { suggestions: [] };
	      },
	      onSearchChange: function onSearchChange(value) {
	        var searchValue = value.toLowerCase();var filtered = webFrameworks.filter(function (item) {
	          return item.name.toLowerCase().indexOf(searchValue) !== -1;
	        });var suggestions = filtered.map(function (suggestion) {
	          return _react2.default.createElement(
	            Nav,
	            { value: suggestion.name, data: suggestion, disabled: suggestion.disabled },
	            _react2.default.createElement(
	              'span',
	              null,
	              _react2.default.createElement('img', { alt: suggestion.name, style: { height: 16, width: 16, marginRight: 5, float: 'left' }, src: suggestion.icon }),
	              suggestion.name,
	              ' - ',
	              suggestion.type
	            )
	          );
	        });this.setState({ suggestions: suggestions });
	      },
	      render: function render() {
	        var suggestions = this.state.suggestions;
	        return _react2.default.createElement(_mention2.default, { style: { width: '100%', height: 100 }, suggestions: suggestions, onSearchChange: this.onSearchChange });
	      }
	    });return _react2.default.createElement(CustomNavMention, null);
	  }
	};

/***/ },

/***/ 1588:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(176);

	var _mention = __webpack_require__(175);

	var _mention2 = _interopRequireDefault(_mention);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "基本使用"]],
	    "en-US": [["p", "Basic usage."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本使用",
	      "en-US": "Basic"
	    },
	    "filename": "components/mention/demo/basic.md",
	    "id": "components-mention-demo-basic"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Mention <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> toString<span class=\"token punctuation\">,</span> toEditorState <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Mention<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>editorState<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span>editorState<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onSelect</span><span class=\"token punctuation\">(</span>suggestion<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'onSelect'</span><span class=\"token punctuation\">,</span> suggestion<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Mention</span>\n    <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span><span class=\"token punctuation\">,</span> height<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">toEditorState</span><span class=\"token punctuation\">(</span><span class=\"token string\">'@afc163'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">suggestions</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'afc163'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'benjycui'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'yiminghe'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'RaoHai'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'中文'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'にほんご'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">onSelect</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onSelect<span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var toString = _mention2.default.toString,
	        toEditorState = _mention2.default.toEditorState;

	    function onChange(editorState) {
	      console.log(toString(editorState));
	    }function onSelect(suggestion) {
	      console.log('onSelect', suggestion);
	    }return _react2.default.createElement(_mention2.default, { style: { width: '100%', height: 100 }, onChange: onChange, defaultValue: toEditorState('@afc163'), suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'], onSelect: onSelect });
	  }
	};

/***/ },

/***/ 1589:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(176);

	var _mention = __webpack_require__(175);

	var _mention2 = _interopRequireDefault(_mention);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "受控模式."]],
	    "en-US": [["p", "Controlled mode."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "受控模式",
	      "en-US": "Controlled"
	    },
	    "filename": "components/mention/demo/controllder-simple.md",
	    "id": "components-mention-demo-controllder-simple"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Mention <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> toEditorState <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Mention<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      value<span class=\"token punctuation\">:</span> <span class=\"token function\">toEditorState</span><span class=\"token punctuation\">(</span><span class=\"token string\">'@afc163'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>editorState<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      value<span class=\"token punctuation\">:</span> editorState<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Mention</span>\n      <span class=\"token attr-name\">suggestions</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'afc163'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'benjycui'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'yiminghe'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'RaoHai'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'中文'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'にほんご'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var toEditorState = _mention2.default.toEditorState;
	    var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return { value: toEditorState('@afc163') };
	      },
	      handleChange: function handleChange(editorState) {
	        this.setState({ value: editorState });
	      },
	      render: function render() {
	        return _react2.default.createElement(_mention2.default, { suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'], value: this.state.value, onChange: this.handleChange });
	      }
	    });return _react2.default.createElement(App, null);
	  }
	};

/***/ },

/***/ 1590:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style5 = __webpack_require__(67);

	var _form = __webpack_require__(66);

	var _form2 = _interopRequireDefault(_form);

	var _style6 = __webpack_require__(176);

	var _mention = __webpack_require__(175);

	var _mention2 = _interopRequireDefault(_mention);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "受控模式，例如配合 Form 使用"]],
	    "en-US": [["p", "Controlled mode, for example, to work with ", ["code", "Form"], " ."]]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "配合 Form 使用",
	      "en-US": "With Form"
	    },
	    "filename": "components/mention/demo/controlled.md",
	    "id": "components-mention-demo-controlled"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Mention<span class=\"token punctuation\">,</span> Form<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> toEditorState<span class=\"token punctuation\">,</span> getMentions <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Mention<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">let</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      initValue<span class=\"token punctuation\">:</span> <span class=\"token function\">toEditorState</span><span class=\"token punctuation\">(</span><span class=\"token string\">'@afc163'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleReset</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">resetFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleSubmit</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>errors<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>errors<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Errors in form!!!'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Submit!!!'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">checkMention</span><span class=\"token punctuation\">(</span>rule<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">,</span> callback<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldValue <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> mentions <span class=\"token operator\">=</span> <span class=\"token function\">getMentions</span><span class=\"token punctuation\">(</span><span class=\"token function\">getFieldValue</span><span class=\"token punctuation\">(</span><span class=\"token string\">'mention'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>mentions<span class=\"token punctuation\">.</span>length <span class=\"token operator\">&lt;</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">new</span> <span class=\"token class-name\">Error</span><span class=\"token punctuation\">(</span><span class=\"token string\">'More than one must be selected!'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator<span class=\"token punctuation\">,</span> getFieldValue <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'>> render'</span><span class=\"token punctuation\">,</span> <span class=\"token function\">getFieldValue</span><span class=\"token punctuation\">(</span><span class=\"token string\">'mention'</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>initValue<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">horizontal</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n          <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>control-mention<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Top</span> <span class=\"token attr-name\">coders\"</span>\n          <span class=\"token attr-name\">labelCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">14</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'mention'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n              <span class=\"token punctuation\">{</span> validator<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>checkMention <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n            initialValue<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>initValue<span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Mention</span>\n              <span class=\"token attr-name\">suggestions</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'afc163'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'benjycui'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'yiminghe'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'RaoHai'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'中文'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'にほんご'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">14</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Submit<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token entity\" title=\"&nbsp;\">&amp;nbsp;</span><span class=\"token entity\" title=\"&nbsp;\">&amp;nbsp;</span><span class=\"token entity\" title=\"&nbsp;\">&amp;nbsp;</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ghost<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleReset<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Reset<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nApp <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>App<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var toEditorState = _mention2.default.toEditorState,
	        getMentions = _mention2.default.getMentions;
	    var FormItem = _form2.default.Item;var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return { initValue: toEditorState('@afc163') };
	      },
	      handleReset: function handleReset(e) {
	        e.preventDefault();this.props.form.resetFields();
	      },
	      handleSubmit: function handleSubmit(e) {
	        e.preventDefault();this.props.form.validateFields(function (errors, values) {
	          if (errors) {
	            console.log('Errors in form!!!');return;
	          }console.log('Submit!!!');
	          console.log(values);
	        });
	      },
	      checkMention: function checkMention(rule, value, callback) {
	        var getFieldValue = this.props.form.getFieldValue;

	        var mentions = getMentions(getFieldValue('mention'));if (mentions.length < 2) {
	          callback(new Error('More than one must be selected!'));
	        } else {
	          callback();
	        }
	      },
	      render: function render() {
	        var _props$form = this.props.form,
	            getFieldDecorator = _props$form.getFieldDecorator,
	            getFieldValue = _props$form.getFieldValue;
	        console.log('>> render', getFieldValue('mention') === this.state.initValue);return _react2.default.createElement(
	          _form2.default,
	          { horizontal: true },
	          _react2.default.createElement(
	            FormItem,
	            { id: 'control-mention', label: 'Top coders', labelCol: { span: 6 }, wrapperCol: { span: 14 } },
	            getFieldDecorator('mention', { rules: [{ validator: this.checkMention }], initialValue: this.state.initValue })(_react2.default.createElement(_mention2.default, { suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'] }))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            { wrapperCol: { span: 14, offset: 6 } },
	            _react2.default.createElement(
	              _button2.default,
	              { type: 'primary', onClick: this.handleSubmit },
	              'Submit'
	            ),
	            '\xA0\xA0\xA0',
	            _react2.default.createElement(
	              _button2.default,
	              { type: 'ghost', onClick: this.handleReset },
	              'Reset'
	            )
	          )
	        );
	      }
	    });App = _form2.default.create()(App);return _react2.default.createElement(App, null);
	  }
	};

/***/ },

/***/ 1591:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(176);

	var _mention = __webpack_require__(175);

	var _mention2 = _interopRequireDefault(_mention);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "自定义建议"], ["p", "注意，自定义建议时，onSearchChange 必须不能为空。"]],
	    "en-US": [["p", "Customize suggestions."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "自定义建议",
	      "en-US": "Customize Suggestion"
	    },
	    "filename": "components/mention/demo/custom-tag.md",
	    "id": "components-mention-demo-custom-tag"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Mention <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> Nav <span class=\"token operator\">=</span> Mention<span class=\"token punctuation\">.</span>Nav<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> webFrameworks <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'React'</span><span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'JavaScript'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Angular'</span><span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'JavaScript'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Laravel'</span><span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'PHP'</span><span class=\"token punctuation\">,</span> disabled<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Flask'</span><span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'Python'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Django'</span><span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'Python'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onSelect</span><span class=\"token punctuation\">(</span>suggestion<span class=\"token punctuation\">,</span> data<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'onSelect'</span><span class=\"token punctuation\">,</span> suggestion<span class=\"token punctuation\">,</span> data<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token keyword\">const</span> CustomNavMention <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      suggestions<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onSearchChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> searchValue <span class=\"token operator\">=</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">toLowerCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> filtered <span class=\"token operator\">=</span> webFrameworks<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span>\n      item<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span><span class=\"token function\">toLowerCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>searchValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">!==</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> suggestions <span class=\"token operator\">=</span> filtered<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>suggestion <span class=\"token operator\">=</span><span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Nav</span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>suggestion<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">data</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>suggestion<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>suggestion<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">}</span> <span class=\"token operator\">-</span> <span class=\"token punctuation\">{</span>suggestion<span class=\"token punctuation\">.</span>type<span class=\"token punctuation\">}</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Nav</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> suggestions <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> suggestions <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Mention</span>\n        <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>@someone<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span><span class=\"token punctuation\">,</span> height<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">suggestions</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>suggestions<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onSearchChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onSearchChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onSelect</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onSelect<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CustomNavMention</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Nav = _mention2.default.Nav;
	    var webFrameworks = [{ name: 'React',
	      type: 'JavaScript' }, { name: 'Angular', type: 'JavaScript' }, { name: 'Laravel', type: 'PHP', disabled: true }, { name: 'Flask', type: 'Python' }, { name: 'Django', type: 'Python' }];function onSelect(suggestion, data) {
	      console.log('onSelect', suggestion, data);
	    }var CustomNavMention = _react2.default.createClass({
	      displayName: 'CustomNavMention',
	      getInitialState: function getInitialState() {
	        return { suggestions: [] };
	      },
	      onSearchChange: function onSearchChange(value) {
	        var searchValue = value.toLowerCase();var filtered = webFrameworks.filter(function (item) {
	          return item.name.toLowerCase().indexOf(searchValue) !== -1;
	        });
	        var suggestions = filtered.map(function (suggestion) {
	          return _react2.default.createElement(
	            Nav,
	            { value: suggestion.name, data: suggestion },
	            _react2.default.createElement(
	              'span',
	              null,
	              suggestion.name,
	              ' - ',
	              suggestion.type,
	              ' '
	            )
	          );
	        });this.setState({ suggestions: suggestions });
	      },
	      render: function render() {
	        var suggestions = this.state.suggestions;
	        return _react2.default.createElement(_mention2.default, { placeholder: '@someone', style: { width: '100%', height: 100 }, suggestions: suggestions, onSearchChange: this.onSearchChange, onSelect: onSelect });
	      }
	    });return _react2.default.createElement(CustomNavMention, null);
	  }
	};

/***/ },

/***/ 1592:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(176);

	var _mention = __webpack_require__(175);

	var _mention2 = _interopRequireDefault(_mention);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "多行模式，多行模式必须指定高度。"]],
	    "en-US": [["p", "Multi lines mode."]]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "多行",
	      "en-US": "Multi-lines Mode"
	    },
	    "filename": "components/mention/demo/multilines.md",
	    "id": "components-mention-demo-multilines"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Mention <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> toString <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Mention<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>editorState<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span>editorState<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Mention</span>\n    <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span><span class=\"token punctuation\">,</span> height<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">suggestions</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'afc163'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'benjycui'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'yiminghe'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'jljsj33'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'dqaria'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'RaoHai'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">multiLines</span>\n  <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var toString = _mention2.default.toString;
	    function onChange(editorState) {
	      console.log(toString(editorState));
	    }return _react2.default.createElement(_mention2.default, { style: { width: '100%', height: 100 }, onChange: onChange, suggestions: ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'], multiLines: true });
	  }
	};

/***/ },

/***/ 1593:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(128);

	var _popover = __webpack_require__(210);

	var _popover2 = _interopRequireDefault(_popover);

	var _style5 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(176);

	var _mention = __webpack_require__(175);

	var _mention2 = _interopRequireDefault(_mention);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "指定提示渲染的父节点。"]],
	    "en-US": [["p", "To set the container of the suggestion."]]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "建议渲染父节点",
	      "en-US": "SuggestionContainer"
	    },
	    "filename": "components/mention/demo/popupContainer.md",
	    "id": "components-mention-demo-popupContainer"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Mention<span class=\"token punctuation\">,</span> Popover<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> toString<span class=\"token punctuation\">,</span> toEditorState <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Mention<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>editorState<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span>editorState<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onSelect</span><span class=\"token punctuation\">(</span>suggestion<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'onSelect'</span><span class=\"token punctuation\">,</span> suggestion<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> PopoverContainer <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getSuggestionContainer</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>popover<span class=\"token punctuation\">.</span><span class=\"token function\">getPopupDomNode</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> mention <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Mention</span>\n      <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span><span class=\"token punctuation\">,</span> height<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">toEditorState</span><span class=\"token punctuation\">(</span><span class=\"token string\">'@afc163'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">suggestions</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'afc163'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'benjycui'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'yiminghe'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'RaoHai'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'中文'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'にほんご'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">onSelect</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onSelect<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">getSuggestionContainer</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>getSuggestionContainer<span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popover</span> <span class=\"token attr-name\">trigger</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>click<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>mention<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Title<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">ref</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>popover <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>popover <span class=\"token operator\">=</span> popover<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Click Me<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popover</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>PopoverContainer</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var toString = _mention2.default.toString,
	        toEditorState = _mention2.default.toEditorState;
	    function onChange(editorState) {
	      console.log(toString(editorState));
	    }function onSelect(suggestion) {
	      console.log('onSelect', suggestion);
	    }var PopoverContainer = _react2.default.createClass({
	      displayName: 'PopoverContainer',
	      getSuggestionContainer: function getSuggestionContainer() {
	        return this.popover.getPopupDomNode();
	      },
	      render: function render() {
	        var _this = this;

	        var mention = _react2.default.createElement(_mention2.default, { style: { width: '100%', height: 100 }, onChange: onChange, defaultValue: toEditorState('@afc163'), suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'], onSelect: onSelect, getSuggestionContainer: this.getSuggestionContainer });return _react2.default.createElement(
	          _popover2.default,
	          { trigger: 'click', content: mention, title: 'Title', ref: function ref(popover) {
	              return _this.popover = popover;
	            } },
	          _react2.default.createElement(
	            _button2.default,
	            { type: 'primary' },
	            'Click Me'
	          )
	        );
	      }
	    });return _react2.default.createElement(PopoverContainer, null);
	  }
	};

/***/ }

});