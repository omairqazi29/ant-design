webpackJsonp([19,202],{

/***/ 892:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(138);

	var _slider = __webpack_require__(137);

	var _slider2 = _interopRequireDefault(_slider);

	var _style4 = __webpack_require__(78);

	var _switch = __webpack_require__(77);

	var _switch2 = _interopRequireDefault(_switch);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "基本滑动条。当 ", ["code", "range"], " 为 ", ["code", "true"], " 时，渲染为双滑块。当 ", ["code", "disabled"], " 为 ", ["code", "true"], " 时，滑块处于不可用状态。"]],
	    "en-US": [["p", "Basic slider. When ", ["code", "range"], " is ", ["code", "true"], ", display as dual thumb mode. When ", ["code", "disable"], " is ", ["code", "true"], ", the slider will not be interactable."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/slider/demo/basic.md",
	    "id": "components-slider-demo-basic"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Slider<span class=\"token punctuation\" >,</span> Switch <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >Demo</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >React<span class=\"token punctuation\" >.</span>Component</span> <span class=\"token punctuation\" >{</span>\n  state <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n    disabled<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\n  handleDisabledChange <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span>disabled<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> disabled <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> disabled <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n        Disabled<span class=\"token punctuation\" >:</span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Switch</span> <span class=\"token attr-name\" >checked</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>disabled<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleDisabledChange<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Slider</span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >30</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >disabled</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>disabled<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Slider</span> <span class=\"token attr-name\" >range</span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token number\" >20</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >disabled</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>disabled<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Demo</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Demo = function (_React$Component) {
	      (0, _inherits3.default)(Demo, _React$Component);

	      function Demo() {
	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, Demo);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { disabled: false }, _this.handleDisabledChange = function (disabled) {
	          _this.setState({ disabled: disabled });
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      }

	      Demo.prototype.render = function render() {
	        var disabled = this.state.disabled;
	        return _react2.default.createElement(
	          'div',
	          null,
	          'Disabled: ',
	          _react2.default.createElement(_switch2.default, { checked: disabled, onChange: this.handleDisabledChange }),
	          _react2.default.createElement(_slider2.default, { defaultValue: 30, disabled: disabled }),
	          _react2.default.createElement(_slider2.default, { range: true, defaultValue: [20, 50], disabled: disabled })
	        );
	      };

	      return Demo;
	    }(_react2.default.Component);

	    return _react2.default.createElement(Demo, null);
	  }
	};

/***/ },

/***/ 893:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(138);

	var _slider = __webpack_require__(137);

	var _slider2 = _interopRequireDefault(_slider);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "当 Slider 的值发生改变时，会触发 ", ["code", "onChange"], " 事件，并把改变后的值作为参数传入。在 ", ["code", "onmouseup"], " 时，会触发 ", ["code", "onAfterChange"], " 事件，并把当前值作为参数传入。"]],
	    "en-US": [["p", "The ", ["code", "onChange"], " callback function will fire when the user changes the slider's value.\nThe ", ["code", "onAfterChange"], " callback function will fire when ", ["code", "onmouseup"], " fired."]]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "事件",
	      "en-US": "Event"
	    },
	    "filename": "components/slider/demo/event.md",
	    "id": "components-slider-demo-event"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Slider <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'onChange: '</span><span class=\"token punctuation\" >,</span> value<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >onAfterChange</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'onAfterChange: '</span><span class=\"token punctuation\" >,</span> value<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Slider</span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >30</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>onChange<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onAfterChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>onAfterChange<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Slider</span> <span class=\"token attr-name\" >range</span> <span class=\"token attr-name\" >step</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >10</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token number\" >20</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>onChange<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onAfterChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>onAfterChange<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n  mountNode\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    function onChange(value) {
	      console.log('onChange: ', value);
	    }function onAfterChange(value) {
	      console.log('onAfterChange: ', value);
	    }return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_slider2.default, { defaultValue: 30, onChange: onChange, onAfterChange: onAfterChange }),
	      _react2.default.createElement(_slider2.default, { range: true, step: 10, defaultValue: [20, 50], onChange: onChange, onAfterChange: onAfterChange })
	    );
	  }
	};

