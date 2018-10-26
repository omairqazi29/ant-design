webpackJsonp([36],{

/***/ 1895:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'advanced': __webpack_require__(2489),
    'basic': __webpack_require__(2490),
    'custom-item': __webpack_require__(2491),
    'large-data': __webpack_require__(2492),
    'search': __webpack_require__(2493),
}

/***/ }),

/***/ 2489:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "穿梭框高级用法，可配置操作文案，可定制宽高，可对底部进行自定义渲染。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Advanced Usage of Transfer."
      ],
      [
        "p",
        "You can customize the labels of the transfer buttons, the width and height of the columns, and what should be displayed in the footer."
      ]
    ]
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Transfer<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    mockData<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    targetKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">getMock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  getMock <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> targetKeys <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> mockData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">20</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n        description<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`description of content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n        chosen<span class=\"token punctuation\">:</span> Math<span class=\"token punctuation\">.</span><span class=\"token function\">random</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">*</span> <span class=\"token number\">2</span> <span class=\"token operator\">></span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>chosen<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        targetKeys<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      mockData<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> mockData<span class=\"token punctuation\">,</span> targetKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>targetKeys<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> targetKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  renderFooter <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span>\n        <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> float<span class=\"token punctuation\">:</span> <span class=\"token string\">'right'</span><span class=\"token punctuation\">,</span> margin<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>getMock<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        reload\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Transfer</span>\n        <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>mockData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">showSearch</span>\n        <span class=\"token attr-name\">listStyle</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n          width<span class=\"token punctuation\">:</span> <span class=\"token number\">250</span><span class=\"token punctuation\">,</span>\n          height<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">operations</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'to right'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'to left'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">targetKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>targetKeys<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">render</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>item<span class=\"token punctuation\">.</span>title<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">-</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>item<span class=\"token punctuation\">.</span>description<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">footer</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>renderFooter<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

  var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, App);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        mockData: [],
        targetKeys: []
      }, _this.getMock = function () {
        var targetKeys = [];
        var mockData = [];

        for (var i = 0; i < 20; i++) {
          var data = {
            key: i.toString(),
            title: "content" + (i + 1),
            description: "description of content" + (i + 1),
            chosen: Math.random() * 2 > 1
          };

          if (data.chosen) {
            targetKeys.push(data.key);
          }

          mockData.push(data);
        }

        _this.setState({
          mockData: mockData,
          targetKeys: targetKeys
        });
      }, _this.handleChange = function (targetKeys) {
        _this.setState({
          targetKeys: targetKeys
        });
      }, _this.renderFooter = function () {
        return React.createElement(
          _antd.Button,
          {
            size: "small",
            style: {
              float: 'right',
              margin: 5
            },
            onClick: _this.getMock
          },
          "reload"
        );
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.getMock();
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(_antd.Transfer, {
          dataSource: this.state.mockData,
          showSearch: true,
          listStyle: {
            width: 250,
            height: 300
          },
          operations: ['to right', 'to left'],
          targetKeys: this.state.targetKeys,
          onChange: this.handleChange,
          render: function render(item) {
            return item.title + "-" + item.description;
          },
          footer: this.renderFooter
        });
      }
    }]);

    return App;
  }(React.Component);

  return React.createElement(App, null);
}
};

/***/ }),

/***/ 2490:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "最基本的用法，展示了 ",
        [
          "code",
          "dataSource"
        ],
        "、",
        [
          "code",
          "targetKeys"
        ],
        "、每行的渲染函数 ",
        [
          "code",
          "render"
        ],
        " 以及回调函数 ",
        [
          "code",
          "onChange"
        ],
        " ",
        [
          "code",
          "onSelectChange"
        ],
        " ",
        [
          "code",
          "onScroll"
        ],
        " 的用法。"
      ]
    ],
    "en-US": [
      [
        "p",
        "The most basic usage of ",
        [
          "code",
          "Transfer"
        ],
        " involves providing the source data and target keys arrays, plus the rendering and some callback functions."
      ]
    ]
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Transfer<span class=\"token punctuation\">,</span> Switch <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> mockData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">20</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  mockData<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`description of content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n    disabled<span class=\"token punctuation\">:</span> i <span class=\"token operator\">%</span> <span class=\"token number\">3</span> <span class=\"token operator\">&lt;</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> oriTargetKeys <span class=\"token operator\">=</span> mockData\n  <span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">+</span>item<span class=\"token punctuation\">.</span>key <span class=\"token operator\">%</span> <span class=\"token number\">3</span> <span class=\"token operator\">></span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    targetKeys<span class=\"token punctuation\">:</span> oriTargetKeys<span class=\"token punctuation\">,</span>\n    selectedKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    disabled<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>nextTargetKeys<span class=\"token punctuation\">,</span> direction<span class=\"token punctuation\">,</span> moveKeys<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> targetKeys<span class=\"token punctuation\">:</span> nextTargetKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'targetKeys: '</span><span class=\"token punctuation\">,</span> nextTargetKeys<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'direction: '</span><span class=\"token punctuation\">,</span> direction<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'moveKeys: '</span><span class=\"token punctuation\">,</span> moveKeys<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleSelectChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>sourceSelectedKeys<span class=\"token punctuation\">,</span> targetSelectedKeys<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> selectedKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>sourceSelectedKeys<span class=\"token punctuation\">,</span> <span class=\"token operator\">...</span>targetSelectedKeys<span class=\"token punctuation\">]</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'sourceSelectedKeys: '</span><span class=\"token punctuation\">,</span> sourceSelectedKeys<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'targetSelectedKeys: '</span><span class=\"token punctuation\">,</span> targetSelectedKeys<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleScroll <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>direction<span class=\"token punctuation\">,</span> e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'direction:'</span><span class=\"token punctuation\">,</span> direction<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'target:'</span><span class=\"token punctuation\">,</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleDisable <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>disabled<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> disabled <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> targetKeys<span class=\"token punctuation\">,</span> selectedKeys<span class=\"token punctuation\">,</span> disabled <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Transfer</span>\n          <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>mockData<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">titles</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'Source'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Target'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">targetKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>targetKeys<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">selectedKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>selectedKeys<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onSelectChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSelectChange<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onScroll</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleScroll<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">render</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">disabled</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>disabled<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">unCheckedChildren</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>disabled<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">checkedChildren</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>disabled<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>disabled<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleDisable<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var mockData = [];

  for (var i = 0; i < 20; i++) {
    mockData.push({
      key: i.toString(),
      title: "content" + (i + 1),
      description: "description of content" + (i + 1),
      disabled: i % 3 < 1
    });
  }

  var oriTargetKeys = mockData.filter(function (item) {
    return +item.key % 3 > 1;
  }).map(function (item) {
    return item.key;
  });

  var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, App);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        targetKeys: oriTargetKeys,
        selectedKeys: [],
        disabled: false
      }, _this.handleChange = function (nextTargetKeys, direction, moveKeys) {
        _this.setState({
          targetKeys: nextTargetKeys
        });

        console.log('targetKeys: ', nextTargetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
      }, _this.handleSelectChange = function (sourceSelectedKeys, targetSelectedKeys) {
        _this.setState({
          selectedKeys: [].concat(_toConsumableArray(sourceSelectedKeys), _toConsumableArray(targetSelectedKeys))
        });

        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        console.log('targetSelectedKeys: ', targetSelectedKeys);
      }, _this.handleScroll = function (direction, e) {
        console.log('direction:', direction);
        console.log('target:', e.target);
      }, _this.handleDisable = function (disabled) {
        _this.setState({
          disabled: disabled
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
      key: "render",
      value: function render() {
        var _state = this.state,
            targetKeys = _state.targetKeys,
            selectedKeys = _state.selectedKeys,
            disabled = _state.disabled;
        return React.createElement(
          "div",
          null,
          React.createElement(_antd.Transfer, {
            dataSource: mockData,
            titles: ['Source', 'Target'],
            targetKeys: targetKeys,
            selectedKeys: selectedKeys,
            onChange: this.handleChange,
            onSelectChange: this.handleSelectChange,
            onScroll: this.handleScroll,
            render: function render(item) {
              return item.title;
            },
            disabled: disabled
          }),
          React.createElement(_antd.Switch, {
            unCheckedChildren: "disabled",
            checkedChildren: "disabled",
            checked: disabled,
            onChange: this.handleDisable
          })
        );
      }
    }]);

    return App;
  }(React.Component);

  return React.createElement(App, null);
}
};

