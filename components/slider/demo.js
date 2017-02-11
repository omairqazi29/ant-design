webpackJsonp([16,211],{

/***/ 998:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "基本滑动条。当 ",
	        [
	          "code",
	          "range"
	        ],
	        " 为 ",
	        [
	          "code",
	          "true"
	        ],
	        " 时，渲染为双滑块。当 ",
	        [
	          "code",
	          "disabled"
	        ],
	        " 为 ",
	        [
	          "code",
	          "true"
	        ],
	        " 时，滑块处于不可用状态。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Basic slider. When ",
	        [
	          "code",
	          "range"
	        ],
	        " is ",
	        [
	          "code",
	          "true"
	        ],
	        ", display as dual thumb mode. When ",
	        [
	          "code",
	          "disable"
	        ],
	        " is ",
	        [
	          "code",
	          "true"
	        ],
	        ", the slider will not be interactable."
	      ]
	    ]
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
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
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
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Slider<span class=\"token punctuation\">,</span> <span class=\"token keyword\">Switch</span> } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nclass Demo extends React<span class=\"token punctuation\">.</span>Component {\n  state <span class=\"token operator\">=</span> {\n    disabled<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  handleDisabledChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>disabled<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ disabled }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { disabled } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Slider defaultValue<span class=\"token operator\">=</span>{<span class=\"token number\">30</span>} disabled<span class=\"token operator\">=</span>{disabled} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Slider range defaultValue<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token number\">20</span><span class=\"token punctuation\">,</span> <span class=\"token number\">50</span><span class=\"token punctuation\">]</span>} disabled<span class=\"token operator\">=</span>{disabled} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        Disabled<span class=\"token punctuation\">:</span> <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Switch</span> size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span> checked<span class=\"token operator\">=</span>{disabled} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleDisabledChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Demo <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	  var Demo = function (_React$Component) {
	    _inherits(Demo, _React$Component);

	    function Demo() {
	      var _temp, _this, _ret;

	      _classCallCheck(this, Demo);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	        disabled: false
	      }, _this.handleDisabledChange = function (disabled) {
	        _this.setState({
	          disabled: disabled
	        });
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    Demo.prototype.render = function render() {
	      var disabled = this.state.disabled;
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(_antd.Slider, {
	          defaultValue: 30,
	          disabled: disabled
	        }),
	        React.createElement(_antd.Slider, {
	          range: true,
	          defaultValue: [20, 50],
	          disabled: disabled
	        }),
	        "Disabled: ",
	        React.createElement(_antd.Switch, {
	          size: "small",
	          checked: disabled,
	          onChange: this.handleDisabledChange
	        })
	      );
	    };

	    return Demo;
	  }(React.Component);

	  return React.createElement(Demo, null);
	},
	  "style": "\n.code-box-demo .ant-slider {\n  margin-bottom: 16px;\n}\n"
	};

/***/ },

/***/ 999:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "当 Slider 的值发生改变时，会触发 ",
	        [
	          "code",
	          "onChange"
	        ],
	        " 事件，并把改变后的值作为参数传入。在 ",
	        [
	          "code",
	          "onmouseup"
	        ],
	        " 时，会触发 ",
	        [
	          "code",
	          "onAfterChange"
	        ],
	        " 事件，并把当前值作为参数传入。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The ",
	        [
	          "code",
	          "onChange"
	        ],
	        " callback function will fire when the user changes the slider's value.\nThe ",
	        [
	          "code",
	          "onAfterChange"
	        ],
	        " callback function will fire when ",
	        [
	          "code",
	          "onmouseup"
	        ],
	        " fired."
	      ]
	    ]
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
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
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
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Slider } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'onChange: '</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">onAfterChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'onAfterChange: '</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Slider defaultValue<span class=\"token operator\">=</span>{<span class=\"token number\">30</span>} onChange<span class=\"token operator\">=</span>{onChange} onAfterChange<span class=\"token operator\">=</span>{onAfterChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Slider range <span class=\"token keyword\">step</span><span class=\"token operator\">=</span>{<span class=\"token number\">10</span>} defaultValue<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token number\">20</span><span class=\"token punctuation\">,</span> <span class=\"token number\">50</span><span class=\"token punctuation\">]</span>} onChange<span class=\"token operator\">=</span>{onChange} onAfterChange<span class=\"token operator\">=</span>{onAfterChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function onChange(value) {
	    console.log('onChange: ', value);
	  }

	  function onAfterChange(value) {
	    console.log('onAfterChange: ', value);
	  }

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.Slider, {
	      defaultValue: 30,
	      onChange: onChange,
	      onAfterChange: onAfterChange
	    }),
	    React.createElement(_antd.Slider, {
	      range: true,
	      step: 10,
	      defaultValue: [20, 50],
	      onChange: onChange,
	      onAfterChange: onAfterChange
	    })
	  );
	}
	};

