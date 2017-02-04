webpackJsonp([0,211],{

/***/ 1021:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "这个例子通过简单的 ajax 读取方式，演示了如何从服务端读取并展现数据，具有筛选、排序等功能以及页面 loading 效果。开发者可以自行接入其他数据处理方式。"
	      ],
	      [
	        "p",
	        "另外，本例也展示了筛选排序功能如何交给服务端实现，列不需要指定具体的 ",
	        [
	          "code",
	          "onFilter"
	        ],
	        " 和 ",
	        [
	          "code",
	          "sorter"
	        ],
	        " 函数，而是在把筛选和排序的参数发到服务端来处理。"
	      ],
	      [
	        "p",
	        [
	          "strong",
	          "注意，此示例使用 ",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://randomuser.me"
	            },
	            "模拟接口"
	          ],
	          "，展示数据可能不准确，请打开网络面板查看请求。"
	        ]
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "This example shows how to fetch and present data from remote server, and how to implement filtering and sorting in server side by sending related parameters to server."
	      ],
	      [
	        "p",
	        [
	          "strong",
	          "Note, this example use ",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://randomuser.me"
	            },
	            "Mock API"
	          ],
	          " that you can look up in Network Console."
	        ]
	      ]
	    ]
	  },
	  "meta": {
	    "order": 9,
	    "title": {
	      "en-US": "Ajax",
	      "zh-CN": "远程加载数据"
	    },
	    "filename": "components/table/demo/ajax.md",
	    "id": "components-table-demo-ajax"
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
	      "highlighted": "import { Table } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport reqwest from <span class=\"token string\">'reqwest'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  sorter<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> name <span class=\"token operator\">=</span><span class=\"token operator\">></span> `${name<span class=\"token punctuation\">.</span>first} ${name<span class=\"token punctuation\">.</span>last}`<span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token string\">'20%'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Gender'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'gender'</span><span class=\"token punctuation\">,</span>\n  filters<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    { text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Male'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'male'</span> }<span class=\"token punctuation\">,</span>\n    { text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Female'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'female'</span> }<span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token string\">'20%'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Email'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'email'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Test <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      data<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      pagination<span class=\"token punctuation\">:</span> {}<span class=\"token punctuation\">,</span>\n      loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleTableChange</span><span class=\"token punctuation\">(</span>pagination<span class=\"token punctuation\">,</span> filters<span class=\"token punctuation\">,</span> sorter<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> pager <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>pagination<span class=\"token comment\" spellcheck=\"true\">;</span>\n    pager<span class=\"token punctuation\">.</span>current <span class=\"token operator\">=</span> pagination<span class=\"token punctuation\">.</span>current<span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      pagination<span class=\"token punctuation\">:</span> pager<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">fetch</span><span class=\"token punctuation\">(</span>{\n      results<span class=\"token punctuation\">:</span> pagination<span class=\"token punctuation\">.</span>pageSize<span class=\"token punctuation\">,</span>\n      page<span class=\"token punctuation\">:</span> pagination<span class=\"token punctuation\">.</span>current<span class=\"token punctuation\">,</span>\n      sortField<span class=\"token punctuation\">:</span> sorter<span class=\"token punctuation\">.</span>field<span class=\"token punctuation\">,</span>\n      sortOrder<span class=\"token punctuation\">:</span> sorter<span class=\"token punctuation\">.</span>order<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>filters<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">fetch</span><span class=\"token punctuation\">(</span>params <span class=\"token operator\">=</span> {}<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'params:'</span><span class=\"token punctuation\">,</span> params<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token function\">reqwest</span><span class=\"token punctuation\">(</span>{\n      url<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://randomuser.me/api'</span><span class=\"token punctuation\">,</span>\n      method<span class=\"token punctuation\">:</span> <span class=\"token string\">'get'</span><span class=\"token punctuation\">,</span>\n      data<span class=\"token punctuation\">:</span> {\n        results<span class=\"token punctuation\">:</span> <span class=\"token number\">10</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>params<span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">,</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'json'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">then</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">const</span> pagination <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>pagination<span class=\"token comment\" spellcheck=\"true\">;</span>\n      <span class=\"token operator\">/</span><span class=\"token operator\">/</span> Read total count from server\n      <span class=\"token operator\">/</span><span class=\"token operator\">/</span> pagination<span class=\"token punctuation\">.</span>total <span class=\"token operator\">=</span> data<span class=\"token punctuation\">.</span>totalCount<span class=\"token comment\" spellcheck=\"true\">;</span>\n      pagination<span class=\"token punctuation\">.</span>total <span class=\"token operator\">=</span> <span class=\"token number\">200</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n        loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        data<span class=\"token punctuation\">:</span> data<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">,</span>\n        pagination<span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">fetch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Table columns<span class=\"token operator\">=</span>{columns}\n        rowKey<span class=\"token operator\">=</span>{record <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>registered}\n        dataSource<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data}\n        pagination<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>pagination}\n        loading<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading}\n        onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleTableChange}\n      <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Test <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	  var _antd = __webpack_require__(3);

	  var _reqwest = __webpack_require__(1923);

	  var _reqwest2 = _interopRequireDefault(_reqwest);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	  var columns = [{
	    title: 'Name',
	    dataIndex: 'name',
	    sorter: true,
	    render: function render(name) {
	      return name.first + " " + name.last;
	    },
	    width: '20%'
	  }, {
	    title: 'Gender',
	    dataIndex: 'gender',
	    filters: [{
	      text: 'Male',
	      value: 'male'
	    }, {
	      text: 'Female',
	      value: 'female'
	    }],
	    width: '20%'
	  }, {
	    title: 'Email',
	    dataIndex: 'email'
	  }];
	  var Test = React.createClass({
	    displayName: "Test",
	    getInitialState: function getInitialState() {
	      return {
	        data: [],
	        pagination: {},
	        loading: false
	      };
	    },
	    handleTableChange: function handleTableChange(pagination, filters, sorter) {
	      var pager = this.state.pagination;
	      pager.current = pagination.current;
	      this.setState({
	        pagination: pager
	      });
	      this.fetch(_extends({
	        results: pagination.pageSize,
	        page: pagination.current,
	        sortField: sorter.field,
	        sortOrder: sorter.order
	      }, filters));
	    },
	    fetch: function fetch() {
	      var _this = this;

	      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      console.log('params:', params);
	      this.setState({
	        loading: true
	      });
	      (0, _reqwest2.default)({
	        url: 'https://randomuser.me/api',
	        method: 'get',
	        data: _extends({
	          results: 10
	        }, params),
	        type: 'json'
	      }).then(function (data) {
	        var pagination = _this.state.pagination; // Read total count from server
	        // pagination.total = data.totalCount;

	        pagination.total = 200;

	        _this.setState({
	          loading: false,
	          data: data.results,
	          pagination: pagination
	        });
	      });
	    },
	    componentDidMount: function componentDidMount() {
	      this.fetch();
	    },
	    render: function render() {
	      return React.createElement(_antd.Table, {
	        columns: columns,
	        rowKey: function rowKey(record) {
	          return record.registered;
	        },
	        dataSource: this.state.data,
	        pagination: this.state.pagination,
	        loading: this.state.loading,
	        onChange: this.handleTableChange
	      });
	    }
	  });
	  return React.createElement(Test, null);
	}
	};

/***/ },

/***/ 1022:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "简单的表格，最后一列是各种操作。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Simple table with actions."
	      ]
	    ]
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
	      "highlighted": "import { Table<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> text <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>{text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Action'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'action'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n    <span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>Action 一 {record<span class=\"token punctuation\">.</span>name}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-divider\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>Delete<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-divider\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span> className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-dropdown-link\"</span><span class=\"token operator\">></span>\n        More actions <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"down\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Table columns<span class=\"token operator\">=</span>{columns} dataSource<span class=\"token operator\">=</span>{data} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var columns = [{
	    title: 'Name',
	    dataIndex: 'name',
	    key: 'name',
	    render: function render(text) {
	      return React.createElement(
	        "a",
	        {
	          href: "#"
	        },
	        text
	      );
	    }
	  }, {
	    title: 'Age',
	    dataIndex: 'age',
	    key: 'age'
	  }, {
	    title: 'Address',
	    dataIndex: 'address',
	    key: 'address'
	  }, {
	    title: 'Action',
	    key: 'action',
	    render: function render(text, record) {
	      return React.createElement(
	        "span",
	        null,
	        React.createElement(
	          "a",
	          {
	            href: "#"
	          },
	          "Action 一 ",
	          record.name
	        ),
	        React.createElement("span", {
	          className: "ant-divider"
	        }),
	        React.createElement(
	          "a",
	          {
	            href: "#"
	          },
	          "Delete"
	        ),
	        React.createElement("span", {
	          className: "ant-divider"
	        }),
	        React.createElement(
	          "a",
	          {
	            href: "#",
	            className: "ant-dropdown-link"
	          },
	          "More actions ",
	          React.createElement(_antd.Icon, {
	            type: "down"
	          })
	        )
	      );
	    }
	  }];
	  var data = [{
	    key: '1',
	    name: 'John Brown',
	    age: 32,
	    address: 'New York No. 1 Lake Park'
	  }, {
	    key: '2',
	    name: 'Jim Green',
	    age: 42,
	    address: 'London No. 1 Lake Park'
	  }, {
	    key: '3',
	    name: 'Joe Black',
	    age: 32,
	    address: 'Sidney No. 1 Lake Park'
	  }];
	  return React.createElement(_antd.Table, {
	    columns: columns,
	    dataSource: data
	  });
	}
	};

/***/ },

/***/ 1023:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "添加表格边框线，页头和页脚。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Add border, title and footer for table."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 11,
	    "title": {
	      "en-US": "border, title and footer",
	      "zh-CN": "带边框"
	    },
	    "filename": "components/table/demo/bordered.md",
	    "id": "components-table-demo-bordered"
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
	      "highlighted": "import { Table } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> text <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>{text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Cash Assets'</span><span class=\"token punctuation\">,</span>\n  className<span class=\"token punctuation\">:</span> <span class=\"token string\">'column-money'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'money'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  money<span class=\"token punctuation\">:</span> <span class=\"token string\">'￥300,000.00'</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  money<span class=\"token punctuation\">:</span> <span class=\"token string\">'￥1,256,000.00'</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  money<span class=\"token punctuation\">:</span> <span class=\"token string\">'￥120,000.00'</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Table\n    columns<span class=\"token operator\">=</span>{columns}\n    dataSource<span class=\"token operator\">=</span>{data}\n    bordered\n    title<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token string\">'Header'</span>}\n    footer<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token string\">'Footer'</span>}\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var columns = [{
	    title: 'Name',
	    dataIndex: 'name',
	    render: function render(text) {
	      return React.createElement(
	        "a",
	        {
	          href: "#"
	        },
	        text
	      );
	    }
	  }, {
	    title: 'Cash Assets',
	    className: 'column-money',
	    dataIndex: 'money'
	  }, {
	    title: 'Address',
	    dataIndex: 'address'
	  }];
	  var data = [{
	    key: '1',
	    name: 'John Brown',
	    money: '￥300,000.00',
	    address: 'New York No. 1 Lake Park'
	  }, {
	    key: '2',
	    name: 'Jim Green',
	    money: '￥1,256,000.00',
	    address: 'London No. 1 Lake Park'
	  }, {
	    key: '3',
	    name: 'Joe Black',
	    money: '￥120,000.00',
	    address: 'Sidney No. 1 Lake Park'
	  }];
	  return React.createElement(_antd.Table, {
	    columns: columns,
	    dataSource: data,
	    bordered: true,
	    title: function title() {
	      return 'Header';
	    },
	    footer: function footer() {
	      return 'Footer';
	    }
	  });
	},
	  "style": ".column-money {\n  text-align: right;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.column-money</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> right<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1024:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "表头只支持列合并，使用 column 里的 colSpan 进行设置。"
	      ],
	      [
	        "p",
	        "表格支持行/列合并，使用 render 里的单元格属性 colSpan 或者 rowSpan 设值为 0 时，设置的表格不会渲染。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Table column title supports ",
	        [
	          "code",
	          "colSpan"
	        ],
	        " that set in ",
	        [
	          "code",
	          "column"
	        ],
	        "."
	      ],
	      [
	        "p",
	        "Table cell supports ",
	        [
	          "code",
	          "colSpan"
	        ],
	        " and ",
	        [
	          "code",
	          "rowSpan"
	        ],
	        " that set in render return object. When each of them is set to ",
	        [
	          "code",
	          "0"
	        ],
	        ", the cell will not be rendered."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 14,
	    "title": {
	      "en-US": "colSpan and rowSpan",
	      "zh-CN": "表格行/列合并"
	    },
	    "filename": "components/table/demo/colspan-rowspan.md",
	    "id": "components-table-demo-colspan-rowspan"
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
	      "highlighted": "import { Table } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token operator\">/</span><span class=\"token operator\">/</span> <span class=\"token keyword\">In</span> the fifth row<span class=\"token punctuation\">,</span> other columns are merged into first column\n<span class=\"token operator\">/</span><span class=\"token operator\">/</span> by setting it's colSpan <span class=\"token keyword\">to</span> be <span class=\"token number\">0</span>\n<span class=\"token keyword\">const</span> renderContent <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> row<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n  <span class=\"token keyword\">const</span> obj <span class=\"token operator\">=</span> {\n    children<span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">,</span>\n    props<span class=\"token punctuation\">:</span> {}<span class=\"token punctuation\">,</span>\n  }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>index <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token number\">4</span><span class=\"token punctuation\">)</span> {\n    obj<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>colSpan <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  return obj<span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> row<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>index <span class=\"token operator\">&lt;</span> <span class=\"token number\">4</span><span class=\"token punctuation\">)</span> {\n      return <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>{text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    return {\n      children<span class=\"token punctuation\">:</span> <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>{text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n      props<span class=\"token punctuation\">:</span> {\n        colSpan<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> renderContent<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Home phone'</span><span class=\"token punctuation\">,</span>\n  colSpan<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'tel'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> row<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    <span class=\"token keyword\">const</span> obj <span class=\"token operator\">=</span> {\n      children<span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">,</span>\n      props<span class=\"token punctuation\">:</span> {}<span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>index <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span> {\n      obj<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>rowSpan <span class=\"token operator\">=</span> <span class=\"token number\">2</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> These two are merged into above cell\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>index <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token number\">3</span><span class=\"token punctuation\">)</span> {\n      obj<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>rowSpan <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>index <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token number\">4</span><span class=\"token punctuation\">)</span> {\n      obj<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>colSpan <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    return obj<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Phone'</span><span class=\"token punctuation\">,</span>\n  colSpan<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'phone'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> renderContent<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> renderContent<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  tel<span class=\"token punctuation\">:</span> <span class=\"token string\">'0571-22098909'</span><span class=\"token punctuation\">,</span>\n  phone<span class=\"token punctuation\">:</span> <span class=\"token number\">18889898989</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  tel<span class=\"token punctuation\">:</span> <span class=\"token string\">'0571-22098333'</span><span class=\"token punctuation\">,</span>\n  phone<span class=\"token punctuation\">:</span> <span class=\"token number\">18889898888</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  tel<span class=\"token punctuation\">:</span> <span class=\"token string\">'0575-22098909'</span><span class=\"token punctuation\">,</span>\n  phone<span class=\"token punctuation\">:</span> <span class=\"token number\">18900010002</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'4'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Red'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">18</span><span class=\"token punctuation\">,</span>\n  tel<span class=\"token punctuation\">:</span> <span class=\"token string\">'0575-22098909'</span><span class=\"token punctuation\">,</span>\n  phone<span class=\"token punctuation\">:</span> <span class=\"token number\">18900010002</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 2 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'5'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jake White'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">18</span><span class=\"token punctuation\">,</span>\n  tel<span class=\"token punctuation\">:</span> <span class=\"token string\">'0575-22098909'</span><span class=\"token punctuation\">,</span>\n  phone<span class=\"token punctuation\">:</span> <span class=\"token number\">18900010002</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Dublin No. 2 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Table columns<span class=\"token operator\">=</span>{columns} dataSource<span class=\"token operator\">=</span>{data} bordered <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  // In the fifth row, other columns are merged into first column
	  // by setting it's colSpan to be 0
	  var renderContent = function renderContent(value, row, index) {
	    var obj = {
	      children: value,
	      props: {}
	    };

	    if (index === 4) {
	      obj.props.colSpan = 0;
	    }

	    return obj;
	  };

	  var columns = [{
	    title: 'Name',
	    dataIndex: 'name',
	    render: function render(text, row, index) {
	      if (index < 4) {
	        return React.createElement(
	          "a",
	          {
	            href: "#"
	          },
	          text
	        );
	      }

	      return {
	        children: React.createElement(
	          "a",
	          {
	            href: "#"
	          },
	          text
	        ),
	        props: {
	          colSpan: 5
	        }
	      };
	    }
	  }, {
	    title: 'Age',
	    dataIndex: 'age',
	    render: renderContent
	  }, {
	    title: 'Home phone',
	    colSpan: 2,
	    dataIndex: 'tel',
	    render: function render(value, row, index) {
	      var obj = {
	        children: value,
	        props: {}
	      };

	      if (index === 2) {
	        obj.props.rowSpan = 2;
	      } // These two are merged into above cell


	      if (index === 3) {
	        obj.props.rowSpan = 0;
	      }

	      if (index === 4) {
	        obj.props.colSpan = 0;
	      }

	      return obj;
	    }
	  }, {
	    title: 'Phone',
	    colSpan: 0,
	    dataIndex: 'phone',
	    render: renderContent
	  }, {
	    title: 'Address',
	    dataIndex: 'address',
	    render: renderContent
	  }];
	  var data = [{
	    key: '1',
	    name: 'John Brown',
	    age: 32,
	    tel: '0571-22098909',
	    phone: 18889898989,
	    address: 'New York No. 1 Lake Park'
	  }, {
	    key: '2',
	    name: 'Jim Green',
	    tel: '0571-22098333',
	    phone: 18889898888,
	    age: 42,
	    address: 'London No. 1 Lake Park'
	  }, {
	    key: '3',
	    name: 'Joe Black',
	    age: 32,
	    tel: '0575-22098909',
	    phone: 18900010002,
	    address: 'Sidney No. 1 Lake Park'
	  }, {
	    key: '4',
	    name: 'Jim Red',
	    age: 18,
	    tel: '0575-22098909',
	    phone: 18900010002,
	    address: 'London No. 2 Lake Park'
	  }, {
	    key: '5',
	    name: 'Jake White',
	    age: 18,
	    tel: '0575-22098909',
	    phone: 18900010002,
	    address: 'Dublin No. 2 Lake Park'
	  }];
	  return React.createElement(_antd.Table, {
	    columns: columns,
	    dataSource: data,
	    bordered: true
	  });
	}
	};

