webpackJsonp([29,201],{

/***/ 823:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(11);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _style4 = __webpack_require__(182);

	var _notification = __webpack_require__(181);

	var _notification2 = _interopRequireDefault(_notification);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "最简单的用法，4.5 秒后自动关闭。"]],
	    "en-US": [["p", "The simplest usage that close the notification box after 4.5s."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Button<span class=\"token punctuation\" >,</span> notification <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> openNotification <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  notification<span class=\"token punctuation\" >.</span><span class=\"token function\" >open</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n    message<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Notification Title'</span><span class=\"token punctuation\" >,</span>\n    description<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'This is the content of the notification. This is the content of the notification. This is the content of the notification.'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>openNotification<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Open the notification box<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var openNotification = function openNotification() {
	      _notification2.default.open({
	        message: 'Notification Title', description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.' });
	    };return _react2.default.createElement(
	      _button2.default,
	      { type: 'primary', onClick: openNotification },
	      'Open the notification box'
	    );
	  }
	};

/***/ },

/***/ 824:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(11);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _style5 = __webpack_require__(14);

	var _icon = __webpack_require__(10);

	var _icon2 = _interopRequireDefault(_icon);

	var _style6 = __webpack_require__(182);

	var _notification = __webpack_require__(181);

	var _notification2 = _interopRequireDefault(_notification);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "图标可以被自定义。"]],
	    "en-US": [["p", "The icon can be customized to any react node."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Button<span class=\"token punctuation\" >,</span> notification<span class=\"token punctuation\" >,</span> Icon <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> openNotification <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  notification<span class=\"token punctuation\" >.</span><span class=\"token function\" >open</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n    message<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Notification Title'</span><span class=\"token punctuation\" >,</span>\n    description<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'This is the content of the notification. This is the content of the notification. This is the content of the notification.'</span><span class=\"token punctuation\" >,</span>\n    icon<span class=\"token punctuation\" >:</span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>smile-circle<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> color<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'#108ee9'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>openNotification<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Open the notification box<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var openNotification = function openNotification() {
	      _notification2.default.open({ message: 'Notification Title', description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.', icon: _react2.default.createElement(_icon2.default, { type: 'smile-circle', style: { color: '#108ee9' } }) });
	    };return _react2.default.createElement(
	      _button2.default,
	      { type: 'primary', onClick: openNotification },
	      'Open the notification box'
	    );
	  }
	};

/***/ },

/***/ 825:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(11);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _style4 = __webpack_require__(182);

	var _notification = __webpack_require__(181);

	var _notification2 = _interopRequireDefault(_notification);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "自定义通知框自动关闭的延时，默认", ["code", "4.5s"], "，取消自动关闭只要将该值设为 ", ["code", "0"], " 即可。"]],
	    "en-US": [["p", ["code", "Duration"], " can be used to specify how long the notification stays open. After the duration time elapses,\nthe notification closes automatically. If not specified, default value is 4.5 seconds. If you set the value to 0,\nthe notification box will never close automatically."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Button<span class=\"token punctuation\" >,</span> notification <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> openNotification <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token keyword\" >const</span> args <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n    message<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Notification Title'</span><span class=\"token punctuation\" >,</span>\n    description<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'I will never close automatically. I will be close automatically. I will never close automatically.'</span><span class=\"token punctuation\" >,</span>\n    duration<span class=\"token punctuation\" >:</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  notification<span class=\"token punctuation\" >.</span><span class=\"token function\" >open</span><span class=\"token punctuation\" >(</span>args<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>openNotification<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Open the notification box<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var openNotification = function openNotification() {
	      var args = {
	        message: 'Notification Title', description: 'I will never close automatically. I will be close automatically. I will never close automatically.', duration: 0 };_notification2.default.open(args);
	    };return _react2.default.createElement(
	      _button2.default,
	      { type: 'primary', onClick: openNotification },
	      'Open the notification box'
	    );
	  }
	};

/***/ },

