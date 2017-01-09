webpackJsonp([85,209],{

/***/ 1769:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", {}, ["h2", "Install and Initialization"], ["p", "We need to install ", ["code", "create-react-app"], " first, you may need install ", ["a", {
	    "title": null,
	    "href": "https://github.com/yarnpkg/yarn/"
	  }, "yarn"], " too."], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> -g create-react-app yarn"
	  }, ["code", "$ npm install -g create-react-app yarn"]], ["p", "Create a new project named ", ["code", "antd-demo"], "."], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ create-react-app antd-demo"
	  }, ["code", "$ create-react-app antd-demo"]], ["p", "The tool will create and initialize environment and dependencies automaticly,\nplease try config your proxy setting or use other npm registry if any network errors happen during it."], ["p", "Then we go inside ", ["code", "antd-demo"], " and start it."], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">cd</span> antd-demo\n$ yarn start"
	  }, ["code", "$ cd antd-demo\n$ yarn start"]], ["p", "Open browser at ", ["a", {
	    "title": null,
	    "href": "http://localhost:3000/"
	  }, "http://localhost:3000/"], ", it renders a header saying \"Welcome to React\" on the page."], ["h2", "Import antd"], ["p", "It is the default directory structure below."], ["pre", {
	    "lang": null,
	    "highlighted": "├── README<span class=\"token punctuation\">.</span>md\n├── package<span class=\"token punctuation\">.</span>json\n├── public\n│   ├── favicon<span class=\"token punctuation\">.</span>ico\n│   └── index<span class=\"token punctuation\">.</span>html\n├── src\n│   ├── App<span class=\"token punctuation\">.</span>css\n│   ├── App<span class=\"token punctuation\">.</span>js\n│   ├── App<span class=\"token punctuation\">.</span>test<span class=\"token punctuation\">.</span>js\n│   ├── index<span class=\"token punctuation\">.</span>css\n│   ├── index<span class=\"token punctuation\">.</span>js\n│   └── logo<span class=\"token punctuation\">.</span>svg\n└── yarn<span class=\"token punctuation\">.</span>lock"
	  }, ["code", "├── README.md\n├── package.json\n├── public\n│   ├── favicon.ico\n│   └── index.html\n├── src\n│   ├── App.css\n│   ├── App.js\n│   ├── App.test.js\n│   ├── index.css\n│   ├── index.js\n│   └── logo.svg\n└── yarn.lock"]], ["p", "Now we install ", ["code", "antd"], " from yarn or npm."], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ yarn add antd --save"
	  }, ["code", "$ yarn add antd --save"]], ["p", "Modify ", ["code", "src/App.js"], ", import Button component from ", ["code", "antd"], "."], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> React<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> Component <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token string\">'./App.css'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>App<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Button<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> App<span class=\"token punctuation\">;</span>"
	  }, ["code", "import React, { Component } from 'react';\nimport { Button } from 'antd';\nimport './App.css';\n\nclass App extends Component {\n  render() {\n    return (\n      <div className=\"App\">\n        <Button type=\"primary\">Button</Button>\n      </div>\n    );\n  }\n}\n\nexport default App;"]], ["p", "Add ", ["code", "antd/dist/antd.css"], " at the top of ", ["code", "src/App.css"], "."], ["pre", {
	    "lang": "css",
	    "highlighted": "<span class=\"token atrule\"><span class=\"token rule\">@import</span> <span class=\"token string\">'~antd/dist/antd.css'</span><span class=\"token punctuation\">;</span></span>\n\n<span class=\"token selector\"><span class=\"token class\">.App</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token number\">...</span>"
	  }, ["code", "@import '~antd/dist/antd.css';\n\n.App {\n  text-align: center;\n}\n\n..."]], ["p", "Ok, you now see a blue primary button displaying in page now, next you can choose any components of ", ["code", "antd"], " to develop your application. Visit other workflow of ", ["code", "create-react-app"], " at its ", ["a", {
	    "title": null,
	    "href": "https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md"
	  }, "User Guide "], "."], ["h2", "Advanced Guides"], ["p", "We are successd to run antd components now, but in the real world, there are still lots of problems about antd-demo.\nFor instance, we actully import all components in the project which will be a serious network perfermance issue."], ["blockquote", ["p", "You will see a warning in your browser console.\n", ["img", {
	    "title": null,
	    "src": "https://zos.alipayobjects.com/rmsportal/vgcHJRVZFmPjAawwVoXK.png",
	    "alt": null
	  }]]], ["p", "So it is necessary to customize the default webpack config. We can achieve that by using ", ["code", "eject"], " script command."], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ yarn run <span class=\"token function\">eject</span>"
	  }, ["code", "$ yarn run eject"]], ["h3", "Import on demand"], ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/babel-plugin-import"
	  }, "babel-plugin-import"], " is a babel plugin for importing components on demand (", ["a", {
	    "title": null,
	    "href": "/docs/react/getting-started-cn#按需加载"
	  }, "principle"], "). After eject all config files to antd-demo, we allowed to install it and modify ", ["code", "config/webpack.config.dev.js"], " now."], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ yarn add babel-plugin-import --save-dev"
	  }, ["code", "$ yarn add babel-plugin-import --save-dev"]], ["pre", {
	    "lang": "diff",
	    "highlighted": "// Process JS with Babel.\n{\n  test: /\\.(js|jsx)$/,\n  include: paths.appSrc,\n  loader: 'babel',\n  query: {\n<span class=\"token inserted\">+   plugins: [</span>\n<span class=\"token inserted\">+     ['import', [{ libraryName: \"antd\", style: 'css' }]],</span>\n<span class=\"token inserted\">+   ],</span>\n    // This is a feature of `babel-loader` for webpack (not Babel itself).\n    // It enables caching results in ./node_modules/.cache/babel-loader/\n    // directory for faster rebuilds.\n    cacheDirectory: true\n  }\n},"
	  }, ["code", "// Process JS with Babel.\n{\n  test: /\\.(js|jsx)$/,\n  include: paths.appSrc,\n  loader: 'babel',\n  query: {\n+   plugins: [\n+     ['import', [{ libraryName: \"antd\", style: 'css' }]],\n+   ],\n    // This is a feature of `babel-loader` for webpack (not Babel itself).\n    // It enables caching results in ./node_modules/.cache/babel-loader/\n    // directory for faster rebuilds.\n    cacheDirectory: true\n  }\n},"]], ["blockquote", ["p", "Note: because there is no ", ["code", ".babelrc"], " file after config eject, so we have to put the babel option into ", ["code", "webpack.config.js"], " or ", ["code", "babel"], " field of ", ["code", "package.json"], "."]], ["p", "Remove the ", ["code", "@import '~antd/dist/antd.css';"], " statement added before because ", ["code", "babel-plugin-import"], " will import styles."], ["p", "Then reboot ", ["code", "yarn start"], " and visit demo page, you should find that the above warning message would be gone which prove the ", ["code", "import on demand"], " config is effective now."], ["h3", "Customize Theme"], ["p", "According to ", ["a", {
	    "title": null,
	    "href": "/docs/react/customize-theme"
	  }, "Customize Theme documentation"], ", we need ", ["code", "less"], " variables modify ability of ", ["a", {
	    "title": null,
	    "href": "https://github.com/webpack/less-loader"
	  }, "less-loader"], ", so we add it."], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ yarn add <span class=\"token function\">less</span> less-loader --save-dev"
	  }, ["code", "$ yarn add less less-loader --save-dev"]], ["pre", {
	    "lang": "diff",
	    "highlighted": "loaders: [\n  {\n    exclude: [\n      /\\.html$/,\n      /\\.(js|jsx)$/,\n<span class=\"token inserted\">+     /\\.less$/,</span>\n      /\\.css$/,\n      /\\.json$/,\n      /\\.svg$/\n    ],\n    loader: 'url',\n  },\n\n...\n\n  // Process JS with Babel.\n  {\n    test: /\\.(js|jsx)$/,\n    include: paths.appSrc,\n    loader: 'babel',\n    query: {\n      plugins: [\n<span class=\"token deleted\">-       ['import', [{ libraryName: \"antd\", style: 'css' }]],</span>\n<span class=\"token inserted\">+       ['import', [{ libraryName: \"antd\", style: true }]],  // import less</span>\n      ],\n   },\n\n...\n\n<span class=\"token inserted\">+ // Parse less files and modify variables</span>\n<span class=\"token inserted\">+ {</span>\n<span class=\"token inserted\">+   test: /\\.less$/,</span>\n<span class=\"token inserted\">+   loader: 'style!css!postcss!less?{modifyVars:{\"@primary-color\":\"#1DA57A\"}}'</span>\n<span class=\"token inserted\">+ },</span>\n]"
	  }, ["code", "loaders: [\n  {\n    exclude: [\n      /\\.html$/,\n      /\\.(js|jsx)$/,\n+     /\\.less$/,\n      /\\.css$/,\n      /\\.json$/,\n      /\\.svg$/\n    ],\n    loader: 'url',\n  },\n\n...\n\n  // Process JS with Babel.\n  {\n    test: /\\.(js|jsx)$/,\n    include: paths.appSrc,\n    loader: 'babel',\n    query: {\n      plugins: [\n-       ['import', [{ libraryName: \"antd\", style: 'css' }]],\n+       ['import', [{ libraryName: \"antd\", style: true }]],  // import less\n      ],\n   },\n\n...\n\n+ // Parse less files and modify variables\n+ {\n+   test: /\\.less$/,\n+   loader: 'style!css!postcss!less?{modifyVars:{\"@primary-color\":\"#1DA57A\"}}'\n+ },\n]"]], ["p", "We use ", ["code", "modifyVars"], " option of ", ["a", {
	    "title": null,
	    "href": "https://github.com/webpack/less-loader#less-options"
	  }, "less-loader"], " here, you can see a green button rendered on the page after reboot start server."], ["hr"], ["p", "Finally, we use antd with create-react-app successfully, you can learn these practice for your own webpack workflow too, and find more webpack config in the ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-tool/atool-build/blob/master/src/getWebpackCommonConfig.js"
	  }, "atool-build"], ". (For instance, add ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-tool/atool-build/blob/e4bd2959689b6a95cb5c1c854a5db8c98676bdb3/src/getWebpackCommonConfig.js#L90"
	  }, "moment noParse"], " to avoid loading all language files)"], ["p", "Source code about this article：", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/create-react-app-antd"
	  }, "https://github.com/ant-design/create-react-app-antd"]]],
	  "meta": {
	    "order": 4,
	    "title": "Use in create-react-app",
	    "filename": "docs/react/use-with-create-react-app.en-US.md"
	  },
	  "description": ["section", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/facebookincubator/create-react-app"
	  }, "create-react-app"], " is one of best React application development tool, we are going to use ", ["code", "antd"], " within it and modify the webpack config for some customized needs."]],
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Install-and-Initialization"
	  }, "Install and Initialization"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Import-antd"
	  }, "Import antd"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Advanced-Guides"
	  }, "Advanced Guides"]]]
	};

/***/ }

});