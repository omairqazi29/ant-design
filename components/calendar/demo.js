webpackJsonp([47],{

/***/ 1772:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(2063),
    'card': __webpack_require__(2064),
    'notice-calendar': __webpack_require__(2065),
    'select': __webpack_require__(2066),
}

/***/ }),

/***/ 2063:
/***/ (function(module, exports, __webpack_require__) {

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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Calendar <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onPanelChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> mode<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> mode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Calendar</span> <span class=\"token attr-name\">onPanelChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onPanelChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  function onPanelChange(value, mode) {
    console.log(value, mode);
  }

  return React.createElement(_antd.Calendar, {
    onPanelChange: onPanelChange
  });
}
};

/***/ }),

/***/ 2064:
/***/ (function(module, exports, __webpack_require__) {

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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Calendar <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onPanelChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> mode<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> mode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span><span class=\"token punctuation\">,</span> border<span class=\"token punctuation\">:</span> <span class=\"token string\">'1px solid #d9d9d9'</span><span class=\"token punctuation\">,</span> borderRadius<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Calendar</span> <span class=\"token attr-name\">fullscreen</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onPanelChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onPanelChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  function onPanelChange(value, mode) {
    console.log(value, mode);
  }

  return React.createElement(
    "div",
    {
      style: {
        width: 300,
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

/***/ }),

/***/ 2065:
/***/ (function(module, exports, __webpack_require__) {

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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Calendar<span class=\"token punctuation\">,</span> Badge <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">getListData</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">let</span> listData<span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">switch</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">.</span><span class=\"token function\">date</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">case</span> <span class=\"token number\">8</span><span class=\"token punctuation\">:</span>\n      listData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'warning'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is warning event.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'success'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is usual event.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span> <span class=\"token keyword\">break</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">case</span> <span class=\"token number\">10</span><span class=\"token punctuation\">:</span>\n      listData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'warning'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is warning event.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'success'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is usual event.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is error event.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span> <span class=\"token keyword\">break</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">case</span> <span class=\"token number\">15</span><span class=\"token punctuation\">:</span>\n      listData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'warning'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is warning event'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'success'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is very long usual event。。....'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is error event 1.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is error event 2.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is error event 3.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is error event 4.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span> <span class=\"token keyword\">break</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">default</span><span class=\"token punctuation\">:</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> listData <span class=\"token operator\">||</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">dateCellRender</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> listData <span class=\"token operator\">=</span> <span class=\"token function\">getListData</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ul</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>events<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">{</span>\n        listData<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>content<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">status</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>type<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">text</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>content<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ul</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">getMonthData</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">.</span><span class=\"token function\">month</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token number\">8</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token number\">1394</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">monthCellRender</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> num <span class=\"token operator\">=</span> <span class=\"token function\">getMonthData</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">return</span> num <span class=\"token operator\">?</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>notes-month<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>section</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>num<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>section</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>Backlog number<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Calendar</span> <span class=\"token attr-name\">dateCellRender</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>dateCellRender<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">monthCellRender</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>monthCellRender<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  function getListData(value) {
    var listData = void 0;

    switch (value.date()) {
      case 8:
        listData = [{
          type: 'warning',
          content: 'This is warning event.'
        }, {
          type: 'success',
          content: 'This is usual event.'
        }];
        break;

      case 10:
        listData = [{
          type: 'warning',
          content: 'This is warning event.'
        }, {
          type: 'success',
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
          type: 'success',
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
          React.createElement(_antd.Badge, {
            status: item.type,
            text: item.content
          })
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
  "style": ".events {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.events .ant-badge-status {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  text-overflow: ellipsis;\n  font-size: 12px;\n}\n.notes-month {\n  text-align: center;\n  font-size: 28px;\n}\n.notes-month section {\n  font-size: 28px;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.events</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">list-style</span><span class=\"token punctuation\">:</span> none<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.events</span> <span class=\"token class\">.ant-badge-status</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">overflow</span><span class=\"token punctuation\">:</span> hidden<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">white-space</span><span class=\"token punctuation\">:</span> nowrap<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-overflow</span><span class=\"token punctuation\">:</span> ellipsis<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.notes-month</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">28</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.notes-month</span> section </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">28</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ 2066:
/***/ (function(module, exports, __webpack_require__) {

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
    "order": 3,
    "title": {
      "zh-CN": "选择功能",
      "en-US": "Selectable Calendar"
    },
    "filename": "components/calendar/demo/select.md",
    "id": "components-calendar-demo-select"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Calendar<span class=\"token punctuation\">,</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> moment <span class=\"token keyword\">from</span> <span class=\"token string\">'moment'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2017-01-25'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    selectedValue<span class=\"token punctuation\">:</span> <span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2017-01-25'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span>\n\n  onSelect <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      value<span class=\"token punctuation\">,</span>\n      selectedValue<span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  onPanelChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value<span class=\"token punctuation\">,</span> selectedValue <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token template-string\"><span class=\"token string\">`You selected date: </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>selectedValue <span class=\"token operator\">&amp;&amp;</span> selectedValue<span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD'</span><span class=\"token punctuation\">)</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Calendar</span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>value<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onSelect</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onSelect<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onPanelChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onPanelChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  var _moment = __webpack_require__(34);

  var _moment2 = _interopRequireDefault(_moment);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        value: (0, _moment2.default)('2017-01-25'),
        selectedValue: (0, _moment2.default)('2017-01-25')
      }, _this.onSelect = function (value) {
        _this.setState({
          value: value,
          selectedValue: value
        });
      }, _this.onPanelChange = function (value) {
        _this.setState({
          value: value
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
      key: "render",
      value: function render() {
        var _state = this.state,
            value = _state.value,
            selectedValue = _state.selectedValue;
        return React.createElement(
          "div",
          null,
          React.createElement(_antd.Alert, {
            message: "You selected date: " + (selectedValue && selectedValue.format('YYYY-MM-DD'))
          }),
          React.createElement(_antd.Calendar, {
            value: value,
            onSelect: this.onSelect,
            onPanelChange: this.onPanelChange
          })
        );
      }
    }]);

    return App;
  }(React.Component);

  return React.createElement(App, null);
}
};

/***/ })

});