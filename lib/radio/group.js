'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function getCheckedValue(children) {
  var checkedValue = null;
  children.forEach(function (radio) {
    if (radio.props && radio.props.checked) {
      checkedValue = radio.props.value;
    }
  });
  return checkedValue;
}

exports['default'] = _react2['default'].createClass({
  displayName: 'group',

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-radio-group',
      onChange: function onChange() {}
    };
  },
  getInitialState: function getInitialState() {
    var props = this.props;
    return {
      value: props.value || props.defaultValue || getCheckedValue(props.children)
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('value' in nextProps || getCheckedValue(nextProps.children)) {
      this.setState({
        value: nextProps.value || getCheckedValue(nextProps.children)
      });
    }
  },
  render: function render() {
    var _this = this;

    var props = this.props;
    var children = props.children.map(function (radio) {
      if (radio.props) {
        return _react2['default'].createElement(_index2['default'], _extends({
          key: radio.props.value
        }, radio.props, {
          onChange: _this.onRadioChange,
          checked: _this.state.value === radio.props.value
        }));
      }
      return radio;
    });
    return _react2['default'].createElement(
      'div',
      { className: props.prefixCls },
      children
    );
  },
  onRadioChange: function onRadioChange(ev) {
    this.setState({
      value: ev.target.value
    });
    this.props.onChange(ev);
  }
});
module.exports = exports['default'];