/***/ },

/***/ 1000:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "滑块左右可以设置图标来表达业务含义。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "You can add an icon beside the slider to make it meaningful."
	      ]
	    ]
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
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
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
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Slider<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> IconSlider <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> max <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>max<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> min <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>min<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> mid <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>max <span class=\"token operator\">-</span> min<span class=\"token punctuation\">)</span> <span class=\"token operator\">/</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">toFixed</span><span class=\"token punctuation\">(</span><span class=\"token number\">5</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return {\n      preIconClass<span class=\"token punctuation\">:</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>value <span class=\"token operator\">>=</span> mid <span class=\"token operator\">?</span> <span class=\"token string\">''</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'anticon-highlight'</span><span class=\"token punctuation\">,</span>\n      nextIconClass<span class=\"token punctuation\">:</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>value <span class=\"token operator\">>=</span> mid <span class=\"token operator\">?</span> <span class=\"token string\">'anticon-highlight'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n      mid<span class=\"token punctuation\">,</span>\n      sliderValue<span class=\"token punctuation\">:</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>v<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      preIconClass<span class=\"token punctuation\">:</span> v <span class=\"token operator\">>=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>mid <span class=\"token operator\">?</span> <span class=\"token string\">''</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'anticon-highlight'</span><span class=\"token punctuation\">,</span>\n      nextIconClass<span class=\"token punctuation\">:</span> v <span class=\"token operator\">>=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>mid <span class=\"token operator\">?</span> <span class=\"token string\">'anticon-highlight'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n      sliderValue<span class=\"token punctuation\">:</span> v<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"icon-wrapper\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Icon className<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>preIconClass} type<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>icon<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Slider {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>this<span class=\"token punctuation\">.</span>props} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleChange} value<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>sliderValue} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Icon className<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>nextIconClass} type<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>icon<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>IconSlider min<span class=\"token operator\">=</span>{<span class=\"token number\">0</span>} max<span class=\"token operator\">=</span>{<span class=\"token number\">20</span>} value<span class=\"token operator\">=</span>{<span class=\"token number\">0</span>} icon<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'frown-o'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'smile-o'</span><span class=\"token punctuation\">]</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	  var _antd = __webpack_require__(3);

	  var IconSlider = React.createClass({
	    displayName: "IconSlider",
	    getInitialState: function getInitialState() {
	      var max = this.props.max;
	      var min = this.props.min;
	      var mid = ((max - min) / 2).toFixed(5);
	      return {
	        preIconClass: this.props.value >= mid ? '' : 'anticon-highlight',
	        nextIconClass: this.props.value >= mid ? 'anticon-highlight' : '',
	        mid: mid,
	        sliderValue: this.props.value
	      };
	    },
	    handleChange: function handleChange(v) {
	      this.setState({
	        preIconClass: v >= this.state.mid ? '' : 'anticon-highlight',
	        nextIconClass: v >= this.state.mid ? 'anticon-highlight' : '',
	        sliderValue: v
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        "div",
	        {
	          className: "icon-wrapper"
	        },
	        React.createElement(_antd.Icon, {
	          className: this.state.preIconClass,
	          type: this.props.icon[0]
	        }),
	        React.createElement(_antd.Slider, _extends({}, this.props, {
	          onChange: this.handleChange,
	          value: this.state.sliderValue
	        })),
	        React.createElement(_antd.Icon, {
	          className: this.state.nextIconClass,
	          type: this.props.icon[1]
	        })
	      );
	    }
	  });
	  return React.createElement(IconSlider, {
	    min: 0,
	    max: 20,
	    value: 0,
	    icon: ['frown-o', 'smile-o']
	  });
	},
	  "style": ".icon-wrapper {\n  position: relative;\n  padding: 0px 30px;\n}\n\n.icon-wrapper .anticon {\n  position: absolute;\n  top: -3px;\n  width: 16px;\n  height: 16px;\n  line-height: 1;\n  font-size: 16px;\n  color: @disabled-color;\n}\n\n.icon-wrapper .anticon:first-child {\n  left: 0;\n}\n\n.icon-wrapper .anticon:last-child {\n  right: 0;\n}\n\n.anticon.anticon-highlight {\n  color: #666;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.icon-wrapper</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span>px <span class=\"token number\">30</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.icon-wrapper</span> <span class=\"token class\">.anticon</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">top</span><span class=\"token punctuation\">:</span> -<span class=\"token number\">3</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token atrule\"><span class=\"token rule\">@disabled-color</span><span class=\"token punctuation\">;</span></span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.icon-wrapper</span> <span class=\"token class\">.anticon</span><span class=\"token pseudo-class\">:first-child</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">left</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.icon-wrapper</span> <span class=\"token class\">.anticon</span><span class=\"token pseudo-class\">:last-child</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.anticon.anticon-highlight</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#666</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1001:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "和 ",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "/components/input-number/"
	          },
	          "数字输入框"
	        ],
	        " 组件保持同步。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Synchronize with ",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "/components/input-number/"
	          },
	          "InptNumber"
	        ],
	        " component."
	      ]
	    ]
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
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
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
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Slider<span class=\"token punctuation\">,</span> InputNumber<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">,</span> Col } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> IntegerStep <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      inputValue<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      inputValue<span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Row<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">12</span>}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Slider min<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>} max<span class=\"token operator\">=</span>{<span class=\"token number\">20</span>} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onChange} value<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>inputValue} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>InputNumber min<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>} max<span class=\"token operator\">=</span>{<span class=\"token number\">20</span>} style<span class=\"token operator\">=</span>{{ marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> }}\n            value<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>inputValue} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onChange}\n          <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> DecimalStep <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      inputValue<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      inputValue<span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Row<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">12</span>}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Slider min<span class=\"token operator\">=</span>{<span class=\"token number\">0</span>} max<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onChange} value<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>inputValue} <span class=\"token keyword\">step</span><span class=\"token operator\">=</span>{<span class=\"token number\">0.01</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>InputNumber min<span class=\"token operator\">=</span>{<span class=\"token number\">0</span>} max<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>} style<span class=\"token operator\">=</span>{{ marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> }} <span class=\"token keyword\">step</span><span class=\"token operator\">=</span>{<span class=\"token number\">0.01</span>}\n            value<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>inputValue} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onChange}\n          <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>IntegerStep <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>DecimalStep <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var IntegerStep = React.createClass({
	    displayName: "IntegerStep",
	    getInitialState: function getInitialState() {
	      return {
	        inputValue: 1
	      };
	    },
	    onChange: function onChange(value) {
	      this.setState({
	        inputValue: value
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        _antd.Row,
	        null,
	        React.createElement(
	          _antd.Col,
	          {
	            span: 12
	          },
	          React.createElement(_antd.Slider, {
	            min: 1,
	            max: 20,
	            onChange: this.onChange,
	            value: this.state.inputValue
	          })
	        ),
	        React.createElement(
	          _antd.Col,
	          {
	            span: 4
	          },
	          React.createElement(_antd.InputNumber, {
	            min: 1,
	            max: 20,
	            style: {
	              marginLeft: 16
	            },
	            value: this.state.inputValue,
	            onChange: this.onChange
	          })
	        )
	      );
	    }
	  });
	  var DecimalStep = React.createClass({
	    displayName: "DecimalStep",
	    getInitialState: function getInitialState() {
	      return {
	        inputValue: 0
	      };
	    },
	    onChange: function onChange(value) {
	      this.setState({
	        inputValue: value
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        _antd.Row,
	        null,
	        React.createElement(
	          _antd.Col,
	          {
	            span: 12
	          },
	          React.createElement(_antd.Slider, {
	            min: 0,
	            max: 1,
	            onChange: this.onChange,
	            value: this.state.inputValue,
	            step: 0.01
	          })
	        ),
	        React.createElement(
	          _antd.Col,
	          {
	            span: 4
	          },
	          React.createElement(_antd.InputNumber, {
	            min: 0,
	            max: 1,
	            style: {
	              marginLeft: 16
	            },
	            step: 0.01,
	            value: this.state.inputValue,
	            onChange: this.onChange
	          })
	        )
	      );
	    }
	  });
	  return React.createElement(
	    "div",
	    null,
	    React.createElement(IntegerStep, null),
	    React.createElement(DecimalStep, null)
	  );
	}
	};

