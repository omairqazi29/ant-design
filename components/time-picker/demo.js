webpackJsonp([12,209],{

/***/ 975:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(91);

	var _timePicker = __webpack_require__(102);

	var _timePicker2 = _interopRequireDefault(_timePicker);

	var _style4 = __webpack_require__(11);

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "在 TimePicker 选择框底部显示自定义的内容。"]],
	    "en-US": [["p", "Render addon contents to timepicker panel's bottom."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TimePicker<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TimePicker</span>\n    <span class=\"token attr-name\">addon</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>panel <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Button size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> onClick<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> panel<span class=\"token punctuation\">.</span><span class=\"token function\">close</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        Ok\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(_timePicker2.default, { addon: function addon(panel) {
	        return _react2.default.createElement(
	          _button2.default,
	          { size: 'small', type: 'primary', onClick: function onClick() {
	              return panel.close();
	            } },
	          'Ok'
	        );
	      } });
	  }
	};

/***/ },

/***/ 976:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(91);

	var _timePicker = __webpack_require__(102);

	var _timePicker2 = _interopRequireDefault(_timePicker);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "点击 TimePicker，然后可以在浮层中选择或者输入某一时间。"]],
	    "en-US": [["p", "Click ", ["code", "TimePicker"], ", and then we could select or input a time in panel."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TimePicker <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>time<span class=\"token punctuation\">,</span> timeString<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>time<span class=\"token punctuation\">,</span> timeString<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TimePicker</span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    function onChange(time, timeString) {
	      console.log(time, timeString);
	    }return _react2.default.createElement(_timePicker2.default, { onChange: onChange });
	  }
	};

/***/ },

/***/ 977:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(91);

	var _timePicker = __webpack_require__(102);

	var _timePicker2 = _interopRequireDefault(_timePicker);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "可以使用 ", ["code", "disabledHours"], " ", ["code", "disabledMinutes"], " ", ["code", "disabledSeconds"], " 组合禁止用户选择某个时间，配合 ", ["code", "hideDisabledOptions"], " 可以直接把不可选择的项隐藏。"]],
	    "en-US": [["p", "Make part of time unselectable by ", ["code", "disabledHours"], " ", ["code", "disabledMinutes"], " ", ["code", "disabledSeconds"], ", and we even can hide those unselectable options by ", ["code", "hideDisabledOptions"], "."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TimePicker <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">range</span><span class=\"token punctuation\">(</span>start<span class=\"token punctuation\">,</span> end<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> result <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> start<span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> end<span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    result<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>i<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> result<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">disabledHours</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> hours <span class=\"token operator\">=</span> <span class=\"token function\">range</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">60</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  hours<span class=\"token punctuation\">.</span><span class=\"token function\">splice</span><span class=\"token punctuation\">(</span><span class=\"token number\">20</span><span class=\"token punctuation\">,</span> <span class=\"token number\">4</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">return</span> hours<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">disabledMinutes</span><span class=\"token punctuation\">(</span>h<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>h <span class=\"token operator\">===</span> <span class=\"token number\">20</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token function\">range</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">31</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>h <span class=\"token operator\">===</span> <span class=\"token number\">23</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token function\">range</span><span class=\"token punctuation\">(</span><span class=\"token number\">30</span><span class=\"token punctuation\">,</span> <span class=\"token number\">60</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TimePicker</span>\n      <span class=\"token attr-name\">disabledHours</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>disabledHours<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">disabledMinutes</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>disabledMinutes<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Just</span> <span class=\"token attr-name\">Disabled\"</span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TimePicker</span>\n      <span class=\"token attr-name\">disabledHours</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>disabledHours<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">disabledMinutes</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>disabledMinutes<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">hideDisabledOptions</span>\n      <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Hide</span> <span class=\"token attr-name\">Directly\"</span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    function range(start, end) {
	      var result = [];
	      for (var i = start; i < end; i++) {
	        result.push(i);
	      }return result;
	    }function disabledHours() {
	      var hours = range(0, 60);hours.splice(20, 4);return hours;
	    }function disabledMinutes(h) {
	      if (h === 20) {
	        return range(0, 31);
	      } else if (h === 23) {
	        return range(30, 60);
	      }return [];
	    }return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_timePicker2.default, { disabledHours: disabledHours, disabledMinutes: disabledMinutes, placeholder: 'Just Disabled' }),
	      _react2.default.createElement(_timePicker2.default, { disabledHours: disabledHours, disabledMinutes: disabledMinutes, hideDisabledOptions: true, placeholder: 'Hide Directly' })
	    );
	  },
	  "style": "\n#components-time-picker-demo-disable-options .ant-time-picker {\n  width: 120px;\n}\n"
	};

