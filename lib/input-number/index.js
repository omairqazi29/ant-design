'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
    return React.createElement(InputNumber, _extends({ style: { width: 90 } }, this.props));
  }
});

module.exports = AntInputNumber;