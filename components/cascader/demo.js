webpackJsonp([8,202],{

/***/ 700:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(86);

	var _cascader = __webpack_require__(85);

	var _cascader2 = _interopRequireDefault(_cascader);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "省市区级联。"]],
	    "en-US": [["p", "Cascade selection box for selecting province/city/district."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/cascader/demo/basic.md",
	    "id": "components-cascader-demo-basic"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Cascader <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> options <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'zhejiang'</span><span class=\"token punctuation\" >,</span>\n  label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Zhejiang'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'hangzhou'</span><span class=\"token punctuation\" >,</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Hangzhou'</span><span class=\"token punctuation\" >,</span>\n    children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'xihu'</span><span class=\"token punctuation\" >,</span>\n      label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'West Lake'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'jiangsu'</span><span class=\"token punctuation\" >,</span>\n  label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jiangsu'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'nanjing'</span><span class=\"token punctuation\" >,</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Nanjing'</span><span class=\"token punctuation\" >,</span>\n    children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'zhonghuamen'</span><span class=\"token punctuation\" >,</span>\n      label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Zhong Hua Men'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cascader</span> <span class=\"token attr-name\" >options</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>options<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>onChange<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >placeholder</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Please</span> <span class=\"token attr-name\" >select\"</span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var options = [{
	      value: 'zhejiang', label: 'Zhejiang', children: [{ value: 'hangzhou', label: 'Hangzhou', children: [{ value: 'xihu', label: 'West Lake' }] }] }, { value: 'jiangsu', label: 'Jiangsu', children: [{ value: 'nanjing', label: 'Nanjing', children: [{ value: 'zhonghuamen', label: 'Zhong Hua Men' }] }] }];function onChange(value) {
	      console.log(value);
	    }return _react2.default.createElement(_cascader2.default, { options: options, onChange: onChange, placeholder: 'Please select' });
	  }
	};

/***/ },

/***/ 701:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(86);

	var _cascader = __webpack_require__(85);

	var _cascader2 = _interopRequireDefault(_cascader);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "这种交互允许只选中父级选项。"]],
	    "en-US": [["p", "Allow only select parent options."]]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "选择即改变",
	      "en-US": "Change on select"
	    },
	    "filename": "components/cascader/demo/change-on-select.md",
	    "id": "components-cascader-demo-change-on-select"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Cascader <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> options <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'zhejiang'</span><span class=\"token punctuation\" >,</span>\n  label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Zhejiang'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'hangzhou'</span><span class=\"token punctuation\" >,</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Hanzhou'</span><span class=\"token punctuation\" >,</span>\n    children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'xihu'</span><span class=\"token punctuation\" >,</span>\n      label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'West Lake'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'jiangsu'</span><span class=\"token punctuation\" >,</span>\n  label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jiangsu'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'nanjing'</span><span class=\"token punctuation\" >,</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Nanjing'</span><span class=\"token punctuation\" >,</span>\n    children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'zhonghuamen'</span><span class=\"token punctuation\" >,</span>\n      label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Zhong Hua Men'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cascader</span> <span class=\"token attr-name\" >options</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>options<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>onChange<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >changeOnSelect</span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var options = [{
	      value: 'zhejiang', label: 'Zhejiang', children: [{ value: 'hangzhou', label: 'Hanzhou', children: [{ value: 'xihu', label: 'West Lake' }] }] }, { value: 'jiangsu', label: 'Jiangsu', children: [{ value: 'nanjing', label: 'Nanjing', children: [{ value: 'zhonghuamen', label: 'Zhong Hua Men' }] }] }];function onChange(value) {
	      console.log(value);
	    }return _react2.default.createElement(_cascader2.default, { options: options, onChange: onChange, changeOnSelect: true });
	  }
	};

/***/ },

