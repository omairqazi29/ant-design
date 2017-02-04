webpackJsonp([37,211],{

/***/ 903:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "自定义时长 ",
	        [
	          "code",
	          "10s"
	        ],
	        "，默认时长为 ",
	        [
	          "code",
	          "1.5s"
	        ],
	        "。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Customize message display duration from default ",
	        [
	          "code",
	          "1.5s"
	        ],
	        " to ",
	        [
	          "code",
	          "10s"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "修改延时",
	      "en-US": "Customize duration"
	    },
	    "filename": "components/message/demo/duration.md",
	    "id": "components-message-demo-duration"
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
	      "highlighted": "import { message<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> success <span class=\"token operator\">=</span> function <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n  message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token string\">'This is a prompt message for success, and it will disappear in 10 seconds'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">10</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{success}<span class=\"token operator\">></span>Customized display duration<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var success = function success() {
	    _antd.message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
	  };

	  return React.createElement(
	    _antd.Button,
	    {
	      onClick: success
	    },
	    "Customized display duration"
	  );
	}
	};

/***/ },

/***/ 904:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "信息提醒反馈。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Normal messages as feedbacks."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "普通提示",
	      "en-US": "Normal prompt"
	    },
	    "filename": "components/message/demo/info.md",
	    "id": "components-message-demo-info"
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
	      "highlighted": "import { message<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> info <span class=\"token operator\">=</span> function <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n  message<span class=\"token punctuation\">.</span><span class=\"token function\">info</span><span class=\"token punctuation\">(</span><span class=\"token string\">'This is a normal message'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> onClick<span class=\"token operator\">=</span>{info}<span class=\"token operator\">></span>Display normal message<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var info = function info() {
	    _antd.message.info('This is a normal message');
	  };

	  return React.createElement(
	    _antd.Button,
	    {
	      type: "primary",
	      onClick: info
	    },
	    "Display normal message"
	  );
	}
	};

/***/ },

/***/ 905:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "进行全局 loading，异步自行移除。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Display a global loading indicator, which is dismissed by itself asynchronously."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "加载中",
	      "en-US": "Message of loading"
	    },
	    "filename": "components/message/demo/loading.md",
	    "id": "components-message-demo-loading"
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
	      "highlighted": "import { message<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> success <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n  <span class=\"token keyword\">const</span> hide <span class=\"token operator\">=</span> message<span class=\"token punctuation\">.</span><span class=\"token function\">loading</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Action in progress..'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token operator\">/</span><span class=\"token operator\">/</span> Dismiss manually <span class=\"token operator\">and</span> asynchronously\n  <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span>hide<span class=\"token punctuation\">,</span> <span class=\"token number\">2500</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{success}<span class=\"token operator\">></span>Display a loading indicator<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var success = function success() {
	    var hide = _antd.message.loading('Action in progress..', 0); // Dismiss manually and asynchronously


	    setTimeout(hide, 2500);
	  };

	  return React.createElement(
	    _antd.Button,
	    {
	      onClick: success
	    },
	    "Display a loading indicator"
	  );
	}
	};

/***/ },

/***/ 906:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "包括成功、失败、警告。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Messages of success, error and warning types."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "其他提示类型",
	      "en-US": "Other types of message"
	    },
	    "filename": "components/message/demo/other.md",
	    "id": "components-message-demo-other"
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
	      "highlighted": "import { message<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> success <span class=\"token operator\">=</span> function <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n  message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token string\">'This is a message of success'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> error <span class=\"token operator\">=</span> function <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n  message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token string\">'This is a message of error'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> warning <span class=\"token operator\">=</span> function <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n  message<span class=\"token punctuation\">.</span><span class=\"token function\">warning</span><span class=\"token punctuation\">(</span><span class=\"token string\">'This is message of warning'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{success}<span class=\"token operator\">></span>Success<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{error}<span class=\"token operator\">></span>Error<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{warning}<span class=\"token operator\">></span>Warning<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var success = function success() {
	    _antd.message.success('This is a message of success');
	  };

	  var error = function error() {
	    _antd.message.error('This is a message of error');
	  };

	  var warning = function warning() {
	    _antd.message.warning('This is message of warning');
	  };

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      _antd.Button,
	      {
	        onClick: success
	      },
	      "Success"
	    ),
	    React.createElement(
	      _antd.Button,
	      {
	        onClick: error
	      },
	      "Error"
	    ),
	    React.createElement(
	      _antd.Button,
	      {
	        onClick: warning
	      },
	      "Warning"
	    )
	  );
	},
	  "style": "\n#components-message-demo-other .ant-btn {\n  margin-right: 8px;\n}\n"
	};

/***/ },

/***/ 1220:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'duration': __webpack_require__(903),
	    'info': __webpack_require__(904),
	    'loading': __webpack_require__(905),
	    'other': __webpack_require__(906),
	}

/***/ }

});