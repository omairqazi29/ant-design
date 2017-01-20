webpackJsonp([40,210],{

/***/ 765:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "一个通用的日历面板，支持年/月切换。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "A basic calendar component with Year/Month switch."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/calendar/demo/basic.md",
	    "id": "components-calendar-demo-basic"
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
	      "highlighted": "import { Calendar } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onPanelChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> mode<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> mode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Calendar onPanelChange<span class=\"token operator\">=</span>{onPanelChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function onPanelChange(value, mode) {
	    console.log(value, mode);
	  }

	  return React.createElement(_antd.Calendar, {
	    onPanelChange: onPanelChange
	  });
	}
	};

/***/ },

/***/ 766:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "用于嵌套在空间有限的容器中。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Nested inside a container element for rendering in limited space."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "卡片模式",
	      "en-US": "Card"
	    },
	    "filename": "components/calendar/demo/card.md",
	    "id": "components-calendar-demo-card"
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
	      "highlighted": "import { Calendar } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onPanelChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> mode<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> mode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">290</span><span class=\"token punctuation\">,</span> border<span class=\"token punctuation\">:</span> <span class=\"token string\">'1px solid #d9d9d9'</span><span class=\"token punctuation\">,</span> borderRadius<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> }}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Calendar fullscreen<span class=\"token operator\">=</span>{<span class=\"token boolean\">false</span>} onPanelChange<span class=\"token operator\">=</span>{onPanelChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function onPanelChange(value, mode) {
	    console.log(value, mode);
	  }

	  return React.createElement(
	    "div",
	    {
	      style: {
	        width: 290,
	        border: '1px solid #d9d9d9',
	        borderRadius: 4
	      }
	    },
	    React.createElement(_antd.Calendar, {
	      fullscreen: false,
	      onPanelChange: onPanelChange
	    })
	  );
	}
	};

/***/ },

/***/ 767:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "通过 ",
	        [
	          "code",
	          "locale"
	        ],
	        " 配置语言, 默认支持 en_US, zh_CN"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "To set the language. en_US, zh_CN are supported by default."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "国际化",
	      "en-US": "locale"
	    },
	    "filename": "components/calendar/demo/locale.md",
	    "id": "components-calendar-demo-locale"
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
	      "highlighted": "import { Calendar } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport enUS from <span class=\"token string\">'antd/lib/calendar/locale/en_US'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport moment from <span class=\"token string\">'moment'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token operator\">/</span><span class=\"token operator\">/</span> It's recommended <span class=\"token keyword\">to</span> set moment locale globally<span class=\"token punctuation\">,</span> otherwise<span class=\"token punctuation\">,</span> you need <span class=\"token keyword\">to</span> set it by `value` <span class=\"token operator\">or</span> `defaultValue`\n<span class=\"token operator\">/</span><span class=\"token operator\">/</span> moment<span class=\"token punctuation\">.</span><span class=\"token function\">locale</span><span class=\"token punctuation\">(</span><span class=\"token string\">'en'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onPanelChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> mode<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> mode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Calendar defaultValue<span class=\"token operator\">=</span>{<span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">locale</span><span class=\"token punctuation\">(</span><span class=\"token string\">'en'</span><span class=\"token punctuation\">)</span>} onPanelChange<span class=\"token operator\">=</span>{onPanelChange} locale<span class=\"token operator\">=</span>{enUS} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var _en_US = __webpack_require__(336);

	  var _en_US2 = _interopRequireDefault(_en_US);

	  var _moment = __webpack_require__(25);

	  var _moment2 = _interopRequireDefault(_moment);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	  // It's recommended to set moment locale globally, otherwise, you need to set it by `value` or `defaultValue`
	  // moment.locale('en');
	  function onPanelChange(value, mode) {
	    console.log(value, mode);
	  }

	  return React.createElement(_antd.Calendar, {
	    defaultValue: (0, _moment2.default)().locale('en'),
	    onPanelChange: onPanelChange,
	    locale: _en_US2.default
	  });
	}
	};

