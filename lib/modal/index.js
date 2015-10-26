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

var _rcUtil = require('rc-util');

var _confirm = require('./confirm');

var _confirm2 = _interopRequireDefault(_confirm);

var _button = require('../button');

function noop() {}

var mousePosition = undefined;
var mousePositionEventBinded = undefined;

var AntModal = _react2['default'].createClass({
  displayName: 'AntModal',

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-modal',
      onOk: noop,
      onCancel: noop,
      width: 520,
      transitionName: 'zoom',
      maskAnimation: 'fade'
    };
  },

  getInitialState: function getInitialState() {
    return {
      confirmLoading: false,
      visible: this.props.visible
    };
  },

  handleCancel: function handleCancel() {
    this.props.onCancel();
  },

  handleOk: function handleOk() {
    this.setState({
      confirmLoading: true
    });
    this.props.onOk();
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var newState = {};
    if ('visible' in nextProps) {
      newState.visible = nextProps.visible;
      // 隐藏后默认去除按钮 loading 效果
      if (!nextProps.visible) {
        newState.confirmLoading = false;
      }
    }
    if ('confirmLoading' in nextProps) {
      newState.confirmLoading = !!nextProps.confirmLoading;
    }
    this.setState(newState);
  },

  componentDidMount: function componentDidMount() {
    if (mousePositionEventBinded) {
      return;
    }
    // 只有点击事件支持从鼠标位置动画展开
    _rcUtil.Dom.addEventListener(document.body, 'click', function onDocumentMousemove(e) {
      mousePosition = {
        x: e.pageX,
        y: e.pageY
      };
      // 20ms 内发生过点击事件，则从点击位置动画展示
      // 否则直接 zoom 展示
      // 这样可以兼容非点击方式展开
      setTimeout(function () {
        return mousePosition = null;
      }, 20);
    });
    mousePositionEventBinded = true;
  },

  render: function render() {
    var props = this.props;
    var defaultFooter = [_react2['default'].createElement(
      _button.Button,
      { key: 'cancel',
        type: 'ghost',
        size: 'large',
        onClick: this.handleCancel },
      '取消'
    ), _react2['default'].createElement(
      _button.Button,
      { key: 'confirm',
        type: 'primary',
        size: 'large',
        loading: this.state.confirmLoading,
        onClick: this.handleOk },
      '确定'
    )];
    var footer = props.footer || defaultFooter;
    var visible = this.state.visible;
    return _react2['default'].createElement(_rcDialog2['default'], _extends({ onClose: this.handleCancel, footer: footer }, props, {
      visible: visible, mousePosition: mousePosition }));
  }
});

AntModal.info = function (props) {
  props.iconClassName = 'info-circle';
  props.okCancel = false;
  return (0, _confirm2['default'])(props);
};

AntModal.success = function (props) {
  props.iconClassName = 'check-circle';
  props.okCancel = false;
  return (0, _confirm2['default'])(props);
};

AntModal.error = function (props) {
  props.iconClassName = 'exclamation-circle';
  props.okCancel = false;
  return (0, _confirm2['default'])(props);
};

AntModal.confirm = function (props) {
  props.okCancel = true;
  return (0, _confirm2['default'])(props);
};

exports['default'] = AntModal;
module.exports = exports['default'];