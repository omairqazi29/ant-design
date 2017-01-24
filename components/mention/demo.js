webpackJsonp([10,211],{

/***/ 736:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "匹配内容列表为异步返回时。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "async"
	      ]
	    ]
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
	      "highlighted": "import { Mention } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> users <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'afc163'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'benjycui'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'yiminghe'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'jljsj33'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'dqaria'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'RaoHai'</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> AsyncMention <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      suggestions<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">fetchSuggestions</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> callback<span class=\"token punctuation\">)</span> {\n    <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>users<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> !<span class=\"token operator\">==</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">,</span> <span class=\"token number\">500</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onSearchChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">fetchSuggestions</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span>suggestions<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n        suggestions<span class=\"token punctuation\">,</span>\n        loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { suggestions<span class=\"token punctuation\">,</span> loading } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Mention\n        style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span><span class=\"token punctuation\">,</span> height<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span> }}\n        loading<span class=\"token operator\">=</span>{loading}\n        suggestions<span class=\"token operator\">=</span>{suggestions}\n        onSearchChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onSearchChange}\n      <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>AsyncMention <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];
	  var AsyncMention = React.createClass({
	    displayName: "AsyncMention",
	    getInitialState: function getInitialState() {
	      return {
	        suggestions: [],
	        loading: false
	      };
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
	        _this.setState({
	          suggestions: suggestions,
	          loading: false
	        });
	      });
	      this.setState({
	        loading: true
	      });
	    },
	    render: function render() {
	      var _state = this.state,
	          suggestions = _state.suggestions,
	          loading = _state.loading;
	      return React.createElement(_antd.Mention, {
	        style: {
	          width: '100%',
	          height: 100
	        },
	        loading: loading,
	        suggestions: suggestions,
	        onSearchChange: this.onSearchChange
	      });
	    }
	  });
	  return React.createElement(AsyncMention, null);
	}
	};

/***/ },

