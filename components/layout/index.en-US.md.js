webpackJsonp([165,210],{

/***/ 730:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "section",
	    [
	      "p",
	      "When you are handling the overall layout of a page, this component might be helpfull."
	    ],
	    [
	      "h2",
	      "Overview"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "Layout"
	          ],
	          ": The layout wrapper, in which ",
	          [
	            "code",
	            "Header"
	          ],
	          " ",
	          [
	            "code",
	            "Sider"
	          ],
	          " ",
	          [
	            "code",
	            "Content"
	          ],
	          " ",
	          [
	            "code",
	            "Footer"
	          ],
	          " or ",
	          [
	            "code",
	            "Layout"
	          ],
	          " itself can be nested."
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "Header"
	          ],
	          ": The top layout with default style."
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "Sider"
	          ],
	          ": The sidebar with default style and basic functions."
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "Content"
	          ],
	          ": The content layout with default style."
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "Footer"
	          ],
	          ": The bottom layout with default style."
	        ]
	      ]
	    ],
	    [
	      "blockquote",
	      [
	        "p",
	        "Base on ",
	        [
	          "code",
	          "flex layout"
	        ],
	        ", please pay attention to the ",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "http://caniuse.com/#search=flex"
	          },
	          "compatibility"
	        ],
	        "."
	      ]
	    ]
	  ],
	  "meta": {
	    "category": "Components",
	    "type": "Layout",
	    "cols": 1,
	    "title": "Layout",
	    "filename": "components/layout/index.en-US.md"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#Overview"
	        },
	        "Overview"
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
	        "lang": "jsx",
	        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Layout</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Header</span><span class=\"token punctuation\">></span></span>header<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Header</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Layout</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Sider</span><span class=\"token punctuation\">></span></span>left sidebar<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Sider</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Content</span><span class=\"token punctuation\">></span></span>main content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Content</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Sider</span><span class=\"token punctuation\">></span></span>right sidebar<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Sider</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Layout</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Footer</span><span class=\"token punctuation\">></span></span>footer<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Footer</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Layout</span><span class=\"token punctuation\">></span></span>"
	      },
	      [
	        "code",
	        "<Layout>\n  <Header>header</Header>\n  <Layout>\n    <Sider>left sidebar</Sider>\n    <Content>main content</Content>\n    <Sider>right sidebar</Sider>\n  </Layout>\n  <Footer>footer</Footer>\n</Layout>"
	      ]
	    ],
	    [
	      "h3",
	      "Layout"
	    ],
	    [
	      "p",
	      "The wrapper."
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
	            "style"
	          ],
	          [
	            "td",
	            "to custom the styles"
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
	            "className"
	          ],
	          [
	            "td",
	            "container className"
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
	    ],
	    [
	      "blockquote",
	      [
	        "p",
	        "API of ",
	        [
	          "code",
	          "Layout.Header"
	        ],
	        " ",
	        [
	          "code",
	          "Layout.Footer"
	        ],
	        " ",
	        [
	          "code",
	          "Layout.Content"
	        ],
	        " is the same with ",
	        [
	          "code",
	          "Layout"
	        ],
	        "."
	      ]
	    ],
	    [
	      "h3",
	      "Layout.Sider"
	    ],
	    [
	      "p",
	      "The sidebar."
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
	            "collapsible"
	          ],
	          [
	            "td",
	            "whether can be collapsed"
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
	            "defaultCollapsed"
	          ],
	          [
	            "td",
	            "to set the initial status"
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
	            "collapsed"
	          ],
	          [
	            "td",
	            "to set the current status"
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
	            "onCollapse"
	          ],
	          [
	            "td",
	            "the callback function, can be executed when you switch the sidebar, available only ",
	            [
	              "code",
	              "collapsible: true"
	            ]
	          ],
	          [
	            "td",
	            "(collapsed) => {}"
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
	            "specify the customized trigger, set to null to hide the trigger"
	          ],
	          [
	            "td",
	            "string",
	            "|",
	            "ReactNode"
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
	            "width"
	          ],
	          [
	            "td",
	            "width of the sidebar"
	          ],
	          [
	            "td",
	            "number",
	            "|",
	            "string"
	          ],
	          [
	            "td",
	            "200"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "collapsedWidth"
	          ],
	          [
	            "td",
	            "width of the collapsed sidebar, available only ",
	            [
	              "code",
	              "collapsible: true"
	            ]
	          ],
	          [
	            "td",
	            "number"
	          ],
	          [
	            "td",
	            "64"
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
	            "to custom the styles"
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
	            "className"
	          ],
	          [
	            "td",
	            "container className"
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

/***/ }

});