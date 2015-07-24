'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcDialog = require('rc-dialog');

var _rcDialog2 = _interopRequireDefault(_rcDialog);

var div;

exports['default'] = function (props) {
  var d;
  props = props || {};
  props.iconClassName = props.iconClassName || 'anticon-exclamation-circle';
  var width = props.width || 375;

  function close() {
    d.setState({
      visible: false
    });
  }

  function onCancel() {
    var cancelFn = props.onCancel;
    if (cancelFn) {
      var ret;
      if (cancelFn.length) {
        ret = cancelFn(close);
      } else {
        ret = cancelFn();
        if (!ret) {
          close();
        }
      }
      if (ret && ret.then) {
        ret.then(close);
      }
    } else {
      close();
    }
  }

  function onOk() {
    var okFn = props.onOk;
    if (okFn) {
      var ret;
      if (okFn.length) {
        ret = okFn(close);
      } else {
        ret = okFn();
        if (!ret) {
          close();
        }
      }
      if (ret && ret.then) {
        ret.then(close);
      }
    } else {
      close();
    }
  }

  var body = _react2['default'].createElement(
    'div',
    { className: "ant-confirm-body" },
    _react2['default'].createElement('i', { className: 'anticon ' + props.iconClassName }),
    _react2['default'].createElement(
      'span',
      { className: "ant-confirm-title" },
      props.title
    ),
    _react2['default'].createElement(
      'div',
      { className: "ant-confirm-content" },
      props.content
    )
  );
  var footer = _react2['default'].createElement(
    'div',
    { className: "ant-confirm-btns" },
    _react2['default'].createElement(
      'button',
      { type: "button", className: "ant-btn-default ant-btn ant-btn-lg", onClick: onCancel },
      '取 消'
    ),
    _react2['default'].createElement(
      'button',
      { type: "button", className: "ant-btn-primary ant-btn ant-btn-lg", onClick: onOk },
      '确 定'
    )
  );

  if (!div) {
    div = document.createElement('div');
    document.body.appendChild(div);
  }

  _react2['default'].render(_react2['default'].createElement(
    _rcDialog2['default'],
    {
      prefixCls: "ant-modal",
      className: "ant-confirm",
      renderToBody: false,
      visible: true,
      closable: false,
      title: "",
      transitionName: "zoom",
      maskTransitionName: "fade", width: width },
    _react2['default'].createElement(
      'div',
      { style: { zoom: 1, overflow: 'hidden' } },
      body,
      ' ',
      footer
    )
  ), div, function () {
    d = this;
  });
};

module.exports = exports['default'];