/***/ 737:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "自定义建议（含头像）"
	      ],
	      [
	        "p",
	        "注意，自定义建议时，onSearchChange 必须不能为空。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Customize suggestions"
	      ]
	    ]
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
	      "highlighted": "import { Mention } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Nav <span class=\"token operator\">=</span> Mention<span class=\"token punctuation\">.</span>Nav<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> webFrameworks <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  { name<span class=\"token punctuation\">:</span> <span class=\"token string\">'React'</span><span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'JavaScript'</span><span class=\"token punctuation\">,</span> icon<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg'</span> }<span class=\"token punctuation\">,</span>\n  { name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Angular'</span><span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'JavaScript'</span><span class=\"token punctuation\">,</span> icon<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png'</span> }<span class=\"token punctuation\">,</span>\n  { name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Dva'</span><span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'Javascript'</span><span class=\"token punctuation\">,</span> icon<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png'</span> }<span class=\"token punctuation\">,</span>\n  { name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Flask'</span><span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'Python'</span><span class=\"token punctuation\">,</span> icon<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png'</span> }<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> CustomNavMention <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      suggestions<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onSearchChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> searchValue <span class=\"token operator\">=</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">toLowerCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> filtered <span class=\"token operator\">=</span> webFrameworks<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span>\n      item<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span><span class=\"token function\">toLowerCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>searchValue<span class=\"token punctuation\">)</span> !<span class=\"token operator\">==</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n    <span class=\"token keyword\">const</span> suggestions <span class=\"token operator\">=</span> filtered<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>suggestion <span class=\"token operator\">=</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Nav value<span class=\"token operator\">=</span>{suggestion<span class=\"token punctuation\">.</span>name} data<span class=\"token operator\">=</span>{suggestion} disabled<span class=\"token operator\">=</span>{suggestion<span class=\"token punctuation\">.</span>disabled}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>img alt<span class=\"token operator\">=</span>{suggestion<span class=\"token punctuation\">.</span>name} style<span class=\"token operator\">=</span>{{ height<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> marginRight<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span><span class=\"token punctuation\">,</span> float<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span> }} src<span class=\"token operator\">=</span>{suggestion<span class=\"token punctuation\">.</span>icon} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          {suggestion<span class=\"token punctuation\">.</span>name} <span class=\"token operator\">-</span> {suggestion<span class=\"token punctuation\">.</span>type}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Nav<span class=\"token operator\">></span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      suggestions<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { suggestions } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Mention\n        style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span><span class=\"token punctuation\">,</span> height<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span> }}\n        suggestions<span class=\"token operator\">=</span>{suggestions}\n        onSearchChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onSearchChange}\n      <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>CustomNavMention <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Nav = _antd.Mention.Nav;
	  var webFrameworks = [{
	    name: 'React',
	    type: 'JavaScript',
	    icon: 'https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg'
	  }, {
	    name: 'Angular',
	    type: 'JavaScript',
	    icon: 'https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png'
	  }, {
	    name: 'Dva',
	    type: 'Javascript',
	    icon: 'https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png'
	  }, {
	    name: 'Flask',
	    type: 'Python',
	    icon: 'https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png'
	  }];
	  var CustomNavMention = React.createClass({
	    displayName: "CustomNavMention",
	    getInitialState: function getInitialState() {
	      return {
	        suggestions: []
	      };
	    },
	    onSearchChange: function onSearchChange(value) {
	      var searchValue = value.toLowerCase();
	      var filtered = webFrameworks.filter(function (item) {
	        return item.name.toLowerCase().indexOf(searchValue) !== -1;
	      });
	      var suggestions = filtered.map(function (suggestion) {
	        return React.createElement(
	          Nav,
	          {
	            value: suggestion.name,
	            data: suggestion,
	            disabled: suggestion.disabled
	          },
	          React.createElement(
	            "span",
	            null,
	            React.createElement("img", {
	              alt: suggestion.name,
	              style: {
	                height: 16,
	                width: 16,
	                marginRight: 5,
	                float: 'left'
	              },
	              src: suggestion.icon
	            }),
	            suggestion.name,
	            " - ",
	            suggestion.type
	          )
	        );
	      });
	      this.setState({
	        suggestions: suggestions
	      });
	    },
	    render: function render() {
	      var suggestions = this.state.suggestions;
	      return React.createElement(_antd.Mention, {
	        style: {
	          width: '100%',
	          height: 100
	        },
	        suggestions: suggestions,
	        onSearchChange: this.onSearchChange
	      });
	    }
	  });
	  return React.createElement(CustomNavMention, null);
	}
	};

/***/ },

/***/ 738:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "基本使用"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Basic usage."
	      ]
	    ]
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
	      "highlighted": "import { Mention } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> { toString<span class=\"token punctuation\">,</span> toEditorState } <span class=\"token operator\">=</span> Mention<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>editorState<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span>editorState<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">onSelect</span><span class=\"token punctuation\">(</span>suggestion<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'onSelect'</span><span class=\"token punctuation\">,</span> suggestion<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Mention\n    style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span><span class=\"token punctuation\">,</span> height<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span> }}\n    onChange<span class=\"token operator\">=</span>{onChange}\n    defaultValue<span class=\"token operator\">=</span>{<span class=\"token function\">toEditorState</span><span class=\"token punctuation\">(</span><span class=\"token string\">'@afc163'</span><span class=\"token punctuation\">)</span>}\n    suggestions<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'afc163'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'benjycui'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'yiminghe'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'RaoHai'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'中文'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'にほんご'</span><span class=\"token punctuation\">]</span>}\n    onSelect<span class=\"token operator\">=</span>{onSelect}\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var toString = _antd.Mention.toString,
	      toEditorState = _antd.Mention.toEditorState;

	  function onChange(editorState) {
	    console.log(toString(editorState));
	  }

	  function onSelect(suggestion) {
	    console.log('onSelect', suggestion);
	  }

	  return React.createElement(_antd.Mention, {
	    style: {
	      width: '100%',
	      height: 100
	    },
	    onChange: onChange,
	    defaultValue: toEditorState('@afc163'),
	    suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'],
	    onSelect: onSelect
	  });
	}
	};

