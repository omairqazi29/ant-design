webpackJsonp([6,204],{

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _rcNotification = __webpack_require__(158);

	var _rcNotification2 = _interopRequireDefault(_rcNotification);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultDuration = 1.5;
	var defaultTop = void 0;
	var messageInstance = void 0;
	var key = 1;
	var prefixCls = 'ant-message';
	function getMessageInstance() {
	    messageInstance = messageInstance || _rcNotification2.default.newInstance({
	        prefixCls: prefixCls,
	        transitionName: 'move-up',
	        style: { top: defaultTop }
	    });
	    return messageInstance;
	}
	function notice(content) {
	    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDuration;
	    var type = arguments[2];
	    var onClose = arguments[3];

	    var iconType = {
	        info: 'info-circle',
	        success: 'check-circle',
	        error: 'cross-circle',
	        warning: 'exclamation-circle',
	        loading: 'loading'
	    }[type];
	    var instance = getMessageInstance();
	    instance.notice({
	        key: key,
	        duration: duration,
	        style: {},
	        content: _react2.default.createElement(
	            'div',
	            { className: prefixCls + '-custom-content ' + prefixCls + '-' + type },
	            _react2.default.createElement(_icon2.default, { type: iconType }),
	            _react2.default.createElement(
	                'span',
	                null,
	                content
	            )
	        ),
	        onClose: onClose
	    });
	    return function () {
	        var target = key++;
	        return function () {
	            instance.removeNotice(target);
	        };
	    }();
	}
	exports.default = {
	    info: function info(content, duration, onClose) {
	        return notice(content, duration, 'info', onClose);
	    },
	    success: function success(content, duration, onClose) {
	        return notice(content, duration, 'success', onClose);
	    },
	    error: function error(content, duration, onClose) {
	        return notice(content, duration, 'error', onClose);
	    },

	    // Departed usage, please use warning()
	    warn: function warn(content, duration, onClose) {
	        return notice(content, duration, 'warning', onClose);
	    },
	    warning: function warning(content, duration, onClose) {
	        return notice(content, duration, 'warning', onClose);
	    },
	    loading: function loading(content, duration, onClose) {
	        return notice(content, duration, 'loading', onClose);
	    },
	    config: function config(options) {
	        if (options.top !== undefined) {
	            defaultTop = options.top;
	        }
	        if (options.duration !== undefined) {
	            defaultDuration = options.duration;
	        }
	        if (options.prefixCls !== undefined) {
	            prefixCls = options.prefixCls;
	        }
	    },
	    destroy: function destroy() {
	        if (messageInstance) {
	            messageInstance.destroy();
	            messageInstance = null;
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(130);

/***/ },

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _progress = __webpack_require__(288);

	var _progress2 = _interopRequireDefault(_progress);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _progress2.default;
	module.exports = exports['default'];

/***/ },

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(253);

/***/ },

/***/ 130:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = exports.UploadProps = undefined;

	var _defineProperty2 = __webpack_require__(8);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	exports.Dragger = Dragger;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _rcUpload = __webpack_require__(418);

	var _rcUpload2 = _interopRequireDefault(_rcUpload);

	var _uploadList = __webpack_require__(494);

	var _uploadList2 = _interopRequireDefault(_uploadList);

	var _getFileItem = __webpack_require__(492);

	var _getFileItem2 = _interopRequireDefault(_getFileItem);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _objectAssign = __webpack_require__(9);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _interface = __webpack_require__(493);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function T() {
	    return true;
	}
	// Fix IE file.status problem
	// via coping a new Object
	function fileToObject(file) {
	    return {
	        lastModified: file.lastModified,
	        lastModifiedDate: file.lastModifiedDate,
	        name: file.filename || file.name,
	        size: file.size,
	        type: file.type,
	        uid: file.uid,
	        response: file.response,
	        error: file.error,
	        percent: 0,
	        originFileObj: file,
	        status: null
	    };
	}
	/**
	 * 生成Progress percent: 0.1 -> 0.98
	 *   - for ie
	 */
	function genPercentAdd() {
	    var k = 0.1;
	    var i = 0.01;
	    var end = 0.98;
	    return function (s) {
	        var start = s;
	        if (start >= end) {
	            return start;
	        }
	        start += k;
	        k = k - i;
	        if (k < 0.001) {
	            k = 0.001;
	        }
	        return start * 100;
	    };
	}
	exports.UploadProps = _interface.UploadProps;
	function Dragger(props) {
	    return _react2.default.createElement(Upload, (0, _extends3.default)({}, props, { type: 'drag', style: { height: props.height } }));
	}

	var Upload = function (_React$Component) {
	    (0, _inherits3.default)(Upload, _React$Component);

	    function Upload(props) {
	        (0, _classCallCheck3.default)(this, Upload);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

	        _this.onStart = function (file) {
	            var targetItem = void 0;
	            var nextFileList = _this.state.fileList.concat();
	            if (file.length > 0) {
	                targetItem = file.map(function (f) {
	                    var fileObject = fileToObject(f);
	                    fileObject.status = 'uploading';
	                    return fileObject;
	                });
	                nextFileList = nextFileList.concat(targetItem);
	            } else {
	                targetItem = fileToObject(file);
	                targetItem.status = 'uploading';
	                nextFileList.push(targetItem);
	            }
	            _this.onChange({
	                file: targetItem,
	                fileList: nextFileList
	            });
	            // fix ie progress
	            if (!window.FormData) {
	                _this.autoUpdateProgress(0, targetItem);
	            }
	        };
	        _this.onSuccess = function (response, file) {
	            _this.clearProgressTimer();
	            try {
	                if (typeof response === 'string') {
	                    response = JSON.parse(response);
	                }
	            } catch (e) {}
	            var fileList = _this.state.fileList;
	            var targetItem = (0, _getFileItem2.default)(file, fileList);
	            // removed
	            if (!targetItem) {
	                return;
	            }
	            targetItem.status = 'done';
	            targetItem.response = response;
	            _this.onChange({
	                file: targetItem,
	                fileList: fileList
	            });
	        };
	        _this.onProgress = function (e, file) {
	            var fileList = _this.state.fileList;
	            var targetItem = (0, _getFileItem2.default)(file, fileList);
	            // removed
	            if (!targetItem) {
	                return;
	            }
	            targetItem.percent = e.percent;
	            _this.onChange({
	                event: e,
	                file: targetItem,
	                fileList: _this.state.fileList
	            });
	        };
	        _this.onError = function (error, response, file) {
	            _this.clearProgressTimer();
	            var fileList = _this.state.fileList;
	            var targetItem = (0, _getFileItem2.default)(file, fileList);
	            // removed
	            if (!targetItem) {
	                return;
	            }
	            targetItem.error = error;
	            targetItem.response = response;
	            targetItem.status = 'error';
	            _this.handleRemove(targetItem);
	        };
	        _this.handleManualRemove = function (file) {
	            _this.refs.upload.abort(file);
	            file.status = 'removed'; // eslint-disable-line
	            _this.handleRemove(file);
	        };
	        _this.onChange = function (info) {
	            if (!('fileList' in _this.props)) {
	                _this.setState({ fileList: info.fileList });
	            }
	            var onChange = _this.props.onChange;
	            if (onChange) {
	                onChange(info);
	            }
	        };
	        _this.onFileDrop = function (e) {
	            _this.setState({
	                dragState: e.type
	            });
	        };
	        _this.state = {
	            fileList: _this.props.fileList || _this.props.defaultFileList || [],
	            dragState: 'drop'
	        };
	        return _this;
	    }

	    Upload.prototype.autoUpdateProgress = function autoUpdateProgress(_, file) {
	        var _this2 = this;

	        var getPercent = genPercentAdd();
	        var curPercent = 0;
	        this.progressTimer = setInterval(function () {
	            curPercent = getPercent(curPercent);
	            _this2.onProgress({
	                percent: curPercent
	            }, file);
	        }, 200);
	    };

	    Upload.prototype.removeFile = function removeFile(file) {
	        var fileList = this.state.fileList;
	        var targetItem = (0, _getFileItem2.default)(file, fileList);
	        var index = fileList.indexOf(targetItem);
	        if (index !== -1) {
	            fileList.splice(index, 1);
	            return fileList;
	        }
	        return null;
	    };

	    Upload.prototype.handleRemove = function handleRemove(file) {
	        var onRemove = this.props.onRemove;
	        if (onRemove) {
	            onRemove(file);
	        }
	        var fileList = this.removeFile(file);
	        if (fileList) {
	            this.onChange({
	                file: file,
	                fileList: fileList
	            });
	        }
	    };

	    Upload.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if ('fileList' in nextProps) {
	            this.setState({
	                fileList: nextProps.fileList || []
	            });
	        }
	    };

	    Upload.prototype.clearProgressTimer = function clearProgressTimer() {
	        clearInterval(this.progressTimer);
	    };

	    Upload.prototype.render = function render() {
	        var _classNames2;

	        var _props = this.props,
	            _props$prefixCls = _props.prefixCls,
	            prefixCls = _props$prefixCls === undefined ? '' : _props$prefixCls,
	            showUploadList = _props.showUploadList,
	            listType = _props.listType,
	            onPreview = _props.onPreview,
	            type = _props.type,
	            disabled = _props.disabled,
	            children = _props.children,
	            className = _props.className;

	        var rcUploadProps = (0, _objectAssign2.default)({}, this.props, {
	            onStart: this.onStart,
	            onError: this.onError,
	            onProgress: this.onProgress,
	            onSuccess: this.onSuccess
	        });
	        delete rcUploadProps.className;
	        var uploadList = showUploadList ? _react2.default.createElement(_uploadList2.default, { listType: listType, items: this.state.fileList, onPreview: onPreview, onRemove: this.handleManualRemove }) : null;
	        if (type === 'drag') {
	            var _classNames;

	            var dragCls = (0, _classnames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-drag', true), (0, _defineProperty3.default)(_classNames, prefixCls + '-drag-uploading', this.state.fileList.some(function (file) {
	                return file.status === 'uploading';
	            })), (0, _defineProperty3.default)(_classNames, prefixCls + '-drag-hover', this.state.dragState === 'dragover'), (0, _defineProperty3.default)(_classNames, prefixCls + '-disabled', disabled), _classNames));
	            return _react2.default.createElement(
	                'span',
	                { className: className },
	                _react2.default.createElement(
	                    'div',
	                    { className: dragCls, onDrop: this.onFileDrop, onDragOver: this.onFileDrop, onDragLeave: this.onFileDrop },
	                    _react2.default.createElement(
	                        _rcUpload2.default,
	                        (0, _extends3.default)({}, rcUploadProps, { ref: 'upload', className: prefixCls + '-btn' }),
	                        _react2.default.createElement(
	                            'div',
	                            { className: prefixCls + '-drag-container' },
	                            children
	                        )
	                    )
	                ),
	                uploadList
	            );
	        }
	        var uploadButtonCls = (0, _classnames2.default)(prefixCls, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, prefixCls + '-select', true), (0, _defineProperty3.default)(_classNames2, prefixCls + '-select-' + listType, true), (0, _defineProperty3.default)(_classNames2, prefixCls + '-disabled', disabled), _classNames2));
	        var uploadButton = _react2.default.createElement(
	            'div',
	            { className: uploadButtonCls, style: { display: children ? '' : 'none' } },
	            _react2.default.createElement(_rcUpload2.default, (0, _extends3.default)({}, rcUploadProps, { ref: 'upload' }))
	        );
	        if (listType === 'picture-card') {
	            return _react2.default.createElement(
	                'span',
	                { className: className },
	                uploadList,
	                uploadButton
	            );
	        }
	        return _react2.default.createElement(
	            'span',
	            { className: className },
	            uploadButton,
	            uploadList
	        );
	    };

	    return Upload;
	}(_react2.default.Component);

	exports.default = Upload;

	Upload.Dragger = Dragger;
	Upload.defaultProps = {
	    prefixCls: 'ant-upload',
	    type: 'select',
	    multiple: false,
	    action: '',
	    data: {},
	    accept: '',
	    beforeUpload: T,
	    showUploadList: true,
	    listType: 'text',
	    className: '',
	    disabled: false,
	    supportServerRender: true
	};

