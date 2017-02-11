webpackJsonp([27,211],{

/***/ 1095:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "穿梭框高级用法，可配置操作文案，可定制宽高，可对底部进行自定义渲染。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Advanced Usage of Transfer."
	      ],
	      [
	        "p",
	        "You can customize the labels of the transfer buttons, the width and height of the columns, and what should be displayed in the footer."
	      ]
	    ]
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
	      "highlighted": "import { Transfer<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      mockData<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      targetKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">getMock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">getMock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> targetKeys <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> mockData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">; i &lt; 20; i++) {</span>\n      <span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> {\n        key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token punctuation\">:</span> `content${i <span class=\"token operator\">+</span> <span class=\"token number\">1</span>}`<span class=\"token punctuation\">,</span>\n        description<span class=\"token punctuation\">:</span> `description of content${i <span class=\"token operator\">+</span> <span class=\"token number\">1</span>}`<span class=\"token punctuation\">,</span>\n        chosen<span class=\"token punctuation\">:</span> Math<span class=\"token punctuation\">.</span><span class=\"token function\">random</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">*</span> <span class=\"token number\">2</span> <span class=\"token operator\">></span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token comment\" spellcheck=\"true\">;</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>chosen<span class=\"token punctuation\">)</span> {\n        targetKeys<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n      mockData<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ mockData<span class=\"token punctuation\">,</span> targetKeys }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>targetKeys<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ targetKeys }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">renderFooter</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Button size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span> style<span class=\"token operator\">=</span>{{ float<span class=\"token punctuation\">:</span> <span class=\"token string\">'right'</span><span class=\"token punctuation\">,</span> margin<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> }}\n        onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>getMock}\n      <span class=\"token operator\">></span>\n        reload\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Transfer\n        dataSource<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>mockData}\n        showSearch\n        listStyle<span class=\"token operator\">=</span>{{\n          width<span class=\"token punctuation\">:</span> <span class=\"token number\">250</span><span class=\"token punctuation\">,</span>\n          height<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span><span class=\"token punctuation\">,</span>\n        }}\n        operations<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'to right'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'to left'</span><span class=\"token punctuation\">]</span>}\n        targetKeys<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>targetKeys}\n        onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleChange}\n        render<span class=\"token operator\">=</span>{item <span class=\"token operator\">=</span><span class=\"token operator\">></span> `${item<span class=\"token punctuation\">.</span>title}<span class=\"token operator\">-</span>${item<span class=\"token punctuation\">.</span>description}`}\n        footer<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>renderFooter}\n      <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
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
	        mockData: [],
	        targetKeys: []
	      };
	    },
	    componentDidMount: function componentDidMount() {
	      this.getMock();
	    },
	    getMock: function getMock() {
	      var targetKeys = [];
	      var mockData = [];

	      for (var i = 0; i < 20; i++) {
	        var data = {
	          key: i.toString(),
	          title: "content" + (i + 1),
	          description: "description of content" + (i + 1),
	          chosen: Math.random() * 2 > 1
	        };

	        if (data.chosen) {
	          targetKeys.push(data.key);
	        }

	        mockData.push(data);
	      }

	      this.setState({
	        mockData: mockData,
	        targetKeys: targetKeys
	      });
	    },
	    handleChange: function handleChange(targetKeys) {
	      this.setState({
	        targetKeys: targetKeys
	      });
	    },
	    renderFooter: function renderFooter() {
	      return React.createElement(
	        _antd.Button,
	        {
	          size: "small",
	          style: {
	            float: 'right',
	            margin: 5
	          },
	          onClick: this.getMock
	        },
	        "reload"
	      );
	    },
	    render: function render() {
	      return React.createElement(_antd.Transfer, {
	        dataSource: this.state.mockData,
	        showSearch: true,
	        listStyle: {
	          width: 250,
	          height: 300
	        },
	        operations: ['to right', 'to left'],
	        targetKeys: this.state.targetKeys,
	        onChange: this.handleChange,
	        render: function render(item) {
	          return item.title + "-" + item.description;
	        },
	        footer: this.renderFooter
	      });
	    }
	  });
	  return React.createElement(App, null);
	}
	};

