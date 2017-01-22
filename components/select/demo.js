webpackJsonp([1,210],{

/***/ 551:
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};


/***/ },

/***/ 552:
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(551);
	exports.encode = exports.stringify = __webpack_require__(552);


/***/ },

/***/ 824:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "试下复制 ",
	        [
	          "code",
	          "露西,杰克"
	        ],
	        " 到输入框里。只在 tags 和 multiple 模式下可用。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Try to copy ",
	        [
	          "code",
	          "Lucy,Jack"
	        ],
	        " to the input. Only available in tags and multiple mode."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 11,
	    "title": {
	      "zh-CN": "自动分词",
	      "en-US": "Automatic tokenization"
	    },
	    "filename": "components/select/demo/automatic-tokenization.md",
	    "id": "components-select-demo-automatic-tokenization"
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
	      "highlighted": "import { <span class=\"token keyword\">Select</span> } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">.</span>Option<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> children <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> <span class=\"token number\">10</span><span class=\"token comment\" spellcheck=\"true\">; i &lt; 36; i++) {</span>\n  children<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Option key<span class=\"token operator\">=</span>{i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token number\">36</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">+</span> i}<span class=\"token operator\">></span>{i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token number\">36</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">+</span> i}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>`selected ${value}`<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span>\n    tags\n    style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span> }}\n    onChange<span class=\"token operator\">=</span>{handleChange}\n    tokenSeparators<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">','</span><span class=\"token punctuation\">]</span>}\n  <span class=\"token operator\">></span>\n    {children}\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Option = _antd.Select.Option;
	  var children = [];

	  for (var i = 10; i < 36; i++) {
	    children.push(React.createElement(
	      Option,
	      {
	        key: i.toString(36) + i
	      },
	      i.toString(36) + i
	    ));
	  }

	  function handleChange(value) {
	    console.log("selected " + value);
	  }

	  return React.createElement(
	    _antd.Select,
	    {
	      tags: true,
	      style: {
	        width: '100%'
	      },
	      onChange: handleChange,
	      tokenSeparators: [',']
	    },
	    children
	  );
	}
	};

/***/ },

