require('./index.css');

// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};

const antd = {
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
  confirm: require('./modal/confirm'),
  Steps: require('./steps'),
  InputNumber: require('./input-number'),
  Switch: require('./switch'),
  Checkbox: require('./checkbox'),
  Table: require('./table'),
  Tag: require('./tag'),
  Collapse: require('./collapse'),
  message: require('./message'),
  Slider: require('./slider'),
  EnterAnimation: require('./enter-animation'),
  Radio: require('./radio'),
  RadioGroup: require('./radio/group'),
  Notification: require('./notification'),
  Alert: require('./alert'),
  Validation: require('./validation'),
  Tree: require('./tree'),
  Upload: require('./upload'),
  Menu: require('./menu')
};

module.exports = antd;

antd.version = '0.8.0-beta5';
