webpackJsonp([52],{

/***/ 1823:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'all': __webpack_require__(2231),
    'basic': __webpack_require__(2232),
}

/***/ }),

/***/ 2231:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "此处列出 Ant Design 中需要国际化支持的组件，你可以在演示里切换语言。"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> LocaleProvider<span class=\"token punctuation\">,</span> Pagination<span class=\"token punctuation\">,</span> DatePicker<span class=\"token punctuation\">,</span> TimePicker<span class=\"token punctuation\">,</span> Calendar<span class=\"token punctuation\">,</span>\n  Popconfirm<span class=\"token punctuation\">,</span> Table<span class=\"token punctuation\">,</span> Modal<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Select<span class=\"token punctuation\">,</span> Transfer<span class=\"token punctuation\">,</span> Radio <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> zhCN <span class=\"token keyword\">from</span> <span class=\"token string\">'antd/lib/locale-provider/zh_CN'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> moment <span class=\"token keyword\">from</span> <span class=\"token string\">'moment'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token string\">'moment/locale/zh-cn'</span><span class=\"token punctuation\">;</span>\n\nmoment<span class=\"token punctuation\">.</span><span class=\"token function\">locale</span><span class=\"token punctuation\">(</span><span class=\"token string\">'en'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">.</span>Option<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> RangePicker <span class=\"token operator\">=</span> DatePicker<span class=\"token punctuation\">.</span>RangePicker<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  filters<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'filter1'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'filter1'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Page</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span>\n\n  showModal <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  hideModal <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> info <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      Modal<span class=\"token punctuation\">.</span><span class=\"token function\">info</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'some info'</span><span class=\"token punctuation\">,</span>\n        content<span class=\"token punctuation\">:</span> <span class=\"token string\">'some info'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> confirm <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      Modal<span class=\"token punctuation\">.</span><span class=\"token function\">confirm</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'some info'</span><span class=\"token punctuation\">,</span>\n        content<span class=\"token punctuation\">:</span> <span class=\"token string\">'some info'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>locale-components<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>example<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span> <span class=\"token attr-name\">defaultCurrent</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">50</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">showSizeChanger</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>example<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">showSearch</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>jack<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>jack<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>lucy<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>lucy<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TimePicker</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>RangePicker</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>example<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>showModal<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Show Modal<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>info<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Show info<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>confirm<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Show confirm<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popconfirm</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Question?<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Click to confirm<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popconfirm</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>example<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Transfer</span>\n            <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">showSearch</span>\n            <span class=\"token attr-name\">targetKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">render</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">319</span><span class=\"token punctuation\">,</span> border<span class=\"token punctuation\">:</span> <span class=\"token string\">'1px solid #d9d9d9'</span><span class=\"token punctuation\">,</span> borderRadius<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Calendar</span> <span class=\"token attr-name\">fullscreen</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>example<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Modal</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Locale</span> <span class=\"token attr-name\">Modal\"</span> <span class=\"token attr-name\">visible</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>visible<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onCancel</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>hideModal<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Locale Modal<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Modal</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      locale<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  changeLocale <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> localeValue <span class=\"token operator\">=</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> locale<span class=\"token punctuation\">:</span> localeValue <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>localeValue<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      moment<span class=\"token punctuation\">.</span><span class=\"token function\">locale</span><span class=\"token punctuation\">(</span><span class=\"token string\">'en'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token punctuation\">{</span>\n      moment<span class=\"token punctuation\">.</span><span class=\"token function\">locale</span><span class=\"token punctuation\">(</span><span class=\"token string\">'zh-cn'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> locale <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>change-locale<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginRight<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Change locale <span class=\"token keyword\">of</span> components<span class=\"token punctuation\">:</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Group</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>undefined<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>changeLocale<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>en<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>undefined<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>English<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>cn<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>zhCN<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>中文<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Group</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>LocaleProvider</span> <span class=\"token attr-name\">locale</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>locale<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token operator\">&lt;</span>Page key<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>locale <span class=\"token operator\">?</span> locale<span class=\"token punctuation\">.</span>locale <span class=\"token punctuation\">:</span> <span class=\"token string\">'en'</span><span class=\"token comment\" spellcheck=\"true\">/* Have to refresh for production environment */</span><span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>LocaleProvider</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  var _zh_CN = __webpack_require__(673);

  var _zh_CN2 = _interopRequireDefault(_zh_CN);

  var _moment = __webpack_require__(34);

  var _moment2 = _interopRequireDefault(_moment);

  __webpack_require__(688);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

  var Page = function (_React$Component) {
    _inherits(Page, _React$Component);

    function Page() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Page);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Page.__proto__ || Object.getPrototypeOf(Page)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        visible: false
      }, _this.showModal = function () {
        _this.setState({
          visible: true
        });
      }, _this.hideModal = function () {
        _this.setState({
          visible: false
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Page, [{
      key: "render",
      value: function render() {
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
    }]);

    return Page;
  }(React.Component);

  var App = function (_React$Component2) {
    _inherits(App, _React$Component2);

    function App() {
      _classCallCheck(this, App);

      var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

      _this2.changeLocale = function (e) {
        var localeValue = e.target.value;

        _this2.setState({
          locale: localeValue
        });

        if (!localeValue) {
          _moment2.default.locale('en');
        } else {
          _moment2.default.locale('zh-cn');
        }
      };

      _this2.state = {
        locale: null
      };
      return _this2;
    }

    _createClass(App, [{
      key: "render",
      value: function render() {
        var locale = this.state.locale;
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
                defaultValue: undefined,
                onChange: this.changeLocale
              },
              React.createElement(
                _antd.Radio.Button,
                {
                  key: "en",
                  value: undefined
                },
                "English"
              ),
              React.createElement(
                _antd.Radio.Button,
                {
                  key: "cn",
                  value: _zh_CN2.default
                },
                "中文"
              )
            )
          ),
          React.createElement(
            _antd.LocaleProvider,
            {
              locale: locale
            },
            React.createElement(Page, {
              key: locale ? locale.locale : 'en' /* Have to refresh for production environment */
            })
          )
        );
      }
    }]);

    return App;
  }(React.Component);

  return React.createElement(App, null);
},
  "style": ".locale-components {\n  border-top: 1px solid #d9d9d9;\n  padding-top: 16px;\n}\n\n.example {\n  margin: 16px 0;\n}\n\n.example > * {\n  margin-right: 8px;\n}\n\n.change-locale {\n  margin-bottom: 16px;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.locale-components</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">border-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#d9d9d9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.example</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.example</span> > * </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.change-locale</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ 2232:
/***/ (function(module, exports, __webpack_require__) {

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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Pagination<span class=\"token punctuation\">,</span> LocaleProvider <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> zhCN <span class=\"token keyword\">from</span> <span class=\"token string\">'antd/lib/locale-provider/zh_CN'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span> <span class=\"token attr-name\">defaultCurrent</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">50</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">showSizeChanger</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>LocaleProvider</span> <span class=\"token attr-name\">locale</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>zhCN<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>LocaleProvider</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var _zh_CN = __webpack_require__(673);

  var _zh_CN2 = _interopRequireDefault(_zh_CN);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var App = function App() {
    return React.createElement(
      "div",
      null,
      React.createElement(_antd.Pagination, {
        defaultCurrent: 1,
        total: 50,
        showSizeChanger: true
      })
    );
  };

  return React.createElement(
    _antd.LocaleProvider,
    {
      locale: _zh_CN2.default
    },
    React.createElement(App, null)
  );
}
};

/***/ })

});