/***/ 825:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "基本使用。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Basic Usage."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本使用",
	      "en-US": "Basic Usage"
	    },
	    "filename": "components/select/demo/basic.md",
	    "id": "components-select-demo-basic"
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
	      "highlighted": "import { <span class=\"token keyword\">Select</span> } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">.</span>Option<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>`selected ${value}`<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"lucy\"</span> style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">120</span> }} onChange<span class=\"token operator\">=</span>{handleChange}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"jack\"</span><span class=\"token operator\">></span>Jack<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"lucy\"</span><span class=\"token operator\">></span>Lucy<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"disabled\"</span> disabled<span class=\"token operator\">></span>Disabled<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"Yiminghe\"</span><span class=\"token operator\">></span>yiminghe<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"lucy\"</span> style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">120</span> }} allowClear disabled<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"lucy\"</span><span class=\"token operator\">></span>Lucy<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Option = _antd.Select.Option;

	  function handleChange(value) {
	    console.log("selected " + value);
	  }

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      _antd.Select,
	      {
	        defaultValue: "lucy",
	        style: {
	          width: 120
	        },
	        onChange: handleChange
	      },
	      React.createElement(
	        Option,
	        {
	          value: "jack"
	        },
	        "Jack"
	      ),
	      React.createElement(
	        Option,
	        {
	          value: "lucy"
	        },
	        "Lucy"
	      ),
	      React.createElement(
	        Option,
	        {
	          value: "disabled",
	          disabled: true
	        },
	        "Disabled"
	      ),
	      React.createElement(
	        Option,
	        {
	          value: "Yiminghe"
	        },
	        "yiminghe"
	      )
	    ),
	    React.createElement(
	      _antd.Select,
	      {
	        defaultValue: "lucy",
	        style: {
	          width: 120
	        },
	        allowClear: true,
	        disabled: true
	      },
	      React.createElement(
	        Option,
	        {
	          value: "lucy"
	        },
	        "Lucy"
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 826:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "输入框自动完成功能，下面是一个账号注册表单的例子。"
	      ],
	      [
	        "p",
	        "推荐使用 ",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "/components/auto-complete/"
	          },
	          "AutoComplete"
	        ],
	        " 组件。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Automatic completion of select input."
	      ],
	      [
	        "p",
	        "Using the ",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "/components/auto-complete/"
	          },
	          "AutoComplete"
	        ],
	        " component is strongly recommended instead as it is more flexible and capable."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "智能提示",
	      "en-US": "Automatic completion"
	    },
	    "filename": "components/select/demo/combobox.md",
	    "id": "components-select-demo-combobox"
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
	      "highlighted": "import { <span class=\"token keyword\">Select</span> } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">.</span>Option<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Test <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      options<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    let options<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>!value || value<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span><span class=\"token string\">'@'</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">>=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span> {\n      options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    } <span class=\"token keyword\">else</span> {\n      options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'gmail.com'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'163.com'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'qq.com'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>domain<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n        <span class=\"token keyword\">const</span> email <span class=\"token operator\">=</span> `${value}@${domain}`<span class=\"token comment\" spellcheck=\"true\">;</span>\n        return <span class=\"token operator\">&lt;</span>Option key<span class=\"token operator\">=</span>{email}<span class=\"token operator\">></span>{email}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ options }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> filterOption needs <span class=\"token keyword\">to</span> be <span class=\"token boolean\">false</span>，as the value is dynamically generated\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> combobox\n        style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> }}\n        onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleChange}\n        filterOption<span class=\"token operator\">=</span>{<span class=\"token boolean\">false</span>}\n        placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Enter the account name\"</span>\n      <span class=\"token operator\">></span>\n        {this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>options}\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Test <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Option = _antd.Select.Option;
	  var Test = React.createClass({
	    displayName: "Test",
	    getInitialState: function getInitialState() {
	      return {
	        options: []
	      };
	    },
	    handleChange: function handleChange(value) {
	      var options = void 0;

	      if (!value || value.indexOf('@') >= 0) {
	        options = [];
	      } else {
	        options = ['gmail.com', '163.com', 'qq.com'].map(function (domain) {
	          var email = value + "@" + domain;
	          return React.createElement(
	            Option,
	            {
	              key: email
	            },
	            email
	          );
	        });
	      }

	      this.setState({
	        options: options
	      });
	    },
	    render: function render() {
	      // filterOption needs to be false，as the value is dynamically generated
	      return React.createElement(
	        _antd.Select,
	        {
	          combobox: true,
	          style: {
	            width: 200
	          },
	          onChange: this.handleChange,
	          filterOption: false,
	          placeholder: "Enter the account name"
	        },
	        this.state.options
	      );
	    }
	  });
	  return React.createElement(Test, null);
	}
	};

/***/ },

