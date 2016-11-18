webpackJsonp([142,200],{

/***/ 836:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "采用分页的形式分隔长列表，每次只加载一个页面。"], ["h2", "何时使用"], ["ul", ["li", ["p", "当加载/渲染所有数据将花费很多时间时；"]], ["li", ["p", "可切换页码浏览数据。"]]]],
	  "meta": {
	    "category": "Components",
	    "subtitle": "分页",
	    "type": "Navigation",
	    "title": "Pagination",
	    "filename": "components/pagination/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["pre", {
	    "lang": "html",
	    "highlighted": "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Pagination</span> <span class=\"token attr-name\" >onChange</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span>{onChange}</span> <span class=\"token attr-name\" >total</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span>{50}</span> <span class=\"token punctuation\" >/></span></span>"
	  }, ["code", "<Pagination onChange={onChange} total={50} />"]], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "current"], ["td", "当前页数"], ["td", "Number"], ["td", "-"]], ["tr", ["td", "defaultCurrent"], ["td", "默认的当前页数"], ["td", "Number"], ["td", "1"]], ["tr", ["td", "total"], ["td", "数据总数"], ["td", "Number"], ["td", "0"]], ["tr", ["td", "defaultPageSize"], ["td", "默认的每页条数"], ["td", "Number"], ["td", "10"]], ["tr", ["td", "pageSize"], ["td", "每页条数"], ["td", "Number"], ["td", "-"]], ["tr", ["td", "onChange"], ["td", "页码改变的回调，参数是改变后的页码"], ["td", "Function"], ["td", "noop"]], ["tr", ["td", "showSizeChanger"], ["td", "是否可以改变 pageSize"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "pageSizeOptions"], ["td", "指定每页可以显示多少条"], ["td", "Array", ["string"]], ["td", "['10', '20', '30', '40']"]], ["tr", ["td", "onShowSizeChange"], ["td", "pageSize 变化的回调"], ["td", "Function"], ["td", "noop"]], ["tr", ["td", "showQuickJumper"], ["td", "是否可以快速跳转至某页"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "size"], ["td", "当为「small」时，是小尺寸分页"], ["td", "String"], ["td", "\"\""]], ["tr", ["td", "simple"], ["td", "当添加该属性时，显示为简单分页"], ["td", "Object"], ["td", "-"]], ["tr", ["td", "showTotal"], ["td", "用于显示总共有多少条数据"], ["td", "Function"], ["td", "-"]]]]]
	};

/***/ }

});