/***/ },

/***/ 1002:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "使用 ",
	        [
	          "code",
	          "marks"
	        ],
	        " 属性标注分段式滑块，使用 ",
	        [
	          "code",
	          "value"
	        ],
	        " / ",
	        [
	          "code",
	          "defaultValue"
	        ],
	        " 指定滑块位置。当 ",
	        [
	          "code",
	          "included=false"
	        ],
	        " 时，表明不同标记间为并列关系。当 ",
	        [
	          "code",
	          "step=null"
	        ],
	        " 时，Slider 的可选值仅有 ",
	        [
	          "code",
	          "marks"
	        ],
	        " 标出来的部分。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Using ",
	        [
	          "code",
	          "marks"
	        ],
	        " property to mark a graduated slider, use ",
	        [
	          "code",
	          "value"
	        ],
	        " or ",
	        [
	          "code",
	          "defaultValue"
	        ],
	        " to specify the position of thumb.\nWhen ",
	        [
	          "code",
	          "included"
	        ],
	        " is false, means that different thumbs are coordinative.\nwhen ",
	        [
	          "code",
	          "step"
	        ],
	        " is null, users can only slide the thumbs onto marks."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "带标签的滑块",
	      "en-US": "Graduated slider"
	    },
	    "filename": "components/slider/demo/mark.md",
	    "id": "components-slider-demo-mark"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
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
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Slider } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> marks <span class=\"token operator\">=</span> {\n  <span class=\"token number\">0</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'0°C'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token number\">26</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'26°C'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token number\">37</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'37°C'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token number\">100</span><span class=\"token punctuation\">:</span> {\n    style<span class=\"token punctuation\">:</span> {\n      color<span class=\"token punctuation\">:</span> <span class=\"token string\">'#f50'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token operator\">&lt;</span>strong<span class=\"token operator\">></span><span class=\"token number\">100</span>°C<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>strong<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>h4<span class=\"token operator\">></span>included<span class=\"token operator\">=</span><span class=\"token boolean\">true</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h4<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Slider marks<span class=\"token operator\">=</span>{marks} defaultValue<span class=\"token operator\">=</span>{<span class=\"token number\">37</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Slider range marks<span class=\"token operator\">=</span>{marks} defaultValue<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token number\">26</span><span class=\"token punctuation\">,</span> <span class=\"token number\">37</span><span class=\"token punctuation\">]</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n\n    <span class=\"token operator\">&lt;</span>h4<span class=\"token operator\">></span>included<span class=\"token operator\">=</span><span class=\"token boolean\">false</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h4<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Slider marks<span class=\"token operator\">=</span>{marks} included<span class=\"token operator\">=</span>{<span class=\"token boolean\">false</span>} defaultValue<span class=\"token operator\">=</span>{<span class=\"token number\">37</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n\n    <span class=\"token operator\">&lt;</span>h4<span class=\"token operator\">></span>marks <span class=\"token operator\">&amp;</span> <span class=\"token keyword\">step</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h4<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Slider marks<span class=\"token operator\">=</span>{marks} <span class=\"token keyword\">step</span><span class=\"token operator\">=</span>{<span class=\"token number\">10</span>} defaultValue<span class=\"token operator\">=</span>{<span class=\"token number\">37</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n\n    <span class=\"token operator\">&lt;</span>h4<span class=\"token operator\">></span><span class=\"token keyword\">step</span><span class=\"token operator\">=</span><span class=\"token keyword\">null</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h4<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Slider marks<span class=\"token operator\">=</span>{marks} <span class=\"token keyword\">step</span><span class=\"token operator\">=</span>{<span class=\"token keyword\">null</span>} defaultValue<span class=\"token operator\">=</span>{<span class=\"token number\">37</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var marks = {
	    0: '0°C',
	    26: '26°C',
	    37: '37°C',
	    100: {
	      style: {
	        color: '#f50'
	      },
	      label: React.createElement(
	        "strong",
	        null,
	        "100°C"
	      )
	    }
	  };
	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      "h4",
	      null,
	      "included=true"
	    ),
	    React.createElement(_antd.Slider, {
	      marks: marks,
	      defaultValue: 37
	    }),
	    React.createElement(_antd.Slider, {
	      range: true,
	      marks: marks,
	      defaultValue: [26, 37]
	    }),
	    React.createElement(
	      "h4",
	      null,
	      "included=false"
	    ),
	    React.createElement(_antd.Slider, {
	      marks: marks,
	      included: false,
	      defaultValue: 37
	    }),
	    React.createElement(
	      "h4",
	      null,
	      "marks & step"
	    ),
	    React.createElement(_antd.Slider, {
	      marks: marks,
	      step: 10,
	      defaultValue: 37
	    }),
	    React.createElement(
	      "h4",
	      null,
	      "step=null"
	    ),
	    React.createElement(_antd.Slider, {
	      marks: marks,
	      step: null,
	      defaultValue: 37
	    })
	  );
	},
	  "style": "\n#components-slider-demo-mark h4 {\n  margin: 0 0 16px;\n}\n#components-slider-demo-mark .ant-slider-with-marks {\n  margin-bottom: 44px;\n}\n"
	};

