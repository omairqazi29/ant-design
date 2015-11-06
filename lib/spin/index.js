'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcUtil = require('rc-util');

var _cssAnimation = require('css-animation');

var AntSpin = _react2['default'].createClass({
  displayName: 'AntSpin',

  getDefaultProps: function getDefaultProps() {
    return {
      size: 'default'
    };
  },

  propTypes: {
    className: _react2['default'].PropTypes.string,
    size: _react2['default'].PropTypes.oneOf(['small', 'default', 'large'])
  },

  isNestedPattern: function isNestedPattern() {
    return !!(this.props && this.props.children);
  },

  render: function render() {
    var _classSet;

    var _props = this.props;
    var className = _props.className;
    var size = _props.size;

    var others = _objectWithoutProperties(_props, ['className', 'size']);

    var spinClassName = (0, _rcUtil.classSet)((_classSet = {
      'ant-spin': true
    }, _defineProperty(_classSet, 'ant-spin-' + size, size), _defineProperty(_classSet, className, !!className), _classSet));

    var spinElement = undefined;
    if (!_cssAnimation.isCssAnimationSupported) {
      // not support for animation, just use text instead
      spinElement = _react2['default'].createElement(
        'div',
        { className: spinClassName },
        '加载中...'
      );
    } else {
      spinElement = _react2['default'].createElement(
        'div',
        { className: spinClassName },
        _react2['default'].createElement('span', { className: 'ant-spin-dot ant-spin-dot-first' }),
        _react2['default'].createElement('span', { className: 'ant-spin-dot ant-spin-dot-second' }),
        _react2['default'].createElement('span', { className: 'ant-spin-dot ant-spin-dot-third' })
      );
    }

    if (this.isNestedPattern()) {
      return _react2['default'].createElement(
        'div',
        { className: 'ant-spin-nested-loading' },
        spinElement,
        _react2['default'].createElement(
          'div',
          { className: 'ant-spin-container' },
          this.props.children
        )
      );
    } else {
      return spinElement;
    }
  }
});

exports['default'] = AntSpin;
module.exports = exports['default'];