webpackJsonp([38,201],{

/***/ 715:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(215);

	var _collapse = __webpack_require__(214);

	var _collapse2 = _interopRequireDefault(_collapse);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "手风琴，每次只打开一个tab。默认打开第一个。"]],
	    "en-US": [["p", "Accordion mode, only one panel can be expanded at a time. The first panel will be expanded by default."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "手风琴",
	      "en-US": "Accordion"
	    },
	    "filename": "components/collapse/demo/accordion.md",
	    "id": "components-collapse-demo-accordion"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Collapse <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> Panel <span class=\"token operator\" >=</span> Collapse<span class=\"token punctuation\" >.</span>Panel<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> text <span class=\"token operator\" >=</span> <span class=\"token template-string\" ><span class=\"token string\" >`\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n`</span></span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Collapse</span> <span class=\"token attr-name\" >accordion</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Panel</span> <span class=\"token attr-name\" >header</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token string\" >'This is panel header 1'</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>text<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Panel</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Panel</span> <span class=\"token attr-name\" >header</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token string\" >'This is panel header 2'</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>text<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Panel</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Panel</span> <span class=\"token attr-name\" >header</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token string\" >'This is panel header 3'</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>3<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>text<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Panel</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Collapse</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Panel = _collapse2.default.Panel;var text = '\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n';return _react2.default.createElement(
	      _collapse2.default,
	      { accordion: true },
	      _react2.default.createElement(
	        Panel,
	        { header: 'This is panel header 1', key: '1' },
	        _react2.default.createElement(
	          'p',
	          null,
	          text
	        )
	      ),
	      _react2.default.createElement(
	        Panel,
	        { header: 'This is panel header 2', key: '2' },
	        _react2.default.createElement(
	          'p',
	          null,
	          text
	        )
	      ),
	      _react2.default.createElement(
	        Panel,
	        { header: 'This is panel header 3', key: '3' },
	        _react2.default.createElement(
	          'p',
	          null,
	          text
	        )
	      )
	    );
	  }
	};

/***/ },

/***/ 716:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(215);

	var _collapse = __webpack_require__(214);

	var _collapse2 = _interopRequireDefault(_collapse);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "可以同时展开多个面板，这个例子默认展开了第一个。"]],
	    "en-US": [["p", "More than one panel can be expanded at a time, the first panel is initialized to be active in this case."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "折叠面板",
	      "en-US": "Collapse"
	    },
	    "filename": "components/collapse/demo/basic.md",
	    "id": "components-collapse-demo-basic"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Collapse <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> Panel <span class=\"token operator\" >=</span> Collapse<span class=\"token punctuation\" >.</span>Panel<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >callback</span><span class=\"token punctuation\" >(</span>key<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>key<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token keyword\" >const</span> text <span class=\"token operator\" >=</span> <span class=\"token template-string\" ><span class=\"token string\" >`\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n`</span></span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Collapse</span> <span class=\"token attr-name\" >defaultActiveKey</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token string\" >'1'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>callback<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Panel</span> <span class=\"token attr-name\" >header</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>This</span> <span class=\"token attr-name\" >is</span> <span class=\"token attr-name\" >panel</span> <span class=\"token attr-name\" >header</span> <span class=\"token attr-name\" >1\"</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>text<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Panel</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Panel</span> <span class=\"token attr-name\" >header</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>This</span> <span class=\"token attr-name\" >is</span> <span class=\"token attr-name\" >panel</span> <span class=\"token attr-name\" >header</span> <span class=\"token attr-name\" >2\"</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>text<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Panel</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Panel</span> <span class=\"token attr-name\" >header</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>This</span> <span class=\"token attr-name\" >is</span> <span class=\"token attr-name\" >panel</span> <span class=\"token attr-name\" >header</span> <span class=\"token attr-name\" >3\"</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>3<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>text<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Panel</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Collapse</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Panel = _collapse2.default.Panel;function callback(key) {
	      console.log(key);
	    }var text = '\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n';return _react2.default.createElement(
	      _collapse2.default,
	      { defaultActiveKey: ['1'], onChange: callback },
	      _react2.default.createElement(
	        Panel,
	        { header: 'This is panel header 1', key: '1' },
	        _react2.default.createElement(
	          'p',
	          null,
	          text
	        )
	      ),
	      _react2.default.createElement(
	        Panel,
	        { header: 'This is panel header 2', key: '2' },
	        _react2.default.createElement(
	          'p',
	          null,
	          text
	        )
	      ),
	      _react2.default.createElement(
	        Panel,
	        { header: 'This is panel header 3', key: '3' },
	        _react2.default.createElement(
	          'p',
	          null,
	          text
	        )
	      )
	    );
	  }
	};

/***/ },