/***/ 702:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(86);

	var _cascader = __webpack_require__(85);

	var _cascader2 = _interopRequireDefault(_cascader);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "例如给最后一项加上邮编链接。"]],
	    "en-US": [["p", "For instance, add an external link after the selected value."]]
	  },
	  "meta": {
	    "order": 8,
	    "title": {
	      "zh-CN": "自定义已选项",
	      "en-US": "Custom render"
	    },
	    "filename": "components/cascader/demo/custom-render.md",
	    "id": "components-cascader-demo-custom-render"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Cascader <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> options <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'zhejiang'</span><span class=\"token punctuation\" >,</span>\n  label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Zhejiang'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'hangzhou'</span><span class=\"token punctuation\" >,</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Hangzhou'</span><span class=\"token punctuation\" >,</span>\n    children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'xihu'</span><span class=\"token punctuation\" >,</span>\n      label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'West Lake'</span><span class=\"token punctuation\" >,</span>\n      code<span class=\"token punctuation\" >:</span> <span class=\"token number\" >752100</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'jiangsu'</span><span class=\"token punctuation\" >,</span>\n  label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jiangsu'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'nanjing'</span><span class=\"token punctuation\" >,</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Nanjing'</span><span class=\"token punctuation\" >,</span>\n    children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'zhonghuamen'</span><span class=\"token punctuation\" >,</span>\n      label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Zhong Hua Men'</span><span class=\"token punctuation\" >,</span>\n      code<span class=\"token punctuation\" >:</span> <span class=\"token number\" >453400</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >handleAreaClick</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >,</span> label<span class=\"token punctuation\" >,</span> option<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  e<span class=\"token punctuation\" >.</span><span class=\"token function\" >stopPropagation</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'clicked'</span><span class=\"token punctuation\" >,</span> label<span class=\"token punctuation\" >,</span> option<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token keyword\" >const</span> displayRender <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span>labels<span class=\"token punctuation\" >,</span> selectedOptions<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> labels<span class=\"token punctuation\" >.</span><span class=\"token function\" >map</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>label<span class=\"token punctuation\" >,</span> i<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token keyword\" >const</span> option <span class=\"token operator\" >=</span> selectedOptions<span class=\"token punctuation\" >[</span>i<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>i <span class=\"token operator\" >===</span> labels<span class=\"token punctuation\" >.</span>length <span class=\"token operator\" >-</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >key</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>option<span class=\"token punctuation\" >.</span>value<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token punctuation\" >{</span>label<span class=\"token punctuation\" >}</span> <span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>e <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token function\" >handleAreaClick</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >,</span> label<span class=\"token punctuation\" >,</span> option<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>option<span class=\"token punctuation\" >.</span>code<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >)</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n  <span class=\"token keyword\" >return</span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >key</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>option<span class=\"token punctuation\" >.</span>value<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>label<span class=\"token punctuation\" >}</span> <span class=\"token operator\" >/</span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cascader</span>\n    <span class=\"token attr-name\" >options</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>options<span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >defaultValue</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token string\" >'zhejiang'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'hangzhou'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'xihu'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >displayRender</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>displayRender<span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >270</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n  <span class=\"token punctuation\" >/></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var options = [{
	      value: 'zhejiang', label: 'Zhejiang', children: [{ value: 'hangzhou', label: 'Hangzhou', children: [{ value: 'xihu', label: 'West Lake', code: 752100 }] }] }, { value: 'jiangsu', label: 'Jiangsu', children: [{ value: 'nanjing', label: 'Nanjing', children: [{ value: 'zhonghuamen', label: 'Zhong Hua Men', code: 453400 }] }] }];function handleAreaClick(e, label, option) {
	      e.stopPropagation();console.log('clicked', label, option);
	    }
	    var displayRender = function displayRender(labels, selectedOptions) {
	      return labels.map(function (label, i) {
	        var option = selectedOptions[i];if (i === labels.length - 1) {
	          return _react2.default.createElement(
	            'span',
	            { key: option.value },
	            label,
	            ' (',
	            _react2.default.createElement(
	              'a',
	              { onClick: function onClick(e) {
	                  return handleAreaClick(e, label, option);
	                } },
	              option.code
	            ),
	            ')'
	          );
	        }return _react2.default.createElement(
	          'span',
	          { key: option.value },
	          label,
	          ' / '
	        );
	      });
	    };return _react2.default.createElement(_cascader2.default, { options: options, defaultValue: ['zhejiang', 'hangzhou', 'xihu'], displayRender: displayRender, style: { width: 270 } });
	  }
	};

/***/ },

