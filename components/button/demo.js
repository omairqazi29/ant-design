webpackJsonp([17,202],{

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(10);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。"], ["p", "通过设置 ", ["code", "type"], " 为 ", ["code", "primary"], " ", ["code", "ghost"], " ", ["code", "dashed"], " 可分别创建主按钮、幽灵按钮、虚线按钮，若不设置 ", ["code", "type"], " 值则为次按钮。不同的样式可以用来区别其重要程度。"], ["p", "主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。"]],
	    "en-US": [["p", "There are primary button, default button, ghost button and dashed button in antd."], ["p", ["code", "type"], " can be set as ", ["code", "primary"], " or ", ["code", "ghost"], " or ", ["code", "dashed"], ", in order to create primary button or ghost button or dashed button. If nothing is provided to ", ["code", "type"], ", we will get default button. Users can tell the significance of button from it's appearance."], ["p", "Primary button and default button can be used without other button, but ghost button must be used with primary button."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "按钮类型",
	      "en-US": "Type"
	    },
	    "filename": "components/button/demo/basic.md",
	    "id": "components-button-demo-basic"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Button <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Primary<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span><span class=\"token punctuation\" >></span></span>Default<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Ghost<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>dashed<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Dashed<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'primary' },
	        'Primary'
	      ),
	      _react2.default.createElement(
	        _button2.default,
	        null,
	        'Default'
	      ),
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'ghost' },
	        'Ghost'
	      ),
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'dashed' },
	        'Dashed'
	      )
	    );
	  }
	};

/***/ },