/***/ 826:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(11);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _style4 = __webpack_require__(182);

	var _notification = __webpack_require__(181);

	var _notification2 = _interopRequireDefault(_notification);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "自定义关闭按钮的样式和文字。"]],
	    "en-US": [["p", "To customize the style or font of the close button."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Button<span class=\"token punctuation\" >,</span> notification <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> close <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'Notification was closed. Either the close button was clicked or duration time elapsed.'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> openNotification <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token keyword\" >const</span> key <span class=\"token operator\" >=</span> <span class=\"token template-string\" ><span class=\"token string\" >`open</span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>Date<span class=\"token punctuation\" >.</span><span class=\"token function\" >now</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >const</span> btnClick <span class=\"token operator\" >=</span> <span class=\"token keyword\" >function</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// to hide notification box</span>\n    notification<span class=\"token punctuation\" >.</span><span class=\"token function\" >close</span><span class=\"token punctuation\" >(</span>key<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >const</span> btn <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>btnClick<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n      Confirm\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  notification<span class=\"token punctuation\" >.</span><span class=\"token function\" >open</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n    message<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Notification Title'</span><span class=\"token punctuation\" >,</span>\n    description<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'A function will be be called after the notification is closed (automatically after the \"duration\" time of manually).'</span><span class=\"token punctuation\" >,</span>\n    btn<span class=\"token punctuation\" >,</span>\n    key<span class=\"token punctuation\" >,</span>\n    onClose<span class=\"token punctuation\" >:</span> close<span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>openNotification<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Open the notification box<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\nmountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var close = function close() {
	      console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
	    };var openNotification = function openNotification() {
	      var key = 'open' + Date.now();var btnClick = function btnClick() {
	        // to hide notification box
	        _notification2.default.close(key);
	      };var btn = _react2.default.createElement(
	        _button2.default,
	        { type: 'primary', size: 'small', onClick: btnClick },
	        'Confirm'
	      );_notification2.default.open({ message: 'Notification Title', description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).', btn: btn, key: key, onClose: close });
	    };return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'primary', onClick: openNotification },
	        'Open the notification box'
	      )
	    );
	  }
	};

/***/ },

/***/ 827:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(11);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _style4 = __webpack_require__(182);

	var _notification = __webpack_require__(181);

	var _notification2 = _interopRequireDefault(_notification);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "通知提醒框左侧有图标。"]],
	    "en-US": [["p", "A notification box with a icon at the left side."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Button<span class=\"token punctuation\" >,</span> notification <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> openNotificationWithIcon <span class=\"token operator\" >=</span> type <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >(</span>\n  notification<span class=\"token punctuation\" >[</span>type<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n    message<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Notification Title'</span><span class=\"token punctuation\" >,</span>\n    description<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'This is the content of the notification. This is the content of the notification. This is the content of the notification.'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >openNotificationWithIcon</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'success'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Success<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >openNotificationWithIcon</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'info'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Info<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >openNotificationWithIcon</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'warning'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Warning<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >openNotificationWithIcon</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'error'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Error<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var openNotificationWithIcon = function openNotificationWithIcon(type) {
	      return function () {
	        return _notification2.default[type]({ message: 'Notification Title', description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.' });
	      };
	    };return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _button2.default,
	        { onClick: openNotificationWithIcon('success') },
	        'Success'
	      ),
	      _react2.default.createElement(
	        _button2.default,
	        { onClick: openNotificationWithIcon('info') },
	        'Info'
	      ),
	      _react2.default.createElement(
	        _button2.default,
	        { onClick: openNotificationWithIcon('warning') },
	        'Warning'
	      ),
	      _react2.default.createElement(
	        _button2.default,
	        { onClick: openNotificationWithIcon('error') },
	        'Error'
	      )
	    );
	  },
	  "style": "\n.code-box-demo .ant-btn {\n  margin-right: 1em;\n}\n"
	};

/***/ },

/***/ 1203:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(823),
	    'custom-icon': __webpack_require__(824),
	    'duration': __webpack_require__(825),
	    'with-btn': __webpack_require__(826),
	    'with-icon': __webpack_require__(827),
	}

/***/ }

});