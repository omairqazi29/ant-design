webpackJsonp([7,202],{

/***/ 743:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(44);

	var _row = __webpack_require__(43);

	var _row2 = _interopRequireDefault(_row);

	var _style4 = __webpack_require__(42);

	var _col = __webpack_require__(38);

	var _col2 = _interopRequireDefault(_col);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "从堆叠到水平排列。"], ["p", "使用单一的一组 ", ["code", "Row"], " 和 ", ["code", "Col"], " 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 ", ["code", "Row"], " 内。"]],
	    "en-US": [["p", "From the stack to the horizontal arrangement."], ["p", "You can create a basic grid system by using a single set of ", ["code", "Row"], " and", ["code", "Col"], " grid assembly, all of the columns (Col) must be placed in ", ["code", "Row"], "."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基础栅格",
	      "en-US": "Basic Grid"
	    },
	    "filename": "components/grid/demo/basic.md",
	    "id": "components-grid-demo-basic"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Row<span class=\"token punctuation\" >,</span> Col <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Row</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >12</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-12</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >12</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-12</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Row</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Row</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >8</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-8</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >8</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-8</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >8</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-8</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Row</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Row</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-6</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-6</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-6</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-6</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Row</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n  mountNode\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _row2.default,
	        null,
	        _react2.default.createElement(
	          _col2.default,
	          { span: 12 },
	          'col-12'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 12 },
	          'col-12'
	        )
	      ),
	      _react2.default.createElement(
	        _row2.default,
	        null,
	        _react2.default.createElement(
	          _col2.default,
	          { span: 8 },
	          'col-8'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 8 },
	          'col-8'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 8 },
	          'col-8'
	        )
	      ),
	      _react2.default.createElement(
	        _row2.default,
	        null,
	        _react2.default.createElement(
	          _col2.default,
	          { span: 6 },
	          'col-6'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 6 },
	          'col-6'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 6 },
	          'col-6'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 6 },
	          'col-6'
	        )
	      )
	    );
	  }
	};

/***/ },

/***/ 744:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(44);

	var _row = __webpack_require__(43);

	var _row2 = _interopRequireDefault(_row);

	var _style4 = __webpack_require__(42);

	var _col = __webpack_require__(38);

	var _col2 = _interopRequireDefault(_col);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "Flex 子元素垂直对齐。"]],
	    "en-US": [["p", "Flex child elements vertically aligned."]]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "Flex 对齐",
	      "en-US": "Flex Alignment"
	    },
	    "filename": "components/grid/demo/flex-align.md",
	    "id": "components-grid-demo-flex-align"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Row<span class=\"token punctuation\" >,</span> Col <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> DemoBox <span class=\"token operator\" >=</span> props <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span> <span class=\"token attr-name\" >className</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token template-string\" ><span class=\"token string\" >`height-</span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>props<span class=\"token punctuation\" >.</span>value<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>props<span class=\"token punctuation\" >.</span>children<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>Align Top<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Row</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>flex<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >justify</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>center<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >align</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>top<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>DemoBox</span> <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >100</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>DemoBox</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>DemoBox</span> <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >50</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>DemoBox</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>DemoBox</span> <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >120</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>DemoBox</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>DemoBox</span> <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >80</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>DemoBox</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Row</span><span class=\"token punctuation\" >></span></span>\n\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>Align Center<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Row</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>flex<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >justify</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>space-around<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >align</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>middle<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>DemoBox</span> <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >100</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>DemoBox</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>DemoBox</span> <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >50</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>DemoBox</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>DemoBox</span> <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >120</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>DemoBox</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>DemoBox</span> <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >80</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>DemoBox</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Row</span><span class=\"token punctuation\" >></span></span>\n\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>Align Bottom<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Row</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>flex<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >justify</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>space-between<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >align</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>bottom<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>DemoBox</span> <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >100</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>DemoBox</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>DemoBox</span> <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >50</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>DemoBox</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>DemoBox</span> <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >120</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>DemoBox</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>DemoBox</span> <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >80</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>DemoBox</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Row</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n  mountNode\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var DemoBox = function DemoBox(props) {
	      return _react2.default.createElement(
	        'p',
	        { className: 'height-' + props.value },
	        props.children
	      );
	    };return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'p',
	        null,
	        'Align Top'
	      ),
	      _react2.default.createElement(
	        _row2.default,
	        { type: 'flex', justify: 'center', align: 'top' },
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          _react2.default.createElement(
	            DemoBox,
	            { value: 100 },
	            'col-4'
	          )
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          _react2.default.createElement(
	            DemoBox,
	            { value: 50 },
	            'col-4'
	          )
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          _react2.default.createElement(
	            DemoBox,
	            { value: 120 },
	            'col-4'
	          )
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          _react2.default.createElement(
	            DemoBox,
	            { value: 80 },
	            'col-4'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'Align Center'
	      ),
	      _react2.default.createElement(
	        _row2.default,
	        { type: 'flex', justify: 'space-around', align: 'middle' },
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          _react2.default.createElement(
	            DemoBox,
	            { value: 100 },
	            'col-4'
	          )
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          _react2.default.createElement(
	            DemoBox,
	            { value: 50 },
	            'col-4'
	          )
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          _react2.default.createElement(
	            DemoBox,
	            { value: 120 },
	            'col-4'
	          )
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          _react2.default.createElement(
	            DemoBox,
	            { value: 80 },
	            'col-4'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'Align Bottom'
	      ),
	      _react2.default.createElement(
	        _row2.default,
	        { type: 'flex', justify: 'space-between', align: 'bottom' },
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          _react2.default.createElement(
	            DemoBox,
	            { value: 100 },
	            'col-4'
	          )
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          _react2.default.createElement(
	            DemoBox,
	            { value: 50 },
	            'col-4'
	          )
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          _react2.default.createElement(
	            DemoBox,
	            { value: 120 },
	            'col-4'
	          )
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          _react2.default.createElement(
	            DemoBox,
	            { value: 80 },
	            'col-4'
	          )
	        )
	      )
	    );
	  }
	};

