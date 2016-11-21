webpackJsonp([200,202],{

/***/ 612:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", {}, ["h2", "2.4.2"], ["p", ["code", "2016-11-13"]], ["ul", ["li", ["p", "修复 ", ["code", "Dropdown.Button"], " 不弹出的问题。", ["a", {
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
	  }, "#3793"]]], ["li", ["p", "优化了 ", ["code", "Table"], " 选择的性能。", ["a", {
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
	  }, "dva-cli"], "，原来的 ", ["code", "antd-init"], " 以后仅会用于学习以及 demo。"]]], ["h2", "1.11.2"], ["p", ["code", "2016-09-26"]], ["ul", ["li", ["p", "修复 Popover 内嵌 Badge 后失效的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3109"
	  }, "#3109"]]], ["li", ["p", "修复 Modal 内嵌的 Button 在某些情况下与 Modal 的滚动不同步的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3031"
	  }, "#3031"]]]], ["h2", "1.11.1"], ["p", ["code", "2016-09-14"]], ["ul", ["li", ["p", "修复 Menu 设置成 ", ["code", "theme=dark"], " 后，链接点击无效的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2929"
	  }, "#2929"]]], ["li", ["p", "修复迷你型 Table 表头与内容不对齐的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2933"
	  }, "#2933"]]], ["li", ["p", "修复 Cascader hover 样式。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3015"
	  }, "#3015"]]], ["li", ["p", "修复 Upload 上传多个文件时，", ["code", "onChange"], " 调用不正确的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3001"
	  }, "#3001"]]], ["li", ["p", "修复 TimePicker 报错样式的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2973"
	  }, "#2973"]]], ["li", ["p", "修复 Calendar 控件的年度选择下拉内容截断的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2927"
	  }, "#2927"]]]], ["h2", "1.11.0"], ["p", ["code", "2016-09-01"]], ["ul", ["li", ["p", ["code", "Tooltip"], " ", ["code", "Popover"], " ", ["code", "Popconfirm"], " 修正默认对齐方式为边缘对齐，增加 arrowPointAtCenter 属性用于箭头指向中心的行为。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/commit/977e2e32fc40968846c8201ed72bdc3818375d2f"
	  }, "commit 977e2e3"]]], ["li", ["p", ["code", "Table"]], ["ul", ["li", ["p", "移除数据中添加的 ", ["code", "indexForSort"], "。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2501"
	  }, "#2501"]]], ["li", ["p", "修复 ", ["code", "pagination"], " 属性中 ", ["code", "defaultPageSize"], " 不生效的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2874"
	  }, "#2874"]]], ["li", ["p", "修复数据为空时固定列出现重复提示的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2812"
	  }, "#2812"]]], ["li", ["p", "给树形子数据增加排序功能。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2839"
	  }, "#2839"]]]]], ["li", ["p", ["code", "InputNumber"], " 样式问题修复。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2876"
	  }, "#2876"]]], ["li", ["p", "修复手动导入 less 文件时 input error 样式被 focus 样式覆盖的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2916"
	  }, "#2916"]]], ["li", ["p", "index.d.ts 中补充了一些缺失的声明，修复 ", ["code", "Form"], " 中 typescript 语法检查报错的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2885"
	  }, "#2885"]]], ["li", ["p", "升级 react-slick 依赖到 ", ["code", "0.13"], "。"]]], ["h2", "1.10.0"], ["p", ["code", "2016-08-20"]], ["ul", ["li", ["p", "Affix 和 BackTop 新增 ", ["code", "target"], " 属性，支持指定滚动容器。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2718"
	  }, "#2718"]]], ["li", ["p", "文档页面加上编辑按钮，方便社区贡献。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2325"
	  }, "#2325"]]], ["li", ["p", "升级 rc-cascader 依赖，修复一个 ", ["code", "loadData"], " 属性和表单结合使用的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2767"
	  }, "#2767"]]], ["li", ["p", "修复 ", ["code", "editable-card"], " 类型的 Tabs 没有关闭图标的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2747"
	  }, "#2747"]]], ["li", ["p", "Menu 修正默认 ", ["code", "z-index"], "。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2762"
	  }, "#2762"]]], ["li", ["p", "修正 Select 组件在 IE 下的一些样式问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2741"
	  }, "#2741"]]]], ["h2", "1.9.1"], ["p", ["code", "2016-08-16"]], ["ul", ["li", ["p", "修复 ", ["code", "editable-card"], " 类型的 Tabs 设置 ", ["code", "activeKey"], " 无效的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2725"
	  }, "#2725"]]], ["li", ["p", "修复一个 Table 的样式兼容性问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2723"
	  }, "#2723"]]], ["li", ["p", "更新 axure 部件库。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2714"
	  }, "#2714"]]]], ["h2", "1.9.0"], ["p", ["code", "2016-08-15"]], ["ul", ["li", ["p", "Transfer 修复在火狐下 item 文案过长时只显示省略号的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2674"
	  }, "#2674"]]], ["li", ["p", "Input 修复 ", ["code", "autosize"], " 模式下特定场景中不能输入中文及光标定位不准的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2666"
	  }, "#2666"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2239"
	  }, "#2239"]]], ["li", ["p", "Tabs 修复 ", ["code", "type=\"editable-card\""], " 模式下的 ", ["code", "children"], " 解析问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2658"
	  }, "#2658"]]], ["li", ["p", "Radio 修复若干 less 硬编码问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2424"
	  }, "#2424"]]], ["li", ["p", "Upload 的 rc-upload 依赖升级至 2.x，引入的变化有："], ["ul", ["li", ["p", "增加 ", ["code", "disabled"], " 属性。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2645"
	  }, "#2645"]]], ["li", ["p", "取消上传时会自动 abort 上传请求。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2571"
	  }, "#2571"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2518"
	  }, "#2518"]]]]], ["li", ["p", "Table"], ["ul", ["li", ["p", "修复 spin 在可滚动区域的定位问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2652"
	  }, "#2652"]]], ["li", ["p", "修复无数据时 提示样式错位的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2663"
	  }, "#2663"]]]]], ["li", ["p", "Popover 修复设定 ", ["code", "getTooltipContainer"], " 后会导致内嵌 DatePicker 样式失效的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2675"
	  }, "#2675"]]], ["li", ["p", "Modal 修复重复卸载组件导致的报错。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2688"
	  }, "#2688"]]], ["li", ["p", "升级 rc-slider 组件依赖。"]]], ["h2", "1.8.0"], ["p", ["code", "2016-08-08"]], ["ul", ["li", ["p", "修复可关闭 Tabs 组件只有一个 Tab 的时候报错的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2559"
	  }, "#2559"]]], ["li", ["p", "修复 Datepicker 在 IE8 下关闭图标。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2584"
	  }, "#2584"]]], ["li", ["p", "Tags 支持自定义标签颜色。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2585"
	  }, "#2585"]]], ["li", ["p", "TreeSelect 修复未找到内容时的样式。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/commit/9cee9f103a4729572358206c81cba84e2fdc20f5"
	  }, "9cee9f"]]], ["li", ["p", "Modal 适配小屏幕。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2597"
	  }, "#2597"]]], ["li", ["p", "修复了 Row 组件在同一行闭合会报错的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2603"
	  }, "#2603"]]], ["li", ["p", "Table 的 ", ["code", "rowSelection.onChange"], " 的参数 ", ["code", "selectedRows"], " 现在和 ", ["code", "selectedRowKeys"], " 保持一致。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2603"
	  }, "#2566"]]], ["li", ["p", "Checkbox 和 Radio 现在支持 ", ["code", "onClick"], " 属性。"]]], ["h2", "1.7.0"], ["p", ["code", "2016-07-30"]], ["p", "友情提示 ", ["a", {
	    "title": null,
	    "href": "http://mobile.ant.design"
	  }, "Ant Design Mobile"], " 已经发布。"], ["ul", ["li", ["p", "Table"], ["ul", ["li", ["p", "现可以定义页头。", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/table#components-table-demo-bordered"
	  }, "demo"]]], ["li", ["p", "修复当 ", ["code", "rowKey"], " 为 ", ["code", "String"], " 时的报错问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2500"
	  }, "#2500"]]], ["li", ["p", "修复 ", ["code", "Table"], " 会修改 ", ["code", "dataSource"], " 里面的值的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2501"
	  }, "#2501"]]]]], ["li", ["p", "Form 现在不再需要显式传递 ", ["code", "form={this.props.form}"], "。"]], ["li", ["p", "优化 Breadcrumb.Item 的 hover 效果。"]], ["li", ["p", "优化 Progress 的动画效果。"]], ["li", ["p", "DatePicker"], ["ul", ["li", ["p", "优化清除按钮样式。"]], ["li", ["p", "修复点击 ", ["code", "此刻"], " 时不触发 ", ["code", "onChange"], " 的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1902"
	  }, "#1902"]]]]], ["li", ["p", "Menu"], ["ul", ["li", ["p", "修复子菜单中的 Item 被选中后，父级元素无样式变化的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2414"
	  }, "#2414"]]], ["li", ["p", "修复 Menu.Item disabled 后的样式问题。"]]]], ["li", ["p", "TreeSelect"], ["ul", ["li", ["p", "treeNodes 可以设置是否可选。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2401"
	  }, "#2401"]]], ["li", ["p", "修复多选模式下进行搜索会把已选项清掉的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2393"
	  }, "#2393"]]], ["li", ["p", "修复 TreeSelect 会修改原数据的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2459"
	  }, "#2459"]]]]], ["li", ["p", "修复了 Select 组件 placeholder 溢出的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/2480"
	  }, "#2480"]]], ["li", ["p", "修复 Timeline.Item 无法自定义边框颜色的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2479"
	  }, "#2479"]]], ["li", ["p", "修复 Spin 显示突兀的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2398"
	  }, "#2398"]]], ["li", ["p", "修复 Cascader 选项文字过长导致的样式问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2515"
	  }, "#2515"]]]], ["h2", "1.6.5"], ["p", ["code", "2016-07-16"]], ["ul", ["li", ["p", "修复 Input 的 ", ["code", "value prop on input should not be null"], " 警告并且导致在表单中无法重置的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2335"
	  }, "#2335"]]], ["li", ["p", "优化 FormItem 的布局实现，修复表单布局不支持响应式布局的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2305"
	  }, "#2305"]]], ["li", ["p", "修复带时间的 DatePicker 的 onChange 触发逻辑。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2399#issuecomment-232893146"
	  }, "#2399"]]], ["li", ["p", "修复 Transfer 搜索后全选的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2396"
	  }, "#2396"]]], ["li", ["p", "修复 Cascader 样式会被 ant-input 样式覆盖的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2400"
	  }, "#2400"]]], ["li", ["p", "修复 Table 删除数据时导致当前页数溢出的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/2301"
	  }, "#2301"]]], ["li", ["p", "修复 resize 浏览器时 Affix 元素没有和原来的位置同步的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1987"
	  }, "#1987"]]], ["li", ["p", "给 Affix 元素添加占位，修复固定时页面跳动的问题。"]], ["li", ["p", "修复 Select combobox 模式会导致页面出现横向滚动条的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2353"
	  }, "#2353"]]], ["li", ["p", "修复 Upload 组件已上传文件链接点击无效的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2331"
	  }, "#2331"]]], ["li", ["p", "修复 Upload 上传过程中删除图片后的报错问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2342"
	  }, "#2342"]]]], ["h2", "1.6.4"], ["p", ["code", "2016-07-08"]], ["ul", ["li", ["p", "修复组件在 react@15.2.0 下报 Unknown props 警告的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2258"
	  }, "#2258"]]], ["li", ["p", ["code", "Table"]], ["ul", ["li", ["p", "修复 filterDropDown 中内容未改变也会调用 onChange 的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2228"
	  }, "#2228"]]], ["li", ["p", "修复设置 scroll.y 高度后导致内容无法对齐的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2227"
	  }, "#2227"]]]]], ["li", ["p", ["code", "Form"]], ["ul", ["li", ["p", "修复 ", ["code", "FormItem"], " 中带空格后缀的冒号替换问题，关联issue：", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1877"
	  }, "#1877"]]], ["li", ["p", "demo 优化。"]]]], ["li", ["p", ["code", "Transfer"]], ["ul", ["li", ["p", "修复重复 render 的问题，性能优化。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2112"
	  }, "#2112"]]], ["li", ["p", "优化搜索逻辑，修复搜索时未对特殊字符进行处理的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2260"
	  }, "#2260"]]], ["li", ["p", "清除按钮样式优化。"]]]], ["li", ["p", "修复 ", ["code", "Steps"], " 最后一步多余横线隐藏的问题。"]], ["li", ["p", "修复 ", ["code", "Cascader"], " small size 样式下沉 1px，以及 hover/click 样式残缺的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2234"
	  }, "#2234"]]], ["li", ["p", "修复 ", ["code", "RangePicker"], " 无清除按钮的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2252"
	  }, "#2252"]]]], ["h2", "1.6.3"], ["p", ["code", "2016-07-04"]], ["ul", ["li", ["p", "修复 Transfer 的一个 unmount 的错误。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/2206"
	  }, "#2206"]]], ["li", ["p", "修复了 Badge、Alert、Menu、Tag、Checkbox、Radio 组件的一些样式细节问题。"]]], ["h2", "1.6.2"], ["p", ["code", "2016-06-27"]], ["ul", ["li", ["p", "修复 Table、Transfer 的样式错位问题。"]], ["li", ["p", "修复 DatePicker 的一个样式问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2182"
	  }, "#2182"]]], ["li", ["p", "优化 Menu 的 hover 样式响应性能。"]]], ["h2", "1.6.1"], ["p", ["code", "2016-06-24"]], ["ul", ["li", ["p", "回滚一个未完成的 DatePicker 时间选项改造效果。"]]], ["h2", "1.6.0"], ["p", ["code", "2016-06-24"]], ["ul", ["li", ["p", "新增置顶组件 ", ["a", {
	    "title": null,
	    "href": "/components/back-top"
	  }, "BackTop"], "。"]], ["li", ["p", "全新的 ", ["a", {
	    "title": null,
	    "href": "/components/spin"
	  }, "Spin"], " 样式。"]], ["li", ["p", "给 ", ["code", "Modal.xxx"], " 系列方法添加了 ", ["code", "{ destory }"], " 的访问值，方便事后销毁。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2110"
	  }, "#2110"]]], ["li", ["p", "Table 的 ", ["code", "rowKey"], " 属性支持直接使用字符串。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2058"
	  }, "#2058"]]], ["li", ["p", "Table 增加 ", ["code", "column.filterDropdown"], " 属性用于自定义渲染筛选菜单的浮层。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1736"
	  }, "#1736"]]], ["li", ["p", "修复 Tooltip、Popover、Popconfirm 设置 ", ["code", "onVisibleChange"], " 后失效的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2134"
	  }, "#2134"]]], ["li", ["p", "修复在 IE8 下 Checkbox 的勾样式变形的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2148"
	  }, "#2148"]]], ["li", ["p", "优化 Checkbox、Radio 失效状态的文字颜色。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2114"
	  }, "#2114"]]], ["li", ["p", "优化 Checkbox、Radio 的默认边距过于拥挤的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2137"
	  }, "#2137"]]], ["li", ["p", "优化 Pagination 在暗色背景下的样式。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2126"
	  }, "#2126"]]], ["li", ["p", "修复 Table 固定列时内容无法换行和高度对齐的问题，同时修复了一个 Chrome 下的表格内容错位问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2130"
	  }, "#2130"]]], ["li", ["p", "修复一个 Table 的 ", ["code", "rowSelection"], " 设为 null 时可能导致报错的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2127"
	  }, "#2127"]]], ["li", ["p", "修复在 IE8 下点击 Table 选择框报错的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2154"
	  }, "#2154"]]], ["li", ["p", "小幅优化了 Transfer 的渲染性能。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2112"
	  }, "#2112"]]], ["li", ["p", "将 DatePicker 的清除按钮从面板上移到外部输入框，解决用户容易误解为关闭的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1708"
	  }, "#1708"]]], ["li", ["p", "Upload 的 ", ["code", "onPreview"], " 现在没有 ", ["code", "file.url"], " 时也能生效。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2163"
	  }, "#2163"]]]], ["h2", "1.5.1"], ["p", ["code", "2016-06-21"]], ["ul", ["li", ["p", "修复一个 TypeScript 定义文件的语法错误。"]], ["li", ["p", "修复 Table 固定表头高度和滚动条样式问题。"]]], ["h2", "1.5.0"], ["p", ["code", "2016-06-17"]], ["ul", ["li", ["p", "升级 ", ["code", "rc-form"], " 到 0.17，支持 ", ["code", "getFieldProps('xx.yy')"], " 的写法，并支持单多选控件进行关联。", ["a", {
	    "title": null,
	    "href": "https://github.com/react-component/form/pull/21"
	  }, "#"]]], ["li", ["p", "Input 的 ", ["code", "addonBefore"], " 和 ", ["code", "addonAfter"], " 支持内嵌选择框。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1927"
	  }, "#1927"]]], ["li", ["p", "优化了两个 DatePicker 组成的时间范围选择演示的体验。"]], ["li", ["p", "优化一个多个对话框的遮罩层高度的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2009"
	  }, "#2009"]]], ["li", ["p", "优化 Table 的 ", ["code", "getCheckboxProps"], " 的调用次数。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2086"
	  }, "#2086"]]], ["li", ["p", "修复 Table 固定列时，表头无法左右滚动的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2068"
	  }, "#2068"]]], ["li", ["p", "修复小型表格固定表头的样式。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2023"
	  }, "#2023"]]], ["li", ["p", "修复 Tabs 的 ", ["code", "tabPosition"], " 为左右时样式错位的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2046"
	  }, "#2046"]]], ["li", ["p", "修复 RangePicker 的日期范围背景丢失的问题。"]], ["li", ["p", "修复 Switch 失效状态下文字颜色太浅的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2051"
	  }, "#2051"]]], ["li", ["p", "修复一个 Select 的 ", ["code", "disabled"], " 选项依然可以被移除的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2034"
	  }, "#2034"]]], ["li", ["p", "修复官方站点在 IE 下的报错问题。"]]], ["h2", "1.4.1"], ["p", ["code", "2016-06-12"]], ["ul", ["li", ["p", "修复一个展开 Tabs 会导致表格宽度溢出的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2013"
	  }, "#2013"]]], ["li", ["p", "修复一个某些情况下表格布局被破坏的问题。"]]], ["h2", "1.4.0"], ["p", ["code", "2016-06-12"]], ["p", "此版本之后你可能会遇到 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2030"
	  }, "#2030"], "，请使用 ", ["code", "react@15+"], " 或 ", ["code", "npm@3+"], "。"], ["ul", ["li", ["p", ["code", "Input[type=\"textarea\"]"], " 支持自动调整高度。 ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/input#components-input-demo-autosize-textarea"
	  }, "#"]]], ["li", ["p", ["code", "Breadcrumb"]], ["ul", ["li", ["p", ["code", "nameRender"], " 新增 ", ["code", "route"], " 和 ", ["code", "params"], " 参数。 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1999"
	  }, "#1999"]]], ["li", ["p", ["code", "linkRender"], " 新增 ", ["code", "paths"], " 参数。"]]]], ["li", ["p", "再次修复 ", ["code", "Table"], " 组件 ", ["code", "rowSelection.onChange"], " 与 ", ["code", "onRowClick"], " 冲突问题。 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1470"
	  }, "#1470"]]], ["li", ["p", "修复 ", ["code", "Form.Item"], " 中 ", ["code", "Input"], " 高度抖动问题。 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1955"
	  }, "#1955"]]], ["li", ["p", "修复高级搜索的 ", ["code", "ant-advanced-search-form"], " 样式丢失的问题。"]]], ["h2", "1.3.2"], ["p", ["code", "2016-06-06"]], ["ul", ["li", ["p", "修复全局模式下引用 antd，IE8 环境报错的问题。 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1970"
	  }, "#1970"]]]], ["h2", "1.3.1"], ["p", ["code", "2016-06-06"]], ["ul", ["li", ["p", "修复 ", ["code", "Message"], " ", ["code", "Notification"], " 找不到的问题。 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1968"
	  }, "#1968"]]]], ["h2", "1.3.0"], ["p", ["code", "2016-06-02"]], ["ul", ["li", ["p", "Transfer 组件增加 ", ["code", "rowKey"], " 属性，可自定义数据源主键。 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1900"
	  }, "#1900"]]], ["li", ["p", "Tag 组件 ", ["code", "default"], " 类型的样式增加边框，防止淹没在背景中。 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1910"
	  }, "#1910"]]], ["li", ["p", "Table"], ["ul", ["li", ["p", "修复筛选为单选时仍旧展示多选框的问题。 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1880"
	  }, "#1880"]]], ["li", ["p", "修复 fixed left 的固定列会覆盖 rowSelection 的 Checkbox 的问题。 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1829"
	  }, "#1829"]]], ["li", ["p", "升级 rc-table 依赖"], ["ul", ["li", ["p", "修复了 fixed 列中数据重复展示以及一些错位问题。 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1898"
	  }, "#1898"]]], ["li", ["p", ["code", "dataIndex"], " 支持内嵌属性的写法。 ", ["a", {
	    "title": null,
	    "href": "https://github.com/react-component/table/issues/46"
	  }, "react-component/table#46"]]]]]]], ["li", ["p", "修复了 v1.2.0 新增加的组件属性的 TypeScript 定义。 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1933"
	  }, "#1933"]]], ["li", ["p", "Form 修复 label中冒号的国际化问题，采用样式实现冒号，不再需要手动输入冒号。 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1877"
	  }, "#1877"]]], ["li", ["p", "修复 DatePicker 组件点击『此刻』失效的问题，并进行了一些代码优化。 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1902"
	  }, "#1902"]]], ["li", ["p", "升级 rc-upload 依赖，修复了 IE10 中第二次上传同一文件不触发 ", ["code", "onChange"], " 的问题。 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/commit/b15a4e3165be5e4db995d3fe75d4d557c7f21c61"
	  }, "058af3c"]]], ["li", ["p", "文档使用 ", ["a", {
	    "title": null,
	    "href": "https://github.com/benjycui/bisheng"
	  }, "bisheng"], " 重构。"]]], ["h2", "1.2.1"], ["p", ["code", "2016-05-27"]], ["ul", ["li", ["p", "修复一个 Select 组件的文字重复问题。"]]], ["h2", "1.2.0"], ["p", ["code", "2016-05-26"]], ["ul", ["li", ["p", "Input 组件的文档现在和 Form 分离。 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/commit/3c98d3f80f4ec80066756adc3b4108141d4383ca"
	  }, "3c98d3"]]], ["li", ["p", "Affix"], ["ul", ["li", ["p", "新增了 ", ["code", "onChange"], " 属性。当固定状态改变时回调 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1777"
	  }, "#1777"]]], ["li", ["p", "找回了从 affixStyle 中走失的 ", ["code", "width"], " 属性，修复固定后错位的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1820"
	  }, "#1820"]]]]], ["li", ["p", "Table"], ["ul", ["li", ["p", "修复了 Table 组件的分页相关的一系列问题 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1669"
	  }, "#1669"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1842"
	  }, "#1842"]]], ["li", ["p", "修复了当有列固定在左边时，选择框不显示的问题 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1829"
	  }, "#1829"]]]]], ["li", ["p", "修复了当 Checkbox 的 label 为数字 0 时， label 不显示的问题 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1811"
	  }, "#1811"]]], ["li", ["p", "修复 Select combobox 模式下无法重置 ", ["code", "optionLabelProp"], " 的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1773"
	  }, "#1773"]]], ["li", ["p", "修复了 Tag 组件为 closeable 时，内部链接无法点击的问题 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1862"
	  }, "#1862"]]], ["li", ["p", "Tab 组件新增 ", ["code", "hideAdd"], " 属性，用于关闭右边的添加按钮 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1750"
	  }, "#1750"]]], ["li", ["p", "修复了一个在某些情况下找不到 ", ["code", "normalize.css/normalize.css"], " 文件的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/antd-init/issues/52"
	  }, "ant-design/antd-init#52"]]], ["li", ["p", "修复构建文件在 IE8 下报错的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1804"
	  }, "#1804"]]], ["li", ["p", "更新了第三方依赖。"]]], ["h2", "1.1.0"], ["p", ["code", "2016-05-18"]], ["ul", ["li", ["p", "Cascader 的选择框支持自定义渲染节点，并给 ", ["code", "displayRender"], " 方法增加了 ", ["code", "selectedOptions"], " 参数。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1726"
	  }, "#1726"]]], ["li", ["p", "Input.Group 新增 ", ["code", "size"], " 属性，可设置控件尺寸。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1732"
	  }, "#1732"]]], ["li", ["p", "Layout 新增常用布局：侧边导航展开收起模式。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1643"
	  }, "#1643"]]], ["li", ["p", "Transfer 支持自定义渲染行数据。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1664"
	  }, "#1664"]]], ["li", ["p", "Upload 的 children 为空时，不再显示上传按钮。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1610"
	  }, "#1610"]]], ["li", ["p", "Table"], ["ul", ["li", ["p", "修复 ", ["code", "filter"], " 过滤数据后显示错误分页的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1669"
	  }, "#1669"]]], ["li", ["p", "修复 ", ["code", "pagination"], " 不指定时显示错误分页的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1683"
	  }, "#1683"]]]]], ["li", ["p", "Modal"], ["ul", ["li", ["p", "修复弹出时背景依然跟随滚动的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1751"
	  }, "#1751"]]], ["li", ["p", "修复关闭按钮获得焦点时的样式问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1668"
	  }, "#1668"]]]]], ["li", ["p", "将搜索输入框相关样式移到 Input 组件下。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/commit/7b7f8461611e53f4f96ae8d64d37fe28ee8d2553"
	  }, "7b7f846"]]], ["li", ["p", "修复 Select 获得焦点时的样式问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1684"
	  }, "#1684"]]], ["li", ["p", "修复 TreeSelect 占位符样式问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1657"
	  }, "#1657"]]], ["li", ["p", "修复了类型定义以更好地支持 ", ["code", "TypeScript"], "。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/1696"
	  }, "#1696"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/xujihui1985"
	  }, "@xujihui1985"]]], ["li", ["p", "优化了 LocaleProvider。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/commit/a3850a4df84d7055a1a40600919f2f9ba1bbf2b2"
	  }, "a3850a4"]]], ["li", ["p", "其他组件的样式优化。"]]], ["h2", "1.0.1"], ["p", ["code", "2016-05-11"]], ["ul", ["li", ["p", "修复当 Table 的 ", ["code", "rowSelection.type"], " 为 'radio' 时的报错。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1627"
	  }, "#1627"]]], ["li", ["p", "修复 CheckboxGroup 与 ", ["code", "getFieldProps"], "共用时的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1631"
	  }, "#1631"]]], ["li", ["p", "修复 RangePicker 中 TimePicker 不会受 locale 控制的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1635"
	  }, "#1635"]]], ["li", ["p", "修复 Tag 组件缺失的问题。"]], ["li", ["p", "修复 Table 的 className 不在最外层容器上的问题。"]], ["li", ["p", "修复一个样式文件重复打包的问题。"]]], ["h2", "1.0.0"], ["p", ["code", "2016-05-09"]], ["p", "很高兴的通知各位，经过四个月时间的紧密开发，", ["code", "antd@1.0.0"], " 终于发布了。从去年 5 月 7 日提交第一行代码以来，经过整整一年的开发迭代，antd 受到社区的大量关注，使用的公司和产品持续增加，已经日趋成熟。这个版本我们重构了底层代码和站点，持续完善现有组件功能和优化细节，其中很多都来自社区的贡献，无法一一感谢，欢迎各位持续关注和鞭策。在升级过程中遇到任何问题，请及时反馈给我们。"], ["h3", "主要变化"], ["ul", ["li", ["p", ["strong", "兼容 React@15.x"], "。"]], ["li", ["p", ["strong", "全新单页站点"], "，使用 React 和 antd 进行了彻底重构，加载更快，访问更流畅。"]], ["li", ["p", ["strong", "样式支持按需加载"], "。可参考 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/antd-init"
	  }, "antd-init"], " 的模版代码, 需要配合 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/babel-plugin-antd#usage"
	  }, "babel-plugin-antd"], " 插件和 ", ["code", "style"], " 配置进行使用。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/900"
	  }, "#900"]]], ["li", ["p", ["strong", "提供独立的构建文件"], "。", ["a", {
	    "title": null,
	    "href": "/docs/react/install#浏览器引入"
	  }, "文档"]]], ["li", ["p", "新增卡片组件 ", ["a", {
	    "title": null,
	    "href": "/components/card"
	  }, "Card"], "。"]], ["li", ["p", "新增评分组件 ", ["a", {
	    "title": null,
	    "href": "/components/rate"
	  }, "Rate"], "。"]], ["li", ["p", "新增 ", ["a", {
	    "title": null,
	    "href": "/components/locale-provider"
	  }, "LocaleProvider"], " 组件，提供组件文案的国际化支持，并新增了英语和俄语的语言配置。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1411"
	  }, "#1411"]]], ["li", ["p", "更好的服务端渲染支持，修复了 Badge、Spin、Calendar、Upload 等组件服务端渲染的问题。"]], ["li", ["p", "新增 antd.d.ts 以更好的支持 TypeScript。", ["a", {
	    "title": null,
	    "href": "https://github.com/bang88"
	  }, "@bang88"]]], ["li", ["p", "布局组件支持响应式布局和栅格间隔设置。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1082"
	  }, "#1082"]]], ["li", ["p", "Table 支持固定列和横向滚动。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1265"
	  }, "#1265"]]]], ["h3", "不兼容改动"], ["p", "此版本有部分不兼容的改动，升级时确保修改相应的使用代码。"], ["ul", ["li", ["p", "推荐使用样式按需加载。如果依然需要整体载入样式，", ["strong", "样式入口文件已变为"], " ", ["code", "antd/dist/antd.css"], " 和 ", ["code", "antd/dist/antd.less"], "。如果你在项目中覆盖了 less 变量，less 文件的引用方式也有 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1558#issuecomment-218120000"
	  }, "相应变更"], "。"], ["pre", {
	    "lang": "diff",
	    "highlighted": "<span class=\"token deleted\" >- import 'antd/lib/index.css';  // import 'antd/style/index.less';</span>\n<span class=\"token inserted\" >+ import 'antd/dist/antd.css';  // import 'antd/dist/antd.less';</span>"
	  }, ["code", "- import 'antd/lib/index.css';  // import 'antd/style/index.less';\n+ import 'antd/dist/antd.css';  // import 'antd/dist/antd.less';"]]], ["li", ["p", "完全移除了 ", ["code", "0.12"], " 中废弃的 Validation 组件，可以直接 import ", ["a", {
	    "title": null,
	    "href": "https://github.com/react-component/form-validation"
	  }, "rc-form-validation"], " 用以代替。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1096"
	  }, "#1096"]]], ["li", ["p", "Breadcrumb.Item 的 ", ["code", "href"], " 属性被移除，请直接用 ", ["code", "a"], " 标签包裹可点击的内容。"]], ["li", ["p", "Modal 移除了 ", ["code", "align"], " 属性，现在可以使用 ", ["code", "style"], " 属性调整位置。"]], ["li", ["p", ["code", "Modal.confirm"], " 等方法的配置项 ", ["code", "iconClassName"], " 重命名为 ", ["code", "iconType"], "。"]], ["li", ["p", "Select 移除了 ", ["code", "onChange"], " 中的 ", ["code", "label"], " 参数，新增了 ", ["code", "labelInValue"], " 属性。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1695"
	  }, "#1695"]]], ["li", ["p", "移除了 ", ["code", "import { Form } from 'antd/lib/form';"], " 的用法，应统一为 ", ["code", "import { Form } from 'antd';"], " 或 ", ["code", "import Form from 'antd/lib/form';"], "。"]]], ["h4", "有兼容提示的改动"], ["p", "这里的改动在升级后控制台会出现警告提示，请按提示进行修改。"], ["ul", ["li", ["p", "废弃 QueueAnim，可以直接 import ", ["a", {
	    "title": null,
	    "href": "https://github.com/react-component/queue-anim"
	  }, "rc-queue-anim"], " 用以代替。Ant Design 的动效方案已移至 ", ["a", {
	    "title": null,
	    "href": "http://motion.ant.design/components/queue-anim"
	  }, "Ant Motion"], "，欢迎前往探索。"]], ["li", ["p", "Affix 的 ", ["code", "offset"], " 属性重命名为 ", ["code", "offsetTop"], "。"]], ["li", ["p", "Popover 的 ", ["code", "overlay"], " 属性重命名为 ", ["code", "content"], "。"]], ["li", ["p", "Progress.Line 使用方式改为 ", ["code", "<Progress />"], " 或 ", ["code", "<Progress type=\"line\" />"], "。"]], ["li", ["p", "Progress.Circle 使用方式改为 ", ["code", "<Progress type=\"circle\" />"], "。"]], ["li", ["p", "Spin 的 ", ["code", "spining"], " 属性更正为 ", ["code", "spinning"], "。"]], ["li", ["p", "Alert 的 type ", ["code", "warn"], " 重命名为 ", ["code", "warning"], "。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1225"
	  }, "#1225"]]], ["li", ["p", "Tree 的 ", ["code", "onExpand"], " 参数从 ", ["code", "function(node, expanded, expandedKeys)"], " 调整为 ", ["code", "function(expandedKeys, {expanded, node})"], "。"]]], ["h3", "Bug 修复"], ["ul", ["li", ["p", "修复 Table 的 ", ["code", "size"], " 为 ", ["code", "middle"], " 时，分页器大小无法控制的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1396"
	  }, "#1396"]]], ["li", ["p", "修复 Table 的 ", ["code", "pagination.defaultCurrent"], " 失效的问题。"]], ["li", ["p", "修复 Cascader 的 ", ["code", "defaultValue"], " 没有被 ", ["code", "value"], " 覆盖的问题。"]], ["li", ["p", "修复 Select 同时设置 ", ["code", "allowClear"], " ", ["code", "disabled"], " 时还是会出现清除按钮的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1480"
	  }, "#1480"]]], ["li", ["p", "修复 Transfer 的 ", ["code", "DataSource"], " 变化时已选中项没有同步的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1587"
	  }, "#1587"]]], ["li", ["p", "修复 DatePicker 日期格式与国际化配置不同步的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1509"
	  }, "#1509"]]], ["li", ["p", "修复 Button 禁用时事件仍然会冒泡的问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1541"
	  }, "#1541"]]], ["li", ["p", "修复 Carousel 自动播放时的卡顿和报错问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1397"
	  }, "#1397"]]], ["li", ["p", "修复 Tabs 的 card 类型内嵌标准 Tabs 时的样式问题。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1617"
	  }, "#1617"]]], ["li", ["p", "修复 Menu ", ["code", "horizontal"], " 和 ", ["code", "vertical"], " 模式不支持受控 ", ["code", "openKeys"], " 的问题。"]]], ["h3", "其他改进"], ["ul", ["li", ["p", "样式变量梳理，去除了部分无用的变量，另外还有大量样式细节问题修复。"]], ["li", ["p", "依赖的 normalize.css 升级到 ", ["a", {
	    "title": null,
	    "href": "https://github.com/necolas/normalize.css/blob/4.1.1/CHANGELOG.md"
	  }, "4.x"], "。"]], ["li", ["p", "使用 ES2016 classes 重构了代码。", ["a", {
	    "title": null,
	    "href": "https://github.com/waywardmonkeys"
	  }, "@waywardmonkeys"]]], ["li", ["p", "Popover、Popconfirm 和 Tooltip 组件根据不同的弹出位置有了更精准方向的弹出动画。"]], ["li", ["p", "补充 Select TreeSelect Switch Radio Checkbox 等组件的 ", ["code", "focus"], " 表现，增强表单组件的可用性。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1358"
	  }, "#1358"]]], ["li", ["p", "message 和 notification 现在可以全局配置 ", ["code", "duration"], "。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1143"
	  }, "#1143"]]], ["li", ["p", "DatePicker 和 TimePicker 的 ", ["code", "onChange(date, dateString)"], " 方法增加第二个参数用于获得格式化后的日期字符串。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1104"
	  }, "#1104"]]], ["li", ["p", "DatePicker 和 DatePicker.RangePicker 现在可以设置内部 TimePikcer 的属性。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1415"
	  }, "#1415"]]], ["li", ["p", "Checkbox"], ["ul", ["li", ["p", "支持类似 Radio 的使用方式 ", ["code", "<Checkbox>option</Checkbox>"], "。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1029"
	  }, "#1029"]]], ["li", ["p", "Checkbox.Group 现在允许 ", ["code", "label"], " 和 ", ["code", "value"], " 不同。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1025"
	  }, "#1025"]]], ["li", ["p", "Checkbox.Group 允许单独设置某个 Checkbox 为 ", ["code", "disabled"], "。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1218"
	  }, "#1218"]]]]], ["li", ["p", "Breadcrumb"], ["ul", ["li", ["p", "支持路由模式下自定义链接 ", ["code", "linkRender"], "。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1026"
	  }, "#1026"]]], ["li", ["p", "支持路由模式下自定义最后一项内容 ", ["code", "nameRender"], "。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1304"
	  }, "#1304"]]]]], ["li", ["p", "Modal"], ["ul", ["li", ["p", "新增 ", ["code", "Modal.warning"], " 方法。"]], ["li", ["p", "弹出时背景不再跟随滚动。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1195"
	  }, "#1195"]]]]], ["li", ["p", "Select"], ["ul", ["li", ["p", "搜索框和单选选择框合并，以优化视觉和交互效果。"]], ["li", ["p", "优化多选框的选中效果。"]]]], ["li", ["p", "Spin"], ["ul", ["li", ["p", "增加延时展示以优化体验。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1273"
	  }, "#1273"]]], ["li", ["p", "增加 ", ["code", "tip"], " 属性用于定义加载文案。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1046"
	  }, "#1046"]]]]], ["li", ["p", "Steps"], ["ul", ["li", ["p", "重构布局方式，以支持更灵活的自适应布局和优化了性能，并移除了 ", ["code", "maxDescriptionWidth"], " 属性。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1099"
	  }, "#1099"]]], ["li", ["p", "新增 ", ["code", "status"], " 属性以指定当前步骤状态，同时支持错误步骤的展示。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1098"
	  }, "#1098"]]]]], ["li", ["p", "Timeline"], ["ul", ["li", ["p", "新增 ", ["code", "dot"], " 属性，可自定义时间轴点。"]], ["li", ["p", "现在可以设置 ", ["code", "className"], " 和 ", ["code", "style"], " 的问题。"]], ["li", ["p", ["code", "color"], " 属性现在支持自定义色值。"]]]], ["li", ["p", "Tree"], ["ul", ["li", ["p", "当子节点被选中时，自动展开父节点。"]], ["li", ["p", "新增 ", ["code", "checkStrictly"], " 属性，支持父子节点选中关系脱离。"]]]], ["li", ["p", "Upload"], ["ul", ["li", ["p", "在上传文件列表中的文件被删除时，将触发 ", ["code", "onRemove"], " 事件。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1240"
	  }, "#1240"]]], ["li", ["p", "增加 ", ["code", "onPreview"], " 支持文件的自定义预览方式。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1240"
	  }, "#1240"]]], ["li", ["p", ["code", "data"], " 属性支持设为一个函数，用于动态修改上传参数。", ["a", {
	    "title": null,
	    "href": "https://github.com/react-component/upload/pull/32"
	  }, "react-component/upload#32"]]]]], ["li", ["p", "Slider ", ["code", "marks"], " 现在支持 JSX 并可以单独设置某个标记的样式。"]], ["li", ["p", "Tag 的 ", ["code", "onClose"], " 可以使用 ", ["code", "e.preventDefault()"], " 阻止默认事件。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1267"
	  }, "#1267"]]], ["li", ["p", "Form.Item 在有多个 child 时也可以自动生成错误信息与校验状态，但一个 Form.Item 内仍然只能有一个表单控件。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1287"
	  }, "#1287"]]], ["li", ["p", "Input 新增 ", ["code", "onPressEnter"], " 属性监听回车事件。"]], ["li", ["p", "Table 现在可以通过 ", ["code", "filteredValue"], " ", ["code", "sortOrder"], " 控制筛选和排序的状态。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/971"
	  }, "#971"]]], ["li", ["p", "Button 增加了 ", ["code", "icon"], " 属性。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1199"
	  }, "#1199"]]], ["li", ["p", "SubMenu 增加 ", ["code", "onTitleClick"], " 属性。"]], ["li", ["p", "Affix 增加 ", ["code", "offsetBottm"], " 属性，支持固定在底部。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1000"
	  }, "#1000"]]]], ["h3", "相关工具发布"], ["ul", ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://github.com/ant-design/antd-init"
	  }, "antd-init"], " 同步发布 ", ["code", "1.0.0"], " 版本，享受最新 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-tool/"
	  }, "ant-tool"], " 工具带来的流畅开发体验。"]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://motion.ant.design"
	  }, "Ant Motion"], " 全新的动效设计解决方案。"]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://ux.ant.design/"
	  }, "Ant UX"], " 发布 1.0 版本，提供多种平台的流程素材支持。"]]], ["h2", "0.12.17"], ["p", "去 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/releases?after=1.0.0"
	  }, "GitHub"], " 查看 ", ["code", "0.12.x"], " 及之前的更新日志。"]],
	  "meta": {
	    "order": 5,
	    "title": "更新日志",
	    "toc": false,
	    "timeline": true,
	    "filename": "CHANGELOG.zh-CN.md"
	  },
	  "description": ["section", ["p", "如果需要查看 ", ["code", "0.12.x"], " 及之前的更新日志，请移步 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/releases?after=1.0.0"
	  }, "GitHub"], "。"]],
	  "toc": ["ul", ["li", ["a", {
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
	  }, "1.11.2"]], ["li", ["a", {
	    "href": "#1.11.1"
	  }, "1.11.1"]], ["li", ["a", {
	    "href": "#1.11.0"
	  }, "1.11.0"]], ["li", ["a", {
	    "href": "#1.10.0"
	  }, "1.10.0"]], ["li", ["a", {
	    "href": "#1.9.1"
	  }, "1.9.1"]], ["li", ["a", {
	    "href": "#1.9.0"
	  }, "1.9.0"]], ["li", ["a", {
	    "href": "#1.8.0"
	  }, "1.8.0"]], ["li", ["a", {
	    "href": "#1.7.0"
	  }, "1.7.0"]], ["li", ["a", {
	    "href": "#1.6.5"
	  }, "1.6.5"]], ["li", ["a", {
	    "href": "#1.6.4"
	  }, "1.6.4"]], ["li", ["a", {
	    "href": "#1.6.3"
	  }, "1.6.3"]], ["li", ["a", {
	    "href": "#1.6.2"
	  }, "1.6.2"]], ["li", ["a", {
	    "href": "#1.6.1"
	  }, "1.6.1"]], ["li", ["a", {
	    "href": "#1.6.0"
	  }, "1.6.0"]], ["li", ["a", {
	    "href": "#1.5.1"
	  }, "1.5.1"]], ["li", ["a", {
	    "href": "#1.5.0"
	  }, "1.5.0"]], ["li", ["a", {
	    "href": "#1.4.1"
	  }, "1.4.1"]], ["li", ["a", {
	    "href": "#1.4.0"
	  }, "1.4.0"]], ["li", ["a", {
	    "href": "#1.3.2"
	  }, "1.3.2"]], ["li", ["a", {
	    "href": "#1.3.1"
	  }, "1.3.1"]], ["li", ["a", {
	    "href": "#1.3.0"
	  }, "1.3.0"]], ["li", ["a", {
	    "href": "#1.2.1"
	  }, "1.2.1"]], ["li", ["a", {
	    "href": "#1.2.0"
	  }, "1.2.0"]], ["li", ["a", {
	    "href": "#1.1.0"
	  }, "1.1.0"]], ["li", ["a", {
	    "href": "#1.0.1"
	  }, "1.0.1"]], ["li", ["a", {
	    "href": "#1.0.0"
	  }, "1.0.0"]], ["li", ["a", {
	    "href": "#0.12.17"
	  }, "0.12.17"]]]
	};

/***/ }

});