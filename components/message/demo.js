webpackJsonp([38,204],{

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _rcNotification = __webpack_require__(158);

	var _rcNotification2 = _interopRequireDefault(_rcNotification);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultDuration = 1.5;
	var defaultTop = void 0;
	var messageInstance = void 0;
	var key = 1;
	var prefixCls = 'ant-message';
	function getMessageInstance() {
	    messageInstance = messageInstance || _rcNotification2.default.newInstance({
	        prefixCls: prefixCls,
	        transitionName: 'move-up',
	        style: { top: defaultTop }
	    });
	    return messageInstance;
	}
	function notice(content) {
	    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDuration;
	    var type = arguments[2];
	    var onClose = arguments[3];

	    var iconType = {
	        info: 'info-circle',
	        success: 'check-circle',
	        error: 'cross-circle',
	        warning: 'exclamation-circle',
	        loading: 'loading'
	    }[type];
	    var instance = getMessageInstance();
	    instance.notice({
	        key: key,
	        duration: duration,
	        style: {},
	        content: _react2.default.createElement(
	            'div',
	            { className: prefixCls + '-custom-content ' + prefixCls + '-' + type },
	            _react2.default.createElement(_icon2.default, { type: iconType }),
	            _react2.default.createElement(
	                'span',
	                null,
	                content
	            )
	        ),
	        onClose: onClose
	    });
	    return function () {
	        var target = key++;
	        return function () {
	            instance.removeNotice(target);
	        };
	    }();
	}
	exports.default = {
	    info: function info(content, duration, onClose) {
	        return notice(content, duration, 'info', onClose);
	    },
	    success: function success(content, duration, onClose) {
	        return notice(content, duration, 'success', onClose);
	    },
	    error: function error(content, duration, onClose) {
	        return notice(content, duration, 'error', onClose);
	    },

	    // Departed usage, please use warning()
	    warn: function warn(content, duration, onClose) {
	        return notice(content, duration, 'warning', onClose);
	    },
	    warning: function warning(content, duration, onClose) {
	        return notice(content, duration, 'warning', onClose);
	    },
	    loading: function loading(content, duration, onClose) {
	        return notice(content, duration, 'loading', onClose);
	    },
	    config: function config(options) {
	        if (options.top !== undefined) {
	            defaultTop = options.top;
	        }
	        if (options.duration !== undefined) {
	            defaultDuration = options.duration;
	        }
	        if (options.prefixCls !== undefined) {
	            prefixCls = options.prefixCls;
	        }
	    },
	    destroy: function destroy() {
	        if (messageInstance) {
	            messageInstance.destroy();
	            messageInstance = null;
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(130);

/***/ },

/***/ 130:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 765:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'duration': __webpack_require__(1604),
	    'info': __webpack_require__(1605),
	    'loading': __webpack_require__(1606),
	    'other': __webpack_require__(1607),
	}

/***/ },

/***/ 1604:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style4 = __webpack_require__(69);

	var _message = __webpack_require__(68);

	var _message2 = _interopRequireDefault(_message);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "自定义时长 ", ["code", "10s"], "，默认时长为 ", ["code", "1.5s"], "。"]],
	    "en-US": [["p", "Customize message display duration from default ", ["code", "1.5s"], " to ", ["code", "10s"], "."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> message<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> success <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token string\">'This is a prompt message for success, and it will disappear in 10 seconds'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">10</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>success<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Customized display duration<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var success = function success() {
	      _message2.default.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
	    };return _react2.default.createElement(
	      _button2.default,
	      { onClick: success },
	      'Customized display duration'
	    );
	  }
	};

/***/ },

/***/ 1605:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style4 = __webpack_require__(69);

	var _message = __webpack_require__(68);

	var _message2 = _interopRequireDefault(_message);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "信息提醒反馈。"]],
	    "en-US": [["p", "Normal messages as feedbacks."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> message<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> info <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  message<span class=\"token punctuation\">.</span><span class=\"token function\">info</span><span class=\"token punctuation\">(</span><span class=\"token string\">'This is a normal message'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>info<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Display normal message<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var info = function info() {
	      _message2.default.info('This is a normal message');
	    };return _react2.default.createElement(
	      _button2.default,
	      { type: 'primary', onClick: info },
	      'Display normal message'
	    );
	  }
	};

/***/ },

/***/ 1606:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style4 = __webpack_require__(69);

	var _message = __webpack_require__(68);

	var _message2 = _interopRequireDefault(_message);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "进行全局 loading，异步自行移除。"]],
	    "en-US": [["p", "Display a global loading indicator, which is dismissed by itself asynchronously."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> message<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> success <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> hide <span class=\"token operator\">=</span> message<span class=\"token punctuation\">.</span><span class=\"token function\">loading</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Action in progress..'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token comment\" spellcheck=\"true\">// Dismiss manually and asynchronously</span>\n  <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span>hide<span class=\"token punctuation\">,</span> <span class=\"token number\">2500</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>success<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Display a loading indicator<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var success = function success() {
	      var hide = _message2.default.loading('Action in progress..', 0); // Dismiss manually and asynchronously
	      setTimeout(hide, 2500);
	    };return _react2.default.createElement(
	      _button2.default,
	      { onClick: success },
	      'Display a loading indicator'
	    );
	  }
	};

/***/ },

/***/ 1607:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style4 = __webpack_require__(69);

	var _message = __webpack_require__(68);

	var _message2 = _interopRequireDefault(_message);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "包括成功、失败、警告。"]],
	    "en-US": [["p", "Messages of success, error and warning types."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> message<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> success <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token string\">'This is a message of success'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> error <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token string\">'This is a message of error'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> warning <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  message<span class=\"token punctuation\">.</span><span class=\"token function\">warning</span><span class=\"token punctuation\">(</span><span class=\"token string\">'This is message of warning'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>success<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Success<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>error<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Error<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>warning<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Warning<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var success = function success() {
	      _message2.default.success('This is a message of success');
	    };var error = function error() {
	      _message2.default.error('This is a message of error');
	    };
	    var warning = function warning() {
	      _message2.default.warning('This is message of warning');
	    };return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _button2.default,
	        { onClick: success },
	        'Success'
	      ),
	      _react2.default.createElement(
	        _button2.default,
	        { onClick: error },
	        'Error'
	      ),
	      _react2.default.createElement(
	        _button2.default,
	        { onClick: warning },
	        'Warning'
	      )
	    );
	  },
	  "style": "\n#components-message-demo-other .ant-btn {\n  margin-right: 8px;\n}\n"
	};

/***/ }

});