webpackJsonp([170,206],{

/***/ 1472:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。"], ["h2", "表单"], ["p", "我们为 ", ["code", "form"], " 提供了以下两种排列方式："], ["ul", ["li", ["p", "水平排列：可以实现 ", ["code", "label"], " 标签和表单控件的水平排列；"]], ["li", ["p", "行内排列：使其表现为 ", ["code", "inline-block"], " 级别的控件。"]]], ["h2", "表单域"], ["p", "表单一定会包含表单域，表单域可以是输入控件，标准表单域，标签，下拉菜单，文本域等。"], ["p", "这里我们封装了表单域 ", ["code", "<Form.Item />"], " 。"], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token operator\">&lt;</span>Form<span class=\"token punctuation\">.</span>Item <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n  <span class=\"token punctuation\">{</span>children<span class=\"token punctuation\">}</span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form.Item</span><span class=\"token punctuation\">></span></span>"
	  }, ["code", "<Form.Item {...props}>\n  {children}\n</Form.Item>"]], ["blockquote", ["p", "注：标准表单中一律使用大号控件。"]]],
	  "meta": {
	    "category": "Components",
	    "subtitle": "表单",
	    "type": "Data Entry",
	    "cols": 1,
	    "title": "Form",
	    "filename": "components/form/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#表单"
	  }, "表单"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#表单域"
	  }, "表单域"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["h3", "Form"], ["p", ["strong", "更多示例参考 ", ["a", {
	    "title": null,
	    "href": "http://react-component.github.io/form/"
	  }, "rc-form"]], "。"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "form"], ["td", "经 ", ["code", "Form.create()"], " 包装过的组件会自带 ", ["code", "this.props.form"], " 属性，直接传给 Form 即可。1.7.0 之后无需设置"], ["td", "object"], ["td", "无"]], ["tr", ["td", "vertical"], ["td", "垂直排列布局"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "horizontal"], ["td", "水平排列布局"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "inline"], ["td", "行内排列布局"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "onSubmit"], ["td", "数据验证成功后回调事件"], ["td", "Function(e:Event)"], ["td"]]]], ["h3", "Form.create(options)"], ["p", "使用方式如下："], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">class</span> <span class=\"token class-name\">CustomizedForm</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span>\n\nCustomizedForm <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>CustomizedForm<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }, ["code", "class CustomizedForm extends React.Component {}\n\nCustomizedForm = Form.create({})(CustomizedForm);"]], ["p", ["code", "options"], " 的配置项如下。"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"]]], ["tbody", ["tr", ["td", "onFieldsChange"], ["td", "当 ", ["code", "Form.Item"], " 子节点的值发生改变时触发，可以把对应的值转存到 Redux store"], ["td", "Function(props, fields)"]], ["tr", ["td", "mapPropsToFields"], ["td", "把 props 转为对应的值，可用于把 Redux store 中的值读出"], ["td", "Function(props): Object{ fieldName: Object{ value } }"]]]], ["p", "经过 ", ["code", "Form.create"], " 包装的组件将会自带 ", ["code", "this.props.form"], " 属性，", ["code", "this.props.form"], " 提供的 API 如下："], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"]]], ["tbody", ["tr", ["td", "getFieldsValue"], ["td", "获取一组输入控件的值，如不传入参数，则获取全部组件的值"], ["td", "Function([fieldNames: string[]])"]], ["tr", ["td", "getFieldValue"], ["td", "获取一个输入控件的值"], ["td", "Function(fieldName: string)"]], ["tr", ["td", "setFieldsValue"], ["td", "设置一组输入控件的值（注意：不要在 ", ["code", "componentWillReceiveProps"], " 内使用，否则会导致死循环，", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2985"
	  }, "更多"], "）"], ["td", "Function({ ", "[fieldname]", ": value }"]], ["tr", ["td", "setFields"], ["td", "设置一组输入控件的值与 Error"], ["td", "Function(obj: object)"]], ["tr", ["td", "validateFields"], ["td", "校验并获取一组输入域的值与 Error"], ["td", "Function([fieldNames: string[]], ", "[options: object]", ", callback: Function(errors, values))"]], ["tr", ["td", "validateFieldsAndScroll"], ["td", "与 ", ["code", "validateFields"], " 相似，但校验完后，如果校验不通过的菜单域不在可见范围内，则自动滚动进可见范围"], ["td", "参考 ", ["code", "validateFields"]]], ["tr", ["td", "getFieldError"], ["td", "获取某个输入控件的 Error"], ["td", "Function(name)"]], ["tr", ["td", "isFieldValidating"], ["td", "判断一个输入控件是否在校验状态"], ["td", "Function(name)"]], ["tr", ["td", "resetFields"], ["td", "重置一组输入控件的值（为 ", ["code", "initialValue"], "）与状态，如不传入参数，则重置所有组件"], ["td", "Function([names: string[]])"]], ["tr", ["td", "getFieldDecorator"], ["td", "用于和表单进行双向绑定，详见下方描述"], ["td"]]]], ["h3", "this.props.form.getFieldDecorator(id, options)"], ["p", "经过 ", ["code", "getFieldDecorator"], " 包装的控件，表单控件会自动添加 ", ["code", "value"], "（或 ", ["code", "valuePropName"], " 指定的其他属性） ", ["code", "onChange"], "（或 ", ["code", "trigger"], " 指定的其他属性），数据同步将被 Form 接管，这会导致以下结果："], ["ol", ["li", ["p", "你不再需要用 ", ["code", "onChange"], " 来做同步，但还是可以继续监听 ", ["code", "onChange"], " 等事件。"]], ["li", ["p", "你不能用控件的 ", ["code", "value"], " ", ["code", "defaultValue"], " 等属性来设置表单域的值，默认值可以用 ", ["code", "getFieldDecorator"], " 里的 ", ["code", "initialValue"], "。"]], ["li", ["p", "你不需要用 ", ["code", "setState"], "，可以使用 ", ["code", "this.props.form.setFieldsValue"], " 来动态改变表单值。"]]], ["h4", "特别注意"], ["p", "如果使用的是 ", ["code", "react@<15.3.0"], "，则 ", ["code", "getFieldDecorator"], " 调用不能位于纯函数组件中: ", ["a", {
	    "title": null,
	    "href": "https://github.com/facebook/react/pull/6534"
	  }, "https://github.com/facebook/react/pull/6534"]], ["h4", "getFieldDecorator 参数"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "id"], ["td", "必填输入控件唯一标志"], ["td", "string"], ["td"]], ["tr", ["td", "options.valuePropName"], ["td", "子节点的值的属性，如 Switch 的是 'checked'"], ["td", "string"], ["td", "'value'"]], ["tr", ["td", "options.initialValue"], ["td", "子节点的初始值，类型、可选值均由子节点决定"], ["td"], ["td"]], ["tr", ["td", "options.trigger"], ["td", "收集子节点的值的时机"], ["td", "string"], ["td", "'onChange'"]], ["tr", ["td", "options.getValueFromEvent"], ["td", "可以把 onChange 的参数转化为控件的值，例如 DatePicker 可设为：", ["code", "(date, dateString) => dateString"]], ["td", "function(..args)"], ["td", ["a", {
	    "title": null,
	    "href": "https://github.com/react-component/form#optiongetvaluefromevent"
	  }, "reference"]]], ["tr", ["td", "options.validateTrigger"], ["td", "校验子节点值的时机"], ["td", "string"], ["td", "'onChange'"]], ["tr", ["td", "options.rules"], ["td", "校验规则，参见 ", ["a", {
	    "title": null,
	    "href": "https://github.com/yiminghe/async-validator#rules"
	  }, "async-validator"]], ["td", "array"], ["td"]], ["tr", ["td", "options.exclusive"], ["td", "是否和其他控件互斥，特别用于 Radio 单选控件"], ["td", "boolean"], ["td", "false"]]]], ["h3", "Form.Item"], ["p", "注意："], ["ul", ["li", ["p", "一个 Form.Item 建议只放一个被 getFieldDecorator 装饰过的 child，当有多个被装饰过的 child 时，", ["code", "help"], " ", ["code", "required"], " ", ["code", "validateStatus"], " 无法自动生成。"]], ["li", ["p", ["code", "2.2.0"], " 之前，只有当表单域为 Form.Item 的子元素时，才会自动生成 ", ["code", "help"], " ", ["code", "required"], " ", ["code", "validateStatus"], "，嵌套情况需要自行设置。"]]], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "label"], ["td", "label 标签的文本"], ["td", "React.Node"], ["td"]], ["tr", ["td", "labelCol"], ["td", "label 标签布局，通 ", ["code", "<Col>"], " 组件，设置 ", ["code", "span"], " ", ["code", "offset"], " 值，如 ", ["code", "{span: 3, offset: 12}"]], ["td", "object"], ["td"]], ["tr", ["td", "wrapperCol"], ["td", "需要为输入控件设置布局样式时，使用该属性，用法同 labelCol"], ["td", "object"], ["td"]], ["tr", ["td", "help"], ["td", "提示信息，如不设置，则会根据校验规则自动生成"], ["td", "React.Node"], ["td"]], ["tr", ["td", "extra"], ["td", "额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。"], ["td", "React.Node"], ["td"]], ["tr", ["td", "required"], ["td", "是否必填，如不设置，则会根据校验规则自动生成"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "validateStatus"], ["td", "校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating'"], ["td", "string"], ["td"]], ["tr", ["td", "hasFeedback"], ["td", "配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用"], ["td", "boolean"], ["td", "false"]]]], ["style", "\n.code-box-demo .ant-form-horizontal {\n  max-width: 540px;\n}\n"]]
	};

/***/ }

});