/***/ },

/***/ 745:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(44);

	var _row = __webpack_require__(43);

	var _row2 = _interopRequireDefault(_row);

	var _style4 = __webpack_require__(42);

	var _col = __webpack_require__(38);

	var _col2 = _interopRequireDefault(_col);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "通过 Flex 布局的 Order 来改变元素的排序。"]],
	    "en-US": [["p", "To change the element sort by Flex layout order."]]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "Flex 排序",
	      "en-US": "Flex Order"
	    },
	    "filename": "components/grid/demo/flex-order.md",
	    "id": "components-grid-demo-flex-order"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Row<span class=\"token punctuation\" >,</span> Col <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Row</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>flex<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >order</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >1</span> col<span class=\"token operator\" >-</span>order<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >order</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >3</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >2</span> col<span class=\"token operator\" >-</span>order<span class=\"token number\" >-3</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >order</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >2</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >3</span> col<span class=\"token operator\" >-</span>order<span class=\"token number\" >-2</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >order</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token number\" >4</span> col<span class=\"token operator\" >-</span>order<span class=\"token number\" >-1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Row</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n  mountNode\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _row2.default,
	        { type: 'flex' },
	        _react2.default.createElement(
	          _col2.default,
	          { span: 6, order: 4 },
	          '1 col-order-4'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 6, order: 3 },
	          '2 col-order-3'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 6, order: 2 },
	          '3 col-order-2'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 6, order: 1 },
	          '4 col-order-1'
	        )
	      )
	    );
	  }
	};

/***/ },

