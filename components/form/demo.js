webpackJsonp([4],{

/***/ 1804:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'advanced-search': __webpack_require__(2136),
    'coordinated': __webpack_require__(2137),
    'customized-form-controls': __webpack_require__(2138),
    'dynamic-form-item': __webpack_require__(2139),
    'dynamic-rule': __webpack_require__(2140),
    'form-in-modal': __webpack_require__(2141),
    'global-state': __webpack_require__(2142),
    'horizontal-login': __webpack_require__(2143),
    'layout': __webpack_require__(2144),
    'normal-login': __webpack_require__(2145),
    'register': __webpack_require__(2146),
    'time-related-controls': __webpack_require__(2147),
    'validate-other': __webpack_require__(2148),
    'validate-static': __webpack_require__(2149),
    'without-form-create': __webpack_require__(2150),
}

/***/ }),

/***/ 2136:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "三列栅格式的表单排列方式，常用于数据表格的高级搜索。"
      ],
      [
        "p",
        "有部分定制的样式代码，由于输入标签长度不确定，需要根据具体情况自行调整。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Three columns layout is often used for advanced searching of data table."
      ],
      [
        "p",
        "Because the width of label is not fixed, you may need to adjust it by customizing its style."
      ]
    ]
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
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">,</span> Col<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">AdvancedSearchForm</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    expand<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleSearch <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleReset <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">resetFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  toggle <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> expand <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> expand<span class=\"token punctuation\">:</span> <span class=\"token operator\">!</span>expand <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token comment\" spellcheck=\"true\">// To generate mock Form.Item</span>\n  <span class=\"token function\">getFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> count <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>expand <span class=\"token operator\">?</span> <span class=\"token number\">10</span> <span class=\"token punctuation\">:</span> <span class=\"token number\">6</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> children <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">10</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      children<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">8</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>i<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> display<span class=\"token punctuation\">:</span> i <span class=\"token operator\">&lt;</span> count <span class=\"token operator\">?</span> <span class=\"token string\">'block'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'none'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token template-string\"><span class=\"token string\">`Field </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`field-</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n              rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n                required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n                message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Input something!'</span><span class=\"token punctuation\">,</span>\n              <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>placeholder<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> children<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span>\n        <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-advanced-search-form<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSearch<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Row</span> <span class=\"token attr-name\">gutter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">24</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">getFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Row</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Row</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">24</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> textAlign<span class=\"token punctuation\">:</span> <span class=\"token string\">'right'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">htmlType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Search<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleReset<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              Clear\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span><span class=\"token punctuation\">,</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>toggle<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              Collapse <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>expand <span class=\"token operator\">?</span> <span class=\"token string\">'up'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'down'</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Row</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> WrappedAdvancedSearchForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>AdvancedSearchForm<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>WrappedAdvancedSearchForm</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>search-result-list<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Search Result List<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var FormItem = _antd.Form.Item;

  var AdvancedSearchForm = function (_React$Component) {
    _inherits(AdvancedSearchForm, _React$Component);

    function AdvancedSearchForm() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, AdvancedSearchForm);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AdvancedSearchForm.__proto__ || Object.getPrototypeOf(AdvancedSearchForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        expand: false
      }, _this.handleSearch = function (e) {
        e.preventDefault();

        _this.props.form.validateFields(function (err, values) {
          console.log('Received values of form: ', values);
        });
      }, _this.handleReset = function () {
        _this.props.form.resetFields();
      }, _this.toggle = function () {
        var expand = _this.state.expand;

        _this.setState({
          expand: !expand
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AdvancedSearchForm, [{
      key: "getFields",
      // To generate mock Form.Item
      value: function getFields() {
        var count = this.state.expand ? 10 : 6;
        var getFieldDecorator = this.props.form.getFieldDecorator;
        var children = [];

        for (var i = 0; i < 10; i++) {
          children.push(React.createElement(
            _antd.Col,
            {
              span: 8,
              key: i,
              style: {
                display: i < count ? 'block' : 'none'
              }
            },
            React.createElement(
              FormItem,
              {
                label: "Field " + i
              },
              getFieldDecorator("field-" + i, {
                rules: [{
                  required: true,
                  message: 'Input something!'
                }]
              })(React.createElement(_antd.Input, {
                placeholder: "placeholder"
              }))
            )
          ));
        }

        return children;
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(
          _antd.Form,
          {
            className: "ant-advanced-search-form",
            onSubmit: this.handleSearch
          },
          React.createElement(
            _antd.Row,
            {
              gutter: 24
            },
            this.getFields()
          ),
          React.createElement(
            _antd.Row,
            null,
            React.createElement(
              _antd.Col,
              {
                span: 24,
                style: {
                  textAlign: 'right'
                }
              },
              React.createElement(
                _antd.Button,
                {
                  type: "primary",
                  htmlType: "submit"
                },
                "Search"
              ),
              React.createElement(
                _antd.Button,
                {
                  style: {
                    marginLeft: 8
                  },
                  onClick: this.handleReset
                },
                "Clear"
              ),
              React.createElement(
                "a",
                {
                  style: {
                    marginLeft: 8,
                    fontSize: 12
                  },
                  onClick: this.toggle
                },
                "Collapse ",
                React.createElement(_antd.Icon, {
                  type: this.state.expand ? 'up' : 'down'
                })
              )
            )
          )
        );
      }
    }]);

    return AdvancedSearchForm;
  }(React.Component);

  var WrappedAdvancedSearchForm = _antd.Form.create()(AdvancedSearchForm);

  return React.createElement(
    "div",
    null,
    React.createElement(WrappedAdvancedSearchForm, null),
    React.createElement(
      "div",
      {
        className: "search-result-list"
      },
      "Search Result List"
    )
  );
},
  "style": ".ant-advanced-search-form {\n  padding: 24px;\n  background: #fbfbfb;\n  border: 1px solid #d9d9d9;\n  border-radius: 6px;\n}\n\n.ant-advanced-search-form .ant-form-item {\n  display: flex;\n}\n\n.ant-advanced-search-form .ant-form-item-control-wrapper {\n  flex: 1;\n}\n#components-form-demo-advanced-search .ant-form {\n  max-width: none;\n}\n#components-form-demo-advanced-search .search-result-list {\n  margin-top: 16px;\n  border: 1px dashed #e9e9e9;\n  border-radius: 6px;\n  background-color: #fafafa;\n  min-height: 200px;\n  text-align: center;\n  padding-top: 80px;\n}\n",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.ant-advanced-search-form</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fbfbfb</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#d9d9d9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.ant-advanced-search-form</span> <span class=\"token class\">.ant-form-item</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> flex<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.ant-advanced-search-form</span> <span class=\"token class\">.ant-form-item-control-wrapper</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">flex</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ 2137:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "使用 ",
        [
          "code",
          "setFieldsValue"
        ],
        " 来动态设置其他控件的值。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Use ",
        [
          "code",
          "setFieldsValue"
        ],
        " to set other control's value programmaticly."
      ]
    ]
  },
  "meta": {
    "order": 11,
    "title": {
      "zh-CN": "表单联动",
      "en-US": "Coordinated Controls"
    },
    "filename": "components/form/demo/coordinated.md",
    "id": "components-form-demo-coordinated"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Select<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">.</span>Option<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  handleSubmit <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleSelectChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">setFieldsValue</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      note<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`Hi, </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>value <span class=\"token operator\">===</span> <span class=\"token string\">'male'</span> <span class=\"token operator\">?</span> <span class=\"token string\">'man'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'lady'</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">!`</span></span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n          <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Note<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">labelCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'note'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your note!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n          <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Gender<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">labelCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'gender'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select your gender!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span>\n              <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Select</span> <span class=\"token attr-name\">a</span> <span class=\"token attr-name\">option</span> <span class=\"token attr-name\">and</span> <span class=\"token attr-name\">change</span> <span class=\"token attr-name\">input</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">above\"</span>\n              <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSelectChange<span class=\"token punctuation\">}</span></span>\n            <span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>male<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>male<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>female<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>female<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n          <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">htmlType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            Submit\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> WrappedApp <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>App<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>WrappedApp</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var FormItem = _antd.Form.Item;
  var Option = _antd.Select.Option;

  var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, App);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
        e.preventDefault();

        _this.props.form.validateFields(function (err, values) {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }, _this.handleSelectChange = function (value) {
        console.log(value);

        _this.props.form.setFieldsValue({
          note: "Hi, " + (value === 'male' ? 'man' : 'lady') + "!"
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
      key: "render",
      value: function render() {
        var getFieldDecorator = this.props.form.getFieldDecorator;
        return React.createElement(
          _antd.Form,
          {
            onSubmit: this.handleSubmit
          },
          React.createElement(
            FormItem,
            {
              label: "Note",
              labelCol: {
                span: 5
              },
              wrapperCol: {
                span: 12
              }
            },
            getFieldDecorator('note', {
              rules: [{
                required: true,
                message: 'Please input your note!'
              }]
            })(React.createElement(_antd.Input, null))
          ),
          React.createElement(
            FormItem,
            {
              label: "Gender",
              labelCol: {
                span: 5
              },
              wrapperCol: {
                span: 12
              }
            },
            getFieldDecorator('gender', {
              rules: [{
                required: true,
                message: 'Please select your gender!'
              }]
            })(React.createElement(
              _antd.Select,
              {
                placeholder: "Select a option and change input text above",
                onChange: this.handleSelectChange
              },
              React.createElement(
                Option,
                {
                  value: "male"
                },
                "male"
              ),
              React.createElement(
                Option,
                {
                  value: "female"
                },
                "female"
              )
            ))
          ),
          React.createElement(
            FormItem,
            {
              wrapperCol: {
                span: 12,
                offset: 5
              }
            },
            React.createElement(
              _antd.Button,
              {
                type: "primary",
                htmlType: "submit"
              },
              "Submit"
            )
          )
        );
      }
    }]);

    return App;
  }(React.Component);

  var WrappedApp = _antd.Form.create()(App);

  return React.createElement(WrappedApp, null);
}
};

/***/ }),

