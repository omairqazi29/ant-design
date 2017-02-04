webpackJsonp([8,211],{

/***/ 759:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "点击确定后异步关闭对话框，例如提交表单。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Asynchronously close a modal dialog when a user clicked OK button, for example,\nyou can use this pattern when you submit a form."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "异步关闭",
	      "en-US": "Asynchronously close"
	    },
	    "filename": "components/modal/demo/async.md",
	    "id": "components-modal-demo-async"
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
	      "highlighted": "import { Modal<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Test <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      ModalText<span class=\"token punctuation\">:</span> <span class=\"token string\">'Content of the modal dialog'</span><span class=\"token punctuation\">,</span>\n      visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">showModal</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleOk</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      ModalText<span class=\"token punctuation\">:</span> <span class=\"token string\">'The modal dialog will be closed after two seconds'</span><span class=\"token punctuation\">,</span>\n      confirmLoading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n        visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        confirmLoading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">,</span> <span class=\"token number\">2000</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleCancel</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Clicked cancel button'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>showModal}<span class=\"token operator\">></span>Open a modal dialog<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Modal title<span class=\"token operator\">=</span><span class=\"token string\">\"Title of the modal dialog\"</span>\n          visible<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>visible}\n          onOk<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleOk}\n          confirmLoading<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>confirmLoading}\n          onCancel<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleCancel}\n        <span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>ModalText}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Modal<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Test <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Test = React.createClass({
	    displayName: "Test",
	    getInitialState: function getInitialState() {
	      return {
	        ModalText: 'Content of the modal dialog',
	        visible: false
	      };
	    },
	    showModal: function showModal() {
	      this.setState({
	        visible: true
	      });
	    },
	    handleOk: function handleOk() {
	      var _this = this;

	      this.setState({
	        ModalText: 'The modal dialog will be closed after two seconds',
	        confirmLoading: true
	      });
	      setTimeout(function () {
	        _this.setState({
	          visible: false,
	          confirmLoading: false
	        });
	      }, 2000);
	    },
	    handleCancel: function handleCancel() {
	      console.log('Clicked cancel button');
	      this.setState({
	        visible: false
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          _antd.Button,
	          {
	            type: "primary",
	            onClick: this.showModal
	          },
	          "Open a modal dialog"
	        ),
	        React.createElement(
	          _antd.Modal,
	          {
	            title: "Title of the modal dialog",
	            visible: this.state.visible,
	            onOk: this.handleOk,
	            confirmLoading: this.state.confirmLoading,
	            onCancel: this.handleCancel
	          },
	          React.createElement(
	            "p",
	            null,
	            this.state.ModalText
	          )
	        )
	      );
	    }
	  });
	  return React.createElement(Test, null);
	}
	};

/***/ },

/***/ 760:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "第一个对话框。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Basic modal dialog."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/modal/demo/basic.md",
	    "id": "components-modal-demo-basic"
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
	      "highlighted": "import { Modal<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return { visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">showModal</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleOk</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Clicked OK'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleCancel</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>showModal}<span class=\"token operator\">></span>Open a modal dialog<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Modal title<span class=\"token operator\">=</span><span class=\"token string\">\"Basic Modal\"</span> visible<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>visible}\n          onOk<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleOk} onCancel<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleCancel}\n        <span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>some contents<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>some contents<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>some contents<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Modal<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var App = React.createClass({
	    displayName: "App",
	    getInitialState: function getInitialState() {
	      return {
	        visible: false
	      };
	    },
	    showModal: function showModal() {
	      this.setState({
	        visible: true
	      });
	    },
	    handleOk: function handleOk() {
	      console.log('Clicked OK');
	      this.setState({
	        visible: false
	      });
	    },
	    handleCancel: function handleCancel(e) {
	      console.log(e);
	      this.setState({
	        visible: false
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          _antd.Button,
	          {
	            type: "primary",
	            onClick: this.showModal
	          },
	          "Open a modal dialog"
	        ),
	        React.createElement(
	          _antd.Modal,
	          {
	            title: "Basic Modal",
	            visible: this.state.visible,
	            onOk: this.handleOk,
	            onCancel: this.handleCancel
	          },
	          React.createElement(
	            "p",
	            null,
	            "some contents..."
	          ),
	          React.createElement(
	            "p",
	            null,
	            "some contents..."
	          ),
	          React.createElement(
	            "p",
	            null,
	            "some contents..."
	          )
	        )
	      );
	    }
	  });
	  return React.createElement(App, null);
	}
	};

