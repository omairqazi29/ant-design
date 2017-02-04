webpackJsonp([66,211],{

/***/ 1011:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "article",
	    [
	      "p",
	      "Layout and Navigation is the backbone of productions, it is one of the most important design pattern of a page,\nand it is also a base when you create a page, it will establish a interactive and visual style for a production."
	    ],
	    [
	      "p",
	      "The Layout and Navigation design specification for Ant Design are as follows:"
	    ],
	    [
	      "h3",
	      "The specification of size"
	    ],
	    [
	      "p",
	      "The first level of the navigation is placed near by a logo inclined left, and the secondary menu is placed inclined right. "
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          "Top Navigation (almost systems): the height of the first level navigation ",
	          [
	            "code",
	            "64px"
	          ],
	          ", the second level of navigation ",
	          [
	            "code",
	            "48px"
	          ],
	          "。"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "Top Navigation(contents page): the height of the first level navigation ",
	          [
	            "code",
	            "80px"
	          ],
	          ",the second level of navigation ",
	          [
	            "code",
	            "56px"
	          ],
	          "。"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "Calculation formula of a top navigation:",
	          [
	            "code",
	            "48+8n"
	          ],
	          "."
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "Calculation formula a aside navigation:",
	          [
	            "code",
	            "200+8n"
	          ],
	          "."
	        ]
	      ]
	    ],
	    [
	      "h3",
	      "The principle of interaction"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          "The first level navigation and the last level navigation should be distincted by visualization;"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "The current item should have the highest priority of visualization;"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "When the current navigation item is collapsed, the stlye of the current navigation item will be applied to the parent level of it;"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "The left side navigation bar support for both the according and the expanding style, you can choose the one of it case by case."
	        ]
	      ]
	    ],
	    [
	      "h3",
	      "The principle of visualization"
	    ],
	    [
	      "p",
	      " Style of a navigation should conform to the level of it."
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          [
	            "strong",
	            "Emphasis by colorblock"
	          ]
	        ],
	        [
	          "p",
	          "When background color is a deep color, you can use this pattern for the parent level navigation item of current page."
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "strong",
	            "The highlight match stick"
	          ]
	        ],
	        [
	          "p",
	          "When background color is a light color, you can use this pattern for the current page navigation item, we recommed to use it for the last item of the navigation path."
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "strong",
	            "Hightlighted font"
	          ]
	        ],
	        [
	          "p",
	          "From the visualization aspect, hightlighted font is stronger than colorblock, this pattern is often used for the parent level of the current item."
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "strong",
	            "Enlarge the size of the font"
	          ]
	        ],
	        [
	          "p",
	          [
	            "code",
	            "12px"
	          ],
	          "、",
	          [
	            "code",
	            "14px"
	          ],
	          " is a standard font size of navigations，14 is used for the first and the second level of the navigation. You can choose a approprigate font size in terms of the level of your navigation."
	        ]
	      ]
	    ],
	    [
	      "p",
	      "In almost middle-back systems,  Ant Design uses two general layouts of top navigation and aside navition, we collect some basic layouts of middle-back systems are designed by Ant Design as follows:"
	    ]
	  ],
	  "meta": {
	    "template": "component",
	    "category": "Design Fundamental",
	    "order": 4,
	    "cols": 1,
	    "title": "Layout",
	    "filename": "docs/spec/layout/index.en-US.md"
	  },
	  "toc": [
	    "ul"
	  ]
	};

/***/ }

});