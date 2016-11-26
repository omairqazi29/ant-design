webpackJsonp([41,202],{

/***/ 993:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(259);

	var _treeSelect = __webpack_require__(258);

	var _treeSelect2 = _interopRequireDefault(_treeSelect);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "最简单的用法。"]],
	    "en-US": [["p", "The most basic usage."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/tree-select/demo/basic.md",
	    "id": "components-tree-select-demo-basic"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> TreeSelect <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> TreeNode <span class=\"token operator\" >=</span> TreeSelect<span class=\"token punctuation\" >.</span>TreeNode<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> Demo <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> undefined<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>arguments<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> value <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>TreeSelect</span>\n        <span class=\"token attr-name\" >showSearch</span>\n        <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >300</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>value<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >dropdownStyle</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> maxHeight<span class=\"token punctuation\" >:</span> <span class=\"token number\" >400</span><span class=\"token punctuation\" >,</span> overflow<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'auto'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >placeholder</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Please</span> <span class=\"token attr-name\" >select\"</span>\n        <span class=\"token attr-name\" >allowClear</span>\n        <span class=\"token attr-name\" >treeDefaultExpandAll</span>\n        <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>onChange<span class=\"token punctuation\" >}</span></span>\n      <span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>TreeNode</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>parent</span> <span class=\"token attr-name\" >1\"</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>parent</span> <span class=\"token attr-name\" >1\"</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>0-1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>TreeNode</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>parent</span> <span class=\"token attr-name\" >1-0\"</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>parent</span> <span class=\"token attr-name\" >1-0\"</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>0-1-1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>TreeNode</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>leaf1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>my</span> <span class=\"token attr-name\" >leaf\"</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>random<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>TreeNode</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>leaf2<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>your</span> <span class=\"token attr-name\" >leaf\"</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>random1<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>TreeNode</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>TreeNode</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>parent</span> <span class=\"token attr-name\" >1-1\"</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>parent</span> <span class=\"token attr-name\" >1-1\"</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>random2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>TreeNode</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sss<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token operator\" >&lt;</span>b style<span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> color<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'#08c'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>sss<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>b</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span> key<span class=\"token operator\" >=</span><span class=\"token string\" >\"random3\"</span> <span class=\"token operator\" >/</span><span class=\"token operator\" >></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>TreeNode</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>TreeNode</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>TreeSelect</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Demo</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var TreeNode = _treeSelect2.default.TreeNode;var Demo = _react2.default.createClass({
	      displayName: 'Demo',
	      getInitialState: function getInitialState() {
	        return { value: undefined };
	      },
	      onChange: function onChange(value) {
	        console.log(arguments);this.setState({ value: value });
	      },
	      render: function render() {
	        return _react2.default.createElement(
	          _treeSelect2.default,
	          { showSearch: true, style: { width: 300 }, value: this.state.value, dropdownStyle: { maxHeight: 400, overflow: 'auto' }, placeholder: 'Please select', allowClear: true, treeDefaultExpandAll: true, onChange: this.onChange },
	          _react2.default.createElement(
	            TreeNode,
	            { value: 'parent 1', title: 'parent 1', key: '0-1' },
	            _react2.default.createElement(
	              TreeNode,
	              { value: 'parent 1-0', title: 'parent 1-0', key: '0-1-1' },
	              _react2.default.createElement(TreeNode, { value: 'leaf1', title: 'my leaf', key: 'random' }),
	              _react2.default.createElement(TreeNode, { value: 'leaf2', title: 'your leaf', key: 'random1' })
	            ),
	            _react2.default.createElement(
	              TreeNode,
	              { value: 'parent 1-1', title: 'parent 1-1', key: 'random2' },
	              _react2.default.createElement(TreeNode, { value: 'sss', title: _react2.default.createElement(
	                  'b',
	                  { style: { color: '#08c' } },
	                  'sss'
	                ), key: 'random3' })
	            )
	          )
	        );
	      }
	    });return _react2.default.createElement(Demo, null);
	  }
	};

/***/ },

