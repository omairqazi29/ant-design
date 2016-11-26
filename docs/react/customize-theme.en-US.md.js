webpackJsonp([92,202],{

/***/ 1025:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", ["p", "Ant Design allows to customize some basic design aspects in order to meet the needs of UI diversity from business and brand, including primary color, border radius, border color, etc."], ["p", ["img", {
	    "title": null,
	    "src": "https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png",
	    "alt": null
	  }]], ["h2", "Less variables"], ["p", "We are using ", ["a", {
	    "title": null,
	    "href": "http://lesscss.org/"
	  }, "Less"], " as the development language of style. A set of less variables are defined for each design aspect that can be customized to your needs."], ["ul", ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"
	  }, "Default Variables"]]]], ["p", "Please report an issue if the existing list of variables is not enough for you."], ["h2", "How to use it"], ["p", "We recommend ", ["a", {
	    "title": null,
	    "href": "http://lesscss.org/usage/#using-less-in-the-browser-modify-variables"
	  }, "modifyVars"], " to override the default values of the variables. There are two ways to achieve it in practice."], ["p", "You can use this ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/antd-init/tree/master/examples/customize-antd-theme"
	  }, "example"], " as a playground."], ["h3", "1) Using 'theme' property in package.theme (recommended way)"], ["p", "Specify the ", ["code", "theme"], " property in ", ["code", "package.json"], " file, whose value can be either an object or the path to a JS file that contains the custom values of specific variables:"], ["ul", ["li", ["p", "example of directly specifying the custom values as an object:"]]], ["pre", {
	    "lang": "js",
	    "highlighted": "<span class=\"token string\" >\"theme\"</span><span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token string\" >\"@primary-color\"</span><span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"#1DA57A\"</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>"
	  }, ["code", "\"theme\": {\n  \"@primary-color\": \"#1DA57A\",\n},"]], ["ul", ["li", ["p", "example of specifying a ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/antd-init/blob/master/examples/customize-antd-theme/theme.js"
	  }, "file path"], " to a JS file:"]]], ["pre", {
	    "lang": "js",
	    "highlighted": "<span class=\"token string\" >\"theme\"</span><span class=\"token punctuation\" >:</span> <span class=\"token string\" >\"./theme.js\"</span><span class=\"token punctuation\" >,</span>"
	  }, ["code", "\"theme\": \"./theme.js\","]], ["p", "This approach is working only when using ", ["a", {
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
	  }, "atool-build "], " does."], ["p", "Note: Importing less style is necessary. Please specify ", ["code", "style"], " option of ", ["code", "babel-plugin-import"], " to be ", ["code", "true"], " or ", ["code", "less"], " if you are using it."], ["h3", "2) Overriding Less variables (alternative way)"], ["p", "Override variables via less definition files."], ["p", "Create a standalone less file like the one below, and import it in your project."], ["pre", {
	    "lang": "css",
	    "highlighted": "<span class=\"token atrule\" ><span class=\"token rule\" >@import</span> <span class=\"token string\" >\"~antd/dist/antd.less\"</span><span class=\"token punctuation\" >;</span></span>   // import official less entry file\n<span class=\"token atrule\" ><span class=\"token rule\" >@import</span> <span class=\"token string\" >\"your-theme-file.less\"</span><span class=\"token punctuation\" >;</span></span>   // override variables here"
	  }, ["code", "@import \"~antd/dist/antd.less\";   // import official less entry file\n@import \"your-theme-file.less\";   // override variables here"]], ["p", "Note: This way will load the styles of all components, regardless of your demand, which cause ", ["code", "style"], " option of ", ["code", "babel-plugin-import"], " not working."]],
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