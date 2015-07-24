'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcDialog = require('rc-dialog');

var _rcDialog2 = _interopRequireDefault(_rcDialog);

function noop() {}

exports['default'] = _react2['default'].createClass({
  displayName: 'index',

  getInitialState: function getInitialState() {
    return {
      visible: false,
      confirmLoading: false
    };
  },

  handleCancel: function handleCancel() {
    var d = this.refs.d;
    d.requestClose();
  },

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-modal',
      onOk: noop,
      onCancel: noop
    };
  },

  handleOk: function handleOk() {
    this.setState({
      confirmLoading: true
    });
    if (typeof this.props.onOk) {
      this.props.onOk();
    }
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      // 隐藏后去除按钮 loading 效果
      if (!nextProps.visible) {
        this.setState({
          confirmLoading: false
        });
      }
    }
  },

  render: function render() {
    var loadingIcon = this.state.confirmLoading ? _react2['default'].createElement('i', { className: "anticon anticon-loading" }) : '';
    var props = this.props;
    var footer = props.footer || [_react2['default'].createElement(
      'button',
      { key: "cancel", type: "button", className: "ant-btn ant-btn-lg", onClick: this.handleCancel },
      '取 消'
    ), _react2['default'].createElement(
      'button',
      { key: "confirm", type: "button", className: "ant-btn ant-btn-primary ant-btn-lg", onClick: this.handleOk },
      '确 定 ',
      loadingIcon
    )];
    return _react2['default'].createElement(_rcDialog2['default'], _extends({ transitionName: "zoom", onBeforeClose: props.onCancel, visible: this.state.visible, maskAnimation: "fade", width: "500", footer: footer }, props, { ref: "d" }));
  }
});
module.exports = exports['default'];