/***/ },

/***/ 894:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(138);

	var _slider = __webpack_require__(137);

	var _slider2 = _interopRequireDefault(_slider);

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style4 = __webpack_require__(14);

	var _icon = __webpack_require__(10);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "滑块左右可以设置图标来表达业务含义。"]],
	    "en-US": [["p", "You can add an icon beside the slider to make it meaningful."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "带 icon 的滑块",
	      "en-US": "Slider with icon"
	    },
	    "filename": "components/slider/demo/icon-slider.md",
	    "id": "components-slider-demo-icon-slider"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Slider<span class=\"token punctuation\" >,</span> Icon <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> IconSlider <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> max <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>max<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >const</span> min <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>min<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >const</span> mid <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>max <span class=\"token operator\" >-</span> min<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >/</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >toFixed</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >5</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      preIconClass<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>value <span class=\"token operator\" >>=</span> mid <span class=\"token operator\" >?</span> <span class=\"token string\" >''</span> <span class=\"token punctuation\" >:</span> <span class=\"token string\" >'anticon-highlight'</span><span class=\"token punctuation\" >,</span>\n      nextIconClass<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>value <span class=\"token operator\" >>=</span> mid <span class=\"token operator\" >?</span> <span class=\"token string\" >'anticon-highlight'</span> <span class=\"token punctuation\" >:</span> <span class=\"token string\" >''</span><span class=\"token punctuation\" >,</span>\n      mid<span class=\"token punctuation\" >,</span>\n      sliderValue<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>value<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n\n  <span class=\"token function\" >handleChange</span><span class=\"token punctuation\" >(</span>v<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      preIconClass<span class=\"token punctuation\" >:</span> v <span class=\"token operator\" >>=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>mid <span class=\"token operator\" >?</span> <span class=\"token string\" >''</span> <span class=\"token punctuation\" >:</span> <span class=\"token string\" >'anticon-highlight'</span><span class=\"token punctuation\" >,</span>\n      nextIconClass<span class=\"token punctuation\" >:</span> v <span class=\"token operator\" >>=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>mid <span class=\"token operator\" >?</span> <span class=\"token string\" >'anticon-highlight'</span> <span class=\"token punctuation\" >:</span> <span class=\"token string\" >''</span><span class=\"token punctuation\" >,</span>\n      sliderValue<span class=\"token punctuation\" >:</span> v<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>icon-wrapper<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >className</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>preIconClass<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >type</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>icon<span class=\"token punctuation\" >[</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token operator\" >&lt;</span>Slider <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >}</span> onChange<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleChange<span class=\"token punctuation\" >}</span> value<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>sliderValue<span class=\"token punctuation\" >}</span> <span class=\"token operator\" >/</span><span class=\"token operator\" >></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >className</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>nextIconClass<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >type</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>icon<span class=\"token punctuation\" >[</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>IconSlider</span> <span class=\"token attr-name\" >min</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >max</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >20</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >icon</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token string\" >'frown-o'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'smile-o'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var IconSlider = _react2.default.createClass({
	      displayName: 'IconSlider',
	      getInitialState: function getInitialState() {
	        var max = this.props.max;
	        var min = this.props.min;var mid = ((max - min) / 2).toFixed(5);return { preIconClass: this.props.value >= mid ? '' : 'anticon-highlight', nextIconClass: this.props.value >= mid ? 'anticon-highlight' : '', mid: mid, sliderValue: this.props.value };
	      },
	      handleChange: function handleChange(v) {
	        this.setState({ preIconClass: v >= this.state.mid ? '' : 'anticon-highlight', nextIconClass: v >= this.state.mid ? 'anticon-highlight' : '', sliderValue: v });
	      },
	      render: function render() {
	        return _react2.default.createElement(
	          'div',
	          { className: 'icon-wrapper' },
	          _react2.default.createElement(_icon2.default, { className: this.state.preIconClass, type: this.props.icon[0] }),
	          _react2.default.createElement(_slider2.default, (0, _extends3.default)({}, this.props, { onChange: this.handleChange, value: this.state.sliderValue })),
	          _react2.default.createElement(_icon2.default, { className: this.state.nextIconClass, type: this.props.icon[1] })
	        );
	      }
	    });return _react2.default.createElement(IconSlider, { min: 0, max: 20, value: 0, icon: ['frown-o', 'smile-o'] });
	  },
	  "style": ".icon-wrapper {\n  position: relative;\n  padding: 0px 30px;\n}\n\n.icon-wrapper .anticon {\n  position: absolute;\n  top: -3px;\n  width: 16px;\n  height: 16px;\n  line-height: 1;\n  font-size: 16px;\n  color: #ccc;\n}\n\n.icon-wrapper .anticon:first-child {\n  left: 0;\n}\n\n.icon-wrapper .anticon:last-child {\n  right: 0;\n}\n\n.anticon.anticon-highlight {\n  color: #666;\n}",
	  "highlightedStyle": "<span class=\"token selector\" ><span class=\"token class\" >.icon-wrapper</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >position</span><span class=\"token punctuation\" >:</span> relative<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >padding</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >0</span>px <span class=\"token number\" >30</span>px<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.icon-wrapper</span> <span class=\"token class\" >.anticon</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >position</span><span class=\"token punctuation\" >:</span> absolute<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >top</span><span class=\"token punctuation\" >:</span> -<span class=\"token number\" >3</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >width</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >16</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >height</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >16</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >line-height</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >font-size</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >16</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >color</span><span class=\"token punctuation\" >:</span> <span class=\"token hexcode\" >#ccc</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.icon-wrapper</span> <span class=\"token class\" >.anticon</span><span class=\"token pseudo-class\" >:first-child</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >left</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.icon-wrapper</span> <span class=\"token class\" >.anticon</span><span class=\"token pseudo-class\" >:last-child</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >right</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.anticon.anticon-highlight</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >color</span><span class=\"token punctuation\" >:</span> <span class=\"token hexcode\" >#666</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>"
	};

