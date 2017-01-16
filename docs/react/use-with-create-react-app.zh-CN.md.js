webpackJsonp([84,210],{

/***/ 1768:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", {}, ["h2", "安装和初始化"], ["p", "我们需要在命令行中安装 create-react-app 工具，你可能还需要安装 ", ["a", {
	    "title": null,
	    "href": "https://github.com/yarnpkg/yarn/"
	  }, "yarn"], "。"], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> -g create-react-app yarn"
	  }, ["code", "$ npm install -g create-react-app yarn"]], ["p", "然后新建一个项目。"], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ create-react-app antd-demo"
	  }, ["code", "$ create-react-app antd-demo"]], ["p", "工具会自动初始化一个脚手架并安装 React 项目的各种必要依赖，如果在过程中出现网络问题，请尝试配置代理或使用其他 npm registry。"], ["p", "然后我们进入项目并启动。"], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">cd</span> antd-demo\n$ yarn start"
	  }, ["code", "$ cd antd-demo\n$ yarn start"]], ["p", "此时浏览器会访问 ", ["a", {
	    "title": null,
	    "href": "http://localhost:3000/"
	  }, "http://localhost:3000/"], " ，看到 ", ["code", "Welcome to React"], " 的界面就算成功了。"], ["h2", "引入 antd"], ["p", "这是 create-react-app 生成的默认目录结构。"], ["pre", {
	    "lang": null,
	    "highlighted": "├── README<span class=\"token punctuation\">.</span>md\n├── package<span class=\"token punctuation\">.</span>json\n├── public\n│   ├── favicon<span class=\"token punctuation\">.</span>ico\n│   └── index<span class=\"token punctuation\">.</span>html\n├── src\n│   ├── App<span class=\"token punctuation\">.</span>css\n│   ├── App<span class=\"token punctuation\">.</span>js\n│   ├── App<span class=\"token punctuation\">.</span>test<span class=\"token punctuation\">.</span>js\n│   ├── index<span class=\"token punctuation\">.</span>css\n│   ├── index<span class=\"token punctuation\">.</span>js\n│   └── logo<span class=\"token punctuation\">.</span>svg\n└── yarn<span class=\"token punctuation\">.</span>lock"
	  }, ["code", "├── README.md\n├── package.json\n├── public\n│   ├── favicon.ico\n│   └── index.html\n├── src\n│   ├── App.css\n│   ├── App.js\n│   ├── App.test.js\n│   ├── index.css\n│   ├── index.js\n│   └── logo.svg\n└── yarn.lock"]], ["p", "现在从 yarn 或 npm 安装并引入 antd。"], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ yarn add antd --save"
	  }, ["code", "$ yarn add antd --save"]], ["p", "修改 ", ["code", "src/App.js"], "，引入 antd 的按钮组件。"], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> React<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> Component <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token string\">'./App.css'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>App<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Button<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> App<span class=\"token punctuation\">;</span>"
	  }, ["code", "import React, { Component } from 'react';\nimport { Button } from 'antd';\nimport './App.css';\n\nclass App extends Component {\n  render() {\n    return (\n      <div className=\"App\">\n        <Button type=\"primary\">Button</Button>\n      </div>\n    );\n  }\n}\n\nexport default App;"]], ["p", "修改 ", ["code", "src/App.css"], "，在文件顶部引入 ", ["code", "antd/dist/antd.css"], "。"], ["pre", {
	    "lang": "css",
	    "highlighted": "<span class=\"token atrule\"><span class=\"token rule\">@import</span> <span class=\"token string\">'~antd/dist/antd.css'</span><span class=\"token punctuation\">;</span></span>\n\n<span class=\"token selector\"><span class=\"token class\">.App</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token number\">...</span>"
	  }, ["code", "@import '~antd/dist/antd.css';\n\n.App {\n  text-align: center;\n}\n\n..."]], ["p", "好了，现在你应该能看到页面上已经有了 antd 的蓝色按钮组件，接下来就可以继续选用其他组件开发应用了。其他开发流程你可以参考 create-react-app 的", ["a", {
	    "title": null,
	    "href": "https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md"
	  }, "官方文档"], "。"], ["h2", "高级配置"], ["p", "我们现在已经把组件成功运行起来了，但是在实际开发过程中还有很多问题，例如上面的例子实际上加载了全部的 antd 组件的代码（对前端性能是个隐患）。"], ["blockquote", ["p", "你会在控制台看到如下警告。\n", ["img", {
	    "title": null,
	    "src": "https://zos.alipayobjects.com/rmsportal/vgcHJRVZFmPjAawwVoXK.png",
	    "alt": null
	  }]]], ["p", "我们需要对 create-react-app 的默认配置进行自定义。可以使用 ", ["code", "eject"], " 命令将所有内建的配置暴露出来。"], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ yarn run <span class=\"token function\">eject</span>"
	  }, ["code", "$ yarn run eject"]], ["h3", "按需加载"], ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/babel-plugin-import"
	  }, "babel-plugin-import"], " 是一个用于按需加载组件代码和样式的 babel 插件（", ["a", {
	    "title": null,
	    "href": "/docs/react/getting-started-cn#按需加载"
	  }, "原理"], "），现在我们尝试安装它并修改 ", ["code", "config/webpack.config.dev.js"], " 文件。"], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ yarn add babel-plugin-import --save-dev"
	  }, ["code", "$ yarn add babel-plugin-import --save-dev"]], ["pre", {
	    "lang": "diff",
	    "highlighted": "// Process JS with Babel.\n{\n  test: /\\.(js|jsx)$/,\n  include: paths.appSrc,\n  loader: 'babel',\n  query: {\n<span class=\"token inserted\">+   plugins: [</span>\n<span class=\"token inserted\">+     ['import', [{ libraryName: \"antd\", style: 'css' }]],</span>\n<span class=\"token inserted\">+   ],</span>\n    // This is a feature of `babel-loader` for webpack (not Babel itself).\n    // It enables caching results in ./node_modules/.cache/babel-loader/\n    // directory for faster rebuilds.\n    cacheDirectory: true\n  }\n},"
	  }, ["code", "// Process JS with Babel.\n{\n  test: /\\.(js|jsx)$/,\n  include: paths.appSrc,\n  loader: 'babel',\n  query: {\n+   plugins: [\n+     ['import', [{ libraryName: \"antd\", style: 'css' }]],\n+   ],\n    // This is a feature of `babel-loader` for webpack (not Babel itself).\n    // It enables caching results in ./node_modules/.cache/babel-loader/\n    // directory for faster rebuilds.\n    cacheDirectory: true\n  }\n},"]], ["blockquote", ["p", "注意，由于 create-react-app eject 之后的配置中没有 ", ["code", ".babelrc"], " 文件，所以需要把配置放到 ", ["code", "webpack.config.js"], " 或 ", ["code", "package.json"], " 的 ", ["code", "babel"], " 属性中。"]], ["p", "然后移除前面在 ", ["code", "src/App.css"], " 里全量添加的 ", ["code", "@import '~antd/dist/antd.css';"], " 样式代码，现在 babel-plugin-import 会按需加载样式。"], ["p", "最后重启 ", ["code", "yarn start"], " 访问页面，此时上面的警告信息应该没了，antd 组件的 js 和 css 代码都会按需加载。"], ["h3", "自定义主题"], ["p", "按照 ", ["a", {
	    "title": null,
	    "href": "/docs/react/customize-theme"
	  }, "配置主题"], " 的要求，自定义主题需要用到 less 变量覆盖功能，因此首先我们需要引入 ", ["a", {
	    "title": null,
	    "href": "https://github.com/webpack/less-loader"
	  }, "less-loader"], " 来加载 less 样式，同时修改 ", ["code", "config/webpack.config.dev.js"], " 文件。"], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ yarn add <span class=\"token function\">less</span> less-loader --save-dev"
	  }, ["code", "$ yarn add less less-loader --save-dev"]], ["pre", {
	    "lang": "diff",
	    "highlighted": "loaders: [\n  {\n    exclude: [\n      /\\.html$/,\n      /\\.(js|jsx)$/,\n<span class=\"token inserted\">+     /\\.less$/,</span>\n      /\\.css$/,\n      /\\.json$/,\n      /\\.svg$/\n    ],\n    loader: 'url',\n  },\n\n...\n\n  // Process JS with Babel.\n  {\n    test: /\\.(js|jsx)$/,\n    include: paths.appSrc,\n    loader: 'babel',\n    query: {\n      plugins: [\n<span class=\"token deleted\">-       ['import', [{ libraryName: \"antd\", style: 'css' }]],</span>\n<span class=\"token inserted\">+       ['import', [{ libraryName: \"antd\", style: true }]],  // 加载 less 文件</span>\n      ],\n   },\n\n...\n\n<span class=\"token inserted\">+ // 解析 less 文件，并加入变量覆盖配置</span>\n<span class=\"token inserted\">+ {</span>\n<span class=\"token inserted\">+   test: /\\.less$/,</span>\n<span class=\"token inserted\">+   loader: 'style!css!postcss!less?{modifyVars:{\"@primary-color\":\"#1DA57A\"}}'</span>\n<span class=\"token inserted\">+ },</span>\n]"
	  }, ["code", "loaders: [\n  {\n    exclude: [\n      /\\.html$/,\n      /\\.(js|jsx)$/,\n+     /\\.less$/,\n      /\\.css$/,\n      /\\.json$/,\n      /\\.svg$/\n    ],\n    loader: 'url',\n  },\n\n...\n\n  // Process JS with Babel.\n  {\n    test: /\\.(js|jsx)$/,\n    include: paths.appSrc,\n    loader: 'babel',\n    query: {\n      plugins: [\n-       ['import', [{ libraryName: \"antd\", style: 'css' }]],\n+       ['import', [{ libraryName: \"antd\", style: true }]],  // 加载 less 文件\n      ],\n   },\n\n...\n\n+ // 解析 less 文件，并加入变量覆盖配置\n+ {\n+   test: /\\.less$/,\n+   loader: 'style!css!postcss!less?{modifyVars:{\"@primary-color\":\"#1DA57A\"}}'\n+ },\n]"]], ["p", "这里利用了 ", ["a", {
	    "title": null,
	    "href": "https://github.com/webpack/less-loader#less-options"
	  }, "less-loader"], " 的 ", ["code", "modifyVars"], " 来进行主题配置，\n变量和其他配置方式可以参考 ", ["a", {
	    "title": null,
	    "href": "/docs/react/customize-theme"
	  }, "配置主题"], " 文档。"], ["p", "修改后重启 ", ["code", "yarn start"], "，如果看到一个绿色的按钮就说明配置成功了。"], ["hr"], ["p", "以上是在 create-react-app 中使用 antd 的相关实践，你也可以借鉴此文的做法在自己的 webpack 工作流中使用 antd，更多 webpack 配置可参考 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-tool/atool-build/blob/master/src/getWebpackCommonConfig.js"
	  }, "atool-build"], "。（例如加入 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-tool/atool-build/blob/e4bd2959689b6a95cb5c1c854a5db8c98676bdb3/src/getWebpackCommonConfig.js#L90"
	  }, "moment noParse"], " 避免加载所有语言文件）"], ["p", "本例所有源码可见：", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/create-react-app-antd"
	  }, "https://github.com/ant-design/create-react-app-antd"]]],
	  "meta": {
	    "order": 4,
	    "title": "在 create-react-app 中使用",
	    "filename": "docs/react/use-with-create-react-app.zh-CN.md"
	  },
	  "description": ["section", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/facebookincubator/create-react-app"
	  }, "create-react-app"], " 是业界最优秀的 React 应用开发工具之一，本文会尝试在 create-react-app 创建的工程中使用 antd 组件，并自定义 webpack 的配置以满足各类工程化需求。"]],
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#安装和初始化"
	  }, "安装和初始化"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#引入-antd"
	  }, "引入 antd"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#高级配置"
	  }, "高级配置"]]]
	};

/***/ }

});