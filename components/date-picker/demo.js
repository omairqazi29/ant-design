webpackJsonp([5],{

/***/ 1789:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(2104),
    'date-render': __webpack_require__(2105),
    'disabled-date': __webpack_require__(2106),
    'disabled': __webpack_require__(2107),
    'extra-footer': __webpack_require__(2108),
    'format': __webpack_require__(2109),
    'mode': __webpack_require__(2110),
    'presetted-ranges': __webpack_require__(2111),
    'size': __webpack_require__(2112),
    'start-end': __webpack_require__(2113),
    'suffix': __webpack_require__(2114),
    'time': __webpack_require__(2115),
}

/***/ }),

/***/ 2104:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "最简单的用法，在浮层中可以选择或者输入日期。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Basic use case. Users can select or input a date in panel."
      ]
    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基本",
      "en-US": "Basic"
    },
    "filename": "components/date-picker/demo/basic.md",
    "id": "components-date-picker-demo-basic"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> DatePicker <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> MonthPicker<span class=\"token punctuation\">,</span> RangePicker<span class=\"token punctuation\">,</span> WeekPicker <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> DatePicker<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>date<span class=\"token punctuation\">,</span> dateString<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>date<span class=\"token punctuation\">,</span> dateString<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>MonthPicker</span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Select</span> <span class=\"token attr-name\">month\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RangePicker</span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>WeekPicker</span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Select</span> <span class=\"token attr-name\">week\"</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(9);

  var _antd = __webpack_require__(30);

  var MonthPicker = _antd.DatePicker.MonthPicker,
      RangePicker = _antd.DatePicker.RangePicker,
      WeekPicker = _antd.DatePicker.WeekPicker;

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return React.createElement(
    "div",
    null,
    React.createElement(_antd.DatePicker, {
      onChange: onChange
    }),
    React.createElement("br", null),
    React.createElement(MonthPicker, {
      onChange: onChange,
      placeholder: "Select month"
    }),
    React.createElement("br", null),
    React.createElement(RangePicker, {
      onChange: onChange
    }),
    React.createElement("br", null),
    React.createElement(WeekPicker, {
      onChange: onChange,
      placeholder: "Select week"
    })
  );
}
};

/***/ }),

/***/ 2105:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "使用 ",
        [
          "code",
          "dateRender"
        ],
        " 可以自定义日期单元格的内容和样式。"
      ]
    ],
    "en-US": [
      [
        "p",
        "We can customize the rendering of date cells in the calendar by providing a ",
        [
          "code",
          "dateRender"
        ],
        " function to ",
        [
          "code",
          "DatePicker"
        ],
        "."
      ]
    ]
  },
  "meta": {
    "order": 12,
    "title": {
      "zh-CN": "定制日期单元格",
      "en-US": "Customized Date Rendering"
    },
    "filename": "components/date-picker/demo/date-render.md",
    "id": "components-date-picker-demo-date-render"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> DatePicker <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> RangePicker <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> DatePicker<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span>\n      <span class=\"token attr-name\">dateRender</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>current<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">const</span> style <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>current<span class=\"token punctuation\">.</span><span class=\"token function\">date</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n          style<span class=\"token punctuation\">.</span>border <span class=\"token operator\">=</span> <span class=\"token string\">'1px solid #1890ff'</span><span class=\"token punctuation\">;</span>\n          style<span class=\"token punctuation\">.</span>borderRadius <span class=\"token operator\">=</span> <span class=\"token string\">'50%'</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n        <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-calendar-date\"</span> style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>style<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">{</span>current<span class=\"token punctuation\">.</span><span class=\"token function\">date</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RangePicker</span>\n      <span class=\"token attr-name\">dateRender</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>current<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">const</span> style <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>current<span class=\"token punctuation\">.</span><span class=\"token function\">date</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n          style<span class=\"token punctuation\">.</span>border <span class=\"token operator\">=</span> <span class=\"token string\">'1px solid #1890ff'</span><span class=\"token punctuation\">;</span>\n          style<span class=\"token punctuation\">.</span>borderRadius <span class=\"token operator\">=</span> <span class=\"token string\">'50%'</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n        <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-calendar-date\"</span> style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>style<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">{</span>current<span class=\"token punctuation\">.</span><span class=\"token function\">date</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(9);

  var _antd = __webpack_require__(30);

  var RangePicker = _antd.DatePicker.RangePicker;
  return React.createElement(
    "div",
    null,
    React.createElement(_antd.DatePicker, {
      dateRender: function dateRender(current) {
        var style = {};

        if (current.date() === 1) {
          style.border = '1px solid #1890ff';
          style.borderRadius = '50%';
        }

        return React.createElement(
          "div",
          {
            className: "ant-calendar-date",
            style: style
          },
          current.date()
        );
      }
    }),
    React.createElement(RangePicker, {
      dateRender: function dateRender(current) {
        var style = {};

        if (current.date() === 1) {
          style.border = '1px solid #1890ff';
          style.borderRadius = '50%';
        }

        return React.createElement(
          "div",
          {
            className: "ant-calendar-date",
            style: style
          },
          current.date()
        );
      }
    })
  );
}
};

/***/ }),

