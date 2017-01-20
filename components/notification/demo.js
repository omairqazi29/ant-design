webpackJsonp([29,210],{

/***/ 921:
/***/ function(module, exports, __webpack_require__) {

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
	      "highlighted": "import { Button<span class=\"token punctuation\">,</span> notification } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> openNotification <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n  notification<span class=\"token punctuation\">.</span><span class=\"token function\">open</span><span class=\"token punctuation\">(</span>{\n    message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Notification Title'</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is the content of the notification. This is the content of the notification. This is the content of the notification.'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> onClick<span class=\"token operator\">=</span>{openNotification}<span class=\"token operator\">></span>Open the notification box<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

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

/***/ },

/***/ 922:
/***/ function(module, exports, __webpack_require__) {

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
	      "highlighted": "import { Button<span class=\"token punctuation\">,</span> notification<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> openNotification <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n  notification<span class=\"token punctuation\">.</span><span class=\"token function\">open</span><span class=\"token punctuation\">(</span>{\n    message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Notification Title'</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is the content of the notification. This is the content of the notification. This is the content of the notification.'</span><span class=\"token punctuation\">,</span>\n    icon<span class=\"token punctuation\">:</span> <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"smile-circle\"</span> style<span class=\"token operator\">=</span>{{ color<span class=\"token punctuation\">:</span> <span class=\"token string\">'#108ee9'</span> }} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> onClick<span class=\"token operator\">=</span>{openNotification}<span class=\"token operator\">></span>Open the notification box<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var openNotification = function openNotification() {
	    _antd.notification.open({
	      message: 'Notification Title',
	      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
	      icon: React.createElement(_antd.Icon, {
	        type: "smile-circle",
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

/***/ },

/***/ 923:
/***/ function(module, exports, __webpack_require__) {

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
	      "highlighted": "import { Button<span class=\"token punctuation\">,</span> notification } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> openNotification <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n  <span class=\"token keyword\">const</span> args <span class=\"token operator\">=</span> {\n    message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Notification Title'</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token string\">'I will never close automatically. I will be close automatically. I will never close automatically.'</span><span class=\"token punctuation\">,</span>\n    duration<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  notification<span class=\"token punctuation\">.</span><span class=\"token function\">open</span><span class=\"token punctuation\">(</span>args<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> onClick<span class=\"token operator\">=</span>{openNotification}<span class=\"token operator\">></span>Open the notification box<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

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

/***/ },

/***/ 924:
/***/ function(module, exports, __webpack_require__) {

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
	      "highlighted": "import { Button<span class=\"token punctuation\">,</span> notification } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> close <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Notification was closed. Either the close button was clicked or duration time elapsed.'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> openNotification <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n  <span class=\"token keyword\">const</span> key <span class=\"token operator\">=</span> `open${Date<span class=\"token punctuation\">.</span><span class=\"token function\">now</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>}`<span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token keyword\">const</span> btnClick <span class=\"token operator\">=</span> function <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> <span class=\"token keyword\">to</span> hide notification box\n    notification<span class=\"token punctuation\">.</span><span class=\"token function\">close</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token keyword\">const</span> btn <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span> onClick<span class=\"token operator\">=</span>{btnClick}<span class=\"token operator\">></span>\n      Confirm\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n  <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  notification<span class=\"token punctuation\">.</span><span class=\"token function\">open</span><span class=\"token punctuation\">(</span>{\n    message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Notification Title'</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token string\">'A function will be be called after the notification is closed (automatically after the \"duration\" time of manually).'</span><span class=\"token punctuation\">,</span>\n    btn<span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">,</span>\n    onClose<span class=\"token punctuation\">:</span> close<span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> onClick<span class=\"token operator\">=</span>{openNotification}<span class=\"token operator\">></span>Open the notification box<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var close = function close() {
	    console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
	  };

	  var openNotification = function openNotification() {
	    var key = "open" + Date.now();

	    var btnClick = function btnClick() {
	      // to hide notification box
	      _antd.notification.close(key);
	    };

	    var btn = React.createElement(
	      _antd.Button,
	      {
	        type: "primary",
	        size: "small",
	        onClick: btnClick
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

/***/ },

/***/ 925:
/***/ function(module, exports, __webpack_require__) {

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
	      "highlighted": "import { Button<span class=\"token punctuation\">,</span> notification } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> openNotificationWithIcon <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>type<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n  notification<span class=\"token punctuation\">[</span>type<span class=\"token punctuation\">]</span><span class=\"token punctuation\">(</span>{\n    message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Notification Title'</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is the content of the notification. This is the content of the notification. This is the content of the notification.'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">openNotificationWithIcon</span><span class=\"token punctuation\">(</span><span class=\"token string\">'success'</span><span class=\"token punctuation\">)</span>}<span class=\"token operator\">></span>Success<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">openNotificationWithIcon</span><span class=\"token punctuation\">(</span><span class=\"token string\">'info'</span><span class=\"token punctuation\">)</span>}<span class=\"token operator\">></span>Info<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">openNotificationWithIcon</span><span class=\"token punctuation\">(</span><span class=\"token string\">'warning'</span><span class=\"token punctuation\">)</span>}<span class=\"token operator\">></span>Warning<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">openNotificationWithIcon</span><span class=\"token punctuation\">(</span><span class=\"token string\">'error'</span><span class=\"token punctuation\">)</span>}<span class=\"token operator\">></span>Error<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

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

/***/ },

/***/ 1218:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(921),
	    'custom-icon': __webpack_require__(922),
	    'duration': __webpack_require__(923),
	    'with-btn': __webpack_require__(924),
	    'with-icon': __webpack_require__(925),
	}

/***/ }

});