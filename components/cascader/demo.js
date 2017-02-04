webpackJsonp([6,211],{

/***/ 631:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "省市区级联。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Cascade selection box for selecting province/city/district."
	      ]
	    ]
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
	      "highlighted": "import { Cascader } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Cascader options<span class=\"token operator\">=</span>{options} onChange<span class=\"token operator\">=</span>{onChange} placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Please select\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var options = [{
	    value: 'zhejiang',
	    label: 'Zhejiang',
	    children: [{
	      value: 'hangzhou',
	      label: 'Hangzhou',
	      children: [{
	        value: 'xihu',
	        label: 'West Lake'
	      }]
	    }]
	  }, {
	    value: 'jiangsu',
	    label: 'Jiangsu',
	    children: [{
	      value: 'nanjing',
	      label: 'Nanjing',
	      children: [{
	        value: 'zhonghuamen',
	        label: 'Zhong Hua Men'
	      }]
	    }]
	  }];

	  function onChange(value) {
	    console.log(value);
	  }

	  return React.createElement(_antd.Cascader, {
	    options: options,
	    onChange: onChange,
	    placeholder: "Please select"
	  });
	}
	};

/***/ },

/***/ 632:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "这种交互允许只选中父级选项。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Allow only select parent options."
	      ]
	    ]
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
	      "highlighted": "import { Cascader } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hanzhou'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Cascader options<span class=\"token operator\">=</span>{options} onChange<span class=\"token operator\">=</span>{onChange} changeOnSelect <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var options = [{
	    value: 'zhejiang',
	    label: 'Zhejiang',
	    children: [{
	      value: 'hangzhou',
	      label: 'Hanzhou',
	      children: [{
	        value: 'xihu',
	        label: 'West Lake'
	      }]
	    }]
	  }, {
	    value: 'jiangsu',
	    label: 'Jiangsu',
	    children: [{
	      value: 'nanjing',
	      label: 'Nanjing',
	      children: [{
	        value: 'zhonghuamen',
	        label: 'Zhong Hua Men'
	      }]
	    }]
	  }];

	  function onChange(value) {
	    console.log(value);
	  }

	  return React.createElement(_antd.Cascader, {
	    options: options,
	    onChange: onChange,
	    changeOnSelect: true
	  });
	}
	};

/***/ },

/***/ 633:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "例如给最后一项加上邮编链接。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "For instance, add an external link after the selected value."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 7,
	    "title": {
	      "zh-CN": "自定义已选项",
	      "en-US": "Custom render"
	    },
	    "filename": "components/cascader/demo/custom-render.md",
	    "id": "components-cascader-demo-custom-render"
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
	      "highlighted": "import { Cascader } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n      code<span class=\"token punctuation\">:</span> <span class=\"token number\">752100</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n      code<span class=\"token punctuation\">:</span> <span class=\"token number\">453400</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">handleAreaClick</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">,</span> option<span class=\"token punctuation\">)</span> {\n  e<span class=\"token punctuation\">.</span><span class=\"token function\">stopPropagation</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'clicked'</span><span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">,</span> option<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\n<span class=\"token keyword\">const</span> displayRender <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>labels<span class=\"token punctuation\">,</span> selectedOptions<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> labels<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>label<span class=\"token punctuation\">,</span> i<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n  <span class=\"token keyword\">const</span> option <span class=\"token operator\">=</span> selectedOptions<span class=\"token punctuation\">[</span>i<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>i <span class=\"token operator\">==</span><span class=\"token operator\">=</span> labels<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>span key<span class=\"token operator\">=</span>{option<span class=\"token punctuation\">.</span>value}<span class=\"token operator\">></span>\n        {label} <span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>a onClick<span class=\"token operator\">=</span>{e <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">handleAreaClick</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">,</span> option<span class=\"token punctuation\">)</span>}<span class=\"token operator\">></span>{option<span class=\"token punctuation\">.</span>code}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span><span class=\"token punctuation\">)</span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  return <span class=\"token operator\">&lt;</span>span key<span class=\"token operator\">=</span>{option<span class=\"token punctuation\">.</span>value}<span class=\"token operator\">></span>{label} <span class=\"token operator\">/</span> <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Cascader\n    options<span class=\"token operator\">=</span>{options}\n    defaultValue<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">]</span>}\n    displayRender<span class=\"token operator\">=</span>{displayRender}\n    style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">270</span> }}\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var options = [{
	    value: 'zhejiang',
	    label: 'Zhejiang',
	    children: [{
	      value: 'hangzhou',
	      label: 'Hangzhou',
	      children: [{
	        value: 'xihu',
	        label: 'West Lake',
	        code: 752100
	      }]
	    }]
	  }, {
	    value: 'jiangsu',
	    label: 'Jiangsu',
	    children: [{
	      value: 'nanjing',
	      label: 'Nanjing',
	      children: [{
	        value: 'zhonghuamen',
	        label: 'Zhong Hua Men',
	        code: 453400
	      }]
	    }]
	  }];

	  function handleAreaClick(e, label, option) {
	    e.stopPropagation();
	    console.log('clicked', label, option);
	  }

	  var displayRender = function displayRender(labels, selectedOptions) {
	    return labels.map(function (label, i) {
	      var option = selectedOptions[i];

	      if (i === labels.length - 1) {
	        return React.createElement(
	          "span",
	          {
	            key: option.value
	          },
	          label,
	          " (",
	          React.createElement(
	            "a",
	            {
	              onClick: function onClick(e) {
	                return handleAreaClick(e, label, option);
	              }
	            },
	            option.code
	          ),
	          ")"
	        );
	      }

	      return React.createElement(
	        "span",
	        {
	          key: option.value
	        },
	        label,
	        " / "
	      );
	    });
	  };

	  return React.createElement(_antd.Cascader, {
	    options: options,
	    defaultValue: ['zhejiang', 'hangzhou', 'xihu'],
	    displayRender: displayRender,
	    style: {
	      width: 270
	    }
	  });
	}
	};

