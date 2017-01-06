webpackJsonp([11,209],{

/***/ 1014:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(122);

	var _upload = __webpack_require__(121);

	var _upload2 = _interopRequireDefault(_upload);

	var _style5 = __webpack_require__(14);

	var _icon = __webpack_require__(9);

	var _icon2 = _interopRequireDefault(_icon);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _style6 = __webpack_require__(60);

	var _message = __webpack_require__(59);

	var _message2 = _interopRequireDefault(_message);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "点击上传用户头像，并使用 ", ["code", "beforeUpload"], " 限制用户上传的图片格式和大小。"], ["blockquote", ["p", ["code", "beforeUpload"], " 的返回值可以是一个 Promise 以支持也支持异步检查：", ["a", {
	      "title": null,
	      "href": "http://react-component.github.io/upload/examples/beforeUpload.html"
	    }, "示例"], "。"]]],
	    "en-US": [["p", "Click to upload user's avatar, and validate size and format of picture with ", ["code", "beforeUpload"], "."], ["blockquote", ["p", "The return value of function ", ["code", "beforeUpload"], " can be a Promise to check asynchronously. ", ["a", {
	      "title": null,
	      "href": "http://react-component.github.io/upload/examples/beforeUpload.html"
	    }, "demo"]]]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "用户头像",
	      "en-US": "Avatar"
	    },
	    "filename": "components/upload/demo/avatar.md",
	    "id": "components-upload-demo-avatar"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> message <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">getBase64</span><span class=\"token punctuation\">(</span>img<span class=\"token punctuation\">,</span> callback<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> reader <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">FileReader</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  reader<span class=\"token punctuation\">.</span><span class=\"token function\">addEventListener</span><span class=\"token punctuation\">(</span><span class=\"token string\">'load'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>reader<span class=\"token punctuation\">.</span>result<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  reader<span class=\"token punctuation\">.</span><span class=\"token function\">readAsDataURL</span><span class=\"token punctuation\">(</span>img<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">beforeUpload</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> isJPG <span class=\"token operator\">=</span> file<span class=\"token punctuation\">.</span>type <span class=\"token operator\">===</span> <span class=\"token string\">'image/jpeg'</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>isJPG<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token string\">'You can only upload JPG file!'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">const</span> isLt2M <span class=\"token operator\">=</span> file<span class=\"token punctuation\">.</span>size <span class=\"token operator\">/</span> <span class=\"token number\">1024</span> <span class=\"token operator\">/</span> <span class=\"token number\">1024</span> <span class=\"token operator\">&lt;</span> <span class=\"token number\">2</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>isLt2M<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Image must smaller than 2MB!'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> isJPG <span class=\"token operator\">&amp;&amp;</span> isLt2M<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Avatar</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token comment\" spellcheck=\"true\">// Get this url from response in real world.</span>\n      <span class=\"token function\">getBase64</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>originFileObj<span class=\"token punctuation\">,</span> imageUrl <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> imageUrl <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> imageUrl <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>imageUrl<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Upload</span>\n        <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>avatar-uploader<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>avatar<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">showUploadList</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">action</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/upload.do<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">beforeUpload</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>beforeUpload<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>\n          imageUrl <span class=\"token operator\">?</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">src</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>imageUrl<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">role</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>presentation<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>avatar<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> <span class=\"token punctuation\">:</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>plus<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>avatar-uploader-trigger<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Avatar</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    function getBase64(img, callback) {
	      var reader = new FileReader();reader.addEventListener('load', function () {
	        return callback(reader.result);
	      });reader.readAsDataURL(img);
	    }function beforeUpload(file) {
	      var isJPG = file.type === 'image/jpeg';if (!isJPG) {
	        _message2.default.error('You can only upload JPG file!');
	      }var isLt2M = file.size / 1024 / 1024 < 2;if (!isLt2M) {
	        _message2.default.error('Image must smaller than 2MB!');
	      }return isJPG && isLt2M;
	    }
	    var Avatar = function (_React$Component) {
	      (0, _inherits3.default)(Avatar, _React$Component);

	      function Avatar() {
	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, Avatar);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _this.handleChange = function (info) {
	          if (info.file.status === 'done') {
	            // Get this url from response in real world.
	            getBase64(info.file.originFileObj, function (imageUrl) {
	              return _this.setState({ imageUrl: imageUrl });
	            });
	          }
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      }

	      Avatar.prototype.render = function render() {
	        var imageUrl = this.state.imageUrl;return _react2.default.createElement(
	          _upload2.default,
	          { className: 'avatar-uploader', name: 'avatar', showUploadList: false, action: '/upload.do', beforeUpload: beforeUpload, onChange: this.handleChange },
	          imageUrl ? _react2.default.createElement('img', { src: imageUrl, role: 'presentation', className: 'avatar' }) : _react2.default.createElement(_icon2.default, { type: 'plus', className: 'avatar-uploader-trigger' })
	        );
	      };

	      return Avatar;
	    }(_react2.default.Component);

	    return _react2.default.createElement(Avatar, null);
	  },
	  "style": ".avatar-uploader,\n.avatar-uploader-trigger,\n.avatar {\n  width: 150px;\n  height: 150px;\n}\n.avatar-uploader {\n  display: block;\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.avatar-uploader-trigger {\n  display: table-cell;\n  vertical-align: middle;\n  font-size: 28px;\n  color: #999;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.avatar-uploader</span>,\n<span class=\"token class\">.avatar-uploader-trigger</span>,\n<span class=\"token class\">.avatar</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">150</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">150</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.avatar-uploader</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> block<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px dashed <span class=\"token hexcode\">#d9d9d9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">cursor</span><span class=\"token punctuation\">:</span> pointer<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.avatar-uploader-trigger</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> table-cell<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">vertical-align</span><span class=\"token punctuation\">:</span> middle<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">28</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1015:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(122);

	var _upload = __webpack_require__(121);

	var _upload2 = _interopRequireDefault(_upload);

	var _style6 = __webpack_require__(11);

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _style7 = __webpack_require__(14);

	var _icon = __webpack_require__(9);

	var _icon2 = _interopRequireDefault(_icon);

	var _style8 = __webpack_require__(60);

	var _message = __webpack_require__(59);

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
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'file'</span><span class=\"token punctuation\">,</span>\n  action<span class=\"token punctuation\">:</span> <span class=\"token string\">'/upload.do'</span><span class=\"token punctuation\">,</span>\n  headers<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    authorization<span class=\"token punctuation\">:</span> <span class=\"token string\">'authorization-text'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">!==</span> <span class=\"token string\">'uploading'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">,</span> info<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file uploaded successfully`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file upload failed.`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Upload <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ghost<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Click to Upload\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

