webpackJsonp([92,202],{

/***/ 1007:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", ["p", "Ant Design allow to customize some basic design tokens for meeting the needs of UI diversity from bussiness and brand, including primary color, border radius, border and etc."], ["p", ["img", {
	    "title": null,
	    "src": "https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png",
	    "alt": null
	  }]], ["h2", "Less variables"], ["p", "We are using ", ["a", {
	    "title": null,
	    "href": "http://lesscss.org/"
	  }, "Less"], " as development language of style. A series of less variables are defined for each design tokens which can be customized as your needs."], ["ul", ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"
	  }, "Default Variables"]]]], ["p", "Please report issue if the variables is not enough for you."], ["h2", "How to use it"], ["p", "We recommand ", ["a", {
	    "title": null,
	    "href": "http://lesscss.org/usage/#using-less-in-the-browser-modify-variables"
	  }, "modifyVars"], " to override the default variables. There are two way to achieve it in practive."], ["p", "You can run this ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/antd-init/tree/master/examples/customize-antd-theme"
	  }, "example"], " for playground."], ["h3", "1) package.theme (recommanded)"], ["p", "Specify the ", ["code", "theme"], " field in 'package.json', which could be a object or file path."], ["pre", {
	    "lang": "js",
	    "highlighted": "<span class=\"token string\" >\"theme\"</span><span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token string\" >\"@primary-color\"</span><span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"#1DA57A\"</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>"
	  }, ["code", "\"theme\": {\n  \"@primary-color\": \"#1DA57A\",\n},"]], ["p", "or:"], ["pre", {
	    "lang": "js",
	    "highlighted": "<span class=\"token string\" >\"theme\"</span><span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"./theme.js\"</span><span class=\"token punctuation\" >,</span>  <span class=\"token comment\" spellcheck=\"true\">// https://github.com/ant-design/antd-init/blob/master/examples/customize-antd-theme/theme.js</span>"
	  }, ["code", "\"theme\": \"./theme.js\",  // https://github.com/ant-design/antd-init/blob/master/examples/customize-antd-theme/theme.js"]], ["p", "This way is working only when using ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-tool/atool-build"
	  }, "atool-build"], "(built in ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/antd-init"
	  }, "antd-init"], " and ", ["a", {
	    "title": null,
	    "href": "https://github.com/dvajs/dva-cli"
	  }, "dva-cli"], "). If you choose other boilerplates, you can write webpack config about ", ["a", {
	    "title": null,
	    "href": "https://github.com/webpack/less-loader#less-options"
	  }, "less-loader modifyVars"], " like ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-tool/atool-build/blob/a4b3e3eec4ffc09b0e2352d7f9d279c4c28fdb99/src/getWebpackCommonConfig.js#L131-L138"
	  }, "atool-build "], " does."], ["p", "Note: importing less style is necessary. Please specify ", ["code", "style"], " option of ", ["code", "babel-plugin-import"], " to be ", ["code", "true"], " or ", ["code", "less"], " if you are using it."], ["h3", "2) less"], ["p", "Override variables via less definition files."], ["p", "Create a standalone less file like below, and import it in your project."], ["pre", {
	    "lang": "css",
	    "highlighted": "<span class=\"token atrule\" ><span class=\"token rule\" >@import</span> <span class=\"token string\" >\"~antd/dist/antd.less\"</span><span class=\"token punctuation\" >;</span></span>   // import official less entry file\n<span class=\"token atrule\" ><span class=\"token rule\" >@import</span> <span class=\"token string\" >\"your-theme-file.less\"</span><span class=\"token punctuation\" >;</span></span>   // override variables here"
	  }, ["code", "@import \"~antd/dist/antd.less\";   // import official less entry file\n@import \"your-theme-file.less\";   // override variables here"]], ["p", "Note: this way will load style of all component regardless of your demand, which cause ", ["code", "style"], " option of ", ["code", "babel-plugin-import"], " not working."]],
	  "meta": {
	    "order": 4,
	    "title": "Customize theme",
	    "filename": "docs/react/customize-theme.en-US.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#Less-variables"
	  }, "Less variables"]], ["li", ["a", {
	    "href": "#How-to-use-it"
	  }, "How to use it"]]]
	};

/***/ }

});