/***/ },

/***/ 634:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "切换按钮和结果分开。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Separate trigger button and result."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "可以自定义显示",
	      "en-US": "Custom trigger"
	    },
	    "filename": "components/cascader/demo/custom-trigger.md",
	    "id": "components-cascader-demo-custom-trigger"
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
	      "highlighted": "import { Cascader } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> CitySwitcher <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Unselect'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> selectedOptions<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      text<span class=\"token punctuation\">:</span> selectedOptions<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>o <span class=\"token operator\">=</span><span class=\"token operator\">></span> o<span class=\"token punctuation\">.</span>label<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span><span class=\"token string\">', '</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>\n        {this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>text}\n        <span class=\"token operator\">&amp;</span>nbsp<span class=\"token comment\" spellcheck=\"true\">;</span>\n        <span class=\"token operator\">&lt;</span>Cascader options<span class=\"token operator\">=</span>{options} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onChange}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>Change city<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Cascader<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>CitySwitcher <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var options = [{
	    value: 'zhejiang',
	    label: 'Zhejiang',
	    children: [{
	      value: 'hangzhou',
	      label: 'Hangzhou'
	    }]
	  }, {
	    value: 'jiangsu',
	    label: 'Jiangsu',
	    children: [{
	      value: 'nanjing',
	      label: 'Nanjing'
	    }]
	  }];
	  var CitySwitcher = React.createClass({
	    displayName: "CitySwitcher",
	    getInitialState: function getInitialState() {
	      return {
	        text: 'Unselect'
	      };
	    },
	    onChange: function onChange(value, selectedOptions) {
	      this.setState({
	        text: selectedOptions.map(function (o) {
	          return o.label;
	        }).join(', ')
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        "span",
	        null,
	        this.state.text,
	        " ",
	        React.createElement(
	          _antd.Cascader,
	          {
	            options: options,
	            onChange: this.onChange
	          },
	          React.createElement(
	            "a",
	            {
	              href: "#"
	            },
	            "Change city"
	          )
	        )
	      );
	    }
	  });
	  return React.createElement(CitySwitcher, null);
	}
	};

/***/ },

