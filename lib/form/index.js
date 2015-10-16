'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _FormItem = require('./FormItem');

var _FormItem2 = _interopRequireDefault(_FormItem);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

_Form2['default'].Item = _FormItem2['default'];
_Form2['default'].Input = _Input2['default'];
exports['default'] = _Form2['default'];
module.exports = exports['default'];