/***/ 2138:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "自定义或第三方的表单控件，也可以与 Form 组件一起使用。只要该组件遵循以下的约定："
      ],
      [
        "blockquote",
        [
          "ul",
          [
            "li",
            [
              "p",
              "提供受控属性 ",
              [
                "code",
                "value"
              ],
              " 或其它与 ",
              [
                "a",
                {
                  "title": null,
                  "href": "http://ant.design/components/form/#getFieldDecorator-参数"
                },
                [
                  "code",
                  "valuePropName"
                ]
              ],
              " 的值同名的属性。"
            ]
          ],
          [
            "li",
            [
              "p",
              "提供 ",
              [
                "code",
                "onChange"
              ],
              " 事件或 ",
              [
                "a",
                {
                  "title": null,
                  "href": "http://ant.design/components/form/#getFieldDecorator-参数"
                },
                [
                  "code",
                  "trigger"
                ]
              ],
              " 的值同名的事件。"
            ]
          ],
          [
            "li",
            [
              "p",
              "不能是函数式组件。"
            ]
          ]
        ]
      ]
    ],
    "en-US": [
      [
        "p",
        "Customized or third-party form controls can be used in Form, too. Controls must follow these conventions:"
      ],
      [
        "blockquote",
        [
          "ul",
          [
            "li",
            [
              "p",
              "It has a controlled property ",
              [
                "code",
                "value"
              ],
              " or other name which is equal to the value of ",
              [
                "a",
                {
                  "title": null,
                  "href": "http://ant.design/components/form/?locale=en-US#getFieldDecorator's-parameters"
                },
                [
                  "code",
                  "valuePropName"
                ]
              ],
              "."
            ]
          ],
          [
            "li",
            [
              "p",
              "It has event ",
              [
                "code",
                "onChange"
              ],
              " or an event which name is equal to the value of ",
              [
                "a",
                {
                  "title": null,
                  "href": "http://ant.design/components/form/?locale=en-US#getFieldDecorator's-parameters"
                },
                [
                  "code",
                  "trigger"
                ]
              ],
              "."
            ]
          ],
          [
            "li",
            [
              "p",
              "It must be a class component."
            ]
          ]
        ]
      ]
    ]
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
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Select<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">.</span>Option<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">PriceInput</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">static</span> <span class=\"token function\">getDerivedStateFromProps</span><span class=\"token punctuation\">(</span>nextProps<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// Should be a controlled component.</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token string\">'value'</span> <span class=\"token keyword\">in</span> nextProps<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token operator\">...</span><span class=\"token punctuation\">(</span>nextProps<span class=\"token punctuation\">.</span>value <span class=\"token operator\">||</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">const</span> value <span class=\"token operator\">=</span> props<span class=\"token punctuation\">.</span>value <span class=\"token operator\">||</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      number<span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">.</span>number <span class=\"token operator\">||</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n      currency<span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">.</span>currency <span class=\"token operator\">||</span> <span class=\"token string\">'rmb'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleNumberChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> number <span class=\"token operator\">=</span> <span class=\"token function\">parseInt</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value <span class=\"token operator\">||</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">10</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token function\">isNaN</span><span class=\"token punctuation\">(</span>number<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span><span class=\"token punctuation\">(</span><span class=\"token string\">'value'</span> <span class=\"token keyword\">in</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> number <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">triggerChange</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> number <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleCurrencyChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>currency<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span><span class=\"token punctuation\">(</span><span class=\"token string\">'value'</span> <span class=\"token keyword\">in</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> currency <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">triggerChange</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> currency <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  triggerChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>changedValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// Should provide an event to pass value to Form.</span>\n    <span class=\"token keyword\">const</span> onChange <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>onChange<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>Object<span class=\"token punctuation\">.</span><span class=\"token function\">assign</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">,</span> changedValue<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> size <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> state <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span>\n          <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>text<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">size</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>size<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>state<span class=\"token punctuation\">.</span>number<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleNumberChange<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'65%'</span><span class=\"token punctuation\">,</span> marginRight<span class=\"token punctuation\">:</span> <span class=\"token string\">'3%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span>\n          <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>state<span class=\"token punctuation\">.</span>currency<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">size</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>size<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'32%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleCurrencyChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>rmb<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>RMB<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>dollar<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Dollar<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  handleSubmit <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  checkPrice <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>rule<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">,</span> callback<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">.</span>number <span class=\"token operator\">></span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Price must greater than zero!'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">layout</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>inline<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Price<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'price'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            initialValue<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> number<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> currency<span class=\"token punctuation\">:</span> <span class=\"token string\">'rmb'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> validator<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>checkPrice <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>PriceInput</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">htmlType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Submit<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> WrappedDemo <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>Demo<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>WrappedDemo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var FormItem = _antd.Form.Item;
  var Option = _antd.Select.Option;

  var PriceInput = function (_React$Component) {
    _inherits(PriceInput, _React$Component);

    _createClass(PriceInput, null, [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps) {
        // Should be a controlled component.
        if ('value' in nextProps) {
          return _extends({}, nextProps.value || {});
        }

        return null;
      }
    }]);

    function PriceInput(props) {
      _classCallCheck(this, PriceInput);

      var _this = _possibleConstructorReturn(this, (PriceInput.__proto__ || Object.getPrototypeOf(PriceInput)).call(this, props));

      _this.handleNumberChange = function (e) {
        var number = parseInt(e.target.value || 0, 10);

        if (isNaN(number)) {
          return;
        }

        if (!('value' in _this.props)) {
          _this.setState({
            number: number
          });
        }

        _this.triggerChange({
          number: number
        });
      };

      _this.handleCurrencyChange = function (currency) {
        if (!('value' in _this.props)) {
          _this.setState({
            currency: currency
          });
        }

        _this.triggerChange({
          currency: currency
        });
      };

      _this.triggerChange = function (changedValue) {
        // Should provide an event to pass value to Form.
        var onChange = _this.props.onChange;

        if (onChange) {
          onChange(Object.assign({}, _this.state, changedValue));
        }
      };

      var value = props.value || {};
      _this.state = {
        number: value.number || 0,
        currency: value.currency || 'rmb'
      };
      return _this;
    }

    _createClass(PriceInput, [{
      key: "render",
      value: function render() {
        var size = this.props.size;
        var state = this.state;
        return React.createElement(
          "span",
          null,
          React.createElement(_antd.Input, {
            type: "text",
            size: size,
            value: state.number,
            onChange: this.handleNumberChange,
            style: {
              width: '65%',
              marginRight: '3%'
            }
          }),
          React.createElement(
            _antd.Select,
            {
              value: state.currency,
              size: size,
              style: {
                width: '32%'
              },
              onChange: this.handleCurrencyChange
            },
            React.createElement(
              Option,
              {
                value: "rmb"
              },
              "RMB"
            ),
            React.createElement(
              Option,
              {
                value: "dollar"
              },
              "Dollar"
            )
          )
        );
      }
    }]);

    return PriceInput;
  }(React.Component);

  var Demo = function (_React$Component2) {
    _inherits(Demo, _React$Component2);

    function Demo() {
      var _ref;

      var _temp, _this2, _ret;

      _classCallCheck(this, Demo);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this2), _this2.handleSubmit = function (e) {
        e.preventDefault();

        _this2.props.form.validateFields(function (err, values) {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }, _this2.checkPrice = function (rule, value, callback) {
        if (value.number > 0) {
          callback();
          return;
        }

        callback('Price must greater than zero!');
      }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
        var getFieldDecorator = this.props.form.getFieldDecorator;
        return React.createElement(
          _antd.Form,
          {
            layout: "inline",
            onSubmit: this.handleSubmit
          },
          React.createElement(
            FormItem,
            {
              label: "Price"
            },
            getFieldDecorator('price', {
              initialValue: {
                number: 0,
                currency: 'rmb'
              },
              rules: [{
                validator: this.checkPrice
              }]
            })(React.createElement(PriceInput, null))
          ),
          React.createElement(
            FormItem,
            null,
            React.createElement(
              _antd.Button,
              {
                type: "primary",
                htmlType: "submit"
              },
              "Submit"
            )
          )
        );
      }
    }]);

    return Demo;
  }(React.Component);

  var WrappedDemo = _antd.Form.create()(Demo);

  return React.createElement(WrappedDemo, null);
}
};

/***/ }),

