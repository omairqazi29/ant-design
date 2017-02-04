webpackJsonp([177,211],{

/***/ 826:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "section",
	    [
	      "p",
	      "向下弹出的列表。"
	    ],
	    [
	      "h2",
	      "何时使用"
	    ],
	    [
	      "p",
	      "当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。"
	    ]
	  ],
	  "meta": {
	    "category": "Components",
	    "subtitle": "下拉菜单",
	    "type": "Navigation",
	    "title": "Dropdown",
	    "filename": "components/dropdown/index.zh-CN.md"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#何时使用"
	        },
	        "何时使用"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#API"
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
	      "属性如下"
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
	            "trigger"
	          ],
	          [
	            "td",
	            "触发下拉的行为"
	          ],
	          [
	            "td",
	            "Array<'click'",
	            "|",
	            "'hover'>"
	          ],
	          [
	            "td",
	            "['hover']"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "overlay"
	          ],
	          [
	            "td",
	            "菜单"
	          ],
	          [
	            "td",
	            [
	              "a",
	              {
	                "title": null,
	                "href": "/components/menu"
	              },
	              "Menu"
	            ]
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
	            "getPopupContainer"
	          ],
	          [
	            "td",
	            "菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。",
	            [
	              "a",
	              {
	                "title": null,
	                "href": "http://codepen.io/anon/pen/xVBOVQ?editors=001"
	              },
	              "示例"
	            ]
	          ],
	          [
	            "td",
	            "Function(triggerNode)"
	          ],
	          [
	            "td",
	            "() => document.body"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "visible"
	          ],
	          [
	            "td",
	            "菜单是否显示"
	          ],
	          [
	            "td",
	            "boolean"
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
	            "onVisibleChange"
	          ],
	          [
	            "td",
	            "菜单显示状态改变时调用，参数为 visible"
	          ],
	          [
	            "td",
	            "Function"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ]
	      ]
	    ],
	    [
	      "p",
	      "菜单可由 ",
	      [
	        "code",
	        "antd.Menu"
	      ],
	      " 取得，可设置 ",
	      [
	        "code",
	        "onSelect"
	      ],
	      " 回调，菜单还包括菜单项 ",
	      [
	        "code",
	        "antd.Menu.Item"
	      ],
	      "，分割线 ",
	      [
	        "code",
	        "antd.Menu.Divider"
	      ],
	      "。"
	    ],
	    [
	      "blockquote",
	      [
	        "p",
	        "注意： Menu.Item 必须设置唯一的 key 属性。"
	      ]
	    ],
	    [
	      "h3",
	      "Dropdown.Button"
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
	            "按钮类型，和 ",
	            [
	              "a",
	              {
	                "title": null,
	                "href": "/components/button/"
	              },
	              "Button"
	            ],
	            " 一致"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "'default'"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onClick"
	          ],
	          [
	            "td",
	            "点击左侧按钮的回调，和 ",
	            [
	              "a",
	              {
	                "title": null,
	                "href": "/components/button/"
	              },
	              "Button"
	            ],
	            " 一致"
	          ],
	          [
	            "td",
	            "Function"
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
	            "trigger"
	          ],
	          [
	            "td",
	            "触发下拉的行为"
	          ],
	          [
	            "td",
	            "Array<'click'",
	            "|",
	            "'hover'>"
	          ],
	          [
	            "td",
	            "['hover']"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "overlay"
	          ],
	          [
	            "td",
	            "菜单"
	          ],
	          [
	            "td",
	            [
	              "a",
	              {
	                "title": null,
	                "href": "/components/menu/"
	              },
	              "Menu"
	            ]
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
	            "visible"
	          ],
	          [
	            "td",
	            "菜单是否显示"
	          ],
	          [
	            "td",
	            "boolean"
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
	            "onVisibleChange"
	          ],
	          [
	            "td",
	            "菜单显示状态改变时调用，参数为 visible"
	          ],
	          [
	            "td",
	            "Function"
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

/***/ }

});