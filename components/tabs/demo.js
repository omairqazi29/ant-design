webpackJsonp([17,204],{

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(8);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _rcTabs = __webpack_require__(704);

	var _rcTabs2 = _interopRequireDefault(_rcTabs);

	var _ScrollableInkTabBar = __webpack_require__(701);

	var _ScrollableInkTabBar2 = _interopRequireDefault(_ScrollableInkTabBar);

	var _TabContent = __webpack_require__(702);

	var _TabContent2 = _interopRequireDefault(_TabContent);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Tabs = function (_React$Component) {
	    (0, _inherits3.default)(Tabs, _React$Component);

	    function Tabs() {
	        (0, _classCallCheck3.default)(this, Tabs);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));

	        _this.createNewTab = function (targetKey) {
	            var onEdit = _this.props.onEdit;
	            if (onEdit) {
	                onEdit(targetKey, 'add');
	            }
	        };
	        _this.removeTab = function (targetKey, e) {
	            e.stopPropagation();
	            if (!targetKey) {
	                return;
	            }
	            var onEdit = _this.props.onEdit;
	            if (onEdit) {
	                onEdit(targetKey, 'remove');
	            }
	        };
	        _this.handleChange = function (activeKey) {
	            var onChange = _this.props.onChange;
	            if (onChange) {
	                onChange(activeKey);
	            }
	        };
	        return _this;
	    }

	    Tabs.prototype.render = function render() {
	        var _classNames,
	            _this2 = this;

	        var _props = this.props,
	            prefixCls = _props.prefixCls,
	            _props$className = _props.className,
	            className = _props$className === undefined ? '' : _props$className,
	            size = _props.size,
	            _props$type = _props.type,
	            type = _props$type === undefined ? 'line' : _props$type,
	            tabPosition = _props.tabPosition,
	            children = _props.children,
	            tabBarExtraContent = _props.tabBarExtraContent,
	            hideAdd = _props.hideAdd,
	            onTabClick = _props.onTabClick,
	            animated = _props.animated;

	        var cls = (0, _classnames2.default)(className, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-mini', size === 'small' || size === 'mini'), (0, _defineProperty3.default)(_classNames, prefixCls + '-vertical', tabPosition === 'left' || tabPosition === 'right'), (0, _defineProperty3.default)(_classNames, prefixCls + '-card', type.indexOf('card') >= 0), (0, _defineProperty3.default)(_classNames, prefixCls + '-' + type, true), (0, _defineProperty3.default)(_classNames, prefixCls + '-no-animation', !animated), _classNames));
	        // only card type tabs can be added and closed
	        var childrenWithClose = void 0;
	        if (type === 'editable-card') {
	            childrenWithClose = [];
	            _react2.default.Children.forEach(children, function (child, index) {
	                childrenWithClose.push((0, _react.cloneElement)(child, {
	                    tab: _react2.default.createElement(
	                        'div',
	                        null,
	                        child.props.tab,
	                        _react2.default.createElement(_icon2.default, { type: 'close', onClick: function onClick(e) {
	                                return _this2.removeTab(child.key, e);
	                            } })
	                    ),
	                    key: child.key || index
	                }));
	            });
	            // Add new tab handler
	            if (!hideAdd) {
	                tabBarExtraContent = _react2.default.createElement(
	                    'span',
	                    null,
	                    _react2.default.createElement(_icon2.default, { type: 'plus', className: prefixCls + '-new-tab', onClick: this.createNewTab }),
	                    tabBarExtraContent
	                );
	            }
	        }
	        tabBarExtraContent = tabBarExtraContent ? _react2.default.createElement(
	            'div',
	            { className: prefixCls + '-extra-content' },
	            tabBarExtraContent
	        ) : null;
	        var renderTabBar = function renderTabBar() {
	            return _react2.default.createElement(_ScrollableInkTabBar2.default, { extraContent: tabBarExtraContent, onTabClick: onTabClick });
	        };
	        return _react2.default.createElement(
	            _rcTabs2.default,
	            (0, _extends3.default)({}, this.props, { className: cls, tabBarPosition: tabPosition, renderTabBar: renderTabBar, renderTabContent: function renderTabContent() {
	                    return _react2.default.createElement(_TabContent2.default, { animated: animated, animatedWithMargin: true });
	                }, onChange: this.handleChange }),
	            childrenWithClose || children
	        );
	    };

	    return Tabs;
	}(_react2.default.Component);

	exports.default = Tabs;

	Tabs.TabPane = _rcTabs.TabPane;
	Tabs.defaultProps = {
	    prefixCls: 'ant-tabs',
	    hideAdd: false,
	    animated: true
	};
	module.exports = exports['default'];

/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(951);

/***/ },

