'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var Dialog = require('rc-dialog');
function noop() {}

var Modal = React.createClass({
  displayName: 'Modal',

  getInitialState: function getInitialState() {
    return {
      visible: false
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

  show: function show() {
    this.setState({
      visible: true
    });
  },

  hide: function hide() {
    this.setState({
      visible: false
    });
  },

  handleOk: function handleOk() {
    this.props.onOk();
  },

  render: function render() {
    var props = this.props;
    var footer = props.footer || [React.createElement(
      'button',
      { key: 'cancel', type: 'button', className: 'ant-btn-default ant-btn', onClick: this.handleCancel },
      '取 消'
    ), React.createElement(
      'button',
      { key: 'confirm', type: 'button', className: 'ant-btn-primary ant-btn', onClick: this.handleOk },
      '确 定'
    )];
    return React.createElement(Dialog, _extends({ transitionName: 'zoom', onBeforeClose: props.onCancel, visible: this.state.visible, maskAnimation: 'fade', width: '500', footer: footer }, props, { ref: 'd' }));
  }
});

module.exports = Modal;