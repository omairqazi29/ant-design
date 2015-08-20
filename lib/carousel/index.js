'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactSlick2 = require('react-slick2');

var _reactSlick22 = _interopRequireDefault(_reactSlick2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var AntCarousel = _react2['default'].createClass({
  displayName: 'AntCarousel',

  getDefaultProps: function getDefaultProps() {
    return {
      dots: true,
      arrows: false
    };
  },
  render: function render() {
    var props = (0, _objectAssign2['default'])({}, this.props);

    if (props.effect === 'fade') {
      props.fade = true;
    }

    var className = 'ant-carousel';
    if (props.vertical) {
      className = className + ' ant-carousel-vertical';
    }

    return _react2['default'].createElement(
      'div',
      { className: className },
      _react2['default'].createElement(_reactSlick22['default'], props)
    );
  }
});

exports['default'] = AntCarousel;
module.exports = exports['default'];