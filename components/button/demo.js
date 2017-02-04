webpackJsonp([12,211],{

/***/ 601:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。"
	      ],
	      [
	        "blockquote",
	        [
	          "p",
	          [
	            "code",
	            "danger"
	          ],
	          " 在 ",
	          [
	            "code",
	            "antd@2.7"
	          ],
	          " 后支持。"
	        ]
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "There are ",
	        [
	          "code",
	          "primary"
	        ],
	        " button, ",
	        [
	          "code",
	          "default"
	        ],
	        " button, ",
	        [
	          "code",
	          "dashed"
	        ],
	        " button and ",
	        [
	          "code",
	          "danger"
	        ],
	        " button in antd."
	      ],
	      [
	        "blockquote",
	        [
	          "p",
	          [
	            "code",
	            "danger"
	          ],
	          " is supported after ",
	          [
	            "code",
	            "antd@2.7"
	          ],
	          "."
	        ]
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "按钮类型",
	      "en-US": "Type"
	    },
	    "filename": "components/button/demo/basic.md",
	    "id": "components-button-demo-basic"
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
	      "highlighted": "import { Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span><span class=\"token operator\">></span>Primary<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span><span class=\"token keyword\">Default</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"dashed\"</span><span class=\"token operator\">></span>Dashed<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"danger\"</span><span class=\"token operator\">></span>Danger<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      _antd.Button,
	      {
	        type: "primary"
	      },
	      "Primary"
	    ),
	    React.createElement(
	      _antd.Button,
	      null,
	      "Default"
	    ),
	    React.createElement(
	      _antd.Button,
	      {
	        type: "dashed"
	      },
	      "Dashed"
	    ),
	    React.createElement(
	      _antd.Button,
	      {
	        type: "danger"
	      },
	      "Danger"
	    )
	  );
	}
	};

/***/ },

