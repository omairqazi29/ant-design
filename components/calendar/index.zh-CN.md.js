webpackJsonp([190,210],{

/***/ 767:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "section",
	    [
	      "p",
	      "按照日历形式展示数据的容器。"
	    ],
	    [
	      "h2",
	      "何时使用"
	    ],
	    [
	      "p",
	      "当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。"
	    ]
	  ],
	  "meta": {
	    "category": "Components",
	    "type": "Data Display",
	    "subtitle": "日历",
	    "cols": 1,
	    "title": "Calendar",
	    "filename": "components/calendar/index.zh-CN.md"
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
	      "pre",
	      {
	        "lang": "html",
	        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Calendar</span>\n  <span class=\"token attr-name\">dateCellRender</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span>{dateCellRender}</span>\n  <span class=\"token attr-name\">monthCellRender</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span>{monthCellRender}</span>\n  <span class=\"token attr-name\">onPanelChange</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span>{onPanelChange}</span>\n<span class=\"token punctuation\">/></span></span>"
	      },
	      [
	        "code",
	        "<Calendar\n  dateCellRender={dateCellRender}\n  monthCellRender={monthCellRender}\n  onPanelChange={onPanelChange}\n/>"
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
	            "value"
	          ],
	          [
	            "td",
	            "展示日期"
	          ],
	          [
	            "td",
	            [
	              "a",
	              {
	                "title": null,
	                "href": "http://momentjs.com/"
	              },
	              "moment"
	            ]
	          ],
	          [
	            "td",
	            "当前日期"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "defaultValue"
	          ],
	          [
	            "td",
	            "默认展示的日期"
	          ],
	          [
	            "td",
	            [
	              "a",
	              {
	                "title": null,
	                "href": "http://momentjs.com/"
	              },
	              "moment"
	            ]
	          ],
	          [
	            "td",
	            "默认日期"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "mode"
	          ],
	          [
	            "td",
	            "初始模式，",
	            [
	              "code",
	              "month/year"
	            ]
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "month"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "fullscreen"
	          ],
	          [
	            "td",
	            "是否全屏显示"
	          ],
	          [
	            "td",
	            "boolean"
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
	            "dateCellRender"
	          ],
	          [
	            "td",
	            "自定义渲染日期单元格"
	          ],
	          [
	            "td",
	            "function(date: moment): ReactNode"
	          ],
	          [
	            "td",
	            "无"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "monthCellRender"
	          ],
	          [
	            "td",
	            "自定义渲染月单元格"
	          ],
	          [
	            "td",
	            "function(date: moment): ReactNode"
	          ],
	          [
	            "td",
	            "无"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "locale"
	          ],
	          [
	            "td",
	            "国际化配置"
	          ],
	          [
	            "td",
	            "object"
	          ],
	          [
	            "td",
	            [
	              "a",
	              {
	                "title": null,
	                "href": "https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"
	              },
	              "默认配置"
	            ]
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onPanelChange"
	          ],
	          [
	            "td",
	            "日期面板变化回调"
	          ],
	          [
	            "td",
	            "function(date: moment, mode: string)"
	          ],
	          [
	            "td",
	            "无"
	          ]
	        ]
	      ]
	    ]
	  ]
	};

/***/ }

});