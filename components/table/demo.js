webpackJsonp([0,202],{

/***/ 906:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(30);

	var _table = __webpack_require__(29);

	var _table2 = _interopRequireDefault(_table);

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reqwest = __webpack_require__(1867);

	var _reqwest2 = _interopRequireDefault(_reqwest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "这个例子通过简单的 ajax 读取方式，演示了如何从服务端读取并展现数据，具有筛选、排序等功能以及页面 loading 效果。开发者可以自行接入其他数据处理方式。"], ["p", "另外，本例也展示了筛选排序功能如何交给服务端实现，列不需要指定具体的 ", ["code", "onFilter"], " 和 ", ["code", "sorter"], " 函数，而是在把筛选和排序的参数发到服务端来处理。"], ["p", ["strong", "注意，此示例使用 ", ["a", {
	      "title": null,
	      "href": "https://randomuser.me"
	    }, "模拟接口"], "，展示数据可能不准确，请打开网络面板查看请求。"]]],
	    "en-US": [["p", "This example shows how to fetch and present data from remote server, and how to implement filtering and sorting in server side by sending related parameters to server."], ["p", ["strong", "Note, this example use ", ["a", {
	      "title": null,
	      "href": "https://randomuser.me"
	    }, "Mock API"], " that you can look up in Network Console."]]]
	  },
	  "meta": {
	    "order": 8,
	    "title": {
	      "en-US": "Ajax",
	      "zh-CN": "远程加载数据"
	    },
	    "filename": "components/table/demo/ajax.md",
	    "id": "components-table-demo-ajax"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Table <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> reqwest <span class=\"token keyword\" >from</span> <span class=\"token string\" >'reqwest'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Name'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n  sorter<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >,</span>\n  render<span class=\"token punctuation\" >:</span> name <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token template-string\" ><span class=\"token string\" >`</span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>name<span class=\"token punctuation\" >.</span>first<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" > </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>name<span class=\"token punctuation\" >.</span>last<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >,</span>\n  width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'20%'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Gender'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'gender'</span><span class=\"token punctuation\" >,</span>\n  filters<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>\n    <span class=\"token punctuation\" >{</span> text<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Male'</span><span class=\"token punctuation\" >,</span> value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'male'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >{</span> text<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Female'</span><span class=\"token punctuation\" >,</span> value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'female'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'20%'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Email'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'email'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> Test <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      data<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n      pagination<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n      loading<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >handleTableChange</span><span class=\"token punctuation\" >(</span>pagination<span class=\"token punctuation\" >,</span> filters<span class=\"token punctuation\" >,</span> sorter<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> pager <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>pagination<span class=\"token punctuation\" >;</span>\n    pager<span class=\"token punctuation\" >.</span>current <span class=\"token operator\" >=</span> pagination<span class=\"token punctuation\" >.</span>current<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      pagination<span class=\"token punctuation\" >:</span> pager<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >fetch</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      results<span class=\"token punctuation\" >:</span> pagination<span class=\"token punctuation\" >.</span>pageSize<span class=\"token punctuation\" >,</span>\n      page<span class=\"token punctuation\" >:</span> pagination<span class=\"token punctuation\" >.</span>current<span class=\"token punctuation\" >,</span>\n      sortField<span class=\"token punctuation\" >:</span> sorter<span class=\"token punctuation\" >.</span>field<span class=\"token punctuation\" >,</span>\n      sortOrder<span class=\"token punctuation\" >:</span> sorter<span class=\"token punctuation\" >.</span>order<span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>filters<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >fetch</span><span class=\"token punctuation\" >(</span>params <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'params:'</span><span class=\"token punctuation\" >,</span> params<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> loading<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token function\" >reqwest</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      url<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'https://randomuser.me/api'</span><span class=\"token punctuation\" >,</span>\n      method<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'get'</span><span class=\"token punctuation\" >,</span>\n      data<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        results<span class=\"token punctuation\" >:</span> <span class=\"token number\" >10</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>params<span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n      type<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'json'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >then</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>data<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >const</span> pagination <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>pagination<span class=\"token punctuation\" >;</span>\n      <span class=\"token comment\" spellcheck=\"true\">// Read total count from server</span>\n      <span class=\"token comment\" spellcheck=\"true\">// pagination.total = data.totalCount;</span>\n      pagination<span class=\"token punctuation\" >.</span>total <span class=\"token operator\" >=</span> <span class=\"token number\" >200</span><span class=\"token punctuation\" >;</span>\n      <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n        loading<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n        data<span class=\"token punctuation\" >:</span> data<span class=\"token punctuation\" >.</span>results<span class=\"token punctuation\" >,</span>\n        pagination<span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >componentDidMount</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >fetch</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span> <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >rowKey</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>record <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> record<span class=\"token punctuation\" >.</span>registered<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>data<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >pagination</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>pagination<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >loading</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>loading<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleTableChange<span class=\"token punctuation\" >}</span></span>\n      <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Test</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name', sorter: true, render: function render(name) {
	        return name.first + ' ' + name.last;
	      }, width: '20%' }, { title: 'Gender', dataIndex: 'gender', filters: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }],
	      width: '20%' }, { title: 'Email', dataIndex: 'email' }];var Test = _react2.default.createClass({
	      displayName: 'Test',
	      getInitialState: function getInitialState() {
	        return { data: [],
	          pagination: {}, loading: false };
	      },
	      handleTableChange: function handleTableChange(pagination, filters, sorter) {
	        var pager = this.state.pagination;pager.current = pagination.current;this.setState({ pagination: pager });this.fetch((0, _extends3.default)({ results: pagination.pageSize, page: pagination.current, sortField: sorter.field, sortOrder: sorter.order }, filters));
	      },
	      fetch: function fetch() {
	        var _this = this;

	        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        console.log('params:', params);this.setState({ loading: true });(0, _reqwest2.default)({ url: 'https://randomuser.me/api', method: 'get', data: (0, _extends3.default)({ results: 10 }, params), type: 'json' }).then(function (data) {
	          var pagination = _this.state.pagination; // Read total count from server
	          // pagination.total = data.totalCount;
	          pagination.total = 200;_this.setState({ loading: false, data: data.results, pagination: pagination });
	        });
	      },
	      componentDidMount: function componentDidMount() {
	        this.fetch();
	      },
	      render: function render() {
	        return _react2.default.createElement(_table2.default, { columns: columns, rowKey: function rowKey(record) {
	            return record.registered;
	          }, dataSource: this.state.data, pagination: this.state.pagination, loading: this.state.loading, onChange: this.handleTableChange });
	      }
	    });return _react2.default.createElement(Test, null);
	  }
	};

/***/ },

/***/ 907:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(30);

	var _table = __webpack_require__(29);

	var _table2 = _interopRequireDefault(_table);

	var _style4 = __webpack_require__(14);

	var _icon = __webpack_require__(12);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "简单的表格，最后一列是各种操作。"]],
	    "en-US": [["p", "Simple table with actions."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "en-US": "Basic Usage",
	      "zh-CN": "基本用法"
	    },
	    "filename": "components/table/demo/basic.md",
	    "id": "components-table-demo-basic"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Table<span class=\"token punctuation\" >,</span> Icon <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Name'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n  render<span class=\"token punctuation\" >:</span> text <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>text<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Age'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Address'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Action'</span><span class=\"token punctuation\" >,</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'action'</span><span class=\"token punctuation\" >,</span>\n  render<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>text<span class=\"token punctuation\" >,</span> record<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >(</span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Action 一 <span class=\"token punctuation\" >{</span>record<span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ant-divider<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Delete<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ant-divider<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ant-dropdown-link<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        More actions<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>down<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> data <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'1'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'John Brown'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'New York No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'2'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim Green'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >42</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'3'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Joe Black'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span> <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name', key: 'name', render: function render(text) {
	        return _react2.default.createElement(
	          'a',
	          { href: '#' },
	          text
	        );
	      } }, { title: 'Age', dataIndex: 'age', key: 'age' }, { title: 'Address', dataIndex: 'address', key: 'address' }, { title: 'Action', key: 'action', render: function render(text, record) {
	        return _react2.default.createElement(
	          'span',
	          null,
	          _react2.default.createElement(
	            'a',
	            { href: '#' },
	            'Action \u4E00 ',
	            record.name
	          ),
	          _react2.default.createElement('span', { className: 'ant-divider' }),
	          _react2.default.createElement(
	            'a',
	            { href: '#' },
	            'Delete'
	          ),
	          _react2.default.createElement('span', { className: 'ant-divider' }),
	          _react2.default.createElement(
	            'a',
	            { href: '#', className: 'ant-dropdown-link' },
	            'More actions',
	            _react2.default.createElement(_icon2.default, { type: 'down' })
	          )
	        );
	      } }];var data = [{ key: '1',
	      name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' }, { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' }, { key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park' }];return _react2.default.createElement(_table2.default, { columns: columns, dataSource: data });
	  }
	};

/***/ },

/***/ 908:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(30);

	var _table = __webpack_require__(29);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "添加表格边框线，页头和页脚。"]],
	    "en-US": [["p", "Add border, title and footer for table."]]
	  },
	  "meta": {
	    "order": 10,
	    "title": {
	      "en-US": "border, title and footer",
	      "zh-CN": "带边框"
	    },
	    "filename": "components/table/demo/bordered.md",
	    "id": "components-table-demo-bordered"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Table <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Name'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n  render<span class=\"token punctuation\" >:</span> text <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>text<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Cash Assets'</span><span class=\"token punctuation\" >,</span>\n  className<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'column-money'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'money'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Address'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> data <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'1'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'John Brown'</span><span class=\"token punctuation\" >,</span>\n  money<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'￥300,000.00'</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'New York No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'2'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim Green'</span><span class=\"token punctuation\" >,</span>\n  money<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'￥1,256,000.00'</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'3'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Joe Black'</span><span class=\"token punctuation\" >,</span>\n  money<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'￥120,000.00'</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span>\n    <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >bordered</span>\n    <span class=\"token attr-name\" >title</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token string\" >'Header'</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >footer</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token string\" >'Footer'</span><span class=\"token punctuation\" >}</span></span>\n  <span class=\"token punctuation\" >/></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name', render: function render(text) {
	        return _react2.default.createElement(
	          'a',
	          { href: '#' },
	          text
	        );
	      } }, { title: 'Cash Assets', className: 'column-money', dataIndex: 'money' }, { title: 'Address', dataIndex: 'address' }];var data = [{ key: '1', name: 'John Brown', money: '￥300,000.00', address: 'New York No. 1 Lake Park' }, { key: '2', name: 'Jim Green', money: '￥1,256,000.00', address: 'London No. 1 Lake Park' }, { key: '3', name: 'Joe Black', money: '￥120,000.00',
	      address: 'Sidney No. 1 Lake Park'
	    }];return _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, bordered: true, title: function title() {
	        return 'Header';
	      }, footer: function footer() {
	        return 'Footer';
	      } });
	  },
	  "style": ".column-money {\n  text-align: right;\n}",
	  "highlightedStyle": "<span class=\"token selector\" ><span class=\"token class\" >.column-money</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >text-align</span><span class=\"token punctuation\" >:</span> right<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>"
	};

/***/ },

/***/ 909:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(30);

	var _table = __webpack_require__(29);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// In the fifth row, other columns are merged into first column
	// by setting it's colSpan to be 0
	module.exports = {
	  "content": {
	    "zh-CN": [["p", "表头只支持列合并，使用 column 里的 colSpan 进行设置。"], ["p", "表格支持行/列合并，使用 render 里的单元格属性 colSpan 或者 rowSpan 设值为 0 时，设置的表格不会渲染。"]],
	    "en-US": [["p", "Table column title supports ", ["code", "colSpan"], " that set in ", ["code", "column"], "."], ["p", "Table cell supports ", ["code", "colSpan"], " and ", ["code", "rowSpan"], " that set in render return object. When each of them is set to ", ["code", "0"], ", the cell will not be rendered."]]
	  },
	  "meta": {
	    "order": 13,
	    "title": {
	      "en-US": "colSpan and rowSpan",
	      "zh-CN": "表格行/列合并"
	    },
	    "filename": "components/table/demo/colspan-rowspan.md",
	    "id": "components-table-demo-colspan-rowspan"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Table <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// In the fifth row, other columns are merged into first column</span>\n<span class=\"token comment\" spellcheck=\"true\">// by setting it's colSpan to be 0</span>\n<span class=\"token keyword\" >const</span> renderContent <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >,</span> row<span class=\"token punctuation\" >,</span> index<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token keyword\" >const</span> obj <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n    children<span class=\"token punctuation\" >:</span> value<span class=\"token punctuation\" >,</span>\n    props<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>index <span class=\"token operator\" >===</span> <span class=\"token number\" >4</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    obj<span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>colSpan <span class=\"token operator\" >=</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n  <span class=\"token keyword\" >return</span> obj<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Name'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n  render<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>text<span class=\"token punctuation\" >,</span> row<span class=\"token punctuation\" >,</span> index<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>index <span class=\"token operator\" >&lt;</span> <span class=\"token number\" >4</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >return</span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>text<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      children<span class=\"token punctuation\" >:</span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>text<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n      props<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        colSpan<span class=\"token punctuation\" >:</span> <span class=\"token number\" >5</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Age'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n  render<span class=\"token punctuation\" >:</span> renderContent<span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Home phone'</span><span class=\"token punctuation\" >,</span>\n  colSpan<span class=\"token punctuation\" >:</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'tel'</span><span class=\"token punctuation\" >,</span>\n  render<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >,</span> row<span class=\"token punctuation\" >,</span> index<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> obj <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n      children<span class=\"token punctuation\" >:</span> value<span class=\"token punctuation\" >,</span>\n      props<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>index <span class=\"token operator\" >===</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      obj<span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>rowSpan <span class=\"token operator\" >=</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n    <span class=\"token comment\" spellcheck=\"true\">// These two are merged into above cell</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>index <span class=\"token operator\" >===</span> <span class=\"token number\" >3</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      obj<span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>rowSpan <span class=\"token operator\" >=</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>index <span class=\"token operator\" >===</span> <span class=\"token number\" >4</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      obj<span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>colSpan <span class=\"token operator\" >=</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n    <span class=\"token keyword\" >return</span> obj<span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Phone'</span><span class=\"token punctuation\" >,</span>\n  colSpan<span class=\"token punctuation\" >:</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'phone'</span><span class=\"token punctuation\" >,</span>\n  render<span class=\"token punctuation\" >:</span> renderContent<span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Address'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n  render<span class=\"token punctuation\" >:</span> renderContent<span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> data <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'1'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'John Brown'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  tel<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0571-22098909'</span><span class=\"token punctuation\" >,</span>\n  phone<span class=\"token punctuation\" >:</span> <span class=\"token number\" >18889898989</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'New York No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'2'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim Green'</span><span class=\"token punctuation\" >,</span>\n  tel<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0571-22098333'</span><span class=\"token punctuation\" >,</span>\n  phone<span class=\"token punctuation\" >:</span> <span class=\"token number\" >18889898888</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >42</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'3'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Joe Black'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  tel<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0575-22098909'</span><span class=\"token punctuation\" >,</span>\n  phone<span class=\"token punctuation\" >:</span> <span class=\"token number\" >18900010002</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'4'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim Red'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >18</span><span class=\"token punctuation\" >,</span>\n  tel<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0575-22098909'</span><span class=\"token punctuation\" >,</span>\n  phone<span class=\"token punctuation\" >:</span> <span class=\"token number\" >18900010002</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London No. 2 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'5'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jake White'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >18</span><span class=\"token punctuation\" >,</span>\n  tel<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0575-22098909'</span><span class=\"token punctuation\" >,</span>\n  phone<span class=\"token punctuation\" >:</span> <span class=\"token number\" >18900010002</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Dublin No. 2 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span> <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >bordered</span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var renderContent = function renderContent(value, row, index) {
	      var obj = { children: value, props: {} };if (index === 4) {
	        obj.props.colSpan = 0;
	      }return obj;
	    };var columns = [{ title: 'Name', dataIndex: 'name', render: function render(text, row, index) {
	        if (index < 4) {
	          return _react2.default.createElement(
	            'a',
	            { href: '#' },
	            text
	          );
	        }
	        return { children: _react2.default.createElement(
	            'a',
	            { href: '#' },
	            text
	          ), props: { colSpan: 5 } };
	      } }, { title: 'Age',
	      dataIndex: 'age', render: renderContent
	    }, { title: 'Home phone', colSpan: 2, dataIndex: 'tel', render: function render(value, row, index) {
	        var obj = { children: value, props: {} };
	        if (index === 2) {
	          obj.props.rowSpan = 2;
	        } // These two are merged into above cell
	        if (index === 3) {
	          obj.props.rowSpan = 0;
	        }if (index === 4) {
	          obj.props.colSpan = 0;
	        }return obj;
	      } }, { title: 'Phone', colSpan: 0, dataIndex: 'phone', render: renderContent }, { title: 'Address',
	      dataIndex: 'address', render: renderContent }];var data = [{ key: '1', name: 'John Brown', age: 32, tel: '0571-22098909', phone: 18889898989, address: 'New York No. 1 Lake Park' }, { key: '2', name: 'Jim Green', tel: '0571-22098333', phone: 18889898888, age: 42, address: 'London No. 1 Lake Park' }, { key: '3', name: 'Joe Black', age: 32, tel: '0575-22098909', phone: 18900010002, address: 'Sidney No. 1 Lake Park' }, { key: '4', name: 'Jim Red', age: 18, tel: '0575-22098909', phone: 18900010002, address: 'London No. 2 Lake Park' }, { key: '5', name: 'Jake White', age: 18, tel: '0575-22098909', phone: 18900010002, address: 'Dublin No. 2 Lake Park' }];return _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, bordered: true });
	  }
	};

