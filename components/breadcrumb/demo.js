webpackJsonp([40,202],{

/***/ 649:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(109);

	var _breadcrumb = __webpack_require__(108);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "最简单的用法。"]],
	    "en-US": [["p", "The simplest use"]]
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
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Breadcrumb <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Breadcrumb</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\" >></span></span>Home<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Application Center<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Application List<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\" >></span></span>An Application<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Breadcrumb</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      _breadcrumb2.default,
	      null,
	      _react2.default.createElement(
	        _breadcrumb2.default.Item,
	        null,
	        'Home'
	      ),
	      _react2.default.createElement(
	        _breadcrumb2.default.Item,
	        null,
	        _react2.default.createElement(
	          'a',
	          { href: '' },
	          'Application Center'
	        )
	      ),
	      _react2.default.createElement(
	        _breadcrumb2.default.Item,
	        null,
	        _react2.default.createElement(
	          'a',
	          { href: '' },
	          'Application List'
	        )
	      ),
	      _react2.default.createElement(
	        _breadcrumb2.default.Item,
	        null,
	        'An Application'
	      )
	    );
	  }
	};

/***/ },

/***/ 650:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(109);

	var _breadcrumb = __webpack_require__(108);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(123);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "和 ", ["code", "react-router@2.x"], " 进行结合使用。"]],
	    "en-US": [["p", "Used together with ", ["code", "react-router@2.x"], "."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Router<span class=\"token punctuation\" >,</span> Route<span class=\"token punctuation\" >,</span> Link<span class=\"token punctuation\" >,</span> hashHistory <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'react-router'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Breadcrumb <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> Apps <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ul</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>app-list<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>/apps/1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Application1<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>：<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>/apps/1/detail<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Detail<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>li</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>/apps/2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Application2<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>：<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>/apps/2/detail<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Detail<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>li</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ul</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> Home <span class=\"token operator\" >=</span> props <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>demo-nav<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>/<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Home<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Link</span> <span class=\"token attr-name\" >to</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>/apps<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Application List<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Link</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >{</span>props<span class=\"token punctuation\" >.</span>children <span class=\"token operator\" >||</span> <span class=\"token string\" >'Home'</span><span class=\"token punctuation\" >}</span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span>\n      <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span>\n        marginBottom<span class=\"token punctuation\" >:</span> <span class=\"token number\" >15</span><span class=\"token punctuation\" >,</span>\n        marginTop<span class=\"token punctuation\" >:</span> <span class=\"token number\" >15</span><span class=\"token punctuation\" >,</span>\n        paddingBottom<span class=\"token punctuation\" >:</span> <span class=\"token number\" >15</span><span class=\"token punctuation\" >,</span>\n        borderBottom<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'1px dashed #ccc'</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n    <span class=\"token punctuation\" >></span></span>\n      Click the navigation above to <span class=\"token keyword\" >switch</span><span class=\"token punctuation\" >:</span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token operator\" >&lt;</span>Breadcrumb <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >}</span> <span class=\"token operator\" >/</span><span class=\"token operator\" >></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Router</span> <span class=\"token attr-name\" >history</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>hashHistory<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Route</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>home<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >breadcrumbName</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Home<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >path</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>/<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >component</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>Home<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Route</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>apps<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >breadcrumbName</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Application</span> <span class=\"token attr-name\" >List\"</span> <span class=\"token attr-name\" >path</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>apps<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >component</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>Apps<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Route</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>app<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >breadcrumbName</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Application:id<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >path</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>:id<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Route</span> <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>detail<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >breadcrumbName</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Detail<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >path</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>detail<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Route</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Route</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Route</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Router</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Apps = function Apps() {
	      return _react2.default.createElement(
	        'ul',
	        { className: 'app-list' },
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/apps/1' },
	            'Application1'
	          ),
	          '\uFF1A',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/apps/1/detail' },
	            'Detail'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/apps/2' },
	            'Application2'
	          ),
	          '\uFF1A',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/apps/2/detail' },
	            'Detail'
	          )
	        )
	      );
	    };var Home = function Home(props) {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'demo-nav' },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/' },
	            'Home'
	          ),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/apps' },
	            'Application List'
	          )
	        ),
	        props.children || 'Home',
	        _react2.default.createElement(
	          'div',
	          { style: { marginBottom: 15, marginTop: 15, paddingBottom: 15,
	              borderBottom: '1px dashed #ccc' } },
	          'Click the navigation above to switch:'
	        ),
	        _react2.default.createElement(_breadcrumb2.default, props)
	      );
	    };return _react2.default.createElement(
	      _reactRouter.Router,
	      { history: _reactRouter.hashHistory },
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { name: 'home', breadcrumbName: 'Home', path: '/', component: Home },
	        _react2.default.createElement(
	          _reactRouter.Route,
	          { name: 'apps', breadcrumbName: 'Application List', path: 'apps', component: Apps },
	          _react2.default.createElement(
	            _reactRouter.Route,
	            { name: 'app', breadcrumbName: 'Application:id', path: ':id' },
	            _react2.default.createElement(_reactRouter.Route, { name: 'detail', breadcrumbName: 'Detail', path: 'detail' })
	          )
	        )
	      )
	    );
	  },
	  "style": "#components-breadcrumb-demo-router iframe {\n  height: 180px;\n}\n.demo-nav {\n  height: 30px;\n  line-height: 30px;\n  margin-bottom: 15px;\n  background: #f8f8f8;\n}\n.demo-nav a {\n  line-height: 30px;\n  padding: 0 10px;\n}\n.app-list {\n  margin-top: 15px;\n}",
	  "highlightedStyle": "<span class=\"token selector\" ><span class=\"token id\" >#components-breadcrumb-demo-router</span> iframe </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >height</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >180</span>px<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n<span class=\"token selector\" ><span class=\"token class\" >.demo-nav</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >height</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >30</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >line-height</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >30</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >margin-bottom</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >15</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >background</span><span class=\"token punctuation\" >:</span> <span class=\"token hexcode\" >#f8f8f8</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n<span class=\"token selector\" ><span class=\"token class\" >.demo-nav</span> a </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >line-height</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >30</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >padding</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >0</span> <span class=\"token number\" >10</span>px<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n<span class=\"token selector\" ><span class=\"token class\" >.app-list</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >margin-top</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >15</span>px<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>",
	  "src": "/demo-0.634878100344211.html"
	};