/***/ 703:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(86);

	var _cascader = __webpack_require__(85);

	var _cascader2 = _interopRequireDefault(_cascader);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "切换按钮和结果分开。"]],
	    "en-US": [["p", "Separate trigger button and result."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "可以自定义显示",
	      "en-US": "Custom trigger"
	    },
	    "filename": "components/cascader/demo/custom-trigger.md",
	    "id": "components-cascader-demo-custom-trigger"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Cascader <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> options <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'zhejiang'</span><span class=\"token punctuation\" >,</span>\n  label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Zhejiang'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'hangzhou'</span><span class=\"token punctuation\" >,</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Hangzhou'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'jiangsu'</span><span class=\"token punctuation\" >,</span>\n  label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jiangsu'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'nanjing'</span><span class=\"token punctuation\" >,</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Nanjing'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> CitySwitcher <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      text<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Unselect'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >,</span> selectedOptions<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      text<span class=\"token punctuation\" >:</span> selectedOptions<span class=\"token punctuation\" >.</span><span class=\"token function\" >map</span><span class=\"token punctuation\" >(</span>o <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> o<span class=\"token punctuation\" >.</span>label<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >join</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >', '</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>text<span class=\"token punctuation\" >}</span>\n        <span class=\"token entity\" title=\"&nbsp;\">&amp;nbsp;</span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cascader</span> <span class=\"token attr-name\" >options</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>options<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>onChange<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Change city<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Cascader</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CitySwitcher</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var options = [{
	      value: 'zhejiang', label: 'Zhejiang',
	      children: [{ value: 'hangzhou',
	        label: 'Hangzhou' }] }, { value: 'jiangsu', label: 'Jiangsu', children: [{ value: 'nanjing', label: 'Nanjing' }] }];var CitySwitcher = _react2.default.createClass({
	      displayName: 'CitySwitcher',
	      getInitialState: function getInitialState() {
	        return { text: 'Unselect' };
	      },
	      onChange: function onChange(value, selectedOptions) {
	        this.setState({ text: selectedOptions.map(function (o) {
	            return o.label;
	          }).join(', ') });
	      },
	      render: function render() {
	        return _react2.default.createElement(
	          'span',
	          null,
	          this.state.text,
	          '\xA0',
	          _react2.default.createElement(
	            _cascader2.default,
	            { options: options, onChange: this.onChange },
	            _react2.default.createElement(
	              'a',
	              { href: '#' },
	              'Change city'
	            )
	          )
	        );
	      }
	    });return _react2.default.createElement(CitySwitcher, null);
	  }
	};

/***/ },

/***/ 704:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(86);

	var _cascader = __webpack_require__(85);

	var _cascader2 = _interopRequireDefault(_cascader);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "默认值通过数组的方式指定。"]],
	    "en-US": [["p", "Specifies default value by an array."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "默认值",
	      "en-US": "Default value"
	    },
	    "filename": "components/cascader/demo/default-value.md",
	    "id": "components-cascader-demo-default-value"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Cascader <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> options <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'zhejiang'</span><span class=\"token punctuation\" >,</span>\n  label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Zhejiang'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'hangzhou'</span><span class=\"token punctuation\" >,</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Hangzhou'</span><span class=\"token punctuation\" >,</span>\n    children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'xihu'</span><span class=\"token punctuation\" >,</span>\n      label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'West Lake'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'jiangsu'</span><span class=\"token punctuation\" >,</span>\n  label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jiangsu'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'nanjing'</span><span class=\"token punctuation\" >,</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Nanjing'</span><span class=\"token punctuation\" >,</span>\n    children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'zhonghuamen'</span><span class=\"token punctuation\" >,</span>\n      label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Zhong Hua Men'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cascader</span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token string\" >'zhejiang'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'hangzhou'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'xihu'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >options</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>options<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>onChange<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var options = [{
	      value: 'zhejiang', label: 'Zhejiang',
	      children: [{ value: 'hangzhou',
	        label: 'Hangzhou', children: [{ value: 'xihu', label: 'West Lake' }] }] }, { value: 'jiangsu', label: 'Jiangsu', children: [{ value: 'nanjing', label: 'Nanjing', children: [{ value: 'zhonghuamen', label: 'Zhong Hua Men' }] }] }];function onChange(value) {
	      console.log(value);
	    }return _react2.default.createElement(_cascader2.default, { defaultValue: ['zhejiang', 'hangzhou', 'xihu'], options: options, onChange: onChange });
	  }
	};

/***/ },