/***/ 2139:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "动态增加、减少表单项。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Add or remove form items dynamically."
      ]
    ]
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
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">let</span> uuid <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">DynamicFieldSet</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  remove <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>k<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> form <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// can use data-binding to get</span>\n    <span class=\"token keyword\">const</span> keys <span class=\"token operator\">=</span> form<span class=\"token punctuation\">.</span><span class=\"token function\">getFieldValue</span><span class=\"token punctuation\">(</span><span class=\"token string\">'keys'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// We need at least one passenger</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>keys<span class=\"token punctuation\">.</span>length <span class=\"token operator\">===</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// can use data-binding to set</span>\n    form<span class=\"token punctuation\">.</span><span class=\"token function\">setFieldsValue</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      keys<span class=\"token punctuation\">:</span> keys<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>key <span class=\"token operator\">=</span><span class=\"token operator\">></span> key <span class=\"token operator\">!==</span> k<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  add <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> form <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// can use data-binding to get</span>\n    <span class=\"token keyword\">const</span> keys <span class=\"token operator\">=</span> form<span class=\"token punctuation\">.</span><span class=\"token function\">getFieldValue</span><span class=\"token punctuation\">(</span><span class=\"token string\">'keys'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> nextKeys <span class=\"token operator\">=</span> keys<span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span>uuid<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    uuid<span class=\"token operator\">++</span><span class=\"token punctuation\">;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// can use data-binding to set</span>\n    <span class=\"token comment\" spellcheck=\"true\">// important! notify form to detect changes</span>\n    form<span class=\"token punctuation\">.</span><span class=\"token function\">setFieldsValue</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      keys<span class=\"token punctuation\">:</span> nextKeys<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleSubmit <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator<span class=\"token punctuation\">,</span> getFieldValue <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      labelCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        xs<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        sm<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        xs<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        sm<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayoutWithOutLabel <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        xs<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        sm<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">20</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'keys'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> initialValue<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> keys <span class=\"token operator\">=</span> <span class=\"token function\">getFieldValue</span><span class=\"token punctuation\">(</span><span class=\"token string\">'keys'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formItems <span class=\"token operator\">=</span> keys<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>k<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span><span class=\"token punctuation\">(</span>index <span class=\"token operator\">===</span> <span class=\"token number\">0</span> <span class=\"token operator\">?</span> formItemLayout <span class=\"token punctuation\">:</span> formItemLayoutWithOutLabel<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>index <span class=\"token operator\">===</span> <span class=\"token number\">0</span> <span class=\"token operator\">?</span> <span class=\"token string\">'Passengers'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">}</span>\n          required<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span>\n          key<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>k<span class=\"token punctuation\">}</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`names[</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>k<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">]`</span></span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            validateTrigger<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'onChange'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'onBlur'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n              required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n              whitespace<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n              message<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Please input passenger's name or delete this field.\"</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>passenger</span> <span class=\"token attr-name\">name\"</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'60%'</span><span class=\"token punctuation\">,</span> marginRight<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token punctuation\">{</span>keys<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">1</span> <span class=\"token operator\">?</span> <span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span>\n              <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>dynamic-delete-button<span class=\"token punctuation\">\"</span></span>\n              <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>minus-circle-o<span class=\"token punctuation\">\"</span></span>\n              <span class=\"token attr-name\">disabled</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>keys<span class=\"token punctuation\">.</span>length <span class=\"token operator\">===</span> <span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span>\n              <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">remove</span><span class=\"token punctuation\">(</span>k<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>formItems<span class=\"token punctuation\">}</span>\n        <span class=\"token operator\">&lt;</span>FormItem <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayoutWithOutLabel<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>dashed<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>add<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'60%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>plus<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Add field\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayoutWithOutLabel<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">htmlType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Submit<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> WrappedDynamicFieldSet <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>DynamicFieldSet<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>WrappedDynamicFieldSet</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var FormItem = _antd.Form.Item;
  var uuid = 0;

  var DynamicFieldSet = function (_React$Component) {
    _inherits(DynamicFieldSet, _React$Component);

    function DynamicFieldSet() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, DynamicFieldSet);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DynamicFieldSet.__proto__ || Object.getPrototypeOf(DynamicFieldSet)).call.apply(_ref, [this].concat(args))), _this), _this.remove = function (k) {
        var form = _this.props.form; // can use data-binding to get

        var keys = form.getFieldValue('keys'); // We need at least one passenger

        if (keys.length === 1) {
          return;
        } // can use data-binding to set


        form.setFieldsValue({
          keys: keys.filter(function (key) {
            return key !== k;
          })
        });
      }, _this.add = function () {
        var form = _this.props.form; // can use data-binding to get

        var keys = form.getFieldValue('keys');
        var nextKeys = keys.concat(uuid);
        uuid++; // can use data-binding to set
        // important! notify form to detect changes

        form.setFieldsValue({
          keys: nextKeys
        });
      }, _this.handleSubmit = function (e) {
        e.preventDefault();

        _this.props.form.validateFields(function (err, values) {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DynamicFieldSet, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _props$form = this.props.form,
            getFieldDecorator = _props$form.getFieldDecorator,
            getFieldValue = _props$form.getFieldValue;
        var formItemLayout = {
          labelCol: {
            xs: {
              span: 24
            },
            sm: {
              span: 4
            }
          },
          wrapperCol: {
            xs: {
              span: 24
            },
            sm: {
              span: 20
            }
          }
        };
        var formItemLayoutWithOutLabel = {
          wrapperCol: {
            xs: {
              span: 24,
              offset: 0
            },
            sm: {
              span: 20,
              offset: 4
            }
          }
        };
        getFieldDecorator('keys', {
          initialValue: []
        });
        var keys = getFieldValue('keys');
        var formItems = keys.map(function (k, index) {
          return React.createElement(
            FormItem,
            _extends({}, index === 0 ? formItemLayout : formItemLayoutWithOutLabel, {
              label: index === 0 ? 'Passengers' : '',
              required: false,
              key: k
            }),
            getFieldDecorator("names[" + k + "]", {
              validateTrigger: ['onChange', 'onBlur'],
              rules: [{
                required: true,
                whitespace: true,
                message: "Please input passenger's name or delete this field."
              }]
            })(React.createElement(_antd.Input, {
              placeholder: "passenger name",
              style: {
                width: '60%',
                marginRight: 8
              }
            })),
            keys.length > 1 ? React.createElement(_antd.Icon, {
              className: "dynamic-delete-button",
              type: "minus-circle-o",
              disabled: keys.length === 1,
              onClick: function onClick() {
                return _this2.remove(k);
              }
            }) : null
          );
        });
        return React.createElement(
          _antd.Form,
          {
            onSubmit: this.handleSubmit
          },
          formItems,
          React.createElement(
            FormItem,
            formItemLayoutWithOutLabel,
            React.createElement(
              _antd.Button,
              {
                type: "dashed",
                onClick: this.add,
                style: {
                  width: '60%'
                }
              },
              React.createElement(_antd.Icon, {
                type: "plus"
              }),
              " Add field"
            )
          ),
          React.createElement(
            FormItem,
            formItemLayoutWithOutLabel,
            React.createElement(
              _antd.Button,
              {
                type: "primary",
                htmlType: "submit"
              },
              "Submit"
            )
          )
        );
      }
    }]);

    return DynamicFieldSet;
  }(React.Component);

  var WrappedDynamicFieldSet = _antd.Form.create()(DynamicFieldSet);

  return React.createElement(WrappedDynamicFieldSet, null);
},
  "style": ".dynamic-delete-button {\n  cursor: pointer;\n  position: relative;\n  top: 4px;\n  font-size: 24px;\n  color: #999;\n  transition: all .3s;\n}\n.dynamic-delete-button:hover {\n  color: #777;\n}\n.dynamic-delete-button[disabled] {\n  cursor: not-allowed;\n  opacity: 0.5;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.dynamic-delete-button</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">cursor</span><span class=\"token punctuation\">:</span> pointer<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.dynamic-delete-button</span><span class=\"token pseudo-class\">:hover</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#777</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.dynamic-delete-button</span><span class=\"token attribute\">[disabled]</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">cursor</span><span class=\"token punctuation\">:</span> not-allowed<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">opacity</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0.5</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ 2140:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "根据不同情况执行不同的校验规则。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Perform different check rules according to different situations."
      ]
    ]
  },
  "meta": {
    "order": 13,
    "title": {
      "zh-CN": "动态校验规则",
      "en-US": "Dynamic Rules"
    },
    "filename": "components/form/demo/dynamic-rule.md",
    "id": "components-form-demo-dynamic-rule"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Checkbox <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  labelCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> formTailLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  labelCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">DynamicRule</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    checkNick<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  check <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span>\n      <span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n          console<span class=\"token punctuation\">.</span><span class=\"token function\">info</span><span class=\"token punctuation\">(</span><span class=\"token string\">'success'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      checkNick<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>checked<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token string\">'nickname'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> force<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span> label<span class=\"token operator\">=</span><span class=\"token string\">\"Name\"</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'username'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n              required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n              message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your name'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please</span> <span class=\"token attr-name\">input</span> <span class=\"token attr-name\">your</span> <span class=\"token attr-name\">name\"</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span> label<span class=\"token operator\">=</span><span class=\"token string\">\"Nickname\"</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'nickname'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n              required<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>checkNick<span class=\"token punctuation\">,</span>\n              message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your nickname'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please</span> <span class=\"token attr-name\">input</span> <span class=\"token attr-name\">your</span> <span class=\"token attr-name\">nickname\"</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formTailLayout<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Checkbox</span>\n            <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>checkNick<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">></span></span>\n            Nickname is required\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Checkbox</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formTailLayout<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>check<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            Check\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> WrappedDynamicRule <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>DynamicRule<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>WrappedDynamicRule</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var FormItem = _antd.Form.Item;
  var formItemLayout = {
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 8
    }
  };
  var formTailLayout = {
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 8,
      offset: 4
    }
  };

  var DynamicRule = function (_React$Component) {
    _inherits(DynamicRule, _React$Component);

    function DynamicRule() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, DynamicRule);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DynamicRule.__proto__ || Object.getPrototypeOf(DynamicRule)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        checkNick: false
      }, _this.check = function () {
        _this.props.form.validateFields(function (err) {
          if (!err) {
            console.info('success');
          }
        });
      }, _this.handleChange = function (e) {
        _this.setState({
          checkNick: e.target.checked
        }, function () {
          _this.props.form.validateFields(['nickname'], {
            force: true
          });
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DynamicRule, [{
      key: "render",
      value: function render() {
        var getFieldDecorator = this.props.form.getFieldDecorator;
        return React.createElement(
          "div",
          null,
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "Name"
            }),
            getFieldDecorator('username', {
              rules: [{
                required: true,
                message: 'Please input your name'
              }]
            })(React.createElement(_antd.Input, {
              placeholder: "Please input your name"
            }))
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "Nickname"
            }),
            getFieldDecorator('nickname', {
              rules: [{
                required: this.state.checkNick,
                message: 'Please input your nickname'
              }]
            })(React.createElement(_antd.Input, {
              placeholder: "Please input your nickname"
            }))
          ),
          React.createElement(
            FormItem,
            formTailLayout,
            React.createElement(
              _antd.Checkbox,
              {
                checked: this.state.checkNick,
                onChange: this.handleChange
              },
              "Nickname is required"
            )
          ),
          React.createElement(
            FormItem,
            formTailLayout,
            React.createElement(
              _antd.Button,
              {
                type: "primary",
                onClick: this.check
              },
              "Check"
            )
          )
        );
      }
    }]);

    return DynamicRule;
  }(React.Component);

  var WrappedDynamicRule = _antd.Form.create()(DynamicRule);

  return React.createElement(WrappedDynamicRule, null);
}
};

/***/ }),

/***/ 2141:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "当用户访问一个展示了某个列表的页面，想新建一项但又不想跳转页面时，可以用 Modal 弹出一个表单，用户填写必要信息后创建新的项。"
      ]
    ],
    "en-US": [
      [
        "p",
        "When user visit a page with a list of items, and want to create a new item. The page can popup a form in Modal, then let user fill in the form to create an item."
      ]
    ]
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
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button<span class=\"token punctuation\">,</span> Modal<span class=\"token punctuation\">,</span> Form<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Radio <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> CollectionCreateForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n  <span class=\"token keyword\">class</span> <span class=\"token class-name\">extends</span> React<span class=\"token punctuation\">.</span>Component <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> visible<span class=\"token punctuation\">,</span> onCancel<span class=\"token punctuation\">,</span> onCreate<span class=\"token punctuation\">,</span> form <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> form<span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Modal</span>\n          <span class=\"token attr-name\">visible</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>visible<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Create</span> <span class=\"token attr-name\">a</span> <span class=\"token attr-name\">new</span> <span class=\"token attr-name\">collection\"</span>\n          <span class=\"token attr-name\">okText</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Create<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">onCancel</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onCancel<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onOk</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onCreate<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">layout</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>vertical<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Title<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'title'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n                rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input the title of collection!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n              <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Description<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'description'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>textarea<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>collection-create-form_last-form-item<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'modifier'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n                initialValue<span class=\"token punctuation\">:</span> <span class=\"token string\">'public'</span><span class=\"token punctuation\">,</span>\n              <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Group</span><span class=\"token punctuation\">></span></span>\n                  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>public<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Public<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio</span><span class=\"token punctuation\">></span></span>\n                  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>private<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Private<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Group</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Modal</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">CollectionsPage</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  showModal <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleCancel <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleCreate <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> form <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>formRef<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      form<span class=\"token punctuation\">.</span><span class=\"token function\">resetFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  saveFormRef <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>formRef<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>formRef <span class=\"token operator\">=</span> formRef<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>showModal<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>New <span class=\"token class-name\">Collection</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CollectionCreateForm</span>\n          <span class=\"token attr-name\">wrappedComponentRef</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>saveFormRef<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">visible</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>visible<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onCancel</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleCancel<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onCreate</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleCreate<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CollectionsPage</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var FormItem = _antd.Form.Item;

  var CollectionCreateForm = _antd.Form.create()(function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: "render",
      value: function render() {
        var _props = this.props,
            visible = _props.visible,
            onCancel = _props.onCancel,
            onCreate = _props.onCreate,
            form = _props.form;
        var getFieldDecorator = form.getFieldDecorator;
        return React.createElement(
          _antd.Modal,
          {
            visible: visible,
            title: "Create a new collection",
            okText: "Create",
            onCancel: onCancel,
            onOk: onCreate
          },
          React.createElement(
            _antd.Form,
            {
              layout: "vertical"
            },
            React.createElement(
              FormItem,
              {
                label: "Title"
              },
              getFieldDecorator('title', {
                rules: [{
                  required: true,
                  message: 'Please input the title of collection!'
                }]
              })(React.createElement(_antd.Input, null))
            ),
            React.createElement(
              FormItem,
              {
                label: "Description"
              },
              getFieldDecorator('description')(React.createElement(_antd.Input, {
                type: "textarea"
              }))
            ),
            React.createElement(
              FormItem,
              {
                className: "collection-create-form_last-form-item"
              },
              getFieldDecorator('modifier', {
                initialValue: 'public'
              })(React.createElement(
                _antd.Radio.Group,
                null,
                React.createElement(
                  _antd.Radio,
                  {
                    value: "public"
                  },
                  "Public"
                ),
                React.createElement(
                  _antd.Radio,
                  {
                    value: "private"
                  },
                  "Private"
                )
              ))
            )
          )
        );
      }
    }]);

    return _class;
  }(React.Component));

  var CollectionsPage = function (_React$Component2) {
    _inherits(CollectionsPage, _React$Component2);

    function CollectionsPage() {
      var _ref;

      var _temp, _this2, _ret;

      _classCallCheck(this, CollectionsPage);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = CollectionsPage.__proto__ || Object.getPrototypeOf(CollectionsPage)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
        visible: false
      }, _this2.showModal = function () {
        _this2.setState({
          visible: true
        });
      }, _this2.handleCancel = function () {
        _this2.setState({
          visible: false
        });
      }, _this2.handleCreate = function () {
        var form = _this2.formRef.props.form;
        form.validateFields(function (err, values) {
          if (err) {
            return;
          }

          console.log('Received values of form: ', values);
          form.resetFields();

          _this2.setState({
            visible: false
          });
        });
      }, _this2.saveFormRef = function (formRef) {
        _this2.formRef = formRef;
      }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(CollectionsPage, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement(
            _antd.Button,
            {
              type: "primary",
              onClick: this.showModal
            },
            "New Collection"
          ),
          React.createElement(CollectionCreateForm, {
            wrappedComponentRef: this.saveFormRef,
            visible: this.state.visible,
            onCancel: this.handleCancel,
            onCreate: this.handleCreate
          })
        );
      }
    }]);

    return CollectionsPage;
  }(React.Component);

  return React.createElement(CollectionsPage, null);
},
  "style": ".collection-create-form_last-form-item {\n  margin-bottom: 0;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.collection-create-form_last-form-item</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ 2142:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "通过使用 ",
        [
          "code",
          "onFieldsChange"
        ],
        " 与 ",
        [
          "code",
          "mapPropsToFields"
        ],
        "，可以把表单的数据存储到上层组件或者 ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/reactjs/redux"
          },
          "Redux"
        ],
        "、",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/dvajs/dva"
          },
          "dva"
        ],
        " 中，更多可参考 ",
        [
          "a",
          {
            "title": null,
            "href": "http://react-component.github.io/form/examples/redux.html"
          },
          "rc-form 示例"
        ],
        "。"
      ],
      [
        "p",
        [
          "strong",
          "注意："
        ],
        [
          "code",
          "mapPropsToFields"
        ],
        " 里面返回的表单域数据必须使用 ",
        [
          "code",
          "Form.createFormField"
        ],
        " 包装。"
      ]
    ],
    "en-US": [
      [
        "p",
        "We can store form data into upper component or ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/reactjs/redux"
          },
          "Redux"
        ],
        " or ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/dvajs/dva"
          },
          "dva"
        ],
        " by using ",
        [
          "code",
          "onFieldsChange"
        ],
        " and ",
        [
          "code",
          "mapPropsToFields"
        ],
        ", see more at this ",
        [
          "a",
          {
            "title": null,
            "href": "http://react-component.github.io/form/examples/redux.html"
          },
          "rc-form demo"
        ],
        "."
      ],
      [
        "p",
        [
          "strong",
          "Note:"
        ],
        " You must wrap field data with ",
        [
          "code",
          "Form.createFormField"
        ],
        " in ",
        [
          "code",
          "mapPropsToFields"
        ],
        "."
      ]
    ]
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
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> CustomizedForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">onFieldsChange</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">,</span> changedFields<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    props<span class=\"token punctuation\">.</span><span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>changedFields<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">mapPropsToFields</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      username<span class=\"token punctuation\">:</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">createFormField</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        <span class=\"token operator\">...</span>props<span class=\"token punctuation\">.</span>username<span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> props<span class=\"token punctuation\">.</span>username<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onValuesChange</span><span class=\"token punctuation\">(</span>_<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">layout</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>inline<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Username<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'username'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n          rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Username is required!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    fields<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n      username<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'benjycui'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleFormChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>changedFields<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> fields <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      fields<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> <span class=\"token operator\">...</span>fields<span class=\"token punctuation\">,</span> <span class=\"token operator\">...</span>changedFields <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> fields <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>fields<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>CustomizedForm <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>fields<span class=\"token punctuation\">}</span> onChange<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleFormChange<span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>pre</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>language-bash<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span>JSON<span class=\"token punctuation\">.</span><span class=\"token function\">stringify</span><span class=\"token punctuation\">(</span>fields<span class=\"token punctuation\">,</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>pre</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var FormItem = _antd.Form.Item;

  var CustomizedForm = _antd.Form.create({
    onFieldsChange: function onFieldsChange(props, changedFields) {
      props.onChange(changedFields);
    },
    mapPropsToFields: function mapPropsToFields(props) {
      return {
        username: _antd.Form.createFormField(_extends({}, props.username, {
          value: props.username.value
        }))
      };
    },
    onValuesChange: function onValuesChange(_, values) {
      console.log(values);
    }
  })(function (props) {
    var getFieldDecorator = props.form.getFieldDecorator;
    return React.createElement(
      _antd.Form,
      {
        layout: "inline"
      },
      React.createElement(
        FormItem,
        {
          label: "Username"
        },
        getFieldDecorator('username', {
          rules: [{
            required: true,
            message: 'Username is required!'
          }]
        })(React.createElement(_antd.Input, null))
      )
    );
  });

  var Demo = function (_React$Component) {
    _inherits(Demo, _React$Component);

    function Demo() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Demo);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        fields: {
          username: {
            value: 'benjycui'
          }
        }
      }, _this.handleFormChange = function (changedFields) {
        _this.setState(function (_ref2) {
          var fields = _ref2.fields;
          return {
            fields: _extends({}, fields, changedFields)
          };
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
        var fields = this.state.fields;
        return React.createElement(
          "div",
          null,
          React.createElement(CustomizedForm, _extends({}, fields, {
            onChange: this.handleFormChange
          })),
          React.createElement(
            "pre",
            {
              className: "language-bash"
            },
            JSON.stringify(fields, null, 2)
          )
        );
      }
    }]);

    return Demo;
  }(React.Component);

  return React.createElement(Demo, null);
},
  "style": "\n#components-form-demo-global-state .language-bash {\n  max-width: 400px;\n  border-radius: 6px;\n  margin-top: 24px;\n}\n"
};