/***/ },

/***/ 895:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(46);

	var _row = __webpack_require__(45);

	var _row2 = _interopRequireDefault(_row);

	var _style6 = __webpack_require__(133);

	var _inputNumber = __webpack_require__(132);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _style7 = __webpack_require__(43);

	var _col = __webpack_require__(41);

	var _col2 = _interopRequireDefault(_col);

	var _style8 = __webpack_require__(138);

	var _slider = __webpack_require__(137);

	var _slider2 = _interopRequireDefault(_slider);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "和 ", ["a", {
	      "title": null,
	      "href": "/components/input-number/"
	    }, "数字输入框"], " 组件保持同步。"]],
	    "en-US": [["p", "Synchronize with ", ["a", {
	      "title": null,
	      "href": "/components/input-number/"
	    }, "InptNumber"], " component."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "带输入框的滑块",
	      "en-US": "Slider with InputNumber"
	    },
	    "filename": "components/slider/demo/input-number.md",
	    "id": "components-slider-demo-input-number"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Slider<span class=\"token punctuation\" >,</span> InputNumber<span class=\"token punctuation\" >,</span> Row<span class=\"token punctuation\" >,</span> Col <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> IntegerStep <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      inputValue<span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      inputValue<span class=\"token punctuation\" >:</span> value<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Row</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >12</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Slider</span> <span class=\"token attr-name\" >min</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >max</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >20</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>onChange<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>inputValue<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>InputNumber</span> <span class=\"token attr-name\" >min</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >max</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >20</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> marginLeft<span class=\"token punctuation\" >:</span> <span class=\"token number\" >16</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>inputValue<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>onChange<span class=\"token punctuation\" >}</span></span>\n          <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Row</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> DecimalStep <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      inputValue<span class=\"token punctuation\" >:</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      inputValue<span class=\"token punctuation\" >:</span> value<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Row</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >12</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Slider</span> <span class=\"token attr-name\" >min</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >max</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>onChange<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>inputValue<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >step</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0.01</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>InputNumber</span> <span class=\"token attr-name\" >min</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >max</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> marginLeft<span class=\"token punctuation\" >:</span> <span class=\"token number\" >16</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >step</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >0.01</span><span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>inputValue<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>onChange<span class=\"token punctuation\" >}</span></span>\n          <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Row</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>IntegerStep</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>DecimalStep</span> <span class=\"token punctuation\" >/></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n  mountNode\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var IntegerStep = _react2.default.createClass({
	      displayName: 'IntegerStep',
	      getInitialState: function getInitialState() {
	        return { inputValue: 1 };
	      },
	      onChange: function onChange(value) {
	        this.setState({ inputValue: value
	        });
	      },
	      render: function render() {
	        return _react2.default.createElement(
	          _row2.default,
	          null,
	          _react2.default.createElement(
	            _col2.default,
	            { span: 12 },
	            _react2.default.createElement(_slider2.default, { min: 1, max: 20, onChange: this.onChange, value: this.state.inputValue })
	          ),
	          _react2.default.createElement(
	            _col2.default,
	            { span: 4 },
	            _react2.default.createElement(_inputNumber2.default, { min: 1, max: 20, style: { marginLeft: 16 }, value: this.state.inputValue, onChange: this.onChange })
	          )
	        );
	      }
	    });var DecimalStep = _react2.default.createClass({
	      displayName: 'DecimalStep',
	      getInitialState: function getInitialState() {
	        return { inputValue: 0 };
	      },
	      onChange: function onChange(value) {
	        this.setState({
	          inputValue: value });
	      },
	      render: function render() {
	        return _react2.default.createElement(
	          _row2.default,
	          null,
	          _react2.default.createElement(
	            _col2.default,
	            { span: 12 },
	            _react2.default.createElement(_slider2.default, { min: 0, max: 1, onChange: this.onChange, value: this.state.inputValue, step: 0.01 })
	          ),
	          _react2.default.createElement(
	            _col2.default,
	            { span: 4 },
	            _react2.default.createElement(_inputNumber2.default, { min: 0, max: 1, style: {
	                marginLeft: 16 }, step: 0.01, value: this.state.inputValue, onChange: this.onChange })
	          )
	        );
	      }
	    });return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(IntegerStep, null),
	      _react2.default.createElement(DecimalStep, null)
	    );
	  }
	};