/***/ }),

/***/ 2491:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "自定义渲染每一个 Transfer Item，可用于渲染复杂数据。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Custom each Transfer Item, and in this way you can render a complex datasource."
      ]
    ]
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Transfer <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    mockData<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    targetKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">getMock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  getMock <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> targetKeys <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> mockData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">20</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n        description<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`description of content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n        chosen<span class=\"token punctuation\">:</span> Math<span class=\"token punctuation\">.</span><span class=\"token function\">random</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">*</span> <span class=\"token number\">2</span> <span class=\"token operator\">></span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>chosen<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        targetKeys<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      mockData<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> mockData<span class=\"token punctuation\">,</span> targetKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>targetKeys<span class=\"token punctuation\">,</span> direction<span class=\"token punctuation\">,</span> moveKeys<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>targetKeys<span class=\"token punctuation\">,</span> direction<span class=\"token punctuation\">,</span> moveKeys<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> targetKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  renderItem <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> customLabel <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>custom-item<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span> <span class=\"token operator\">-</span> <span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>description<span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      label<span class=\"token punctuation\">:</span> customLabel<span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// for displayed item</span>\n      value<span class=\"token punctuation\">:</span> item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// for title and filter matching</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Transfer</span>\n        <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>mockData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">listStyle</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n          width<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span><span class=\"token punctuation\">,</span>\n          height<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">targetKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>targetKeys<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">render</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>renderItem<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

  var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, App);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        mockData: [],
        targetKeys: []
      }, _this.getMock = function () {
        var targetKeys = [];
        var mockData = [];

        for (var i = 0; i < 20; i++) {
          var data = {
            key: i.toString(),
            title: "content" + (i + 1),
            description: "description of content" + (i + 1),
            chosen: Math.random() * 2 > 1
          };

          if (data.chosen) {
            targetKeys.push(data.key);
          }

          mockData.push(data);
        }

        _this.setState({
          mockData: mockData,
          targetKeys: targetKeys
        });
      }, _this.handleChange = function (targetKeys, direction, moveKeys) {
        console.log(targetKeys, direction, moveKeys);

        _this.setState({
          targetKeys: targetKeys
        });
      }, _this.renderItem = function (item) {
        var customLabel = React.createElement(
          "span",
          {
            className: "custom-item"
          },
          item.title,
          " - ",
          item.description
        );
        return {
          label: customLabel,
          // for displayed item
          value: item.title // for title and filter matching

        };
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.getMock();
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(_antd.Transfer, {
          dataSource: this.state.mockData,
          listStyle: {
            width: 300,
            height: 300
          },
          targetKeys: this.state.targetKeys,
          onChange: this.handleChange,
          render: this.renderItem
        });
      }
    }]);

    return App;
  }(React.Component);

  return React.createElement(App, null);
}
};

/***/ }),

/***/ 2492:
/***/ (function(module, exports) {

module.exports = {
  "meta": {

  }
};

/***/ }),

/***/ 2493:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "带搜索框的穿梭框，可以自定义搜索函数。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Transfer with a search box."
      ]
    ]
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Transfer <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    mockData<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    targetKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">getMock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  getMock <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> targetKeys <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> mockData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">20</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n        description<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`description of content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n        chosen<span class=\"token punctuation\">:</span> Math<span class=\"token punctuation\">.</span><span class=\"token function\">random</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">*</span> <span class=\"token number\">2</span> <span class=\"token operator\">></span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>chosen<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        targetKeys<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      mockData<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> mockData<span class=\"token punctuation\">,</span> targetKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  filterOption <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">,</span> option<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> option<span class=\"token punctuation\">.</span>description<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">></span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>targetKeys<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> targetKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Transfer</span>\n        <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>mockData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">showSearch</span>\n        <span class=\"token attr-name\">filterOption</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>filterOption<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">targetKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>targetKeys<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">render</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

  var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, App);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        mockData: [],
        targetKeys: []
      }, _this.getMock = function () {
        var targetKeys = [];
        var mockData = [];

        for (var i = 0; i < 20; i++) {
          var data = {
            key: i.toString(),
            title: "content" + (i + 1),
            description: "description of content" + (i + 1),
            chosen: Math.random() * 2 > 1
          };

          if (data.chosen) {
            targetKeys.push(data.key);
          }

          mockData.push(data);
        }

        _this.setState({
          mockData: mockData,
          targetKeys: targetKeys
        });
      }, _this.filterOption = function (inputValue, option) {
        return option.description.indexOf(inputValue) > -1;
      }, _this.handleChange = function (targetKeys) {
        _this.setState({
          targetKeys: targetKeys
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.getMock();
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(_antd.Transfer, {
          dataSource: this.state.mockData,
          showSearch: true,
          filterOption: this.filterOption,
          targetKeys: this.state.targetKeys,
          onChange: this.handleChange,
          render: function render(item) {
            return item.title;
          }
        });
      }
    }]);

    return App;
  }(React.Component);

  return React.createElement(App, null);
}
};

/***/ })

});