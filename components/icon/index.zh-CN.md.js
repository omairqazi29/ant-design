webpackJsonp([171,211],{

/***/ 706:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": [
	    "article",
	    [
	      "p",
	      "语义化的矢量图形。"
	    ],
	    [
	      "h2",
	      "图标的命名规范"
	    ],
	    [
	      "p",
	      "我们为每个图标赋予了语义化的命名，命名规则如下:"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          "实心和描线图标保持同名，用 ",
	          [
	            "code",
	            "-o"
	          ],
	          " 来区分，比如 ",
	          [
	            "code",
	            "question-circle"
	          ],
	          "(实心) 和 ",
	          [
	            "code",
	            "question-circle-o"
	          ],
	          "(描线)；"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "命名顺序：",
	          [
	            "code",
	            "[icon名]-[形状可选]-[描线与否]-[方向可选]"
	          ],
	          "。"
	        ]
	      ]
	    ],
	    [
	      "h2",
	      "如何使用"
	    ],
	    [
	      "p",
	      "使用 ",
	      [
	        "code",
	        "<Icon />"
	      ],
	      " 标签声明组件，指定图标对应的 type 属性，示例代码如下:"
	    ],
	    [
	      "pre",
	      {
	        "lang": "html",
	        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>link<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>"
	      },
	      [
	        "code",
	        "<Icon type=\"link\" />"
	      ]
	    ],
	    [
	      "p",
	      "最终会渲染为："
	    ],
	    [
	      "pre",
	      {
	        "lang": "html",
	        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>i</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>anticon anticon-${type}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>i</span><span class=\"token punctuation\">></span></span>"
	      },
	      [
	        "code",
	        "<i class=\"anticon anticon-${type}\"></i>"
	      ]
	    ],
	    [
	      "h2",
	      "本地部署"
	    ],
	    [
	      "p",
	      "图标组件使用 ",
	      [
	        "a",
	        {
	          "title": null,
	          "href": "http://iconfont.cn"
	        },
	        "iconfont.cn"
	      ],
	      "，默认公网可访问。如需本地部署，可参考 ",
	      [
	        "a",
	        {
	          "title": null,
	          "href": "https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont"
	        },
	        "示例"
	      ],
	      "。"
	    ],
	    [
	      "h2",
	      "图标列表"
	    ],
	    [
	      "blockquote",
	      [
	        "p",
	        "点击图标复制代码。"
	      ]
	    ],
	    [
	      "h3",
	      "方向性图标"
	    ],
	    function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _IconSet = __webpack_require__(76);

	  var _IconSet2 = _interopRequireDefault(_IconSet);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	  return React.createElement(_IconSet2.default, {
	    className: "icons",
	    catigory: "direction"
	  });
	},
	    [
	      "h3",
	      "提示建议性图标"
	    ],
	    function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _IconSet = __webpack_require__(76);

	  var _IconSet2 = _interopRequireDefault(_IconSet);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	  return React.createElement(_IconSet2.default, {
	    className: "icons",
	    catigory: "suggestion"
	  });
	},
	    [
	      "h3",
	      "网站通用图标"
	    ],
	    function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _IconSet = __webpack_require__(76);

	  var _IconSet2 = _interopRequireDefault(_IconSet);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	  return React.createElement(_IconSet2.default, {
	    className: "icons",
	    catigory: "other"
	  });
	},
	    [
	      "h2",
	      "Props"
	    ],
	    [
	      "table",
	      [
	        "thead",
	        [
	          "tr",
	          [
	            "th",
	            "参数"
	          ],
	          [
	            "th",
	            "说明"
	          ],
	          [
	            "th",
	            "类型"
	          ],
	          [
	            "th",
	            "默认值"
	          ]
	        ]
	      ],
	      [
	        "tbody",
	        [
	          "tr",
	          [
	            "td",
	            "type"
	          ],
	          [
	            "td",
	            "图标类型"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "spin"
	          ],
	          [
	            "td",
	            "是否有旋转动画"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "false"
	          ]
	        ]
	      ]
	    ],
	    [
	      "style",
	      "\n.markdown .icons {\n  width: 100%;\n}\nul.anticons-list {\n  margin: 40px 0;\n  list-style: none;\n  overflow: hidden;\n}\nul.anticons-list li {\n  float: left;\n  width: 16.66%;\n  text-align: center;\n  list-style: none;\n  cursor: pointer;\n  height: 100px;\n  color: #555;\n  transition: all 0.2s ease;\n  position: relative;\n  margin: 3px 0;\n  border-radius: 4px;\n  background-color: #fff;\n  overflow: hidden;\n  padding: 10px 0 0 0;\n}\nul.anticons-list li:hover {\n  background-color: #eaf8fe;\n}\nul.anticons-list li.copied:hover {\n  color: rgba(255,255,255,0.2);\n}\nul.anticons-list li:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  content: \"Copied!\";\n  text-align: center;\n  line-height: 110px;\n  color: #108ee9;\n  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  opacity: 0;\n}\nul.anticons-list li.copied:after {\n  opacity: 1;\n  top: -10px;\n}\n.anticon {\n  font-size: 24px;\n  margin: 12px 0 16px;\n  transition: all .3s;\n}\nul.anticons-list li:hover .anticon {\n  transform: scale(1.4);\n}\n.anticon-class {\n  display: block;\n  text-align: center;\n  transform: scale(0.83);\n  font-family: \"Lucida Console\", Consolas;\n  white-space: nowrap;\n}\n"
	    ]
	  ],
	  "meta": {
	    "category": "Components",
	    "subtitle": "图标",
	    "type": "General",
	    "title": "Icon",
	    "toc": false,
	    "filename": "components/icon/index.zh-CN.md"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#图标的命名规范"
	        },
	        "图标的命名规范"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#如何使用"
	        },
	        "如何使用"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#本地部署"
	        },
	        "本地部署"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#图标列表"
	        },
	        "图标列表"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#Props"
	        },
	        "Props"
	      ]
	    ]
	  ]
	};

/***/ }

});