/***/ 780:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(1740),
	    'card-top': __webpack_require__(1741),
	    'card': __webpack_require__(1742),
	    'custom-add-trigger': __webpack_require__(1743),
	    'disabled': __webpack_require__(1744),
	    'editable-card': __webpack_require__(1745),
	    'extra': __webpack_require__(1746),
	    'icon': __webpack_require__(1747),
	    'position': __webpack_require__(1748),
	    'size': __webpack_require__(1749),
	    'slide': __webpack_require__(1750),
	}

/***/ },

/***/ 951:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 1740:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(117);

	var _tabs = __webpack_require__(116);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "默认选中第一项。"]],
	    "en-US": [["p", "Default activate first tab."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/tabs/demo/basic.md",
	    "id": "components-tabs-demo-basic"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span> <span class=\"token attr-name\">defaultActiveKey</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>callback<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">1\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">2\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">3\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var TabPane = _tabs2.default.TabPane;function callback(key) {
	      console.log(key);
	    }return _react2.default.createElement(
	      _tabs2.default,
	      { defaultActiveKey: '1', onChange: callback },
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 1', key: '1' },
	        'Content of Tab Pane 1'
	      ),
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 2', key: '2' },
	        'Content of Tab Pane 2'
	      ),
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 3', key: '3' },
	        'Content of Tab Pane 3'
	      )
	    );
	  }
	};

/***/ },

