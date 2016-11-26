webpackJsonp([200,202],{

/***/ 626:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", {}, ["h2", "2.5.0"], ["p", ["code", "2016-11-25"]], ["ul", ["li", ["p", "默认主题风格修改为支付宝钱包风格，及大量样式优化。"]], ["li", ["p", "支持服务端渲染。（Mention 会因为 ", ["a", {
	    "title": null,
	    "href": "https://github.com/facebook/draft-js/issues/385"
	  }, "draft-js"], " 的问题有 warning）"]], ["li", ["p", "引入 ", ["a", {
	    "title": null,
	    "href": "https://facebook.github.io/jest/docs/tutorial-react.html#snapshot-testing"
	  }, "Jest Snapshot"], " 测试组件结构及服务端渲染问题。"]], ["li", ["p", "官网及文档优化。"]], ["li", ["p", "新增自定义主题的 ", ["a", {
	    "title": null,
	    "href": "https://ant.design/docs/react/customize-theme"
	  }, "文档"], "。"]], ["li", ["p", "新增 ", ["a", {
	    "title": null,
	    "href": "https://ant.design/docs/resource/download"
	  }, "Sketch 资源文件"], "。"]], ["li", ["p", "LocaleProvider 新增巴西语支持。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/4004"
	  }, "#4004"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/nathantn"
	  }, "@nathantn"]]], ["li", ["p", "DatePicker"], ["ul", ["li", ["p", "DatePicker 现在可以决定是否展示 “今天” 按钮。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/commit/bbef274aae169d142e3e7e3ea0af922d48e6dd64"
	  }, "commit"]]], ["li", ["p", "RangePicker 现在可以自定义快捷选择。", ["a", {
	    "title": null,
	    "href": "https://ant.design/components/date-picker/#components-date-picker-demo-presetted-ranges"
	  }, "demo"]]], ["li", ["p", "修复 DatePicker 设置 ", ["code", "showTime"], " 后 “此刻” 按钮失效的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3748"
	  }, "#3748"]]], ["li", ["p", "修复 ", ["code", "RangePicker[format]"], " 失效的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3808"
	  }, "#3808"]]]]], ["li", ["p", "新增并优化部分 Icon。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/3977"
	  }, "#3977"]]], ["li", ["p", "新增 Input.Search 控件。", ["a", {
	    "title": null,
	    "href": "https://ant.design/components/input/#components-input-demo-search-input"
	  }, "demo"]]], ["li", ["p", "Mention onSelect 事件现在可以获取完整的数据。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3867"
	  }, "#3867"]]], ["li", ["p", "Pagination 现在支持展示当前页的索引范围。", ["a", {
	    "title": null,
	    "href": "https://ant.design/components/pagination/#components-pagination-demo-total"
	  }, "demo"]]], ["li", ["p", "Table"], ["ul", ["li", ["p", "自定义筛选的显示隐藏现在可以通过代码控制。", ["a", {
	    "title": null,
	    "href": "https://ant.design/components/table/#components-table-demo-custom-filter-panel"
	  }, "demo"]]], ["li", ["p", "支持 JSX 风格的方式设置 columns。", ["a", {
	    "title": null,
	    "href": "https://ant.design/components/table/#components-table-demo-jsx"
	  }, "demo"]]], ["li", ["p", "现在可以监听单元格的点击事件。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3774"
	  }, "#3774"]]], ["li", ["p", "修复无边框 Table 头部的圆角样式问题。"]], ["li", ["p", "修复 title 和 footer 高度不随 ", ["code", "Table[size]"], " 变化的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/commit/9e6439b06cd099ab384a4a2f026f0def6e12bf23"
	  }, "commit"]]], ["li", ["p", "修复选中状态出错的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3900"
	  }, "#3900"]]]]], ["li", ["p", "Upload"], ["ul", ["li", ["p", "修复 children 不能为 ", ["code", "null"], " 的问题。"]], ["li", ["p", "修复预览逻辑的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/commit/e552880c32aaa3f5b0fb09a5e1fb7454c24d5378"
	  }, "commit"]]]]], ["li", ["p", "修复 Badge 会覆盖其他组件的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3898"
	  }, "#3898"]]], ["li", ["p", "修复多行 Checkbox 样式不对齐的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3971"
	  }, "#3971"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/flashback313"
	  }, "@flashback313"]]], ["li", ["p", "修复 InputNumber 与其它表单控件不对齐的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3866#issuecomment-261148256"
	  }, "#3866(comment)"]]], ["li", ["p", "修复 ", ["code", "Menu.Divider"], " 样式问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3813"
	  }, "#3813"]]], ["li", ["p", "修复 Popover 直接内嵌 Checkbox 和 Radio 无效的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3455"
	  }, "#3455"]]], ["li", ["p", "修复 Select combobox 高度异常问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3855"
	  }, "#3855"]]], ["li", ["p", "修复 Switch actived 后的样式问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3838"
	  }, "#3838"]]], ["li", ["p", "修复 Transfer 搜索无结果时不展示 “Not Found” 提示的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3996"
	  }, "#3996"]]], ["li", ["p", "修复 TreeSelect 占位符的样式问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3841"
	  }, "#3841"]]], ["li", ["p", "修复 TypeScript 编译报错的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/3969"
	  }, "#3969"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/AlbertZheng"
	  }, "@AlbertZheng"]]], ["li", ["p", "修复表单反馈图标影响用户操作的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3891"
	  }, "#3891"]]]], ["h2", "2.4.3"], ["p", ["code", "2016-11-17"]], ["ul", ["li", ["p", "修复 ", ["code", "Anchor"], " 内部 querySelector 报错，并做了一些体验优化 。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3832"
	  }, "#3832"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3844"
	  }, "#3844"]]]], ["h2", "2.4.2"], ["p", ["code", "2016-11-13"]], ["ul", ["li", ["p", "修复 ", ["code", "Dropdown.Button"], " 不弹出的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3815"
	  }, "#3815"]]]], ["h2", "2.4.1"], ["p", ["code", "2016-11-11"]], ["ul", ["li", ["p", "修复 ", ["code", "2.4.0"], " 组件 index 文件丢失的问题。"]]], ["h2", "2.4.0"], ["p", ["code", "2016-11-11"]], ["ul", ["li", ["p", "调整了组件的导航结构。"]], ["li", ["p", "新增 ", ["a", {
	    "title": null,
	    "href": "https://ant.design/components/anchor"
	  }, "Anchor"], " 锚点组件。"]], ["li", ["p", "整理了样式变量，修复 ", ["code", "@font-size-base"], " 和 ", ["code", "@text-color"], " 在部分组件无效的问题，新增 ", ["code", "@font-size-lg"], " ", ["code", "@text-color-secondary"], "，并移除了部分无用的变量。"]], ["li", ["p", ["code", "Transfer"], " 组件新增了受控属性 ", ["code", "selectedKeys"], "。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3729"
	  }, "#3729"]]], ["li", ["p", ["code", "Tag"], " 新增选中状态。"]], ["li", ["p", "修复 ", ["code", "Dropdown.Button"], " 不支持 ", ["code", "visible"], " 和 ", ["code", "onVisibleChange"], " 的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3779"
	  }, "#3779"]]], ["li", ["p", "修复 ", ["code", "DatePicker[showTime]`` 的"], "此刻` 按钮。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3748"
	  }, "#3748"]]], ["li", ["p", "修复 ", ["code", "Steps"], " 竖直方向的样式。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3760"
	  }, "#3760"]]], ["li", ["p", "修复 ", ["code", "Spin"], " 组件在 IE10+ 的样式问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3755"
	  }, "#3755"]]], ["li", ["p", "修复 ", ["code", "Mention"], " 组件的 focus 逻辑. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3801"
	  }, "#3801"]]], ["li", ["p", "修复 ", ["code", "Progress"], " 组件的动画问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3784"
	  }, "#3784"]]], ["li", ["p", "修复 ", ["code", "Select"], " 搜索时的丢失焦点问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3778"
	  }, "#3778"]]], ["li", ["p", "修复 ", ["code", "TimePicker"], " 不支持 ", ["code", "format=\"HH\""], " 等格式的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3793"
	  }, "#3793"]]], ["li", ["p", "修复 ", ["code", "Input"], " 的 ", ["code", "suffix"], " 部分区域中鼠标事件无法响应的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3714"
	  }, "#3714"]]], ["li", ["p", "优化了 ", ["code", "Table"], " 选择的性能。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/3757"
	  }, "#3757"]]], ["li", ["p", "优化 ", ["code", "Carousel"], " 的默认样式。"]], ["li", ["p", "优化 ", ["code", "Checkbox"], " 和 ", ["code", "Radio"], " 的样式。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3590"
	  }, "#3590"]]], ["li", ["p", "修复 ", ["code", "DatePicker"], "、", ["code", "Form"], "、", ["code", "Table"], " 等组件的样式细节。"]]], ["h2", "2.3.2"], ["p", ["code", "2016-11-09"]], ["ul", ["li", ["p", "修复使用 ", ["code", "getFieldProps"], " 会导致死循环的问题。"]]], ["h2", "2.3.1"], ["p", ["code", "2016-11-07"]], ["ul", ["li", ["p", "修正上个版本缺少 ", ["code", "dist/antd.css"], " 的问题。"]]], ["h2", "2.3.0"], ["p", ["code", "2016-11-04"]], ["ul", ["li", ["p", "升级 normalize.css 到 5.0。"]], ["li", ["p", "package.json 的 main 换成了 ", ["code", "lib/index.js"], "。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/3397"
	  }, "#3397"]]], ["li", ["p", "全新的 ", ["code", "Spin"], " 设计。"]], ["li", ["p", ["code", "TimePicker"], " 新增了 ", ["code", "addon"], " 以支持自定义的附加内容。"]], ["li", ["p", ["code", "Tree"], " 新增了 ", ["code", "onDragEnd"], "。"]], ["li", ["p", ["code", "Collapse"], " 新增了 ", ["code", "bordered"], "。"]], ["li", ["p", "优化 ", ["code", "Tabs"], " 切换时的动画效果。"]], ["li", ["p", "优化 ", ["code", "Radio"], " 和 ", ["code", "Checkbox"], " 在禁用和鼠标停留时的样式。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3590"
	  }, "#3590"]]], ["li", ["p", "优化 ", ["code", "Transfer"], " 的性能。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2860"
	  }, "#2860"]]], ["li", ["p", "修复 ", ["code", "Popover"], " 嵌套时的样式问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3448"
	  }, "#3448"]]], ["li", ["p", "修复 ", ["code", "Transfer"], " 服务端渲染报错的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3686"
	  }, "#3686"]]], ["li", ["p", "修复 ", ["code", "Upload"], " ", ["code", "picture-card"], " 模式下新上传的图片不显示预览的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/3706"
	  }, "#3706"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/denzw"
	  }, "@denzw"]]], ["li", ["p", "DatePicker"], ["ul", ["li", ["p", "在 ", ["code", "showTime"], " 模式下现在失去焦点也会触发 ", ["code", "onChange"], "。"]], ["li", ["p", ["code", "MonthPicker"], " 增加了 ", ["code", "monthCellContentRender"], " 和 ", ["code", "cellContentRender"], "。"]], ["li", ["p", ["code", "RangePicker"], " 现在可以手动输入时间了。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3718"
	  }, "#3718"]]], ["li", ["p", "新增了捷克语的翻译。"]]]], ["li", ["p", "Badge"], ["ul", ["li", ["p", "优化鼠标停留时超过 99 的数字显示。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3645"
	  }, "#3645"]]], ["li", ["p", "修复单独使用时会有移动动画的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3709"
	  }, "#3709"]]]]], ["li", ["p", "Mention"], ["ul", ["li", ["p", "修复会被 ", ["code", "Table"], " 遮住的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3588"
	  }, "#3588"]]], ["li", ["p", "新增 ", ["code", "getSuggestionContainer"], " 来指定容器。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/3658"
	  }, "#3658"]]]]], ["li", ["p", "Tag"], ["ul", ["li", ["p", "废弃 ", ["code", "color"], " 属性。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3560"
	  }, "#3560"]]], ["li", ["p", "新增 ", ["code", "type"], "。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3560"
	  }, "#3560"]]], ["li", ["p", "新增 ", ["code", "checkable"], "。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3560"
	  }, "#3560"]]]]], ["li", ["p", "Radio.Group"], ["ul", ["li", ["p", "新增 ", ["code", "className"], "。"]], ["li", ["p", ["code", "children"], " 为 ", ["code", "null"], " 或 ", ["code", "undefined"], " 时现在会被忽略。"]]]], ["li", ["p", "Select"], ["ul", ["li", ["p", "新增 ", ["code", "tokenSeparators"], " 支持粘贴时自动分词。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2071"
	  }, "#2071"]]], ["li", ["p", "新增 ", ["code", "onFocus"], " 回调。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3587"
	  }, "#3587"]]], ["li", ["p", "修复 ", ["code", "combobox"], " 模式下选中项不能正确显示的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3401"
	  }, "#3401"]]]]]], ["h2", "2.2.1"], ["p", ["code", "2016-11-02"]], ["ul", ["li", ["p", "修复 Form 中 DatePicker", "[showtime]", "（受控）无法使用的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3665"
	  }, "#3665"]]]], ["h2", "2.2.0"], ["p", ["code", "2016-10-28"]], ["ul", ["li", ["p", "支持 TypeScript@2.0。", ["a", {
	    "title": null,
	    "href": "https://github.com/AlbertZheng"
	  }, "@AlbertZheng"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3358"
	  }, "#3358"]]], ["li", ["p", "不再强依赖于 React 特定版本。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/3627"
	  }, "#3627"]]], ["li", ["p", "Alert 支持 ", ["code", "className"], " ", ["code", "style"], " 属性。"]], ["li", ["p", "DatePicker MonthPicker RangePicker 现在允许设置是否显示清除按钮。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3618"
	  }, "#3618"]]], ["li", ["p", "Form.Item 现在可以感知深层嵌套的表单域，以自动为其生成错误信息和状态。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3212"
	  }, "#3212"]]], ["li", ["p", "RangePicker 现在可以设置不可选的时间。", ["a", {
	    "title": null,
	    "href": "https://ant.design/components/date-picker/#components-date-picker-demo-disabled-date"
	  }, "#"]]], ["li", ["p", "Switch"], ["ul", ["li", ["p", "宽度现在会随着 ", ["code", "checkedChildren/unCheckedChildren"], " 自动调整。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3380"
	  }, "#3380"]]], ["li", ["p", "优化切换动画。"]]]], ["li", ["p", "Upload 现在可以 ", ["a", {
	    "title": null,
	    "href": "https://github.com/react-component/upload#customrequest"
	  }, "自定义上传方式"], "。", ["a", {
	    "title": null,
	    "href": "https://github.com/edgji"
	  }, "@edgji"]]], ["li", ["p", "Icon"], ["ul", ["li", ["p", "新增 ", ["code", "bulb"], " ", ["code", "select"], " ", ["code", "like-o"], " ", ["code", "dislike-o"], "。"]], ["li", ["p", "调整 ", ["code", "loading"], " ", ["code", "like"], " ", ["code", "dislike"], "。"]]]], ["li", ["p", "优化 Card DatePicker Icon Table 的 TypeScript 定义。", ["a", {
	    "title": null,
	    "href": "https://github.com/infeng"
	  }, "@infeng"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/3468"
	  }, "3468"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/3603"
	  }, "#3603"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/3531"
	  }, "#3531"]]], ["li", ["p", "修复 Cascader ", ["code", "defaultValue"], " 失效的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3470"
	  }, "#3470"]]], ["li", ["p", "修复在一行内同时使用 Button Input DatePicker Select 时对齐的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3481"
	  }, "#3481"]]], ["li", ["p", "DatePicker"], ["ul", ["li", ["p", "修复设置 ", ["code", "DatePicker[showTime]"], " 后 ", ["code", "onChange"], " 事件触发时机问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3523"
	  }, "#3523"]]]]], ["li", ["p", "修复 Dropdown.Button disabled 后仍然响应操作的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3535"
	  }, "#3535"]]], ["li", ["p", "Menu"], ["ul", ["li", ["p", "修复服务端渲染问题，感谢 ", ["a", {
	    "title": null,
	    "href": "https://github.com/xpcode"
	  }, "@xpcode"], " 定位问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2061"
	  }, "#2061"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2406"
	  }, "#2406"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3293"
	  }, "#3293"]]], ["li", ["p", "修复 children 不能为 ", ["code", "null"], " 的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3599"
	  }, "#3599"]]]]], ["li", ["p", "修复 message 加载状态无动画的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3536"
	  }, "#3536"]]], ["li", ["p", "Form"], ["ul", ["li", ["p", "修复 ", ["code", "Form[inline]"], " 与 ", ["code", "Input[addonBefore|addonAfter]"], " 一起使用时的样式问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3524"
	  }, "#3524"]]], ["li", ["p", "修复 Form.Item 内 Radio.Button 样式问题。"]], ["li", ["p", "修复 Form.Item 内搜索按钮的样式问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3630"
	  }, "#3630"]]], ["li", ["p", "修复用户无输入时 Form.Item 识别为校验成功的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3613"
	  }, "#3613"]]]]], ["li", ["p", "当 ", ["code", "Popover[title]"], " 没有设置时，不再限制 Popover 的最小宽度。"]], ["li", ["p", "Table"], ["ul", ["li", ["p", "修复固定表头在没有数据情况下的样式问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3567"
	  }, "#3567"]]], ["li", ["p", "修复无数据时会覆盖 SubMenu 的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3521"
	  }, "#3521"]]]]], ["li", ["p", "Tabs"], ["ul", ["li", ["p", "修复卡片叶签头部高度与设计稿不一致的问题。"]], ["li", ["p", "修复 TabPane 的高度会被同级 TabPane 撑高的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3304"
	  }, "#3304"]]]]], ["li", ["p", "修复 ", ["code", "TreeSelect[showSearch]"], " 样式问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3520"
	  }, "#3520"]]]], ["h2", "2.1.0"], ["p", ["code", "2016-10-16"]], ["ul", ["li", ["p", "Icon 现在支持旋转动画。"]], ["li", ["p", "Tabs 现在可以禁用切换动画。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3324"
	  }, "#3324"]]], ["li", ["p", "新增西班牙语的 localization 支持。@Danjavia"]], ["li", ["p", "更新俄语的 localization 文案。@plandem"]], ["li", ["p", "新增 AutoComplete", "[onselect]", " 回调。"]], ["li", ["p", "优化 Modal 样式细节。"]], ["li", ["p", "优化 Tooltip 动画。"]], ["li", ["p", "优化 Transfer 按钮的样式。"]], ["li", ["p", "优化 Tree 的样式细节。"]], ["li", ["p", "整理和修复了部分 less 变量。"]], ["li", ["p", "修复服务端渲染时全量引入 antd 报错的问题。"]], ["li", ["p", "修复 Affix 与 BackTop 的服务端渲染问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3283"
	  }, "#3283"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3343"
	  }, "#3343"]]], ["li", ["p", "修复 Card", "[title]", " 内无法使用 ", ["code", "h3"], " 之类的标签的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3388"
	  }, "#3388"]]], ["li", ["p", "修复 Cascader 搜索模式与浏览器自动完成有冲突的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3350"
	  }, "#3350"]]], ["li", ["p", "DatePicker"], ["ul", ["li", ["p", "修复设置 ", ["code", "showTime"], " 后，", ["code", "onChange"], " 重复触发的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3376"
	  }, "#3376"]]], ["li", ["p", "修复浮层与 Trigger 日期格式不一致的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3405"
	  }, "#3405"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3298"
	  }, "#3298"]]], ["li", ["p", "修复与 TimePicker 样式冲突问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3312"
	  }, "#3312"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3307"
	  }, "#3307"]]]]], ["li", ["p", "修复 Form.Item 标签文案过长溢出的问题。"]], ["li", ["p", "修复 Icon 在 Safari 下会出现边框的问题。"]], ["li", ["p", "修复 InputNubmer 键盘事件死循环问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3239"
	  }, "#3239"]]], ["li", ["p", "修复 Popover 箭头样式问题。"]], ["li", ["p", "修复 Popover 和 Popconfirm 的 ", ["code", "arrowPointAtCenter"], " 无效的问题。"]], ["li", ["p", "Select"], ["ul", ["li", ["p", "修复样式重复引入的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3376"
	  }, "#3376"]]], ["li", ["p", "修复 ", ["code", "notFoundContent"], " 无法置空的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3345"
	  }, "#3345"]]], ["li", ["p", "修复 Table 内使用 Select", "[showsearch]", " 后宽度会跳动的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3413"
	  }, "#3413"]]]]], ["li", ["p", "修复 Table 边框线与页头页脚冲突的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3301"
	  }, "#3301"]]], ["li", ["p", "修复 TabPane 高度不随内容变化的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3377"
	  }, "#3377"]]], ["li", ["p", "修复 Transfer", "[titles]", " 不受 LocaleProvider 控制的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/3264"
	  }, "#3264"]]], ["li", ["p", "Upload"], ["ul", ["li", ["p", "修复用户自定义 ", ["code", "onRemove"], " 事件会覆盖默认行为的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3317"
	  }, "#3317"]]], ["li", ["p", "修复图片卡片样式问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3316"
	  }, "#3316"]]]]], ["li", ["p", "修复项目构建时 moment locales 找不到的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3204"
	  }, "#3204"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3411"
	  }, "#3411"]]]], ["h2", "2.0.1"], ["p", ["code", "2016-10-01"]], ["ul", ["li", ["p", "修复无法调用 react-slick 方法的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3164"
	  }, "#3164"]]], ["li", ["p", "修复 Steps.Step", "[icon]", " 不支持 React.ReactNode 的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3159"
	  }, "#3159"]]], ["li", ["p", "修复 Affix 不支持服务端渲染的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3216"
	  }, "#3216"]]], ["li", ["p", "修复 Mention 不支持 ", ["code", "onSelect"], " ", ["code", "placeholder"], " 的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3236"
	  }, "#3236"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3226"
	  }, "#3226"]]], ["li", ["p", "修复 Transfer 与 ", ["code", "getFieldDecorator"], " 一起使用时的报错问题。"]], ["li", ["p", "修复 LocaleProvider 对时间组件无效的问题。"]], ["li", ["p", "修复 Cascader 搜索模式搜索文字显示不了的问题。"]], ["li", ["p", "修复 Spin 动画与文案整体不垂直居中的问题。"]], ["li", ["p", "修复 RangePicker Modal Tag Progress 等组件样式问题。"]]], ["h2", "2.0.0"], ["p", ["code", "2016-09-28"]], ["p", "很高兴的通知各位，经过四个月时间的紧密开发，", ["code", "antd@2.0.0"], " 终于发布了。这个版本我们重构了底层代码，持续完善现有组件功能和优化细节，并提供了英文版的文档，其中很多都来自社区的贡献，无法一一感谢，欢迎各位持续关注和鞭策。在升级过程中遇到任何问题，请及时 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues"
	  }, "反馈给我们"], "。"], ["h3", "2.x 主要变化"], ["ul", ["li", ["p", "开发语言改为 TypeScript，提供 ", ["strong", "官方支持的 ", ["code", ".d.ts"], " 文件"], "，感谢 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1846"
	  }, "#1846"], " 中所有参与到这次重构的人以及后期 @infeng 对其的完善。"]], ["li", ["p", ["strong", "新增英文文档"], "， 以后将同时提供中英双语文档，感谢 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1471"
	  }, "#1471"], " 里所有参与到翻译和审阅工作中的人。"]], ["li", ["p", "时间类组件 DatePicker、TimePicker、Calendar 等的底层 ", ["strong", "使用 ", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment"], " 替换 ", ["a", {
	    "title": null,
	    "href": "github.com/yiminghe/gregorian-calendar"
	  }, "gregorian-calendar"]], "。"]], ["li", ["p", "全新设计的 ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/icon/"
	  }, "图标"], "。"]], ["li", ["p", "新增提及组件 ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/mention/"
	  }, "Mention"], "。"]], ["li", ["p", "新增自动完成组件 ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/auto-complete/"
	  }, "AutoComplete"], "。"]], ["li", ["p", "Form 新增 ", ["code", "getFieldDecorator"], " 作为 ", ["code", "getFieldProps"], " 的替代，对于不正确的使用方式 ", ["code", "getFieldDecorator"], " 会给出提示，可以降低踩坑的概率。相关讨论见 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1533"
	  }, "#1533"], "。"]], ["li", ["p", "Table 支持 ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/table/#components-table-demo-grouping-columns"
	  }, "表头分组"], "。@yesmeck"]], ["li", ["p", "完全移除 ", ["code", "antd@1.x"], " 中已经废弃的 QueueAnim、Validation、Form.ValueMixin、Progress.Line、Progress.Circle、Popover", "[overlay]", " 及 Slider", "[marks]", " 对数组的支持。"]]], ["h3", "2.x 不兼容改动"], ["p", "此版本有部分不兼容的改动，升级时确保修改相应的使用代码。"], ["ul", ["li", ["p", "时间类组件的 ", ["code", "value"], " 和 ", ["code", "defaultValue"], " 不再支持 ", ["code", "String/Date"], " 类型，请使用 ", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment"], "。"], ["pre", {
	    "lang": "diff",
	    "highlighted": "<span class=\"token deleted\" >- &lt;TimePicker defaultValue=\"12:08:23\" /></span>\n<span class=\"token inserted\" >+ &lt;TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} /></span>\n\n<span class=\"token deleted\" >- &lt;DatePicker defaultValue=\"2015/01/01\" /></span>\n<span class=\"token inserted\" >+ &lt;DatePicker defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} /></span>\n\n<span class=\"token deleted\" >- &lt;Calendar defaultValue={new Date('2010-10-10')} /></span>\n<span class=\"token inserted\" >+ &lt;Calendar defaultValue={moment('2010-10-10', 'YYYY-MM-DD')} /></span>"
	  }, ["code", "- <TimePicker defaultValue=\"12:08:23\" />\n+ <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />\n\n- <DatePicker defaultValue=\"2015/01/01\" />\n+ <DatePicker defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} />\n\n- <Calendar defaultValue={new Date('2010-10-10')} />\n+ <Calendar defaultValue={moment('2010-10-10', 'YYYY-MM-DD')} />"]]], ["li", ["p", "时间类组件的 ", ["code", "onChange"], " 和 ", ["code", "onPanelChange"], " 及其他回调函数中为 ", ["code", "Date/GregorianCalendar"], " 类型的参数，均修改为 moment 类型，两者 API 有所不同，但功能基本一致，请对照 ", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/docs/"
	  }, "moment 的 API 文档"], " 和 ", ["a", {
	    "title": null,
	    "href": "https://github.com/yiminghe/gregorian-calendar"
	  }, "gregorian-calendar 的文档"], " 进行修改。你也可以参考这个 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/commit/5a4ebe535f0353089b30ac331bc4fb7877963371"
	  }, "commit"], " 来进行修改。"], ["p", "由于 ", ["code", "JSON.stringy(date: moment)"], " 返回的值会丢失时区设置，所以要先使用 ", ["code", ".format"], " 把日期转成字符串，相关 issue 见 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3082"
	  }, "#3082"], "："], ["pre", {
	    "lang": "js",
	    "highlighted": "<span class=\"token function\" >handleSubmit</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token keyword\" >const</span> values <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>form<span class=\"token punctuation\" >.</span><span class=\"token function\" >getFieldsValue</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  values<span class=\"token punctuation\" >.</span>date <span class=\"token operator\" >=</span> values<span class=\"token punctuation\" >.</span>date<span class=\"token punctuation\" >.</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'YYYY-MM-DD HH:mm:ss'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span> <span class=\"token comment\" spellcheck=\"true\">// 或其它格式</span>\n  <span class=\"token keyword\" >const</span> data <span class=\"token operator\" >=</span> JSON<span class=\"token punctuation\" >.</span><span class=\"token function\" >stringify</span><span class=\"token punctuation\" >(</span>values<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token comment\" spellcheck=\"true\">// 发送 data 到服务器</span>\n<span class=\"token punctuation\" >}</span>"
	  }, ["code", "handleSubmit() {\n  const values = this.props.form.getFieldsValue();\n  values.date = values.date.format('YYYY-MM-DD HH:mm:ss'); // 或其它格式\n  const data = JSON.stringify(values);\n  // 发送 data 到服务器\n}"]]], ["li", ["p", "时间类组件与表单校验一起使用时，", ["code", "type: 'date'"], " 改为 ", ["code", "type: 'object'"], "。"]], ["li", ["p", "时间类组件的 ", ["code", "format"], " 属性也发生了变化，从 ", ["a", {
	    "title": null,
	    "href": "https://github.com/yiminghe/gregorian-calendar-format#api"
	  }, "gregorian-calendar-format 的格式"], " 变化为与 ", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/docs/#/parsing/string-format/"
	  }, "moment 的格式"], "，例如原来的 ", ["code", "yyyy-MM-dd"], " 将变为 ", ["code", "YYYY-MM-DD"], "。"]], ["li", ["p", "Breadcrumb 移除 ", ["code", "linkRender"], " 和 ", ["code", "nameRender"], "，请使用 ", ["code", "itemRender"], "。"]], ["li", ["p", "Menu 移除 ", ["code", "onClose"], " ", ["code", "onOpen"], "，请使用 ", ["code", "onOpenChange"], "。API 差异较大，请先研究 ", ["a", {
	    "title": null,
	    "href": "http://beta.ant.design/components/menu/#components-menu-demo-sider-current"
	  }, "demo"], "。"]], ["li", ["p", "Table 移除列分页功能，请使用 ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/table/#components-table-demo-fixed-columns"
	  }, "固定列"], "。"]], ["li", ["p", "Popover 移除 ", ["code", "overlay"], " ，请使用 ", ["code", "content"], "。"]]], ["p", "以下变化升级后旧代码仍然能正常运行，但是控制台会出现警告提示，建议按提示进行修改。"], ["ul", ["li", ["p", "Form 废弃 ", ["code", "getFieldProps"], "，请使用 ", ["code", "getFieldDecorator"], "："], ["pre", {
	    "lang": "diff",
	    "highlighted": "<span class=\"token deleted\" >-  &lt;Input placeholder=\"text\" {...getFieldProps('userName', { ... })} /></span>\n<span class=\"token inserted\" >+  {getFieldDecorator('userName', { ... })(</span>\n<span class=\"token inserted\" >+    &lt;Input placeholder=\"text\" /></span>\n<span class=\"token inserted\" >+  )}</span>"
	  }, ["code", "-  <Input placeholder=\"text\" {...getFieldProps('userName', { ... })} />\n+  {getFieldDecorator('userName', { ... })(\n+    <Input placeholder=\"text\" />\n+  )}"]], ["p", "相关讨论可以看 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1533"
	  }, "#1533"], "。"]], ["li", ["p", "DatePicker 废弃 ", ["code", "toggleOpen"], "，请使用 ", ["code", "onOpenChange"], "："], ["pre", {
	    "lang": "diff",
	    "highlighted": "<span class=\"token deleted\" >- handleToggleOpen({ open }) {</span>\n<span class=\"token inserted\" >+ handleOpenChange(open) {</span>\n  ...\n}"
	  }, ["code", "- handleToggleOpen({ open }) {\n+ handleOpenChange(open) {\n  ...\n}"]]]], ["h3", "2.x Bug 修复"], ["ul", ["li", ["p", "修复 Dropdown.Button ", ["code", "disabled"], " 属性无效的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3070"
	  }, "#3070"]]], ["li", ["p", "修复 Form.create ", ["code", "withRef"], " 选项失效的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2843"
	  }, "#2843"]]], ["li", ["p", "修复 Menu inline 模式下子菜单展开的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2701"
	  }, "#2701"]]], ["li", ["p", "修复 Modal.confirm 之类的弹窗在异步调用时按钮仍可点击的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2684"
	  }, "#2684"]]], ["li", ["p", "修复 DatePicker", "[showtime]", " 参数中的 ", ["code", "format"], " 失效的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3123"
	  }, "#3123"]]], ["li", ["p", "修复 Table", "[datasource]", " 中的项的 key 为 ", ["code", "0"], " 时识别错误的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/3166"
	  }, "#3166"], " @noonnightstorm"]], ["li", ["p", "修复 Tree.Node 无子节点时仍然显示箭头的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2616"
	  }, "#2616"]]], ["li", ["p", "修复 Tree.Node 箭头隐藏后鼠标 hover 上去光标仍会发生变化的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2748"
	  }, "#2748"]]]], ["h3", "2.x 其他改进"], ["ul", ["li", ["p", "Alert 新增 ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/alert/#components-alert-demo-banner"
	  }, ["code", "banner"], " 模式"], "。"]], ["li", ["p", "BackTop 增加回到顶部的动画效果。"]], ["li", ["p", "Badge 新增 ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/badge/#components-badge-demo-status"
	  }, "状态点模式"], "。"]], ["li", ["p", "Cascader 新增 ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/cascader/#components-cascader-demo-search"
	  }, "搜索功能"], "。"]], ["li", ["p", "Checkbox 新增 ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/checkbox/#components-checkbox-demo-check-all"
	  }, "indeterminate 状态"], "。"]], ["li", ["p", "Form 新增 ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/form/#components-form-demo-validate-customized"
	  }, "垂直布局"], "。"]], ["li", ["p", "InputNumber 现在支持长按。", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/input-number/#components-input-number-demo-basic"
	  }, "#"]]], ["li", ["p", "notification 支持 ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/notification/#components-notification-demo-custom-icon"
	  }, "自定义 icon"], "。"]], ["li", ["p", "Spin 现在允许 ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/spin/#components-spin-demo-tip"
	  }, "自定义文案与动画共存"], "。@jerrybendy"]], ["li", ["p", "Transfer 现在可以监听用户选择了哪些选项。", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/transfer/#components-transfer-demo-basic"
	  }, "#"]]], ["li", ["p", "Transfer 现在可以定义哪些选项是 ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/transfer/#components-transfer-demo-basic"
	  }, "不可选择的"], "。"]], ["li", ["p", "优化 Alert 和 notification 的样式。"]], ["li", ["p", "优化 Modal.confirm 之类的弹窗的键盘交互。@Dafrok"]], ["li", ["p", "优化 ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/date-picker/#components-date-picker-demo-time"
	  }, "DatePicker 的时间选择"], " 交互。"]], ["li", ["p", "优化 ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/spin/#components-spin-demo-nested"
	  }, "Spin 状态切换"], " 时的效果。"]], ["li", ["p", "更新 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/commit/2f308b0f995cfcb2a3c8feb1e35ffd3f0bf93cfc"
	  }, "font-family"], "。"]]], ["h3", "2.x 相关工具发布"], ["ul", ["li", ["p", "新增配套网站 ", ["a", {
	    "title": null,
	    "href": "http://library.ant.design/"
	  }, "AntD Library"], "，提供遵循 Ant Design 设计规范的组件、模式等的 Axure 资源。"]], ["li", ["p", ["code", "babel-plugin-antd"], " 更名为 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/babel-plugin-import"
	  }, "babel-plugin-import"], "，标志着该插件将作为一个通用的按需加载方案存在，而不再是 ", ["code", "antd"], " 专有。"], ["p", "请更新 ", ["code", "package.json"], "："], ["pre", {
	    "lang": "diff",
	    "highlighted": "{\n  \"devDependencies\": {\n<span class=\"token deleted\" >-   \"babel-plugin-antd\": \"^0.x.x\",</span>\n<span class=\"token inserted\" >+   \"babel-plugin-import\": \"^1.0.0\",</span>\n  }\n}"
	  }, ["code", "{\n  \"devDependencies\": {\n-   \"babel-plugin-antd\": \"^0.x.x\",\n+   \"babel-plugin-import\": \"^1.0.0\",\n  }\n}"]], ["p", "同时更新 ", ["code", ".babelrc"], " 或你在其它地方对其的配置："], ["pre", {
	    "lang": "diff",
	    "highlighted": "{\n<span class=\"token deleted\" >-  \"plugins\": [[\"antd\", { style: \"css\" }]]</span>\n<span class=\"token inserted\" >+  \"plugins\": [[\"import\", { libraryName: \"antd\", style: \"css\" }]]</span>\n}"
	  }, ["code", "{\n-  \"plugins\": [[\"antd\", { style: \"css\" }]]\n+  \"plugins\": [[\"import\", { libraryName: \"antd\", style: \"css\" }]]\n}"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/dvajs/dva"
	  }, "dva@1.0.0"], " 也已经发布，并推荐 ", ["a", {
	    "title": null,
	    "href": "http://ant.design/docs/react/practical-projects"
	  }, "在实战项目中使用"], "。"]], ["li", ["p", "脚手架工具推荐使用 ", ["a", {
	    "title": null,
	    "href": "https://github.com/dvajs/dva-cli"
	  }, "dva-cli"], "，原来的 ", ["code", "antd-init"], " 以后仅会用于学习以及 demo。"]]], ["h2", "1.11.2"], ["p", "去 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/releases?after=2.0.0"
	  }, "GitHub"], " 查看 ", ["code", "1.11.2"], " 及之前的更新日志。"]],
	  "meta": {
	    "order": 5,
	    "title": "更新日志",
	    "toc": false,
	    "timeline": true,
	    "filename": "CHANGELOG.zh-CN.md"
	  },
	  "description": ["section", ["p", "如果需要查看 ", ["code", "2.0.0"], " 之前的更新日志，请移步 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/releases?after=2.0.0"
	  }, "GitHub"], "。"]],
	  "toc": ["ul", ["li", ["a", {
	    "href": "#2.5.0"
	  }, "2.5.0"]], ["li", ["a", {
	    "href": "#2.4.3"
	  }, "2.4.3"]], ["li", ["a", {
	    "href": "#2.4.2"
	  }, "2.4.2"]], ["li", ["a", {
	    "href": "#2.4.1"
	  }, "2.4.1"]], ["li", ["a", {
	    "href": "#2.4.0"
	  }, "2.4.0"]], ["li", ["a", {
	    "href": "#2.3.2"
	  }, "2.3.2"]], ["li", ["a", {
	    "href": "#2.3.1"
	  }, "2.3.1"]], ["li", ["a", {
	    "href": "#2.3.0"
	  }, "2.3.0"]], ["li", ["a", {
	    "href": "#2.2.1"
	  }, "2.2.1"]], ["li", ["a", {
	    "href": "#2.2.0"
	  }, "2.2.0"]], ["li", ["a", {
	    "href": "#2.1.0"
	  }, "2.1.0"]], ["li", ["a", {
	    "href": "#2.0.1"
	  }, "2.0.1"]], ["li", ["a", {
	    "href": "#2.0.0"
	  }, "2.0.0"]], ["li", ["a", {
	    "href": "#1.11.2"
	  }, "1.11.2"]]]
	};

/***/ }

});