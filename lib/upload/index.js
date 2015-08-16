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

var prefixCls = 'ant-upload';

var AntUpload = _react2['default'].createClass({
  displayName: 'AntUpload',

  getInitialState: function getInitialState() {
    return {
      downloadList: []
    };
  },
  handleStart: function handleStart(file) {
    var i = this.state.downloadList.length;
    var nextDownloadList = this.state.downloadList;
    nextDownloadList.push({
      id: i,
      uid: file.uid || '',
      filename: file.name,
      status: 'downloading'
    });
    this.setState({
      downloadList: nextDownloadList
    });
  },
  handleSuccess: function handleSuccess(ret, file) {
    var matchWay = file.uid === '' ? 'byName' : 'byUid';
    _message2['default'].success(file.name + '上传完成');
    for (var i = 0; i < this.state.downloadList.length; i++) {
      if (matchWay === 'byName') {
        if (this.state.downloadList[i].filename === file.name) {
          this.state.downloadList[i].status = 'done';
        }
      } else {
        if (this.state.downloadList[i].uid === file.uid) {
          this.state.downloadList[i].status = 'done';
        }
      }
    }
    this.setState({
      downloadList: this.state.downloadList
    });
  },
  handleProgress: function handleProgress() {},
  handleError: function handleError() {
    _message2['default'].error('上传失败');
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
      start: function start() {},
      error: function error() {},
      success: function success() {},
      progress: function progress() {}
    };
  },
  render: function render() {
    var _this = this;

    var type = this.props.type || 'select';
    var props = (0, _objectAssign2['default'])({}, this.props);

    props.onStart = function (file) {
      _this.handleStart(file);
      props.start.call(_this, file);
    };
    props.onSuccess = function (ret, file) {
      _this.handleSuccess(ret, file);
      props.success.call(_this, ret, file);
    };
    props.onProgress = function (step) {
      _this.handleProgress(step);
      props.progress.call(_this, step);
    };
    props.onError = function (err, responce, file) {
      _this.handleError(err);
      props.error.call(_this, err, responce, file);
    };
    if (type === 'drag') {
      return _react2['default'].createElement(
        _rcUpload2['default'],
        props,
        _react2['default'].createElement(
          'div',
          { className: prefixCls + ' ' + prefixCls + '-drag' },
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
        { className: prefixCls + ' ' + prefixCls + '-select' },
        _react2['default'].createElement(
          _rcUpload2['default'],
          props,
          _react2['default'].createElement(
            'button',
            { className: 'ant-btn ant-btn-ghost' },
            _react2['default'].createElement('i', { className: 'anticon anticon-upload' }),
            ' 点击上传'
          )
        ),
        _react2['default'].createElement(_uploadList2['default'], { items: this.state.downloadList })
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