/***/ },

/***/ 1025:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "通过 ",
	        [
	          "code",
	          "filterDropdown"
	        ],
	        "、",
	        [
	          "code",
	          "filterDropdownVisible"
	        ],
	        " 和 ",
	        [
	          "code",
	          "filterDropdownVisibleChange"
	        ],
	        " 定义自定义的列筛选功能，并实现一个搜索列的示例。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Implement a customized column search example via ",
	        [
	          "code",
	          "filterDropdown"
	        ],
	        ", ",
	        [
	          "code",
	          "filterDropdownVisible"
	        ],
	        " and ",
	        [
	          "code",
	          "filterDropdownVisibleChange"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 8,
	    "title": {
	      "en-US": "Customized filter panel",
	      "zh-CN": "自定义筛选菜单"
	    },
	    "filename": "components/table/demo/custom-filter-panel.md",
	    "id": "components-table-demo-custom-filter-panel"
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
	      "highlighted": "import { Table<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'4'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Red'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 2 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      filterDropdownVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      data<span class=\"token punctuation\">,</span>\n      searchText<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onInputChange</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ searchText<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onSearch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { searchText } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> reg <span class=\"token operator\">=</span> new <span class=\"token function\">RegExp</span><span class=\"token punctuation\">(</span>searchText<span class=\"token punctuation\">,</span> <span class=\"token string\">'gi'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      filterDropdownVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      data<span class=\"token punctuation\">:</span> data<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n        <span class=\"token keyword\">const</span> match <span class=\"token operator\">=</span> record<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span><span class=\"token function\">match</span><span class=\"token punctuation\">(</span>reg<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n        <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>!match<span class=\"token punctuation\">)</span> {\n          return <span class=\"token keyword\">null</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n        }\n        return {\n          <span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>record<span class=\"token punctuation\">,</span>\n          name<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>\n              {record<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span><span class=\"token function\">split</span><span class=\"token punctuation\">(</span>reg<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> i<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n                i <span class=\"token operator\">></span> <span class=\"token number\">0</span> <span class=\"token operator\">?</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"highlight\"</span><span class=\"token operator\">></span>{match<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span>}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span><span class=\"token punctuation\">,</span> text<span class=\"token punctuation\">]</span> <span class=\"token punctuation\">:</span> text\n              <span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span>}\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        }<span class=\"token comment\" spellcheck=\"true\">;</span>\n      }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>record <span class=\"token operator\">=</span><span class=\"token operator\">></span> !!record<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n      filterDropdown<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"custom-filter-dropdown\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Input\n            placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Search name\"</span>\n            value<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>searchText}\n            onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onInputChange}\n            onPressEnter<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onSearch}\n          <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onSearch}<span class=\"token operator\">></span>Search<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      filterDropdownVisible<span class=\"token punctuation\">:</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>filterDropdownVisible<span class=\"token punctuation\">,</span>\n      onFilterDropdownVisibleChange<span class=\"token punctuation\">:</span> visible <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ filterDropdownVisible<span class=\"token punctuation\">:</span> visible }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">,</span> {\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">,</span> {\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token operator\">&lt;</span>Table columns<span class=\"token operator\">=</span>{columns} dataSource<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	  var _antd = __webpack_require__(3);

	  var data = [{
	    key: '1',
	    name: 'John Brown',
	    age: 32,
	    address: 'New York No. 1 Lake Park'
	  }, {
	    key: '2',
	    name: 'Jim Green',
	    age: 42,
	    address: 'London No. 1 Lake Park'
	  }, {
	    key: '3',
	    name: 'Joe Black',
	    age: 32,
	    address: 'Sidney No. 1 Lake Park'
	  }, {
	    key: '4',
	    name: 'Jim Red',
	    age: 32,
	    address: 'London No. 2 Lake Park'
	  }];
	  var App = React.createClass({
	    displayName: "App",
	    getInitialState: function getInitialState() {
	      return {
	        filterDropdownVisible: false,
	        data: data,
	        searchText: ''
	      };
	    },
	    onInputChange: function onInputChange(e) {
	      this.setState({
	        searchText: e.target.value
	      });
	    },
	    onSearch: function onSearch() {
	      var searchText = this.state.searchText;
	      var reg = new RegExp(searchText, 'gi');
	      this.setState({
	        filterDropdownVisible: false,
	        data: data.map(function (record) {
	          var match = record.name.match(reg);

	          if (!match) {
	            return null;
	          }

	          return _extends({}, record, {
	            name: React.createElement(
	              "span",
	              null,
	              record.name.split(reg).map(function (text, i) {
	                return i > 0 ? [React.createElement(
	                  "span",
	                  {
	                    className: "highlight"
	                  },
	                  match[0]
	                ), text] : text;
	              })
	            )
	          });
	        }).filter(function (record) {
	          return !!record;
	        })
	      });
	    },
	    render: function render() {
	      var _this = this;

	      var columns = [{
	        title: 'Name',
	        dataIndex: 'name',
	        key: 'name',
	        filterDropdown: React.createElement(
	          "div",
	          {
	            className: "custom-filter-dropdown"
	          },
	          React.createElement(_antd.Input, {
	            placeholder: "Search name",
	            value: this.state.searchText,
	            onChange: this.onInputChange,
	            onPressEnter: this.onSearch
	          }),
	          React.createElement(
	            _antd.Button,
	            {
	              type: "primary",
	              onClick: this.onSearch
	            },
	            "Search"
	          )
	        ),
	        filterDropdownVisible: this.state.filterDropdownVisible,
	        onFilterDropdownVisibleChange: function onFilterDropdownVisibleChange(visible) {
	          return _this.setState({
	            filterDropdownVisible: visible
	          });
	        }
	      }, {
	        title: 'Age',
	        dataIndex: 'age',
	        key: 'age'
	      }, {
	        title: 'Address',
	        dataIndex: 'address',
	        key: 'address'
	      }];
	      return React.createElement(_antd.Table, {
	        columns: columns,
	        dataSource: this.state.data
	      });
	    }
	  });
	  return React.createElement(App, null);
	},
	  "style": ".custom-filter-dropdown {\n  padding: 8px;\n  border-radius: 6px;\n  background: #fff;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, .2);\n}\n\n.custom-filter-dropdown input {\n  width: 130px;\n  margin-right: 8px;\n}\n\n.highlight {\n  color: #f50;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.custom-filter-dropdown</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">box-shadow</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">1</span>px <span class=\"token number\">6</span>px <span class=\"token function\">rgba</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span>, <span class=\"token number\">0</span>, <span class=\"token number\">0</span>, <span class=\"token number\">.2</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.custom-filter-dropdown</span> input </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">130</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.highlight</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#f50</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1026:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "选择不同配置组合查看效果。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Select different settings to see the result."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 24,
	    "title": {
	      "en-US": "Dynamic Settings",
	      "zh-CN": "动态控制表格属性"
	    },
	    "filename": "components/table/demo/dynamic-settings.md",
	    "id": "components-table-demo-dynamic-settings"
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
	      "highlighted": "import { Table<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> <span class=\"token keyword\">Switch</span><span class=\"token punctuation\">,</span> Radio<span class=\"token punctuation\">,</span> Form } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> text <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>{text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token number\">70</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Action'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'action'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token number\">360</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n    <span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>Action 一 {record<span class=\"token punctuation\">.</span>name}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-divider\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>Delete<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-divider\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span> className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-dropdown-link\"</span><span class=\"token operator\">></span>\n        More actions <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"down\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token comment\" spellcheck=\"true\">; i &lt;= 10; i++) {</span>\n  data<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>{\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> `${i}<span class=\"token number\">2</span>`<span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> `New York No<span class=\"token punctuation\">.</span> ${i} Lake Park`<span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> `My name is John Brown<span class=\"token punctuation\">,</span> I am ${i}<span class=\"token number\">2</span> years old<span class=\"token punctuation\">,</span> living <span class=\"token keyword\">in</span> New York No<span class=\"token punctuation\">.</span> ${i} Lake Park<span class=\"token punctuation\">.</span>`<span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\n<span class=\"token keyword\">const</span> expandedRowRender <span class=\"token operator\">=</span> record <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>{record<span class=\"token punctuation\">.</span>description}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> title <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token string\">'Here is title'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> showHeader <span class=\"token operator\">=</span> <span class=\"token boolean\">true</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> footer <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token string\">'Here is footer'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> scroll <span class=\"token operator\">=</span> { y<span class=\"token punctuation\">:</span> <span class=\"token number\">240</span> }<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nclass Demo extends React<span class=\"token punctuation\">.</span>Component {\n  state <span class=\"token operator\">=</span> {\n    bordered<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    pagination<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    size<span class=\"token punctuation\">:</span> <span class=\"token string\">'default'</span><span class=\"token punctuation\">,</span>\n    expandedRowRender<span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">,</span>\n    showHeader<span class=\"token punctuation\">,</span>\n    footer<span class=\"token punctuation\">,</span>\n    rowSelection<span class=\"token punctuation\">:</span> {}<span class=\"token punctuation\">,</span>\n    scroll<span class=\"token punctuation\">:</span> undefined<span class=\"token punctuation\">,</span>\n  }\n\n  handleToggle <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>prop<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    return <span class=\"token punctuation\">(</span>enable<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ <span class=\"token punctuation\">[</span>prop<span class=\"token punctuation\">]</span><span class=\"token punctuation\">:</span> enable }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  handleSizeChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ size<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  handleExpandChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>enable<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ expandedRowRender<span class=\"token punctuation\">:</span> enable <span class=\"token operator\">?</span> expandedRowRender <span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  handleTitleChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>enable<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ title<span class=\"token punctuation\">:</span> enable <span class=\"token operator\">?</span> title <span class=\"token punctuation\">:</span> undefined }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  handleHeaderChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>enable<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ showHeader<span class=\"token punctuation\">:</span> enable <span class=\"token operator\">?</span> showHeader <span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  handleFooterChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>enable<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ footer<span class=\"token punctuation\">:</span> enable <span class=\"token operator\">?</span> footer <span class=\"token punctuation\">:</span> undefined }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  handleRowSelectionChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>enable<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ rowSelection<span class=\"token punctuation\">:</span> enable <span class=\"token operator\">?</span> {} <span class=\"token punctuation\">:</span> undefined }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  handleScollChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>enable<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ scroll<span class=\"token punctuation\">:</span> enable <span class=\"token operator\">?</span> scroll <span class=\"token punctuation\">:</span> undefined }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> state <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"components-table-demo-control-bar\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Form inline<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>FormItem label<span class=\"token operator\">=</span><span class=\"token string\">\"Bordered\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Switch</span> checked<span class=\"token operator\">=</span>{state<span class=\"token punctuation\">.</span>bordered} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span><span class=\"token function\">handleToggle</span><span class=\"token punctuation\">(</span><span class=\"token string\">'bordered'</span><span class=\"token punctuation\">)</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>FormItem label<span class=\"token operator\">=</span><span class=\"token string\">\"loading\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Switch</span> checked<span class=\"token operator\">=</span>{state<span class=\"token punctuation\">.</span>loading} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span><span class=\"token function\">handleToggle</span><span class=\"token punctuation\">(</span><span class=\"token string\">'loading'</span><span class=\"token punctuation\">)</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>FormItem label<span class=\"token operator\">=</span><span class=\"token string\">\"Pagination\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Switch</span> checked<span class=\"token operator\">=</span>{state<span class=\"token punctuation\">.</span>pagination} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span><span class=\"token function\">handleToggle</span><span class=\"token punctuation\">(</span><span class=\"token string\">'pagination'</span><span class=\"token punctuation\">)</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>FormItem label<span class=\"token operator\">=</span><span class=\"token string\">\"Title\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Switch</span> checked<span class=\"token operator\">=</span>{!!state<span class=\"token punctuation\">.</span>title} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleTitleChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>FormItem label<span class=\"token operator\">=</span><span class=\"token string\">\"Column Header\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Switch</span> checked<span class=\"token operator\">=</span>{!!state<span class=\"token punctuation\">.</span>showHeader} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleHeaderChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>FormItem label<span class=\"token operator\">=</span><span class=\"token string\">\"Footer\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Switch</span> checked<span class=\"token operator\">=</span>{!!state<span class=\"token punctuation\">.</span>footer} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleFooterChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>FormItem label<span class=\"token operator\">=</span><span class=\"token string\">\"Expandable\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Switch</span> checked<span class=\"token operator\">=</span>{!!state<span class=\"token punctuation\">.</span>expandedRowRender} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleExpandChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>FormItem label<span class=\"token operator\">=</span><span class=\"token string\">\"Checkbox\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Switch</span> checked<span class=\"token operator\">=</span>{!!state<span class=\"token punctuation\">.</span>rowSelection} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleRowSelectionChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>FormItem label<span class=\"token operator\">=</span><span class=\"token string\">\"Fixed Header\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Switch</span> checked<span class=\"token operator\">=</span>{!!state<span class=\"token punctuation\">.</span>scroll} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleScollChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>FormItem label<span class=\"token operator\">=</span><span class=\"token string\">\"Size\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Radio<span class=\"token punctuation\">.</span>Group size<span class=\"token operator\">=</span><span class=\"token string\">\"default\"</span> value<span class=\"token operator\">=</span>{state<span class=\"token punctuation\">.</span>size} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleSizeChange}<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Radio<span class=\"token punctuation\">.</span>Button value<span class=\"token operator\">=</span><span class=\"token string\">\"default\"</span><span class=\"token operator\">></span><span class=\"token keyword\">Default</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token punctuation\">.</span>Button<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Radio<span class=\"token punctuation\">.</span>Button value<span class=\"token operator\">=</span><span class=\"token string\">\"middle\"</span><span class=\"token operator\">></span>Middle<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token punctuation\">.</span>Button<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Radio<span class=\"token punctuation\">.</span>Button value<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span><span class=\"token operator\">></span>Small<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token punctuation\">.</span>Button<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token punctuation\">.</span>Group<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Form<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Table {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>this<span class=\"token punctuation\">.</span>state} columns<span class=\"token operator\">=</span>{columns} dataSource<span class=\"token operator\">=</span>{data} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Demo <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	  var _antd = __webpack_require__(3);

	  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	  var FormItem = _antd.Form.Item;
	  var columns = [{
	    title: 'Name',
	    dataIndex: 'name',
	    key: 'name',
	    width: 150,
	    render: function render(text) {
	      return React.createElement(
	        "a",
	        {
	          href: "#"
	        },
	        text
	      );
	    }
	  }, {
	    title: 'Age',
	    dataIndex: 'age',
	    key: 'age',
	    width: 70
	  }, {
	    title: 'Address',
	    dataIndex: 'address',
	    key: 'address'
	  }, {
	    title: 'Action',
	    key: 'action',
	    width: 360,
	    render: function render(text, record) {
	      return React.createElement(
	        "span",
	        null,
	        React.createElement(
	          "a",
	          {
	            href: "#"
	          },
	          "Action 一 ",
	          record.name
	        ),
	        React.createElement("span", {
	          className: "ant-divider"
	        }),
	        React.createElement(
	          "a",
	          {
	            href: "#"
	          },
	          "Delete"
	        ),
	        React.createElement("span", {
	          className: "ant-divider"
	        }),
	        React.createElement(
	          "a",
	          {
	            href: "#",
	            className: "ant-dropdown-link"
	          },
	          "More actions ",
	          React.createElement(_antd.Icon, {
	            type: "down"
	          })
	        )
	      );
	    }
	  }];
	  var data = [];

	  for (var i = 1; i <= 10; i++) {
	    data.push({
	      key: i,
	      name: 'John Brown',
	      age: i + "2",
	      address: "New York No. " + i + " Lake Park",
	      description: "My name is John Brown, I am " + i + "2 years old, living in New York No. " + i + " Lake Park."
	    });
	  }

	  var expandedRowRender = function expandedRowRender(record) {
	    return React.createElement(
	      "p",
	      null,
	      record.description
	    );
	  };

	  var title = function title() {
	    return 'Here is title';
	  };

	  var showHeader = true;

	  var footer = function footer() {
	    return 'Here is footer';
	  };

	  var scroll = {
	    y: 240
	  };

	  var Demo = function (_React$Component) {
	    _inherits(Demo, _React$Component);

	    function Demo() {
	      var _temp, _this, _ret;

	      _classCallCheck(this, Demo);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	        bordered: false,
	        loading: false,
	        pagination: true,
	        size: 'default',
	        expandedRowRender: expandedRowRender,
	        title: title,
	        showHeader: showHeader,
	        footer: footer,
	        rowSelection: {},
	        scroll: undefined
	      }, _this.handleToggle = function (prop) {
	        return function (enable) {
	          _this.setState(_defineProperty({}, prop, enable));
	        };
	      }, _this.handleSizeChange = function (e) {
	        _this.setState({
	          size: e.target.value
	        });
	      }, _this.handleExpandChange = function (enable) {
	        _this.setState({
	          expandedRowRender: enable ? expandedRowRender : false
	        });
	      }, _this.handleTitleChange = function (enable) {
	        _this.setState({
	          title: enable ? title : undefined
	        });
	      }, _this.handleHeaderChange = function (enable) {
	        _this.setState({
	          showHeader: enable ? showHeader : false
	        });
	      }, _this.handleFooterChange = function (enable) {
	        _this.setState({
	          footer: enable ? footer : undefined
	        });
	      }, _this.handleRowSelectionChange = function (enable) {
	        _this.setState({
	          rowSelection: enable ? {} : undefined
	        });
	      }, _this.handleScollChange = function (enable) {
	        _this.setState({
	          scroll: enable ? scroll : undefined
	        });
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    Demo.prototype.render = function render() {
	      var state = this.state;
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "div",
	          {
	            className: "components-table-demo-control-bar"
	          },
	          React.createElement(
	            _antd.Form,
	            {
	              inline: true
	            },
	            React.createElement(
	              FormItem,
	              {
	                label: "Bordered"
	              },
	              React.createElement(_antd.Switch, {
	                checked: state.bordered,
	                onChange: this.handleToggle('bordered')
	              })
	            ),
	            React.createElement(
	              FormItem,
	              {
	                label: "loading"
	              },
	              React.createElement(_antd.Switch, {
	                checked: state.loading,
	                onChange: this.handleToggle('loading')
	              })
	            ),
	            React.createElement(
	              FormItem,
	              {
	                label: "Pagination"
	              },
	              React.createElement(_antd.Switch, {
	                checked: state.pagination,
	                onChange: this.handleToggle('pagination')
	              })
	            ),
	            React.createElement(
	              FormItem,
	              {
	                label: "Title"
	              },
	              React.createElement(_antd.Switch, {
	                checked: !!state.title,
	                onChange: this.handleTitleChange
	              })
	            ),
	            React.createElement(
	              FormItem,
	              {
	                label: "Column Header"
	              },
	              React.createElement(_antd.Switch, {
	                checked: !!state.showHeader,
	                onChange: this.handleHeaderChange
	              })
	            ),
	            React.createElement(
	              FormItem,
	              {
	                label: "Footer"
	              },
	              React.createElement(_antd.Switch, {
	                checked: !!state.footer,
	                onChange: this.handleFooterChange
	              })
	            ),
	            React.createElement(
	              FormItem,
	              {
	                label: "Expandable"
	              },
	              React.createElement(_antd.Switch, {
	                checked: !!state.expandedRowRender,
	                onChange: this.handleExpandChange
	              })
	            ),
	            React.createElement(
	              FormItem,
	              {
	                label: "Checkbox"
	              },
	              React.createElement(_antd.Switch, {
	                checked: !!state.rowSelection,
	                onChange: this.handleRowSelectionChange
	              })
	            ),
	            React.createElement(
	              FormItem,
	              {
	                label: "Fixed Header"
	              },
	              React.createElement(_antd.Switch, {
	                checked: !!state.scroll,
	                onChange: this.handleScollChange
	              })
	            ),
	            React.createElement(
	              FormItem,
	              {
	                label: "Size"
	              },
	              React.createElement(
	                _antd.Radio.Group,
	                {
	                  size: "default",
	                  value: state.size,
	                  onChange: this.handleSizeChange
	                },
	                React.createElement(
	                  _antd.Radio.Button,
	                  {
	                    value: "default"
	                  },
	                  "Default"
	                ),
	                React.createElement(
	                  _antd.Radio.Button,
	                  {
	                    value: "middle"
	                  },
	                  "Middle"
	                ),
	                React.createElement(
	                  _antd.Radio.Button,
	                  {
	                    value: "small"
	                  },
	                  "Small"
	                )
	              )
	            )
	          )
	        ),
	        React.createElement(_antd.Table, _extends({}, this.state, {
	          columns: columns,
	          dataSource: data
	        }))
	      );
	    };

	    return Demo;
	  }(React.Component);

	  return React.createElement(Demo, null);
	},
	  "style": "\n.components-table-demo-control-bar {\n  margin-bottom: 10px;\n}\n.components-table-demo-control-bar .ant-form-item {\n  margin-right: 16px;\n  margin-bottom: 8px;\n}\n"
	};

