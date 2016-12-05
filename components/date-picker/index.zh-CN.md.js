webpackJsonp([169,201],{

/***/ 731:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "输入或选择日期的控件。"], ["h2", "何时使用"], ["p", "当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。"]],
	  "meta": {
	    "category": "Components",
	    "type": "Data Entry",
	    "title": "DatePicker",
	    "subtitle": "日期选择框",
	    "filename": "components/date-picker/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["p", "日期类组件包括以下三种形式。"], ["ul", ["li", ["p", "DatePicker"]], ["li", ["p", "MonthPicker"]], ["li", ["p", "RangePicker"]]], ["p", ["strong", "注意："], "DatePicker、MonthPicker、RangePicker 部分 locale 是从 value 中读取，所以请先正确设置 moment 的 locale。"], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> moment <span class=\"token keyword\" >from</span> <span class=\"token string\" >'moment'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// 推荐在入口文件全局设置 locale</span>\n<span class=\"token keyword\" >import</span> <span class=\"token string\" >'moment/locale/zh-cn'</span><span class=\"token punctuation\" >;</span>\nmoment<span class=\"token punctuation\" >.</span><span class=\"token function\" >locale</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'zh-cn'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>DatePicker</span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >moment</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'2015-01-01'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'YYYY-MM-DD'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>"
	  }, ["code", "import moment from 'moment';\n\n// 推荐在入口文件全局设置 locale\nimport 'moment/locale/zh-cn';\nmoment.locale('zh-cn');\n\n<DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />"]], ["h3", "共同的 API"], ["p", "以下 API 为 DatePicker、MonthPicker、RangePicker 共享的 API。"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "allowClear"], ["td", "是否显示清除按钮"], ["td", "bool"], ["td", "true"]], ["tr", ["td", "disabled"], ["td", "禁用"], ["td", "bool"], ["td", "false"]], ["tr", ["td", "style"], ["td", "自定义输入框样式"], ["td", "object"], ["td", "{}"]], ["tr", ["td", "popupStyle"], ["td", "格外的弹出日历样式"], ["td", "object"], ["td", "{}"]], ["tr", ["td", "size"], ["td", "输入框大小，", ["code", "large"], " 高度为 32px，", ["code", "small"], " 为 22px，默认是 28px"], ["td", "string"], ["td", "无"]], ["tr", ["td", "locale"], ["td", "国际化配置"], ["td", "object"], ["td", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/424"
	  }, "默认配置"]]], ["tr", ["td", "disabledDate"], ["td", "不可选择的日期"], ["td", "function"], ["td", "无"]], ["tr", ["td", "getCalendarContainer"], ["td", "定义浮层的容器，默认为 body 上新建 div"], ["td", "function(trigger)"], ["td", "无"]], ["tr", ["td", "open"], ["td", "控制弹层是否展开"], ["td", "bool"], ["td", "-"]], ["tr", ["td", "onOpenChange"], ["td", "弹出日历和关闭日历的回调"], ["td", "function(status)"], ["td", "无"]], ["tr", ["td", "placeholder"], ["td", "输入框提示文字"], ["td", "string or array (RangePicker)"], ["td", "-"]]]], ["h3", "DatePicker"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "value"], ["td", "日期"], ["td", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment"]], ["td", "无"]], ["tr", ["td", "defaultValue"], ["td", "默认日期"], ["td", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment"]], ["td", "无"]], ["tr", ["td", "format"], ["td", "展示的日期格式，配置参考 ", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment.js"]], ["td", "string"], ["td", "\"YYYY-MM-DD\""]], ["tr", ["td", "onChange"], ["td", "时间发生变化的回调"], ["td", "function(date: moment, dateString: string)"], ["td", "无"]], ["tr", ["td", "showTime"], ["td", "增加时间选择功能"], ["td", "Object or Boolean"], ["td", ["a", {
	    "title": null,
	    "href": "/components/time-picker/#api"
	  }, "TimePicker Options"]]], ["tr", ["td", "showToday"], ["td", "是否展示“今天”按钮"], ["td", "Boolean"], ["td", "true"]], ["tr", ["td", "disabledTime"], ["td", "不可选择的时间"], ["td", "function(date)"], ["td", "无"]]]], ["h3", "MonthPicker"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "value"], ["td", "日期"], ["td", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment"]], ["td", "无"]], ["tr", ["td", "defaultValue"], ["td", "默认日期"], ["td", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment"]], ["td", "无"]], ["tr", ["td", "format"], ["td", "展示的日期格式，配置参考 ", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment.js"]], ["td", "string"], ["td", "\"YYYY-MM\""]], ["tr", ["td", "onChange"], ["td", "时间发生变化的回调，发生在用户选择时间时"], ["td", "function(date: moment, dateString: string)"], ["td", "无"]], ["tr", ["td", "monthCellContentRender"], ["td", "自定义的月份渲染方法"], ["td", "function"], ["td", "无"]], ["tr", ["td", "cellContentRender"], ["td", "自定义的月份渲染方法，内容会被附加在月份后面"], ["td", "function"], ["td", "无"]]]], ["h3", "RangePicker"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "value"], ["td", "日期"], ["td", "[", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment"], ", ", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment"], "]"], ["td", "无"]], ["tr", ["td", "defaultValue"], ["td", "默认日期"], ["td", "[", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment"], ", ", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment"], "]"], ["td", "无"]], ["tr", ["td", "format"], ["td", "展示的日期格式"], ["td", "string"], ["td", "\"YYYY-MM-DD HH:mm:ss\""]], ["tr", ["td", "onChange"], ["td", "时间发生变化的回调，发生在用户选择时间时"], ["td", "function(dates: ", "[moment, moment]", ", dateStrings: ", "[string, string]", ")"], ["td", "无"]], ["tr", ["td", "showTime"], ["td", "增加时间选择功能"], ["td", "Object or Boolean"], ["td", ["a", {
	    "title": null,
	    "href": "/components/time-picker/#api"
	  }, "TimePicker Options"]]], ["tr", ["td", "disabledTime"], ["td", "不可选择的时间"], ["td", "function(dates: ", "[moment, moment]", ", partial: ", ["code", "'start'|'end'"], ")"], ["td", "无"]], ["tr", ["td", "ranges"], ["td", "预设事件范围快捷选择"], ["td", "Object { ", "[range: string]", ": ", "[moment, moment]", " }"], ["td", "无"]]]], ["style", "\n.code-box-demo .ant-calendar-picker {\n  margin: 0 8px 12px 0;\n}\n"]]
	};

/***/ }

});