webpackJsonp([9,201],{

/***/ 650:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'async': __webpack_require__(1518),
	    'avatar': __webpack_require__(1519),
	    'basic': __webpack_require__(1520),
	    'controllder-simple': __webpack_require__(1521),
	    'controlled': __webpack_require__(1522),
	    'custom-tag': __webpack_require__(1523),
	    'multilines': __webpack_require__(1524),
	    'popupContainer': __webpack_require__(1525),
	}

/***/ },

/***/ 1518:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(125);

	var _mention = __webpack_require__(124);

	var _mention2 = _interopRequireDefault(_mention);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "匹配内容列表为异步返回时。"]],
	    "en-US": [["p", "async"]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "异步加载",
	      "en-US": "Asynchronous loading"
	    },
	    "filename": "components/mention/demo/async.md",
	    "id": "components-mention-demo-async"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Mention <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> users <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token string\" >'afc163'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'benjycui'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'yiminghe'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'jljsj33'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'dqaria'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'RaoHai'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> AsyncMention <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      suggestions<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n      loading<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >fetchSuggestions</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >,</span> callback<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token function\" >setTimeout</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token function\" >callback</span><span class=\"token punctuation\" >(</span>users<span class=\"token punctuation\" >.</span><span class=\"token function\" >filter</span><span class=\"token punctuation\" >(</span>item <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> item<span class=\"token punctuation\" >.</span><span class=\"token function\" >indexOf</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >!==</span> <span class=\"token operator\" >-</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >500</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >onSearchChange</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >fetchSuggestions</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >(</span>suggestions<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n        suggestions<span class=\"token punctuation\" >,</span>\n        loading<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      loading<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> suggestions<span class=\"token punctuation\" >,</span> loading <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Mention</span>\n        <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'100%'</span><span class=\"token punctuation\" >,</span> height<span class=\"token punctuation\" >:</span> <span class=\"token number\" >100</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >loading</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>loading<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >suggestions</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>suggestions<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >onSearchChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>onSearchChange<span class=\"token punctuation\" >}</span></span>\n      <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>AsyncMention</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span>\n  mountNode\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];var AsyncMention = _react2.default.createClass({
	      displayName: 'AsyncMention',
	      getInitialState: function getInitialState() {
	        return { suggestions: [], loading: false };
	      },
	      fetchSuggestions: function fetchSuggestions(value, callback) {
	        setTimeout(function () {
	          callback(users.filter(function (item) {
	            return item.indexOf(value) !== -1;
	          }));
	        }, 500);
	      },
	      onSearchChange: function onSearchChange(value) {
	        var _this = this;

	        this.fetchSuggestions(value, function (suggestions) {
	          _this.setState({ suggestions: suggestions, loading: false });
	        });
	        this.setState({ loading: true });
	      },
	      render: function render() {
	        var _state = this.state,
	            suggestions = _state.suggestions,
	            loading = _state.loading;
	        return _react2.default.createElement(_mention2.default, { style: { width: '100%', height: 100 }, loading: loading, suggestions: suggestions, onSearchChange: this.onSearchChange });
	      }
	    });return _react2.default.createElement(AsyncMention, null);
	  }
	};

/***/ },

