webpackJsonp([82,200],{

/***/ 1027:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", {}, ["h3", "使用 Form 提供的校验功能代替 Validation"], ["p", "Validation 已经被废弃，并会在以后的版本完全移除，所以建议尽快使用 Form 自带的校验功能替换 Validation。具体使用方式可以查阅文档和例子（", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/form/#demo-validate-basic"
	  }, "#1"], " ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/form/#demo-validate-other"
	  }, "#2"], " ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/form/#demo-validate-customized"
	  }, "#3"], "）。"], ["h3", "Progress ", ["code", "format"], " 属性的值改为函数"], ["p", "把使用了 ", ["code", "format"], " 属性的代码，如："], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Progress.Circle</span> <span class=\"token attr-name\" >percent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >100</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >format={&lt;Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>check<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >}</span> <span class=\"token operator\" >/</span><span class=\"token operator\" >></span>"
	  }, ["code", "<Progress.Circle percent={100} format={<Icon type=\"check\" />} />"]], ["p", "改为："], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Progress.Circle</span> <span class=\"token attr-name\" >percent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >100</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >format</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>check<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>"
	  }, ["code", "<Progress.Circle percent={100} format={() => <Icon type=\"check\" />} />"]], ["h3", "Tree"], ["ul", ["li", ["p", ["code", "onSelect"], " 回调函数，由原来的", ["code", "一个"], "参数，变为", ["code", "两个"], "，第一个为", ["code", "selectedKeys"], "，第二个参数为原来第一个参数里的其余信息。另外", ["code", "selectedKeys"], "里包含了当前选中的节点key，而原来的不包含。"]], ["li", ["p", ["code", "onCheck"], " 回调函数，由原来的", ["code", "一个"], "参数，变为", ["code", "两个"], "，第一个为", ["code", "checkedKeys"], "，第二个参数为原来第一个参数里的其余信息。另外", ["code", "checkedKeys"], "里包含了当前选中的节点key，而原来的不包含（这样免去业务里自己组装key的工作）。"]], ["li", ["p", "异步API中", ["code", "onDataLoaded"], "重命名为", ["code", "loadData"], "，其他不用改。"]]], ["h2", "0.10 => 0.11"], ["hr"], ["p", ["code", "0.11.x"], " 版本有大量更新，其中部分为不兼容更新。以下列表为其中不兼容的更新及对应升级方案。如果您在升级过程中遇到下面没有提到的情况，可以到 Github 上面咨询。"], ["ul", ["li", ["p", ["code", "0.11.x"], " 文档：", ["a", {
	    "title": null,
	    "href": "http://ant.design"
	  }, "http://ant.design"]]], ["li", ["p", ["code", "0.10.x"], " 文档：", ["a", {
	    "title": null,
	    "href": "http://010x.ant.design"
	  }, "http://010x.ant.design"]]]], ["h3", "默认加载样式"], ["p", "样式现在不再会在 ", ["code", "antd"], " 中默认加载，如果升级后没有样式，开发者需要手动自行引入样式。"], ["pre", {
	    "lang": "js",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token string\" >'antd/lib/index.css'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token comment\" spellcheck=\"true\">// 或者</span>\n<span class=\"token keyword\" >import</span> <span class=\"token string\" >'antd/style/index.less'</span><span class=\"token punctuation\" >;</span>"
	  }, ["code", "import 'antd/lib/index.css';\n// 或者\nimport 'antd/style/index.less';"]], ["h3", "表格远程模式"], ["p", ["code", "Table"], " 的 ", ["code", "dataSource"], " 远程模式被移除，用户需要自行实现数据获取方式，ajax 获取数据的演示可以参见 ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/table/#demo-ajax"
	  }, "演示"], "。"], ["h3", "Timepicker、Datepicker 重命名"], ["p", ["code", "Timepicker"], " 被重命名为 ", ["code", "TimePicker"], "，", ["code", "Datepicker"], " 被重命名为 ", ["code", "DatePicker"], "，需要做以下改动："], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Timepicker</span> <span class=\"token punctuation\" >/></span></span> <span class=\"token operator\" >==</span><span class=\"token operator\" >></span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>TimePicker</span> <span class=\"token punctuation\" >/></span></span>"
	  }, ["code", "<Timepicker /> ==> <TimePicker />"]], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Datepicker</span> <span class=\"token punctuation\" >/></span></span> <span class=\"token operator\" >==</span><span class=\"token operator\" >></span> <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>DatePicker</span> <span class=\"token punctuation\" >/></span></span>"
	  }, ["code", "<Datepicker /> ==> <DatePicker />"]], ["p", "相应的，两个组件的文档地址也改为 ", ["a", {
	    "title": null,
	    "href": "/components/date-picker"
	  }, "/components/date-picker"], " 和 ", ["a", {
	    "title": null,
	    "href": "/components/time-picker"
	  }, "/components/time-picker"], "。"], ["h3", "受控的 DatePicker"], ["p", "由于 ", ["code", "DatePicker"], " 已改为 ", ["a", {
	    "title": null,
	    "href": "https://facebook.github.io/react/docs/forms.html#controlled-components"
	  }, "受控组件"], "，所以 ", ["code", "DatePicker"], " 显示的值必然与其 ", ["code", "value"], " 一致。"], ["p", "如果无法理解受控组件，只须在发现在选中日期后 ", ["code", "Datepicker"], " 显示的值不变的情况后，把其 ", ["code", "value"], " 属性改为 ", ["code", "defaultValue"], " 即可。"], ["h3", "TimePicker locale 结构改变"], ["p", "属性 ", ["code", "locale"], " 结构发生了 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/commit/fd1312803fd49586ded9af39d923457540c515cc#diff-fe4bfc98d91fc3dab8f391e3258622d4L1"
	  }, "变化"], "，需要将原有的属性改为现有的", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1270#issuecomment-201181384"
	  }, "结构"], "。"], ["h3", "其他"], ["ul", ["li", ["p", "Alert 组件默认不展示样式，可以用 ", ["code", "showIcon"], " 属性添加图标。"]], ["li", ["p", "在 ", ["code", "0.10.x"], " 中 Datepicker 已废弃的 ", ["code", "onSelect"], " 属性被删除，请使用 ", ["code", "onChange"], " 属性。。"]], ["li", ["p", "TimePicker 的 ", ["code", "hourOptions"], " ", ["code", "minuteOptions"], " ", ["code", "secondOptions"], " 属性已移除，可使用 ", ["code", "disabledHours"], " ", ["code", "disabledMinutes"], " ", ["code", "disabledSeconds"], " 配和 ", ["code", "hideDisabled"], " 属性来完成原有功能。", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/time-picker/#picker-demo-disable-options"
	  }, "演示"]]]], ["h2", "0.9 => 0.10"], ["hr"], ["p", ["code", "0.10.x"], " 版本有大量改动，是一个不完全向下兼容的版本。以下文档尽力列出了 ", ["code", "0.9.x"], " 到 ", ["code", "0.10.x"], " 的不兼容变动，以帮助开发者升级。"], ["ul", ["li", ["p", ["code", "0.10.x"], " 文档：", ["a", {
	    "title": null,
	    "href": "http://010x.ant.design"
	  }, "http://010x.ant.design"]]], ["li", ["p", ["code", "0.9.x"], " 文档：", ["a", {
	    "title": null,
	    "href": "http://09x.ant.design"
	  }, "http://09x.ant.design"]]]], ["h3", "升级 React"], ["p", "新版本推荐使用 react@0.14.x 及以上版本，并增加了对低版本 react 的警告。建议进行同步升级，参考官方的", ["a", {
	    "title": null,
	    "href": "http://facebook.github.io/react/blog/2015/10/07/react-v0.14.html"
	  }, "升级文档"], "。"], ["h3", "组件化改造"], ["p", "此版本对 ", ["a", {
	    "title": null,
	    "href": "/components/button/"
	  }, "Button"], "、", ["a", {
	    "title": null,
	    "href": "/components/icon/"
	  }, "Iconfont"], "、", ["a", {
	    "title": null,
	    "href": "/components/layout/"
	  }, "Layout"], "、", ["a", {
	    "title": null,
	    "href": "/components/form/"
	  }, "Form"], "、", ["a", {
	    "title": null,
	    "href": "/components/form/#demo-input"
	  }, "Input"], " 模块进行了 React 组件化的改造，请基于新的使用方式修改，原有的书写方式理论上无影响。"], ["p", "例如："], ["pre", {
	    "lang": "html",
	    "highlighted": "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>button</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ant-btn ant-btn-primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>按 钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>button</span><span class=\"token punctuation\" >></span></span>\n  ==>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>按钮<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>"
	  }, ["code", "<button className=\"ant-btn ant-btn-primary\">按 钮</button>\n  ==>\n<Button type=\"primary\">按钮</Button>"]], ["pre", {
	    "lang": "html",
	    "highlighted": "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>i</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>anticon anticon-appstore<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>i</span><span class=\"token punctuation\" >></span></span>\n  ==>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>appstore<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>"
	  }, ["code", "<i className=\"anticon anticon-appstore\"></i>\n  ==>\n<Icon type=\"appstore\" />"]], ["h3", "size 属性统一"], ["p", "原有组件的 ", ["code", "size"], " 属性统一为大中小：", ["code", "large"], " ", ["code", "default"], " ", ["code", "small"], "，包括 ", ["code", "Button"], " ", ["code", "Table"], " ", ["code", "Tabs"], " ", ["code", "Steps"], " ", ["code", "Select"], " ", ["code", "Pagination"], " ", ["code", "InputNumber"], " ", ["code", "Datepicker"], "。"], ["p", "例如："], ["pre", {
	    "lang": "html",
	    "highlighted": "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tabs</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>mini<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span> ... <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tabs</span><span class=\"token punctuation\" >></span></span>\n  ==>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Tabs</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span> ... <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Tabs</span><span class=\"token punctuation\" >></span></span>"
	  }, ["code", "<Tabs size=\"mini\"> ... </Tabs>\n  ==>\n<Tabs size=\"small\"> ... </Tabs>"]], ["p", "详情可参考：", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/415"
	  }, "https://github.com/ant-design/ant-design/issues/415"]], ["h3", "其他"], ["ul", ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://09x.ant.design/components/enter-animation"
	  }, "enter-animation"], " 组件下线， 请使用 ", ["a", {
	    "title": null,
	    "href": "/components/queue-anim"
	  }, "queue-anim"], " 来代替。"]], ["li", ["p", "Carousel 升级依赖，参考新的", ["a", {
	    "title": null,
	    "href": "/components/carousel/"
	  }, "新的 API 和使用方式"], "进行修改。"]], ["li", ["p", ["code", "antd.Notification()"], " 修改为小写的 ", ["code", "antd.notification()"], "。"]], ["li", ["p", "Datepicker 的 ", ["code", "onSelect"], " 属性修改为 ", ["code", "onChange"], " 属性。"]], ["li", ["p", "Datepicker 的 ", ["code", "calendarStyle"], " 属性修改为 ", ["code", "popupStyle"], " 属性。"]], ["li", ["p", "Dropdown 的 ", ["code", "onSelect"], " 属性应修正为 ", ["code", "onClick"], " 属性，因为原有的 onSelect 只在变化时触发。"]], ["li", ["p", "Slider 的 ", ["code", "withDots"], " ", ["code", "isIncluded"], " 属性修改为 ", ["code", "dots"], " ", ["code", "included"], "。"]], ["li", ["p", "iconfont 的基线更新，可能导致原有图标的位置偏移。"]]], ["p", "新版本变化较大，以上升级指南可能有遗漏，全部改动可以参考 ", ["a", {
	    "title": null,
	    "href": "/changelog"
	  }, "更新日志"], "。在升级过程中遇到问题，欢迎 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/new"
	  }, "报告"], " 给我们。"]],
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "升级指南",
	      "en-US": "Upgrade Notes"
	    },
	    "filename": "docs/react/upgrade-notes.md"
	  },
	  "description": ["section", ["p", "此处着重列出升级中的不兼容变化和推荐改动。所有变动请见 ", ["a", {
	    "title": null,
	    "href": "/changelog"
	  }, "更新日志"], "。"], ["h2", "1.x => 2.x"], ["p", ["code", "1.0.0"], " 之后将不再单独提供升级指南，请参考对应版本 ", ["a", {
	    "title": null,
	    "href": "/changelog#2.0.0"
	  }, "更新日志"], " 中的 ", ["code", "不兼容改动"], " 部分进行升级。"], ["h2", "0.12 => 1.x"], ["p", ["code", "1.0.0"], " 之后将不再单独提供升级指南，请参考对应版本 ", ["a", {
	    "title": null,
	    "href": "/changelog#1.0.0"
	  }, "更新日志"], " 中的 ", ["code", "不兼容改动"], " 部分进行升级。"], ["h2", "0.11 => 0.12"]],
	  "toc": ["ul", ["li", ["a", {
	    "href": "#0.10-=>-0.11"
	  }, "0.10 => 0.11"]], ["li", ["a", {
	    "href": "#0.9-=>-0.10"
	  }, "0.9 => 0.10"]]]
	};

/***/ }

});