webpackJsonp([171,202],{

/***/ 718:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "To select or input a date."], ["h2", "When To Use"], ["p", "By clicking the input box, you can select a date from a popup calendar."]],
	  "meta": {
	    "category": "Components",
	    "type": "Data Entry",
	    "title": "DatePicker",
	    "filename": "components/date-picker/index.en-US.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#When-To-Use"
	  }, "When To Use"]], ["li", ["a", {
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["p", "There are three kinds of picker:"], ["ul", ["li", ["p", "DatePicker"]], ["li", ["p", "MonthPicker"]], ["li", ["p", "RangePicker"]]], ["p", ["strong", "Note:"], " Part of locale of DatePicker, MonthPicker, RangePicker is read from value. So, please set the locale of moment correctly."], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> moment <span class=\"token keyword\" >from</span> <span class=\"token string\" >'moment'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// It's recommended to set locale in entry file globaly.</span>\n<span class=\"token keyword\" >import</span> <span class=\"token string\" >'moment/locale/zh-cn'</span><span class=\"token punctuation\" >;</span>\nmoment<span class=\"token punctuation\" >.</span><span class=\"token function\" >locale</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'zh-cn'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>DatePicker</span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >moment</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'2015-01-01'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'YYYY-MM-DD'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>"
	  }, ["code", "import moment from 'moment';\n\n// It's recommended to set locale in entry file globaly.\nimport 'moment/locale/zh-cn';\nmoment.locale('zh-cn');\n\n<DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />"]], ["h3", "Common API"], ["p", "The following APIs are shared by DatePicker, MonthPicker, RangePicker."], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "allowClear"], ["td", "Whether to show clear button"], ["td", "bool"], ["td", "true"]], ["tr", ["td", "disabled"], ["td", "determine whether the DatePicker is disabled"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "style"], ["td", "to customize the style of the input box"], ["td", "Object"], ["td", "{}"]], ["tr", ["td", "popupStyle"], ["td", "to customize the style of the popup calendar"], ["td", "Object"], ["td", "{}"]], ["tr", ["td", "size"], ["td", "determine the size of the input box, the height of ", ["code", "large"], " and ", ["code", "small"], ", are 32px and 22px respectively, while default size is 28px"], ["td", "String"], ["td", "-"]], ["tr", ["td", "locale"], ["td", "localization configuration"], ["td", "Object"], ["td", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/424"
	  }, "default"]]], ["tr", ["td", "disabledDate"], ["td", "to specify the date that cannot be selected"], ["td", "function"], ["td", "-"]], ["tr", ["td", "getCalendarContainer"], ["td", "to set the container of the floating layer, while the default is to create a ", ["code", "div"], " element in ", ["code", "body"]], ["td", "function(trigger)"], ["td", "-"]], ["tr", ["td", "open"], ["td", "open state of picker"], ["td", "bool"], ["td", "-"]], ["tr", ["td", "onOpenChange"], ["td", "a callback function, can be executed whether the popup calendar is popped up or closed"], ["td", "function(status)"], ["td", "-"]]]], ["h3", "DatePicker"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "value"], ["td", "to set date"], ["td", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment"]], ["td", "-"]], ["tr", ["td", "defaultValue"], ["td", "to set default date"], ["td", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment"]], ["td", "-"]], ["tr", ["td", "format"], ["td", "to set the date format, refer to ", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment.js"]], ["td", "String"], ["td", "\"YYYY-MM-DD\""]], ["tr", ["td", "onChange"], ["td", "a callback function, can be executed when the selected time is changing"], ["td", "function(date: moment, dateString: string)"], ["td", "-"]], ["tr", ["td", "showTime"], ["td", "to provide an additional time selection"], ["td", "Object/Boolean"], ["td", ["a", {
	    "title": null,
	    "href": "/components/time-picker/#api"
	  }, "TimePicker Options"]]], ["tr", ["td", "showToday"], ["td", "whether to show \"Today\" button"], ["td", "Boolean"], ["td", "true"]], ["tr", ["td", "disabledTime"], ["td", "to specify the time that cannot be selected"], ["td", "function(date)"], ["td", "-"]]]], ["h3", "MonthPicker"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "value"], ["td", "to set date"], ["td", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment"]], ["td", "-"]], ["tr", ["td", "defaultValue"], ["td", "to set default date"], ["td", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment"]], ["td", "-"]], ["tr", ["td", "format"], ["td", "to set the date format, refer to ", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment.js"]], ["td", "String"], ["td", "\"YYYY-MM\""]], ["tr", ["td", "onChange"], ["td", "a callback function, can be executed when the selected time is changing"], ["td", "function(date: moment, dateString: string)"], ["td", "-"]], ["tr", ["td", "monthCellContentRender"], ["td", "Custom month cell render method"], ["td", "function"], ["td", "无"]], ["tr", ["td", "cellContentRender"], ["td", "Custom month cell content render method,the content will be appended to the cell."], ["td", "function"], ["td", "无"]]]], ["h3", "RangePicker"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "value"], ["td", "to set date"], ["td", "[", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment"], ", ", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment"], "]"], ["td", "-"]], ["tr", ["td", "defaultValue"], ["td", "to set default date"], ["td", "[", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment"], ", ", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment"], "]"], ["td", "-"]], ["tr", ["td", "format"], ["td", "to set the date format"], ["td", "String"], ["td", "\"YYYY-MM-DD HH:mm:ss\""]], ["tr", ["td", "onChange"], ["td", "a callback function, can be executed when the selected time is changing"], ["td", "function(dates: ", "[moment, moment]", ", dateStrings: ", "[string, string]", ")"], ["td", "-"]], ["tr", ["td", "showTime"], ["td", "to provide an additional time selection"], ["td", "Object/Boolean"], ["td", ["a", {
	    "title": null,
	    "href": "/components/time-picker/#api"
	  }, "TimePicker Options"]]], ["tr", ["td", "disabledTime"], ["td", "to specify the time that cannot be selected"], ["td", "function(dates: ", "[moment, moment]", ", partial: ", ["code", "'start'|'end'"], ")"], ["td", "-"]], ["tr", ["td", "ranges"], ["td", "preseted ranges for quick selection"], ["td", "Object { ", "[range: string]", ": ", "[moment, moment]", " }"], ["td", "-"]]]], ["style", "\n.code-box-demo .ant-calendar-picker {\n  margin: 0 8px 12px 0;\n}\n"]]
	};

/***/ }

});