/***/ 1741:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(117);

	var _tabs = __webpack_require__(116);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "用于容器顶部，需要一点额外的样式覆盖。"]],
	    "en-US": [["p", "Should be used at the top of container, needs to override styles."]]
	  },
	  "meta": {
	    "order": 10,
	    "title": {
	      "zh-CN": "卡片式页签容器",
	      "en-US": "Container of card type Tab"
	    },
	    "filename": "components/tabs/demo/card-top.md",
	    "id": "components-tabs-demo-card-top"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>card-container<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>card<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">1\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">2\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">3\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var TabPane = _tabs2.default.TabPane;return _react2.default.createElement(
	      'div',
	      { className: 'card-container' },
	      _react2.default.createElement(
	        _tabs2.default,
	        { type: 'card' },
	        _react2.default.createElement(
	          TabPane,
	          { tab: 'Tab 1', key: '1' },
	          'Content of Tab Pane 1'
	        ),
	        _react2.default.createElement(
	          TabPane,
	          { tab: 'Tab 2', key: '2' },
	          'Content of Tab Pane 2'
	        ),
	        _react2.default.createElement(
	          TabPane,
	          { tab: 'Tab 3', key: '3' },
	          'Content of Tab Pane 3'
	        )
	      )
	    );
	  },
	  "style": "#components-tabs-demo-card-top .code-box-demo {\n  background: #ECECEC;\n  overflow: hidden;\n  padding: 24px;\n}\n\n.card-container > .ant-tabs-card > .ant-tabs-content {\n  height: 120px;\n  margin-top: -16px;\n}\n\n.card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {\n  background: #fff;\n  padding: 16px;\n}\n\n.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {\n  border-color: transparent;\n}\n\n.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {\n  border-color: #fff;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-tabs-demo-card-top</span> <span class=\"token class\">.code-box-demo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#ECECEC</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">overflow</span><span class=\"token punctuation\">:</span> hidden<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.card-container</span> > <span class=\"token class\">.ant-tabs-card</span> > <span class=\"token class\">.ant-tabs-content</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">120</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-top</span><span class=\"token punctuation\">:</span> -<span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.card-container</span> > <span class=\"token class\">.ant-tabs-card</span> > <span class=\"token class\">.ant-tabs-content</span> > <span class=\"token class\">.ant-tabs-tabpane</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.card-container</span> > <span class=\"token class\">.ant-tabs-card</span> > <span class=\"token class\">.ant-tabs-bar</span> <span class=\"token class\">.ant-tabs-tab</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">border-color</span><span class=\"token punctuation\">:</span> transparent<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.card-container</span> > <span class=\"token class\">.ant-tabs-card</span> > <span class=\"token class\">.ant-tabs-bar</span> <span class=\"token class\">.ant-tabs-tab-active</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">border-color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1742:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(117);

	var _tabs = __webpack_require__(116);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "另一种样式的页签，不提供对应的垂直样式。"]],
	    "en-US": [["p", "Another type Tabs, which doesn't support vertical mode."]]
	  },
	  "meta": {
	    "order": 8,
	    "title": {
	      "zh-CN": "卡片式页签",
	      "en-US": "Card type tab"
	    },
	    "filename": "components/tabs/demo/card.md",
	    "id": "components-tabs-demo-card"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>callback<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>card<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">1\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">2\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">3\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var TabPane = _tabs2.default.TabPane;function callback(key) {
	      console.log(key);
	    }return _react2.default.createElement(
	      _tabs2.default,
	      { onChange: callback, type: 'card' },
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 1', key: '1' },
	        'Content of Tab Pane 1'
	      ),
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 2', key: '2' },
	        'Content of Tab Pane 2'
	      ),
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 3', key: '3' },
	        'Content of Tab Pane 3'
	      )
	    );
	  }
	};

/***/ },