/***/ 635:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "默认值通过数组的方式指定。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Specifies default value by an array."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "默认值",
	      "en-US": "Default value"
	    },
	    "filename": "components/cascader/demo/default-value.md",
	    "id": "components-cascader-demo-default-value"
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
	      "highlighted": "import { Cascader } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Cascader defaultValue<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">]</span>} options<span class=\"token operator\">=</span>{options} onChange<span class=\"token operator\">=</span>{onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var options = [{
	    value: 'zhejiang',
	    label: 'Zhejiang',
	    children: [{
	      value: 'hangzhou',
	      label: 'Hangzhou',
	      children: [{
	        value: 'xihu',
	        label: 'West Lake'
	      }]
	    }]
	  }, {
	    value: 'jiangsu',
	    label: 'Jiangsu',
	    children: [{
	      value: 'nanjing',
	      label: 'Nanjing',
	      children: [{
	        value: 'zhonghuamen',
	        label: 'Zhong Hua Men'
	      }]
	    }]
	  }];

	  function onChange(value) {
	    console.log(value);
	  }

	  return React.createElement(_antd.Cascader, {
	    defaultValue: ['zhejiang', 'hangzhou', 'xihu'],
	    options: options,
	    onChange: onChange
	  });
	}
	};

/***/ },

/***/ 636:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "通过指定 options 里的 ",
	        [
	          "code",
	          "disabled"
	        ],
	        " 字段。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Disable option by specifying the ",
	        [
	          "code",
	          "disabled"
	        ],
	        " property in ",
	        [
	          "code",
	          "options"
	        ],
	        "."
	      ]
	    ]
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
	      "highlighted": "import { Cascader } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n  disabled<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Cascader options<span class=\"token operator\">=</span>{options} onChange<span class=\"token operator\">=</span>{onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var options = [{
	    value: 'zhejiang',
	    label: 'Zhejiang',
	    children: [{
	      value: 'hangzhou',
	      label: 'Hangzhou',
	      children: [{
	        value: 'xihu',
	        label: 'West Lake'
	      }]
	    }]
	  }, {
	    value: 'jiangsu',
	    label: 'Jiangsu',
	    disabled: true,
	    children: [{
	      value: 'nanjing',
	      label: 'Nanjing',
	      children: [{
	        value: 'zhonghuamen',
	        label: 'Zhong Hua Men'
	      }]
	    }]
	  }];

	  function onChange(value) {
	    console.log(value);
	  }

	  return React.createElement(_antd.Cascader, {
	    options: options,
	    onChange: onChange
	  });
	}
	};

/***/ },

/***/ 637:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "通过移入展开下级菜单，点击完成选择。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Hover to expand sub menu, click to select option."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "移入展开",
	      "en-US": "Hover"
	    },
	    "filename": "components/cascader/demo/hover.md",
	    "id": "components-cascader-demo-hover"
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
	      "highlighted": "import { Cascader } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\n<span class=\"token operator\">/</span><span class=\"token operator\">/</span> Just show the latest item<span class=\"token punctuation\">.</span>\nfunction <span class=\"token function\">displayRender</span><span class=\"token punctuation\">(</span>label<span class=\"token punctuation\">)</span> {\n  return label<span class=\"token punctuation\">[</span>label<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Cascader options<span class=\"token operator\">=</span>{options} expandTrigger<span class=\"token operator\">=</span><span class=\"token string\">\"hover\"</span>\n    displayRender<span class=\"token operator\">=</span>{displayRender} onChange<span class=\"token operator\">=</span>{onChange}\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var options = [{
	    value: 'zhejiang',
	    label: 'Zhejiang',
	    children: [{
	      value: 'hangzhou',
	      label: 'Hangzhou',
	      children: [{
	        value: 'xihu',
	        label: 'West Lake'
	      }]
	    }]
	  }, {
	    value: 'jiangsu',
	    label: 'Jiangsu',
	    children: [{
	      value: 'nanjing',
	      label: 'Nanjing',
	      children: [{
	        value: 'zhonghuamen',
	        label: 'Zhong Hua Men'
	      }]
	    }]
	  }];

	  function onChange(value) {
	    console.log(value);
	  } // Just show the latest item.


	  function displayRender(label) {
	    return label[label.length - 1];
	  }

	  return React.createElement(_antd.Cascader, {
	    options: options,
	    expandTrigger: "hover",
	    displayRender: displayRender,
	    onChange: onChange
	  });
	}
	};