/***/ },

/***/ 761:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "使用 ",
	        [
	          "code",
	          "confirm()"
	        ],
	        " 可以快捷地弹出确认框。onCancel/onOk 返回 promise 可以延迟关闭"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "To use ",
	        [
	          "code",
	          "confirm()"
	        ],
	        " to popup confirmation modal dialog. Let onCancel/onOk function return a promise object to\ndelay closing the dialog."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "确认对话框",
	      "en-US": "Confirmation modal dialog"
	    },
	    "filename": "components/modal/demo/confirm-promise.md",
	    "id": "components-modal-demo-confirm-promise"
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
	      "highlighted": "import { Modal<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> confirm <span class=\"token operator\">=</span> Modal<span class=\"token punctuation\">.</span>confirm<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">showConfirm</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n  <span class=\"token function\">confirm</span><span class=\"token punctuation\">(</span>{\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Want to delete these items?'</span><span class=\"token punctuation\">,</span>\n    content<span class=\"token punctuation\">:</span> <span class=\"token string\">'When clicked the OK button, this dialog will be closed after 1 second'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token function\">onOk</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n      return new <span class=\"token function\">Promise</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>resolve<span class=\"token punctuation\">,</span> reject<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n        <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span>Math<span class=\"token punctuation\">.</span><span class=\"token function\">random</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">></span> <span class=\"token number\">0.5</span> <span class=\"token operator\">?</span> resolve <span class=\"token punctuation\">:</span> reject<span class=\"token punctuation\">,</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">catch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Oops errors!'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">,</span>\n    <span class=\"token function\">onCancel</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {}<span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{showConfirm}<span class=\"token operator\">></span>\n    Confirmation modal dialog\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var confirm = _antd.Modal.confirm;

	  function showConfirm() {
	    confirm({
	      title: 'Want to delete these items?',
	      content: 'When clicked the OK button, this dialog will be closed after 1 second',
	      onOk: function onOk() {
	        return new Promise(function (resolve, reject) {
	          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
	        }).catch(function () {
	          return console.log('Oops errors!');
	        });
	      },
	      onCancel: function onCancel() {}
	    });
	  }

	  return React.createElement(
	    _antd.Button,
	    {
	      onClick: showConfirm
	    },
	    "Confirmation modal dialog"
	  );
	}
	};

/***/ },

/***/ 762:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "使用 ",
	        [
	          "code",
	          "confirm()"
	        ],
	        " 可以快捷地弹出确认框。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "To use ",
	        [
	          "code",
	          "confirm()"
	        ],
	        " to popup a confirmation modal dialog."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "确认对话框",
	      "en-US": "Confirmation modal dialog"
	    },
	    "filename": "components/modal/demo/confirm.md",
	    "id": "components-modal-demo-confirm"
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
	      "highlighted": "import { Modal<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> confirm <span class=\"token operator\">=</span> Modal<span class=\"token punctuation\">.</span>confirm<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">showConfirm</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n  <span class=\"token function\">confirm</span><span class=\"token punctuation\">(</span>{\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Want to delete these items?'</span><span class=\"token punctuation\">,</span>\n    content<span class=\"token punctuation\">:</span> <span class=\"token string\">'some descriptions'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token function\">onOk</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'OK'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">,</span>\n    <span class=\"token function\">onCancel</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {}<span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{showConfirm}<span class=\"token operator\">></span>\n    confirmation modal dialog\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var confirm = _antd.Modal.confirm;

	  function showConfirm() {
	    confirm({
	      title: 'Want to delete these items?',
	      content: 'some descriptions',
	      onOk: function onOk() {
	        console.log('OK');
	      },
	      onCancel: function onCancel() {}
	    });
	  }

	  return React.createElement(
	    _antd.Button,
	    {
	      onClick: showConfirm
	    },
	    "confirmation modal dialog"
	  );
	}
	};

