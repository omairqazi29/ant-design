webpackJsonp([119,210],{

/***/ 1082:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "section",
	    [
	      "p",
	      "A simple text popup tip."
	    ],
	    [
	      "h2",
	      "When To Use"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          "The tip shows while mouse enter, and hides while mouse leave. The ToolTip doesn't support complex text and operation."
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "It can provide an explanation of ",
	          [
	            "code",
	            "button/text/operation"
	          ],
	          " that can cover the usage of the default system ",
	          [
	            "code",
	            "title"
	          ],
	          "."
	        ]
	      ]
	    ]
	  ],
	  "meta": {
	    "category": "Components",
	    "type": "Data Display",
	    "title": "Tooltip",
	    "filename": "components/tooltip/index.en-US.md"
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
	            "title"
	          ],
	          [
	            "td",
	            "prompt text"
	          ],
	          [
	            "td",
	            "string/React.Element"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ]
	      ]
	    ],
	    [
	      "h3",
	      "Common API"
	    ],
	    [
	      "p",
	      "The following APIs are shared by Tooltip, Popconfirm, Popover."
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
	            "placement"
	          ],
	          [
	            "td",
	            "to set the position, which can be one of ",
	            [
	              "code",
	              "top"
	            ],
	            " ",
	            [
	              "code",
	              "left"
	            ],
	            " ",
	            [
	              "code",
	              "right"
	            ],
	            " ",
	            [
	              "code",
	              "bottom"
	            ],
	            " ",
	            [
	              "code",
	              "topLeft"
	            ],
	            " ",
	            [
	              "code",
	              "topRight"
	            ],
	            " ",
	            [
	              "code",
	              "bottomLeft"
	            ],
	            " ",
	            [
	              "code",
	              "bottomRight"
	            ],
	            " ",
	            [
	              "code",
	              "leftTop"
	            ],
	            " ",
	            [
	              "code",
	              "leftBottom"
	            ],
	            " ",
	            [
	              "code",
	              "rightTop"
	            ],
	            " ",
	            [
	              "code",
	              "rightBottom"
	            ]
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "top"
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
	            "to set the container of the tip, while the default is to create a ",
	            [
	              "code",
	              "div"
	            ],
	            " element in ",
	            [
	              "code",
	              "body"
	            ],
	            ". Use ",
	            [
	              "code",
	              "getTooltipContainer"
	            ],
	            " if you are using ",
	            [
	              "code",
	              "antd@<2.5.2"
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
	            "arrowPointAtCenter"
	          ],
	          [
	            "td",
	            "whether arrow pointed at the center of target, supported after ",
	            [
	              "code",
	              "antd@1.11+"
	            ]
	          ],
	          [
	            "td",
	            "Boolean"
	          ],
	          [
	            "td",
	            [
	              "code",
	              "false"
	            ]
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
	            "make the float card visible or not"
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
	            "onVisibleChange"
	          ],
	          [
	            "td",
	            "callback of the visible attribute changed"
	          ],
	          [
	            "td",
	            "(visible) => void"
	          ],
	          [
	            "td",
	            "none"
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
	            "triggering mode: can be hover, focus, or click."
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "hover"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "overlayClassName"
	          ],
	          [
	            "td",
	            "class name of the card"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "none"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "overlayStyle"
	          ],
	          [
	            "td",
	            "style of the card"
	          ],
	          [
	            "td",
	            "object"
	          ],
	          [
	            "td",
	            "none"
	          ]
	        ]
	      ]
	    ]
	  ]
	};

/***/ }

});