/***/ 827:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "省市联动是典型的例子。"
	      ],
	      [
	        "p",
	        "推荐使用 ",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "/components/cascader/"
	          },
	          "Cascader"
	        ],
	        " 组件。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated."
	      ],
	      [
	        "p",
	        "Using the ",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "/components/cascader"
	          },
	          "Cascader"
	        ],
	        " component is strongly recommended instead as it is more flexible and capable."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "联动",
	      "en-US": "coordinate"
	    },
	    "filename": "components/select/demo/coordinate.md",
	    "id": "components-select-demo-coordinate"
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
	      "highlighted": "import { <span class=\"token keyword\">Select</span> } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">.</span>Option<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> provinceData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> cityData <span class=\"token operator\">=</span> {\n  Zhejiang<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Ningbo'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Wenzhou'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  Jiangsu<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Suzhou'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Zhenjiang'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      cities<span class=\"token punctuation\">:</span> cityData<span class=\"token punctuation\">[</span>provinceData<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      secondCity<span class=\"token punctuation\">:</span> cityData<span class=\"token punctuation\">[</span>provinceData<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleProvinceChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      cities<span class=\"token punctuation\">:</span> cityData<span class=\"token punctuation\">[</span>value<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      secondCity<span class=\"token punctuation\">:</span> cityData<span class=\"token punctuation\">[</span>value<span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onSecondCityChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      secondCity<span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> provinceOptions <span class=\"token operator\">=</span> provinceData<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>province <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>Option key<span class=\"token operator\">=</span>{province}<span class=\"token operator\">></span>{province}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> cityOptions <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>cities<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>city <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>Option key<span class=\"token operator\">=</span>{city}<span class=\"token operator\">></span>{city}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> defaultValue<span class=\"token operator\">=</span>{provinceData<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span>} style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">90</span> }} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleProvinceChange}<span class=\"token operator\">></span>\n          {provinceOptions}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> value<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>secondCity} style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">90</span> }} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onSecondCityChange}<span class=\"token operator\">></span>\n          {cityOptions}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Option = _antd.Select.Option;
	  var provinceData = ['Zhejiang', 'Jiangsu'];
	  var cityData = {
	    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
	    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
	  };
	  var App = React.createClass({
	    displayName: "App",
	    getInitialState: function getInitialState() {
	      return {
	        cities: cityData[provinceData[0]],
	        secondCity: cityData[provinceData[0]][0]
	      };
	    },
	    handleProvinceChange: function handleProvinceChange(value) {
	      this.setState({
	        cities: cityData[value],
	        secondCity: cityData[value][0]
	      });
	    },
	    onSecondCityChange: function onSecondCityChange(value) {
	      this.setState({
	        secondCity: value
	      });
	    },
	    render: function render() {
	      var provinceOptions = provinceData.map(function (province) {
	        return React.createElement(
	          Option,
	          {
	            key: province
	          },
	          province
	        );
	      });
	      var cityOptions = this.state.cities.map(function (city) {
	        return React.createElement(
	          Option,
	          {
	            key: city
	          },
	          city
	        );
	      });
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          _antd.Select,
	          {
	            defaultValue: provinceData[0],
	            style: {
	              width: 90
	            },
	            onChange: this.handleProvinceChange
	          },
	          provinceOptions
	        ),
	        React.createElement(
	          _antd.Select,
	          {
	            value: this.state.secondCity,
	            style: {
	              width: 90
	            },
	            onChange: this.onSecondCityChange
	          },
	          cityOptions
	        )
	      );
	    }
	  });
	  return React.createElement(App, null);
	}
	};

/***/ },

/***/ 828:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "默认情况下 ",
	        [
	          "code",
	          "onChange"
	        ],
	        " 里只能拿到 value，如果需要拿到选中的节点文本 label，可以使用 ",
	        [
	          "code",
	          "labelInValue"
	        ],
	        " 属性。"
	      ],
	      [
	        "p",
	        "选中项的 label 会被包装到 value 中传递给 ",
	        [
	          "code",
	          "onChange"
	        ],
	        " 等函数，此时 value 是一个对象。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "As a default behavior, the onChange callback can only get the value of the selected item. The labelInValue prop can be used to get the label property of the selected item."
	      ],
	      [
	        "p",
	        "The label of the selected item will be packed as an object for passing to the onChange callback."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 10,
	    "title": {
	      "zh-CN": "获得选项的文本",
	      "en-US": "Get value of selected item"
	    },
	    "filename": "components/select/demo/label-in-value.md",
	    "id": "components-select-demo-label-in-value"
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
	      "highlighted": "import { <span class=\"token keyword\">Select</span> } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">.</span>Option<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;  // { key: \"lucy\", label: \"Lucy (101)\" }</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> labelInValue defaultValue<span class=\"token operator\">=</span>{{ key<span class=\"token punctuation\">:</span> <span class=\"token string\">'lucy'</span> }} style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">120</span> }} onChange<span class=\"token operator\">=</span>{handleChange}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"jack\"</span><span class=\"token operator\">></span>Jack <span class=\"token punctuation\">(</span><span class=\"token number\">100</span><span class=\"token punctuation\">)</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"lucy\"</span><span class=\"token operator\">></span>Lucy <span class=\"token punctuation\">(</span><span class=\"token number\">101</span><span class=\"token punctuation\">)</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Option = _antd.Select.Option;

	  function handleChange(value) {
	    console.log(value); // { key: "lucy", label: "Lucy (101)" }
	  }

	  return React.createElement(
	    _antd.Select,
	    {
	      labelInValue: true,
	      defaultValue: {
	        key: 'lucy'
	      },
	      style: {
	        width: 120
	      },
	      onChange: handleChange
	    },
	    React.createElement(
	      Option,
	      {
	        value: "jack"
	      },
	      "Jack (100)"
	    ),
	    React.createElement(
	      Option,
	      {
	        value: "lucy"
	      },
	      "Lucy (101)"
	    )
	  );
	}
	};

/***/ },