/***/ 2106:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可用 ",
        [
          "code",
          "disabledDate"
        ],
        " 和 ",
        [
          "code",
          "disabledTime"
        ],
        " 分别禁止选择部分日期和时间，其中 ",
        [
          "code",
          "disabledTime"
        ],
        " 需要和 ",
        [
          "code",
          "showTime"
        ],
        " 一起使用。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Disabled part of dates and time by ",
        [
          "code",
          "disabledDate"
        ],
        " and ",
        [
          "code",
          "disabledTime"
        ],
        " respectively, and ",
        [
          "code",
          "disabledTime"
        ],
        " only works with ",
        [
          "code",
          "showTime"
        ],
        "."
      ]
    ]
  },
  "meta": {
    "order": 6,
    "title": {
      "zh-CN": "不可选择日期和时间",
      "en-US": "Disabled Date & Time"
    },
    "filename": "components/date-picker/demo/disabled-date.md",
    "id": "components-date-picker-demo-disabled-date"
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
      "highlighted": "<span class=\"token keyword\">import</span> moment <span class=\"token keyword\">from</span> <span class=\"token string\">'moment'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> DatePicker <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> MonthPicker<span class=\"token punctuation\">,</span> RangePicker <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> DatePicker<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">range</span><span class=\"token punctuation\">(</span>start<span class=\"token punctuation\">,</span> end<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> result <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> start<span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> end<span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    result<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>i<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> result<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">disabledDate</span><span class=\"token punctuation\">(</span>current<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\" spellcheck=\"true\">// Can not select days before today and today</span>\n  <span class=\"token keyword\">return</span> current <span class=\"token operator\">&amp;&amp;</span> current <span class=\"token operator\">&lt;</span> <span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">endOf</span><span class=\"token punctuation\">(</span><span class=\"token string\">'day'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">disabledDateTime</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n    disabledHours<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">range</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">24</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">splice</span><span class=\"token punctuation\">(</span><span class=\"token number\">4</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    disabledMinutes<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">range</span><span class=\"token punctuation\">(</span><span class=\"token number\">30</span><span class=\"token punctuation\">,</span> <span class=\"token number\">60</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    disabledSeconds<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">[</span><span class=\"token number\">55</span><span class=\"token punctuation\">,</span> <span class=\"token number\">56</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">disabledRangeTime</span><span class=\"token punctuation\">(</span>_<span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>type <span class=\"token operator\">===</span> <span class=\"token string\">'start'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      disabledHours<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">range</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">60</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">splice</span><span class=\"token punctuation\">(</span><span class=\"token number\">4</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      disabledMinutes<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">range</span><span class=\"token punctuation\">(</span><span class=\"token number\">30</span><span class=\"token punctuation\">,</span> <span class=\"token number\">60</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      disabledSeconds<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">[</span><span class=\"token number\">55</span><span class=\"token punctuation\">,</span> <span class=\"token number\">56</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n    disabledHours<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">range</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">60</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">splice</span><span class=\"token punctuation\">(</span><span class=\"token number\">20</span><span class=\"token punctuation\">,</span> <span class=\"token number\">4</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    disabledMinutes<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">range</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">31</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    disabledSeconds<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">[</span><span class=\"token number\">55</span><span class=\"token punctuation\">,</span> <span class=\"token number\">56</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span>\n      <span class=\"token attr-name\">format</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>YYYY-MM-DD</span> <span class=\"token attr-name\"><span class=\"token namespace\">HH:</span><span class=\"token namespace\">mm:</span>ss\"</span>\n      <span class=\"token attr-name\">disabledDate</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>disabledDate<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">disabledTime</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>disabledDateTime<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">showTime</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> defaultValue<span class=\"token punctuation\">:</span> <span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'00:00:00'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'HH:mm:ss'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>MonthPicker</span> <span class=\"token attr-name\">disabledDate</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>disabledDate<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Select</span> <span class=\"token attr-name\">month\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RangePicker</span>\n      <span class=\"token attr-name\">disabledDate</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>disabledDate<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">disabledTime</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>disabledRangeTime<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">showTime</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n        hideDisabledOptions<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n        defaultValue<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'00:00:00'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'11:59:59'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'HH:mm:ss'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">format</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>YYYY-MM-DD</span> <span class=\"token attr-name\"><span class=\"token namespace\">HH:</span><span class=\"token namespace\">mm:</span>ss\"</span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(9);

  var _moment = __webpack_require__(34);

  var _moment2 = _interopRequireDefault(_moment);

  var _antd = __webpack_require__(30);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var MonthPicker = _antd.DatePicker.MonthPicker,
      RangePicker = _antd.DatePicker.RangePicker;

  function range(start, end) {
    var result = [];

    for (var i = start; i < end; i++) {
      result.push(i);
    }

    return result;
  }

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < (0, _moment2.default)().endOf('day');
  }

  function disabledDateTime() {
    return {
      disabledHours: function disabledHours() {
        return range(0, 24).splice(4, 20);
      },
      disabledMinutes: function disabledMinutes() {
        return range(30, 60);
      },
      disabledSeconds: function disabledSeconds() {
        return [55, 56];
      }
    };
  }

  function disabledRangeTime(_, type) {
    if (type === 'start') {
      return {
        disabledHours: function disabledHours() {
          return range(0, 60).splice(4, 20);
        },
        disabledMinutes: function disabledMinutes() {
          return range(30, 60);
        },
        disabledSeconds: function disabledSeconds() {
          return [55, 56];
        }
      };
    }

    return {
      disabledHours: function disabledHours() {
        return range(0, 60).splice(20, 4);
      },
      disabledMinutes: function disabledMinutes() {
        return range(0, 31);
      },
      disabledSeconds: function disabledSeconds() {
        return [55, 56];
      }
    };
  }

  return React.createElement(
    "div",
    null,
    React.createElement(_antd.DatePicker, {
      format: "YYYY-MM-DD HH:mm:ss",
      disabledDate: disabledDate,
      disabledTime: disabledDateTime,
      showTime: {
        defaultValue: (0, _moment2.default)('00:00:00', 'HH:mm:ss')
      }
    }),
    React.createElement("br", null),
    React.createElement(MonthPicker, {
      disabledDate: disabledDate,
      placeholder: "Select month"
    }),
    React.createElement("br", null),
    React.createElement(RangePicker, {
      disabledDate: disabledDate,
      disabledTime: disabledRangeTime,
      showTime: {
        hideDisabledOptions: true,
        defaultValue: [(0, _moment2.default)('00:00:00', 'HH:mm:ss'), (0, _moment2.default)('11:59:59', 'HH:mm:ss')]
      },
      format: "YYYY-MM-DD HH:mm:ss"
    })
  );
}
};

/***/ }),

