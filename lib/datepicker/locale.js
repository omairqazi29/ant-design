'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _gregorianCalendarLibLocaleZh_CNJs = require('gregorian-calendar/lib/locale/zh_CN.js');

var _gregorianCalendarLibLocaleZh_CNJs2 = _interopRequireDefault(_gregorianCalendarLibLocaleZh_CNJs);

var _rcCalendarLibLocaleZh_CNJs = require('rc-calendar/lib/locale/zh_CN.js');

var _rcCalendarLibLocaleZh_CNJs2 = _interopRequireDefault(_rcCalendarLibLocaleZh_CNJs);

var _gregorianCalendarFormatLibLocaleZh_CN = require('gregorian-calendar-format/lib/locale/zh_CN');

var _gregorianCalendarFormatLibLocaleZh_CN2 = _interopRequireDefault(_gregorianCalendarFormatLibLocaleZh_CN);

// 统一合并为完整的 Locale
var locale = (0, _objectAssign2['default'])({}, _gregorianCalendarLibLocaleZh_CNJs2['default']);
locale.lang = (0, _objectAssign2['default'])({}, _rcCalendarLibLocaleZh_CNJs2['default'], _gregorianCalendarFormatLibLocaleZh_CN2['default']);

// All settings at:
// https://github.com/ant-design/ant-design/issues/424

exports['default'] = locale;
module.exports = exports['default'];