/***/ 602:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "可以将多个 ",
	        [
	          "code",
	          "Button"
	        ],
	        " 放入 ",
	        [
	          "code",
	          "Button.Group"
	        ],
	        " 的容器中。"
	      ],
	      [
	        "p",
	        "通过设置 ",
	        [
	          "code",
	          "size"
	        ],
	        " 为 ",
	        [
	          "code",
	          "large"
	        ],
	        " ",
	        [
	          "code",
	          "small"
	        ],
	        " 分别把按钮组合设为大、小尺寸。若不设置 ",
	        [
	          "code",
	          "size"
	        ],
	        "，则尺寸为中。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Buttons can be grouped by placing multiple ",
	        [
	          "code",
	          "Button"
	        ],
	        " components into a ",
	        [
	          "code",
	          "Button.Group"
	        ],
	        "."
	      ],
	      [
	        "p",
	        "The ",
	        [
	          "code",
	          "size"
	        ],
	        " can be set to ",
	        [
	          "code",
	          "large"
	        ],
	        ", ",
	        [
	          "code",
	          "small"
	        ],
	        " or left unset resulting in a default size."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "按钮组合",
	      "en-US": "Button Group"
	    },
	    "filename": "components/button/demo/button-group.md",
	    "id": "components-button-demo-button-group"
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
	      "highlighted": "import { Button<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> ButtonGroup <span class=\"token operator\">=</span> Button<span class=\"token punctuation\">.</span>Group<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>h4<span class=\"token operator\">></span>Basic<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h4<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>ButtonGroup<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>Cancel<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span><span class=\"token operator\">></span>OK<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>ButtonGroup<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>ButtonGroup<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button disabled<span class=\"token operator\">></span>L<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button disabled<span class=\"token operator\">></span>M<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button disabled<span class=\"token operator\">></span>R<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>ButtonGroup<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>ButtonGroup<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span><span class=\"token operator\">></span>L<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>M<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"ghost\"</span><span class=\"token operator\">></span>M<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"dashed\"</span><span class=\"token operator\">></span>R<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>ButtonGroup<span class=\"token operator\">></span>\n\n    <span class=\"token operator\">&lt;</span>h4<span class=\"token operator\">></span><span class=\"token keyword\">With</span> Icon<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h4<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>ButtonGroup<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"left\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>Go back\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span><span class=\"token operator\">></span>\n        Go forward<span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"right\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>ButtonGroup<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>ButtonGroup<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> icon<span class=\"token operator\">=</span><span class=\"token string\">\"cloud\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> icon<span class=\"token operator\">=</span><span class=\"token string\">\"cloud-download\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>ButtonGroup<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var ButtonGroup = _antd.Button.Group;
	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      "h4",
	      null,
	      "Basic"
	    ),
	    React.createElement(
	      ButtonGroup,
	      null,
	      React.createElement(
	        _antd.Button,
	        null,
	        "Cancel"
	      ),
	      React.createElement(
	        _antd.Button,
	        {
	          type: "primary"
	        },
	        "OK"
	      )
	    ),
	    React.createElement(
	      ButtonGroup,
	      null,
	      React.createElement(
	        _antd.Button,
	        {
	          disabled: true
	        },
	        "L"
	      ),
	      React.createElement(
	        _antd.Button,
	        {
	          disabled: true
	        },
	        "M"
	      ),
	      React.createElement(
	        _antd.Button,
	        {
	          disabled: true
	        },
	        "R"
	      )
	    ),
	    React.createElement(
	      ButtonGroup,
	      null,
	      React.createElement(
	        _antd.Button,
	        {
	          type: "primary"
	        },
	        "L"
	      ),
	      React.createElement(
	        _antd.Button,
	        null,
	        "M"
	      ),
	      React.createElement(
	        _antd.Button,
	        {
	          type: "ghost"
	        },
	        "M"
	      ),
	      React.createElement(
	        _antd.Button,
	        {
	          type: "dashed"
	        },
	        "R"
	      )
	    ),
	    React.createElement(
	      "h4",
	      null,
	      "With Icon"
	    ),
	    React.createElement(
	      ButtonGroup,
	      null,
	      React.createElement(
	        _antd.Button,
	        {
	          type: "primary"
	        },
	        React.createElement(_antd.Icon, {
	          type: "left"
	        }),
	        "Go back"
	      ),
	      React.createElement(
	        _antd.Button,
	        {
	          type: "primary"
	        },
	        "Go forward",
	        React.createElement(_antd.Icon, {
	          type: "right"
	        })
	      )
	    ),
	    React.createElement(
	      ButtonGroup,
	      null,
	      React.createElement(_antd.Button, {
	        type: "primary",
	        icon: "cloud"
	      }),
	      React.createElement(_antd.Button, {
	        type: "primary",
	        icon: "cloud-download"
	      })
	    )
	  );
	},
	  "style": "\n#components-button-demo-button-group h4 {\n  margin: 16px 0;\n  font-size: 14px;\n  line-height: 1;\n  font-weight: normal;\n}\n#components-button-demo-button-group h4:first-child {\n  margin-top: 0;\n}\n#components-button-demo-button-group .ant-btn-group {\n  margin-right: 8px;\n}\n"
	};

/***/ },