/***/ 2107:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "选择框的不可用状态。"
      ]
    ],
    "en-US": [
      [
        "p",
        "A disabled state of the ",
        [
          "code",
          "DatePicker"
        ],
        "."
      ]
    ]
  },
  "meta": {
    "order": 4,
    "title": {
      "zh-CN": "禁用",
      "en-US": "Disabled"
    },
    "filename": "components/date-picker/demo/disabled.md",
    "id": "components-date-picker-demo-disabled"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> DatePicker <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> moment <span class=\"token keyword\">from</span> <span class=\"token string\">'moment'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> MonthPicker<span class=\"token punctuation\">,</span> RangePicker <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> DatePicker<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> dateFormat <span class=\"token operator\">=</span> <span class=\"token string\">'YYYY-MM-DD'</span><span class=\"token punctuation\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2015-06-06'</span><span class=\"token punctuation\">,</span> dateFormat<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">disabled</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>MonthPicker</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2015-06'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'YYYY-MM'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">disabled</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RangePicker</span>\n      <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2015-06-06'</span><span class=\"token punctuation\">,</span> dateFormat<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2015-06-06'</span><span class=\"token punctuation\">,</span> dateFormat<span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">disabled</span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(9);

  var _antd = __webpack_require__(30);

  var _moment = __webpack_require__(34);

  var _moment2 = _interopRequireDefault(_moment);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var MonthPicker = _antd.DatePicker.MonthPicker,
      RangePicker = _antd.DatePicker.RangePicker;
  var dateFormat = 'YYYY-MM-DD';
  return React.createElement(
    "div",
    null,
    React.createElement(_antd.DatePicker, {
      defaultValue: (0, _moment2.default)('2015-06-06', dateFormat),
      disabled: true
    }),
    React.createElement("br", null),
    React.createElement(MonthPicker, {
      defaultValue: (0, _moment2.default)('2015-06', 'YYYY-MM'),
      disabled: true
    }),
    React.createElement("br", null),
    React.createElement(RangePicker, {
      defaultValue: [(0, _moment2.default)('2015-06-06', dateFormat), (0, _moment2.default)('2015-06-06', dateFormat)],
      disabled: true
    })
  );
}
};

