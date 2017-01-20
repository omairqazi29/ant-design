webpackJsonp([41,210],{

/***/ 750:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "最简单的用法。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The simplest use"
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic Usage"
	    },
	    "filename": "components/breadcrumb/demo/basic.md",
	    "id": "components-breadcrumb-demo-basic"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Breadcrumb } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Home<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"\"</span><span class=\"token operator\">></span>Application Center<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"\"</span><span class=\"token operator\">></span>Application List<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>An Application<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    _antd.Breadcrumb,
	    null,
	    React.createElement(
	      _antd.Breadcrumb.Item,
	      null,
	      "Home"
	    ),
	    React.createElement(
	      _antd.Breadcrumb.Item,
	      null,
	      React.createElement(
	        "a",
	        {
	          href: ""
	        },
	        "Application Center"
	      )
	    ),
	    React.createElement(
	      _antd.Breadcrumb.Item,
	      null,
	      React.createElement(
	        "a",
	        {
	          href: ""
	        },
	        "Application List"
	      )
	    ),
	    React.createElement(
	      _antd.Breadcrumb.Item,
	      null,
	      "An Application"
	    )
	  );
	}
	};

/***/ },

/***/ 751:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "和 ",
	        [
	          "code",
	          "react-router@2+"
	        ],
	        " 进行结合使用。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Used together with ",
	        [
	          "code",
	          "react-router@2+"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "iframe": true,
	    "title": {
	      "zh-CN": "路由",
	      "en-US": "React Router Integration"
	    },
	    "filename": "components/breadcrumb/demo/router.md",
	    "id": "components-breadcrumb-demo-router"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Router<span class=\"token punctuation\">,</span> Route<span class=\"token punctuation\">,</span> Link<span class=\"token punctuation\">,</span> hashHistory } from <span class=\"token string\">'react-router'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport { Breadcrumb<span class=\"token punctuation\">,</span> Alert } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Apps <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>ul className<span class=\"token operator\">=</span><span class=\"token string\">\"app-list\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>li<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Link <span class=\"token keyword\">to</span><span class=\"token operator\">=</span><span class=\"token string\">\"/apps/1\"</span><span class=\"token operator\">></span>Application1<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Link<span class=\"token operator\">></span>：<span class=\"token operator\">&lt;</span>Link <span class=\"token keyword\">to</span><span class=\"token operator\">=</span><span class=\"token string\">\"/apps/1/detail\"</span><span class=\"token operator\">></span>Detail<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Link<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>li<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>li<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Link <span class=\"token keyword\">to</span><span class=\"token operator\">=</span><span class=\"token string\">\"/apps/2\"</span><span class=\"token operator\">></span>Application2<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Link<span class=\"token operator\">></span>：<span class=\"token operator\">&lt;</span>Link <span class=\"token keyword\">to</span><span class=\"token operator\">=</span><span class=\"token string\">\"/apps/2/detail\"</span><span class=\"token operator\">></span>Detail<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Link<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>li<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>ul<span class=\"token operator\">></span>\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Home <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>{ routes<span class=\"token punctuation\">,</span> params<span class=\"token punctuation\">,</span> children }<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"demo-nav\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Link <span class=\"token keyword\">to</span><span class=\"token operator\">=</span><span class=\"token string\">\"/\"</span><span class=\"token operator\">></span>Home<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Link<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Link <span class=\"token keyword\">to</span><span class=\"token operator\">=</span><span class=\"token string\">\"/apps\"</span><span class=\"token operator\">></span>Application List<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Link<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    {children || <span class=\"token string\">'Home Page'</span>}\n    <span class=\"token operator\">&lt;</span>Alert style<span class=\"token operator\">=</span>{{ margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'16px 0'</span> }} message<span class=\"token operator\">=</span><span class=\"token string\">\"Click the navigation above to switch:\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Breadcrumb routes<span class=\"token operator\">=</span>{routes} params<span class=\"token operator\">=</span>{params} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Router history<span class=\"token operator\">=</span>{hashHistory}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Route name<span class=\"token operator\">=</span><span class=\"token string\">\"home\"</span> breadcrumbName<span class=\"token operator\">=</span><span class=\"token string\">\"Home\"</span> path<span class=\"token operator\">=</span><span class=\"token string\">\"/\"</span> component<span class=\"token operator\">=</span>{Home}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Route name<span class=\"token operator\">=</span><span class=\"token string\">\"apps\"</span> breadcrumbName<span class=\"token operator\">=</span><span class=\"token string\">\"Application List\"</span> path<span class=\"token operator\">=</span><span class=\"token string\">\"apps\"</span> component<span class=\"token operator\">=</span>{Apps}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Route name<span class=\"token operator\">=</span><span class=\"token string\">\"app\"</span> breadcrumbName<span class=\"token operator\">=</span><span class=\"token string\">\"Application:id\"</span> path<span class=\"token operator\">=</span><span class=\"token string\">\":id\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Route name<span class=\"token operator\">=</span><span class=\"token string\">\"detail\"</span> breadcrumbName<span class=\"token operator\">=</span><span class=\"token string\">\"Detail\"</span> path<span class=\"token operator\">=</span><span class=\"token string\">\"detail\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Route<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Route<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Route<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Router<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _reactRouter = __webpack_require__(213);

	  var _antd = __webpack_require__(3);

	  var Apps = function Apps() {
	    return React.createElement(
	      "ul",
	      {
	        className: "app-list"
	      },
	      React.createElement(
	        "li",
	        null,
	        React.createElement(
	          _reactRouter.Link,
	          {
	            to: "/apps/1"
	          },
	          "Application1"
	        ),
	        "：",
	        React.createElement(
	          _reactRouter.Link,
	          {
	            to: "/apps/1/detail"
	          },
	          "Detail"
	        )
	      ),
	      React.createElement(
	        "li",
	        null,
	        React.createElement(
	          _reactRouter.Link,
	          {
	            to: "/apps/2"
	          },
	          "Application2"
	        ),
	        "：",
	        React.createElement(
	          _reactRouter.Link,
	          {
	            to: "/apps/2/detail"
	          },
	          "Detail"
	        )
	      )
	    );
	  };

	  var Home = function Home(_ref) {
	    var routes = _ref.routes,
	        params = _ref.params,
	        children = _ref.children;
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "div",
	        {
	          className: "demo-nav"
	        },
	        React.createElement(
	          _reactRouter.Link,
	          {
	            to: "/"
	          },
	          "Home"
	        ),
	        React.createElement(
	          _reactRouter.Link,
	          {
	            to: "/apps"
	          },
	          "Application List"
	        )
	      ),
	      children || 'Home Page',
	      React.createElement(_antd.Alert, {
	        style: {
	          margin: '16px 0'
	        },
	        message: "Click the navigation above to switch:"
	      }),
	      React.createElement(_antd.Breadcrumb, {
	        routes: routes,
	        params: params
	      })
	    );
	  };

	  return React.createElement(
	    _reactRouter.Router,
	    {
	      history: _reactRouter.hashHistory
	    },
	    React.createElement(
	      _reactRouter.Route,
	      {
	        name: "home",
	        breadcrumbName: "Home",
	        path: "/",
	        component: Home
	      },
	      React.createElement(
	        _reactRouter.Route,
	        {
	          name: "apps",
	          breadcrumbName: "Application List",
	          path: "apps",
	          component: Apps
	        },
	        React.createElement(
	          _reactRouter.Route,
	          {
	            name: "app",
	            breadcrumbName: "Application:id",
	            path: ":id"
	          },
	          React.createElement(_reactRouter.Route, {
	            name: "detail",
	            breadcrumbName: "Detail",
	            path: "detail"
	          })
	        )
	      )
	    )
	  );
	},
	  "style": "#components-breadcrumb-demo-router iframe {\n  height: 180px;\n}\n.demo-nav {\n  height: 30px;\n  line-height: 30px;\n  margin-bottom: 15px;\n  background: #f8f8f8;\n}\n.demo-nav a {\n  line-height: 30px;\n  padding: 0 10px;\n}\n.app-list {\n  margin-top: 15px;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-breadcrumb-demo-router</span> iframe </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">180</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.demo-nav</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">30</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">30</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">15</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#f8f8f8</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.demo-nav</span> a </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">30</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">10</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.app-list</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">15</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>",
	  "src": "/demo-0.7034844812358612.html"
	};

