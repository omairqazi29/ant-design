webpackJsonp([90,206],{

/***/ 1746:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", ["h2", "Using npm to install"], ["p", ["strong", "We recommend using npm to install"], "，it not only makes development easier，but you can also take advantage of the whole ecosystem."], ["p", "If using npm to install, you could use ", ["code", "import"], " or ", ["code", "require"], "."], ["p", "Stable version："], ["p", ["a", {
	    "title": null,
	    "href": "https://www.npmjs.org/package/antd"
	  }, ["img", {
	    "title": null,
	    "src": "https://img.shields.io/npm/v/antd.svg?style=flat-square",
	    "alt": "npm package"
	  }]]], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> antd --save"
	  }, ["code", "$ npm install antd --save"]], ["p", "You can subscribe to this feed for new version notification: ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/releases.atom"
	  }, "https://github.com/ant-design/ant-design/releases.atom"]], ["p", "Beta version："], ["p", ["a", {
	    "title": null,
	    "href": "https://www.npmjs.org/package/antd"
	  }, ["img", {
	    "title": null,
	    "src": "https://cnpmjs.org/badge/v/antd.svg?&tag=beta&subject=npm",
	    "alt": null
	  }]]], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> antd@beta --save"
	  }, ["code", "$ npm install antd@beta --save"]], ["h2", "Import in Browser"], ["p", ["a", {
	    "title": null,
	    "href": "https://cdnjs.com/libraries/antd"
	  }, ["img", {
	    "title": null,
	    "src": "https://img.shields.io/cdnjs/v/antd.svg?style=flat-square",
	    "alt": "CDNJS"
	  }]]], ["p", "We provide ", ["code", "antd.js"], " ", ["code", "antd.css"], " and ", ["code", "antd.min.js"], " ", ["code", "antd.min.css"], " under ", ["code", "antd/dist"], " in antd's npm package, in order to import all the components of antd directly. Also, you can use ", ["a", {
	    "title": null,
	    "href": "https://unpkg.com/"
	  }, "unpkg"], "."], ["blockquote", ["p", "It's not recommended to use the already built files, as you cannot get bugfixes from the dependencies of antd."]], ["h4", "stable"], ["ul", ["li", ["p", ["a", {
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
	  }, "https://unpkg.com/antd@beta/dist/antd.min.css"]]]], ["blockquote", ["p", "Here is an ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/antd-init/tree/master/examples/build-antd-standalone"
	  }, "example"], " of how to build your own antd.js if you are using antd@<1.0.0."]], ["h2", "Development tool"], ["p", "We provide React components ", ["a", {
	    "title": null,
	    "href": "https://github.com/dvajs/dva-cli"
	  }, "Scaffold tool"], "."], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> dva-cli -g"
	  }, ["code", "$ npm install dva-cli -g"]], ["p", "Run ", ["code", "dva new myapp"], " to init a React application."], ["p", "You can explore the latest structure of scaffold ", ["a", {
	    "title": null,
	    "href": "https://github.com/dvajs/dva-cli/tree/master/boilerplates"
	  }, "here"], ", it is a good habit to watch this repo to get the latest features."], ["blockquote", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/sorrycc/roadhog"
	  }, "More development tool features"], "。"]]],
	  "meta": {
	    "order": 2,
	    "title": "Installation",
	    "filename": "docs/react/install.en-US.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Using-npm-to-install"
	  }, "Using npm to install"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Import-in-Browser"
	  }, "Import in Browser"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Development-tool"
	  }, "Development tool"]]]
	};

/***/ }

});