/***/ }),

/***/ 2108:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "在浮层中加入额外的页脚，以满足某些定制信息的需求。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Render extra footer in panel for customized requirements."
      ]
    ]
  },
  "meta": {
    "order": 10,
    "title": {
      "zh-CN": "额外的页脚",
      "en-US": "Extra Footer"
    },
    "filename": "components/date-picker/demo/extra-footer.md",
    "id": "components-date-picker-demo-extra-footer"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> DatePicker <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> RangePicker<span class=\"token punctuation\">,</span> MonthPicker <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> DatePicker<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token attr-name\">renderExtraFooter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token string\">'extra footer'</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token attr-name\">renderExtraFooter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token string\">'extra footer'</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">showTime</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RangePicker</span> <span class=\"token attr-name\">renderExtraFooter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token string\">'extra footer'</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RangePicker</span> <span class=\"token attr-name\">renderExtraFooter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token string\">'extra footer'</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">showTime</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>MonthPicker</span> <span class=\"token attr-name\">renderExtraFooter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token string\">'extra footer'</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Select</span> <span class=\"token attr-name\">month\"</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(9);

  var _antd = __webpack_require__(30);

  var RangePicker = _antd.DatePicker.RangePicker,
      MonthPicker = _antd.DatePicker.MonthPicker;
  return React.createElement(
    "div",
    null,
    React.createElement(_antd.DatePicker, {
      renderExtraFooter: function renderExtraFooter() {
        return 'extra footer';
      }
    }),
    React.createElement(_antd.DatePicker, {
      renderExtraFooter: function renderExtraFooter() {
        return 'extra footer';
      },
      showTime: true
    }),
    React.createElement(RangePicker, {
      renderExtraFooter: function renderExtraFooter() {
        return 'extra footer';
      }
    }),
    React.createElement(RangePicker, {
      renderExtraFooter: function renderExtraFooter() {
        return 'extra footer';
      },
      showTime: true
    }),
    React.createElement(MonthPicker, {
      renderExtraFooter: function renderExtraFooter() {
        return 'extra footer';
      },
      placeholder: "Select month"
    })
  );
}
};

/***/ }),

/***/ 2109:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "使用 ",
        [
          "code",
          "format"
        ],
        " 属性，可以自定义日期显示格式。"
      ]
    ],
    "en-US": [
      [
        "p",
        "We can set the date format by ",
        [
          "code",
          "format"
        ],
        "."
      ]
    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "日期格式",
      "en-US": "Date Format"
    },
    "filename": "components/date-picker/demo/format.md",
    "id": "components-date-picker-demo-format"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> DatePicker <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> moment <span class=\"token keyword\">from</span> <span class=\"token string\">'moment'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> MonthPicker<span class=\"token punctuation\">,</span> RangePicker <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> DatePicker<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> dateFormat <span class=\"token operator\">=</span> <span class=\"token string\">'YYYY/MM/DD'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> monthFormat <span class=\"token operator\">=</span> <span class=\"token string\">'YYYY/MM'</span><span class=\"token punctuation\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2015/01/01'</span><span class=\"token punctuation\">,</span> dateFormat<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">format</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>dateFormat<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>MonthPicker</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2015/01'</span><span class=\"token punctuation\">,</span> monthFormat<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">format</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>monthFormat<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RangePicker</span>\n      <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2015/01/01'</span><span class=\"token punctuation\">,</span> dateFormat<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2015/01/01'</span><span class=\"token punctuation\">,</span> dateFormat<span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">format</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>dateFormat<span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(9);

  var _antd = __webpack_require__(30);

  var _moment = __webpack_require__(34);

  var _moment2 = _interopRequireDefault(_moment);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var MonthPicker = _antd.DatePicker.MonthPicker,
      RangePicker = _antd.DatePicker.RangePicker;
  var dateFormat = 'YYYY/MM/DD';
  var monthFormat = 'YYYY/MM';
  return React.createElement(
    "div",
    null,
    React.createElement(_antd.DatePicker, {
      defaultValue: (0, _moment2.default)('2015/01/01', dateFormat),
      format: dateFormat
    }),
    React.createElement("br", null),
    React.createElement(MonthPicker, {
      defaultValue: (0, _moment2.default)('2015/01', monthFormat),
      format: monthFormat
    }),
    React.createElement("br", null),
    React.createElement(RangePicker, {
      defaultValue: [(0, _moment2.default)('2015/01/01', dateFormat), (0, _moment2.default)('2015/01/01', dateFormat)],
      format: dateFormat
    })
  );
}
};

/***/ }),