/***/ },

/***/ 1027:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "带单元格编辑功能的表格。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Table with editable cells."
	      ]
	    ]
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
	      "highlighted": "import { Table<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Popconfirm } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nclass EditableCell extends React<span class=\"token punctuation\">.</span>Component {\n  state <span class=\"token operator\">=</span> {\n    value<span class=\"token punctuation\">:</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">,</span>\n    editable<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  }\n  handleChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    <span class=\"token keyword\">const</span> value <span class=\"token operator\">=</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value<span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ value }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  check <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ editable<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">)</span> {\n      this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span><span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n  }\n  edit <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ editable<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { value<span class=\"token punctuation\">,</span> editable } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"editable-cell\"</span><span class=\"token operator\">></span>\n      {\n        editable <span class=\"token operator\">?</span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"editable-cell-input-wrapper\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Input\n            value<span class=\"token operator\">=</span>{value}\n            onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleChange}\n            onPressEnter<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>check}\n          <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Icon\n            type<span class=\"token operator\">=</span><span class=\"token string\">\"check\"</span>\n            className<span class=\"token operator\">=</span><span class=\"token string\">\"editable-cell-icon-check\"</span>\n            onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>check}\n          <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token punctuation\">:</span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"editable-cell-text-wrapper\"</span><span class=\"token operator\">></span>\n          {value || <span class=\"token string\">' '</span>}\n          <span class=\"token operator\">&lt;</span>Icon\n            type<span class=\"token operator\">=</span><span class=\"token string\">\"edit\"</span>\n            className<span class=\"token operator\">=</span><span class=\"token string\">\"editable-cell-icon\"</span>\n            onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>edit}\n          <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      }\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nclass EditableTable extends React<span class=\"token punctuation\">.</span>Component {\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> {\n    <span class=\"token function\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span>columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n      width<span class=\"token punctuation\">:</span> <span class=\"token string\">'30%'</span><span class=\"token punctuation\">,</span>\n      render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n        <span class=\"token operator\">&lt;</span>EditableCell\n          value<span class=\"token operator\">=</span>{text}\n          onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span><span class=\"token function\">onCellChange</span><span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">,</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">,</span> {\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">,</span> {\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">,</span> {\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'operation'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'operation'</span><span class=\"token punctuation\">,</span>\n      render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n        return <span class=\"token punctuation\">(</span>\n          this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>dataSource<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">1</span> <span class=\"token operator\">?</span>\n          <span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>Popconfirm title<span class=\"token operator\">=</span><span class=\"token string\">\"Sure to delete?\"</span> onConfirm<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span><span class=\"token function\">onDelete</span><span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">)</span>}<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>Delete<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span>\n        <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n    this<span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> {\n      dataSource<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Edward King 0'</span><span class=\"token punctuation\">,</span>\n        age<span class=\"token punctuation\">:</span> <span class=\"token string\">'32'</span><span class=\"token punctuation\">,</span>\n        address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London, Park Lane no. 0'</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">,</span> {\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Edward King 1'</span><span class=\"token punctuation\">,</span>\n        age<span class=\"token punctuation\">:</span> <span class=\"token string\">'32'</span><span class=\"token punctuation\">,</span>\n        address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London, Park Lane no. 1'</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      count<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  onCellChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    return <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">const</span> dataSource <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>dataSource<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      dataSource<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>key<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> value<span class=\"token comment\" spellcheck=\"true\">;</span>\n      this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ dataSource }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  onDelete <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    return <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">const</span> dataSource <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>dataSource<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      dataSource<span class=\"token punctuation\">.</span><span class=\"token function\">splice</span><span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ dataSource }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  handleAdd <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    <span class=\"token keyword\">const</span> { count<span class=\"token punctuation\">,</span> dataSource } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> newData <span class=\"token operator\">=</span> {\n      key<span class=\"token punctuation\">:</span> count<span class=\"token punctuation\">,</span>\n      name<span class=\"token punctuation\">:</span> `Edward King ${count}`<span class=\"token punctuation\">,</span>\n      age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n      address<span class=\"token punctuation\">:</span> `London<span class=\"token punctuation\">,</span> Park Lane no<span class=\"token punctuation\">.</span> ${count}`<span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      dataSource<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>dataSource<span class=\"token punctuation\">,</span> newData<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      count<span class=\"token punctuation\">:</span> count <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { dataSource } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>columns<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button className<span class=\"token operator\">=</span><span class=\"token string\">\"editable-add-btn\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleAdd}<span class=\"token operator\">></span>Add<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Table bordered dataSource<span class=\"token operator\">=</span>{dataSource} columns<span class=\"token operator\">=</span>{columns} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>EditableTable <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	  var EditableCell = function (_React$Component) {
	    _inherits(EditableCell, _React$Component);

	    function EditableCell() {
	      var _temp, _this, _ret;

	      _classCallCheck(this, EditableCell);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	        value: _this.props.value,
	        editable: false
	      }, _this.handleChange = function (e) {
	        var value = e.target.value;

	        _this.setState({
	          value: value
	        });
	      }, _this.check = function () {
	        _this.setState({
	          editable: false
	        });

	        if (_this.props.onChange) {
	          _this.props.onChange(_this.state.value);
	        }
	      }, _this.edit = function () {
	        _this.setState({
	          editable: true
	        });
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    EditableCell.prototype.render = function render() {
	      var _state = this.state,
	          value = _state.value,
	          editable = _state.editable;
	      return React.createElement(
	        "div",
	        {
	          className: "editable-cell"
	        },
	        editable ? React.createElement(
	          "div",
	          {
	            className: "editable-cell-input-wrapper"
	          },
	          React.createElement(_antd.Input, {
	            value: value,
	            onChange: this.handleChange,
	            onPressEnter: this.check
	          }),
	          React.createElement(_antd.Icon, {
	            type: "check",
	            className: "editable-cell-icon-check",
	            onClick: this.check
	          })
	        ) : React.createElement(
	          "div",
	          {
	            className: "editable-cell-text-wrapper"
	          },
	          value || ' ',
	          React.createElement(_antd.Icon, {
	            type: "edit",
	            className: "editable-cell-icon",
	            onClick: this.edit
	          })
	        )
	      );
	    };

	    return EditableCell;
	  }(React.Component);

	  var EditableTable = function (_React$Component2) {
	    _inherits(EditableTable, _React$Component2);

	    function EditableTable(props) {
	      _classCallCheck(this, EditableTable);

	      var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

	      _this2.onCellChange = function (index, key) {
	        return function (value) {
	          var dataSource = [].concat(_toConsumableArray(_this2.state.dataSource));
	          dataSource[index][key] = value;

	          _this2.setState({
	            dataSource: dataSource
	          });
	        };
	      };

	      _this2.onDelete = function (index) {
	        return function () {
	          var dataSource = [].concat(_toConsumableArray(_this2.state.dataSource));
	          dataSource.splice(index, 1);

	          _this2.setState({
	            dataSource: dataSource
	          });
	        };
	      };

	      _this2.handleAdd = function () {
	        var _this2$state = _this2.state,
	            count = _this2$state.count,
	            dataSource = _this2$state.dataSource;
	        var newData = {
	          key: count,
	          name: "Edward King " + count,
	          age: 32,
	          address: "London, Park Lane no. " + count
	        };

	        _this2.setState({
	          dataSource: [].concat(_toConsumableArray(dataSource), [newData]),
	          count: count + 1
	        });
	      };

	      _this2.columns = [{
	        title: 'name',
	        dataIndex: 'name',
	        width: '30%',
	        render: function render(text, record, index) {
	          return React.createElement(EditableCell, {
	            value: text,
	            onChange: _this2.onCellChange(index, 'name')
	          });
	        }
	      }, {
	        title: 'age',
	        dataIndex: 'age'
	      }, {
	        title: 'address',
	        dataIndex: 'address'
	      }, {
	        title: 'operation',
	        dataIndex: 'operation',
	        render: function render(text, record, index) {
	          return _this2.state.dataSource.length > 1 ? React.createElement(
	            _antd.Popconfirm,
	            {
	              title: "Sure to delete?",
	              onConfirm: _this2.onDelete(index)
	            },
	            React.createElement(
	              "a",
	              {
	                href: "#"
	              },
	              "Delete"
	            )
	          ) : null;
	        }
	      }];
	      _this2.state = {
	        dataSource: [{
	          key: '0',
	          name: 'Edward King 0',
	          age: '32',
	          address: 'London, Park Lane no. 0'
	        }, {
	          key: '1',
	          name: 'Edward King 1',
	          age: '32',
	          address: 'London, Park Lane no. 1'
	        }],
	        count: 2
	      };
	      return _this2;
	    }

	    EditableTable.prototype.render = function render() {
	      var dataSource = this.state.dataSource;
	      var columns = this.columns;
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          _antd.Button,
	          {
	            className: "editable-add-btn",
	            onClick: this.handleAdd
	          },
	          "Add"
	        ),
	        React.createElement(_antd.Table, {
	          bordered: true,
	          dataSource: dataSource,
	          columns: columns
	        })
	      );
	    };

	    return EditableTable;
	  }(React.Component);

	  return React.createElement(EditableTable, null);
	},
	  "style": ".editable-cell {\n  position: relative;\n}\n\n.editable-cell-input-wrapper,\n.editable-cell-text-wrapper {\n  padding-right: 24px;\n}\n\n.editable-cell-text-wrapper {\n  padding: 5px 24px 5px 5px;\n}\n\n.editable-cell-icon,\n.editable-cell-icon-check {\n  position: absolute;\n  right: 0;\n  width: 20px;\n  cursor: pointer;\n}\n\n.editable-cell-icon {\n  line-height: 18px;\n  display: none;\n}\n\n.editable-cell-icon-check {\n  line-height: 28px;\n}\n\n.editable-cell:hover .editable-cell-icon {\n  display: inline-block;\n}\n\n.editable-cell-icon:hover,\n.editable-cell-icon-check:hover {\n  color:#2db7f5;\n}\n\n.editable-add-btn {\n  margin-bottom: 8px;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.editable-cell</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.editable-cell-input-wrapper</span>,\n<span class=\"token class\">.editable-cell-text-wrapper</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.editable-cell-text-wrapper</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">5</span>px <span class=\"token number\">24</span>px <span class=\"token number\">5</span>px <span class=\"token number\">5</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.editable-cell-icon</span>,\n<span class=\"token class\">.editable-cell-icon-check</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">cursor</span><span class=\"token punctuation\">:</span> pointer<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.editable-cell-icon</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">18</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> none<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.editable-cell-icon-check</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">28</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.editable-cell</span><span class=\"token pseudo-class\">:hover</span> <span class=\"token class\">.editable-cell-icon</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> inline-block<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.editable-cell-icon</span><span class=\"token pseudo-class\">:hover</span>,\n<span class=\"token class\">.editable-cell-icon-check</span><span class=\"token pseudo-class\">:hover</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span><span class=\"token hexcode\">#2db7f5</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.editable-add-btn</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1028:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "带行编辑功能的表格。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Table with editable rows."
	      ]
	    ]
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
	      "highlighted": "import { Table<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Popconfirm } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nclass EditableCell extends React<span class=\"token punctuation\">.</span>Component {\n  state <span class=\"token operator\">=</span> {\n    value<span class=\"token punctuation\">:</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">,</span>\n    editable<span class=\"token punctuation\">:</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>editable || <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  }\n  <span class=\"token function\">componentWillReceiveProps</span><span class=\"token punctuation\">(</span>nextProps<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>nextProps<span class=\"token punctuation\">.</span>editable !<span class=\"token operator\">==</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>editable<span class=\"token punctuation\">)</span> {\n      this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ editable<span class=\"token punctuation\">:</span> nextProps<span class=\"token punctuation\">.</span>editable }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>nextProps<span class=\"token punctuation\">.</span>editable<span class=\"token punctuation\">)</span> {\n        this<span class=\"token punctuation\">.</span>cacheValue <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n    }\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>nextProps<span class=\"token punctuation\">.</span>status <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> nextProps<span class=\"token punctuation\">.</span>status !<span class=\"token operator\">==</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>status<span class=\"token punctuation\">)</span> {\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>nextProps<span class=\"token punctuation\">.</span>status <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token string\">'save'</span><span class=\"token punctuation\">)</span> {\n        this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span><span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      } <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>nextProps<span class=\"token punctuation\">.</span>status <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token string\">'cancel'</span><span class=\"token punctuation\">)</span> {\n        this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ value<span class=\"token punctuation\">:</span> this<span class=\"token punctuation\">.</span>cacheValue }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n        this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span><span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>this<span class=\"token punctuation\">.</span>cacheValue<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n    }\n  }\n  <span class=\"token function\">shouldComponentUpdate</span><span class=\"token punctuation\">(</span>nextProps<span class=\"token punctuation\">,</span> nextState<span class=\"token punctuation\">)</span> {\n    return nextProps<span class=\"token punctuation\">.</span>editable !<span class=\"token operator\">==</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>editable ||\n           nextState<span class=\"token punctuation\">.</span>value !<span class=\"token operator\">==</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> value <span class=\"token operator\">=</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value<span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ value }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { value<span class=\"token punctuation\">,</span> editable } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n      {\n        editable <span class=\"token operator\">?</span>\n        <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Input\n            value<span class=\"token operator\">=</span>{value}\n            onChange<span class=\"token operator\">=</span>{e <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span><span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span>}\n          <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token punctuation\">:</span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"editable-row-text\"</span><span class=\"token operator\">></span>\n          {value<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> || <span class=\"token string\">' '</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      }\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nclass EditableTable extends React<span class=\"token punctuation\">.</span>Component {\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> {\n    <span class=\"token function\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span>columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n      width<span class=\"token punctuation\">:</span> <span class=\"token string\">'25%'</span><span class=\"token punctuation\">,</span>\n      render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span><span class=\"token function\">renderColumns</span><span class=\"token punctuation\">(</span>this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">,</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> text<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">,</span> {\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n      width<span class=\"token punctuation\">:</span> <span class=\"token string\">'15%'</span><span class=\"token punctuation\">,</span>\n      render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span><span class=\"token function\">renderColumns</span><span class=\"token punctuation\">(</span>this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">,</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span> text<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">,</span> {\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n      width<span class=\"token punctuation\">:</span> <span class=\"token string\">'40%'</span><span class=\"token punctuation\">,</span>\n      render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span><span class=\"token function\">renderColumns</span><span class=\"token punctuation\">(</span>this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">,</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> text<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">,</span> {\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'operation'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'operation'</span><span class=\"token punctuation\">,</span>\n      render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n        <span class=\"token keyword\">const</span> { editable } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>name<span class=\"token comment\" spellcheck=\"true\">;</span>\n        return <span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"editable-row-operations\"</span><span class=\"token operator\">></span>\n          {\n            editable <span class=\"token operator\">?</span>\n            <span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>a onClick<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span><span class=\"token function\">editDone</span><span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">,</span> <span class=\"token string\">'save'</span><span class=\"token punctuation\">)</span>}<span class=\"token operator\">></span>Save<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Popconfirm title<span class=\"token operator\">=</span><span class=\"token string\">\"Sure to cancel?\"</span> onConfirm<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span><span class=\"token function\">editDone</span><span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">,</span> <span class=\"token string\">'cancel'</span><span class=\"token punctuation\">)</span>}<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>a<span class=\"token operator\">></span>Cancel<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n            <span class=\"token punctuation\">:</span>\n            <span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>a onClick<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span><span class=\"token function\">edit</span><span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">)</span>}<span class=\"token operator\">></span>Edit<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n          }\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> {\n      data<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> {\n          editable<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n          value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Edward King 0'</span><span class=\"token punctuation\">,</span>\n        }<span class=\"token punctuation\">,</span>\n        age<span class=\"token punctuation\">:</span> {\n          editable<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n          value<span class=\"token punctuation\">:</span> <span class=\"token string\">'32'</span><span class=\"token punctuation\">,</span>\n        }<span class=\"token punctuation\">,</span>\n        address<span class=\"token punctuation\">:</span> {\n          value<span class=\"token punctuation\">:</span> <span class=\"token string\">'London, Park Lane no. 0'</span><span class=\"token punctuation\">,</span>\n        }<span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token function\">renderColumns</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">,</span> text<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { editable<span class=\"token punctuation\">,</span> status } <span class=\"token operator\">=</span> data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>key<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>typeof editable <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token string\">'undefined'</span><span class=\"token punctuation\">)</span> {\n      return text<span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    return <span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>EditableCell\n      editable<span class=\"token operator\">=</span>{editable}\n      value<span class=\"token operator\">=</span>{text}\n      onChange<span class=\"token operator\">=</span>{value <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span><span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span>}\n      status<span class=\"token operator\">=</span>{status}\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { data } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>key<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>value <span class=\"token operator\">=</span> value<span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ data }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token function\">edit</span><span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { data } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    Object<span class=\"token punctuation\">.</span><span class=\"token function\">keys</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>item<span class=\"token punctuation\">]</span> <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> typeof data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>item<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>editable !<span class=\"token operator\">==</span> <span class=\"token string\">'undefined'</span><span class=\"token punctuation\">)</span> {\n        data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>item<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>editable <span class=\"token operator\">=</span> <span class=\"token boolean\">true</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ data }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token function\">editDone</span><span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { data } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    Object<span class=\"token punctuation\">.</span><span class=\"token function\">keys</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>item<span class=\"token punctuation\">]</span> <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> typeof data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>item<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>editable !<span class=\"token operator\">==</span> <span class=\"token string\">'undefined'</span><span class=\"token punctuation\">)</span> {\n        data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>item<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>editable <span class=\"token operator\">=</span> <span class=\"token boolean\">false</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n        data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>item<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>status <span class=\"token operator\">=</span> type<span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ data }<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      Object<span class=\"token punctuation\">.</span><span class=\"token function\">keys</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n        <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>item<span class=\"token punctuation\">]</span> <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> typeof data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>item<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>editable !<span class=\"token operator\">==</span> <span class=\"token string\">'undefined'</span><span class=\"token punctuation\">)</span> {\n          delete data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span>item<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>status<span class=\"token comment\" spellcheck=\"true\">;</span>\n        }\n      }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { data } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> dataSource <span class=\"token operator\">=</span> data<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">const</span> obj <span class=\"token operator\">=</span> {}<span class=\"token comment\" spellcheck=\"true\">;</span>\n      Object<span class=\"token punctuation\">.</span><span class=\"token function\">keys</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n        obj<span class=\"token punctuation\">[</span>key<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> key <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token string\">'key'</span> <span class=\"token operator\">?</span> item<span class=\"token punctuation\">[</span>key<span class=\"token punctuation\">]</span> <span class=\"token punctuation\">:</span> item<span class=\"token punctuation\">[</span>key<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>value<span class=\"token comment\" spellcheck=\"true\">;</span>\n      }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      return obj<span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>columns<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token operator\">&lt;</span>Table bordered dataSource<span class=\"token operator\">=</span>{dataSource} columns<span class=\"token operator\">=</span>{columns} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>EditableTable <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	  var EditableCell = function (_React$Component) {
	    _inherits(EditableCell, _React$Component);

	    function EditableCell() {
	      var _temp, _this, _ret;

	      _classCallCheck(this, EditableCell);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	        value: _this.props.value,
	        editable: _this.props.editable || false
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    EditableCell.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      if (nextProps.editable !== this.state.editable) {
	        this.setState({
	          editable: nextProps.editable
	        });

	        if (nextProps.editable) {
	          this.cacheValue = this.state.value;
	        }
	      }

	      if (nextProps.status && nextProps.status !== this.props.status) {
	        if (nextProps.status === 'save') {
	          this.props.onChange(this.state.value);
	        } else if (nextProps.status === 'cancel') {
	          this.setState({
	            value: this.cacheValue
	          });
	          this.props.onChange(this.cacheValue);
	        }
	      }
	    };

	    EditableCell.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	      return nextProps.editable !== this.state.editable || nextState.value !== this.state.value;
	    };

	    EditableCell.prototype.handleChange = function handleChange(e) {
	      var value = e.target.value;
	      this.setState({
	        value: value
	      });
	    };

	    EditableCell.prototype.render = function render() {
	      var _this2 = this;

	      var _state = this.state,
	          value = _state.value,
	          editable = _state.editable;
	      return React.createElement(
	        "div",
	        null,
	        editable ? React.createElement(
	          "div",
	          null,
	          React.createElement(_antd.Input, {
	            value: value,
	            onChange: function onChange(e) {
	              return _this2.handleChange(e);
	            }
	          })
	        ) : React.createElement(
	          "div",
	          {
	            className: "editable-row-text"
	          },
	          value.toString() || ' '
	        )
	      );
	    };

	    return EditableCell;
	  }(React.Component);

	  var EditableTable = function (_React$Component2) {
	    _inherits(EditableTable, _React$Component2);

	    function EditableTable(props) {
	      _classCallCheck(this, EditableTable);

	      var _this3 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

	      _this3.columns = [{
	        title: 'name',
	        dataIndex: 'name',
	        width: '25%',
	        render: function render(text, record, index) {
	          return _this3.renderColumns(_this3.state.data, index, 'name', text);
	        }
	      }, {
	        title: 'age',
	        dataIndex: 'age',
	        width: '15%',
	        render: function render(text, record, index) {
	          return _this3.renderColumns(_this3.state.data, index, 'age', text);
	        }
	      }, {
	        title: 'address',
	        dataIndex: 'address',
	        width: '40%',
	        render: function render(text, record, index) {
	          return _this3.renderColumns(_this3.state.data, index, 'address', text);
	        }
	      }, {
	        title: 'operation',
	        dataIndex: 'operation',
	        render: function render(text, record, index) {
	          var editable = _this3.state.data[index].name.editable;
	          return React.createElement(
	            "div",
	            {
	              className: "editable-row-operations"
	            },
	            editable ? React.createElement(
	              "span",
	              null,
	              React.createElement(
	                "a",
	                {
	                  onClick: function onClick() {
	                    return _this3.editDone(index, 'save');
	                  }
	                },
	                "Save"
	              ),
	              React.createElement(
	                _antd.Popconfirm,
	                {
	                  title: "Sure to cancel?",
	                  onConfirm: function onConfirm() {
	                    return _this3.editDone(index, 'cancel');
	                  }
	                },
	                React.createElement(
	                  "a",
	                  null,
	                  "Cancel"
	                )
	              )
	            ) : React.createElement(
	              "span",
	              null,
	              React.createElement(
	                "a",
	                {
	                  onClick: function onClick() {
	                    return _this3.edit(index);
	                  }
	                },
	                "Edit"
	              )
	            )
	          );
	        }
	      }];
	      _this3.state = {
	        data: [{
	          key: '0',
	          name: {
	            editable: false,
	            value: 'Edward King 0'
	          },
	          age: {
	            editable: false,
	            value: '32'
	          },
	          address: {
	            value: 'London, Park Lane no. 0'
	          }
	        }]
	      };
	      return _this3;
	    }

	    EditableTable.prototype.renderColumns = function renderColumns(data, index, key, text) {
	      var _this4 = this;

	      var _data$index$key = data[index][key],
	          editable = _data$index$key.editable,
	          status = _data$index$key.status;

	      if (typeof editable === 'undefined') {
	        return text;
	      }

	      return React.createElement(EditableCell, {
	        editable: editable,
	        value: text,
	        onChange: function onChange(value) {
	          return _this4.handleChange(key, index, value);
	        },
	        status: status
	      });
	    };

	    EditableTable.prototype.handleChange = function handleChange(key, index, value) {
	      var data = this.state.data;
	      data[index][key].value = value;
	      this.setState({
	        data: data
	      });
	    };

	    EditableTable.prototype.edit = function edit(index) {
	      var data = this.state.data;
	      Object.keys(data[index]).forEach(function (item) {
	        if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
	          data[index][item].editable = true;
	        }
	      });
	      this.setState({
	        data: data
	      });
	    };

	    EditableTable.prototype.editDone = function editDone(index, type) {
	      var data = this.state.data;
	      Object.keys(data[index]).forEach(function (item) {
	        if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
	          data[index][item].editable = false;
	          data[index][item].status = type;
	        }
	      });
	      this.setState({
	        data: data
	      }, function () {
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
	        var obj = {};
	        Object.keys(item).forEach(function (key) {
	          obj[key] = key === 'key' ? item[key] : item[key].value;
	        });
	        return obj;
	      });
	      var columns = this.columns;
	      return React.createElement(_antd.Table, {
	        bordered: true,
	        dataSource: dataSource,
	        columns: columns
	      });
	    };

	    return EditableTable;
	  }(React.Component);

	  return React.createElement(EditableTable, null);
	},
	  "style": ".editable-row-text {\n  padding: 5px;\n}\n\n.editable-row-operations a {\n  margin-right: 8px;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.editable-row-text</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">5</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.editable-row-operations</span> a </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1029:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "表格支持树形数据的展示，可以通过设置 ",
	        [
	          "code",
	          "indentSize"
	        ],
	        " 以控制每一层的缩进宽度。"
	      ],
	      [
	        "blockquote",
	        [
	          "p",
	          "注：暂不支持父子数据递归关联选择。"
	        ]
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Display tree structure data in Table, control the indent width by setting ",
	        [
	          "code",
	          "indentSize"
	        ],
	        "."
	      ],
	      [
	        "blockquote",
	        [
	          "p",
	          "Note, no support for recursive selection of tree structure data table yet."
	        ]
	      ]
	    ]
	  },
	  "meta": {
	    "order": 16,
	    "title": {
	      "en-US": "Tree data",
	      "zh-CN": "树形数据展示"
	    },
	    "filename": "components/table/demo/expand-children.md",
	    "id": "components-table-demo-expand-children"
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
	      "highlighted": "import { Table } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token string\">'40%'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token string\">'30%'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  key<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown sr.'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">60</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    key<span class=\"token punctuation\">:</span> <span class=\"token number\">11</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 2 Lake Park'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">,</span> {\n    key<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown jr.'</span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token number\">30</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 3 Lake Park'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n      key<span class=\"token punctuation\">:</span> <span class=\"token number\">121</span><span class=\"token punctuation\">,</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jimmy Brown'</span><span class=\"token punctuation\">,</span>\n      age<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span>\n      address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 3 Lake Park'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">,</span> {\n    key<span class=\"token punctuation\">:</span> <span class=\"token number\">13</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green sr.'</span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token number\">72</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n      key<span class=\"token punctuation\">:</span> <span class=\"token number\">131</span><span class=\"token punctuation\">,</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n      age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n      address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 2 Lake Park'</span><span class=\"token punctuation\">,</span>\n      children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n        key<span class=\"token punctuation\">:</span> <span class=\"token number\">1311</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green jr.'</span><span class=\"token punctuation\">,</span>\n        age<span class=\"token punctuation\">:</span> <span class=\"token number\">25</span><span class=\"token punctuation\">,</span>\n        address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 3 Lake Park'</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">,</span> {\n        key<span class=\"token punctuation\">:</span> <span class=\"token number\">1312</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jimmy Green sr.'</span><span class=\"token punctuation\">,</span>\n        age<span class=\"token punctuation\">:</span> <span class=\"token number\">18</span><span class=\"token punctuation\">,</span>\n        address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 4 Lake Park'</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token operator\">/</span><span class=\"token operator\">/</span> rowSelection objects indicates the need <span class=\"token keyword\">for</span> row selection\n<span class=\"token keyword\">const</span> rowSelection <span class=\"token operator\">=</span> {\n  onChange<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>selectedRowKeys<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>`selectedRowKeys<span class=\"token punctuation\">:</span> ${selectedRowKeys}`<span class=\"token punctuation\">,</span> <span class=\"token string\">'selectedRows: '</span><span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  onSelect<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">,</span> selected<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">,</span> selected<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  onSelectAll<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>selected<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">,</span> changeRows<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>selected<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">,</span> changeRows<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Table columns<span class=\"token operator\">=</span>{columns} rowSelection<span class=\"token operator\">=</span>{rowSelection} dataSource<span class=\"token operator\">=</span>{data} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var columns = [{
	    title: 'Name',
	    dataIndex: 'name',
	    key: 'name',
	    width: '40%'
	  }, {
	    title: 'Age',
	    dataIndex: 'age',
	    key: 'age',
	    width: '30%'
	  }, {
	    title: 'Address',
	    dataIndex: 'address',
	    key: 'address'
	  }];
	  var data = [{
	    key: 1,
	    name: 'John Brown sr.',
	    age: 60,
	    address: 'New York No. 1 Lake Park',
	    children: [{
	      key: 11,
	      name: 'John Brown',
	      age: 42,
	      address: 'New York No. 2 Lake Park'
	    }, {
	      key: 12,
	      name: 'John Brown jr.',
	      age: 30,
	      address: 'New York No. 3 Lake Park',
	      children: [{
	        key: 121,
	        name: 'Jimmy Brown',
	        age: 16,
	        address: 'New York No. 3 Lake Park'
	      }]
	    }, {
	      key: 13,
	      name: 'Jim Green sr.',
	      age: 72,
	      address: 'London No. 1 Lake Park',
	      children: [{
	        key: 131,
	        name: 'Jim Green',
	        age: 42,
	        address: 'London No. 2 Lake Park',
	        children: [{
	          key: 1311,
	          name: 'Jim Green jr.',
	          age: 25,
	          address: 'London No. 3 Lake Park'
	        }, {
	          key: 1312,
	          name: 'Jimmy Green sr.',
	          age: 18,
	          address: 'London No. 4 Lake Park'
	        }]
	      }]
	    }]
	  }, {
	    key: 2,
	    name: 'Joe Black',
	    age: 32,
	    address: 'Sidney No. 1 Lake Park'
	  }]; // rowSelection objects indicates the need for row selection

	  var rowSelection = {
	    onChange: function onChange(selectedRowKeys, selectedRows) {
	      console.log("selectedRowKeys: " + selectedRowKeys, 'selectedRows: ', selectedRows);
	    },
	    onSelect: function onSelect(record, selected, selectedRows) {
	      console.log(record, selected, selectedRows);
	    },
	    onSelectAll: function onSelectAll(selected, selectedRows, changeRows) {
	      console.log(selected, selectedRows, changeRows);
	    }
	  };
	  return React.createElement(_antd.Table, {
	    columns: columns,
	    rowSelection: rowSelection,
	    dataSource: data
	  });
	}
	};

