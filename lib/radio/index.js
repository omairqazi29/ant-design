'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Radio = require('rc-radio');
var React = require('react');

var AntRadio = React.createClass({
  displayName: 'AntRadio',

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-radio'
    };
  },
  render: function render() {
    return React.createElement(
      'label',
      null,
      React.createElement(Radio, _extends({}, this.props, { children: null })),
      this.props.children
    );
  }
});

module.exports = AntRadio;