/***/ 2110:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "通过组合 ",
        [
          "code",
          "mode"
        ],
        " 与 ",
        [
          "code",
          "onPanelChange"
        ],
        " 控制要展示的面板。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Determing which panel to show with ",
        [
          "code",
          "mode"
        ],
        " and ",
        [
          "code",
          "onPanelChange"
        ],
        "."
      ]
    ]
  },
  "meta": {
    "order": 11,
    "title": {
      "zh-CN": "受控面板",
      "en-US": "Controlled Panels"
    },
    "filename": "components/date-picker/demo/mode.md",
    "id": "components-date-picker-demo-mode"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> DatePicker <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> RangePicker <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> DatePicker<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">ControlledDatePicker</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> mode<span class=\"token punctuation\">:</span> <span class=\"token string\">'time'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleOpenChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>open<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>open<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> mode<span class=\"token punctuation\">:</span> <span class=\"token string\">'time'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n\n  handlePanelChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> mode<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> mode <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span>\n        <span class=\"token attr-name\">mode</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>mode<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">showTime</span>\n        <span class=\"token attr-name\">onOpenChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleOpenChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onPanelChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handlePanelChange<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">ControlledRangePicker</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    mode<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'month'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'month'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handlePanelChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> mode<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      value<span class=\"token punctuation\">,</span>\n      mode<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n        mode<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span> <span class=\"token operator\">===</span> <span class=\"token string\">'date'</span> <span class=\"token operator\">?</span> <span class=\"token string\">'month'</span> <span class=\"token punctuation\">:</span> mode<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        mode<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span> <span class=\"token operator\">===</span> <span class=\"token string\">'date'</span> <span class=\"token operator\">?</span> <span class=\"token string\">'month'</span> <span class=\"token punctuation\">:</span> mode<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value<span class=\"token punctuation\">,</span> mode <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RangePicker</span>\n        <span class=\"token attr-name\">placeholder</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'Start month'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'End month'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">format</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>YYYY-MM<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>value<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">mode</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>mode<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onPanelChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handlePanelChange<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ControlledDatePicker</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ControlledRangePicker</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(9);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var RangePicker = _antd.DatePicker.RangePicker;

  var ControlledDatePicker = function (_React$Component) {
    _inherits(ControlledDatePicker, _React$Component);

    function ControlledDatePicker() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, ControlledDatePicker);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ControlledDatePicker.__proto__ || Object.getPrototypeOf(ControlledDatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        mode: 'time'
      }, _this.handleOpenChange = function (open) {
        if (open) {
          _this.setState({
            mode: 'time'
          });
        }
      }, _this.handlePanelChange = function (value, mode) {
        _this.setState({
          mode: mode
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ControlledDatePicker, [{
      key: "render",
      value: function render() {
        return React.createElement(_antd.DatePicker, {
          mode: this.state.mode,
          showTime: true,
          onOpenChange: this.handleOpenChange,
          onPanelChange: this.handlePanelChange
        });
      }
    }]);

    return ControlledDatePicker;
  }(React.Component);

  var ControlledRangePicker = function (_React$Component2) {
    _inherits(ControlledRangePicker, _React$Component2);

    function ControlledRangePicker() {
      var _ref2;

      var _temp2, _this2, _ret2;

      _classCallCheck(this, ControlledRangePicker);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = ControlledRangePicker.__proto__ || Object.getPrototypeOf(ControlledRangePicker)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {
        mode: ['month', 'month'],
        value: []
      }, _this2.handlePanelChange = function (value, mode) {
        _this2.setState({
          value: value,
          mode: [mode[0] === 'date' ? 'month' : mode[0], mode[1] === 'date' ? 'month' : mode[1]]
        });
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    _createClass(ControlledRangePicker, [{
      key: "render",
      value: function render() {
        var _state = this.state,
            value = _state.value,
            mode = _state.mode;
        return React.createElement(RangePicker, {
          placeholder: ['Start month', 'End month'],
          format: "YYYY-MM",
          value: value,
          mode: mode,
          onPanelChange: this.handlePanelChange
        });
      }
    }]);

    return ControlledRangePicker;
  }(React.Component);

  return React.createElement(
    "div",
    null,
    React.createElement(ControlledDatePicker, null),
    React.createElement("br", null),
    React.createElement(ControlledRangePicker, null)
  );
}
};

/***/ }),