/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(395);

	__webpack_require__(115);

/***/ },

/***/ 253:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(8);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _slicedToArray2 = __webpack_require__(15);

	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _rcProgress = __webpack_require__(330);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _splitObject3 = __webpack_require__(18);

	var _splitObject4 = _interopRequireDefault(_splitObject3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var statusColorMap = {
	    normal: '#108ee9',
	    exception: '#ff5500',
	    success: '#87d068'
	};

	var Progress = function (_React$Component) {
	    (0, _inherits3.default)(Progress, _React$Component);

	    function Progress() {
	        (0, _classCallCheck3.default)(this, Progress);
	        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	    }

	    Progress.prototype.render = function render() {
	        var _classNames;

	        var _splitObject = (0, _splitObject4.default)(this.props, ['prefixCls', 'status', 'format', 'percent', 'trailColor', 'type', 'strokeWidth', 'width', 'className', 'showInfo']),
	            _splitObject2 = (0, _slicedToArray3.default)(_splitObject, 2),
	            _splitObject2$ = _splitObject2[0],
	            prefixCls = _splitObject2$.prefixCls,
	            status = _splitObject2$.status,
	            format = _splitObject2$.format,
	            percent = _splitObject2$.percent,
	            trailColor = _splitObject2$.trailColor,
	            type = _splitObject2$.type,
	            strokeWidth = _splitObject2$.strokeWidth,
	            width = _splitObject2$.width,
	            className = _splitObject2$.className,
	            showInfo = _splitObject2$.showInfo,
	            restProps = _splitObject2[1];

	        var progressStatus = parseInt(percent, 10) >= 100 && !('status' in this.props) ? 'success' : status || 'normal';
	        var progressInfo = void 0;
	        var progress = void 0;
	        var textFormatter = format || function (percentNumber) {
	            return percentNumber + '%';
	        };
	        if (showInfo) {
	            var text = void 0;
	            var iconType = type === 'circle' ? '' : '-circle';
	            if (progressStatus === 'exception') {
	                text = format ? textFormatter(percent) : _react2.default.createElement(_icon2.default, { type: 'cross' + iconType });
	            } else if (progressStatus === 'success') {
	                text = format ? textFormatter(percent) : _react2.default.createElement(_icon2.default, { type: 'check' + iconType });
	            } else {
	                text = textFormatter(percent);
	            }
	            progressInfo = _react2.default.createElement(
	                'span',
	                { className: prefixCls + '-text' },
	                text
	            );
	        }
	        if (type === 'line') {
	            var percentStyle = {
	                width: percent + '%',
	                height: strokeWidth || 10
	            };
	            progress = _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: prefixCls + '-outer' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: prefixCls + '-inner' },
	                        _react2.default.createElement('div', { className: prefixCls + '-bg', style: percentStyle })
	                    )
	                ),
	                progressInfo
	            );
	        } else if (type === 'circle') {
	            var circleSize = width || 132;
	            var circleStyle = {
	                width: circleSize,
	                height: circleSize,
	                fontSize: circleSize * 0.16 + 6
	            };
	            var circleWidth = strokeWidth || 6;
	            progress = _react2.default.createElement(
	                'div',
	                { className: prefixCls + '-inner', style: circleStyle },
	                _react2.default.createElement(_rcProgress.Circle, { percent: percent, strokeWidth: circleWidth, trailWidth: circleWidth, strokeColor: statusColorMap[progressStatus], trailColor: trailColor }),
	                progressInfo
	            );
	        }
	        var classString = (0, _classnames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-' + type, true), (0, _defineProperty3.default)(_classNames, prefixCls + '-status-' + progressStatus, true), (0, _defineProperty3.default)(_classNames, prefixCls + '-show-info', showInfo), _classNames), className);
	        return _react2.default.createElement(
	            'div',
	            (0, _extends3.default)({}, restProps, { className: classString }),
	            progress
	        );
	    };

	    return Progress;
	}(_react2.default.Component);

	exports.default = Progress;

	Progress.defaultProps = {
	    type: 'line',
	    percent: 0,
	    showInfo: true,
	    trailColor: '#f3f3f3',
	    prefixCls: 'ant-progress'
	};
	Progress.propTypes = {
	    status: _react.PropTypes.oneOf(['normal', 'exception', 'active', 'success']),
	    type: _react.PropTypes.oneOf(['line', 'circle']),
	    showInfo: _react.PropTypes.bool,
	    percent: _react.PropTypes.number,
	    width: _react.PropTypes.number,
	    strokeWidth: _react.PropTypes.number,
	    trailColor: _react.PropTypes.string,
	    format: _react.PropTypes.func
	};
	module.exports = exports['default'];

