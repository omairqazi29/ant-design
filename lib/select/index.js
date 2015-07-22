'use strict';

var React = require('react');
var Select = require('rc-select');

module.exports = React.createClass({
  displayName: 'exports',

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-select',
      transitionName: 'slide-up',
      optionLabelProp: 'children',
      showSearch: false
    };
  },
  render: function render() {
    return React.createElement(Select, this.props);
  }
});

module.exports.Option = Select.Option;