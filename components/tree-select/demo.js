webpackJsonp([42,210],{

/***/ 1091:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "最简单的用法。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The most basic usage."
	      ]
	    ]
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
	      "highlighted": "import { TreeSelect } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> TreeNode <span class=\"token operator\">=</span> TreeSelect<span class=\"token punctuation\">.</span>TreeNode<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Demo <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      value<span class=\"token punctuation\">:</span> undefined<span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>arguments<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ value }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>TreeSelect\n        showSearch\n        style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span> }}\n        value<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value}\n        dropdownStyle<span class=\"token operator\">=</span>{{ maxHeight<span class=\"token punctuation\">:</span> <span class=\"token number\">400</span><span class=\"token punctuation\">,</span> overflow<span class=\"token punctuation\">:</span> <span class=\"token string\">'auto'</span> }}\n        placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Please select\"</span>\n        allowClear\n        treeDefaultExpandAll\n        onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onChange}\n      <span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>TreeNode value<span class=\"token operator\">=</span><span class=\"token string\">\"parent 1\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"parent 1\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"0-1\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>TreeNode value<span class=\"token operator\">=</span><span class=\"token string\">\"parent 1-0\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"parent 1-0\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"0-1-1\"</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>TreeNode value<span class=\"token operator\">=</span><span class=\"token string\">\"leaf1\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"my leaf\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"random\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>TreeNode value<span class=\"token operator\">=</span><span class=\"token string\">\"leaf2\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"your leaf\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"random1\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TreeNode<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>TreeNode value<span class=\"token operator\">=</span><span class=\"token string\">\"parent 1-1\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"parent 1-1\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"random2\"</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>TreeNode value<span class=\"token operator\">=</span><span class=\"token string\">\"sss\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>b style<span class=\"token operator\">=</span>{{ color<span class=\"token punctuation\">:</span> <span class=\"token string\">'#08c'</span> }}<span class=\"token operator\">></span>sss<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>b<span class=\"token operator\">></span>} key<span class=\"token operator\">=</span><span class=\"token string\">\"random3\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TreeNode<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TreeNode<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TreeSelect<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Demo <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var TreeNode = _antd.TreeSelect.TreeNode;
	  var Demo = React.createClass({
	    displayName: "Demo",
	    getInitialState: function getInitialState() {
	      return {
	        value: undefined
	      };
	    },
	    onChange: function onChange(value) {
	      console.log(arguments);
	      this.setState({
	        value: value
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        _antd.TreeSelect,
	        {
	          showSearch: true,
	          style: {
	            width: 300
	          },
	          value: this.state.value,
	          dropdownStyle: {
	            maxHeight: 400,
	            overflow: 'auto'
	          },
	          placeholder: "Please select",
	          allowClear: true,
	          treeDefaultExpandAll: true,
	          onChange: this.onChange
	        },
	        React.createElement(
	          TreeNode,
	          {
	            value: "parent 1",
	            title: "parent 1",
	            key: "0-1"
	          },
	          React.createElement(
	            TreeNode,
	            {
	              value: "parent 1-0",
	              title: "parent 1-0",
	              key: "0-1-1"
	            },
	            React.createElement(TreeNode, {
	              value: "leaf1",
	              title: "my leaf",
	              key: "random"
	            }),
	            React.createElement(TreeNode, {
	              value: "leaf2",
	              title: "your leaf",
	              key: "random1"
	            })
	          ),
	          React.createElement(
	            TreeNode,
	            {
	              value: "parent 1-1",
	              title: "parent 1-1",
	              key: "random2"
	            },
	            React.createElement(TreeNode, {
	              value: "sss",
	              title: React.createElement(
	                "b",
	                {
	                  style: {
	                    color: '#08c'
	                  }
	                },
	                "sss"
	              ),
	              key: "random3"
	            })
	          )
	        )
	      );
	    }
	  });
	  return React.createElement(Demo, null);
	}
	};

/***/ },

