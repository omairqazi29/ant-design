'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getFileItem = require('./getFileItem');

var _getFileItem2 = _interopRequireDefault(_getFileItem);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var prefixCls = 'ant-upload';
exports['default'] = _react2['default'].createClass({
  displayName: 'uploadList',

  getDefaultProps: function getDefaultProps() {
    return {
      items: []
    };
  },
  getInitialState: function getInitialState() {
    return {
      items: this.props.items
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('items' in nextProps) {
      this.setState({
        items: nextProps.items
      });
    }
  },
  handleClose: function handleClose(file) {
    var items = this.state.items;
    var removeItem = (0, _getFileItem2['default'])(file, items);
    if (removeItem) {
      items.splice(items.indexOf(removeItem), 1);
    }
    this.setState({
      items: items
    });
  },
  render: function render() {
    var _this = this;

    var items = this.state.items;
    var downloadItem = function downloadItem(file) {
      var statusIcon = file.status === 'done' ? _react2['default'].createElement('i', { className: 'anticon anticon-check ' + prefixCls + '-success-icon' }) : _react2['default'].createElement('i', { className: 'anticon anticon-loading' });
      return _react2['default'].createElement(
        'div',
        { className: prefixCls + '-list-item', key: file.index },
        statusIcon,
        _react2['default'].createElement(
          'b',
          { className: prefixCls + '-item-name' },
          file.filename
        ),
        _react2['default'].createElement('i', { className: 'anticon anticon-cross', ref: 'theCloseBtn',
          onClick: _this.handleClose.bind(_this, file) })
      );
    };
    return _react2['default'].createElement(
      'div',
      { className: prefixCls + '-list' },
      _react2['default'].createElement(
        _rcAnimate2['default'],
        { transitionName: prefixCls + '-margin-top' },
        items.map(downloadItem)
      )
    );
  }
});
module.exports = exports['default'];