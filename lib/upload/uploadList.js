'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _progress = require('../progress');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefixCls = 'ant-upload';
exports.default = _react2.default.createClass({
  displayName: 'uploadList',
  getDefaultProps: function getDefaultProps() {
    return {
      listType: 'text', // or picture
      items: [],
      progressAttr: {
        strokeWidth: 3,
        showInfo: false
      }
    };
  },
  handleClose: function handleClose(file) {
    this.props.onRemove(file);
  },
  render: function render() {
    var _this = this,
        _classNames2;

    var list = this.props.items.map(function (file) {
      var _classNames;

      var progress = undefined;
      var icon = _react2.default.createElement(_icon2.default, { type: 'paper-clip' });

      if (_this.props.listType === 'picture') {
        icon = file.status === 'uploading' || !file.url ? _react2.default.createElement(_icon2.default, { className: prefixCls + '-list-item-thumbnail', type: 'picture' }) : _react2.default.createElement(
          'a',
          { className: prefixCls + '-list-item-thumbnail',
            href: file.url,
            target: '_blank' },
          _react2.default.createElement('img', { src: file.url, alt: file.name })
        );
      }
      if (file.status === 'uploading') {
        progress = _react2.default.createElement(
          'div',
          { className: prefixCls + '-list-item-progress' },
          _react2.default.createElement(_progress.Line, _extends({}, _this.props.progressAttr, { percent: file.percent }))
        );
      }
      var infoUploadingClass = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls + '-list-item', true), _defineProperty(_classNames, prefixCls + '-list-item-' + file.status, true), _classNames));
      return _react2.default.createElement(
        'div',
        { className: infoUploadingClass, key: file.uid },
        _react2.default.createElement(
          'div',
          { className: prefixCls + '-list-item-info' },
          icon,
          _react2.default.createElement(
            'span',
            { className: prefixCls + '-list-item-name' },
            file.name
          ),
          _react2.default.createElement(_icon2.default, { type: 'cross', onClick: _this.handleClose.bind(_this, file) })
        ),
        progress
      );
    });
    var listClassNames = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-list', true), _defineProperty(_classNames2, prefixCls + '-list-' + this.props.listType, true), _classNames2));
    return _react2.default.createElement(
      'div',
      { className: listClassNames },
      _react2.default.createElement(
        _rcAnimate2.default,
        { transitionName: prefixCls + '-margin-top' },
        list
      )
    );
  }
});
module.exports = exports['default'];