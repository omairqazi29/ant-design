'use strict';

var React = require('react');
var Dropdown = require('rc-dropdown');

var AntDropdown = React.createClass({
  displayName: 'AntDropdown',

  getDefaultProps: function getDefaultProps() {
    return {
      transitionName: 'slide-up',
      prefixCls: 'ant-dropdown'
    };
  },
  render: function render() {
    return React.createElement(Dropdown, this.props);
  }
});

module.exports = AntDropdown;