/***/ },

/***/ 1003:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "使用 ",
	        [
	          "code",
	          "tipFormatter"
	        ],
	        " 可以格式化 ",
	        [
	          "code",
	          "Tooltip"
	        ],
	        " 的内容，设置 ",
	        [
	          "code",
	          "tipFormatter={null}"
	        ],
	        "，则隐藏 ",
	        [
	          "code",
	          "Tooltip"
	        ],
	        "。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Use ",
	        [
	          "code",
	          "tipFormatter"
	        ],
	        " to format content of ",
	        [
	          "code",
	          "Toolip"
	        ],
	        ". If ",
	        [
	          "code",
	          "tipFormatter"
	        ],
	        " is null, hide it."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "自定义提示",
	      "en-US": "Customerize tooltip"
	    },
	    "filename": "components/slider/demo/tip-formatter.md",
	    "id": "components-slider-demo-tip-formatter"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
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
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Slider } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">formatter</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  return `${value}%`<span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Slider tipFormatter<span class=\"token operator\">=</span>{formatter} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Slider tipFormatter<span class=\"token operator\">=</span>{<span class=\"token keyword\">null</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function formatter(value) {
	    return value + "%";
	  }

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.Slider, {
	      tipFormatter: formatter
	    }),
	    React.createElement(_antd.Slider, {
	      tipFormatter: null
	    })
	  );
	}
	};

