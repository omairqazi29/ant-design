'use strict';

var InputNumber = require('rc-input-number');
var React = require('react');

var AntInputNumber = React.createClass({
  displayName: 'AntInputNumber',

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-input-number'
    };
  },
  render: function render() {
    return React.createElement(InputNumber, this.props);
  }
});

module.exports = AntInputNumber;