/***/ },

/***/ 739:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "受控模式."
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Controlled mode."
	      ]
	    ]
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
	      "highlighted": "import { Mention } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> { toEditorState } <span class=\"token operator\">=</span> Mention<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      value<span class=\"token punctuation\">:</span> <span class=\"token function\">toEditorState</span><span class=\"token punctuation\">(</span><span class=\"token string\">'@afc163'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>editorState<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      value<span class=\"token punctuation\">:</span> editorState<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Mention\n      suggestions<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'afc163'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'benjycui'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'yiminghe'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'RaoHai'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'中文'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'にほんご'</span><span class=\"token punctuation\">]</span>}\n      value<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value}\n      onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleChange}\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var toEditorState = _antd.Mention.toEditorState;
	  var App = React.createClass({
	    displayName: "App",
	    getInitialState: function getInitialState() {
	      return {
	        value: toEditorState('@afc163')
	      };
	    },
	    handleChange: function handleChange(editorState) {
	      this.setState({
	        value: editorState
	      });
	    },
	    render: function render() {
	      return React.createElement(_antd.Mention, {
	        suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'],
	        value: this.state.value,
	        onChange: this.handleChange
	      });
	    }
	  });
	  return React.createElement(App, null);
	}
	};

/***/ },

/***/ 740:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "受控模式，例如配合 Form 使用"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Controlled mode, for example, to work with ",
	        [
	          "code",
	          "Form"
	        ],
	        " ."
	      ]
	    ]
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
	      "highlighted": "import { Mention<span class=\"token punctuation\">,</span> Form<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> { toEditorState<span class=\"token punctuation\">,</span> getMentions } <span class=\"token operator\">=</span> Mention<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nlet App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      initValue<span class=\"token punctuation\">:</span> <span class=\"token function\">toEditorState</span><span class=\"token punctuation\">(</span><span class=\"token string\">'@afc163'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleReset</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">resetFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleSubmit</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>errors<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>errors<span class=\"token punctuation\">)</span> {\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Errors in form!!!'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n        return<span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Submit!!!'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>values<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">checkMention</span><span class=\"token punctuation\">(</span>rule<span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">,</span> callback<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { getFieldValue } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> mentions <span class=\"token operator\">=</span> <span class=\"token function\">getMentions</span><span class=\"token punctuation\">(</span><span class=\"token function\">getFieldValue</span><span class=\"token punctuation\">(</span><span class=\"token string\">'mention'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>mentions<span class=\"token punctuation\">.</span>length <span class=\"token operator\">&lt;</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span> {\n      <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>new <span class=\"token function\">Error</span><span class=\"token punctuation\">(</span><span class=\"token string\">'More than one must be selected!'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    } <span class=\"token keyword\">else</span> {\n      <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { getFieldDecorator<span class=\"token punctuation\">,</span> getFieldValue } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token comment\" spellcheck=\"true\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'>> render'</span><span class=\"token punctuation\">,</span> <span class=\"token function\">getFieldValue</span><span class=\"token punctuation\">(</span><span class=\"token string\">'mention'</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">==</span><span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>initValue<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Form horizontal<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem\n          id<span class=\"token operator\">=</span><span class=\"token string\">\"control-mention\"</span>\n          label<span class=\"token operator\">=</span><span class=\"token string\">\"Top coders\"</span>\n          labelCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span> }}\n          wrapperCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">14</span> }}\n        <span class=\"token operator\">></span>\n          {<span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'mention'</span><span class=\"token punctuation\">,</span> {\n            rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n              { validator<span class=\"token punctuation\">:</span> this<span class=\"token punctuation\">.</span>checkMention }<span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n            initialValue<span class=\"token punctuation\">:</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>initValue<span class=\"token punctuation\">,</span>\n          }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>Mention\n              suggestions<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'afc163'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'benjycui'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'yiminghe'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'RaoHai'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'中文'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'にほんご'</span><span class=\"token punctuation\">]</span>}\n            <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>FormItem wrapperCol<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">14</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span> }}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleSubmit}<span class=\"token operator\">></span>Submit<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n          <span class=\"token operator\">&amp;</span>nbsp<span class=\"token comment\" spellcheck=\"true\">;&amp;nbsp;&amp;nbsp;</span>\n          <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"ghost\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleReset}<span class=\"token operator\">></span>Reset<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>FormItem<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Form<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nApp <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>App<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var toEditorState = _antd.Mention.toEditorState,
	      getMentions = _antd.Mention.getMentions;
	  var FormItem = _antd.Form.Item;
	  var App = React.createClass({
	    displayName: "App",
	    getInitialState: function getInitialState() {
	      return {
	        initValue: toEditorState('@afc163')
	      };
	    },
	    handleReset: function handleReset(e) {
	      e.preventDefault();
	      this.props.form.resetFields();
	    },
	    handleSubmit: function handleSubmit(e) {
	      e.preventDefault();
	      this.props.form.validateFields(function (errors, values) {
	        if (errors) {
	          console.log('Errors in form!!!');
	          return;
	        }

	        console.log('Submit!!!');
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
	      console.log('>> render', getFieldValue('mention') === this.state.initValue);
	      return React.createElement(
	        _antd.Form,
	        {
	          horizontal: true
	        },
	        React.createElement(
	          FormItem,
	          {
	            id: "control-mention",
	            label: "Top coders",
	            labelCol: {
	              span: 6
	            },
	            wrapperCol: {
	              span: 14
	            }
	          },
	          getFieldDecorator('mention', {
	            rules: [{
	              validator: this.checkMention
	            }],
	            initialValue: this.state.initValue
	          })(React.createElement(_antd.Mention, {
	            suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']
	          }))
	        ),
	        React.createElement(
	          FormItem,
	          {
	            wrapperCol: {
	              span: 14,
	              offset: 6
	            }
	          },
	          React.createElement(
	            _antd.Button,
	            {
	              type: "primary",
	              onClick: this.handleSubmit
	            },
	            "Submit"
	          ),
	          "   ",
	          React.createElement(
	            _antd.Button,
	            {
	              type: "ghost",
	              onClick: this.handleReset
	            },
	            "Reset"
	          )
	        )
	      );
	    }
	  });
	  App = _antd.Form.create()(App);
	  return React.createElement(App, null);
	}
	};

