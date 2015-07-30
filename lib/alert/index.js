'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports['default'] = _react2['default'].createClass({
  displayName: 'index',

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-alert'
    };
  },
  getInitialState: function getInitialState() {
    return {
      display: 'block'
    };
  },
  handleClose: function handleClose(e) {
    if (this.props.onClose) {
      this.props.onClose.call(this, e);
    }
    this.setState({
      display: 'none'
    });
  },
  render: function render() {
    var iconClass = this.props.description ? 'ant-alert-with-description-icon anticon-' : 'ant-alert-icon anticon-';
    switch (this.props.type) {
      case 'success':
        iconClass += 'check-circle';
        break;
      case 'info':
        iconClass += 'info-circle';
        break;
      case 'error':
        iconClass += 'exclamation-circle';
        break;
      case 'warn':
        iconClass += 'question-circle';
        break;
      default:
        iconClass += 'default';
    }
    if (this.props.description) {
      var _close = this.props.closable ? _react2['default'].createElement(
        'a',
        { onClick: this.handleClose, className: 'ant-alert-with-description-close-icon' },
        _react2['default'].createElement('span', {
          className: 'ant-alert-with-description-close-icon-x' })
      ) : '';
      return _react2['default'].createElement(
        'div',
        { style: { display: this.state.display },
          className: 'ant-alert-with-description ant-alert-with-description-' + this.props.type },
        _react2['default'].createElement('i', { className: 'anticon ' + iconClass }),
        _react2['default'].createElement(
          'p',
          { className: 'ant-alert-with-description-message' },
          this.props.message
        ),
        _react2['default'].createElement(
          'span',
          { className: 'ant-alert-with-description-description' },
          this.props.description
        ),
        _close
      );
    } else {
      if (this.props.closeText) {
        return _react2['default'].createElement(
          'div',
          { style: { display: this.state.display }, className: 'ant-alert ant-alert-' + this.props.type },
          _react2['default'].createElement('i', { className: 'anticon ' + iconClass }),
          _react2['default'].createElement(
            'span',
            { className: 'ant-alert-description' },
            this.props.message
          ),
          _react2['default'].createElement(
            'span',
            { onClick: this.handleClose, className: 'ant-alert-close-text' },
            this.props.closeText
          )
        );
      } else {
        var _close2 = this.props.closable ? _react2['default'].createElement(
          'a',
          { onClick: this.handleClose, className: 'ant-alert-close-icon' },
          _react2['default'].createElement('span', { className: 'ant-alert-close-icon-x' })
        ) : '';
        return _react2['default'].createElement(
          'div',
          { style: { display: this.state.display }, className: 'ant-alert ant-alert-' + this.props.type },
          _react2['default'].createElement('i', { className: 'anticon ' + iconClass }),
          _react2['default'].createElement(
            'span',
            { className: 'ant-alert-description' },
            this.props.message
          ),
          _close2
        );
      }
    }
  }
});
module.exports = exports['default'];