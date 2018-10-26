webpackJsonp([44],{

/***/ 1765:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(2049),
    'router-4': __webpack_require__(2050),
    'router': __webpack_require__(2051),
    'separator': __webpack_require__(2052),
    'withIcon': __webpack_require__(2053),
}

/***/ }),

/***/ 2049:
/***/ (function(module, exports, __webpack_require__) {

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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Breadcrumb <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>Home<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Application Center<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Application List<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>An Application<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

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

/***/ }),

/***/ 2050:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "和 ",
        [
          "code",
          "react-router@4"
        ],
        "，或其他路由进行结合使用。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Used together with ",
        [
          "code",
          "react-router@4"
        ],
        " or other router."
      ]
    ]
  },
  "meta": {
    "order": 3,
    "iframe": 200,
    "reactRouter": "react-router-dom",
    "title": {
      "zh-CN": "其它路由",
      "en-US": "Other Router Integration"
    },
    "filename": "components/breadcrumb/demo/router-4.md",
    "id": "components-breadcrumb-demo-router-4"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> HashRouter <span class=\"token keyword\">as</span> Router<span class=\"token punctuation\">,</span> Route<span class=\"token punctuation\">,</span> Switch<span class=\"token punctuation\">,</span> Link<span class=\"token punctuation\">,</span> withRouter <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react-router-dom'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Breadcrumb<span class=\"token punctuation\">,</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Apps <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ul</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>app-list<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/apps/1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Application1<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>：<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/apps/1/detail<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Detail<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/apps/2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Application2<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>：<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/apps/2/detail<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Detail<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ul</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> breadcrumbNameMap <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token string\">'/apps'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'Application List'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'/apps/1'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'Application1'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'/apps/2'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'Application2'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'/apps/1/detail'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'Detail'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'/apps/2/detail'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'Detail'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> Home <span class=\"token operator\">=</span> <span class=\"token function\">withRouter</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> location <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> props<span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">const</span> pathSnippets <span class=\"token operator\">=</span> location<span class=\"token punctuation\">.</span>pathname<span class=\"token punctuation\">.</span><span class=\"token function\">split</span><span class=\"token punctuation\">(</span><span class=\"token string\">'/'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>i <span class=\"token operator\">=</span><span class=\"token operator\">></span> i<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">const</span> extraBreadcrumbItems <span class=\"token operator\">=</span> pathSnippets<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>_<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> url <span class=\"token operator\">=</span> <span class=\"token template-string\"><span class=\"token string\">`/</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>pathSnippets<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> index <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span><span class=\"token string\">'/'</span><span class=\"token punctuation\">)</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>url<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">to</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>url<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span>breadcrumbNameMap<span class=\"token punctuation\">[</span>url<span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">const</span> breadcrumbItems <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>home<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Home<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span>extraBreadcrumbItems<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo-nav<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Home<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/apps<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Application List<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Route</span> <span class=\"token attr-name\">path</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/apps<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">component</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>Apps<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Route</span> <span class=\"token attr-name\">render</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>Home Page<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Switch</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'16px 0'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Click</span> <span class=\"token attr-name\">the</span> <span class=\"token attr-name\">navigation</span> <span class=\"token attr-name\">above</span> <span class=\"token attr-name\">to</span> <span class=\"token attr-name\"><span class=\"token namespace\">switch:</span>\"</span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>breadcrumbItems<span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Router</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Home</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Router</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _reactRouterDom = __webpack_require__(1766);

  var _antd = __webpack_require__(30);

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
          _reactRouterDom.Link,
          {
            to: "/apps/1"
          },
          "Application1"
        ),
        "：",
        React.createElement(
          _reactRouterDom.Link,
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
          _reactRouterDom.Link,
          {
            to: "/apps/2"
          },
          "Application2"
        ),
        "：",
        React.createElement(
          _reactRouterDom.Link,
          {
            to: "/apps/2/detail"
          },
          "Detail"
        )
      )
    );
  };

  var breadcrumbNameMap = {
    '/apps': 'Application List',
    '/apps/1': 'Application1',
    '/apps/2': 'Application2',
    '/apps/1/detail': 'Detail',
    '/apps/2/detail': 'Detail'
  };
  var Home = (0, _reactRouterDom.withRouter)(function (props) {
    var location = props.location;
    var pathSnippets = location.pathname.split('/').filter(function (i) {
      return i;
    });
    var extraBreadcrumbItems = pathSnippets.map(function (_, index) {
      var url = "/" + pathSnippets.slice(0, index + 1).join('/');
      return React.createElement(
        _antd.Breadcrumb.Item,
        {
          key: url
        },
        React.createElement(
          _reactRouterDom.Link,
          {
            to: url
          },
          breadcrumbNameMap[url]
        )
      );
    });
    var breadcrumbItems = [React.createElement(
      _antd.Breadcrumb.Item,
      {
        key: "home"
      },
      React.createElement(
        _reactRouterDom.Link,
        {
          to: "/"
        },
        "Home"
      )
    )].concat(extraBreadcrumbItems);
    return React.createElement(
      "div",
      {
        className: "demo"
      },
      React.createElement(
        "div",
        {
          className: "demo-nav"
        },
        React.createElement(
          _reactRouterDom.Link,
          {
            to: "/"
          },
          "Home"
        ),
        React.createElement(
          _reactRouterDom.Link,
          {
            to: "/apps"
          },
          "Application List"
        )
      ),
      React.createElement(
        _reactRouterDom.Switch,
        null,
        React.createElement(_reactRouterDom.Route, {
          path: "/apps",
          component: Apps
        }),
        React.createElement(_reactRouterDom.Route, {
          render: function render() {
            return React.createElement(
              "span",
              null,
              "Home Page"
            );
          }
        })
      ),
      React.createElement(_antd.Alert, {
        style: {
          margin: '16px 0'
        },
        message: "Click the navigation above to switch:"
      }),
      React.createElement(
        _antd.Breadcrumb,
        null,
        breadcrumbItems
      )
    );
  });
  return React.createElement(
    _reactRouterDom.HashRouter,
    null,
    React.createElement(Home, null)
  );
},
  "style": ".demo {\n  margin: 16px;\n}\n.demo-nav {\n  height: 30px;\n  line-height: 30px;\n  margin-bottom: 16px;\n  background: #f8f8f8;\n}\n.demo-nav a {\n  line-height: 30px;\n  padding: 0 8px;\n}\n.app-list {\n  margin-top: 16px;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.demo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.demo-nav</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">30</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">30</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#f8f8f8</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.demo-nav</span> a </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">30</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.app-list</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>",
  "src": "/demo-0.24342608730185522.html"
};