/***/ 746:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(44);

	var _row = __webpack_require__(43);

	var _row2 = _interopRequireDefault(_row);

	var _style4 = __webpack_require__(42);

	var _col = __webpack_require__(38);

	var _col2 = _interopRequireDefault(_col);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "Flex 布局基础。"], ["p", "使用 ", ["code", "row-flex"], " 定义 ", ["code", "flex"], " 布局，其子元素根据不同的值 ", ["code", "start"], ",", ["code", "center"], ",", ["code", "end"], ",", ["code", "space-between"], ",", ["code", "space-around"], "，分别定义其在父节点里面的排版方式。"]],
	    "en-US": [["p", "Use ", ["code", "row-flex"], " define", ["code", "flex"], " layout, its child elements depending on the value of the ", ["code", "start"], ",", ["code", "center"], ", ", ["code", "end"], ",", ["code", "space-between"], ", ", ["code", "space-around"], ", which are defined in its parent node layout mode."]]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "Flex 布局",
	      "en-US": "Flex Layout"
	    },
	    "filename": "components/grid/demo/flex.md",
	    "id": "components-grid-demo-flex"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Row<span class=\"token punctuation\" >,</span> Col <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>sub<span class=\"token operator\" >-</span>element align left<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Row</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>flex<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >justify</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>start<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Row</span><span class=\"token punctuation\" >></span></span>\n\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>sub<span class=\"token operator\" >-</span>element align center<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Row</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>flex<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >justify</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>center<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Row</span><span class=\"token punctuation\" >></span></span>\n\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>sub<span class=\"token operator\" >-</span>element align right<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Row</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>flex<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >justify</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>end<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Row</span><span class=\"token punctuation\" >></span></span>\n\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>sub<span class=\"token operator\" >-</span>element monospaced arrangement<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Row</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>flex<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >justify</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>space-between<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Row</span><span class=\"token punctuation\" >></span></span>\n\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>sub<span class=\"token operator\" >-</span>element align full<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Row</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>flex<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >justify</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>space-around<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Row</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n  mountNode\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'p',
	        null,
	        'sub-element align left'
	      ),
	      _react2.default.createElement(
	        _row2.default,
	        { type: 'flex', justify: 'start' },
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          'col-4'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          'col-4'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          'col-4'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          'col-4'
	        )
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'sub-element align center'
	      ),
	      _react2.default.createElement(
	        _row2.default,
	        { type: 'flex', justify: 'center' },
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          'col-4'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          'col-4'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          'col-4'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          'col-4'
	        )
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'sub-element align right'
	      ),
	      _react2.default.createElement(
	        _row2.default,
	        { type: 'flex', justify: 'end' },
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          'col-4'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          'col-4'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          'col-4'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          'col-4'
	        )
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'sub-element monospaced arrangement'
	      ),
	      _react2.default.createElement(
	        _row2.default,
	        { type: 'flex', justify: 'space-between' },
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          'col-4'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          'col-4'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          'col-4'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          'col-4'
	        )
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'sub-element align full'
	      ),
	      _react2.default.createElement(
	        _row2.default,
	        { type: 'flex', justify: 'space-around' },
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          'col-4'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          'col-4'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          'col-4'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 4 },
	          'col-4'
	        )
	      )
	    );
	  }
	};

/***/ },

/***/ 747:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(44);

	var _row = __webpack_require__(43);

	var _row2 = _interopRequireDefault(_row);

	var _style4 = __webpack_require__(42);

	var _col = __webpack_require__(38);

	var _col2 = _interopRequireDefault(_col);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "栅格常常需要和间隔进行配合，你可以使用 ", ["code", "Row"], " 的 ", ["code", "gutter"], " 属性，我们推荐使用 ", ["code", "(16+8n)px"], " 作为栅格间隔。"]],
	    "en-US": [["p", "You can use the ", ["code", "gutter"], " property of ", ["code", "Row"], " as grid spacing, we recommend set it to ", ["code", "(16 + 8n) px"], "."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "区块间隔",
	      "en-US": "Grid Gutter"
	    },
	    "filename": "components/grid/demo/gutter.md",
	    "id": "components-grid-demo-gutter"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Row<span class=\"token punctuation\" >,</span> Col <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>gutter-example<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Row</span> <span class=\"token attr-name\" >gutter</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >16</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>gutter-row<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>gutter-box<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-6</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>gutter-row<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>gutter-box<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-6</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>gutter-row<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>gutter-box<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-6</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>gutter-row<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>gutter-box<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-6</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Row</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'gutter-example' },
	      _react2.default.createElement(
	        _row2.default,
	        { gutter: 16 },
	        _react2.default.createElement(
	          _col2.default,
	          { className: 'gutter-row', span: 6 },
	          _react2.default.createElement(
	            'div',
	            { className: 'gutter-box' },
	            'col-6'
	          )
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { className: 'gutter-row', span: 6 },
	          _react2.default.createElement(
	            'div',
	            { className: 'gutter-box' },
	            'col-6'
	          )
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { className: 'gutter-row', span: 6 },
	          _react2.default.createElement(
	            'div',
	            { className: 'gutter-box' },
	            'col-6'
	          )
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { className: 'gutter-row', span: 6 },
	          _react2.default.createElement(
	            'div',
	            { className: 'gutter-box' },
	            'col-6'
	          )
	        )
	      )
	    );
	  },
	  "style": ".gutter-example .ant-row > div {\n  background: transparent;\n  border: 0;\n}\n.gutter-box {\n  background: #00A0E9;\n  padding: 5px 0;\n}",
	  "highlightedStyle": "<span class=\"token selector\" ><span class=\"token class\" >.gutter-example</span> <span class=\"token class\" >.ant-row</span> > div </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >background</span><span class=\"token punctuation\" >:</span> transparent<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >border</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n<span class=\"token selector\" ><span class=\"token class\" >.gutter-box</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >background</span><span class=\"token punctuation\" >:</span> <span class=\"token hexcode\" >#00A0E9</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >padding</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >5</span>px <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>"
	};

/***/ },