/***/ 652:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(14);

	var _icon = __webpack_require__(12);

	var _icon2 = _interopRequireDefault(_icon);

	var _style4 = __webpack_require__(10);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "可以将多个 ", ["code", "Button"], " 放入 ", ["code", "Button.Group"], " 的容器中。"], ["p", "通过设置 ", ["code", "size"], " 为 ", ["code", "large"], " ", ["code", "small"], " 分别把按钮组合设为大、小尺寸。若不设置 ", ["code", "size"], "，则尺寸为中。"]],
	    "en-US": [["p", "Buttons can be grouped by placing multiple ", ["code", "Button"], " components into a ", ["code", "Button.Group"], "."], ["p", "The ", ["code", "size"], " can be set to ", ["code", "large"], ", ", ["code", "small"], " or left unset resulting in a default size."]]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "按钮组合",
	      "en-US": "Button Group"
	    },
	    "filename": "components/button/demo/button-group.md",
	    "id": "components-button-demo-button-group"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Button<span class=\"token punctuation\" >,</span> Icon <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> ButtonGroup <span class=\"token operator\" >=</span> Button<span class=\"token punctuation\" >.</span>Group<span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span><span class=\"token punctuation\" >></span></span>Basic<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ButtonGroup</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span><span class=\"token punctuation\" >></span></span>Cancel<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>OK<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ButtonGroup</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ButtonGroup</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span>L<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span>M<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span>R<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ButtonGroup</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ButtonGroup</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>L<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span><span class=\"token punctuation\" >></span></span>M<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>M<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>dashed<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>R<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ButtonGroup</span><span class=\"token punctuation\" >></span></span>\n\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span><span class=\"token punctuation\" >></span></span>With Icon<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ButtonGroup</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>left<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>Go back\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        Go forward<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>right<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ButtonGroup</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ButtonGroup</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >icon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>cloud<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >icon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>cloud-download<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ButtonGroup</span><span class=\"token punctuation\" >></span></span>\n\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>h4</span><span class=\"token punctuation\" >></span></span>Size<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>h4</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ButtonGroup</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Large<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Large<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ButtonGroup</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ButtonGroup</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Default<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Default<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ButtonGroup</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ButtonGroup</span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Small<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Small<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ButtonGroup</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n  mountNode\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var ButtonGroup = _button2.default.Group;return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h4',
	        null,
	        'Basic'
	      ),
	      _react2.default.createElement(
	        ButtonGroup,
	        null,
	        _react2.default.createElement(
	          _button2.default,
	          null,
	          'Cancel'
	        ),
	        _react2.default.createElement(
	          _button2.default,
	          { type: 'primary' },
	          'OK'
	        )
	      ),
	      _react2.default.createElement(
	        ButtonGroup,
	        null,
	        _react2.default.createElement(
	          _button2.default,
	          { disabled: true },
	          'L'
	        ),
	        _react2.default.createElement(
	          _button2.default,
	          { disabled: true },
	          'M'
	        ),
	        _react2.default.createElement(
	          _button2.default,
	          { disabled: true },
	          'R'
	        )
	      ),
	      _react2.default.createElement(
	        ButtonGroup,
	        null,
	        _react2.default.createElement(
	          _button2.default,
	          { type: 'primary' },
	          'L'
	        ),
	        _react2.default.createElement(
	          _button2.default,
	          null,
	          'M'
	        ),
	        _react2.default.createElement(
	          _button2.default,
	          { type: 'ghost' },
	          'M'
	        ),
	        _react2.default.createElement(
	          _button2.default,
	          { type: 'dashed' },
	          'R'
	        )
	      ),
	      _react2.default.createElement(
	        'h4',
	        null,
	        'With Icon'
	      ),
	      _react2.default.createElement(
	        ButtonGroup,
	        null,
	        _react2.default.createElement(
	          _button2.default,
	          { type: 'primary' },
	          _react2.default.createElement(_icon2.default, { type: 'left' }),
	          'Go back'
	        ),
	        _react2.default.createElement(
	          _button2.default,
	          { type: 'primary' },
	          'Go forward',
	          _react2.default.createElement(_icon2.default, { type: 'right' })
	        )
	      ),
	      _react2.default.createElement(
	        ButtonGroup,
	        null,
	        _react2.default.createElement(_button2.default, { type: 'primary', icon: 'cloud' }),
	        _react2.default.createElement(_button2.default, { type: 'primary', icon: 'cloud-download' })
	      ),
	      _react2.default.createElement(
	        'h4',
	        null,
	        'Size'
	      ),
	      _react2.default.createElement(
	        ButtonGroup,
	        { size: 'large' },
	        _react2.default.createElement(
	          _button2.default,
	          { type: 'ghost' },
	          'Large'
	        ),
	        _react2.default.createElement(
	          _button2.default,
	          { type: 'ghost' },
	          'Large'
	        )
	      ),
	      _react2.default.createElement(
	        ButtonGroup,
	        null,
	        _react2.default.createElement(
	          _button2.default,
	          { type: 'ghost' },
	          'Default'
	        ),
	        _react2.default.createElement(
	          _button2.default,
	          { type: 'ghost' },
	          'Default'
	        )
	      ),
	      _react2.default.createElement(
	        ButtonGroup,
	        { size: 'small' },
	        _react2.default.createElement(
	          _button2.default,
	          { type: 'ghost' },
	          'Small'
	        ),
	        _react2.default.createElement(
	          _button2.default,
	          { type: 'ghost' },
	          'Small'
	        )
	      )
	    );
	  },
	  "style": "\n#components-button-demo-button-group h4 {\n  margin: 16px 0;\n  font-size: 14px;\n  line-height: 1;\n  font-weight: normal;\n}\n#components-button-demo-button-group h4:first-child {\n  margin-top: 0;\n}\n#components-button-demo-button-group .ant-btn-group {\n  margin-right: 8px;\n}\n#components-button-demo-button-group .ant-btn {\n  margin-bottom: 12px;\n  margin-right: 0;\n}\n"
	};

/***/ },

