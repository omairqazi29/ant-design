'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var prefixCls = 'ant-breadcrumb';

var BreadcrumbItem = _react2['default'].createClass({
  displayName: 'BreadcrumbItem',

  render: function render() {
    var link = _react2['default'].createElement(
      'a',
      _extends({ className: prefixCls + '-link' }, this.props),
      this.props.children
    );
    var slash = _react2['default'].createElement(
      'span',
      { className: prefixCls + '-slash' },
      '/'
    );
    if (typeof this.props.href === 'undefined') {
      link = _react2['default'].createElement(
        'span',
        _extends({ className: prefixCls + '-link' }, this.props),
        this.props.children
      );
    }
    return _react2['default'].createElement(
      'span',
      null,
      link,
      slash
    );
  }
});

var Breadcrumb = _react2['default'].createClass({
  displayName: 'Breadcrumb',

  contextTypes: {
    router: _react2['default'].PropTypes.func
  },
  render: function render() {
    var crumbs, routes, params;
    if (this.context.router && this.props.Router) {
      var Link = this.props.Router.Link;
      routes = this.context.router.getCurrentRoutes();
      params = this.context.router.getCurrentParams();
      crumbs = routes.map(function (route, i) {
        var name = route.name.replace(/\:(.*)/g, function (replacement, key) {
          return params[key] || replacement;
        });
        var link;
        if (i === routes.length - 1) {
          link = _react2['default'].createElement(
            'span',
            null,
            name
          );
        } else {
          link = _react2['default'].createElement(
            Link,
            { to: route.path, params: params },
            name
          );
        }
        return _react2['default'].createElement(
          BreadcrumbItem,
          { key: name },
          link
        );
      });
    } else {
      crumbs = this.props.children;
    }
    return _react2['default'].createElement(
      'div',
      { className: prefixCls },
      crumbs
    );
  }
});

Breadcrumb.Item = BreadcrumbItem;
exports['default'] = Breadcrumb;
module.exports = exports['default'];