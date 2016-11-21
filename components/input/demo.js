webpackJsonp([15,202],{

/***/ 758:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(14);

	var _icon = __webpack_require__(12);

	var _icon2 = _interopRequireDefault(_icon);

	var _style5 = __webpack_require__(21);

	var _input = __webpack_require__(25);

	var _input2 = _interopRequireDefault(_input);

	var _style6 = __webpack_require__(28);

	var _select = __webpack_require__(27);

	var _select2 = _interopRequireDefault(_select);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "用于配置一些固定组合。"]],
	    "en-US": [["p", "Using pre & post tabs example."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "前置/后置标签",
	      "en-US": "Pre / Post tab"
	    },
	    "filename": "components/input/demo/addon.md",
	    "id": "components-input-demo-addon"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Input<span class=\"token punctuation\" >,</span> Select<span class=\"token punctuation\" >,</span> Icon <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> Option <span class=\"token operator\" >=</span> Select<span class=\"token punctuation\" >.</span>Option<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> selectBefore <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Select</span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Http://<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >80</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Option</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Http://<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Http<span class=\"token punctuation\" >:</span><span class=\"token operator\" >/</span><span class=\"token operator\" >/</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Option</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Option</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Https://<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Https<span class=\"token punctuation\" >:</span><span class=\"token operator\" >/</span><span class=\"token operator\" >/</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Option</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Select</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> selectAfter <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Select</span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>.com<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >70</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Option</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>.com<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >.</span>com<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Option</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Option</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>.jp<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >.</span>jp<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Option</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Option</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>.cn<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >.</span>cn<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Option</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Option</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>.org<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >.</span>org<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Option</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Select</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> marginBottom<span class=\"token punctuation\" >:</span> <span class=\"token number\" >16</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Input</span> <span class=\"token attr-name\" >addonBefore</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Http://<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >addonAfter</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>.com<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>mysite<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> marginBottom<span class=\"token punctuation\" >:</span> <span class=\"token number\" >16</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Input</span> <span class=\"token attr-name\" >addonBefore</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>selectBefore<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >addonAfter</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>selectAfter<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>mysite<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> marginBottom<span class=\"token punctuation\" >:</span> <span class=\"token number\" >16</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Input</span> <span class=\"token attr-name\" >addonAfter={&lt;Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>setting<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >}</span> defaultValue<span class=\"token operator\" >=</span><span class=\"token string\" >\"mysite\"</span> <span class=\"token operator\" >/</span><span class=\"token operator\" >></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Option = _select2.default.Option;var selectBefore = _react2.default.createElement(
	      _select2.default,
	      { defaultValue: 'Http://', style: { width: 80 } },
	      _react2.default.createElement(
	        Option,
	        { value: 'Http://' },
	        'Http://'
	      ),
	      _react2.default.createElement(
	        Option,
	        { value: 'Https://' },
	        'Https://'
	      )
	    );var selectAfter = _react2.default.createElement(
	      _select2.default,
	      { defaultValue: '.com', style: { width: 70 } },
	      _react2.default.createElement(
	        Option,
	        { value: '.com' },
	        '.com'
	      ),
	      _react2.default.createElement(
	        Option,
	        { value: '.jp' },
	        '.jp'
	      ),
	      _react2.default.createElement(
	        Option,
	        { value: '.cn' },
	        '.cn'
	      ),
	      _react2.default.createElement(
	        Option,
	        { value: '.org' },
	        '.org'
	      )
	    );return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        { style: { marginBottom: 16 } },
	        _react2.default.createElement(_input2.default, { addonBefore: 'Http://', addonAfter: '.com', defaultValue: 'mysite' })
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: { marginBottom: 16 } },
	        _react2.default.createElement(_input2.default, { addonBefore: selectBefore, addonAfter: selectAfter, defaultValue: 'mysite' })
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: { marginBottom: 16 } },
	        _react2.default.createElement(_input2.default, { addonAfter: _react2.default.createElement(_icon2.default, { type: 'setting' }), defaultValue: 'mysite' })
	      )
	    );
	  }
	};