/***/ 1016:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(122);

	var _upload = __webpack_require__(121);

	var _upload2 = _interopRequireDefault(_upload);

	var _style5 = __webpack_require__(11);

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(14);

	var _icon = __webpack_require__(9);

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
	    "order": 2,
	    "title": {
	      "zh-CN": "传入已上传的文件",
	      "en-US": "Set files that have been uploaded"
	    },
	    "filename": "components/upload/demo/defaultFileList.md",
	    "id": "components-upload-demo-defaultFileList"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  action<span class=\"token punctuation\">:</span> <span class=\"token string\">'/upload.do'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">!==</span> <span class=\"token string\">'uploading'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  defaultFileList<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    uid<span class=\"token punctuation\">:</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'xxx.png'</span><span class=\"token punctuation\">,</span>\n    status<span class=\"token punctuation\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n    url<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://www.baidu.com/xxx.png'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    uid<span class=\"token punctuation\">:</span> <span class=\"token operator\">-</span><span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'yyy.png'</span><span class=\"token punctuation\">,</span>\n    status<span class=\"token punctuation\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n    url<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://www.baidu.com/yyy.png'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Upload <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ghost<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Upload\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

/***/ 1017:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(14);

	var _icon = __webpack_require__(9);

	var _icon2 = _interopRequireDefault(_icon);

	var _style5 = __webpack_require__(60);

	var _message = __webpack_require__(59);

	var _message2 = _interopRequireDefault(_message);

	var _style6 = __webpack_require__(122);

	var _upload = __webpack_require__(121);

	var _upload2 = _interopRequireDefault(_upload);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "把文件拖入指定区域，完成上传，同样支持点击上传。"], ["p", "设置 ", ["code", "multiple"], " 后，在 ", ["code", "IE10+"], " 可以一次上传多个文件。"]],
	    "en-US": [["p", "You can drag files to a specific area, to upload. Alternatively, you can also upload by selecting."], ["p", "We can upload serveral files at once in modern browsers by giving the input the ", ["code", "multiple"], " attribute."]]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "拖拽上传",
	      "en-US": "Drag and Drop"
	    },
	    "filename": "components/upload/demo/drag.md",
	    "id": "components-upload-demo-drag"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> message <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> Dragger <span class=\"token operator\">=</span> Upload<span class=\"token punctuation\">.</span>Dragger<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'file'</span><span class=\"token punctuation\">,</span>\n  multiple<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  showUploadList<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  action<span class=\"token punctuation\">:</span> <span class=\"token string\">'/upload.do'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> status <span class=\"token operator\">=</span> info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">!==</span> <span class=\"token string\">'uploading'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">,</span> info<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file uploaded successfully.`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file upload failed.`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginTop<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> height<span class=\"token punctuation\">:</span> <span class=\"token number\">180</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token operator\">&lt;</span>Dragger <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-drag-icon<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>inbox<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Click or drag file to <span class=\"token keyword\">this</span> area to upload<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-hint<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Support <span class=\"token keyword\">for</span> a single or bulk upload<span class=\"token punctuation\">.</span> Strictly prohibit <span class=\"token keyword\">from</span> uploading company data or other band files<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Dragger</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Dragger = _upload2.default.Dragger;var props = { name: 'file', multiple: true, showUploadList: false, action: '/upload.do',
	      onChange: function onChange(info) {
	        var status = info.file.status;if (status !== 'uploading') {
	          console.log(info.file, info.fileList);
	        }if (status === 'done') {
	          _message2.default.success(info.file.name + ' file uploaded successfully.');
	        } else if (status === 'error') {
	          _message2.default.error(info.file.name + ' file upload failed.');
	        }
	      }
	    };return _react2.default.createElement(
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
	    );
	  }
	};