/***/ 603:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "添加 ",
	        [
	          "code",
	          "disabled"
	        ],
	        " 属性即可让按钮处于不可用状态，同时按钮样式也会改变。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "To mark a button as disabled, add the ",
	        [
	          "code",
	          "disabled"
	        ],
	        " property to the ",
	        [
	          "code",
	          "Button"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "不可用状态",
	      "en-US": "Disabled"
	    },
	    "filename": "components/button/demo/disabled.md",
	    "id": "components-button-demo-disabled"
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
	      "highlighted": "import { Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span><span class=\"token operator\">></span>Primary<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> disabled<span class=\"token operator\">></span><span class=\"token function\">Primary</span><span class=\"token punctuation\">(</span>disabled<span class=\"token punctuation\">)</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span><span class=\"token keyword\">Default</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button disabled<span class=\"token operator\">></span><span class=\"token function\">Default</span><span class=\"token punctuation\">(</span>disabled<span class=\"token punctuation\">)</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"ghost\"</span><span class=\"token operator\">></span>Ghost<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"ghost\"</span> disabled<span class=\"token operator\">></span><span class=\"token function\">Ghost</span><span class=\"token punctuation\">(</span>disabled<span class=\"token punctuation\">)</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"dashed\"</span><span class=\"token operator\">></span>Dashed<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"dashed\"</span> disabled<span class=\"token operator\">></span><span class=\"token function\">Dashed</span><span class=\"token punctuation\">(</span>disabled<span class=\"token punctuation\">)</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      _antd.Button,
	      {
	        type: "primary"
	      },
	      "Primary"
	    ),
	    React.createElement(
	      _antd.Button,
	      {
	        type: "primary",
	        disabled: true
	      },
	      "Primary(disabled)"
	    ),
	    React.createElement("br", null),
	    React.createElement(
	      _antd.Button,
	      null,
	      "Default"
	    ),
	    React.createElement(
	      _antd.Button,
	      {
	        disabled: true
	      },
	      "Default(disabled)"
	    ),
	    React.createElement("br", null),
	    React.createElement(
	      _antd.Button,
	      {
	        type: "ghost"
	      },
	      "Ghost"
	    ),
	    React.createElement(
	      _antd.Button,
	      {
	        type: "ghost",
	        disabled: true
	      },
	      "Ghost(disabled)"
	    ),
	    React.createElement("br", null),
	    React.createElement(
	      _antd.Button,
	      {
	        type: "dashed"
	      },
	      "Dashed"
	    ),
	    React.createElement(
	      _antd.Button,
	      {
	        type: "dashed",
	        disabled: true
	      },
	      "Dashed(disabled)"
	    )
	  );
	}
	};

/***/ },

/***/ 604:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        [
	          "code",
	          "ghost"
	        ],
	        " property will make button's background transparent, it is common used in colored background."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 8,
	    "title": {
	      "zh-CN": "幽灵按钮",
	      "en-US": "Ghost Button"
	    },
	    "filename": "components/button/demo/ghost.md",
	    "id": "components-button-demo-ghost"
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
	      "highlighted": "import { Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ background<span class=\"token punctuation\">:</span> <span class=\"token string\">'rgb(190, 200, 200)'</span><span class=\"token punctuation\">,</span> padding<span class=\"token punctuation\">:</span> <span class=\"token string\">'26px 16px 16px'</span> }}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> ghost<span class=\"token operator\">></span>Primary Ghost<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button ghost<span class=\"token operator\">></span><span class=\"token keyword\">Default</span> Ghost<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"dashed\"</span> ghost<span class=\"token operator\">></span>Dashed Ghost<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    {
	      style: {
	        background: 'rgb(190, 200, 200)',
	        padding: '26px 16px 16px'
	      }
	    },
	    React.createElement(
	      _antd.Button,
	      {
	        type: "primary",
	        ghost: true
	      },
	      "Primary Ghost"
	    ),
	    React.createElement(
	      _antd.Button,
	      {
	        ghost: true
	      },
	      "Default Ghost"
	    ),
	    React.createElement(
	      _antd.Button,
	      {
	        type: "dashed",
	        ghost: true
	      },
	      "Dashed Ghost"
	    )
	  );
	}
	};

/***/ },