/***/ },

/***/ 759:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(21);

	var _input = __webpack_require__(25);

	var _input2 = _interopRequireDefault(_input);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", ["code", "autosize"], " 属性适用于 ", ["code", "textarea"], " 节点，并且只有高度会自动变化。另外 ", ["code", "autosize"], " 可以设定为一个对象，指定最小行数和最大行数。"]],
	    "en-US": [["p", ["code", "autosize"], " prop for a ", ["code", "textarea"], " type of ", ["code", "Input"], " makes the height to automatically adjust based on the content.\nAn options object can be provided to ", ["code", "autosize"], " to specify the minimum and maximum number of lines the textarea will automatically adjust."]]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "适应文本高度的文本域",
	      "en-US": "Autosizing the height to fit the content"
	    },
	    "filename": "components/input/demo/autosize-textarea.md",
	    "id": "components-input-demo-autosize-textarea"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Input <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Input</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>textarea<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placeholder</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Autosize</span> <span class=\"token attr-name\" >height</span> <span class=\"token attr-name\" >based</span> <span class=\"token attr-name\" >on</span> <span class=\"token attr-name\" >content</span> <span class=\"token attr-name\" >lines\"</span> <span class=\"token attr-name\" >autosize</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> margin<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'24px 0'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Input</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>textarea<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placeholder</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Autosize</span> <span class=\"token attr-name\" >height</span> <span class=\"token attr-name\" >with</span> <span class=\"token attr-name\" >minimum</span> <span class=\"token attr-name\" >and</span> <span class=\"token attr-name\" >maximum</span> <span class=\"token attr-name\" >number</span> <span class=\"token attr-name\" >of</span> <span class=\"token attr-name\" >lines\"</span> <span class=\"token attr-name\" >autosize</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> minRows<span class=\"token punctuation\" >:</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >,</span> maxRows<span class=\"token punctuation\" >:</span> <span class=\"token number\" >6</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_input2.default, { type: 'textarea', placeholder: 'Autosize height based on content lines', autosize: true }),
	      _react2.default.createElement('div', { style: { margin: '24px 0' } }),
	      _react2.default.createElement(_input2.default, { type: 'textarea', placeholder: 'Autosize height with minimum and maximum number of lines', autosize: { minRows: 2, maxRows: 6 } })
	    );
	  }
	};

/***/ },

/***/ 760:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(21);

	var _input = __webpack_require__(25);

	var _input2 = _interopRequireDefault(_input);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "基本使用。"]],
	    "en-US": [["p", "Basic usage example"]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本使用",
	      "en-US": "Basic usage"
	    },
	    "filename": "components/input/demo/basic.md",
	    "id": "components-input-demo-basic"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Input <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Input</span> <span class=\"token attr-name\" >placeholder</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Basic</span> <span class=\"token attr-name\" >usage\"</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(_input2.default, { placeholder: 'Basic usage' });
	  }
	};

/***/ },

/***/ 761:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(42);

	var _col = __webpack_require__(38);

	var _col2 = _interopRequireDefault(_col);

	var _style4 = __webpack_require__(21);

	var _input = __webpack_require__(25);

	var _input2 = _interopRequireDefault(_input);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "输入框的组合展现。"]],
	    "en-US": [["p", "Input.Group example"]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "输入框组合",
	      "en-US": "Input Group"
	    },
	    "filename": "components/input/demo/group.md",
	    "id": "components-input-demo-group"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Input<span class=\"token punctuation\" >,</span> Col <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> InputGroup <span class=\"token operator\" >=</span> Input<span class=\"token punctuation\" >.</span>Group<span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>InputGroup</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>4<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Input</span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>0571<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>8<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Input</span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>26888888<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>InputGroup</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var InputGroup = _input2.default.Group;return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        InputGroup,
	        { size: 'large' },
	        _react2.default.createElement(
	          _col2.default,
	          { span: '4' },
	          _react2.default.createElement(_input2.default, { defaultValue: '0571' })
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: '8' },
	          _react2.default.createElement(_input2.default, { defaultValue: '26888888' })
	        )
	      )
	    );
	  }
	};