/***/ }),

/***/ 2143:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "水平登录栏，常用在顶部导航栏中。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Horizontal login form is often used in navigation bar."
      ]
    ]
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
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">hasErrors</span><span class=\"token punctuation\">(</span>fieldsError<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> Object<span class=\"token punctuation\">.</span><span class=\"token function\">keys</span><span class=\"token punctuation\">(</span>fieldsError<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">some</span><span class=\"token punctuation\">(</span>field <span class=\"token operator\">=</span><span class=\"token operator\">></span> fieldsError<span class=\"token punctuation\">[</span>field<span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">HorizontalLoginForm</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// To disabled submit button at the beginning.</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleSubmit <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator<span class=\"token punctuation\">,</span> getFieldsError<span class=\"token punctuation\">,</span> getFieldError<span class=\"token punctuation\">,</span> isFieldTouched <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// Only show error after a field is touched.</span>\n    <span class=\"token keyword\">const</span> userNameError <span class=\"token operator\">=</span> <span class=\"token function\">isFieldTouched</span><span class=\"token punctuation\">(</span><span class=\"token string\">'userName'</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">&amp;&amp;</span> <span class=\"token function\">getFieldError</span><span class=\"token punctuation\">(</span><span class=\"token string\">'userName'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> passwordError <span class=\"token operator\">=</span> <span class=\"token function\">isFieldTouched</span><span class=\"token punctuation\">(</span><span class=\"token string\">'password'</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">&amp;&amp;</span> <span class=\"token function\">getFieldError</span><span class=\"token punctuation\">(</span><span class=\"token string\">'password'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">layout</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>inline<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n          <span class=\"token attr-name\">validateStatus</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>userNameError <span class=\"token operator\">?</span> <span class=\"token string\">'error'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">help</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>userNameError <span class=\"token operator\">||</span> <span class=\"token string\">''</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'userName'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your username!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">prefix</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"user\"</span> style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'rgba(0,0,0,.25)'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span> placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Username\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n          <span class=\"token attr-name\">validateStatus</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>passwordError <span class=\"token operator\">?</span> <span class=\"token string\">'error'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">help</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>passwordError <span class=\"token operator\">||</span> <span class=\"token string\">''</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'password'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your Password!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">prefix</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"lock\"</span> style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'rgba(0,0,0,.25)'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"password\"</span> placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Password\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span>\n            <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">htmlType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">disabled</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">hasErrors</span><span class=\"token punctuation\">(</span><span class=\"token function\">getFieldsError</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">></span></span>\n            Log <span class=\"token keyword\">in</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> WrappedHorizontalLoginForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>HorizontalLoginForm<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>WrappedHorizontalLoginForm</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var FormItem = _antd.Form.Item;

  function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(function (field) {
      return fieldsError[field];
    });
  }

  var HorizontalLoginForm = function (_React$Component) {
    _inherits(HorizontalLoginForm, _React$Component);

    function HorizontalLoginForm() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, HorizontalLoginForm);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HorizontalLoginForm.__proto__ || Object.getPrototypeOf(HorizontalLoginForm)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
        e.preventDefault();

        _this.props.form.validateFields(function (err, values) {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(HorizontalLoginForm, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
      }
    }, {
      key: "render",
      value: function render() {
        var _props$form = this.props.form,
            getFieldDecorator = _props$form.getFieldDecorator,
            getFieldsError = _props$form.getFieldsError,
            getFieldError = _props$form.getFieldError,
            isFieldTouched = _props$form.isFieldTouched; // Only show error after a field is touched.

        var userNameError = isFieldTouched('userName') && getFieldError('userName');
        var passwordError = isFieldTouched('password') && getFieldError('password');
        return React.createElement(
          _antd.Form,
          {
            layout: "inline",
            onSubmit: this.handleSubmit
          },
          React.createElement(
            FormItem,
            {
              validateStatus: userNameError ? 'error' : '',
              help: userNameError || ''
            },
            getFieldDecorator('userName', {
              rules: [{
                required: true,
                message: 'Please input your username!'
              }]
            })(React.createElement(_antd.Input, {
              prefix: React.createElement(_antd.Icon, {
                type: "user",
                style: {
                  color: 'rgba(0,0,0,.25)'
                }
              }),
              placeholder: "Username"
            }))
          ),
          React.createElement(
            FormItem,
            {
              validateStatus: passwordError ? 'error' : '',
              help: passwordError || ''
            },
            getFieldDecorator('password', {
              rules: [{
                required: true,
                message: 'Please input your Password!'
              }]
            })(React.createElement(_antd.Input, {
              prefix: React.createElement(_antd.Icon, {
                type: "lock",
                style: {
                  color: 'rgba(0,0,0,.25)'
                }
              }),
              type: "password",
              placeholder: "Password"
            }))
          ),
          React.createElement(
            FormItem,
            null,
            React.createElement(
              _antd.Button,
              {
                type: "primary",
                htmlType: "submit",
                disabled: hasErrors(getFieldsError())
              },
              "Log in"
            )
          )
        );
      }
    }]);

    return HorizontalLoginForm;
  }(React.Component);

  var WrappedHorizontalLoginForm = _antd.Form.create()(HorizontalLoginForm);

  return React.createElement(WrappedHorizontalLoginForm, null);
}
};

/***/ }),

/***/ 2144:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "表单有三种布局。"
      ]
    ],
    "en-US": [
      [
        "p",
        "There are three layout for form: ",
        [
          "code",
          "horizontal"
        ],
        ", ",
        [
          "code",
          "vertical"
        ],
        ", ",
        [
          "code",
          "inline"
        ],
        "."
      ]
    ]
  },
  "meta": {
    "order": 12,
    "title": {
      "zh-CN": "表单布局",
      "en-US": "Form Layout"
    },
    "filename": "components/form/demo/layout.md",
    "id": "components-form-demo-layout"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Radio <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">FormLayoutDemo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      formLayout<span class=\"token punctuation\">:</span> <span class=\"token string\">'horizontal'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleFormLayoutChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> formLayout<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> formLayout <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> formLayout <span class=\"token operator\">===</span> <span class=\"token string\">'horizontal'</span> <span class=\"token operator\">?</span> <span class=\"token punctuation\">{</span>\n      labelCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">14</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> buttonItemLayout <span class=\"token operator\">=</span> formLayout <span class=\"token operator\">===</span> <span class=\"token string\">'horizontal'</span> <span class=\"token operator\">?</span> <span class=\"token punctuation\">{</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">14</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">layout</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>formLayout<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n            <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Form</span> <span class=\"token attr-name\">Layout\"</span>\n            <span class=\"token attr-name\">{...formItemLayout}</span>\n          <span class=\"token punctuation\">></span>\n            <span class=\"token attr-name\">&lt;Radio.Group</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>horizontal<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleFormLayoutChange<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>horizontal<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Horizontal<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>vertical<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Vertical<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>inline<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Inline<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Group</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n            <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Field</span> <span class=\"token attr-name\">A\"</span>\n            <span class=\"token attr-name\">{...formItemLayout}</span>\n          <span class=\"token punctuation\">></span>\n            <span class=\"token attr-name\">&lt;Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input</span> <span class=\"token attr-name\">placeholder\"</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n            <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Field</span> <span class=\"token attr-name\">B\"</span>\n            <span class=\"token attr-name\">{...formItemLayout}</span>\n          <span class=\"token punctuation\">></span>\n            <span class=\"token attr-name\">&lt;Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input</span> <span class=\"token attr-name\">placeholder\"</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token operator\">&lt;</span>FormItem <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>buttonItemLayout<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Submit<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormLayoutDemo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var FormItem = _antd.Form.Item;

  var FormLayoutDemo = function (_React$Component) {
    _inherits(FormLayoutDemo, _React$Component);

    function FormLayoutDemo() {
      _classCallCheck(this, FormLayoutDemo);

      var _this = _possibleConstructorReturn(this, (FormLayoutDemo.__proto__ || Object.getPrototypeOf(FormLayoutDemo)).call(this));

      _this.handleFormLayoutChange = function (e) {
        _this.setState({
          formLayout: e.target.value
        });
      };

      _this.state = {
        formLayout: 'horizontal'
      };
      return _this;
    }

    _createClass(FormLayoutDemo, [{
      key: "render",
      value: function render() {
        var formLayout = this.state.formLayout;
        var formItemLayout = formLayout === 'horizontal' ? {
          labelCol: {
            span: 4
          },
          wrapperCol: {
            span: 14
          }
        } : null;
        var buttonItemLayout = formLayout === 'horizontal' ? {
          wrapperCol: {
            span: 14,
            offset: 4
          }
        } : null;
        return React.createElement(
          "div",
          null,
          React.createElement(
            _antd.Form,
            {
              layout: formLayout
            },
            React.createElement(
              FormItem,
              _extends({
                label: "Form Layout"
              }, formItemLayout),
              React.createElement(
                _antd.Radio.Group,
                {
                  defaultValue: "horizontal",
                  onChange: this.handleFormLayoutChange
                },
                React.createElement(
                  _antd.Radio.Button,
                  {
                    value: "horizontal"
                  },
                  "Horizontal"
                ),
                React.createElement(
                  _antd.Radio.Button,
                  {
                    value: "vertical"
                  },
                  "Vertical"
                ),
                React.createElement(
                  _antd.Radio.Button,
                  {
                    value: "inline"
                  },
                  "Inline"
                )
              )
            ),
            React.createElement(
              FormItem,
              _extends({
                label: "Field A"
              }, formItemLayout),
              React.createElement(_antd.Input, {
                placeholder: "input placeholder"
              })
            ),
            React.createElement(
              FormItem,
              _extends({
                label: "Field B"
              }, formItemLayout),
              React.createElement(_antd.Input, {
                placeholder: "input placeholder"
              })
            ),
            React.createElement(
              FormItem,
              buttonItemLayout,
              React.createElement(
                _antd.Button,
                {
                  type: "primary"
                },
                "Submit"
              )
            )
          )
        );
      }
    }]);

    return FormLayoutDemo;
  }(React.Component);

  return React.createElement(FormLayoutDemo, null);
}
};

