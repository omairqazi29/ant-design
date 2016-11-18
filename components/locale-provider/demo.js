webpackJsonp([44,200],{

/***/ 770:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style13 = __webpack_require__(237);

	var _localeProvider = __webpack_require__(236);

	var _localeProvider2 = _interopRequireDefault(_localeProvider);

	var _style14 = __webpack_require__(55);

	var _radio = __webpack_require__(51);

	var _radio2 = _interopRequireDefault(_radio);

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style15 = __webpack_require__(32);

	var _table = __webpack_require__(31);

	var _table2 = _interopRequireDefault(_table);

	var _style16 = __webpack_require__(140);

	var _calendar = __webpack_require__(139);

	var _calendar2 = _interopRequireDefault(_calendar);

	var _style17 = __webpack_require__(181);

	var _transfer = __webpack_require__(180);

	var _transfer2 = _interopRequireDefault(_transfer);

	var _style18 = __webpack_require__(175);

	var _popconfirm = __webpack_require__(174);

	var _popconfirm2 = _interopRequireDefault(_popconfirm);

	var _style19 = __webpack_require__(10);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _style20 = __webpack_require__(82);

	var _timePicker = __webpack_require__(96);

	var _timePicker2 = _interopRequireDefault(_timePicker);

	var _style21 = __webpack_require__(71);

	var _pagination = __webpack_require__(70);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _style22 = __webpack_require__(61);

	var _modal = __webpack_require__(54);

	var _modal2 = _interopRequireDefault(_modal);

	var _style23 = __webpack_require__(69);

	var _datePicker = __webpack_require__(68);

	var _datePicker2 = _interopRequireDefault(_datePicker);

	var _style24 = __webpack_require__(27);

	var _select = __webpack_require__(26);

	var _select2 = _interopRequireDefault(_select);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	__webpack_require__(510);

	var _moment = __webpack_require__(30);

	var _moment2 = _interopRequireDefault(_moment);

	var _en_US = __webpack_require__(288);

	var _en_US2 = _interopRequireDefault(_en_US);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "此处列出 Ant Design 中需要国际化支持的组件，你可以在演示里切换语言。涉及时间的组件请注意时区设置 ", ["a", {
	      "title": null,
	      "href": "/components/date-picker/#components-date-picker-demo-locale"
	    }, "DatePicker"], "。"]],
	    "en-US": [["p", "Components which need localization support are listed here, you can toggle the language in the demo."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "所有组件",
	      "en-US": "All components"
	    },
	    "filename": "components/locale-provider/demo/all.md",
	    "id": "components-locale-provider-demo-all"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> LocaleProvider<span class=\"token punctuation\" >,</span> Pagination<span class=\"token punctuation\" >,</span> DatePicker<span class=\"token punctuation\" >,</span> TimePicker<span class=\"token punctuation\" >,</span> Calendar<span class=\"token punctuation\" >,</span>\n         Popconfirm<span class=\"token punctuation\" >,</span> Table<span class=\"token punctuation\" >,</span> Modal<span class=\"token punctuation\" >,</span> Button<span class=\"token punctuation\" >,</span> Select<span class=\"token punctuation\" >,</span> Transfer<span class=\"token punctuation\" >,</span> Radio <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> enUS <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd/lib/locale-provider/en_US'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> moment <span class=\"token keyword\" >from</span> <span class=\"token string\" >'moment'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> <span class=\"token string\" >'moment/locale/zh-cn'</span><span class=\"token punctuation\" >;</span>\nmoment<span class=\"token punctuation\" >.</span><span class=\"token function\" >locale</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'en'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> Option <span class=\"token operator\" >=</span> Select<span class=\"token punctuation\" >.</span>Option<span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> RangePicker <span class=\"token operator\" >=</span> DatePicker<span class=\"token punctuation\" >.</span>RangePicker<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> columns <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Name'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span>\n  filters<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    text<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'filter1'</span><span class=\"token punctuation\" >,</span>\n    value<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'filter1'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n  title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Age'</span><span class=\"token punctuation\" >,</span>\n  dataIndex<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'age'</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> customLocale <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n  timezoneOffset<span class=\"token punctuation\" >:</span> <span class=\"token number\" >8</span> <span class=\"token operator\" >*</span> <span class=\"token number\" >60</span><span class=\"token punctuation\" >,</span>\n  firstDayOfWeek<span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >,</span>\n  minimalDaysInFirstWeek<span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> Page <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      visible<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >showModal</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> visible<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >hideModal</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> visible<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> info <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n      Modal<span class=\"token punctuation\" >.</span><span class=\"token function\" >info</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n        title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'some info'</span><span class=\"token punctuation\" >,</span>\n        content<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'some info'</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >const</span> confirm <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n      Modal<span class=\"token punctuation\" >.</span><span class=\"token function\" >confirm</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n        title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'some info'</span><span class=\"token punctuation\" >,</span>\n        content<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'some info'</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>locale-components<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>example<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Pagination</span> <span class=\"token attr-name\" >defaultCurrent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >total</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >50</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >showSizeChanger</span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>example<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Select</span> <span class=\"token attr-name\" >showSearch</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >200</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Option</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>jack<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>jack<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Option</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Option</span> <span class=\"token attr-name\" >value</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>lucy<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>lucy<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Option</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Select</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>DatePicker</span> <span class=\"token punctuation\" >/></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>TimePicker</span> <span class=\"token punctuation\" >/></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>RangePicker</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >200</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>example<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>showModal<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Show Modal<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>info<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Show info<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>confirm<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Show confirm<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Popconfirm</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Question?<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>#<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Click to confirm<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Popconfirm</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>example<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Transfer</span>\n            <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >showSearch</span>\n            <span class=\"token attr-name\" >targetKeys</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span>\n            <span class=\"token attr-name\" >render</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>item <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> item<span class=\"token punctuation\" >.</span>title<span class=\"token punctuation\" >}</span></span>\n          <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >319</span><span class=\"token punctuation\" >,</span> border<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'1px solid #d9d9d9'</span><span class=\"token punctuation\" >,</span> borderRadius<span class=\"token punctuation\" >:</span> <span class=\"token number\" >4</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Calendar</span> <span class=\"token attr-name\" >fullscreen</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token boolean\" >false</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token function\" >moment</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>example<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Table</span> <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >columns</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Modal</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Locale</span> <span class=\"token attr-name\" >Modal\"</span> <span class=\"token attr-name\" >visible</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>visible<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onCancel</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>hideModal<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span><span class=\"token punctuation\" >></span></span>Locale Modal<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Modal</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> App <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      locale<span class=\"token punctuation\" >:</span> enUS<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >changeLocale</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> localeValue <span class=\"token operator\" >=</span> e<span class=\"token punctuation\" >.</span>target<span class=\"token punctuation\" >.</span>value<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> locale<span class=\"token punctuation\" >:</span> localeValue <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span><span class=\"token operator\" >!</span>localeValue<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      moment<span class=\"token punctuation\" >.</span><span class=\"token function\" >locale</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'zh-cn'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >else</span> <span class=\"token punctuation\" >{</span>\n      moment<span class=\"token punctuation\" >.</span><span class=\"token function\" >locale</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'en'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> locale <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span> <span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>locale <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>locale<span class=\"token punctuation\" >.</span>DatePicker<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      locale<span class=\"token punctuation\" >.</span>DatePicker <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span> <span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>locale<span class=\"token punctuation\" >.</span>DatePicker<span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>customLocale <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>change-locale<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> marginRight<span class=\"token punctuation\" >:</span> <span class=\"token number\" >16</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>Change locale <span class=\"token keyword\" >of</span> components<span class=\"token punctuation\" >:</span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Radio.Group</span> <span class=\"token attr-name\" >defaultValue</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>enUS<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>changeLocale<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Radio.Button</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>en<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >value</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>enUS<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>English<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Radio.Button</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Radio.Button</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>cn<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>中文<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Radio.Button</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Radio.Group</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>LocaleProvider</span> <span class=\"token attr-name\" >locale</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>locale<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Page</span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>LocaleProvider</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>App</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    _moment2.default.locale('en');var Option = _select2.default.Option;var RangePicker = _datePicker2.default.RangePicker;var columns = [{ title: 'Name', dataIndex: 'name', filters: [{ text: 'filter1', value: 'filter1' }] }, { title: 'Age', dataIndex: 'age' }];var customLocale = { timezoneOffset: 8 * 60, firstDayOfWeek: 1, minimalDaysInFirstWeek: 1 };var Page = _react2.default.createClass({
	      displayName: 'Page',
	      getInitialState: function getInitialState() {
	        return { visible: false };
	      },
	      showModal: function showModal() {
	        this.setState({ visible: true });
	      },
	      hideModal: function hideModal() {
	        this.setState({ visible: false
	        });
	      },
	      render: function render() {
	        var info = function info() {
	          _modal2.default.info({ title: 'some info', content: 'some info' });
	        };var confirm = function confirm() {
	          _modal2.default.confirm({ title: 'some info', content: 'some info' });
	        };return _react2.default.createElement(
	          'div',
	          { className: 'locale-components' },
	          _react2.default.createElement(
	            'div',
	            { className: 'example' },
	            _react2.default.createElement(_pagination2.default, { defaultCurrent: 1, total: 50, showSizeChanger: true })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'example' },
	            _react2.default.createElement(
	              _select2.default,
	              { showSearch: true, style: { width: 200 } },
	              _react2.default.createElement(
	                Option,
	                { value: 'jack' },
	                'jack'
	              ),
	              _react2.default.createElement(
	                Option,
	                { value: 'lucy' },
	                'lucy'
	              )
	            ),
	            _react2.default.createElement(_datePicker2.default, null),
	            _react2.default.createElement(_timePicker2.default, null),
	            _react2.default.createElement(RangePicker, { style: { width: 200 } })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'example' },
	            _react2.default.createElement(
	              _button2.default,
	              { type: 'primary', onClick: this.showModal },
	              'Show Modal'
	            ),
	            _react2.default.createElement(
	              _button2.default,
	              { onClick: info },
	              'Show info'
	            ),
	            _react2.default.createElement(
	              _button2.default,
	              { onClick: confirm },
	              'Show confirm'
	            ),
	            _react2.default.createElement(
	              _popconfirm2.default,
	              { title: 'Question?' },
	              _react2.default.createElement(
	                'a',
	                { href: '#' },
	                'Click to confirm'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'example' },
	            _react2.default.createElement(_transfer2.default, { dataSource: [], showSearch: true, targetKeys: [], render: function render(item) {
	                return item.title;
	              } })
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: { width: 319, border: '1px solid #d9d9d9', borderRadius: 4 } },
	            _react2.default.createElement(_calendar2.default, { fullscreen: false, value: (0, _moment2.default)() })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'example' },
	            _react2.default.createElement(_table2.default, { dataSource: [], columns: columns })
	          ),
	          _react2.default.createElement(
	            _modal2.default,
	            { title: 'Locale Modal', visible: this.state.visible, onCancel: this.hideModal },
	            _react2.default.createElement(
	              'p',
	              null,
	              'Locale Modal'
	            )
	          )
	        );
	      }
	    });var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return { locale: _en_US2.default };
	      },
	      changeLocale: function changeLocale(e) {
	        var localeValue = e.target.value;this.setState({ locale: localeValue });if (!localeValue) {
	          _moment2.default.locale('zh-cn');
	        } else {
	          _moment2.default.locale('en');
	        }
	      },
	      render: function render() {
	        var locale = (0, _extends3.default)({}, this.state.locale);if (locale.DatePicker) {
	          locale.DatePicker = (0, _extends3.default)({}, locale.DatePicker, customLocale);
	        }return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'change-locale' },
	            _react2.default.createElement(
	              'span',
	              { style: { marginRight: 16 } },
	              'Change locale of components: '
	            ),
	            _react2.default.createElement(
	              _radio2.default.Group,
	              { defaultValue: _en_US2.default, onChange: this.changeLocale },
	              _react2.default.createElement(
	                _radio2.default.Button,
	                { key: 'en', value: _en_US2.default },
	                'English'
	              ),
	              _react2.default.createElement(
	                _radio2.default.Button,
	                { key: 'cn' },
	                '\u4E2D\u6587'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            _localeProvider2.default,
	            { locale: locale },
	            _react2.default.createElement(Page, null)
	          )
	        );
	      }
	    });return _react2.default.createElement(App, null);
	  },
	  "style": ".locale-components {\n  border-top: 1px solid #d9d9d9;\n  padding-top: 16px;\n}\n\n.example {\n  margin: 16px 0;\n}\n\n.example > * {\n  margin-right: 8px;\n}\n\n.change-locale {\n  margin-bottom: 16px;\n}",
	  "highlightedStyle": "<span class=\"token selector\" ><span class=\"token class\" >.locale-components</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >border-top</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span>px solid <span class=\"token hexcode\" >#d9d9d9</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >padding-top</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >16</span>px<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.example</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >margin</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >16</span>px <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.example</span> > * </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >margin-right</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >8</span>px<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.change-locale</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >margin-bottom</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >16</span>px<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>"
	};

