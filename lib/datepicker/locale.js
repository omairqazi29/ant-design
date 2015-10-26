'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _gregorianCalendarLibLocaleZhCn = require('gregorian-calendar/lib/locale/zh-cn');

var _gregorianCalendarLibLocaleZhCn2 = _interopRequireDefault(_gregorianCalendarLibLocaleZhCn);

var _rcCalendarLibLocaleZhCn = require('rc-calendar/lib/locale/zh-cn');

var _rcCalendarLibLocaleZhCn2 = _interopRequireDefault(_rcCalendarLibLocaleZhCn);

var _gregorianCalendarFormatLibLocaleZhCn = require('gregorian-calendar-format/lib/locale/zh-cn');

var _gregorianCalendarFormatLibLocaleZhCn2 = _interopRequireDefault(_gregorianCalendarFormatLibLocaleZhCn);

// 统一合并为完整的 Locale
var locale = (0, _objectAssign2['default'])({}, _gregorianCalendarLibLocaleZhCn2['default']);
locale.lang = (0, _objectAssign2['default'])({}, _rcCalendarLibLocaleZhCn2['default'], _gregorianCalendarFormatLibLocaleZhCn2['default']);

// All settings at:
// https://github.com/ant-design/ant-design/issues/424

exports['default'] = locale;
module.exports = exports['default'];