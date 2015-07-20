'use strict';

var Switch = require('rc-switch');
var React = require('react');

var AntSwitch = React.createClass({
  displayName: 'AntSwitch',

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-switch'
    };
  },
  render: function render() {
    return React.createElement(Switch, this.props);
  }
});

module.exports = AntSwitch;