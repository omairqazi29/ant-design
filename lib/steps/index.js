'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcSteps = require('rc-steps');

var _rcSteps2 = _interopRequireDefault(_rcSteps);

var AntSteps = _react2['default'].createClass({
  displayName: 'AntSteps',

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-steps',
      iconPrefix: 'ant',
      size: 'default',
      maxDescriptionWidth: 100
    };
  },
  render: function render() {
    return _react2['default'].createElement(
      _rcSteps2['default'],
      { size: this.props.size,
        iconPrefix: this.props.iconPrefix,
        maxDescriptionWidth: this.props.maxDescriptionWidth,
        prefixCls: this.props.prefixCls },
      this.props.children
    );
  }
});
AntSteps.Step = _rcSteps2['default'].Step;

exports['default'] = AntSteps;
module.exports = exports['default'];