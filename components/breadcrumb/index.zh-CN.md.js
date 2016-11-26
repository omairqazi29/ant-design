webpackJsonp([186,202],{

/***/ 668:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "显示当前页面在系统层级结构中的位置，并能向上返回。"], ["h2", "何时使用"], ["ul", ["li", ["p", "当系统拥有超过两级以上的层级结构时；"]], ["li", ["p", "当需要告知用户『你在哪里』时；"]], ["li", ["p", "当需要向上导航的功能时。"]]]],
	  "meta": {
	    "category": "Components",
	    "subtitle": "面包屑",
	    "type": "Navigation",
	    "title": "Breadcrumb",
	    "filename": "components/breadcrumb/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["pre", {
	    "lang": "html",
	    "highlighted": "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Breadcrumb</span><span class=\"token punctuation\" >></span></span>\n  &lt;Breadcrumb.Item>首页&lt;/Breadcrumb.Item>\n  &lt;Breadcrumb.Item>应用中心&lt;/Breadcrumb.Item>\n  &lt;Breadcrumb.Item>应用列表&lt;/Breadcrumb.Item>\n  &lt;Breadcrumb.Item>某应用&lt;/Breadcrumb.Item>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Breadcrumb</span><span class=\"token punctuation\" >></span></span>"
	  }, ["code", "<Breadcrumb>\n  <Breadcrumb.Item>首页</Breadcrumb.Item>\n  <Breadcrumb.Item>应用中心</Breadcrumb.Item>\n  <Breadcrumb.Item>应用列表</Breadcrumb.Item>\n  <Breadcrumb.Item>某应用</Breadcrumb.Item>\n</Breadcrumb>"]], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "可选值"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "routes"], ["td", "router 的路由栈信息"], ["td", "Array"], ["td"], ["td", "-"]], ["tr", ["td", "params"], ["td", "路由的参数"], ["td", "Object"], ["td"], ["td", "-"]], ["tr", ["td", "separator"], ["td", "分隔符自定义"], ["td", "String or Element"], ["td"], ["td", "'/'"]], ["tr", ["td", "itemRender"], ["td", "自定义链接函数，和 react-router 配置使用"], ["td", "(route, params, routes, paths) => React.ReactNode"], ["td"], ["td", "-"]]]], ["blockquote", ["p", "2.0 之后，", ["code", "linkRender"], " 和 ", ["code", "nameRender"], " 被移除，请使用 ", ["code", "itemRender"], " 来代替。"]]]
	};

/***/ }

});