/***/ },

/***/ 910:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(30);

	var _table = __webpack_require__(29);

	var _table2 = _interopRequireDefault(_table);

	var _style5 = __webpack_require__(10);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(21);

	var _input = __webpack_require__(25);

	var _input2 = _interopRequireDefault(_input);

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "通过 ", ["code", "filterDropdown"], "、", ["code", "filterDropdownVisible"], " 和 ", ["code", "filterDropdownVisibleChange"], " 定义自定义的列筛选功能，并实现一个搜索列的示例。"]],
	    "en-US": [["p", "Implement a customized column search example via ", ["code", "filterDropdown"], ", ", ["code", "filterDropdownVisible"], " and ", ["code", "filterDropdownVisibleChange"], "."]]
	  },
	  "meta": {
	    "order": 7,
	    "title": {
	      "en-US": "Customized filter panel",
	      "zh-CN": "自定义筛选菜单"
	    },
	    "filename": "components/table/demo/custom-filter-panel.md",
	    "id": "components-table-demo-custom-filter-panel"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Table<span class=\"token punctuation\" >,</span> Input<span class=\"token punctuation\" >,</span> Button <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> data <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'1'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'John Brown'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'New York No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'2'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim Green'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >42</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'3'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Joe Black'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'4'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim Red'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London No. 2 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> App <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      filterDropdownVisible<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n      data<span class=\"token punctuation\" >,</span>\n      searchText<span class=\"token punctuation\" >:</span> <span class=\"token string\" >''</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >onInputChange</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> searchText<span class=\"token punctuation\" >:</span> e<span class=\"token punctuation\" >.</span>target<span class=\"token punctuation\" >.</span>value <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >onSearch</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> searchText <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >const</span> reg <span class=\"token operator\" >=</span> <span class=\"token keyword\" >new</span> <span class=\"token class-name\" >RegExp</span><span class=\"token punctuation\" >(</span>searchText<span class=\"token punctuation\" >,</span> <span class=\"token string\" >'gi'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      filterDropdownVisible<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n      data<span class=\"token punctuation\" >:</span> data<span class=\"token punctuation\" >.</span><span class=\"token function\" >map</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>record<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >const</span> match <span class=\"token operator\" >=</span> record<span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >.</span><span class=\"token function\" >match</span><span class=\"token punctuation\" >(</span>reg<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n        <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span><span class=\"token operator\" >!</span>match<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n          <span class=\"token keyword\" >return</span> <span class=\"token keyword\" >null</span><span class=\"token punctuation\" >;</span>\n        <span class=\"token punctuation\" >}</span>\n        <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n          <span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>record<span class=\"token punctuation\" >,</span>\n          name<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token punctuation\" >{</span>record<span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >.</span><span class=\"token function\" >split</span><span class=\"token punctuation\" >(</span>reg<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >map</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>text<span class=\"token punctuation\" >,</span> i<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >(</span>\n                i <span class=\"token operator\" >></span> <span class=\"token number\" >0</span> <span class=\"token operator\" >?</span> <span class=\"token punctuation\" >[</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>highlight<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>match<span class=\"token punctuation\" >[</span><span class=\"token number\" >0</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span> text<span class=\"token punctuation\" >]</span> <span class=\"token punctuation\" >:</span> text\n              <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >filter</span><span class=\"token punctuation\" >(</span>record <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token operator\" >!</span><span class=\"token operator\" >!</span>record<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Name'</span><span class=\"token punctuation\" >,</span>\n      dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n      key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n      filterDropdown<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>custom-filter-dropdown<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Input</span>\n            <span class=\"token attr-name\" >placeholder</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Search</span> <span class=\"token attr-name\" >name\"</span>\n            <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>searchText<span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>onInputChange<span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >onPressEnter</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>onSearch<span class=\"token punctuation\" >}</span></span>\n          <span class=\"token punctuation\" >/></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>onSearch<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Search<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n      filterDropdownVisible<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>filterDropdownVisible<span class=\"token punctuation\" >,</span>\n      onFilterDropdownVisibleChange<span class=\"token punctuation\" >:</span> visible <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> filterDropdownVisible<span class=\"token punctuation\" >:</span> visible <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n      title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Age'</span><span class=\"token punctuation\" >,</span>\n      dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n      key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n      title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Address'</span><span class=\"token punctuation\" >,</span>\n      dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n      key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span> <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>data<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>App</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var data = [{ key: '1', name: 'John Brown',
	      age: 32, address: 'New York No. 1 Lake Park' }, { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' }, { key: '3', name: 'Joe Black',
	      age: 32,
	      address: 'Sidney No. 1 Lake Park' }, { key: '4', name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' }];var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return { filterDropdownVisible: false, data: data, searchText: '' };
	      },
	      onInputChange: function onInputChange(e) {
	        this.setState({
	          searchText: e.target.value });
	      },
	      onSearch: function onSearch() {
	        var searchText = this.state.searchText;
	        var reg = new RegExp(searchText, 'gi');this.setState({ filterDropdownVisible: false, data: data.map(function (record) {
	            var match = record.name.match(reg);if (!match) {
	              return null;
	            }return (0, _extends3.default)({}, record, { name: _react2.default.createElement(
	                'span',
	                null,
	                record.name.split(reg).map(function (text, i) {
	                  return i > 0 ? [_react2.default.createElement(
	                    'span',
	                    { className: 'highlight' },
	                    match[0]
	                  ), text] : text;
	                })
	              ) });
	          }).filter(function (record) {
	            return !!record;
	          }) });
	      },
	      render: function render() {
	        var _this = this;

	        var columns = [{ title: 'Name', dataIndex: 'name', key: 'name', filterDropdown: _react2.default.createElement(
	            'div',
	            { className: 'custom-filter-dropdown' },
	            _react2.default.createElement(_input2.default, { placeholder: 'Search name', value: this.state.searchText, onChange: this.onInputChange, onPressEnter: this.onSearch }),
	            _react2.default.createElement(
	              _button2.default,
	              { type: 'primary', onClick: this.onSearch },
	              'Search'
	            )
	          ), filterDropdownVisible: this.state.filterDropdownVisible, onFilterDropdownVisibleChange: function onFilterDropdownVisibleChange(visible) {
	            return _this.setState({ filterDropdownVisible: visible });
	          } }, { title: 'Age', dataIndex: 'age', key: 'age' }, { title: 'Address', dataIndex: 'address', key: 'address' }];return _react2.default.createElement(_table2.default, { columns: columns, dataSource: this.state.data });
	      }
	    });return _react2.default.createElement(App, null);
	  },
	  "style": ".custom-filter-dropdown {\n  padding: 8px;\n  border-radius: 6px;\n  background: #fff;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, .2);\n}\n\n.custom-filter-dropdown input {\n  width: 130px;\n  margin-right: 8px;\n}\n\n.highlight {\n  color: #f50;\n}",
	  "highlightedStyle": "<span class=\"token selector\" ><span class=\"token class\" >.custom-filter-dropdown</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >padding</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >8</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >border-radius</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >6</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >background</span><span class=\"token punctuation\" >:</span> <span class=\"token hexcode\" >#fff</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >box-shadow</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >0</span> <span class=\"token number\" >1</span>px <span class=\"token number\" >6</span>px <span class=\"token function\" >rgba</span><span class=\"token punctuation\" >(</span><span class=\"token number\" >0</span>, <span class=\"token number\" >0</span>, <span class=\"token number\" >0</span>, <span class=\"token number\" >.2</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.custom-filter-dropdown</span> input </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >width</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >130</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >margin-right</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >8</span>px<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.highlight</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >color</span><span class=\"token punctuation\" >:</span> <span class=\"token hexcode\" >#f50</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>"
	};

/***/ },

/***/ 911:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style6 = __webpack_require__(30);

	var _table = __webpack_require__(29);

	var _table2 = _interopRequireDefault(_table);

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style7 = __webpack_require__(55);

	var _radio = __webpack_require__(51);

	var _radio2 = _interopRequireDefault(_radio);

	var _style8 = __webpack_require__(82);

	var _switch = __webpack_require__(81);

	var _switch2 = _interopRequireDefault(_switch);

	var _defineProperty2 = __webpack_require__(11);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _style9 = __webpack_require__(14);

	var _icon = __webpack_require__(12);

	var _icon2 = _interopRequireDefault(_icon);

	var _style10 = __webpack_require__(50);

	var _form = __webpack_require__(49);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "选择不同配置组合查看效果。"]],
	    "en-US": [["p", "Select different settings to see the result."]]
	  },
	  "meta": {
	    "order": 21,
	    "title": {
	      "en-US": "Dynamic Settings",
	      "zh-CN": "动态控制表格属性"
	    },
	    "filename": "components/table/demo/dynamic-settings.md",
	    "id": "components-table-demo-dynamic-settings"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Table<span class=\"token punctuation\" >,</span> Icon<span class=\"token punctuation\" >,</span> Switch<span class=\"token punctuation\" >,</span> Radio<span class=\"token punctuation\" >,</span> Form <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> FormItem <span class=\"token operator\" >=</span> Form<span class=\"token punctuation\" >.</span>Item<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Name'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n  width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >150</span><span class=\"token punctuation\" >,</span>\n  render<span class=\"token punctuation\" >:</span> text <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>text<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Age'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n  width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >70</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Address'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Action'</span><span class=\"token punctuation\" >,</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'action'</span><span class=\"token punctuation\" >,</span>\n  width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >360</span><span class=\"token punctuation\" >,</span>\n  render<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>text<span class=\"token punctuation\" >,</span> record<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >(</span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Action 一 <span class=\"token punctuation\" >{</span>record<span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ant-divider<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Delete<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ant-divider<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ant-dropdown-link<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        More actions<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>down<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> data <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >for</span> <span class=\"token punctuation\" >(</span><span class=\"token keyword\" >let</span> i <span class=\"token operator\" >=</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >;</span> i <span class=\"token operator\" >&lt;=</span> <span class=\"token number\" >10</span><span class=\"token punctuation\" >;</span> i<span class=\"token operator\" >++</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  data<span class=\"token punctuation\" >.</span><span class=\"token function\" >push</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n    key<span class=\"token punctuation\" >:</span> i<span class=\"token punctuation\" >,</span>\n    name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'John Brown'</span><span class=\"token punctuation\" >,</span>\n    age<span class=\"token punctuation\" >:</span> <span class=\"token template-string\" ><span class=\"token string\" >`</span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>i<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >2`</span></span><span class=\"token punctuation\" >,</span>\n    address<span class=\"token punctuation\" >:</span> <span class=\"token template-string\" ><span class=\"token string\" >`New York No. </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>i<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" > Lake Park`</span></span><span class=\"token punctuation\" >,</span>\n    description<span class=\"token punctuation\" >:</span> <span class=\"token template-string\" ><span class=\"token string\" >`My name is John Brown, I am </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>i<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >2 years old, living in New York No. </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>i<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" > Lake Park.`</span></span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token keyword\" >const</span> expandedRowRender <span class=\"token operator\" >=</span> record <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>record<span class=\"token punctuation\" >.</span>description<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> title <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token string\" >'Here is title'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> footer <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token string\" >'Here is footer'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> scroll <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span> y<span class=\"token punctuation\" >:</span> <span class=\"token number\" >240</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >Demo</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >React<span class=\"token punctuation\" >.</span>Component</span> <span class=\"token punctuation\" >{</span>\n  state <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n    bordered<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n    loading<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n    pagination<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >,</span>\n    size<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'default'</span><span class=\"token punctuation\" >,</span>\n    expandedRowRender<span class=\"token punctuation\" >,</span>\n    title<span class=\"token punctuation\" >,</span>\n    footer<span class=\"token punctuation\" >,</span>\n    rowSelection<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    scroll<span class=\"token punctuation\" >:</span> undefined<span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span>\n\n  handleToggle <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span>prop<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>enable<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> <span class=\"token punctuation\" >[</span>prop<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >:</span> enable <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  handleSizeChange <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> size<span class=\"token punctuation\" >:</span> e<span class=\"token punctuation\" >.</span>target<span class=\"token punctuation\" >.</span>value <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  handleExpandChange <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span>enable<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> expandedRowRender<span class=\"token punctuation\" >:</span> enable <span class=\"token operator\" >?</span> expandedRowRender <span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  handleTitleChange <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span>enable<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> enable <span class=\"token operator\" >?</span> title <span class=\"token punctuation\" >:</span> undefined <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  handleFooterChange <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span>enable<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> footer<span class=\"token punctuation\" >:</span> enable <span class=\"token operator\" >?</span> footer <span class=\"token punctuation\" >:</span> undefined <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  handleRowSelectionChange <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span>enable<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> rowSelection<span class=\"token punctuation\" >:</span> enable <span class=\"token operator\" >?</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span> <span class=\"token punctuation\" >:</span> undefined <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  handleScollChange <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span>enable<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> scroll<span class=\"token punctuation\" >:</span> enable <span class=\"token operator\" >?</span> scroll <span class=\"token punctuation\" >:</span> undefined <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> state <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>components-table-demo-control-bar<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Form</span> <span class=\"token attr-name\" >inline</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FormItem</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Bordered<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Switch</span> <span class=\"token attr-name\" >checked</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>state<span class=\"token punctuation\" >.</span>bordered<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >handleToggle</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'bordered'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FormItem</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FormItem</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>loading<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Switch</span> <span class=\"token attr-name\" >checked</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>state<span class=\"token punctuation\" >.</span>loading<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >handleToggle</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'loading'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FormItem</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FormItem</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Pagination<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Switch</span> <span class=\"token attr-name\" >checked</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>state<span class=\"token punctuation\" >.</span>pagination<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >handleToggle</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'pagination'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FormItem</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FormItem</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Title<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Switch</span> <span class=\"token attr-name\" >checked</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token operator\" >!</span><span class=\"token operator\" >!</span>state<span class=\"token punctuation\" >.</span>title<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleTitleChange<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FormItem</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FormItem</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Footer<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Switch</span> <span class=\"token attr-name\" >checked</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token operator\" >!</span><span class=\"token operator\" >!</span>state<span class=\"token punctuation\" >.</span>footer<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleFooterChange<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FormItem</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FormItem</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Expandable<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Switch</span> <span class=\"token attr-name\" >checked</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token operator\" >!</span><span class=\"token operator\" >!</span>state<span class=\"token punctuation\" >.</span>expandedRowRender<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleExpandChange<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FormItem</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FormItem</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Checkbox<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Switch</span> <span class=\"token attr-name\" >checked</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token operator\" >!</span><span class=\"token operator\" >!</span>state<span class=\"token punctuation\" >.</span>rowSelection<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleRowSelectionChange<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FormItem</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FormItem</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Fixed</span> <span class=\"token attr-name\" >Header\"</span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Switch</span> <span class=\"token attr-name\" >checked</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token operator\" >!</span><span class=\"token operator\" >!</span>state<span class=\"token punctuation\" >.</span>scroll<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleScollChange<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FormItem</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>FormItem</span> <span class=\"token attr-name\" >label</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Size<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Radio.Group</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>default<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>state<span class=\"token punctuation\" >.</span>size<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleSizeChange<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Radio.Button</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>default<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Default<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Radio.Button</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Radio.Button</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>middle<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Middle<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Radio.Button</span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Radio.Button</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Small<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Radio.Button</span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Radio.Group</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>FormItem</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Form</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token operator\" >&lt;</span>Table <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >}</span> columns<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span> dataSource<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span> <span class=\"token operator\" >/</span><span class=\"token operator\" >></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Demo</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var FormItem = _form2.default.Item;var columns = [{ title: 'Name', dataIndex: 'name', key: 'name', width: 150, render: function render(text) {
	        return _react2.default.createElement(
	          'a',
	          { href: '#' },
	          text
	        );
	      } }, { title: 'Age', dataIndex: 'age', key: 'age', width: 70 }, { title: 'Address', dataIndex: 'address', key: 'address' }, { title: 'Action', key: 'action', width: 360, render: function render(text, record) {
	        return _react2.default.createElement(
	          'span',
	          null,
	          _react2.default.createElement(
	            'a',
	            { href: '#' },
	            'Action \u4E00 ',
	            record.name
	          ),
	          _react2.default.createElement('span', { className: 'ant-divider' }),
	          _react2.default.createElement(
	            'a',
	            { href: '#' },
	            'Delete'
	          ),
	          _react2.default.createElement('span', { className: 'ant-divider' }),
	          _react2.default.createElement(
	            'a',
	            { href: '#', className: 'ant-dropdown-link' },
	            'More actions',
	            _react2.default.createElement(_icon2.default, { type: 'down' })
	          )
	        );
	      } }];var data = [];for (var i = 1; i <= 10; i++) {
	      data.push({ key: i, name: 'John Brown', age: i + '2', address: 'New York No. ' + i + ' Lake Park', description: 'My name is John Brown, I am ' + i + '2 years old, living in New York No. ' + i + ' Lake Park.' });
	    }var expandedRowRender = function expandedRowRender(record) {
	      return _react2.default.createElement(
	        'p',
	        null,
	        record.description
	      );
	    };var title = function title() {
	      return 'Here is title';
	    };var footer = function footer() {
	      return 'Here is footer';
	    };var scroll = { y: 240 };
	    var Demo = function (_React$Component) {
	      (0, _inherits3.default)(Demo, _React$Component);

	      function Demo() {
	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, Demo);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { bordered: false, loading: false, pagination: true, size: 'default', expandedRowRender: expandedRowRender, title: title, footer: footer, rowSelection: {}, scroll: undefined }, _this.handleToggle = function (prop) {
	          return function (enable) {
	            _this.setState((0, _defineProperty3.default)({}, prop, enable));
	          };
	        }, _this.handleSizeChange = function (e) {
	          _this.setState({ size: e.target.value });
	        }, _this.handleExpandChange = function (enable) {
	          _this.setState({ expandedRowRender: enable ? expandedRowRender : false });
	        }, _this.handleTitleChange = function (enable) {
	          _this.setState({ title: enable ? title : undefined });
	        }, _this.handleFooterChange = function (enable) {
	          _this.setState({ footer: enable ? footer : undefined });
	        }, _this.handleRowSelectionChange = function (enable) {
	          _this.setState({ rowSelection: enable ? {} : undefined });
	        }, _this.handleScollChange = function (enable) {
	          _this.setState({ scroll: enable ? scroll : undefined });
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      }

	      Demo.prototype.render = function render() {
	        var state = this.state;return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'components-table-demo-control-bar' },
	            _react2.default.createElement(
	              _form2.default,
	              { inline: true },
	              _react2.default.createElement(
	                FormItem,
	                { label: 'Bordered' },
	                _react2.default.createElement(_switch2.default, { checked: state.bordered, onChange: this.handleToggle('bordered') })
	              ),
	              _react2.default.createElement(
	                FormItem,
	                { label: 'loading' },
	                _react2.default.createElement(_switch2.default, { checked: state.loading, onChange: this.handleToggle('loading') })
	              ),
	              _react2.default.createElement(
	                FormItem,
	                { label: 'Pagination' },
	                _react2.default.createElement(_switch2.default, { checked: state.pagination, onChange: this.handleToggle('pagination') })
	              ),
	              _react2.default.createElement(
	                FormItem,
	                { label: 'Title' },
	                _react2.default.createElement(_switch2.default, { checked: !!state.title, onChange: this.handleTitleChange })
	              ),
	              _react2.default.createElement(
	                FormItem,
	                { label: 'Footer' },
	                _react2.default.createElement(_switch2.default, { checked: !!state.footer, onChange: this.handleFooterChange })
	              ),
	              _react2.default.createElement(
	                FormItem,
	                { label: 'Expandable' },
	                _react2.default.createElement(_switch2.default, { checked: !!state.expandedRowRender, onChange: this.handleExpandChange })
	              ),
	              _react2.default.createElement(
	                FormItem,
	                { label: 'Checkbox' },
	                _react2.default.createElement(_switch2.default, { checked: !!state.rowSelection, onChange: this.handleRowSelectionChange })
	              ),
	              _react2.default.createElement(
	                FormItem,
	                { label: 'Fixed Header' },
	                _react2.default.createElement(_switch2.default, { checked: !!state.scroll, onChange: this.handleScollChange })
	              ),
	              _react2.default.createElement(
	                FormItem,
	                { label: 'Size' },
	                _react2.default.createElement(
	                  _radio2.default.Group,
	                  { size: 'default', value: state.size, onChange: this.handleSizeChange },
	                  _react2.default.createElement(
	                    _radio2.default.Button,
	                    { value: 'default' },
	                    'Default'
	                  ),
	                  _react2.default.createElement(
	                    _radio2.default.Button,
	                    { value: 'middle' },
	                    'Middle'
	                  ),
	                  _react2.default.createElement(
	                    _radio2.default.Button,
	                    { value: 'small' },
	                    'Small'
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(_table2.default, (0, _extends3.default)({}, this.state, { columns: columns, dataSource: data }))
	        );
	      };

	      return Demo;
	    }(_react2.default.Component);

	    return _react2.default.createElement(Demo, null);
	  },
	  "style": "\n.components-table-demo-control-bar {\n  margin-bottom: 10px;\n}\n.components-table-demo-control-bar .ant-form-item {\n  margin-right: 16px;\n  margin-bottom: 8px;\n}\n"
	};

