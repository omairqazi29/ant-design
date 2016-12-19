webpackJsonp([85,204],{

/***/ 1029:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", {}, ["h2", "特性"], ["ul", ["li", ["p", "Designed as Ant Design，提炼和服务企业级中后台产品的交互语言和视觉风格。"]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://react-component.github.io/badgeboard/"
	  }, "React Component"], " 基础上精心封装的高质量 UI 组件。"]], ["li", ["p", "基于 npm + webpack + babel 的工作流，支持 ES2015 和 TypeScript。"]]], ["h2", "安装"], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> antd --save"
	  }, ["code", "$ npm install antd --save"]], ["h2", "示例"], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> DatePicker <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }, ["code", "import { DatePicker } from 'antd';\nReactDOM.render(<DatePicker />, mountNode);"]], ["p", "引入样式："], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token string\">'antd/dist/antd.css'</span><span class=\"token punctuation\">;</span>  <span class=\"token comment\" spellcheck=\"true\">// or 'antd/dist/antd.less'</span>"
	  }, ["code", "import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'"]], ["p", "以下两种方法都可以达到按需加载的目的："], ["ul", ["li", ["p", ["code", "import DatePicker from 'antd/lib/date-picker'"]]], ["li", ["p", "配合插件 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/babel-plugin-import"
	  }, "babel-plugin-import"], " 使用 ", ["code", "import { DatePicker } from 'antd';"]]]], ["blockquote", ["p", "babel-plugin-import 支持 js 和 css 同时按需加载。"]], ["h2", "版本"], ["ul", ["li", ["p", "稳定版：", ["a", {
	    "title": null,
	    "href": "https://www.npmjs.org/package/antd"
	  }, ["img", {
	    "title": null,
	    "src": "https://img.shields.io/npm/v/antd.svg?style=flat-square",
	    "alt": "npm package"
	  }]]]], ["li", ["p", "开发版：", ["a", {
	    "title": null,
	    "href": "https://www.npmjs.org/package/antd"
	  }, ["img", {
	    "title": null,
	    "src": "https://cnpmjs.org/badge/v/antd.svg?&tag=beta&subject=npm",
	    "alt": null
	  }]]]]], ["h2", "浏览器支持"], ["p", "现代浏览器和 IE9 及以上。"], ["blockquote", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/xcatliu/react-ie8"
	  }, "IE8 issues"]]], ["h2", "链接"], ["ul", ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://ant.design/"
	  }, "首页"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "/docs/react/introduce"
	  }, "组件文档"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "/changelog"
	  }, "更新日志"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/dvajs/dva-cli/"
	  }, "开发脚手架"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://ant-tool.github.io/"
	  }, "开发工具文档"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://react-component.github.io/"
	  }, "React 基础组件"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://mobile.ant.design"
	  }, "移动端组件"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://motion.ant.design"
	  }, "动效"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://os.alipayobjects.com/rmsportal/HTXUgPGkyyxEivE.png"
	  }, "设计规范速查手册"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/wiki/Development"
	  }, "开发者说明"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/wiki/%E8%BD%AE%E5%80%BC%E8%A7%84%E5%88%99%E5%92%8C%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E6%B5%81%E7%A8%8B"
	  }, "版本发布规则"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/129"
	  }, "社区贡献脚手架和范例"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/wiki/FAQ"
	  }, "常见问题"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://codepen.io/benjycui/pen/KgPZrE?editors=001"
	  }, "CodePen 模板"], " for bug reports"]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/websemantics/awesome-ant-design"
	  }, "Awesome Ant Design"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "/docs/react/customize-theme"
	  }, "定制主题"]]]], ["h2", "谁在使用"], ["ul", ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://www.antgroup.com/"
	  }, "蚂蚁金服"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://www.alibaba.com/"
	  }, "阿里巴巴"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://www.koubei.com/"
	  }, "口碑"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://www.meituan.com"
	  }, "美团"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://www.xiaojukeji.com/"
	  }, "滴滴"]]]], ["blockquote", ["p", "如果你的公司和产品使用了 Ant Design，欢迎到 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/477"
	  }, "这里"], " 留言。"]], ["h2", "如何贡献"], ["p", "在任何形式的参与前，请先阅读 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/blob/master/.github/CONTRIBUTING.md"
	  }, "贡献者文档"], "。有任何建议或意见您可以 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pulls"
	  }, "Pull Request"], "，给我们 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/new"
	  }, "报告 Bug"], "。"], ["blockquote", ["p", "强烈推荐阅读 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way"
	  }, "《提问的智慧》"], "、", ["a", {
	    "title": null,
	    "href": "https://github.com/seajs/seajs/issues/545"
	  }, "《如何向开源社区提问题》"], " 和 ", ["a", {
	    "title": null,
	    "href": "http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html"
	  }, "《如何有效地报告 Bug》"], "，更好的问题更容易获得帮助。"]], ["h2", "社区互助"], ["p", "如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助，同时我们也鼓励资深用户通过下面的途径给新人提供帮助。"], ["p", "通过 Stack Overflow 或者 Segment Fault 提问时，建议加上 ", ["code", "antd"], " 标签。"], ["ol", ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://stackoverflow.com/questions/tagged/antd"
	  }, "Stack Overflow"], "（推荐）"]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://segmentfault.com/t/antd"
	  }, "Segment Fault"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://gitter.im/ant-design/ant-design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"
	  }, ["img", {
	    "title": null,
	    "src": "https://badges.gitter.im/Join%20Chat.svg",
	    "alt": "Join the chat at https://gitter.im/ant-design/ant-design"
	  }]]]]]],
	  "meta": {
	    "order": 0,
	    "title": "Ant Design of React",
	    "filename": "docs/react/introduce.zh-CN.md"
	  },
	  "description": ["section", ["p", "这里是 Ant Design 的 React 实现，开发和服务于企业级后台产品。"], ["div", {
	    "class": "pic-plus"
	  }, ["img", {
	    "width": "150",
	    "src": "https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg"
	  }], ["span", "+"], ["img", {
	    "width": "160",
	    "src": "https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg"
	  }]], ["style", "\n.pic-plus > * {\n  display: inline-block!important;\n  vertical-align: middle;\n}\n.pic-plus span {\n  font-size: 30px;\n  color: #aaa;\n  margin: 0 20px;\n}\n"]],
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#特性"
	  }, "特性"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#安装"
	  }, "安装"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#示例"
	  }, "示例"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#版本"
	  }, "版本"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#浏览器支持"
	  }, "浏览器支持"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#链接"
	  }, "链接"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#谁在使用"
	  }, "谁在使用"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#如何贡献"
	  }, "如何贡献"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#社区互助"
	  }, "社区互助"]]]
	};

/***/ }

});