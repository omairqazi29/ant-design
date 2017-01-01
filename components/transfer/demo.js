webpackJsonp([26,209],{

/***/ 993:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(188);

	var _transfer = __webpack_require__(187);

	var _transfer2 = _interopRequireDefault(_transfer);

	var _style4 = __webpack_require__(12);

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "穿梭框高级用法，可配置操作文案，可定制宽高，可对底部进行自定义渲染。"]],
	    "en-US": [["p", "Advanced Usage of Transfer."], ["p", "You can customize the labels of the transfer buttons, the width and height of the columns, and what should be displayed in the footer."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "高级用法",
	      "en-US": "Advanced"
	    },
	    "filename": "components/transfer/demo/advanced.md",
	    "id": "components-transfer-demo-advanced"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Transfer<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      mockData<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      targetKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">getMock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">getMock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> targetKeys <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> mockData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">20</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n        description<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`description of content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n        chosen<span class=\"token punctuation\">:</span> Math<span class=\"token punctuation\">.</span><span class=\"token function\">random</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">*</span> <span class=\"token number\">2</span> <span class=\"token operator\">></span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>chosen<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        targetKeys<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      mockData<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> mockData<span class=\"token punctuation\">,</span> targetKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>targetKeys<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> targetKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">renderFooter</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ghost<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> float<span class=\"token punctuation\">:</span> <span class=\"token string\">'right'</span><span class=\"token punctuation\">,</span> margin<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>getMock<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        reload\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Transfer</span>\n        <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>mockData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">showSearch</span>\n        <span class=\"token attr-name\">listStyle</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n          width<span class=\"token punctuation\">:</span> <span class=\"token number\">250</span><span class=\"token punctuation\">,</span>\n          height<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">operations</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'to right'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'to left'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">targetKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>targetKeys<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">render</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>item<span class=\"token punctuation\">.</span>title<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">-</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>item<span class=\"token punctuation\">.</span>description<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">footer</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>renderFooter<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return { mockData: [], targetKeys: [] };
	      },
	      componentDidMount: function componentDidMount() {
	        this.getMock();
	      },
	      getMock: function getMock() {
	        var targetKeys = [];var mockData = [];for (var i = 0; i < 20; i++) {
	          var data = { key: i.toString(), title: 'content' + (i + 1), description: 'description of content' + (i + 1), chosen: Math.random() * 2 > 1 };if (data.chosen) {
	            targetKeys.push(data.key);
	          }mockData.push(data);
	        }this.setState({
	          mockData: mockData,
	          targetKeys: targetKeys });
	      },
	      handleChange: function handleChange(targetKeys) {
	        this.setState({ targetKeys: targetKeys });
	      },
	      renderFooter: function renderFooter() {
	        return _react2.default.createElement(
	          _button2.default,
	          { type: 'ghost', size: 'small', style: { float: 'right', margin: 5 }, onClick: this.getMock },
	          'reload'
	        );
	      },
	      render: function render() {
	        return _react2.default.createElement(_transfer2.default, { dataSource: this.state.mockData, showSearch: true, listStyle: { width: 250, height: 300 }, operations: ['to right', 'to left'], targetKeys: this.state.targetKeys, onChange: this.handleChange, render: function render(item) {
	            return item.title + '-' + item.description;
	          }, footer: this.renderFooter });
	      }
	    });return _react2.default.createElement(App, null);
	  }
	};

/***/ },