/***/ },

/***/ 741:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "自定义建议"
	      ],
	      [
	        "p",
	        "注意，自定义建议时，onSearchChange 必须不能为空。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Customize suggestions."
	      ]
	    ]
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
	      "highlighted": "import { Mention } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Nav <span class=\"token operator\">=</span> Mention<span class=\"token punctuation\">.</span>Nav<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> webFrameworks <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  { name<span class=\"token punctuation\">:</span> <span class=\"token string\">'React'</span><span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'JavaScript'</span> }<span class=\"token punctuation\">,</span>\n  { name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Angular'</span><span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'JavaScript'</span> }<span class=\"token punctuation\">,</span>\n  { name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Laravel'</span><span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'PHP'</span><span class=\"token punctuation\">,</span> disabled<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> }<span class=\"token punctuation\">,</span>\n  { name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Flask'</span><span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'Python'</span> }<span class=\"token punctuation\">,</span>\n  { name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Django'</span><span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'Python'</span> }<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onSelect</span><span class=\"token punctuation\">(</span>suggestion<span class=\"token punctuation\">,</span> data<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'onSelect'</span><span class=\"token punctuation\">,</span> suggestion<span class=\"token punctuation\">,</span> data<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n<span class=\"token keyword\">const</span> CustomNavMention <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      suggestions<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onSearchChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> searchValue <span class=\"token operator\">=</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">toLowerCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> filtered <span class=\"token operator\">=</span> webFrameworks<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span>\n      item<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span><span class=\"token function\">toLowerCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>searchValue<span class=\"token punctuation\">)</span> !<span class=\"token operator\">==</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> suggestions <span class=\"token operator\">=</span> filtered<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>suggestion <span class=\"token operator\">=</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Nav value<span class=\"token operator\">=</span>{suggestion<span class=\"token punctuation\">.</span>name} data<span class=\"token operator\">=</span>{suggestion}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>{suggestion<span class=\"token punctuation\">.</span>name} <span class=\"token operator\">-</span> {suggestion<span class=\"token punctuation\">.</span>type} <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Nav<span class=\"token operator\">></span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ suggestions }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { suggestions } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Mention\n        placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"@someone\"</span>\n        style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span><span class=\"token punctuation\">,</span> height<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span> }}\n        suggestions<span class=\"token operator\">=</span>{suggestions}\n        onSearchChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onSearchChange}\n        onSelect<span class=\"token operator\">=</span>{onSelect}\n      <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>CustomNavMention <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Nav = _antd.Mention.Nav;
	  var webFrameworks = [{
	    name: 'React',
	    type: 'JavaScript'
	  }, {
	    name: 'Angular',
	    type: 'JavaScript'
	  }, {
	    name: 'Laravel',
	    type: 'PHP',
	    disabled: true
	  }, {
	    name: 'Flask',
	    type: 'Python'
	  }, {
	    name: 'Django',
	    type: 'Python'
	  }];

	  function onSelect(suggestion, data) {
	    console.log('onSelect', suggestion, data);
	  }

	  var CustomNavMention = React.createClass({
	    displayName: "CustomNavMention",
	    getInitialState: function getInitialState() {
	      return {
	        suggestions: []
	      };
	    },
	    onSearchChange: function onSearchChange(value) {
	      var searchValue = value.toLowerCase();
	      var filtered = webFrameworks.filter(function (item) {
	        return item.name.toLowerCase().indexOf(searchValue) !== -1;
	      });
	      var suggestions = filtered.map(function (suggestion) {
	        return React.createElement(
	          Nav,
	          {
	            value: suggestion.name,
	            data: suggestion
	          },
	          React.createElement(
	            "span",
	            null,
	            suggestion.name,
	            " - ",
	            suggestion.type,
	            " "
	          )
	        );
	      });
	      this.setState({
	        suggestions: suggestions
	      });
	    },
	    render: function render() {
	      var suggestions = this.state.suggestions;
	      return React.createElement(_antd.Mention, {
	        placeholder: "@someone",
	        style: {
	          width: '100%',
	          height: 100
	        },
	        suggestions: suggestions,
	        onSearchChange: this.onSearchChange,
	        onSelect: onSelect
	      });
	    }
	  });
	  return React.createElement(CustomNavMention, null);
	}
	};

