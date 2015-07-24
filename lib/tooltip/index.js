'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTooltip = require('rc-tooltip');

var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

exports['default'] = _react2['default'].createClass({
  displayName: 'index',

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
    return _react2['default'].createElement(
      _rcTooltip2['default'],
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
module.exports = exports['default'];