/***/ 705:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(86);

	var _cascader = __webpack_require__(85);

	var _cascader2 = _interopRequireDefault(_cascader);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "通过指定 options 里的 ", ["code", "disabled"], " 字段。"]],
	    "en-US": [["p", "Disable option by specifying the ", ["code", "disabled"], " property in ", ["code", "options"], "."]]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "禁用选项",
	      "en-US": "Disabled option"
	    },
	    "filename": "components/cascader/demo/disabled-option.md",
	    "id": "components-cascader-demo-disabled-option"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Cascader <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> options <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'zhejiang'</span><span class=\"token punctuation\" >,</span>\n  label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Zhejiang'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'hangzhou'</span><span class=\"token punctuation\" >,</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Hangzhou'</span><span class=\"token punctuation\" >,</span>\n    children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'xihu'</span><span class=\"token punctuation\" >,</span>\n      label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'West Lake'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'jiangsu'</span><span class=\"token punctuation\" >,</span>\n  label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jiangsu'</span><span class=\"token punctuation\" >,</span>\n  disabled<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'nanjing'</span><span class=\"token punctuation\" >,</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Nanjing'</span><span class=\"token punctuation\" >,</span>\n    children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'zhonghuamen'</span><span class=\"token punctuation\" >,</span>\n      label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Zhong Hua Men'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cascader</span> <span class=\"token attr-name\" >options</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>options<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>onChange<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var options = [{
	      value: 'zhejiang', label: 'Zhejiang', children: [{ value: 'hangzhou', label: 'Hangzhou', children: [{
	          value: 'xihu', label: 'West Lake' }] }] }, { value: 'jiangsu', label: 'Jiangsu', disabled: true,
	      children: [{ value: 'nanjing', label: 'Nanjing', children: [{ value: 'zhonghuamen', label: 'Zhong Hua Men' }] }] }];function onChange(value) {
	      console.log(value);
	    }return _react2.default.createElement(_cascader2.default, { options: options, onChange: onChange });
	  }
	};

/***/ },

/***/ 706:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(86);

	var _cascader = __webpack_require__(85);

	var _cascader2 = _interopRequireDefault(_cascader);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "通过移入展开下级菜单，点击完成选择。"]],
	    "en-US": [["p", "Hover to expand sub menu, click to select option."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "移入展开",
	      "en-US": "Hover"
	    },
	    "filename": "components/cascader/demo/hover.md",
	    "id": "components-cascader-demo-hover"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Cascader <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> options <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'zhejiang'</span><span class=\"token punctuation\" >,</span>\n  label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Zhejiang'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'hangzhou'</span><span class=\"token punctuation\" >,</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Hangzhou'</span><span class=\"token punctuation\" >,</span>\n    children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'xihu'</span><span class=\"token punctuation\" >,</span>\n      label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'West Lake'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'jiangsu'</span><span class=\"token punctuation\" >,</span>\n  label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jiangsu'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'nanjing'</span><span class=\"token punctuation\" >,</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Nanjing'</span><span class=\"token punctuation\" >,</span>\n    children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'zhonghuamen'</span><span class=\"token punctuation\" >,</span>\n      label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Zhong Hua Men'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Just show the latest item.</span>\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >displayRender</span><span class=\"token punctuation\" >(</span>label<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token keyword\" >return</span> label<span class=\"token punctuation\" >[</span>label<span class=\"token punctuation\" >.</span>length <span class=\"token operator\" >-</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cascader</span> <span class=\"token attr-name\" >options</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>options<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >expandTrigger</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>hover<span class=\"token punctuation\" >\"</span></span>\n    <span class=\"token attr-name\" >displayRender</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>displayRender<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>onChange<span class=\"token punctuation\" >}</span></span>\n  <span class=\"token punctuation\" >/></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var options = [{
	      value: 'zhejiang', label: 'Zhejiang', children: [{ value: 'hangzhou', label: 'Hangzhou', children: [{ value: 'xihu', label: 'West Lake' }] }] }, { value: 'jiangsu', label: 'Jiangsu', children: [{ value: 'nanjing', label: 'Nanjing', children: [{ value: 'zhonghuamen', label: 'Zhong Hua Men' }] }] }];function onChange(value) {
	      console.log(value);
	    } // Just show the latest item.
	    function displayRender(label) {
	      return label[label.length - 1];
	    }
	    return _react2.default.createElement(_cascader2.default, { options: options, expandTrigger: 'hover', displayRender: displayRender, onChange: onChange });
	  }
	};

/***/ },