/***/ }),

/***/ 2051:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "和 ",
        [
          "code",
          "react-router@2"
        ],
        " ",
        [
          "code",
          "react-router@3"
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
          "react-router@2"
        ],
        " ",
        [
          "code",
          "react-router@3"
        ],
        "."
      ]
    ]
  },
  "meta": {
    "order": 2,
    "iframe": 200,
    "reactRouter": "react-router",
    "title": {
      "zh-CN": "react-router",
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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Router<span class=\"token punctuation\">,</span> Route<span class=\"token punctuation\">,</span> Link<span class=\"token punctuation\">,</span> hashHistory <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react-router'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Breadcrumb<span class=\"token punctuation\">,</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Apps <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ul</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>app-list<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/apps/1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Application1<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>：<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/apps/1/detail<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Detail<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/apps/2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Application2<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>：<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/apps/2/detail<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Detail<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ul</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Home <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> routes<span class=\"token punctuation\">,</span> params<span class=\"token punctuation\">,</span> children <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo-nav<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Home<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/apps<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Application List<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">{</span>children <span class=\"token operator\">||</span> <span class=\"token string\">'Home Page'</span><span class=\"token punctuation\">}</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'16px 0'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Click</span> <span class=\"token attr-name\">the</span> <span class=\"token attr-name\">navigation</span> <span class=\"token attr-name\">above</span> <span class=\"token attr-name\">to</span> <span class=\"token attr-name\"><span class=\"token namespace\">switch:</span>\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb</span> <span class=\"token attr-name\">routes</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>routes<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">params</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>params<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Router</span> <span class=\"token attr-name\">history</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>hashHistory<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Route</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>home<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">breadcrumbName</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Home<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">path</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">component</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>Home<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Route</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>apps<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">breadcrumbName</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Application</span> <span class=\"token attr-name\">List\"</span> <span class=\"token attr-name\">path</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>apps<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">component</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>Apps<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Route</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>app<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">breadcrumbName</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Application:id<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">path</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>:id<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Route</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>detail<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">breadcrumbName</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Detail<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">path</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>detail<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Route</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Route</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Route</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Router</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _reactRouter = __webpack_require__(246);

  var _antd = __webpack_require__(30);

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
      {
        className: "demo"
      },
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
  "style": ".demo {\n  margin: 16px;\n}\n.demo-nav {\n  height: 30px;\n  line-height: 30px;\n  margin-bottom: 16px;\n  background: #f8f8f8;\n}\n.demo-nav a {\n  line-height: 30px;\n  padding: 0 8px;\n}\n.app-list {\n  margin-top: 16px;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.demo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.demo-nav</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">30</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">30</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#f8f8f8</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.demo-nav</span> a </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">30</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.app-list</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>",
  "src": "/demo-0.5476596968434253.html"
};

/***/ }),

/***/ 2052:
/***/ (function(module, exports, __webpack_require__) {

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
    "order": 4,
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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Breadcrumb <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb</span> <span class=\"token attr-name\">separator=\"</span><span class=\"token punctuation\">></span><span class=\"token attr-name\">\"</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>Home<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Application Center<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Application List<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>An Application<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

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

/***/ }),

/***/ 2053:
/***/ (function(module, exports, __webpack_require__) {

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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Breadcrumb<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>home<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>Application List<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n      Application\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

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

/***/ })

});