/***/ },

/***/ 896:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(138);

	var _slider = __webpack_require__(137);

	var _slider2 = _interopRequireDefault(_slider);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "使用 ", ["code", "marks"], " 属性标注分段式滑块，使用 ", ["code", "value"], " / ", ["code", "defaultValue"], " 指定滑块位置。当 ", ["code", "included=false"], " 时，表明不同标记间为并列关系。当 ", ["code", "step=null"], " 时，Slider 的可选值仅有 ", ["code", "marks"], " 标出来的部分。"]],
	    "en-US": [["p", "Using ", ["code", "marks"], " property to mark a graduated slider, use ", ["code", "value"], " or ", ["code", "defaultValue"], " to specify the position of thumb.\nWhen ", ["code", "included"], " is false, means that different thumbs are coordinative.\nwhen ", ["code", "step"], " is null, users can only slide the thumbs onto marks."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "带标签的滑块",
	      "en-US": "Graduated slider"
	    },
	    "filename": "components/slider/demo/mark.md",
	    "id": "components-slider-demo-mark"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Slider <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> marks <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token number\" >0</span><span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0°C'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token number\" >26</span><span class=\"token punctuation\" >:</span> <span class=\"token string\" >'26°C'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token number\" >37</span><span class=\"token punctuation\" >:</span> <span class=\"token string\" >'37°C'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token number\" >100</span><span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n    style<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n      color<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'red'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>strong</span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >100</span>°C<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>strong</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>code</span><span class=\"token punctuation\" >></span></span>included<span class=\"token operator\" >=</span><span class=\"token boolean\" >true</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>code</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Slider</span> <span class=\"token attr-name\" >marks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>marks<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >37</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Slider</span> <span class=\"token attr-name\" >range</span> <span class=\"token attr-name\" >marks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>marks<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token number\" >26</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >37</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>code</span><span class=\"token punctuation\" >></span></span>included<span class=\"token operator\" >=</span><span class=\"token boolean\" >false</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>code</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Slider</span> <span class=\"token attr-name\" >marks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>marks<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >included</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token boolean\" >false</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >37</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>code</span><span class=\"token punctuation\" >></span></span>marks <span class=\"token operator\" >&amp;&amp;</span> step<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>code</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Slider</span> <span class=\"token attr-name\" >marks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>marks<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >step</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >10</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >37</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>code</span><span class=\"token punctuation\" >></span></span>step<span class=\"token operator\" >=</span><span class=\"token keyword\" >null</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>code</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Slider</span> <span class=\"token attr-name\" >marks</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>marks<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >step</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >null</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >37</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n  mountNode\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var marks = { 0: '0°C', 26: '26°C', 37: '37°C', 100: { style: { color: 'red' }, label: _react2.default.createElement(
	          'strong',
	          null,
	          '100\xB0C'
	        ) } };return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'included=true'
	        )
	      ),
	      _react2.default.createElement(_slider2.default, { marks: marks, defaultValue: 37 }),
	      _react2.default.createElement(_slider2.default, { range: true, marks: marks, defaultValue: [26, 37] }),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'included=false'
	        )
	      ),
	      _react2.default.createElement(_slider2.default, { marks: marks, included: false, defaultValue: 37 }),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'marks && step'
	        )
	      ),
	      _react2.default.createElement(_slider2.default, { marks: marks, step: 10, defaultValue: 37 }),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'step=null'
	        )
	      ),
	      _react2.default.createElement(_slider2.default, { marks: marks, step: null, defaultValue: 37 })
	    );
	  }
	};

