'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcCalendar = require('rc-calendar');

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _gregorianCalendar = require('gregorian-calendar');

var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);

var _gregorianCalendarLibLocaleZhCn = require('gregorian-calendar/lib/locale/zh-cn');

var _gregorianCalendarLibLocaleZhCn2 = _interopRequireDefault(_gregorianCalendarLibLocaleZhCn);

var _rcCalendarLibLocaleZhCn = require('rc-calendar/lib/locale/zh-cn');

var _rcCalendarLibLocaleZhCn2 = _interopRequireDefault(_rcCalendarLibLocaleZhCn);

var _gregorianCalendarFormat = require('gregorian-calendar-format');

// 和顶部文案保持一致

var _gregorianCalendarFormat2 = _interopRequireDefault(_gregorianCalendarFormat);

var _gregorianCalendarFormatLibLocaleZhCn = require('gregorian-calendar-format/lib/locale/zh-cn');

var _gregorianCalendarFormatLibLocaleZhCn2 = _interopRequireDefault(_gregorianCalendarFormatLibLocaleZhCn);

var Datepicker = _rcCalendar2['default'].Picker;

_gregorianCalendarFormatLibLocaleZhCn2['default'].shortMonths = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

// 以下两行代码
// 给没有初始值的日期选择框提供本地化信息
var defaultCalendarValue = new _gregorianCalendar2['default'](_gregorianCalendarLibLocaleZhCn2['default']);
defaultCalendarValue.setTime(Date.now());

exports['default'] = _react2['default'].createClass({
  displayName: 'index',

  getInitialState: function getInitialState() {
    var value;
    if (this.props.value) {
      value = new _gregorianCalendar2['default'](_gregorianCalendarLibLocaleZhCn2['default']);
      value.setTime(new Date(this.props.value).valueOf());
    }
    return {
      value: value
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.value) {
      var value = new _gregorianCalendar2['default'](_gregorianCalendarLibLocaleZhCn2['default']);
      value.setTime(new Date(nextProps.value).valueOf());
      this.setState({
        value: value
      });
    }
  },
  getDefaultProps: function getDefaultProps() {
    return {
      format: 'yyyy-MM-dd',
      placeholder: '请选择日期',
      transitionName: 'slide-up',
      onSelect: function onSelect() {}
    };
  },
  handleChange: function handleChange(v) {
    this.setState({
      value: v
    });
    this.props.onSelect(new Date(v.getTime()));
  },
  render: function render() {
    var calendar = _react2['default'].createElement(_rcCalendar2['default'], {
      disabledDate: this.props.disabledDate,
      locale: _rcCalendarLibLocaleZhCn2['default'],
      orient: ['top', 'left'],
      defaultValue: defaultCalendarValue,
      showTime: this.props.showTime,
      prefixCls: "ant-calendar",
      showOk: this.props.showTime,
      showClear: false });
    return _react2['default'].createElement(
      Datepicker,
      {
        transitionName: this.props.transitionName,
        disabled: this.props.disabled,
        trigger: _react2['default'].createElement('span', { className: "ant-calendar-picker-icon" }),
        calendar: calendar,
        adjustOrientOnCalendarOverflow: false,
        formatter: new _gregorianCalendarFormat2['default'](this.props.format),
        value: this.state.value,
        prefixCls: "ant-calendar-picker",
        onChange: this.handleChange },
      _react2['default'].createElement('input', { placeholder: this.props.placeholder, className: "ant-calendar-picker-input ant-input" })
    );
  }
});
module.exports = exports['default'];