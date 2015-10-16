'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcUtil = require('rc-util');

var _rcUtil2 = _interopRequireDefault(_rcUtil);

var cx = _rcUtil2['default'].classSet;

function prefixClsFn(prefixCls) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return args.map(function (s) {
    return prefixCls + '-' + s;
  }).join(' ');
}

var FormItem = (function (_React$Component) {
  _inherits(FormItem, _React$Component);

  function FormItem() {
    _classCallCheck(this, FormItem);

    _get(Object.getPrototypeOf(FormItem.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(FormItem, [{
    key: 'renderHelp',
    value: function renderHelp() {
      var prefixCls = this.props.prefixCls;
      return this.props.help ? _react2['default'].createElement(
        'div',
        { className: prefixClsFn(prefixCls, 'explain'), key: 'help' },
        this.props.help
      ) : null;
    }
  }, {
    key: 'renderValidateWrapper',
    value: function renderValidateWrapper(children) {
      if (this.props.validateStatus) {
        var classes = cx({
          'has-feedback': this.props.hasFeedback,
          'has-success': this.props.validateStatus === 'success',
          'has-warning': this.props.validateStatus === 'warning',
          'has-error': this.props.validateStatus === 'error',
          'is-validating': this.props.validateStatus === 'validating'
        });
        return _react2['default'].createElement(
          'div',
          { className: classes },
          children
        );
      }
      return children;
    }
  }, {
    key: 'renderWrapper',
    value: function renderWrapper(children) {
      return this.props.wrapperClassName ? _react2['default'].createElement(
        'div',
        { className: this.props.wrapperClassName, key: 'wrapper' },
        children
      ) : children;
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel() {
      var labelClassName = this.props.labelClassName;
      var required = this.props.required ? 'required' : '';

      return this.props.label ? _react2['default'].createElement(
        'label',
        { htmlFor: this.props.id, className: labelClassName, required: required, key: 'label' },
        this.props.label
      ) : '';
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      return [this.renderLabel(), this.renderWrapper(this.renderValidateWrapper([this.props.children, this.renderHelp()]))];
    }
  }, {
    key: 'renderFormItem',
    value: function renderFormItem(children) {
      var _itemClassName;

      var prefixCls = this.props.prefixCls;
      var itemClassName = (_itemClassName = {}, _defineProperty(_itemClassName, prefixCls + '-item', true), _defineProperty(_itemClassName, prefixCls + '-item-compact', this.props.isCompact), _itemClassName);

      return _react2['default'].createElement(
        'div',
        { className: cx(itemClassName), key: 'form-item' },
        children
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.renderChildren();
      return this.renderFormItem(children);
    }
  }]);

  return FormItem;
})(_react2['default'].Component);

FormItem.propTypes = {
  prefixCls: _react2['default'].PropTypes.string,
  label: _react2['default'].PropTypes.node,
  labelClassName: _react2['default'].PropTypes.string,
  help: _react2['default'].PropTypes.node,
  validateStatus: _react2['default'].PropTypes.oneOf(['success', 'warning', 'error', 'validating']),
  hasFeedback: _react2['default'].PropTypes.bool,
  wrapperClassName: _react2['default'].PropTypes.string,
  isCompact: _react2['default'].PropTypes.bool,
  className: _react2['default'].PropTypes.string,
  children: _react2['default'].PropTypes.any
};

FormItem.defaultProps = {
  hasFeedback: false,
  isCompact: false,
  required: false,
  prefixCls: 'ant-form'
};

module.exports = FormItem;