/***/ },

/***/ 912:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style6 = __webpack_require__(30);

	var _table = __webpack_require__(29);

	var _table2 = _interopRequireDefault(_table);

	var _style7 = __webpack_require__(10);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _style8 = __webpack_require__(129);

	var _popconfirm = __webpack_require__(128);

	var _popconfirm2 = _interopRequireDefault(_popconfirm);

	var _toConsumableArray2 = __webpack_require__(74);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _style9 = __webpack_require__(14);

	var _icon = __webpack_require__(12);

	var _icon2 = _interopRequireDefault(_icon);

	var _style10 = __webpack_require__(21);

	var _input = __webpack_require__(25);

	var _input2 = _interopRequireDefault(_input);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "带单元格编辑功能的表格。"]],
	    "en-US": [["p", "Table with editable cells."]]
	  },
	  "meta": {
	    "order": 22,
	    "title": {
	      "en-US": "Editable Cells",
	      "zh-CN": "可编辑单元格"
	    },
	    "filename": "components/table/demo/edit-cell.md",
	    "id": "components-table-demo-edit-cell"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Table<span class=\"token punctuation\" >,</span> Input<span class=\"token punctuation\" >,</span> Icon<span class=\"token punctuation\" >,</span> Button<span class=\"token punctuation\" >,</span> Popconfirm <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >EditableCell</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >React<span class=\"token punctuation\" >.</span>Component</span> <span class=\"token punctuation\" >{</span>\n  state <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>value<span class=\"token punctuation\" >,</span>\n    editable<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span>\n  handleChange <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> value <span class=\"token operator\" >=</span> e<span class=\"token punctuation\" >.</span>target<span class=\"token punctuation\" >.</span>value<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> value <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n  check <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> editable<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>onChange<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span><span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>value<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n  <span class=\"token punctuation\" >}</span>\n  edit <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> editable<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> value<span class=\"token punctuation\" >,</span> editable <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>editable-cell<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token punctuation\" >{</span>\n        editable <span class=\"token operator\" >?</span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>editable-cell-input-wrapper<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Input</span>\n            <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>value<span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleChange<span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >onPressEnter</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>check<span class=\"token punctuation\" >}</span></span>\n          <span class=\"token punctuation\" >/></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span>\n            <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>check<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>editable-cell-icon-check<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>check<span class=\"token punctuation\" >}</span></span>\n          <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token punctuation\" >:</span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>editable-cell-text-wrapper<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token punctuation\" >{</span>value <span class=\"token operator\" >||</span> <span class=\"token string\" >' '</span><span class=\"token punctuation\" >}</span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span>\n            <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>edit<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>editable-cell-icon<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>edit<span class=\"token punctuation\" >}</span></span>\n          <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token punctuation\" >}</span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >EditableTable</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >React<span class=\"token punctuation\" >.</span>Component</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >constructor</span><span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >super</span><span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n      dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n      width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'30%'</span><span class=\"token punctuation\" >,</span>\n      render<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>text<span class=\"token punctuation\" >,</span> record<span class=\"token punctuation\" >,</span> index<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >(</span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EditableCell</span>\n          <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>text<span class=\"token punctuation\" >}</span></span>\n          <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >onCellChange</span><span class=\"token punctuation\" >(</span>index<span class=\"token punctuation\" >,</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token punctuation\" >/></span></span>\n      <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n      title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n      dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n      title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n      dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n      title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'operation'</span><span class=\"token punctuation\" >,</span>\n      dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'operation'</span><span class=\"token punctuation\" >,</span>\n      render<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>text<span class=\"token punctuation\" >,</span> record<span class=\"token punctuation\" >,</span> index<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n          <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>dataSource<span class=\"token punctuation\" >.</span>length <span class=\"token operator\" >></span> <span class=\"token number\" >1</span> <span class=\"token operator\" >?</span>\n          <span class=\"token punctuation\" >(</span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Popconfirm</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Sure</span> <span class=\"token attr-name\" >to</span> <span class=\"token attr-name\" >delete?\"</span> <span class=\"token attr-name\" >onConfirm</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >onDelete</span><span class=\"token punctuation\" >(</span>index<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Delete<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Popconfirm</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >null</span>\n        <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n      dataSource<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n        key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0'</span><span class=\"token punctuation\" >,</span>\n        name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Edward King 0'</span><span class=\"token punctuation\" >,</span>\n        age<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'32'</span><span class=\"token punctuation\" >,</span>\n        address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London, Park Lane no. 0'</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n        key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'1'</span><span class=\"token punctuation\" >,</span>\n        name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Edward King 1'</span><span class=\"token punctuation\" >,</span>\n        age<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'32'</span><span class=\"token punctuation\" >,</span>\n        address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London, Park Lane no. 1'</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n      count<span class=\"token punctuation\" >:</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n  onCellChange <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span>index<span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >const</span> dataSource <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>dataSource<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n      dataSource<span class=\"token punctuation\" >[</span>index<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >[</span>key<span class=\"token punctuation\" >]</span> <span class=\"token operator\" >=</span> value<span class=\"token punctuation\" >;</span>\n      <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> dataSource <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n  onDelete <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span>index<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >const</span> dataSource <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>dataSource<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n      dataSource<span class=\"token punctuation\" >.</span><span class=\"token function\" >splice</span><span class=\"token punctuation\" >(</span>index<span class=\"token punctuation\" >,</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n      <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> dataSource <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n  handleAdd <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> count<span class=\"token punctuation\" >,</span> dataSource <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >const</span> newData <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n      key<span class=\"token punctuation\" >:</span> count<span class=\"token punctuation\" >,</span>\n      name<span class=\"token punctuation\" >:</span> <span class=\"token template-string\" ><span class=\"token string\" >`Edward King </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>count<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >,</span>\n      age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n      address<span class=\"token punctuation\" >:</span> <span class=\"token template-string\" ><span class=\"token string\" >`London, Park Lane no. </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>count<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      dataSource<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>dataSource<span class=\"token punctuation\" >,</span> newData<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n      count<span class=\"token punctuation\" >:</span> count <span class=\"token operator\" >+</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> dataSource <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>columns<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>editable-add-btn<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleAdd<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Add<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span> <span class=\"token attr-name\" >bordered</span> <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>dataSource<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EditableTable</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var EditableCell = function (_React$Component) {
	      (0, _inherits3.default)(EditableCell, _React$Component);

	      function EditableCell() {
	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, EditableCell);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { value: _this.props.value, editable: false }, _this.handleChange = function (e) {
	          var value = e.target.value;_this.setState({ value: value });
	        }, _this.check = function () {
	          _this.setState({ editable: false });if (_this.props.onChange) {
	            _this.props.onChange(_this.state.value);
	          }
	        }, _this.edit = function () {
	          _this.setState({ editable: true });
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      }

	      EditableCell.prototype.render = function render() {
	        var _state = this.state,
	            value = _state.value,
	            editable = _state.editable;
	        return _react2.default.createElement(
	          'div',
	          { className: 'editable-cell' },
	          editable ? _react2.default.createElement(
	            'div',
	            { className: 'editable-cell-input-wrapper' },
	            _react2.default.createElement(_input2.default, { value: value, onChange: this.handleChange, onPressEnter: this.check }),
	            _react2.default.createElement(_icon2.default, { type: 'check', className: 'editable-cell-icon-check', onClick: this.check })
	          ) : _react2.default.createElement(
	            'div',
	            { className: 'editable-cell-text-wrapper' },
	            value || ' ',
	            _react2.default.createElement(_icon2.default, { type: 'edit', className: 'editable-cell-icon', onClick: this.edit })
	          )
	        );
	      };

	      return EditableCell;
	    }(_react2.default.Component);

	    var EditableTable = function (_React$Component2) {
	      (0, _inherits3.default)(EditableTable, _React$Component2);

	      function EditableTable(props) {
	        (0, _classCallCheck3.default)(this, EditableTable);

	        var _this2 = (0, _possibleConstructorReturn3.default)(this, _React$Component2.call(this, props));

	        _this2.onCellChange = function (index, key) {
	          return function (value) {
	            var dataSource = [].concat((0, _toConsumableArray3.default)(_this2.state.dataSource));dataSource[index][key] = value;_this2.setState({ dataSource: dataSource });
	          };
	        };

	        _this2.onDelete = function (index) {
	          return function () {
	            var dataSource = [].concat((0, _toConsumableArray3.default)(_this2.state.dataSource));dataSource.splice(index, 1);_this2.setState({ dataSource: dataSource });
	          };
	        };

	        _this2.handleAdd = function () {
	          var _this2$state = _this2.state,
	              count = _this2$state.count,
	              dataSource = _this2$state.dataSource;
	          var newData = { key: count, name: 'Edward King ' + count, age: 32, address: 'London, Park Lane no. ' + count };_this2.setState({ dataSource: [].concat((0, _toConsumableArray3.default)(dataSource), [newData]), count: count + 1 });
	        };

	        _this2.columns = [{ title: 'name', dataIndex: 'name', width: '30%', render: function render(text, record, index) {
	            return _react2.default.createElement(EditableCell, { value: text, onChange: _this2.onCellChange(index, 'name') });
	          } }, { title: 'age', dataIndex: 'age' }, { title: 'address', dataIndex: 'address' }, { title: 'operation', dataIndex: 'operation', render: function render(text, record, index) {
	            return _this2.state.dataSource.length > 1 ? _react2.default.createElement(
	              _popconfirm2.default,
	              { title: 'Sure to delete?', onConfirm: _this2.onDelete(index) },
	              _react2.default.createElement(
	                'a',
	                { href: '#' },
	                'Delete'
	              )
	            ) : null;
	          } }];_this2.state = { dataSource: [{ key: '0', name: 'Edward King 0', age: '32', address: 'London, Park Lane no. 0' }, { key: '1', name: 'Edward King 1', age: '32', address: 'London, Park Lane no. 1' }], count: 2 };
	        return _this2;
	      }

	      EditableTable.prototype.render = function render() {
	        var dataSource = this.state.dataSource;
	        var columns = this.columns;return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _button2.default,
	            { className: 'editable-add-btn', type: 'ghost', onClick: this.handleAdd },
	            'Add'
	          ),
	          _react2.default.createElement(_table2.default, { bordered: true, dataSource: dataSource, columns: columns })
	        );
	      };

	      return EditableTable;
	    }(_react2.default.Component);

	    return _react2.default.createElement(EditableTable, null);
	  },
	  "style": ".editable-cell {\n  position: relative;\n}\n\n.editable-cell-input-wrapper,\n.editable-cell-text-wrapper {\n  padding-right: 24px;\n}\n\n.editable-cell-text-wrapper {\n  padding: 5px 24px 5px 5px;\n}\n\n.editable-cell-icon,\n.editable-cell-icon-check {\n  position: absolute;\n  right: 0;\n  width: 20px;\n  cursor: pointer;\n}\n\n.editable-cell-icon {\n  line-height: 18px;\n  display: none;\n}\n\n.editable-cell-icon-check {\n  line-height: 28px;\n}\n\n.editable-cell:hover .editable-cell-icon {\n  display: inline-block;\n}\n\n.editable-cell-icon:hover,\n.editable-cell-icon-check:hover {\n  color:#2db7f5;\n}\n\n.editable-add-btn {\n  margin-bottom: 8px;\n}",
	  "highlightedStyle": "<span class=\"token selector\" ><span class=\"token class\" >.editable-cell</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >position</span><span class=\"token punctuation\" >:</span> relative<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.editable-cell-input-wrapper</span>,\n<span class=\"token class\" >.editable-cell-text-wrapper</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >padding-right</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >24</span>px<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.editable-cell-text-wrapper</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >padding</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >5</span>px <span class=\"token number\" >24</span>px <span class=\"token number\" >5</span>px <span class=\"token number\" >5</span>px<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.editable-cell-icon</span>,\n<span class=\"token class\" >.editable-cell-icon-check</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >position</span><span class=\"token punctuation\" >:</span> absolute<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >right</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >width</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >20</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >cursor</span><span class=\"token punctuation\" >:</span> pointer<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.editable-cell-icon</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >line-height</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >18</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >display</span><span class=\"token punctuation\" >:</span> none<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.editable-cell-icon-check</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >line-height</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >28</span>px<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.editable-cell</span><span class=\"token pseudo-class\" >:hover</span> <span class=\"token class\" >.editable-cell-icon</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >display</span><span class=\"token punctuation\" >:</span> inline-block<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.editable-cell-icon</span><span class=\"token pseudo-class\" >:hover</span>,\n<span class=\"token class\" >.editable-cell-icon-check</span><span class=\"token pseudo-class\" >:hover</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >color</span><span class=\"token punctuation\" >:</span><span class=\"token hexcode\" >#2db7f5</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.editable-add-btn</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >margin-bottom</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >8</span>px<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>"
	};

/***/ },