/***/ },

/***/ 742:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "多行模式，多行模式必须指定高度。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Multi lines mode."
	      ]
	    ]
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
	      "highlighted": "import { Mention } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> { toString } <span class=\"token operator\">=</span> Mention<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>editorState<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span>editorState<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Mention\n    style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span><span class=\"token punctuation\">,</span> height<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span> }}\n    onChange<span class=\"token operator\">=</span>{onChange}\n    suggestions<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'afc163'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'benjycui'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'yiminghe'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'jljsj33'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'dqaria'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'RaoHai'</span><span class=\"token punctuation\">]</span>}\n    multiLines\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var toString = _antd.Mention.toString;

	  function onChange(editorState) {
	    console.log(toString(editorState));
	  }

	  return React.createElement(_antd.Mention, {
	    style: {
	      width: '100%',
	      height: 100
	    },
	    onChange: onChange,
	    suggestions: ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'],
	    multiLines: true
	  });
	}
	};

/***/ },

/***/ 743:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "指定提示渲染的父节点。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "To set the container of the suggestion."
	      ]
	    ]
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
	      "highlighted": "import { Mention<span class=\"token punctuation\">,</span> Popover<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> { toString<span class=\"token punctuation\">,</span> toEditorState } <span class=\"token operator\">=</span> Mention<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>editorState<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span>editorState<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">onSelect</span><span class=\"token punctuation\">(</span>suggestion<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'onSelect'</span><span class=\"token punctuation\">,</span> suggestion<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\n<span class=\"token keyword\">const</span> PopoverContainer <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getSuggestionContainer</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return this<span class=\"token punctuation\">.</span>popover<span class=\"token punctuation\">.</span><span class=\"token function\">getPopupDomNode</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> mention <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Mention\n      style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span><span class=\"token punctuation\">,</span> height<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span> }}\n      onChange<span class=\"token operator\">=</span>{onChange}\n      defaultValue<span class=\"token operator\">=</span>{<span class=\"token function\">toEditorState</span><span class=\"token punctuation\">(</span><span class=\"token string\">'@afc163'</span><span class=\"token punctuation\">)</span>}\n      suggestions<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'afc163'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'benjycui'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'yiminghe'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'RaoHai'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'中文'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'にほんご'</span><span class=\"token punctuation\">]</span>}\n      onSelect<span class=\"token operator\">=</span>{onSelect}\n      getSuggestionContainer<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>getSuggestionContainer}\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Popover trigger<span class=\"token operator\">=</span><span class=\"token string\">\"click\"</span> content<span class=\"token operator\">=</span>{mention} title<span class=\"token operator\">=</span><span class=\"token string\">\"Title\"</span> ref<span class=\"token operator\">=</span>{popover <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span>popover <span class=\"token operator\">=</span> popover}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span><span class=\"token operator\">></span>Click Me<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popover<span class=\"token operator\">></span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>PopoverContainer <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var toString = _antd.Mention.toString,
	      toEditorState = _antd.Mention.toEditorState;

	  function onChange(editorState) {
	    console.log(toString(editorState));
	  }

	  function onSelect(suggestion) {
	    console.log('onSelect', suggestion);
	  }

	  var PopoverContainer = React.createClass({
	    displayName: "PopoverContainer",
	    getSuggestionContainer: function getSuggestionContainer() {
	      return this.popover.getPopupDomNode();
	    },
	    render: function render() {
	      var _this = this;

	      var mention = React.createElement(_antd.Mention, {
	        style: {
	          width: '100%',
	          height: 100
	        },
	        onChange: onChange,
	        defaultValue: toEditorState('@afc163'),
	        suggestions: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'],
	        onSelect: onSelect,
	        getSuggestionContainer: this.getSuggestionContainer
	      });
	      return React.createElement(
	        _antd.Popover,
	        {
	          trigger: "click",
	          content: mention,
	          title: "Title",
	          ref: function ref(popover) {
	            return _this.popover = popover;
	          }
	        },
	        React.createElement(
	          _antd.Button,
	          {
	            type: "primary"
	          },
	          "Click Me"
	        )
	      );
	    }
	  });
	  return React.createElement(PopoverContainer, null);
	}
	};

/***/ },

/***/ 1049:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'async': __webpack_require__(736),
	    'avatar': __webpack_require__(737),
	    'basic': __webpack_require__(738),
	    'controllder-simple': __webpack_require__(739),
	    'controlled': __webpack_require__(740),
	    'custom-tag': __webpack_require__(741),
	    'multilines': __webpack_require__(742),
	    'popupContainer': __webpack_require__(743),
	}

/***/ }

});