/***/ },

/***/ 395:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 492:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = getFileItem;
	function getFileItem(file, fileList) {
	    var matchWay = !file.uid ? 'byName' : 'byUid';
	    var target = fileList.filter(function (item) {
	        if (matchWay === 'byName') {
	            return item.name === file.name;
	        }
	        return item.uid === file.uid;
	    })[0];
	    return target;
	}
	module.exports = exports['default'];

/***/ },

/***/ 493:
/***/ function(module, exports) {

	"use strict";

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _defineProperty2 = __webpack_require__(8);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _rcAnimate = __webpack_require__(29);

	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _progress = __webpack_require__(114);

	var _progress2 = _interopRequireDefault(_progress);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
	var previewFile = function previewFile(file, callback) {
	    var reader = new FileReader();
	    reader.onloadend = function () {
	        return callback(reader.result);
	    };
	    reader.readAsDataURL(file);
	};

	var UploadList = function (_React$Component) {
	    (0, _inherits3.default)(UploadList, _React$Component);

	    function UploadList() {
	        (0, _classCallCheck3.default)(this, UploadList);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));

	        _this.handleClose = function (file) {
	            var onRemove = _this.props.onRemove;
	            if (onRemove) {
	                onRemove(file);
	            }
	        };
	        _this.handlePreview = function (file, e) {
	            var onPreview = _this.props.onPreview;

	            if (!onPreview) {
	                return;
	            }
	            e.preventDefault();
	            return onPreview(file);
	        };
	        return _this;
	    }

	    UploadList.prototype.componentDidUpdate = function componentDidUpdate() {
	        var _this2 = this;

	        if (this.props.listType !== 'picture' && this.props.listType !== 'picture-card') {
	            return;
	        }
	        (this.props.items || []).forEach(function (file) {
	            if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File) || file.thumbUrl !== undefined) {
	                return;
	            }
	            /*eslint-disable */
	            file.thumbUrl = '';
	            /*eslint-enable */
	            previewFile(file.originFileObj, function (previewDataUrl) {
	                /*eslint-disable */
	                file.thumbUrl = previewDataUrl;
	                /*eslint-enable */
	                _this2.forceUpdate();
	            });
	        });
	    };

	    UploadList.prototype.render = function render() {
	        var _this3 = this,
	            _classNames2;

	        var _props = this.props,
	            prefixCls = _props.prefixCls,
	            _props$items = _props.items,
	            items = _props$items === undefined ? [] : _props$items,
	            listType = _props.listType;

	        var list = items.map(function (file) {
	            var _classNames;

	            var progress = void 0;
	            var icon = _react2.default.createElement(_icon2.default, { type: 'paper-clip' });
	            if (listType === 'picture' || listType === 'picture-card') {
	                if (file.status === 'uploading' || !file.thumbUrl && !file.url) {
	                    if (listType === 'picture-card') {
	                        icon = _react2.default.createElement(
	                            'div',
	                            { className: prefixCls + '-list-item-uploading-text' },
	                            '\u6587\u4EF6\u4E0A\u4F20\u4E2D'
	                        );
	                    } else {
	                        icon = _react2.default.createElement(_icon2.default, { className: prefixCls + '-list-item-thumbnail', type: 'picture' });
	                    }
	                } else {
	                    icon = _react2.default.createElement(
	                        'a',
	                        { className: prefixCls + '-list-item-thumbnail', onClick: function onClick(e) {
	                                return _this3.handlePreview(file, e);
	                            }, href: file.url || file.thumbUrl, target: '_blank', rel: 'noopener noreferrer' },
	                        _react2.default.createElement('img', { src: file.url || file.thumbUrl, alt: file.name })
	                    );
	                }
	            }
	            if (file.status === 'uploading') {
	                progress = _react2.default.createElement(
	                    'div',
	                    { className: prefixCls + '-list-item-progress' },
	                    _react2.default.createElement(_progress2.default, (0, _extends3.default)({ type: 'line' }, _this3.props.progressAttr, { percent: file.percent }))
	                );
	            }
	            var infoUploadingClass = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-list-item', true), (0, _defineProperty3.default)(_classNames, prefixCls + '-list-item-' + file.status, true), _classNames));
	            var preview = file.url ? _react2.default.createElement(
	                'a',
	                { href: file.url, target: '_blank', rel: 'noopener noreferrer', className: prefixCls + '-list-item-name', onClick: function onClick(e) {
	                        return _this3.handlePreview(file, e);
	                    } },
	                file.name
	            ) : _react2.default.createElement(
	                'span',
	                { className: prefixCls + '-list-item-name', onClick: function onClick(e) {
	                        return _this3.handlePreview(file, e);
	                    } },
	                file.name
	            );
	            var style = file.url || file.thumbUrl ? undefined : {
	                pointerEvents: 'none',
	                opacity: 0.5
	            };
	            var actions = listType === 'picture-card' && file.status !== 'uploading' ? _react2.default.createElement(
	                'span',
	                null,
	                _react2.default.createElement(
	                    'a',
	                    { href: file.url || file.thumbUrl, target: '_blank', rel: 'noopener noreferrer', style: style, onClick: function onClick(e) {
	                            return _this3.handlePreview(file, e);
	                        } },
	                    _react2.default.createElement(_icon2.default, { type: 'eye-o' })
	                ),
	                _react2.default.createElement(_icon2.default, { type: 'delete', title: 'Remove file', onClick: function onClick() {
	                        return _this3.handleClose(file);
	                    } })
	            ) : _react2.default.createElement(_icon2.default, { type: 'cross', title: 'Remove file', onClick: function onClick() {
	                    return _this3.handleClose(file);
	                } });
	            return _react2.default.createElement(
	                'div',
	                { className: infoUploadingClass, key: file.uid },
	                _react2.default.createElement(
	                    'div',
	                    { className: prefixCls + '-list-item-info' },
	                    icon,
	                    preview,
	                    actions
	                ),
	                progress
	            );
	        });
	        var listClassNames = (0, _classnames2.default)((_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, prefixCls + '-list', true), (0, _defineProperty3.default)(_classNames2, prefixCls + '-list-' + listType, true), _classNames2));
	        return _react2.default.createElement(
	            _rcAnimate2.default,
	            { transitionName: prefixCls + '-margin-top', component: 'div', className: listClassNames },
	            list
	        );
	    };

	    return UploadList;
	}(_react2.default.Component);

	exports.default = UploadList;

	UploadList.defaultProps = {
	    listType: 'text',
	    progressAttr: {
	        strokeWidth: 3,
	        showInfo: false
	    },
	    prefixCls: 'ant-upload'
	};
	module.exports = exports['default'];