/***/ 913:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(30);

	var _table = __webpack_require__(29);

	var _table2 = _interopRequireDefault(_table);

	var _style5 = __webpack_require__(129);

	var _popconfirm = __webpack_require__(128);

	var _popconfirm2 = _interopRequireDefault(_popconfirm);

	var _style6 = __webpack_require__(21);

	var _input = __webpack_require__(25);

	var _input2 = _interopRequireDefault(_input);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "带行编辑功能的表格。"]],
	    "en-US": [["p", "Table with editable rows."]]
	  },
	  "meta": {
	    "order": 23,
	    "title": {
	      "en-US": "Editable Rows",
	      "zh-CN": "可编辑行"
	    },
	    "filename": "components/table/demo/edit-row.md",
	    "id": "components-table-demo-edit-row"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Table<span class=\"token punctuation\" >,</span> Input<span class=\"token punctuation\" >,</span> Popconfirm <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >EditableCell</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >React<span class=\"token punctuation\" >.</span>Component</span> <span class=\"token punctuation\" >{</span>\n  state <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>value<span class=\"token punctuation\" >,</span>\n    editable<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>editable <span class=\"token operator\" >||</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span>\n  <span class=\"token function\" >componentWillReceiveProps</span><span class=\"token punctuation\" >(</span>nextProps<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>nextProps<span class=\"token punctuation\" >.</span>editable <span class=\"token operator\" >!==</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>editable<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> editable<span class=\"token punctuation\" >:</span> nextProps<span class=\"token punctuation\" >.</span>editable <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n      <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>nextProps<span class=\"token punctuation\" >.</span>editable<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>cacheValue <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>value<span class=\"token punctuation\" >;</span>\n      <span class=\"token punctuation\" >}</span>\n    <span class=\"token punctuation\" >}</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>nextProps<span class=\"token punctuation\" >.</span>status <span class=\"token operator\" >&amp;&amp;</span> nextProps<span class=\"token punctuation\" >.</span>status <span class=\"token operator\" >!==</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>status<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>nextProps<span class=\"token punctuation\" >.</span>status <span class=\"token operator\" >===</span> <span class=\"token string\" >'save'</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span><span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>value<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n      <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >else</span> <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>nextProps<span class=\"token punctuation\" >.</span>status <span class=\"token operator\" >===</span> <span class=\"token string\" >'cancel'</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> value<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>cacheValue <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span><span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>cacheValue<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n      <span class=\"token punctuation\" >}</span>\n    <span class=\"token punctuation\" >}</span>\n  <span class=\"token punctuation\" >}</span>\n  <span class=\"token function\" >shouldComponentUpdate</span><span class=\"token punctuation\" >(</span>nextProps<span class=\"token punctuation\" >,</span> nextState<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> nextProps<span class=\"token punctuation\" >.</span>editable <span class=\"token operator\" >!==</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>editable <span class=\"token operator\" >||</span>\n           nextState<span class=\"token punctuation\" >.</span>value <span class=\"token operator\" >!==</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>value<span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n  <span class=\"token function\" >handleChange</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> value <span class=\"token operator\" >=</span> e<span class=\"token punctuation\" >.</span>target<span class=\"token punctuation\" >.</span>value<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> value <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> value<span class=\"token punctuation\" >,</span> editable <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token punctuation\" >{</span>\n        editable <span class=\"token operator\" >?</span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Input</span>\n            <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>value<span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>e <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >handleChange</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span>\n          <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token punctuation\" >:</span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>editable-row-text<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token punctuation\" >{</span>value <span class=\"token operator\" >||</span> <span class=\"token string\" >' '</span><span class=\"token punctuation\" >}</span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token punctuation\" >}</span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token keyword\" >class</span> <span class=\"token class-name\" >EditableTable</span> <span class=\"token keyword\" >extends</span> <span class=\"token class-name\" >React<span class=\"token punctuation\" >.</span>Component</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >constructor</span><span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >super</span><span class=\"token punctuation\" >(</span>props<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n      dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n      width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'25%'</span><span class=\"token punctuation\" >,</span>\n      render<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>text<span class=\"token punctuation\" >,</span> record<span class=\"token punctuation\" >,</span> index<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >renderColumns</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>data<span class=\"token punctuation\" >,</span> index<span class=\"token punctuation\" >,</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span> text<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n      title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n      dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n      width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'15%'</span><span class=\"token punctuation\" >,</span>\n      render<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>text<span class=\"token punctuation\" >,</span> record<span class=\"token punctuation\" >,</span> index<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >renderColumns</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>data<span class=\"token punctuation\" >,</span> index<span class=\"token punctuation\" >,</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span> text<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n      title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n      dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n      width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'40%'</span><span class=\"token punctuation\" >,</span>\n      render<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>text<span class=\"token punctuation\" >,</span> record<span class=\"token punctuation\" >,</span> index<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >renderColumns</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>data<span class=\"token punctuation\" >,</span> index<span class=\"token punctuation\" >,</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span> text<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n      title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'operation'</span><span class=\"token punctuation\" >,</span>\n      dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'operation'</span><span class=\"token punctuation\" >,</span>\n      render<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>text<span class=\"token punctuation\" >,</span> record<span class=\"token punctuation\" >,</span> index<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> editable <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>data<span class=\"token punctuation\" >[</span>index<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >;</span>\n        <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>editable-row-operations<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token punctuation\" >{</span>\n            editable <span class=\"token operator\" >?</span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >editDone</span><span class=\"token punctuation\" >(</span>index<span class=\"token punctuation\" >,</span> <span class=\"token string\" >'save'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Save<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Popconfirm</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Sure</span> <span class=\"token attr-name\" >to</span> <span class=\"token attr-name\" >cancel?\"</span> <span class=\"token attr-name\" >onConfirm</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >editDone</span><span class=\"token punctuation\" >(</span>index<span class=\"token punctuation\" >,</span> <span class=\"token string\" >'cancel'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n                <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span><span class=\"token punctuation\" >></span></span>Cancel<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Popconfirm</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token punctuation\" >:</span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >edit</span><span class=\"token punctuation\" >(</span>index<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Edit<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token punctuation\" >}</span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n      data<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n        key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'0'</span><span class=\"token punctuation\" >,</span>\n        name<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n          editable<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n          value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Edward King 0'</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n        age<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n          editable<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n          value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'32'</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n        address<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n          value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London, Park Lane no. 0'</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n  <span class=\"token function\" >renderColumns</span><span class=\"token punctuation\" >(</span>data<span class=\"token punctuation\" >,</span> index<span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >,</span> text<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> editable<span class=\"token punctuation\" >,</span> status <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> data<span class=\"token punctuation\" >[</span>index<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >[</span>key<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span><span class=\"token keyword\" >typeof</span> editable <span class=\"token operator\" >===</span> <span class=\"token string\" >'undefined'</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >return</span> text<span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EditableCell</span>\n      <span class=\"token attr-name\" >editable</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>editable<span class=\"token punctuation\" >}</span></span>\n      <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>text<span class=\"token punctuation\" >}</span></span>\n      <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>value <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >handleChange</span><span class=\"token punctuation\" >(</span>key<span class=\"token punctuation\" >,</span> index<span class=\"token punctuation\" >,</span> value<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span>\n      <span class=\"token attr-name\" >status</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>status<span class=\"token punctuation\" >}</span></span>\n    <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n  <span class=\"token function\" >handleChange</span><span class=\"token punctuation\" >(</span>key<span class=\"token punctuation\" >,</span> index<span class=\"token punctuation\" >,</span> value<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> data <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >;</span>\n    data<span class=\"token punctuation\" >[</span>index<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >[</span>key<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span>value <span class=\"token operator\" >=</span> value<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> data <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n  <span class=\"token function\" >edit</span><span class=\"token punctuation\" >(</span>index<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> data <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >;</span>\n    Object<span class=\"token punctuation\" >.</span><span class=\"token function\" >keys</span><span class=\"token punctuation\" >(</span>data<span class=\"token punctuation\" >[</span>index<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >forEach</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>item<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>data<span class=\"token punctuation\" >[</span>index<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >[</span>item<span class=\"token punctuation\" >]</span> <span class=\"token operator\" >&amp;&amp;</span> <span class=\"token keyword\" >typeof</span> data<span class=\"token punctuation\" >[</span>index<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >[</span>item<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span>editable <span class=\"token operator\" >!==</span> <span class=\"token string\" >'undefined'</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        data<span class=\"token punctuation\" >[</span>index<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >[</span>item<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span>editable <span class=\"token operator\" >=</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >;</span>\n      <span class=\"token punctuation\" >}</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> data <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n  <span class=\"token function\" >editDone</span><span class=\"token punctuation\" >(</span>index<span class=\"token punctuation\" >,</span> type<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> data <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >;</span>\n    Object<span class=\"token punctuation\" >.</span><span class=\"token function\" >keys</span><span class=\"token punctuation\" >(</span>data<span class=\"token punctuation\" >[</span>index<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >forEach</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>item<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>data<span class=\"token punctuation\" >[</span>index<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >[</span>item<span class=\"token punctuation\" >]</span> <span class=\"token operator\" >&amp;&amp;</span> <span class=\"token keyword\" >typeof</span> data<span class=\"token punctuation\" >[</span>index<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >[</span>item<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span>editable <span class=\"token operator\" >!==</span> <span class=\"token string\" >'undefined'</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        data<span class=\"token punctuation\" >[</span>index<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >[</span>item<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span>editable <span class=\"token operator\" >=</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >;</span>\n        data<span class=\"token punctuation\" >[</span>index<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >[</span>item<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span>status <span class=\"token operator\" >=</span> type<span class=\"token punctuation\" >;</span>\n      <span class=\"token punctuation\" >}</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> data <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n      Object<span class=\"token punctuation\" >.</span><span class=\"token function\" >keys</span><span class=\"token punctuation\" >(</span>data<span class=\"token punctuation\" >[</span>index<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >forEach</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>item<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>data<span class=\"token punctuation\" >[</span>index<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >[</span>item<span class=\"token punctuation\" >]</span> <span class=\"token operator\" >&amp;&amp;</span> <span class=\"token keyword\" >typeof</span> data<span class=\"token punctuation\" >[</span>index<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >[</span>item<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span>editable <span class=\"token operator\" >!==</span> <span class=\"token string\" >'undefined'</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n          <span class=\"token keyword\" >delete</span> data<span class=\"token punctuation\" >[</span>index<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >[</span>item<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span>status<span class=\"token punctuation\" >;</span>\n        <span class=\"token punctuation\" >}</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> data <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >const</span> dataSource <span class=\"token operator\" >=</span> data<span class=\"token punctuation\" >.</span><span class=\"token function\" >map</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>item<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >const</span> obj <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n      Object<span class=\"token punctuation\" >.</span><span class=\"token function\" >keys</span><span class=\"token punctuation\" >(</span>item<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >forEach</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>key<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n        obj<span class=\"token punctuation\" >[</span>key<span class=\"token punctuation\" >]</span> <span class=\"token operator\" >=</span> key <span class=\"token operator\" >===</span> <span class=\"token string\" >'key'</span> <span class=\"token operator\" >?</span> item<span class=\"token punctuation\" >[</span>key<span class=\"token punctuation\" >]</span> <span class=\"token punctuation\" >:</span> item<span class=\"token punctuation\" >[</span>key<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span>value<span class=\"token punctuation\" >;</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n      <span class=\"token keyword\" >return</span> obj<span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>columns<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span> <span class=\"token attr-name\" >bordered</span> <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>dataSource<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>EditableTable</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var EditableCell = function (_React$Component) {
	      (0, _inherits3.default)(EditableCell, _React$Component);

	      function EditableCell() {
	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, EditableCell);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { value: _this.props.value, editable: _this.props.editable || false }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      }

	      EditableCell.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (nextProps.editable !== this.state.editable) {
	          this.setState({ editable: nextProps.editable });if (nextProps.editable) {
	            this.cacheValue = this.state.value;
	          }
	        }
	        if (nextProps.status && nextProps.status !== this.props.status) {
	          if (nextProps.status === 'save') {
	            this.props.onChange(this.state.value);
	          } else if (nextProps.status === 'cancel') {
	            this.setState({ value: this.cacheValue });
	            this.props.onChange(this.cacheValue);
	          }
	        }
	      };

	      EditableCell.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	        return nextProps.editable !== this.state.editable || nextState.value !== this.state.value;
	      };

	      EditableCell.prototype.handleChange = function handleChange(e) {
	        var value = e.target.value;this.setState({ value: value });
	      };

	      EditableCell.prototype.render = function render() {
	        var _this2 = this;

	        var _state = this.state,
	            value = _state.value,
	            editable = _state.editable;
	        return _react2.default.createElement(
	          'div',
	          null,
	          editable ? _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_input2.default, { value: value, onChange: function onChange(e) {
	                return _this2.handleChange(e);
	              } })
	          ) : _react2.default.createElement(
	            'div',
	            { className: 'editable-row-text' },
	            value || ' '
	          )
	        );
	      };

	      return EditableCell;
	    }(_react2.default.Component);

	    var EditableTable = function (_React$Component2) {
	      (0, _inherits3.default)(EditableTable, _React$Component2);

	      function EditableTable(props) {
	        (0, _classCallCheck3.default)(this, EditableTable);

	        var _this3 = (0, _possibleConstructorReturn3.default)(this, _React$Component2.call(this, props));

	        _this3.columns = [{ title: 'name', dataIndex: 'name', width: '25%', render: function render(text, record, index) {
	            return _this3.renderColumns(_this3.state.data, index, 'name', text);
	          } }, { title: 'age', dataIndex: 'age', width: '15%', render: function render(text, record, index) {
	            return _this3.renderColumns(_this3.state.data, index, 'age', text);
	          } }, { title: 'address', dataIndex: 'address', width: '40%', render: function render(text, record, index) {
	            return _this3.renderColumns(_this3.state.data, index, 'address', text);
	          } }, { title: 'operation', dataIndex: 'operation', render: function render(text, record, index) {
	            var editable = _this3.state.data[index].name.editable;
	            return _react2.default.createElement(
	              'div',
	              { className: 'editable-row-operations' },
	              editable ? _react2.default.createElement(
	                'span',
	                null,
	                _react2.default.createElement(
	                  'a',
	                  { onClick: function onClick() {
	                      return _this3.editDone(index, 'save');
	                    } },
	                  'Save'
	                ),
	                _react2.default.createElement(
	                  _popconfirm2.default,
	                  { title: 'Sure to cancel?', onConfirm: function onConfirm() {
	                      return _this3.editDone(index, 'cancel');
	                    } },
	                  _react2.default.createElement(
	                    'a',
	                    null,
	                    'Cancel'
	                  )
	                )
	              ) : _react2.default.createElement(
	                'span',
	                null,
	                _react2.default.createElement(
	                  'a',
	                  { onClick: function onClick() {
	                      return _this3.edit(index);
	                    } },
	                  'Edit'
	                )
	              )
	            );
	          } }];_this3.state = { data: [{ key: '0', name: { editable: false, value: 'Edward King 0' }, age: { editable: false, value: '32' }, address: { value: 'London, Park Lane no. 0' } }] };
	        return _this3;
	      }

	      EditableTable.prototype.renderColumns = function renderColumns(data, index, key, text) {
	        var _this4 = this;

	        var _data$index$key = data[index][key],
	            editable = _data$index$key.editable,
	            status = _data$index$key.status;
	        if (typeof editable === 'undefined') {
	          return text;
	        }return _react2.default.createElement(EditableCell, { editable: editable, value: text, onChange: function onChange(value) {
	            return _this4.handleChange(key, index, value);
	          }, status: status });
	      };

	      EditableTable.prototype.handleChange = function handleChange(key, index, value) {
	        var data = this.state.data;
	        data[index][key].value = value;this.setState({ data: data });
	      };

	      EditableTable.prototype.edit = function edit(index) {
	        var data = this.state.data;
	        Object.keys(data[index]).forEach(function (item) {
	          if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
	            data[index][item].editable = true;
	          }
	        });this.setState({ data: data });
	      };

	      EditableTable.prototype.editDone = function editDone(index, type) {
	        var data = this.state.data;
	        Object.keys(data[index]).forEach(function (item) {
	          if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
	            data[index][item].editable = false;data[index][item].status = type;
	          }
	        });this.setState({ data: data }, function () {
	          Object.keys(data[index]).forEach(function (item) {
	            if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
	              delete data[index][item].status;
	            }
	          });
	        });
	      };

	      EditableTable.prototype.render = function render() {
	        var data = this.state.data;
	        var dataSource = data.map(function (item) {
	          var obj = {};Object.keys(item).forEach(function (key) {
	            obj[key] = key === 'key' ? item[key] : item[key].value;
	          });return obj;
	        });var columns = this.columns;return _react2.default.createElement(_table2.default, { bordered: true, dataSource: dataSource, columns: columns });
	      };

	      return EditableTable;
	    }(_react2.default.Component);

	    return _react2.default.createElement(EditableTable, null);
	  },
	  "style": ".editable-row-text {\n  padding: 5px;\n}\n\n.editable-row-operations a {\n  margin-right: 8px;\n}",
	  "highlightedStyle": "<span class=\"token selector\" ><span class=\"token class\" >.editable-row-text</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >padding</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >5</span>px<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.editable-row-operations</span> a </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >margin-right</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >8</span>px<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>"
	};

/***/ },

