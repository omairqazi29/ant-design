webpackJsonp([23],{

/***/ 1838:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(2266),
    'custom-icon': __webpack_require__(2267),
    'custom-style': __webpack_require__(2268),
    'duration': __webpack_require__(2269),
    'placement': __webpack_require__(2270),
    'update': __webpack_require__(2271),
    'with-btn': __webpack_require__(2272),
    'with-icon': __webpack_require__(2273),
}

/***/ }),

/***/ 2266:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "最简单的用法，4.5 秒后自动关闭。"
      ]
    ],
    "en-US": [
      [
        "p",
        "The simplest usage that close the notification box after 4.5s."
      ]
    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基本",
      "en-US": "Basic"
    },
    "filename": "components/notification/demo/basic.md",
    "id": "components-notification-demo-basic"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button<span class=\"token punctuation\">,</span> notification <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> openNotification <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  notification<span class=\"token punctuation\">.</span><span class=\"token function\">open</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Notification Title'</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is the content of the notification. This is the content of the notification. This is the content of the notification.'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>openNotification<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Open the notification box<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var openNotification = function openNotification() {
    _antd.notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    });
  };

  return React.createElement(
    _antd.Button,
    {
      type: "primary",
      onClick: openNotification
    },
    "Open the notification box"
  );
}
};

/***/ }),

/***/ 2267:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "图标可以被自定义。"
      ]
    ],
    "en-US": [
      [
        "p",
        "The icon can be customized to any react node."
      ]
    ]
  },
  "meta": {
    "order": 4,
    "title": {
      "zh-CN": "自定义图标",
      "en-US": "Customized Icon"
    },
    "filename": "components/notification/demo/custom-icon.md",
    "id": "components-notification-demo-custom-icon"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button<span class=\"token punctuation\">,</span> notification<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> openNotification <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  notification<span class=\"token punctuation\">.</span><span class=\"token function\">open</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Notification Title'</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is the content of the notification. This is the content of the notification. This is the content of the notification.'</span><span class=\"token punctuation\">,</span>\n    icon<span class=\"token punctuation\">:</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>smile<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'#108ee9'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>openNotification<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Open the notification box<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var openNotification = function openNotification() {
    _antd.notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      icon: React.createElement(_antd.Icon, {
        type: "smile",
        style: {
          color: '#108ee9'
        }
      })
    });
  };

  return React.createElement(
    _antd.Button,
    {
      type: "primary",
      onClick: openNotification
    },
    "Open the notification box"
  );
}
};

/***/ }),

/***/ 2268:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "使用 style 和 className 来定义样式。"
      ]
    ],
    "en-US": [
      [
        "p",
        "The style and className are available to customize Notification."
      ]
    ]
  },
  "meta": {
    "order": 6,
    "title": {
      "zh-CN": "自定义样式",
      "en-US": "Customized style"
    },
    "filename": "components/notification/demo/custom-style.md",
    "id": "components-notification-demo-custom-style"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button<span class=\"token punctuation\">,</span> notification <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> openNotification <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  notification<span class=\"token punctuation\">.</span><span class=\"token function\">open</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Notification Title'</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is the content of the notification. This is the content of the notification. This is the content of the notification.'</span><span class=\"token punctuation\">,</span>\n    style<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n      width<span class=\"token punctuation\">:</span> <span class=\"token number\">600</span><span class=\"token punctuation\">,</span>\n      marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">335</span> <span class=\"token operator\">-</span> <span class=\"token number\">600</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>openNotification<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Open the notification box<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var openNotification = function openNotification() {
    _antd.notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      style: {
        width: 600,
        marginLeft: 335 - 600
      }
    });
  };

  return React.createElement(
    _antd.Button,
    {
      type: "primary",
      onClick: openNotification
    },
    "Open the notification box"
  );
}
};

/***/ }),

