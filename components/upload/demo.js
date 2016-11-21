webpackJsonp([5,202],{

/***/ 989:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(98);

	var _upload = __webpack_require__(97);

	var _upload2 = _interopRequireDefault(_upload);

	var _style6 = __webpack_require__(10);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _style7 = __webpack_require__(14);

	var _icon = __webpack_require__(12);

	var _icon2 = _interopRequireDefault(_icon);

	var _style8 = __webpack_require__(53);

	var _message = __webpack_require__(52);

	var _message2 = _interopRequireDefault(_message);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "经典款式，用户点击按钮弹出文件选择框。"]],
	    "en-US": [["p", "Classic mode. File selection dialog pops up when upload button is clicked "]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "点击上传",
	      "en-US": "Upload by clicking"
	    },
	    "filename": "components/upload/demo/basic.md",
	    "id": "components-upload-demo-basic"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Upload<span class=\"token punctuation\" >,</span> message<span class=\"token punctuation\" >,</span> Button<span class=\"token punctuation\" >,</span> Icon <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> props <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'file'</span><span class=\"token punctuation\" >,</span>\n  action<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/upload.do'</span><span class=\"token punctuation\" >,</span>\n  headers<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n    authorization<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'authorization-text'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span>info<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>info<span class=\"token punctuation\" >.</span>file<span class=\"token punctuation\" >.</span>status <span class=\"token operator\" >!==</span> <span class=\"token string\" >'uploading'</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>info<span class=\"token punctuation\" >.</span>file<span class=\"token punctuation\" >,</span> info<span class=\"token punctuation\" >.</span>fileList<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>info<span class=\"token punctuation\" >.</span>file<span class=\"token punctuation\" >.</span>status <span class=\"token operator\" >===</span> <span class=\"token string\" >'done'</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      message<span class=\"token punctuation\" >.</span><span class=\"token function\" >success</span><span class=\"token punctuation\" >(</span><span class=\"token template-string\" ><span class=\"token string\" >`</span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>info<span class=\"token punctuation\" >.</span>file<span class=\"token punctuation\" >.</span>name<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" > file uploaded successfully`</span></span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >else</span> <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>info<span class=\"token punctuation\" >.</span>file<span class=\"token punctuation\" >.</span>status <span class=\"token operator\" >===</span> <span class=\"token string\" >'error'</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      message<span class=\"token punctuation\" >.</span><span class=\"token function\" >error</span><span class=\"token punctuation\" >(</span><span class=\"token template-string\" ><span class=\"token string\" >`</span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>info<span class=\"token punctuation\" >.</span>file<span class=\"token punctuation\" >.</span>name<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" > file upload failed.`</span></span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token operator\" >&lt;</span>Upload <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>upload<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span> Click to Upload\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Upload</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var props = { name: 'file', action: '/upload.do', headers: { authorization: 'authorization-text' }, onChange: function onChange(info) {
	        if (info.file.status !== 'uploading') {
	          console.log(info.file, info.fileList);
	        }if (info.file.status === 'done') {
	          _message2.default.success(info.file.name + ' file uploaded successfully');
	        } else if (info.file.status === 'error') {
	          _message2.default.error(info.file.name + ' file upload failed.');
	        }
	      }
	    };return _react2.default.createElement(
	      _upload2.default,
	      props,
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'ghost' },
	        _react2.default.createElement(_icon2.default, { type: 'upload' }),
	        ' Click to Upload'
	      )
	    );
	  }
	};

/***/ },

/***/ 990:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(98);

	var _upload = __webpack_require__(97);

	var _upload2 = _interopRequireDefault(_upload);

	var _style6 = __webpack_require__(10);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _style7 = __webpack_require__(14);

	var _icon = __webpack_require__(12);

	var _icon2 = _interopRequireDefault(_icon);

	var _style8 = __webpack_require__(53);

	var _message = __webpack_require__(52);

	var _message2 = _interopRequireDefault(_message);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "可以通过 ", ["code", "beforeUpload"], " 在文件上传之前进行干预，如限制用户只能上传 JPG 文件。"], ["p", "也支持异步检查，", ["code", "beforeUpload"], " 的返回值可以是一个 Promise：", ["a", {
	      "title": null,
	      "href": "http://react-component.github.io/upload/examples/beforeUpload.html"
	    }, "示例"], "。"]],
	    "en-US": [["p", "You can use ", ["code", "beforeUpload"], " to check whether user can upload, for example, limit file type only to be JPG. Checking can also be asynchronous. The return value can also be a Promise for function ", ["code", "beforeUpload"]]]
	  },
	  "meta": {
	    "order": 7,
	    "title": {
	      "zh-CN": "限制用户上传的文件",
	      "en-US": "Filter uploads files"
	    },
	    "filename": "components/upload/demo/beforeUpload.md",
	    "id": "components-upload-demo-beforeUpload"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Upload<span class=\"token punctuation\" >,</span> Button<span class=\"token punctuation\" >,</span> Icon<span class=\"token punctuation\" >,</span> message <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> props <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n  action<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/upload.do'</span><span class=\"token punctuation\" >,</span>\n  multiple<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >beforeUpload</span><span class=\"token punctuation\" >(</span>file<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> isJPG <span class=\"token operator\" >=</span> file<span class=\"token punctuation\" >.</span>type <span class=\"token operator\" >===</span> <span class=\"token string\" >'image/jpeg'</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span><span class=\"token operator\" >!</span>isJPG<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      message<span class=\"token punctuation\" >.</span><span class=\"token function\" >error</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'you can only upload JPG file~'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n    <span class=\"token keyword\" >return</span> isJPG<span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token operator\" >&lt;</span>Upload <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>upload<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span> upload\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Upload</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var props = { action: '/upload.do', multiple: true, beforeUpload: function beforeUpload(file) {
	        var isJPG = file.type === 'image/jpeg';if (!isJPG) {
	          _message2.default.error('you can only upload JPG file~');
	        }return isJPG;
	      }
	    };return _react2.default.createElement(
	      _upload2.default,
	      props,
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'ghost' },
	        _react2.default.createElement(_icon2.default, { type: 'upload' }),
	        ' upload'
	      )
	    );
	  }
	};

/***/ },

/***/ 991:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(98);

	var _upload = __webpack_require__(97);

	var _upload2 = _interopRequireDefault(_upload);

	var _style5 = __webpack_require__(10);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(14);

	var _icon = __webpack_require__(12);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "对已上传的文件进行编辑。"]],
	    "en-US": [["p", "Edit uploaded files"]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "传入已上传的文件",
	      "en-US": "Set files that have been uploaded"
	    },
	    "filename": "components/upload/demo/defaultFileList.md",
	    "id": "components-upload-demo-defaultFileList"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Upload<span class=\"token punctuation\" >,</span> Button<span class=\"token punctuation\" >,</span> Icon <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> props <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n  action<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/upload.do'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span>info<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>info<span class=\"token punctuation\" >.</span>file<span class=\"token punctuation\" >.</span>status <span class=\"token operator\" >!==</span> <span class=\"token string\" >'uploading'</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>info<span class=\"token punctuation\" >.</span>file<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n      console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>info<span class=\"token punctuation\" >.</span>fileList<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  defaultFileList<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    uid<span class=\"token punctuation\" >:</span> <span class=\"token operator\" >-</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >,</span>\n    name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'xxx.png'</span><span class=\"token punctuation\" >,</span>\n    status<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'done'</span><span class=\"token punctuation\" >,</span>\n    url<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'http://www.baidu.com/xxx.png'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n    uid<span class=\"token punctuation\" >:</span> <span class=\"token operator\" >-</span><span class=\"token number\" >2</span><span class=\"token punctuation\" >,</span>\n    name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'yyy.png'</span><span class=\"token punctuation\" >,</span>\n    status<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'done'</span><span class=\"token punctuation\" >,</span>\n    url<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'http://www.baidu.com/yyy.png'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token operator\" >&lt;</span>Upload <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>upload<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span> Upload\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Upload</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var props = { action: '/upload.do', onChange: function onChange(info) {
	        if (info.file.status !== 'uploading') {
	          console.log(info.file);console.log(info.fileList);
	        }
	      },
	      defaultFileList: [{ uid: -1, name: 'xxx.png', status: 'done', url: 'http://www.baidu.com/xxx.png' }, { uid: -2, name: 'yyy.png', status: 'done', url: 'http://www.baidu.com/yyy.png' }] };return _react2.default.createElement(
	      _upload2.default,
	      props,
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'ghost' },
	        _react2.default.createElement(_icon2.default, { type: 'upload' }),
	        ' Upload'
	      )
	    );
	  }
	};

/***/ },

/***/ 992:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(14);

	var _icon = __webpack_require__(12);

	var _icon2 = _interopRequireDefault(_icon);

	var _style5 = __webpack_require__(53);

	var _message = __webpack_require__(52);

	var _message2 = _interopRequireDefault(_message);

	var _style6 = __webpack_require__(98);

	var _upload = __webpack_require__(97);

	var _upload2 = _interopRequireDefault(_upload);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "可以把文件拖入指定区域，完成上传，同样支持点击上传。"]],
	    "en-US": [["p", "You can drag files to a specific area, to upload. Meanwhile you can also upload by selecting."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "拖拽上传",
	      "en-US": "Upload files by dragging and dropping"
	    },
	    "filename": "components/upload/demo/drag.md",
	    "id": "components-upload-demo-drag"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Upload<span class=\"token punctuation\" >,</span> Icon<span class=\"token punctuation\" >,</span> message <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> Dragger <span class=\"token operator\" >=</span> Upload<span class=\"token punctuation\" >.</span>Dragger<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> props <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n  name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'file'</span><span class=\"token punctuation\" >,</span>\n  showUploadList<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n  action<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/upload.do'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >onChange</span><span class=\"token punctuation\" >(</span>info<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>info<span class=\"token punctuation\" >.</span>file<span class=\"token punctuation\" >.</span>status <span class=\"token operator\" >!==</span> <span class=\"token string\" >'uploading'</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>info<span class=\"token punctuation\" >.</span>file<span class=\"token punctuation\" >,</span> info<span class=\"token punctuation\" >.</span>fileList<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>info<span class=\"token punctuation\" >.</span>file<span class=\"token punctuation\" >.</span>status <span class=\"token operator\" >===</span> <span class=\"token string\" >'done'</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      message<span class=\"token punctuation\" >.</span><span class=\"token function\" >success</span><span class=\"token punctuation\" >(</span><span class=\"token template-string\" ><span class=\"token string\" >`</span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>info<span class=\"token punctuation\" >.</span>file<span class=\"token punctuation\" >.</span>name<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" > file uploaded successfully.`</span></span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >else</span> <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>info<span class=\"token punctuation\" >.</span>file<span class=\"token punctuation\" >.</span>status <span class=\"token operator\" >===</span> <span class=\"token string\" >'error'</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      message<span class=\"token punctuation\" >.</span><span class=\"token function\" >error</span><span class=\"token punctuation\" >(</span><span class=\"token template-string\" ><span class=\"token string\" >`</span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>info<span class=\"token punctuation\" >.</span>file<span class=\"token punctuation\" >.</span>name<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" > file upload failed.`</span></span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >246</span><span class=\"token punctuation\" >,</span> height<span class=\"token punctuation\" >:</span> <span class=\"token number\" >140</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token operator\" >&lt;</span>Dragger <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>plus<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Dragger</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> marginTop<span class=\"token punctuation\" >:</span> <span class=\"token number\" >16</span><span class=\"token punctuation\" >,</span> height<span class=\"token punctuation\" >:</span> <span class=\"token number\" >180</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token operator\" >&lt;</span>Dragger <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ant-upload-drag-icon<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>inbox<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ant-upload-text<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Click or drag file to <span class=\"token keyword\" >this</span> area to upload<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>p</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ant-upload-hint<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Support <span class=\"token keyword\" >for</span> a single or bulk upload<span class=\"token punctuation\" >.</span> Strictly prohibit <span class=\"token keyword\" >from</span> uploading company data or other band files<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>p</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Dragger</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Dragger = _upload2.default.Dragger;var props = { name: 'file',
	      showUploadList: false, action: '/upload.do', onChange: function onChange(info) {
	        if (info.file.status !== 'uploading') {
	          console.log(info.file, info.fileList);
	        }if (info.file.status === 'done') {
	          _message2.default.success(info.file.name + ' file uploaded successfully.');
	        } else if (info.file.status === 'error') {
	          _message2.default.error(info.file.name + ' file upload failed.');
	        }
	      }
	    };return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        { style: { width: 246,
	            height: 140 } },
	        _react2.default.createElement(
	          Dragger,
	          props,
	          _react2.default.createElement(_icon2.default, { type: 'plus' })
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: { marginTop: 16, height: 180 } },
	        _react2.default.createElement(
	          Dragger,
	          props,
	          _react2.default.createElement(
	            'p',
	            { className: 'ant-upload-drag-icon' },
	            _react2.default.createElement(_icon2.default, { type: 'inbox' })
	          ),
	          _react2.default.createElement(
	            'p',
	            { className: 'ant-upload-text' },
	            'Click or drag file to this area to upload'
	          ),
	          _react2.default.createElement(
	            'p',
	            { className: 'ant-upload-hint' },
	            'Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files'
	          )
	        )
	      )
	    );
	  }
	};

/***/ },

/***/ 993:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(98);

	var _upload = __webpack_require__(97);

	var _upload2 = _interopRequireDefault(_upload);

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style5 = __webpack_require__(10);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(14);

	var _icon = __webpack_require__(12);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "使用 ", ["code", "fileList"], " 对列表进行完全控制，可以实现各种自定义功能，以下演示三种情况："], ["p", "1) 上传列表数量的限制。"], ["p", "2) 读取远程路径并显示链接。"], ["p", "3) 按照服务器返回信息筛选成功上传的文件。"]],
	    "en-US": [["p", "You can gain full control over filelist by configuring ", ["code", "fileList"], ". You can accomplish all kinds of customed functions. The following shows three circumstances:"], ["p", "1) limit the number of uploaded files."], ["p", "2) read from response and show file link."], ["p", "3) filter successfully uploaded files according to response from server."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "完全控制的上传列表",
	      "en-US": "Complete control over file list"
	    },
	    "filename": "components/upload/demo/fileList.md",
	    "id": "components-upload-demo-fileList"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Upload<span class=\"token punctuation\" >,</span> Button<span class=\"token punctuation\" >,</span> Icon <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> MyUpload <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      fileList<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n        uid<span class=\"token punctuation\" >:</span> <span class=\"token operator\" >-</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >,</span>\n        name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'xxx.png'</span><span class=\"token punctuation\" >,</span>\n        status<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'done'</span><span class=\"token punctuation\" >,</span>\n        url<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'http://www.baidu.com/xxx.png'</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >handleChange</span><span class=\"token punctuation\" >(</span>info<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >let</span> fileList <span class=\"token operator\" >=</span> info<span class=\"token punctuation\" >.</span>fileList<span class=\"token punctuation\" >;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// 1. Limit the number of uploaded files</span>\n    <span class=\"token comment\" spellcheck=\"true\">//    Only to show two recent uploaded files, and old ones will be replaced by the new</span>\n    fileList <span class=\"token operator\" >=</span> fileList<span class=\"token punctuation\" >.</span><span class=\"token function\" >slice</span><span class=\"token punctuation\" >(</span><span class=\"token operator\" >-</span><span class=\"token number\" >2</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// 2. read from response and show file link</span>\n    fileList <span class=\"token operator\" >=</span> fileList<span class=\"token punctuation\" >.</span><span class=\"token function\" >map</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>file<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>file<span class=\"token punctuation\" >.</span>response<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// Component will show file.url as link</span>\n        file<span class=\"token punctuation\" >.</span>url <span class=\"token operator\" >=</span> file<span class=\"token punctuation\" >.</span>response<span class=\"token punctuation\" >.</span>url<span class=\"token punctuation\" >;</span>\n      <span class=\"token punctuation\" >}</span>\n      <span class=\"token keyword\" >return</span> file<span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// 3. filter successfully uploaded files according to response from server</span>\n    fileList <span class=\"token operator\" >=</span> fileList<span class=\"token punctuation\" >.</span><span class=\"token function\" >filter</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>file<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>file<span class=\"token punctuation\" >.</span>response<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >return</span> file<span class=\"token punctuation\" >.</span>response<span class=\"token punctuation\" >.</span>status <span class=\"token operator\" >===</span> <span class=\"token string\" >'success'</span><span class=\"token punctuation\" >;</span>\n      <span class=\"token punctuation\" >}</span>\n      <span class=\"token keyword\" >return</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> fileList <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> props <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n      action<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/upload.do'</span><span class=\"token punctuation\" >,</span>\n      onChange<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleChange<span class=\"token punctuation\" >,</span>\n      multiple<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token operator\" >&lt;</span>Upload <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >}</span> fileList<span class=\"token operator\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>fileList<span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>upload<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span> upload\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Upload</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MyUpload</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var MyUpload = _react2.default.createClass({
	      displayName: 'MyUpload',
	      getInitialState: function getInitialState() {
	        return { fileList: [{ uid: -1, name: 'xxx.png', status: 'done', url: 'http://www.baidu.com/xxx.png' }] };
	      },
	      handleChange: function handleChange(info) {
	        var fileList = info.fileList; // 1. Limit the number of uploaded files
	        //    Only to show two recent uploaded files, and old ones will be replaced by the new
	        fileList = fileList.slice(-2); // 2. read from response and show file link
	        fileList = fileList.map(function (file) {
	          if (file.response) {
	            // Component will show file.url as link
	            file.url = file.response.url;
	          }return file;
	        }); // 3. filter successfully uploaded files according to response from server
	        fileList = fileList.filter(function (file) {
	          if (file.response) {
	            return file.response.status === 'success';
	          }return true;
	        });this.setState({ fileList: fileList });
	      },
	      render: function render() {
	        var props = { action: '/upload.do', onChange: this.handleChange, multiple: true };return _react2.default.createElement(
	          _upload2.default,
	          (0, _extends3.default)({}, props, { fileList: this.state.fileList }),
	          _react2.default.createElement(
	            _button2.default,
	            { type: 'ghost' },
	            _react2.default.createElement(_icon2.default, { type: 'upload' }),
	            ' upload'
	          )
	        );
	      }
	    });return _react2.default.createElement(MyUpload, null);
	  }
	};

/***/ },

/***/ 994:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(98);

	var _upload = __webpack_require__(97);

	var _upload2 = _interopRequireDefault(_upload);

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
	    "zh-CN": [["p", "上传图片原位显示。"]],
	    "en-US": [["p", "Show uploaded image in-place."]]
	  },
	  "meta": {
	    "order": 9,
	    "title": {
	      "zh-CN": "上传图片原位显示",
	      "en-US": "Show uploaded image in-place"
	    },
	    "filename": "components/upload/demo/inplace.md",
	    "id": "components-upload-demo-inplace"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Upload<span class=\"token punctuation\" >,</span> Icon <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> Demo <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >handleChange</span><span class=\"token punctuation\" >(</span>info<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>info<span class=\"token punctuation\" >.</span>file<span class=\"token punctuation\" >.</span>status <span class=\"token operator\" >===</span> <span class=\"token string\" >'done'</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// Get this url from response in real world.</span>\n        imageUrl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg'</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> imageUrl <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>imageUrl<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Upload</span>\n        <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>avatar-uploader<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >name</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>avatar<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >showUploadList</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token boolean\" >false</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >action</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>/upload.do<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleChange<span class=\"token punctuation\" >}</span></span>\n      <span class=\"token punctuation\" >></span></span>\n        <span class=\"token punctuation\" >{</span>\n          imageUrl <span class=\"token operator\" >?</span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>img</span> <span class=\"token attr-name\" >src</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>imageUrl<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >role</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>presentation<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>avatar<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span> <span class=\"token punctuation\" >:</span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>plus<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>avatar-uploader-trigger<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token punctuation\" >}</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Upload</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Demo</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Demo = _react2.default.createClass({
	      displayName: 'Demo',
	      getInitialState: function getInitialState() {
	        return {};
	      },
	      handleChange: function handleChange(info) {
	        if (info.file.status === 'done') {
	          this.setState({ // Get this url from response in real world.
	            imageUrl: 'https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg' });
	        }
	      },
	      render: function render() {
	        var imageUrl = this.state.imageUrl;return _react2.default.createElement(
	          _upload2.default,
	          { className: 'avatar-uploader', name: 'avatar', showUploadList: false, action: '/upload.do', onChange: this.handleChange },
	          imageUrl ? _react2.default.createElement('img', { src: imageUrl, role: 'presentation', className: 'avatar' }) : _react2.default.createElement(_icon2.default, { type: 'plus', className: 'avatar-uploader-trigger' })
	        );
	      }
	    });return _react2.default.createElement(Demo, null);
	  },
	  "style": "#components-upload-demo-inplace .avatar-uploader,\n#components-upload-demo-inplace .avatar-uploader-trigger,\n#components-upload-demo-inplace .avatar {\n  width: 150px;\n  height: 150px;\n}\n#components-upload-demo-inplace .avatar-uploader {\n  display: block;\n  border: 1px solid #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n}\n#components-upload-demo-inplace .avatar-uploader-trigger {\n  display: table-cell;\n  vertical-align: middle;\n  font-size: 28px;\n}",
	  "highlightedStyle": "<span class=\"token selector\" ><span class=\"token id\" >#components-upload-demo-inplace</span> <span class=\"token class\" >.avatar-uploader</span>,\n<span class=\"token id\" >#components-upload-demo-inplace</span> <span class=\"token class\" >.avatar-uploader-trigger</span>,\n<span class=\"token id\" >#components-upload-demo-inplace</span> <span class=\"token class\" >.avatar</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >width</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >150</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >height</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >150</span>px<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n<span class=\"token selector\" ><span class=\"token id\" >#components-upload-demo-inplace</span> <span class=\"token class\" >.avatar-uploader</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >display</span><span class=\"token punctuation\" >:</span> block<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >border</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span>px solid <span class=\"token hexcode\" >#d9d9d9</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >border-radius</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >6</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >cursor</span><span class=\"token punctuation\" >:</span> pointer<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n<span class=\"token selector\" ><span class=\"token id\" >#components-upload-demo-inplace</span> <span class=\"token class\" >.avatar-uploader-trigger</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >display</span><span class=\"token punctuation\" >:</span> table-cell<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >vertical-align</span><span class=\"token punctuation\" >:</span> middle<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >font-size</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >28</span>px<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>"
	};

/***/ },

/***/ 995:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "meta": {}
	};

/***/ },

/***/ 996:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(63);

	var _modal = __webpack_require__(54);

	var _modal2 = _interopRequireDefault(_modal);

	var _style5 = __webpack_require__(98);

	var _upload = __webpack_require__(97);

	var _upload2 = _interopRequireDefault(_upload);

	var _style6 = __webpack_require__(14);

	var _icon = __webpack_require__(12);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "上传文件为图片，可展示本地缩略图。"]],
	    "en-US": [["p", "If uploade file is picture, a thumbnail can be shown."]]
	  },
	  "meta": {
	    "order": 8,
	    "title": {
	      "zh-CN": "图片卡片样式",
	      "en-US": "Pictures with card tyle"
	    },
	    "filename": "components/upload/demo/picture-card.md",
	    "id": "components-upload-demo-picture-card"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Upload<span class=\"token punctuation\" >,</span> Icon<span class=\"token punctuation\" >,</span> Modal <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> ImageUploadList <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      previewVisible<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n      previewImage<span class=\"token punctuation\" >:</span> <span class=\"token string\" >''</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >handleCancel</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      previewVisible<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> props <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n      action<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/upload.do'</span><span class=\"token punctuation\" >,</span>\n      listType<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'picture-card'</span><span class=\"token punctuation\" >,</span>\n      defaultFileList<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n        uid<span class=\"token punctuation\" >:</span> <span class=\"token operator\" >-</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >,</span>\n        name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'xxx.png'</span><span class=\"token punctuation\" >,</span>\n        status<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'done'</span><span class=\"token punctuation\" >,</span>\n        url<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'</span><span class=\"token punctuation\" >,</span>\n        thumbUrl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'</span><span class=\"token punctuation\" >,</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n      onPreview<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >(</span>file<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n          previewImage<span class=\"token punctuation\" >:</span> file<span class=\"token punctuation\" >.</span>url<span class=\"token punctuation\" >,</span>\n          previewVisible<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span><span class=\"token punctuation\" >,</span>\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>clearfix<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token operator\" >&lt;</span>Upload <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>plus<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ant-upload-text<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Upload<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Upload</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >target</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_blank<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >rel</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>noopener</span> <span class=\"token attr-name\" >noreferrer\"</span> <span class=\"token attr-name\" >className</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>upload-example<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>img</span> <span class=\"token attr-name\" >alt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>example<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >src</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>sample<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Modal</span> <span class=\"token attr-name\" >visible</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>previewVisible<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >footer</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >null</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onCancel</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleCancel<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>img</span> <span class=\"token attr-name\" >alt</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>example<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >src</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>previewImage<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Modal</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ImageUploadList</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var ImageUploadList = _react2.default.createClass({
	      displayName: 'ImageUploadList',
	      getInitialState: function getInitialState() {
	        return { previewVisible: false, previewImage: '' };
	      },
	      handleCancel: function handleCancel() {
	        this.setState({ previewVisible: false });
	      },
	      render: function render() {
	        var _this = this;

	        var props = { action: '/upload.do', listType: 'picture-card', defaultFileList: [{ uid: -1, name: 'xxx.png', status: 'done', url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png', thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png' }], onPreview: function onPreview(file) {
	            _this.setState({ previewImage: file.url,
	              previewVisible: true });
	          } };return _react2.default.createElement(
	          'div',
	          { className: 'clearfix' },
	          _react2.default.createElement(
	            _upload2.default,
	            props,
	            _react2.default.createElement(_icon2.default, { type: 'plus' }),
	            _react2.default.createElement(
	              'div',
	              { className: 'ant-upload-text' },
	              'Upload'
	            )
	          ),
	          _react2.default.createElement(
	            'a',
	            { href: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png', target: '_blank', rel: 'noopener noreferrer', className: 'upload-example' },
	            _react2.default.createElement('img', { alt: 'example', src: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png' }),
	            _react2.default.createElement(
	              'span',
	              null,
	              'sample'
	            )
	          ),
	          _react2.default.createElement(
	            _modal2.default,
	            { visible: this.state.previewVisible, footer: null, onCancel: this.handleCancel },
	            _react2.default.createElement('img', { alt: 'example', src: this.state.previewImage })
	          )
	        );
	      }
	    });return _react2.default.createElement(ImageUploadList, null);
	  },
	  "style": "/* you can make up upload button and sample style by using stylesheets */\n.ant-upload-select-picture-card i {\n  font-size: 28px;\n  color: #999;\n}\n\n.ant-upload-select-picture-card .ant-upload-text {\n  margin-top: 8px;\n  font-size: 12px;\n  color: #666;\n}\n\n.upload-example {\n  position: relative;\n  display: inline-block;\n  height: 96px;\n  width: 96px;\n  padding: 8px;\n  border: 1px solid #d9d9d9;\n  border-radius: 6px;\n  vertical-align: top;\n}\n\n.upload-example img {\n  height: 78px;\n  width: 78px;\n}\n\n.upload-example:before {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n  content: ' ';\n  width: 78px;\n  height: 24px;\n  background-color: #808080;\n  opacity: .8;\n}\n\n.upload-example span {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n  width: 78px;\n  height: 24px;\n  color: #fff;\n  line-height: 24px;\n  text-align: center;\n}",
	  "highlightedStyle": "<span class=\"token comment\" spellcheck=\"true\">/* you can make up upload button and sample style by using stylesheets */</span>\n<span class=\"token selector\" ><span class=\"token class\" >.ant-upload-select-picture-card</span> i </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >font-size</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >28</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >color</span><span class=\"token punctuation\" >:</span> <span class=\"token hexcode\" >#999</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.ant-upload-select-picture-card</span> <span class=\"token class\" >.ant-upload-text</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >margin-top</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >8</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >font-size</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >12</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >color</span><span class=\"token punctuation\" >:</span> <span class=\"token hexcode\" >#666</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.upload-example</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >position</span><span class=\"token punctuation\" >:</span> relative<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >display</span><span class=\"token punctuation\" >:</span> inline-block<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >height</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >96</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >width</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >96</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >padding</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >8</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >border</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span>px solid <span class=\"token hexcode\" >#d9d9d9</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >border-radius</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >6</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >vertical-align</span><span class=\"token punctuation\" >:</span> top<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.upload-example</span> img </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >height</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >78</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >width</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >78</span>px<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.upload-example</span><span class=\"token pseudo-element\" >:before</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >position</span><span class=\"token punctuation\" >:</span> absolute<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >bottom</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >8</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >left</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >8</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >content</span><span class=\"token punctuation\" >:</span> <span class=\"token string\" >' '</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >width</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >78</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >height</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >24</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >background-color</span><span class=\"token punctuation\" >:</span> <span class=\"token hexcode\" >#808080</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >opacity</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >.8</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token selector\" ><span class=\"token class\" >.upload-example</span> span </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >position</span><span class=\"token punctuation\" >:</span> absolute<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >bottom</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >8</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >left</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >8</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >width</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >78</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >height</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >24</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >color</span><span class=\"token punctuation\" >:</span> <span class=\"token hexcode\" >#fff</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >line-height</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >24</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >text-align</span><span class=\"token punctuation\" >:</span> center<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>"
	};

/***/ },

/***/ 997:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style4 = __webpack_require__(98);

	var _upload = __webpack_require__(97);

	var _upload2 = _interopRequireDefault(_upload);

	var _style5 = __webpack_require__(10);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(14);

	var _icon = __webpack_require__(12);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "上传文件为图片，可展示本地缩略图。", ["code", "IE8/9"], " 不支持浏览器本地缩略图展示（", ["a", {
	      "title": null,
	      "href": "https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL"
	    }, "Ref"], "），可以写 ", ["code", "thumbUrl"], " 属性来代替。"]],
	    "en-US": [["p", "If uploade file is picture, a thumbnail can be shown. ", ["code", "IE8/9"], " do not support local thumbnail show. Please use ", ["code", "thumbUrl"], " instead."]]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "图片列表样式",
	      "en-US": "Pictures with list style"
	    },
	    "filename": "components/upload/demo/picture-style.md",
	    "id": "components-upload-demo-picture-style"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Upload<span class=\"token punctuation\" >,</span> Button<span class=\"token punctuation\" >,</span> Icon <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> props <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n  action<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'/upload.do'</span><span class=\"token punctuation\" >,</span>\n  listType<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'picture'</span><span class=\"token punctuation\" >,</span>\n  defaultFileList<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >{</span>\n    uid<span class=\"token punctuation\" >:</span> <span class=\"token operator\" >-</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >,</span>\n    name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'xxx.png'</span><span class=\"token punctuation\" >,</span>\n    status<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'done'</span><span class=\"token punctuation\" >,</span>\n    url<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'</span><span class=\"token punctuation\" >,</span>\n    thumbUrl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span> <span class=\"token punctuation\" >{</span>\n    uid<span class=\"token punctuation\" >:</span> <span class=\"token operator\" >-</span><span class=\"token number\" >2</span><span class=\"token punctuation\" >,</span>\n    name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'yyy.png'</span><span class=\"token punctuation\" >,</span>\n    status<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'done'</span><span class=\"token punctuation\" >,</span>\n    url<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'</span><span class=\"token punctuation\" >,</span>\n    thumbUrl<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token operator\" >&lt;</span>Upload <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>upload<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span> upload\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Upload</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token operator\" >&lt;</span>Upload <span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >}</span> className<span class=\"token operator\" >=</span><span class=\"token string\" >\"upload-list-inline\"</span><span class=\"token operator\" >></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>upload<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span> upload\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Upload</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var props = { action: '/upload.do', listType: 'picture', defaultFileList: [{ uid: -1, name: 'xxx.png', status: 'done', url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png', thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png' }, { uid: -2, name: 'yyy.png',
	        status: 'done', url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png', thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png' }] };return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _upload2.default,
	        props,
	        _react2.default.createElement(
	          _button2.default,
	          { type: 'ghost' },
	          _react2.default.createElement(_icon2.default, { type: 'upload' }),
	          ' upload'
	        )
	      ),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(
	        _upload2.default,
	        (0, _extends3.default)({}, props, { className: 'upload-list-inline' }),
	        _react2.default.createElement(
	          _button2.default,
	          { type: 'ghost' },
	          _react2.default.createElement(_icon2.default, { type: 'upload' }),
	          ' upload'
	        )
	      )
	    );
	  },
	  "style": "/* tile uploaded pictures */\n.upload-list-inline .ant-upload-list-item {\n  display: inline-block;\n  width: 200px;\n  margin-right: 8px;\n}",
	  "highlightedStyle": "<span class=\"token comment\" spellcheck=\"true\">/* tile uploaded pictures */</span>\n<span class=\"token selector\" ><span class=\"token class\" >.upload-list-inline</span> <span class=\"token class\" >.ant-upload-list-item</span> </span><span class=\"token punctuation\" >{</span>\n  <span class=\"token property\" >display</span><span class=\"token punctuation\" >:</span> inline-block<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >width</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >200</span>px<span class=\"token punctuation\" >;</span>\n  <span class=\"token property\" >margin-right</span><span class=\"token punctuation\" >:</span> <span class=\"token number\" >8</span>px<span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>"
	};

/***/ },

/***/ 1196:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(989),
	    'beforeUpload': __webpack_require__(990),
	    'defaultFileList': __webpack_require__(991),
	    'drag': __webpack_require__(992),
	    'fileList': __webpack_require__(993),
	    'inplace': __webpack_require__(994),
	    'multiple': __webpack_require__(995),
	    'picture-card': __webpack_require__(996),
	    'picture-style': __webpack_require__(997),
	}

/***/ }

});