/***/ },

/***/ 1030:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "当表格内容较多不能一次性完全展示时。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "When there's too much information to show and the table can't display all at once."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 13,
	    "title": {
	      "en-US": "Expandable Row",
	      "zh-CN": "可展开"
	    },
	    "filename": "components/table/demo/expand.md",
	    "id": "components-table-demo-expand"
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
	      "highlighted": "import { Table } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span> }<span class=\"token punctuation\">,</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span> }<span class=\"token punctuation\">,</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span> }<span class=\"token punctuation\">,</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Action'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'x'</span><span class=\"token punctuation\">,</span> render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>Delete<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span> }<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  { key<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span> age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span> address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span> description<span class=\"token punctuation\">:</span> <span class=\"token string\">'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'</span> }<span class=\"token punctuation\">,</span>\n  { key<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span> age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span> address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span> description<span class=\"token punctuation\">:</span> <span class=\"token string\">'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'</span> }<span class=\"token punctuation\">,</span>\n  { key<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span> age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span> address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span> description<span class=\"token punctuation\">:</span> <span class=\"token string\">'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'</span> }<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Table\n    columns<span class=\"token operator\">=</span>{columns}\n    expandedRowRender<span class=\"token operator\">=</span>{record <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>{record<span class=\"token punctuation\">.</span>description}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>}\n    dataSource<span class=\"token operator\">=</span>{data}\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var columns = [{
	    title: 'Name',
	    dataIndex: 'name',
	    key: 'name'
	  }, {
	    title: 'Age',
	    dataIndex: 'age',
	    key: 'age'
	  }, {
	    title: 'Address',
	    dataIndex: 'address',
	    key: 'address'
	  }, {
	    title: 'Action',
	    dataIndex: '',
	    key: 'x',
	    render: function render() {
	      return React.createElement(
	        "a",
	        {
	          href: "#"
	        },
	        "Delete"
	      );
	    }
	  }];
	  var data = [{
	    key: 1,
	    name: 'John Brown',
	    age: 32,
	    address: 'New York No. 1 Lake Park',
	    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
	  }, {
	    key: 2,
	    name: 'Jim Green',
	    age: 42,
	    address: 'London No. 1 Lake Park',
	    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
	  }, {
	    key: 3,
	    name: 'Joe Black',
	    age: 32,
	    address: 'Sidney No. 1 Lake Park',
	    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
	  }];
	  return React.createElement(_antd.Table, {
	    columns: columns,
	    expandedRowRender: function expandedRowRender(record) {
	      return React.createElement(
	        "p",
	        null,
	        record.description
	      );
	    },
	    dataSource: data
	  });
	}
	};

