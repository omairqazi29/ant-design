'use strict';

var React = require('react');
var Tooltip = require('rc-tooltip');

module.exports = React.createClass({
  displayName: 'exports',

  getDefaultProps: function getDefaultProps() {
    return {
      placement: 'top'
    };
  },
  render: function render() {
    var transitionName = ({
      top: 'zoom-down',
      bottom: 'zoom-up',
      left: 'zoom-right',
      right: 'zoom-left'
    })[this.props.placement];
    return React.createElement(
      Tooltip,
      { placement: this.props.placement,
        prefixCls: "ant-tooltip",
        delay: 0.1,
        trigger: this.props.trigger,
        transitionName: transitionName,
        overlay: this.props.title },
      this.props.children
    );
  }
});