/***/ },

/***/ 763:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "A more complex example, as illustrated in this example, we define a customized footer button bar,\nthe dialog will change to loading state after clicking submit button , when the loading is over,\nthe modal dialog will be closed."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "自定义页脚",
	      "en-US": "Customized footer"
	    },
	    "filename": "components/modal/demo/footer.md",
	    "id": "components-modal-demo-footer"
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
	      "highlighted": "import { Modal<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Test <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">showModal</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleOk</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span> visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">,</span> <span class=\"token number\">3000</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleCancel</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>showModal}<span class=\"token operator\">></span>\n          Open modal dialog\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Modal\n          visible<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>visible}\n          title<span class=\"token operator\">=</span><span class=\"token string\">\"Title\"</span>\n          onOk<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleOk}\n          onCancel<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleCancel}\n          footer<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span>\n            <span class=\"token operator\">&lt;</span>Button key<span class=\"token operator\">=</span><span class=\"token string\">\"back\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"ghost\"</span> size<span class=\"token operator\">=</span><span class=\"token string\">\"large\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleCancel}<span class=\"token operator\">></span>Return<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n            <span class=\"token operator\">&lt;</span>Button key<span class=\"token operator\">=</span><span class=\"token string\">\"submit\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> size<span class=\"token operator\">=</span><span class=\"token string\">\"large\"</span> loading<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading} onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleOk}<span class=\"token operator\">></span>\n              Submit\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">]</span>}\n        <span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Some contents<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Some contents<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Some contents<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Some contents<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Some contents<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Modal<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Test <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Test = React.createClass({
	    displayName: "Test",
	    getInitialState: function getInitialState() {
	      return {
	        loading: false,
	        visible: false
	      };
	    },
	    showModal: function showModal() {
	      this.setState({
	        visible: true
	      });
	    },
	    handleOk: function handleOk() {
	      var _this = this;

	      this.setState({
	        loading: true
	      });
	      setTimeout(function () {
	        _this.setState({
	          loading: false,
	          visible: false
	        });
	      }, 3000);
	    },
	    handleCancel: function handleCancel() {
	      this.setState({
	        visible: false
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          _antd.Button,
	          {
	            type: "primary",
	            onClick: this.showModal
	          },
	          "Open modal dialog"
	        ),
	        React.createElement(
	          _antd.Modal,
	          {
	            visible: this.state.visible,
	            title: "Title",
	            onOk: this.handleOk,
	            onCancel: this.handleCancel,
	            footer: [React.createElement(
	              _antd.Button,
	              {
	                key: "back",
	                type: "ghost",
	                size: "large",
	                onClick: this.handleCancel
	              },
	              "Return"
	            ), React.createElement(
	              _antd.Button,
	              {
	                key: "submit",
	                type: "primary",
	                size: "large",
	                loading: this.state.loading,
	                onClick: this.handleOk
	              },
	              "Submit"
	            )]
	          },
	          React.createElement(
	            "p",
	            null,
	            "Some contents..."
	          ),
	          React.createElement(
	            "p",
	            null,
	            "Some contents..."
	          ),
	          React.createElement(
	            "p",
	            null,
	            "Some contents..."
	          ),
	          React.createElement(
	            "p",
	            null,
	            "Some contents..."
	          ),
	          React.createElement(
	            "p",
	            null,
	            "Some contents..."
	          )
	        )
	      );
	    }
	  });
	  return React.createElement(Test, null);
	}
	};

/***/ },

