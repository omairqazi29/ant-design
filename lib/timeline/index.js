'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Timeline = _react2['default'].createClass({
  displayName: 'Timeline',

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-timeline'
    };
  },
  render: function render() {
    var children = this.props.children;
    return _react2['default'].createElement(
      'ul',
      { className: this.props.prefixCls },
      _react2['default'].Children.map(children, function (ele, idx) {
        var np = {
          timelineLast: idx === children.length - 1
        };
        return _react2['default'].cloneElement(ele, np);
      }, this)
    );
  }
});

Timeline.Item = _react2['default'].createClass({
  displayName: 'Item',

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-timeline',
      color: 'blue',
      end: false
    };
  },
  render: function render() {
    var props = this.props;
    var prefixCls = props.prefixCls;
    var color = props.color;
    var end = props.end;
    var endCls = end ? prefixCls + '-item-tail-end' : '';
    var last = end ? _react2['default'].createElement('div', { className: prefixCls + '-item-head ' + prefixCls + '-item-head-end' }) : null;
    var lastLineShow = props.timelineLast && !end ? 'none' : 'block';

    return _react2['default'].createElement(
      'li',
      { className: prefixCls + '-item' },
      _react2['default'].createElement('div', { style: { display: lastLineShow }, className: prefixCls + '-item-tail ' + endCls }),
      _react2['default'].createElement('div', { className: prefixCls + '-item-head ' + prefixCls + '-item-head-' + color }),
      _react2['default'].createElement(
        'div',
        { className: prefixCls + '-item-content' },
        props.children
      ),
      last
    );
  }
});

exports['default'] = Timeline;
module.exports = exports['default'];