/***/ 994:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(188);

	var _transfer = __webpack_require__(187);

	var _transfer2 = _interopRequireDefault(_transfer);

	var _toConsumableArray2 = __webpack_require__(70);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "最基本的用法，展示了 ", ["code", "dataSource"], "、", ["code", "targetKeys"], "、每行的渲染函数 ", ["code", "render"], " 以及回调函数 ", ["code", "onChange"], " 的用法。"]],
	    "en-US": [["p", "The most basic usage of ", ["code", "Transfer"], " involves providing the source data and target keys arrays, plus the rendering and change callback functions."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本用法",
	      "en-US": "Basic"
	    },
	    "filename": "components/transfer/demo/basic.md",
	    "id": "components-transfer-demo-basic"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Transfer <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> mockData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">20</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  mockData<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`description of content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n    disabled<span class=\"token punctuation\">:</span> i <span class=\"token operator\">%</span> <span class=\"token number\">3</span> <span class=\"token operator\">&lt;</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> targetKeys <span class=\"token operator\">=</span> mockData\n        <span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">+</span>item<span class=\"token punctuation\">.</span>key <span class=\"token operator\">%</span> <span class=\"token number\">3</span> <span class=\"token operator\">></span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span>\n        <span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      targetKeys<span class=\"token punctuation\">,</span>\n      selectedKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>nextTargetKeys<span class=\"token punctuation\">,</span> direction<span class=\"token punctuation\">,</span> moveKeys<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> targetKeys<span class=\"token punctuation\">:</span> nextTargetKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'targetKeys: '</span><span class=\"token punctuation\">,</span> targetKeys<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'direction: '</span><span class=\"token punctuation\">,</span> direction<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'moveKeys: '</span><span class=\"token punctuation\">,</span> moveKeys<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleSelectChange</span><span class=\"token punctuation\">(</span>sourceSelectedKeys<span class=\"token punctuation\">,</span> targetSelectedKeys<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> selectedKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>sourceSelectedKeys<span class=\"token punctuation\">,</span> <span class=\"token operator\">...</span>targetSelectedKeys<span class=\"token punctuation\">]</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'sourceSelectedKeys: '</span><span class=\"token punctuation\">,</span> sourceSelectedKeys<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'targetSelectedKeys: '</span><span class=\"token punctuation\">,</span> targetSelectedKeys<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> state <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Transfer</span>\n        <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>mockData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">titles</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'Source'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Target'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">targetKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>state<span class=\"token punctuation\">.</span>targetKeys<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">selectedKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>state<span class=\"token punctuation\">.</span>selectedKeys<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onSelectChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSelectChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">render</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var mockData = [];
	    for (var i = 0; i < 20; i++) {
	      mockData.push({ key: i.toString(),
	        title: 'content' + (i + 1), description: 'description of content' + (i + 1), disabled: i % 3 < 1 });
	    }var targetKeys = mockData.filter(function (item) {
	      return +item.key % 3 > 1;
	    }).map(function (item) {
	      return item.key;
	    });var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return { targetKeys: targetKeys, selectedKeys: [] };
	      },
	      handleChange: function handleChange(nextTargetKeys, direction, moveKeys) {
	        this.setState({ targetKeys: nextTargetKeys });console.log('targetKeys: ', targetKeys);console.log('direction: ', direction);console.log('moveKeys: ', moveKeys);
	      },
	      handleSelectChange: function handleSelectChange(sourceSelectedKeys, targetSelectedKeys) {
	        this.setState({ selectedKeys: [].concat((0, _toConsumableArray3.default)(sourceSelectedKeys), (0, _toConsumableArray3.default)(targetSelectedKeys)) });console.log('sourceSelectedKeys: ', sourceSelectedKeys);
	        console.log('targetSelectedKeys: ', targetSelectedKeys);
	      },
	      render: function render() {
	        var state = this.state;return _react2.default.createElement(_transfer2.default, { dataSource: mockData, titles: ['Source', 'Target'], targetKeys: state.targetKeys, selectedKeys: state.selectedKeys, onChange: this.handleChange, onSelectChange: this.handleSelectChange, render: function render(item) {
	            return item.title;
	          } });
	      }
	    });return _react2.default.createElement(App, null);
	  }
	};

/***/ },