/***/ 605:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "当需要在 ",
	        [
	          "code",
	          "Button"
	        ],
	        " 内嵌入 ",
	        [
	          "code",
	          "Icon"
	        ],
	        " 时，可以设置 ",
	        [
	          "code",
	          "icon"
	        ],
	        " 属性，或者直接在 ",
	        [
	          "code",
	          "Button"
	        ],
	        " 内使用 ",
	        [
	          "code",
	          "Icon"
	        ],
	        " 组件。"
	      ],
	      [
	        "p",
	        "如果想控制 ",
	        [
	          "code",
	          "Icon"
	        ],
	        " 具体的位置，只能直接使用 ",
	        [
	          "code",
	          "Icon"
	        ],
	        " 组件，而非 ",
	        [
	          "code",
	          "icon"
	        ],
	        " 属性。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        [
	          "code",
	          "Button"
	        ],
	        " components can contain an ",
	        [
	          "code",
	          "Icon"
	        ],
	        ". This is done by setting the ",
	        [
	          "code",
	          "icon"
	        ],
	        " property or placing an ",
	        [
	          "code",
	          "Icon"
	        ],
	        " component within the ",
	        [
	          "code",
	          "Button"
	        ]
	      ],
	      [
	        "p",
	        "If you want specific control over the positioning and placement of the ",
	        [
	          "code",
	          "Icon"
	        ],
	        ", then that should be done by placing the ",
	        [
	          "code",
	          "Icon"
	        ],
	        " component within the ",
	        [
	          "code",
	          "Button"
	        ],
	        " rather than using the ",
	        [
	          "code",
	          "icon"
	        ],
	        " property."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "图标按钮",
	      "en-US": "Icon"
	    },
	    "filename": "components/button/demo/icon.md",
	    "id": "components-button-demo-icon"
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
	      "highlighted": "import { Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> shape<span class=\"token operator\">=</span><span class=\"token string\">\"circle\"</span> icon<span class=\"token operator\">=</span><span class=\"token string\">\"search\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> icon<span class=\"token operator\">=</span><span class=\"token string\">\"search\"</span><span class=\"token operator\">></span>Search<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button shape<span class=\"token operator\">=</span><span class=\"token string\">\"circle\"</span> icon<span class=\"token operator\">=</span><span class=\"token string\">\"search\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button icon<span class=\"token operator\">=</span><span class=\"token string\">\"search\"</span><span class=\"token operator\">></span>Search<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"ghost\"</span> shape<span class=\"token operator\">=</span><span class=\"token string\">\"circle\"</span> icon<span class=\"token operator\">=</span><span class=\"token string\">\"search\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"ghost\"</span> icon<span class=\"token operator\">=</span><span class=\"token string\">\"search\"</span><span class=\"token operator\">></span>Search<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"dashed\"</span> shape<span class=\"token operator\">=</span><span class=\"token string\">\"circle\"</span> icon<span class=\"token operator\">=</span><span class=\"token string\">\"search\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"dashed\"</span> icon<span class=\"token operator\">=</span><span class=\"token string\">\"search\"</span><span class=\"token operator\">></span>Search<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.Button, {
	      type: "primary",
	      shape: "circle",
	      icon: "search"
	    }),
	    React.createElement(
	      _antd.Button,
	      {
	        type: "primary",
	        icon: "search"
	      },
	      "Search"
	    ),
	    React.createElement(_antd.Button, {
	      shape: "circle",
	      icon: "search"
	    }),
	    React.createElement(
	      _antd.Button,
	      {
	        icon: "search"
	      },
	      "Search"
	    ),
	    React.createElement("br", null),
	    React.createElement(_antd.Button, {
	      type: "ghost",
	      shape: "circle",
	      icon: "search"
	    }),
	    React.createElement(
	      _antd.Button,
	      {
	        type: "ghost",
	        icon: "search"
	      },
	      "Search"
	    ),
	    React.createElement(_antd.Button, {
	      type: "dashed",
	      shape: "circle",
	      icon: "search"
	    }),
	    React.createElement(
	      _antd.Button,
	      {
	        type: "dashed",
	        icon: "search"
	      },
	      "Search"
	    )
	  );
	}
	};

/***/ },

/***/ 606:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "添加 ",
	        [
	          "code",
	          "loading"
	        ],
	        " 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "A loading indicator can be added to a button by setting the ",
	        [
	          "code",
	          "loading"
	        ],
	        " property on the ",
	        [
	          "code",
	          "Button"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "加载中状态",
	      "en-US": "Loading"
	    },
	    "filename": "components/button/demo/loading.md",
	    "id": "components-button-demo-loading"
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
	      "highlighted": "import { Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      iconLoading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">enterLoading</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">enterIconLoading</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ iconLoading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> loading<span class=\"token operator\">></span>\n          Loading\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span> loading<span class=\"token operator\">></span>\n          Loading\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> loading<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading} onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>enterLoading}<span class=\"token operator\">></span>\n          Click me!\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> icon<span class=\"token operator\">=</span><span class=\"token string\">\"poweroff\"</span> loading<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>iconLoading} onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>enterIconLoading}<span class=\"token operator\">></span>\n          Click me!\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
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
	        loading: false,
	        iconLoading: false
	      };
	    },
	    enterLoading: function enterLoading() {
	      this.setState({
	        loading: true
	      });
	    },
	    enterIconLoading: function enterIconLoading() {
	      this.setState({
	        iconLoading: true
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          _antd.Button,
	          {
	            type: "primary",
	            loading: true
	          },
	          "Loading"
	        ),
	        React.createElement(
	          _antd.Button,
	          {
	            type: "primary",
	            size: "small",
	            loading: true
	          },
	          "Loading"
	        ),
	        React.createElement("br", null),
	        React.createElement(
	          _antd.Button,
	          {
	            type: "primary",
	            loading: this.state.loading,
	            onClick: this.enterLoading
	          },
	          "Click me!"
	        ),
	        React.createElement(
	          _antd.Button,
	          {
	            type: "primary",
	            icon: "poweroff",
	            loading: this.state.iconLoading,
	            onClick: this.enterIconLoading
	          },
	          "Click me!"
	        )
	      );
	    }
	  });
	  return React.createElement(App, null);
	}
	};