/***/ 717:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(215);

	var _collapse = __webpack_require__(214);

	var _collapse2 = _interopRequireDefault(_collapse);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "一套没有边框的简洁样式。"]],
	    "en-US": [["p", "A borderless style of Collapse."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "简洁风格",
	      "en-US": "Borderless"
	    },
	    "filename": "components/collapse/demo/borderless.md",
	    "id": "components-collapse-demo-borderless"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Collapse <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> Panel <span class=\"token operator\" >=</span> Collapse<span class=\"token punctuation\" >.</span>Panel<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> text <span class=\"token operator\" >=</span> <span class=\"token template-string\" ><span class=\"token string\" >`\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n`</span></span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Collapse</span> <span class=\"token attr-name\" >bordered</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token boolean\" >false</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >defaultActiveKey</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token string\" >'1'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Panel</span> <span class=\"token attr-name\" >header</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>This</span> <span class=\"token attr-name\" >is</span> <span class=\"token attr-name\" >panel</span> <span class=\"token attr-name\" >header</span> <span class=\"token attr-name\" >1\"</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>text<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Panel</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Panel</span> <span class=\"token attr-name\" >header</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>This</span> <span class=\"token attr-name\" >is</span> <span class=\"token attr-name\" >panel</span> <span class=\"token attr-name\" >header</span> <span class=\"token attr-name\" >2\"</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>text<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Panel</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Panel</span> <span class=\"token attr-name\" >header</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>This</span> <span class=\"token attr-name\" >is</span> <span class=\"token attr-name\" >panel</span> <span class=\"token attr-name\" >header</span> <span class=\"token attr-name\" >3\"</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>3<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>text<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Panel</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Collapse</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Panel = _collapse2.default.Panel;var text = '\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n';return _react2.default.createElement(
	      _collapse2.default,
	      { bordered: false, defaultActiveKey: ['1'] },
	      _react2.default.createElement(
	        Panel,
	        { header: 'This is panel header 1', key: '1' },
	        _react2.default.createElement(
	          'p',
	          null,
	          text
	        )
	      ),
	      _react2.default.createElement(
	        Panel,
	        { header: 'This is panel header 2', key: '2' },
	        _react2.default.createElement(
	          'p',
	          null,
	          text
	        )
	      ),
	      _react2.default.createElement(
	        Panel,
	        { header: 'This is panel header 3', key: '3' },
	        _react2.default.createElement(
	          'p',
	          null,
	          text
	        )
	      )
	    );
	  }
	};

/***/ },

/***/ 718:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(215);

	var _collapse = __webpack_require__(214);

	var _collapse2 = _interopRequireDefault(_collapse);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "嵌套折叠面板。"]],
	    "en-US": [["p", ["code", "Collapse"], " is nested inside the ", ["code", "Collapse"], "."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "面板嵌套",
	      "en-US": "Nested panel"
	    },
	    "filename": "components/collapse/demo/mix.md",
	    "id": "components-collapse-demo-mix"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Collapse <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> Panel <span class=\"token operator\" >=</span> Collapse<span class=\"token punctuation\" >.</span>Panel<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >callback</span><span class=\"token punctuation\" >(</span>key<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>key<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token keyword\" >const</span> text <span class=\"token operator\" >=</span> <span class=\"token template-string\" ><span class=\"token string\" >`\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n`</span></span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Collapse</span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>callback<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Panel</span> <span class=\"token attr-name\" >header</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token string\" >'This is panel header 1'</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Collapse</span> <span class=\"token attr-name\" >defaultActiveKey</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Panel</span> <span class=\"token attr-name\" >header</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token string\" >'This is panel nest panel'</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>text<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Panel</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Collapse</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Panel</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Panel</span> <span class=\"token attr-name\" >header</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token string\" >'This is panel header 2'</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>text<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Panel</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Panel</span> <span class=\"token attr-name\" >header</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token string\" >'This is panel header 3'</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>3<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>text<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Panel</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Collapse</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Panel = _collapse2.default.Panel;function callback(key) {
	      console.log(key);
	    }var text = '\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n';return _react2.default.createElement(
	      _collapse2.default,
	      { onChange: callback },
	      _react2.default.createElement(
	        Panel,
	        { header: 'This is panel header 1', key: '1' },
	        _react2.default.createElement(
	          _collapse2.default,
	          { defaultActiveKey: '1' },
	          _react2.default.createElement(
	            Panel,
	            { header: 'This is panel nest panel', key: '1' },
	            _react2.default.createElement(
	              'p',
	              null,
	              text
	            )
	          )
	        )
	      ),
	      _react2.default.createElement(
	        Panel,
	        { header: 'This is panel header 2', key: '2' },
	        _react2.default.createElement(
	          'p',
	          null,
	          text
	        )
	      ),
	      _react2.default.createElement(
	        Panel,
	        { header: 'This is panel header 3', key: '3' },
	        _react2.default.createElement(
	          'p',
	          null,
	          text
	        )
	      )
	    );
	  }
	};

/***/ },

/***/ 1191:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'accordion': __webpack_require__(715),
	    'basic': __webpack_require__(716),
	    'borderless': __webpack_require__(717),
	    'mix': __webpack_require__(718),
	}

/***/ }

});