/***/ },

/***/ 1018:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(122);

	var _upload = __webpack_require__(121);

	var _upload2 = _interopRequireDefault(_upload);

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style5 = __webpack_require__(11);

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(14);

	var _icon = __webpack_require__(9);

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
	    "order": 4,
	    "title": {
	      "zh-CN": "完全控制的上传列表",
	      "en-US": "Complete control over file list"
	    },
	    "filename": "components/upload/demo/fileList.md",
	    "id": "components-upload-demo-fileList"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> MyUpload <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      fileList<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n        uid<span class=\"token punctuation\">:</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'xxx.png'</span><span class=\"token punctuation\">,</span>\n        status<span class=\"token punctuation\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n        url<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://www.baidu.com/xxx.png'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> fileList <span class=\"token operator\">=</span> info<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// 1. Limit the number of uploaded files</span>\n    <span class=\"token comment\" spellcheck=\"true\">//    Only to show two recent uploaded files, and old ones will be replaced by the new</span>\n    fileList <span class=\"token operator\">=</span> fileList<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token operator\">-</span><span class=\"token number\">2</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// 2. read from response and show file link</span>\n    fileList <span class=\"token operator\">=</span> fileList<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">.</span>response<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// Component will show file.url as link</span>\n        file<span class=\"token punctuation\">.</span>url <span class=\"token operator\">=</span> file<span class=\"token punctuation\">.</span>response<span class=\"token punctuation\">.</span>url<span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      <span class=\"token keyword\">return</span> file<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// 3. filter successfully uploaded files according to response from server</span>\n    fileList <span class=\"token operator\">=</span> fileList<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">.</span>response<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> file<span class=\"token punctuation\">.</span>response<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'success'</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      <span class=\"token keyword\">return</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> fileList <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      action<span class=\"token punctuation\">:</span> <span class=\"token string\">'/upload.do'</span><span class=\"token punctuation\">,</span>\n      onChange<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">,</span>\n      multiple<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Upload <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span> fileList<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ghost<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> upload\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>MyUpload</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

