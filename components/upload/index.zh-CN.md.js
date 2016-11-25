webpackJsonp([104,202],{

/***/ 1016:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "文件选择上传和拖拽上传控件。"], ["h2", "何时使用"], ["p", "上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。"], ["ul", ["li", ["p", "当需要上传一个或一些文件时。"]], ["li", ["p", "当需要展现上传的进度时。"]], ["li", ["p", "当需要使用拖拽交互时。"]]]],
	  "meta": {
	    "category": "Components",
	    "subtitle": "上传",
	    "type": "Data Entry",
	    "title": "Upload",
	    "filename": "components/upload/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "href": "#API"
	  }, "API"]], ["li", ["a", {
	    "href": "#显示下载链接"
	  }, "显示下载链接"]], ["li", ["a", {
	    "href": "#customRequest"
	  }, "customRequest"]], ["li", ["a", {
	    "href": "#IE-note"
	  }, "IE note"]]],
	  "api": ["section", ["h2", "API"], ["blockquote", ["p", "服务端上传接口实现可以参考 ", ["a", {
	    "title": null,
	    "href": "https://github.com/blueimp/jQuery-File-Upload/wiki"
	  }, "jQuery-File-Upload"], "。"]], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "name"], ["td", "发到后台的文件参数名"], ["td", "String"], ["td", "'file'"]], ["tr", ["td", "defaultFileList"], ["td", "默认已经上传的文件列表"], ["td", "Array", "[object]"], ["td", "无"]], ["tr", ["td", "fileList"], ["td", "已经上传的文件列表（受控），使用此参数时，如果遇到 ", ["code", "onChange"], " 只调用一次的问题，请参考 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2423"
	  }, "#2423"]], ["td", "Array", "[object]"], ["td", "无"]], ["tr", ["td", "action"], ["td", "必选参数, 上传的地址"], ["td", "String"], ["td", "无"]], ["tr", ["td", "data"], ["td", "上传所需参数或返回上传参数的方法"], ["td", "Object or function(file)"], ["td", "无"]], ["tr", ["td", "headers"], ["td", "设置上传的请求头部，IE10 以上有效"], ["td", "Object"], ["td", "无"]], ["tr", ["td", "showUploadList"], ["td", "是否展示 uploadList, 默认开启"], ["td", "Boolean"], ["td", "true"]], ["tr", ["td", "multiple"], ["td", "是否支持多选文件，", ["code", "ie10+"], " 支持。开启后按住 ctrl 可选择多个文件。"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "accept"], ["td", "接受上传的文件类型, 详见 ", ["a", {
	    "title": null,
	    "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept"
	  }, "input accept Attribute"]], ["td", "String"], ["td", "无"]], ["tr", ["td", "beforeUpload"], ["td", "上传文件之前的钩子，参数为上传的文件，若返回 ", ["code", "false"], " 或者 Promise 则停止上传。", ["strong", "注意：该方法不支持老 IE"], "。"], ["td", "Function"], ["td", "无"]], ["tr", ["td", "customRequest"], ["td", "通过覆盖默认的上传行为，可以自定义自己的上传实现"], ["td", "Function"], ["td", "无"]], ["tr", ["td", "onChange"], ["td", "上传文件改变时的状态，详见 onChange"], ["td", "Function"], ["td", "无"]], ["tr", ["td", "listType"], ["td", "上传列表的内建样式，支持两种基本样式 ", ["code", "text"], " or ", ["code", "picture"]], ["td", "String"], ["td", "'text'"]], ["tr", ["td", "onPreview"], ["td", "点击文件链接时的回调"], ["td", "Function(file)"], ["td", "无"]], ["tr", ["td", "onRemove"], ["td", "点击移除文件时的回调"], ["td", "Function(file)"], ["td", "无"]], ["tr", ["td", "supportServerRender"], ["td", "服务端渲染时需要打开这个"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "disabled"], ["td", "是否禁用"], ["td", "Boolean"], ["td", "false"]]]], ["h3", "onChange"], ["blockquote", ["p", "上传中、完成、失败都会调用这个函数。"]], ["p", "文件状态改变的回调，返回为："], ["pre", {
	    "lang": "js",
	    "highlighted": "<span class=\"token punctuation\" >{</span>\n  file<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> <span class=\"token comment\" spellcheck=\"true\">/* ... */</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  fileList<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span> <span class=\"token comment\" spellcheck=\"true\">/* ... */</span> <span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n  event<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span> <span class=\"token comment\" spellcheck=\"true\">/* ... */</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span>"
	  }, ["code", "{\n  file: { /* ... */ },\n  fileList: [ /* ... */ ],\n  event: { /* ... */ },\n}"]], ["ol", ["li", ["p", ["code", "file"], " 当前操作的文件对象。"], ["pre", {
	    "lang": "js",
	    "highlighted": "<span class=\"token punctuation\" >{</span>\n   uid<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'uid'</span><span class=\"token punctuation\" >,</span>      <span class=\"token comment\" spellcheck=\"true\">// 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突</span>\n   name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'xx.png'</span>   <span class=\"token comment\" spellcheck=\"true\">// 文件名</span>\n   status<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'done'</span><span class=\"token punctuation\" >,</span>  <span class=\"token comment\" spellcheck=\"true\">// 状态有：uploading done error removed</span>\n   response<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'{\"status\": \"success\"}'</span><span class=\"token punctuation\" >,</span>  <span class=\"token comment\" spellcheck=\"true\">// 服务端响应内容</span>\n<span class=\"token punctuation\" >}</span>"
	  }, ["code", "{\n   uid: 'uid',      // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突\n   name: 'xx.png'   // 文件名\n   status: 'done',  // 状态有：uploading done error removed\n   response: '{\"status\": \"success\"}',  // 服务端响应内容\n}"]], ["blockquote", ["p", ["code", "antd@1.9.0"], " 之前，multiple 模式下，此参数为一个对象数组 ", ["code", "[file, ...]"], "，", ["code", "antd@1.9.0"], " 开始无论是否多选，均为一个对象。"]]], ["li", ["p", ["code", "fileList"], " 当前的文件列表。"]], ["li", ["p", ["code", "event"], " 上传中的服务端响应内容，包含了上传进度等信息，高级浏览器支持。"]]], ["h2", "显示下载链接"], ["p", "请使用 fileList 属性设置数组项的 url 属性进行展示控制。"], ["h2", "customRequest"], ["ul", ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/react-component/upload#customrequest"
	  }, "https://github.com/react-component/upload#customrequest"]]]], ["h2", "IE note"], ["ul", ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/react-component/upload#ie89-note"
	  }, "https://github.com/react-component/upload#ie89-note"]]]]]
	};

/***/ }

});