/***/ },

/***/ 638:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "使用 ",
	        [
	          "code",
	          "loadData"
	        ],
	        " 实现动态加载选项。"
	      ],
	      [
	        "blockquote",
	        [
	          "p",
	          "注意：",
	          [
	            "code",
	            "loadData"
	          ],
	          " 与 ",
	          [
	            "code",
	            "showSearch"
	          ],
	          " 无法一起使用。"
	        ]
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Load options lazily with ",
	        [
	          "code",
	          "loadData"
	        ],
	        "."
	      ],
	      [
	        "blockquote",
	        [
	          "p",
	          "Note: ",
	          [
	            "code",
	            "loadData"
	          ],
	          " cannot work with ",
	          [
	            "code",
	            "showSearch"
	          ],
	          "."
	        ]
	      ]
	    ]
	  },
	  "meta": {
	    "order": 9,
	    "title": {
	      "zh-CN": "动态加载选项",
	      "en-US": "Load Options Lazily"
	    },
	    "filename": "components/cascader/demo/lazy.md",
	    "id": "components-cascader-demo-lazy"
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
	      "highlighted": "import { Cascader } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n  isLeaf<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n  isLeaf<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nclass LazyOptions extends React<span class=\"token punctuation\">.</span>Component {\n  state <span class=\"token operator\">=</span> {\n    inputValue<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n    options<span class=\"token punctuation\">,</span>\n  }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  onChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> selectedOptions<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> selectedOptions<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      inputValue<span class=\"token punctuation\">:</span> selectedOptions<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>o <span class=\"token operator\">=</span><span class=\"token operator\">></span> o<span class=\"token punctuation\">.</span>label<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span><span class=\"token string\">', '</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  loadData <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>selectedOptions<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    <span class=\"token keyword\">const</span> targetOption <span class=\"token operator\">=</span> selectedOptions<span class=\"token punctuation\">[</span>selectedOptions<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    targetOption<span class=\"token punctuation\">.</span>loading <span class=\"token operator\">=</span> <span class=\"token boolean\">true</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> load options lazily\n    <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      targetOption<span class=\"token punctuation\">.</span>loading <span class=\"token operator\">=</span> <span class=\"token boolean\">false</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      targetOption<span class=\"token punctuation\">.</span>children <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n        label<span class=\"token punctuation\">:</span> `${targetOption<span class=\"token punctuation\">.</span>label} Dynamic <span class=\"token number\">1</span>`<span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'dynamic1'</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">,</span> {\n        label<span class=\"token punctuation\">:</span> `${targetOption<span class=\"token punctuation\">.</span>label} Dynamic <span class=\"token number\">2</span>`<span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'dynamic2'</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n        options<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>options<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">,</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Cascader\n        options<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>options}\n        loadData<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>loadData}\n        onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onChange}\n        changeOnSelect\n      <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>LazyOptions <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	  var options = [{
	    value: 'zhejiang',
	    label: 'Zhejiang',
	    isLeaf: false
	  }, {
	    value: 'jiangsu',
	    label: 'Jiangsu',
	    isLeaf: false
	  }];

	  var LazyOptions = function (_React$Component) {
	    _inherits(LazyOptions, _React$Component);

	    function LazyOptions() {
	      var _temp, _this, _ret;

	      _classCallCheck(this, LazyOptions);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	        inputValue: '',
	        options: options
	      }, _this.onChange = function (value, selectedOptions) {
	        console.log(value, selectedOptions);

	        _this.setState({
	          inputValue: selectedOptions.map(function (o) {
	            return o.label;
	          }).join(', ')
	        });
	      }, _this.loadData = function (selectedOptions) {
	        var targetOption = selectedOptions[selectedOptions.length - 1];
	        targetOption.loading = true; // load options lazily

	        setTimeout(function () {
	          targetOption.loading = false;
	          targetOption.children = [{
	            label: targetOption.label + " Dynamic 1",
	            value: 'dynamic1'
	          }, {
	            label: targetOption.label + " Dynamic 2",
	            value: 'dynamic2'
	          }];

	          _this.setState({
	            options: [].concat(_toConsumableArray(_this.state.options))
	          });
	        }, 1000);
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    LazyOptions.prototype.render = function render() {
	      return React.createElement(_antd.Cascader, {
	        options: this.state.options,
	        loadData: this.loadData,
	        onChange: this.onChange,
	        changeOnSelect: true
	      });
	    };

	    return LazyOptions;
	  }(React.Component);

	  return React.createElement(LazyOptions, null);
	}
	};