/***/ 914:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(30);

	var _table = __webpack_require__(29);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "表格支持树形数据的展示，可以通过设置 ", ["code", "indentSize"], " 以控制每一层的缩进宽度。"], ["blockquote", ["p", "注：暂不支持父子数据递归关联选择。"]]],
	    "en-US": [["p", "Display tree structure data in Table, control the indent width by setting ", ["code", "indentSize"], "."], ["blockquote", ["p", "Note, no support for recursive selection of tree structure data table yet."]]]
	  },
	  "meta": {
	    "order": 15,
	    "title": {
	      "en-US": "Tree data",
	      "zh-CN": "树形数据展示"
	    },
	    "filename": "components/table/demo/expand-children.md",
	    "id": "components-table-demo-expand-children"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Table <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Name'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n  width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'40%'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Age'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n  width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'30%'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Address'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n  width<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'30%'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> data <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'John Brown sr.'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >60</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'New York No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    key<span class=\"token punctuation\" >:</span> <span class=\"token number\" >11</span><span class=\"token punctuation\" >,</span>\n    name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'John Brown'</span><span class=\"token punctuation\" >,</span>\n    age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >42</span><span class=\"token punctuation\" >,</span>\n    address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'New York No. 2 Lake Park'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n    key<span class=\"token punctuation\" >:</span> <span class=\"token number\" >12</span><span class=\"token punctuation\" >,</span>\n    name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'John Brown jr.'</span><span class=\"token punctuation\" >,</span>\n    age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >30</span><span class=\"token punctuation\" >,</span>\n    address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'New York No. 3 Lake Park'</span><span class=\"token punctuation\" >,</span>\n    children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      key<span class=\"token punctuation\" >:</span> <span class=\"token number\" >121</span><span class=\"token punctuation\" >,</span>\n      name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jimmy Brown'</span><span class=\"token punctuation\" >,</span>\n      age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >16</span><span class=\"token punctuation\" >,</span>\n      address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'New York No. 3 Lake Park'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n    key<span class=\"token punctuation\" >:</span> <span class=\"token number\" >13</span><span class=\"token punctuation\" >,</span>\n    name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim Green sr.'</span><span class=\"token punctuation\" >,</span>\n    age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >72</span><span class=\"token punctuation\" >,</span>\n    address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n    children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      key<span class=\"token punctuation\" >:</span> <span class=\"token number\" >131</span><span class=\"token punctuation\" >,</span>\n      name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim Green'</span><span class=\"token punctuation\" >,</span>\n      age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >42</span><span class=\"token punctuation\" >,</span>\n      address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London No. 2 Lake Park'</span><span class=\"token punctuation\" >,</span>\n      children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n        key<span class=\"token punctuation\" >:</span> <span class=\"token number\" >1311</span><span class=\"token punctuation\" >,</span>\n        name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim Green jr.'</span><span class=\"token punctuation\" >,</span>\n        age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >25</span><span class=\"token punctuation\" >,</span>\n        address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London No. 3 Lake Park'</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n        key<span class=\"token punctuation\" >:</span> <span class=\"token number\" >1312</span><span class=\"token punctuation\" >,</span>\n        name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jimmy Green sr.'</span><span class=\"token punctuation\" >,</span>\n        age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >18</span><span class=\"token punctuation\" >,</span>\n        address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London No. 4 Lake Park'</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Joe Black'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// rowSelection objects indicates the need for row selection</span>\n<span class=\"token keyword\" >const</span> rowSelection <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n  onChange<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>selectedRowKeys<span class=\"token punctuation\" >,</span> selectedRows<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token template-string\" ><span class=\"token string\" >`selectedRowKeys: </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>selectedRowKeys<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'selectedRows: '</span><span class=\"token punctuation\" >,</span> selectedRows<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  onSelect<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>record<span class=\"token punctuation\" >,</span> selected<span class=\"token punctuation\" >,</span> selectedRows<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>record<span class=\"token punctuation\" >,</span> selected<span class=\"token punctuation\" >,</span> selectedRows<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  onSelectAll<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>selected<span class=\"token punctuation\" >,</span> selectedRows<span class=\"token punctuation\" >,</span> changeRows<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>selected<span class=\"token punctuation\" >,</span> selectedRows<span class=\"token punctuation\" >,</span> changeRows<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span> <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >rowSelection</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>rowSelection<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name', key: 'name', width: '40%' }, { title: 'Age', dataIndex: 'age', key: 'age', width: '30%' }, { title: 'Address', dataIndex: 'address', key: 'address', width: '30%' }];var data = [{ key: 1, name: 'John Brown sr.',
	      age: 60, address: 'New York No. 1 Lake Park', children: [{ key: 11, name: 'John Brown',
	        age: 42, address: 'New York No. 2 Lake Park' }, { key: 12, name: 'John Brown jr.', age: 30, address: 'New York No. 3 Lake Park', children: [{ key: 121, name: 'Jimmy Brown', age: 16,
	          address: 'New York No. 3 Lake Park' }] }, { key: 13, name: 'Jim Green sr.', age: 72, address: 'London No. 1 Lake Park', children: [{ key: 131, name: 'Jim Green', age: 42, address: 'London No. 2 Lake Park',
	          children: [{ key: 1311, name: 'Jim Green jr.', age: 25, address: 'London No. 3 Lake Park' }, { key: 1312, name: 'Jimmy Green sr.', age: 18, address: 'London No. 4 Lake Park' }] }] }] }, { key: 2, name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park' }]; // rowSelection objects indicates the need for row selection
	    var rowSelection = { onChange: function onChange(selectedRowKeys, selectedRows) {
	        console.log('selectedRowKeys: ' + selectedRowKeys, 'selectedRows: ', selectedRows);
	      }, onSelect: function onSelect(record, selected, selectedRows) {
	        console.log(record, selected, selectedRows);
	      }, onSelectAll: function onSelectAll(selected, selectedRows, changeRows) {
	        console.log(selected, selectedRows, changeRows);
	      } };return _react2.default.createElement(_table2.default, { columns: columns, rowSelection: rowSelection, dataSource: data });
	  }
	};

/***/ },

/***/ 915:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(30);

	var _table = __webpack_require__(29);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "当表格内容较多不能一次性完全展示时。"]],
	    "en-US": [["p", "When there's too much information to show and the table can't display all at once."]]
	  },
	  "meta": {
	    "order": 12,
	    "title": {
	      "en-US": "Expandable Row",
	      "zh-CN": "可展开"
	    },
	    "filename": "components/table/demo/expand.md",
	    "id": "components-table-demo-expand"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Table <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Name'</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Age'</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Address'</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Action'</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >''</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'x'</span><span class=\"token punctuation\" >,</span> render<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Delete<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> data <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span>\n  <span class=\"token punctuation\" >{</span> key<span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >,</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'John Brown'</span><span class=\"token punctuation\" >,</span> age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span> address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'New York No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span> description<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> key<span class=\"token punctuation\" >:</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >,</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim Green'</span><span class=\"token punctuation\" >,</span> age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >42</span><span class=\"token punctuation\" >,</span> address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span> description<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> key<span class=\"token punctuation\" >:</span> <span class=\"token number\" >3</span><span class=\"token punctuation\" >,</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Joe Black'</span><span class=\"token punctuation\" >,</span> age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span> address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span> description<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span>\n    <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >expandedRowRender</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>record <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>record<span class=\"token punctuation\" >.</span>description<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>table<span class=\"token punctuation\" >\"</span></span>\n  <span class=\"token punctuation\" >/></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name', key: 'name'
	    }, { title: 'Age', dataIndex: 'age',
	      key: 'age'
	    }, { title: 'Address', dataIndex: 'address', key: 'address' }, { title: 'Action', dataIndex: '', key: 'x', render: function render() {
	        return _react2.default.createElement(
	          'a',
	          { href: '#' },
	          'Delete'
	        );
	      } }];var data = [{ key: 1, name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' }, {
	      key: 2, name: 'Jim Green',
	      age: 42, address: 'London No. 1 Lake Park', description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.' }, { key: 3, name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' }];return _react2.default.createElement(_table2.default, { columns: columns, expandedRowRender: function expandedRowRender(record) {
	        return _react2.default.createElement(
	          'p',
	          null,
	          record.description
	        );
	      }, dataSource: data, className: 'table' });
	  }
	};

/***/ },

/***/ 916:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(30);

	var _table = __webpack_require__(29);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "适合同时展示有大量数据和数据列。"], ["blockquote", ["p", "若列头与内容不对齐，请指定每列宽度 ", ["code", "width"], "。"], ["p", "建议指定 ", ["code", "scroll.x"], " 为固定宽度。注意，非固定列宽度之和不要超过 ", ["code", "scroll.x"], "。"]]],
	    "en-US": [["p", "Suitable for large amounts of data with long columns."], ["blockquote", ["p", "Specify the width of each column if header and cell do not align properly."], ["p", "A fixed width for ", ["code", "scroll.x"], " is recommended. The sum of unfixed columns should not greater than ", ["code", "scroll.x"], "."]]]
	  },
	  "meta": {
	    "order": 18,
	    "title": {
	      "en-US": "Fixed Columns and Header",
	      "zh-CN": "固定头和列"
	    },
	    "filename": "components/table/demo/fixed-columns-header.md",
	    "id": "components-table-demo-fixed-columns-header"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Table <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Full Name'</span><span class=\"token punctuation\" >,</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span> fixed<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'left'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Age'</span><span class=\"token punctuation\" >,</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span> fixed<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'left'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Column 1'</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'1'</span><span class=\"token punctuation\" >,</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >150</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Column 2'</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'2'</span><span class=\"token punctuation\" >,</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >150</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Column 3'</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'3'</span><span class=\"token punctuation\" >,</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >150</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Column 4'</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'4'</span><span class=\"token punctuation\" >,</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >150</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Column 5'</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'5'</span><span class=\"token punctuation\" >,</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >150</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Column 6'</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'6'</span><span class=\"token punctuation\" >,</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >150</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Column 7'</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'7'</span><span class=\"token punctuation\" >,</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >150</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Column 8'</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'8'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span>\n    title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Action'</span><span class=\"token punctuation\" >,</span>\n    key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'operation'</span><span class=\"token punctuation\" >,</span>\n    fixed<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'right'</span><span class=\"token punctuation\" >,</span>\n    width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >,</span>\n    render<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> data <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >for</span> <span class=\"token punctuation\" >(</span><span class=\"token keyword\" >let</span> i <span class=\"token operator\" >=</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span> i <span class=\"token operator\" >&lt;</span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >;</span> i<span class=\"token operator\" >++</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  data<span class=\"token punctuation\" >.</span><span class=\"token function\" >push</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n    key<span class=\"token punctuation\" >:</span> i<span class=\"token punctuation\" >,</span>\n    name<span class=\"token punctuation\" >:</span> <span class=\"token template-string\" ><span class=\"token string\" >`Edrward </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>i<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >,</span>\n    age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n    address<span class=\"token punctuation\" >:</span> <span class=\"token template-string\" ><span class=\"token string\" >`London Park no. </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>i<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span> <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >scroll</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> x<span class=\"token punctuation\" >:</span> <span class=\"token number\" >1500</span><span class=\"token punctuation\" >,</span> y<span class=\"token punctuation\" >:</span> <span class=\"token number\" >300</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' }, { title: 'Age', width: 100, dataIndex: 'age', key: 'age',
	      fixed: 'left' }, { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 }, { title: 'Column 2',
	      dataIndex: 'address', key: '2', width: 150 }, { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 }, { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 }, { title: 'Column 5',
	      dataIndex: 'address', key: '5', width: 150 }, {
	      title: 'Column 6', dataIndex: 'address', key: '6', width: 150 }, { title: 'Column 7',
	      dataIndex: 'address', key: '7', width: 150 }, {
	      title: 'Column 8', dataIndex: 'address', key: '8' }, { title: 'Action', key: 'operation', fixed: 'right', width: 100, render: function render() {
	        return _react2.default.createElement(
	          'a',
	          { href: '#' },
	          'action'
	        );
	      } }];var data = [];
	    for (var i = 0; i < 100; i++) {
	      data.push({ key: i, name: 'Edrward ' + i, age: 32, address: 'London Park no. ' + i });
	    }return _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, scroll: { x: 1500, y: 300 } });
	  }
	};

/***/ },

/***/ 917:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(30);

	var _table = __webpack_require__(29);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据，需要和 ", ["code", "scroll.x"], " 配合使用。"], ["blockquote", ["p", "若列头与内容不对齐，请指定每列宽度 ", ["code", "width"], "。"], ["p", "建议指定 scroll.x 为固定宽度。"]]],
	    "en-US": [["p", "Fix some columns and scroll in other columns. You must set ", ["code", "scoll.x"], " meanwhile."], ["blockquote", ["p", "Specify the width of each column if header and cell do not align properly."], ["p", "A fixed width for ", ["code", "scroll.x"], " is recommended."]]]
	  },
	  "meta": {
	    "order": 17,
	    "title": {
	      "en-US": "Fixed Columns",
	      "zh-CN": "固定列"
	    },
	    "filename": "components/table/demo/fixed-columns.md",
	    "id": "components-table-demo-fixed-columns"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Table <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Full Name'</span><span class=\"token punctuation\" >,</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span> fixed<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'left'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Age'</span><span class=\"token punctuation\" >,</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span> fixed<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'left'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Column 1'</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'1'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Column 2'</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'2'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Column 3'</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'3'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Column 4'</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'4'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Column 5'</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'5'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Column 6'</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'6'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Column 7'</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'7'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span> title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Column 8'</span><span class=\"token punctuation\" >,</span> dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span> key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'8'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >{</span>\n    title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Action'</span><span class=\"token punctuation\" >,</span>\n    key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'operation'</span><span class=\"token punctuation\" >,</span>\n    fixed<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'right'</span><span class=\"token punctuation\" >,</span>\n    width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >,</span>\n    render<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>action<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> data <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'1'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'John Brown'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'New York Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'2'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim Green'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >40</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span> <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >scroll</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> x<span class=\"token punctuation\" >:</span> <span class=\"token number\" >1300</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Full Name', width: 100, dataIndex: 'name', key: 'name',
	      fixed: 'left' }, { title: 'Age', width: 100, dataIndex: 'age', key: 'age',
	      fixed: 'left' }, { title: 'Column 1', dataIndex: 'address', key: '1' }, { title: 'Column 2', dataIndex: 'address',
	      key: '2' }, { title: 'Column 3', dataIndex: 'address', key: '3'
	    }, { title: 'Column 4',
	      dataIndex: 'address', key: '4' }, { title: 'Column 5', dataIndex: 'address', key: '5' }, { title: 'Column 6', dataIndex: 'address', key: '6' }, { title: 'Column 7', dataIndex: 'address',
	      key: '7' }, { title: 'Column 8', dataIndex: 'address', key: '8' }, {
	      title: 'Action', key: 'operation',
	      fixed: 'right', width: 100, render: function render() {
	        return _react2.default.createElement(
	          'a',
	          { href: '#' },
	          'action'
	        );
	      } }];var data = [{ key: '1', name: 'John Brown', age: 32, address: 'New York Park' }, { key: '2', name: 'Jim Green', age: 40, address: 'London Park' }];return _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, scroll: { x: 1300 } });
	  }
	};

/***/ },

/***/ 918:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(30);

	var _table = __webpack_require__(29);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "方便一页内展示大量数据。"], ["p", "需要指定 column 的 ", ["code", "width"], " 属性，否则列头和内容可能不对齐。"]],
	    "en-US": [["p", "Display large amounts of data in scrollable view."], ["blockquote", ["p", "Specify the width of each column if header and cell do not align properly."]]]
	  },
	  "meta": {
	    "order": 16,
	    "title": {
	      "en-US": "Fixed Header",
	      "zh-CN": "固定表头"
	    },
	    "filename": "components/table/demo/fixed-header.md",
	    "id": "components-table-demo-fixed-header"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Table <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Name'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n  width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >150</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Age'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n  width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >150</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Address'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> data <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >for</span> <span class=\"token punctuation\" >(</span><span class=\"token keyword\" >let</span> i <span class=\"token operator\" >=</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span> i <span class=\"token operator\" >&lt;</span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >;</span> i<span class=\"token operator\" >++</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  data<span class=\"token punctuation\" >.</span><span class=\"token function\" >push</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n    key<span class=\"token punctuation\" >:</span> i<span class=\"token punctuation\" >,</span>\n    name<span class=\"token punctuation\" >:</span> <span class=\"token template-string\" ><span class=\"token string\" >`Edward King </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>i<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >,</span>\n    age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n    address<span class=\"token punctuation\" >:</span> <span class=\"token template-string\" ><span class=\"token string\" >`London, Park Lane no. </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>i<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span> <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >pagination</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> pageSize<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >scroll</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> y<span class=\"token punctuation\" >:</span> <span class=\"token number\" >240</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name', width: 150
	    }, { title: 'Age',
	      dataIndex: 'age', width: 150 }, { title: 'Address', dataIndex: 'address'
	    }];var data = [];for (var i = 0; i < 100; i++) {
	      data.push({ key: i,
	        name: 'Edward King ' + i, age: 32, address: 'London, Park Lane no. ' + i });
	    }return _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, pagination: { pageSize: 50 }, scroll: { y: 240 } });
	  }
	};

/***/ },