/***/ }),

/***/ 2145:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "普通的登录框，可以容纳更多的元素。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Normal login form which can contain more elements."
      ]
    ]
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
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Checkbox <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">NormalLoginForm</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  handleSubmit <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>login-form<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'userName'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your username!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">prefix</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"user\"</span> style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'rgba(0,0,0,.25)'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span> placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Username\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'password'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your Password!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">prefix</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"lock\"</span> style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'rgba(0,0,0,.25)'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"password\"</span> placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Password\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'remember'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            valuePropName<span class=\"token punctuation\">:</span> <span class=\"token string\">'checked'</span><span class=\"token punctuation\">,</span>\n            initialValue<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Checkbox</span><span class=\"token punctuation\">></span></span>Remember me<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Checkbox</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>login-form-forgot<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Forgot password<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">htmlType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>login-form-button<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            Log <span class=\"token keyword\">in</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n          Or <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>register now<span class=\"token operator\">!</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> WrappedNormalLoginForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>NormalLoginForm<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>WrappedNormalLoginForm</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var FormItem = _antd.Form.Item;

  var NormalLoginForm = function (_React$Component) {
    _inherits(NormalLoginForm, _React$Component);

    function NormalLoginForm() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, NormalLoginForm);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NormalLoginForm.__proto__ || Object.getPrototypeOf(NormalLoginForm)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
        e.preventDefault();

        _this.props.form.validateFields(function (err, values) {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(NormalLoginForm, [{
      key: "render",
      value: function render() {
        var getFieldDecorator = this.props.form.getFieldDecorator;
        return React.createElement(
          _antd.Form,
          {
            onSubmit: this.handleSubmit,
            className: "login-form"
          },
          React.createElement(
            FormItem,
            null,
            getFieldDecorator('userName', {
              rules: [{
                required: true,
                message: 'Please input your username!'
              }]
            })(React.createElement(_antd.Input, {
              prefix: React.createElement(_antd.Icon, {
                type: "user",
                style: {
                  color: 'rgba(0,0,0,.25)'
                }
              }),
              placeholder: "Username"
            }))
          ),
          React.createElement(
            FormItem,
            null,
            getFieldDecorator('password', {
              rules: [{
                required: true,
                message: 'Please input your Password!'
              }]
            })(React.createElement(_antd.Input, {
              prefix: React.createElement(_antd.Icon, {
                type: "lock",
                style: {
                  color: 'rgba(0,0,0,.25)'
                }
              }),
              type: "password",
              placeholder: "Password"
            }))
          ),
          React.createElement(
            FormItem,
            null,
            getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(React.createElement(
              _antd.Checkbox,
              null,
              "Remember me"
            )),
            React.createElement(
              "a",
              {
                className: "login-form-forgot",
                href: ""
              },
              "Forgot password"
            ),
            React.createElement(
              _antd.Button,
              {
                type: "primary",
                htmlType: "submit",
                className: "login-form-button"
              },
              "Log in"
            ),
            "Or ",
            React.createElement(
              "a",
              {
                href: ""
              },
              "register now!"
            )
          )
        );
      }
    }]);

    return NormalLoginForm;
  }(React.Component);

  var WrappedNormalLoginForm = _antd.Form.create()(NormalLoginForm);

  return React.createElement(WrappedNormalLoginForm, null);
},
  "style": "#components-form-demo-normal-login .login-form {\n  max-width: 300px;\n}\n#components-form-demo-normal-login .login-form-forgot {\n  float: right;\n}\n#components-form-demo-normal-login .login-form-button {\n  width: 100%;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-form-demo-normal-login</span> <span class=\"token class\">.login-form</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">max-width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">300</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token id\">#components-form-demo-normal-login</span> <span class=\"token class\">.login-form-forgot</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">float</span><span class=\"token punctuation\">:</span> right<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token id\">#components-form-demo-normal-login</span> <span class=\"token class\">.login-form-button</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ 2146:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "用户填写必须的信息以注册新用户。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Fill in this form to create a new account for you."
      ]
    ]
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
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Tooltip<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Cascader<span class=\"token punctuation\">,</span> Select<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">,</span> Col<span class=\"token punctuation\">,</span> Checkbox<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> AutoComplete <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">.</span>Option<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> AutoCompleteOption <span class=\"token operator\">=</span> AutoComplete<span class=\"token punctuation\">.</span>Option<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> residences <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">RegistrationForm</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    confirmDirty<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    autoCompleteResult<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleSubmit <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFieldsAndScroll</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleConfirmBlur <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> value <span class=\"token operator\">=</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> confirmDirty<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>confirmDirty <span class=\"token operator\">||</span> <span class=\"token operator\">!</span><span class=\"token operator\">!</span>value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  compareToFirstPassword <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>rule<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">,</span> callback<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> form <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>value <span class=\"token operator\">&amp;&amp;</span> value <span class=\"token operator\">!==</span> form<span class=\"token punctuation\">.</span><span class=\"token function\">getFieldValue</span><span class=\"token punctuation\">(</span><span class=\"token string\">'password'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Two passwords that you enter is inconsistent!'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n\n  validateToNextPassword <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>rule<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">,</span> callback<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> form <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>value <span class=\"token operator\">&amp;&amp;</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>confirmDirty<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token string\">'confirm'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> force<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleWebsiteChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> autoCompleteResult<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      autoCompleteResult <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token punctuation\">{</span>\n      autoCompleteResult <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'.com'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'.org'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'.net'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>domain <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>value<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>domain<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> autoCompleteResult <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> autoCompleteResult <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      labelCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        xs<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        sm<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        xs<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        sm<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> tailFormItemLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        xs<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n          span<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span><span class=\"token punctuation\">,</span>\n          offset<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        sm<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n          span<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span>\n          offset<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> prefixSelector <span class=\"token operator\">=</span> <span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'prefix'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      initialValue<span class=\"token punctuation\">:</span> <span class=\"token string\">'86'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">70</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>86<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token operator\">+</span><span class=\"token number\">86</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>87<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token operator\">+</span><span class=\"token number\">87</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">const</span> websiteOptions <span class=\"token operator\">=</span> autoCompleteResult<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>website <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>AutoCompleteOption</span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>website<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>website<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>AutoCompleteOption</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"E-mail\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'email'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n              type<span class=\"token punctuation\">:</span> <span class=\"token string\">'email'</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'The input is not valid E-mail!'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n              required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your E-mail!'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Password\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'password'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n              required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your password!'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n              validator<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>validateToNextPassword<span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>password<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Confirm Password\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'confirm'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n              required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please confirm your password!'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n              validator<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>compareToFirstPassword<span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>password<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onBlur</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleConfirmBlur<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n              Nickname<span class=\"token entity\" title=\"&nbsp;\">&amp;nbsp;</span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tooltip</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>What</span> <span class=\"token attr-name\">do</span> <span class=\"token attr-name\">you</span> <span class=\"token attr-name\">want</span> <span class=\"token attr-name\">others</span> <span class=\"token attr-name\">to</span> <span class=\"token attr-name\">call</span> <span class=\"token attr-name\">you?\"</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>question-circle-o<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tooltip</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'nickname'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your nickname!'</span><span class=\"token punctuation\">,</span> whitespace<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Habitual Residence\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'residence'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            initialValue<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'array'</span><span class=\"token punctuation\">,</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select your habitual residence!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Cascader</span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>residences<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Phone Number\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'phone'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input your phone number!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">addonBefore</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>prefixSelector<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Website\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'website'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input website!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>AutoComplete</span>\n              <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>websiteOptions<span class=\"token punctuation\">}</span></span>\n              <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleWebsiteChange<span class=\"token punctuation\">}</span></span>\n              <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>website<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>AutoComplete</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Captcha\"</span>\n          extra<span class=\"token operator\">=</span><span class=\"token string\">\"We must make sure that your are a human.\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Row</span> <span class=\"token attr-name\">gutter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">8</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">12</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'captcha'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n                rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please input the captcha you got!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n              <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">12</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>Get captcha<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Row</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>tailFormItemLayout<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'agreement'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            valuePropName<span class=\"token punctuation\">:</span> <span class=\"token string\">'checked'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Checkbox</span><span class=\"token punctuation\">></span></span>I have read the <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>agreement<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Checkbox</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>tailFormItemLayout<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">htmlType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Register<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> WrappedRegistrationForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>RegistrationForm<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>WrappedRegistrationForm</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var FormItem = _antd.Form.Item;
  var Option = _antd.Select.Option;
  var AutoCompleteOption = _antd.AutoComplete.Option;
  var residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [{
        value: 'xihu',
        label: 'West Lake'
      }]
    }]
  }, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
      value: 'nanjing',
      label: 'Nanjing',
      children: [{
        value: 'zhonghuamen',
        label: 'Zhong Hua Men'
      }]
    }]
  }];

  var RegistrationForm = function (_React$Component) {
    _inherits(RegistrationForm, _React$Component);

    function RegistrationForm() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, RegistrationForm);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RegistrationForm.__proto__ || Object.getPrototypeOf(RegistrationForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        confirmDirty: false,
        autoCompleteResult: []
      }, _this.handleSubmit = function (e) {
        e.preventDefault();

        _this.props.form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }, _this.handleConfirmBlur = function (e) {
        var value = e.target.value;

        _this.setState({
          confirmDirty: _this.state.confirmDirty || !!value
        });
      }, _this.compareToFirstPassword = function (rule, value, callback) {
        var form = _this.props.form;

        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
      }, _this.validateToNextPassword = function (rule, value, callback) {
        var form = _this.props.form;

        if (value && _this.state.confirmDirty) {
          form.validateFields(['confirm'], {
            force: true
          });
        }

        callback();
      }, _this.handleWebsiteChange = function (value) {
        var autoCompleteResult = void 0;

        if (!value) {
          autoCompleteResult = [];
        } else {
          autoCompleteResult = ['.com', '.org', '.net'].map(function (domain) {
            return "" + value + domain;
          });
        }

        _this.setState({
          autoCompleteResult: autoCompleteResult
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RegistrationForm, [{
      key: "render",
      value: function render() {
        var getFieldDecorator = this.props.form.getFieldDecorator;
        var autoCompleteResult = this.state.autoCompleteResult;
        var formItemLayout = {
          labelCol: {
            xs: {
              span: 24
            },
            sm: {
              span: 8
            }
          },
          wrapperCol: {
            xs: {
              span: 24
            },
            sm: {
              span: 16
            }
          }
        };
        var tailFormItemLayout = {
          wrapperCol: {
            xs: {
              span: 24,
              offset: 0
            },
            sm: {
              span: 16,
              offset: 8
            }
          }
        };
        var prefixSelector = getFieldDecorator('prefix', {
          initialValue: '86'
        })(React.createElement(
          _antd.Select,
          {
            style: {
              width: 70
            }
          },
          React.createElement(
            Option,
            {
              value: "86"
            },
            "+86"
          ),
          React.createElement(
            Option,
            {
              value: "87"
            },
            "+87"
          )
        ));
        var websiteOptions = autoCompleteResult.map(function (website) {
          return React.createElement(
            AutoCompleteOption,
            {
              key: website
            },
            website
          );
        });
        return React.createElement(
          _antd.Form,
          {
            onSubmit: this.handleSubmit
          },
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "E-mail"
            }),
            getFieldDecorator('email', {
              rules: [{
                type: 'email',
                message: 'The input is not valid E-mail!'
              }, {
                required: true,
                message: 'Please input your E-mail!'
              }]
            })(React.createElement(_antd.Input, null))
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "Password"
            }),
            getFieldDecorator('password', {
              rules: [{
                required: true,
                message: 'Please input your password!'
              }, {
                validator: this.validateToNextPassword
              }]
            })(React.createElement(_antd.Input, {
              type: "password"
            }))
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "Confirm Password"
            }),
            getFieldDecorator('confirm', {
              rules: [{
                required: true,
                message: 'Please confirm your password!'
              }, {
                validator: this.compareToFirstPassword
              }]
            })(React.createElement(_antd.Input, {
              type: "password",
              onBlur: this.handleConfirmBlur
            }))
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: React.createElement(
                "span",
                null,
                "Nickname ",
                React.createElement(
                  _antd.Tooltip,
                  {
                    title: "What do you want others to call you?"
                  },
                  React.createElement(_antd.Icon, {
                    type: "question-circle-o"
                  })
                )
              )
            }),
            getFieldDecorator('nickname', {
              rules: [{
                required: true,
                message: 'Please input your nickname!',
                whitespace: true
              }]
            })(React.createElement(_antd.Input, null))
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "Habitual Residence"
            }),
            getFieldDecorator('residence', {
              initialValue: ['zhejiang', 'hangzhou', 'xihu'],
              rules: [{
                type: 'array',
                required: true,
                message: 'Please select your habitual residence!'
              }]
            })(React.createElement(_antd.Cascader, {
              options: residences
            }))
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "Phone Number"
            }),
            getFieldDecorator('phone', {
              rules: [{
                required: true,
                message: 'Please input your phone number!'
              }]
            })(React.createElement(_antd.Input, {
              addonBefore: prefixSelector,
              style: {
                width: '100%'
              }
            }))
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "Website"
            }),
            getFieldDecorator('website', {
              rules: [{
                required: true,
                message: 'Please input website!'
              }]
            })(React.createElement(
              _antd.AutoComplete,
              {
                dataSource: websiteOptions,
                onChange: this.handleWebsiteChange,
                placeholder: "website"
              },
              React.createElement(_antd.Input, null)
            ))
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "Captcha",
              extra: "We must make sure that your are a human."
            }),
            React.createElement(
              _antd.Row,
              {
                gutter: 8
              },
              React.createElement(
                _antd.Col,
                {
                  span: 12
                },
                getFieldDecorator('captcha', {
                  rules: [{
                    required: true,
                    message: 'Please input the captcha you got!'
                  }]
                })(React.createElement(_antd.Input, null))
              ),
              React.createElement(
                _antd.Col,
                {
                  span: 12
                },
                React.createElement(
                  _antd.Button,
                  null,
                  "Get captcha"
                )
              )
            )
          ),
          React.createElement(
            FormItem,
            tailFormItemLayout,
            getFieldDecorator('agreement', {
              valuePropName: 'checked'
            })(React.createElement(
              _antd.Checkbox,
              null,
              "I have read the ",
              React.createElement(
                "a",
                {
                  href: ""
                },
                "agreement"
              )
            ))
          ),
          React.createElement(
            FormItem,
            tailFormItemLayout,
            React.createElement(
              _antd.Button,
              {
                type: "primary",
                htmlType: "submit"
              },
              "Register"
            )
          )
        );
      }
    }]);

    return RegistrationForm;
  }(React.Component);

  var WrappedRegistrationForm = _antd.Form.create()(RegistrationForm);

  return React.createElement(WrappedRegistrationForm, null);
}
};