/***/ 994:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(259);

	var _treeSelect = __webpack_require__(258);

	var _treeSelect2 = _interopRequireDefault(_treeSelect);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "多选和勾选框功能。"]],
	    "en-US": [["p", "Multiple and checkable."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "多选",
	      "en-US": "Multiple"
	    },
	    "filename": "components/tree-select/demo/checkable.md",
	    "id": "components-tree-select-demo-checkable"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> TreeSelect <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> SHOW_PARENT <span class=\"token operator\" >=</span> TreeSelect<span class=\"token punctuation\" >.</span>SHOW_PARENT<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> treeData <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Node1'</span><span class=\"token punctuation\" >,</span>\n  value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0-0'</span><span class=\"token punctuation\" >,</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0-0'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Child Node1'</span><span class=\"token punctuation\" >,</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0-0-0'</span><span class=\"token punctuation\" >,</span>\n    key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0-0-0'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Node2'</span><span class=\"token punctuation\" >,</span>\n  value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0-1'</span><span class=\"token punctuation\" >,</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0-1'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Child Node3'</span><span class=\"token punctuation\" >,</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0-1-0'</span><span class=\"token punctuation\" >,</span>\n    key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0-1-0'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Child Node4'</span><span class=\"token punctuation\" >,</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0-1-1'</span><span class=\"token punctuation\" >,</span>\n    key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0-1-1'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Child Node5'</span><span class=\"token punctuation\" >,</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0-1-2'</span><span class=\"token punctuation\" >,</span>\n    key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0-1-2'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> Demo <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token string\" >'0-0-0'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'onChange '</span><span class=\"token punctuation\" >,</span> value<span class=\"token punctuation\" >,</span> arguments<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> value <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> tProps <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n      treeData<span class=\"token punctuation\" >,</span>\n      value<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>value<span class=\"token punctuation\" >,</span>\n      onChange<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>onChange<span class=\"token punctuation\" >,</span>\n      multiple<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >,</span>\n      treeCheckable<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >,</span>\n      showCheckedStrategy<span class=\"token punctuation\" >:</span> SHOW_PARENT<span class=\"token punctuation\" >,</span>\n      searchPlaceholder<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Please select'</span><span class=\"token punctuation\" >,</span>\n      style<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >300</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token operator\" >&lt;</span>TreeSelect <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>tProps<span class=\"token punctuation\" >}</span> <span class=\"token operator\" >/</span><span class=\"token operator\" >></span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Demo</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var SHOW_PARENT = _treeSelect2.default.SHOW_PARENT;var treeData = [{
	      label: 'Node1', value: '0-0',
	      key: '0-0', children: [{ label: 'Child Node1', value: '0-0-0', key: '0-0-0' }] }, { label: 'Node2', value: '0-1', key: '0-1', children: [{ label: 'Child Node3', value: '0-1-0', key: '0-1-0' }, { label: 'Child Node4', value: '0-1-1',
	        key: '0-1-1' }, { label: 'Child Node5', value: '0-1-2', key: '0-1-2' }] }];var Demo = _react2.default.createClass({
	      displayName: 'Demo',
	      getInitialState: function getInitialState() {
	        return {
	          value: ['0-0-0'] };
	      },
	      onChange: function onChange(value) {
	        console.log('onChange ', value, arguments);
	        this.setState({ value: value });
	      },
	      render: function render() {
	        var tProps = { treeData: treeData, value: this.state.value, onChange: this.onChange, multiple: true, treeCheckable: true, showCheckedStrategy: SHOW_PARENT, searchPlaceholder: 'Please select', style: { width: 300 } };return _react2.default.createElement(_treeSelect2.default, tProps);
	      }
	    });return _react2.default.createElement(Demo, null);
	  }
	};

/***/ },

/***/ 995:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(259);

	var _treeSelect = __webpack_require__(258);

	var _treeSelect2 = _interopRequireDefault(_treeSelect);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "使用 ", ["code", "treeData"], " 把 JSON 数据直接生成树结构。"]],
	    "en-US": [["p", "The tree structure can be populated using ", ["code", "treeData"], " property. This is a quick and easy way to provide the tree content."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "从数据直接生成",
	      "en-US": "Generate form tree data"
	    },
	    "filename": "components/tree-select/demo/treeData.md",
	    "id": "components-tree-select-demo-treeData"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> TreeSelect <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> treeData <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Node1'</span><span class=\"token punctuation\" >,</span>\n  value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0-0'</span><span class=\"token punctuation\" >,</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0-0'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Child Node1'</span><span class=\"token punctuation\" >,</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0-0-1'</span><span class=\"token punctuation\" >,</span>\n    key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0-0-1'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n    label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Child Node2'</span><span class=\"token punctuation\" >,</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0-0-2'</span><span class=\"token punctuation\" >,</span>\n    key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0-0-2'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  label<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Node2'</span><span class=\"token punctuation\" >,</span>\n  value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0-1'</span><span class=\"token punctuation\" >,</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0-1'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> Demo <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> undefined<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>arguments<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> value <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>TreeSelect</span>\n        <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >300</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>value<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >dropdownStyle</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> maxHeight<span class=\"token punctuation\" >:</span> <span class=\"token number\" >400</span><span class=\"token punctuation\" >,</span> overflow<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'auto'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >treeData</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>treeData<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >placeholder</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Please</span> <span class=\"token attr-name\" >select\"</span>\n        <span class=\"token attr-name\" >treeDefaultExpandAll</span>\n        <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>onChange<span class=\"token punctuation\" >}</span></span>\n      <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Demo</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var treeData = [{ label: 'Node1', value: '0-0', key: '0-0', children: [{
	        label: 'Child Node1',
	        value: '0-0-1', key: '0-0-1'
	      }, { label: 'Child Node2',
	        value: '0-0-2', key: '0-0-2' }] }, { label: 'Node2', value: '0-1', key: '0-1' }];var Demo = _react2.default.createClass({
	      displayName: 'Demo',
	      getInitialState: function getInitialState() {
	        return { value: undefined };
	      },
	      onChange: function onChange(value) {
	        console.log(arguments);this.setState({ value: value });
	      },
	      render: function render() {
	        return _react2.default.createElement(_treeSelect2.default, { style: { width: 300 }, value: this.state.value, dropdownStyle: { maxHeight: 400, overflow: 'auto' }, treeData: treeData, placeholder: 'Please select', treeDefaultExpandAll: true, onChange: this.onChange });
	      }
	    });return _react2.default.createElement(Demo, null);
	  }
	};

/***/ },

/***/ 1228:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(993),
	    'checkable': __webpack_require__(994),
	    'treeData': __webpack_require__(995),
	}

/***/ }

});