/***/ 995:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(188);

	var _transfer = __webpack_require__(187);

	var _transfer2 = _interopRequireDefault(_transfer);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "自定义渲染每一个 Transfer Item，可用于渲染复杂数据。"]],
	    "en-US": [["p", "Custom each Transfer Item, and in this way you can render a complex datasource."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "自定义渲染行数据",
	      "en-US": "Custom datasource"
	    },
	    "filename": "components/transfer/demo/custom-item.md",
	    "id": "components-transfer-demo-custom-item"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Transfer <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      mockData<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      targetKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">getMock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">getMock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> targetKeys <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> mockData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">20</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n        description<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`description of content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n        chosen<span class=\"token punctuation\">:</span> Math<span class=\"token punctuation\">.</span><span class=\"token function\">random</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">*</span> <span class=\"token number\">2</span> <span class=\"token operator\">></span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>chosen<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        targetKeys<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      mockData<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> mockData<span class=\"token punctuation\">,</span> targetKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>targetKeys<span class=\"token punctuation\">,</span> direction<span class=\"token punctuation\">,</span> moveKeys<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>targetKeys<span class=\"token punctuation\">,</span> direction<span class=\"token punctuation\">,</span> moveKeys<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> targetKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">renderItem</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> customLabel <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>custom-item<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span> <span class=\"token operator\">-</span> <span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>description<span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      label<span class=\"token punctuation\">:</span> customLabel<span class=\"token punctuation\">,</span>  <span class=\"token comment\" spellcheck=\"true\">// for displayed item</span>\n      value<span class=\"token punctuation\">:</span> item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">,</span>   <span class=\"token comment\" spellcheck=\"true\">// for title and filter matching</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Transfer</span>\n        <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>mockData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">listStyle</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n          width<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span><span class=\"token punctuation\">,</span>\n          height<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">targetKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>targetKeys<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">render</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>renderItem<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return { mockData: [], targetKeys: [] };
	      },
	      componentDidMount: function componentDidMount() {
	        this.getMock();
	      },
	      getMock: function getMock() {
	        var targetKeys = [];var mockData = [];for (var i = 0; i < 20; i++) {
	          var data = { key: i.toString(), title: 'content' + (i + 1), description: 'description of content' + (i + 1), chosen: Math.random() * 2 > 1 };if (data.chosen) {
	            targetKeys.push(data.key);
	          }
	          mockData.push(data);
	        }this.setState({ mockData: mockData, targetKeys: targetKeys });
	      },
	      handleChange: function handleChange(targetKeys, direction, moveKeys) {
	        console.log(targetKeys, direction, moveKeys);this.setState({ targetKeys: targetKeys });
	      },
	      renderItem: function renderItem(item) {
	        var customLabel = _react2.default.createElement(
	          'span',
	          { className: 'custom-item' },
	          item.title,
	          ' - ',
	          item.description
	        );return { label: customLabel, // for displayed item
	          value: item.title };
	      },
	      render: function render() {
	        return _react2.default.createElement(_transfer2.default, { dataSource: this.state.mockData, listStyle: { width: 300, height: 300 }, targetKeys: this.state.targetKeys, onChange: this.handleChange, render: this.renderItem });
	      }
	    });return _react2.default.createElement(App, null);
	  }
	};

/***/ },

/***/ 996:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "meta": {}
	};

/***/ },

/***/ 997:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(188);

	var _transfer = __webpack_require__(187);

	var _transfer2 = _interopRequireDefault(_transfer);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "带搜索框的穿梭框，可以自定义搜索函数。"]],
	    "en-US": [["p", "Transfer with a search box."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "带搜索框",
	      "en-US": "Search"
	    },
	    "filename": "components/transfer/demo/search.md",
	    "id": "components-transfer-demo-search"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Transfer <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      mockData<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      targetKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">getMock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">getMock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> targetKeys <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> mockData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">20</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n        description<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`description of content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n        chosen<span class=\"token punctuation\">:</span> Math<span class=\"token punctuation\">.</span><span class=\"token function\">random</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">*</span> <span class=\"token number\">2</span> <span class=\"token operator\">></span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>chosen<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        targetKeys<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      mockData<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> mockData<span class=\"token punctuation\">,</span> targetKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">filterOption</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">,</span> option<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> option<span class=\"token punctuation\">.</span>description<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">></span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>targetKeys<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> targetKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Transfer</span>\n        <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>mockData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">showSearch</span>\n        <span class=\"token attr-name\">filterOption</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>filterOption<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">targetKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>targetKeys<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">render</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return { mockData: [], targetKeys: [] };
	      },
	      componentDidMount: function componentDidMount() {
	        this.getMock();
	      },
	      getMock: function getMock() {
	        var targetKeys = [];var mockData = [];for (var i = 0; i < 20; i++) {
	          var data = { key: i.toString(), title: 'content' + (i + 1), description: 'description of content' + (i + 1), chosen: Math.random() * 2 > 1 };if (data.chosen) {
	            targetKeys.push(data.key);
	          }mockData.push(data);
	        }this.setState({ mockData: mockData, targetKeys: targetKeys });
	      },
	      filterOption: function filterOption(inputValue, option) {
	        return option.description.indexOf(inputValue) > -1;
	      },
	      handleChange: function handleChange(targetKeys) {
	        this.setState({ targetKeys: targetKeys });
	      },
	      render: function render() {
	        return _react2.default.createElement(_transfer2.default, { dataSource: this.state.mockData, showSearch: true, filterOption: this.filterOption, targetKeys: this.state.targetKeys, onChange: this.handleChange, render: function render(item) {
	            return item.title;
	          } });
	      }
	    });return _react2.default.createElement(App, null);
	  }
	};

/***/ },

/***/ 1243:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'advanced': __webpack_require__(993),
	    'basic': __webpack_require__(994),
	    'custom-item': __webpack_require__(995),
	    'large-data': __webpack_require__(996),
	    'search': __webpack_require__(997),
	}

/***/ }

});