/***/ 1519:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(125);

	var _mention = __webpack_require__(124);

	var _mention2 = _interopRequireDefault(_mention);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "自定义建议（含头像）"], ["p", "注意，自定义建议时，onSearchChange 必须不能为空。"]],
	    "en-US": [["p", "Customize suggestions"]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "头像",
	      "en-US": "Icon Image"
	    },
	    "filename": "components/mention/demo/avatar.md",
	    "id": "components-mention-demo-avatar"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Mention <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> Nav <span class=\"token operator\" >=</span> Mention<span class=\"token punctuation\" >.</span>Nav<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> webFrameworks <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span>\n  <span class=\"token punctuation\" >{</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'React'</span><span class=\"token punctuation\" >,</span> type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'JavaScript'</span><span class=\"token punctuation\" >,</span> icon<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Angular'</span><span class=\"token punctuation\" >,</span> type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'JavaScript'</span><span class=\"token punctuation\" >,</span> icon<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Dva'</span><span class=\"token punctuation\" >,</span> type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Javascript'</span><span class=\"token punctuation\" >,</span> icon<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Flask'</span><span class=\"token punctuation\" >,</span> type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Python'</span><span class=\"token punctuation\" >,</span> icon<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> CustomNavMention <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      suggestions<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >onSearchChange</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> searchValue <span class=\"token operator\" >=</span> value<span class=\"token punctuation\" >.</span><span class=\"token function\" >toLowerCase</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >const</span> filtered <span class=\"token operator\" >=</span> webFrameworks<span class=\"token punctuation\" >.</span><span class=\"token function\" >filter</span><span class=\"token punctuation\" >(</span>item <span class=\"token operator\" >=</span><span class=\"token operator\" >></span>\n      item<span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >.</span><span class=\"token function\" >toLowerCase</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >indexOf</span><span class=\"token punctuation\" >(</span>searchValue<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >!==</span> <span class=\"token operator\" >-</span><span class=\"token number\" >1</span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n    <span class=\"token keyword\" >const</span> suggestions <span class=\"token operator\" >=</span> filtered<span class=\"token punctuation\" >.</span><span class=\"token function\" >map</span><span class=\"token punctuation\" >(</span>suggestion <span class=\"token operator\" >=</span><span class=\"token operator\" >></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Nav</span> <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>suggestion<span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >data</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>suggestion<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >disabled</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>suggestion<span class=\"token punctuation\" >.</span>disabled<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>img</span> <span class=\"token attr-name\" >alt</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>suggestion<span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> height<span class=\"token punctuation\" >:</span> <span class=\"token number\" >16</span><span class=\"token punctuation\" >,</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >16</span><span class=\"token punctuation\" >,</span> marginRight<span class=\"token punctuation\" >:</span> <span class=\"token number\" >5</span><span class=\"token punctuation\" >,</span> float<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'left'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >src</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>suggestion<span class=\"token punctuation\" >.</span>icon<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n          <span class=\"token punctuation\" >{</span>suggestion<span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >}</span> <span class=\"token operator\" >-</span> <span class=\"token punctuation\" >{</span>suggestion<span class=\"token punctuation\" >.</span>type<span class=\"token punctuation\" >}</span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Nav</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      suggestions<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> suggestions <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Mention</span>\n        <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'100%'</span><span class=\"token punctuation\" >,</span> height<span class=\"token punctuation\" >:</span> <span class=\"token number\" >100</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >suggestions</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>suggestions<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >onSearchChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>onSearchChange<span class=\"token punctuation\" >}</span></span>\n      <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CustomNavMention</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span>\n  mountNode\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Nav = _mention2.default.Nav;
	    var webFrameworks = [{ name: 'React',
	      type: 'JavaScript',
	      icon: 'https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg' }, { name: 'Angular', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png' }, { name: 'Dva', type: 'Javascript', icon: 'https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png' }, { name: 'Flask', type: 'Python', icon: 'https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png' }];var CustomNavMention = _react2.default.createClass({
	      displayName: 'CustomNavMention',
	      getInitialState: function getInitialState() {
	        return { suggestions: [] };
	      },
	      onSearchChange: function onSearchChange(value) {
	        var searchValue = value.toLowerCase();
	        var filtered = webFrameworks.filter(function (item) {
	          return item.name.toLowerCase().indexOf(searchValue) !== -1;
	        });var suggestions = filtered.map(function (suggestion) {
	          return _react2.default.createElement(
	            Nav,
	            { value: suggestion.name, data: suggestion, disabled: suggestion.disabled },
	            _react2.default.createElement(
	              'span',
	              null,
	              _react2.default.createElement('img', { alt: suggestion.name, style: { height: 16, width: 16, marginRight: 5, float: 'left' }, src: suggestion.icon }),
	              suggestion.name,
	              ' - ',
	              suggestion.type
	            )
	          );
	        });this.setState({ suggestions: suggestions });
	      },
	      render: function render() {
	        var suggestions = this.state.suggestions;
	        return _react2.default.createElement(_mention2.default, { style: { width: '100%', height: 100 }, suggestions: suggestions, onSearchChange: this.onSearchChange });
	      }
	    });return _react2.default.createElement(CustomNavMention, null);
	  }
	};