/***/ 707:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(86);

	var _cascader = __webpack_require__(85);

	var _cascader2 = _interopRequireDefault(_cascader);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "可以直接搜索选项并选择。"]],
	    "en-US": [["p", "Search and select options directly."]]
	  },
	  "meta": {
	    "order": 9,
	    "title": {
	      "zh-CN": "搜索",
	      "en-US": "Search"
	    },
	    "filename": "components/cascader/demo/search.md",
	    "id": "components-cascader-demo-search"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Cascader <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> options <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'zhejiang'</span><span class=\"token punctuation\" >,</span>\n  label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Zhejiang'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'hangzhou'</span><span class=\"token punctuation\" >,</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Hangzhou'</span><span class=\"token punctuation\" >,</span>\n    children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'xihu'</span><span class=\"token punctuation\" >,</span>\n      label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'West Lake'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'jiangsu'</span><span class=\"token punctuation\" >,</span>\n  label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jiangsu'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'nanjing'</span><span class=\"token punctuation\" >,</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Nanjing'</span><span class=\"token punctuation\" >,</span>\n    children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'zhonghuamen'</span><span class=\"token punctuation\" >,</span>\n      label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Zhong Hua men'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cascader</span>\n    <span class=\"token attr-name\" >options</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>options<span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>onChange<span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >placeholder</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Please</span> <span class=\"token attr-name\" >select\"</span>\n    <span class=\"token attr-name\" >showSearch</span>\n  <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span>\n  mountNode\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var options = [{
	      value: 'zhejiang', label: 'Zhejiang', children: [{ value: 'hangzhou', label: 'Hangzhou', children: [{ value: 'xihu', label: 'West Lake' }] }] }, { value: 'jiangsu', label: 'Jiangsu', children: [{ value: 'nanjing', label: 'Nanjing', children: [{ value: 'zhonghuamen', label: 'Zhong Hua men' }] }] }];
	    function onChange(value) {
	      console.log(value);
	    }return _react2.default.createElement(_cascader2.default, { options: options, onChange: onChange, placeholder: 'Please select', showSearch: true });
	  }
	};

/***/ },

/***/ 708:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(86);

	var _cascader = __webpack_require__(85);

	var _cascader2 = _interopRequireDefault(_cascader);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "不同大小的级联选择器。"]],
	    "en-US": [["p", "Cascade selection box of different sizes."]]
	  },
	  "meta": {
	    "order": 7,
	    "title": {
	      "zh-CN": "大小",
	      "en-US": "Size"
	    },
	    "filename": "components/cascader/demo/size.md",
	    "id": "components-cascader-demo-size"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Cascader <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> options <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'zhejiang'</span><span class=\"token punctuation\" >,</span>\n  label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Zhejiang'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'hangzhou'</span><span class=\"token punctuation\" >,</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Hangzhou'</span><span class=\"token punctuation\" >,</span>\n    children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'xihu'</span><span class=\"token punctuation\" >,</span>\n      label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'West Lake'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'jiangsu'</span><span class=\"token punctuation\" >,</span>\n  label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jiangsu'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'nanjing'</span><span class=\"token punctuation\" >,</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Nanjing'</span><span class=\"token punctuation\" >,</span>\n    children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'zhonghuamen'</span><span class=\"token punctuation\" >,</span>\n      label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Zhong Hua Men'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cascader</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >options</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>options<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>onChange<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cascader</span> <span class=\"token attr-name\" >options</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>options<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>onChange<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cascader</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >options</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>options<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>onChange<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var options = [{
	      value: 'zhejiang', label: 'Zhejiang', children: [{ value: 'hangzhou', label: 'Hangzhou', children: [{ value: 'xihu', label: 'West Lake' }] }] }, { value: 'jiangsu', label: 'Jiangsu', children: [{ value: 'nanjing', label: 'Nanjing', children: [{ value: 'zhonghuamen', label: 'Zhong Hua Men' }] }]
	    }];function onChange(value) {
	      console.log(value);
	    }return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_cascader2.default, { size: 'large', options: options, onChange: onChange }),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(_cascader2.default, { options: options, onChange: onChange }),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(_cascader2.default, { size: 'small', options: options, onChange: onChange }),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement('br', null)
	    );
	  }
	};

/***/ },

/***/ 1197:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(700),
	    'change-on-select': __webpack_require__(701),
	    'custom-render': __webpack_require__(702),
	    'custom-trigger': __webpack_require__(703),
	    'default-value': __webpack_require__(704),
	    'disabled-option': __webpack_require__(705),
	    'hover': __webpack_require__(706),
	    'search': __webpack_require__(707),
	    'size': __webpack_require__(708),
	}

/***/ }

});