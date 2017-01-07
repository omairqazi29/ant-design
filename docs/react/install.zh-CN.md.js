webpackJsonp([90,209],{

/***/ 1763:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", ["h2", "使用 npm 安装"], ["p", ["strong", "我们推荐使用 npm 的方式进行开发"], "，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。"], ["p", "可以通过 npm 直接安装到项目中，使用 ", ["code", "import"], " 或 ", ["code", "require"], " 进行引用。"], ["p", "稳定版："], ["p", ["a", {
	    "title": null,
	    "href": "https://www.npmjs.org/package/antd"
	  }, ["img", {
	    "title": null,
	    "src": "https://img.shields.io/npm/v/antd.svg?style=flat-square",
	    "alt": "npm package"
	  }]]], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> antd --save"
	  }, ["code", "$ npm install antd --save"]], ["p", "你可以订阅：", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/releases.atom"
	  }, "https://github.com/ant-design/ant-design/releases.atom"], " 来获得稳定版发布的通知。"], ["p", "开发版本："], ["p", ["a", {
	    "title": null,
	    "href": "https://www.npmjs.org/package/antd"
	  }, ["img", {
	    "title": null,
	    "src": "https://cnpmjs.org/badge/v/antd.svg?&tag=beta&subject=npm",
	    "alt": null
	  }]]], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> antd@beta --save"
	  }, ["code", "$ npm install antd@beta --save"]], ["h2", "浏览器引入"], ["p", ["a", {
	    "title": null,
	    "href": "https://cdnjs.com/libraries/antd"
	  }, ["img", {
	    "title": null,
	    "src": "https://img.shields.io/cdnjs/v/antd.svg?style=flat-square",
	    "alt": "CDNJS"
	  }]]], ["p", "我们在 npm 发布包内的 ", ["code", "antd/dist"], " 目录下提供了 ", ["code", "antd.js"], " ", ["code", "antd.css"], " 以及 ", ["code", "antd.min.js"], " ", ["code", "antd.min.css"], " 用于一次性引入所有的 antd 组件，也可以通过 ", ["a", {
	    "title": null,
	    "href": "https://unpkg.com/"
	  }, "UNPKG"], " 进行下载。"], ["blockquote", ["p", "不推荐使用构建文件，因为难以获得底层依赖模块的 bug 快速修复支持。"]], ["h4", "stable"], ["ul", ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://unpkg.com/antd/dist/antd.js"
	  }, "https://unpkg.com/antd/dist/antd.js"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://unpkg.com/antd/dist/antd.css"
	  }, "https://unpkg.com/antd/dist/antd.css"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://unpkg.com/antd/dist/antd.min.js"
	  }, "https://unpkg.com/antd/dist/antd.min.js"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://unpkg.com/antd/dist/antd.min.css"
	  }, "https://unpkg.com/antd/dist/antd.min.css"]]]], ["h4", "beta"], ["ul", ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://unpkg.com/antd@beta/dist/antd.js"
	  }, "https://unpkg.com/antd@beta/dist/antd.js"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://unpkg.com/antd@beta/dist/antd.css"
	  }, "https://unpkg.com/antd@beta/dist/antd.css"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://unpkg.com/antd@beta/dist/antd.min.js"
	  }, "https://unpkg.com/antd@beta/dist/antd.min.js"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://unpkg.com/antd@beta/dist/antd.min.css"
	  }, "https://unpkg.com/antd@beta/dist/antd.min.css"]]]], ["blockquote", ["p", "对于 1.0 之前的版本，这里有一个 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/antd-init/tree/master/examples/build-antd-standalone"
	  }, "自行构建的例子"], " 以供参考。"]], ["h2", "开发工具"], ["p", "我们提供了 React 前端应用开发的 ", ["a", {
	    "title": null,
	    "href": "https://github.com/dvajs/dva-cli"
	  }, "脚手架工具"], "，可以安装到全局直接使用。"], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> dva-cli -g"
	  }, ["code", "$ npm install dva-cli -g"]], ["p", "运行 ", ["code", "dva new myapp"], " 可以初始化一个 React 的前端应用。"], ["p", "最新的脚手架结构可以到这里 ", ["a", {
	    "title": null,
	    "href": "https://github.com/dvajs/dva-cli/tree/master/boilerplates"
	  }, "查看"], "，建议持续关注更新以便获得最新的开发工程特性。"], ["blockquote", ["p", "更多开发工具的", ["a", {
	    "title": null,
	    "href": "https://github.com/sorrycc/roadhog"
	  }, "特性"], "。"]]],
	  "meta": {
	    "order": 2,
	    "title": "安装",
	    "filename": "docs/react/install.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#使用-npm-安装"
	  }, "使用 npm 安装"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#浏览器引入"
	  }, "浏览器引入"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#开发工具"
	  }, "开发工具"]]]
	};

/***/ }

});