/***/ 919:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(30);

	var _table = __webpack_require__(29);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", ["code", "columns[n]"], " 可以内嵌 ", ["code", "children"], "，以渲染分组表头。"]],
	    "en-US": [["p", "Group table head with ", ["code", "columns[n].children"], "."]]
	  },
	  "meta": {
	    "order": 20,
	    "title": {
	      "en-US": "Grouping table head",
	      "zh-CN": "表头分组"
	    },
	    "filename": "components/table/demo/grouping-columns.md",
	    "id": "components-table-demo-grouping-columns"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Table <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Name'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n  width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >,</span>\n  fixed<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'left'</span><span class=\"token punctuation\" >,</span>\n  filters<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    text<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Joe'</span><span class=\"token punctuation\" >,</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Joe'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n    text<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'John'</span><span class=\"token punctuation\" >,</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'John'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  onFilter<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >,</span> record<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> record<span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >.</span><span class=\"token function\" >indexOf</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >===</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Other'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Age'</span><span class=\"token punctuation\" >,</span>\n    dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n    key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n    width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >,</span>\n    sorter<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>a<span class=\"token punctuation\" >,</span> b<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> a<span class=\"token punctuation\" >.</span>age <span class=\"token operator\" >-</span> b<span class=\"token punctuation\" >.</span>age<span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n    title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Address'</span><span class=\"token punctuation\" >,</span>\n    children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Street'</span><span class=\"token punctuation\" >,</span>\n      dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'street'</span><span class=\"token punctuation\" >,</span>\n      key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'street'</span><span class=\"token punctuation\" >,</span>\n      width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >200</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n      title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Block'</span><span class=\"token punctuation\" >,</span>\n      children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n        title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Building'</span><span class=\"token punctuation\" >,</span>\n        dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'building'</span><span class=\"token punctuation\" >,</span>\n        key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'building'</span><span class=\"token punctuation\" >,</span>\n        width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >50</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n        title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Door No.'</span><span class=\"token punctuation\" >,</span>\n        dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'number'</span><span class=\"token punctuation\" >,</span>\n        key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'number'</span><span class=\"token punctuation\" >,</span>\n        width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Company'</span><span class=\"token punctuation\" >,</span>\n  children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Company Address'</span><span class=\"token punctuation\" >,</span>\n    dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'companyAddress'</span><span class=\"token punctuation\" >,</span>\n    key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'companyAddress'</span><span class=\"token punctuation\" >,</span>\n    width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >200</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n    title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Company Name'</span><span class=\"token punctuation\" >,</span>\n    dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'companyName'</span><span class=\"token punctuation\" >,</span>\n    key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'companyName'</span><span class=\"token punctuation\" >,</span>\n    width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >200</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Gender'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'gender'</span><span class=\"token punctuation\" >,</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'gender'</span><span class=\"token punctuation\" >,</span>\n  width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >60</span><span class=\"token punctuation\" >,</span>\n  fixed<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'right'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> data <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >for</span> <span class=\"token punctuation\" >(</span><span class=\"token keyword\" >let</span> i <span class=\"token operator\" >=</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span> i <span class=\"token operator\" >&lt;</span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >;</span> i<span class=\"token operator\" >++</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  data<span class=\"token punctuation\" >.</span><span class=\"token function\" >push</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n    key<span class=\"token punctuation\" >:</span> i<span class=\"token punctuation\" >,</span>\n    name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'John Brown'</span><span class=\"token punctuation\" >,</span>\n    age<span class=\"token punctuation\" >:</span> Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >ceil</span><span class=\"token punctuation\" >(</span>Math<span class=\"token punctuation\" >.</span><span class=\"token function\" >random</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >*</span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n    street<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Lake Park'</span><span class=\"token punctuation\" >,</span>\n    building<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'C'</span><span class=\"token punctuation\" >,</span>\n    number<span class=\"token punctuation\" >:</span> <span class=\"token number\" >2035</span><span class=\"token punctuation\" >,</span>\n    companyAddress<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Lake Street 42'</span><span class=\"token punctuation\" >,</span>\n    companyName<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'SoftLake Co'</span><span class=\"token punctuation\" >,</span>\n    gender<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'M'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span>\n    <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span>\n    <span class=\"token attr-name\" >bordered</span>\n    <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>middle<span class=\"token punctuation\" >\"</span></span>\n    <span class=\"token attr-name\" >scroll</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> x<span class=\"token punctuation\" >:</span> <span class=\"token number\" >1010</span><span class=\"token punctuation\" >,</span> y<span class=\"token punctuation\" >:</span> <span class=\"token number\" >240</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n  <span class=\"token punctuation\" >/></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name',
	      key: 'name', width: 100, fixed: 'left', filters: [{ text: 'Joe', value: 'Joe' }, { text: 'John', value: 'John' }], onFilter: function onFilter(value, record) {
	        return record.name.indexOf(value) === 0;
	      } }, { title: 'Other',
	      children: [{ title: 'Age', dataIndex: 'age',
	        key: 'age', width: 100, sorter: function sorter(a, b) {
	          return a.age - b.age;
	        } }, { title: 'Address', children: [{ title: 'Street', dataIndex: 'street', key: 'street', width: 200 }, { title: 'Block', children: [{ title: 'Building',
	            dataIndex: 'building', key: 'building', width: 50 }, { title: 'Door No.',
	            dataIndex: 'number', key: 'number', width: 100 }] }] }] }, { title: 'Company',
	      children: [{ title: 'Company Address', dataIndex: 'companyAddress', key: 'companyAddress', width: 200 }, { title: 'Company Name', dataIndex: 'companyName', key: 'companyName', width: 200 }] }, { title: 'Gender', dataIndex: 'gender', key: 'gender', width: 60, fixed: 'right' }];var data = [];for (var i = 0; i < 100; i++) {
	      data.push({ key: i, name: 'John Brown', age: Math.ceil(Math.random() * 100), street: 'Lake Park', building: 'C', number: 2035, companyAddress: 'Lake Street 42', companyName: 'SoftLake Co', gender: 'M' });
	    }return _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, bordered: true, size: 'middle', scroll: { x: 1010, y: 240 } });
	  }
	};

/***/ },

/***/ 920:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(30);

	var _table = __webpack_require__(29);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "对某一列数据进行筛选，使用列的 ", ["code", "filters"], " 属性来指定需要筛选菜单的列，", ["code", "onFilter"], " 用于筛选当前数据，", ["code", "filterMultiple"], " 用于指定多选和单选。"], ["p", "对某一列数据进行排序，通过指定列的 ", ["code", "sorter"], " 函数即可启动排序按钮。", ["code", "sorter: function(a, b) { ... }"], "， a、b 为比较的两个列数据。"]],
	    "en-US": [["p", "Use ", ["code", "filters"], " to generate filter menu in columns, ", ["code", "onFilter"], " to determine filtered result, and ", ["code", "filterMultiple"], " to indicate whether it's multiple or single selection."], ["p", "Use ", ["code", "sorter"], " to make a column sortable. ", ["code", "sorter"], " can be a function ", ["code", "function(a, b) { ... }"], " for sorting data locally."]]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "en-US": "Filter and sorter",
	      "zh-CN": "筛选和排序"
	    },
	    "filename": "components/table/demo/head.md",
	    "id": "components-table-demo-head"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Table <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Name'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n  filters<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    text<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Joe'</span><span class=\"token punctuation\" >,</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Joe'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n    text<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim'</span><span class=\"token punctuation\" >,</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n    text<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Submenu'</span><span class=\"token punctuation\" >,</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Submenu'</span><span class=\"token punctuation\" >,</span>\n    children<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      text<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Green'</span><span class=\"token punctuation\" >,</span>\n      value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Green'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n      text<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Black'</span><span class=\"token punctuation\" >,</span>\n      value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Black'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token comment\" spellcheck=\"true\">// specify the condition of filtering result</span>\n  <span class=\"token comment\" spellcheck=\"true\">// here is that finding the name started with `value`</span>\n  onFilter<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >,</span> record<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> record<span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >.</span><span class=\"token function\" >indexOf</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >===</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span>\n  sorter<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>a<span class=\"token punctuation\" >,</span> b<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> a<span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >.</span>length <span class=\"token operator\" >-</span> b<span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >.</span>length<span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Age'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n  sorter<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>a<span class=\"token punctuation\" >,</span> b<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> a<span class=\"token punctuation\" >.</span>age <span class=\"token operator\" >-</span> b<span class=\"token punctuation\" >.</span>age<span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Address'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n  filters<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    text<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London'</span><span class=\"token punctuation\" >,</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n    text<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'New York'</span><span class=\"token punctuation\" >,</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'New York'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  filterMultiple<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n  onFilter<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >,</span> record<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> record<span class=\"token punctuation\" >.</span>address<span class=\"token punctuation\" >.</span><span class=\"token function\" >indexOf</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >===</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span>\n  sorter<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>a<span class=\"token punctuation\" >,</span> b<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> a<span class=\"token punctuation\" >.</span>address<span class=\"token punctuation\" >.</span>length <span class=\"token operator\" >-</span> b<span class=\"token punctuation\" >.</span>address<span class=\"token punctuation\" >.</span>length<span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> data <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'1'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'John Brown'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'New York No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'2'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim Green'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >42</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'3'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Joe Black'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'4'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim Red'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London No. 2 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span>pagination<span class=\"token punctuation\" >,</span> filters<span class=\"token punctuation\" >,</span> sorter<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'params'</span><span class=\"token punctuation\" >,</span> pagination<span class=\"token punctuation\" >,</span> filters<span class=\"token punctuation\" >,</span> sorter<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span> <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>onChange<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name', filters: [{
	        text: 'Joe', value: 'Joe' }, { text: 'Jim',
	        value: 'Jim' }, { text: 'Submenu', value: 'Submenu', children: [{
	          text: 'Green',
	          value: 'Green' }, {
	          text: 'Black', value: 'Black' }] }],
	      // specify the condition of filtering result
	      // here is that finding the name started with `value`
	      onFilter: function onFilter(value, record) {
	        return record.name.indexOf(value) === 0;
	      }, sorter: function sorter(a, b) {
	        return a.name.length - b.name.length;
	      } }, { title: 'Age', dataIndex: 'age',
	      sorter: function sorter(a, b) {
	        return a.age - b.age;
	      } }, { title: 'Address', dataIndex: 'address', filters: [{ text: 'London', value: 'London' }, { text: 'New York', value: 'New York' }], filterMultiple: false, onFilter: function onFilter(value, record) {
	        return record.address.indexOf(value) === 0;
	      },
	      sorter: function sorter(a, b) {
	        return a.address.length - b.address.length;
	      } }];var data = [{ key: '1', name: 'John Brown', age: 32,
	      address: 'New York No. 1 Lake Park' }, { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' }, { key: '3', name: 'Joe Black',
	      age: 32, address: 'Sidney No. 1 Lake Park' }, { key: '4', name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' }];function onChange(pagination, filters, sorter) {
	      console.log('params', pagination, filters, sorter);
	    }return _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, onChange: onChange });
	  }
	};

/***/ },

/***/ 921:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(30);

	var _table = __webpack_require__(29);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "传入 pagination 为 false 即可。此时表格将完整显示 dataSource 内的数据，不进行任何分页。"]],
	    "en-US": [["p", "Set ", ["code", "pagination={false}"], ", then no data paging and pagination will be shown."]]
	  },
	  "meta": {
	    "order": 8,
	    "title": {
	      "en-US": "No pagination",
	      "zh-CN": "不显示分页"
	    },
	    "filename": "components/table/demo/nopagination.md",
	    "id": "components-table-demo-nopagination"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Table <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Name'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Age'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Address'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> data <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'1'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'John Brown'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'New York No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'2'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim Green'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >42</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'3'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Joe Black'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span> <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >pagination</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token boolean\" >false</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name' }, { title: 'Age', dataIndex: 'age' }, { title: 'Address', dataIndex: 'address' }];var data = [{ key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' }, { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' }, { key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park' }];return _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, pagination: false });
	  }
	};

/***/ },

/***/ 922:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(30);

	var _table = __webpack_require__(29);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "数据项较多时显示分页。"]],
	    "en-US": [["p", "when use pagination in table."]]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "en-US": "pagination",
	      "zh-CN": "分页"
	    },
	    "filename": "components/table/demo/paging.md",
	    "id": "components-table-demo-paging"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Table <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Name'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n  render<span class=\"token punctuation\" >:</span> text <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>text<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Age'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Address'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> data <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >for</span> <span class=\"token punctuation\" >(</span><span class=\"token keyword\" >let</span> i <span class=\"token operator\" >=</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span> i <span class=\"token operator\" >&lt;</span> <span class=\"token number\" >46</span><span class=\"token punctuation\" >;</span> i<span class=\"token operator\" >++</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  data<span class=\"token punctuation\" >.</span><span class=\"token function\" >push</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n    key<span class=\"token punctuation\" >:</span> i<span class=\"token punctuation\" >,</span>\n    name<span class=\"token punctuation\" >:</span> <span class=\"token template-string\" ><span class=\"token string\" >`Edward King </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>i<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >,</span>\n    age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n    address<span class=\"token punctuation\" >:</span> <span class=\"token template-string\" ><span class=\"token string\" >`London, Park Lane no. </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>i<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token keyword\" >const</span> pagination <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n  total<span class=\"token punctuation\" >:</span> data<span class=\"token punctuation\" >.</span>length<span class=\"token punctuation\" >,</span>\n  showSizeChanger<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >,</span>\n  onShowSizeChange<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>current<span class=\"token punctuation\" >,</span> pageSize<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'Current: '</span><span class=\"token punctuation\" >,</span> current<span class=\"token punctuation\" >,</span> <span class=\"token string\" >'; PageSize: '</span><span class=\"token punctuation\" >,</span> pageSize<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  onChange<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>current<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'Current: '</span><span class=\"token punctuation\" >,</span> current<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span> <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >pagination</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>pagination<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name', render: function render(text) {
	        return _react2.default.createElement(
	          'a',
	          { href: '#' },
	          text
	        );
	      } }, { title: 'Age', dataIndex: 'age' }, { title: 'Address', dataIndex: 'address' }];var data = [];for (var i = 0; i < 46; i++) {
	      data.push({ key: i, name: 'Edward King ' + i, age: 32, address: 'London, Park Lane no. ' + i });
	    }var pagination = { total: data.length,
	      showSizeChanger: true, onShowSizeChange: function onShowSizeChange(current, pageSize) {
	        console.log('Current: ', current, '; PageSize: ', pageSize);
	      },
	      onChange: function onChange(current) {
	        console.log('Current: ', current);
	      } };return _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, pagination: pagination });
	  }
	};

/***/ },

/***/ 923:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(30);

	var _table = __webpack_require__(29);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "使用受控属性对筛选和排序状态进行控制。"], ["blockquote", ["ol", ["li", ["p", "columns 中定义了 fileredValue 和 sortOrder 属性即视为受控模式。"]], ["li", ["p", "只支持同时对一列进行排序，请保证只有一列的 sortOrder 属性是生效的。"]], ["li", ["p", "务必指定 ", ["code", "column.key"], "。"]]]]],
	    "en-US": [["p", "Control filters and sorters by ", ["code", "fileredValue"], " and ", ["code", "sortOrder"], "."], ["blockquote", ["ol", ["li", ["p", "Defining ", ["code", "fileredValue"], " or ", ["code", "sortOrder"], " means that it is in the controlled mode."]], ["li", ["p", "Make sure ", ["code", "sortOrder"], " is assigned for only one column."]], ["li", ["p", ["code", "column.key"], " is required."]]]]]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "en-US": "Reset filters and sorters",
	      "zh-CN": "可控的筛选和排序"
	    },
	    "filename": "components/table/demo/reset-filter.md",
	    "id": "components-table-demo-reset-filter"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Table <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> data <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'1'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'John Brown'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'New York No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'2'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim Green'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >42</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'3'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Joe Black'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'4'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim Red'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London No. 2 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> App <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      filteredInfo<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >null</span><span class=\"token punctuation\" >,</span>\n      sortedInfo<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >null</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >handleChange</span><span class=\"token punctuation\" >(</span>pagination<span class=\"token punctuation\" >,</span> filters<span class=\"token punctuation\" >,</span> sorter<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'Various parameters'</span><span class=\"token punctuation\" >,</span> pagination<span class=\"token punctuation\" >,</span> filters<span class=\"token punctuation\" >,</span> sorter<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      filteredInfo<span class=\"token punctuation\" >:</span> filters<span class=\"token punctuation\" >,</span>\n      sortedInfo<span class=\"token punctuation\" >:</span> sorter<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >clearFilters</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    e<span class=\"token punctuation\" >.</span><span class=\"token function\" >preventDefault</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> filteredInfo<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >null</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >clearAll</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    e<span class=\"token punctuation\" >.</span><span class=\"token function\" >preventDefault</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      filteredInfo<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >null</span><span class=\"token punctuation\" >,</span>\n      sortedInfo<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >null</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >setAgeSort</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    e<span class=\"token punctuation\" >.</span><span class=\"token function\" >preventDefault</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      sortedInfo<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n        order<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'descend'</span><span class=\"token punctuation\" >,</span>\n        columnKey<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >let</span> <span class=\"token punctuation\" >{</span> sortedInfo<span class=\"token punctuation\" >,</span> filteredInfo <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >;</span>\n    sortedInfo <span class=\"token operator\" >=</span> sortedInfo <span class=\"token operator\" >||</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    filteredInfo <span class=\"token operator\" >=</span> filteredInfo <span class=\"token operator\" >||</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n      title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Name'</span><span class=\"token punctuation\" >,</span>\n      dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n      key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n      filters<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>\n        <span class=\"token punctuation\" >{</span> text<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Joe'</span><span class=\"token punctuation\" >,</span> value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Joe'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >{</span> text<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim'</span><span class=\"token punctuation\" >,</span> value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n      filteredValue<span class=\"token punctuation\" >:</span> filteredInfo<span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >,</span>\n      onFilter<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >,</span> record<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> record<span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >.</span><span class=\"token function\" >includes</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n      sorter<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>a<span class=\"token punctuation\" >,</span> b<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> a<span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >.</span>length <span class=\"token operator\" >-</span> b<span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >.</span>length<span class=\"token punctuation\" >,</span>\n      sortOrder<span class=\"token punctuation\" >:</span> sortedInfo<span class=\"token punctuation\" >.</span>columnKey <span class=\"token operator\" >===</span> <span class=\"token string\" >'name'</span> <span class=\"token operator\" >&amp;&amp;</span> sortedInfo<span class=\"token punctuation\" >.</span>order<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n      title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Age'</span><span class=\"token punctuation\" >,</span>\n      dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n      key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n      sorter<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>a<span class=\"token punctuation\" >,</span> b<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> a<span class=\"token punctuation\" >.</span>age <span class=\"token operator\" >-</span> b<span class=\"token punctuation\" >.</span>age<span class=\"token punctuation\" >,</span>\n      sortOrder<span class=\"token punctuation\" >:</span> sortedInfo<span class=\"token punctuation\" >.</span>columnKey <span class=\"token operator\" >===</span> <span class=\"token string\" >'age'</span> <span class=\"token operator\" >&amp;&amp;</span> sortedInfo<span class=\"token punctuation\" >.</span>order<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n      title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Address'</span><span class=\"token punctuation\" >,</span>\n      dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n      key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n      filters<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span>\n        <span class=\"token punctuation\" >{</span> text<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London'</span><span class=\"token punctuation\" >,</span> value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >{</span> text<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'New York'</span><span class=\"token punctuation\" >,</span> value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'New York'</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n      filteredValue<span class=\"token punctuation\" >:</span> filteredInfo<span class=\"token punctuation\" >.</span>address<span class=\"token punctuation\" >,</span>\n      onFilter<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >,</span> record<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> record<span class=\"token punctuation\" >.</span>address<span class=\"token punctuation\" >.</span><span class=\"token function\" >includes</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n      sorter<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>a<span class=\"token punctuation\" >,</span> b<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> a<span class=\"token punctuation\" >.</span>address<span class=\"token punctuation\" >.</span>length <span class=\"token operator\" >-</span> b<span class=\"token punctuation\" >.</span>address<span class=\"token punctuation\" >.</span>length<span class=\"token punctuation\" >,</span>\n      sortOrder<span class=\"token punctuation\" >:</span> sortedInfo<span class=\"token punctuation\" >.</span>columnKey <span class=\"token operator\" >===</span> <span class=\"token string\" >'address'</span> <span class=\"token operator\" >&amp;&amp;</span> sortedInfo<span class=\"token punctuation\" >.</span>order<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>table-operations<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>setAgeSort<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Age descending order<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>clearFilters<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Clear filters<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>clearAll<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Clear filters and sorting<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span> <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleChange<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>App</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var data = [{ key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' }, { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' }, { key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park' }, { key: '4',
	      name: 'Jim Red', age: 32,
	      address: 'London No. 2 Lake Park' }];var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return { filteredInfo: null, sortedInfo: null };
	      },
	      handleChange: function handleChange(pagination, filters, sorter) {
	        console.log('Various parameters', pagination, filters, sorter);this.setState({ filteredInfo: filters,
	          sortedInfo: sorter });
	      },
	      clearFilters: function clearFilters(e) {
	        e.preventDefault();this.setState({ filteredInfo: null });
	      },
	      clearAll: function clearAll(e) {
	        e.preventDefault();this.setState({ filteredInfo: null, sortedInfo: null });
	      },
	      setAgeSort: function setAgeSort(e) {
	        e.preventDefault();this.setState({ sortedInfo: { order: 'descend', columnKey: 'age' } });
	      },
	      render: function render() {
	        var _state = this.state,
	            sortedInfo = _state.sortedInfo,
	            filteredInfo = _state.filteredInfo;
	        sortedInfo = sortedInfo || {};
	        filteredInfo = filteredInfo || {};var columns = [{
	          title: 'Name', dataIndex: 'name', key: 'name', filters: [{ text: 'Joe',
	            value: 'Joe' }, { text: 'Jim',
	            value: 'Jim' }], filteredValue: filteredInfo.name, onFilter: function onFilter(value, record) {
	            return record.name.includes(value);
	          }, sorter: function sorter(a, b) {
	            return a.name.length - b.name.length;
	          }, sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order }, { title: 'Age', dataIndex: 'age', key: 'age', sorter: function sorter(a, b) {
	            return a.age - b.age;
	          }, sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order }, { title: 'Address', dataIndex: 'address', key: 'address', filters: [{ text: 'London', value: 'London' }, { text: 'New York', value: 'New York' }], filteredValue: filteredInfo.address, onFilter: function onFilter(value, record) {
	            return record.address.includes(value);
	          }, sorter: function sorter(a, b) {
	            return a.address.length - b.address.length;
	          }, sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order }];return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'table-operations' },
	            _react2.default.createElement(
	              'a',
	              { href: '#', onClick: this.setAgeSort },
	              'Age descending order'
	            ),
	            _react2.default.createElement(
	              'a',
	              { href: '#', onClick: this.clearFilters },
	              'Clear filters'
	            ),
	            _react2.default.createElement(
	              'a',
	              { href: '#', onClick: this.clearAll },
	              'Clear filters and sorting'
	            )
	          ),
	          _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, onChange: this.handleChange })
	        );
	      }
	    });return _react2.default.createElement(App, null);
	  },
	  "style": ".table-operations {\n  font-size: 12px;\n  text-align: right;\n  margin-bottom: 16px;\n}\n\n.table-operations a {\n  margin-left: 8px;\n}",
	  "highlightedStyle": "<span class=\"token selector\" ><span class=\"token class\" >.table-operations</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >font-size</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >12</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >text-align</span><span class=\"token punctuation\" >:</span> right<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >margin-bottom</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >16</span>px<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.table-operations</span> a </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >margin-left</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >8</span>px<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>"
	};

