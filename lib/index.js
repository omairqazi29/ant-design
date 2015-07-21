require('./index.css');

var antd = {
  Datepicker: require('./datepicker'),
  Tooltip: require('./tooltip'),
  Tabs: require('./tabs'),
  Modal: require('./modal'),
  Menu: require('rc-menu'),
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
  Collapse: require('./collapse'),
  message: require('./message'),
  Slider: require('./slider'),
  Radio: require('./radio'),
  RadioGroup: require('./radio/group')
};

module.exports = antd;

antd.version = '0.7.1';

if (typeof window !== undefined) {
  window.antd = antd;
}