/***/ 829:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "多选，从已有条目中选择（scroll the menu）"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Multiple selection, selecting from existing items (scroll the menu)."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "多选",
	      "en-US": "multiple selection"
	    },
	    "filename": "components/select/demo/multiple.md",
	    "id": "components-select-demo-multiple"
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
	      "highlighted": "import { <span class=\"token keyword\">Select</span> } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">.</span>Option<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> children <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> <span class=\"token number\">10</span><span class=\"token comment\" spellcheck=\"true\">; i &lt; 36; i++) {</span>\n  children<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Option key<span class=\"token operator\">=</span>{i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token number\">36</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">+</span> i}<span class=\"token operator\">></span>{i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token number\">36</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">+</span> i}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>`selected ${value}`<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span>\n    multiple\n    style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span> }}\n    placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Please select\"</span>\n    defaultValue<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'a10'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'c12'</span><span class=\"token punctuation\">]</span>}\n    onChange<span class=\"token operator\">=</span>{handleChange}\n  <span class=\"token operator\">></span>\n    {children}\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Option = _antd.Select.Option;
	  var children = [];

	  for (var i = 10; i < 36; i++) {
	    children.push(React.createElement(
	      Option,
	      {
	        key: i.toString(36) + i
	      },
	      i.toString(36) + i
	    ));
	  }

	  function handleChange(value) {
	    console.log("selected " + value);
	  }

	  return React.createElement(
	    _antd.Select,
	    {
	      multiple: true,
	      style: {
	        width: '100%'
	      },
	      placeholder: "Please select",
	      defaultValue: ['a10', 'c12'],
	      onChange: handleChange
	    },
	    children
	  );
	}
	};

/***/ },