/***/ }),

/***/ 2147:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "时间类组件的 ",
        [
          "code",
          "value"
        ],
        " 类型为 ",
        [
          "code",
          "moment"
        ],
        " 对象，所以在提交服务器前需要预处理。"
      ]
    ],
    "en-US": [
      [
        "p",
        "The ",
        [
          "code",
          "value"
        ],
        " of time-related components is a ",
        [
          "code",
          "moment"
        ],
        " object, which we need to pre-process it before we submit to server."
      ]
    ]
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
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> DatePicker<span class=\"token punctuation\">,</span> TimePicker<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> MonthPicker<span class=\"token punctuation\">,</span> RangePicker <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> DatePicker<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">TimeRelatedForm</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  handleSubmit <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> fieldsValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n\n      <span class=\"token comment\" spellcheck=\"true\">// Should format date value before submit.</span>\n      <span class=\"token keyword\">const</span> rangeValue <span class=\"token operator\">=</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'range-picker'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">const</span> rangeTimeValue <span class=\"token operator\">=</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'range-time-picker'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">const</span> values <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token operator\">...</span>fieldsValue<span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'date-picker'</span><span class=\"token punctuation\">:</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'date-picker'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'date-time-picker'</span><span class=\"token punctuation\">:</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'date-time-picker'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'month-picker'</span><span class=\"token punctuation\">:</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'month-picker'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'range-picker'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>rangeValue<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> rangeValue<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'range-time-picker'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          rangeTimeValue<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n          rangeTimeValue<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">'time-picker'</span><span class=\"token punctuation\">:</span> fieldsValue<span class=\"token punctuation\">[</span><span class=\"token string\">'time-picker'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      labelCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        xs<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        sm<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        xs<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        sm<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> config <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'object'</span><span class=\"token punctuation\">,</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select time!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> rangeConfig <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'array'</span><span class=\"token punctuation\">,</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select time!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"DatePicker\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'date-picker'</span><span class=\"token punctuation\">,</span> config<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"DatePicker[showTime]\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'date-time-picker'</span><span class=\"token punctuation\">,</span> config<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token attr-name\">showTime</span> <span class=\"token attr-name\">format</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>YYYY-MM-DD</span> <span class=\"token attr-name\"><span class=\"token namespace\">HH:</span><span class=\"token namespace\">mm:</span>ss\"</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"MonthPicker\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'month-picker'</span><span class=\"token punctuation\">,</span> config<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>MonthPicker</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"RangePicker\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'range-picker'</span><span class=\"token punctuation\">,</span> rangeConfig<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RangePicker</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"RangePicker[showTime]\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'range-time-picker'</span><span class=\"token punctuation\">,</span> rangeConfig<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RangePicker</span> <span class=\"token attr-name\">showTime</span> <span class=\"token attr-name\">format</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>YYYY-MM-DD</span> <span class=\"token attr-name\"><span class=\"token namespace\">HH:</span><span class=\"token namespace\">mm:</span>ss\"</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"TimePicker\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'time-picker'</span><span class=\"token punctuation\">,</span> config<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TimePicker</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n          <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n            xs<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            sm<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span></span><span class=\"token attr-name\">}</span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">htmlType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Submit<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> WrappedTimeRelatedForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>TimeRelatedForm<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>WrappedTimeRelatedForm</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var FormItem = _antd.Form.Item;
  var MonthPicker = _antd.DatePicker.MonthPicker,
      RangePicker = _antd.DatePicker.RangePicker;

  var TimeRelatedForm = function (_React$Component) {
    _inherits(TimeRelatedForm, _React$Component);

    function TimeRelatedForm() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, TimeRelatedForm);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TimeRelatedForm.__proto__ || Object.getPrototypeOf(TimeRelatedForm)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
        e.preventDefault();

        _this.props.form.validateFields(function (err, fieldsValue) {
          if (err) {
            return;
          } // Should format date value before submit.


          var rangeValue = fieldsValue['range-picker'];
          var rangeTimeValue = fieldsValue['range-time-picker'];

          var values = _extends({}, fieldsValue, {
            'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
            'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
            'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
            'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
            'range-time-picker': [rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'), rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss')],
            'time-picker': fieldsValue['time-picker'].format('HH:mm:ss')
          });

          console.log('Received values of form: ', values);
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TimeRelatedForm, [{
      key: "render",
      value: function render() {
        var getFieldDecorator = this.props.form.getFieldDecorator;
        var formItemLayout = {
          labelCol: {
            xs: {
              span: 24
            },
            sm: {
              span: 8
            }
          },
          wrapperCol: {
            xs: {
              span: 24
            },
            sm: {
              span: 16
            }
          }
        };
        var config = {
          rules: [{
            type: 'object',
            required: true,
            message: 'Please select time!'
          }]
        };
        var rangeConfig = {
          rules: [{
            type: 'array',
            required: true,
            message: 'Please select time!'
          }]
        };
        return React.createElement(
          _antd.Form,
          {
            onSubmit: this.handleSubmit
          },
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "DatePicker"
            }),
            getFieldDecorator('date-picker', config)(React.createElement(_antd.DatePicker, null))
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "DatePicker[showTime]"
            }),
            getFieldDecorator('date-time-picker', config)(React.createElement(_antd.DatePicker, {
              showTime: true,
              format: "YYYY-MM-DD HH:mm:ss"
            }))
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "MonthPicker"
            }),
            getFieldDecorator('month-picker', config)(React.createElement(MonthPicker, null))
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "RangePicker"
            }),
            getFieldDecorator('range-picker', rangeConfig)(React.createElement(RangePicker, null))
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "RangePicker[showTime]"
            }),
            getFieldDecorator('range-time-picker', rangeConfig)(React.createElement(RangePicker, {
              showTime: true,
              format: "YYYY-MM-DD HH:mm:ss"
            }))
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "TimePicker"
            }),
            getFieldDecorator('time-picker', config)(React.createElement(_antd.TimePicker, null))
          ),
          React.createElement(
            FormItem,
            {
              wrapperCol: {
                xs: {
                  span: 24,
                  offset: 0
                },
                sm: {
                  span: 16,
                  offset: 8
                }
              }
            },
            React.createElement(
              _antd.Button,
              {
                type: "primary",
                htmlType: "submit"
              },
              "Submit"
            )
          )
        );
      }
    }]);

    return TimeRelatedForm;
  }(React.Component);

  var WrappedTimeRelatedForm = _antd.Form.create()(TimeRelatedForm);

  return React.createElement(WrappedTimeRelatedForm, null);
}
};

/***/ }),