/***/ },

/***/ 1031:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "适合同时展示有大量数据和数据列。"
	      ],
	      [
	        "blockquote",
	        [
	          "p",
	          "若列头与内容不对齐，请指定每列宽度 ",
	          [
	            "code",
	            "width"
	          ],
	          "。"
	        ],
	        [
	          "p",
	          "建议指定 ",
	          [
	            "code",
	            "scroll.x"
	          ],
	          " 为固定宽度。注意，非固定列宽度之和不要超过 ",
	          [
	            "code",
	            "scroll.x"
	          ],
	          "。"
	        ]
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Suitable for large amounts of data with long columns."
	      ],
	      [
	        "blockquote",
	        [
	          "p",
	          "Specify the width of each column if header and cell do not align properly."
	        ],
	        [
	          "p",
	          "A fixed width for ",
	          [
	            "code",
	            "scroll.x"
	          ],
	          " is recommended. The sum of unfixed columns should not greater than ",
	          [
	            "code",
	            "scroll.x"
	          ],
	          "."
	        ]
	      ]
	    ]
	  },
	  "meta": {
	    "order": 19,
	    "title": {
	      "en-US": "Fixed Columns and Header",
	      "zh-CN": "固定头和列"
	    },
	    "filename": "components/table/demo/fixed-columns-header.md",
	    "id": "components-table-demo-fixed-columns-header"
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
	      "highlighted": "import { Table } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Full Name'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span> }<span class=\"token punctuation\">,</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span> fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span> }<span class=\"token punctuation\">,</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 1'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span> }<span class=\"token punctuation\">,</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 2'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span> }<span class=\"token punctuation\">,</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 3'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span> }<span class=\"token punctuation\">,</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 4'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'4'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span> }<span class=\"token punctuation\">,</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 5'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'5'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span> }<span class=\"token punctuation\">,</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 6'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'6'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span> }<span class=\"token punctuation\">,</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 7'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'7'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span> }<span class=\"token punctuation\">,</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 8'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'8'</span> }<span class=\"token punctuation\">,</span>\n  {\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Action'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'operation'</span><span class=\"token punctuation\">,</span>\n    fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'right'</span><span class=\"token punctuation\">,</span>\n    width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n    render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>action<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">; i &lt; 100; i++) {</span>\n  data<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>{\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> `Edrward ${i}`<span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> `London Park no<span class=\"token punctuation\">.</span> ${i}`<span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Table columns<span class=\"token operator\">=</span>{columns} dataSource<span class=\"token operator\">=</span>{data} scroll<span class=\"token operator\">=</span>{{ x<span class=\"token punctuation\">:</span> <span class=\"token number\">1500</span><span class=\"token punctuation\">,</span> y<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span> }} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var columns = [{
	    title: 'Full Name',
	    width: 100,
	    dataIndex: 'name',
	    key: 'name',
	    fixed: 'left'
	  }, {
	    title: 'Age',
	    width: 100,
	    dataIndex: 'age',
	    key: 'age',
	    fixed: 'left'
	  }, {
	    title: 'Column 1',
	    dataIndex: 'address',
	    key: '1',
	    width: 150
	  }, {
	    title: 'Column 2',
	    dataIndex: 'address',
	    key: '2',
	    width: 150
	  }, {
	    title: 'Column 3',
	    dataIndex: 'address',
	    key: '3',
	    width: 150
	  }, {
	    title: 'Column 4',
	    dataIndex: 'address',
	    key: '4',
	    width: 150
	  }, {
	    title: 'Column 5',
	    dataIndex: 'address',
	    key: '5',
	    width: 150
	  }, {
	    title: 'Column 6',
	    dataIndex: 'address',
	    key: '6',
	    width: 150
	  }, {
	    title: 'Column 7',
	    dataIndex: 'address',
	    key: '7',
	    width: 150
	  }, {
	    title: 'Column 8',
	    dataIndex: 'address',
	    key: '8'
	  }, {
	    title: 'Action',
	    key: 'operation',
	    fixed: 'right',
	    width: 100,
	    render: function render() {
	      return React.createElement(
	        "a",
	        {
	          href: "#"
	        },
	        "action"
	      );
	    }
	  }];
	  var data = [];

	  for (var i = 0; i < 100; i++) {
	    data.push({
	      key: i,
	      name: "Edrward " + i,
	      age: 32,
	      address: "London Park no. " + i
	    });
	  }

	  return React.createElement(_antd.Table, {
	    columns: columns,
	    dataSource: data,
	    scroll: {
	      x: 1500,
	      y: 300
	    }
	  });
	}
	};