/***/ 830:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "用 ",
	        [
	          "code",
	          "OptGroup"
	        ],
	        " 进行选项分组。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Using ",
	        [
	          "code",
	          "OptGroup"
	        ],
	        " to group the options."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "分组",
	      "en-US": "Option Group"
	    },
	    "filename": "components/select/demo/optgroup.md",
	    "id": "components-select-demo-optgroup"
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
	      "highlighted": "import { <span class=\"token keyword\">Select</span> } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">.</span>Option<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> OptGroup <span class=\"token operator\">=</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">.</span>OptGroup<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>`selected ${value}`<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"lucy\"</span>\n    style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> }}\n    showSearch<span class=\"token operator\">=</span>{<span class=\"token boolean\">false</span>}\n    onChange<span class=\"token operator\">=</span>{handleChange}\n  <span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>OptGroup label<span class=\"token operator\">=</span><span class=\"token string\">\"Manager\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"jack\"</span><span class=\"token operator\">></span>Jack<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"lucy\"</span><span class=\"token operator\">></span>Lucy<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>OptGroup<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>OptGroup label<span class=\"token operator\">=</span><span class=\"token string\">\"Engineer\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"Yiminghe\"</span><span class=\"token operator\">></span>yiminghe<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>OptGroup<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Option = _antd.Select.Option;
	  var OptGroup = _antd.Select.OptGroup;

	  function handleChange(value) {
	    console.log("selected " + value);
	  }

	  return React.createElement(
	    _antd.Select,
	    {
	      defaultValue: "lucy",
	      style: {
	        width: 200
	      },
	      showSearch: false,
	      onChange: handleChange
	    },
	    React.createElement(
	      OptGroup,
	      {
	        label: "Manager"
	      },
	      React.createElement(
	        Option,
	        {
	          value: "jack"
	        },
	        "Jack"
	      ),
	      React.createElement(
	        Option,
	        {
	          value: "lucy"
	        },
	        "Lucy"
	      )
	    ),
	    React.createElement(
	      OptGroup,
	      {
	        label: "Engineer"
	      },
	      React.createElement(
	        Option,
	        {
	          value: "Yiminghe"
	        },
	        "yiminghe"
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 831:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "自动补全和远程数据结合。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Autocomplete with remote ajax data."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 9,
	    "title": {
	      "zh-CN": "搜索框",
	      "en-US": "Search Box"
	    },
	    "filename": "components/select/demo/search-box.md",
	    "id": "components-select-demo-search-box"
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
	      "highlighted": "import { <span class=\"token keyword\">Select</span> } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport jsonp from <span class=\"token string\">'fetch-jsonp'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport querystring from <span class=\"token string\">'querystring'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">.</span>Option<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nlet timeout<span class=\"token comment\" spellcheck=\"true\">;</span>\nlet currentValue<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">fetch</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> callback<span class=\"token punctuation\">)</span> {\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>timeout<span class=\"token punctuation\">)</span> {\n    <span class=\"token function\">clearTimeout</span><span class=\"token punctuation\">(</span>timeout<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    timeout <span class=\"token operator\">=</span> <span class=\"token keyword\">null</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  currentValue <span class=\"token operator\">=</span> value<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n  function <span class=\"token function\">fake</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> str <span class=\"token operator\">=</span> querystring<span class=\"token punctuation\">.</span><span class=\"token function\">encode</span><span class=\"token punctuation\">(</span>{\n      code<span class=\"token punctuation\">:</span> <span class=\"token string\">'utf-8'</span><span class=\"token punctuation\">,</span>\n      q<span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token function\">jsonp</span><span class=\"token punctuation\">(</span>`https<span class=\"token punctuation\">:</span><span class=\"token operator\">/</span><span class=\"token operator\">/</span>suggest<span class=\"token punctuation\">.</span>taobao<span class=\"token punctuation\">.</span>com<span class=\"token operator\">/</span>sug<span class=\"token operator\">?</span>${str}`<span class=\"token punctuation\">)</span>\n      <span class=\"token punctuation\">.</span><span class=\"token function\">then</span><span class=\"token punctuation\">(</span>response <span class=\"token operator\">=</span><span class=\"token operator\">></span> response<span class=\"token punctuation\">.</span><span class=\"token function\">json</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span>\n      <span class=\"token punctuation\">.</span><span class=\"token function\">then</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>d<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n        <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>currentValue <span class=\"token operator\">==</span><span class=\"token operator\">=</span> value<span class=\"token punctuation\">)</span> {\n          <span class=\"token keyword\">const</span> result <span class=\"token operator\">=</span> d<span class=\"token punctuation\">.</span>result<span class=\"token comment\" spellcheck=\"true\">;</span>\n          <span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n          result<span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>r<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n            data<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>{\n              value<span class=\"token punctuation\">:</span> r<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n              text<span class=\"token punctuation\">:</span> r<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n            }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n          }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n          <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n        }\n      }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  timeout <span class=\"token operator\">=</span> <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span>fake<span class=\"token punctuation\">,</span> <span class=\"token number\">300</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\n<span class=\"token keyword\">const</span> SearchInput <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      data<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ value }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token function\">fetch</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> data <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ data }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>d <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>Option key<span class=\"token operator\">=</span>{d<span class=\"token punctuation\">.</span>value}<span class=\"token operator\">></span>{d<span class=\"token punctuation\">.</span>text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span>\n        combobox\n        value<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value}\n        placeholder<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>placeholder}\n        notFoundContent<span class=\"token operator\">=</span><span class=\"token string\">\"\"</span>\n        style<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>style}\n        defaultActiveFirstOption<span class=\"token operator\">=</span>{<span class=\"token boolean\">false</span>}\n        showArrow<span class=\"token operator\">=</span>{<span class=\"token boolean\">false</span>}\n        filterOption<span class=\"token operator\">=</span>{<span class=\"token boolean\">false</span>}\n        onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleChange}\n      <span class=\"token operator\">></span>\n        {options}\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>SearchInput placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"input search text\"</span> style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> }} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var _fetchJsonp = __webpack_require__(1259);

	  var _fetchJsonp2 = _interopRequireDefault(_fetchJsonp);

	  var _querystring = __webpack_require__(553);

	  var _querystring2 = _interopRequireDefault(_querystring);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	  var Option = _antd.Select.Option;
	  var timeout = void 0;
	  var currentValue = void 0;

	  function fetch(value, callback) {
	    if (timeout) {
	      clearTimeout(timeout);
	      timeout = null;
	    }

	    currentValue = value;

	    function fake() {
	      var str = _querystring2.default.encode({
	        code: 'utf-8',
	        q: value
	      });

	      (0, _fetchJsonp2.default)("https://suggest.taobao.com/sug?" + str).then(function (response) {
	        return response.json();
	      }).then(function (d) {
	        if (currentValue === value) {
	          (function () {
	            var result = d.result;
	            var data = [];
	            result.forEach(function (r) {
	              data.push({
	                value: r[0],
	                text: r[0]
	              });
	            });
	            callback(data);
	          })();
	        }
	      });
	    }

	    timeout = setTimeout(fake, 300);
	  }

	  var SearchInput = React.createClass({
	    displayName: "SearchInput",
	    getInitialState: function getInitialState() {
	      return {
	        data: [],
	        value: ''
	      };
	    },
	    handleChange: function handleChange(value) {
	      var _this = this;

	      this.setState({
	        value: value
	      });
	      fetch(value, function (data) {
	        return _this.setState({
	          data: data
	        });
	      });
	    },
	    render: function render() {
	      var options = this.state.data.map(function (d) {
	        return React.createElement(
	          Option,
	          {
	            key: d.value
	          },
	          d.text
	        );
	      });
	      return React.createElement(
	        _antd.Select,
	        {
	          combobox: true,
	          value: this.state.value,
	          placeholder: this.props.placeholder,
	          notFoundContent: "",
	          style: this.props.style,
	          defaultActiveFirstOption: false,
	          showArrow: false,
	          filterOption: false,
	          onChange: this.handleChange
	        },
	        options
	      );
	    }
	  });
	  return React.createElement(SearchInput, {
	    placeholder: "input search text",
	    style: {
	      width: 200
	    }
	  });
	}
	};

/***/ },