/***/ },

/***/ 788:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'avatar': __webpack_require__(1799),
	    'basic': __webpack_require__(1800),
	    'defaultFileList': __webpack_require__(1801),
	    'drag': __webpack_require__(1802),
	    'fileList': __webpack_require__(1803),
	    'picture-card': __webpack_require__(1804),
	    'picture-style': __webpack_require__(1805),
	}

/***/ },

/***/ 1799:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(151);

	var _upload = __webpack_require__(150);

	var _upload2 = _interopRequireDefault(_upload);

	var _style5 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _style6 = __webpack_require__(69);

	var _message = __webpack_require__(68);

	var _message2 = _interopRequireDefault(_message);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "点击上传用户头像，并使用 ", ["code", "beforeUpload"], " 限制用户上传的图片格式和大小。"], ["blockquote", ["p", ["code", "beforeUpload"], " 的返回值可以是一个 Promise 以支持也支持异步检查：", ["a", {
	      "title": null,
	      "href": "http://react-component.github.io/upload/examples/beforeUpload.html"
	    }, "示例"], "。"]]],
	    "en-US": [["p", "Click to upload user's avatar, and validate size and format of picture with ", ["code", "beforeUpload"], "."], ["blockquote", ["p", "The return value of function ", ["code", "beforeUpload"], " can be a Promise to check asynchronously. ", ["a", {
	      "title": null,
	      "href": "http://react-component.github.io/upload/examples/beforeUpload.html"
	    }, "demo"]]]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "用户头像",
	      "en-US": "Avatar"
	    },
	    "filename": "components/upload/demo/avatar.md",
	    "id": "components-upload-demo-avatar"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> message <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">getBase64</span><span class=\"token punctuation\">(</span>img<span class=\"token punctuation\">,</span> callback<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> reader <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">FileReader</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  reader<span class=\"token punctuation\">.</span><span class=\"token function\">addEventListener</span><span class=\"token punctuation\">(</span><span class=\"token string\">'load'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>reader<span class=\"token punctuation\">.</span>result<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  reader<span class=\"token punctuation\">.</span><span class=\"token function\">readAsDataURL</span><span class=\"token punctuation\">(</span>img<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">beforeUpload</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> isJPG <span class=\"token operator\">=</span> file<span class=\"token punctuation\">.</span>type <span class=\"token operator\">===</span> <span class=\"token string\">'image/jpeg'</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>isJPG<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token string\">'You can only upload JPG file!'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">const</span> isLt2M <span class=\"token operator\">=</span> file<span class=\"token punctuation\">.</span>size <span class=\"token operator\">/</span> <span class=\"token number\">1024</span> <span class=\"token operator\">/</span> <span class=\"token number\">1024</span> <span class=\"token operator\">&lt;</span> <span class=\"token number\">2</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>isLt2M<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Image must smaller than 2MB!'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> isJPG <span class=\"token operator\">&amp;&amp;</span> isLt2M<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Avatar</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token comment\" spellcheck=\"true\">// Get this url from response in real world.</span>\n      <span class=\"token function\">getBase64</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>originFileObj<span class=\"token punctuation\">,</span> imageUrl <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> imageUrl <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> imageUrl <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>imageUrl<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Upload</span>\n        <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>avatar-uploader<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>avatar<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">showUploadList</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">action</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/upload.do<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">beforeUpload</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>beforeUpload<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>\n          imageUrl <span class=\"token operator\">?</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">src</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>imageUrl<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">role</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>presentation<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>avatar<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> <span class=\"token punctuation\">:</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>plus<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>avatar-uploader-trigger<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Avatar</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    function getBase64(img, callback) {
	      var reader = new FileReader();reader.addEventListener('load', function () {
	        return callback(reader.result);
	      });reader.readAsDataURL(img);
	    }function beforeUpload(file) {
	      var isJPG = file.type === 'image/jpeg';if (!isJPG) {
	        _message2.default.error('You can only upload JPG file!');
	      }var isLt2M = file.size / 1024 / 1024 < 2;if (!isLt2M) {
	        _message2.default.error('Image must smaller than 2MB!');
	      }return isJPG && isLt2M;
	    }
	    var Avatar = function (_React$Component) {
	      (0, _inherits3.default)(Avatar, _React$Component);

	      function Avatar() {
	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, Avatar);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _this.handleChange = function (info) {
	          if (info.file.status === 'done') {
	            // Get this url from response in real world.
	            getBase64(info.file.originFileObj, function (imageUrl) {
	              return _this.setState({ imageUrl: imageUrl });
	            });
	          }
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      }

	      Avatar.prototype.render = function render() {
	        var imageUrl = this.state.imageUrl;return _react2.default.createElement(
	          _upload2.default,
	          { className: 'avatar-uploader', name: 'avatar', showUploadList: false, action: '/upload.do', beforeUpload: beforeUpload, onChange: this.handleChange },
	          imageUrl ? _react2.default.createElement('img', { src: imageUrl, role: 'presentation', className: 'avatar' }) : _react2.default.createElement(_icon2.default, { type: 'plus', className: 'avatar-uploader-trigger' })
	        );
	      };

	      return Avatar;
	    }(_react2.default.Component);

	    return _react2.default.createElement(Avatar, null);
	  },
	  "style": ".avatar-uploader,\n.avatar-uploader-trigger,\n.avatar {\n  width: 150px;\n  height: 150px;\n}\n.avatar-uploader {\n  display: block;\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.avatar-uploader-trigger {\n  display: table-cell;\n  vertical-align: middle;\n  font-size: 28px;\n  color: #999;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.avatar-uploader</span>,\n<span class=\"token class\">.avatar-uploader-trigger</span>,\n<span class=\"token class\">.avatar</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">150</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">150</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.avatar-uploader</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> block<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px dashed <span class=\"token hexcode\">#d9d9d9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">cursor</span><span class=\"token punctuation\">:</span> pointer<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.avatar-uploader-trigger</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> table-cell<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">vertical-align</span><span class=\"token punctuation\">:</span> middle<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">28</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1800:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(151);

	var _upload = __webpack_require__(150);

	var _upload2 = _interopRequireDefault(_upload);

	var _style6 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style7 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _style8 = __webpack_require__(69);

	var _message = __webpack_require__(68);

	var _message2 = _interopRequireDefault(_message);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "经典款式，用户点击按钮弹出文件选择框。"]],
	    "en-US": [["p", "Classic mode. File selection dialog pops up when upload button is clicked "]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "点击上传",
	      "en-US": "Upload by clicking"
	    },
	    "filename": "components/upload/demo/basic.md",
	    "id": "components-upload-demo-basic"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'file'</span><span class=\"token punctuation\">,</span>\n  action<span class=\"token punctuation\">:</span> <span class=\"token string\">'/upload.do'</span><span class=\"token punctuation\">,</span>\n  headers<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    authorization<span class=\"token punctuation\">:</span> <span class=\"token string\">'authorization-text'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">!==</span> <span class=\"token string\">'uploading'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">,</span> info<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file uploaded successfully`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file upload failed.`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Upload <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ghost<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Click to Upload\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var props = { name: 'file', action: '/upload.do', headers: { authorization: 'authorization-text' }, onChange: function onChange(info) {
	        if (info.file.status !== 'uploading') {
	          console.log(info.file, info.fileList);
	        }if (info.file.status === 'done') {
	          _message2.default.success(info.file.name + ' file uploaded successfully');
	        } else if (info.file.status === 'error') {
	          _message2.default.error(info.file.name + ' file upload failed.');
	        }
	      }
	    };return _react2.default.createElement(
	      _upload2.default,
	      props,
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'ghost' },
	        _react2.default.createElement(_icon2.default, { type: 'upload' }),
	        ' Click to Upload'
	      )
	    );
	  }
	};

