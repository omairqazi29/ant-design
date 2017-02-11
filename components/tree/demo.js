webpackJsonp([26,211],{

/***/ 1107:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "受控操作示例"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "basic controlled example"
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "受控操作示例",
	      "en-US": "basic controlled example"
	    },
	    "filename": "components/tree/demo/basic-controlled.md",
	    "id": "components-tree-demo-basic-controlled"
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
	      "highlighted": "import { Tree } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> TreeNode <span class=\"token operator\">=</span> Tree<span class=\"token punctuation\">.</span>TreeNode<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> x <span class=\"token operator\">=</span> <span class=\"token number\">3</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> y <span class=\"token operator\">=</span> <span class=\"token number\">2</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> z <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> gData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> generateData <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>_level<span class=\"token punctuation\">,</span> _preKey<span class=\"token punctuation\">,</span> _tns<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n  <span class=\"token keyword\">const</span> preKey <span class=\"token operator\">=</span> _preKey || <span class=\"token string\">'0'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token keyword\">const</span> tns <span class=\"token operator\">=</span> _tns || gData<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n  <span class=\"token keyword\">const</span> children <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">; i &lt; x; i++) {</span>\n    <span class=\"token keyword\">const</span> key <span class=\"token operator\">=</span> `${preKey}<span class=\"token operator\">-</span>${i}`<span class=\"token comment\" spellcheck=\"true\">;</span>\n    tns<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>{ title<span class=\"token punctuation\">:</span> key<span class=\"token punctuation\">,</span> key }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>i <span class=\"token operator\">&lt;</span> y<span class=\"token punctuation\">)</span> {\n      children<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n  }\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>_level <span class=\"token operator\">&lt;</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span> {\n    return tns<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token keyword\">const</span> level <span class=\"token operator\">=</span> _level <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  children<span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    tns<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>children <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token function\">generateData</span><span class=\"token punctuation\">(</span>level<span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">,</span> tns<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token function\">generateData</span><span class=\"token punctuation\">(</span>z<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Demo <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      expandedKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'0-0-0'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'0-0-1'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      autoExpandParent<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      checkedKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'0-0-0'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      selectedKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onExpand</span><span class=\"token punctuation\">(</span>expandedKeys<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'onExpand'</span><span class=\"token punctuation\">,</span> arguments<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> <span class=\"token keyword\">if</span> <span class=\"token operator\">not</span> set autoExpandParent <span class=\"token keyword\">to</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span> <span class=\"token keyword\">if</span> children expanded<span class=\"token punctuation\">,</span> parent can <span class=\"token operator\">not</span> collapse<span class=\"token punctuation\">.</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> <span class=\"token operator\">or</span><span class=\"token punctuation\">,</span> you can remove all expanded children keys<span class=\"token punctuation\">.</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      expandedKeys<span class=\"token punctuation\">,</span>\n      autoExpandParent<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onCheck</span><span class=\"token punctuation\">(</span>checkedKeys<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      checkedKeys<span class=\"token punctuation\">,</span>\n      selectedKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'0-3'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'0-4'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onSelect</span><span class=\"token punctuation\">(</span>selectedKeys<span class=\"token punctuation\">,</span> info<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'onSelect'</span><span class=\"token punctuation\">,</span> info<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ selectedKeys }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> loop <span class=\"token operator\">=</span> data <span class=\"token operator\">=</span><span class=\"token operator\">></span> data<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">)</span> {\n        return <span class=\"token punctuation\">(</span>\n          <span class=\"token operator\">&lt;</span>TreeNode key<span class=\"token operator\">=</span>{item<span class=\"token punctuation\">.</span>key} title<span class=\"token operator\">=</span>{item<span class=\"token punctuation\">.</span>key} disableCheckbox<span class=\"token operator\">=</span>{item<span class=\"token punctuation\">.</span>key <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token string\">'0-0-0'</span>}<span class=\"token operator\">></span>\n            {<span class=\"token function\">loop</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">)</span>}\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TreeNode<span class=\"token operator\">></span>\n        <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n      return <span class=\"token operator\">&lt;</span>TreeNode key<span class=\"token operator\">=</span>{item<span class=\"token punctuation\">.</span>key} title<span class=\"token operator\">=</span>{item<span class=\"token punctuation\">.</span>key} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Tree\n        checkable\n        onExpand<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onExpand} expandedKeys<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>expandedKeys}\n        autoExpandParent<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>autoExpandParent}\n        onCheck<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onCheck} checkedKeys<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>checkedKeys}\n        onSelect<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onSelect} selectedKeys<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>selectedKeys}\n      <span class=\"token operator\">></span>\n        {<span class=\"token function\">loop</span><span class=\"token punctuation\">(</span>gData<span class=\"token punctuation\">)</span>}\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tree<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Demo <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var TreeNode = _antd.Tree.TreeNode;
	  var x = 3;
	  var y = 2;
	  var z = 1;
	  var gData = [];

	  var generateData = function generateData(_level, _preKey, _tns) {
	    var preKey = _preKey || '0';
	    var tns = _tns || gData;
	    var children = [];

	    for (var i = 0; i < x; i++) {
	      var key = preKey + "-" + i;
	      tns.push({
	        title: key,
	        key: key
	      });

	      if (i < y) {
	        children.push(key);
	      }
	    }

	    if (_level < 0) {
	      return tns;
	    }

	    var level = _level - 1;
	    children.forEach(function (key, index) {
	      tns[index].children = [];
	      return generateData(level, key, tns[index].children);
	    });
	  };

	  generateData(z);
	  var Demo = React.createClass({
	    displayName: "Demo",
	    getInitialState: function getInitialState() {
	      return {
	        expandedKeys: ['0-0-0', '0-0-1'],
	        autoExpandParent: true,
	        checkedKeys: ['0-0-0'],
	        selectedKeys: []
	      };
	    },
	    onExpand: function onExpand(expandedKeys) {
	      console.log('onExpand', arguments); // if not set autoExpandParent to false, if children expanded, parent can not collapse.
	      // or, you can remove all expanded children keys.

	      this.setState({
	        expandedKeys: expandedKeys,
	        autoExpandParent: false
	      });
	    },
	    onCheck: function onCheck(checkedKeys) {
	      this.setState({
	        checkedKeys: checkedKeys,
	        selectedKeys: ['0-3', '0-4']
	      });
	    },
	    onSelect: function onSelect(selectedKeys, info) {
	      console.log('onSelect', info);
	      this.setState({
	        selectedKeys: selectedKeys
	      });
	    },
	    render: function render() {
	      var loop = function loop(data) {
	        return data.map(function (item) {
	          if (item.children) {
	            return React.createElement(
	              TreeNode,
	              {
	                key: item.key,
	                title: item.key,
	                disableCheckbox: item.key === '0-0-0'
	              },
	              loop(item.children)
	            );
	          }

	          return React.createElement(TreeNode, {
	            key: item.key,
	            title: item.key
	          });
	        });
	      };

	      return React.createElement(
	        _antd.Tree,
	        {
	          checkable: true,
	          onExpand: this.onExpand,
	          expandedKeys: this.state.expandedKeys,
	          autoExpandParent: this.state.autoExpandParent,
	          onCheck: this.onCheck,
	          checkedKeys: this.state.checkedKeys,
	          onSelect: this.onSelect,
	          selectedKeys: this.state.selectedKeys
	        },
	        loop(gData)
	      );
	    }
	  });
	  return React.createElement(Demo, null);
	}
	};

