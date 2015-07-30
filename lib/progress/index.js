'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _rcProgress = require('rc-progress');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var Line = _react2['default'].createClass({
  displayName: 'Line',

  getDefaultProps: function getDefaultProps() {
    return {
      width: 300,
      percent: 0,
      strokeWidth: 3,
      status: 'normal' // exception
    };
  },
  render: function render() {
    var statusColorMap = {
      'normal': '#3FC7FA',
      'exception': '#FE8C6A',
      'success': '#85D262'
    };

    var props = (0, _objectAssign2['default'])({}, this.props);

    if (parseInt(props.percent) === 100) {
      props.status = 'success';
    }

    var style = {
      'width': props.width
    };
    var fontSize = props.width / 100 * props.strokeWidth;
    var iconStyle = {
      'fontSize': fontSize < 12 ? 12 : fontSize
    };
    var textStyle = {
      'color': statusColorMap[props.status]
    };
    var progressInfo;
    if (props.status === 'exception') {
      progressInfo = _react2['default'].createElement(
        'span',
        { style: textStyle, className: 'ant-progress-line-text' },
        _react2['default'].createElement('i', { style: iconStyle, className: "anticon anticon-exclamation-circle" })
      );
    } else if (props.status === 'success') {
      progressInfo = _react2['default'].createElement(
        'span',
        { style: textStyle, className: 'ant-progress-line-text' },
        _react2['default'].createElement('i', { style: iconStyle, className: "anticon anticon-check-circle" })
      );
    } else {
      progressInfo = _react2['default'].createElement(
        'span',
        { className: 'ant-progress-line-text' },
        props.percent,
        '%'
      );
    }

    return _react2['default'].createElement(
      'div',
      { className: 'ant-progress-line-wrap' },
      _react2['default'].createElement(
        'div',
        { className: 'ant-progress-line-inner', style: style },
        _react2['default'].createElement(_rcProgress.Line, { percent: props.percent, strokeWidth: props.strokeWidth,
          strokeColor: statusColorMap[props.status], trailColor: "#e9e9e9" })
      ),
      progressInfo
    );
  }
});

var Circle = _react2['default'].createClass({
  displayName: 'Circle',

  getDefaultProps: function getDefaultProps() {
    return {
      width: 132,
      percent: 0,
      strokeWidth: 6,
      status: 'normal' // exception
    };
  },
  render: function render() {
    var statusColorMap = {
      'normal': '#3FC7FA',
      'exception': '#FE8C6A',
      'success': '#85D262'
    };

    var props = (0, _objectAssign2['default'])({}, this.props);

    if (parseInt(props.percent) === 100) {
      props.status = 'success';
    }

    var style = {
      'width': props.width,
      'height': props.width
    };
    var wrapStyle = {
      'fontSize': props.width * 0.16 + 6
    };
    var textStyle = {
      'color': statusColorMap[props.status]
    };
    var progressInfo;
    if (props.status === 'exception') {
      progressInfo = _react2['default'].createElement(
        'span',
        { style: textStyle, className: 'ant-progress-circle-text' },
        _react2['default'].createElement('i', { className: 'anticon anticon-exclamation' })
      );
    } else if (props.status === 'success') {
      progressInfo = _react2['default'].createElement(
        'span',
        { style: textStyle, className: 'ant-progress-circle-text' },
        _react2['default'].createElement('i', { className: "anticon anticon-check" })
      );
    } else {
      progressInfo = _react2['default'].createElement(
        'span',
        { className: "ant-progress-circle-text" },
        props.percent,
        '%'
      );
    }

    return _react2['default'].createElement(
      'div',
      { className: "ant-progress-circle-wrap", style: wrapStyle },
      _react2['default'].createElement(
        'div',
        { className: "ant-progress-circle-inner", style: style },
        _react2['default'].createElement(_rcProgress.Circle, { percent: props.percent, strokeWidth: props.strokeWidth,
          strokeColor: statusColorMap[props.status], trailColor: "#e9e9e9" }),
        progressInfo
      )
    );
  }
});

exports['default'] = {
  Line: Line,
  Circle: Circle
};
module.exports = exports['default'];