/***/ },

/***/ 1520:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(125);

	var _mention = __webpack_require__(124);

	var _mention2 = _interopRequireDefault(_mention);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "基本使用"]],
	    "en-US": [["p", "Basic usage."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本使用",
	      "en-US": "Basic"
	    },
	    "filename": "components/mention/demo/basic.md",
	    "id": "components-mention-demo-basic"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Mention <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> toString<span class=\"token punctuation\" >,</span> toEditorState <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> Mention<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span>editorState<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token function\" >toString</span><span class=\"token punctuation\" >(</span>editorState<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >onSelect</span><span class=\"token punctuation\" >(</span>suggestion<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'onSelect'</span><span class=\"token punctuation\" >,</span> suggestion<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Mention</span>\n    <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'100%'</span><span class=\"token punctuation\" >,</span> height<span class=\"token punctuation\" >:</span> <span class=\"token number\" >100</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>onChange<span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >defaultValue</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >toEditorState</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'@afc163'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >suggestions</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token string\" >'afc163'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'benjycui'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'yiminghe'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'RaoHai'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'中文'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'にほんご'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >onSelect</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>onSelect<span class=\"token punctuation\" >}</span></span>\n  <span class=\"token punctuation\" >/></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var toString = _mention2.default.toString,
	        toEditorState = _mention2.default.toEditorState;

	    function onChange(editorState) {
	      console.log(toString(editorState));
	    }function onSelect(suggestion) {
	      console.log('onSelect', suggestion);
	    }return _react2.default.createElement(_mention2.default, { style: { width: '100%', height: 100 }, onChange: onChange, defaultValue: toEditorState('@afc163'), suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'], onSelect: onSelect });
	  }
	};

/***/ },

/***/ 1521:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(125);

	var _mention = __webpack_require__(124);

	var _mention2 = _interopRequireDefault(_mention);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "受控模式."]],
	    "en-US": [["p", "Controlled mode."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "受控模式",
	      "en-US": "Controlled"
	    },
	    "filename": "components/mention/demo/controllder-simple.md",
	    "id": "components-mention-demo-controllder-simple"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Mention <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> toEditorState <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> Mention<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> App <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> <span class=\"token function\" >toEditorState</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'@afc163'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >handleChange</span><span class=\"token punctuation\" >(</span>editorState<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      value<span class=\"token punctuation\" >:</span> editorState<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Mention</span>\n      <span class=\"token attr-name\" >suggestions</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token string\" >'afc163'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'benjycui'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'yiminghe'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'RaoHai'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'中文'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'にほんご'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span>\n      <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>value<span class=\"token punctuation\" >}</span></span>\n      <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleChange<span class=\"token punctuation\" >}</span></span>\n    <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>App</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var toEditorState = _mention2.default.toEditorState;
	    var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return { value: toEditorState('@afc163') };
	      },
	      handleChange: function handleChange(editorState) {
	        this.setState({ value: editorState });
	      },
	      render: function render() {
	        return _react2.default.createElement(_mention2.default, { suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'], value: this.state.value, onChange: this.handleChange });
	      }
	    });return _react2.default.createElement(App, null);
	  }
	};

/***/ },