/***/ },

/***/ 752:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "使用 ",
	        [
	          "code",
	          "separator=\">\""
	        ],
	        " 可以自定义分隔符。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The separator can be customized by setting the separator property: separator=\">\""
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "分隔符",
	      "en-US": "Configuring the Separator"
	    },
	    "filename": "components/breadcrumb/demo/separator.md",
	    "id": "components-breadcrumb-demo-separator"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Breadcrumb } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Breadcrumb separator<span class=\"token operator\">=</span><span class=\"token string\">\">\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Home<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item href<span class=\"token operator\">=</span><span class=\"token string\">\"\"</span><span class=\"token operator\">></span>Application Center<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item href<span class=\"token operator\">=</span><span class=\"token string\">\"\"</span><span class=\"token operator\">></span>Application List<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>An Application<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    _antd.Breadcrumb,
	    {
	      separator: ">"
	    },
	    React.createElement(
	      _antd.Breadcrumb.Item,
	      null,
	      "Home"
	    ),
	    React.createElement(
	      _antd.Breadcrumb.Item,
	      {
	        href: ""
	      },
	      "Application Center"
	    ),
	    React.createElement(
	      _antd.Breadcrumb.Item,
	      {
	        href: ""
	      },
	      "Application List"
	    ),
	    React.createElement(
	      _antd.Breadcrumb.Item,
	      null,
	      "An Application"
	    )
	  );
	}
	};

/***/ },

/***/ 753:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "图标放在文字前面。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The icon should be placed in front of the text."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "带有图标的",
	      "en-US": "With an Icon"
	    },
	    "filename": "components/breadcrumb/demo/withIcon.md",
	    "id": "components-breadcrumb-demo-withIcon"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Breadcrumb<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item href<span class=\"token operator\">=</span><span class=\"token string\">\"\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"home\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item href<span class=\"token operator\">=</span><span class=\"token string\">\"\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"user\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>Application List<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n      Application\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    _antd.Breadcrumb,
	    null,
	    React.createElement(
	      _antd.Breadcrumb.Item,
	      {
	        href: ""
	      },
	      React.createElement(_antd.Icon, {
	        type: "home"
	      })
	    ),
	    React.createElement(
	      _antd.Breadcrumb.Item,
	      {
	        href: ""
	      },
	      React.createElement(_antd.Icon, {
	        type: "user"
	      }),
	      React.createElement(
	        "span",
	        null,
	        "Application List"
	      )
	    ),
	    React.createElement(
	      _antd.Breadcrumb.Item,
	      null,
	      "Application"
	    )
	  );
	}
	};

/***/ },

/***/ 1201:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(750),
	    'router': __webpack_require__(751),
	    'separator': __webpack_require__(752),
	    'withIcon': __webpack_require__(753),
	}

/***/ }

});