/***/ 2111:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可以预设常用的日期范围以提高用户体验。"
      ]
    ],
    "en-US": [
      [
        "p",
        "We can set presetted ranges to RangePicker to improve user experience."
      ]
    ]
  },
  "meta": {
    "order": 8,
    "title": {
      "zh-CN": "预设范围",
      "en-US": "Presetted Ranges"
    },
    "filename": "components/date-picker/demo/presetted-ranges.md",
    "id": "components-date-picker-demo-presetted-ranges"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> DatePicker <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> moment <span class=\"token keyword\">from</span> <span class=\"token string\">'moment'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> RangePicker <span class=\"token operator\">=</span> DatePicker<span class=\"token punctuation\">.</span>RangePicker<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>dates<span class=\"token punctuation\">,</span> dateStrings<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'From: '</span><span class=\"token punctuation\">,</span> dates<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> <span class=\"token string\">', to: '</span><span class=\"token punctuation\">,</span> dates<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'From: '</span><span class=\"token punctuation\">,</span> dateStrings<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> <span class=\"token string\">', to: '</span><span class=\"token punctuation\">,</span> dateStrings<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RangePicker</span>\n      <span class=\"token attr-name\">ranges</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> Today<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'This Month'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">endOf</span><span class=\"token punctuation\">(</span><span class=\"token string\">'month'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RangePicker</span>\n      <span class=\"token attr-name\">ranges</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> Today<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'This Month'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">endOf</span><span class=\"token punctuation\">(</span><span class=\"token string\">'month'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">showTime</span>\n      <span class=\"token attr-name\">format</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>YYYY/MM/DD</span> <span class=\"token attr-name\"><span class=\"token namespace\">HH:</span><span class=\"token namespace\">mm:</span>ss\"</span>\n      <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(9);

  var _antd = __webpack_require__(30);

  var _moment = __webpack_require__(34);

  var _moment2 = _interopRequireDefault(_moment);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var RangePicker = _antd.DatePicker.RangePicker;

  function onChange(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  }

  return React.createElement(
    "div",
    null,
    React.createElement(RangePicker, {
      ranges: {
        Today: [(0, _moment2.default)(), (0, _moment2.default)()],
        'This Month': [(0, _moment2.default)(), (0, _moment2.default)().endOf('month')]
      },
      onChange: onChange
    }),
    React.createElement("br", null),
    React.createElement(RangePicker, {
      ranges: {
        Today: [(0, _moment2.default)(), (0, _moment2.default)()],
        'This Month': [(0, _moment2.default)(), (0, _moment2.default)().endOf('month')]
      },
      showTime: true,
      format: "YYYY/MM/DD HH:mm:ss",
      onChange: onChange
    })
  );
}
};

/***/ }),

/***/ 2112:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "三种大小的输入框，若不设置，则为 ",
        [
          "code",
          "default"
        ],
        "。"
      ]
    ],
    "en-US": [
      [
        "p",
        "The input box comes in three sizes. ",
        [
          "code",
          "default"
        ],
        " will be used if ",
        [
          "code",
          "size"
        ],
        " is omitted."
      ]
    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "三种大小",
      "en-US": "Three Sizes"
    },
    "filename": "components/date-picker/demo/size.md",
    "id": "components-date-picker-demo-size"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> DatePicker<span class=\"token punctuation\">,</span> Radio <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> MonthPicker<span class=\"token punctuation\">,</span> RangePicker<span class=\"token punctuation\">,</span> WeekPicker <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> DatePicker<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">PickerSizesDemo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    size<span class=\"token punctuation\">:</span> <span class=\"token string\">'default'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleSizeChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> size<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> size <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Group</span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>size<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSizeChange<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Large<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>default<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Default<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Small<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Group</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token attr-name\">size</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>size<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>MonthPicker</span> <span class=\"token attr-name\">size</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>size<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Select</span> <span class=\"token attr-name\">Month\"</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RangePicker</span> <span class=\"token attr-name\">size</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>size<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>WeekPicker</span> <span class=\"token attr-name\">size</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>size<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Select</span> <span class=\"token attr-name\">Week\"</span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>PickerSizesDemo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(9);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var MonthPicker = _antd.DatePicker.MonthPicker,
      RangePicker = _antd.DatePicker.RangePicker,
      WeekPicker = _antd.DatePicker.WeekPicker;

  var PickerSizesDemo = function (_React$Component) {
    _inherits(PickerSizesDemo, _React$Component);

    function PickerSizesDemo() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, PickerSizesDemo);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PickerSizesDemo.__proto__ || Object.getPrototypeOf(PickerSizesDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        size: 'default'
      }, _this.handleSizeChange = function (e) {
        _this.setState({
          size: e.target.value
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PickerSizesDemo, [{
      key: "render",
      value: function render() {
        var size = this.state.size;
        return React.createElement(
          "div",
          null,
          React.createElement(
            _antd.Radio.Group,
            {
              value: size,
              onChange: this.handleSizeChange
            },
            React.createElement(
              _antd.Radio.Button,
              {
                value: "large"
              },
              "Large"
            ),
            React.createElement(
              _antd.Radio.Button,
              {
                value: "default"
              },
              "Default"
            ),
            React.createElement(
              _antd.Radio.Button,
              {
                value: "small"
              },
              "Small"
            )
          ),
          React.createElement("br", null),
          React.createElement("br", null),
          React.createElement(_antd.DatePicker, {
            size: size
          }),
          React.createElement("br", null),
          React.createElement(MonthPicker, {
            size: size,
            placeholder: "Select Month"
          }),
          React.createElement("br", null),
          React.createElement(RangePicker, {
            size: size
          }),
          React.createElement("br", null),
          React.createElement(WeekPicker, {
            size: size,
            placeholder: "Select Week"
          })
        );
      }
    }]);

    return PickerSizesDemo;
  }(React.Component);

  return React.createElement(PickerSizesDemo, null);
}
};

