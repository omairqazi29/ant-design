'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcNotification = require('rc-notification');

var _rcNotification2 = _interopRequireDefault(_rcNotification);

var defaultDuration = 1.5;

function getMessageInstance() {
  return _rcNotification2['default'].newInstance({
    prefixCls: 'ant-message',
    transitionName: 'move-up',
    style: {} // 覆盖原来的样式
  });
}

function notice(content, duration, type) {
  if (duration === undefined) duration = defaultDuration;

  var iconClass = ({
    'info': 'anticon-info-circle ant-message-info',
    'success': 'anticon-check-circle ant-message-success',
    'error': 'anticon-exclamation-circle ant-message-error'
  })[type];
  getMessageInstance().notice({
    key: 'simpleMessage',
    duration: duration,
    style: {},
    content: _react2['default'].createElement(
      'div',
      { className: "ant-message-custom-content" },
      _react2['default'].createElement('i', { className: 'anticon ' + iconClass }),
      _react2['default'].createElement(
        'span',
        null,
        content
      )
    )
  });
}

exports['default'] = {
  info: function info(content, duration) {
    notice(content, duration, 'info');
  },
  success: function success(content, duration) {
    notice(content, duration, 'success');
  },
  error: function error(content, duration) {
    notice(content, duration, 'error');
  }
};
module.exports = exports['default'];