/***/ },

/***/ 1032:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据，需要和 ",
	        [
	          "code",
	          "scroll.x"
	        ],
	        " 配合使用。"
	      ],
	      [
	        "blockquote",
	        [
	          "p",
	          "若列头与内容不对齐，请指定每列宽度 ",
	          [
	            "code",
	            "width"
	          ],
	          "。"
	        ],
	        [
	          "p",
	          "建议指定 scroll.x 为固定宽度。"
	        ]
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Fix some columns and scroll in other columns. You must set ",
	        [
	          "code",
	          "scoll.x"
	        ],
	        " meanwhile."
	      ],
	      [
	        "blockquote",
	        [
	          "p",
	          "Specify the width of each column if header and cell do not align properly."
	        ],
	        [
	          "p",
	          "A fixed width for ",
	          [
	            "code",
	            "scroll.x"
	          ],
	          " is recommended."
	        ]
	      ]
	    ]
	  },
	  "meta": {
	    "order": 18,
	    "title": {
	      "en-US": "Fixed Columns",
	      "zh-CN": "固定列"
	    },
	    "filename": "components/table/demo/fixed-columns.md",
	    "id": "components-table-demo-fixed-columns"
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
	      "highlighted": "import { Table } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Full Name'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span> }<span class=\"token punctuation\">,</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span> fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span> }<span class=\"token punctuation\">,</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 1'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span> }<span class=\"token punctuation\">,</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 2'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span> }<span class=\"token punctuation\">,</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 3'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span> }<span class=\"token punctuation\">,</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 4'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'4'</span> }<span class=\"token punctuation\">,</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 5'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'5'</span> }<span class=\"token punctuation\">,</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 6'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'6'</span> }<span class=\"token punctuation\">,</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 7'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'7'</span> }<span class=\"token punctuation\">,</span>\n  { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 8'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'8'</span> }<span class=\"token punctuation\">,</span>\n  {\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Action'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'operation'</span><span class=\"token punctuation\">,</span>\n    fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'right'</span><span class=\"token punctuation\">,</span>\n    width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n    render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>action<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">40</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Table columns<span class=\"token operator\">=</span>{columns} dataSource<span class=\"token operator\">=</span>{data} scroll<span class=\"token operator\">=</span>{{ x<span class=\"token punctuation\">:</span> <span class=\"token number\">1300</span> }} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var columns = [{
	    title: 'Full Name',
	    width: 100,
	    dataIndex: 'name',
	    key: 'name',
	    fixed: 'left'
	  }, {
	    title: 'Age',
	    width: 100,
	    dataIndex: 'age',
	    key: 'age',
	    fixed: 'left'
	  }, {
	    title: 'Column 1',
	    dataIndex: 'address',
	    key: '1'
	  }, {
	    title: 'Column 2',
	    dataIndex: 'address',
	    key: '2'
	  }, {
	    title: 'Column 3',
	    dataIndex: 'address',
	    key: '3'
	  }, {
	    title: 'Column 4',
	    dataIndex: 'address',
	    key: '4'
	  }, {
	    title: 'Column 5',
	    dataIndex: 'address',
	    key: '5'
	  }, {
	    title: 'Column 6',
	    dataIndex: 'address',
	    key: '6'
	  }, {
	    title: 'Column 7',
	    dataIndex: 'address',
	    key: '7'
	  }, {
	    title: 'Column 8',
	    dataIndex: 'address',
	    key: '8'
	  }, {
	    title: 'Action',
	    key: 'operation',
	    fixed: 'right',
	    width: 100,
	    render: function render() {
	      return React.createElement(
	        "a",
	        {
	          href: "#"
	        },
	        "action"
	      );
	    }
	  }];
	  var data = [{
	    key: '1',
	    name: 'John Brown',
	    age: 32,
	    address: 'New York Park'
	  }, {
	    key: '2',
	    name: 'Jim Green',
	    age: 40,
	    address: 'London Park'
	  }];
	  return React.createElement(_antd.Table, {
	    columns: columns,
	    dataSource: data,
	    scroll: {
	      x: 1300
	    }
	  });
	}
	};

/***/ },

/***/ 1033:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "方便一页内展示大量数据。"
	      ],
	      [
	        "p",
	        "需要指定 column 的 ",
	        [
	          "code",
	          "width"
	        ],
	        " 属性，否则列头和内容可能不对齐。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Display large amounts of data in scrollable view."
	      ],
	      [
	        "blockquote",
	        [
	          "p",
	          "Specify the width of each column if header and cell do not align properly."
	        ]
	      ]
	    ]
	  },
	  "meta": {
	    "order": 17,
	    "title": {
	      "en-US": "Fixed Header",
	      "zh-CN": "固定表头"
	    },
	    "filename": "components/table/demo/fixed-header.md",
	    "id": "components-table-demo-fixed-header"
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
	      "highlighted": "import { Table } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">; i &lt; 100; i++) {</span>\n  data<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>{\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> `Edward King ${i}`<span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> `London<span class=\"token punctuation\">,</span> Park Lane no<span class=\"token punctuation\">.</span> ${i}`<span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Table columns<span class=\"token operator\">=</span>{columns} dataSource<span class=\"token operator\">=</span>{data} pagination<span class=\"token operator\">=</span>{{ pageSize<span class=\"token punctuation\">:</span> <span class=\"token number\">50</span> }} scroll<span class=\"token operator\">=</span>{{ y<span class=\"token punctuation\">:</span> <span class=\"token number\">240</span> }} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var columns = [{
	    title: 'Name',
	    dataIndex: 'name',
	    width: 150
	  }, {
	    title: 'Age',
	    dataIndex: 'age',
	    width: 150
	  }, {
	    title: 'Address',
	    dataIndex: 'address'
	  }];
	  var data = [];

	  for (var i = 0; i < 100; i++) {
	    data.push({
	      key: i,
	      name: "Edward King " + i,
	      age: 32,
	      address: "London, Park Lane no. " + i
	    });
	  }

	  return React.createElement(_antd.Table, {
	    columns: columns,
	    dataSource: data,
	    pagination: {
	      pageSize: 50
	    },
	    scroll: {
	      y: 240
	    }
	  });
	}
	};

/***/ },

/***/ 1034:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        [
	          "code",
	          "columns[n]"
	        ],
	        " 可以内嵌 ",
	        [
	          "code",
	          "children"
	        ],
	        "，以渲染分组表头。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Group table head with ",
	        [
	          "code",
	          "columns[n].children"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 21,
	    "title": {
	      "en-US": "Grouping table head",
	      "zh-CN": "表头分组"
	    },
	    "filename": "components/table/demo/grouping-columns.md",
	    "id": "components-table-demo-grouping-columns"
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
	      "highlighted": "import { Table } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n  fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span><span class=\"token punctuation\">,</span>\n  filters<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">,</span> {\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'John'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'John'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  onFilter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Other'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n    dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n    width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n    sorter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> a<span class=\"token punctuation\">.</span>age <span class=\"token operator\">-</span> b<span class=\"token punctuation\">.</span>age<span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">,</span> {\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Street'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'street'</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'street'</span><span class=\"token punctuation\">,</span>\n      width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">,</span> {\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Block'</span><span class=\"token punctuation\">,</span>\n      children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Building'</span><span class=\"token punctuation\">,</span>\n        dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'building'</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'building'</span><span class=\"token punctuation\">,</span>\n        width<span class=\"token punctuation\">:</span> <span class=\"token number\">50</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">,</span> {\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Door No.'</span><span class=\"token punctuation\">,</span>\n        dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'number'</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'number'</span><span class=\"token punctuation\">,</span>\n        width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Company'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Company Address'</span><span class=\"token punctuation\">,</span>\n    dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'companyAddress'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'companyAddress'</span><span class=\"token punctuation\">,</span>\n    width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">,</span> {\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Company Name'</span><span class=\"token punctuation\">,</span>\n    dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'companyName'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'companyName'</span><span class=\"token punctuation\">,</span>\n    width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Gender'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'gender'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'gender'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token number\">60</span><span class=\"token punctuation\">,</span>\n  fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'right'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">; i &lt; 100; i++) {</span>\n  data<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>{\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n    street<span class=\"token punctuation\">:</span> <span class=\"token string\">'Lake Park'</span><span class=\"token punctuation\">,</span>\n    building<span class=\"token punctuation\">:</span> <span class=\"token string\">'C'</span><span class=\"token punctuation\">,</span>\n    number<span class=\"token punctuation\">:</span> <span class=\"token number\">2035</span><span class=\"token punctuation\">,</span>\n    companyAddress<span class=\"token punctuation\">:</span> <span class=\"token string\">'Lake Street 42'</span><span class=\"token punctuation\">,</span>\n    companyName<span class=\"token punctuation\">:</span> <span class=\"token string\">'SoftLake Co'</span><span class=\"token punctuation\">,</span>\n    gender<span class=\"token punctuation\">:</span> <span class=\"token string\">'M'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Table\n    columns<span class=\"token operator\">=</span>{columns}\n    dataSource<span class=\"token operator\">=</span>{data}\n    bordered\n    size<span class=\"token operator\">=</span><span class=\"token string\">\"middle\"</span>\n    scroll<span class=\"token operator\">=</span>{{ x<span class=\"token punctuation\">:</span> <span class=\"token number\">1010</span><span class=\"token punctuation\">,</span> y<span class=\"token punctuation\">:</span> <span class=\"token number\">240</span> }}\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var columns = [{
	    title: 'Name',
	    dataIndex: 'name',
	    key: 'name',
	    width: 100,
	    fixed: 'left',
	    filters: [{
	      text: 'Joe',
	      value: 'Joe'
	    }, {
	      text: 'John',
	      value: 'John'
	    }],
	    onFilter: function onFilter(value, record) {
	      return record.name.indexOf(value) === 0;
	    }
	  }, {
	    title: 'Other',
	    children: [{
	      title: 'Age',
	      dataIndex: 'age',
	      key: 'age',
	      width: 100,
	      sorter: function sorter(a, b) {
	        return a.age - b.age;
	      }
	    }, {
	      title: 'Address',
	      children: [{
	        title: 'Street',
	        dataIndex: 'street',
	        key: 'street',
	        width: 200
	      }, {
	        title: 'Block',
	        children: [{
	          title: 'Building',
	          dataIndex: 'building',
	          key: 'building',
	          width: 50
	        }, {
	          title: 'Door No.',
	          dataIndex: 'number',
	          key: 'number',
	          width: 100
	        }]
	      }]
	    }]
	  }, {
	    title: 'Company',
	    children: [{
	      title: 'Company Address',
	      dataIndex: 'companyAddress',
	      key: 'companyAddress',
	      width: 200
	    }, {
	      title: 'Company Name',
	      dataIndex: 'companyName',
	      key: 'companyName',
	      width: 200
	    }]
	  }, {
	    title: 'Gender',
	    dataIndex: 'gender',
	    key: 'gender',
	    width: 60,
	    fixed: 'right'
	  }];
	  var data = [];

	  for (var i = 0; i < 100; i++) {
	    data.push({
	      key: i,
	      name: 'John Brown',
	      age: i + 1,
	      street: 'Lake Park',
	      building: 'C',
	      number: 2035,
	      companyAddress: 'Lake Street 42',
	      companyName: 'SoftLake Co',
	      gender: 'M'
	    });
	  }

	  return React.createElement(_antd.Table, {
	    columns: columns,
	    dataSource: data,
	    bordered: true,
	    size: "middle",
	    scroll: {
	      x: 1010,
	      y: 240
	    }
	  });
	}
	};

/***/ },

/***/ 1035:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "对某一列数据进行筛选，使用列的 ",
	        [
	          "code",
	          "filters"
	        ],
	        " 属性来指定需要筛选菜单的列，",
	        [
	          "code",
	          "onFilter"
	        ],
	        " 用于筛选当前数据，",
	        [
	          "code",
	          "filterMultiple"
	        ],
	        " 用于指定多选和单选。"
	      ],
	      [
	        "p",
	        "对某一列数据进行排序，通过指定列的 ",
	        [
	          "code",
	          "sorter"
	        ],
	        " 函数即可启动排序按钮。",
	        [
	          "code",
	          "sorter: function(a, b) { ... }"
	        ],
	        "， a、b 为比较的两个列数据。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Use ",
	        [
	          "code",
	          "filters"
	        ],
	        " to generate filter menu in columns, ",
	        [
	          "code",
	          "onFilter"
	        ],
	        " to determine filtered result, and ",
	        [
	          "code",
	          "filterMultiple"
	        ],
	        " to indicate whether it's multiple or single selection."
	      ],
	      [
	        "p",
	        "Use ",
	        [
	          "code",
	          "sorter"
	        ],
	        " to make a column sortable. ",
	        [
	          "code",
	          "sorter"
	        ],
	        " can be a function ",
	        [
	          "code",
	          "function(a, b) { ... }"
	        ],
	        " for sorting data locally."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 7,
	    "title": {
	      "en-US": "Filter and sorter",
	      "zh-CN": "筛选和排序"
	    },
	    "filename": "components/table/demo/head.md",
	    "id": "components-table-demo-head"
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
	      "highlighted": "import { Table } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  filters<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">,</span> {\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">,</span> {\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Submenu'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Submenu'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n      text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Green'</span><span class=\"token punctuation\">,</span>\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Green'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">,</span> {\n      text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Black'</span><span class=\"token punctuation\">,</span>\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Black'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token operator\">/</span><span class=\"token operator\">/</span> specify the condition of filtering result\n  <span class=\"token operator\">/</span><span class=\"token operator\">/</span> here is that finding the name started <span class=\"token keyword\">with</span> `value`\n  onFilter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  sorter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> a<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> b<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  sorter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> a<span class=\"token punctuation\">.</span>age <span class=\"token operator\">-</span> b<span class=\"token punctuation\">.</span>age<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n  filters<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'London'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'London'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">,</span> {\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  filterMultiple<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  onFilter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>address<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  sorter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> a<span class=\"token punctuation\">.</span>address<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> b<span class=\"token punctuation\">.</span>address<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'4'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Red'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 2 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>pagination<span class=\"token punctuation\">,</span> filters<span class=\"token punctuation\">,</span> sorter<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'params'</span><span class=\"token punctuation\">,</span> pagination<span class=\"token punctuation\">,</span> filters<span class=\"token punctuation\">,</span> sorter<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Table columns<span class=\"token operator\">=</span>{columns} dataSource<span class=\"token operator\">=</span>{data} onChange<span class=\"token operator\">=</span>{onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var columns = [{
	    title: 'Name',
	    dataIndex: 'name',
	    filters: [{
	      text: 'Joe',
	      value: 'Joe'
	    }, {
	      text: 'Jim',
	      value: 'Jim'
	    }, {
	      text: 'Submenu',
	      value: 'Submenu',
	      children: [{
	        text: 'Green',
	        value: 'Green'
	      }, {
	        text: 'Black',
	        value: 'Black'
	      }]
	    }],
	    // specify the condition of filtering result
	    // here is that finding the name started with `value`
	    onFilter: function onFilter(value, record) {
	      return record.name.indexOf(value) === 0;
	    },
	    sorter: function sorter(a, b) {
	      return a.name.length - b.name.length;
	    }
	  }, {
	    title: 'Age',
	    dataIndex: 'age',
	    sorter: function sorter(a, b) {
	      return a.age - b.age;
	    }
	  }, {
	    title: 'Address',
	    dataIndex: 'address',
	    filters: [{
	      text: 'London',
	      value: 'London'
	    }, {
	      text: 'New York',
	      value: 'New York'
	    }],
	    filterMultiple: false,
	    onFilter: function onFilter(value, record) {
	      return record.address.indexOf(value) === 0;
	    },
	    sorter: function sorter(a, b) {
	      return a.address.length - b.address.length;
	    }
	  }];
	  var data = [{
	    key: '1',
	    name: 'John Brown',
	    age: 32,
	    address: 'New York No. 1 Lake Park'
	  }, {
	    key: '2',
	    name: 'Jim Green',
	    age: 42,
	    address: 'London No. 1 Lake Park'
	  }, {
	    key: '3',
	    name: 'Joe Black',
	    age: 32,
	    address: 'Sidney No. 1 Lake Park'
	  }, {
	    key: '4',
	    name: 'Jim Red',
	    age: 32,
	    address: 'London No. 2 Lake Park'
	  }];

	  function onChange(pagination, filters, sorter) {
	    console.log('params', pagination, filters, sorter);
	  }

	  return React.createElement(_antd.Table, {
	    columns: columns,
	    dataSource: data,
	    onChange: onChange
	  });
	}
	};