/***/ 2269:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "自定义通知框自动关闭的延时，默认",
        [
          "code",
          "4.5s"
        ],
        "，取消自动关闭只要将该值设为 ",
        [
          "code",
          "0"
        ],
        " 即可。"
      ]
    ],
    "en-US": [
      [
        "p",
        [
          "code",
          "Duration"
        ],
        " can be used to specify how long the notification stays open. After the duration time elapses,\nthe notification closes automatically. If not specified, default value is 4.5 seconds. If you set the value to 0,\nthe notification box will never close automatically."
      ]
    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "自动关闭的延时",
      "en-US": "Duration after which the notification box is closed"
    },
    "filename": "components/notification/demo/duration.md",
    "id": "components-notification-demo-duration"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button<span class=\"token punctuation\">,</span> notification <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> openNotification <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> args <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Notification Title'</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token string\">'I will never close automatically. I will be close automatically. I will never close automatically.'</span><span class=\"token punctuation\">,</span>\n    duration<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  notification<span class=\"token punctuation\">.</span><span class=\"token function\">open</span><span class=\"token punctuation\">(</span>args<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>openNotification<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Open the notification box<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var openNotification = function openNotification() {
    var args = {
      message: 'Notification Title',
      description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
      duration: 0
    };

    _antd.notification.open(args);
  };

  return React.createElement(
    _antd.Button,
    {
      type: "primary",
      onClick: openNotification
    },
    "Open the notification box"
  );
}
};

/***/ }),

/***/ 2270:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可以设置通知从右上角、右下角、左下角、左上角弹出。"
      ]
    ],
    "en-US": [
      [
        "p",
        "A notification box can pop up from ",
        [
          "code",
          "topRight"
        ],
        " or ",
        [
          "code",
          "bottomRight"
        ],
        " or ",
        [
          "code",
          "bottomLeft"
        ],
        " or ",
        [
          "code",
          "topLeft"
        ],
        "."
      ]
    ]
  },
  "meta": {
    "order": 5,
    "title": {
      "zh-CN": "位置",
      "en-US": "Placement"
    },
    "filename": "components/notification/demo/placement.md",
    "id": "components-notification-demo-placement"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button<span class=\"token punctuation\">,</span> Select<span class=\"token punctuation\">,</span> notification <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Option <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'topLeft'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'topRight'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'bottomLeft'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'bottomRight'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> openNotification <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  notification<span class=\"token punctuation\">.</span><span class=\"token function\">open</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Notification Title'</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is the content of the notification. This is the content of the notification. This is the content of the notification.'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span>\n      <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>topRight<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">120</span><span class=\"token punctuation\">,</span> marginRight<span class=\"token punctuation\">:</span> <span class=\"token number\">10</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>val<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        notification<span class=\"token punctuation\">.</span><span class=\"token function\">config</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n          placement<span class=\"token punctuation\">:</span> val<span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span></span><span class=\"token attr-name\">}</span>\n    <span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>val <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>val<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>val<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>val<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span>\n      <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>openNotification<span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">></span></span>\n      Open the notification box\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var Option = _antd.Select.Option;
  var options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];

  var openNotification = function openNotification() {
    _antd.notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    });
  };

  return React.createElement(
    "div",
    null,
    React.createElement(
      _antd.Select,
      {
        defaultValue: "topRight",
        style: {
          width: 120,
          marginRight: 10
        },
        onChange: function onChange(val) {
          _antd.notification.config({
            placement: val
          });
        }
      },
      options.map(function (val) {
        return React.createElement(
          Option,
          {
            key: val,
            value: val
          },
          val
        );
      })
    ),
    React.createElement(
      _antd.Button,
      {
        type: "primary",
        onClick: openNotification
      },
      "Open the notification box"
    )
  );
}
};

/***/ }),

/***/ 2271:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可以通过唯一的 key 来更新内容。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Update content with unique key."
      ]
    ]
  },
  "meta": {
    "order": 7,
    "title": {
      "zh-CN": "更新消息内容",
      "en-US": "Update Message Content"
    },
    "filename": "components/notification/demo/update.md",
    "id": "components-notification-demo-update"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button<span class=\"token punctuation\">,</span> notification <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> key <span class=\"token operator\">=</span> <span class=\"token string\">'updatable'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> openNotification <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  notification<span class=\"token punctuation\">.</span><span class=\"token function\">open</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">,</span>\n    message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Notification Title'</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token string\">'description.'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    notification<span class=\"token punctuation\">.</span><span class=\"token function\">open</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      key<span class=\"token punctuation\">,</span>\n      message<span class=\"token punctuation\">:</span> <span class=\"token string\">'New Title'</span><span class=\"token punctuation\">,</span>\n      description<span class=\"token punctuation\">:</span> <span class=\"token string\">'New description.'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>openNotification<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Open the notification box<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var key = 'updatable';

  var openNotification = function openNotification() {
    _antd.notification.open({
      key: key,
      message: 'Notification Title',
      description: 'description.'
    });

    setTimeout(function () {
      _antd.notification.open({
        key: key,
        message: 'New Title',
        description: 'New description.'
      });
    }, 1000);
  };

  return React.createElement(
    _antd.Button,
    {
      type: "primary",
      onClick: openNotification
    },
    "Open the notification box"
  );
}
};

