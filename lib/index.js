'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../style/index.less');

// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
if (typeof window !== 'undefined') {
  var matchMediaPolyfill = function matchMediaPolyfill() {
    return {
      matches: false,
      addListener: function addListener() {},
      removeListener: function removeListener() {}
    };
  };
  window.matchMedia = window.matchMedia || matchMediaPolyfill;
}

var antd = {
  Affix: require('./affix'),
  Datepicker: require('./datepicker'),
  Tooltip: require('./tooltip'),
  Carousel: require('./carousel'),
  Tabs: require('./tabs'),
  Modal: require('./modal'),
  Dropdown: require('./dropdown'),
  Progress: require('./progress'),
  Popover: require('./popover'),
  Select: require('./select'),
  Breadcrumb: require('./breadcrumb'),
  Popconfirm: require('./popconfirm'),
  Pagination: require('./pagination'),
  Steps: require('./steps'),
  InputNumber: require('./input-number'),
  Switch: require('./switch'),
  Checkbox: require('./checkbox'),
  Table: require('./table'),
  Tag: require('./tag'),
  Collapse: require('./collapse'),
  message: require('./message'),
  Slider: require('./slider'),
  QueueAnim: require('./queue-anim'),
  Radio: require('./radio'),
  notification: require('./notification'),
  Alert: require('./alert'),
  Validation: require('./validation'),
  Tree: require('./tree'),
  Upload: require('./upload'),
  Badge: require('./badge'),
  Menu: require('./menu'),
  Timeline: require('./timeline'),
  Button: require('./button'),
  ButtonGroup: require('./button').Group,
  Icon: require('./iconfont'),
  Row: require('./layout').Row,
  Col: require('./layout').Col,
  Spin: require('./spin'),
  Form: require('./form').Form,
  Input: require('./form').Input
};

antd.version = require('./package').version;

if (process.env.NODE_ENV !== 'production') {
  var warning = require('warning');
  var semver = require('semver');
  var reactVersionInDeps = require('./package').devDependencies.react;
  warning(semver.satisfies(_react2['default'].version, reactVersionInDeps) || semver.gtr(_react2['default'].version, reactVersionInDeps), 'antd@' + antd.version + ' need react@' + reactVersionInDeps + ' or higher, which is react@' + _react2['default'].version + ' now.');
}

module.exports = antd;