/***/ 1522:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(11);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _style5 = __webpack_require__(55);

	var _form = __webpack_require__(54);

	var _form2 = _interopRequireDefault(_form);

	var _style6 = __webpack_require__(125);

	var _mention = __webpack_require__(124);

	var _mention2 = _interopRequireDefault(_mention);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "受控模式，例如配合 Form 使用"]],
	    "en-US": [["p", "Controlled mode, for example, to work with ", ["code", "Form"], " ."]]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "配合 Form 使用",
	      "en-US": "With Form"
	    },
	    "filename": "components/mention/demo/controlled.md",
	    "id": "components-mention-demo-controlled"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Mention<span class=\"token punctuation\" >,</span> Form<span class=\"token punctuation\" >,</span> Button <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> toEditorState<span class=\"token punctuation\" >,</span> getMentions <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> Mention<span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> FormItem <span class=\"token operator\" >=</span> Form<span class=\"token punctuation\" >.</span>Item<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >let</span> App <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      initValue<span class=\"token punctuation\" >:</span> <span class=\"token function\" >toEditorState</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'@afc163'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >handleReset</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    e<span class=\"token punctuation\" >.</span><span class=\"token function\" >preventDefault</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>form<span class=\"token punctuation\" >.</span><span class=\"token function\" >resetFields</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >handleSubmit</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    e<span class=\"token punctuation\" >.</span><span class=\"token function\" >preventDefault</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>form<span class=\"token punctuation\" >.</span><span class=\"token function\" >validateFields</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>errors<span class=\"token punctuation\" >,</span> values<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>errors<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'Errors in form!!!'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n        <span class=\"token keyword\" >return</span><span class=\"token punctuation\" >;</span>\n      <span class=\"token punctuation\" >}</span>\n      console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'Submit!!!'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n      console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>values<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >checkMention</span><span class=\"token punctuation\" >(</span>rule<span class=\"token punctuation\" >,</span> value<span class=\"token punctuation\" >,</span> callback<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> getFieldValue <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>form<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >const</span> mentions <span class=\"token operator\" >=</span> <span class=\"token function\" >getMentions</span><span class=\"token punctuation\" >(</span><span class=\"token function\" >getFieldValue</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'mention'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>mentions<span class=\"token punctuation\" >.</span>length <span class=\"token operator\" >&lt;</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token function\" >callback</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >new</span> <span class=\"token class-name\" >Error</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'More than one must be selected!'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >else</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token function\" >callback</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> getFieldDecorator<span class=\"token punctuation\" >,</span> getFieldValue <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>form<span class=\"token punctuation\" >;</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'>> render'</span><span class=\"token punctuation\" >,</span> <span class=\"token function\" >getFieldValue</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'mention'</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >===</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>initValue<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Form</span> <span class=\"token attr-name\" >horizontal</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FormItem</span>\n          <span class=\"token attr-name\" >id</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>control-mention<span class=\"token punctuation\" >\"</span></span>\n          <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Top</span> <span class=\"token attr-name\" >coders\"</span>\n          <span class=\"token attr-name\" >labelCol</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> span<span class=\"token punctuation\" >:</span> <span class=\"token number\" >6</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n          <span class=\"token attr-name\" >wrapperCol</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> span<span class=\"token punctuation\" >:</span> <span class=\"token number\" >14</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token punctuation\" >></span></span>\n          <span class=\"token punctuation\" >{</span><span class=\"token function\" >getFieldDecorator</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'mention'</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n            rules<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>\n              <span class=\"token punctuation\" >{</span> validator<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>checkMention <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n            <span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n            initialValue<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>initValue<span class=\"token punctuation\" >,</span>\n          <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >(</span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Mention</span>\n              <span class=\"token attr-name\" >suggestions</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token string\" >'afc163'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'benjycui'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'yiminghe'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'RaoHai'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'中文'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'にほんご'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span>\n            <span class=\"token punctuation\" >/></span></span>\n          <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FormItem</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FormItem</span> <span class=\"token attr-name\" >wrapperCol</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> span<span class=\"token punctuation\" >:</span> <span class=\"token number\" >14</span><span class=\"token punctuation\" >,</span> offset<span class=\"token punctuation\" >:</span> <span class=\"token number\" >6</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleSubmit<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Submit<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token entity\" title=\"&nbsp;\">&amp;nbsp;</span><span class=\"token entity\" title=\"&nbsp;\">&amp;nbsp;</span><span class=\"token entity\" title=\"&nbsp;\">&amp;nbsp;</span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleReset<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Reset<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FormItem</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Form</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nApp <span class=\"token operator\" >=</span> Form<span class=\"token punctuation\" >.</span><span class=\"token function\" >create</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >(</span>App<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>App</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var toEditorState = _mention2.default.toEditorState,
	        getMentions = _mention2.default.getMentions;
	    var FormItem = _form2.default.Item;var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return { initValue: toEditorState('@afc163') };
	      },
	      handleReset: function handleReset(e) {
	        e.preventDefault();this.props.form.resetFields();
	      },
	      handleSubmit: function handleSubmit(e) {
	        e.preventDefault();this.props.form.validateFields(function (errors, values) {
	          if (errors) {
	            console.log('Errors in form!!!');return;
	          }console.log('Submit!!!');
	          console.log(values);
	        });
	      },
	      checkMention: function checkMention(rule, value, callback) {
	        var getFieldValue = this.props.form.getFieldValue;

	        var mentions = getMentions(getFieldValue('mention'));
	        if (mentions.length < 2) {
	          callback(new Error('More than one must be selected!'));
	        } else {
	          callback();
	        }
	      },
	      render: function render() {
	        var _props$form = this.props.form,
	            getFieldDecorator = _props$form.getFieldDecorator,
	            getFieldValue = _props$form.getFieldValue;
	        console.log('>> render', getFieldValue('mention') === this.state.initValue);return _react2.default.createElement(
	          _form2.default,
	          { horizontal: true },
	          _react2.default.createElement(
	            FormItem,
	            { id: 'control-mention', label: 'Top coders', labelCol: { span: 6 }, wrapperCol: { span: 14 } },
	            getFieldDecorator('mention', { rules: [{ validator: this.checkMention }], initialValue: this.state.initValue })(_react2.default.createElement(_mention2.default, { suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'] }))
	          ),
	          _react2.default.createElement(
	            FormItem,
	            { wrapperCol: { span: 14, offset: 6 } },
	            _react2.default.createElement(
	              _button2.default,
	              { type: 'primary', onClick: this.handleSubmit },
	              'Submit'
	            ),
	            '\xA0\xA0\xA0',
	            _react2.default.createElement(
	              _button2.default,
	              { type: 'ghost', onClick: this.handleReset },
	              'Reset'
	            )
	          )
	        );
	      }
	    });App = _form2.default.create()(App);return _react2.default.createElement(App, null);
	  }
	};

