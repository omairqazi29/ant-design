webpackJsonp([83,204],{

/***/ 1754:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", {}, ["h2", "安装 dva"], ["p", "通过 npm 安装 dva 。"], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> dva-cli -g"
	  }, ["code", "$ npm install dva-cli -g"]], ["h2", "创建新应用"], ["p", "安装完 dva-cli 之后，就可以在 terminal 里访问到 ", ["code", "dva"], " 命令。现在，你可以通过 ", ["code", "dva new"], " 创建新应用。"], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ dva new dva-quickstart"
	  }, ["code", "$ dva new dva-quickstart"]], ["p", "这会创建 ", ["code", "dva-quickstart"], " 目录，包含项目初始化目录和文件，并提供开发服务器、构建脚本、数据 mock 服务、代理服务器等功能。"], ["p", "然后我们 ", ["code", "cd"], " 进入 ", ["code", "dva-quickstart"], " 目录，并启动开发服务器："], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">cd</span> dva-quickstart\n$ <span class=\"token function\">npm</span> start"
	  }, ["code", "$ cd dva-quickstart\n$ npm start"]], ["p", "几秒钟后，你会看到以下输出："], ["pre", {
	    "lang": "bash",
	    "highlighted": "          proxy: load rule from proxy.config.js\n          proxy: listened on 8989\n📦  411/411 build modules\nwebpack: bundle build is now finished."
	  }, ["code", "          proxy: load rule from proxy.config.js\n          proxy: listened on 8989\n📦  411/411 build modules\nwebpack: bundle build is now finished."]], ["p", "在浏览器里打开 ", ["a", {
	    "title": null,
	    "href": "http://localhost:8989"
	  }, "http://localhost:8989"], " ，你会看到 dva 的欢迎界面。"], ["h2", "使用 antd"], ["p", "通过 npm 安装 ", ["code", "antd"], " 和 ", ["code", "babel-plugin-import"], " 。", ["code", "babel-plugin-import"], " 是用来按需加载 antd 的脚本和样式的，详见 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/babel-plugin-import"
	  }, "repo"], " 。"], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> antd babel-plugin-import --save"
	  }, ["code", "$ npm install antd babel-plugin-import --save"]], ["p", "编辑 ", ["code", "webpack.config.js"], "，使 ", ["code", "babel-plugin-import"], " 插件生效。"], ["pre", {
	    "lang": "diff",
	    "highlighted": "<span class=\"token inserted\">+ webpackConfig.babel.plugins.push(['import', {</span>\n<span class=\"token inserted\">+   libraryName: 'antd',</span>\n<span class=\"token inserted\">+   style: 'css',</span>\n<span class=\"token inserted\">+ }]);</span>"
	  }, ["code", "+ webpackConfig.babel.plugins.push(['import', {\n+   libraryName: 'antd',\n+   style: 'css',\n+ }]);"]], ["blockquote", ["p", "注：这里不需要手动重启开发服务器，保存 ", ["code", "webpack.config.js"], " 后会自动重启。"]], ["h2", "定义路由"], ["p", "我们要写个应用来先显示产品列表。首先第一步是创建路由，路由可以想象成是组成应用的不同页面。"], ["p", "新建 route component ", ["code", "routes/Products.js"], "，内容如下："], ["pre", {
	    "lang": "javascript",
	    "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Products <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>h2<span class=\"token operator\">></span>List <span class=\"token keyword\">of</span> Products<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h2<span class=\"token operator\">></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> Products<span class=\"token punctuation\">;</span>"
	  }, ["code", "import React from 'react';\n\nconst Products = (props) => (\n  <h2>List of Products</h2>\n);\n\nexport default Products;"]], ["p", "添加路由信息到路由表，编辑 ", ["code", "router.js"], " :"], ["pre", {
	    "lang": "diff",
	    "highlighted": "<span class=\"token inserted\">+ import Products from './routes/Products';</span>\n...\n<span class=\"token inserted\">+ &lt;Route path=\"/products\" component={Products} /></span>"
	  }, ["code", "+ import Products from './routes/Products';\n...\n+ <Route path=\"/products\" component={Products} />"]], ["p", "然后在浏览器里打开 ", ["a", {
	    "title": null,
	    "href": "http://localhost:8989/#/products"
	  }, "http://localhost:8989/#/products"], " ，你应该能看到前面定义的 ", ["code", "<h2>"], " 标签。"], ["h2", "编写 UI Component"], ["p", "随着应用的发展，你会需要在多个页面分享 UI 元素 (或在一个页面使用多次)，在 dva 里你可以把这部分抽成 component 。"], ["p", "我们来编写一个 ", ["code", "ProductList"], " component，这样就能在不同的地方显示产品列表了。"], ["p", "新建 ", ["code", "components/ProductList.js"], " 文件："], ["pre", {
	    "lang": "javascript",
	    "highlighted": "<span class=\"token keyword\">import</span> React<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> PropTypes <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table<span class=\"token punctuation\">,</span> Popconfirm<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> ProductList <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> onDelete<span class=\"token punctuation\">,</span> products <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n    dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Actions'</span><span class=\"token punctuation\">,</span>\n    render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n        <span class=\"token operator\">&lt;</span>Popconfirm title<span class=\"token operator\">=</span><span class=\"token string\">\"Delete?\"</span> onConfirm<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">onDelete</span><span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">.</span>id<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>Delete<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token operator\">&lt;</span>Table\n      dataSource<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>products<span class=\"token punctuation\">}</span>\n      columns<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nProductList<span class=\"token punctuation\">.</span>propTypes <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  onDelete<span class=\"token punctuation\">:</span> PropTypes<span class=\"token punctuation\">.</span>func<span class=\"token punctuation\">.</span>isRequired<span class=\"token punctuation\">,</span>\n  products<span class=\"token punctuation\">:</span> PropTypes<span class=\"token punctuation\">.</span>array<span class=\"token punctuation\">.</span>isRequired<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> ProductList<span class=\"token punctuation\">;</span>"
	  }, ["code", "import React, { PropTypes } from 'react';\nimport { Table, Popconfirm, Button } from 'antd';\n\nconst ProductList = ({ onDelete, products }) => {\n  const columns = [{\n    title: 'Name',\n    dataIndex: 'name',\n  }, {\n    title: 'Actions',\n    render: (text, record) => {\n      return (\n        <Popconfirm title=\"Delete?\" onConfirm={() => onDelete(record.id)}>\n          <Button>Delete</Button>\n        </Popconfirm>\n      );\n    },\n  }];\n  return (\n    <Table\n      dataSource={products}\n      columns={columns}\n    />\n  );\n};\n\nProductList.propTypes = {\n  onDelete: PropTypes.func.isRequired,\n  products: PropTypes.array.isRequired,\n};\n\nexport default ProductList;"]], ["h2", "定义 Model"], ["p", "完成 UI 后，现在开始处理数据和逻辑。"], ["p", "dva 通过 model 的概念把一个领域的模型管理起来，包含同步更新 state 的 reducers，处理异步逻辑的 effects，订阅数据源的 subscriptions 。"], ["p", "新建 model ", ["code", "models/products.js"], " ："], ["pre", {
	    "lang": "javascript",
	    "highlighted": "<span class=\"token keyword\">import</span> dva <span class=\"token keyword\">from</span> <span class=\"token string\">'dva'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  namespace<span class=\"token punctuation\">:</span> <span class=\"token string\">'products'</span><span class=\"token punctuation\">,</span>\n  state<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  reducers<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token string\">'delete'</span><span class=\"token punctuation\">(</span>state<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> payload<span class=\"token punctuation\">:</span> id <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> state<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span>id <span class=\"token operator\">!==</span> id<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
	  }, ["code", "import dva from 'dva';\n\nexport default {\n  namespace: 'products',\n  state: [],\n  reducers: {\n    'delete'(state, { payload: id }) {\n      return state.filter(item => item.id !== id);\n    },\n  },\n};"]], ["p", "这个 model 里："], ["ul", ["li", ["p", ["code", "namespace"], " 表示在全局 state 上的 key"]], ["li", ["p", ["code", "state"], " 是初始值，在这里是空数组"]], ["li", ["p", ["code", "reducers"], " 等同于 redux 里的 reducer，接收 action，同步更新 state"]]], ["p", "然后别忘记在 ", ["code", "index.js"], " 里载入他："], ["pre", {
	    "lang": "diff",
	    "highlighted": "// 3. Model\n<span class=\"token inserted\">+ app.model(require('./models/products'));</span>"
	  }, ["code", "// 3. Model\n+ app.model(require('./models/products'));"]], ["h2", "connect 起来"], ["p", "到这里，我们已经单独完成了 model 和 component，那么他们如何串联起来呢?"], ["p", "dva 提供了 connect 方法。如果你熟悉 redux，这个 connect 就是 react-redux 的 connect 。"], ["p", "编辑 ", ["code", "routes/Products.js"], "，替换为以下内容："], ["pre", {
	    "lang": "javascript",
	    "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> connect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'dva'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> ProductList <span class=\"token keyword\">from</span> <span class=\"token string\">'../components/ProductList'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Products <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> dispatch<span class=\"token punctuation\">,</span> products <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">function</span> <span class=\"token function\">handleDelete</span><span class=\"token punctuation\">(</span>id<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">dispatch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'products/delete'</span><span class=\"token punctuation\">,</span>\n      payload<span class=\"token punctuation\">:</span> id<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>h2<span class=\"token operator\">></span>List <span class=\"token keyword\">of</span> Products<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h2<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>ProductList onDelete<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>handleDelete<span class=\"token punctuation\">}</span> products<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>products<span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// export default Products;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token function\">connect</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> products <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  products<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>Products<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }, ["code", "import React from 'react';\nimport { connect } from 'dva';\nimport ProductList from '../components/ProductList';\n\nconst Products = ({ dispatch, products }) => {\n  function handleDelete(id) {\n    dispatch({\n      type: 'products/delete',\n      payload: id,\n    });\n  }\n  return (\n    <div>\n      <h2>List of Products</h2>\n      <ProductList onDelete={handleDelete} products={products} />\n    </div>\n  );\n};\n\n// export default Products;\nexport default connect(({ products }) => ({\n  products,\n}))(Products);"]], ["p", "最后，我们还需要一些初始数据让这个应用 run 起来。编辑 ", ["code", "index.js"], "："], ["pre", {
	    "lang": "diff",
	    "highlighted": "<span class=\"token deleted\">- const app = dva();</span>\n<span class=\"token inserted\">+ const app = dva({</span>\n<span class=\"token inserted\">+   initialState: {</span>\n<span class=\"token inserted\">+     products: [</span>\n<span class=\"token inserted\">+       { name: 'dva', id: 1 },</span>\n<span class=\"token inserted\">+       { name: 'antd', id: 2 },</span>\n<span class=\"token inserted\">+     ],</span>\n<span class=\"token inserted\">+   },</span>\n<span class=\"token inserted\">+ });</span>"
	  }, ["code", "- const app = dva();\n+ const app = dva({\n+   initialState: {\n+     products: [\n+       { name: 'dva', id: 1 },\n+       { name: 'antd', id: 2 },\n+     ],\n+   },\n+ });"]], ["p", "刷新浏览器，应该能看到以下效果："], ["p", {
	    "style": "text-align: center;"
	  }, ["img", {
	    "src": "https://zos.alipayobjects.com/rmsportal/GQJeDDeUCSTRMMg.gif"
	  }]], ["h2", "构建应用"], ["p", "完成开发并且在开发环境验证之后，就需要部署给我们的用户了。先执行下面的命令："], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">npm</span> run build"
	  }, ["code", "$ npm run build"]], ["p", "几秒后，输出应该如下："], ["pre", {
	    "lang": "bash",
	    "highlighted": "Child\n    Time: 14008ms\n         Asset       Size  Chunks             Chunk Names\n    index.html  255 bytes          <span class=\"token punctuation\">[</span>emitted<span class=\"token punctuation\">]</span>\n     common.js    1.18 kB       0  <span class=\"token punctuation\">[</span>emitted<span class=\"token punctuation\">]</span>  common\n      index.js     504 kB    1, 0  <span class=\"token punctuation\">[</span>emitted<span class=\"token punctuation\">]</span>  index\n     index.css     127 kB    1, 0  <span class=\"token punctuation\">[</span>emitted<span class=\"token punctuation\">]</span>  index"
	  }, ["code", "Child\n    Time: 14008ms\n         Asset       Size  Chunks             Chunk Names\n    index.html  255 bytes          [emitted]\n     common.js    1.18 kB       0  [emitted]  common\n      index.js     504 kB    1, 0  [emitted]  index\n     index.css     127 kB    1, 0  [emitted]  index"]], ["p", ["code", "build"], " 命令会打包所有的资源，包含 JavaScript, CSS, web fonts, images, html 等。然后你可以在 ", ["code", "dist/"], " 目录下找到这些文件。"], ["h2", "下一步"], ["p", "我们已经完成了一个简单应用，你可能还有很多疑问，比如："], ["ul", ["li", ["p", "如何处理异步请求"]], ["li", ["p", "如何优雅地加载初始数据"]], ["li", ["p", "如何统一处理出错，以及特定操作的出错"]], ["li", ["p", "如何动态加载路由和 Model，以加速页面载入速度"]], ["li", ["p", "如何实现 hmr"]], ["li", ["p", "如何 mock 数据"]], ["li", ["p", "等等"]]], ["p", "你可以："], ["ul", ["li", ["p", "访问 ", ["a", {
	    "title": null,
	    "href": "https://github.com/dvajs/dva"
	  }, "dva 官网"], "。"]], ["li", ["p", "查看所有 ", ["a", {
	    "title": null,
	    "href": "https://github.com/dvajs/dva#api"
	  }, "API"], "。"]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/dvajs/dva-docs/blob/master/v1/zh-cn/tutorial/01-%E6%A6%82%E8%A6%81.md"
	  }, "教程"], "，一步步完成一个中型应用。"]], ["li", ["p", "看看 ", ["a", {
	    "title": null,
	    "href": "https://github.com/dvajs/dva-hackernews"
	  }, "dva 版 hackernews"], " 是 ", ["a", {
	    "title": null,
	    "href": "https://github.com/sorrycc/blog/issues/9"
	  }, "如何实现"], " 的。"]]]],
	  "meta": {
	    "order": 3,
	    "title": "项目实战",
	    "filename": "docs/react/practical-projects.zh-CN.md"
	  },
	  "description": ["section", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/dvajs/dva"
	  }, "dva"], " 是一个基于 react 和 redux 的轻量应用框架，概念来自 elm，支持 side effects、热替换、动态加载、react-native、SSR 等，已在生产环境广泛应用。"], ["p", "本文会引导你使用 dva 和 antd 从 0 开始创建一个简单应用。"], ["p", "会包含以下内容："]],
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#安装-dva"
	  }, "安装 dva"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#创建新应用"
	  }, "创建新应用"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#使用-antd"
	  }, "使用 antd"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#定义路由"
	  }, "定义路由"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#编写-UI-Component"
	  }, "编写 UI Component"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#定义-Model"
	  }, "定义 Model"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#connect-起来"
	  }, "connect 起来"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#构建应用"
	  }, "构建应用"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#下一步"
	  }, "下一步"]]]
	};

/***/ }

});