/***/ },

/***/ 1004:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "垂直方向的 Slider。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The vertical Slider."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "垂直",
	      "en-US": "Vertical"
	    },
	    "filename": "components/slider/demo/vertical.md",
	    "id": "components-slider-demo-vertical"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
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
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Slider } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> style <span class=\"token operator\">=</span> {\n  float<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span><span class=\"token punctuation\">,</span>\n  height<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span><span class=\"token punctuation\">,</span>\n  marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">70</span><span class=\"token punctuation\">,</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> marks <span class=\"token operator\">=</span> {\n  <span class=\"token number\">0</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'0°C'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token number\">26</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'26°C'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token number\">37</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'37°C'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token number\">100</span><span class=\"token punctuation\">:</span> {\n    style<span class=\"token punctuation\">:</span> {\n      color<span class=\"token punctuation\">:</span> <span class=\"token string\">'#f50'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token operator\">&lt;</span>strong<span class=\"token operator\">></span><span class=\"token number\">100</span>°C<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>strong<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ height<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span> }}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{style}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Slider vertical defaultValue<span class=\"token operator\">=</span>{<span class=\"token number\">30</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{style}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Slider vertical range <span class=\"token keyword\">step</span><span class=\"token operator\">=</span>{<span class=\"token number\">10</span>} defaultValue<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token number\">20</span><span class=\"token punctuation\">,</span> <span class=\"token number\">50</span><span class=\"token punctuation\">]</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{style}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Slider vertical range marks<span class=\"token operator\">=</span>{marks} defaultValue<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token number\">26</span><span class=\"token punctuation\">,</span> <span class=\"token number\">37</span><span class=\"token punctuation\">]</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var style = {
	    float: 'left',
	    height: 300,
	    marginLeft: 70
	  };
	  var marks = {
	    0: '0°C',
	    26: '26°C',
	    37: '37°C',
	    100: {
	      style: {
	        color: '#f50'
	      },
	      label: React.createElement(
	        "strong",
	        null,
	        "100°C"
	      )
	    }
	  };
	  return React.createElement(
	    "div",
	    {
	      style: {
	        height: 300
	      }
	    },
	    React.createElement(
	      "div",
	      {
	        style: style
	      },
	      React.createElement(_antd.Slider, {
	        vertical: true,
	        defaultValue: 30
	      })
	    ),
	    React.createElement(
	      "div",
	      {
	        style: style
	      },
	      React.createElement(_antd.Slider, {
	        vertical: true,
	        range: true,
	        step: 10,
	        defaultValue: [20, 50]
	      })
	    ),
	    React.createElement(
	      "div",
	      {
	        style: style
	      },
	      React.createElement(_antd.Slider, {
	        vertical: true,
	        range: true,
	        marks: marks,
	        defaultValue: [26, 37]
	      })
	    )
	  );
	}
	};

/***/ },

/***/ 1241:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(998),
	    'event': __webpack_require__(999),
	    'icon-slider': __webpack_require__(1000),
	    'input-number': __webpack_require__(1001),
	    'mark': __webpack_require__(1002),
	    'tip-formatter': __webpack_require__(1003),
	    'vertical': __webpack_require__(1004),
	}

/***/ }

});