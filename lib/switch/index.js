'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rcSwitch = require('rc-switch');

var _rcSwitch2 = _interopRequireDefault(_rcSwitch);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'switch',
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-switch'
    };
  },
  render: function render() {
    return _react2.default.createElement(_rcSwitch2.default, this.props);
  }
});
module.exports = exports['default'];