/***/ 2148:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "以上演示没有出现的表单控件对应的校验演示。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Demostration for validataion configuration for form controls which are not show in the above demos."
      ]
    ]
  },
  "meta": {
    "order": 14,
    "title": {
      "zh-CN": "校验其他组件",
      "en-US": "Other Form Controls"
    },
    "filename": "components/form/demo/validate-other.md",
    "id": "components-form-demo-validate-other"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>\n  Form<span class=\"token punctuation\">,</span> Select<span class=\"token punctuation\">,</span> InputNumber<span class=\"token punctuation\">,</span> Switch<span class=\"token punctuation\">,</span> Radio<span class=\"token punctuation\">,</span>\n  Slider<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Upload<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Rate<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">.</span>Option<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> RadioButton <span class=\"token operator\">=</span> Radio<span class=\"token punctuation\">.</span>Button<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> RadioGroup <span class=\"token operator\">=</span> Radio<span class=\"token punctuation\">.</span>Group<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  handleSubmit <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Received values of form: '</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  normFile <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Upload event:'</span><span class=\"token punctuation\">,</span> e<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>Array<span class=\"token punctuation\">.</span><span class=\"token function\">isArray</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> e<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> e <span class=\"token operator\">&amp;&amp;</span> e<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      labelCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">14</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Plain Text\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-form-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>China<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Select\"</span>\n          hasFeedback\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'select'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n              <span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select your country!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please</span> <span class=\"token attr-name\">select</span> <span class=\"token attr-name\">a</span> <span class=\"token attr-name\">country\"</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>china<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>China<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>use<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>U<span class=\"token punctuation\">.</span>S<span class=\"token punctuation\">.</span>A<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Select[multiple]\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'select-multiple'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n              <span class=\"token punctuation\">{</span> required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select your favourite colors!'</span><span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'array'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>multiple<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please</span> <span class=\"token attr-name\">select</span> <span class=\"token attr-name\">favourite</span> <span class=\"token attr-name\">colors\"</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>red<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Red<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>green<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Green<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>blue<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Blue<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"InputNumber\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'input-number'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> initialValue<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InputNumber</span> <span class=\"token attr-name\">min</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">max</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">10</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-form-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span> machines<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Switch\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'switch'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> valuePropName<span class=\"token punctuation\">:</span> <span class=\"token string\">'checked'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Slider\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'slider'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Slider</span> <span class=\"token attr-name\">marks</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> <span class=\"token number\">0</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'A'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'B'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">40</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'C'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">60</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'D'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">80</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'E'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">100</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'F'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Radio.Group\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'radio-group'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RadioGroup</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>a<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>item <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>b<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>item <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>c<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>item <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>RadioGroup</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Radio.Button\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'radio-button'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RadioGroup</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RadioButton</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>a<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>item <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>RadioButton</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RadioButton</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>b<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>item <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>RadioButton</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RadioButton</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>c<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>item <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>RadioButton</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>RadioGroup</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Rate\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'rate'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            initialValue<span class=\"token punctuation\">:</span> <span class=\"token number\">3.5</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Rate</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Upload\"</span>\n          extra<span class=\"token operator\">=</span><span class=\"token string\">\"longgggggggggggggggggggggggggggggggggg\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'upload'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n            valuePropName<span class=\"token punctuation\">:</span> <span class=\"token string\">'fileList'</span><span class=\"token punctuation\">,</span>\n            getValueFromEvent<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>normFile<span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Upload</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>logo<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">action</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/upload.do<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">listType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>picture<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Click to upload\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Dragger\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>dropbox<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'dragger'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n              valuePropName<span class=\"token punctuation\">:</span> <span class=\"token string\">'fileList'</span><span class=\"token punctuation\">,</span>\n              getValueFromEvent<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>normFile<span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Upload.Dragger</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>files<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">action</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/upload.do<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-drag-icon<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n                  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>inbox<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Click or drag file to <span class=\"token keyword\">this</span> area to upload<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-hint<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Support <span class=\"token keyword\">for</span> a single or bulk upload<span class=\"token punctuation\">.</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload.Dragger</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n          <span class=\"token attr-name\">wrapperCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">htmlType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>submit<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Submit<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> WrappedDemo <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>Demo<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>WrappedDemo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var FormItem = _antd.Form.Item;
  var Option = _antd.Select.Option;
  var RadioButton = _antd.Radio.Button;
  var RadioGroup = _antd.Radio.Group;

  var Demo = function (_React$Component) {
    _inherits(Demo, _React$Component);

    function Demo() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Demo);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
        e.preventDefault();

        _this.props.form.validateFields(function (err, values) {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }, _this.normFile = function (e) {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
          return e;
        }

        return e && e.fileList;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
        var getFieldDecorator = this.props.form.getFieldDecorator;
        var formItemLayout = {
          labelCol: {
            span: 6
          },
          wrapperCol: {
            span: 14
          }
        };
        return React.createElement(
          _antd.Form,
          {
            onSubmit: this.handleSubmit
          },
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "Plain Text"
            }),
            React.createElement(
              "span",
              {
                className: "ant-form-text"
              },
              "China"
            )
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "Select",
              hasFeedback: true
            }),
            getFieldDecorator('select', {
              rules: [{
                required: true,
                message: 'Please select your country!'
              }]
            })(React.createElement(
              _antd.Select,
              {
                placeholder: "Please select a country"
              },
              React.createElement(
                Option,
                {
                  value: "china"
                },
                "China"
              ),
              React.createElement(
                Option,
                {
                  value: "use"
                },
                "U.S.A"
              )
            ))
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "Select[multiple]"
            }),
            getFieldDecorator('select-multiple', {
              rules: [{
                required: true,
                message: 'Please select your favourite colors!',
                type: 'array'
              }]
            })(React.createElement(
              _antd.Select,
              {
                mode: "multiple",
                placeholder: "Please select favourite colors"
              },
              React.createElement(
                Option,
                {
                  value: "red"
                },
                "Red"
              ),
              React.createElement(
                Option,
                {
                  value: "green"
                },
                "Green"
              ),
              React.createElement(
                Option,
                {
                  value: "blue"
                },
                "Blue"
              )
            ))
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "InputNumber"
            }),
            getFieldDecorator('input-number', {
              initialValue: 3
            })(React.createElement(_antd.InputNumber, {
              min: 1,
              max: 10
            })),
            React.createElement(
              "span",
              {
                className: "ant-form-text"
              },
              " machines"
            )
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "Switch"
            }),
            getFieldDecorator('switch', {
              valuePropName: 'checked'
            })(React.createElement(_antd.Switch, null))
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "Slider"
            }),
            getFieldDecorator('slider')(React.createElement(_antd.Slider, {
              marks: {
                0: 'A',
                20: 'B',
                40: 'C',
                60: 'D',
                80: 'E',
                100: 'F'
              }
            }))
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "Radio.Group"
            }),
            getFieldDecorator('radio-group')(React.createElement(
              RadioGroup,
              null,
              React.createElement(
                _antd.Radio,
                {
                  value: "a"
                },
                "item 1"
              ),
              React.createElement(
                _antd.Radio,
                {
                  value: "b"
                },
                "item 2"
              ),
              React.createElement(
                _antd.Radio,
                {
                  value: "c"
                },
                "item 3"
              )
            ))
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "Radio.Button"
            }),
            getFieldDecorator('radio-button')(React.createElement(
              RadioGroup,
              null,
              React.createElement(
                RadioButton,
                {
                  value: "a"
                },
                "item 1"
              ),
              React.createElement(
                RadioButton,
                {
                  value: "b"
                },
                "item 2"
              ),
              React.createElement(
                RadioButton,
                {
                  value: "c"
                },
                "item 3"
              )
            ))
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "Rate"
            }),
            getFieldDecorator('rate', {
              initialValue: 3.5
            })(React.createElement(_antd.Rate, null))
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "Upload",
              extra: "longgggggggggggggggggggggggggggggggggg"
            }),
            getFieldDecorator('upload', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile
            })(React.createElement(
              _antd.Upload,
              {
                name: "logo",
                action: "/upload.do",
                listType: "picture"
              },
              React.createElement(
                _antd.Button,
                null,
                React.createElement(_antd.Icon, {
                  type: "upload"
                }),
                " Click to upload"
              )
            ))
          ),
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "Dragger"
            }),
            React.createElement(
              "div",
              {
                className: "dropbox"
              },
              getFieldDecorator('dragger', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile
              })(React.createElement(
                _antd.Upload.Dragger,
                {
                  name: "files",
                  action: "/upload.do"
                },
                React.createElement(
                  "p",
                  {
                    className: "ant-upload-drag-icon"
                  },
                  React.createElement(_antd.Icon, {
                    type: "inbox"
                  })
                ),
                React.createElement(
                  "p",
                  {
                    className: "ant-upload-text"
                  },
                  "Click or drag file to this area to upload"
                ),
                React.createElement(
                  "p",
                  {
                    className: "ant-upload-hint"
                  },
                  "Support for a single or bulk upload."
                )
              ))
            )
          ),
          React.createElement(
            FormItem,
            {
              wrapperCol: {
                span: 12,
                offset: 6
              }
            },
            React.createElement(
              _antd.Button,
              {
                type: "primary",
                htmlType: "submit"
              },
              "Submit"
            )
          )
        );
      }
    }]);

    return Demo;
  }(React.Component);

  var WrappedDemo = _antd.Form.create()(Demo);

  return React.createElement(WrappedDemo, null);
},
  "style": "#components-form-demo-validate-other .dropbox {\n  height: 180px;\n  line-height: 1.5;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-form-demo-validate-other</span> <span class=\"token class\">.dropbox</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">180</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1.5</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ 2149:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "我们提供了 ",
        [
          "code",
          "validateStatus"
        ],
        " ",
        [
          "code",
          "help"
        ],
        " ",
        [
          "code",
          "hasFeedback"
        ],
        " 等属性，你可以不需要使用 ",
        [
          "code",
          "Form.create"
        ],
        " 和 ",
        [
          "code",
          "getFieldDecorator"
        ],
        "，自己定义校验的时机和内容。"
      ],
      [
        "ol",
        [
          "li",
          [
            "p",
            [
              "code",
              "validateStatus"
            ],
            ": 校验状态，可选 'success', 'warning', 'error', 'validating'。"
          ]
        ],
        [
          "li",
          [
            "p",
            [
              "code",
              "hasFeedback"
            ],
            "：用于给输入框添加反馈图标。"
          ]
        ],
        [
          "li",
          [
            "p",
            [
              "code",
              "help"
            ],
            "：设置校验文案。"
          ]
        ]
      ]
    ],
    "en-US": [
      [
        "p",
        "We provide properties like ",
        [
          "code",
          "validateStatus"
        ],
        " ",
        [
          "code",
          "help"
        ],
        " ",
        [
          "code",
          "hasFeedback"
        ],
        " to customize your own validate status and message, without using ",
        [
          "code",
          "Form.create"
        ],
        " and ",
        [
          "code",
          "getFieldDecorator"
        ],
        "."
      ],
      [
        "ol",
        [
          "li",
          [
            "p",
            [
              "code",
              "validateStatus"
            ],
            ": validate status of form components which could be 'success', 'warning', 'error', 'validating'."
          ]
        ],
        [
          "li",
          [
            "p",
            [
              "code",
              "hasFeedback"
            ],
            ": display feed icon of input control"
          ]
        ],
        [
          "li",
          [
            "p",
            [
              "code",
              "help"
            ],
            ": display validate message."
          ]
        ]
      ]
    ]
  },
  "meta": {
    "order": 10,
    "title": {
      "zh-CN": "自定义校验",
      "en-US": "Customized Validation"
    },
    "filename": "components/form/demo/validate-static.md",
    "id": "components-form-demo-validate-static"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> DatePicker<span class=\"token punctuation\">,</span> Col<span class=\"token punctuation\">,</span> TimePicker<span class=\"token punctuation\">,</span> Select<span class=\"token punctuation\">,</span> Cascader<span class=\"token punctuation\">,</span> InputNumber <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">.</span>Option<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  labelCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    xs<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    sm<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    xs<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    sm<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token operator\">&lt;</span>FormItem\n      <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n      label<span class=\"token operator\">=</span><span class=\"token string\">\"Fail\"</span>\n      validateStatus<span class=\"token operator\">=</span><span class=\"token string\">\"error\"</span>\n      help<span class=\"token operator\">=</span><span class=\"token string\">\"Should be combination of numbers &amp; alphabets\"</span>\n    <span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>unavailable</span> <span class=\"token attr-name\">choice\"</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token operator\">&lt;</span>FormItem\n      <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n      label<span class=\"token operator\">=</span><span class=\"token string\">\"Warning\"</span>\n      validateStatus<span class=\"token operator\">=</span><span class=\"token string\">\"warning\"</span>\n    <span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token operator\">&lt;</span>FormItem\n      <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n      label<span class=\"token operator\">=</span><span class=\"token string\">\"Validating\"</span>\n      hasFeedback\n      validateStatus<span class=\"token operator\">=</span><span class=\"token string\">\"validating\"</span>\n      help<span class=\"token operator\">=</span><span class=\"token string\">\"The information is being validated...\"</span>\n    <span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>I<span class=\"token punctuation\">'</span>m</span> <span class=\"token attr-name\">the</span> <span class=\"token attr-name\">content</span> <span class=\"token attr-name\">is</span> <span class=\"token attr-name\">being</span> <span class=\"token attr-name\">validated\"</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>validating<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token operator\">&lt;</span>FormItem\n      <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n      label<span class=\"token operator\">=</span><span class=\"token string\">\"Success\"</span>\n      hasFeedback\n      validateStatus<span class=\"token operator\">=</span><span class=\"token string\">\"success\"</span>\n    <span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>I<span class=\"token punctuation\">'</span>m</span> <span class=\"token attr-name\">the</span> <span class=\"token attr-name\">content\"</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token operator\">&lt;</span>FormItem\n      <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n      label<span class=\"token operator\">=</span><span class=\"token string\">\"Warning\"</span>\n      hasFeedback\n      validateStatus<span class=\"token operator\">=</span><span class=\"token string\">\"warning\"</span>\n    <span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token operator\">&lt;</span>FormItem\n      <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n      label<span class=\"token operator\">=</span><span class=\"token string\">\"Fail\"</span>\n      hasFeedback\n      validateStatus<span class=\"token operator\">=</span><span class=\"token string\">\"error\"</span>\n      help<span class=\"token operator\">=</span><span class=\"token string\">\"Should be combination of numbers &amp; alphabets\"</span>\n    <span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>unavailable</span> <span class=\"token attr-name\">choice\"</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token operator\">&lt;</span>FormItem\n      <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n      label<span class=\"token operator\">=</span><span class=\"token string\">\"Success\"</span>\n      hasFeedback\n      validateStatus<span class=\"token operator\">=</span><span class=\"token string\">\"success\"</span>\n    <span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token operator\">&lt;</span>FormItem\n      <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n      label<span class=\"token operator\">=</span><span class=\"token string\">\"Warning\"</span>\n      hasFeedback\n      validateStatus<span class=\"token operator\">=</span><span class=\"token string\">\"warning\"</span>\n    <span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TimePicker</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token operator\">&lt;</span>FormItem\n      <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n      label<span class=\"token operator\">=</span><span class=\"token string\">\"Error\"</span>\n      hasFeedback\n      validateStatus<span class=\"token operator\">=</span><span class=\"token string\">\"error\"</span>\n    <span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Option <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Option <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Option <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token operator\">&lt;</span>FormItem\n      <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n      label<span class=\"token operator\">=</span><span class=\"token string\">\"Validating\"</span>\n      hasFeedback\n      validateStatus<span class=\"token operator\">=</span><span class=\"token string\">\"validating\"</span>\n      help<span class=\"token operator\">=</span><span class=\"token string\">\"The information is being validated...\"</span>\n    <span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Cascader</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'1'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span>\n      <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>inline<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">{...formItemLayout}</span>\n    <span class=\"token punctuation\">></span>\n      <span class=\"token attr-name\">&lt;Col</span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">11</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span>\n        <span class=\"token attr-name\">&lt;FormItem</span> <span class=\"token attr-name\">validateStatus</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">help</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please</span> <span class=\"token attr-name\">select</span> <span class=\"token attr-name\">the</span> <span class=\"token attr-name\">correct</span> <span class=\"token attr-name\">date\"</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">2</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> display<span class=\"token punctuation\">:</span> <span class=\"token string\">'inline-block'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span><span class=\"token punctuation\">,</span> textAlign<span class=\"token punctuation\">:</span> <span class=\"token string\">'center'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token operator\">-</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">11</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token operator\">&lt;</span>FormItem\n      <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n      label<span class=\"token operator\">=</span><span class=\"token string\">\"Success\"</span>\n      hasFeedback\n      validateStatus<span class=\"token operator\">=</span><span class=\"token string\">\"success\"</span>\n    <span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InputNumber</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _antd = __webpack_require__(30);

  var FormItem = _antd.Form.Item;
  var Option = _antd.Select.Option;
  var formItemLayout = {
    labelCol: {
      xs: {
        span: 24
      },
      sm: {
        span: 5
      }
    },
    wrapperCol: {
      xs: {
        span: 24
      },
      sm: {
        span: 12
      }
    }
  };
  return React.createElement(
    _antd.Form,
    null,
    React.createElement(
      FormItem,
      _extends({}, formItemLayout, {
        label: "Fail",
        validateStatus: "error",
        help: "Should be combination of numbers & alphabets"
      }),
      React.createElement(_antd.Input, {
        placeholder: "unavailable choice",
        id: "error"
      })
    ),
    React.createElement(
      FormItem,
      _extends({}, formItemLayout, {
        label: "Warning",
        validateStatus: "warning"
      }),
      React.createElement(_antd.Input, {
        placeholder: "Warning",
        id: "warning"
      })
    ),
    React.createElement(
      FormItem,
      _extends({}, formItemLayout, {
        label: "Validating",
        hasFeedback: true,
        validateStatus: "validating",
        help: "The information is being validated..."
      }),
      React.createElement(_antd.Input, {
        placeholder: "I'm the content is being validated",
        id: "validating"
      })
    ),
    React.createElement(
      FormItem,
      _extends({}, formItemLayout, {
        label: "Success",
        hasFeedback: true,
        validateStatus: "success"
      }),
      React.createElement(_antd.Input, {
        placeholder: "I'm the content",
        id: "success"
      })
    ),
    React.createElement(
      FormItem,
      _extends({}, formItemLayout, {
        label: "Warning",
        hasFeedback: true,
        validateStatus: "warning"
      }),
      React.createElement(_antd.Input, {
        placeholder: "Warning",
        id: "warning"
      })
    ),
    React.createElement(
      FormItem,
      _extends({}, formItemLayout, {
        label: "Fail",
        hasFeedback: true,
        validateStatus: "error",
        help: "Should be combination of numbers & alphabets"
      }),
      React.createElement(_antd.Input, {
        placeholder: "unavailable choice",
        id: "error"
      })
    ),
    React.createElement(
      FormItem,
      _extends({}, formItemLayout, {
        label: "Success",
        hasFeedback: true,
        validateStatus: "success"
      }),
      React.createElement(_antd.DatePicker, {
        style: {
          width: '100%'
        }
      })
    ),
    React.createElement(
      FormItem,
      _extends({}, formItemLayout, {
        label: "Warning",
        hasFeedback: true,
        validateStatus: "warning"
      }),
      React.createElement(_antd.TimePicker, {
        style: {
          width: '100%'
        }
      })
    ),
    React.createElement(
      FormItem,
      _extends({}, formItemLayout, {
        label: "Error",
        hasFeedback: true,
        validateStatus: "error"
      }),
      React.createElement(
        _antd.Select,
        {
          defaultValue: "1"
        },
        React.createElement(
          Option,
          {
            value: "1"
          },
          "Option 1"
        ),
        React.createElement(
          Option,
          {
            value: "2"
          },
          "Option 2"
        ),
        React.createElement(
          Option,
          {
            value: "3"
          },
          "Option 3"
        )
      )
    ),
    React.createElement(
      FormItem,
      _extends({}, formItemLayout, {
        label: "Validating",
        hasFeedback: true,
        validateStatus: "validating",
        help: "The information is being validated..."
      }),
      React.createElement(_antd.Cascader, {
        defaultValue: ['1'],
        options: []
      })
    ),
    React.createElement(
      FormItem,
      _extends({
        label: "inline"
      }, formItemLayout),
      React.createElement(
        _antd.Col,
        {
          span: 11
        },
        React.createElement(
          FormItem,
          {
            validateStatus: "error",
            help: "Please select the correct date"
          },
          React.createElement(_antd.DatePicker, null)
        )
      ),
      React.createElement(
        _antd.Col,
        {
          span: 2
        },
        React.createElement(
          "span",
          {
            style: {
              display: 'inline-block',
              width: '100%',
              textAlign: 'center'
            }
          },
          "-"
        )
      ),
      React.createElement(
        _antd.Col,
        {
          span: 11
        },
        React.createElement(
          FormItem,
          null,
          React.createElement(_antd.DatePicker, null)
        )
      )
    ),
    React.createElement(
      FormItem,
      _extends({}, formItemLayout, {
        label: "Success",
        hasFeedback: true,
        validateStatus: "success"
      }),
      React.createElement(_antd.InputNumber, {
        style: {
          width: '100%'
        }
      })
    )
  );
}
};