/***/ },

/***/ 1036:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "使用 JSX 风格的 API（2.5.0 以后引入）"
	      ],
	      [
	        "blockquote",
	        [
	          "p",
	          "这个只是一个描述 ",
	          [
	            "code",
	            "columns"
	          ],
	          " 的语法糖，所以你不能用其他组件去包裹 ",
	          [
	            "code",
	            "Column"
	          ],
	          " 和 ",
	          [
	            "code",
	            "ColumnGroup"
	          ],
	          "。"
	        ]
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Using JSX style API (introduced in 2.5.0)"
	      ],
	      [
	        "blockquote",
	        [
	          "p",
	          "Since this is just a syntax sugar for the prop ",
	          [
	            "code",
	            "columns"
	          ],
	          ", so that you can't compose ",
	          [
	            "code",
	            "Column"
	          ],
	          " and ",
	          [
	            "code",
	            "ColumnGroup"
	          ],
	          " with other Components."
	        ]
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "en-US": "JSX style API",
	      "zh-CN": "JSX 风格的 API"
	    },
	    "filename": "components/table/demo/jsx.md",
	    "id": "components-table-demo-jsx"
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
	      "highlighted": "import { Table<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> { Column<span class=\"token punctuation\">,</span> ColumnGroup } <span class=\"token operator\">=</span> Table<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  firstName<span class=\"token punctuation\">:</span> <span class=\"token string\">'John'</span><span class=\"token punctuation\">,</span>\n  lastName<span class=\"token punctuation\">:</span> <span class=\"token string\">'Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  firstName<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim'</span><span class=\"token punctuation\">,</span>\n  lastName<span class=\"token punctuation\">:</span> <span class=\"token string\">'Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  firstName<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe'</span><span class=\"token punctuation\">,</span>\n  lastName<span class=\"token punctuation\">:</span> <span class=\"token string\">'Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Table dataSource<span class=\"token operator\">=</span>{data}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>ColumnGroup title<span class=\"token operator\">=</span><span class=\"token string\">\"Name\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Column\n        title<span class=\"token operator\">=</span><span class=\"token string\">\"First Name\"</span>\n        dataIndex<span class=\"token operator\">=</span><span class=\"token string\">\"firstName\"</span>\n        key<span class=\"token operator\">=</span><span class=\"token string\">\"firstName\"</span>\n      <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Column\n        title<span class=\"token operator\">=</span><span class=\"token string\">\"Last Name\"</span>\n        dataIndex<span class=\"token operator\">=</span><span class=\"token string\">\"lastName\"</span>\n        key<span class=\"token operator\">=</span><span class=\"token string\">\"lastName\"</span>\n      <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>ColumnGroup<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Column\n      title<span class=\"token operator\">=</span><span class=\"token string\">\"Age\"</span>\n      dataIndex<span class=\"token operator\">=</span><span class=\"token string\">\"age\"</span>\n      key<span class=\"token operator\">=</span><span class=\"token string\">\"age\"</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Column\n      title<span class=\"token operator\">=</span><span class=\"token string\">\"Address\"</span>\n      dataIndex<span class=\"token operator\">=</span><span class=\"token string\">\"address\"</span>\n      key<span class=\"token operator\">=</span><span class=\"token string\">\"address\"</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Column\n      title<span class=\"token operator\">=</span><span class=\"token string\">\"Action\"</span>\n      key<span class=\"token operator\">=</span><span class=\"token string\">\"action\"</span>\n      render<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n        <span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>Action 一 {record<span class=\"token punctuation\">.</span>name}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-divider\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>Delete<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-divider\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span> className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-dropdown-link\"</span><span class=\"token operator\">></span>\n            More actions <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"down\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n      <span class=\"token punctuation\">)</span>}\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Table<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Column = _antd.Table.Column,
	      ColumnGroup = _antd.Table.ColumnGroup;
	  var data = [{
	    key: '1',
	    firstName: 'John',
	    lastName: 'Brown',
	    age: 32,
	    address: 'New York No. 1 Lake Park'
	  }, {
	    key: '2',
	    firstName: 'Jim',
	    lastName: 'Green',
	    age: 42,
	    address: 'London No. 1 Lake Park'
	  }, {
	    key: '3',
	    firstName: 'Joe',
	    lastName: 'Black',
	    age: 32,
	    address: 'Sidney No. 1 Lake Park'
	  }];
	  return React.createElement(
	    _antd.Table,
	    {
	      dataSource: data
	    },
	    React.createElement(
	      ColumnGroup,
	      {
	        title: "Name"
	      },
	      React.createElement(Column, {
	        title: "First Name",
	        dataIndex: "firstName",
	        key: "firstName"
	      }),
	      React.createElement(Column, {
	        title: "Last Name",
	        dataIndex: "lastName",
	        key: "lastName"
	      })
	    ),
	    React.createElement(Column, {
	      title: "Age",
	      dataIndex: "age",
	      key: "age"
	    }),
	    React.createElement(Column, {
	      title: "Address",
	      dataIndex: "address",
	      key: "address"
	    }),
	    React.createElement(Column, {
	      title: "Action",
	      key: "action",
	      render: function render(text, record) {
	        return React.createElement(
	          "span",
	          null,
	          React.createElement(
	            "a",
	            {
	              href: "#"
	            },
	            "Action 一 ",
	            record.name
	          ),
	          React.createElement("span", {
	            className: "ant-divider"
	          }),
	          React.createElement(
	            "a",
	            {
	              href: "#"
	            },
	            "Delete"
	          ),
	          React.createElement("span", {
	            className: "ant-divider"
	          }),
	          React.createElement(
	            "a",
	            {
	              href: "#",
	              className: "ant-dropdown-link"
	            },
	            "More actions ",
	            React.createElement(_antd.Icon, {
	              type: "down"
	            })
	          )
	        );
	      }
	    })
	  );
	}
	};

/***/ },

/***/ 1037:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "表格中的分页器可以通过一个配置对象来配置，当 ",
	        [
	          "code",
	          "pagination={false}"
	        ],
	        " 时，会隐藏分页器。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The pagination in table could be configured with an object, and you can use ",
	        [
	          "code",
	          "pagination={false}"
	        ],
	        " to turn off pagination."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "en-US": "Pagination",
	      "zh-CN": "分页"
	    },
	    "filename": "components/table/demo/paging.md",
	    "id": "components-table-demo-paging"
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
	      "highlighted": "import { Table } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> text <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>{text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">; i &lt; 46; i++) {</span>\n  data<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>{\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> `Edward King ${i}`<span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> `London<span class=\"token punctuation\">,</span> Park Lane no<span class=\"token punctuation\">.</span> ${i}`<span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\n<span class=\"token keyword\">const</span> pagination <span class=\"token operator\">=</span> {\n  total<span class=\"token punctuation\">:</span> data<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">,</span>\n  showSizeChanger<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  onShowSizeChange<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>current<span class=\"token punctuation\">,</span> pageSize<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Current: '</span><span class=\"token punctuation\">,</span> current<span class=\"token punctuation\">,</span> '<span class=\"token comment\" spellcheck=\"true\">; PageSize: ', pageSize);</span>\n  }<span class=\"token punctuation\">,</span>\n  onChange<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>current<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Current: '</span><span class=\"token punctuation\">,</span> current<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Table columns<span class=\"token operator\">=</span>{columns} dataSource<span class=\"token operator\">=</span>{data} pagination<span class=\"token operator\">=</span>{pagination} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var columns = [{
	    title: 'Name',
	    dataIndex: 'name',
	    render: function render(text) {
	      return React.createElement(
	        "a",
	        {
	          href: "#"
	        },
	        text
	      );
	    }
	  }, {
	    title: 'Age',
	    dataIndex: 'age'
	  }, {
	    title: 'Address',
	    dataIndex: 'address'
	  }];
	  var data = [];

	  for (var i = 0; i < 46; i++) {
	    data.push({
	      key: i,
	      name: "Edward King " + i,
	      age: 32,
	      address: "London, Park Lane no. " + i
	    });
	  }

	  var pagination = {
	    total: data.length,
	    showSizeChanger: true,
	    onShowSizeChange: function onShowSizeChange(current, pageSize) {
	      console.log('Current: ', current, '; PageSize: ', pageSize);
	    },
	    onChange: function onChange(current) {
	      console.log('Current: ', current);
	    }
	  };
	  return React.createElement(_antd.Table, {
	    columns: columns,
	    dataSource: data,
	    pagination: pagination
	  });
	}
	};

/***/ },