/***/ },

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "按钮组合使用时，推荐使用1个主操作 + n 个次操作，3个以上操作时把更多操作放到 ",
	        [
	          "code",
	          "Dropdown.Button"
	        ],
	        " 中组合使用。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into ",
	        [
	          "code",
	          "Dropdown.Button"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "多个按钮组合",
	      "en-US": "Multiple Buttons"
	    },
	    "filename": "components/button/demo/multiple.md",
	    "id": "components-button-demo-multiple"
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
	      "highlighted": "import { Button<span class=\"token punctuation\">,</span> Menu<span class=\"token punctuation\">,</span> Dropdown<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">handleMenuClick</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'click'</span><span class=\"token punctuation\">,</span> e<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\n<span class=\"token keyword\">const</span> menu <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Menu onClick<span class=\"token operator\">=</span>{handleMenuClick}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>1st item<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>2nd item<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>3rd item<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span><span class=\"token operator\">></span>primary<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"ghost\"</span><span class=\"token operator\">></span>secondary<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Dropdown overlay<span class=\"token operator\">=</span>{menu}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"ghost\"</span><span class=\"token operator\">></span>\n        more <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"down\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Dropdown<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function handleMenuClick(e) {
	    console.log('click', e);
	  }

	  var menu = React.createElement(
	    _antd.Menu,
	    {
	      onClick: handleMenuClick
	    },
	    React.createElement(
	      _antd.Menu.Item,
	      {
	        key: "1"
	      },
	      "1st item"
	    ),
	    React.createElement(
	      _antd.Menu.Item,
	      {
	        key: "2"
	      },
	      "2nd item"
	    ),
	    React.createElement(
	      _antd.Menu.Item,
	      {
	        key: "3"
	      },
	      "3rd item"
	    )
	  );
	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      _antd.Button,
	      {
	        type: "primary"
	      },
	      "primary"
	    ),
	    React.createElement(
	      _antd.Button,
	      {
	        type: "ghost"
	      },
	      "secondary"
	    ),
	    React.createElement(
	      _antd.Dropdown,
	      {
	        overlay: menu
	      },
	      React.createElement(
	        _antd.Button,
	        {
	          type: "ghost"
	        },
	        "more ",
	        React.createElement(_antd.Icon, {
	          type: "down"
	        })
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "按钮有大、中、小三种尺寸。"
	      ],
	      [
	        "p",
	        "通过设置 ",
	        [
	          "code",
	          "size"
	        ],
	        " 为 ",
	        [
	          "code",
	          "large"
	        ],
	        " ",
	        [
	          "code",
	          "small"
	        ],
	        " 分别把按钮设为大、小尺寸。若不设置 ",
	        [
	          "code",
	          "size"
	        ],
	        "，则尺寸为中。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Ant Design supports a default button size as well as a large and small size."
	      ],
	      [
	        "p",
	        "If a large or small button is desired, set the ",
	        [
	          "code",
	          "size"
	        ],
	        " property to either ",
	        [
	          "code",
	          "large"
	        ],
	        " or ",
	        [
	          "code",
	          "small"
	        ],
	        " respectively. Omit the ",
	        [
	          "code",
	          "size"
	        ],
	        " property for a button with the default size."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "按钮尺寸",
	      "en-US": "Size"
	    },
	    "filename": "components/button/demo/size.md",
	    "id": "components-button-demo-size"
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
	      "highlighted": "import { Button<span class=\"token punctuation\">,</span> Radio<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nclass ButtonSize extends React<span class=\"token punctuation\">.</span>Component {\n  state <span class=\"token operator\">=</span> {\n    size<span class=\"token punctuation\">:</span> <span class=\"token string\">'default'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n  handleSizeChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ size<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> size <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>size<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Radio<span class=\"token punctuation\">.</span>Group value<span class=\"token operator\">=</span>{size} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleSizeChange}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Radio<span class=\"token punctuation\">.</span>Button value<span class=\"token operator\">=</span><span class=\"token string\">\"large\"</span><span class=\"token operator\">></span>Large<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token punctuation\">.</span>Button<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Radio<span class=\"token punctuation\">.</span>Button value<span class=\"token operator\">=</span><span class=\"token string\">\"default\"</span><span class=\"token operator\">></span><span class=\"token keyword\">Default</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token punctuation\">.</span>Button<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Radio<span class=\"token punctuation\">.</span>Button value<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span><span class=\"token operator\">></span>Small<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token punctuation\">.</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token punctuation\">.</span>Group<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> shape<span class=\"token operator\">=</span><span class=\"token string\">\"circle\"</span> icon<span class=\"token operator\">=</span><span class=\"token string\">\"download\"</span> size<span class=\"token operator\">=</span>{size} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> icon<span class=\"token operator\">=</span><span class=\"token string\">\"download\"</span> size<span class=\"token operator\">=</span>{size}<span class=\"token operator\">></span>Download<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> size<span class=\"token operator\">=</span>{size}<span class=\"token operator\">></span>Normal<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button<span class=\"token punctuation\">.</span>Group size<span class=\"token operator\">=</span>{size}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"left\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>Backward\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span><span class=\"token operator\">></span>\n            Forward<span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"right\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token punctuation\">.</span>Group<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>ButtonSize <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
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

	  var ButtonSize = function (_React$Component) {
	    _inherits(ButtonSize, _React$Component);

	    function ButtonSize() {
	      var _temp, _this, _ret;

	      _classCallCheck(this, ButtonSize);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	        size: 'default'
	      }, _this.handleSizeChange = function (e) {
	        _this.setState({
	          size: e.target.value
	        });
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    ButtonSize.prototype.render = function render() {
	      var size = this.state.size;
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          _antd.Radio.Group,
	          {
	            value: size,
	            onChange: this.handleSizeChange
	          },
	          React.createElement(
	            _antd.Radio.Button,
	            {
	              value: "large"
	            },
	            "Large"
	          ),
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
	              value: "small"
	            },
	            "Small"
	          )
	        ),
	        React.createElement("br", null),
	        React.createElement("br", null),
	        React.createElement(_antd.Button, {
	          type: "primary",
	          shape: "circle",
	          icon: "download",
	          size: size
	        }),
	        React.createElement(
	          _antd.Button,
	          {
	            type: "primary",
	            icon: "download",
	            size: size
	          },
	          "Download"
	        ),
	        React.createElement(
	          _antd.Button,
	          {
	            type: "primary",
	            size: size
	          },
	          "Normal"
	        ),
	        React.createElement("br", null),
	        React.createElement(
	          _antd.Button.Group,
	          {
	            size: size
	          },
	          React.createElement(
	            _antd.Button,
	            {
	              type: "primary"
	            },
	            React.createElement(_antd.Icon, {
	              type: "left"
	            }),
	            "Backward"
	          ),
	          React.createElement(
	            _antd.Button,
	            {
	              type: "primary"
	            },
	            "Forward",
	            React.createElement(_antd.Icon, {
	              type: "right"
	            })
	          )
	        )
	      );
	    };

	    return ButtonSize;
	  }(React.Component);

	  return React.createElement(ButtonSize, null);
	}
	};

/***/ },

/***/ 1037:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(601),
	    'button-group': __webpack_require__(602),
	    'disabled': __webpack_require__(603),
	    'ghost': __webpack_require__(604),
	    'icon': __webpack_require__(605),
	    'loading': __webpack_require__(606),
	    'multiple': __webpack_require__(607),
	    'size': __webpack_require__(608),
	}

/***/ }

});