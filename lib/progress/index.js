'use strict';

var Progressline = require('rc-progress').Line;
var Progresscircle = require('rc-progress').Circle;
var React = require('react');
var assign = require('object-assign');

var Line = React.createClass({
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

    var props = assign({}, this.props);

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
      progressInfo = React.createElement(
        'span',
        { style: textStyle, className: 'ant-progress-line-text' },
        React.createElement('i', { style: iconStyle, className: "anticon anticon-exclamation-circle" })
      );
    } else if (props.status === 'success') {
      progressInfo = React.createElement(
        'span',
        { style: textStyle, className: 'ant-progress-line-text' },
        React.createElement('i', { style: iconStyle, className: "anticon anticon-check-circle" })
      );
    } else {
      progressInfo = React.createElement(
        'span',
        { className: 'ant-progress-line-text' },
        props.percent,
        '%'
      );
    }

    return React.createElement(
      'div',
      { className: 'ant-progress-line-wrap' },
      React.createElement(
        'div',
        { className: 'ant-progress-line-inner', style: style },
        React.createElement(Progressline, { percent: props.percent, strokeWidth: props.strokeWidth,
          strokeColor: statusColorMap[props.status], trailColor: "#e9e9e9" })
      ),
      progressInfo
    );
  }
});

var Circle = React.createClass({
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

    var props = assign({}, this.props);

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
      progressInfo = React.createElement(
        'span',
        { style: textStyle, className: 'ant-progress-circle-text' },
        React.createElement('i', { className: 'anticon anticon-exclamation' })
      );
    } else if (props.status === 'success') {
      progressInfo = React.createElement(
        'span',
        { style: textStyle, className: 'ant-progress-circle-text' },
        React.createElement('i', { className: "anticon anticon-check" })
      );
    } else {
      progressInfo = React.createElement(
        'span',
        { className: "ant-progress-circle-text" },
        props.percent,
        '%'
      );
    }

    return React.createElement(
      'div',
      { className: "ant-progress-circle-wrap", style: wrapStyle },
      React.createElement(
        'div',
        { className: "ant-progress-circle-inner", style: style },
        React.createElement(Progresscircle, { percent: props.percent, strokeWidth: props.strokeWidth,
          strokeColor: statusColorMap[props.status], trailColor: "#e9e9e9" }),
        progressInfo
      )
    );
  }
});

module.exports = {
  Line: Line,
  Circle: Circle
};