/***/ 1019:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(69);

	var _modal = __webpack_require__(61);

	var _modal2 = _interopRequireDefault(_modal);

	var _style5 = __webpack_require__(122);

	var _upload = __webpack_require__(121);

	var _upload2 = _interopRequireDefault(_upload);

	var _style6 = __webpack_require__(14);

	var _icon = __webpack_require__(9);

	var _icon2 = _interopRequireDefault(_icon);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "用户可以上传图片并在列表中显示缩略图。当上传照片数到达限制后，上传按钮消失。"]],
	    "en-US": [["p", "After users upload picture, the thumbnail will be shown in list. The upload button will disappear when count meets limitation."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "照片墙",
	      "en-US": "Pictures Wall"
	    },
	    "filename": "components/upload/demo/picture-card.md",
	    "id": "components-upload-demo-picture-card"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Modal <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">PicturesWall</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    previewVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    previewImage<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n    fileList<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      uid<span class=\"token punctuation\">:</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token string\">'xxx.png'</span><span class=\"token punctuation\">,</span>\n      status<span class=\"token punctuation\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n      url<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleCancel <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> previewVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n\n  handlePreview <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      previewImage<span class=\"token punctuation\">:</span> file<span class=\"token punctuation\">.</span>url <span class=\"token operator\">||</span> file<span class=\"token punctuation\">.</span>thumbUrl<span class=\"token punctuation\">,</span>\n      previewVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> fileList <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> fileList <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> previewVisible<span class=\"token punctuation\">,</span> previewImage<span class=\"token punctuation\">,</span> fileList <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> uploadButton <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>plus<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Upload<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>clearfix<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Upload</span>\n          <span class=\"token attr-name\">action</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/upload.do<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">listType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>picture-card<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">fileList</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>fileList<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onPreview</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handlePreview<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span>fileList<span class=\"token punctuation\">.</span>length <span class=\"token operator\">>=</span> <span class=\"token number\">3</span> <span class=\"token operator\">?</span> <span class=\"token keyword\">null</span> <span class=\"token punctuation\">:</span> uploadButton<span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Modal</span> <span class=\"token attr-name\">visible</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>previewVisible<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">footer</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">null</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onCancel</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleCancel<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">alt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>example<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">src</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>previewImage<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Modal</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>PicturesWall</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var PicturesWall = function (_React$Component) {
	      (0, _inherits3.default)(PicturesWall, _React$Component);

	      function PicturesWall() {
	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, PicturesWall);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { previewVisible: false, previewImage: '',
	          fileList: [{ uid: -1, name: 'xxx.png', status: 'done', url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }] }, _this.handleCancel = function () {
	          return _this.setState({ previewVisible: false });
	        }, _this.handlePreview = function (file) {
	          _this.setState({ previewImage: file.url || file.thumbUrl, previewVisible: true });
	        }, _this.handleChange = function (_ref) {
	          var fileList = _ref.fileList;
	          return _this.setState({ fileList: fileList });
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      }

	      PicturesWall.prototype.render = function render() {
	        var _state = this.state,
	            previewVisible = _state.previewVisible,
	            previewImage = _state.previewImage,
	            fileList = _state.fileList;
	        var uploadButton = _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_icon2.default, { type: 'plus' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'ant-upload-text' },
	            'Upload'
	          )
	        );return _react2.default.createElement(
	          'div',
	          { className: 'clearfix' },
	          _react2.default.createElement(
	            _upload2.default,
	            { action: '/upload.do', listType: 'picture-card', fileList: fileList, onPreview: this.handlePreview, onChange: this.handleChange },
	            fileList.length >= 3 ? null : uploadButton
	          ),
	          _react2.default.createElement(
	            _modal2.default,
	            { visible: previewVisible, footer: null, onCancel: this.handleCancel },
	            _react2.default.createElement('img', { alt: 'example', style: { width: '100%' }, src: previewImage })
	          )
	        );
	      };

	      return PicturesWall;
	    }(_react2.default.Component);

	    return _react2.default.createElement(PicturesWall, null);
	  },
	  "style": "/* you can make up upload button and sample style by using stylesheets */\n.ant-upload-select-picture-card i {\n  font-size: 28px;\n  color: #999;\n}\n\n.ant-upload-select-picture-card .ant-upload-text {\n  margin-top: 8px;\n  font-size: 12px;\n  color: #666;\n}",
	  "highlightedStyle": "<span class=\"token comment\" spellcheck=\"true\">/* you can make up upload button and sample style by using stylesheets */</span>\n<span class=\"token selector\"><span class=\"token class\">.ant-upload-select-picture-card</span> i </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">28</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.ant-upload-select-picture-card</span> <span class=\"token class\">.ant-upload-text</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#666</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1020:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style4 = __webpack_require__(122);

	var _upload = __webpack_require__(121);

	var _upload2 = _interopRequireDefault(_upload);

	var _style5 = __webpack_require__(11);

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(14);

	var _icon = __webpack_require__(9);

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
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  action<span class=\"token punctuation\">:</span> <span class=\"token string\">'/upload.do'</span><span class=\"token punctuation\">,</span>\n  listType<span class=\"token punctuation\">:</span> <span class=\"token string\">'picture'</span><span class=\"token punctuation\">,</span>\n  defaultFileList<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    uid<span class=\"token punctuation\">:</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'xxx.png'</span><span class=\"token punctuation\">,</span>\n    status<span class=\"token punctuation\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n    url<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'</span><span class=\"token punctuation\">,</span>\n    thumbUrl<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    uid<span class=\"token punctuation\">:</span> <span class=\"token operator\">-</span><span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'yyy.png'</span><span class=\"token punctuation\">,</span>\n    status<span class=\"token punctuation\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n    url<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'</span><span class=\"token punctuation\">,</span>\n    thumbUrl<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token operator\">&lt;</span>Upload <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ghost<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> upload\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token operator\">&lt;</span>Upload <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span> className<span class=\"token operator\">=</span><span class=\"token string\">\"upload-list-inline\"</span><span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ghost<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> upload\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var props = { action: '/upload.do', listType: 'picture', defaultFileList: [{ uid: -1, name: 'xxx.png', status: 'done', url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }, { uid: -2, name: 'yyy.png', status: 'done',
	        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
	        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }] };return _react2.default.createElement(
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
	  "highlightedStyle": "<span class=\"token comment\" spellcheck=\"true\">/* tile uploaded pictures */</span>\n<span class=\"token selector\"><span class=\"token class\">.upload-list-inline</span> <span class=\"token class\">.ant-upload-list-item</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> inline-block<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1248:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'avatar': __webpack_require__(1014),
	    'basic': __webpack_require__(1015),
	    'defaultFileList': __webpack_require__(1016),
	    'drag': __webpack_require__(1017),
	    'fileList': __webpack_require__(1018),
	    'picture-card': __webpack_require__(1019),
	    'picture-style': __webpack_require__(1020),
	}

/***/ }

});