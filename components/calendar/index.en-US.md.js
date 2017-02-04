webpackJsonp([192,211],{

/***/ 615:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "section",
	    [
	      "p",
	      "Container for displaying data in calendar form."
	    ],
	    [
	      "h2",
	      "When To Use"
	    ],
	    [
	      "p",
	      "When data is in the form of date, such as schedule, timetable, prices calendar, Lunar calendar. This component also supports Year/Month switch."
	    ]
	  ],
	  "meta": {
	    "category": "Components",
	    "type": "Data Display",
	    "cols": 1,
	    "title": "Calendar",
	    "filename": "components/calendar/index.en-US.md"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#When-To-Use"
	        },
	        "When To Use"
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
	            "Property"
	          ],
	          [
	            "th",
	            "Description"
	          ],
	          [
	            "th",
	            "Type"
	          ],
	          [
	            "th",
	            "Default"
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
	            "set date"
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
	            "current date"
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
	            "set default date"
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
	            "default date"
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
	            "can be set to month or year"
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
	            "to set whether full-screen display"
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
	            "to set the way of renderer the date cell"
	          ],
	          [
	            "td",
	            "function(date: moment): ReactNode"
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
	            "monthCellRender"
	          ],
	          [
	            "td",
	            "to set the way of renderer the month cell"
	          ],
	          [
	            "td",
	            "function(date: moment): ReactNode"
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
	            "locale"
	          ],
	          [
	            "td",
	            "set locale"
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
	              "default"
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
	            "the callback when panel change"
	          ],
	          [
	            "td",
	            "function(date: moment, mode: string)"
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