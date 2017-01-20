webpackJsonp([12,210],{

/***/ 1064:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "在 TimePicker 选择框底部显示自定义的内容。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Render addon contents to timepicker panel's bottom."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "附加内容",
	      "en-US": "Addon"
	    },
	    "filename": "components/time-picker/demo/addon.md",
	    "id": "components-time-picker-demo-addon"
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
	      "highlighted": "import { TimePicker<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>TimePicker\n    addon<span class=\"token operator\">=</span>{panel <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Button size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> onClick<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> panel<span class=\"token punctuation\">.</span><span class=\"token function\">close</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>}<span class=\"token operator\">></span>\n        Ok\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span>}\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(_antd.TimePicker, {
	    addon: function addon(panel) {
	      return React.createElement(
	        _antd.Button,
	        {
	          size: "small",
	          type: "primary",
	          onClick: function onClick() {
	            return panel.close();
	          }
	        },
	        "Ok"
	      );
	    }
	  });
	}
	};

/***/ },

/***/ 1065:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "点击 TimePicker，然后可以在浮层中选择或者输入某一时间。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Click ",
	        [
	          "code",
	          "TimePicker"
	        ],
	        ", and then we could select or input a time in panel."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/time-picker/demo/basic.md",
	    "id": "components-time-picker-demo-basic"
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
	      "highlighted": "import { TimePicker } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>time<span class=\"token punctuation\">,</span> timeString<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>time<span class=\"token punctuation\">,</span> timeString<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>TimePicker onChange<span class=\"token operator\">=</span>{onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function onChange(time, timeString) {
	    console.log(time, timeString);
	  }

	  return React.createElement(_antd.TimePicker, {
	    onChange: onChange
	  });
	}
	};

/***/ },

/***/ 1066:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "可以使用 ",
	        [
	          "code",
	          "disabledHours"
	        ],
	        " ",
	        [
	          "code",
	          "disabledMinutes"
	        ],
	        " ",
	        [
	          "code",
	          "disabledSeconds"
	        ],
	        " 组合禁止用户选择某个时间，配合 ",
	        [
	          "code",
	          "hideDisabledOptions"
	        ],
	        " 可以直接把不可选择的项隐藏。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Make part of time unselectable by ",
	        [
	          "code",
	          "disabledHours"
	        ],
	        " ",
	        [
	          "code",
	          "disabledMinutes"
	        ],
	        " ",
	        [
	          "code",
	          "disabledSeconds"
	        ],
	        ", and we even can hide those unselectable options by ",
	        [
	          "code",
	          "hideDisabledOptions"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "禁止选项",
	      "en-US": "Disabled Time"
	    },
	    "filename": "components/time-picker/demo/disable-options.md",
	    "id": "components-time-picker-demo-disable-options"
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
	      "highlighted": "import { TimePicker } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">range</span><span class=\"token punctuation\">(</span>start<span class=\"token punctuation\">,</span> end<span class=\"token punctuation\">)</span> {\n  <span class=\"token keyword\">const</span> result <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> start<span class=\"token comment\" spellcheck=\"true\">; i &lt; end; i++) {</span>\n    result<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>i<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  return result<span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">disabledHours</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n  <span class=\"token keyword\">const</span> hours <span class=\"token operator\">=</span> <span class=\"token function\">range</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">60</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  hours<span class=\"token punctuation\">.</span><span class=\"token function\">splice</span><span class=\"token punctuation\">(</span><span class=\"token number\">20</span><span class=\"token punctuation\">,</span> <span class=\"token number\">4</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  return hours<span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">disabledMinutes</span><span class=\"token punctuation\">(</span>h<span class=\"token punctuation\">)</span> {\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>h <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token number\">20</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token function\">range</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">31</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  } <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>h <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token number\">23</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token function\">range</span><span class=\"token punctuation\">(</span><span class=\"token number\">30</span><span class=\"token punctuation\">,</span> <span class=\"token number\">60</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  return <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TimePicker\n      disabledHours<span class=\"token operator\">=</span>{disabledHours}\n      disabledMinutes<span class=\"token operator\">=</span>{disabledMinutes}\n      placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Just Disabled\"</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TimePicker\n      disabledHours<span class=\"token operator\">=</span>{disabledHours}\n      disabledMinutes<span class=\"token operator\">=</span>{disabledMinutes}\n      hideDisabledOptions\n      placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Hide Directly\"</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function range(start, end) {
	    var result = [];

	    for (var i = start; i < end; i++) {
	      result.push(i);
	    }

	    return result;
	  }

	  function disabledHours() {
	    var hours = range(0, 60);
	    hours.splice(20, 4);
	    return hours;
	  }

	  function disabledMinutes(h) {
	    if (h === 20) {
	      return range(0, 31);
	    } else if (h === 23) {
	      return range(30, 60);
	    }

	    return [];
	  }

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.TimePicker, {
	      disabledHours: disabledHours,
	      disabledMinutes: disabledMinutes,
	      placeholder: "Just Disabled"
	    }),
	    React.createElement(_antd.TimePicker, {
	      disabledHours: disabledHours,
	      disabledMinutes: disabledMinutes,
	      hideDisabledOptions: true,
	      placeholder: "Hide Directly"
	    })
	  );
	},
	  "style": "\n#components-time-picker-demo-disable-options .ant-time-picker {\n  width: 120px;\n}\n"
	};