/***/ },

/***/ 1108:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The most basic usage, tell you how to use checkable, selectable, disabled, defaultExpandKeys, and etc."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "basic"
	    },
	    "filename": "components/tree/demo/basic.md",
	    "id": "components-tree-demo-basic"
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
	      "highlighted": "import { Tree } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> TreeNode <span class=\"token operator\">=</span> Tree<span class=\"token punctuation\">.</span>TreeNode<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Demo <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getDefaultProps</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      keys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'0-0-0'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'0-0-1'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> keys <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>keys<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return {\n      defaultExpandedKeys<span class=\"token punctuation\">:</span> keys<span class=\"token punctuation\">,</span>\n      defaultSelectedKeys<span class=\"token punctuation\">:</span> keys<span class=\"token punctuation\">,</span>\n      defaultCheckedKeys<span class=\"token punctuation\">:</span> keys<span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onSelect</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'selected'</span><span class=\"token punctuation\">,</span> info<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onCheck</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'onCheck'</span><span class=\"token punctuation\">,</span> info<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Tree className<span class=\"token operator\">=</span><span class=\"token string\">\"myCls\"</span> showLine checkable\n        defaultExpandedKeys<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>defaultExpandedKeys}\n        defaultSelectedKeys<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>defaultSelectedKeys}\n        defaultCheckedKeys<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>defaultCheckedKeys}\n        onSelect<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onSelect} onCheck<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onCheck}\n      <span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>TreeNode title<span class=\"token operator\">=</span><span class=\"token string\">\"parent 1\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"0-0\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>TreeNode title<span class=\"token operator\">=</span><span class=\"token string\">\"parent 1-0\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"0-0-0\"</span> disabled<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>TreeNode title<span class=\"token operator\">=</span><span class=\"token string\">\"leaf\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"0-0-0-0\"</span> disableCheckbox <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>TreeNode title<span class=\"token operator\">=</span><span class=\"token string\">\"leaf\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"0-0-0-1\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TreeNode<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>TreeNode title<span class=\"token operator\">=</span><span class=\"token string\">\"parent 1-1\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"0-0-1\"</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>TreeNode title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span style<span class=\"token operator\">=</span>{{ color<span class=\"token punctuation\">:</span> <span class=\"token string\">'#08c'</span> }}<span class=\"token operator\">></span>sss<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>} key<span class=\"token operator\">=</span><span class=\"token string\">\"0-0-1-0\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TreeNode<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TreeNode<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tree<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Demo <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var TreeNode = _antd.Tree.TreeNode;
	  var Demo = React.createClass({
	    displayName: "Demo",
	    getDefaultProps: function getDefaultProps() {
	      return {
	        keys: ['0-0-0', '0-0-1']
	      };
	    },
	    getInitialState: function getInitialState() {
	      var keys = this.props.keys;
	      return {
	        defaultExpandedKeys: keys,
	        defaultSelectedKeys: keys,
	        defaultCheckedKeys: keys
	      };
	    },
	    onSelect: function onSelect(info) {
	      console.log('selected', info);
	    },
	    onCheck: function onCheck(info) {
	      console.log('onCheck', info);
	    },
	    render: function render() {
	      return React.createElement(
	        _antd.Tree,
	        {
	          className: "myCls",
	          showLine: true,
	          checkable: true,
	          defaultExpandedKeys: this.state.defaultExpandedKeys,
	          defaultSelectedKeys: this.state.defaultSelectedKeys,
	          defaultCheckedKeys: this.state.defaultCheckedKeys,
	          onSelect: this.onSelect,
	          onCheck: this.onCheck
	        },
	        React.createElement(
	          TreeNode,
	          {
	            title: "parent 1",
	            key: "0-0"
	          },
	          React.createElement(
	            TreeNode,
	            {
	              title: "parent 1-0",
	              key: "0-0-0",
	              disabled: true
	            },
	            React.createElement(TreeNode, {
	              title: "leaf",
	              key: "0-0-0-0",
	              disableCheckbox: true
	            }),
	            React.createElement(TreeNode, {
	              title: "leaf",
	              key: "0-0-0-1"
	            })
	          ),
	          React.createElement(
	            TreeNode,
	            {
	              title: "parent 1-1",
	              key: "0-0-1"
	            },
	            React.createElement(TreeNode, {
	              title: React.createElement(
	                "span",
	                {
	                  style: {
	                    color: '#08c'
	                  }
	                },
	                "sss"
	              ),
	              key: "0-0-1-0"
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

/***/ 1109:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "将节点拖拽到其他节点内部或前后。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Drag treeNode to insert after the other treeNode or insert into the other parent TreeNode."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "拖动示例",
	      "en-US": "draggable"
	    },
	    "filename": "components/tree/demo/draggable.md",
	    "id": "components-tree-demo-draggable"
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
	      "highlighted": "import { Tree } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> TreeNode <span class=\"token operator\">=</span> Tree<span class=\"token punctuation\">.</span>TreeNode<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> x <span class=\"token operator\">=</span> <span class=\"token number\">3</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> y <span class=\"token operator\">=</span> <span class=\"token number\">2</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> z <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> gData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> generateData <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>_level<span class=\"token punctuation\">,</span> _preKey<span class=\"token punctuation\">,</span> _tns<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n  <span class=\"token keyword\">const</span> preKey <span class=\"token operator\">=</span> _preKey || <span class=\"token string\">'0'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token keyword\">const</span> tns <span class=\"token operator\">=</span> _tns || gData<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n  <span class=\"token keyword\">const</span> children <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">; i &lt; x; i++) {</span>\n    <span class=\"token keyword\">const</span> key <span class=\"token operator\">=</span> `${preKey}<span class=\"token operator\">-</span>${i}`<span class=\"token comment\" spellcheck=\"true\">;</span>\n    tns<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>{ title<span class=\"token punctuation\">:</span> key<span class=\"token punctuation\">,</span> key }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>i <span class=\"token operator\">&lt;</span> y<span class=\"token punctuation\">)</span> {\n      children<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n  }\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>_level <span class=\"token operator\">&lt;</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span> {\n    return tns<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token keyword\">const</span> level <span class=\"token operator\">=</span> _level <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  children<span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    tns<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>children <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token function\">generateData</span><span class=\"token punctuation\">(</span>level<span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">,</span> tns<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token function\">generateData</span><span class=\"token punctuation\">(</span>z<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Demo <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      gData<span class=\"token punctuation\">,</span>\n      expandedKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'0-0'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'0-0-0'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'0-0-0-0'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onDragEnter</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> expandedKeys 需要受控时设置\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span>   expandedKeys<span class=\"token punctuation\">:</span> info<span class=\"token punctuation\">.</span>expandedKeys<span class=\"token punctuation\">,</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onDrop</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> dropKey <span class=\"token operator\">=</span> info<span class=\"token punctuation\">.</span>node<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>eventKey<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> dragKey <span class=\"token operator\">=</span> info<span class=\"token punctuation\">.</span>dragNode<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>eventKey<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> <span class=\"token keyword\">const</span> dragNodesKeys <span class=\"token operator\">=</span> info<span class=\"token punctuation\">.</span>dragNodesKeys<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> loop <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">,</span> callback<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      data<span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">,</span> arr<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n        <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">.</span>key <span class=\"token operator\">==</span><span class=\"token operator\">=</span> key<span class=\"token punctuation\">)</span> {\n          return <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">,</span> arr<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n        }\n        <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">)</span> {\n          return <span class=\"token function\">loop</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">,</span> callback<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n        }\n      }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>gData<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    let dragObj<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token function\">loop</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">,</span> dragKey<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">,</span> arr<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      arr<span class=\"token punctuation\">.</span><span class=\"token function\">splice</span><span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      dragObj <span class=\"token operator\">=</span> item<span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>dropToGap<span class=\"token punctuation\">)</span> {\n      let ar<span class=\"token comment\" spellcheck=\"true\">;</span>\n      let i<span class=\"token comment\" spellcheck=\"true\">;</span>\n      <span class=\"token function\">loop</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">,</span> dropKey<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">,</span> arr<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n        ar <span class=\"token operator\">=</span> arr<span class=\"token comment\" spellcheck=\"true\">;</span>\n        i <span class=\"token operator\">=</span> index<span class=\"token comment\" spellcheck=\"true\">;</span>\n      }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      ar<span class=\"token punctuation\">.</span><span class=\"token function\">splice</span><span class=\"token punctuation\">(</span>i<span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> dragObj<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    } <span class=\"token keyword\">else</span> {\n      <span class=\"token function\">loop</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">,</span> dropKey<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n        item<span class=\"token punctuation\">.</span>children <span class=\"token operator\">=</span> item<span class=\"token punctuation\">.</span>children || <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n        <span class=\"token operator\">/</span><span class=\"token operator\">/</span> where <span class=\"token keyword\">to</span> insert 示例添加到尾部，可以是随意位置\n        item<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>dragObj<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      gData<span class=\"token punctuation\">:</span> data<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> loop <span class=\"token operator\">=</span> data <span class=\"token operator\">=</span><span class=\"token operator\">></span> data<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">.</span>children <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> item<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">)</span> {\n        return <span class=\"token operator\">&lt;</span>TreeNode key<span class=\"token operator\">=</span>{item<span class=\"token punctuation\">.</span>key} title<span class=\"token operator\">=</span>{item<span class=\"token punctuation\">.</span>key}<span class=\"token operator\">></span>{<span class=\"token function\">loop</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">)</span>}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TreeNode<span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n      return <span class=\"token operator\">&lt;</span>TreeNode key<span class=\"token operator\">=</span>{item<span class=\"token punctuation\">.</span>key} title<span class=\"token operator\">=</span>{item<span class=\"token punctuation\">.</span>key} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Tree\n        defaultExpandedKeys<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>expandedKeys}\n        draggable\n        onDragEnter<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onDragEnter}\n        onDrop<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onDrop}\n      <span class=\"token operator\">></span>\n        {<span class=\"token function\">loop</span><span class=\"token punctuation\">(</span>this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>gData<span class=\"token punctuation\">)</span>}\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tree<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Demo <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	  var TreeNode = _antd.Tree.TreeNode;
	  var x = 3;
	  var y = 2;
	  var z = 1;
	  var gData = [];

	  var generateData = function generateData(_level, _preKey, _tns) {
	    var preKey = _preKey || '0';
	    var tns = _tns || gData;
	    var children = [];

	    for (var i = 0; i < x; i++) {
	      var key = preKey + "-" + i;
	      tns.push({
	        title: key,
	        key: key
	      });

	      if (i < y) {
	        children.push(key);
	      }
	    }

	    if (_level < 0) {
	      return tns;
	    }

	    var level = _level - 1;
	    children.forEach(function (key, index) {
	      tns[index].children = [];
	      return generateData(level, key, tns[index].children);
	    });
	  };

	  generateData(z);
	  var Demo = React.createClass({
	    displayName: "Demo",
	    getInitialState: function getInitialState() {
	      return {
	        gData: gData,
	        expandedKeys: ['0-0', '0-0-0', '0-0-0-0']
	      };
	    },
	    onDragEnter: function onDragEnter(info) {
	      console.log(info); // expandedKeys 需要受控时设置
	      // this.setState({
	      //   expandedKeys: info.expandedKeys,
	      // });
	    },
	    onDrop: function onDrop(info) {
	      console.log(info);
	      var dropKey = info.node.props.eventKey;
	      var dragKey = info.dragNode.props.eventKey; // const dragNodesKeys = info.dragNodesKeys;

	      var loop = function loop(data, key, callback) {
	        data.forEach(function (item, index, arr) {
	          if (item.key === key) {
	            return callback(item, index, arr);
	          }

	          if (item.children) {
	            return loop(item.children, key, callback);
	          }
	        });
	      };

	      var data = [].concat(_toConsumableArray(this.state.gData));
	      var dragObj = void 0;
	      loop(data, dragKey, function (item, index, arr) {
	        arr.splice(index, 1);
	        dragObj = item;
	      });

	      if (info.dropToGap) {
	        var ar = void 0;
	        var i = void 0;
	        loop(data, dropKey, function (item, index, arr) {
	          ar = arr;
	          i = index;
	        });
	        ar.splice(i, 0, dragObj);
	      } else {
	        loop(data, dropKey, function (item) {
	          item.children = item.children || []; // where to insert 示例添加到尾部，可以是随意位置

	          item.children.push(dragObj);
	        });
	      }

	      this.setState({
	        gData: data
	      });
	    },
	    render: function render() {
	      var loop = function loop(data) {
	        return data.map(function (item) {
	          if (item.children && item.children.length) {
	            return React.createElement(
	              TreeNode,
	              {
	                key: item.key,
	                title: item.key
	              },
	              loop(item.children)
	            );
	          }

	          return React.createElement(TreeNode, {
	            key: item.key,
	            title: item.key
	          });
	        });
	      };

	      return React.createElement(
	        _antd.Tree,
	        {
	          defaultExpandedKeys: this.state.expandedKeys,
	          draggable: true,
	          onDragEnter: this.onDragEnter,
	          onDrop: this.onDrop
	        },
	        loop(this.state.gData)
	      );
	    }
	  });
	  return React.createElement(Demo, null);
	}
	};