/***/ 1743:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style4 = __webpack_require__(117);

	var _tabs = __webpack_require__(116);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "隐藏默认的页签增加图标，给自定义触发器绑定事件。"]],
	    "en-US": [["p", "Hide default plus icon, and bind event for customized trigger."]]
	  },
	  "meta": {
	    "order": 11,
	    "title": {
	      "zh-CN": "自定义新增页签触发器",
	      "en-US": "Customized trigger of new tab"
	    },
	    "filename": "components/tabs/demo/custom-add-trigger.md",
	    "id": "components-tabs-demo-custom-add-trigger"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Demo <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>newTabIndex <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> panes <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Tab 1'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'Content of Tab Pane 1'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Tab 2'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'Content of Tab Pane 2'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      activeKey<span class=\"token punctuation\">:</span> panes<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">,</span>\n      panes<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>activeKey<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> activeKey <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onEdit</span><span class=\"token punctuation\">(</span>targetKey<span class=\"token punctuation\">,</span> action<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">[</span>action<span class=\"token punctuation\">]</span><span class=\"token punctuation\">(</span>targetKey<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">add</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> panes <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> activeKey <span class=\"token operator\">=</span> <span class=\"token template-string\"><span class=\"token string\">`newTab</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>newTabIndex<span class=\"token operator\">++</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">;</span>\n    panes<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'New Tab'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'New Tab Pane'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> activeKey <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> panes<span class=\"token punctuation\">,</span> activeKey <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">remove</span><span class=\"token punctuation\">(</span>targetKey<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> activeKey <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>activeKey<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">let</span> lastIndex<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>pane<span class=\"token punctuation\">,</span> i<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>pane<span class=\"token punctuation\">.</span>key <span class=\"token operator\">===</span> targetKey<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        lastIndex <span class=\"token operator\">=</span> i <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> panes <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>pane <span class=\"token operator\">=</span><span class=\"token operator\">></span> pane<span class=\"token punctuation\">.</span>key <span class=\"token operator\">!==</span> targetKey<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>lastIndex <span class=\"token operator\">>=</span> <span class=\"token number\">0</span> <span class=\"token operator\">&amp;&amp;</span> activeKey <span class=\"token operator\">===</span> targetKey<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      activeKey <span class=\"token operator\">=</span> panes<span class=\"token punctuation\">[</span>lastIndex<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> panes<span class=\"token punctuation\">,</span> activeKey <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ghost<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>add<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>ADD<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span>\n          <span class=\"token attr-name\">hideAdd</span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">activeKey</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>activeKey<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>editable-card<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">onEdit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onEdit<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>pane <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>pane<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>pane<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>pane<span class=\"token punctuation\">.</span>content<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var TabPane = _tabs2.default.TabPane;var Demo = _react2.default.createClass({
	      displayName: 'Demo',
	      getInitialState: function getInitialState() {
	        this.newTabIndex = 0;var panes = [{ title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' }, { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' }];return { activeKey: panes[0].key, panes: panes };
	      },
	      onChange: function onChange(activeKey) {
	        this.setState({ activeKey: activeKey });
	      },
	      onEdit: function onEdit(targetKey, action) {
	        this[action](targetKey);
	      },
	      add: function add() {
	        var panes = this.state.panes;
	        var activeKey = 'newTab' + this.newTabIndex++;panes.push({ title: 'New Tab', content: 'New Tab Pane',
	          key: activeKey });this.setState({ panes: panes, activeKey: activeKey });
	      },
	      remove: function remove(targetKey) {
	        var activeKey = this.state.activeKey;var lastIndex = void 0;this.state.panes.forEach(function (pane, i) {
	          if (pane.key === targetKey) {
	            lastIndex = i - 1;
	          }
	        });var panes = this.state.panes.filter(function (pane) {
	          return pane.key !== targetKey;
	        });if (lastIndex >= 0 && activeKey === targetKey) {
	          activeKey = panes[lastIndex].key;
	        }this.setState({ panes: panes, activeKey: activeKey });
	      },
	      render: function render() {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { style: { marginBottom: 16 } },
	            _react2.default.createElement(
	              _button2.default,
	              { type: 'ghost', onClick: this.add },
	              'ADD'
	            )
	          ),
	          _react2.default.createElement(
	            _tabs2.default,
	            { hideAdd: true, onChange: this.onChange, activeKey: this.state.activeKey, type: 'editable-card', onEdit: this.onEdit },
	            this.state.panes.map(function (pane) {
	              return _react2.default.createElement(
	                TabPane,
	                { tab: pane.title, key: pane.key },
	                pane.content
	              );
	            })
	          )
	        );
	      }
	    });return _react2.default.createElement(Demo, null);
	  }
	};

/***/ },

/***/ 1744:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(117);

	var _tabs = __webpack_require__(116);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "禁用某一项。"]],
	    "en-US": [["p", "Disabled a tab."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "禁用",
	      "en-US": "Disabled"
	    },
	    "filename": "components/tabs/demo/disabled.md",
	    "id": "components-tabs-demo-disabled"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span> <span class=\"token attr-name\">defaultActiveKey</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">1\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Tab <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">2\"</span> <span class=\"token attr-name\">disabled</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Tab <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">3\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Tab <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var TabPane = _tabs2.default.TabPane;return _react2.default.createElement(
	      _tabs2.default,
	      { defaultActiveKey: '1' },
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 1', key: '1' },
	        'Tab 1'
	      ),
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 2', disabled: true, key: '2' },
	        'Tab 2'
	      ),
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 3', key: '3' },
	        'Tab 3'
	      )
	    );
	  }
	};

/***/ },