/***/ },

/***/ 1096:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "最基本的用法，展示了 ",
	        [
	          "code",
	          "dataSource"
	        ],
	        "、",
	        [
	          "code",
	          "targetKeys"
	        ],
	        "、每行的渲染函数 ",
	        [
	          "code",
	          "render"
	        ],
	        " 以及回调函数 ",
	        [
	          "code",
	          "onChange"
	        ],
	        " 的用法。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The most basic usage of ",
	        [
	          "code",
	          "Transfer"
	        ],
	        " involves providing the source data and target keys arrays, plus the rendering and change callback functions."
	      ]
	    ]
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
	      "highlighted": "import { Transfer } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> mockData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">; i &lt; 20; i++) {</span>\n  mockData<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>{\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span> `content${i <span class=\"token operator\">+</span> <span class=\"token number\">1</span>}`<span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> `description of content${i <span class=\"token operator\">+</span> <span class=\"token number\">1</span>}`<span class=\"token punctuation\">,</span>\n    disabled<span class=\"token punctuation\">:</span> i % <span class=\"token number\">3</span> <span class=\"token operator\">&lt;</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\n<span class=\"token keyword\">const</span> targetKeys <span class=\"token operator\">=</span> mockData\n        <span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">+</span>item<span class=\"token punctuation\">.</span>key % <span class=\"token number\">3</span> <span class=\"token operator\">></span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span>\n        <span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      targetKeys<span class=\"token punctuation\">,</span>\n      selectedKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>nextTargetKeys<span class=\"token punctuation\">,</span> direction<span class=\"token punctuation\">,</span> moveKeys<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ targetKeys<span class=\"token punctuation\">:</span> nextTargetKeys }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'targetKeys: '</span><span class=\"token punctuation\">,</span> targetKeys<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'direction: '</span><span class=\"token punctuation\">,</span> direction<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'moveKeys: '</span><span class=\"token punctuation\">,</span> moveKeys<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleSelectChange</span><span class=\"token punctuation\">(</span>sourceSelectedKeys<span class=\"token punctuation\">,</span> targetSelectedKeys<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ selectedKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>sourceSelectedKeys<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>targetSelectedKeys<span class=\"token punctuation\">]</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'sourceSelectedKeys: '</span><span class=\"token punctuation\">,</span> sourceSelectedKeys<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'targetSelectedKeys: '</span><span class=\"token punctuation\">,</span> targetSelectedKeys<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> state <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Transfer\n        dataSource<span class=\"token operator\">=</span>{mockData}\n        titles<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'Source'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Target'</span><span class=\"token punctuation\">]</span>}\n        targetKeys<span class=\"token operator\">=</span>{state<span class=\"token punctuation\">.</span>targetKeys}\n        selectedKeys<span class=\"token operator\">=</span>{state<span class=\"token punctuation\">.</span>selectedKeys}\n        onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleChange}\n        onSelectChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleSelectChange}\n        render<span class=\"token operator\">=</span>{item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span>title}\n      <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	  var mockData = [];

	  for (var i = 0; i < 20; i++) {
	    mockData.push({
	      key: i.toString(),
	      title: "content" + (i + 1),
	      description: "description of content" + (i + 1),
	      disabled: i % 3 < 1
	    });
	  }

	  var targetKeys = mockData.filter(function (item) {
	    return +item.key % 3 > 1;
	  }).map(function (item) {
	    return item.key;
	  });
	  var App = React.createClass({
	    displayName: "App",
	    getInitialState: function getInitialState() {
	      return {
	        targetKeys: targetKeys,
	        selectedKeys: []
	      };
	    },
	    handleChange: function handleChange(nextTargetKeys, direction, moveKeys) {
	      this.setState({
	        targetKeys: nextTargetKeys
	      });
	      console.log('targetKeys: ', targetKeys);
	      console.log('direction: ', direction);
	      console.log('moveKeys: ', moveKeys);
	    },
	    handleSelectChange: function handleSelectChange(sourceSelectedKeys, targetSelectedKeys) {
	      this.setState({
	        selectedKeys: [].concat(_toConsumableArray(sourceSelectedKeys), _toConsumableArray(targetSelectedKeys))
	      });
	      console.log('sourceSelectedKeys: ', sourceSelectedKeys);
	      console.log('targetSelectedKeys: ', targetSelectedKeys);
	    },
	    render: function render() {
	      var state = this.state;
	      return React.createElement(_antd.Transfer, {
	        dataSource: mockData,
	        titles: ['Source', 'Target'],
	        targetKeys: state.targetKeys,
	        selectedKeys: state.selectedKeys,
	        onChange: this.handleChange,
	        onSelectChange: this.handleSelectChange,
	        render: function render(item) {
	          return item.title;
	        }
	      });
	    }
	  });
	  return React.createElement(App, null);
	}
	};

