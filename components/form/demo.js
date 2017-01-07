webpackJsonp([2,209],{

/***/ 647:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'advanced-search': __webpack_require__(1464),
	    'coordinated': __webpack_require__(1465),
	    'customized-form-controls': __webpack_require__(1466),
	    'dynamic-form-item': __webpack_require__(1467),
	    'form-in-modal': __webpack_require__(1468),
	    'global-state': __webpack_require__(1469),
	    'horizontal-login': __webpack_require__(1470),
	    'layout': __webpack_require__(1471),
	    'normal-login': __webpack_require__(1472),
	    'register': __webpack_require__(1473),
	    'time-related-controls': __webpack_require__(1474),
	    'validate-other': __webpack_require__(1475),
	    'validate-static': __webpack_require__(1476),
	    'without-form-create': __webpack_require__(1477),
	}

/***/ },

/***/ 1464:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style7 = __webpack_require__(14);

	var _icon = __webpack_require__(9);

	var _icon2 = _interopRequireDefault(_icon);

	var _style8 = __webpack_require__(11);

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _style9 = __webpack_require__(44);

	var _row = __webpack_require__(43);

	var _row2 = _interopRequireDefault(_row);

	var _style10 = __webpack_require__(42);

	var _col = __webpack_require__(39);

	var _col2 = _interopRequireDefault(_col);

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style11 = __webpack_require__(18);

	var _input = __webpack_require__(23);

	var _input2 = _interopRequireDefault(_input);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _style12 = __webpack_require__(49);

	var _form = __webpack_require__(48);

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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">,</span> Col<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">AdvancedSearchForm</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    expand<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleSearch <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleReset <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">resetFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  toggle <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> expand <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> expand<span class=\"token punctuation\">:</span> <span class=\"token operator\">!</span>expand <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      labelCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">19</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// To generate mock Form.Item</span>\n    <span class=\"token keyword\">const</span> children <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">10</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      children<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">8</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>i<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token operator\">&lt;</span>FormItem <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span> label<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token template-string\"><span class=\"token string\">`Field </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n            <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`field-</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>placeholder<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token keyword\">const</span> expand <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>expand<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> shownCount <span class=\"token operator\">=</span> expand <span class=\"token operator\">?</span> children<span class=\"token punctuation\">.</span>length <span class=\"token punctuation\">:</span> <span class=\"token number\">6</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span>\n        <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-advanced-search-form<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSearch<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Row</span> <span class=\"token attr-name\">gutter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">40</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span>children<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> shownCount<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Row</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Row</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">24</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> textAlign<span class=\"token punctuation\">:</span> <span class=\"token string\">'right'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">htmlType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Search<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleReset<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              Clear\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span><span class=\"token punctuation\">,</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>toggle<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              Collapse <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>expand <span class=\"token operator\">?</span> <span class=\"token string\">'up'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'down'</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Row</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> WrappedAdvancedSearchForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>AdvancedSearchForm<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>WrappedAdvancedSearchForm</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>search-result-list<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Search Result List<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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
	          { className: 'ant-advanced-search-form', onSubmit: this.handleSearch },
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
	  "style": "#components-form-demo-advanced-search .ant-advanced-search-form {\n  padding: 24px;\n  background: #fbfbfb;\n  border: 1px solid #d9d9d9;\n  border-radius: 6px;\n}\n#components-form-demo-advanced-search .ant-form {\n  max-width: none;\n}\n#components-form-demo-advanced-search .search-result-list {\n  margin-top: 16px;\n  border: 1px dashed #e9e9e9;\n  border-radius: 6px;\n  background-color: #fafafa;\n  min-height: 200px;\n  text-align: center;\n  padding-top: 80px;\n}\n",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-form-demo-advanced-search</span> <span class=\"token class\">.ant-advanced-search-form</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fbfbfb</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#d9d9d9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1465:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(11);

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(18);

	var _input = __webpack_require__(23);

	var _input2 = _interopRequireDefault(_input);

	var _style7 = __webpack_require__(27);

	var _select = __webpack_require__(26);

	var _select2 = _interopRequireDefault(_select);

	var _style8 = __webpack_require__(49);

	var _form = __webpack_require__(48);

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

/***/ 1466:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(11);

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(18);

	var _input = __webpack_require__(23);

	var _input2 = _interopRequireDefault(_input);

	var _style7 = __webpack_require__(27);

	var _select = __webpack_require__(26);

	var _select2 = _interopRequireDefault(_select);

	var _style8 = __webpack_require__(49);

	var _form = __webpack_require__(48);

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