/***/ 1745:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(117);

	var _tabs = __webpack_require__(116);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "只有卡片样式的页签支持新增和关闭选项。"]],
	    "en-US": [["p", "Only card type Tabs support adding & closeable."]]
	  },
	  "meta": {
	    "order": 9,
	    "title": {
	      "zh-CN": "新增和关闭页签",
	      "en-US": "Add & close tab"
	    },
	    "filename": "components/tabs/demo/editable-card.md",
	    "id": "components-tabs-demo-editable-card"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Demo <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>newTabIndex <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> panes <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Tab 1'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'Content of Tab 1'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Tab 2'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'Content of Tab 2'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      activeKey<span class=\"token punctuation\">:</span> panes<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">,</span>\n      panes<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>activeKey<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> activeKey <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onEdit</span><span class=\"token punctuation\">(</span>targetKey<span class=\"token punctuation\">,</span> action<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">[</span>action<span class=\"token punctuation\">]</span><span class=\"token punctuation\">(</span>targetKey<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">add</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> panes <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> activeKey <span class=\"token operator\">=</span> <span class=\"token template-string\"><span class=\"token string\">`newTab</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>newTabIndex<span class=\"token operator\">++</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">;</span>\n    panes<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'New Tab'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'Content of new Tab'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> activeKey <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> panes<span class=\"token punctuation\">,</span> activeKey <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">remove</span><span class=\"token punctuation\">(</span>targetKey<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> activeKey <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>activeKey<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">let</span> lastIndex<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>pane<span class=\"token punctuation\">,</span> i<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>pane<span class=\"token punctuation\">.</span>key <span class=\"token operator\">===</span> targetKey<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        lastIndex <span class=\"token operator\">=</span> i <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> panes <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>pane <span class=\"token operator\">=</span><span class=\"token operator\">></span> pane<span class=\"token punctuation\">.</span>key <span class=\"token operator\">!==</span> targetKey<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>lastIndex <span class=\"token operator\">>=</span> <span class=\"token number\">0</span> <span class=\"token operator\">&amp;&amp;</span> activeKey <span class=\"token operator\">===</span> targetKey<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      activeKey <span class=\"token operator\">=</span> panes<span class=\"token punctuation\">[</span>lastIndex<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> panes<span class=\"token punctuation\">,</span> activeKey <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">activeKey</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>activeKey<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>editable-card<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">onEdit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onEdit<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>pane <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>pane<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>pane<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>pane<span class=\"token punctuation\">.</span>content<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var TabPane = _tabs2.default.TabPane;var Demo = _react2.default.createClass({
	      displayName: 'Demo',
	      getInitialState: function getInitialState() {
	        this.newTabIndex = 0;var panes = [{ title: 'Tab 1', content: 'Content of Tab 1', key: '1' }, { title: 'Tab 2', content: 'Content of Tab 2', key: '2' }];return { activeKey: panes[0].key, panes: panes };
	      },
	      onChange: function onChange(activeKey) {
	        this.setState({ activeKey: activeKey });
	      },
	      onEdit: function onEdit(targetKey, action) {
	        this[action](targetKey);
	      },
	      add: function add() {
	        var panes = this.state.panes;var activeKey = 'newTab' + this.newTabIndex++;panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });this.setState({ panes: panes, activeKey: activeKey });
	      },
	      remove: function remove(targetKey) {
	        var activeKey = this.state.activeKey;var lastIndex = void 0;this.state.panes.forEach(function (pane, i) {
	          if (pane.key === targetKey) {
	            lastIndex = i - 1;
	          }
	        });var panes = this.state.panes.filter(function (pane) {
	          return pane.key !== targetKey;
	        });if (lastIndex >= 0 && activeKey === targetKey) {
	          activeKey = panes[lastIndex].key;
	        }this.setState({ panes: panes, activeKey: activeKey });
	      },
	      render: function render() {
	        return _react2.default.createElement(
	          _tabs2.default,
	          { onChange: this.onChange, activeKey: this.state.activeKey, type: 'editable-card', onEdit: this.onEdit },
	          this.state.panes.map(function (pane) {
	            return _react2.default.createElement(
	              TabPane,
	              { tab: pane.title, key: pane.key },
	              pane.content
	            );
	          })
	        );
	      }
	    });return _react2.default.createElement(Demo, null);
	  }
	};