/***/ },

/***/ 1801:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(151);

	var _upload = __webpack_require__(150);

	var _upload2 = _interopRequireDefault(_upload);

	var _style5 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "对已上传的文件进行编辑。"]],
	    "en-US": [["p", "Edit uploaded files"]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "传入已上传的文件",
	      "en-US": "Set files that have been uploaded"
	    },
	    "filename": "components/upload/demo/defaultFileList.md",
	    "id": "components-upload-demo-defaultFileList"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  action<span class=\"token punctuation\">:</span> <span class=\"token string\">'/upload.do'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">!==</span> <span class=\"token string\">'uploading'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  defaultFileList<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    uid<span class=\"token punctuation\">:</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'xxx.png'</span><span class=\"token punctuation\">,</span>\n    status<span class=\"token punctuation\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n    url<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://www.baidu.com/xxx.png'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    uid<span class=\"token punctuation\">:</span> <span class=\"token operator\">-</span><span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'yyy.png'</span><span class=\"token punctuation\">,</span>\n    status<span class=\"token punctuation\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n    url<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://www.baidu.com/yyy.png'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Upload <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ghost<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Upload\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var props = { action: '/upload.do', onChange: function onChange(info) {
	        if (info.file.status !== 'uploading') {
	          console.log(info.file);console.log(info.fileList);
	        }
	      },
	      defaultFileList: [{ uid: -1, name: 'xxx.png', status: 'done', url: 'http://www.baidu.com/xxx.png' }, { uid: -2, name: 'yyy.png', status: 'done', url: 'http://www.baidu.com/yyy.png' }] };return _react2.default.createElement(
	      _upload2.default,
	      props,
	      _react2.default.createElement(
	        _button2.default,
	        { type: 'ghost' },
	        _react2.default.createElement(_icon2.default, { type: 'upload' }),
	        ' Upload'
	      )
	    );
	  }
	};