/***/ },

/***/ 978:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(91);

	var _timePicker = __webpack_require__(102);

	var _timePicker2 = _interopRequireDefault(_timePicker);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _moment = __webpack_require__(32);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "禁用时间选择。"]],
	    "en-US": [["p", "A disabled state of the ", ["code", "TimePicker"], "."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TimePicker <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> moment <span class=\"token keyword\">from</span> <span class=\"token string\">'moment'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TimePicker</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'12:08:23'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">disabled</span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(_timePicker2.default, { defaultValue: (0, _moment2.default)('12:08:23', 'HH:mm:ss'), disabled: true });
	  }
	};

/***/ },

/***/ 979:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(91);

	var _timePicker = __webpack_require__(102);

	var _timePicker2 = _interopRequireDefault(_timePicker);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _moment = __webpack_require__(32);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "TimePicker 浮层中的列会随着 ", ["code", "format"], " 变化，当略去 ", ["code", "format"], " 中的某部分时，浮层中对应的列也会消失。"]],
	    "en-US": [["p", "While part of ", ["code", "format"], " is omitted, the corresponding column in panel will disappear, too."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TimePicker <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> moment <span class=\"token keyword\">from</span> <span class=\"token string\">'moment'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> format <span class=\"token operator\">=</span> <span class=\"token string\">'HH:mm'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TimePicker</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'12:08'</span><span class=\"token punctuation\">,</span> format<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">format</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>format<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var format = 'HH:mm';return _react2.default.createElement(_timePicker2.default, { defaultValue: (0, _moment2.default)('12:08', format), format: format });
	  }
	};

/***/ },

/***/ 980:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(91);

	var _timePicker = __webpack_require__(102);

	var _timePicker2 = _interopRequireDefault(_timePicker);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _moment = __webpack_require__(32);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "三种大小的输入框，大的用在表单中，中的为默认。"]],
	    "en-US": [["p", "The input box comes in three sizes. large is used in the form, while the medium size is the default."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TimePicker <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> moment <span class=\"token keyword\">from</span> <span class=\"token string\">'moment'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TimePicker</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'12:08:23'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TimePicker</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'12:08:23'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TimePicker</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'12:08:23'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_timePicker2.default, { defaultValue: (0, _moment2.default)('12:08:23', 'HH:mm:ss'), size: 'large' }),
	      _react2.default.createElement(_timePicker2.default, { defaultValue: (0, _moment2.default)('12:08:23', 'HH:mm:ss') }),
	      _react2.default.createElement(_timePicker2.default, { defaultValue: (0, _moment2.default)('12:08:23', 'HH:mm:ss'), size: 'small' })
	    );
	  }
	};

/***/ },

/***/ 981:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(91);

	var _timePicker = __webpack_require__(102);

	var _timePicker2 = _interopRequireDefault(_timePicker);

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
	    "zh-CN": [["p", "value 和 onChange 需要配合使用。"]],
	    "en-US": [["p", ["code", "value"], " and ", ["code", "onChange"], " should be used together,"]]
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TimePicker <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>time<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>time<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value<span class=\"token punctuation\">:</span> time <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TimePicker</span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { value: null }, _this.onChange = function (time) {
	          console.log(time);
	          _this.setState({
	            value: time });
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      }

	      Demo.prototype.render = function render() {
	        return _react2.default.createElement(_timePicker2.default, { value: this.state.value, onChange: this.onChange });
	      };

	      return Demo;
	    }(_react2.default.Component);

	    return _react2.default.createElement(Demo, null);
	  }
	};

/***/ },

/***/ 1242:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'addon': __webpack_require__(975),
	    'basic': __webpack_require__(976),
	    'disable-options': __webpack_require__(977),
	    'disabled': __webpack_require__(978),
	    'hide-column': __webpack_require__(979),
	    'size': __webpack_require__(980),
	    'value': __webpack_require__(981),
	}

/***/ }

});