/***/ }),

/***/ 2113:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "当 ",
        [
          "code",
          "RangePicker"
        ],
        " 无法满足业务需求时，可以使用两个 ",
        [
          "code",
          "DatePicker"
        ],
        " 实现类似的功能。"
      ],
      [
        "blockquote",
        [
          "ul",
          [
            "li",
            [
              "p",
              "通过设置 ",
              [
                "code",
                "disabledDate"
              ],
              " 方法，来约束开始和结束日期。"
            ]
          ],
          [
            "li",
            [
              "p",
              "通过 ",
              [
                "code",
                "open"
              ],
              " ",
              [
                "code",
                "onOpenChange"
              ],
              " 来优化交互。"
            ]
          ]
        ]
      ]
    ],
    "en-US": [
      [
        "p",
        "When ",
        [
          "code",
          "RangePicker"
        ],
        " does not satisfied your requirements, try to implement similar functionality with two ",
        [
          "code",
          "DatePicker"
        ],
        "."
      ],
      [
        "blockquote",
        [
          "ul",
          [
            "li",
            [
              "p",
              "Use the ",
              [
                "code",
                "disabledDate"
              ],
              " property to limit the start and end dates."
            ]
          ],
          [
            "li",
            [
              "p",
              "Improve user experience with ",
              [
                "code",
                "open"
              ],
              " and ",
              [
                "code",
                "onOpenChange"
              ],
              "."
            ]
          ]
        ]
      ]
    ]
  },
  "meta": {
    "order": 6,
    "title": {
      "zh-CN": "自定义日期范围选择",
      "en-US": "Customized Range Picker"
    },
    "filename": "components/date-picker/demo/start-end.md",
    "id": "components-date-picker-demo-start-end"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> DatePicker <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">DateRange</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    startValue<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n    endValue<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n    endOpen<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  disabledStartDate <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>startValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> endValue <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>endValue<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>startValue <span class=\"token operator\">||</span> <span class=\"token operator\">!</span>endValue<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> startValue<span class=\"token punctuation\">.</span><span class=\"token function\">valueOf</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">></span> endValue<span class=\"token punctuation\">.</span><span class=\"token function\">valueOf</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  disabledEndDate <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>endValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> startValue <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>startValue<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>endValue <span class=\"token operator\">||</span> <span class=\"token operator\">!</span>startValue<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> endValue<span class=\"token punctuation\">.</span><span class=\"token function\">valueOf</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">&lt;=</span> startValue<span class=\"token punctuation\">.</span><span class=\"token function\">valueOf</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  onChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>field<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      <span class=\"token punctuation\">[</span>field<span class=\"token punctuation\">]</span><span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  onStartChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token string\">'startValue'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  onEndChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token string\">'endValue'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleStartOpenChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>open<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>open<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> endOpen<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleEndOpenChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>open<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> endOpen<span class=\"token punctuation\">:</span> open <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> startValue<span class=\"token punctuation\">,</span> endValue<span class=\"token punctuation\">,</span> endOpen <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span>\n          <span class=\"token attr-name\">disabledDate</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>disabledStartDate<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">showTime</span>\n          <span class=\"token attr-name\">format</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>YYYY-MM-DD</span> <span class=\"token attr-name\"><span class=\"token namespace\">HH:</span><span class=\"token namespace\">mm:</span>ss\"</span>\n          <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>startValue<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Start<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onStartChange<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onOpenChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleStartOpenChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span>\n          <span class=\"token attr-name\">disabledDate</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>disabledEndDate<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">showTime</span>\n          <span class=\"token attr-name\">format</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>YYYY-MM-DD</span> <span class=\"token attr-name\"><span class=\"token namespace\">HH:</span><span class=\"token namespace\">mm:</span>ss\"</span>\n          <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>endValue<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>End<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onEndChange<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">open</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>endOpen<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onOpenChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleEndOpenChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DateRange</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(9);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var DateRange = function (_React$Component) {
    _inherits(DateRange, _React$Component);

    function DateRange() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, DateRange);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateRange.__proto__ || Object.getPrototypeOf(DateRange)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        startValue: null,
        endValue: null,
        endOpen: false
      }, _this.disabledStartDate = function (startValue) {
        var endValue = _this.state.endValue;

        if (!startValue || !endValue) {
          return false;
        }

        return startValue.valueOf() > endValue.valueOf();
      }, _this.disabledEndDate = function (endValue) {
        var startValue = _this.state.startValue;

        if (!endValue || !startValue) {
          return false;
        }

        return endValue.valueOf() <= startValue.valueOf();
      }, _this.onChange = function (field, value) {
        _this.setState(_defineProperty({}, field, value));
      }, _this.onStartChange = function (value) {
        _this.onChange('startValue', value);
      }, _this.onEndChange = function (value) {
        _this.onChange('endValue', value);
      }, _this.handleStartOpenChange = function (open) {
        if (!open) {
          _this.setState({
            endOpen: true
          });
        }
      }, _this.handleEndOpenChange = function (open) {
        _this.setState({
          endOpen: open
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DateRange, [{
      key: "render",
      value: function render() {
        var _state = this.state,
            startValue = _state.startValue,
            endValue = _state.endValue,
            endOpen = _state.endOpen;
        return React.createElement(
          "div",
          null,
          React.createElement(_antd.DatePicker, {
            disabledDate: this.disabledStartDate,
            showTime: true,
            format: "YYYY-MM-DD HH:mm:ss",
            value: startValue,
            placeholder: "Start",
            onChange: this.onStartChange,
            onOpenChange: this.handleStartOpenChange
          }),
          React.createElement(_antd.DatePicker, {
            disabledDate: this.disabledEndDate,
            showTime: true,
            format: "YYYY-MM-DD HH:mm:ss",
            value: endValue,
            placeholder: "End",
            onChange: this.onEndChange,
            open: endOpen,
            onOpenChange: this.handleEndOpenChange
          })
        );
      }
    }]);

    return DateRange;
  }(React.Component);

  return React.createElement(DateRange, null);
}
};

