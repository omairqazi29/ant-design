'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rcTabs = require('rc-tabs');

var _rcTabs2 = _interopRequireDefault(_rcTabs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var prefixCls = 'ant-tabs';

var AntTabs = (function (_React$Component) {
  _inherits(AntTabs, _React$Component);

  function AntTabs() {
    _classCallCheck(this, AntTabs);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AntTabs).apply(this, arguments));
  }

  _createClass(AntTabs, [{
    key: 'render',
    value: function render() {
      var className = this.props.className || '';
      if (this.props.size === 'small' || this.props.size === 'mini') {
        className += ' ' + prefixCls + '-mini';
      }
      if (this.props.tabPosition === 'left' || this.props.tabPosition === 'right') {
        className += ' ' + prefixCls + '-vertical';
      }
      return _react2.default.createElement(_rcTabs2.default, _extends({}, this.props, { className: className }));
    }
  }]);

  return AntTabs;
})(_react2.default.Component);

AntTabs.defaultProps = {
  prefixCls: prefixCls,
  size: 'default'
};

AntTabs.TabPane = _rcTabs2.default.TabPane;

exports.default = AntTabs;
module.exports = exports['default'];