/***/ },

/***/ 639:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "可以直接搜索选项并选择。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Search and select options directly."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 8,
	    "title": {
	      "zh-CN": "搜索",
	      "en-US": "Search"
	    },
	    "filename": "components/cascader/demo/search.md",
	    "id": "components-cascader-demo-search"
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
	      "highlighted": "import { Cascader } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua men'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> selectedOptions<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> selectedOptions<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Cascader\n    options<span class=\"token operator\">=</span>{options}\n    onChange<span class=\"token operator\">=</span>{onChange}\n    placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Please select\"</span>\n    showSearch\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var options = [{
	    value: 'zhejiang',
	    label: 'Zhejiang',
	    children: [{
	      value: 'hangzhou',
	      label: 'Hangzhou',
	      children: [{
	        value: 'xihu',
	        label: 'West Lake'
	      }]
	    }]
	  }, {
	    value: 'jiangsu',
	    label: 'Jiangsu',
	    children: [{
	      value: 'nanjing',
	      label: 'Nanjing',
	      children: [{
	        value: 'zhonghuamen',
	        label: 'Zhong Hua men'
	      }]
	    }]
	  }];

	  function onChange(value, selectedOptions) {
	    console.log(value, selectedOptions);
	  }

	  return React.createElement(_antd.Cascader, {
	    options: options,
	    onChange: onChange,
	    placeholder: "Please select",
	    showSearch: true
	  });
	}
	};

/***/ },

/***/ 640:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "不同大小的级联选择器。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Cascade selection box of different sizes."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "大小",
	      "en-US": "Size"
	    },
	    "filename": "components/cascader/demo/size.md",
	    "id": "components-cascader-demo-size"
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
	      "highlighted": "import { Cascader } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n  label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Cascader size<span class=\"token operator\">=</span><span class=\"token string\">\"large\"</span> options<span class=\"token operator\">=</span>{options} onChange<span class=\"token operator\">=</span>{onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Cascader options<span class=\"token operator\">=</span>{options} onChange<span class=\"token operator\">=</span>{onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Cascader size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span> options<span class=\"token operator\">=</span>{options} onChange<span class=\"token operator\">=</span>{onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var options = [{
	    value: 'zhejiang',
	    label: 'Zhejiang',
	    children: [{
	      value: 'hangzhou',
	      label: 'Hangzhou',
	      children: [{
	        value: 'xihu',
	        label: 'West Lake'
	      }]
	    }]
	  }, {
	    value: 'jiangsu',
	    label: 'Jiangsu',
	    children: [{
	      value: 'nanjing',
	      label: 'Nanjing',
	      children: [{
	        value: 'zhonghuamen',
	        label: 'Zhong Hua Men'
	      }]
	    }]
	  }];

	  function onChange(value) {
	    console.log(value);
	  }

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.Cascader, {
	      size: "large",
	      options: options,
	      onChange: onChange
	    }),
	    React.createElement("br", null),
	    React.createElement("br", null),
	    React.createElement(_antd.Cascader, {
	      options: options,
	      onChange: onChange
	    }),
	    React.createElement("br", null),
	    React.createElement("br", null),
	    React.createElement(_antd.Cascader, {
	      size: "small",
	      options: options,
	      onChange: onChange
	    }),
	    React.createElement("br", null),
	    React.createElement("br", null)
	  );
	}
	};

/***/ },

/***/ 1041:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(631),
	    'change-on-select': __webpack_require__(632),
	    'custom-render': __webpack_require__(633),
	    'custom-trigger': __webpack_require__(634),
	    'default-value': __webpack_require__(635),
	    'disabled-option': __webpack_require__(636),
	    'hover': __webpack_require__(637),
	    'lazy': __webpack_require__(638),
	    'search': __webpack_require__(639),
	    'size': __webpack_require__(640),
	}

/***/ }

});