/***/ },

/***/ 1802:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _style5 = __webpack_require__(69);

	var _message = __webpack_require__(68);

	var _message2 = _interopRequireDefault(_message);

	var _style6 = __webpack_require__(151);

	var _upload = __webpack_require__(150);

	var _upload2 = _interopRequireDefault(_upload);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "把文件拖入指定区域，完成上传，同样支持点击上传。"], ["p", "设置 ", ["code", "multiple"], " 后，在 ", ["code", "IE10+"], " 可以一次上传多个文件。"]],
	    "en-US": [["p", "You can drag files to a specific area, to upload. Alternatively, you can also upload by selecting."], ["p", "We can upload serveral files at once in modern browsers by giving the input the ", ["code", "multiple"], " attribute."]]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "拖拽上传",
	      "en-US": "Drag and Drop"
	    },
	    "filename": "components/upload/demo/drag.md",
	    "id": "components-upload-demo-drag"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> message <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> Dragger <span class=\"token operator\">=</span> Upload<span class=\"token punctuation\">.</span>Dragger<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'file'</span><span class=\"token punctuation\">,</span>\n  multiple<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  showUploadList<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  action<span class=\"token punctuation\">:</span> <span class=\"token string\">'/upload.do'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> status <span class=\"token operator\">=</span> info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">!==</span> <span class=\"token string\">'uploading'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">,</span> info<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file uploaded successfully.`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file upload failed.`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginTop<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> height<span class=\"token punctuation\">:</span> <span class=\"token number\">180</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token operator\">&lt;</span>Dragger <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-drag-icon<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>inbox<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Click or drag file to <span class=\"token keyword\">this</span> area to upload<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-hint<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Support <span class=\"token keyword\">for</span> a single or bulk upload<span class=\"token punctuation\">.</span> Strictly prohibit <span class=\"token keyword\">from</span> uploading company data or other band files<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Dragger</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Dragger = _upload2.default.Dragger;var props = { name: 'file', multiple: true, showUploadList: false, action: '/upload.do',
	      onChange: function onChange(info) {
	        var status = info.file.status;if (status !== 'uploading') {
	          console.log(info.file, info.fileList);
	        }if (status === 'done') {
	          _message2.default.success(info.file.name + ' file uploaded successfully.');
	        } else if (status === 'error') {
	          _message2.default.error(info.file.name + ' file upload failed.');
	        }
	      }
	    };return _react2.default.createElement(
	      'div',
	      { style: { marginTop: 16, height: 180 } },
	      _react2.default.createElement(
	        Dragger,
	        props,
	        _react2.default.createElement(
	          'p',
	          { className: 'ant-upload-drag-icon' },
	          _react2.default.createElement(_icon2.default, { type: 'inbox' })
	        ),
	        _react2.default.createElement(
	          'p',
	          { className: 'ant-upload-text' },
	          'Click or drag file to this area to upload'
	        ),
	        _react2.default.createElement(
	          'p',
	          { className: 'ant-upload-hint' },
	          'Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files'
	        )
	      )
	    );
	  }
	};