/***/ 1038:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "使用受控属性对筛选和排序状态进行控制。"
	      ],
	      [
	        "blockquote",
	        [
	          "ol",
	          [
	            "li",
	            [
	              "p",
	              "columns 中定义了 filteredValue 和 sortOrder 属性即视为受控模式。"
	            ]
	          ],
	          [
	            "li",
	            [
	              "p",
	              "只支持同时对一列进行排序，请保证只有一列的 sortOrder 属性是生效的。"
	            ]
	          ],
	          [
	            "li",
	            [
	              "p",
	              "务必指定 ",
	              [
	                "code",
	                "column.key"
	              ],
	              "。"
	            ]
	          ]
	        ]
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Control filters and sorters by ",
	        [
	          "code",
	          "filteredValue"
	        ],
	        " and ",
	        [
	          "code",
	          "sortOrder"
	        ],
	        "."
	      ],
	      [
	        "blockquote",
	        [
	          "ol",
	          [
	            "li",
	            [
	              "p",
	              "Defining ",
	              [
	                "code",
	                "filteredValue"
	              ],
	              " or ",
	              [
	                "code",
	                "sortOrder"
	              ],
	              " means that it is in the controlled mode."
	            ]
	          ],
	          [
	            "li",
	            [
	              "p",
	              "Make sure ",
	              [
	                "code",
	                "sortOrder"
	              ],
	              " is assigned for only one column."
	            ]
	          ],
	          [
	            "li",
	            [
	              "p",
	              [
	                "code",
	                "column.key"
	              ],
	              " is required."
	            ]
	          ]
	        ]
	      ]
	    ]
	  },
	  "meta": {
	    "order": 7,
	    "title": {
	      "en-US": "Reset filters and sorters",
	      "zh-CN": "可控的筛选和排序"
	    },
	    "filename": "components/table/demo/reset-filter.md",
	    "id": "components-table-demo-reset-filter"
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
	      "highlighted": "import { Table<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'4'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Red'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 2 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      filteredInfo<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n      sortedInfo<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>pagination<span class=\"token punctuation\">,</span> filters<span class=\"token punctuation\">,</span> sorter<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Various parameters'</span><span class=\"token punctuation\">,</span> pagination<span class=\"token punctuation\">,</span> filters<span class=\"token punctuation\">,</span> sorter<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      filteredInfo<span class=\"token punctuation\">:</span> filters<span class=\"token punctuation\">,</span>\n      sortedInfo<span class=\"token punctuation\">:</span> sorter<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">clearFilters</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ filteredInfo<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">clearAll</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      filteredInfo<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n      sortedInfo<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">setAgeSort</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      sortedInfo<span class=\"token punctuation\">:</span> {\n        order<span class=\"token punctuation\">:</span> <span class=\"token string\">'descend'</span><span class=\"token punctuation\">,</span>\n        columnKey<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    let { sortedInfo<span class=\"token punctuation\">,</span> filteredInfo } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    sortedInfo <span class=\"token operator\">=</span> sortedInfo || {}<span class=\"token comment\" spellcheck=\"true\">;</span>\n    filteredInfo <span class=\"token operator\">=</span> filteredInfo || {}<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n      filters<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n        { text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe'</span> }<span class=\"token punctuation\">,</span>\n        { text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim'</span> }<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      filteredValue<span class=\"token punctuation\">:</span> filteredInfo<span class=\"token punctuation\">.</span>name || <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n      onFilter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span><span class=\"token function\">includes</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      sorter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> a<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> b<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">,</span>\n      sortOrder<span class=\"token punctuation\">:</span> sortedInfo<span class=\"token punctuation\">.</span>columnKey <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token string\">'name'</span> <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> sortedInfo<span class=\"token punctuation\">.</span>order<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">,</span> {\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n      sorter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> a<span class=\"token punctuation\">.</span>age <span class=\"token operator\">-</span> b<span class=\"token punctuation\">.</span>age<span class=\"token punctuation\">,</span>\n      sortOrder<span class=\"token punctuation\">:</span> sortedInfo<span class=\"token punctuation\">.</span>columnKey <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token string\">'age'</span> <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> sortedInfo<span class=\"token punctuation\">.</span>order<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">,</span> {\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n      filters<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n        { text<span class=\"token punctuation\">:</span> <span class=\"token string\">'London'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'London'</span> }<span class=\"token punctuation\">,</span>\n        { text<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York'</span> }<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      filteredValue<span class=\"token punctuation\">:</span> filteredInfo<span class=\"token punctuation\">.</span>address || <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n      onFilter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>address<span class=\"token punctuation\">.</span><span class=\"token function\">includes</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      sorter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> a<span class=\"token punctuation\">.</span>address<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> b<span class=\"token punctuation\">.</span>address<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">,</span>\n      sortOrder<span class=\"token punctuation\">:</span> sortedInfo<span class=\"token punctuation\">.</span>columnKey <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token string\">'address'</span> <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> sortedInfo<span class=\"token punctuation\">.</span>order<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"table-operations\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>setAgeSort}<span class=\"token operator\">></span>Sort age<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>clearFilters}<span class=\"token operator\">></span>Clear filters<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>clearAll}<span class=\"token operator\">></span>Clear filters <span class=\"token operator\">and</span> sorters<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Table columns<span class=\"token operator\">=</span>{columns} dataSource<span class=\"token operator\">=</span>{data} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var data = [{
	    key: '1',
	    name: 'John Brown',
	    age: 32,
	    address: 'New York No. 1 Lake Park'
	  }, {
	    key: '2',
	    name: 'Jim Green',
	    age: 42,
	    address: 'London No. 1 Lake Park'
	  }, {
	    key: '3',
	    name: 'Joe Black',
	    age: 32,
	    address: 'Sidney No. 1 Lake Park'
	  }, {
	    key: '4',
	    name: 'Jim Red',
	    age: 32,
	    address: 'London No. 2 Lake Park'
	  }];
	  var App = React.createClass({
	    displayName: "App",
	    getInitialState: function getInitialState() {
	      return {
	        filteredInfo: null,
	        sortedInfo: null
	      };
	    },
	    handleChange: function handleChange(pagination, filters, sorter) {
	      console.log('Various parameters', pagination, filters, sorter);
	      this.setState({
	        filteredInfo: filters,
	        sortedInfo: sorter
	      });
	    },
	    clearFilters: function clearFilters() {
	      this.setState({
	        filteredInfo: null
	      });
	    },
	    clearAll: function clearAll() {
	      this.setState({
	        filteredInfo: null,
	        sortedInfo: null
	      });
	    },
	    setAgeSort: function setAgeSort() {
	      this.setState({
	        sortedInfo: {
	          order: 'descend',
	          columnKey: 'age'
	        }
	      });
	    },
	    render: function render() {
	      var _state = this.state,
	          sortedInfo = _state.sortedInfo,
	          filteredInfo = _state.filteredInfo;
	      sortedInfo = sortedInfo || {};
	      filteredInfo = filteredInfo || {};
	      var columns = [{
	        title: 'Name',
	        dataIndex: 'name',
	        key: 'name',
	        filters: [{
	          text: 'Joe',
	          value: 'Joe'
	        }, {
	          text: 'Jim',
	          value: 'Jim'
	        }],
	        filteredValue: filteredInfo.name || null,
	        onFilter: function onFilter(value, record) {
	          return record.name.includes(value);
	        },
	        sorter: function sorter(a, b) {
	          return a.name.length - b.name.length;
	        },
	        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order
	      }, {
	        title: 'Age',
	        dataIndex: 'age',
	        key: 'age',
	        sorter: function sorter(a, b) {
	          return a.age - b.age;
	        },
	        sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order
	      }, {
	        title: 'Address',
	        dataIndex: 'address',
	        key: 'address',
	        filters: [{
	          text: 'London',
	          value: 'London'
	        }, {
	          text: 'New York',
	          value: 'New York'
	        }],
	        filteredValue: filteredInfo.address || null,
	        onFilter: function onFilter(value, record) {
	          return record.address.includes(value);
	        },
	        sorter: function sorter(a, b) {
	          return a.address.length - b.address.length;
	        },
	        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order
	      }];
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "div",
	          {
	            className: "table-operations"
	          },
	          React.createElement(
	            _antd.Button,
	            {
	              onClick: this.setAgeSort
	            },
	            "Sort age"
	          ),
	          React.createElement(
	            _antd.Button,
	            {
	              onClick: this.clearFilters
	            },
	            "Clear filters"
	          ),
	          React.createElement(
	            _antd.Button,
	            {
	              onClick: this.clearAll
	            },
	            "Clear filters and sorters"
	          )
	        ),
	        React.createElement(_antd.Table, {
	          columns: columns,
	          dataSource: data,
	          onChange: this.handleChange
	        })
	      );
	    }
	  });
	  return React.createElement(App, null);
	},
	  "style": ".table-operations {\n  margin-bottom: 16px;\n}\n\n.table-operations > button {\n  margin-right: 8px;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.table-operations</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.table-operations</span> > button </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1039:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "选择后进行操作，完成后清空选择，通过 ",
	        [
	          "code",
	          "rowSelection.selectedRowKeys"
	        ],
	        " 来控制选中项。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "To perform operations and clear selections after selecting some rows, use ",
	        [
	          "code",
	          "rowSelection.selectedRowKeys"
	        ],
	        " to control selected rows."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "en-US": "Selection and operation",
	      "zh-CN": "选择和操作"
	    },
	    "filename": "components/table/demo/row-selection-and-operation.md",
	    "id": "components-table-demo-row-selection-and-operation"
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
	      "highlighted": "import { Table<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">; i &lt; 46; i++) {</span>\n  data<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>{\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> `Edward King ${i}`<span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> `London<span class=\"token punctuation\">,</span> Park Lane no<span class=\"token punctuation\">.</span> ${i}`<span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      selectedRowKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>  <span class=\"token operator\">/</span><span class=\"token operator\">/</span> Check here <span class=\"token keyword\">to</span> configure the <span class=\"token keyword\">default</span> column\n      loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">start</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> ajax request after empty completing\n    <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n        selectedRowKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">,</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onSelectChange</span><span class=\"token punctuation\">(</span>selectedRowKeys<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'selectedRowKeys changed: '</span><span class=\"token punctuation\">,</span> selectedRowKeys<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ selectedRowKeys }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { loading<span class=\"token punctuation\">,</span> selectedRowKeys } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> rowSelection <span class=\"token operator\">=</span> {\n      selectedRowKeys<span class=\"token punctuation\">,</span>\n      onChange<span class=\"token punctuation\">:</span> this<span class=\"token punctuation\">.</span>onSelectChange<span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> hasSelected <span class=\"token operator\">=</span> selectedRowKeys<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> }}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>start}\n            disabled<span class=\"token operator\">=</span>{!hasSelected} loading<span class=\"token operator\">=</span>{loading}\n          <span class=\"token operator\">></span>Reload<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>span style<span class=\"token operator\">=</span>{{ marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> }}<span class=\"token operator\">></span>{hasSelected <span class=\"token operator\">?</span> `Selected ${selectedRowKeys<span class=\"token punctuation\">.</span>length} items` <span class=\"token punctuation\">:</span> <span class=\"token string\">''</span>}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Table rowSelection<span class=\"token operator\">=</span>{rowSelection} columns<span class=\"token operator\">=</span>{columns} dataSource<span class=\"token operator\">=</span>{data} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var columns = [{
	    title: 'Name',
	    dataIndex: 'name'
	  }, {
	    title: 'Age',
	    dataIndex: 'age'
	  }, {
	    title: 'Address',
	    dataIndex: 'address'
	  }];
	  var data = [];

	  for (var i = 0; i < 46; i++) {
	    data.push({
	      key: i,
	      name: "Edward King " + i,
	      age: 32,
	      address: "London, Park Lane no. " + i
	    });
	  }

	  var App = React.createClass({
	    displayName: "App",
	    getInitialState: function getInitialState() {
	      return {
	        selectedRowKeys: [],
	        // Check here to configure the default column
	        loading: false
	      };
	    },
	    start: function start() {
	      var _this = this;

	      this.setState({
	        loading: true
	      }); // ajax request after empty completing

	      setTimeout(function () {
	        _this.setState({
	          selectedRowKeys: [],
	          loading: false
	        });
	      }, 1000);
	    },
	    onSelectChange: function onSelectChange(selectedRowKeys) {
	      console.log('selectedRowKeys changed: ', selectedRowKeys);
	      this.setState({
	        selectedRowKeys: selectedRowKeys
	      });
	    },
	    render: function render() {
	      var _state = this.state,
	          loading = _state.loading,
	          selectedRowKeys = _state.selectedRowKeys;
	      var rowSelection = {
	        selectedRowKeys: selectedRowKeys,
	        onChange: this.onSelectChange
	      };
	      var hasSelected = selectedRowKeys.length > 0;
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "div",
	          {
	            style: {
	              marginBottom: 16
	            }
	          },
	          React.createElement(
	            _antd.Button,
	            {
	              type: "primary",
	              onClick: this.start,
	              disabled: !hasSelected,
	              loading: loading
	            },
	            "Reload"
	          ),
	          React.createElement(
	            "span",
	            {
	              style: {
	                marginLeft: 8
	              }
	            },
	            hasSelected ? "Selected " + selectedRowKeys.length + " items" : ''
	          )
	        ),
	        React.createElement(_antd.Table, {
	          rowSelection: rowSelection,
	          columns: columns,
	          dataSource: data
	        })
	      );
	    }
	  });
	  return React.createElement(App, null);
	}
	};

/***/ },

/***/ 1040:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "第一列是联动的选择框。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Rows can be selectable by making first column as a selectable column."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "en-US": "selection",
	      "zh-CN": "可选择"
	    },
	    "filename": "components/table/demo/row-selection.md",
	    "id": "components-table-demo-row-selection"
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
	      "highlighted": "import { Table } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> text <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>{text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'4'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Disabled User'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">99</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token operator\">/</span><span class=\"token operator\">/</span> rowSelection object indicates the need <span class=\"token keyword\">for</span> row selection\n<span class=\"token keyword\">const</span> rowSelection <span class=\"token operator\">=</span> {\n  onChange<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>selectedRowKeys<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>`selectedRowKeys<span class=\"token punctuation\">:</span> ${selectedRowKeys}`<span class=\"token punctuation\">,</span> <span class=\"token string\">'selectedRows: '</span><span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  onSelect<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">,</span> selected<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">,</span> selected<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  onSelectAll<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>selected<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">,</span> changeRows<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>selected<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">,</span> changeRows<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  getCheckboxProps<span class=\"token punctuation\">:</span> record <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>{\n    disabled<span class=\"token punctuation\">:</span> record<span class=\"token punctuation\">.</span>name <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token string\">'Disabled User'</span><span class=\"token punctuation\">,</span>    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> Column configuration <span class=\"token operator\">not</span> <span class=\"token keyword\">to</span> be checked\n  }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Table rowSelection<span class=\"token operator\">=</span>{rowSelection} columns<span class=\"token operator\">=</span>{columns} dataSource<span class=\"token operator\">=</span>{data} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var columns = [{
	    title: 'Name',
	    dataIndex: 'name',
	    render: function render(text) {
	      return React.createElement(
	        "a",
	        {
	          href: "#"
	        },
	        text
	      );
	    }
	  }, {
	    title: 'Age',
	    dataIndex: 'age'
	  }, {
	    title: 'Address',
	    dataIndex: 'address'
	  }];
	  var data = [{
	    key: '1',
	    name: 'John Brown',
	    age: 32,
	    address: 'New York No. 1 Lake Park'
	  }, {
	    key: '2',
	    name: 'Jim Green',
	    age: 42,
	    address: 'London No. 1 Lake Park'
	  }, {
	    key: '3',
	    name: 'Joe Black',
	    age: 32,
	    address: 'Sidney No. 1 Lake Park'
	  }, {
	    key: '4',
	    name: 'Disabled User',
	    age: 99,
	    address: 'Sidney No. 1 Lake Park'
	  }]; // rowSelection object indicates the need for row selection

	  var rowSelection = {
	    onChange: function onChange(selectedRowKeys, selectedRows) {
	      console.log("selectedRowKeys: " + selectedRowKeys, 'selectedRows: ', selectedRows);
	    },
	    onSelect: function onSelect(record, selected, selectedRows) {
	      console.log(record, selected, selectedRows);
	    },
	    onSelectAll: function onSelectAll(selected, selectedRows, changeRows) {
	      console.log(selected, selectedRows, changeRows);
	    },
	    getCheckboxProps: function getCheckboxProps(record) {
	      return {
	        disabled: record.name === 'Disabled User'
	      };
	    }
	  };
	  return React.createElement(_antd.Table, {
	    rowSelection: rowSelection,
	    columns: columns,
	    dataSource: data
	  });
	}
	};

/***/ },

/***/ 1041:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "两种紧凑型的列表，小型列表只用于对话框内。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Two compacted table size: ",
	        [
	          "code",
	          "middle"
	        ],
	        " and ",
	        [
	          "code",
	          "small"
	        ],
	        ", ",
	        [
	          "code",
	          "small"
	        ],
	        " size is used in Modal only."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 10,
	    "title": {
	      "en-US": "size",
	      "zh-CN": "紧凑型"
	    },
	    "filename": "components/table/demo/size.md",
	    "id": "components-table-demo-size"
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
	      "highlighted": "import { Table } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>h4<span class=\"token operator\">></span>Middle size table<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h4<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Table columns<span class=\"token operator\">=</span>{columns} dataSource<span class=\"token operator\">=</span>{data} size<span class=\"token operator\">=</span><span class=\"token string\">\"middle\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>h4<span class=\"token operator\">></span>Small size table<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h4<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Table columns<span class=\"token operator\">=</span>{columns} dataSource<span class=\"token operator\">=</span>{data} size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var columns = [{
	    title: 'Name',
	    dataIndex: 'name'
	  }, {
	    title: 'Age',
	    dataIndex: 'age'
	  }, {
	    title: 'Address',
	    dataIndex: 'address'
	  }];
	  var data = [{
	    key: '1',
	    name: 'John Brown',
	    age: 32,
	    address: 'New York No. 1 Lake Park'
	  }, {
	    key: '2',
	    name: 'Jim Green',
	    age: 42,
	    address: 'London No. 1 Lake Park'
	  }, {
	    key: '3',
	    name: 'Joe Black',
	    age: 32,
	    address: 'Sidney No. 1 Lake Park'
	  }];
	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      "h4",
	      null,
	      "Middle size table"
	    ),
	    React.createElement(_antd.Table, {
	      columns: columns,
	      dataSource: data,
	      size: "middle"
	    }),
	    React.createElement(
	      "h4",
	      null,
	      "Small size table"
	    ),
	    React.createElement(_antd.Table, {
	      columns: columns,
	      dataSource: data,
	      size: "small"
	    })
	  );
	},
	  "style": "#components-table-demo-size h4 { margin-bottom: 16px; }"
	};

/***/ },

/***/ 1234:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'ajax': __webpack_require__(1021),
	    'basic': __webpack_require__(1022),
	    'bordered': __webpack_require__(1023),
	    'colspan-rowspan': __webpack_require__(1024),
	    'custom-filter-panel': __webpack_require__(1025),
	    'dynamic-settings': __webpack_require__(1026),
	    'edit-cell': __webpack_require__(1027),
	    'edit-row': __webpack_require__(1028),
	    'expand-children': __webpack_require__(1029),
	    'expand': __webpack_require__(1030),
	    'fixed-columns-header': __webpack_require__(1031),
	    'fixed-columns': __webpack_require__(1032),
	    'fixed-header': __webpack_require__(1033),
	    'grouping-columns': __webpack_require__(1034),
	    'head': __webpack_require__(1035),
	    'jsx': __webpack_require__(1036),
	    'paging': __webpack_require__(1037),
	    'reset-filter': __webpack_require__(1038),
	    'row-selection-and-operation': __webpack_require__(1039),
	    'row-selection': __webpack_require__(1040),
	    'size': __webpack_require__(1041),
	}

/***/ },

/***/ 1923:
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
	      XHR2 = __webpack_require__(1935)
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

/***/ 1935:
/***/ function(module, exports) {

	/* (ignored) */

/***/ }

});