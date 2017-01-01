webpackJsonp([63,209],{

/***/ 1072:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", ["p", "依据『巧用过渡』的设计原则，Ant Design 提供了一些预设的组件动画和缓动函数。更多动画可参考 ", ["a", {
	    "title": null,
	    "href": "https://motion.ant.design/"
	  }, "Ant Motion"]], ["blockquote", ["p", "示例延长了动画时长以便展示。"]], function jsonmlReactLoader() {
	    var cssAnimation = __webpack_require__(279);var antd = __webpack_require__(46);var Select = antd.Select;var Option = Select.Option;
	    var OptGroup = Select.OptGroup;var motions = [];motions = motions.concat([[{ name: '淡入', value: 'fade', direction: 'enter', type: '渐隐'
	    }, { name: '淡出', value: 'fade', direction: 'leave', type: '渐隐' }]]);motions = motions.concat([[{ name: '中心放大', value: 'zoom', direction: 'enter', type: '缩放' }, { name: '中心缩小', value: 'zoom', direction: 'leave', type: '缩放' }, { name: '上方放大', value: 'zoom-up', direction: 'enter', type: '缩放' }, { name: '上方缩小', value: 'zoom-up', direction: 'leave', type: '缩放' }, { name: '下方放大', value: 'zoom-down', direction: 'enter', type: '缩放' }, { name: '下方缩小', value: 'zoom-down', direction: 'leave', type: '缩放' }, { name: '左方放大', value: 'zoom-left', direction: 'enter', type: '缩放' }, { name: '左方缩小', value: 'zoom-left', direction: 'leave', type: '缩放' }, { name: '右方放大', value: 'zoom-right', direction: 'enter', type: '缩放' }, { name: '右方缩小', value: 'zoom-right', direction: 'leave', type: '缩放' }]]);motions = motions.concat([[{ name: '上方滑入', value: 'move-up', direction: 'enter', type: '移动' }, { name: '上方滑出', value: 'move-up', direction: 'leave', type: '移动' }, { name: '下方滑入', value: 'move-down', direction: 'enter', type: '移动' }, { name: '下方滑出', value: 'move-down', direction: 'leave', type: '移动' }, { name: '左方滑入', value: 'move-left', direction: 'enter', type: '移动' }, { name: '左方滑出', value: 'move-left', direction: 'leave', type: '移动' }, { name: '右方滑入', value: 'move-right', direction: 'enter', type: '移动' }, { name: '右方滑出', value: 'move-right', direction: 'leave', type: '移动' }]]);motions = motions.concat([[{ name: '上方展开', value: 'slide-up', direction: 'enter', type: '伸缩' }, { name: '上方缩回', value: 'slide-up', direction: 'leave', type: '伸缩' }, { name: '下方展开', value: 'slide-down', direction: 'enter', type: '伸缩' }, { name: '下方缩回', value: 'slide-down', direction: 'leave', type: '伸缩' }, { name: '左方展开', value: 'slide-left', direction: 'enter', type: '伸缩' }, { name: '左方缩回', value: 'slide-left', direction: 'leave', type: '伸缩' }, { name: '右方展开', value: 'slide-right', direction: 'enter', type: '伸缩' }, { name: '右方缩回', value: 'slide-right', direction: 'leave', type: '伸缩' }]]);motions = motions.concat([[{ name: '摇摆', value: 'swing', direction: 'enter', type: '其他' }]]);var leave = '-leave';var Test = _react2.default.createClass({
	      displayName: 'Test',
	      handleChange: function handleChange(e) {
	        var _this = this;

	        var value = e;if (value) {
	          this.demoNode.style.visibility = '';cssAnimation(this.demoNode, value, function () {
	            if (value.slice(-leave.length) === leave) {
	              _this.demoNode.style.visibility = 'hidden';
	            }
	          });
	        }
	      },
	      componentDidMount: function componentDidMount() {
	        this.demoNode = _reactDom2.default.findDOMNode(this.refs.demo);
	      },
	      render: function render() {
	        var options = [_react2.default.createElement(
	          Option,
	          { value: '', key: 'placeholder' },
	          '\u8BF7\u9009\u62E9\u9884\u8BBE\u52A8\u753B'
	        )].concat(motions.map(function (m, groupIndex) {
	          var opts = m.map(function (m2, optIndex) {
	            return _react2.default.createElement(
	              Option,
	              { key: optIndex, value: m2.value + "-" + m2.direction },
	              m2.name + " " + m2.value
	            );
	          });return _react2.default.createElement(
	            OptGroup,
	            { key: groupIndex, label: m[0].type },
	            opts
	          );
	        }));return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'motion-container' },
	            _react2.default.createElement('div', { ref: 'demo', className: 'motion-example' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'motion-select-wrapper' },
	            _react2.default.createElement(
	              Select,
	              { value: '', className: 'motion-select', onChange: this.handleChange },
	              options
	            )
	          )
	        );
	      }
	    });return _react2.default.createElement(Test, { key: 'motion' });
	  }, ["h2", "组件动画"], ["table", ["thead", ["tr", ["th", "组件"], ["th", "中文名"], ["th", "采用动画"]]], ["tbody", ["tr", ["td", "Popover"], ["td", "气泡浮出"], ["td", ["code", "zoom-up"], " ", ["code", "zoom-down"], " ", ["code", "zoom-left"], " ", ["code", "zoom-right"]]], ["tr", ["td", "Popconfirm"], ["td", "气泡确认"], ["td", ["code", "zoom-up"], " ", ["code", "zoom-down"], " ", ["code", "zoom-left"], " ", ["code", "zoom-right"]]], ["tr", ["td", "Tooltip"], ["td", "文字提示"], ["td", ["code", "zoom-up"], " ", ["code", "zoom-down"], " ", ["code", "zoom-left"], " ", ["code", "zoom-right"]]], ["tr", ["td", "Modal"], ["td", "弹出框"], ["td", ["code", "zoom"]]], ["tr", ["td", "Badge"], ["td", "徽标数"], ["td", ["code", "zoom"]]], ["tr", ["td", "message"], ["td", "信息提示条"], ["td", ["code", "move-up"]]], ["tr", ["td", "notification"], ["td", "通知框"], ["td", ["code", "move-right"], " & ", ["code", "slide-up"]]], ["tr", ["td", "Dropdown"], ["td", "下拉菜单"], ["td", ["code", "slide-up"]]], ["tr", ["td", "Select"], ["td", "选择框"], ["td", ["code", "slide-up"]]], ["tr", ["td", "Cascader"], ["td", "级联选择框"], ["td", ["code", "slide-up"]]], ["tr", ["td", "TreeSelect"], ["td", "树选择框"], ["td", ["code", "slide-up"]]], ["tr", ["td", "DatePicker"], ["td", "日期选择框"], ["td", ["code", "slide-up"]]], ["tr", ["td", "TatePicker"], ["td", "日期选择框"], ["td", ["code", "slide-up"]]], ["tr", ["td", "Alert"], ["td", "警告提示"], ["td", ["code", "slide-up"]]], ["tr", ["td", "Menu"], ["td", "导航菜单"], ["td", ["code", "slide-up"]]]]], ["p", "在 React 的前端实现中，可以使用 ", ["a", {
	    "title": null,
	    "href": "https://github.com/react-component/animate"
	  }, "rc-animate"], " 的 ", ["a", {
	    "title": null,
	    "href": "http://react-component.github.io/animate/examples/simple.html"
	  }, "transitionName"], " 属性来给任意元素指定动画。"], ["h2", "缓动函数"], ["blockquote", ["p", ["code", "move@enter"], " 表示 ", ["code", "移动@进入"], "。"]], ["table", ["thead", ["tr", ["th", "名称"], ["th", "参数"], ["th", "说明"], ["th", "应用动画"]]], ["tbody", ["tr", ["td", "@ease-out"], ["td", ["code", "cubic-bezier(0.215,0.61,0.355,1);"]], ["td", "默认后缓动"], ["td"]], ["tr", ["td", "@ease-in"], ["td", ["code", "cubic-bezier(0.55,0.055,0.675,0.19);"]], ["td", "默认前缓动"], ["td"]], ["tr", ["td", "@ease-in-out"], ["td", ["code", "cubic-bezier(0.645,0.045,0.355,1);"]], ["td", "默认前后缓动"], ["td"]], ["tr", ["td", "@ease-out-back"], ["td", ["code", "cubic-bezier(0.18,0.89,0.32,1.28);"]], ["td", "结束回动"], ["td"]], ["tr", ["td", "@ease-in-back"], ["td", ["code", "cubic-bezier(0.6,-0.3,0.74,0.05);"]], ["td", "开始回动"], ["td"]], ["tr", ["td", "@ease-in-out-back"], ["td", ["code", "cubic-bezier(0.68,-0.55,0.27,1.55);"]], ["td", "前后回动"], ["td"]], ["tr", ["td", "@ease-out-circ"], ["td", ["code", "cubic-bezier(0.08,0.82,0.17,1);"]], ["td", "圆形后缓动"], ["td", ["code", "move@enter"], " ", ["code", "zoom@enter"]]], ["tr", ["td", "@ease-in-circ"], ["td", ["code", "cubic-bezier(0.6,0.04,0.98,0.34);"]], ["td", "圆形前缓动"], ["td", ["code", "move@leave"]]], ["tr", ["td", "@ease-in-out-circ"], ["td", ["code", "cubic-bezier(0.78,0.14,0.15,0.86);"]], ["td", "圆形前后缓动"], ["td", ["code", "zoom@leave"]]], ["tr", ["td", "@ease-out-quint"], ["td", ["code", "cubic-bezier(0.23, 1, 0.32, 1);"]], ["td", "quint 后缓动"], ["td", ["code", "slide@enter"]]], ["tr", ["td", "@ease-in-quint"], ["td", ["code", "cubic-bezier(0.755, 0.05, 0.855, 0.06);"]], ["td", "quint 前缓动"], ["td", ["code", "slide@leave"]]], ["tr", ["td", "@ease-in-out-quint"], ["td", ["code", "cubic-bezier(0.86, 0, 0.07, 1);"]], ["td", "quint 前后缓动"], ["td"]]]]],
	  "meta": {
	    "category": {
	      "zh-CN": "设计基础",
	      "en-US": "Design Fundamental"
	    },
	    "order": 5,
	    "title": {
	      "zh-CN": "组件动画",
	      "en-US": "Motion"
	    },
	    "filename": "docs/spec/motion.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#组件动画"
	  }, "组件动画"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#缓动函数"
	  }, "缓动函数"]]]
	};

/***/ }

});