/***/ },

/***/ 924:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(30);

	var _table = __webpack_require__(29);

	var _table2 = _interopRequireDefault(_table);

	var _style4 = __webpack_require__(10);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "选择后进行操作，完成后清空选择，通过 ", ["code", "rowSelection.selectedRowKeys"], " 来控制选中项。"]],
	    "en-US": [["p", "To perform operations and clear selections after selecting some rows, use ", ["code", "rowSelection.selectedRowKeys"], " to control selected rows."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "en-US": "Selection and operation",
	      "zh-CN": "选择和操作"
	    },
	    "filename": "components/table/demo/row-selection-and-operation.md",
	    "id": "components-table-demo-row-selection-and-operation"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Table<span class=\"token punctuation\" >,</span> Button <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Name'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Age'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Address'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> data <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >for</span> <span class=\"token punctuation\" >(</span><span class=\"token keyword\" >let</span> i <span class=\"token operator\" >=</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span> i <span class=\"token operator\" >&lt;</span> <span class=\"token number\" >46</span><span class=\"token punctuation\" >;</span> i<span class=\"token operator\" >++</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  data<span class=\"token punctuation\" >.</span><span class=\"token function\" >push</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n    key<span class=\"token punctuation\" >:</span> i<span class=\"token punctuation\" >,</span>\n    name<span class=\"token punctuation\" >:</span> <span class=\"token template-string\" ><span class=\"token string\" >`Edward King </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>i<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >,</span>\n    age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n    address<span class=\"token punctuation\" >:</span> <span class=\"token template-string\" ><span class=\"token string\" >`London, Park Lane no. </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>i<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token keyword\" >const</span> App <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      selectedRowKeys<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>  <span class=\"token comment\" spellcheck=\"true\">// Check here to configure the default column</span>\n      loading<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >start</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> loading<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// ajax request after empty completing</span>\n    <span class=\"token function\" >setTimeout</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n        selectedRowKeys<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n        loading<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token number\" >1000</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >onSelectChange</span><span class=\"token punctuation\" >(</span>selectedRowKeys<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'selectedRowKeys changed: '</span><span class=\"token punctuation\" >,</span> selectedRowKeys<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> selectedRowKeys <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> <span class=\"token punctuation\" >{</span> loading<span class=\"token punctuation\" >,</span> selectedRowKeys <span class=\"token punctuation\" >}</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >const</span> rowSelection <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n      selectedRowKeys<span class=\"token punctuation\" >,</span>\n      onChange<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>onSelectChange<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >const</span> hasSelected <span class=\"token operator\" >=</span> selectedRowKeys<span class=\"token punctuation\" >.</span>length <span class=\"token operator\" >></span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> marginBottom<span class=\"token punctuation\" >:</span> <span class=\"token number\" >16</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>start<span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >disabled</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token operator\" >!</span>hasSelected<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >loading</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>loading<span class=\"token punctuation\" >}</span></span>\n          <span class=\"token punctuation\" >></span></span>Reload<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> marginLeft<span class=\"token punctuation\" >:</span> <span class=\"token number\" >8</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>hasSelected <span class=\"token operator\" >?</span> <span class=\"token template-string\" ><span class=\"token string\" >`Selected </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>selectedRowKeys<span class=\"token punctuation\" >.</span>length<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" > items`</span></span> <span class=\"token punctuation\" >:</span> <span class=\"token string\" >''</span><span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span> <span class=\"token attr-name\" >rowSelection</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>rowSelection<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>App</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name' }, { title: 'Age', dataIndex: 'age' }, { title: 'Address', dataIndex: 'address' }];var data = [];
	    for (var i = 0; i < 46; i++) {
	      data.push({ key: i, name: 'Edward King ' + i, age: 32, address: 'London, Park Lane no. ' + i });
	    }var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return { selectedRowKeys: [], // Check here to configure the default column
	          loading: false };
	      },
	      start: function start() {
	        var _this = this;

	        this.setState({ loading: true }); // ajax request after empty completing
	        setTimeout(function () {
	          _this.setState({ selectedRowKeys: [], loading: false });
	        }, 1000);
	      },
	      onSelectChange: function onSelectChange(selectedRowKeys) {
	        console.log('selectedRowKeys changed: ', selectedRowKeys);this.setState({ selectedRowKeys: selectedRowKeys });
	      },
	      render: function render() {
	        var _state = this.state,
	            loading = _state.loading,
	            selectedRowKeys = _state.selectedRowKeys;
	        var rowSelection = { selectedRowKeys: selectedRowKeys, onChange: this.onSelectChange };var hasSelected = selectedRowKeys.length > 0;return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { style: { marginBottom: 16 } },
	            _react2.default.createElement(
	              _button2.default,
	              { type: 'primary', onClick: this.start, disabled: !hasSelected, loading: loading },
	              'Reload'
	            ),
	            _react2.default.createElement(
	              'span',
	              { style: { marginLeft: 8 } },
	              hasSelected ? 'Selected ' + selectedRowKeys.length + ' items' : ''
	            )
	          ),
	          _react2.default.createElement(_table2.default, { rowSelection: rowSelection, columns: columns, dataSource: data })
	        );
	      }
	    });return _react2.default.createElement(App, null);
	  }
	};

/***/ },

/***/ 925:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(30);

	var _table = __webpack_require__(29);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "配置选择框的默认属性。"]],
	    "en-US": [["p", "Set props to Checkbox or Radio."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "en-US": "Checkbox props",
	      "zh-CN": "选择框属性"
	    },
	    "filename": "components/table/demo/row-selection-props.md",
	    "id": "components-table-demo-row-selection-props"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Table <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Name'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n  render<span class=\"token punctuation\" >:</span> text <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>text<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Age'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Address'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> data <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'1'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'John Brown'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'New York No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'2'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim Green'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >42</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'3'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Joe Black'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// rowSelection object indicates the need for row selection</span>\n<span class=\"token keyword\" >const</span> rowSelection <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n  getCheckboxProps<span class=\"token punctuation\" >:</span> record <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n    disabled<span class=\"token punctuation\" >:</span> record<span class=\"token punctuation\" >.</span>name <span class=\"token operator\" >===</span> <span class=\"token string\" >'Jim Green'</span><span class=\"token punctuation\" >,</span>    <span class=\"token comment\" spellcheck=\"true\">// Column configuration not to be checked</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span> <span class=\"token attr-name\" >rowSelection</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>rowSelection<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name', render: function render(text) {
	        return _react2.default.createElement(
	          'a',
	          { href: '#' },
	          text
	        );
	      } }, { title: 'Age', dataIndex: 'age' }, { title: 'Address', dataIndex: 'address' }];var data = [{ key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' }, { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' }, { key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park' }];
	    // rowSelection object indicates the need for row selection
	    var rowSelection = { getCheckboxProps: function getCheckboxProps(record) {
	        return { disabled: record.name === 'Jim Green'
	        };
	      } };return _react2.default.createElement(_table2.default, { rowSelection: rowSelection, columns: columns, dataSource: data });
	  }
	};

/***/ },

/***/ 926:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(30);

	var _table = __webpack_require__(29);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "第一列是联动的选择框。"]],
	    "en-US": [["p", "Rows can be selectable by making first column as a selectable column."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "en-US": "selection",
	      "zh-CN": "可选择"
	    },
	    "filename": "components/table/demo/row-selection.md",
	    "id": "components-table-demo-row-selection"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Table <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Name'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n  render<span class=\"token punctuation\" >:</span> text <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >{</span>text<span class=\"token punctuation\" >}</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Age'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Address'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> data <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'1'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'John Brown'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'New York No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'2'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim Green'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >42</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'3'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Joe Black'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// rowSelection object indicates the need for row selection</span>\n<span class=\"token keyword\" >const</span> rowSelection <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n  onChange<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>selectedRowKeys<span class=\"token punctuation\" >,</span> selectedRows<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token template-string\" ><span class=\"token string\" >`selectedRowKeys: </span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>selectedRowKeys<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" >`</span></span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'selectedRows: '</span><span class=\"token punctuation\" >,</span> selectedRows<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  onSelect<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>record<span class=\"token punctuation\" >,</span> selected<span class=\"token punctuation\" >,</span> selectedRows<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>record<span class=\"token punctuation\" >,</span> selected<span class=\"token punctuation\" >,</span> selectedRows<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  onSelectAll<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>selected<span class=\"token punctuation\" >,</span> selectedRows<span class=\"token punctuation\" >,</span> changeRows<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>selected<span class=\"token punctuation\" >,</span> selectedRows<span class=\"token punctuation\" >,</span> changeRows<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span> <span class=\"token attr-name\" >rowSelection</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>rowSelection<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name', render: function render(text) {
	        return _react2.default.createElement(
	          'a',
	          { href: '#' },
	          text
	        );
	      } }, { title: 'Age', dataIndex: 'age' }, { title: 'Address', dataIndex: 'address' }];var data = [{ key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' }, { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' }, { key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park' }]; // rowSelection object indicates the need for row selection
	    var rowSelection = { onChange: function onChange(selectedRowKeys, selectedRows) {
	        console.log('selectedRowKeys: ' + selectedRowKeys, 'selectedRows: ', selectedRows);
	      }, onSelect: function onSelect(record, selected, selectedRows) {
	        console.log(record, selected, selectedRows);
	      }, onSelectAll: function onSelectAll(selected, selectedRows, changeRows) {
	        console.log(selected, selectedRows, changeRows);
	      } };return _react2.default.createElement(_table2.default, { rowSelection: rowSelection, columns: columns, dataSource: data });
	  }
	};

/***/ },

/***/ 927:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(30);

	var _table = __webpack_require__(29);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "两种紧凑型的列表，小型列表只用于对话框内。"]],
	    "en-US": [["p", "Two compacted table size: ", ["code", "middle"], " and ", ["code", "small"], ", ", ["code", "small"], " size is used in Modal only."]]
	  },
	  "meta": {
	    "order": 9,
	    "title": {
	      "en-US": "size",
	      "zh-CN": "紧凑型"
	    },
	    "filename": "components/table/demo/size.md",
	    "id": "components-table-demo-size"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Table <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Name'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Age'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Address'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'address'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> data <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'1'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'John Brown'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'New York No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'2'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Jim Green'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >42</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'London No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  key<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'3'</span><span class=\"token punctuation\" >,</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Joe Black'</span><span class=\"token punctuation\" >,</span>\n  age<span class=\"token punctuation\" >:</span> <span class=\"token number\" >32</span><span class=\"token punctuation\" >,</span>\n  address<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span><span class=\"token punctuation\" >></span></span>Middle size table<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span> <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>middle<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span><span class=\"token punctuation\" >></span></span>Small size table<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span> <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>data<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var columns = [{ title: 'Name', dataIndex: 'name' }, { title: 'Age', dataIndex: 'age' }, { title: 'Address',
	      dataIndex: 'address' }];var data = [{ key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' }, { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' }, {
	      key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park' }];return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h4',
	        null,
	        'Middle size table'
	      ),
	      _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, size: 'middle' }),
	      _react2.default.createElement(
	        'h4',
	        null,
	        'Small size table'
	      ),
	      _react2.default.createElement(_table2.default, { columns: columns, dataSource: data, size: 'small' })
	    );
	  },
	  "style": "#components-table-demo-size h4 { margin-bottom: 16px; }"
	};

/***/ },

/***/ 1187:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'ajax': __webpack_require__(906),
	    'basic': __webpack_require__(907),
	    'bordered': __webpack_require__(908),
	    'colspan-rowspan': __webpack_require__(909),
	    'custom-filter-panel': __webpack_require__(910),
	    'dynamic-settings': __webpack_require__(911),
	    'edit-cell': __webpack_require__(912),
	    'edit-row': __webpack_require__(913),
	    'expand-children': __webpack_require__(914),
	    'expand': __webpack_require__(915),
	    'fixed-columns-header': __webpack_require__(916),
	    'fixed-columns': __webpack_require__(917),
	    'fixed-header': __webpack_require__(918),
	    'grouping-columns': __webpack_require__(919),
	    'head': __webpack_require__(920),
	    'nopagination': __webpack_require__(921),
	    'paging': __webpack_require__(922),
	    'reset-filter': __webpack_require__(923),
	    'row-selection-and-operation': __webpack_require__(924),
	    'row-selection-props': __webpack_require__(925),
	    'row-selection': __webpack_require__(926),
	    'size': __webpack_require__(927),
	}

/***/ },

