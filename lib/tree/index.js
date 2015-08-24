'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTree = require('rc-tree');

var _rcTree2 = _interopRequireDefault(_rcTree);

var _velocityAnimate = require('velocity-animate');

var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);

var animation = {
  enter: function enter(node, done) {
    var ok = false;

    function complete() {
      if (!ok) {
        ok = 1;
        done();
      }
    }

    node.style.display = 'none';
    (0, _velocityAnimate2['default'])(node, 'slideDown', {
      duration: 150,
      complete: complete
    });
    return {
      stop: function stop() {
        (0, _velocityAnimate2['default'])(node, 'finish');
        // velocity complete is async
        complete();
      }
    };
  },

  leave: function leave(node, done) {
    var ok = false;

    node.style.display = 'block';

    function complete() {
      if (!ok) {
        ok = 1;
        done();
      }
    }

    (0, _velocityAnimate2['default'])(node, 'slideUp', {
      duration: 150,
      complete: complete
    });
    return {
      stop: function stop() {
        (0, _velocityAnimate2['default'])(node, 'finish');
        // velocity complete is async
        complete();
      }
    };
  }
};

var AntTree = _react2['default'].createClass({
  displayName: 'AntTree',

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-tree',
      checkable: false,
      showIcon: false
    };
  },
  render: function render() {
    var props = this.props;
    var checkable = props.checkable;
    if (checkable) {
      checkable = _react2['default'].createElement('span', { className: props.prefixCls + '-checkbox-inner' });
    }
    return _react2['default'].createElement(
      _rcTree2['default'],
      _extends({ openAnimation: animation }, props, { checkable: checkable }),
      this.props.children
    );
  }
});

AntTree.TreeNode = _rcTree2['default'].TreeNode;
exports['default'] = AntTree;
module.exports = exports['default'];