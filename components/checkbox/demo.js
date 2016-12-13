webpackJsonp([32,204],{

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

/***/ 754:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(1505),
	    'check-all': __webpack_require__(1506),
	    'controller': __webpack_require__(1507),
	    'disabled': __webpack_require__(1508),
	    'group': __webpack_require__(1509),
	}

/***/ },

/***/ 1505:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(56);

	var _checkbox = __webpack_require__(40);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "简单的 checkbox。"]],
	    "en-US": [["p", "Basic usage of checkbox."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本用法",
	      "en-US": "Basic"
	    },
	    "filename": "components/checkbox/demo/basic.md",
	    "id": "components-checkbox-demo-basic"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Checkbox <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`checked = </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>checked<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Checkbox</span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Checkbox<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Checkbox</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    function onChange(e) {
	      console.log('checked = ' + e.target.checked);
	    }return _react2.default.createElement(
	      _checkbox2.default,
	      { onChange: onChange },
	      'Checkbox'
	    );
	  }
	};

/***/ },

/***/ 1506:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(56);

	var _checkbox = __webpack_require__(40);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "在实现全选效果时，你可能会用到 ", ["code", "indeterminate"], " 属性。"]],
	    "en-US": [["p", "The ", ["code", "indeterminate"], " property can help you to achieve a 'check all' effect."]]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "全选",
	      "en-US": "Check all"
	    },
	    "filename": "components/checkbox/demo/check-all.md",
	    "id": "components-checkbox-demo-check-all"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Checkbox <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> CheckboxGroup <span class=\"token operator\">=</span> Checkbox<span class=\"token punctuation\">.</span>Group<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> plainOptions <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'Apple'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Pear'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Orange'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> defaultCheckedList <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'Apple'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Orange'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      checkedList<span class=\"token punctuation\">:</span> defaultCheckedList<span class=\"token punctuation\">,</span>\n      indeterminate<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      checkAll<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> borderBottom<span class=\"token punctuation\">:</span> <span class=\"token string\">'1px solid #E9E9E9'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Checkbox</span>\n            <span class=\"token attr-name\">indeterminate</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>indeterminate<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onCheckAllChange<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>checkAll<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">></span></span>\n            Check all\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Checkbox</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CheckboxGroup</span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>plainOptions<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>checkedList<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>checkedList<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      checkedList<span class=\"token punctuation\">,</span>\n      indeterminate<span class=\"token punctuation\">:</span> <span class=\"token operator\">!</span><span class=\"token operator\">!</span>checkedList<span class=\"token punctuation\">.</span>length <span class=\"token operator\">&amp;&amp;</span> <span class=\"token punctuation\">(</span>checkedList<span class=\"token punctuation\">.</span>length <span class=\"token operator\">&lt;</span> plainOptions<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      checkAll<span class=\"token punctuation\">:</span> checkedList<span class=\"token punctuation\">.</span>length <span class=\"token operator\">===</span> plainOptions<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onCheckAllChange</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      checkedList<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>checked <span class=\"token operator\">?</span> plainOptions <span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      indeterminate<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      checkAll<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>checked<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var CheckboxGroup = _checkbox2.default.Group;var plainOptions = ['Apple', 'Pear', 'Orange'];var defaultCheckedList = ['Apple', 'Orange'];
	    var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return { checkedList: defaultCheckedList,
	          indeterminate: true, checkAll: false };
	      },
	      render: function render() {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { style: { borderBottom: '1px solid #E9E9E9' } },
	            _react2.default.createElement(
	              _checkbox2.default,
	              { indeterminate: this.state.indeterminate, onChange: this.onCheckAllChange, checked: this.state.checkAll },
	              'Check all'
	            )
	          ),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(CheckboxGroup, { options: plainOptions, value: this.state.checkedList, onChange: this.onChange })
	        );
	      },
	      onChange: function onChange(checkedList) {
	        this.setState({ checkedList: checkedList, indeterminate: !!checkedList.length && checkedList.length < plainOptions.length, checkAll: checkedList.length === plainOptions.length });
	      },
	      onCheckAllChange: function onCheckAllChange(e) {
	        this.setState({ checkedList: e.target.checked ? plainOptions : [], indeterminate: false, checkAll: e.target.checked });
	      }
	    });return _react2.default.createElement(App, null);
	  }
	};

/***/ },

/***/ 1507:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style4 = __webpack_require__(56);

	var _checkbox = __webpack_require__(40);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "联动 checkbox。"]],
	    "en-US": [["p", "Communicated with other components."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "受控的 Checkbox",
	      "en-US": "Controlled Checkbox"
	    },
	    "filename": "components/checkbox/demo/controller.md",
	    "id": "components-checkbox-demo-controller"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Checkbox<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      checked<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      disabled<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> label <span class=\"token operator\">=</span> <span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>checked <span class=\"token operator\">?</span> <span class=\"token string\">'Checked'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'Unchecked'</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">-</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>disabled <span class=\"token operator\">?</span> <span class=\"token string\">'Disabled'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'Enabled'</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token string\">'20px'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Checkbox</span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>checked<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">disabled</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>disabled<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">{</span>label<span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Checkbox</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>toggleChecked<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">{</span><span class=\"token operator\">!</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>checked <span class=\"token operator\">?</span> <span class=\"token string\">'Check'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'Uncheck'</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginLeft<span class=\"token punctuation\">:</span> <span class=\"token string\">'10px'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>toggleDisable<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">{</span><span class=\"token operator\">!</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>disabled <span class=\"token operator\">?</span> <span class=\"token string\">'Disable'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'Enable'</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">toggleChecked</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> checked<span class=\"token punctuation\">:</span> <span class=\"token operator\">!</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>checked <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">toggleDisable</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> disabled<span class=\"token punctuation\">:</span> <span class=\"token operator\">!</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>disabled <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'checked = '</span><span class=\"token punctuation\">,</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>checked<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      checked<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>checked<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return { checked: true, disabled: false };
	      },
	      render: function render() {
	        var label = (this.state.checked ? 'Checked' : 'Unchecked') + '-' + (this.state.disabled ? 'Disabled' : 'Enabled');return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'p',
	            { style: { marginBottom: '20px' } },
	            _react2.default.createElement(
	              _checkbox2.default,
	              { checked: this.state.checked, disabled: this.state.disabled, onChange: this.onChange },
	              label
	            )
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              _button2.default,
	              { type: 'primary', size: 'small', onClick: this.toggleChecked },
	              !this.state.checked ? 'Check' : 'Uncheck'
	            ),
	            _react2.default.createElement(
	              _button2.default,
	              { style: { marginLeft: '10px' }, type: 'primary', size: 'small', onClick: this.toggleDisable },
	              !this.state.disabled ? 'Disable' : 'Enable'
	            )
	          )
	        );
	      },
	      toggleChecked: function toggleChecked() {
	        this.setState({ checked: !this.state.checked });
	      },
	      toggleDisable: function toggleDisable() {
	        this.setState({ disabled: !this.state.disabled });
	      },
	      onChange: function onChange(e) {
	        console.log('checked = ', e.target.checked);this.setState({ checked: e.target.checked });
	      }
	    });return _react2.default.createElement(App, null);
	  }
	};

/***/ },

/***/ 1508:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(56);

	var _checkbox = __webpack_require__(40);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "checkbox 不可用。"]],
	    "en-US": [["p", "Disabled checkbox."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "不可用",
	      "en-US": "Disabled"
	    },
	    "filename": "components/checkbox/demo/disabled.md",
	    "id": "components-checkbox-demo-disabled"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Checkbox <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Checkbox</span> <span class=\"token attr-name\">defaultChecked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">disabled</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Checkbox</span> <span class=\"token attr-name\">defaultChecked</span> <span class=\"token attr-name\">disabled</span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_checkbox2.default, { defaultChecked: false, disabled: true }),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(_checkbox2.default, { defaultChecked: true, disabled: true })
	    );
	  }
	};

/***/ },

/***/ 1509:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(56);

	var _checkbox = __webpack_require__(40);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "方便的从数组生成 Checkbox 组。"]],
	    "en-US": [["p", "Generate a group of checkboxes from an array."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "Checkbox 组",
	      "en-US": "Checkbox Group"
	    },
	    "filename": "components/checkbox/demo/group.md",
	    "id": "components-checkbox-demo-group"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Checkbox <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> CheckboxGroup <span class=\"token operator\">=</span> Checkbox<span class=\"token punctuation\">.</span>Group<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>checkedValues<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'checked = '</span><span class=\"token punctuation\">,</span> checkedValues<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> plainOptions <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'Apple'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Pear'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Orange'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span> label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Apple'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Apple'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Pear'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Pear'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Orange'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Orange'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> optionsWithDisabled <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span> label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Apple'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Apple'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Pear'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Pear'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Orange'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Orange'</span><span class=\"token punctuation\">,</span> disabled<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CheckboxGroup</span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>plainOptions<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'Apple'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CheckboxGroup</span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'Pear'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CheckboxGroup</span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>optionsWithDisabled<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">disabled</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'Apple'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var CheckboxGroup = _checkbox2.default.Group;function onChange(checkedValues) {
	      console.log('checked = ', checkedValues);
	    }var plainOptions = ['Apple', 'Pear', 'Orange'];var options = [{ label: 'Apple', value: 'Apple' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }];var optionsWithDisabled = [{ label: 'Apple', value: 'Apple' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange',
	      value: 'Orange', disabled: false }];return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(CheckboxGroup, { options: plainOptions, defaultValue: ['Apple'], onChange: onChange }),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(CheckboxGroup, { options: options, defaultValue: ['Pear'], onChange: onChange }),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(CheckboxGroup, { options: optionsWithDisabled, disabled: true, defaultValue: ['Apple'], onChange: onChange })
	    );
	  }
	};

/***/ }

});