/***/ 1867:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * Reqwest! A general purpose XHR connection manager
	  * license MIT (c) Dustin Diaz 2015
	  * https://github.com/ded/reqwest
	  */

	!function (name, context, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else context[name] = definition()
	}('reqwest', this, function () {

	  var context = this

	  if ('window' in context) {
	    var doc = document
	      , byTag = 'getElementsByTagName'
	      , head = doc[byTag]('head')[0]
	  } else {
	    var XHR2
	    try {
	      XHR2 = __webpack_require__(1879)
	    } catch (ex) {
	      throw new Error('Peer dependency `xhr2` required! Please npm install xhr2')
	    }
	  }


	  var httpsRe = /^http/
	    , protocolRe = /(^\w+):\/\//
	    , twoHundo = /^(20\d|1223)$/ //http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	    , readyState = 'readyState'
	    , contentType = 'Content-Type'
	    , requestedWith = 'X-Requested-With'
	    , uniqid = 0
	    , callbackPrefix = 'reqwest_' + (+new Date())
	    , lastValue // data stored by the most recent JSONP callback
	    , xmlHttpRequest = 'XMLHttpRequest'
	    , xDomainRequest = 'XDomainRequest'
	    , noop = function () {}

	    , isArray = typeof Array.isArray == 'function'
	        ? Array.isArray
	        : function (a) {
	            return a instanceof Array
	          }

	    , defaultHeaders = {
	          'contentType': 'application/x-www-form-urlencoded'
	        , 'requestedWith': xmlHttpRequest
	        , 'accept': {
	              '*':  'text/javascript, text/html, application/xml, text/xml, */*'
	            , 'xml':  'application/xml, text/xml'
	            , 'html': 'text/html'
	            , 'text': 'text/plain'
	            , 'json': 'application/json, text/javascript'
	            , 'js':   'application/javascript, text/javascript'
	          }
	      }

	    , xhr = function(o) {
	        // is it x-domain
	        if (o['crossOrigin'] === true) {
	          var xhr = context[xmlHttpRequest] ? new XMLHttpRequest() : null
	          if (xhr && 'withCredentials' in xhr) {
	            return xhr
	          } else if (context[xDomainRequest]) {
	            return new XDomainRequest()
	          } else {
	            throw new Error('Browser does not support cross-origin requests')
	          }
	        } else if (context[xmlHttpRequest]) {
	          return new XMLHttpRequest()
	        } else if (XHR2) {
	          return new XHR2()
	        } else {
	          return new ActiveXObject('Microsoft.XMLHTTP')
	        }
	      }
	    , globalSetupOptions = {
	        dataFilter: function (data) {
	          return data
	        }
	      }

	  function succeed(r) {
	    var protocol = protocolRe.exec(r.url)
	    protocol = (protocol && protocol[1]) || context.location.protocol
	    return httpsRe.test(protocol) ? twoHundo.test(r.request.status) : !!r.request.response
	  }

	  function handleReadyState(r, success, error) {
	    return function () {
	      // use _aborted to mitigate against IE err c00c023f
	      // (can't read props on aborted request objects)
	      if (r._aborted) return error(r.request)
	      if (r._timedOut) return error(r.request, 'Request is aborted: timeout')
	      if (r.request && r.request[readyState] == 4) {
	        r.request.onreadystatechange = noop
	        if (succeed(r)) success(r.request)
	        else
	          error(r.request)
	      }
	    }
	  }

	  function setHeaders(http, o) {
	    var headers = o['headers'] || {}
	      , h

	    headers['Accept'] = headers['Accept']
	      || defaultHeaders['accept'][o['type']]
	      || defaultHeaders['accept']['*']

	    var isAFormData = typeof FormData !== 'undefined' && (o['data'] instanceof FormData);
	    // breaks cross-origin requests with legacy browsers
	    if (!o['crossOrigin'] && !headers[requestedWith]) headers[requestedWith] = defaultHeaders['requestedWith']
	    if (!headers[contentType] && !isAFormData) headers[contentType] = o['contentType'] || defaultHeaders['contentType']
	    for (h in headers)
	      headers.hasOwnProperty(h) && 'setRequestHeader' in http && http.setRequestHeader(h, headers[h])
	  }

	  function setCredentials(http, o) {
	    if (typeof o['withCredentials'] !== 'undefined' && typeof http.withCredentials !== 'undefined') {
	      http.withCredentials = !!o['withCredentials']
	    }
	  }

	  function generalCallback(data) {
	    lastValue = data
	  }

	  function urlappend (url, s) {
	    return url + (/\?/.test(url) ? '&' : '?') + s
	  }

	  function handleJsonp(o, fn, err, url) {
	    var reqId = uniqid++
	      , cbkey = o['jsonpCallback'] || 'callback' // the 'callback' key
	      , cbval = o['jsonpCallbackName'] || reqwest.getcallbackPrefix(reqId)
	      , cbreg = new RegExp('((^|\\?|&)' + cbkey + ')=([^&]+)')
	      , match = url.match(cbreg)
	      , script = doc.createElement('script')
	      , loaded = 0
	      , isIE10 = navigator.userAgent.indexOf('MSIE 10.0') !== -1

	    if (match) {
	      if (match[3] === '?') {
	        url = url.replace(cbreg, '$1=' + cbval) // wildcard callback func name
	      } else {
	        cbval = match[3] // provided callback func name
	      }
	    } else {
	      url = urlappend(url, cbkey + '=' + cbval) // no callback details, add 'em
	    }

	    context[cbval] = generalCallback

	    script.type = 'text/javascript'
	    script.src = url
	    script.async = true
	    if (typeof script.onreadystatechange !== 'undefined' && !isIE10) {
	      // need this for IE due to out-of-order onreadystatechange(), binding script
	      // execution to an event listener gives us control over when the script
	      // is executed. See http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
	      script.htmlFor = script.id = '_reqwest_' + reqId
	    }

	    script.onload = script.onreadystatechange = function () {
	      if ((script[readyState] && script[readyState] !== 'complete' && script[readyState] !== 'loaded') || loaded) {
	        return false
	      }
	      script.onload = script.onreadystatechange = null
	      script.onclick && script.onclick()
	      // Call the user callback with the last value stored and clean up values and scripts.
	      fn(lastValue)
	      lastValue = undefined
	      head.removeChild(script)
	      loaded = 1
	    }

	    // Add the script to the DOM head
	    head.appendChild(script)

	    // Enable JSONP timeout
	    return {
	      abort: function () {
	        script.onload = script.onreadystatechange = null
	        err({}, 'Request is aborted: timeout', {})
	        lastValue = undefined
	        head.removeChild(script)
	        loaded = 1
	      }
	    }
	  }

	  function getRequest(fn, err) {
	    var o = this.o
	      , method = (o['method'] || 'GET').toUpperCase()
	      , url = typeof o === 'string' ? o : o['url']
	      // convert non-string objects to query-string form unless o['processData'] is false
	      , data = (o['processData'] !== false && o['data'] && typeof o['data'] !== 'string')
	        ? reqwest.toQueryString(o['data'])
	        : (o['data'] || null)
	      , http
	      , sendWait = false

	    // if we're working on a GET request and we have data then we should append
	    // query string to end of URL and not post data
	    if ((o['type'] == 'jsonp' || method == 'GET') && data) {
	      url = urlappend(url, data)
	      data = null
	    }

	    if (o['type'] == 'jsonp') return handleJsonp(o, fn, err, url)

	    // get the xhr from the factory if passed
	    // if the factory returns null, fall-back to ours
	    http = (o.xhr && o.xhr(o)) || xhr(o)

	    http.open(method, url, o['async'] === false ? false : true)
	    setHeaders(http, o)
	    setCredentials(http, o)
	    if (context[xDomainRequest] && http instanceof context[xDomainRequest]) {
	        http.onload = fn
	        http.onerror = err
	        // NOTE: see
	        // http://social.msdn.microsoft.com/Forums/en-US/iewebdevelopment/thread/30ef3add-767c-4436-b8a9-f1ca19b4812e
	        http.onprogress = function() {}
	        sendWait = true
	    } else {
	      http.onreadystatechange = handleReadyState(this, fn, err)
	    }
	    o['before'] && o['before'](http)
	    if (sendWait) {
	      setTimeout(function () {
	        http.send(data)
	      }, 200)
	    } else {
	      http.send(data)
	    }
	    return http
	  }

	  function Reqwest(o, fn) {
	    this.o = o
	    this.fn = fn

	    init.apply(this, arguments)
	  }

	  function setType(header) {
	    // json, javascript, text/plain, text/html, xml
	    if (header === null) return undefined; //In case of no content-type.
	    if (header.match('json')) return 'json'
	    if (header.match('javascript')) return 'js'
	    if (header.match('text')) return 'html'
	    if (header.match('xml')) return 'xml'
	  }

	  function init(o, fn) {

	    this.url = typeof o == 'string' ? o : o['url']
	    this.timeout = null

	    // whether request has been fulfilled for purpose
	    // of tracking the Promises
	    this._fulfilled = false
	    // success handlers
	    this._successHandler = function(){}
	    this._fulfillmentHandlers = []
	    // error handlers
	    this._errorHandlers = []
	    // complete (both success and fail) handlers
	    this._completeHandlers = []
	    this._erred = false
	    this._responseArgs = {}

	    var self = this

	    fn = fn || function () {}

	    if (o['timeout']) {
	      this.timeout = setTimeout(function () {
	        timedOut()
	      }, o['timeout'])
	    }

	    if (o['success']) {
	      this._successHandler = function () {
	        o['success'].apply(o, arguments)
	      }
	    }

	    if (o['error']) {
	      this._errorHandlers.push(function () {
	        o['error'].apply(o, arguments)
	      })
	    }

	    if (o['complete']) {
	      this._completeHandlers.push(function () {
	        o['complete'].apply(o, arguments)
	      })
	    }

	    function complete (resp) {
	      o['timeout'] && clearTimeout(self.timeout)
	      self.timeout = null
	      while (self._completeHandlers.length > 0) {
	        self._completeHandlers.shift()(resp)
	      }
	    }

	    function success (resp) {
	      var type = o['type'] || resp && setType(resp.getResponseHeader('Content-Type')) // resp can be undefined in IE
	      resp = (type !== 'jsonp') ? self.request : resp
	      // use global data filter on response text
	      var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type)
	        , r = filteredResponse
	      try {
	        resp.responseText = r
	      } catch (e) {
	        // can't assign this in IE<=8, just ignore
	      }
	      if (r) {
	        switch (type) {
	        case 'json':
	          try {
	            resp = context.JSON ? context.JSON.parse(r) : eval('(' + r + ')')
	          } catch (err) {
	            return error(resp, 'Could not parse JSON in response', err)
	          }
	          break
	        case 'js':
	          resp = eval(r)
	          break
	        case 'html':
	          resp = r
	          break
	        case 'xml':
	          resp = resp.responseXML
	              && resp.responseXML.parseError // IE trololo
	              && resp.responseXML.parseError.errorCode
	              && resp.responseXML.parseError.reason
	            ? null
	            : resp.responseXML
	          break
	        }
	      }

	      self._responseArgs.resp = resp
	      self._fulfilled = true
	      fn(resp)
	      self._successHandler(resp)
	      while (self._fulfillmentHandlers.length > 0) {
	        resp = self._fulfillmentHandlers.shift()(resp)
	      }

	      complete(resp)
	    }

	    function timedOut() {
	      self._timedOut = true
	      self.request.abort()
	    }

	    function error(resp, msg, t) {
	      resp = self.request
	      self._responseArgs.resp = resp
	      self._responseArgs.msg = msg
	      self._responseArgs.t = t
	      self._erred = true
	      while (self._errorHandlers.length > 0) {
	        self._errorHandlers.shift()(resp, msg, t)
	      }
	      complete(resp)
	    }

	    this.request = getRequest.call(this, success, error)
	  }

	  Reqwest.prototype = {
	    abort: function () {
	      this._aborted = true
	      this.request.abort()
	    }

	  , retry: function () {
	      init.call(this, this.o, this.fn)
	    }

	    /**
	     * Small deviation from the Promises A CommonJs specification
	     * http://wiki.commonjs.org/wiki/Promises/A
	     */

	    /**
	     * `then` will execute upon successful requests
	     */
	  , then: function (success, fail) {
	      success = success || function () {}
	      fail = fail || function () {}
	      if (this._fulfilled) {
	        this._responseArgs.resp = success(this._responseArgs.resp)
	      } else if (this._erred) {
	        fail(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
	      } else {
	        this._fulfillmentHandlers.push(success)
	        this._errorHandlers.push(fail)
	      }
	      return this
	    }

	    /**
	     * `always` will execute whether the request succeeds or fails
	     */
	  , always: function (fn) {
	      if (this._fulfilled || this._erred) {
	        fn(this._responseArgs.resp)
	      } else {
	        this._completeHandlers.push(fn)
	      }
	      return this
	    }

	    /**
	     * `fail` will execute when the request fails
	     */
	  , fail: function (fn) {
	      if (this._erred) {
	        fn(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
	      } else {
	        this._errorHandlers.push(fn)
	      }
	      return this
	    }
	  , 'catch': function (fn) {
	      return this.fail(fn)
	    }
	  }

	  function reqwest(o, fn) {
	    return new Reqwest(o, fn)
	  }

	  // normalize newline variants according to spec -> CRLF
	  function normalize(s) {
	    return s ? s.replace(/\r?\n/g, '\r\n') : ''
	  }

	  function serial(el, cb) {
	    var n = el.name
	      , t = el.tagName.toLowerCase()
	      , optCb = function (o) {
	          // IE gives value="" even where there is no value attribute
	          // 'specified' ref: http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-862529273
	          if (o && !o['disabled'])
	            cb(n, normalize(o['attributes']['value'] && o['attributes']['value']['specified'] ? o['value'] : o['text']))
	        }
	      , ch, ra, val, i

	    // don't serialize elements that are disabled or without a name
	    if (el.disabled || !n) return

	    switch (t) {
	    case 'input':
	      if (!/reset|button|image|file/i.test(el.type)) {
	        ch = /checkbox/i.test(el.type)
	        ra = /radio/i.test(el.type)
	        val = el.value
	        // WebKit gives us "" instead of "on" if a checkbox has no value, so correct it here
	        ;(!(ch || ra) || el.checked) && cb(n, normalize(ch && val === '' ? 'on' : val))
	      }
	      break
	    case 'textarea':
	      cb(n, normalize(el.value))
	      break
	    case 'select':
	      if (el.type.toLowerCase() === 'select-one') {
	        optCb(el.selectedIndex >= 0 ? el.options[el.selectedIndex] : null)
	      } else {
	        for (i = 0; el.length && i < el.length; i++) {
	          el.options[i].selected && optCb(el.options[i])
	        }
	      }
	      break
	    }
	  }

	  // collect up all form elements found from the passed argument elements all
	  // the way down to child elements; pass a '<form>' or form fields.
	  // called with 'this'=callback to use for serial() on each element
	  function eachFormElement() {
	    var cb = this
	      , e, i
	      , serializeSubtags = function (e, tags) {
	          var i, j, fa
	          for (i = 0; i < tags.length; i++) {
	            fa = e[byTag](tags[i])
	            for (j = 0; j < fa.length; j++) serial(fa[j], cb)
	          }
	        }

	    for (i = 0; i < arguments.length; i++) {
	      e = arguments[i]
	      if (/input|select|textarea/i.test(e.tagName)) serial(e, cb)
	      serializeSubtags(e, [ 'input', 'select', 'textarea' ])
	    }
	  }

	  // standard query string style serialization
	  function serializeQueryString() {
	    return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
	  }

	  // { 'name': 'value', ... } style serialization
	  function serializeHash() {
	    var hash = {}
	    eachFormElement.apply(function (name, value) {
	      if (name in hash) {
	        hash[name] && !isArray(hash[name]) && (hash[name] = [hash[name]])
	        hash[name].push(value)
	      } else hash[name] = value
	    }, arguments)
	    return hash
	  }

	  // [ { name: 'name', value: 'value' }, ... ] style serialization
	  reqwest.serializeArray = function () {
	    var arr = []
	    eachFormElement.apply(function (name, value) {
	      arr.push({name: name, value: value})
	    }, arguments)
	    return arr
	  }

	  reqwest.serialize = function () {
	    if (arguments.length === 0) return ''
	    var opt, fn
	      , args = Array.prototype.slice.call(arguments, 0)

	    opt = args.pop()
	    opt && opt.nodeType && args.push(opt) && (opt = null)
	    opt && (opt = opt.type)

	    if (opt == 'map') fn = serializeHash
	    else if (opt == 'array') fn = reqwest.serializeArray
	    else fn = serializeQueryString

	    return fn.apply(null, args)
	  }

	  reqwest.toQueryString = function (o, trad) {
	    var prefix, i
	      , traditional = trad || false
	      , s = []
	      , enc = encodeURIComponent
	      , add = function (key, value) {
	          // If value is a function, invoke it and return its value
	          value = ('function' === typeof value) ? value() : (value == null ? '' : value)
	          s[s.length] = enc(key) + '=' + enc(value)
	        }
	    // If an array was passed in, assume that it is an array of form elements.
	    if (isArray(o)) {
	      for (i = 0; o && i < o.length; i++) add(o[i]['name'], o[i]['value'])
	    } else {
	      // If traditional, encode the "old" way (the way 1.3.2 or older
	      // did it), otherwise encode params recursively.
	      for (prefix in o) {
	        if (o.hasOwnProperty(prefix)) buildParams(prefix, o[prefix], traditional, add)
	      }
	    }

	    // spaces should be + according to spec
	    return s.join('&').replace(/%20/g, '+')
	  }

	  function buildParams(prefix, obj, traditional, add) {
	    var name, i, v
	      , rbracket = /\[\]$/

	    if (isArray(obj)) {
	      // Serialize array item.
	      for (i = 0; obj && i < obj.length; i++) {
	        v = obj[i]
	        if (traditional || rbracket.test(prefix)) {
	          // Treat each array item as a scalar.
	          add(prefix, v)
	        } else {
	          buildParams(prefix + '[' + (typeof v === 'object' ? i : '') + ']', v, traditional, add)
	        }
	      }
	    } else if (obj && obj.toString() === '[object Object]') {
	      // Serialize object item.
	      for (name in obj) {
	        buildParams(prefix + '[' + name + ']', obj[name], traditional, add)
	      }

	    } else {
	      // Serialize scalar item.
	      add(prefix, obj)
	    }
	  }

	  reqwest.getcallbackPrefix = function () {
	    return callbackPrefix
	  }

	  // jQuery and Zepto compatibility, differences can be remapped here so you can call
	  // .ajax.compat(options, callback)
	  reqwest.compat = function (o, fn) {
	    if (o) {
	      o['type'] && (o['method'] = o['type']) && delete o['type']
	      o['dataType'] && (o['type'] = o['dataType'])
	      o['jsonpCallback'] && (o['jsonpCallbackName'] = o['jsonpCallback']) && delete o['jsonpCallback']
	      o['jsonp'] && (o['jsonpCallback'] = o['jsonp'])
	    }
	    return new Reqwest(o, fn)
	  }

	  reqwest.ajaxSetup = function (options) {
	    options = options || {}
	    for (var k in options) {
	      globalSetupOptions[k] = options[k]
	    }
	  }

	  return reqwest
	});


/***/ },

/***/ 1879:
/***/ function(module, exports) {

	/* (ignored) */

/***/ }

});