/***/ 832:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "展开后可对选项进行搜索。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Search the options while expanded."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "带搜索框",
	      "en-US": "Select with search field"
	    },
	    "filename": "components/select/demo/search.md",
	    "id": "components-select-demo-search"
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
	      "highlighted": "import { <span class=\"token keyword\">Select</span> } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">.</span>Option<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>`selected ${value}`<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span>\n    showSearch\n    style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> }}\n    placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Select a person\"</span>\n    optionFilterProp<span class=\"token operator\">=</span><span class=\"token string\">\"children\"</span>\n    onChange<span class=\"token operator\">=</span>{handleChange}\n    filterOption<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span>input<span class=\"token punctuation\">,</span> option<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> option<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">.</span><span class=\"token function\">toLowerCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>input<span class=\"token punctuation\">.</span><span class=\"token function\">toLowerCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">>=</span> <span class=\"token number\">0</span>}\n  <span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"jack\"</span><span class=\"token operator\">></span>Jack<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"lucy\"</span><span class=\"token operator\">></span>Lucy<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"tom\"</span><span class=\"token operator\">></span>Tom<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Option = _antd.Select.Option;

	  function handleChange(value) {
	    console.log("selected " + value);
	  }

	  return React.createElement(
	    _antd.Select,
	    {
	      showSearch: true,
	      style: {
	        width: 200
	      },
	      placeholder: "Select a person",
	      optionFilterProp: "children",
	      onChange: handleChange,
	      filterOption: function filterOption(input, option) {
	        return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
	      }
	    },
	    React.createElement(
	      Option,
	      {
	        value: "jack"
	      },
	      "Jack"
	    ),
	    React.createElement(
	      Option,
	      {
	        value: "lucy"
	      },
	      "Lucy"
	    ),
	    React.createElement(
	      Option,
	      {
	        value: "tom"
	      },
	      "Tom"
	    )
	  );
	}
	};

/***/ },