/***/ },

/***/ 897:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(138);

	var _slider = __webpack_require__(137);

	var _slider2 = _interopRequireDefault(_slider);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "使用 ", ["code", "tipFormatter"], " 可以格式化 ", ["code", "Tooltip"], " 的内容，设置 ", ["code", "tipFormatter={null}"], "，则隐藏 ", ["code", "Tooltip"], "。"]],
	    "en-US": [["p", "Use ", ["code", "tipFormatter"], " to format content of ", ["code", "Toolip"], ". If ", ["code", "tipFormatter"], " is null, hide it."]]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "自定义提示",
	      "en-US": "Customerize tooltip"
	    },
	    "filename": "components/slider/demo/tip-formatter.md",
	    "id": "components-slider-demo-tip-formatter"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Slider <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >formatter</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token keyword\" >return</span> <span class=\"token template-string\" ><span class=\"token string\" >`</span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>value<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >%`</span></span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Slider</span> <span class=\"token attr-name\" >tipFormatter</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>formatter<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Slider</span> <span class=\"token attr-name\" >tipFormatter</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >null</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n  mountNode\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    function formatter(value) {
	      return value + '%';
	    }
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_slider2.default, { tipFormatter: formatter }),
	      _react2.default.createElement(_slider2.default, { tipFormatter: null })
	    );
	  }
	};

/***/ },

/***/ 1219:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(892),
	    'event': __webpack_require__(893),
	    'icon-slider': __webpack_require__(894),
	    'input-number': __webpack_require__(895),
	    'mark': __webpack_require__(896),
	    'tip-formatter': __webpack_require__(897),
	}

/***/ }

});