/***/ 653:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(10);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "添加 ", ["code", "disabled"], " 属性即可让按钮处于不可用状态，同时按钮样式也会改变。"]],
	    "en-US": [["p", "To mark a button as disabled, add the ", ["code", "disabled"], " property to the ", ["code", "Button"], "."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "不可用状态",
	      "en-US": "Disabled"
	    },
	    "filename": "components/button/demo/disabled.md",
	    "id": "components-button-demo-disabled"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Button <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Primary<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span><span class=\"token function\" >Primary</span><span class=\"token punctuation\" >(</span>disabled<span class=\"token punctuation\" >)</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span><span class=\"token punctuation\" >></span></span>Default<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span><span class=\"token function\" >Default</span><span class=\"token punctuation\" >(</span>disabled<span class=\"token punctuation\" >)</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Ghost<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span><span class=\"token function\" >Ghost</span><span class=\"token punctuation\" >(</span>disabled<span class=\"token punctuation\" >)</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>dashed<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Dashed<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>dashed<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span><span class=\"token function\" >Dashed</span><span class=\"token punctuation\" >(</span>disabled<span class=\"token punctuation\" >)</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n  mountNode\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'primary' },
	        'Primary'
	      ),
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'primary', disabled: true },
	        'Primary(disabled)'
	      ),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(
	        _button2.default,
	        null,
	        'Default'
	      ),
	      _react2.default.createElement(
	        _button2.default,
	        { disabled: true },
	        'Default(disabled)'
	      ),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'ghost' },
	        'Ghost'
	      ),
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'ghost', disabled: true },
	        'Ghost(disabled)'
	      ),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'dashed' },
	        'Dashed'
	      ),
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'dashed', disabled: true },
	        'Dashed(disabled)'
	      )
	    );
	  }
	};

/***/ },

/***/ 654:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(10);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "当需要在 ", ["code", "Button"], " 内嵌入 ", ["code", "Icon"], " 时，可以设置 ", ["code", "icon"], " 属性，或者直接在 ", ["code", "Button"], " 内使用 ", ["code", "Icon"], " 组件。"], ["p", "如果想控制 ", ["code", "Icon"], " 具体的位置，只能直接使用 ", ["code", "Icon"], " 组件，而非 ", ["code", "icon"], " 属性。"]],
	    "en-US": [["p", ["code", "Button"], " components can contain an ", ["code", "Icon"], ". This is done by setting the ", ["code", "icon"], " property or placing an ", ["code", "Icon"], " component within the ", ["code", "Button"]], ["p", "If you want specific control over the positioning and placement of the ", ["code", "Icon"], ", then that should be done by placing the ", ["code", "Icon"], " component within the ", ["code", "Button"], " rather than using the ", ["code", "icon"], " property."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "图标按钮",
	      "en-US": "Icon"
	    },
	    "filename": "components/button/demo/icon.md",
	    "id": "components-button-demo-icon"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Button <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >icon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >icon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Search<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >shape</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle-outline<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >icon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >icon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>search<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Search<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n  mountNode\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_button2.default, { type: 'primary', shape: 'circle', icon: 'search' }),
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'primary', icon: 'search' },
	        'Search'
	      ),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(_button2.default, { type: 'ghost', shape: 'circle-outline', icon: 'search' }),
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'ghost', icon: 'search' },
	        'Search'
	      )
	    );
	  }
	};

/***/ },

/***/ 655:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(10);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "添加 ", ["code", "loading"], " 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。"]],
	    "en-US": [["p", "A loading indicator can be added to a button by setting the ", ["code", "loading"], " property on the ", ["code", "Button"], "."]]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "加载中状态",
	      "en-US": "Loading"
	    },
	    "filename": "components/button/demo/loading.md",
	    "id": "components-button-demo-loading"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Button <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> App <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      loading<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n      iconLoading<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >false</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >enterLoading</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> loading<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >enterIconLoading</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> iconLoading<span class=\"token punctuation\" >:</span> <span class=\"token boolean\" >true</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >loading</span><span class=\"token punctuation\" >></span></span>\n          Loading\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >loading</span><span class=\"token punctuation\" >></span></span>\n          Loading\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >loading</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>loading<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>enterLoading<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n          Click me<span class=\"token operator\" >!</span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >icon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>poweroff<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >loading</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>iconLoading<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>enterIconLoading<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n          Click me<span class=\"token operator\" >!</span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>App</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return {
	          loading: false, iconLoading: false };
	      },
	      enterLoading: function enterLoading() {
	        this.setState({ loading: true });
	      },
	      enterIconLoading: function enterIconLoading() {
	        this.setState({ iconLoading: true });
	      },
	      render: function render() {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _button2.default,
	            { type: 'primary', loading: true },
	            'Loading'
	          ),
	          _react2.default.createElement(
	            _button2.default,
	            { type: 'primary', size: 'small', loading: true },
	            'Loading'
	          ),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            _button2.default,
	            { type: 'primary', loading: this.state.loading, onClick: this.enterLoading },
	            'Click me!'
	          ),
	          _react2.default.createElement(
	            _button2.default,
	            { type: 'primary', icon: 'poweroff', loading: this.state.iconLoading, onClick: this.enterIconLoading },
	            'Click me!'
	          )
	        );
	      }
	    });return _react2.default.createElement(App, null);
	  }
	};