/***/ 1092:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "多选和勾选框功能。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Multiple and checkable."
	      ]
	    ]
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
	      "highlighted": "import { TreeSelect } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> SHOW_PARENT <span class=\"token operator\">=</span> TreeSelect<span class=\"token punctuation\">.</span>SHOW_PARENT<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> treeData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Node1'</span><span class=\"token punctuation\">,</span>\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-0'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-0'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Child Node1'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-0-0'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-0-0'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Node2'</span><span class=\"token punctuation\">,</span>\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-1'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-1'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Child Node3'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-1-0'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-1-0'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">,</span> {\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Child Node4'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-1-1'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-1-1'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">,</span> {\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Child Node5'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-1-2'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-1-2'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Demo <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      value<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'0-0-0'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'onChange '</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">,</span> arguments<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ value }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> tProps <span class=\"token operator\">=</span> {\n      treeData<span class=\"token punctuation\">,</span>\n      value<span class=\"token punctuation\">:</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">,</span>\n      onChange<span class=\"token punctuation\">:</span> this<span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">,</span>\n      multiple<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      treeCheckable<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      showCheckedStrategy<span class=\"token punctuation\">:</span> SHOW_PARENT<span class=\"token punctuation\">,</span>\n      searchPlaceholder<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select'</span><span class=\"token punctuation\">,</span>\n      style<span class=\"token punctuation\">:</span> {\n        width<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token operator\">&lt;</span>TreeSelect {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>tProps} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Demo <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var SHOW_PARENT = _antd.TreeSelect.SHOW_PARENT;
	  var treeData = [{
	    label: 'Node1',
	    value: '0-0',
	    key: '0-0',
	    children: [{
	      label: 'Child Node1',
	      value: '0-0-0',
	      key: '0-0-0'
	    }]
	  }, {
	    label: 'Node2',
	    value: '0-1',
	    key: '0-1',
	    children: [{
	      label: 'Child Node3',
	      value: '0-1-0',
	      key: '0-1-0'
	    }, {
	      label: 'Child Node4',
	      value: '0-1-1',
	      key: '0-1-1'
	    }, {
	      label: 'Child Node5',
	      value: '0-1-2',
	      key: '0-1-2'
	    }]
	  }];
	  var Demo = React.createClass({
	    displayName: "Demo",
	    getInitialState: function getInitialState() {
	      return {
	        value: ['0-0-0']
	      };
	    },
	    onChange: function onChange(value) {
	      console.log('onChange ', value, arguments);
	      this.setState({
	        value: value
	      });
	    },
	    render: function render() {
	      var tProps = {
	        treeData: treeData,
	        value: this.state.value,
	        onChange: this.onChange,
	        multiple: true,
	        treeCheckable: true,
	        showCheckedStrategy: SHOW_PARENT,
	        searchPlaceholder: 'Please select',
	        style: {
	          width: 300
	        }
	      };
	      return React.createElement(_antd.TreeSelect, tProps);
	    }
	  });
	  return React.createElement(Demo, null);
	}
	};

/***/ },

/***/ 1093:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "使用 ",
	        [
	          "code",
	          "treeData"
	        ],
	        " 把 JSON 数据直接生成树结构。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The tree structure can be populated using ",
	        [
	          "code",
	          "treeData"
	        ],
	        " property. This is a quick and easy way to provide the tree content."
	      ]
	    ]
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
	      "highlighted": "import { TreeSelect } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> treeData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Node1'</span><span class=\"token punctuation\">,</span>\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-0'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-0'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Child Node1'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-0-1'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-0-1'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">,</span> {\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Child Node2'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-0-2'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-0-2'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Node2'</span><span class=\"token punctuation\">,</span>\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-1'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-1'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Demo <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      value<span class=\"token punctuation\">:</span> undefined<span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>arguments<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ value }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>TreeSelect\n        style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span> }}\n        value<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value}\n        dropdownStyle<span class=\"token operator\">=</span>{{ maxHeight<span class=\"token punctuation\">:</span> <span class=\"token number\">400</span><span class=\"token punctuation\">,</span> overflow<span class=\"token punctuation\">:</span> <span class=\"token string\">'auto'</span> }}\n        treeData<span class=\"token operator\">=</span>{treeData}\n        placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Please select\"</span>\n        treeDefaultExpandAll\n        onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onChange}\n      <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Demo <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var treeData = [{
	    label: 'Node1',
	    value: '0-0',
	    key: '0-0',
	    children: [{
	      label: 'Child Node1',
	      value: '0-0-1',
	      key: '0-0-1'
	    }, {
	      label: 'Child Node2',
	      value: '0-0-2',
	      key: '0-0-2'
	    }]
	  }, {
	    label: 'Node2',
	    value: '0-1',
	    key: '0-1'
	  }];
	  var Demo = React.createClass({
	    displayName: "Demo",
	    getInitialState: function getInitialState() {
	      return {
	        value: undefined
	      };
	    },
	    onChange: function onChange(value) {
	      console.log(arguments);
	      this.setState({
	        value: value
	      });
	    },
	    render: function render() {
	      return React.createElement(_antd.TreeSelect, {
	        style: {
	          width: 300
	        },
	        value: this.state.value,
	        dropdownStyle: {
	          maxHeight: 400,
	          overflow: 'auto'
	        },
	        treeData: treeData,
	        placeholder: "Please select",
	        treeDefaultExpandAll: true,
	        onChange: this.onChange
	      });
	    }
	  });
	  return React.createElement(Demo, null);
	}
	};

/***/ },

/***/ 1241:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(1091),
	    'checkable': __webpack_require__(1092),
	    'treeData': __webpack_require__(1093),
	}

/***/ }

});