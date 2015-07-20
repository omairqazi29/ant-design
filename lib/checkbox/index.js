'use strict';

var Checkbox = require('rc-checkbox');
var React = require('react');
var AntCheckbox = React.createClass({
  displayName: 'AntCheckbox',

  getDefaultProps: function getDefaultProps() {
    return { prefixCls: 'ant-checkbox' };
  }, render: function render() {
    return React.createElement(Checkbox, this.props);
  }
});

module.exports = AntCheckbox;