'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcSelect = require('rc-select');

var _rcSelect2 = _interopRequireDefault(_rcSelect);

var AntSelect = _react2['default'].createClass({
  displayName: 'AntSelect',

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-select',
      transitionName: 'slide-up',
      optionLabelProp: 'children',
      showSearch: false
    };
  },
  render: function render() {
    return _react2['default'].createElement(_rcSelect2['default'], this.props);
  }
});

AntSelect.Option = _rcSelect2['default'].Option;

exports['default'] = AntSelect;
module.exports = exports['default'];