/***/ }),

/***/ 2272:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "自定义关闭按钮的样式和文字。"
      ]
    ],
    "en-US": [
      [
        "p",
        "To customize the style or font of the close button."
      ]
    ]
  },
  "meta": {
    "order": 3,
    "title": {
      "zh-CN": "自定义按钮",
      "en-US": "Custom close button"
    },
    "filename": "components/notification/demo/with-btn.md",
    "id": "components-notification-demo-with-btn"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button<span class=\"token punctuation\">,</span> notification <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> close <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Notification was closed. Either the close button was clicked or duration time elapsed.'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> openNotification <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> key <span class=\"token operator\">=</span> <span class=\"token template-string\"><span class=\"token string\">`open</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>Date<span class=\"token punctuation\">.</span><span class=\"token function\">now</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">const</span> btn <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> notification<span class=\"token punctuation\">.</span><span class=\"token function\">close</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      Confirm\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  notification<span class=\"token punctuation\">.</span><span class=\"token function\">open</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Notification Title'</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token string\">'A function will be be called after the notification is closed (automatically after the \"duration\" time of manually).'</span><span class=\"token punctuation\">,</span>\n    btn<span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">,</span>\n    onClose<span class=\"token punctuation\">:</span> close<span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>openNotification<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    Open the notification box\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var close = function close() {
    console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
  };

  var openNotification = function openNotification() {
    var key = "open" + Date.now();
    var btn = React.createElement(
      _antd.Button,
      {
        type: "primary",
        size: "small",
        onClick: function onClick() {
          return _antd.notification.close(key);
        }
      },
      "Confirm"
    );

    _antd.notification.open({
      message: 'Notification Title',
      description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      btn: btn,
      key: key,
      onClose: close
    });
  };

  return React.createElement(
    _antd.Button,
    {
      type: "primary",
      onClick: openNotification
    },
    "Open the notification box"
  );
}
};

/***/ }),

/***/ 2273:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "通知提醒框左侧有图标。"
      ]
    ],
    "en-US": [
      [
        "p",
        "A notification box with a icon at the left side."
      ]
    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "带有图标的通知提醒框",
      "en-US": "Notification with icon"
    },
    "filename": "components/notification/demo/with-icon.md",
    "id": "components-notification-demo-with-icon"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button<span class=\"token punctuation\">,</span> notification <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> openNotificationWithIcon <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>type<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  notification<span class=\"token punctuation\">[</span>type<span class=\"token punctuation\">]</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Notification Title'</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is the content of the notification. This is the content of the notification. This is the content of the notification.'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">openNotificationWithIcon</span><span class=\"token punctuation\">(</span><span class=\"token string\">'success'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Success<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">openNotificationWithIcon</span><span class=\"token punctuation\">(</span><span class=\"token string\">'info'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Info<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">openNotificationWithIcon</span><span class=\"token punctuation\">(</span><span class=\"token string\">'warning'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Warning<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">openNotificationWithIcon</span><span class=\"token punctuation\">(</span><span class=\"token string\">'error'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Error<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var openNotificationWithIcon = function openNotificationWithIcon(type) {
    _antd.notification[type]({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    });
  };

  return React.createElement(
    "div",
    null,
    React.createElement(
      _antd.Button,
      {
        onClick: function onClick() {
          return openNotificationWithIcon('success');
        }
      },
      "Success"
    ),
    React.createElement(
      _antd.Button,
      {
        onClick: function onClick() {
          return openNotificationWithIcon('info');
        }
      },
      "Info"
    ),
    React.createElement(
      _antd.Button,
      {
        onClick: function onClick() {
          return openNotificationWithIcon('warning');
        }
      },
      "Warning"
    ),
    React.createElement(
      _antd.Button,
      {
        onClick: function onClick() {
          return openNotificationWithIcon('error');
        }
      },
      "Error"
    )
  );
},
  "style": "\n.code-box-demo .ant-btn {\n  margin-right: 1em;\n}\n"
};

/***/ })

});