/***/ },

/***/ 1110:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "点击展开节点，动态加载数据。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "To load data asynchronously when click to expand a treeNode."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "异步数据加载",
	      "en-US": "load data asynchronously"
	    },
	    "filename": "components/tree/demo/dynamic.md",
	    "id": "components-tree-demo-dynamic"
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
	      "highlighted": "import { Tree } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> TreeNode <span class=\"token operator\">=</span> Tree<span class=\"token punctuation\">.</span>TreeNode<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">generateTreeNodes</span><span class=\"token punctuation\">(</span>treeNode<span class=\"token punctuation\">)</span> {\n  <span class=\"token keyword\">const</span> arr <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token keyword\">const</span> key <span class=\"token operator\">=</span> treeNode<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>eventKey<span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">; i &lt; 3; i++) {</span>\n    arr<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>{ name<span class=\"token punctuation\">:</span> `leaf ${key}<span class=\"token operator\">-</span>${i}`<span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> `${key}<span class=\"token operator\">-</span>${i}` }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  return arr<span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">setLeaf</span><span class=\"token punctuation\">(</span>treeData<span class=\"token punctuation\">,</span> curKey<span class=\"token punctuation\">,</span> level<span class=\"token punctuation\">)</span> {\n  <span class=\"token keyword\">const</span> loopLeaf <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">,</span> lev<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    <span class=\"token keyword\">const</span> l <span class=\"token operator\">=</span> lev <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    data<span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> curKey<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">)</span> <span class=\"token operator\">?</span> item<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>curKey<span class=\"token punctuation\">)</span> !<span class=\"token operator\">==</span> <span class=\"token number\">0</span> <span class=\"token punctuation\">:</span>\n        curKey<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span> !<span class=\"token operator\">==</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span> {\n        return<span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">)</span> {\n        <span class=\"token function\">loopLeaf</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">,</span> l<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      } <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>l <span class=\"token operator\">&lt;</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> {\n        item<span class=\"token punctuation\">.</span>isLeaf <span class=\"token operator\">=</span> <span class=\"token boolean\">true</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token function\">loopLeaf</span><span class=\"token punctuation\">(</span>treeData<span class=\"token punctuation\">,</span> level <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">getNewTreeData</span><span class=\"token punctuation\">(</span>treeData<span class=\"token punctuation\">,</span> curKey<span class=\"token punctuation\">,</span> child<span class=\"token punctuation\">,</span> level<span class=\"token punctuation\">)</span> {\n  <span class=\"token keyword\">const</span> loop <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>level <span class=\"token operator\">&lt;</span> <span class=\"token number\">1</span> || curKey<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">3</span> <span class=\"token operator\">></span> level <span class=\"token operator\">*</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span> return<span class=\"token comment\" spellcheck=\"true\">;</span>\n    data<span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>curKey<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span> <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span> {\n        <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">)</span> {\n          <span class=\"token function\">loop</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n        } <span class=\"token keyword\">else</span> {\n          item<span class=\"token punctuation\">.</span>children <span class=\"token operator\">=</span> child<span class=\"token comment\" spellcheck=\"true\">;</span>\n        }\n      }\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token function\">loop</span><span class=\"token punctuation\">(</span>treeData<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token function\">setLeaf</span><span class=\"token punctuation\">(</span>treeData<span class=\"token punctuation\">,</span> curKey<span class=\"token punctuation\">,</span> level<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\n<span class=\"token keyword\">const</span> Demo <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      treeData<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n        treeData<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          { name<span class=\"token punctuation\">:</span> <span class=\"token string\">'pNode 01'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-0'</span> }<span class=\"token punctuation\">,</span>\n          { name<span class=\"token punctuation\">:</span> <span class=\"token string\">'pNode 02'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-1'</span> }<span class=\"token punctuation\">,</span>\n          { name<span class=\"token punctuation\">:</span> <span class=\"token string\">'pNode 03'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-2'</span><span class=\"token punctuation\">,</span> isLeaf<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> }<span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">,</span> <span class=\"token number\">100</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onSelect</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'selected'</span><span class=\"token punctuation\">,</span> info<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onLoadData</span><span class=\"token punctuation\">(</span>treeNode<span class=\"token punctuation\">)</span> {\n    return new <span class=\"token function\">Promise</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>resolve<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n        <span class=\"token keyword\">const</span> treeData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>treeData<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n        <span class=\"token function\">getNewTreeData</span><span class=\"token punctuation\">(</span>treeData<span class=\"token punctuation\">,</span> treeNode<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>eventKey<span class=\"token punctuation\">,</span> <span class=\"token function\">generateTreeNodes</span><span class=\"token punctuation\">(</span>treeNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n        this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ treeData }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n        <span class=\"token function\">resolve</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }<span class=\"token punctuation\">,</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> loop <span class=\"token operator\">=</span> data <span class=\"token operator\">=</span><span class=\"token operator\">></span> data<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">)</span> {\n        return <span class=\"token operator\">&lt;</span>TreeNode title<span class=\"token operator\">=</span>{item<span class=\"token punctuation\">.</span>name} key<span class=\"token operator\">=</span>{item<span class=\"token punctuation\">.</span>key}<span class=\"token operator\">></span>{<span class=\"token function\">loop</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">)</span>}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TreeNode<span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n      return <span class=\"token operator\">&lt;</span>TreeNode title<span class=\"token operator\">=</span>{item<span class=\"token punctuation\">.</span>name} key<span class=\"token operator\">=</span>{item<span class=\"token punctuation\">.</span>key} isLeaf<span class=\"token operator\">=</span>{item<span class=\"token punctuation\">.</span>isLeaf} disabled<span class=\"token operator\">=</span>{item<span class=\"token punctuation\">.</span>key <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token string\">'0-0-0'</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> treeNodes <span class=\"token operator\">=</span> <span class=\"token function\">loop</span><span class=\"token punctuation\">(</span>this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>treeData<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Tree onSelect<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onSelect} loadData<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onLoadData}<span class=\"token operator\">></span>\n        {treeNodes}\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tree<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Demo <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	  var TreeNode = _antd.Tree.TreeNode;

	  function generateTreeNodes(treeNode) {
	    var arr = [];
	    var key = treeNode.props.eventKey;

	    for (var i = 0; i < 3; i++) {
	      arr.push({
	        name: "leaf " + key + "-" + i,
	        key: key + "-" + i
	      });
	    }

	    return arr;
	  }

	  function setLeaf(treeData, curKey, level) {
	    var loopLeaf = function loopLeaf(data, lev) {
	      var l = lev - 1;
	      data.forEach(function (item) {
	        if (item.key.length > curKey.length ? item.key.indexOf(curKey) !== 0 : curKey.indexOf(item.key) !== 0) {
	          return;
	        }

	        if (item.children) {
	          loopLeaf(item.children, l);
	        } else if (l < 1) {
	          item.isLeaf = true;
	        }
	      });
	    };

	    loopLeaf(treeData, level + 1);
	  }

	  function getNewTreeData(treeData, curKey, child, level) {
	    var loop = function loop(data) {
	      if (level < 1 || curKey.length - 3 > level * 2) return;
	      data.forEach(function (item) {
	        if (curKey.indexOf(item.key) === 0) {
	          if (item.children) {
	            loop(item.children);
	          } else {
	            item.children = child;
	          }
	        }
	      });
	    };

	    loop(treeData);
	    setLeaf(treeData, curKey, level);
	  }

	  var Demo = React.createClass({
	    displayName: "Demo",
	    getInitialState: function getInitialState() {
	      return {
	        treeData: []
	      };
	    },
	    componentDidMount: function componentDidMount() {
	      var _this = this;

	      setTimeout(function () {
	        _this.setState({
	          treeData: [{
	            name: 'pNode 01',
	            key: '0-0'
	          }, {
	            name: 'pNode 02',
	            key: '0-1'
	          }, {
	            name: 'pNode 03',
	            key: '0-2',
	            isLeaf: true
	          }]
	        });
	      }, 100);
	    },
	    onSelect: function onSelect(info) {
	      console.log('selected', info);
	    },
	    onLoadData: function onLoadData(treeNode) {
	      var _this2 = this;

	      return new Promise(function (resolve) {
	        setTimeout(function () {
	          var treeData = [].concat(_toConsumableArray(_this2.state.treeData));
	          getNewTreeData(treeData, treeNode.props.eventKey, generateTreeNodes(treeNode), 2);

	          _this2.setState({
	            treeData: treeData
	          });

	          resolve();
	        }, 1000);
	      });
	    },
	    render: function render() {
	      var loop = function loop(data) {
	        return data.map(function (item) {
	          if (item.children) {
	            return React.createElement(
	              TreeNode,
	              {
	                title: item.name,
	                key: item.key
	              },
	              loop(item.children)
	            );
	          }

	          return React.createElement(TreeNode, {
	            title: item.name,
	            key: item.key,
	            isLeaf: item.isLeaf,
	            disabled: item.key === '0-0-0'
	          });
	        });
	      };

	      var treeNodes = loop(this.state.treeData);
	      return React.createElement(
	        _antd.Tree,
	        {
	          onSelect: this.onSelect,
	          loadData: this.onLoadData
	        },
	        treeNodes
	      );
	    }
	  });
	  return React.createElement(Demo, null);
	}
	};

