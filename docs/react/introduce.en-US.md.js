webpackJsonp([92,211],{

/***/ 1130:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "article",
	    {

	    },
	    [
	      "h2",
	      "Features"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          "An enterprise-class UI design language for web applications."
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "A set of high-quality React components out of the box."
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "Written in TypeScript with complete define types."
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "A npm + webpack + ",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://github.com/dvajs/dva"
	            },
	            "dva"
	          ],
	          " front-end development workflow."
	        ]
	      ]
	    ],
	    [
	      "h2",
	      "Compatibility"
	    ],
	    [
	      "p",
	      "Modern browsers and IE9+."
	    ],
	    [
	      "blockquote",
	      [
	        "p",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "https://github.com/xcatliu/react-ie8"
	          },
	          "IE8 issues"
	        ]
	      ]
	    ],
	    [
	      "h2",
	      "Version"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          "Stable: ",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://www.npmjs.org/package/antd"
	            },
	            [
	              "img",
	              {
	                "title": null,
	                "src": "https://img.shields.io/npm/v/antd.svg?style=flat-square",
	                "alt": "npm package"
	              }
	            ]
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "Beta: ",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://www.npmjs.org/package/antd"
	            },
	            [
	              "img",
	              {
	                "title": null,
	                "src": "https://cnpmjs.org/badge/v/antd.svg?&tag=beta&subject=npm",
	                "alt": null
	              }
	            ]
	          ]
	        ]
	      ]
	    ],
	    [
	      "p",
	      "You can subscribe to this feed for new version notification: ",
	      [
	        "a",
	        {
	          "title": null,
	          "href": "https://github.com/ant-design/ant-design/releases.atom"
	        },
	        "https://github.com/ant-design/ant-design/releases.atom"
	      ]
	    ],
	    [
	      "h2",
	      "Installation"
	    ],
	    [
	      "h3",
	      "Using npm to install"
	    ],
	    [
	      "p",
	      [
	        "strong",
	        "We recommend using npm to install"
	      ],
	      "，it not only makes development easier，but you can also take advantage of the whole ecosystem."
	    ],
	    [
	      "p",
	      "If using npm to install, you could use ",
	      [
	        "code",
	        "import"
	      ],
	      " or ",
	      [
	        "code",
	        "require"
	      ],
	      "."
	    ],
	    [
	      "p",
	      "Stable version："
	    ],
	    [
	      "pre",
	      {
	        "lang": "bash",
	        "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> antd --save"
	      },
	      [
	        "code",
	        "$ npm install antd --save"
	      ]
	    ],
	    [
	      "p",
	      "Beta version："
	    ],
	    [
	      "pre",
	      {
	        "lang": "bash",
	        "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> antd@beta --save"
	      },
	      [
	        "code",
	        "$ npm install antd@beta --save"
	      ]
	    ],
	    [
	      "h3",
	      "Import in Browser"
	    ],
	    [
	      "p",
	      [
	        "a",
	        {
	          "title": null,
	          "href": "https://cdnjs.com/libraries/antd"
	        },
	        [
	          "img",
	          {
	            "title": null,
	            "src": "https://img.shields.io/cdnjs/v/antd.svg?style=flat-square",
	            "alt": "CDNJS"
	          }
	        ]
	      ]
	    ],
	    [
	      "p",
	      "We provide ",
	      [
	        "code",
	        "antd.js"
	      ],
	      " ",
	      [
	        "code",
	        "antd.css"
	      ],
	      " and ",
	      [
	        "code",
	        "antd.min.js"
	      ],
	      " ",
	      [
	        "code",
	        "antd.min.css"
	      ],
	      " under ",
	      [
	        "code",
	        "antd/dist"
	      ],
	      " in antd's npm package, in order to import all the components of antd directly. Also, you can use ",
	      [
	        "a",
	        {
	          "title": null,
	          "href": "https://unpkg.com/"
	        },
	        "unpkg"
	      ],
	      "."
	    ],
	    [
	      "blockquote",
	      [
	        "p",
	        "It's not recommended to use the already built files, as you cannot get bugfixes from the dependencies of antd."
	      ]
	    ],
	    [
	      "h4",
	      "stable"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://unpkg.com/antd/dist/antd.js"
	            },
	            "https://unpkg.com/antd/dist/antd.js"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://unpkg.com/antd/dist/antd.css"
	            },
	            "https://unpkg.com/antd/dist/antd.css"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://unpkg.com/antd/dist/antd.min.js"
	            },
	            "https://unpkg.com/antd/dist/antd.min.js"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://unpkg.com/antd/dist/antd.min.css"
	            },
	            "https://unpkg.com/antd/dist/antd.min.css"
	          ]
	        ]
	      ]
	    ],
	    [
	      "h4",
	      "beta"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://unpkg.com/antd@beta/dist/antd.js"
	            },
	            "https://unpkg.com/antd@beta/dist/antd.js"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://unpkg.com/antd@beta/dist/antd.css"
	            },
	            "https://unpkg.com/antd@beta/dist/antd.css"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://unpkg.com/antd@beta/dist/antd.min.js"
	            },
	            "https://unpkg.com/antd@beta/dist/antd.min.js"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://unpkg.com/antd@beta/dist/antd.min.css"
	            },
	            "https://unpkg.com/antd@beta/dist/antd.min.css"
	          ]
	        ]
	      ]
	    ],
	    [
	      "blockquote",
	      [
	        "p",
	        "Here is an ",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "https://github.com/ant-design/antd-init/tree/master/examples/build-antd-standalone"
	          },
	          "example"
	        ],
	        " of how to build your own antd.js if you are using antd@<1.0.0."
	      ]
	    ],
	    [
	      "h2",
	      "Usage"
	    ],
	    [
	      "h3",
	      "Use prebuilt bundle"
	    ],
	    [
	      "pre",
	      {
	        "lang": "jsx",
	        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> DatePicker <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	      },
	      [
	        "code",
	        "import { DatePicker } from 'antd';\nReactDOM.render(<DatePicker />, mountNode);"
	      ]
	    ],
	    [
	      "p",
	      "And import style manually:"
	    ],
	    [
	      "pre",
	      {
	        "lang": "jsx",
	        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token string\">'antd/dist/antd.css'</span><span class=\"token punctuation\">;</span>  <span class=\"token comment\" spellcheck=\"true\">// or 'antd/dist/antd.less'</span>"
	      },
	      [
	        "code",
	        "import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'"
	      ]
	    ],
	    [
	      "h3",
	      "Use modularized antd"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          "Use ",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://github.com/ant-design/babel-plugin-import"
	            },
	            "babel-plugin-import"
	          ],
	          " (Recommended)"
	        ],
	        [
	          "pre",
	          {
	            "lang": "js",
	            "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// .babelrc</span>\n<span class=\"token punctuation\">{</span>\n  <span class=\"token string\">\"plugins\"</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">[</span><span class=\"token string\">\"import\"</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> libraryName<span class=\"token punctuation\">:</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">,</span> style<span class=\"token punctuation\">:</span> <span class=\"token string\">\"css\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span>"
	          },
	          [
	            "code",
	            "// .babelrc\n{\n  \"plugins\": [[\"import\", { libraryName: \"antd\", style: \"css\" }]]\n}"
	          ]
	        ],
	        [
	          "p",
	          " Then you can import components from antd directly."
	        ],
	        [
	          "pre",
	          {
	            "lang": "jsx",
	            "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// import js and css modularly, parsed by babel-plugin-import</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> DatePicker <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>"
	          },
	          [
	            "code",
	            "// import js and css modularly, parsed by babel-plugin-import\nimport { DatePicker } from 'antd';"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "Manually import"
	        ],
	        [
	          "pre",
	          {
	            "lang": "jsx",
	            "highlighted": "<span class=\"token keyword\">import</span> DatePicker <span class=\"token keyword\">from</span> <span class=\"token string\">'antd/lib/date-picker'</span><span class=\"token punctuation\">;</span>  <span class=\"token comment\" spellcheck=\"true\">// just for js</span>\n<span class=\"token keyword\">import</span> <span class=\"token string\">'antd/lib/date-picker/style/css'</span><span class=\"token punctuation\">;</span>  <span class=\"token comment\" spellcheck=\"true\">// with style</span>"
	          },
	          [
	            "code",
	            "import DatePicker from 'antd/lib/date-picker';  // just for js\nimport 'antd/lib/date-picker/style/css';  // with style"
	          ]
	        ]
	      ]
	    ],
	    [
	      "h2",
	      "Useful Links"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "http://ant.design/"
	            },
	            "Home page"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "/docs/react/introduce"
	            },
	            "UI library"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "/changelog"
	            },
	            "Change Log"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://github.com/dvajs/dva-cli/"
	            },
	            "Scaffold tool"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "http://react-component.github.io/"
	            },
	            "React components"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "http://mobile.ant.design"
	            },
	            "Mobile UI"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://motion.ant.design"
	            },
	            "Motion"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://github.com/ant-design/ant-design/wiki/Development"
	            },
	            "Developer Instruction"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://github.com/ant-design/ant-design/wiki/%E8%BD%AE%E5%80%BC%E8%A7%84%E5%88%99%E5%92%8C%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E6%B5%81%E7%A8%8B"
	            },
	            "Versioning Release Note"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://github.com/ant-design/ant-design/issues/129"
	            },
	            "Boilerplates"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://github.com/ant-design/ant-design/wiki/FAQ"
	            },
	            "FAQ"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "http://codepen.io/benjycui/pen/KgPZrE?editors=001"
	            },
	            "CodePen boilerplate"
	          ],
	          " for bug reports"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://github.com/websemantics/awesome-ant-design"
	            },
	            "Awesome Ant Design"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "/docs/react/customize-theme"
	            },
	            "Customize Theme"
	          ]
	        ]
	      ]
	    ],
	    [
	      "h2",
	      "Who are using antd"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "http://www.antgroup.com/index.htm?locale=en_US"
	            },
	            "Ant Financial"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "http://www.alibaba.com/"
	            },
	            "Alibaba"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "http://www.koubei.com/"
	            },
	            "Koubei"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "http://www.meituan.com"
	            },
	            "Meituan"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "http://www.xiaojukeji.com/"
	            },
	            "Didi"
	          ]
	        ]
	      ]
	    ],
	    [
	      "blockquote",
	      [
	        "p",
	        "If your company or product uses Ant Design, you are welcome to comment in ",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "https://github.com/ant-design/ant-design/issues/477"
	          },
	          "this issue"
	        ],
	        ". Thank you!"
	      ]
	    ],
	    [
	      "h2",
	      "Contributing"
	    ],
	    [
	      "p",
	      "Please read our ",
	      [
	        "a",
	        {
	          "title": null,
	          "href": "https://github.com/ant-design/ant-design/blob/master/.github/CONTRIBUTING.md"
	        },
	        "CONTRIBUTING.md"
	      ],
	      " first."
	    ],
	    [
	      "p",
	      "If you have any idea to improve antd, just create a ",
	      [
	        "a",
	        {
	          "title": null,
	          "href": "https://github.com/ant-design/ant-design/pulls"
	        },
	        "Pull Request"
	      ],
	      ". Also, you can also ",
	      [
	        "a",
	        {
	          "title": null,
	          "href": "https://github.com/ant-design/ant-design/issues/new"
	        },
	        "issue"
	      ],
	      " bugs."
	    ],
	    [
	      "blockquote",
	      [
	        "p",
	        "Recommend to read ",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "http://www.catb.org/~esr/faqs/smart-questions.html"
	          },
	          [
	            "em",
	            "How To Ask Questions The Smart Way"
	          ]
	        ],
	        " and ",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "https://github.com/seajs/seajs/issues/545"
	          },
	          "How to Ask a Question in Open Source Community"
	        ],
	        " and ",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "http://www.chiark.greenend.org.uk/~sgtatham/bugs.html"
	          },
	          "How to Report Bugs Effectively"
	        ],
	        ", a smart question will get right answer quickly."
	      ]
	    ],
	    [
	      "h2",
	      "Need Help?"
	    ],
	    [
	      "p",
	      "You can ask questions while you meet problem through the following ways.\nAnd we encourage experienced users to help those who are not familiar with ",
	      [
	        "code",
	        "antd"
	      ],
	      "."
	    ],
	    [
	      "p",
	      "We recommend to tag your questions with ",
	      [
	        "code",
	        "antd"
	      ],
	      " on Stack Overflow."
	    ],
	    [
	      "ol",
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "http://stackoverflow.com/questions/tagged/antd"
	            },
	            "Stack Overflow"
	          ],
	          "(Recommended)"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "a",
	            {
	              "title": null,
	              "href": "https://gitter.im/ant-design/ant-design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"
	            },
	            [
	              "img",
	              {
	                "title": null,
	                "src": "https://badges.gitter.im/Join%20Chat.svg",
	                "alt": "Join the chat at https://gitter.im/ant-design/ant-design"
	              }
	            ]
	          ]
	        ]
	      ]
	    ]
	  ],
	  "meta": {
	    "order": 0,
	    "title": "Ant Design of React",
	    "filename": "docs/react/introduce.en-US.md"
	  },
	  "description": [
	    "section",
	    [
	      "p",
	      "Following Ant Design specification, We develop a React UI library ",
	      [
	        "code",
	        "antd"
	      ],
	      " that contains a set of high quality components and demos for building rich interactive desktop applications."
	    ],
	    [
	      "div",
	      {
	        "class": "pic-plus"
	      },
	      [
	        "img",
	        {
	          "width": "150",
	          "src": "https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg"
	        }
	      ],
	      [
	        "span",
	        "+"
	      ],
	      [
	        "img",
	        {
	          "width": "160",
	          "src": "https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg"
	        }
	      ]
	    ],
	    [
	      "style",
	      "\n.pic-plus > * {\n  display: inline-block!important;\n  vertical-align: middle;\n}\n.pic-plus span {\n  font-size: 30px;\n  color: #aaa;\n  margin: 0 20px;\n}\n"
	    ]
	  ],
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#Features"
	        },
	        "Features"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#Compatibility"
	        },
	        "Compatibility"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#Version"
	        },
	        "Version"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#Installation"
	        },
	        "Installation"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#Usage"
	        },
	        "Usage"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#Useful-Links"
	        },
	        "Useful Links"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#Who-are-using-antd"
	        },
	        "Who are using antd"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#Contributing"
	        },
	        "Contributing"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#Need-Help?"
	        },
	        "Need Help?"
	      ]
	    ]
	  ]
	};

/***/ }

});