/***/ }),

/***/ 2114:
/***/ (function(module, exports) {

module.exports = {
  "meta": {

  }
};

/***/ }),

/***/ 2115:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "增加选择时间功能，当 ",
        [
          "code",
          "showTime"
        ],
        " 为一个对象时，其属性会传递给内建的 ",
        [
          "code",
          "TimePicker"
        ],
        "。"
      ]
    ],
    "en-US": [
      [
        "p",
        "This property provide an additional time selection. When ",
        [
          "code",
          "showTime"
        ],
        " is an Object, its properties will be passed on to built-in ",
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
      "zh-CN": "日期时间选择",
      "en-US": "Choose Time"
    },
    "filename": "components/date-picker/demo/time.md",
    "id": "components-date-picker-demo-time"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> DatePicker <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> RangePicker <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> DatePicker<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> dateString<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Selected Time: '</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Formatted Selected Time: '</span><span class=\"token punctuation\">,</span> dateString<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onOk</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'onOk: '</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span>\n      <span class=\"token attr-name\">showTime</span>\n      <span class=\"token attr-name\">format</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>YYYY-MM-DD</span> <span class=\"token attr-name\"><span class=\"token namespace\">HH:</span><span class=\"token namespace\">mm:</span>ss\"</span>\n      <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Select</span> <span class=\"token attr-name\">Time\"</span>\n      <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">onOk</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onOk<span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RangePicker</span>\n      <span class=\"token attr-name\">showTime</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> format<span class=\"token punctuation\">:</span> <span class=\"token string\">'HH:mm'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">format</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>YYYY-MM-DD</span> <span class=\"token attr-name\"><span class=\"token namespace\">HH:</span>mm\"</span>\n      <span class=\"token attr-name\">placeholder</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'Start Time'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'End Time'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">onOk</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onOk<span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(9);

  var _antd = __webpack_require__(30);

  var RangePicker = _antd.DatePicker.RangePicker;

  function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }

  function onOk(value) {
    console.log('onOk: ', value);
  }

  return React.createElement(
    "div",
    null,
    React.createElement(_antd.DatePicker, {
      showTime: true,
      format: "YYYY-MM-DD HH:mm:ss",
      placeholder: "Select Time",
      onChange: onChange,
      onOk: onOk
    }),
    React.createElement("br", null),
    React.createElement(RangePicker, {
      showTime: {
        format: 'HH:mm'
      },
      format: "YYYY-MM-DD HH:mm",
      placeholder: ['Start Time', 'End Time'],
      onChange: onChange,
      onOk: onOk
    })
  );
}
};

/***/ })

});