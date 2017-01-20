webpackJsonp([144,210],{

/***/ 962:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "section",
	    [
	      "p",
	      "展示操作的当前进度。"
	    ],
	    [
	      "h2",
	      "何时使用"
	    ],
	    [
	      "p",
	      "在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          "当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "当需要显示一个操作完成的百分比时。"
	        ]
	      ]
	    ]
	  ],
	  "meta": {
	    "category": "Components",
	    "subtitle": "进度条",
	    "type": "Feedback",
	    "title": "Progress",
	    "filename": "components/progress/index.zh-CN.md"
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
	      "table",
	      [
	        "thead",
	        [
	          "tr",
	          [
	            "th",
	            "属性"
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
	            "类型，可选 ",
	            [
	              "code",
	              "line"
	            ],
	            " ",
	            [
	              "code",
	              "circle"
	            ]
	          ],
	          [
	            "td",
	            "String"
	          ],
	          [
	            "td",
	            "line"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "percent"
	          ],
	          [
	            "td",
	            "百分比"
	          ],
	          [
	            "td",
	            "Number"
	          ],
	          [
	            "td",
	            "0"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "format"
	          ],
	          [
	            "td",
	            "内容的模板函数"
	          ],
	          [
	            "td",
	            "function(percent)"
	          ],
	          [
	            "td",
	            [
	              "code",
	              "percent => percent + '%'"
	            ]
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "status"
	          ],
	          [
	            "td",
	            "状态，可选：",
	            [
	              "code",
	              "success"
	            ],
	            " ",
	            [
	              "code",
	              "exception"
	            ],
	            " ",
	            [
	              "code",
	              "active"
	            ]
	          ],
	          [
	            "td",
	            "String"
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
	            "showInfo"
	          ],
	          [
	            "td",
	            "是否显示进度数值或状态图标"
	          ],
	          [
	            "td",
	            "Boolean"
	          ],
	          [
	            "td",
	            "true"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "strokeWidth ",
	            [
	              "code",
	              "(type=line)"
	            ]
	          ],
	          [
	            "td",
	            "进度条线的宽度，单位 px"
	          ],
	          [
	            "td",
	            "Number"
	          ],
	          [
	            "td",
	            "10"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "strokeWidth ",
	            [
	              "code",
	              "(type=circle)"
	            ]
	          ],
	          [
	            "td",
	            "圆形进度条线的宽度，单位是进度条画布宽度的百分比"
	          ],
	          [
	            "td",
	            "Number"
	          ],
	          [
	            "td",
	            "6"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "width ",
	            [
	              "code",
	              "(type=circle)"
	            ]
	          ],
	          [
	            "td",
	            "圆形进度条画布宽度，单位 px"
	          ],
	          [
	            "td",
	            "Number"
	          ],
	          [
	            "td",
	            "132"
	          ]
	        ]
	      ]
	    ]
	  ]
	};

/***/ }

});