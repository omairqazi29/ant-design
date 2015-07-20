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

var getMessageInstance = function getMessageInstance() {
  return _rcNotification2['default'].newInstance({
    prefixCls: 'ant-message',
    transitionName: 'move-up',
    style: {} // 覆盖原来的样式
  });
};

exports['default'] = {
  info: function info(m, t) {
    var message = getMessageInstance();
    t = t || defaultDuration;
    message.notice({
      key: 'simpleMessage',
      duration: t,
      style: {},
      content: _react2['default'].createElement(
        'div',
        { className: 'ant-message-custom-content' },
        _react2['default'].createElement('i', { className: 'anticon anticon-info-circle ant-message-info' }),
        _react2['default'].createElement(
          'span',
          null,
          m
        )
      )
    });
  },
  success: function success(m, t) {
    var message = getMessageInstance();
    t = t || defaultDuration;
    message.notice({
      key: 'simpleMessage1',
      transitionName: 'move-up',
      duration: t,
      style: {},
      content: _react2['default'].createElement(
        'div',
        { className: 'ant-message-custom-content' },
        _react2['default'].createElement('i', { className: 'anticon anticon-check-circle ant-message-success' }),
        _react2['default'].createElement(
          'span',
          null,
          m
        )
      )
    });
  },
  error: function error(m, t) {
    var message = getMessageInstance();
    t = t || defaultDuration;
    message.notice({
      key: 'simpleMessage2',
      transitionName: 'move-up',
      duration: t,
      style: {},
      content: _react2['default'].createElement(
        'div',
        { className: 'ant-message-custom-content' },
        _react2['default'].createElement('i', { className: 'anticon anticon-exclamation-circle ant-message-error' }),
        _react2['default'].createElement(
          'span',
          null,
          m
        )
      )
    });
  }
};
module.exports = exports['default'];