/***/ },

/***/ 1523:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(125);

	var _mention = __webpack_require__(124);

	var _mention2 = _interopRequireDefault(_mention);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "自定义建议"], ["p", "注意，自定义建议时，onSearchChange 必须不能为空。"]],
	    "en-US": [["p", "Customize suggestions."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "自定义建议",
	      "en-US": "Customize Suggestion"
	    },
	    "filename": "components/mention/demo/custom-tag.md",
	    "id": "components-mention-demo-custom-tag"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Mention <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> Nav <span class=\"token operator\" >=</span> Mention<span class=\"token punctuation\" >.</span>Nav<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> webFrameworks <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span>\n  <span class=\"token punctuation\" >{</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'React'</span><span class=\"token punctuation\" >,</span> type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'JavaScript'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Angular'</span><span class=\"token punctuation\" >,</span> type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'JavaScript'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Laravel'</span><span class=\"token punctuation\" >,</span> type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'PHP'</span><span class=\"token punctuation\" >,</span> disabled<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Flask'</span><span class=\"token punctuation\" >,</span> type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Python'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Django'</span><span class=\"token punctuation\" >,</span> type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Python'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >onSelect</span><span class=\"token punctuation\" >(</span>suggestion<span class=\"token punctuation\" >,</span> data<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'onSelect'</span><span class=\"token punctuation\" >,</span> suggestion<span class=\"token punctuation\" >,</span> data<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n<span class=\"token keyword\" >const</span> CustomNavMention <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      suggestions<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >onSearchChange</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> searchValue <span class=\"token operator\" >=</span> value<span class=\"token punctuation\" >.</span><span class=\"token function\" >toLowerCase</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >const</span> filtered <span class=\"token operator\" >=</span> webFrameworks<span class=\"token punctuation\" >.</span><span class=\"token function\" >filter</span><span class=\"token punctuation\" >(</span>item <span class=\"token operator\" >=</span><span class=\"token operator\" >></span>\n      item<span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >.</span><span class=\"token function\" >toLowerCase</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >indexOf</span><span class=\"token punctuation\" >(</span>searchValue<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >!==</span> <span class=\"token operator\" >-</span><span class=\"token number\" >1</span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >const</span> suggestions <span class=\"token operator\" >=</span> filtered<span class=\"token punctuation\" >.</span><span class=\"token function\" >map</span><span class=\"token punctuation\" >(</span>suggestion <span class=\"token operator\" >=</span><span class=\"token operator\" >></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Nav</span> <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>suggestion<span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >data</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>suggestion<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>suggestion<span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >}</span> <span class=\"token operator\" >-</span> <span class=\"token punctuation\" >{</span>suggestion<span class=\"token punctuation\" >.</span>type<span class=\"token punctuation\" >}</span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Nav</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> suggestions <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> suggestions <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Mention</span>\n        <span class=\"token attr-name\" >placeholder</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>@someone<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'100%'</span><span class=\"token punctuation\" >,</span> height<span class=\"token punctuation\" >:</span> <span class=\"token number\" >100</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >suggestions</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>suggestions<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >onSearchChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>onSearchChange<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >onSelect</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>onSelect<span class=\"token punctuation\" >}</span></span>\n      <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>CustomNavMention</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span>\n  mountNode\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Nav = _mention2.default.Nav;
	    var webFrameworks = [{ name: 'React',
	      type: 'JavaScript' }, { name: 'Angular', type: 'JavaScript' }, { name: 'Laravel', type: 'PHP', disabled: true }, { name: 'Flask', type: 'Python' }, { name: 'Django', type: 'Python' }];function onSelect(suggestion, data) {
	      console.log('onSelect', suggestion, data);
	    }var CustomNavMention = _react2.default.createClass({
	      displayName: 'CustomNavMention',
	      getInitialState: function getInitialState() {
	        return { suggestions: [] };
	      },
	      onSearchChange: function onSearchChange(value) {
	        var searchValue = value.toLowerCase();var filtered = webFrameworks.filter(function (item) {
	          return item.name.toLowerCase().indexOf(searchValue) !== -1;
	        });var suggestions = filtered.map(function (suggestion) {
	          return _react2.default.createElement(
	            Nav,
	            { value: suggestion.name, data: suggestion },
	            _react2.default.createElement(
	              'span',
	              null,
	              suggestion.name,
	              ' - ',
	              suggestion.type,
	              ' '
	            )
	          );
	        });this.setState({ suggestions: suggestions });
	      },
	      render: function render() {
	        var suggestions = this.state.suggestions;
	        return _react2.default.createElement(_mention2.default, { placeholder: '@someone', style: { width: '100%', height: 100 }, suggestions: suggestions, onSearchChange: this.onSearchChange, onSelect: onSelect });
	      }
	    });return _react2.default.createElement(CustomNavMention, null);
	  }
	};