/***/ }),

/***/ 2150:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "使用 ",
        [
          "code",
          "Form.create"
        ],
        " 处理后的表单具有自动收集数据并校验的功能，但如果您不需要这个功能，或者默认的行为无法满足业务需求，可以选择不使用 ",
        [
          "code",
          "Form.create"
        ],
        " 并自行处理数据。"
      ]
    ],
    "en-US": [
      [
        "p",
        [
          "code",
          "Form.create"
        ],
        " will collect and validate form data automatically. But if you don't need this feature or the default behaviour cannot satisfy your business, you can drop ",
        [
          "code",
          "Form.create"
        ],
        " and handle form data manually."
      ]
    ]
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
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> InputNumber <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">validatePrimeNumber</span><span class=\"token punctuation\">(</span>number<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>number <span class=\"token operator\">===</span> <span class=\"token number\">11</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      validateStatus<span class=\"token punctuation\">:</span> <span class=\"token string\">'success'</span><span class=\"token punctuation\">,</span>\n      errorMsg<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n    validateStatus<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span>\n    errorMsg<span class=\"token punctuation\">:</span> <span class=\"token string\">'The prime between 8 and 12 is 11!'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">RawForm</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    number<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n      value<span class=\"token punctuation\">:</span> <span class=\"token number\">11</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleNumberChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      number<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token operator\">...</span><span class=\"token function\">validatePrimeNumber</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> formItemLayout <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      labelCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">7</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      wrapperCol<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> number <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>number<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> tips <span class=\"token operator\">=</span> <span class=\"token string\">'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.'</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>formItemLayout<span class=\"token punctuation\">}</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Prime between 8 &amp; 12\"</span>\n          validateStatus<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>number<span class=\"token punctuation\">.</span>validateStatus<span class=\"token punctuation\">}</span>\n          help<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>number<span class=\"token punctuation\">.</span>errorMsg <span class=\"token operator\">||</span> tips<span class=\"token punctuation\">}</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InputNumber</span>\n            <span class=\"token attr-name\">min</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">8</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">max</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">12</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>number<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleNumberChange<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RawForm</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var FormItem = _antd.Form.Item;

  function validatePrimeNumber(number) {
    if (number === 11) {
      return {
        validateStatus: 'success',
        errorMsg: null
      };
    }

    return {
      validateStatus: 'error',
      errorMsg: 'The prime between 8 and 12 is 11!'
    };
  }

  var RawForm = function (_React$Component) {
    _inherits(RawForm, _React$Component);

    function RawForm() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, RawForm);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RawForm.__proto__ || Object.getPrototypeOf(RawForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        number: {
          value: 11
        }
      }, _this.handleNumberChange = function (value) {
        _this.setState({
          number: _extends({}, validatePrimeNumber(value), {
            value: value
          })
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RawForm, [{
      key: "render",
      value: function render() {
        var formItemLayout = {
          labelCol: {
            span: 7
          },
          wrapperCol: {
            span: 12
          }
        };
        var number = this.state.number;
        var tips = 'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.';
        return React.createElement(
          _antd.Form,
          null,
          React.createElement(
            FormItem,
            _extends({}, formItemLayout, {
              label: "Prime between 8 & 12",
              validateStatus: number.validateStatus,
              help: number.errorMsg || tips
            }),
            React.createElement(_antd.InputNumber, {
              min: 8,
              max: 12,
              value: number.value,
              onChange: this.handleNumberChange
            })
          )
        );
      }
    }]);

    return RawForm;
  }(React.Component);

  return React.createElement(RawForm, null);
}
};

/***/ })

});