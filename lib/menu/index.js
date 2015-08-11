'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _rcMenu = require('rc-menu');

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var AntMenu = _react2['default'].createClass({
  displayName: 'AntMenu',

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-menu'
    };
  },

  render: function render() {
    return _react2['default'].createElement(_rcMenu2['default'], this.props);
  }
});

AntMenu.Divider = _rcMenu2['default'].Divider;
AntMenu.Item = _rcMenu2['default'].Item;
AntMenu.SubMenu = _rcMenu2['default'].SubMenu;

exports['default'] = AntMenu;
module.exports = exports['default'];