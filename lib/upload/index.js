'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcUpload = require('rc-upload');

var _rcUpload2 = _interopRequireDefault(_rcUpload);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _message = require('../message');

var _message2 = _interopRequireDefault(_message);

var _uploadList = require('./uploadList');

var _uploadList2 = _interopRequireDefault(_uploadList);

var _getFileItem = require('./getFileItem');

var _getFileItem2 = _interopRequireDefault(_getFileItem);

var prefixCls = 'ant-upload';
var fileIndex = 0;

function noop() {}

var AntUpload = _react2['default'].createClass({
  displayName: 'AntUpload',

  getInitialState: function getInitialState() {
    return {
      downloadList: []
    };
  },
  onStart: function onStart(file) {
    var nextDownloadList = this.state.downloadList;
    nextDownloadList.push({
      index: fileIndex++,
      uid: file.uid || '',
      filename: file.name,
      file: file,
      status: 'downloading'
    });
    this.setState({
      downloadList: nextDownloadList
    });
    this.props.onStart(file);
  },
  removeFile: function removeFile(file) {
    var downloadList = this.state.downloadList.concat();
    var targetItem = (0, _getFileItem2['default'])(file, downloadList);
    var index = downloadList.indexOf(targetItem);
    if (index !== -1) {
      downloadList.splice(index, 1);
    }
    this.setState({
      downloadList: downloadList
    });
  },
  onSuccess: function onSuccess(ret, file) {
    var res = this.props.onSuccess(ret, file);
    if (res !== false) {
      var downloadList = this.state.downloadList.concat();
      _message2['default'].success(file.name + '上传完成');
      var targetItem = (0, _getFileItem2['default'])(file, downloadList);
      targetItem.status = 'done';
      this.setState({
        downloadList: downloadList
      });
    } else {
      this.removeFile(file);
    }
  },
  onProgress: function onProgress(e, file) {
    this.props.onProgress(e, file);
  },
  onError: function onError(err, responce, file) {
    _message2['default'].error(file.name + ' 上传失败');
    this.removeFile(file);
    this.props.onError(err, responce, file);
  },
  onRemove: function onRemove(file) {
    this.props.onRemove(file);
  },
  getDefaultProps: function getDefaultProps() {
    return {
      type: 'select',
      name: '',
      multipart: false,
      action: '',
      data: {},
      accept: '',
      uploadTip: '',
      onStart: noop,
      onError: noop,
      onSuccess: noop,
      onProgress: noop,
      onRemove: noop
    };
  },
  render: function render() {
    var type = this.props.type || 'select';
    var props = (0, _objectAssign2['default'])({}, this.props, {
      onStart: this.onStart,
      onError: this.onError,
      onProgress: this.onProgress,
      onSuccess: this.onSuccess
    });
    if (type === 'drag') {
      return _react2['default'].createElement(
        'div',
        { className: prefixCls + ' ' + prefixCls + '-drag' },
        _react2['default'].createElement(
          _rcUpload2['default'],
          props,
          _react2['default'].createElement(
            'div',
            { className: prefixCls + '-drag-container' },
            this.props.children
          )
        )
      );
    } else if (type === 'select') {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: prefixCls + ' ' + prefixCls + '-select' },
          _react2['default'].createElement(
            _rcUpload2['default'],
            props,
            this.props.children
          )
        ),
        _react2['default'].createElement(_uploadList2['default'], { items: this.state.downloadList, onRemove: this.onRemove })
      );
    }
  }
});

AntUpload.Dragger = _react2['default'].createClass({
  displayName: 'Dragger',

  render: function render() {
    return _react2['default'].createElement(AntUpload, _extends({}, this.props, { type: 'drag', style: { height: this.props.height } }));
  }
});

exports['default'] = AntUpload;
module.exports = exports['default'];