/***/ 833:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "三种大小的选择框，当 size 分别为 ",
	        [
	          "code",
	          "large"
	        ],
	        " 和 ",
	        [
	          "code",
	          "small"
	        ],
	        " 时，输入框高度为 ",
	        [
	          "code",
	          "32px"
	        ],
	        " 和 ",
	        [
	          "code",
	          "22px"
	        ],
	        " ，默认高度为 ",
	        [
	          "code",
	          "28px"
	        ]
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The height of the inpub field for the select defaults to 28px. If size is set to large, the height will be 32px, and if set to small, 22px."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "三种大小",
	      "en-US": "Three sizes"
	    },
	    "filename": "components/select/demo/size.md",
	    "id": "components-select-demo-size"
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
	      "highlighted": "import { <span class=\"token keyword\">Select</span> } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">.</span>Option<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>`selected ${value}`<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> size<span class=\"token operator\">=</span><span class=\"token string\">\"large\"</span> defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"lucy\"</span> style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> }} onChange<span class=\"token operator\">=</span>{handleChange}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"jack\"</span><span class=\"token operator\">></span>Jack<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"lucy\"</span><span class=\"token operator\">></span>Lucy<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"disabled\"</span> disabled<span class=\"token operator\">></span>Disabled<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"yiminghe\"</span><span class=\"token operator\">></span>Yiminghe<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"lucy\"</span> style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> }} onChange<span class=\"token operator\">=</span>{handleChange}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"jack\"</span><span class=\"token operator\">></span>Jack<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"lucy\"</span><span class=\"token operator\">></span>Lucy<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"disabled\"</span> disabled<span class=\"token operator\">></span>Disabled<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"yiminghe\"</span><span class=\"token operator\">></span>Yiminghe<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span> defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"lucy\"</span> style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> }} onChange<span class=\"token operator\">=</span>{handleChange}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"jack\"</span><span class=\"token operator\">></span>Jack<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"lucy\"</span><span class=\"token operator\">></span>Lucy<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"disabled\"</span> disabled<span class=\"token operator\">></span>Disabled<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"yiminghe\"</span><span class=\"token operator\">></span>Yiminghe<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Option = _antd.Select.Option;

	  function handleChange(value) {
	    console.log("selected " + value);
	  }

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      _antd.Select,
	      {
	        size: "large",
	        defaultValue: "lucy",
	        style: {
	          width: 200
	        },
	        onChange: handleChange
	      },
	      React.createElement(
	        Option,
	        {
	          value: "jack"
	        },
	        "Jack"
	      ),
	      React.createElement(
	        Option,
	        {
	          value: "lucy"
	        },
	        "Lucy"
	      ),
	      React.createElement(
	        Option,
	        {
	          value: "disabled",
	          disabled: true
	        },
	        "Disabled"
	      ),
	      React.createElement(
	        Option,
	        {
	          value: "yiminghe"
	        },
	        "Yiminghe"
	      )
	    ),
	    React.createElement(
	      _antd.Select,
	      {
	        defaultValue: "lucy",
	        style: {
	          width: 200
	        },
	        onChange: handleChange
	      },
	      React.createElement(
	        Option,
	        {
	          value: "jack"
	        },
	        "Jack"
	      ),
	      React.createElement(
	        Option,
	        {
	          value: "lucy"
	        },
	        "Lucy"
	      ),
	      React.createElement(
	        Option,
	        {
	          value: "disabled",
	          disabled: true
	        },
	        "Disabled"
	      ),
	      React.createElement(
	        Option,
	        {
	          value: "yiminghe"
	        },
	        "Yiminghe"
	      )
	    ),
	    React.createElement(
	      _antd.Select,
	      {
	        size: "small",
	        defaultValue: "lucy",
	        style: {
	          width: 200
	        },
	        onChange: handleChange
	      },
	      React.createElement(
	        Option,
	        {
	          value: "jack"
	        },
	        "Jack"
	      ),
	      React.createElement(
	        Option,
	        {
	          value: "lucy"
	        },
	        "Lucy"
	      ),
	      React.createElement(
	        Option,
	        {
	          value: "disabled",
	          disabled: true
	        },
	        "Disabled"
	      ),
	      React.createElement(
	        Option,
	        {
	          value: "yiminghe"
	        },
	        "Yiminghe"
	      )
	    )
	  );
	},
	  "style": ".code-box-demo .ant-select {\n  margin: 0 8px 10px 0;\n}\n\n#components-select-demo-search-box .code-box-demo .ant-select {\n  margin: 0;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.code-box-demo</span> <span class=\"token class\">.ant-select</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">8</span>px <span class=\"token number\">10</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token id\">#components-select-demo-search-box</span> <span class=\"token class\">.code-box-demo</span> <span class=\"token class\">.ant-select</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 834:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "tags select，随意输入的内容（scroll the menu）"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Select with tags, transform input to tag (scroll the menu)"
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "标签",
	      "en-US": "Tags"
	    },
	    "filename": "components/select/demo/tags.md",
	    "id": "components-select-demo-tags"
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
	      "highlighted": "import { <span class=\"token keyword\">Select</span> } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">.</span>Option<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> children <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> <span class=\"token number\">10</span><span class=\"token comment\" spellcheck=\"true\">; i &lt; 36; i++) {</span>\n  children<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Option key<span class=\"token operator\">=</span>{i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token number\">36</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">+</span> i}<span class=\"token operator\">></span>{i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token number\">36</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">+</span> i}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>`selected ${value}`<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> tags\n    style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span> }}\n    searchPlaceholder<span class=\"token operator\">=</span><span class=\"token string\">\"标签模式\"</span>\n    onChange<span class=\"token operator\">=</span>{handleChange}\n  <span class=\"token operator\">></span>\n    {children}\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Option = _antd.Select.Option;
	  var children = [];

	  for (var i = 10; i < 36; i++) {
	    children.push(React.createElement(
	      Option,
	      {
	        key: i.toString(36) + i
	      },
	      i.toString(36) + i
	    ));
	  }

	  function handleChange(value) {
	    console.log("selected " + value);
	  }

	  return React.createElement(
	    _antd.Select,
	    {
	      tags: true,
	      style: {
	        width: '100%'
	      },
	      searchPlaceholder: "标签模式",
	      onChange: handleChange
	    },
	    children
	  );
	}
	};