/***/ },

/***/ 768:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "一个复杂的应用示例，用 ",
	        [
	          "code",
	          "dateCellRender"
	        ],
	        " 和 ",
	        [
	          "code",
	          "monthCellRender"
	        ],
	        " 函数来自定义需要渲染的数据。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "This component can be rendered by using ",
	        [
	          "code",
	          "dateCellRender"
	        ],
	        " and ",
	        [
	          "code",
	          "monthCellRender"
	        ],
	        " with the data you need."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "通知事项日历",
	      "en-US": "Notice Calendar"
	    },
	    "filename": "components/calendar/demo/notice-calendar.md",
	    "id": "components-calendar-demo-notice-calendar"
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
	      "highlighted": "import { Calendar } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">getListData</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  let listData<span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token keyword\">switch</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">.</span><span class=\"token function\">date</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">case</span> <span class=\"token number\">8</span><span class=\"token punctuation\">:</span>\n      listData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n        { type<span class=\"token punctuation\">:</span> <span class=\"token string\">'warning'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is warning event.'</span> }<span class=\"token punctuation\">,</span>\n        { type<span class=\"token punctuation\">:</span> <span class=\"token string\">'normal'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is usual event.'</span> }<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">; break;</span>\n    <span class=\"token keyword\">case</span> <span class=\"token number\">10</span><span class=\"token punctuation\">:</span>\n      listData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n        { type<span class=\"token punctuation\">:</span> <span class=\"token string\">'warning'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is warning event.'</span> }<span class=\"token punctuation\">,</span>\n        { type<span class=\"token punctuation\">:</span> <span class=\"token string\">'normal'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is usual event.'</span> }<span class=\"token punctuation\">,</span>\n        { type<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is error event.'</span> }<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">; break;</span>\n    <span class=\"token keyword\">case</span> <span class=\"token number\">15</span><span class=\"token punctuation\">:</span>\n      listData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n        { type<span class=\"token punctuation\">:</span> <span class=\"token string\">'warning'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is warning event'</span> }<span class=\"token punctuation\">,</span>\n        { type<span class=\"token punctuation\">:</span> <span class=\"token string\">'normal'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is very long usual event。。....'</span> }<span class=\"token punctuation\">,</span>\n        { type<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is error event 1.'</span> }<span class=\"token punctuation\">,</span>\n        { type<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is error event 2.'</span> }<span class=\"token punctuation\">,</span>\n        { type<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is error event 3.'</span> }<span class=\"token punctuation\">,</span>\n        { type<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is error event 4.'</span> }<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">; break;</span>\n    <span class=\"token keyword\">default</span><span class=\"token punctuation\">:</span>\n  }\n  return listData || <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">dateCellRender</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  <span class=\"token keyword\">const</span> listData <span class=\"token operator\">=</span> <span class=\"token function\">getListData</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  return <span class=\"token punctuation\">(</span>\n    <span class=\"token operator\">&lt;</span>ul className<span class=\"token operator\">=</span><span class=\"token string\">\"events\"</span><span class=\"token operator\">></span>\n      {\n        listData<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>li key<span class=\"token operator\">=</span>{item<span class=\"token punctuation\">.</span>content}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span>{`event<span class=\"token operator\">-</span>${item<span class=\"token punctuation\">.</span>type}`}<span class=\"token operator\">></span>●<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n            {item<span class=\"token punctuation\">.</span>content}\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>li<span class=\"token operator\">></span>\n        <span class=\"token punctuation\">)</span>\n      }\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>ul<span class=\"token operator\">></span>\n  <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">getMonthData</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">.</span><span class=\"token function\">month</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token number\">8</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token number\">1394</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nfunction <span class=\"token function\">monthCellRender</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  <span class=\"token keyword\">const</span> num <span class=\"token operator\">=</span> <span class=\"token function\">getMonthData</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  return num <span class=\"token operator\">?</span> <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"notes-month\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>section<span class=\"token operator\">></span>{num}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>section<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>Backlog number<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span> <span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Calendar dateCellRender<span class=\"token operator\">=</span>{dateCellRender} monthCellRender<span class=\"token operator\">=</span>{monthCellRender} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function getListData(value) {
	    var listData = void 0;

	    switch (value.date()) {
	      case 8:
	        listData = [{
	          type: 'warning',
	          content: 'This is warning event.'
	        }, {
	          type: 'normal',
	          content: 'This is usual event.'
	        }];
	        break;

	      case 10:
	        listData = [{
	          type: 'warning',
	          content: 'This is warning event.'
	        }, {
	          type: 'normal',
	          content: 'This is usual event.'
	        }, {
	          type: 'error',
	          content: 'This is error event.'
	        }];
	        break;

	      case 15:
	        listData = [{
	          type: 'warning',
	          content: 'This is warning event'
	        }, {
	          type: 'normal',
	          content: 'This is very long usual event。。....'
	        }, {
	          type: 'error',
	          content: 'This is error event 1.'
	        }, {
	          type: 'error',
	          content: 'This is error event 2.'
	        }, {
	          type: 'error',
	          content: 'This is error event 3.'
	        }, {
	          type: 'error',
	          content: 'This is error event 4.'
	        }];
	        break;

	      default:}

	    return listData || [];
	  }

	  function dateCellRender(value) {
	    var listData = getListData(value);
	    return React.createElement(
	      "ul",
	      {
	        className: "events"
	      },
	      listData.map(function (item) {
	        return React.createElement(
	          "li",
	          {
	            key: item.content
	          },
	          React.createElement(
	            "span",
	            {
	              className: "event-" + item.type
	            },
	            "●"
	          ),
	          item.content
	        );
	      })
	    );
	  }

	  function getMonthData(value) {
	    if (value.month() === 8) {
	      return 1394;
	    }
	  }

	  function monthCellRender(value) {
	    var num = getMonthData(value);
	    return num ? React.createElement(
	      "div",
	      {
	        className: "notes-month"
	      },
	      React.createElement(
	        "section",
	        null,
	        num
	      ),
	      React.createElement(
	        "span",
	        null,
	        "Backlog number"
	      )
	    ) : null;
	  }

	  return React.createElement(_antd.Calendar, {
	    dateCellRender: dateCellRender,
	    monthCellRender: monthCellRender
	  });
	},
	  "style": ".events {\n  line-height: 24px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.events li {\n  color: #999;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.events li span {\n  vertical-align: middle;\n}\n\n.events li span:first-child {\n  font-size: 9px;\n  margin-right: 4px;\n}\n\n.event-warning {\n  color: #fac450;\n}\n\n.event-normal {\n  color: #108ee9;\n}\n\n.event-error {\n  color: #f50;\n}\n\n.notes-month {\n  text-align: center;\n}\n.notes-month section {\n  font-size: 28px;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.events</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">list-style</span><span class=\"token punctuation\">:</span> none<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.events</span> li </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">overflow</span><span class=\"token punctuation\">:</span> hidden<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-overflow</span><span class=\"token punctuation\">:</span> ellipsis<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">white-space</span><span class=\"token punctuation\">:</span> nowrap<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.events</span> li span </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">vertical-align</span><span class=\"token punctuation\">:</span> middle<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.events</span> li span<span class=\"token pseudo-class\">:first-child</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">9</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.event-warning</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fac450</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.event-normal</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#108ee9</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.event-error</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#f50</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.notes-month</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.notes-month</span> section </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">28</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1203:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(765),
	    'card': __webpack_require__(766),
	    'locale': __webpack_require__(767),
	    'notice-calendar': __webpack_require__(768),
	}

/***/ }

});