/***/ },

/***/ 1803:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(151);

	var _upload = __webpack_require__(150);

	var _upload2 = _interopRequireDefault(_upload);

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style5 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "使用 ", ["code", "fileList"], " 对列表进行完全控制，可以实现各种自定义功能，以下演示三种情况："], ["p", "1) 上传列表数量的限制。"], ["p", "2) 读取远程路径并显示链接。"], ["p", "3) 按照服务器返回信息筛选成功上传的文件。"]],
	    "en-US": [["p", "You can gain full control over filelist by configuring ", ["code", "fileList"], ". You can accomplish all kinds of customed functions. The following shows three circumstances:"], ["p", "1) limit the number of uploaded files."], ["p", "2) read from response and show file link."], ["p", "3) filter successfully uploaded files according to response from server."]]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "完全控制的上传列表",
	      "en-US": "Complete control over file list"
	    },
	    "filename": "components/upload/demo/fileList.md",
	    "id": "components-upload-demo-fileList"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> MyUpload <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      fileList<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n        uid<span class=\"token punctuation\">:</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'xxx.png'</span><span class=\"token punctuation\">,</span>\n        status<span class=\"token punctuation\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n        url<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://www.baidu.com/xxx.png'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> fileList <span class=\"token operator\">=</span> info<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// 1. Limit the number of uploaded files</span>\n    <span class=\"token comment\" spellcheck=\"true\">//    Only to show two recent uploaded files, and old ones will be replaced by the new</span>\n    fileList <span class=\"token operator\">=</span> fileList<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token operator\">-</span><span class=\"token number\">2</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// 2. read from response and show file link</span>\n    fileList <span class=\"token operator\">=</span> fileList<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">.</span>response<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// Component will show file.url as link</span>\n        file<span class=\"token punctuation\">.</span>url <span class=\"token operator\">=</span> file<span class=\"token punctuation\">.</span>response<span class=\"token punctuation\">.</span>url<span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      <span class=\"token keyword\">return</span> file<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// 3. filter successfully uploaded files according to response from server</span>\n    fileList <span class=\"token operator\">=</span> fileList<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">.</span>response<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> file<span class=\"token punctuation\">.</span>response<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'success'</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      <span class=\"token keyword\">return</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> fileList <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      action<span class=\"token punctuation\">:</span> <span class=\"token string\">'/upload.do'</span><span class=\"token punctuation\">,</span>\n      onChange<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">,</span>\n      multiple<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Upload <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span> fileList<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ghost<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> upload\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>MyUpload</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var MyUpload = _react2.default.createClass({
	      displayName: 'MyUpload',
	      getInitialState: function getInitialState() {
	        return { fileList: [{ uid: -1, name: 'xxx.png', status: 'done', url: 'http://www.baidu.com/xxx.png' }] };
	      },
	      handleChange: function handleChange(info) {
	        var fileList = info.fileList; // 1. Limit the number of uploaded files
	        //    Only to show two recent uploaded files, and old ones will be replaced by the new
	        fileList = fileList.slice(-2); // 2. read from response and show file link
	        fileList = fileList.map(function (file) {
	          if (file.response) {
	            // Component will show file.url as link
	            file.url = file.response.url;
	          }return file;
	        }); // 3. filter successfully uploaded files according to response from server
	        fileList = fileList.filter(function (file) {
	          if (file.response) {
	            return file.response.status === 'success';
	          }return true;
	        });this.setState({ fileList: fileList });
	      },
	      render: function render() {
	        var props = { action: '/upload.do', onChange: this.handleChange, multiple: true };return _react2.default.createElement(
	          _upload2.default,
	          (0, _extends3.default)({}, props, { fileList: this.state.fileList }),
	          _react2.default.createElement(
	            _button2.default,
	            { type: 'ghost' },
	            _react2.default.createElement(_icon2.default, { type: 'upload' }),
	            ' upload'
	          )
	        );
	      }
	    });return _react2.default.createElement(MyUpload, null);
	  }
	};

/***/ },