/***/ },

/***/ 1067:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "禁用时间选择。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "A disabled state of the ",
	        [
	          "code",
	          "TimePicker"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "禁用",
	      "en-US": "disabled"
	    },
	    "filename": "components/time-picker/demo/disabled.md",
	    "id": "components-time-picker-demo-disabled"
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
	      "highlighted": "import { TimePicker } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport moment from <span class=\"token string\">'moment'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>TimePicker defaultValue<span class=\"token operator\">=</span>{<span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'12:08:23'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'HH:mm:ss'</span><span class=\"token punctuation\">)</span>} disabled <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var _moment = __webpack_require__(25);

	  var _moment2 = _interopRequireDefault(_moment);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	  return React.createElement(_antd.TimePicker, {
	    defaultValue: (0, _moment2.default)('12:08:23', 'HH:mm:ss'),
	    disabled: true
	  });
	}
	};

/***/ },

/***/ 1068:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "TimePicker 浮层中的列会随着 ",
	        [
	          "code",
	          "format"
	        ],
	        " 变化，当略去 ",
	        [
	          "code",
	          "format"
	        ],
	        " 中的某部分时，浮层中对应的列也会消失。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "While part of ",
	        [
	          "code",
	          "format"
	        ],
	        " is omitted, the corresponding column in panel will disappear, too."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "选择时分",
	      "en-US": "Hour and minute"
	    },
	    "filename": "components/time-picker/demo/hide-column.md",
	    "id": "components-time-picker-demo-hide-column"
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
	      "highlighted": "import { TimePicker } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport moment from <span class=\"token string\">'moment'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> format <span class=\"token operator\">=</span> <span class=\"token string\">'HH:mm'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>TimePicker defaultValue<span class=\"token operator\">=</span>{<span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'12:08'</span><span class=\"token punctuation\">,</span> format<span class=\"token punctuation\">)</span>} format<span class=\"token operator\">=</span>{format} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var _moment = __webpack_require__(25);

	  var _moment2 = _interopRequireDefault(_moment);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	  var format = 'HH:mm';
	  return React.createElement(_antd.TimePicker, {
	    defaultValue: (0, _moment2.default)('12:08', format),
	    format: format
	  });
	}
	};

/***/ },

/***/ 1069:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "三种大小的输入框，大的用在表单中，中的为默认。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The input box comes in three sizes. large is used in the form, while the medium size is the default."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "三种大小",
	      "en-US": "Three Sizes"
	    },
	    "filename": "components/time-picker/demo/size.md",
	    "id": "components-time-picker-demo-size"
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
	      "highlighted": "import { TimePicker } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport moment from <span class=\"token string\">'moment'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TimePicker defaultValue<span class=\"token operator\">=</span>{<span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'12:08:23'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'HH:mm:ss'</span><span class=\"token punctuation\">)</span>} size<span class=\"token operator\">=</span><span class=\"token string\">\"large\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TimePicker defaultValue<span class=\"token operator\">=</span>{<span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'12:08:23'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'HH:mm:ss'</span><span class=\"token punctuation\">)</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TimePicker defaultValue<span class=\"token operator\">=</span>{<span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'12:08:23'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'HH:mm:ss'</span><span class=\"token punctuation\">)</span>} size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var _moment = __webpack_require__(25);

	  var _moment2 = _interopRequireDefault(_moment);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.TimePicker, {
	      defaultValue: (0, _moment2.default)('12:08:23', 'HH:mm:ss'),
	      size: "large"
	    }),
	    React.createElement(_antd.TimePicker, {
	      defaultValue: (0, _moment2.default)('12:08:23', 'HH:mm:ss')
	    }),
	    React.createElement(_antd.TimePicker, {
	      defaultValue: (0, _moment2.default)('12:08:23', 'HH:mm:ss'),
	      size: "small"
	    })
	  );
	}
	};

/***/ },

/***/ 1070:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "value 和 onChange 需要配合使用。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        [
	          "code",
	          "value"
	        ],
	        " and ",
	        [
	          "code",
	          "onChange"
	        ],
	        " should be used together,"
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "受控组件",
	      "en-US": "Under Control"
	    },
	    "filename": "components/time-picker/demo/value.md",
	    "id": "components-time-picker-demo-value"
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
	      "highlighted": "import { TimePicker } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nclass Demo extends React<span class=\"token punctuation\">.</span>Component {\n  state <span class=\"token operator\">=</span> {\n    value<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n  onChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>time<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>time<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ value<span class=\"token punctuation\">:</span> time }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token operator\">&lt;</span>TimePicker value<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Demo <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
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
	        value: null
	      }, _this.onChange = function (time) {
	        console.log(time);

	        _this.setState({
	          value: time
	        });
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    Demo.prototype.render = function render() {
	      return React.createElement(_antd.TimePicker, {
	        value: this.state.value,
	        onChange: this.onChange
	      });
	    };

	    return Demo;
	  }(React.Component);

	  return React.createElement(Demo, null);
	}
	};

/***/ },

/***/ 1236:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'addon': __webpack_require__(1064),
	    'basic': __webpack_require__(1065),
	    'disable-options': __webpack_require__(1066),
	    'disabled': __webpack_require__(1067),
	    'hide-column': __webpack_require__(1068),
	    'size': __webpack_require__(1069),
	    'value': __webpack_require__(1070),
	}

/***/ }

});