/***/ },

/***/ 771:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(237);

	var _localeProvider = __webpack_require__(236);

	var _localeProvider2 = _interopRequireDefault(_localeProvider);

	var _style4 = __webpack_require__(71);

	var _pagination = __webpack_require__(70);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _en_US = __webpack_require__(288);

	var _en_US2 = _interopRequireDefault(_en_US);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "用 ", ["code", "LocaleProvider"], " 包裹你的应用，并引用对应的语言包。"]],
	    "en-US": [["p", "Wrap your app with ", ["code", "LocaleProvider"], ", and apply the corresponding language package."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "国际化",
	      "en-US": "Localization"
	    },
	    "filename": "components/locale-provider/demo/basic.md",
	    "id": "components-locale-provider-demo-basic"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Pagination<span class=\"token punctuation\" >,</span> LocaleProvider <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> enUS <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd/lib/locale-provider/en_US'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >App</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Pagination</span> <span class=\"token attr-name\" >defaultCurrent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >total</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >50</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >showSizeChanger</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>LocaleProvider</span> <span class=\"token attr-name\" >locale</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>enUS<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>App</span> <span class=\"token punctuation\" >/></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>LocaleProvider</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    function App() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_pagination2.default, { defaultCurrent: 1, total: 50, showSizeChanger: true })
	      );
	    }return _react2.default.createElement(
	      _localeProvider2.default,
	      { locale: _en_US2.default },
	      _react2.default.createElement(App, null)
	    );
	  }
	};

/***/ },

/***/ 1165:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'all': __webpack_require__(770),
	    'basic': __webpack_require__(771),
	}

/***/ }

});