/***/ },

/***/ 1746:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style4 = __webpack_require__(117);

	var _tabs = __webpack_require__(116);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "可以在页签右边添加附加操作。"]],
	    "en-US": [["p", "You can add extra actions to the right of Tabs."]]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "附加内容",
	      "en-US": "Extra content"
	    },
	    "filename": "components/tabs/demo/extra.md",
	    "id": "components-tabs-demo-extra"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> operations <span class=\"token operator\">=</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>Extra Action<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span> <span class=\"token attr-name\">tabBarExtraContent</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>operations<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">1\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">2\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">3\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var TabPane = _tabs2.default.TabPane;var operations = _react2.default.createElement(
	      _button2.default,
	      null,
	      'Extra Action'
	    );return _react2.default.createElement(
	      _tabs2.default,
	      { tabBarExtraContent: operations },
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 1', key: '1' },
	        'Content of tab 1'
	      ),
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 2', key: '2' },
	        'Content of tab 2'
	      ),
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 3', key: '3' },
	        'Content of tab 3'
	      )
	    );
	  }
	};

/***/ },

/***/ 1747:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _style4 = __webpack_require__(117);

	var _tabs = __webpack_require__(116);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "有图标的标签。"]],
	    "en-US": [["p", "The Tab with Icon."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "图标",
	      "en-US": "Icon"
	    },
	    "filename": "components/tabs/demo/icon.md",
	    "id": "components-tabs-demo-icon"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span> <span class=\"token attr-name\">defaultActiveKey</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab={&lt;span</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>apple<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>Tab <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>\n      Tab <span class=\"token number\">1</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab={&lt;span</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>android<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>Tab <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>\n      Tab <span class=\"token number\">2</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var TabPane = _tabs2.default.TabPane;return _react2.default.createElement(
	      _tabs2.default,
	      { defaultActiveKey: '2' },
	      _react2.default.createElement(
	        TabPane,
	        { tab: _react2.default.createElement(
	            'span',
	            null,
	            _react2.default.createElement(_icon2.default, { type: 'apple' }),
	            'Tab 1'
	          ), key: '1' },
	        'Tab 1'
	      ),
	      _react2.default.createElement(
	        TabPane,
	        { tab: _react2.default.createElement(
	            'span',
	            null,
	            _react2.default.createElement(_icon2.default, { type: 'android' }),
	            'Tab 2'
	          ), key: '2' },
	        'Tab 2'
	      )
	    );
	  }
	};

/***/ },

