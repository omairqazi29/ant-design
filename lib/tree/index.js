'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTree = require('rc-tree');

var _rcTree2 = _interopRequireDefault(_rcTree);

var AntTree = _react2['default'].createClass({
  displayName: 'AntTree',

  render: function render() {
    return _react2['default'].createElement(
      _rcTree2['default'],
      this.props,
      this.props.children
    );
  }
});

AntTree.TreeNode = _rcTree2['default'].TreeNode;
exports['default'] = AntTree;
module.exports = exports['default'];