/***/ 764:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "各种类型的信息提示，只提供一个按钮用于关闭。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "In the various types of information modal dialog, only one button to close dialog is provided."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "信息提示",
	      "en-US": "Information modal dialog"
	    },
	    "filename": "components/modal/demo/info.md",
	    "id": "components-modal-demo-info"
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
	      "highlighted": "import { Modal<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">info</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n  Modal<span class=\"token punctuation\">.</span><span class=\"token function\">info</span><span class=\"token punctuation\">(</span>{\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is a notification message'</span><span class=\"token punctuation\">,</span>\n    content<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>some messages<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>some messages<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>some messages<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>some messages<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token function\">onOk</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {}<span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n  Modal<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span>{\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is a success message'</span><span class=\"token punctuation\">,</span>\n    content<span class=\"token punctuation\">:</span> <span class=\"token string\">'some messages...some messages...'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n  Modal<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span>{\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is an error message'</span><span class=\"token punctuation\">,</span>\n    content<span class=\"token punctuation\">:</span> <span class=\"token string\">'some messages...some messages...'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">warning</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n  Modal<span class=\"token punctuation\">.</span><span class=\"token function\">warning</span><span class=\"token punctuation\">(</span>{\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is a warning message'</span><span class=\"token punctuation\">,</span>\n    content<span class=\"token punctuation\">:</span> <span class=\"token string\">'some messages...some messages...'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{info}<span class=\"token operator\">></span>Info<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{success}<span class=\"token operator\">></span>Success<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{error}<span class=\"token operator\">></span>Error<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{warning}<span class=\"token operator\">></span>Warning<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function info() {
	    _antd.Modal.info({
	      title: 'This is a notification message',
	      content: React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "p",
	          null,
	          "some messages...some messages..."
	        ),
	        React.createElement(
	          "p",
	          null,
	          "some messages...some messages..."
	        )
	      ),
	      onOk: function onOk() {}
	    });
	  }

	  function success() {
	    _antd.Modal.success({
	      title: 'This is a success message',
	      content: 'some messages...some messages...'
	    });
	  }

	  function error() {
	    _antd.Modal.error({
	      title: 'This is an error message',
	      content: 'some messages...some messages...'
	    });
	  }

	  function warning() {
	    _antd.Modal.warning({
	      title: 'This is a warning message',
	      content: 'some messages...some messages...'
	    });
	  }

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      _antd.Button,
	      {
	        onClick: info
	      },
	      "Info"
	    ),
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
	}
	};

/***/ },

/***/ 765:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "设置 ",
	        [
	          "code",
	          "okText"
	        ],
	        " 与 ",
	        [
	          "code",
	          "cancelText"
	        ],
	        " 以自定义按钮文字。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "To customize the text of the buttons, you need to set ",
	        [
	          "code",
	          "okText"
	        ],
	        " and ",
	        [
	          "code",
	          "cancelText"
	        ],
	        " props."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "国际化",
	      "en-US": "Internationalization"
	    },
	    "filename": "components/modal/demo/locale.md",
	    "id": "components-modal-demo-locale"
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
	      "highlighted": "import { Modal<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> LocalizedModal <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return { visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">showModal</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleOk</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleCancel</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>showModal}<span class=\"token operator\">></span>Show Modal<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Modal title<span class=\"token operator\">=</span><span class=\"token string\">\"Modal\"</span> visible<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>visible}\n          onOk<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleOk} onCancel<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleCancel}\n          okText<span class=\"token operator\">=</span><span class=\"token string\">\"OK\"</span> cancelText<span class=\"token operator\">=</span><span class=\"token string\">\"Cancel\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Bla bla <span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Bla bla <span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Bla bla <span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Modal<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">confirm</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n  Modal<span class=\"token punctuation\">.</span><span class=\"token function\">confirm</span><span class=\"token punctuation\">(</span>{\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Confirm'</span><span class=\"token punctuation\">,</span>\n    content<span class=\"token punctuation\">:</span> <span class=\"token string\">'Bla bla ...'</span><span class=\"token punctuation\">,</span>\n    okText<span class=\"token punctuation\">:</span> <span class=\"token string\">'OK'</span><span class=\"token punctuation\">,</span>\n    cancelText<span class=\"token punctuation\">:</span> <span class=\"token string\">'Cancel'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>LocalizedModal <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{confirm}<span class=\"token operator\">></span>confirm<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var LocalizedModal = React.createClass({
	    displayName: "LocalizedModal",
	    getInitialState: function getInitialState() {
	      return {
	        visible: false
	      };
	    },
	    showModal: function showModal() {
	      this.setState({
	        visible: true
	      });
	    },
	    handleOk: function handleOk() {
	      this.setState({
	        visible: false
	      });
	    },
	    handleCancel: function handleCancel() {
	      this.setState({
	        visible: false
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          _antd.Button,
	          {
	            type: "primary",
	            onClick: this.showModal
	          },
	          "Show Modal"
	        ),
	        React.createElement(
	          _antd.Modal,
	          {
	            title: "Modal",
	            visible: this.state.visible,
	            onOk: this.handleOk,
	            onCancel: this.handleCancel,
	            okText: "OK",
	            cancelText: "Cancel"
	          },
	          React.createElement(
	            "p",
	            null,
	            "Bla bla ..."
	          ),
	          React.createElement(
	            "p",
	            null,
	            "Bla bla ..."
	          ),
	          React.createElement(
	            "p",
	            null,
	            "Bla bla ..."
	          )
	        )
	      );
	    }
	  });

	  function confirm() {
	    _antd.Modal.confirm({
	      title: 'Confirm',
	      content: 'Bla bla ...',
	      okText: 'OK',
	      cancelText: 'Cancel'
	    });
	  }

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(LocalizedModal, null),
	    React.createElement("br", null),
	    React.createElement(
	      _antd.Button,
	      {
	        onClick: confirm
	      },
	      "confirm"
	    )
	  );
	}
	};