/***/ },

/***/ 762:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(10);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _style4 = __webpack_require__(21);

	var _input = __webpack_require__(25);

	var _input2 = _interopRequireDefault(_input);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": { "zh-CN": [["p", "带有搜索按钮的输入框。"]],
	    "en-US": [["p", "Example of creating a search box by grouping a standard input with a search button."]]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "搜索框",
	      "en-US": "Search box"
	    },
	    "filename": "components/input/demo/search-input.md",
	    "id": "components-input-demo-search-input"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Input<span class=\"token punctuation\" >,</span> Button <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> classNames <span class=\"token keyword\" >from</span> <span class=\"token string\" >'classnames'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> InputGroup <span class=\"token operator\" >=</span> Input<span class=\"token punctuation\" >.</span>Group<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> SearchInput <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >''</span><span class=\"token punctuation\" >,</span>\n      focus<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >handleInputChange</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> e<span class=\"token punctuation\" >.</span>target<span class=\"token punctuation\" >.</span>value<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >handleFocusBlur</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      focus<span class=\"token punctuation\" >:</span> e<span class=\"token punctuation\" >.</span>target <span class=\"token operator\" >===</span> document<span class=\"token punctuation\" >.</span>activeElement<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >handleSearch</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>onSearch<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span><span class=\"token function\" >onSearch</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>value<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> style<span class=\"token punctuation\" >,</span> size<span class=\"token punctuation\" >,</span> placeholder <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >const</span> btnCls <span class=\"token operator\" >=</span> <span class=\"token function\" >classNames</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      <span class=\"token string\" >'ant-search-btn'</span><span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token string\" >'ant-search-btn-noempty'</span><span class=\"token punctuation\" >:</span> <span class=\"token operator\" >!</span><span class=\"token operator\" >!</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>value<span class=\"token punctuation\" >.</span><span class=\"token function\" >trim</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >const</span> searchCls <span class=\"token operator\" >=</span> <span class=\"token function\" >classNames</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      <span class=\"token string\" >'ant-search-input'</span><span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token string\" >'ant-search-input-focus'</span><span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>focus<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ant-search-input-wrapper<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>style<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>InputGroup</span> <span class=\"token attr-name\" >className</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>searchCls<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Input</span> <span class=\"token attr-name\" >placeholder</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>placeholder<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>value<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleInputChange<span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >onFocus</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleFocusBlur<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onBlur</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleFocusBlur<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onPressEnter</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleSearch<span class=\"token punctuation\" >}</span></span>\n          <span class=\"token punctuation\" >/></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ant-input-group-wrap<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >icon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >className</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>btnCls<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >size</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>size<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleSearch<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>InputGroup</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>SearchInput</span> <span class=\"token attr-name\" >placeholder</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>input</span> <span class=\"token attr-name\" >search</span> <span class=\"token attr-name\" >text\"</span>\n    <span class=\"token attr-name\" >onSearch</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>value <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >200</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n  <span class=\"token punctuation\" >/></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var InputGroup = _input2.default.Group;var SearchInput = _react2.default.createClass({
	      displayName: 'SearchInput',
	      getInitialState: function getInitialState() {
	        return { value: '', focus: false };
	      },
	      handleInputChange: function handleInputChange(e) {
	        this.setState({ value: e.target.value });
	      },
	      handleFocusBlur: function handleFocusBlur(e) {
	        this.setState({ focus: e.target === document.activeElement });
	      },
	      handleSearch: function handleSearch() {
	        if (this.props.onSearch) {
	          this.props.onSearch(this.state.value);
	        }
	      },
	      render: function render() {
	        var _props = this.props,
	            style = _props.style,
	            size = _props.size,
	            placeholder = _props.placeholder;

	        var btnCls = (0, _classnames2.default)({ 'ant-search-btn': true, 'ant-search-btn-noempty': !!this.state.value.trim() });var searchCls = (0, _classnames2.default)({ 'ant-search-input': true, 'ant-search-input-focus': this.state.focus });return _react2.default.createElement(
	          'div',
	          { className: 'ant-search-input-wrapper', style: style },
	          _react2.default.createElement(
	            InputGroup,
	            { className: searchCls },
	            _react2.default.createElement(_input2.default, { placeholder: placeholder, value: this.state.value, onChange: this.handleInputChange, onFocus: this.handleFocusBlur, onBlur: this.handleFocusBlur, onPressEnter: this.handleSearch }),
	            _react2.default.createElement(
	              'div',
	              { className: 'ant-input-group-wrap' },
	              _react2.default.createElement(_button2.default, { icon: 'search', className: btnCls, size: size, onClick: this.handleSearch })
	            )
	          )
	        );
	      }
	    });return _react2.default.createElement(SearchInput, { placeholder: 'input search text', onSearch: function onSearch(value) {
	        return console.log(value);
	      }, style: { width: 200 } });
	  }
	};