/***/ },

/***/ 656:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(95);

	var _dropdown = __webpack_require__(94);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _style6 = __webpack_require__(14);

	var _icon = __webpack_require__(12);

	var _icon2 = _interopRequireDefault(_icon);

	var _style7 = __webpack_require__(10);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _style8 = __webpack_require__(34);

	var _menu = __webpack_require__(33);

	var _menu2 = _interopRequireDefault(_menu);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "按钮组合使用时，推荐使用1个主操作 + n 个次操作，3个以上操作时把更多操作放到 ", ["code", "Dropdown.Button"], " 中组合使用。"]],
	    "en-US": [["p", "If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into ", ["code", "Dropdown.Button"], "."]]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "多个按钮组合",
	      "en-US": "Multiple Buttons"
	    },
	    "filename": "components/button/demo/multiple.md",
	    "id": "components-button-demo-multiple"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Button<span class=\"token punctuation\" >,</span> Menu<span class=\"token punctuation\" >,</span> Dropdown<span class=\"token punctuation\" >,</span> Icon <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >handleMenuClick</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'click'</span><span class=\"token punctuation\" >,</span> e<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\n<span class=\"token keyword\" >const</span> menu <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu</span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>handleMenuClick<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>1st item<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>2nd item<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>3<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>3rd item<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>primary<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>secondary<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Dropdown</span> <span class=\"token attr-name\" >overlay</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>menu<span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        more <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>down<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Dropdown</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n  mountNode\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    function handleMenuClick(e) {
	      console.log('click', e);
	    }var menu = _react2.default.createElement(
	      _menu2.default,
	      { onClick: handleMenuClick },
	      _react2.default.createElement(
	        _menu2.default.Item,
	        { key: '1' },
	        '1st item'
	      ),
	      _react2.default.createElement(
	        _menu2.default.Item,
	        { key: '2' },
	        '2nd item'
	      ),
	      _react2.default.createElement(
	        _menu2.default.Item,
	        { key: '3' },
	        '3rd item'
	      )
	    );return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'primary' },
	        'primary'
	      ),
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'ghost' },
	        'secondary'
	      ),
	      _react2.default.createElement(
	        _dropdown2.default,
	        { overlay: menu },
	        _react2.default.createElement(
	          _button2.default,
	          { type: 'ghost' },
	          'more ',
	          _react2.default.createElement(_icon2.default, { type: 'down' })
	        )
	      )
	    );
	  }
	};

/***/ },

/***/ 657:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(10);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "按钮有大、中、小三种尺寸。"], ["p", "通过设置 ", ["code", "size"], " 为 ", ["code", "large"], " ", ["code", "small"], " 分别把按钮设为大、小尺寸。若不设置 ", ["code", "size"], "，则尺寸为中。"]],
	    "en-US": [["p", "Ant Design supports a default button size as well as a large and small size."], ["p", "If a large or small button is desired, set the ", ["code", "size"], " property to either ", ["code", "large"], " or ", ["code", "small"], " respectively. Omit the ", ["code", "size"], " property for a button with the default size."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "按钮尺寸",
	      "en-US": "Size"
	    },
	    "filename": "components/button/demo/size.md",
	    "id": "components-button-demo-size"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Button <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>large<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Large<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Default<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>primary<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >size</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>small<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Small<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Button</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >,</span>\n  mountNode\n<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'primary', size: 'large' },
	        'Large'
	      ),
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'primary' },
	        'Default'
	      ),
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'primary', size: 'small' },
	        'Small'
	      )
	    );
	  }
	};

/***/ },

/***/ 1153:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(651),
	    'button-group': __webpack_require__(652),
	    'disabled': __webpack_require__(653),
	    'icon': __webpack_require__(654),
	    'loading': __webpack_require__(655),
	    'multiple': __webpack_require__(656),
	    'size': __webpack_require__(657),
	}

/***/ }

});