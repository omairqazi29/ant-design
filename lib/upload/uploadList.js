'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
    var matchWay = file.uid === '' ? 'byName' : 'byUid';
    var items = this.state.items;
    var removeItem = items.filter(function (item) {
      if (matchWay === 'byName') {
        return item.filename === file.filename;
      } else {
        return item.uid === file.uid;
      }
    })[0];
    if (removeItem) {
      items.splice(removeItem, 1);
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
        { className: prefixCls + '-list-item', key: file.id },
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
      items.map(downloadItem)
    );
  }
});
module.exports = exports['default'];