/***/ },

/***/ 1097:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "自定义渲染每一个 Transfer Item，可用于渲染复杂数据。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Custom each Transfer Item, and in this way you can render a complex datasource."
	      ]
	    ]
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
	      "highlighted": "import { Transfer } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      mockData<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      targetKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">getMock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">getMock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> targetKeys <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> mockData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">; i &lt; 20; i++) {</span>\n      <span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> {\n        key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token punctuation\">:</span> `content${i <span class=\"token operator\">+</span> <span class=\"token number\">1</span>}`<span class=\"token punctuation\">,</span>\n        description<span class=\"token punctuation\">:</span> `description of content${i <span class=\"token operator\">+</span> <span class=\"token number\">1</span>}`<span class=\"token punctuation\">,</span>\n        chosen<span class=\"token punctuation\">:</span> Math<span class=\"token punctuation\">.</span><span class=\"token function\">random</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">*</span> <span class=\"token number\">2</span> <span class=\"token operator\">></span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token comment\" spellcheck=\"true\">;</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>chosen<span class=\"token punctuation\">)</span> {\n        targetKeys<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n      mockData<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ mockData<span class=\"token punctuation\">,</span> targetKeys }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>targetKeys<span class=\"token punctuation\">,</span> direction<span class=\"token punctuation\">,</span> moveKeys<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>targetKeys<span class=\"token punctuation\">,</span> direction<span class=\"token punctuation\">,</span> moveKeys<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ targetKeys }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">renderItem</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> customLabel <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"custom-item\"</span><span class=\"token operator\">></span>\n        {item<span class=\"token punctuation\">.</span>title} <span class=\"token operator\">-</span> {item<span class=\"token punctuation\">.</span>description}\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n    return {\n      label<span class=\"token punctuation\">:</span> customLabel<span class=\"token punctuation\">,</span>  <span class=\"token operator\">/</span><span class=\"token operator\">/</span> <span class=\"token keyword\">for</span> displayed item\n      value<span class=\"token punctuation\">:</span> item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">,</span>   <span class=\"token operator\">/</span><span class=\"token operator\">/</span> <span class=\"token keyword\">for</span> title <span class=\"token operator\">and</span> filter matching\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Transfer\n        dataSource<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>mockData}\n        listStyle<span class=\"token operator\">=</span>{{\n          width<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span><span class=\"token punctuation\">,</span>\n          height<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span><span class=\"token punctuation\">,</span>\n        }}\n        targetKeys<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>targetKeys}\n        onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleChange}\n        render<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>renderItem}\n      <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
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
	        mockData: [],
	        targetKeys: []
	      };
	    },
	    componentDidMount: function componentDidMount() {
	      this.getMock();
	    },
	    getMock: function getMock() {
	      var targetKeys = [];
	      var mockData = [];

	      for (var i = 0; i < 20; i++) {
	        var data = {
	          key: i.toString(),
	          title: "content" + (i + 1),
	          description: "description of content" + (i + 1),
	          chosen: Math.random() * 2 > 1
	        };

	        if (data.chosen) {
	          targetKeys.push(data.key);
	        }

	        mockData.push(data);
	      }

	      this.setState({
	        mockData: mockData,
	        targetKeys: targetKeys
	      });
	    },
	    handleChange: function handleChange(targetKeys, direction, moveKeys) {
	      console.log(targetKeys, direction, moveKeys);
	      this.setState({
	        targetKeys: targetKeys
	      });
	    },
	    renderItem: function renderItem(item) {
	      var customLabel = React.createElement(
	        "span",
	        {
	          className: "custom-item"
	        },
	        item.title,
	        " - ",
	        item.description
	      );
	      return {
	        label: customLabel,
	        // for displayed item
	        value: item.title
	      };
	    },
	    render: function render() {
	      return React.createElement(_antd.Transfer, {
	        dataSource: this.state.mockData,
	        listStyle: {
	          width: 300,
	          height: 300
	        },
	        targetKeys: this.state.targetKeys,
	        onChange: this.handleChange,
	        render: this.renderItem
	      });
	    }
	  });
	  return React.createElement(App, null);
	}
	};