/***/ },

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(109);

	var _breadcrumb = __webpack_require__(108);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "使用 ", ["code", "separator=\">\""], " 可以自定义分隔符。"]],
	    "en-US": [["p", "The separator can be customized by setting the separator property: separator=\">\""]]
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
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Breadcrumb <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Breadcrumb</span> <span class=\"token attr-name\" >separator=\"</span><span class=\"token punctuation\" >></span><span class=\"token attr-name\" >\"</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\" >></span></span>Home<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Breadcrumb.Item</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Application Center<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Breadcrumb.Item</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Application List<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\" >></span></span>An Application<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Breadcrumb</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      _breadcrumb2.default,
	      { separator: '>' },
	      _react2.default.createElement(
	        _breadcrumb2.default.Item,
	        null,
	        'Home'
	      ),
	      _react2.default.createElement(
	        _breadcrumb2.default.Item,
	        { href: '' },
	        'Application Center'
	      ),
	      _react2.default.createElement(
	        _breadcrumb2.default.Item,
	        { href: '' },
	        'Application List'
	      ),
	      _react2.default.createElement(
	        _breadcrumb2.default.Item,
	        null,
	        'An Application'
	      )
	    );
	  }
	};

/***/ },

/***/ 652:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(109);

	var _breadcrumb = __webpack_require__(108);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _style4 = __webpack_require__(14);

	var _icon = __webpack_require__(12);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "图标放在文字前面。"]],
	    "en-US": [["p", "The icon should be placed in front of the text."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Breadcrumb<span class=\"token punctuation\" >,</span> Icon <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Breadcrumb</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Breadcrumb.Item</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>home<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Breadcrumb.Item</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span><span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>user<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>Application List<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\" >></span></span>\n      Application\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Breadcrumb</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      _breadcrumb2.default,
	      null,
	      _react2.default.createElement(
	        _breadcrumb2.default.Item,
	        { href: '' },
	        _react2.default.createElement(_icon2.default, { type: 'home' })
	      ),
	      _react2.default.createElement(
	        _breadcrumb2.default.Item,
	        { href: '' },
	        _react2.default.createElement(_icon2.default, { type: 'user' }),
	        _react2.default.createElement(
	          'span',
	          null,
	          'Application List'
	        )
	      ),
	      _react2.default.createElement(
	        _breadcrumb2.default.Item,
	        null,
	        'Application'
	      )
	    );
	  }
	};

/***/ },

/***/ 1156:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(649),
	    'router': __webpack_require__(650),
	    'separator': __webpack_require__(651),
	    'withIcon': __webpack_require__(652),
	}

/***/ }

});