/***/ 748:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(44);

	var _row = __webpack_require__(43);

	var _row2 = _interopRequireDefault(_row);

	var _style4 = __webpack_require__(42);

	var _col = __webpack_require__(38);

	var _col2 = _interopRequireDefault(_col);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "列偏移。"], ["p", "使用 ", ["code", "offset"], " 可以将列向右侧偏。例如，", ["code", "offset={4}"], " 将元素向右侧偏移了 4 个列（column）的宽度。"]],
	    "en-US": [["p", ["code", "Offset"], " can set the column to the right side. For example, using ", ["code", "offset = {4}"], " can set the element shifted to the right four columns width."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "左右偏移",
	      "en-US": "Column offset"
	    },
	    "filename": "components/grid/demo/offset.md",
	    "id": "components-grid-demo-offset"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Row<span class=\"token punctuation\" >,</span> Col <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Row</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >8</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-8</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >8</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >offset</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >8</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-8</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Row</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Row</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >offset</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-6</span> col<span class=\"token operator\" >-</span>offset<span class=\"token number\" >-6</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >offset</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-6</span> col<span class=\"token operator\" >-</span>offset<span class=\"token number\" >-6</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Row</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Row</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >12</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >offset</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-12</span> col<span class=\"token operator\" >-</span>offset<span class=\"token number\" >-6</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Row</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n  mountNode\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _row2.default,
	        null,
	        _react2.default.createElement(
	          _col2.default,
	          { span: 8 },
	          'col-8'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 8, offset: 8 },
	          'col-8'
	        )
	      ),
	      _react2.default.createElement(
	        _row2.default,
	        null,
	        _react2.default.createElement(
	          _col2.default,
	          { span: 6, offset: 6 },
	          'col-6 col-offset-6'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 6, offset: 6 },
	          'col-6 col-offset-6'
	        )
	      ),
	      _react2.default.createElement(
	        _row2.default,
	        null,
	        _react2.default.createElement(
	          _col2.default,
	          { span: 12, offset: 6 },
	          'col-12 col-offset-6'
	        )
	      )
	    );
	  }
	};

/***/ },

/***/ 749:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(44);

	var _row = __webpack_require__(43);

	var _row2 = _interopRequireDefault(_row);

	var _style4 = __webpack_require__(42);

	var _col = __webpack_require__(38);

	var _col2 = _interopRequireDefault(_col);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", ["code", "span"], " ", ["code", "pull"], " ", ["code", "push"], " ", ["code", "offset"], " ", ["code", "order"], " 属性可以通过内嵌到 ", ["code", "xs"], " ", ["code", "sm"], " ", ["code", "md"], " ", ["code", "lg"], " 属性中来使用。"], ["p", "其中 ", ["code", "xs={6}"], " 相当于 ", ["code", "xs={{ span: 6 }}"], "。"]],
	    "en-US": [["p", ["code", "Span"], " pull", ["code", ""], "push", ["code", "offset"], " ", ["code", "order"], " property can be embedded into", ["code", "xs"], " ", ["code", "sm"], " md", ["code", ""], "lg", ["code", "properties to use,\nwhere"], "xs = {6}", ["code", "is equivalent to"], "xs = {{span: 6}}`."]]
	  },
	  "meta": {
	    "order": 8,
	    "title": {
	      "zh-CN": "其他属性的响应式",
	      "en-US": "More responsive"
	    },
	    "filename": "components/grid/demo/reponsive-more.md",
	    "id": "components-grid-demo-reponsive-more"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Row<span class=\"token punctuation\" >,</span> Col <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Row</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >xs</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> span<span class=\"token punctuation\" >:</span> <span class=\"token number\" >5</span><span class=\"token punctuation\" >,</span> offset<span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >lg</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> span<span class=\"token punctuation\" >:</span> <span class=\"token number\" >6</span><span class=\"token punctuation\" >,</span> offset<span class=\"token punctuation\" >:</span> <span class=\"token number\" >2</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Col<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >xs</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> span<span class=\"token punctuation\" >:</span> <span class=\"token number\" >11</span><span class=\"token punctuation\" >,</span> offset<span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >lg</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> span<span class=\"token punctuation\" >:</span> <span class=\"token number\" >6</span><span class=\"token punctuation\" >,</span> offset<span class=\"token punctuation\" >:</span> <span class=\"token number\" >2</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Col<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >xs</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> span<span class=\"token punctuation\" >:</span> <span class=\"token number\" >5</span><span class=\"token punctuation\" >,</span> offset<span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >lg</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> span<span class=\"token punctuation\" >:</span> <span class=\"token number\" >6</span><span class=\"token punctuation\" >,</span> offset<span class=\"token punctuation\" >:</span> <span class=\"token number\" >2</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Col<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Row</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      _row2.default,
	      null,
	      _react2.default.createElement(
	        _col2.default,
	        { xs: { span: 5, offset: 1 }, lg: { span: 6, offset: 2 } },
	        'Col'
	      ),
	      _react2.default.createElement(
	        _col2.default,
	        { xs: { span: 11,
	            offset: 1 }, lg: { span: 6, offset: 2 } },
	        'Col'
	      ),
	      _react2.default.createElement(
	        _col2.default,
	        { xs: { span: 5, offset: 1 }, lg: { span: 6, offset: 2 } },
	        'Col'
	      )
	    );
	  }
	};

