webpackJsonp([45,211],{

/***/ 732:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "此处列出 Ant Design 中需要国际化支持的组件，你可以在演示里切换语言。涉及时间的组件请注意时区设置 ",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "/components/date-picker/#components-date-picker-demo-locale"
	          },
	          "DatePicker"
	        ],
	        "。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Components which need localization support are listed here, you can toggle the language in the demo."
	      ]
	    ]
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
	      "highlighted": "import { LocaleProvider<span class=\"token punctuation\">,</span> Pagination<span class=\"token punctuation\">,</span> DatePicker<span class=\"token punctuation\">,</span> TimePicker<span class=\"token punctuation\">,</span> Calendar<span class=\"token punctuation\">,</span>\n         Popconfirm<span class=\"token punctuation\">,</span> Table<span class=\"token punctuation\">,</span> Modal<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">,</span> Transfer<span class=\"token punctuation\">,</span> Radio } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport enUS from <span class=\"token string\">'antd/lib/locale-provider/en_US'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport moment from <span class=\"token string\">'moment'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport <span class=\"token string\">'moment/locale/zh-cn'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nmoment<span class=\"token punctuation\">.</span><span class=\"token function\">locale</span><span class=\"token punctuation\">(</span><span class=\"token string\">'en'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">.</span>Option<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> RangePicker <span class=\"token operator\">=</span> DatePicker<span class=\"token punctuation\">.</span>RangePicker<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  filters<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>{\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'filter1'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'filter1'</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Page <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">showModal</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">hideModal</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> info <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      Modal<span class=\"token punctuation\">.</span><span class=\"token function\">info</span><span class=\"token punctuation\">(</span>{\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'some info'</span><span class=\"token punctuation\">,</span>\n        content<span class=\"token punctuation\">:</span> <span class=\"token string\">'some info'</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> confirm <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      Modal<span class=\"token punctuation\">.</span><span class=\"token function\">confirm</span><span class=\"token punctuation\">(</span>{\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'some info'</span><span class=\"token punctuation\">,</span>\n        content<span class=\"token punctuation\">:</span> <span class=\"token string\">'some info'</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"locale-components\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"example\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Pagination defaultCurrent<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>} total<span class=\"token operator\">=</span>{<span class=\"token number\">50</span>} showSizeChanger <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"example\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> showSearch style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> }}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"jack\"</span><span class=\"token operator\">></span>jack<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"lucy\"</span><span class=\"token operator\">></span>lucy<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>DatePicker <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>TimePicker <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>RangePicker style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> }} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"example\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>showModal}<span class=\"token operator\">></span>Show Modal<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{info}<span class=\"token operator\">></span>Show info<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{confirm}<span class=\"token operator\">></span>Show confirm<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Popconfirm title<span class=\"token operator\">=</span><span class=\"token string\">\"Question?\"</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>Click <span class=\"token keyword\">to</span> confirm<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"example\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Transfer\n            dataSource<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span>}\n            showSearch\n            targetKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span>}\n            render<span class=\"token operator\">=</span>{item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span>title}\n          <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">319</span><span class=\"token punctuation\">,</span> border<span class=\"token punctuation\">:</span> <span class=\"token string\">'1px solid #d9d9d9'</span><span class=\"token punctuation\">,</span> borderRadius<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> }}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Calendar fullscreen<span class=\"token operator\">=</span>{<span class=\"token boolean\">false</span>} value<span class=\"token operator\">=</span>{<span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"example\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Table dataSource<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span>} columns<span class=\"token operator\">=</span>{columns} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Modal title<span class=\"token operator\">=</span><span class=\"token string\">\"Locale Modal\"</span> visible<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>visible} onCancel<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>hideModal}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Locale Modal<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Modal<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      locale<span class=\"token punctuation\">:</span> enUS<span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">changeLocale</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> localeValue <span class=\"token operator\">=</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value<span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ locale<span class=\"token punctuation\">:</span> localeValue }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>!localeValue<span class=\"token punctuation\">)</span> {\n      moment<span class=\"token punctuation\">.</span><span class=\"token function\">locale</span><span class=\"token punctuation\">(</span><span class=\"token string\">'zh-cn'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    } <span class=\"token keyword\">else</span> {\n      moment<span class=\"token punctuation\">.</span><span class=\"token function\">locale</span><span class=\"token punctuation\">(</span><span class=\"token string\">'en'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"change-locale\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>span style<span class=\"token operator\">=</span>{{ marginRight<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> }}<span class=\"token operator\">></span>Change locale of components<span class=\"token punctuation\">:</span> <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Radio<span class=\"token punctuation\">.</span>Group defaultValue<span class=\"token operator\">=</span>{enUS} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>changeLocale}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Radio<span class=\"token punctuation\">.</span>Button key<span class=\"token operator\">=</span><span class=\"token string\">\"en\"</span> value<span class=\"token operator\">=</span>{enUS}<span class=\"token operator\">></span>English<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token punctuation\">.</span>Button<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Radio<span class=\"token punctuation\">.</span>Button key<span class=\"token operator\">=</span><span class=\"token string\">\"cn\"</span><span class=\"token operator\">></span>中文<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token punctuation\">.</span>Button<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token punctuation\">.</span>Group<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>LocaleProvider locale<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>locale}<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Page <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>LocaleProvider<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var _en_US = __webpack_require__(202);

	  var _en_US2 = _interopRequireDefault(_en_US);

	  var _moment = __webpack_require__(23);

	  var _moment2 = _interopRequireDefault(_moment);

	  __webpack_require__(414);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	  _moment2.default.locale('en');

	  var Option = _antd.Select.Option;
	  var RangePicker = _antd.DatePicker.RangePicker;
	  var columns = [{
	    title: 'Name',
	    dataIndex: 'name',
	    filters: [{
	      text: 'filter1',
	      value: 'filter1'
	    }]
	  }, {
	    title: 'Age',
	    dataIndex: 'age'
	  }];
	  var Page = React.createClass({
	    displayName: "Page",
	    getInitialState: function getInitialState() {
	      return {
	        visible: false
	      };
	    },
	    showModal: function showModal() {
	      this.setState({
	        visible: true
	      });
	    },
	    hideModal: function hideModal() {
	      this.setState({
	        visible: false
	      });
	    },
	    render: function render() {
	      var info = function info() {
	        _antd.Modal.info({
	          title: 'some info',
	          content: 'some info'
	        });
	      };

	      var confirm = function confirm() {
	        _antd.Modal.confirm({
	          title: 'some info',
	          content: 'some info'
	        });
	      };

	      return React.createElement(
	        "div",
	        {
	          className: "locale-components"
	        },
	        React.createElement(
	          "div",
	          {
	            className: "example"
	          },
	          React.createElement(_antd.Pagination, {
	            defaultCurrent: 1,
	            total: 50,
	            showSizeChanger: true
	          })
	        ),
	        React.createElement(
	          "div",
	          {
	            className: "example"
	          },
	          React.createElement(
	            _antd.Select,
	            {
	              showSearch: true,
	              style: {
	                width: 200
	              }
	            },
	            React.createElement(
	              Option,
	              {
	                value: "jack"
	              },
	              "jack"
	            ),
	            React.createElement(
	              Option,
	              {
	                value: "lucy"
	              },
	              "lucy"
	            )
	          ),
	          React.createElement(_antd.DatePicker, null),
	          React.createElement(_antd.TimePicker, null),
	          React.createElement(RangePicker, {
	            style: {
	              width: 200
	            }
	          })
	        ),
	        React.createElement(
	          "div",
	          {
	            className: "example"
	          },
	          React.createElement(
	            _antd.Button,
	            {
	              type: "primary",
	              onClick: this.showModal
	            },
	            "Show Modal"
	          ),
	          React.createElement(
	            _antd.Button,
	            {
	              onClick: info
	            },
	            "Show info"
	          ),
	          React.createElement(
	            _antd.Button,
	            {
	              onClick: confirm
	            },
	            "Show confirm"
	          ),
	          React.createElement(
	            _antd.Popconfirm,
	            {
	              title: "Question?"
	            },
	            React.createElement(
	              "a",
	              {
	                href: "#"
	              },
	              "Click to confirm"
	            )
	          )
	        ),
	        React.createElement(
	          "div",
	          {
	            className: "example"
	          },
	          React.createElement(_antd.Transfer, {
	            dataSource: [],
	            showSearch: true,
	            targetKeys: [],
	            render: function render(item) {
	              return item.title;
	            }
	          })
	        ),
	        React.createElement(
	          "div",
	          {
	            style: {
	              width: 319,
	              border: '1px solid #d9d9d9',
	              borderRadius: 4
	            }
	          },
	          React.createElement(_antd.Calendar, {
	            fullscreen: false,
	            value: (0, _moment2.default)()
	          })
	        ),
	        React.createElement(
	          "div",
	          {
	            className: "example"
	          },
	          React.createElement(_antd.Table, {
	            dataSource: [],
	            columns: columns
	          })
	        ),
	        React.createElement(
	          _antd.Modal,
	          {
	            title: "Locale Modal",
	            visible: this.state.visible,
	            onCancel: this.hideModal
	          },
	          React.createElement(
	            "p",
	            null,
	            "Locale Modal"
	          )
	        )
	      );
	    }
	  });
	  var App = React.createClass({
	    displayName: "App",
	    getInitialState: function getInitialState() {
	      return {
	        locale: _en_US2.default
	      };
	    },
	    changeLocale: function changeLocale(e) {
	      var localeValue = e.target.value;
	      this.setState({
	        locale: localeValue
	      });

	      if (!localeValue) {
	        _moment2.default.locale('zh-cn');
	      } else {
	        _moment2.default.locale('en');
	      }
	    },
	    render: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "div",
	          {
	            className: "change-locale"
	          },
	          React.createElement(
	            "span",
	            {
	              style: {
	                marginRight: 16
	              }
	            },
	            "Change locale of components: "
	          ),
	          React.createElement(
	            _antd.Radio.Group,
	            {
	              defaultValue: _en_US2.default,
	              onChange: this.changeLocale
	            },
	            React.createElement(
	              _antd.Radio.Button,
	              {
	                key: "en",
	                value: _en_US2.default
	              },
	              "English"
	            ),
	            React.createElement(
	              _antd.Radio.Button,
	              {
	                key: "cn"
	              },
	              "中文"
	            )
	          )
	        ),
	        React.createElement(
	          _antd.LocaleProvider,
	          {
	            locale: this.state.locale
	          },
	          React.createElement(Page, null)
	        )
	      );
	    }
	  });
	  return React.createElement(App, null);
	},
	  "style": ".locale-components {\n  border-top: 1px solid #d9d9d9;\n  padding-top: 16px;\n}\n\n.example {\n  margin: 16px 0;\n}\n\n.example > * {\n  margin-right: 8px;\n}\n\n.change-locale {\n  margin-bottom: 16px;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.locale-components</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">border-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#d9d9d9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.example</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.example</span> > * </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.change-locale</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 733:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "用 ",
	        [
	          "code",
	          "LocaleProvider"
	        ],
	        " 包裹你的应用，并引用对应的语言包。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Wrap your app with ",
	        [
	          "code",
	          "LocaleProvider"
	        ],
	        ", and apply the corresponding language package."
	      ]
	    ]
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
	      "highlighted": "import { Pagination<span class=\"token punctuation\">,</span> LocaleProvider } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport enUS from <span class=\"token string\">'antd/lib/locale-provider/en_US'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">App</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n  return <span class=\"token punctuation\">(</span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Pagination defaultCurrent<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>} total<span class=\"token operator\">=</span>{<span class=\"token number\">50</span>} showSizeChanger <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>LocaleProvider locale<span class=\"token operator\">=</span>{enUS}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>LocaleProvider<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var _en_US = __webpack_require__(202);

	  var _en_US2 = _interopRequireDefault(_en_US);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	  function App() {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(_antd.Pagination, {
	        defaultCurrent: 1,
	        total: 50,
	        showSizeChanger: true
	      })
	    );
	  }

	  return React.createElement(
	    _antd.LocaleProvider,
	    {
	      locale: _en_US2.default
	    },
	    React.createElement(App, null)
	  );
	}
	};

/***/ },

/***/ 1048:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'all': __webpack_require__(732),
	    'basic': __webpack_require__(733),
	}

/***/ }

});