/***/ 1748:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(34);

	var _select = __webpack_require__(31);

	var _select2 = _interopRequireDefault(_select);

	var _style4 = __webpack_require__(117);

	var _tabs = __webpack_require__(116);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "有四个位置，", ["code", "tabPosition=\"left|right|top|bottom\""], "。"]],
	    "en-US": [["p", "Tab's position: left, right, top or bottom."]]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "位置",
	      "en-US": "Position"
	    },
	    "filename": "components/tabs/demo/position.md",
	    "id": "components-tabs-demo-position"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs<span class=\"token punctuation\">,</span> Select <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">.</span>Option<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Demo <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      tabPosition<span class=\"token punctuation\">:</span> <span class=\"token string\">'top'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">changeTabPosition</span><span class=\"token punctuation\">(</span>tabPosition<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> tabPosition <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          Tab position：\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>tabPosition<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>changeTabPosition<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">dropdownMatchSelectWidth</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>top<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>top<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>bottom<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>left<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>right<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span> <span class=\"token attr-name\">tabPosition</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>tabPosition<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">1\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">2\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">3\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var TabPane = _tabs2.default.TabPane;var Option = _select2.default.Option;var Demo = _react2.default.createClass({
	      displayName: 'Demo',
	      getInitialState: function getInitialState() {
	        return { tabPosition: 'top' };
	      },
	      changeTabPosition: function changeTabPosition(tabPosition) {
	        this.setState({ tabPosition: tabPosition });
	      },
	      render: function render() {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { style: { marginBottom: 16 } },
	            'Tab position\uFF1A',
	            _react2.default.createElement(
	              _select2.default,
	              { value: this.state.tabPosition, onChange: this.changeTabPosition, dropdownMatchSelectWidth: false },
	              _react2.default.createElement(
	                Option,
	                { value: 'top' },
	                'top'
	              ),
	              _react2.default.createElement(
	                Option,
	                { value: 'bottom' },
	                'bottom'
	              ),
	              _react2.default.createElement(
	                Option,
	                { value: 'left' },
	                'left'
	              ),
	              _react2.default.createElement(
	                Option,
	                { value: 'right' },
	                'right'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            _tabs2.default,
	            { tabPosition: this.state.tabPosition },
	            _react2.default.createElement(
	              TabPane,
	              { tab: 'Tab 1', key: '1' },
	              'Content of Tab 1'
	            ),
	            _react2.default.createElement(
	              TabPane,
	              { tab: 'Tab 2', key: '2' },
	              'Content of Tab 2'
	            ),
	            _react2.default.createElement(
	              TabPane,
	              { tab: 'Tab 3', key: '3' },
	              'Content of Tab 3'
	            )
	          )
	        );
	      }
	    });return _react2.default.createElement(Demo, null);
	  }
	};

/***/ },

/***/ 1749:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(117);

	var _tabs = __webpack_require__(116);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "用在弹出框等较狭窄的容器内。"]],
	    "en-US": [["p", "Small size can be used in Modal."]]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "迷你型",
	      "en-US": "Mini tab"
	    },
	    "filename": "components/tabs/demo/size.md",
	    "id": "components-tabs-demo-size"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span> <span class=\"token attr-name\">defaultActiveKey</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">1\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">2\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">3\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var TabPane = _tabs2.default.TabPane;return _react2.default.createElement(
	      _tabs2.default,
	      { defaultActiveKey: '2', size: 'small' },
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 1', key: '1' },
	        'Content of tab 1'
	      ),
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 2', key: '2' },
	        'Content of tab 2'
	      ),
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 3', key: '3' },
	        'Content of tab 3'
	      )
	    );
	  }
	};

/***/ },

/***/ 1750:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(117);

	var _tabs = __webpack_require__(116);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "可以左右滑动，容纳更多标签。"]],
	    "en-US": [["p", "Tab can be slide to left or right, which is used for a lot of tabs. "]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "滑动",
	      "en-US": "Slide"
	    },
	    "filename": "components/tabs/demo/slide.md",
	    "id": "components-tabs-demo-slide"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span> <span class=\"token attr-name\">defaultActiveKey</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">1\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">2\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">3\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">4\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">4</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">5\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>5<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">5</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">6\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">6</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">7\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>7<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">7</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">8\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>8<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">8</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">9\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>9<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">9</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var TabPane = _tabs2.default.TabPane;return _react2.default.createElement(
	      _tabs2.default,
	      { defaultActiveKey: '1' },
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 1', key: '1' },
	        'Content of tab 1'
	      ),
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 2', key: '2' },
	        'Content of tab 2'
	      ),
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 3', key: '3' },
	        'Content of tab 3'
	      ),
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 4', key: '4' },
	        'Content of tab 4'
	      ),
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 5', key: '5' },
	        'Content of tab 5'
	      ),
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 6', key: '6' },
	        'Content of tab 6'
	      ),
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 7', key: '7' },
	        'Content of tab 7'
	      ),
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 8', key: '8' },
	        'Content of tab 8'
	      ),
	      _react2.default.createElement(
	        TabPane,
	        { tab: 'Tab 9', key: '9' },
	        'Content of tab 9'
	      )
	    );
	  }
	};

/***/ }

});