/***/ 1467:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(11);

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style6 = __webpack_require__(14);

	var _icon = __webpack_require__(9);

	var _icon2 = _interopRequireDefault(_icon);

	var _style7 = __webpack_require__(18);

	var _input = __webpack_require__(23);

	var _input2 = _interopRequireDefault(_input);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _style8 = __webpack_require__(49);

	var _form = __webpack_require__(48);

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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">let</span> uuid <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">DynamicFieldSet</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">componentWillMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">setFieldsValue</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      keys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  remove <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>k<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> form <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// can use data-binding to get</span>\n    <span class=\"token keyword\">const</span> keys <span class=\"token operator\">=</span> form<span class=\"token punctuation\">.</span><span class=\"token function\">getFieldValue</span><span class=\"token punctuation\">(</span><span class=\"token string\">'keys'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// We need at least one passenger</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>keys<span class=\"token punctuation\">.</span>length <span class=\"token operator\">===</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// can use data-binding to set</span>\n    form<span class=\"token punctuation\">.</span><span class=\"token function\">setFieldsValue</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      keys<span class=\"token punctuation\">:</span> keys<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>key <span class=\"token operator\">=</span><span class=\"token operator\">></span> key <span class=\"token operator\">!==</span> k<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  add <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    uuid<span class=\"token operator\">++</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> form <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// can use data-binding to get</span>\n    <span class=\"token keyword\">const</span> keys <span class=\"token operator\">=</span> form<span class=\"token punctuation\">.</span><span class=\"token function\">getFieldValue</span><span class=\"token punctuation\">(</span><span class=\"token string\">'keys'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> nextKeys <span class=\"token operator\">=</span> keys<span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span>uuid<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// can use data-binding to set</span>\n    <span class=\"token comment\" spellcheck=\"true\">// important! notify form to detect changes</span>\n    form<span class=\"token punctuation\">.</span><span class=\"token function\">setFieldsValue</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      keys<span class=\"token punctuation\">:</span> nextKeys<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleSubmit <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator<span class=\"token punctuation\">,</span> getFieldValue <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      labelCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayoutWithOutLabel <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">20</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'keys'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> initialValue<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> keys <span class=\"token operator\">=</span> <span class=\"token function\">getFieldValue</span><span class=\"token punctuation\">(</span><span class=\"token string\">'keys'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formItems <span class=\"token operator\">=</span> keys<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>k<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span><span class=\"token punctuation\">(</span>index <span class=\"token operator\">===</span> <span class=\"token number\">0</span> <span class=\"token operator\">?</span> formItemLayout <span class=\"token punctuation\">:</span> formItemLayoutWithOutLabel<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>index <span class=\"token operator\">===</span> <span class=\"token number\">0</span> <span class=\"token operator\">?</span> <span class=\"token string\">'Passengers'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">}</span>\n          required<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span>\n          key<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>k<span class=\"token punctuation\">}</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`names-</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>k<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            validateTrigger<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'onChange'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'onBlur'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n              required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n              whitespace<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n              message<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Please input passenger's name or delete this field.\"</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>passenger</span> <span class=\"token attr-name\">name\"</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'60%'</span><span class=\"token punctuation\">,</span> marginRight<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span>\n            <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>dynamic-delete-button<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>minus-circle-o<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">disabled</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>keys<span class=\"token punctuation\">.</span>length <span class=\"token operator\">===</span> <span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">remove</span><span class=\"token punctuation\">(</span>k<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>formItems<span class=\"token punctuation\">}</span>\n        <span class=\"token operator\">&lt;</span>FormItem <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayoutWithOutLabel<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>dashed<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>add<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'60%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>plus<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Add field\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayoutWithOutLabel<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">htmlType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Submit<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> WrappedDynamicFieldSet <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>DynamicFieldSet<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>WrappedDynamicFieldSet</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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
	        }, _this.handleSubmit = function (e) {
	          e.preventDefault();_this.props.form.validateFields(function (err, values) {
	            if (!err) {
	              console.log('Received values of form: ', values);
	            }
	          });
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
	        var formItemLayout = { labelCol: { span: 4 }, wrapperCol: { span: 20 } };var formItemLayoutWithOutLabel = { wrapperCol: { span: 20, offset: 4 } };getFieldDecorator('keys', { initialValue: [] });var keys = getFieldValue('keys');var formItems = keys.map(function (k, index) {
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
	          { onSubmit: this.handleSubmit },
	          formItems,
	          _react2.default.createElement(
	            FormItem,
	            formItemLayoutWithOutLabel,
	            _react2.default.createElement(
	              _button2.default,
	              { type: 'dashed', onClick: this.add, style: { width: '60%' } },
	              _react2.default.createElement(_icon2.default, { type: 'plus' }),
	              ' Add field'
	            )
	          ),
	          _react2.default.createElement(
	            FormItem,
	            formItemLayoutWithOutLabel,
	            _react2.default.createElement(
	              _button2.default,
	              { type: 'primary', htmlType: 'submit', size: 'large' },
	              'Submit'
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

/***/ 1468:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style6 = __webpack_require__(11);

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _style7 = __webpack_require__(74);

	var _modal = __webpack_require__(66);

	var _modal2 = _interopRequireDefault(_modal);

	var _style8 = __webpack_require__(54);

	var _radio = __webpack_require__(50);

	var _radio2 = _interopRequireDefault(_radio);

	var _style9 = __webpack_require__(18);

	var _input = __webpack_require__(23);

	var _input2 = _interopRequireDefault(_input);

	var _style10 = __webpack_require__(49);

	var _form = __webpack_require__(48);

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

/***/ 1469:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(18);

	var _input = __webpack_require__(23);

	var _input2 = _interopRequireDefault(_input);

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style4 = __webpack_require__(49);

	var _form = __webpack_require__(48);

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

/***/ 1470:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(11);

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(18);

	var _input = __webpack_require__(23);

	var _input2 = _interopRequireDefault(_input);

	var _style7 = __webpack_require__(14);

	var _icon = __webpack_require__(9);

	var _icon2 = _interopRequireDefault(_icon);

	var _style8 = __webpack_require__(49);

	var _form = __webpack_require__(48);

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

/***/ 1471:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(11);

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(18);

	var _input = __webpack_require__(23);

	var _input2 = _interopRequireDefault(_input);

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style7 = __webpack_require__(54);

	var _radio = __webpack_require__(50);

	var _radio2 = _interopRequireDefault(_radio);

	var _defineProperty2 = __webpack_require__(12);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _style8 = __webpack_require__(49);

	var _form = __webpack_require__(48);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "表单有三种布局。"]],
	    "en-US": [["p", "There are three layout for form: ", ["code", "horizontal"], ", ", ["code", "vertical"], ", ", ["code", "inline"], "."]]
	  },
	  "meta": {
	    "order": 13,
	    "title": {
	      "zh-CN": "表单布局",
	      "en-US": "Form Layout"
	    },
	    "filename": "components/form/demo/layout.md",
	    "id": "components-form-demo-layout"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Radio <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">FormLayoutDemo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      formLayout<span class=\"token punctuation\">:</span> <span class=\"token string\">'horizontal'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  handleFormLayoutChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> formLayout<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> formLayout <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> formLayout <span class=\"token operator\">===</span> <span class=\"token string\">'horizontal'</span> <span class=\"token operator\">?</span> <span class=\"token punctuation\">{</span>\n      labelCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">14</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> buttonItemLayout <span class=\"token operator\">=</span> formLayout <span class=\"token operator\">===</span> <span class=\"token string\">'horizontal'</span> <span class=\"token operator\">?</span> <span class=\"token punctuation\">{</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">14</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> layoutProps <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token punctuation\">[</span>formLayout<span class=\"token punctuation\">]</span><span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>Form <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>layoutProps<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n            <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Form</span> <span class=\"token attr-name\">Layout\"</span>\n            <span class=\"token attr-name\">{...formItemLayout}</span>\n          <span class=\"token punctuation\">></span>\n            <span class=\"token attr-name\">&lt;Radio.Group</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>horizontal<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleFormLayoutChange<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>horizontal<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Horizontal<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>vertical<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Vertical<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>inline<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Inline<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Group</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n            <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Field</span> <span class=\"token attr-name\">A\"</span>\n            <span class=\"token attr-name\">{...formItemLayout}</span>\n          <span class=\"token punctuation\">></span>\n            <span class=\"token attr-name\">&lt;Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input</span> <span class=\"token attr-name\">placeholder\"</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n            <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Field</span> <span class=\"token attr-name\">B\"</span>\n            <span class=\"token attr-name\">{...formItemLayout}</span>\n          <span class=\"token punctuation\">></span>\n            <span class=\"token attr-name\">&lt;Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input</span> <span class=\"token attr-name\">placeholder\"</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token operator\">&lt;</span>FormItem <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>buttonItemLayout<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Submit<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormLayoutDemo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var FormItem = _form2.default.Item;
	    var FormLayoutDemo = function (_React$Component) {
	      (0, _inherits3.default)(FormLayoutDemo, _React$Component);

	      function FormLayoutDemo() {
	        (0, _classCallCheck3.default)(this, FormLayoutDemo);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this));

	        _this.handleFormLayoutChange = function (e) {
	          _this.setState({ formLayout: e.target.value });
	        };

	        _this.state = { formLayout: 'horizontal' };
	        return _this;
	      }

	      FormLayoutDemo.prototype.render = function render() {
	        var formLayout = this.state.formLayout;

	        var formItemLayout = formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;var buttonItemLayout = formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;var layoutProps = (0, _defineProperty3.default)({}, formLayout, true);return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _form2.default,
	            layoutProps,
	            _react2.default.createElement(
	              FormItem,
	              (0, _extends3.default)({ label: 'Form Layout' }, formItemLayout),
	              _react2.default.createElement(
	                _radio2.default.Group,
	                { defaultValue: 'horizontal', onChange: this.handleFormLayoutChange },
	                _react2.default.createElement(
	                  _radio2.default.Button,
	                  { value: 'horizontal' },
	                  'Horizontal'
	                ),
	                _react2.default.createElement(
	                  _radio2.default.Button,
	                  { value: 'vertical' },
	                  'Vertical'
	                ),
	                _react2.default.createElement(
	                  _radio2.default.Button,
	                  { value: 'inline' },
	                  'Inline'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              FormItem,
	              (0, _extends3.default)({ label: 'Field A' }, formItemLayout),
	              _react2.default.createElement(_input2.default, { placeholder: 'input placeholder' })
	            ),
	            _react2.default.createElement(
	              FormItem,
	              (0, _extends3.default)({ label: 'Field B' }, formItemLayout),
	              _react2.default.createElement(_input2.default, { placeholder: 'input placeholder' })
	            ),
	            _react2.default.createElement(
	              FormItem,
	              buttonItemLayout,
	              _react2.default.createElement(
	                _button2.default,
	                { type: 'primary', size: 'large' },
	                'Submit'
	              )
	            )
	          )
	        );
	      };

	      return FormLayoutDemo;
	    }(_react2.default.Component);

	    return _react2.default.createElement(FormLayoutDemo, null);
	  }
	};