/***/ 1804:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(104);

	var _modal = __webpack_require__(96);

	var _modal2 = _interopRequireDefault(_modal);

	var _style5 = __webpack_require__(151);

	var _upload = __webpack_require__(150);

	var _upload2 = _interopRequireDefault(_upload);

	var _style6 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "用户可以上传图片并在列表中显示缩略图。当上传照片数到达限制后，上传按钮消失。"]],
	    "en-US": [["p", "After users upload picture, the thumbnail will be shown in list. The upload button will disappear when count meets limitation."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "照片墙",
	      "en-US": "Pictures Wall"
	    },
	    "filename": "components/upload/demo/picture-card.md",
	    "id": "components-upload-demo-picture-card"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Modal <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">PicturesWall</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    previewVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    previewImage<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n    fileList<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      uid<span class=\"token punctuation\">:</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token string\">'xxx.png'</span><span class=\"token punctuation\">,</span>\n      status<span class=\"token punctuation\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n      url<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleCancel <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> previewVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n\n  handlePreview <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      previewImage<span class=\"token punctuation\">:</span> file<span class=\"token punctuation\">.</span>url <span class=\"token operator\">||</span> file<span class=\"token punctuation\">.</span>thumbUrl<span class=\"token punctuation\">,</span>\n      previewVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> fileList <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> fileList <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> previewVisible<span class=\"token punctuation\">,</span> previewImage<span class=\"token punctuation\">,</span> fileList <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> uploadButton <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>plus<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Upload<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>clearfix<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Upload</span>\n          <span class=\"token attr-name\">action</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/upload.do<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">listType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>picture-card<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">fileList</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>fileList<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onPreview</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handlePreview<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span>fileList<span class=\"token punctuation\">.</span>length <span class=\"token operator\">>=</span> <span class=\"token number\">3</span> <span class=\"token operator\">?</span> <span class=\"token keyword\">null</span> <span class=\"token punctuation\">:</span> uploadButton<span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Modal</span> <span class=\"token attr-name\">visible</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>previewVisible<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">footer</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">null</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onCancel</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleCancel<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">alt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>example<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">src</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>previewImage<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Modal</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>PicturesWall</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var PicturesWall = function (_React$Component) {
	      (0, _inherits3.default)(PicturesWall, _React$Component);

	      function PicturesWall() {
	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, PicturesWall);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { previewVisible: false, previewImage: '',
	          fileList: [{ uid: -1, name: 'xxx.png', status: 'done', url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }] }, _this.handleCancel = function () {
	          return _this.setState({ previewVisible: false });
	        }, _this.handlePreview = function (file) {
	          _this.setState({ previewImage: file.url || file.thumbUrl, previewVisible: true });
	        }, _this.handleChange = function (_ref) {
	          var fileList = _ref.fileList;
	          return _this.setState({ fileList: fileList });
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      }

	      PicturesWall.prototype.render = function render() {
	        var _state = this.state,
	            previewVisible = _state.previewVisible,
	            previewImage = _state.previewImage,
	            fileList = _state.fileList;
	        var uploadButton = _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_icon2.default, { type: 'plus' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'ant-upload-text' },
	            'Upload'
	          )
	        );return _react2.default.createElement(
	          'div',
	          { className: 'clearfix' },
	          _react2.default.createElement(
	            _upload2.default,
	            { action: '/upload.do', listType: 'picture-card', fileList: fileList, onPreview: this.handlePreview, onChange: this.handleChange },
	            fileList.length >= 3 ? null : uploadButton
	          ),
	          _react2.default.createElement(
	            _modal2.default,
	            { visible: previewVisible, footer: null, onCancel: this.handleCancel },
	            _react2.default.createElement('img', { alt: 'example', style: { width: '100%' }, src: previewImage })
	          )
	        );
	      };

	      return PicturesWall;
	    }(_react2.default.Component);

	    return _react2.default.createElement(PicturesWall, null);
	  },
	  "style": "/* you can make up upload button and sample style by using stylesheets */\n.ant-upload-select-picture-card i {\n  font-size: 28px;\n  color: #999;\n}\n\n.ant-upload-select-picture-card .ant-upload-text {\n  margin-top: 8px;\n  font-size: 12px;\n  color: #666;\n}",
	  "highlightedStyle": "<span class=\"token comment\" spellcheck=\"true\">/* you can make up upload button and sample style by using stylesheets */</span>\n<span class=\"token selector\"><span class=\"token class\">.ant-upload-select-picture-card</span> i </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">28</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.ant-upload-select-picture-card</span> <span class=\"token class\">.ant-upload-text</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#666</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1805:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style4 = __webpack_require__(151);

	var _upload = __webpack_require__(150);

	var _upload2 = _interopRequireDefault(_upload);

	var _style5 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "上传文件为图片，可展示本地缩略图。", ["code", "IE8/9"], " 不支持浏览器本地缩略图展示（", ["a", {
	      "title": null,
	      "href": "https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL"
	    }, "Ref"], "），可以写 ", ["code", "thumbUrl"], " 属性来代替。"]],
	    "en-US": [["p", "If uploade file is picture, a thumbnail can be shown. ", ["code", "IE8/9"], " do not support local thumbnail show. Please use ", ["code", "thumbUrl"], " instead."]]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "图片列表样式",
	      "en-US": "Pictures with list style"
	    },
	    "filename": "components/upload/demo/picture-style.md",
	    "id": "components-upload-demo-picture-style"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  action<span class=\"token punctuation\">:</span> <span class=\"token string\">'/upload.do'</span><span class=\"token punctuation\">,</span>\n  listType<span class=\"token punctuation\">:</span> <span class=\"token string\">'picture'</span><span class=\"token punctuation\">,</span>\n  defaultFileList<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    uid<span class=\"token punctuation\">:</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'xxx.png'</span><span class=\"token punctuation\">,</span>\n    status<span class=\"token punctuation\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n    url<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'</span><span class=\"token punctuation\">,</span>\n    thumbUrl<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    uid<span class=\"token punctuation\">:</span> <span class=\"token operator\">-</span><span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'yyy.png'</span><span class=\"token punctuation\">,</span>\n    status<span class=\"token punctuation\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n    url<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'</span><span class=\"token punctuation\">,</span>\n    thumbUrl<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token operator\">&lt;</span>Upload <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ghost<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> upload\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token operator\">&lt;</span>Upload <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span> className<span class=\"token operator\">=</span><span class=\"token string\">\"upload-list-inline\"</span><span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ghost<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> upload\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var props = { action: '/upload.do', listType: 'picture', defaultFileList: [{ uid: -1, name: 'xxx.png', status: 'done', url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }, { uid: -2, name: 'yyy.png', status: 'done',
	        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
	        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' }] };return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _upload2.default,
	        props,
	        _react2.default.createElement(
	          _button2.default,
	          { type: 'ghost' },
	          _react2.default.createElement(_icon2.default, { type: 'upload' }),
	          ' upload'
	        )
	      ),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(
	        _upload2.default,
	        (0, _extends3.default)({}, props, { className: 'upload-list-inline' }),
	        _react2.default.createElement(
	          _button2.default,
	          { type: 'ghost' },
	          _react2.default.createElement(_icon2.default, { type: 'upload' }),
	          ' upload'
	        )
	      )
	    );
	  },
	  "style": "/* tile uploaded pictures */\n.upload-list-inline .ant-upload-list-item {\n  display: inline-block;\n  width: 200px;\n  margin-right: 8px;\n}",
	  "highlightedStyle": "<span class=\"token comment\" spellcheck=\"true\">/* tile uploaded pictures */</span>\n<span class=\"token selector\"><span class=\"token class\">.upload-list-inline</span> <span class=\"token class\">.ant-upload-list-item</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> inline-block<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ }

});