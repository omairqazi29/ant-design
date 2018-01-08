webpackJsonp([176],{

/***/ 1686:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    "section",
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
          "（实心） 和 ",
          [
            "code",
            "question-circle-o"
          ],
          "（描线）；"
        ]
      ],
      [
        "li",
        [
          "p",
          "命名顺序：",
          [
            "code",
            "[图标名]-[形状?]-[描线?]-[方向?]"
          ],
          "。"
        ]
      ]
    ],
    [
      "blockquote",
      [
        "p",
        [
          "code",
          "?"
        ],
        " 为可选。"
      ]
    ],
    [
      "p",
      "完整的图标设计规范请访问 ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/spec/icon"
        },
        "图标规范"
      ],
      "。"
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
      "h2",
      "本地部署"
    ],
    [
      "p",
      "图标默认托管在 ",
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
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _IconSet = __webpack_require__(158);

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
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _IconSet = __webpack_require__(158);

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
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _IconSet = __webpack_require__(158);

  var _IconSet2 = _interopRequireDefault(_IconSet);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  return React.createElement(_IconSet2.default, {
    className: "icons",
    catigory: "other"
  });
},
    [
      "h3",
      "品牌和标识"
    ],
    function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _IconSet = __webpack_require__(158);

  var _IconSet2 = _interopRequireDefault(_IconSet);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  return React.createElement(_IconSet2.default, {
    className: "icons",
    catigory: "logo"
  });
}
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
          "href": "#图标的命名规范",
          "title": "图标的命名规范"
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
          "href": "#如何使用",
          "title": "如何使用"
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
          "href": "#本地部署",
          "title": "本地部署"
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
          "href": "#图标列表",
          "title": "图标列表"
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
          "href": "#API",
          "title": "API"
        },
        "API"
      ]
    ]
  ],
  "api": [
    "section",
    [
      "h2",
      "API"
    ],
    [
      "p",
      "由于图标字体本质上还是文字，可以使用 ",
      [
        "code",
        "style"
      ],
      " 和 ",
      [
        "code",
        "className"
      ],
      " 设置图标的大小和颜色。"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>question<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'#08c'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>"
      },
      [
        "code",
        "<Icon type=\"question\" style={{ fontSize: 16, color: '#08c' }} />"
      ]
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
        ],
        [
          "tr",
          [
            "td",
            "style"
          ],
          [
            "td",
            "设置图标的样式，例如 fontSize 和 color"
          ],
          [
            "td",
            "object"
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
        ]
      ]
    ]
  ]
};

/***/ })

});