/***/ },

/***/ 1472:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style6 = __webpack_require__(11);

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _style7 = __webpack_require__(86);

	var _checkbox = __webpack_require__(61);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _style8 = __webpack_require__(18);

	var _input = __webpack_require__(23);

	var _input2 = _interopRequireDefault(_input);

	var _style9 = __webpack_require__(14);

	var _icon = __webpack_require__(9);

	var _icon2 = _interopRequireDefault(_icon);

	var _style10 = __webpack_require__(49);

	var _form = __webpack_require__(48);

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

/***/ 1473:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style11 = __webpack_require__(86);

	var _checkbox = __webpack_require__(61);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _style12 = __webpack_require__(44);

	var _row = __webpack_require__(43);

	var _row2 = _interopRequireDefault(_row);

	var _style13 = __webpack_require__(11);

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _style14 = __webpack_require__(42);

	var _col = __webpack_require__(39);

	var _col2 = _interopRequireDefault(_col);

	var _style15 = __webpack_require__(85);

	var _cascader = __webpack_require__(84);

	var _cascader2 = _interopRequireDefault(_cascader);

	var _style16 = __webpack_require__(129);

	var _tooltip = __webpack_require__(110);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _style17 = __webpack_require__(14);

	var _icon = __webpack_require__(9);

	var _icon2 = _interopRequireDefault(_icon);

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style18 = __webpack_require__(18);

	var _input = __webpack_require__(23);

	var _input2 = _interopRequireDefault(_input);

	var _style19 = __webpack_require__(27);

	var _select = __webpack_require__(26);

	var _select2 = _interopRequireDefault(_select);

	var _style20 = __webpack_require__(49);

	var _form = __webpack_require__(48);

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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Tooltip<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Cascader<span class=\"token punctuation\">,</span> Select<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">,</span> Col<span class=\"token punctuation\">,</span> Checkbox<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">.</span>Option<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> residences <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> RegistrationForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      passwordDirty<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleSubmit</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFieldsAndScroll</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handlePasswordBlur</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> value <span class=\"token operator\">=</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> passwordDirty<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>passwordDirty <span class=\"token operator\">||</span> <span class=\"token operator\">!</span><span class=\"token operator\">!</span>value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">checkPassword</span><span class=\"token punctuation\">(</span>rule<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">,</span> callback<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> form <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>value <span class=\"token operator\">&amp;&amp;</span> value <span class=\"token operator\">!==</span> form<span class=\"token punctuation\">.</span><span class=\"token function\">getFieldValue</span><span class=\"token punctuation\">(</span><span class=\"token string\">'password'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Two passwords that you enter is inconsistent!'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">checkConfirm</span><span class=\"token punctuation\">(</span>rule<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">,</span> callback<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> form <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>value <span class=\"token operator\">&amp;&amp;</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>passwordDirty<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token string\">'confirm'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> force<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      labelCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">14</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> tailFormItemLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        span<span class=\"token punctuation\">:</span> <span class=\"token number\">14</span><span class=\"token punctuation\">,</span>\n        offset<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> prefixSelector <span class=\"token operator\">=</span> <span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'prefix'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      initialValue<span class=\"token punctuation\">:</span> <span class=\"token string\">'86'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>icp-selector<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>86<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token operator\">+</span><span class=\"token number\">86</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"E-mail\"</span>\n          hasFeedback\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'email'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n              type<span class=\"token punctuation\">:</span> <span class=\"token string\">'email'</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'The input is not valid E-mail!'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n              required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your E-mail!'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Password\"</span>\n          hasFeedback\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'password'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n              required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your password!'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n              validator<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>checkConfirm<span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>password<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onBlur</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handlePasswordBlur<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Confirm Password\"</span>\n          hasFeedback\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'confirm'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n              required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please confirm your password!'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n              validator<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>checkPassword<span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>password<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n              Nickname<span class=\"token entity\" title=\"&nbsp;\">&amp;nbsp;</span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tooltip</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>What</span> <span class=\"token attr-name\">do</span> <span class=\"token attr-name\">you</span> <span class=\"token attr-name\">want</span> <span class=\"token attr-name\">other</span> <span class=\"token attr-name\">to</span> <span class=\"token attr-name\">call</span> <span class=\"token attr-name\">you?\"</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>question-circle-o<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tooltip</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          hasFeedback\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'nickname'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your nickname!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Habitual Residence\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'residence'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            initialValue<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'array'</span><span class=\"token punctuation\">,</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select your habitual residence!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Cascader</span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>residences<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Phone Number\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'phone'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your phone number!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">addonBefore</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>prefixSelector<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Captcha\"</span>\n          extra<span class=\"token operator\">=</span><span class=\"token string\">\"We must make sure that your are a human.\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Row</span> <span class=\"token attr-name\">gutter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">8</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">12</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'captcha'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n                rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input the captcha you got!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n              <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">12</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Get captcha<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Row</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>tailFormItemLayout<span class=\"token punctuation\">}</span> style<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'agreement'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            valuePropName<span class=\"token punctuation\">:</span> <span class=\"token string\">'checked'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Checkbox</span><span class=\"token punctuation\">></span></span>I had read the <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span><span class=\"token punctuation\">></span></span>agreement<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Checkbox</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>tailFormItemLayout<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">htmlType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Register<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RegistrationForm</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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
	      checkPassword: function checkPassword(rule, value, callback) {
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
	          { onSubmit: this.handleSubmit },
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
	            getFieldDecorator('confirm', { rules: [{ required: true, message: 'Please confirm your password!' }, { validator: this.checkPassword }] })(_react2.default.createElement(_input2.default, { type: 'password' }))
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

/***/ 1474:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(11);

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(98);

	var _timePicker = __webpack_require__(109);

	var _timePicker2 = _interopRequireDefault(_timePicker);

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style7 = __webpack_require__(63);

	var _datePicker = __webpack_require__(62);

	var _datePicker2 = _interopRequireDefault(_datePicker);

	var _style8 = __webpack_require__(49);

	var _form = __webpack_require__(48);

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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> DatePicker<span class=\"token punctuation\">,</span> TimePicker<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> MonthPicker <span class=\"token operator\">=</span> DatePicker<span class=\"token punctuation\">.</span>MonthPicker<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> RangePicker <span class=\"token operator\">=</span> DatePicker<span class=\"token punctuation\">.</span>RangePicker<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> TimeRelatedForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">handleSubmit</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> fieldsValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n\n      <span class=\"token comment\" spellcheck=\"true\">// Should format date value before submit.</span>\n      <span class=\"token keyword\">const</span> rangeValue <span class=\"token operator\">=</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'range-picker'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">const</span> rangeTimeValue <span class=\"token operator\">=</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'range-time-picker'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">const</span> values <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token operator\">...</span>fieldsValue<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'date-picker'</span><span class=\"token punctuation\">:</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'date-picker'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'date-time-picker'</span><span class=\"token punctuation\">:</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'date-time-picker'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'month-picker'</span><span class=\"token punctuation\">:</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'month-picker'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'range-picker'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>rangeValue<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> rangeValue<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'range-time-picker'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          rangeTimeValue<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n          rangeTimeValue<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'time-picker'</span><span class=\"token punctuation\">:</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'time-picker'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      labelCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> config <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'object'</span><span class=\"token punctuation\">,</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select time!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> rangeConfig <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'array'</span><span class=\"token punctuation\">,</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select time!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"DatePicker\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'date-picker'</span><span class=\"token punctuation\">,</span> config<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"DatePicker[showTime]\"</span>\n        <span class=\"token operator\">></span>\n        <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'date-time-picker'</span><span class=\"token punctuation\">,</span> config<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token attr-name\">showTime</span> <span class=\"token attr-name\">format</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>YYYY-MM-DD</span> <span class=\"token attr-name\"><span class=\"token namespace\">HH:</span><span class=\"token namespace\">mm:</span>ss\"</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"MonthPicker\"</span>\n        <span class=\"token operator\">></span>\n        <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'month-picker'</span><span class=\"token punctuation\">,</span> config<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>MonthPicker</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"RangePicker\"</span>\n        <span class=\"token operator\">></span>\n        <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'range-picker'</span><span class=\"token punctuation\">,</span> rangeConfig<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RangePicker</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"RangePicker[showTime]\"</span>\n        <span class=\"token operator\">></span>\n        <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'range-time-picker'</span><span class=\"token punctuation\">,</span> rangeConfig<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RangePicker</span> <span class=\"token attr-name\">showTime</span> <span class=\"token attr-name\">format</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>YYYY-MM-DD</span> <span class=\"token attr-name\"><span class=\"token namespace\">HH:</span><span class=\"token namespace\">mm:</span>ss\"</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"TimePicker\"</span>\n        <span class=\"token operator\">></span>\n        <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'time-picker'</span><span class=\"token punctuation\">,</span> config<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TimePicker</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">htmlType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Submit<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TimeRelatedForm</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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
	          { onSubmit: this.handleSubmit },
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

/***/ 1475:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style10 = __webpack_require__(131);

	var _upload = __webpack_require__(130);

	var _upload2 = _interopRequireDefault(_upload);

	var _style11 = __webpack_require__(11);

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _style12 = __webpack_require__(14);

	var _icon = __webpack_require__(9);

	var _icon2 = _interopRequireDefault(_icon);

	var _style13 = __webpack_require__(128);

	var _slider = __webpack_require__(127);

	var _slider2 = _interopRequireDefault(_slider);

	var _style14 = __webpack_require__(68);

	var _switch = __webpack_require__(67);

	var _switch2 = _interopRequireDefault(_switch);

	var _style15 = __webpack_require__(121);

	var _inputNumber = __webpack_require__(120);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style16 = __webpack_require__(54);

	var _radio = __webpack_require__(50);

	var _radio2 = _interopRequireDefault(_radio);

	var _style17 = __webpack_require__(27);

	var _select = __webpack_require__(26);

	var _select2 = _interopRequireDefault(_select);

	var _style18 = __webpack_require__(49);

	var _form = __webpack_require__(48);

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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>\n  Form<span class=\"token punctuation\">,</span> Select<span class=\"token punctuation\">,</span> InputNumber<span class=\"token punctuation\">,</span> Switch<span class=\"token punctuation\">,</span> Radio<span class=\"token punctuation\">,</span>\n  Slider<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Upload<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">.</span>Option<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> RadioButton <span class=\"token operator\">=</span> Radio<span class=\"token punctuation\">.</span>Button<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> RadioGroup <span class=\"token operator\">=</span> Radio<span class=\"token punctuation\">.</span>Group<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Demo <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">handleSubmit</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n\n  <span class=\"token function\">normFile</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>Array<span class=\"token punctuation\">.</span><span class=\"token function\">isArray</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> e<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> e <span class=\"token operator\">&amp;&amp;</span> e<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      labelCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">14</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Nation\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-form-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>China<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Select\"</span>\n          hasFeedback\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'select'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n              <span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select your country!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please</span> <span class=\"token attr-name\">select</span> <span class=\"token attr-name\">a</span> <span class=\"token attr-name\">country\"</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>china<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>China<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>use<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>U<span class=\"token punctuation\">.</span>S<span class=\"token punctuation\">.</span>A<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Select[multiple]\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'select-multiple'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n              <span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select your favourite colors!'</span><span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'array'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">multiple</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please</span> <span class=\"token attr-name\">select</span> <span class=\"token attr-name\">favourite</span> <span class=\"token attr-name\">colors\"</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>red<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Red<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>green<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Green<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>blue<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Blue<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"InputNumber\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'input-number'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> initialValue<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InputNumber</span> <span class=\"token attr-name\">min</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">max</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">10</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-form-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span> machines<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Switch\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'switch'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> valuePropName<span class=\"token punctuation\">:</span> <span class=\"token string\">'checked'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Slider\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'slider'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Slider</span> <span class=\"token attr-name\">marks</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> <span class=\"token number\">0</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'A'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'B'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">40</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'C'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">60</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'D'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">80</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'E'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">100</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'F'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Radio.Group\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'radio-group'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RadioGroup</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>a<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>item <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>b<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>item <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>c<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>item <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>RadioGroup</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Radio.Button\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'radio-button'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RadioGroup</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RadioButton</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>a<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>item <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>RadioButton</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RadioButton</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>b<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>item <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>RadioButton</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RadioButton</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>c<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>item <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>RadioButton</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>RadioGroup</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Upload\"</span>\n          extra<span class=\"token operator\">=</span><span class=\"token string\">\"longgggggggggggggggggggggggggggggggggg\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'upload'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            valuePropName<span class=\"token punctuation\">:</span> <span class=\"token string\">'fileList'</span><span class=\"token punctuation\">,</span>\n            normalize<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>normFile<span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Upload</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>logo<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">action</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/upload.do<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">listType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>picture<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleUpload<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ghost<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Click to upload\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">htmlType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Submit<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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
	          { onSubmit: this.handleSubmit },
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'Nation' }),
	            _react2.default.createElement(
	              'span',
	              { className: 'ant-form-text' },
	              'China'
	            )
	          ),
	          _react2.default.createElement(
	            FormItem,
	            (0, _extends3.default)({}, formItemLayout, { label: 'Select', hasFeedback: true }),
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

/***/ 1476:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(42);

	var _col = __webpack_require__(39);

	var _col2 = _interopRequireDefault(_col);

	var _style6 = __webpack_require__(63);

	var _datePicker = __webpack_require__(62);

	var _datePicker2 = _interopRequireDefault(_datePicker);

	var _style7 = __webpack_require__(18);

	var _input = __webpack_require__(23);

	var _input2 = _interopRequireDefault(_input);

	var _style8 = __webpack_require__(49);

	var _form = __webpack_require__(48);

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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> DatePicker<span class=\"token punctuation\">,</span> Col <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n      <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Fail<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">labelCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">validateStatus</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">help</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Should</span> <span class=\"token attr-name\">be</span> <span class=\"token attr-name\">combination</span> <span class=\"token attr-name\">of</span> <span class=\"token attr-name\">numbers</span> <span class=\"token attr-name\">&amp;</span> <span class=\"token attr-name\">alphabets\"</span>\n    <span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>unavailable</span> <span class=\"token attr-name\">choice\"</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n      <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">labelCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">validateStatus</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n      <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Validating<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">labelCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">hasFeedback</span>\n      <span class=\"token attr-name\">validateStatus</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>validating<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">help</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>The</span> <span class=\"token attr-name\">information</span> <span class=\"token attr-name\">is</span> <span class=\"token attr-name\">being</span> <span class=\"token attr-name\">validated...\"</span>\n    <span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>I<span class=\"token punctuation\">'</span>m</span> <span class=\"token attr-name\">the</span> <span class=\"token attr-name\">content</span> <span class=\"token attr-name\">is</span> <span class=\"token attr-name\">being</span> <span class=\"token attr-name\">validated\"</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>validating<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n      <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">labelCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">hasFeedback</span>\n      <span class=\"token attr-name\">validateStatus</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>I<span class=\"token punctuation\">'</span>m</span> <span class=\"token attr-name\">the</span> <span class=\"token attr-name\">content\"</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n      <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">labelCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">hasFeedback</span>\n      <span class=\"token attr-name\">validateStatus</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n      <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Fail<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">labelCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">hasFeedback</span>\n      <span class=\"token attr-name\">validateStatus</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">help</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Should</span> <span class=\"token attr-name\">be</span> <span class=\"token attr-name\">combination</span> <span class=\"token attr-name\">of</span> <span class=\"token attr-name\">numbers</span> <span class=\"token attr-name\">&amp;</span> <span class=\"token attr-name\">alphabets\"</span>\n    <span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>unavailable</span> <span class=\"token attr-name\">choice\"</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n      <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>inline<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">labelCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">help</span>\n    <span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">validateStatus</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">help</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please</span> <span class=\"token attr-name\">select</span> <span class=\"token attr-name\">the</span> <span class=\"token attr-name\">correct</span> <span class=\"token attr-name\">date\"</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-form-split<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token operator\">-</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var FormItem = _form2.default.Item;return _react2.default.createElement(
	      _form2.default,
	      null,
	      _react2.default.createElement(
	        FormItem,
	        { label: 'Fail', labelCol: { span: 5 }, wrapperCol: { span: 12 }, validateStatus: 'error', help: 'Should be combination of numbers & alphabets' },
	        _react2.default.createElement(_input2.default, { placeholder: 'unavailable choice', id: 'error' })
	      ),
	      _react2.default.createElement(
	        FormItem,
	        { label: 'Warning', labelCol: { span: 5 }, wrapperCol: { span: 12 }, validateStatus: 'warning' },
	        _react2.default.createElement(_input2.default, { placeholder: 'Warning', id: 'warning' })
	      ),
	      _react2.default.createElement(
	        FormItem,
	        { label: 'Validating', labelCol: { span: 5 }, wrapperCol: { span: 12 }, hasFeedback: true, validateStatus: 'validating', help: 'The information is being validated...' },
	        _react2.default.createElement(_input2.default, { placeholder: 'I\'m the content is being validated', id: 'validating' })
	      ),
	      _react2.default.createElement(
	        FormItem,
	        { label: 'Success', labelCol: { span: 5 }, wrapperCol: { span: 12 }, hasFeedback: true, validateStatus: 'success' },
	        _react2.default.createElement(_input2.default, { placeholder: 'I\'m the content', id: 'success' })
	      ),
	      _react2.default.createElement(
	        FormItem,
	        { label: 'Warning', labelCol: { span: 5
	          }, wrapperCol: { span: 12 }, hasFeedback: true, validateStatus: 'warning' },
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

/***/ 1477:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(121);

	var _inputNumber = __webpack_require__(120);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _style4 = __webpack_require__(49);

	var _form = __webpack_require__(48);

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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> InputNumber <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">validatePrimeNumber</span><span class=\"token punctuation\">(</span>number<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>number <span class=\"token operator\">===</span> <span class=\"token number\">11</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      validateStatus<span class=\"token punctuation\">:</span> <span class=\"token string\">'success'</span><span class=\"token punctuation\">,</span>\n      errorMsg<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n    validateStatus<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span>\n    errorMsg<span class=\"token punctuation\">:</span> <span class=\"token string\">'The prime between 8 and 12 is 11!'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">RawForm</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    number<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n      value<span class=\"token punctuation\">:</span> <span class=\"token number\">11</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleNumberChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      number<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token operator\">...</span><span class=\"token function\">validatePrimeNumber</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      labelCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">7</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> number <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>number<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> tips <span class=\"token operator\">=</span> <span class=\"token string\">'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Prime between 8 &amp; 12\"</span>\n          validateStatus<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>number<span class=\"token punctuation\">.</span>validateStatus<span class=\"token punctuation\">}</span>\n          help<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>number<span class=\"token punctuation\">.</span>errorMsg <span class=\"token operator\">||</span> tips<span class=\"token punctuation\">}</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InputNumber</span>\n            <span class=\"token attr-name\">min</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">8</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">max</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">12</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>number<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleNumberChange<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RawForm</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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
	          null,
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