/***/ },

/***/ 1524:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(125);

	var _mention = __webpack_require__(124);

	var _mention2 = _interopRequireDefault(_mention);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "多行模式，多行模式必须指定高度。"]],
	    "en-US": [["p", "Multi lines mode."]]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "多行",
	      "en-US": "Multi-lines Mode"
	    },
	    "filename": "components/mention/demo/multilines.md",
	    "id": "components-mention-demo-multilines"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Mention <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> toString <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> Mention<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span>editorState<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token function\" >toString</span><span class=\"token punctuation\" >(</span>editorState<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Mention</span>\n    <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'100%'</span><span class=\"token punctuation\" >,</span> height<span class=\"token punctuation\" >:</span> <span class=\"token number\" >100</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>onChange<span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >suggestions</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token string\" >'afc163'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'benjycui'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'yiminghe'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'jljsj33'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'dqaria'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'RaoHai'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >multiLines</span>\n  <span class=\"token punctuation\" >/></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var toString = _mention2.default.toString;
	    function onChange(editorState) {
	      console.log(toString(editorState));
	    }return _react2.default.createElement(_mention2.default, { style: { width: '100%', height: 100 }, onChange: onChange, suggestions: ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'], multiLines: true });
	  }
	};

/***/ },

/***/ 1525:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(126);

	var _popover = __webpack_require__(147);

	var _popover2 = _interopRequireDefault(_popover);

	var _style5 = __webpack_require__(11);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(125);

	var _mention = __webpack_require__(124);

	var _mention2 = _interopRequireDefault(_mention);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "指定提示渲染的父节点。"]],
	    "en-US": [["p", "To set the container of the suggestion."]]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "建议渲染父节点",
	      "en-US": "SuggestionContainer"
	    },
	    "filename": "components/mention/demo/popupContainer.md",
	    "id": "components-mention-demo-popupContainer"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Mention<span class=\"token punctuation\" >,</span> Popover<span class=\"token punctuation\" >,</span> Button <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> toString<span class=\"token punctuation\" >,</span> toEditorState <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> Mention<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span>editorState<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token function\" >toString</span><span class=\"token punctuation\" >(</span>editorState<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >onSelect</span><span class=\"token punctuation\" >(</span>suggestion<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'onSelect'</span><span class=\"token punctuation\" >,</span> suggestion<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token keyword\" >const</span> PopoverContainer <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getSuggestionContainer</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>popover<span class=\"token punctuation\" >.</span><span class=\"token function\" >getPopupDomNode</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> mention <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Mention</span>\n      <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'100%'</span><span class=\"token punctuation\" >,</span> height<span class=\"token punctuation\" >:</span> <span class=\"token number\" >100</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n      <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>onChange<span class=\"token punctuation\" >}</span></span>\n      <span class=\"token attr-name\" >defaultValue</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >toEditorState</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'@afc163'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span>\n      <span class=\"token attr-name\" >suggestions</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token string\" >'afc163'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'benjycui'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'yiminghe'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'RaoHai'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'中文'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'にほんご'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span>\n      <span class=\"token attr-name\" >onSelect</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>onSelect<span class=\"token punctuation\" >}</span></span>\n      <span class=\"token attr-name\" >getSuggestionContainer</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>getSuggestionContainer<span class=\"token punctuation\" >}</span></span>\n    <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Popover</span> <span class=\"token attr-name\" >trigger</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>click<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >content</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>mention<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >ref</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>popover <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>popover <span class=\"token operator\" >=</span> popover<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Click Me<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Popover</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>PopoverContainer</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var toString = _mention2.default.toString,
	        toEditorState = _mention2.default.toEditorState;
	    function onChange(editorState) {
	      console.log(toString(editorState));
	    }function onSelect(suggestion) {
	      console.log('onSelect', suggestion);
	    }var PopoverContainer = _react2.default.createClass({
	      displayName: 'PopoverContainer',
	      getSuggestionContainer: function getSuggestionContainer() {
	        return this.popover.getPopupDomNode();
	      },
	      render: function render() {
	        var _this = this;

	        var mention = _react2.default.createElement(_mention2.default, { style: { width: '100%', height: 100 }, onChange: onChange, defaultValue: toEditorState('@afc163'), suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'], onSelect: onSelect, getSuggestionContainer: this.getSuggestionContainer });
	        return _react2.default.createElement(
	          _popover2.default,
	          { trigger: 'click', content: mention, title: 'Title', ref: function ref(popover) {
	              return _this.popover = popover;
	            } },
	          _react2.default.createElement(
	            _button2.default,
	            { type: 'primary' },
	            'Click Me'
	          )
	        );
	      }
	    });return _react2.default.createElement(PopoverContainer, null);
	  }
	};

/***/ }

});