/***/ },

/***/ 1098:
/***/ function(module, exports) {

	module.exports = {
	  "meta": {

	  }
	};

/***/ },

/***/ 1099:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "带搜索框的穿梭框，可以自定义搜索函数。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Transfer with a search box."
	      ]
	    ]
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
	      "highlighted": "import { Transfer } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      mockData<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      targetKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">getMock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">getMock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> targetKeys <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> mockData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">; i &lt; 20; i++) {</span>\n      <span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> {\n        key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token punctuation\">:</span> `content${i <span class=\"token operator\">+</span> <span class=\"token number\">1</span>}`<span class=\"token punctuation\">,</span>\n        description<span class=\"token punctuation\">:</span> `description of content${i <span class=\"token operator\">+</span> <span class=\"token number\">1</span>}`<span class=\"token punctuation\">,</span>\n        chosen<span class=\"token punctuation\">:</span> Math<span class=\"token punctuation\">.</span><span class=\"token function\">random</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">*</span> <span class=\"token number\">2</span> <span class=\"token operator\">></span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token comment\" spellcheck=\"true\">;</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>chosen<span class=\"token punctuation\">)</span> {\n        targetKeys<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n      mockData<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ mockData<span class=\"token punctuation\">,</span> targetKeys }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">filterOption</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">,</span> option<span class=\"token punctuation\">)</span> {\n    return option<span class=\"token punctuation\">.</span>description<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">></span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>targetKeys<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ targetKeys }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Transfer\n        dataSource<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>mockData}\n        showSearch\n        filterOption<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>filterOption}\n        targetKeys<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>targetKeys}\n        onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleChange}\n        render<span class=\"token operator\">=</span>{item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span>title}\n      <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
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
	        mockData: [],
	        targetKeys: []
	      };
	    },
	    componentDidMount: function componentDidMount() {
	      this.getMock();
	    },
	    getMock: function getMock() {
	      var targetKeys = [];
	      var mockData = [];

	      for (var i = 0; i < 20; i++) {
	        var data = {
	          key: i.toString(),
	          title: "content" + (i + 1),
	          description: "description of content" + (i + 1),
	          chosen: Math.random() * 2 > 1
	        };

	        if (data.chosen) {
	          targetKeys.push(data.key);
	        }

	        mockData.push(data);
	      }

	      this.setState({
	        mockData: mockData,
	        targetKeys: targetKeys
	      });
	    },
	    filterOption: function filterOption(inputValue, option) {
	      return option.description.indexOf(inputValue) > -1;
	    },
	    handleChange: function handleChange(targetKeys) {
	      this.setState({
	        targetKeys: targetKeys
	      });
	    },
	    render: function render() {
	      return React.createElement(_antd.Transfer, {
	        dataSource: this.state.mockData,
	        showSearch: true,
	        filterOption: this.filterOption,
	        targetKeys: this.state.targetKeys,
	        onChange: this.handleChange,
	        render: function render(item) {
	          return item.title;
	        }
	      });
	    }
	  });
	  return React.createElement(App, null);
	}
	};

/***/ },

/***/ 1251:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'advanced': __webpack_require__(1095),
	    'basic': __webpack_require__(1096),
	    'custom-item': __webpack_require__(1097),
	    'large-data': __webpack_require__(1098),
	    'search': __webpack_require__(1099),
	}

/***/ }

});