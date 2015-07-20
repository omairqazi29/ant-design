'use strict';

var React = require('react');
var Steps = require('rc-steps');

var AntSteps = React.createClass({
  displayName: 'AntSteps',

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-steps',
      iconPrefix: 'ant',
      size: 'default',
      maxDescriptionWidth: 100
    };
  },
  render: function render() {
    return React.createElement(
      Steps,
      { size: this.props.size,
        iconPrefix: this.props.iconPrefix,
        maxDescriptionWidth: this.props.maxDescriptionWidth,
        prefixCls: this.props.prefixCls },
      this.props.children
    );
  }
});
AntSteps.Step = Steps.Step;

module.exports = AntSteps;