/***/ },

/***/ 1059:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'automatic-tokenization': __webpack_require__(824),
	    'basic': __webpack_require__(825),
	    'combobox': __webpack_require__(826),
	    'coordinate': __webpack_require__(827),
	    'label-in-value': __webpack_require__(828),
	    'multiple': __webpack_require__(829),
	    'optgroup': __webpack_require__(830),
	    'search-box': __webpack_require__(831),
	    'search': __webpack_require__(832),
	    'size': __webpack_require__(833),
	    'tags': __webpack_require__(834),
	}

/***/ },

/***/ 1259:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod);
	    global.fetchJsonp = mod.exports;
	  }
	})(this, function (exports, module) {
	  'use strict';

	  var defaultOptions = {
	    timeout: 5000,
	    jsonpCallback: 'callback',
	    jsonpCallbackFunction: null
	  };

	  function generateCallbackFunction() {
	    return 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
	  }

	  // Known issue: Will throw 'Uncaught ReferenceError: callback_*** is not defined'
	  // error if request timeout
	  function clearFunction(functionName) {
	    // IE8 throws an exception when you try to delete a property on window
	    // http://stackoverflow.com/a/1824228/751089
	    try {
	      delete window[functionName];
	    } catch (e) {
	      window[functionName] = undefined;
	    }
	  }

	  function removeScript(scriptId) {
	    var script = document.getElementById(scriptId);
	    document.getElementsByTagName('head')[0].removeChild(script);
	  }

	  function fetchJsonp(_url) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    // to avoid param reassign
	    var url = _url;
	    var timeout = options.timeout || defaultOptions.timeout;
	    var jsonpCallback = options.jsonpCallback || defaultOptions.jsonpCallback;

	    var timeoutId = undefined;

	    return new Promise(function (resolve, reject) {
	      var callbackFunction = options.jsonpCallbackFunction || generateCallbackFunction();
	      var scriptId = jsonpCallback + '_' + callbackFunction;

	      window[callbackFunction] = function (response) {
	        resolve({
	          ok: true,
	          // keep consistent with fetch API
	          json: function json() {
	            return Promise.resolve(response);
	          }
	        });

	        if (timeoutId) clearTimeout(timeoutId);

	        removeScript(scriptId);

	        clearFunction(callbackFunction);
	      };

	      // Check if the user set their own params, and if not add a ? to start a list of params
	      url += url.indexOf('?') === -1 ? '?' : '&';

	      var jsonpScript = document.createElement('script');
	      jsonpScript.setAttribute('src', '' + url + jsonpCallback + '=' + callbackFunction);
	      jsonpScript.id = scriptId;
	      document.getElementsByTagName('head')[0].appendChild(jsonpScript);

	      timeoutId = setTimeout(function () {
	        reject(new Error('JSONP request to ' + _url + ' timed out'));

	        clearFunction(callbackFunction);
	        removeScript(scriptId);
	      }, timeout);
	    });
	  }

	  // export as global function
	  /*
	  let local;
	  if (typeof global !== 'undefined') {
	    local = global;
	  } else if (typeof self !== 'undefined') {
	    local = self;
	  } else {
	    try {
	      local = Function('return this')();
	    } catch (e) {
	      throw new Error('polyfill failed because global object is unavailable in this environment');
	    }
	  }
	  local.fetchJsonp = fetchJsonp;
	  */

	  module.exports = fetchJsonp;
	});

/***/ }

});