/***/ },

/***/ 750:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(44);

	var _row = __webpack_require__(43);

	var _row2 = _interopRequireDefault(_row);

	var _style4 = __webpack_require__(42);

	var _col = __webpack_require__(38);

	var _col2 = _interopRequireDefault(_col);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "参照 Bootstrap 的 ", ["a", {
	      "title": null,
	      "href": "http://getbootstrap.com/css/#grid-media-queries"
	    }, "响应式设计"], "，预设四个响应尺寸：", ["code", "xs"], " ", ["code", "sm"], " ", ["code", "md"], " ", ["code", "lg"], "。"]],
	    "en-US": [["p", "Referring to the Bootstrap ", "[responsive design]", " (", ["a", {
	      "title": null,
	      "href": "http://getbootstrap.com/css/#grid-media-queries"
	    }, "http://getbootstrap.com/css/#grid-media-queries"], "), here preset four dimensions: ", ["code", "xs"], " sm", ["code", ""], "md", ["code", "lg"], "."]]
	  },
	  "meta": {
	    "order": 7,
	    "title": {
	      "zh-CN": "响应式布局",
	      "en-US": "Responsive"
	    },
	    "filename": "components/grid/demo/reponsive.md",
	    "id": "components-grid-demo-reponsive"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Row<span class=\"token punctuation\" >,</span> Col <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Row</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >xs</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >2</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >sm</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >md</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >lg</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >8</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Col<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >xs</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >20</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >sm</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >16</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >md</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >12</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >lg</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >8</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Col<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >xs</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >2</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >sm</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >4</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >md</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >lg</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >8</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Col<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Row</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      _row2.default,
	      null,
	      _react2.default.createElement(
	        _col2.default,
	        { xs: 2, sm: 4, md: 6, lg: 8 },
	        'Col'
	      ),
	      _react2.default.createElement(
	        _col2.default,
	        { xs: 20, sm: 16, md: 12, lg: 8 },
	        'Col'
	      ),
	      _react2.default.createElement(
	        _col2.default,
	        { xs: 2, sm: 4, md: 6, lg: 8 },
	        'Col'
	      )
	    );
	  }
	};

/***/ },

/***/ 751:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(44);

	var _row = __webpack_require__(43);

	var _row2 = _interopRequireDefault(_row);

	var _style4 = __webpack_require__(42);

	var _col = __webpack_require__(38);

	var _col2 = _interopRequireDefault(_col);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "列排序。"], ["p", "通过使用 ", ["code", "push"], " 和 ", ["code", "pull"], " 类就可以很容易的改变列（column）的顺序。"]],
	    "en-US": [["p", "By using ", ["code", "push"], " and", ["code", "pull"], " class you can easily change column order."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "栅格排序",
	      "en-US": "Grid sort"
	    },
	    "filename": "components/grid/demo/sort.md",
	    "id": "components-grid-demo-sort"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Row<span class=\"token punctuation\" >,</span> Col <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Row</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >18</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >push</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-18</span> col<span class=\"token operator\" >-</span>push<span class=\"token number\" >-6</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Col</span> <span class=\"token attr-name\" >span</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >6</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >pull</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >18</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>col<span class=\"token number\" >-6</span> col<span class=\"token operator\" >-</span>pull<span class=\"token number\" >-18</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Col</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Row</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n  mountNode\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _row2.default,
	        null,
	        _react2.default.createElement(
	          _col2.default,
	          { span: 18, push: 6 },
	          'col-18 col-push-6'
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: 6, pull: 18 },
	          'col-6 col-pull-18'
	        )
	      )
	    );
	  }
	};

/***/ },

/***/ 1167:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(743),
	    'flex-align': __webpack_require__(744),
	    'flex-order': __webpack_require__(745),
	    'flex': __webpack_require__(746),
	    'gutter': __webpack_require__(747),
	    'offset': __webpack_require__(748),
	    'reponsive-more': __webpack_require__(749),
	    'reponsive': __webpack_require__(750),
	    'sort': __webpack_require__(751),
	}

/***/ }

});