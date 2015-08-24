'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcMenu = require('rc-menu');

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _velocityAnimate = require('velocity-animate');

var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);

var animation = {
  enter: function enter(node, done) {
    this.animate(node, 'slideDown', done);
  },
  leave: function leave(node, done) {
    this.animate(node, 'slideUp', done);
  },
  appear: function appear() {
    return this.enter.apply(this, arguments);
  },
  animate: function animate(node, transitionName, done) {
    var ok = undefined;
    function complete() {
      if (!ok) {
        ok = true;
        done();
      }
    }
    // Fix safari flash bug
    node.style.display = 'none';
    (0, _velocityAnimate2['default'])(node, transitionName, {
      duration: 240,
      complete: complete,
      easing: 'easeInOutQuad'
    });
    return {
      stop: function stop() {
        (0, _velocityAnimate2['default'])(node, 'finish');
        complete();
      }
    };
  }
};

var AntMenu = _react2['default'].createClass({
  displayName: 'AntMenu',

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-menu'
    };
  },
  render: function render() {
    var openAnimation = '';
    switch (this.props.mode) {
      case 'horizontal':
        openAnimation = 'slide-up';
        break;
      case 'vertical':
        openAnimation = 'zoom';
        break;
      case 'inline':
        openAnimation = animation;
        break;
    }
    if (this.props.mode === 'inline') {
      return _react2['default'].createElement(_rcMenu2['default'], _extends({}, this.props, { openAnimation: openAnimation }));
    } else {
      return _react2['default'].createElement(_rcMenu2['default'], _extends({}, this.props, { openTransitionName: openAnimation }));
    }
  }
});

AntMenu.Divider = _rcMenu2['default'].Divider;
AntMenu.Item = _rcMenu2['default'].Item;
AntMenu.SubMenu = _rcMenu2['default'].SubMenu;

exports['default'] = AntMenu;
module.exports = exports['default'];