/***/ },

/***/ 763:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(21);

	var _input = __webpack_require__(25);

	var _input2 = _interopRequireDefault(_input);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "我们为 ", ["code", "<Input />"], " 输入框定义了三种尺寸（大、默认、小），高度分别为 ", ["code", "32px"], "、", ["code", "28px"], " 和 ", ["code", "22px"], "。"], ["p", "注意： 在表单里面，我们只使用大尺寸的输入框。"]],
	    "en-US": [["p", "There are three sizes of an Input box: ", ["code", "large"], " (32px)、", ["code", "default"], " (28px) and ", ["code", "small"], " (22px). "], ["p", "Note: Inside of forms, only the large size is used."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "三种大小",
	      "en-US": "Three sizes of Input"
	    },
	    "filename": "components/input/demo/size.md",
	    "id": "components-input-demo-size"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Input <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>example-input<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Input</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placeholder</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large</span> <span class=\"token attr-name\" >size\"</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Input</span> <span class=\"token attr-name\" >placeholder</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>default</span> <span class=\"token attr-name\" >size\"</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Input</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placeholder</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small</span> <span class=\"token attr-name\" >size\"</span> <span class=\"token punctuation\" >/></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'example-input' },
	      _react2.default.createElement(_input2.default, { size: 'large', placeholder: 'large size' }),
	      _react2.default.createElement(_input2.default, { placeholder: 'default size' }),
	      _react2.default.createElement(_input2.default, { size: 'small', placeholder: 'small size' })
	    );
	  },
	  "style": ".example-input .ant-input {\n  width: 200px;\n  margin: 0 8px 8px 0;\n}",
	  "highlightedStyle": "<span class=\"token selector\" ><span class=\"token class\" >.example-input</span> <span class=\"token class\" >.ant-input</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >width</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >200</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >margin</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >0</span> <span class=\"token number\" >8</span>px <span class=\"token number\" >8</span>px <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>"
	};

/***/ },

/***/ 764:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(21);

	var _input = __webpack_require__(25);

	var _input2 = _interopRequireDefault(_input);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "用于多行输入，指定 ", ["code", "type"], " 为一个特殊的 ", ["code", "textarea"], "。"]],
	    "en-US": [["p", "For multi-line user input cases, an input whose ", ["code", "type"], " prop has the value of ", ["code", "\"textarea\""], " can be used."]]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "文本域",
	      "en-US": "Textarea"
	    },
	    "filename": "components/input/demo/textarea.md",
	    "id": "components-input-demo-textarea"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Input <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Input</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>textarea<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >rows</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(_input2.default, { type: 'textarea', rows: 4 });
	  }
	};

/***/ },

/***/ 1164:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'addon': __webpack_require__(758),
	    'autosize-textarea': __webpack_require__(759),
	    'basic': __webpack_require__(760),
	    'group': __webpack_require__(761),
	    'search-input': __webpack_require__(762),
	    'size': __webpack_require__(763),
	    'textarea': __webpack_require__(764),
	}

/***/ }

});