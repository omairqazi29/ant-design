'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTooltip = require('rc-tooltip');

var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

var prefixCls = 'ant-popover';

exports['default'] = _react2['default'].createClass({
  displayName: 'index',

  getDefaultProps: function getDefaultProps() {
    return {
      transitionName: '',
      placement: 'top',
      trigger: 'hover'
    };
  },
  render: function render() {
    var overlay = _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'div',
        { className: prefixCls + '-title' },
        this.props.title
      ),
      _react2['default'].createElement(
        'div',
        { className: prefixCls + '-content' },
        this.props.overlay
      )
    );

    var transitionName = ({
      top: 'zoom-down',
      bottom: 'zoom-up',
      left: 'zoom-right',
      right: 'zoom-left'
    })[this.props.placement];

    return _react2['default'].createElement(
      _rcTooltip2['default'],
      { placement: this.props.placement,
        prefixCls: prefixCls,
        delay: 0.1,
        renderPopupToBody: false,
        transitionName: transitionName,
        trigger: this.props.trigger,
        overlay: overlay },
      this.props.children
    );
  }
});
module.exports = exports['default'];