/***/ },

/***/ 766:
/***/ function(module, exports) {

	module.exports = {
	  "meta": {

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
	        [
	          "code",
	          "1.0"
	        ],
	        " 之后，Modal 的 ",
	        [
	          "code",
	          "align"
	        ],
	        " 属性被移除，您可以直接使用 ",
	        [
	          "code",
	          "style.top"
	        ],
	        " 或配合其他样式来设置对话框位置。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "After release ",
	        [
	          "code",
	          "1.0"
	        ],
	        ",  Modal's ",
	        [
	          "code",
	          "align"
	        ],
	        " prop was removed. You can use ",
	        [
	          "code",
	          "style.top"
	        ],
	        " or other styles to\nset position of modal dialog."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 7,
	    "title": {
	      "zh-CN": "自定义位置",
	      "en-US": "To customize the position of modal"
	    },
	    "filename": "components/modal/demo/position.md",
	    "id": "components-modal-demo-position"
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
	      "highlighted": "import { Modal<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      modal1Visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      modal2Visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">setModal1Visible</span><span class=\"token punctuation\">(</span>modal1Visible<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ modal1Visible }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">setModal2Visible</span><span class=\"token punctuation\">(</span>modal2Visible<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ modal2Visible }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> onClick<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span><span class=\"token function\">setModal1Visible</span><span class=\"token punctuation\">(</span><span class=\"token boolean\">true</span><span class=\"token punctuation\">)</span>}<span class=\"token operator\">></span>Display a modal dialog at 20px <span class=\"token keyword\">to</span> Top<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Modal\n          title<span class=\"token operator\">=</span><span class=\"token string\">\"20px to Top\"</span>\n          style<span class=\"token operator\">=</span>{{ top<span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> }}\n          visible<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>modal1Visible}\n          onOk<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span><span class=\"token function\">setModal1Visible</span><span class=\"token punctuation\">(</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">)</span>}\n          onCancel<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span><span class=\"token function\">setModal1Visible</span><span class=\"token punctuation\">(</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>some contents<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>some contents<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>some contents<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Modal<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> onClick<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span><span class=\"token function\">setModal2Visible</span><span class=\"token punctuation\">(</span><span class=\"token boolean\">true</span><span class=\"token punctuation\">)</span>}<span class=\"token operator\">></span>Vertically centered modal dialog<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Modal\n          title<span class=\"token operator\">=</span><span class=\"token string\">\"Vertically centered modal dialog\"</span>\n          wrapClassName<span class=\"token operator\">=</span><span class=\"token string\">\"vertical-center-modal\"</span>\n          visible<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>modal2Visible}\n          onOk<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span><span class=\"token function\">setModal2Visible</span><span class=\"token punctuation\">(</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">)</span>}\n          onCancel<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span><span class=\"token function\">setModal2Visible</span><span class=\"token punctuation\">(</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>some contents<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>some contents<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>some contents<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Modal<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var App = React.createClass({
	    displayName: "App",
	    getInitialState: function getInitialState() {
	      return {
	        modal1Visible: false,
	        modal2Visible: false
	      };
	    },
	    setModal1Visible: function setModal1Visible(modal1Visible) {
	      this.setState({
	        modal1Visible: modal1Visible
	      });
	    },
	    setModal2Visible: function setModal2Visible(modal2Visible) {
	      this.setState({
	        modal2Visible: modal2Visible
	      });
	    },
	    render: function render() {
	      var _this = this;

	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          _antd.Button,
	          {
	            type: "primary",
	            onClick: function onClick() {
	              return _this.setModal1Visible(true);
	            }
	          },
	          "Display a modal dialog at 20px to Top"
	        ),
	        React.createElement(
	          _antd.Modal,
	          {
	            title: "20px to Top",
	            style: {
	              top: 20
	            },
	            visible: this.state.modal1Visible,
	            onOk: function onOk() {
	              return _this.setModal1Visible(false);
	            },
	            onCancel: function onCancel() {
	              return _this.setModal1Visible(false);
	            }
	          },
	          React.createElement(
	            "p",
	            null,
	            "some contents..."
	          ),
	          React.createElement(
	            "p",
	            null,
	            "some contents..."
	          ),
	          React.createElement(
	            "p",
	            null,
	            "some contents..."
	          )
	        ),
	        React.createElement("br", null),
	        React.createElement("br", null),
	        React.createElement(
	          _antd.Button,
	          {
	            type: "primary",
	            onClick: function onClick() {
	              return _this.setModal2Visible(true);
	            }
	          },
	          "Vertically centered modal dialog"
	        ),
	        React.createElement(
	          _antd.Modal,
	          {
	            title: "Vertically centered modal dialog",
	            wrapClassName: "vertical-center-modal",
	            visible: this.state.modal2Visible,
	            onOk: function onOk() {
	              return _this.setModal2Visible(false);
	            },
	            onCancel: function onCancel() {
	              return _this.setModal2Visible(false);
	            }
	          },
	          React.createElement(
	            "p",
	            null,
	            "some contents..."
	          ),
	          React.createElement(
	            "p",
	            null,
	            "some contents..."
	          ),
	          React.createElement(
	            "p",
	            null,
	            "some contents..."
	          )
	        )
	      );
	    }
	  });
	  return React.createElement(App, null);
	},
	  "style": "/* use css to set position of modal */\n.vertical-center-modal {\n  text-align: center;\n  white-space: nowrap;\n}\n\n.vertical-center-modal:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n  width: 0;\n}\n\n.vertical-center-modal .ant-modal {\n  display: inline-block;\n  vertical-align: middle;\n  top: 0;\n  text-align: left;\n}\n\n/*\n// Use flex which not working in IE\n.vertical-center-modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.vertical-center-modal .ant-modal {\n  top: 0;\n}\n*/",
	  "highlightedStyle": "<span class=\"token comment\" spellcheck=\"true\">/* use css to set position of modal */</span>\n<span class=\"token selector\"><span class=\"token class\">.vertical-center-modal</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">white-space</span><span class=\"token punctuation\">:</span> nowrap<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.vertical-center-modal</span><span class=\"token pseudo-element\">:before</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">content</span><span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> inline-block<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">vertical-align</span><span class=\"token punctuation\">:</span> middle<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.vertical-center-modal</span> <span class=\"token class\">.ant-modal</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> inline-block<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">vertical-align</span><span class=\"token punctuation\">:</span> middle<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> left<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\" spellcheck=\"true\">/*\n// Use flex which not working in IE\n.vertical-center-modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.vertical-center-modal .ant-modal {\n  top: 0;\n}\n*/</span>"
	};

/***/ },

/***/ 1055:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'async': __webpack_require__(759),
	    'basic': __webpack_require__(760),
	    'confirm-promise': __webpack_require__(761),
	    'confirm': __webpack_require__(762),
	    'footer': __webpack_require__(763),
	    'info': __webpack_require__(764),
	    'locale': __webpack_require__(765),
	    'manual': __webpack_require__(766),
	    'position': __webpack_require__(767),
	}

/***/ }

});