/***/ },

/***/ 1111:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "可搜索的树。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Searchable Tree."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "可搜索",
	      "en-US": "Searchable"
	    },
	    "filename": "components/tree/demo/search.md",
	    "id": "components-tree-demo-search"
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
	      "highlighted": "import { Tree<span class=\"token punctuation\">,</span> Input } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> TreeNode <span class=\"token operator\">=</span> Tree<span class=\"token punctuation\">.</span>TreeNode<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Search <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">.</span>Search<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> x <span class=\"token operator\">=</span> <span class=\"token number\">3</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> y <span class=\"token operator\">=</span> <span class=\"token number\">2</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> z <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> gData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> generateData <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>_level<span class=\"token punctuation\">,</span> _preKey<span class=\"token punctuation\">,</span> _tns<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n  <span class=\"token keyword\">const</span> preKey <span class=\"token operator\">=</span> _preKey || <span class=\"token string\">'0'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token keyword\">const</span> tns <span class=\"token operator\">=</span> _tns || gData<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n  <span class=\"token keyword\">const</span> children <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">; i &lt; x; i++) {</span>\n    <span class=\"token keyword\">const</span> key <span class=\"token operator\">=</span> `${preKey}<span class=\"token operator\">-</span>${i}`<span class=\"token comment\" spellcheck=\"true\">;</span>\n    tns<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>{ title<span class=\"token punctuation\">:</span> key<span class=\"token punctuation\">,</span> key }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>i <span class=\"token operator\">&lt;</span> y<span class=\"token punctuation\">)</span> {\n      children<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n  }\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>_level <span class=\"token operator\">&lt;</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span> {\n    return tns<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token keyword\">const</span> level <span class=\"token operator\">=</span> _level <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  children<span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    tns<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>children <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token function\">generateData</span><span class=\"token punctuation\">(</span>level<span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">,</span> tns<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token function\">generateData</span><span class=\"token punctuation\">(</span>z<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> dataList <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> generateList <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n  <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">; i &lt; data.length; i++) {</span>\n    <span class=\"token keyword\">const</span> node <span class=\"token operator\">=</span> data<span class=\"token punctuation\">[</span>i<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> key <span class=\"token operator\">=</span> node<span class=\"token punctuation\">.</span>key<span class=\"token comment\" spellcheck=\"true\">;</span>\n    dataList<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>{ key<span class=\"token punctuation\">,</span> title<span class=\"token punctuation\">:</span> key }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>node<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">)</span> {\n      <span class=\"token function\">generateList</span><span class=\"token punctuation\">(</span>node<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">,</span> node<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n  }\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token function\">generateList</span><span class=\"token punctuation\">(</span>gData<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> getParentKey <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">,</span> tree<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n  let parentKey<span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">; i &lt; tree.length; i++) {</span>\n    <span class=\"token keyword\">const</span> node <span class=\"token operator\">=</span> tree<span class=\"token punctuation\">[</span>i<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>node<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">)</span> {\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>node<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">.</span><span class=\"token function\">some</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span>key <span class=\"token operator\">==</span><span class=\"token operator\">=</span> key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> {\n        parentKey <span class=\"token operator\">=</span> node<span class=\"token punctuation\">.</span>key<span class=\"token comment\" spellcheck=\"true\">;</span>\n      } <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token function\">getParentKey</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">,</span> node<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> {\n        parentKey <span class=\"token operator\">=</span> <span class=\"token function\">getParentKey</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">,</span> node<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n    }\n  }\n  return parentKey<span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nclass SearchTree extends React<span class=\"token punctuation\">.</span>Component {\n  state <span class=\"token operator\">=</span> {\n    expandedKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    searchValue<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n    autoExpandParent<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  }\n  onExpand <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>expandedKeys<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      expandedKeys<span class=\"token punctuation\">,</span>\n      autoExpandParent<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  onChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    <span class=\"token keyword\">const</span> value <span class=\"token operator\">=</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> expandedKeys <span class=\"token operator\">=</span> dataList<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">></span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span> {\n        return <span class=\"token function\">getParentKey</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">,</span> gData<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n      return <span class=\"token keyword\">null</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">,</span> i<span class=\"token punctuation\">,</span> self<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> item <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> self<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> <span class=\"token operator\">==</span><span class=\"token operator\">=</span> i<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      expandedKeys<span class=\"token punctuation\">,</span>\n      searchValue<span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">,</span>\n      autoExpandParent<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { searchValue<span class=\"token punctuation\">,</span> expandedKeys<span class=\"token punctuation\">,</span> autoExpandParent } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> loop <span class=\"token operator\">=</span> data <span class=\"token operator\">=</span><span class=\"token operator\">></span> data<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">const</span> index <span class=\"token operator\">=</span> item<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">.</span><span class=\"token function\">search</span><span class=\"token punctuation\">(</span>searchValue<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      <span class=\"token keyword\">const</span> beforeStr <span class=\"token operator\">=</span> item<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">.</span><span class=\"token function\">substr</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      <span class=\"token keyword\">const</span> afterStr <span class=\"token operator\">=</span> item<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">.</span><span class=\"token function\">substr</span><span class=\"token punctuation\">(</span>index <span class=\"token operator\">+</span> searchValue<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      <span class=\"token keyword\">const</span> title <span class=\"token operator\">=</span> index <span class=\"token operator\">></span> <span class=\"token operator\">-</span><span class=\"token number\">1</span> <span class=\"token operator\">?</span> <span class=\"token punctuation\">(</span>\n        <span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>\n          {beforeStr}\n          <span class=\"token operator\">&lt;</span>span style<span class=\"token operator\">=</span>{{ color<span class=\"token punctuation\">:</span> <span class=\"token string\">'#f50'</span> }}<span class=\"token operator\">></span>{searchValue}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n          {afterStr}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n      <span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> <span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>{item<span class=\"token punctuation\">.</span>key}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">)</span> {\n        return <span class=\"token punctuation\">(</span>\n          <span class=\"token operator\">&lt;</span>TreeNode key<span class=\"token operator\">=</span>{item<span class=\"token punctuation\">.</span>key} title<span class=\"token operator\">=</span>{title}<span class=\"token operator\">></span>\n            {<span class=\"token function\">loop</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">)</span>}\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TreeNode<span class=\"token operator\">></span>\n        <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n      return <span class=\"token operator\">&lt;</span>TreeNode key<span class=\"token operator\">=</span>{item<span class=\"token punctuation\">.</span>key} title<span class=\"token operator\">=</span>{title} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Search style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span> }} placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Search\"</span> onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Tree\n          onExpand<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onExpand}\n          expandedKeys<span class=\"token operator\">=</span>{expandedKeys}\n          autoExpandParent<span class=\"token operator\">=</span>{autoExpandParent}\n        <span class=\"token operator\">></span>\n          {<span class=\"token function\">loop</span><span class=\"token punctuation\">(</span>gData<span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tree<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>SearchTree <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
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

	  var TreeNode = _antd.Tree.TreeNode;
	  var Search = _antd.Input.Search;
	  var x = 3;
	  var y = 2;
	  var z = 1;
	  var gData = [];

	  var generateData = function generateData(_level, _preKey, _tns) {
	    var preKey = _preKey || '0';
	    var tns = _tns || gData;
	    var children = [];

	    for (var i = 0; i < x; i++) {
	      var key = preKey + "-" + i;
	      tns.push({
	        title: key,
	        key: key
	      });

	      if (i < y) {
	        children.push(key);
	      }
	    }

	    if (_level < 0) {
	      return tns;
	    }

	    var level = _level - 1;
	    children.forEach(function (key, index) {
	      tns[index].children = [];
	      return generateData(level, key, tns[index].children);
	    });
	  };

	  generateData(z);
	  var dataList = [];

	  var generateList = function generateList(data) {
	    for (var i = 0; i < data.length; i++) {
	      var node = data[i];
	      var key = node.key;
	      dataList.push({
	        key: key,
	        title: key
	      });

	      if (node.children) {
	        generateList(node.children, node.key);
	      }
	    }
	  };

	  generateList(gData);

	  var getParentKey = function getParentKey(key, tree) {
	    var parentKey = void 0;

	    for (var i = 0; i < tree.length; i++) {
	      var node = tree[i];

	      if (node.children) {
	        if (node.children.some(function (item) {
	          return item.key === key;
	        })) {
	          parentKey = node.key;
	        } else if (getParentKey(key, node.children)) {
	          parentKey = getParentKey(key, node.children);
	        }
	      }
	    }

	    return parentKey;
	  };

	  var SearchTree = function (_React$Component) {
	    _inherits(SearchTree, _React$Component);

	    function SearchTree() {
	      var _temp, _this, _ret;

	      _classCallCheck(this, SearchTree);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	        expandedKeys: [],
	        searchValue: '',
	        autoExpandParent: true
	      }, _this.onExpand = function (expandedKeys) {
	        _this.setState({
	          expandedKeys: expandedKeys,
	          autoExpandParent: false
	        });
	      }, _this.onChange = function (e) {
	        var value = e.target.value;
	        var expandedKeys = dataList.map(function (item) {
	          if (item.key.indexOf(value) > -1) {
	            return getParentKey(item.key, gData);
	          }

	          return null;
	        }).filter(function (item, i, self) {
	          return item && self.indexOf(item) === i;
	        });

	        _this.setState({
	          expandedKeys: expandedKeys,
	          searchValue: value,
	          autoExpandParent: true
	        });
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    SearchTree.prototype.render = function render() {
	      var _state = this.state,
	          searchValue = _state.searchValue,
	          expandedKeys = _state.expandedKeys,
	          autoExpandParent = _state.autoExpandParent;

	      var loop = function loop(data) {
	        return data.map(function (item) {
	          var index = item.key.search(searchValue);
	          var beforeStr = item.key.substr(0, index);
	          var afterStr = item.key.substr(index + searchValue.length);
	          var title = index > -1 ? React.createElement(
	            "span",
	            null,
	            beforeStr,
	            React.createElement(
	              "span",
	              {
	                style: {
	                  color: '#f50'
	                }
	              },
	              searchValue
	            ),
	            afterStr
	          ) : React.createElement(
	            "span",
	            null,
	            item.key
	          );

	          if (item.children) {
	            return React.createElement(
	              TreeNode,
	              {
	                key: item.key,
	                title: title
	              },
	              loop(item.children)
	            );
	          }

	          return React.createElement(TreeNode, {
	            key: item.key,
	            title: title
	          });
	        });
	      };

	      return React.createElement(
	        "div",
	        null,
	        React.createElement(Search, {
	          style: {
	            width: 300
	          },
	          placeholder: "Search",
	          onChange: this.onChange
	        }),
	        React.createElement(
	          _antd.Tree,
	          {
	            onExpand: this.onExpand,
	            expandedKeys: expandedKeys,
	            autoExpandParent: autoExpandParent
	          },
	          loop(gData)
	        )
	      );
	    };

	    return SearchTree;
	  }(React.Component);

	  return React.createElement(SearchTree, null);
	}
	};

/***/ },

/***/ 1252:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic-controlled': __webpack_require__(1107),
	    'basic': __webpack_require__(1108),
	    'draggable': __webpack_require__(1109),
	    'dynamic': __webpack_require__(1110),
	    'search': __webpack_require__(1111),
	}

/***/ }

});