webpackJsonp([1],{

/***/ 1820:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(2187),
    'grid': __webpack_require__(2188),
    'infinite-load': __webpack_require__(2189),
    'infinite-virtualized-load': __webpack_require__(2192),
    'loadmore': __webpack_require__(2227),
    'resposive': __webpack_require__(2228),
    'simple': __webpack_require__(2229),
    'vertical': __webpack_require__(2230),
}

/***/ }),

/***/ 1980:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_VisibleCellRange = exports.bpfrpt_proptype_Alignment = exports.bpfrpt_proptype_OverscanIndicesGetter = exports.bpfrpt_proptype_OverscanIndices = exports.bpfrpt_proptype_OverscanIndicesGetterParams = exports.bpfrpt_proptype_RenderedSection = exports.bpfrpt_proptype_ScrollbarPresenceChange = exports.bpfrpt_proptype_Scroll = exports.bpfrpt_proptype_NoContentRenderer = exports.bpfrpt_proptype_CellSize = exports.bpfrpt_proptype_CellSizeGetter = exports.bpfrpt_proptype_CellRangeRenderer = exports.bpfrpt_proptype_CellRangeRendererParams = exports.bpfrpt_proptype_StyleCache = exports.bpfrpt_proptype_CellCache = exports.bpfrpt_proptype_CellRenderer = exports.bpfrpt_proptype_CellRendererParams = exports.bpfrpt_proptype_CellPosition = undefined;

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _ScalingCellSizeAndPositionManager = __webpack_require__(1987);

var _ScalingCellSizeAndPositionManager2 = _interopRequireDefault(_ScalingCellSizeAndPositionManager);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var bpfrpt_proptype_CellPosition =  true ? null : {
  columnIndex: _propTypes2.default.number.isRequired,
  rowIndex: _propTypes2.default.number.isRequired
};
var bpfrpt_proptype_CellRendererParams =  true ? null : {
  columnIndex: _propTypes2.default.number.isRequired,
  isScrolling: _propTypes2.default.bool.isRequired,
  isVisible: _propTypes2.default.bool.isRequired,
  key: _propTypes2.default.string.isRequired,
  parent: _propTypes2.default.object.isRequired,
  rowIndex: _propTypes2.default.number.isRequired,
  style: _propTypes2.default.object.isRequired
};
var bpfrpt_proptype_CellRenderer =  true ? null : _propTypes2.default.func;
var bpfrpt_proptype_CellCache =  true ? null : _propTypes2.default.objectOf(_propTypes2.default.node.isRequired);
var bpfrpt_proptype_StyleCache =  true ? null : _propTypes2.default.objectOf(_propTypes2.default.object.isRequired);
var bpfrpt_proptype_CellRangeRendererParams =  true ? null : {
  cellCache: _propTypes2.default.objectOf(_propTypes2.default.node.isRequired).isRequired,
  cellRenderer: _propTypes2.default.func.isRequired,
  columnSizeAndPositionManager: function columnSizeAndPositionManager() {
    return (typeof _ScalingCellSizeAndPositionManager2.default === 'function' ? _propTypes2.default.instanceOf(_ScalingCellSizeAndPositionManager2.default).isRequired : _propTypes2.default.any.isRequired).apply(this, arguments);
  },
  columnStartIndex: _propTypes2.default.number.isRequired,
  columnStopIndex: _propTypes2.default.number.isRequired,
  deferredMeasurementCache: _propTypes2.default.object,
  horizontalOffsetAdjustment: _propTypes2.default.number.isRequired,
  isScrolling: _propTypes2.default.bool.isRequired,
  isScrollingOptOut: _propTypes2.default.bool.isRequired,
  parent: _propTypes2.default.object.isRequired,
  rowSizeAndPositionManager: function rowSizeAndPositionManager() {
    return (typeof _ScalingCellSizeAndPositionManager2.default === 'function' ? _propTypes2.default.instanceOf(_ScalingCellSizeAndPositionManager2.default).isRequired : _propTypes2.default.any.isRequired).apply(this, arguments);
  },
  rowStartIndex: _propTypes2.default.number.isRequired,
  rowStopIndex: _propTypes2.default.number.isRequired,
  scrollLeft: _propTypes2.default.number.isRequired,
  scrollTop: _propTypes2.default.number.isRequired,
  styleCache: _propTypes2.default.objectOf(_propTypes2.default.object.isRequired).isRequired,
  verticalOffsetAdjustment: _propTypes2.default.number.isRequired,
  visibleColumnIndices: _propTypes2.default.object.isRequired,
  visibleRowIndices: _propTypes2.default.object.isRequired
};
var bpfrpt_proptype_CellRangeRenderer =  true ? null : _propTypes2.default.func;
var bpfrpt_proptype_CellSizeGetter =  true ? null : _propTypes2.default.func;
var bpfrpt_proptype_CellSize =  true ? null : _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.number]);
var bpfrpt_proptype_NoContentRenderer =  true ? null : _propTypes2.default.func;
var bpfrpt_proptype_Scroll =  true ? null : {
  clientHeight: _propTypes2.default.number.isRequired,
  clientWidth: _propTypes2.default.number.isRequired,
  scrollHeight: _propTypes2.default.number.isRequired,
  scrollLeft: _propTypes2.default.number.isRequired,
  scrollTop: _propTypes2.default.number.isRequired,
  scrollWidth: _propTypes2.default.number.isRequired
};
var bpfrpt_proptype_ScrollbarPresenceChange =  true ? null : {
  horizontal: _propTypes2.default.bool.isRequired,
  vertical: _propTypes2.default.bool.isRequired,
  size: _propTypes2.default.number.isRequired
};
var bpfrpt_proptype_RenderedSection =  true ? null : {
  columnOverscanStartIndex: _propTypes2.default.number.isRequired,
  columnOverscanStopIndex: _propTypes2.default.number.isRequired,
  columnStartIndex: _propTypes2.default.number.isRequired,
  columnStopIndex: _propTypes2.default.number.isRequired,
  rowOverscanStartIndex: _propTypes2.default.number.isRequired,
  rowOverscanStopIndex: _propTypes2.default.number.isRequired,
  rowStartIndex: _propTypes2.default.number.isRequired,
  rowStopIndex: _propTypes2.default.number.isRequired
};
var bpfrpt_proptype_OverscanIndicesGetterParams =  true ? null : {
  // One of SCROLL_DIRECTION_HORIZONTAL or SCROLL_DIRECTION_VERTICAL
  direction: _propTypes2.default.oneOf(['horizontal', 'vertical']).isRequired,


  // One of SCROLL_DIRECTION_BACKWARD or SCROLL_DIRECTION_FORWARD
  scrollDirection: _propTypes2.default.oneOf([-1, 1]).isRequired,


  // Number of rows or columns in the current axis
  cellCount: _propTypes2.default.number.isRequired,


  // Maximum number of cells to over-render in either direction
  overscanCellsCount: _propTypes2.default.number.isRequired,


  // Begin of range of visible cells
  startIndex: _propTypes2.default.number.isRequired,


  // End of range of visible cells
  stopIndex: _propTypes2.default.number.isRequired
};
var bpfrpt_proptype_OverscanIndices =  true ? null : {
  overscanStartIndex: _propTypes2.default.number.isRequired,
  overscanStopIndex: _propTypes2.default.number.isRequired
};
var bpfrpt_proptype_OverscanIndicesGetter =  true ? null : _propTypes2.default.func;
var bpfrpt_proptype_Alignment =  true ? null : _propTypes2.default.oneOf(['auto', 'end', 'start', 'center']);
var bpfrpt_proptype_VisibleCellRange =  true ? null : {
  start: _propTypes2.default.number,
  stop: _propTypes2.default.number
};
exports.bpfrpt_proptype_CellPosition = bpfrpt_proptype_CellPosition;
exports.bpfrpt_proptype_CellRendererParams = bpfrpt_proptype_CellRendererParams;
exports.bpfrpt_proptype_CellRenderer = bpfrpt_proptype_CellRenderer;
exports.bpfrpt_proptype_CellCache = bpfrpt_proptype_CellCache;
exports.bpfrpt_proptype_StyleCache = bpfrpt_proptype_StyleCache;
exports.bpfrpt_proptype_CellRangeRendererParams = bpfrpt_proptype_CellRangeRendererParams;
exports.bpfrpt_proptype_CellRangeRenderer = bpfrpt_proptype_CellRangeRenderer;
exports.bpfrpt_proptype_CellSizeGetter = bpfrpt_proptype_CellSizeGetter;
exports.bpfrpt_proptype_CellSize = bpfrpt_proptype_CellSize;
exports.bpfrpt_proptype_NoContentRenderer = bpfrpt_proptype_NoContentRenderer;
exports.bpfrpt_proptype_Scroll = bpfrpt_proptype_Scroll;
exports.bpfrpt_proptype_ScrollbarPresenceChange = bpfrpt_proptype_ScrollbarPresenceChange;
exports.bpfrpt_proptype_RenderedSection = bpfrpt_proptype_RenderedSection;
exports.bpfrpt_proptype_OverscanIndicesGetterParams = bpfrpt_proptype_OverscanIndicesGetterParams;
exports.bpfrpt_proptype_OverscanIndices = bpfrpt_proptype_OverscanIndices;
exports.bpfrpt_proptype_OverscanIndicesGetter = bpfrpt_proptype_OverscanIndicesGetter;
exports.bpfrpt_proptype_Alignment = bpfrpt_proptype_Alignment;
exports.bpfrpt_proptype_VisibleCellRange = bpfrpt_proptype_VisibleCellRange;

/***/ }),

/***/ 1981:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * Reqwest! A general purpose XHR connection manager
  * license MIT (c) Dustin Diaz 2015
  * https://github.com/ded/reqwest
  */

!function (name, context, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else context[name] = definition()
}('reqwest', this, function () {

  var context = this

  if ('window' in context) {
    var doc = document
      , byTag = 'getElementsByTagName'
      , head = doc[byTag]('head')[0]
  } else {
    var XHR2
    try {
      XHR2 = __webpack_require__(1982)
    } catch (ex) {
      throw new Error('Peer dependency `xhr2` required! Please npm install xhr2')
    }
  }


  var httpsRe = /^http/
    , protocolRe = /(^\w+):\/\//
    , twoHundo = /^(20\d|1223)$/ //http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
    , readyState = 'readyState'
    , contentType = 'Content-Type'
    , requestedWith = 'X-Requested-With'
    , uniqid = 0
    , callbackPrefix = 'reqwest_' + (+new Date())
    , lastValue // data stored by the most recent JSONP callback
    , xmlHttpRequest = 'XMLHttpRequest'
    , xDomainRequest = 'XDomainRequest'
    , noop = function () {}

    , isArray = typeof Array.isArray == 'function'
        ? Array.isArray
        : function (a) {
            return a instanceof Array
          }

    , defaultHeaders = {
          'contentType': 'application/x-www-form-urlencoded'
        , 'requestedWith': xmlHttpRequest
        , 'accept': {
              '*':  'text/javascript, text/html, application/xml, text/xml, */*'
            , 'xml':  'application/xml, text/xml'
            , 'html': 'text/html'
            , 'text': 'text/plain'
            , 'json': 'application/json, text/javascript'
            , 'js':   'application/javascript, text/javascript'
          }
      }

    , xhr = function(o) {
        // is it x-domain
        if (o['crossOrigin'] === true) {
          var xhr = context[xmlHttpRequest] ? new XMLHttpRequest() : null
          if (xhr && 'withCredentials' in xhr) {
            return xhr
          } else if (context[xDomainRequest]) {
            return new XDomainRequest()
          } else {
            throw new Error('Browser does not support cross-origin requests')
          }
        } else if (context[xmlHttpRequest]) {
          return new XMLHttpRequest()
        } else if (XHR2) {
          return new XHR2()
        } else {
          return new ActiveXObject('Microsoft.XMLHTTP')
        }
      }
    , globalSetupOptions = {
        dataFilter: function (data) {
          return data
        }
      }

  function succeed(r) {
    var protocol = protocolRe.exec(r.url)
    protocol = (protocol && protocol[1]) || context.location.protocol
    return httpsRe.test(protocol) ? twoHundo.test(r.request.status) : !!r.request.response
  }

  function handleReadyState(r, success, error) {
    return function () {
      // use _aborted to mitigate against IE err c00c023f
      // (can't read props on aborted request objects)
      if (r._aborted) return error(r.request)
      if (r._timedOut) return error(r.request, 'Request is aborted: timeout')
      if (r.request && r.request[readyState] == 4) {
        r.request.onreadystatechange = noop
        if (succeed(r)) success(r.request)
        else
          error(r.request)
      }
    }
  }

  function setHeaders(http, o) {
    var headers = o['headers'] || {}
      , h

    headers['Accept'] = headers['Accept']
      || defaultHeaders['accept'][o['type']]
      || defaultHeaders['accept']['*']

    var isAFormData = typeof FormData !== 'undefined' && (o['data'] instanceof FormData);
    // breaks cross-origin requests with legacy browsers
    if (!o['crossOrigin'] && !headers[requestedWith]) headers[requestedWith] = defaultHeaders['requestedWith']
    if (!headers[contentType] && !isAFormData) headers[contentType] = o['contentType'] || defaultHeaders['contentType']
    for (h in headers)
      headers.hasOwnProperty(h) && 'setRequestHeader' in http && http.setRequestHeader(h, headers[h])
  }

  function setCredentials(http, o) {
    if (typeof o['withCredentials'] !== 'undefined' && typeof http.withCredentials !== 'undefined') {
      http.withCredentials = !!o['withCredentials']
    }
  }

  function generalCallback(data) {
    lastValue = data
  }

  function urlappend (url, s) {
    return url + (/\?/.test(url) ? '&' : '?') + s
  }

  function handleJsonp(o, fn, err, url) {
    var reqId = uniqid++
      , cbkey = o['jsonpCallback'] || 'callback' // the 'callback' key
      , cbval = o['jsonpCallbackName'] || reqwest.getcallbackPrefix(reqId)
      , cbreg = new RegExp('((^|\\?|&)' + cbkey + ')=([^&]+)')
      , match = url.match(cbreg)
      , script = doc.createElement('script')
      , loaded = 0
      , isIE10 = navigator.userAgent.indexOf('MSIE 10.0') !== -1

    if (match) {
      if (match[3] === '?') {
        url = url.replace(cbreg, '$1=' + cbval) // wildcard callback func name
      } else {
        cbval = match[3] // provided callback func name
      }
    } else {
      url = urlappend(url, cbkey + '=' + cbval) // no callback details, add 'em
    }

    context[cbval] = generalCallback

    script.type = 'text/javascript'
    script.src = url
    script.async = true
    if (typeof script.onreadystatechange !== 'undefined' && !isIE10) {
      // need this for IE due to out-of-order onreadystatechange(), binding script
      // execution to an event listener gives us control over when the script
      // is executed. See http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
      script.htmlFor = script.id = '_reqwest_' + reqId
    }

    script.onload = script.onreadystatechange = function () {
      if ((script[readyState] && script[readyState] !== 'complete' && script[readyState] !== 'loaded') || loaded) {
        return false
      }
      script.onload = script.onreadystatechange = null
      script.onclick && script.onclick()
      // Call the user callback with the last value stored and clean up values and scripts.
      fn(lastValue)
      lastValue = undefined
      head.removeChild(script)
      loaded = 1
    }

    // Add the script to the DOM head
    head.appendChild(script)

    // Enable JSONP timeout
    return {
      abort: function () {
        script.onload = script.onreadystatechange = null
        err({}, 'Request is aborted: timeout', {})
        lastValue = undefined
        head.removeChild(script)
        loaded = 1
      }
    }
  }

  function getRequest(fn, err) {
    var o = this.o
      , method = (o['method'] || 'GET').toUpperCase()
      , url = typeof o === 'string' ? o : o['url']
      // convert non-string objects to query-string form unless o['processData'] is false
      , data = (o['processData'] !== false && o['data'] && typeof o['data'] !== 'string')
        ? reqwest.toQueryString(o['data'])
        : (o['data'] || null)
      , http
      , sendWait = false

    // if we're working on a GET request and we have data then we should append
    // query string to end of URL and not post data
    if ((o['type'] == 'jsonp' || method == 'GET') && data) {
      url = urlappend(url, data)
      data = null
    }

    if (o['type'] == 'jsonp') return handleJsonp(o, fn, err, url)

    // get the xhr from the factory if passed
    // if the factory returns null, fall-back to ours
    http = (o.xhr && o.xhr(o)) || xhr(o)

    http.open(method, url, o['async'] === false ? false : true)
    setHeaders(http, o)
    setCredentials(http, o)
    if (context[xDomainRequest] && http instanceof context[xDomainRequest]) {
        http.onload = fn
        http.onerror = err
        // NOTE: see
        // http://social.msdn.microsoft.com/Forums/en-US/iewebdevelopment/thread/30ef3add-767c-4436-b8a9-f1ca19b4812e
        http.onprogress = function() {}
        sendWait = true
    } else {
      http.onreadystatechange = handleReadyState(this, fn, err)
    }
    o['before'] && o['before'](http)
    if (sendWait) {
      setTimeout(function () {
        http.send(data)
      }, 200)
    } else {
      http.send(data)
    }
    return http
  }

  function Reqwest(o, fn) {
    this.o = o
    this.fn = fn

    init.apply(this, arguments)
  }

  function setType(header) {
    // json, javascript, text/plain, text/html, xml
    if (header === null) return undefined; //In case of no content-type.
    if (header.match('json')) return 'json'
    if (header.match('javascript')) return 'js'
    if (header.match('text')) return 'html'
    if (header.match('xml')) return 'xml'
  }

  function init(o, fn) {

    this.url = typeof o == 'string' ? o : o['url']
    this.timeout = null

    // whether request has been fulfilled for purpose
    // of tracking the Promises
    this._fulfilled = false
    // success handlers
    this._successHandler = function(){}
    this._fulfillmentHandlers = []
    // error handlers
    this._errorHandlers = []
    // complete (both success and fail) handlers
    this._completeHandlers = []
    this._erred = false
    this._responseArgs = {}

    var self = this

    fn = fn || function () {}

    if (o['timeout']) {
      this.timeout = setTimeout(function () {
        timedOut()
      }, o['timeout'])
    }

    if (o['success']) {
      this._successHandler = function () {
        o['success'].apply(o, arguments)
      }
    }

    if (o['error']) {
      this._errorHandlers.push(function () {
        o['error'].apply(o, arguments)
      })
    }

    if (o['complete']) {
      this._completeHandlers.push(function () {
        o['complete'].apply(o, arguments)
      })
    }

    function complete (resp) {
      o['timeout'] && clearTimeout(self.timeout)
      self.timeout = null
      while (self._completeHandlers.length > 0) {
        self._completeHandlers.shift()(resp)
      }
    }

    function success (resp) {
      var type = o['type'] || resp && setType(resp.getResponseHeader('Content-Type')) // resp can be undefined in IE
      resp = (type !== 'jsonp') ? self.request : resp
      // use global data filter on response text
      var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type)
        , r = filteredResponse
      try {
        resp.responseText = r
      } catch (e) {
        // can't assign this in IE<=8, just ignore
      }
      if (r) {
        switch (type) {
        case 'json':
          try {
            resp = context.JSON ? context.JSON.parse(r) : eval('(' + r + ')')
          } catch (err) {
            return error(resp, 'Could not parse JSON in response', err)
          }
          break
        case 'js':
          resp = eval(r)
          break
        case 'html':
          resp = r
          break
        case 'xml':
          resp = resp.responseXML
              && resp.responseXML.parseError // IE trololo
              && resp.responseXML.parseError.errorCode
              && resp.responseXML.parseError.reason
            ? null
            : resp.responseXML
          break
        }
      }

      self._responseArgs.resp = resp
      self._fulfilled = true
      fn(resp)
      self._successHandler(resp)
      while (self._fulfillmentHandlers.length > 0) {
        resp = self._fulfillmentHandlers.shift()(resp)
      }

      complete(resp)
    }

    function timedOut() {
      self._timedOut = true
      self.request.abort()
    }

    function error(resp, msg, t) {
      resp = self.request
      self._responseArgs.resp = resp
      self._responseArgs.msg = msg
      self._responseArgs.t = t
      self._erred = true
      while (self._errorHandlers.length > 0) {
        self._errorHandlers.shift()(resp, msg, t)
      }
      complete(resp)
    }

    this.request = getRequest.call(this, success, error)
  }

  Reqwest.prototype = {
    abort: function () {
      this._aborted = true
      this.request.abort()
    }

  , retry: function () {
      init.call(this, this.o, this.fn)
    }

    /**
     * Small deviation from the Promises A CommonJs specification
     * http://wiki.commonjs.org/wiki/Promises/A
     */

    /**
     * `then` will execute upon successful requests
     */
  , then: function (success, fail) {
      success = success || function () {}
      fail = fail || function () {}
      if (this._fulfilled) {
        this._responseArgs.resp = success(this._responseArgs.resp)
      } else if (this._erred) {
        fail(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
      } else {
        this._fulfillmentHandlers.push(success)
        this._errorHandlers.push(fail)
      }
      return this
    }

    /**
     * `always` will execute whether the request succeeds or fails
     */
  , always: function (fn) {
      if (this._fulfilled || this._erred) {
        fn(this._responseArgs.resp)
      } else {
        this._completeHandlers.push(fn)
      }
      return this
    }

    /**
     * `fail` will execute when the request fails
     */
  , fail: function (fn) {
      if (this._erred) {
        fn(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
      } else {
        this._errorHandlers.push(fn)
      }
      return this
    }
  , 'catch': function (fn) {
      return this.fail(fn)
    }
  }

  function reqwest(o, fn) {
    return new Reqwest(o, fn)
  }

  // normalize newline variants according to spec -> CRLF
  function normalize(s) {
    return s ? s.replace(/\r?\n/g, '\r\n') : ''
  }

  function serial(el, cb) {
    var n = el.name
      , t = el.tagName.toLowerCase()
      , optCb = function (o) {
          // IE gives value="" even where there is no value attribute
          // 'specified' ref: http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-862529273
          if (o && !o['disabled'])
            cb(n, normalize(o['attributes']['value'] && o['attributes']['value']['specified'] ? o['value'] : o['text']))
        }
      , ch, ra, val, i

    // don't serialize elements that are disabled or without a name
    if (el.disabled || !n) return

    switch (t) {
    case 'input':
      if (!/reset|button|image|file/i.test(el.type)) {
        ch = /checkbox/i.test(el.type)
        ra = /radio/i.test(el.type)
        val = el.value
        // WebKit gives us "" instead of "on" if a checkbox has no value, so correct it here
        ;(!(ch || ra) || el.checked) && cb(n, normalize(ch && val === '' ? 'on' : val))
      }
      break
    case 'textarea':
      cb(n, normalize(el.value))
      break
    case 'select':
      if (el.type.toLowerCase() === 'select-one') {
        optCb(el.selectedIndex >= 0 ? el.options[el.selectedIndex] : null)
      } else {
        for (i = 0; el.length && i < el.length; i++) {
          el.options[i].selected && optCb(el.options[i])
        }
      }
      break
    }
  }

  // collect up all form elements found from the passed argument elements all
  // the way down to child elements; pass a '<form>' or form fields.
  // called with 'this'=callback to use for serial() on each element
  function eachFormElement() {
    var cb = this
      , e, i
      , serializeSubtags = function (e, tags) {
          var i, j, fa
          for (i = 0; i < tags.length; i++) {
            fa = e[byTag](tags[i])
            for (j = 0; j < fa.length; j++) serial(fa[j], cb)
          }
        }

    for (i = 0; i < arguments.length; i++) {
      e = arguments[i]
      if (/input|select|textarea/i.test(e.tagName)) serial(e, cb)
      serializeSubtags(e, [ 'input', 'select', 'textarea' ])
    }
  }

  // standard query string style serialization
  function serializeQueryString() {
    return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
  }

  // { 'name': 'value', ... } style serialization
  function serializeHash() {
    var hash = {}
    eachFormElement.apply(function (name, value) {
      if (name in hash) {
        hash[name] && !isArray(hash[name]) && (hash[name] = [hash[name]])
        hash[name].push(value)
      } else hash[name] = value
    }, arguments)
    return hash
  }

  // [ { name: 'name', value: 'value' }, ... ] style serialization
  reqwest.serializeArray = function () {
    var arr = []
    eachFormElement.apply(function (name, value) {
      arr.push({name: name, value: value})
    }, arguments)
    return arr
  }

  reqwest.serialize = function () {
    if (arguments.length === 0) return ''
    var opt, fn
      , args = Array.prototype.slice.call(arguments, 0)

    opt = args.pop()
    opt && opt.nodeType && args.push(opt) && (opt = null)
    opt && (opt = opt.type)

    if (opt == 'map') fn = serializeHash
    else if (opt == 'array') fn = reqwest.serializeArray
    else fn = serializeQueryString

    return fn.apply(null, args)
  }

  reqwest.toQueryString = function (o, trad) {
    var prefix, i
      , traditional = trad || false
      , s = []
      , enc = encodeURIComponent
      , add = function (key, value) {
          // If value is a function, invoke it and return its value
          value = ('function' === typeof value) ? value() : (value == null ? '' : value)
          s[s.length] = enc(key) + '=' + enc(value)
        }
    // If an array was passed in, assume that it is an array of form elements.
    if (isArray(o)) {
      for (i = 0; o && i < o.length; i++) add(o[i]['name'], o[i]['value'])
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in o) {
        if (o.hasOwnProperty(prefix)) buildParams(prefix, o[prefix], traditional, add)
      }
    }

    // spaces should be + according to spec
    return s.join('&').replace(/%20/g, '+')
  }

  function buildParams(prefix, obj, traditional, add) {
    var name, i, v
      , rbracket = /\[\]$/

    if (isArray(obj)) {
      // Serialize array item.
      for (i = 0; obj && i < obj.length; i++) {
        v = obj[i]
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v)
        } else {
          buildParams(prefix + '[' + (typeof v === 'object' ? i : '') + ']', v, traditional, add)
        }
      }
    } else if (obj && obj.toString() === '[object Object]') {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + '[' + name + ']', obj[name], traditional, add)
      }

    } else {
      // Serialize scalar item.
      add(prefix, obj)
    }
  }

  reqwest.getcallbackPrefix = function () {
    return callbackPrefix
  }

  // jQuery and Zepto compatibility, differences can be remapped here so you can call
  // .ajax.compat(options, callback)
  reqwest.compat = function (o, fn) {
    if (o) {
      o['type'] && (o['method'] = o['type']) && delete o['type']
      o['dataType'] && (o['type'] = o['dataType'])
      o['jsonpCallback'] && (o['jsonpCallbackName'] = o['jsonpCallback']) && delete o['jsonpCallback']
      o['jsonp'] && (o['jsonpCallback'] = o['jsonp'])
    }
    return new Reqwest(o, fn)
  }

  reqwest.ajaxSetup = function (options) {
    options = options || {}
    for (var k in options) {
      globalSetupOptions[k] = options[k]
    }
  }

  return reqwest
});


/***/ }),

/***/ 1982:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1986:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(669);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ 1987:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(18);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _CellSizeAndPositionManager = __webpack_require__(2216);

var _CellSizeAndPositionManager2 = _interopRequireDefault(_CellSizeAndPositionManager);

var _maxElementSize = __webpack_require__(2217);

var _types = __webpack_require__(1980);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extends CellSizeAndPositionManager and adds scaling behavior for lists that are too large to fit within a browser's native limits.
 */


/**
 * Browsers have scroll offset limitations (eg Chrome stops scrolling at ~33.5M pixels where as Edge tops out at ~1.5M pixels).
 * After a certain position, the browser won't allow the user to scroll further (even via JavaScript scroll offset adjustments).
 * This util picks a lower ceiling for max size and artificially adjusts positions within to make it transparent for users.
 */

var ScalingCellSizeAndPositionManager = function () {
  function ScalingCellSizeAndPositionManager(_ref) {
    var _ref$maxScrollSize = _ref.maxScrollSize,
        maxScrollSize = _ref$maxScrollSize === undefined ? (0, _maxElementSize.getMaxElementSize)() : _ref$maxScrollSize,
        params = (0, _objectWithoutProperties3.default)(_ref, ['maxScrollSize']);
    (0, _classCallCheck3.default)(this, ScalingCellSizeAndPositionManager);

    // Favor composition over inheritance to simplify IE10 support
    this._cellSizeAndPositionManager = new _CellSizeAndPositionManager2.default(params);
    this._maxScrollSize = maxScrollSize;
  }

  (0, _createClass3.default)(ScalingCellSizeAndPositionManager, [{
    key: 'areOffsetsAdjusted',
    value: function areOffsetsAdjusted() {
      return this._cellSizeAndPositionManager.getTotalSize() > this._maxScrollSize;
    }
  }, {
    key: 'configure',
    value: function configure(params) {
      this._cellSizeAndPositionManager.configure(params);
    }
  }, {
    key: 'getCellCount',
    value: function getCellCount() {
      return this._cellSizeAndPositionManager.getCellCount();
    }
  }, {
    key: 'getEstimatedCellSize',
    value: function getEstimatedCellSize() {
      return this._cellSizeAndPositionManager.getEstimatedCellSize();
    }
  }, {
    key: 'getLastMeasuredIndex',
    value: function getLastMeasuredIndex() {
      return this._cellSizeAndPositionManager.getLastMeasuredIndex();
    }

    /**
     * Number of pixels a cell at the given position (offset) should be shifted in order to fit within the scaled container.
     * The offset passed to this function is scaled (safe) as well.
     */

  }, {
    key: 'getOffsetAdjustment',
    value: function getOffsetAdjustment(_ref2) {
      var containerSize = _ref2.containerSize,
          offset = _ref2.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();
      var offsetPercentage = this._getOffsetPercentage({
        containerSize: containerSize,
        offset: offset,
        totalSize: safeTotalSize
      });

      return Math.round(offsetPercentage * (safeTotalSize - totalSize));
    }
  }, {
    key: 'getSizeAndPositionOfCell',
    value: function getSizeAndPositionOfCell(index) {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
    }
  }, {
    key: 'getSizeAndPositionOfLastMeasuredCell',
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
    }

    /** See CellSizeAndPositionManager#getTotalSize */

  }, {
    key: 'getTotalSize',
    value: function getTotalSize() {
      return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
    }

    /** See CellSizeAndPositionManager#getUpdatedOffsetForIndex */

  }, {
    key: 'getUpdatedOffsetForIndex',
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
          align = _ref3$align === undefined ? 'auto' : _ref3$align,
          containerSize = _ref3.containerSize,
          currentOffset = _ref3.currentOffset,
          targetIndex = _ref3.targetIndex;

      currentOffset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: currentOffset
      });

      var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
        align: align,
        containerSize: containerSize,
        currentOffset: currentOffset,
        targetIndex: targetIndex
      });

      return this._offsetToSafeOffset({
        containerSize: containerSize,
        offset: offset
      });
    }

    /** See CellSizeAndPositionManager#getVisibleCellRange */

  }, {
    key: 'getVisibleCellRange',
    value: function getVisibleCellRange(_ref4) {
      var containerSize = _ref4.containerSize,
          offset = _ref4.offset;

      offset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: offset
      });

      return this._cellSizeAndPositionManager.getVisibleCellRange({
        containerSize: containerSize,
        offset: offset
      });
    }
  }, {
    key: 'resetCell',
    value: function resetCell(index) {
      this._cellSizeAndPositionManager.resetCell(index);
    }
  }, {
    key: '_getOffsetPercentage',
    value: function _getOffsetPercentage(_ref5) {
      var containerSize = _ref5.containerSize,
          offset = _ref5.offset,
          totalSize = _ref5.totalSize;

      return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
    }
  }, {
    key: '_offsetToSafeOffset',
    value: function _offsetToSafeOffset(_ref6) {
      var containerSize = _ref6.containerSize,
          offset = _ref6.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: totalSize
        });

        return Math.round(offsetPercentage * (safeTotalSize - containerSize));
      }
    }
  }, {
    key: '_safeOffsetToOffset',
    value: function _safeOffsetToOffset(_ref7) {
      var containerSize = _ref7.containerSize,
          offset = _ref7.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: safeTotalSize
        });

        return Math.round(offsetPercentage * (totalSize - containerSize));
      }
    }
  }]);
  return ScalingCellSizeAndPositionManager;
}();

exports.default = ScalingCellSizeAndPositionManager;

/***/ }),

/***/ 1991:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IS_SCROLLING_TIMEOUT = undefined;

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(666);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(8);

var ReactDOM = _interopRequireWildcard(_reactDom);

var _onScroll = __webpack_require__(2194);

var _dimensions = __webpack_require__(2208);

var _detectElementResize = __webpack_require__(1997);

var _detectElementResize2 = _interopRequireDefault(_detectElementResize);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var IS_SCROLLING_TIMEOUT = exports.IS_SCROLLING_TIMEOUT = 150;

var getWindow = function getWindow() {
  return typeof window !== 'undefined' ? window : undefined;
};

var WindowScroller = function (_React$PureComponent) {
  (0, _inherits3.default)(WindowScroller, _React$PureComponent);

  function WindowScroller() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, WindowScroller);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WindowScroller.__proto__ || (0, _getPrototypeOf2.default)(WindowScroller)).call.apply(_ref, [this].concat(args))), _this), _this._window = getWindow(), _this._isMounted = false, _this._positionFromTop = 0, _this._positionFromLeft = 0, _this.state = (0, _extends3.default)({}, (0, _dimensions.getDimensions)(_this.props.scrollElement, _this.props), {
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    }), _this._registerChild = function (element) {
      if (element && !(element instanceof Element)) {
        console.warn('WindowScroller registerChild expects to be passed Element or null');
      }
      _this._child = element;
      _this.updatePosition();
    }, _this._onChildScroll = function (_ref2) {
      var scrollTop = _ref2.scrollTop;

      if (_this.state.scrollTop === scrollTop) {
        return;
      }

      var scrollElement = _this.props.scrollElement;
      if (scrollElement) {
        if (typeof scrollElement.scrollTo === 'function') {
          scrollElement.scrollTo(0, scrollTop + _this._positionFromTop);
        } else {
          scrollElement.scrollTop = scrollTop + _this._positionFromTop;
        }
      }
    }, _this._registerResizeListener = function (element) {
      if (element === window) {
        window.addEventListener('resize', _this._onResize, false);
      } else {
        _this._detectElementResize.addResizeListener(element, _this._onResize);
      }
    }, _this._unregisterResizeListener = function (element) {
      if (element === window) {
        window.removeEventListener('resize', _this._onResize, false);
      } else if (element) {
        _this._detectElementResize.removeResizeListener(element, _this._onResize);
      }
    }, _this._onResize = function () {
      _this.updatePosition();
    }, _this.__handleWindowScrollEvent = function () {
      if (!_this._isMounted) {
        return;
      }

      var onScroll = _this.props.onScroll;


      var scrollElement = _this.props.scrollElement;
      if (scrollElement) {
        var scrollOffset = (0, _dimensions.getScrollOffset)(scrollElement);
        var _scrollLeft = Math.max(0, scrollOffset.left - _this._positionFromLeft);
        var _scrollTop = Math.max(0, scrollOffset.top - _this._positionFromTop);

        _this.setState({
          isScrolling: true,
          scrollLeft: _scrollLeft,
          scrollTop: _scrollTop
        });

        onScroll({
          scrollLeft: _scrollLeft,
          scrollTop: _scrollTop
        });
      }
    }, _this.__resetIsScrolling = function () {
      _this.setState({
        isScrolling: false
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(WindowScroller, [{
    key: 'updatePosition',
    value: function updatePosition() {
      var scrollElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.scrollElement;
      var onResize = this.props.onResize;
      var _state = this.state,
          height = _state.height,
          width = _state.width;


      var thisNode = this._child || ReactDOM.findDOMNode(this);
      if (thisNode instanceof Element && scrollElement) {
        var offset = (0, _dimensions.getPositionOffset)(thisNode, scrollElement);
        this._positionFromTop = offset.top;
        this._positionFromLeft = offset.left;
      }

      var dimensions = (0, _dimensions.getDimensions)(scrollElement, this.props);
      if (height !== dimensions.height || width !== dimensions.width) {
        this.setState({
          height: dimensions.height,
          width: dimensions.width
        });
        onResize({
          height: dimensions.height,
          width: dimensions.width
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var scrollElement = this.props.scrollElement;

      this._detectElementResize = (0, _detectElementResize2.default)();

      this.updatePosition(scrollElement);

      if (scrollElement) {
        (0, _onScroll.registerScrollListener)(this, scrollElement);
        this._registerResizeListener(scrollElement);
      }

      this._isMounted = true;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var scrollElement = this.props.scrollElement;
      var prevScrollElement = prevProps.scrollElement;


      if (prevScrollElement !== scrollElement && prevScrollElement != null && scrollElement != null) {
        this.updatePosition(scrollElement);

        (0, _onScroll.unregisterScrollListener)(this, prevScrollElement);
        (0, _onScroll.registerScrollListener)(this, scrollElement);

        this._unregisterResizeListener(prevScrollElement);
        this._registerResizeListener(scrollElement);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var scrollElement = this.props.scrollElement;
      if (scrollElement) {
        (0, _onScroll.unregisterScrollListener)(this, scrollElement);
        this._unregisterResizeListener(scrollElement);
      }

      this._isMounted = false;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _state2 = this.state,
          isScrolling = _state2.isScrolling,
          scrollTop = _state2.scrollTop,
          scrollLeft = _state2.scrollLeft,
          height = _state2.height,
          width = _state2.width;


      return children({
        onChildScroll: this._onChildScroll,
        registerChild: this._registerChild,
        height: height,
        isScrolling: isScrolling,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        width: width
      });
    }

    // Referenced by utils/onScroll


    // Referenced by utils/onScroll

  }]);
  return WindowScroller;
}(React.PureComponent);

WindowScroller.defaultProps = {
  onResize: function onResize() {},
  onScroll: function onScroll() {},
  scrollingResetTimeInterval: IS_SCROLLING_TIMEOUT,
  scrollElement: getWindow(),
  serverHeight: 0,
  serverWidth: 0
};
WindowScroller.propTypes =  true ? null : {
  /**
   * Function responsible for rendering children.
   * This function should implement the following signature:
   * ({ height, isScrolling, scrollLeft, scrollTop, width }) => PropTypes.element
   */
  children: _propTypes2.default.func.isRequired,


  /** Callback to be invoked on-resize: ({ height, width }) */
  onResize: _propTypes2.default.func.isRequired,


  /** Callback to be invoked on-scroll: ({ scrollLeft, scrollTop }) */
  onScroll: _propTypes2.default.func.isRequired,


  /** Element to attach scroll event listeners. Defaults to window. */
  scrollElement: _propTypes2.default.oneOfType([_propTypes2.default.any, function () {
    return (typeof Element === 'function' ? _propTypes2.default.instanceOf(Element) : _propTypes2.default.any).apply(this, arguments);
  }]),

  /**
   * Wait this amount of time after the last scroll event before resetting child `pointer-events`.
   */
  scrollingResetTimeInterval: _propTypes2.default.number.isRequired,


  /** Height used for server-side rendering */
  serverHeight: _propTypes2.default.number.isRequired,


  /** Width used for server-side rendering */
  serverWidth: _propTypes2.default.number.isRequired
};
exports.default = WindowScroller;

/***/ }),

/***/ 1992:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_AnimationTimeoutId = exports.requestAnimationTimeout = exports.cancelAnimationTimeout = undefined;

var _promise = __webpack_require__(2195);

var _promise2 = _interopRequireDefault(_promise);

var _animationFrame = __webpack_require__(2207);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bpfrpt_proptype_AnimationTimeoutId =  true ? null : {
  id: _propTypes2.default.number.isRequired
};
var cancelAnimationTimeout = exports.cancelAnimationTimeout = function cancelAnimationTimeout(frame) {
  return (0, _animationFrame.caf)(frame.id);
};

/**
 * Recursively calls requestAnimationFrame until a specified delay has been met or exceeded.
 * When the delay time has been reached the function you're timing out will be called.
 *
 * Credit: Joe Lambert (https://gist.github.com/joelambert/1002116#file-requesttimeout-js)
 */
var requestAnimationTimeout = exports.requestAnimationTimeout = function requestAnimationTimeout(callback, delay) {
  var start = void 0;
  // wait for end of processing current event handler, because event handler may be long
  _promise2.default.resolve().then(function () {
    start = Date.now();
  });

  var timeout = function timeout() {
    if (Date.now() - start >= delay) {
      callback.call();
    } else {
      frame.id = (0, _animationFrame.raf)(timeout);
    }
  };

  var frame = {
    id: (0, _animationFrame.raf)(timeout)
  };

  return frame;
};
exports.bpfrpt_proptype_AnimationTimeoutId = bpfrpt_proptype_AnimationTimeoutId;

/***/ }),

/***/ 1993:
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(126);
var aFunction = __webpack_require__(669);
var SPECIES = __webpack_require__(68)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ 1994:
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(240);
var invoke = __webpack_require__(2200);
var html = __webpack_require__(675);
var cel = __webpack_require__(388);
var global = __webpack_require__(83);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(243)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ 1995:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ 1996:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(126);
var isObject = __webpack_require__(127);
var newPromiseCapability = __webpack_require__(1986);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ 1997:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createDetectElementResize;
/**
 * Detect Element Resize.
 * https://github.com/sdecima/javascript-detect-element-resize
 * Sebastian Decima
 *
 * Forked from version 0.5.3; includes the following modifications:
 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
 * 4) Add nonce for style element.
 **/

function createDetectElementResize(nonce) {
  // Check `document` and `window` in case of server-side rendering
  var _window;
  if (typeof window !== 'undefined') {
    _window = window;
  } else if (typeof self !== 'undefined') {
    _window = self;
  } else {
    _window = global;
  }

  var attachEvent = typeof document !== 'undefined' && document.attachEvent;

  if (!attachEvent) {
    var requestFrame = function () {
      var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
        return _window.setTimeout(fn, 20);
      };
      return function (fn) {
        return raf(fn);
      };
    }();

    var cancelFrame = function () {
      var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
      return function (id) {
        return cancel(id);
      };
    }();

    var resetTriggers = function resetTriggers(element) {
      var triggers = element.__resizeTriggers__,
          expand = triggers.firstElementChild,
          contract = triggers.lastElementChild,
          expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + 'px';
      expandChild.style.height = expand.offsetHeight + 1 + 'px';
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };

    var checkTriggers = function checkTriggers(element) {
      return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
    };

    var scrollListener = function scrollListener(e) {
      // Don't measure (which forces) reflow for scrolls that happen inside of children!
      if (e.target.className && typeof e.target.className.indexOf === 'function' && e.target.className.indexOf('contract-trigger') < 0 && e.target.className.indexOf('expand-trigger') < 0) {
        return;
      }

      var element = this;
      resetTriggers(this);
      if (this.__resizeRAF__) {
        cancelFrame(this.__resizeRAF__);
      }
      this.__resizeRAF__ = requestFrame(function () {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;
          element.__resizeListeners__.forEach(function (fn) {
            fn.call(element, e);
          });
        }
      });
    };

    /* Detect CSS Animations support to detect element display/re-attach */
    var animation = false,
        keyframeprefix = '',
        animationstartevent = 'animationstart',
        domPrefixes = 'Webkit Moz O ms'.split(' '),
        startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
        pfx = '';
    {
      var elm = document.createElement('fakeelement');
      if (elm.style.animationName !== undefined) {
        animation = true;
      }

      if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
            pfx = domPrefixes[i];
            keyframeprefix = '-' + pfx.toLowerCase() + '-';
            animationstartevent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }

    var animationName = 'resizeanim';
    var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
    var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
  }

  var createStyles = function createStyles(doc) {
    if (!doc.getElementById('detectElementResize')) {
      //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
      var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
          head = doc.head || doc.getElementsByTagName('head')[0],
          style = doc.createElement('style');

      style.id = 'detectElementResize';
      style.type = 'text/css';

      if (nonce != null) {
        style.setAttribute('nonce', nonce);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }

      head.appendChild(style);
    }
  };

  var addResizeListener = function addResizeListener(element, fn) {
    if (attachEvent) {
      element.attachEvent('onresize', fn);
    } else {
      if (!element.__resizeTriggers__) {
        var doc = element.ownerDocument;
        var elementStyle = _window.getComputedStyle(element);
        if (elementStyle && elementStyle.position == 'static') {
          element.style.position = 'relative';
        }
        createStyles(doc);
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = doc.createElement('div')).className = 'resize-triggers';
        element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';
        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener('scroll', scrollListener, true);

        /* Listen for a css animation to detect element display/re-attach */
        if (animationstartevent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
            if (e.animationName == animationName) {
              resetTriggers(element);
            }
          };
          element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
        }
      }
      element.__resizeListeners__.push(fn);
    }
  };

  var removeResizeListener = function removeResizeListener(element, fn) {
    if (attachEvent) {
      element.detachEvent('onresize', fn);
    } else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
      if (!element.__resizeListeners__.length) {
        element.removeEventListener('scroll', scrollListener, true);
        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
          element.__resizeTriggers__.__animationListener__ = null;
        }
        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e) {
          // Preact compat; see developit/preact-compat/issues/228
        }
      }
    }
  };

  return {
    addResizeListener: addResizeListener,
    removeResizeListener: removeResizeListener
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ }),

/***/ 1998:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(2218);

var _keys2 = _interopRequireDefault(_keys);

exports.default = createCallbackMemoizer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Helper utility that updates the specified callback whenever any of the specified indices have changed.
 */
function createCallbackMemoizer() {
  var requireAllKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var cachedIndices = {};

  return function (_ref) {
    var callback = _ref.callback,
        indices = _ref.indices;

    var keys = (0, _keys2.default)(indices);
    var allInitialized = !requireAllKeys || keys.every(function (key) {
      var value = indices[key];
      return Array.isArray(value) ? value.length > 0 : value >= 0;
    });
    var indexChanged = keys.length !== (0, _keys2.default)(cachedIndices).length || keys.some(function (key) {
      var cachedValue = cachedIndices[key];
      var value = indices[key];

      return Array.isArray(value) ? cachedValue.join(',') !== value.join(',') : cachedValue !== value;
    });

    cachedIndices = indices;

    if (allInitialized && indexChanged) {
      callback(indices);
    }
  };
}

/***/ }),

/***/ 1999:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SCROLL_DIRECTION_VERTICAL = exports.SCROLL_DIRECTION_HORIZONTAL = exports.SCROLL_DIRECTION_FORWARD = exports.SCROLL_DIRECTION_BACKWARD = undefined;
exports.default = defaultOverscanIndicesGetter;

var _types = __webpack_require__(1980);

var SCROLL_DIRECTION_BACKWARD = exports.SCROLL_DIRECTION_BACKWARD = -1;

var SCROLL_DIRECTION_FORWARD = exports.SCROLL_DIRECTION_FORWARD = 1;

var SCROLL_DIRECTION_HORIZONTAL = exports.SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
var SCROLL_DIRECTION_VERTICAL = exports.SCROLL_DIRECTION_VERTICAL = 'vertical';

/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 */

function defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;

  if (scrollDirection === SCROLL_DIRECTION_FORWARD) {
    return {
      overscanStartIndex: Math.max(0, startIndex),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex)
    };
  }
}

/***/ }),

/***/ 2000:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultCellRangeRenderer;

var _types = __webpack_require__(1980);

/**
 * Default implementation of cellRangeRenderer used by Grid.
 * This renderer supports cell-caching while the user is scrolling.
 */

function defaultCellRangeRenderer(_ref) {
  var cellCache = _ref.cellCache,
      cellRenderer = _ref.cellRenderer,
      columnSizeAndPositionManager = _ref.columnSizeAndPositionManager,
      columnStartIndex = _ref.columnStartIndex,
      columnStopIndex = _ref.columnStopIndex,
      deferredMeasurementCache = _ref.deferredMeasurementCache,
      horizontalOffsetAdjustment = _ref.horizontalOffsetAdjustment,
      isScrolling = _ref.isScrolling,
      isScrollingOptOut = _ref.isScrollingOptOut,
      parent = _ref.parent,
      rowSizeAndPositionManager = _ref.rowSizeAndPositionManager,
      rowStartIndex = _ref.rowStartIndex,
      rowStopIndex = _ref.rowStopIndex,
      styleCache = _ref.styleCache,
      verticalOffsetAdjustment = _ref.verticalOffsetAdjustment,
      visibleColumnIndices = _ref.visibleColumnIndices,
      visibleRowIndices = _ref.visibleRowIndices;

  var renderedCells = [];

  // Browsers have native size limits for elements (eg Chrome 33M pixels, IE 1.5M pixes).
  // User cannot scroll beyond these size limitations.
  // In order to work around this, ScalingCellSizeAndPositionManager compresses offsets.
  // We should never cache styles for compressed offsets though as this can lead to bugs.
  // See issue #576 for more.
  var areOffsetsAdjusted = columnSizeAndPositionManager.areOffsetsAdjusted() || rowSizeAndPositionManager.areOffsetsAdjusted();

  var canCacheStyle = !isScrolling && !areOffsetsAdjusted;

  for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
    var rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex);

    for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
      var columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex);
      var isVisible = columnIndex >= visibleColumnIndices.start && columnIndex <= visibleColumnIndices.stop && rowIndex >= visibleRowIndices.start && rowIndex <= visibleRowIndices.stop;
      var key = rowIndex + '-' + columnIndex;
      var style = void 0;

      // Cache style objects so shallow-compare doesn't re-render unnecessarily.
      if (canCacheStyle && styleCache[key]) {
        style = styleCache[key];
      } else {
        // In deferred mode, cells will be initially rendered before we know their size.
        // Don't interfere with CellMeasurer's measurements by setting an invalid size.
        if (deferredMeasurementCache && !deferredMeasurementCache.has(rowIndex, columnIndex)) {
          // Position not-yet-measured cells at top/left 0,0,
          // And give them width/height of 'auto' so they can grow larger than the parent Grid if necessary.
          // Positioning them further to the right/bottom influences their measured size.
          style = {
            height: 'auto',
            left: 0,
            position: 'absolute',
            top: 0,
            width: 'auto'
          };
        } else {
          style = {
            height: rowDatum.size,
            left: columnDatum.offset + horizontalOffsetAdjustment,
            position: 'absolute',
            top: rowDatum.offset + verticalOffsetAdjustment,
            width: columnDatum.size
          };

          styleCache[key] = style;
        }
      }

      var cellRendererParams = {
        columnIndex: columnIndex,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent,
        rowIndex: rowIndex,
        style: style
      };

      var renderedCell = void 0;

      // Avoid re-creating cells while scrolling.
      // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
      // If a scroll is in progress- cache and reuse cells.
      // This cache will be thrown away once scrolling completes.
      // However if we are scaling scroll positions and sizes, we should also avoid caching.
      // This is because the offset changes slightly as scroll position changes and caching leads to stale values.
      // For more info refer to issue #395
      //
      // If isScrollingOptOut is specified, we always cache cells.
      // For more info refer to issue #1028
      if ((isScrollingOptOut || isScrolling) && !horizontalOffsetAdjustment && !verticalOffsetAdjustment) {
        if (!cellCache[key]) {
          cellCache[key] = cellRenderer(cellRendererParams);
        }

        renderedCell = cellCache[key];

        // If the user is no longer scrolling, don't cache cells.
        // This makes dynamic cell content difficult for users and would also lead to a heavier memory footprint.
      } else {
        renderedCell = cellRenderer(cellRendererParams);
      }

      if (renderedCell == null || renderedCell === false) {
        continue;
      }

      if (false) {
        warnAboutMissingStyle(parent, renderedCell);
      }

      renderedCells.push(renderedCell);
    }
  }

  return renderedCells;
}

function warnAboutMissingStyle(parent, renderedCell) {
  if (false) {
    if (renderedCell) {
      // If the direct child is a CellMeasurer, then we should check its child
      // See issue #611
      if (renderedCell.type && renderedCell.type.__internalCellMeasurerFlag) {
        renderedCell = renderedCell.props.children;
      }

      if (renderedCell && renderedCell.props && renderedCell.props.style === undefined && parent.__warnedAboutMissingStyle !== true) {
        parent.__warnedAboutMissingStyle = true;

        console.warn('Rendered cell should include style property for positioning.');
      }
    }
  }
}

/***/ }),

/***/ 2001:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_Scroll = exports.bpfrpt_proptype_RenderedRows = exports.bpfrpt_proptype_RowRenderer = exports.bpfrpt_proptype_RowRendererParams = undefined;

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var bpfrpt_proptype_RowRendererParams =  true ? null : {
  index: _propTypes2.default.number.isRequired,
  isScrolling: _propTypes2.default.bool.isRequired,
  isVisible: _propTypes2.default.bool.isRequired,
  key: _propTypes2.default.string.isRequired,
  parent: _propTypes2.default.object.isRequired,
  style: _propTypes2.default.object.isRequired
};
var bpfrpt_proptype_RowRenderer =  true ? null : _propTypes2.default.func;
var bpfrpt_proptype_RenderedRows =  true ? null : {
  overscanStartIndex: _propTypes2.default.number.isRequired,
  overscanStopIndex: _propTypes2.default.number.isRequired,
  startIndex: _propTypes2.default.number.isRequired,
  stopIndex: _propTypes2.default.number.isRequired
};
var bpfrpt_proptype_Scroll =  true ? null : {
  clientHeight: _propTypes2.default.number.isRequired,
  scrollHeight: _propTypes2.default.number.isRequired,
  scrollTop: _propTypes2.default.number.isRequired
};
exports.bpfrpt_proptype_RowRendererParams = bpfrpt_proptype_RowRendererParams;
exports.bpfrpt_proptype_RowRenderer = bpfrpt_proptype_RowRenderer;
exports.bpfrpt_proptype_RenderedRows = bpfrpt_proptype_RenderedRows;
exports.bpfrpt_proptype_Scroll = bpfrpt_proptype_Scroll;

/***/ }),

/***/ 2187:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "基础列表。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Basic list."
      ]
    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "基础列表",
      "en-US": "Basic list"
    },
    "filename": "components/list/demo/basic.md",
    "id": "components-list-demo-basic"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Avatar <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Ant Design Title 1'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Ant Design Title 2'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Ant Design Title 3'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Ant Design Title 4'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span>\n    <span class=\"token attr-name\">itemLayout</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>horizontal<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item.Meta</span>\n          <span class=\"token attr-name\">avatar={&lt;Avatar</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">title={&lt;a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://ant.design<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n          description<span class=\"token operator\">=</span><span class=\"token string\">\"Ant Design, a design language for background applications, is refined by Ant UED Team\"</span>\n        <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var data = [{
    title: 'Ant Design Title 1'
  }, {
    title: 'Ant Design Title 2'
  }, {
    title: 'Ant Design Title 3'
  }, {
    title: 'Ant Design Title 4'
  }];
  return React.createElement(_antd.List, {
    itemLayout: "horizontal",
    dataSource: data,
    renderItem: function renderItem(item) {
      return React.createElement(
        _antd.List.Item,
        null,
        React.createElement(_antd.List.Item.Meta, {
          avatar: React.createElement(_antd.Avatar, {
            src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          }),
          title: React.createElement(
            "a",
            {
              href: "https://ant.design"
            },
            item.title
          ),
          description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
        })
      );
    }
  });
}
};

/***/ }),

/***/ 2188:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可以通过设置 ",
        [
          "code",
          "List"
        ],
        " 的 ",
        [
          "code",
          "grid"
        ],
        " 属性来实现栅格列表，",
        [
          "code",
          "column"
        ],
        " 可设置期望显示的列数。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Creating a grid list by setting the ",
        [
          "code",
          "grid"
        ],
        " property of List"
      ]
    ]
  },
  "meta": {
    "order": 4,
    "title": {
      "zh-CN": "栅格列表",
      "en-US": "Grid"
    },
    "filename": "components/list/demo/grid.md",
    "id": "components-list-demo-grid"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Card <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Title 1'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Title 2'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Title 3'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Title 4'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span>\n    <span class=\"token attr-name\">grid</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> gutter<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> column<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>Card title<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Card content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Card</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var data = [{
    title: 'Title 1'
  }, {
    title: 'Title 2'
  }, {
    title: 'Title 3'
  }, {
    title: 'Title 4'
  }];
  return React.createElement(_antd.List, {
    grid: {
      gutter: 16,
      column: 4
    },
    dataSource: data,
    renderItem: function renderItem(item) {
      return React.createElement(
        _antd.List.Item,
        null,
        React.createElement(
          _antd.Card,
          {
            title: item.title
          },
          "Card content"
        )
      );
    }
  });
}
};

/***/ }),

/***/ 2189:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "结合 ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/CassetteRocks/react-infinite-scroller"
          },
          "react-infinite-scroller"
        ],
        " 实现滚动自动加载列表。"
      ]
    ],
    "en-US": [
      [
        "p",
        "The example of infinite load with ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/CassetteRocks/react-infinite-scroller"
          },
          "react-infinite-scroller"
        ],
        "."
      ]
    ]
  },
  "meta": {
    "order": 6,
    "title": {
      "zh-CN": "滚动加载",
      "en-US": "Scrolling loaded"
    },
    "filename": "components/list/demo/infinite-load.md",
    "id": "components-list-demo-infinite-load"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">,</span> Avatar<span class=\"token punctuation\">,</span> Spin <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> reqwest <span class=\"token keyword\">from</span> <span class=\"token string\">'reqwest'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">import</span> InfiniteScroll <span class=\"token keyword\">from</span> <span class=\"token string\">'react-infinite-scroller'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> fakeDataUrl <span class=\"token operator\">=</span> <span class=\"token string\">'https://randomuser.me/api/?results=5&amp;inc=name,gender,email,nat&amp;noinfo'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">InfiniteListExample</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    data<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    hasMore<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span>\n\n  getData <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>callback<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">reqwest</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      url<span class=\"token punctuation\">:</span> fakeDataUrl<span class=\"token punctuation\">,</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'json'</span><span class=\"token punctuation\">,</span>\n      method<span class=\"token punctuation\">:</span> <span class=\"token string\">'get'</span><span class=\"token punctuation\">,</span>\n      contentType<span class=\"token punctuation\">:</span> <span class=\"token string\">'application/json'</span><span class=\"token punctuation\">,</span>\n      success<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">getData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        data<span class=\"token punctuation\">:</span> res<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleInfiniteOnLoad <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> data <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">14</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">warning</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Infinite List loaded all'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        hasMore<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">getData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      data <span class=\"token operator\">=</span> data<span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        data<span class=\"token punctuation\">,</span>\n        loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo-infinite-container<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InfiniteScroll</span>\n          <span class=\"token attr-name\">initialLoad</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">pageStart</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">0</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">loadMore</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInfiniteOnLoad<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">hasMore</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">!</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading <span class=\"token operator\">&amp;&amp;</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>hasMore<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">useWindow</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span>\n            <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n              <span class=\"token operator\">&lt;</span>List<span class=\"token punctuation\">.</span>Item key<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>id<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item.Meta</span>\n                  <span class=\"token attr-name\">avatar={&lt;Avatar</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span>\n                  title<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://ant.design<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span>last<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n                  description<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>email<span class=\"token punctuation\">}</span>\n                <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>Content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token operator\">></span>\n            <span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading <span class=\"token operator\">&amp;&amp;</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>hasMore <span class=\"token operator\">&amp;&amp;</span> <span class=\"token punctuation\">(</span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo-loading-container<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Spin</span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>InfiniteScroll</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InfiniteListExample</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  var _reqwest = __webpack_require__(1981);

  var _reqwest2 = _interopRequireDefault(_reqwest);

  var _reactInfiniteScroller = __webpack_require__(2190);

  var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

  var InfiniteListExample = function (_React$Component) {
    _inherits(InfiniteListExample, _React$Component);

    function InfiniteListExample() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, InfiniteListExample);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InfiniteListExample.__proto__ || Object.getPrototypeOf(InfiniteListExample)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        data: [],
        loading: false,
        hasMore: true
      }, _this.getData = function (callback) {
        (0, _reqwest2.default)({
          url: fakeDataUrl,
          type: 'json',
          method: 'get',
          contentType: 'application/json',
          success: function success(res) {
            callback(res);
          }
        });
      }, _this.handleInfiniteOnLoad = function () {
        var data = _this.state.data;

        _this.setState({
          loading: true
        });

        if (data.length > 14) {
          _antd.message.warning('Infinite List loaded all');

          _this.setState({
            hasMore: false,
            loading: false
          });

          return;
        }

        _this.getData(function (res) {
          data = data.concat(res.results);

          _this.setState({
            data: data,
            loading: false
          });
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(InfiniteListExample, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.getData(function (res) {
          _this2.setState({
            data: res.results
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          {
            className: "demo-infinite-container"
          },
          React.createElement(
            _reactInfiniteScroller2.default,
            {
              initialLoad: false,
              pageStart: 0,
              loadMore: this.handleInfiniteOnLoad,
              hasMore: !this.state.loading && this.state.hasMore,
              useWindow: false
            },
            React.createElement(
              _antd.List,
              {
                dataSource: this.state.data,
                renderItem: function renderItem(item) {
                  return React.createElement(
                    _antd.List.Item,
                    {
                      key: item.id
                    },
                    React.createElement(_antd.List.Item.Meta, {
                      avatar: React.createElement(_antd.Avatar, {
                        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      }),
                      title: React.createElement(
                        "a",
                        {
                          href: "https://ant.design"
                        },
                        item.name.last
                      ),
                      description: item.email
                    }),
                    React.createElement(
                      "div",
                      null,
                      "Content"
                    )
                  );
                }
              },
              this.state.loading && this.state.hasMore && React.createElement(
                "div",
                {
                  className: "demo-loading-container"
                },
                React.createElement(_antd.Spin, null)
              )
            )
          )
        );
      }
    }]);

    return InfiniteListExample;
  }(React.Component);

  return React.createElement(InfiniteListExample, null);
},
  "style": ".demo-infinite-container {\n  border: 1px solid #e8e8e8;\n  border-radius: 4px;\n  overflow: auto;\n  padding: 8px 24px;\n  height: 300px;\n}\n.demo-loading-container {\n  position: absolute;\n  bottom: 40px;\n  width: 100%;\n  text-align: center;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.demo-infinite-container</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">border</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e8e8e8</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">overflow</span><span class=\"token punctuation\">:</span> auto<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">300</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.demo-loading-container</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">40</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ 2190:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2191)


/***/ }),

/***/ 2191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfiniteScroll = function (_Component) {
  _inherits(InfiniteScroll, _Component);

  function InfiniteScroll(props) {
    _classCallCheck(this, InfiniteScroll);

    var _this = _possibleConstructorReturn(this, (InfiniteScroll.__proto__ || Object.getPrototypeOf(InfiniteScroll)).call(this, props));

    _this.scrollListener = _this.scrollListener.bind(_this);
    return _this;
  }

  _createClass(InfiniteScroll, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.pageLoaded = this.props.pageStart;
      this.attachScrollListener();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.attachScrollListener();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.detachScrollListener();
      this.detachMousewheelListener();
    }

    // Set a defaut loader for all your `InfiniteScroll` components

  }, {
    key: 'setDefaultLoader',
    value: function setDefaultLoader(loader) {
      this.defaultLoader = loader;
    }
  }, {
    key: 'detachMousewheelListener',
    value: function detachMousewheelListener() {
      var scrollEl = window;
      if (this.props.useWindow === false) {
        scrollEl = this.scrollComponent.parentNode;
      }

      scrollEl.removeEventListener('mousewheel', this.mousewheelListener, this.props.useCapture);
    }
  }, {
    key: 'detachScrollListener',
    value: function detachScrollListener() {
      var scrollEl = window;
      if (this.props.useWindow === false) {
        scrollEl = this.getParentElement(this.scrollComponent);
      }

      scrollEl.removeEventListener('scroll', this.scrollListener, this.props.useCapture);
      scrollEl.removeEventListener('resize', this.scrollListener, this.props.useCapture);
    }
  }, {
    key: 'getParentElement',
    value: function getParentElement(el) {
      var scrollParent = this.props.getScrollParent && this.props.getScrollParent();
      if (scrollParent != null) {
        return scrollParent;
      }
      return el && el.parentNode;
    }
  }, {
    key: 'filterProps',
    value: function filterProps(props) {
      return props;
    }
  }, {
    key: 'attachScrollListener',
    value: function attachScrollListener() {
      var parentElement = this.getParentElement(this.scrollComponent);

      if (!this.props.hasMore || !parentElement) {
        return;
      }

      var scrollEl = window;
      if (this.props.useWindow === false) {
        scrollEl = parentElement;
      }

      scrollEl.addEventListener('mousewheel', this.mousewheelListener, this.props.useCapture);
      scrollEl.addEventListener('scroll', this.scrollListener, this.props.useCapture);
      scrollEl.addEventListener('resize', this.scrollListener, this.props.useCapture);

      if (this.props.initialLoad) {
        this.scrollListener();
      }
    }
  }, {
    key: 'mousewheelListener',
    value: function mousewheelListener(e) {
      // Prevents Chrome hangups
      // See: https://stackoverflow.com/questions/47524205/random-high-content-download-time-in-chrome/47684257#47684257
      if (e.deltaY === 1) {
        e.preventDefault();
      }
    }
  }, {
    key: 'scrollListener',
    value: function scrollListener() {
      var el = this.scrollComponent;
      var scrollEl = window;
      var parentNode = this.getParentElement(el);

      var offset = void 0;
      if (this.props.useWindow) {
        var doc = document.documentElement || document.body.parentNode || document.body;
        var scrollTop = scrollEl.pageYOffset !== undefined ? scrollEl.pageYOffset : doc.scrollTop;
        if (this.props.isReverse) {
          offset = scrollTop;
        } else {
          offset = this.calculateOffset(el, scrollTop);
        }
      } else if (this.props.isReverse) {
        offset = parentNode.scrollTop;
      } else {
        offset = el.scrollHeight - parentNode.scrollTop - parentNode.clientHeight;
      }

      // Here we make sure the element is visible as well as checking the offset
      if (offset < Number(this.props.threshold) && el && el.offsetParent !== null) {
        this.detachScrollListener();
        // Call loadMore after detachScrollListener to allow for non-async loadMore functions
        if (typeof this.props.loadMore === 'function') {
          this.props.loadMore(this.pageLoaded += 1);
        }
      }
    }
  }, {
    key: 'calculateOffset',
    value: function calculateOffset(el, scrollTop) {
      if (!el) {
        return 0;
      }

      return this.calculateTopPosition(el) + (el.offsetHeight - scrollTop - window.innerHeight);
    }
  }, {
    key: 'calculateTopPosition',
    value: function calculateTopPosition(el) {
      if (!el) {
        return 0;
      }
      return el.offsetTop + this.calculateTopPosition(el.offsetParent);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var renderProps = this.filterProps(this.props);

      var children = renderProps.children,
          element = renderProps.element,
          hasMore = renderProps.hasMore,
          initialLoad = renderProps.initialLoad,
          isReverse = renderProps.isReverse,
          loader = renderProps.loader,
          loadMore = renderProps.loadMore,
          pageStart = renderProps.pageStart,
          ref = renderProps.ref,
          threshold = renderProps.threshold,
          useCapture = renderProps.useCapture,
          useWindow = renderProps.useWindow,
          getScrollParent = renderProps.getScrollParent,
          props = _objectWithoutProperties(renderProps, ['children', 'element', 'hasMore', 'initialLoad', 'isReverse', 'loader', 'loadMore', 'pageStart', 'ref', 'threshold', 'useCapture', 'useWindow', 'getScrollParent']);

      props.ref = function (node) {
        _this2.scrollComponent = node;
        if (ref) {
          ref(node);
        }
      };

      var childrenArray = [children];
      if (hasMore) {
        if (loader) {
          isReverse ? childrenArray.unshift(loader) : childrenArray.push(loader);
        } else if (this.defaultLoader) {
          isReverse ? childrenArray.unshift(this.defaultLoader) : childrenArray.push(this.defaultLoader);
        }
      }
      return _react2.default.createElement(element, props, childrenArray);
    }
  }]);

  return InfiniteScroll;
}(_react.Component);

InfiniteScroll.propTypes = {
  children: _propTypes2.default.node.isRequired,
  element: _propTypes2.default.node,
  hasMore: _propTypes2.default.bool,
  initialLoad: _propTypes2.default.bool,
  isReverse: _propTypes2.default.bool,
  loader: _propTypes2.default.node,
  loadMore: _propTypes2.default.func.isRequired,
  pageStart: _propTypes2.default.number,
  ref: _propTypes2.default.func,
  getScrollParent: _propTypes2.default.func,
  threshold: _propTypes2.default.number,
  useCapture: _propTypes2.default.bool,
  useWindow: _propTypes2.default.bool
};
InfiniteScroll.defaultProps = {
  element: 'div',
  hasMore: false,
  initialLoad: true,
  pageStart: 0,
  ref: null,
  threshold: 250,
  useWindow: true,
  isReverse: false,
  useCapture: false,
  loader: null,
  getScrollParent: null
};
exports.default = InfiniteScroll;
module.exports = exports['default'];


/***/ }),

/***/ 2192:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "结合 ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/bvaughn/react-virtualized"
          },
          "react-virtualized"
        ],
        " 实现滚动加载无限长列表，带有虚拟化（",
        [
          "a",
          {
            "title": null,
            "href": "https://blog.jscrambler.com/optimizing-react-rendering-through-virtualization/"
          },
          "virtualization"
        ],
        "）功能，能够提高数据量大时候长列表的性能。"
      ],
      [
        "p",
        [
          "code",
          "virtualized"
        ],
        " 是在大数据列表中应用的一种技术，主要是为了减少不可见区域不必要的渲染从而提高性能，特别是数据量在成千上万条效果尤为明显。",
        [
          "a",
          {
            "title": null,
            "href": "https://blog.jscrambler.com/optimizing-react-rendering-through-virtualization/"
          },
          "了解更多"
        ]
      ]
    ],
    "en-US": [
      [
        "p",
        "An example of infinite list & virtualized loading using ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/bvaughn/react-virtualized"
          },
          "react-virtualized"
        ],
        ". ",
        [
          "a",
          {
            "title": null,
            "href": "https://blog.jscrambler.com/optimizing-react-rendering-through-virtualization/"
          },
          "Learn more"
        ]
      ],
      [
        "p",
        [
          "code",
          "Virtualized"
        ],
        " rendering is a technique to mount big sets of data. It reduces the amount of rendered DOM nodes by tracking and hiding whatever isn't currently visible."
      ]
    ]
  },
  "meta": {
    "order": 7,
    "title": {
      "zh-CN": "滚动加载无限长列表",
      "en-US": "Infinite & virtualized"
    },
    "filename": "components/list/demo/infinite-virtualized-load.md",
    "id": "components-list-demo-infinite-virtualized-load"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">,</span> Avatar<span class=\"token punctuation\">,</span> Spin <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">import</span> reqwest <span class=\"token keyword\">from</span> <span class=\"token string\">'reqwest'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">import</span> WindowScroller <span class=\"token keyword\">from</span> <span class=\"token string\">'react-virtualized/dist/commonjs/WindowScroller'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> AutoSizer <span class=\"token keyword\">from</span> <span class=\"token string\">'react-virtualized/dist/commonjs/AutoSizer'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> VList <span class=\"token keyword\">from</span> <span class=\"token string\">'react-virtualized/dist/commonjs/List'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> InfiniteLoader <span class=\"token keyword\">from</span> <span class=\"token string\">'react-virtualized/dist/commonjs/InfiniteLoader'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> fakeDataUrl <span class=\"token operator\">=</span> <span class=\"token string\">'https://randomuser.me/api/?results=5&amp;inc=name,gender,email,nat&amp;noinfo'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">VirtualizedExample</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    data<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span>\n\n  loadedRowsMap <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span>\n\n  getData <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>callback<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">reqwest</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      url<span class=\"token punctuation\">:</span> fakeDataUrl<span class=\"token punctuation\">,</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'json'</span><span class=\"token punctuation\">,</span>\n      method<span class=\"token punctuation\">:</span> <span class=\"token string\">'get'</span><span class=\"token punctuation\">,</span>\n      contentType<span class=\"token punctuation\">:</span> <span class=\"token string\">'application/json'</span><span class=\"token punctuation\">,</span>\n      success<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">getData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        data<span class=\"token punctuation\">:</span> res<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleInfiniteOnLoad <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> startIndex<span class=\"token punctuation\">,</span> stopIndex <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> data <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> startIndex<span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;=</span> stopIndex<span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token comment\" spellcheck=\"true\">// 1 means loading</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>loadedRowsMap<span class=\"token punctuation\">[</span>i<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">19</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">warning</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Virtualized List loaded all'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">getData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      data <span class=\"token operator\">=</span> data<span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        data<span class=\"token punctuation\">,</span>\n        loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  isRowLoaded <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> index <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token operator\">!</span><span class=\"token operator\">!</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>loadedRowsMap<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  renderItem <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> index<span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">,</span> style <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> data <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> item <span class=\"token operator\">=</span> data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>key<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>style<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item.Meta</span>\n          <span class=\"token attr-name\">avatar={&lt;Avatar</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span>\n          title<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://ant.design<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span>last<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n          description<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>email<span class=\"token punctuation\">}</span>\n        <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>Content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> data <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> vlist <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> height<span class=\"token punctuation\">,</span> isScrolling<span class=\"token punctuation\">,</span> onChildScroll<span class=\"token punctuation\">,</span> scrollTop<span class=\"token punctuation\">,</span> onRowsRendered<span class=\"token punctuation\">,</span> width <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>VList</span>\n        <span class=\"token attr-name\">autoHeight</span>\n        <span class=\"token attr-name\">height</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>height<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">isScrolling</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>isScrolling<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onScroll</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChildScroll<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">overscanRowCount</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">2</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">rowCount</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">rowHeight</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">73</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">rowRenderer</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>renderItem<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onRowsRendered</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onRowsRendered<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">scrollTop</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>scrollTop<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">width</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>width<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> autoSize <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> height<span class=\"token punctuation\">,</span> isScrolling<span class=\"token punctuation\">,</span> onChildScroll<span class=\"token punctuation\">,</span> scrollTop<span class=\"token punctuation\">,</span> onRowsRendered <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>AutoSizer</span> <span class=\"token attr-name\">disableHeight</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> width <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">vlist</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> height<span class=\"token punctuation\">,</span> isScrolling<span class=\"token punctuation\">,</span> onChildScroll<span class=\"token punctuation\">,</span> scrollTop<span class=\"token punctuation\">,</span> onRowsRendered<span class=\"token punctuation\">,</span> width <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>AutoSizer</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> infiniteLoader <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> height<span class=\"token punctuation\">,</span> isScrolling<span class=\"token punctuation\">,</span> onChildScroll<span class=\"token punctuation\">,</span> scrollTop <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InfiniteLoader</span>\n        <span class=\"token attr-name\">isRowLoaded</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>isRowLoaded<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">loadMoreRows</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInfiniteOnLoad<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">rowCount</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> onRowsRendered <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">autoSize</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> height<span class=\"token punctuation\">,</span> isScrolling<span class=\"token punctuation\">,</span> onChildScroll<span class=\"token punctuation\">,</span> scrollTop<span class=\"token punctuation\">,</span> onRowsRendered <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>InfiniteLoader</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>\n          data<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">0</span> <span class=\"token operator\">&amp;&amp;</span> <span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>WindowScroller</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">{</span>infiniteLoader<span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>WindowScroller</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span>\n        <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading <span class=\"token operator\">&amp;&amp;</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Spin</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo-loading<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>VirtualizedExample</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  var _reqwest = __webpack_require__(1981);

  var _reqwest2 = _interopRequireDefault(_reqwest);

  var _WindowScroller = __webpack_require__(2193);

  var _WindowScroller2 = _interopRequireDefault(_WindowScroller);

  var _AutoSizer = __webpack_require__(2209);

  var _AutoSizer2 = _interopRequireDefault(_AutoSizer);

  var _List = __webpack_require__(2211);

  var _List2 = _interopRequireDefault(_List);

  var _InfiniteLoader = __webpack_require__(2225);

  var _InfiniteLoader2 = _interopRequireDefault(_InfiniteLoader);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

  var VirtualizedExample = function (_React$Component) {
    _inherits(VirtualizedExample, _React$Component);

    function VirtualizedExample() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, VirtualizedExample);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VirtualizedExample.__proto__ || Object.getPrototypeOf(VirtualizedExample)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        data: [],
        loading: false
      }, _this.loadedRowsMap = {}, _this.getData = function (callback) {
        (0, _reqwest2.default)({
          url: fakeDataUrl,
          type: 'json',
          method: 'get',
          contentType: 'application/json',
          success: function success(res) {
            callback(res);
          }
        });
      }, _this.handleInfiniteOnLoad = function (_ref2) {
        var startIndex = _ref2.startIndex,
            stopIndex = _ref2.stopIndex;
        var data = _this.state.data;

        _this.setState({
          loading: true
        });

        for (var i = startIndex; i <= stopIndex; i++) {
          // 1 means loading
          _this.loadedRowsMap[i] = 1;
        }

        if (data.length > 19) {
          _antd.message.warning('Virtualized List loaded all');

          _this.setState({
            loading: false
          });

          return;
        }

        _this.getData(function (res) {
          data = data.concat(res.results);

          _this.setState({
            data: data,
            loading: false
          });
        });
      }, _this.isRowLoaded = function (_ref3) {
        var index = _ref3.index;
        return !!_this.loadedRowsMap[index];
      }, _this.renderItem = function (_ref4) {
        var index = _ref4.index,
            key = _ref4.key,
            style = _ref4.style;
        var data = _this.state.data;
        var item = data[index];
        return React.createElement(
          _antd.List.Item,
          {
            key: key,
            style: style
          },
          React.createElement(_antd.List.Item.Meta, {
            avatar: React.createElement(_antd.Avatar, {
              src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            }),
            title: React.createElement(
              "a",
              {
                href: "https://ant.design"
              },
              item.name.last
            ),
            description: item.email
          }),
          React.createElement(
            "div",
            null,
            "Content"
          )
        );
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(VirtualizedExample, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.getData(function (res) {
          _this2.setState({
            data: res.results
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var data = this.state.data;

        var vlist = function vlist(_ref5) {
          var height = _ref5.height,
              isScrolling = _ref5.isScrolling,
              onChildScroll = _ref5.onChildScroll,
              scrollTop = _ref5.scrollTop,
              onRowsRendered = _ref5.onRowsRendered,
              width = _ref5.width;
          return React.createElement(_List2.default, {
            autoHeight: true,
            height: height,
            isScrolling: isScrolling,
            onScroll: onChildScroll,
            overscanRowCount: 2,
            rowCount: data.length,
            rowHeight: 73,
            rowRenderer: _this3.renderItem,
            onRowsRendered: onRowsRendered,
            scrollTop: scrollTop,
            width: width
          });
        };

        var autoSize = function autoSize(_ref6) {
          var height = _ref6.height,
              isScrolling = _ref6.isScrolling,
              onChildScroll = _ref6.onChildScroll,
              scrollTop = _ref6.scrollTop,
              onRowsRendered = _ref6.onRowsRendered;
          return React.createElement(
            _AutoSizer2.default,
            {
              disableHeight: true
            },
            function (_ref7) {
              var width = _ref7.width;
              return vlist({
                height: height,
                isScrolling: isScrolling,
                onChildScroll: onChildScroll,
                scrollTop: scrollTop,
                onRowsRendered: onRowsRendered,
                width: width
              });
            }
          );
        };

        var infiniteLoader = function infiniteLoader(_ref8) {
          var height = _ref8.height,
              isScrolling = _ref8.isScrolling,
              onChildScroll = _ref8.onChildScroll,
              scrollTop = _ref8.scrollTop;
          return React.createElement(
            _InfiniteLoader2.default,
            {
              isRowLoaded: _this3.isRowLoaded,
              loadMoreRows: _this3.handleInfiniteOnLoad,
              rowCount: data.length
            },
            function (_ref9) {
              var onRowsRendered = _ref9.onRowsRendered;
              return autoSize({
                height: height,
                isScrolling: isScrolling,
                onChildScroll: onChildScroll,
                scrollTop: scrollTop,
                onRowsRendered: onRowsRendered
              });
            }
          );
        };

        return React.createElement(
          _antd.List,
          null,
          data.length > 0 && React.createElement(
            _WindowScroller2.default,
            null,
            infiniteLoader
          ),
          this.state.loading && React.createElement(_antd.Spin, {
            className: "demo-loading"
          })
        );
      }
    }]);

    return VirtualizedExample;
  }(React.Component);

  return React.createElement(VirtualizedExample, null);
},
  "style": ".demo-loading {\n  position: absolute;\n  bottom: -40px;\n  left: 50%;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.demo-loading</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">bottom</span><span class=\"token punctuation\">:</span> -<span class=\"token number\">40</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">left</span><span class=\"token punctuation\">:</span> <span class=\"token number\">50%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ 2193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IS_SCROLLING_TIMEOUT = exports.WindowScroller = undefined;

var _WindowScroller = __webpack_require__(1991);

var _WindowScroller2 = _interopRequireDefault(_WindowScroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _WindowScroller2.default;
exports.WindowScroller = _WindowScroller2.default;
exports.IS_SCROLLING_TIMEOUT = _WindowScroller.IS_SCROLLING_TIMEOUT;

/***/ }),

/***/ 2194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerScrollListener = registerScrollListener;
exports.unregisterScrollListener = unregisterScrollListener;

var _requestAnimationTimeout = __webpack_require__(1992);

var _WindowScroller = __webpack_require__(1991);

var mountedInstances = [];

var originalBodyPointerEvents = null;
var disablePointerEventsTimeoutId = null;

function enablePointerEventsIfDisabled() {
  if (disablePointerEventsTimeoutId) {
    disablePointerEventsTimeoutId = null;

    if (document.body && originalBodyPointerEvents != null) {
      document.body.style.pointerEvents = originalBodyPointerEvents;
    }

    originalBodyPointerEvents = null;
  }
}

function enablePointerEventsAfterDelayCallback() {
  enablePointerEventsIfDisabled();
  mountedInstances.forEach(function (instance) {
    return instance.__resetIsScrolling();
  });
}

function enablePointerEventsAfterDelay() {
  if (disablePointerEventsTimeoutId) {
    (0, _requestAnimationTimeout.cancelAnimationTimeout)(disablePointerEventsTimeoutId);
  }

  var maximumTimeout = 0;
  mountedInstances.forEach(function (instance) {
    maximumTimeout = Math.max(maximumTimeout, instance.props.scrollingResetTimeInterval);
  });

  disablePointerEventsTimeoutId = (0, _requestAnimationTimeout.requestAnimationTimeout)(enablePointerEventsAfterDelayCallback, maximumTimeout);
}

function onScrollWindow(event) {
  if (event.currentTarget === window && originalBodyPointerEvents == null && document.body) {
    originalBodyPointerEvents = document.body.style.pointerEvents;

    document.body.style.pointerEvents = 'none';
  }
  enablePointerEventsAfterDelay();
  mountedInstances.forEach(function (instance) {
    if (instance.props.scrollElement === event.currentTarget) {
      instance.__handleWindowScrollEvent();
    }
  });
}

function registerScrollListener(component, element) {
  if (!mountedInstances.some(function (instance) {
    return instance.props.scrollElement === element;
  })) {
    element.addEventListener('scroll', onScrollWindow);
  }
  mountedInstances.push(component);
}

function unregisterScrollListener(component, element) {
  mountedInstances = mountedInstances.filter(function (instance) {
    return instance !== component;
  });
  if (!mountedInstances.length) {
    element.removeEventListener('scroll', onScrollWindow);
    if (disablePointerEventsTimeoutId) {
      (0, _requestAnimationTimeout.cancelAnimationTimeout)(disablePointerEventsTimeoutId);
      enablePointerEventsIfDisabled();
    }
  }
}

/***/ }),

/***/ 2195:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(2196), __esModule: true };

/***/ }),

/***/ 2196:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(677);
__webpack_require__(390);
__webpack_require__(676);
__webpack_require__(2197);
__webpack_require__(2205);
__webpack_require__(2206);
module.exports = __webpack_require__(45).Promise;


/***/ }),

/***/ 2197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(181);
var global = __webpack_require__(83);
var ctx = __webpack_require__(240);
var classof = __webpack_require__(682);
var $export = __webpack_require__(84);
var isObject = __webpack_require__(127);
var aFunction = __webpack_require__(669);
var anInstance = __webpack_require__(2198);
var forOf = __webpack_require__(2199);
var speciesConstructor = __webpack_require__(1993);
var task = __webpack_require__(1994).set;
var microtask = __webpack_require__(2201)();
var newPromiseCapabilityModule = __webpack_require__(1986);
var perform = __webpack_require__(1995);
var userAgent = __webpack_require__(2202);
var promiseResolve = __webpack_require__(1996);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(68)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(2203)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(247)($Promise, PROMISE);
__webpack_require__(2204)(PROMISE);
Wrapper = __webpack_require__(45)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(683)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ 2198:
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ 2199:
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(240);
var call = __webpack_require__(679);
var isArrayIter = __webpack_require__(680);
var anObject = __webpack_require__(126);
var toLength = __webpack_require__(389);
var getIterFn = __webpack_require__(681);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ 2200:
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ 2201:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(83);
var macrotask = __webpack_require__(1994).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(243)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ 2202:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(83);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ 2203:
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(128);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ 2204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(83);
var core = __webpack_require__(45);
var dP = __webpack_require__(85);
var DESCRIPTORS = __webpack_require__(97);
var SPECIES = __webpack_require__(68)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ 2205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(84);
var core = __webpack_require__(45);
var global = __webpack_require__(83);
var speciesConstructor = __webpack_require__(1993);
var promiseResolve = __webpack_require__(1996);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ 2206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(84);
var newPromiseCapability = __webpack_require__(1986);
var perform = __webpack_require__(1995);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ 2207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


// Properly handle server-side rendering.
var win = void 0;

if (typeof window !== 'undefined') {
  win = window;
} else if (typeof self !== 'undefined') {
  win = self;
} else {
  win = {};
}

// requestAnimationFrame() shim by Paul Irish
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
var request = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame || function (callback) {
  return win.setTimeout(callback, 1000 / 60);
};

var cancel = win.cancelAnimationFrame || win.webkitCancelAnimationFrame || win.mozCancelAnimationFrame || win.oCancelAnimationFrame || win.msCancelAnimationFrame || function (id) {
  win.clearTimeout(id);
};

var raf = exports.raf = request;
var caf = exports.caf = cancel;

/***/ }),

/***/ 2208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDimensions = getDimensions;
exports.getPositionOffset = getPositionOffset;
exports.getScrollOffset = getScrollOffset;


/**
 * Gets the dimensions of the element, accounting for API differences between
 * `window` and other DOM elements.
 */

var isWindow = function isWindow(element) {
  return element === window;
};

// TODO Move this into WindowScroller and import from there


var getBoundingBox = function getBoundingBox(element) {
  return element.getBoundingClientRect();
};

function getDimensions(scrollElement, props) {
  if (!scrollElement) {
    return {
      height: props.serverHeight,
      width: props.serverWidth
    };
  } else if (isWindow(scrollElement)) {
    var _window = window,
        innerHeight = _window.innerHeight,
        innerWidth = _window.innerWidth;

    return {
      height: typeof innerHeight === 'number' ? innerHeight : 0,
      width: typeof innerWidth === 'number' ? innerWidth : 0
    };
  } else {
    return getBoundingBox(scrollElement);
  }
}

/**
 * Gets the vertical and horizontal position of an element within its scroll container.
 * Elements that have been “scrolled past” return negative values.
 * Handles edge-case where a user is navigating back (history) from an already-scrolled page.
 * In this case the body’s top or left position will be a negative number and this element’s top or left will be increased (by that amount).
 */
function getPositionOffset(element, container) {
  if (isWindow(container) && document.documentElement) {
    var containerElement = document.documentElement;
    var elementRect = getBoundingBox(element);
    var containerRect = getBoundingBox(containerElement);
    return {
      top: elementRect.top - containerRect.top,
      left: elementRect.left - containerRect.left
    };
  } else {
    var scrollOffset = getScrollOffset(container);
    var _elementRect = getBoundingBox(element);
    var _containerRect = getBoundingBox(container);
    return {
      top: _elementRect.top + scrollOffset.top - _containerRect.top,
      left: _elementRect.left + scrollOffset.left - _containerRect.left
    };
  }
}

/**
 * Gets the vertical and horizontal scroll amount of the element, accounting for IE compatibility
 * and API differences between `window` and other DOM elements.
 */
function getScrollOffset(element) {
  if (isWindow(element) && document.documentElement) {
    return {
      top: 'scrollY' in window ? window.scrollY : document.documentElement.scrollTop,
      left: 'scrollX' in window ? window.scrollX : document.documentElement.scrollLeft
    };
  } else {
    return {
      top: element.scrollTop,
      left: element.scrollLeft
    };
  }
}

/***/ }),

/***/ 2209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AutoSizer = __webpack_require__(2210);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AutoSizer).default;
  }
});
Object.defineProperty(exports, 'AutoSizer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AutoSizer).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 2210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(666);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _detectElementResize = __webpack_require__(1997);

var _detectElementResize2 = _interopRequireDefault(_detectElementResize);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AutoSizer = function (_React$PureComponent) {
  (0, _inherits3.default)(AutoSizer, _React$PureComponent);

  function AutoSizer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AutoSizer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AutoSizer.__proto__ || (0, _getPrototypeOf2.default)(AutoSizer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      height: _this.props.defaultHeight || 0,
      width: _this.props.defaultWidth || 0
    }, _this._onResize = function () {
      var _this$props = _this.props,
          disableHeight = _this$props.disableHeight,
          disableWidth = _this$props.disableWidth,
          onResize = _this$props.onResize;


      if (_this._parentNode) {
        // Guard against AutoSizer component being removed from the DOM immediately after being added.
        // This can result in invalid style values which can result in NaN values if we don't handle them.
        // See issue #150 for more context.

        var _height = _this._parentNode.offsetHeight || 0;
        var _width = _this._parentNode.offsetWidth || 0;

        var _style = window.getComputedStyle(_this._parentNode) || {};
        var paddingLeft = parseInt(_style.paddingLeft, 10) || 0;
        var paddingRight = parseInt(_style.paddingRight, 10) || 0;
        var paddingTop = parseInt(_style.paddingTop, 10) || 0;
        var paddingBottom = parseInt(_style.paddingBottom, 10) || 0;

        var newHeight = _height - paddingTop - paddingBottom;
        var newWidth = _width - paddingLeft - paddingRight;

        if (!disableHeight && _this.state.height !== newHeight || !disableWidth && _this.state.width !== newWidth) {
          _this.setState({
            height: _height - paddingTop - paddingBottom,
            width: _width - paddingLeft - paddingRight
          });

          onResize({ height: _height, width: _width });
        }
      }
    }, _this._setRef = function (autoSizer) {
      _this._autoSizer = autoSizer;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AutoSizer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var nonce = this.props.nonce;

      if (this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement) {
        // Delay access of parentNode until mount.
        // This handles edge-cases where the component has already been unmounted before its ref has been set,
        // As well as libraries like react-lite which have a slightly different lifecycle.
        this._parentNode = this._autoSizer.parentNode;

        // Defer requiring resize handler in order to support server-side rendering.
        // See issue #41
        this._detectElementResize = (0, _detectElementResize2.default)(nonce);
        this._detectElementResize.addResizeListener(this._parentNode, this._onResize);

        this._onResize();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._detectElementResize && this._parentNode) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          disableHeight = _props.disableHeight,
          disableWidth = _props.disableWidth,
          style = _props.style;
      var _state = this.state,
          height = _state.height,
          width = _state.width;

      // Outer div should not force width/height since that may prevent containers from shrinking.
      // Inner component should overflow and use calculated width/height.
      // See issue #68 for more information.

      var outerStyle = { overflow: 'visible' };
      var childParams = {};

      if (!disableHeight) {
        outerStyle.height = 0;
        childParams.height = height;
      }

      if (!disableWidth) {
        outerStyle.width = 0;
        childParams.width = width;
      }

      /**
       * TODO: Avoid rendering children before the initial measurements have been collected.
       * At best this would just be wasting cycles.
       * Add this check into version 10 though as it could break too many ref callbacks in version 9.
       * Note that if default width/height props were provided this would still work with SSR.
      if (
        height !== 0 &&
        width !== 0
      ) {
        child = children({ height, width })
      }
      */

      return React.createElement(
        'div',
        {
          className: className,
          ref: this._setRef,
          style: (0, _extends3.default)({}, outerStyle, style) },
        children(childParams)
      );
    }
  }]);
  return AutoSizer;
}(React.PureComponent);

AutoSizer.defaultProps = {
  onResize: function onResize() {},
  disableHeight: false,
  disableWidth: false,
  style: {}
};
AutoSizer.propTypes =  true ? null : {
  /** Function responsible for rendering children.*/
  children: _propTypes2.default.func.isRequired,


  /** Optional custom CSS class name to attach to root AutoSizer element.  */
  className: _propTypes2.default.string,


  /** Default height to use for initial render; useful for SSR */
  defaultHeight: _propTypes2.default.number,


  /** Default width to use for initial render; useful for SSR */
  defaultWidth: _propTypes2.default.number,


  /** Disable dynamic :height property */
  disableHeight: _propTypes2.default.bool.isRequired,


  /** Disable dynamic :width property */
  disableWidth: _propTypes2.default.bool.isRequired,


  /** Nonce of the inlined stylesheet for Content Security Policy */
  nonce: _propTypes2.default.string,


  /** Callback to be invoked on-resize */
  onResize: _propTypes2.default.func.isRequired,


  /** Optional inline style */
  style: _propTypes2.default.object
};
exports.default = AutoSizer;

/***/ }),

/***/ 2211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_RowRendererParams = exports.List = exports.default = undefined;

var _List = __webpack_require__(2212);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_List).default;
  }
});
Object.defineProperty(exports, 'List', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_List).default;
  }
});

var _types = __webpack_require__(2001);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.bpfrpt_proptype_RowRendererParams = _types.bpfrpt_proptype_RowRendererParams;

/***/ }),

/***/ 2212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _getOwnPropertyDescriptor = __webpack_require__(684);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = __webpack_require__(666);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Grid = __webpack_require__(2213);

var _Grid2 = _interopRequireDefault(_Grid);

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _types = __webpack_require__(2001);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
 * if only a few of those elements are visible. The primary purpose of this component is to improve
 * performance by only rendering the DOM nodes that a user is able to see based on their current
 * scroll position.
 *
 * This component renders a virtualized list of elements with either fixed or dynamic heights.
 */

var List = function (_React$PureComponent) {
  (0, _inherits3.default)(List, _React$PureComponent);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = List.__proto__ || (0, _getPrototypeOf2.default)(List)).call.apply(_ref, [this].concat(args))), _this), _this._cellRenderer = function (_ref2) {
      var parent = _ref2.parent,
          rowIndex = _ref2.rowIndex,
          style = _ref2.style,
          isScrolling = _ref2.isScrolling,
          isVisible = _ref2.isVisible,
          key = _ref2.key;
      var rowRenderer = _this.props.rowRenderer;

      // TRICKY The style object is sometimes cached by Grid.
      // This prevents new style objects from bypassing shallowCompare().
      // However as of React 16, style props are auto-frozen (at least in dev mode)
      // Check to make sure we can still modify the style before proceeding.
      // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713

      var _Object$getOwnPropert = (0, _getOwnPropertyDescriptor2.default)(style, 'width'),
          writable = _Object$getOwnPropert.writable;

      if (writable) {
        // By default, List cells should be 100% width.
        // This prevents them from flowing under a scrollbar (if present).
        style.width = '100%';
      }

      return rowRenderer({
        index: rowIndex,
        style: style,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent
      });
    }, _this._setRef = function (ref) {
      _this.Grid = ref;
    }, _this._onScroll = function (_ref3) {
      var clientHeight = _ref3.clientHeight,
          scrollHeight = _ref3.scrollHeight,
          scrollTop = _ref3.scrollTop;
      var onScroll = _this.props.onScroll;


      onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
    }, _this._onSectionRendered = function (_ref4) {
      var rowOverscanStartIndex = _ref4.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref4.rowOverscanStopIndex,
          rowStartIndex = _ref4.rowStartIndex,
          rowStopIndex = _ref4.rowStopIndex;
      var onRowsRendered = _this.props.onRowsRendered;


      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(List, [{
    key: 'forceUpdateGrid',
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }

    /** See Grid#getOffsetForCell */

  }, {
    key: 'getOffsetForRow',
    value: function getOffsetForRow(_ref5) {
      var alignment = _ref5.alignment,
          index = _ref5.index;

      if (this.Grid) {
        var _Grid$getOffsetForCel = this.Grid.getOffsetForCell({
          alignment: alignment,
          rowIndex: index,
          columnIndex: 0
        }),
            _scrollTop = _Grid$getOffsetForCel.scrollTop;

        return _scrollTop;
      }
      return 0;
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref6) {
      var columnIndex = _ref6.columnIndex,
          rowIndex = _ref6.rowIndex;

      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }

    /** See Grid#measureAllCells */

  }, {
    key: 'measureAllRows',
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref7$columnIndex = _ref7.columnIndex,
          columnIndex = _ref7$columnIndex === undefined ? 0 : _ref7$columnIndex,
          _ref7$rowIndex = _ref7.rowIndex,
          rowIndex = _ref7$rowIndex === undefined ? 0 : _ref7$rowIndex;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }

    /** See Grid#recomputeGridSize */

  }, {
    key: 'recomputeRowHeights',
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index,
          columnIndex: 0
        });
      }
    }

    /** See Grid#scrollToPosition */

  }, {
    key: 'scrollToPosition',
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToPosition({ scrollTop: scrollTop });
      }
    }

    /** See Grid#scrollToCell */

  }, {
    key: 'scrollToRow',
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          noRowsRenderer = _props.noRowsRenderer,
          scrollToIndex = _props.scrollToIndex,
          width = _props.width;


      var classNames = (0, _classnames2.default)('ReactVirtualized__List', className);

      return React.createElement(_Grid2.default, (0, _extends3.default)({}, this.props, {
        autoContainerWidth: true,
        cellRenderer: this._cellRenderer,
        className: classNames,
        columnWidth: width,
        columnCount: 1,
        noContentRenderer: noRowsRenderer,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        scrollToRow: scrollToIndex
      }));
    }
  }]);
  return List;
}(React.PureComponent);

List.defaultProps = {
  autoHeight: false,
  estimatedRowSize: 30,
  onScroll: function onScroll() {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {},
  overscanIndicesGetter: _Grid.accessibilityOverscanIndicesGetter,
  overscanRowCount: 10,
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
};
List.propTypes =  true ? null : {
  "aria-label": _propTypes2.default.string,


  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  autoHeight: _propTypes2.default.bool.isRequired,


  /** Optional CSS class name */
  className: _propTypes2.default.string,


  /**
   * Used to estimate the total height of a List before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  estimatedRowSize: _propTypes2.default.number.isRequired,


  /** Height constraint for list (determines how many actual rows are rendered) */
  height: _propTypes2.default.number.isRequired,


  /** Optional renderer to be used in place of rows when rowCount is 0 */
  noRowsRenderer: function noRowsRenderer() {
    return (typeof _Grid.bpfrpt_proptype_NoContentRenderer === 'function' ? _Grid.bpfrpt_proptype_NoContentRenderer.isRequired ? _Grid.bpfrpt_proptype_NoContentRenderer.isRequired : _Grid.bpfrpt_proptype_NoContentRenderer : _propTypes2.default.shape(_Grid.bpfrpt_proptype_NoContentRenderer).isRequired).apply(this, arguments);
  },


  /** Callback invoked with information about the slice of rows that were just rendered.  */

  onRowsRendered: _propTypes2.default.func.isRequired,


  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   */
  onScroll: _propTypes2.default.func.isRequired,


  /** See Grid#overscanIndicesGetter */
  overscanIndicesGetter: function overscanIndicesGetter() {
    return (typeof _Grid.bpfrpt_proptype_OverscanIndicesGetter === 'function' ? _Grid.bpfrpt_proptype_OverscanIndicesGetter.isRequired ? _Grid.bpfrpt_proptype_OverscanIndicesGetter.isRequired : _Grid.bpfrpt_proptype_OverscanIndicesGetter : _propTypes2.default.shape(_Grid.bpfrpt_proptype_OverscanIndicesGetter).isRequired).apply(this, arguments);
  },


  /**
   * Number of rows to render above/below the visible bounds of the list.
   * These rows can help for smoother scrolling on touch devices.
   */
  overscanRowCount: _propTypes2.default.number.isRequired,


  /** Either a fixed row height (number) or a function that returns the height of a row given its index.  */
  rowHeight: function rowHeight() {
    return (typeof _Grid.bpfrpt_proptype_CellSize === 'function' ? _Grid.bpfrpt_proptype_CellSize.isRequired ? _Grid.bpfrpt_proptype_CellSize.isRequired : _Grid.bpfrpt_proptype_CellSize : _propTypes2.default.shape(_Grid.bpfrpt_proptype_CellSize).isRequired).apply(this, arguments);
  },


  /** Responsible for rendering a row given an index; ({ index: number }): node */
  rowRenderer: function rowRenderer() {
    return (typeof _types.bpfrpt_proptype_RowRenderer === 'function' ? _types.bpfrpt_proptype_RowRenderer.isRequired ? _types.bpfrpt_proptype_RowRenderer.isRequired : _types.bpfrpt_proptype_RowRenderer : _propTypes2.default.shape(_types.bpfrpt_proptype_RowRenderer).isRequired).apply(this, arguments);
  },


  /** Number of rows in list. */
  rowCount: _propTypes2.default.number.isRequired,


  /** See Grid#scrollToAlignment */
  scrollToAlignment: function scrollToAlignment() {
    return (typeof _Grid.bpfrpt_proptype_Alignment === 'function' ? _Grid.bpfrpt_proptype_Alignment.isRequired ? _Grid.bpfrpt_proptype_Alignment.isRequired : _Grid.bpfrpt_proptype_Alignment : _propTypes2.default.shape(_Grid.bpfrpt_proptype_Alignment).isRequired).apply(this, arguments);
  },


  /** Row index to ensure visible (by forcefully scrolling if necessary) */
  scrollToIndex: _propTypes2.default.number.isRequired,


  /** Vertical offset. */
  scrollTop: _propTypes2.default.number,


  /** Optional inline style */
  style: _propTypes2.default.object.isRequired,


  /** Tab index for focus */
  tabIndex: _propTypes2.default.number,


  /** Width of list */
  width: _propTypes2.default.number.isRequired
};
exports.default = List;

/***/ }),

/***/ 2213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpfrpt_proptype_Scroll = exports.bpfrpt_proptype_CellRendererParams = exports.bpfrpt_proptype_RenderedSection = exports.bpfrpt_proptype_OverscanIndicesGetter = exports.bpfrpt_proptype_CellSize = exports.bpfrpt_proptype_CellPosition = exports.bpfrpt_proptype_Alignment = exports.bpfrpt_proptype_NoContentRenderer = exports.defaultOverscanIndicesGetter = exports.defaultCellRangeRenderer = exports.accessibilityOverscanIndicesGetter = exports.Grid = exports.default = undefined;

var _Grid = __webpack_require__(2214);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Grid).default;
  }
});
Object.defineProperty(exports, 'Grid', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Grid).default;
  }
});

var _accessibilityOverscanIndicesGetter = __webpack_require__(2224);

Object.defineProperty(exports, 'accessibilityOverscanIndicesGetter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_accessibilityOverscanIndicesGetter).default;
  }
});

var _defaultCellRangeRenderer = __webpack_require__(2000);

Object.defineProperty(exports, 'defaultCellRangeRenderer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_defaultCellRangeRenderer).default;
  }
});

var _defaultOverscanIndicesGetter = __webpack_require__(1999);

Object.defineProperty(exports, 'defaultOverscanIndicesGetter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_defaultOverscanIndicesGetter).default;
  }
});

var _types = __webpack_require__(1980);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.bpfrpt_proptype_NoContentRenderer = _types.bpfrpt_proptype_NoContentRenderer;
exports.bpfrpt_proptype_Alignment = _types.bpfrpt_proptype_Alignment;
exports.bpfrpt_proptype_CellPosition = _types.bpfrpt_proptype_CellPosition;
exports.bpfrpt_proptype_CellSize = _types.bpfrpt_proptype_CellSize;
exports.bpfrpt_proptype_OverscanIndicesGetter = _types.bpfrpt_proptype_OverscanIndicesGetter;
exports.bpfrpt_proptype_RenderedSection = _types.bpfrpt_proptype_RenderedSection;
exports.bpfrpt_proptype_CellRendererParams = _types.bpfrpt_proptype_CellRendererParams;
exports.bpfrpt_proptype_Scroll = _types.bpfrpt_proptype_Scroll;

/***/ }),

/***/ 2214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = undefined;

var _assign = __webpack_require__(674);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(666);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _calculateSizeAndPositionDataAndUpdateScrollOffset = __webpack_require__(2215);

var _calculateSizeAndPositionDataAndUpdateScrollOffset2 = _interopRequireDefault(_calculateSizeAndPositionDataAndUpdateScrollOffset);

var _ScalingCellSizeAndPositionManager = __webpack_require__(1987);

var _ScalingCellSizeAndPositionManager2 = _interopRequireDefault(_ScalingCellSizeAndPositionManager);

var _createCallbackMemoizer = __webpack_require__(1998);

var _createCallbackMemoizer2 = _interopRequireDefault(_createCallbackMemoizer);

var _defaultOverscanIndicesGetter = __webpack_require__(1999);

var _defaultOverscanIndicesGetter2 = _interopRequireDefault(_defaultOverscanIndicesGetter);

var _updateScrollIndexHelper = __webpack_require__(2221);

var _updateScrollIndexHelper2 = _interopRequireDefault(_updateScrollIndexHelper);

var _defaultCellRangeRenderer = __webpack_require__(2000);

var _defaultCellRangeRenderer2 = _interopRequireDefault(_defaultCellRangeRenderer);

var _scrollbarSize = __webpack_require__(2222);

var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

var _reactLifecyclesCompat = __webpack_require__(21);

var _requestAnimationTimeout = __webpack_require__(1992);

var _types = __webpack_require__(1980);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;

/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */


var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};

var renderNull = function renderNull() {
  return null;
};

/**
 * Renders tabular data with virtualization along the vertical and horizontal axes.
 * Row heights and column widths must be known ahead of time and specified as properties.
 */
var Grid = function (_React$PureComponent) {
  (0, _inherits3.default)(Grid, _React$PureComponent);

  // Invokes onSectionRendered callback only when start/stop row or column indices change
  function Grid(props) {
    (0, _classCallCheck3.default)(this, Grid);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Grid.__proto__ || (0, _getPrototypeOf2.default)(Grid)).call(this, props));

    _this._onGridRenderedMemoizer = (0, _createCallbackMemoizer2.default)();
    _this._onScrollMemoizer = (0, _createCallbackMemoizer2.default)(false);
    _this._deferredInvalidateColumnIndex = null;
    _this._deferredInvalidateRowIndex = null;
    _this._recomputeScrollLeftFlag = false;
    _this._recomputeScrollTopFlag = false;
    _this._horizontalScrollBarSize = 0;
    _this._verticalScrollBarSize = 0;
    _this._scrollbarPresenceChanged = false;
    _this._renderedColumnStartIndex = 0;
    _this._renderedColumnStopIndex = 0;
    _this._renderedRowStartIndex = 0;
    _this._renderedRowStopIndex = 0;
    _this._styleCache = {};
    _this._cellCache = {};

    _this._debounceScrollEndedCallback = function () {
      _this._disablePointerEventsTimeoutId = null;
      // isScrolling is used to determine if we reset styleCache
      _this.setState({
        isScrolling: false,
        needToResetStyleCache: false
      });
    };

    _this._invokeOnGridRenderedHelper = function () {
      var onSectionRendered = _this.props.onSectionRendered;


      _this._onGridRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          columnOverscanStartIndex: _this._columnStartIndex,
          columnOverscanStopIndex: _this._columnStopIndex,
          columnStartIndex: _this._renderedColumnStartIndex,
          columnStopIndex: _this._renderedColumnStopIndex,
          rowOverscanStartIndex: _this._rowStartIndex,
          rowOverscanStopIndex: _this._rowStopIndex,
          rowStartIndex: _this._renderedRowStartIndex,
          rowStopIndex: _this._renderedRowStopIndex
        }
      });
    };

    _this._setScrollingContainerRef = function (ref) {
      _this._scrollingContainer = ref;
    };

    _this._onScroll = function (event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target === _this._scrollingContainer) {
        _this.handleScrollEvent(event.target);
      }
    };

    var columnSizeAndPositionManager = new _ScalingCellSizeAndPositionManager2.default({
      cellCount: props.columnCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return Grid._wrapSizeGetter(props.columnWidth)(params);
      },
      estimatedCellSize: Grid._getEstimatedColumnSize(props)
    });
    var rowSizeAndPositionManager = new _ScalingCellSizeAndPositionManager2.default({
      cellCount: props.rowCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return Grid._wrapSizeGetter(props.rowHeight)(params);
      },
      estimatedCellSize: Grid._getEstimatedRowSize(props)
    });

    _this.state = {
      instanceProps: {
        columnSizeAndPositionManager: columnSizeAndPositionManager,
        rowSizeAndPositionManager: rowSizeAndPositionManager,

        prevColumnWidth: props.columnWidth,
        prevRowHeight: props.rowHeight,
        prevColumnCount: props.columnCount,
        prevRowCount: props.rowCount,
        prevIsScrolling: props.isScrolling === true,
        prevScrollToColumn: props.scrollToColumn,
        prevScrollToRow: props.scrollToRow,

        scrollbarSize: 0,
        scrollbarSizeMeasured: false
      },
      isScrolling: false,
      scrollDirectionHorizontal: _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD,
      scrollDirectionVertical: _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD,
      scrollLeft: 0,
      scrollTop: 0,
      scrollPositionChangeReason: null,

      needToResetStyleCache: false
    };

    if (props.scrollToRow > 0) {
      _this._initialScrollTop = _this._getCalculatedScrollTop(props, _this.state);
    }
    if (props.scrollToColumn > 0) {
      _this._initialScrollLeft = _this._getCalculatedScrollLeft(props, _this.state);
    }
    return _this;
  }

  /**
   * Gets offsets for a given cell and alignment.
   */


  (0, _createClass3.default)(Grid, [{
    key: 'getOffsetForCell',
    value: function getOffsetForCell() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$alignment = _ref.alignment,
          alignment = _ref$alignment === undefined ? this.props.scrollToAlignment : _ref$alignment,
          _ref$columnIndex = _ref.columnIndex,
          columnIndex = _ref$columnIndex === undefined ? this.props.scrollToColumn : _ref$columnIndex,
          _ref$rowIndex = _ref.rowIndex,
          rowIndex = _ref$rowIndex === undefined ? this.props.scrollToRow : _ref$rowIndex;

      var offsetProps = (0, _extends3.default)({}, this.props, {
        scrollToAlignment: alignment,
        scrollToColumn: columnIndex,
        scrollToRow: rowIndex
      });

      return {
        scrollLeft: this._getCalculatedScrollLeft(offsetProps),
        scrollTop: this._getCalculatedScrollTop(offsetProps)
      };
    }

    /**
     * Gets estimated total rows' height.
     */

  }, {
    key: 'getTotalRowsHeight',
    value: function getTotalRowsHeight() {
      return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize();
    }

    /**
     * Gets estimated total columns' width.
     */

  }, {
    key: 'getTotalColumnsWidth',
    value: function getTotalColumnsWidth() {
      return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize();
    }

    /**
     * This method handles a scroll event originating from an external scroll control.
     * It's an advanced method and should probably not be used unless you're implementing a custom scroll-bar solution.
     */

  }, {
    key: 'handleScrollEvent',
    value: function handleScrollEvent(_ref2) {
      var _ref2$scrollLeft = _ref2.scrollLeft,
          scrollLeftParam = _ref2$scrollLeft === undefined ? 0 : _ref2$scrollLeft,
          _ref2$scrollTop = _ref2.scrollTop,
          scrollTopParam = _ref2$scrollTop === undefined ? 0 : _ref2$scrollTop;

      // On iOS, we can arrive at negative offsets by swiping past the start.
      // To prevent flicker here, we make playing in the negative offset zone cause nothing to happen.
      if (scrollTopParam < 0) {
        return;
      }

      // Prevent pointer events from interrupting a smooth scroll
      this._debounceScrollEnded();

      var _props = this.props,
          autoHeight = _props.autoHeight,
          autoWidth = _props.autoWidth,
          height = _props.height,
          width = _props.width;
      var instanceProps = this.state.instanceProps;

      // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.

      var scrollbarSize = instanceProps.scrollbarSize;
      var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
      var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
      var scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), scrollLeftParam);
      var scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), scrollTopParam);

      // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.
      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
        // Track scrolling direction so we can more efficiently overscan rows to reduce empty space around the edges while scrolling.
        // Don't change direction for an axis unless scroll offset has changed.
        var _scrollDirectionHorizontal = scrollLeft !== this.state.scrollLeft ? scrollLeft > this.state.scrollLeft ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD : this.state.scrollDirectionHorizontal;
        var _scrollDirectionVertical = scrollTop !== this.state.scrollTop ? scrollTop > this.state.scrollTop ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD : this.state.scrollDirectionVertical;

        var newState = {
          isScrolling: true,
          scrollDirectionHorizontal: _scrollDirectionHorizontal,
          scrollDirectionVertical: _scrollDirectionVertical,
          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.OBSERVED
        };

        if (!autoHeight) {
          newState.scrollTop = scrollTop;
        }

        if (!autoWidth) {
          newState.scrollLeft = scrollLeft;
        }

        newState.needToResetStyleCache = false;
        this.setState(newState);
      }

      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        totalColumnsWidth: totalColumnsWidth,
        totalRowsHeight: totalRowsHeight
      });
    }

    /**
     * Invalidate Grid size and recompute visible cells.
     * This is a deferred wrapper for recomputeGridSize().
     * It sets a flag to be evaluated on cDM/cDU to avoid unnecessary renders.
     * This method is intended for advanced use-cases like CellMeasurer.
     */
    // @TODO (bvaughn) Add automated test coverage for this.

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref3) {
      var columnIndex = _ref3.columnIndex,
          rowIndex = _ref3.rowIndex;

      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }

    /**
     * Pre-measure all columns and rows in a Grid.
     * Typically cells are only measured as needed and estimated sizes are used for cells that have not yet been measured.
     * This method ensures that the next call to getTotalSize() returns an exact size (as opposed to just an estimated one).
     */

  }, {
    key: 'measureAllCells',
    value: function measureAllCells() {
      var _props2 = this.props,
          columnCount = _props2.columnCount,
          rowCount = _props2.rowCount;
      var instanceProps = this.state.instanceProps;

      instanceProps.columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1);
      instanceProps.rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
    }

    /**
     * Forced recompute of row heights and column widths.
     * This function should be called if dynamic column or row sizes have changed but nothing else has.
     * Since Grid only receives :columnCount and :rowCount it has no way of detecting when the underlying data changes.
     */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$columnIndex = _ref4.columnIndex,
          columnIndex = _ref4$columnIndex === undefined ? 0 : _ref4$columnIndex,
          _ref4$rowIndex = _ref4.rowIndex,
          rowIndex = _ref4$rowIndex === undefined ? 0 : _ref4$rowIndex;

      var _props3 = this.props,
          scrollToColumn = _props3.scrollToColumn,
          scrollToRow = _props3.scrollToRow;
      var instanceProps = this.state.instanceProps;


      instanceProps.columnSizeAndPositionManager.resetCell(columnIndex);
      instanceProps.rowSizeAndPositionManager.resetCell(rowIndex);

      // Cell sizes may be determined by a function property.
      // In this case the cDU handler can't know if they changed.
      // Store this flag to let the next cDU pass know it needs to recompute the scroll offset.
      this._recomputeScrollLeftFlag = scrollToColumn >= 0 && (this.state.scrollDirectionHorizontal === _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD ? columnIndex <= scrollToColumn : columnIndex >= scrollToColumn);
      this._recomputeScrollTopFlag = scrollToRow >= 0 && (this.state.scrollDirectionVertical === _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD ? rowIndex <= scrollToRow : rowIndex >= scrollToRow);

      // Clear cell cache in case we are scrolling;
      // Invalid row heights likely mean invalid cached content as well.
      this._styleCache = {};
      this._cellCache = {};

      this.forceUpdate();
    }

    /**
     * Ensure column and row are visible.
     */

  }, {
    key: 'scrollToCell',
    value: function scrollToCell(_ref5) {
      var columnIndex = _ref5.columnIndex,
          rowIndex = _ref5.rowIndex;
      var columnCount = this.props.columnCount;


      var props = this.props;

      // Don't adjust scroll offset for single-column grids (eg List, Table).
      // This can cause a funky scroll offset because of the vertical scrollbar width.
      if (columnCount > 1 && columnIndex !== undefined) {
        this._updateScrollLeftForScrollToColumn((0, _extends3.default)({}, props, {
          scrollToColumn: columnIndex
        }));
      }

      if (rowIndex !== undefined) {
        this._updateScrollTopForScrollToRow((0, _extends3.default)({}, props, {
          scrollToRow: rowIndex
        }));
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props4 = this.props,
          getScrollbarSize = _props4.getScrollbarSize,
          height = _props4.height,
          scrollLeft = _props4.scrollLeft,
          scrollToColumn = _props4.scrollToColumn,
          scrollTop = _props4.scrollTop,
          scrollToRow = _props4.scrollToRow,
          width = _props4.width;
      var instanceProps = this.state.instanceProps;

      // Reset initial offsets to be ignored in browser

      this._initialScrollTop = 0;
      this._initialScrollLeft = 0;

      // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.
      this._handleInvalidatedGridSize();

      // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.
      if (!instanceProps.scrollbarSizeMeasured) {
        this.setState(function (prevState) {
          var stateUpdate = (0, _extends3.default)({}, prevState, { needToResetStyleCache: false });
          stateUpdate.instanceProps.scrollbarSize = getScrollbarSize();
          stateUpdate.instanceProps.scrollbarSizeMeasured = true;
          return stateUpdate;
        });
      }

      if (typeof scrollLeft === 'number' && scrollLeft >= 0 || typeof scrollTop === 'number' && scrollTop >= 0) {
        var stateUpdate = Grid._getScrollToPositionStateUpdate({
          prevState: this.state,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });
        if (stateUpdate) {
          stateUpdate.needToResetStyleCache = false;
          this.setState(stateUpdate);
        }
      }

      // refs don't work in `react-test-renderer`
      if (this._scrollingContainer) {
        // setting the ref's scrollLeft and scrollTop.
        // Somehow in MultiGrid the main grid doesn't trigger a update on mount.
        if (this._scrollingContainer.scrollLeft !== this.state.scrollLeft) {
          this._scrollingContainer.scrollLeft = this.state.scrollLeft;
        }
        if (this._scrollingContainer.scrollTop !== this.state.scrollTop) {
          this._scrollingContainer.scrollTop = this.state.scrollTop;
        }
      }

      // Don't update scroll offset if the size is 0; we don't render any cells in this case.
      // Setting a state may cause us to later thing we've updated the offce when we haven't.
      var sizeIsBiggerThanZero = height > 0 && width > 0;
      if (scrollToColumn >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollLeftForScrollToColumn();
      }
      if (scrollToRow >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollTopForScrollToRow();
      }

      // Update onRowsRendered callback
      this._invokeOnGridRenderedHelper();

      // Initialize onScroll callback
      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalColumnsWidth: instanceProps.columnSizeAndPositionManager.getTotalSize(),
        totalRowsHeight: instanceProps.rowSizeAndPositionManager.getTotalSize()
      });

      this._maybeCallOnScrollbarPresenceChange();
    }

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) New scroll-to-cell props have been set
     */

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _props5 = this.props,
          autoHeight = _props5.autoHeight,
          autoWidth = _props5.autoWidth,
          columnCount = _props5.columnCount,
          height = _props5.height,
          rowCount = _props5.rowCount,
          scrollToAlignment = _props5.scrollToAlignment,
          scrollToColumn = _props5.scrollToColumn,
          scrollToRow = _props5.scrollToRow,
          width = _props5.width;
      var _state = this.state,
          scrollLeft = _state.scrollLeft,
          scrollPositionChangeReason = _state.scrollPositionChangeReason,
          scrollTop = _state.scrollTop,
          instanceProps = _state.instanceProps;
      // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedGridSize();

      // Handle edge case where column or row count has only just increased over 0.
      // In this case we may have to restore a previously-specified scroll offset.
      // For more info see bvaughn/react-virtualized/issues/218
      var columnOrRowCountJustIncreasedFromZero = columnCount > 0 && prevProps.columnCount === 0 || rowCount > 0 && prevProps.rowCount === 0;

      // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.
      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        // @TRICKY :autoHeight and :autoWidth properties instructs Grid to leave :scrollTop and :scrollLeft management to an external HOC (eg WindowScroller).
        // In this case we should avoid checking scrollingContainer.scrollTop and scrollingContainer.scrollLeft since it forces layout/flow.
        if (!autoWidth && scrollLeft >= 0 && (scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }
        if (!autoHeight && scrollTop >= 0 && (scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      }

      // Special case where the previous size was 0:
      // In this case we don't show any windowed cells at all.
      // So we should always recalculate offset afterwards.
      var sizeJustIncreasedFromZero = (prevProps.width === 0 || prevProps.height === 0) && height > 0 && width > 0;

      // Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
      // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?
      if (this._recomputeScrollLeftFlag) {
        this._recomputeScrollLeftFlag = false;
        this._updateScrollLeftForScrollToColumn(this.props);
      } else {
        (0, _updateScrollIndexHelper2.default)({
          cellSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
          previousCellsCount: prevProps.columnCount,
          previousCellSize: prevProps.columnWidth,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToColumn,
          previousSize: prevProps.width,
          scrollOffset: scrollLeft,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToColumn,
          size: width,
          sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback() {
            return _this2._updateScrollLeftForScrollToColumn(_this2.props);
          }
        });
      }

      if (this._recomputeScrollTopFlag) {
        this._recomputeScrollTopFlag = false;
        this._updateScrollTopForScrollToRow(this.props);
      } else {
        (0, _updateScrollIndexHelper2.default)({
          cellSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
          previousCellsCount: prevProps.rowCount,
          previousCellSize: prevProps.rowHeight,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToRow,
          previousSize: prevProps.height,
          scrollOffset: scrollTop,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToRow,
          size: height,
          sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback() {
            return _this2._updateScrollTopForScrollToRow(_this2.props);
          }
        });
      }

      // Update onRowsRendered callback if start/stop indices have changed
      this._invokeOnGridRenderedHelper();

      // Changes to :scrollLeft or :scrollTop should also notify :onScroll listeners
      if (scrollLeft !== prevState.scrollLeft || scrollTop !== prevState.scrollTop) {
        var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
        var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();

        this._invokeOnScrollMemoizer({
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          totalColumnsWidth: totalColumnsWidth,
          totalRowsHeight: totalRowsHeight
        });
      }

      this._maybeCallOnScrollbarPresenceChange();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        (0, _requestAnimationTimeout.cancelAnimationTimeout)(this._disablePointerEventsTimeoutId);
      }
    }

    /**
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */

  }, {
    key: 'render',
    value: function render() {
      var _props6 = this.props,
          autoContainerWidth = _props6.autoContainerWidth,
          autoHeight = _props6.autoHeight,
          autoWidth = _props6.autoWidth,
          className = _props6.className,
          containerProps = _props6.containerProps,
          containerRole = _props6.containerRole,
          containerStyle = _props6.containerStyle,
          height = _props6.height,
          id = _props6.id,
          noContentRenderer = _props6.noContentRenderer,
          role = _props6.role,
          style = _props6.style,
          tabIndex = _props6.tabIndex,
          width = _props6.width;
      var _state2 = this.state,
          instanceProps = _state2.instanceProps,
          needToResetStyleCache = _state2.needToResetStyleCache;


      var isScrolling = this._isScrolling();

      var gridStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        width: autoWidth ? 'auto' : width,
        WebkitOverflowScrolling: 'touch',
        willChange: 'transform'
      };

      if (needToResetStyleCache) {
        this._styleCache = {};
      }

      // calculate _styleCache here
      // if state.isScrolling (not from _isScrolling) then reset
      if (!this.state.isScrolling) {
        this._resetStyleCache();
      }

      // calculate children to render here
      this._calculateChildrenToRender(this.props, this.state);

      var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
      var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();

      // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116
      var verticalScrollBarSize = totalRowsHeight > height ? instanceProps.scrollbarSize : 0;
      var horizontalScrollBarSize = totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;

      if (horizontalScrollBarSize !== this._horizontalScrollBarSize || verticalScrollBarSize !== this._verticalScrollBarSize) {
        this._horizontalScrollBarSize = horizontalScrollBarSize;
        this._verticalScrollBarSize = verticalScrollBarSize;
        this._scrollbarPresenceChanged = true;
      }

      // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23
      gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';

      var childrenToDisplay = this._childrenToDisplay;

      var showNoContentRenderer = childrenToDisplay.length === 0 && height > 0 && width > 0;

      return React.createElement(
        'div',
        (0, _extends3.default)({
          ref: this._setScrollingContainerRef
        }, containerProps, {
          'aria-label': this.props['aria-label'],
          'aria-readonly': this.props['aria-readonly'],
          className: (0, _classnames2.default)('ReactVirtualized__Grid', className),
          id: id,
          onScroll: this._onScroll,
          role: role,
          style: (0, _extends3.default)({}, gridStyle, style),
          tabIndex: tabIndex }),
        childrenToDisplay.length > 0 && React.createElement(
          'div',
          {
            className: 'ReactVirtualized__Grid__innerScrollContainer',
            role: containerRole,
            style: (0, _extends3.default)({
              width: autoContainerWidth ? 'auto' : totalColumnsWidth,
              height: totalRowsHeight,
              maxWidth: totalColumnsWidth,
              maxHeight: totalRowsHeight,
              overflow: 'hidden',
              pointerEvents: isScrolling ? 'none' : '',
              position: 'relative'
            }, containerStyle) },
          childrenToDisplay
        ),
        showNoContentRenderer && noContentRenderer()
      );
    }

    /* ---------------------------- Helper methods ---------------------------- */

  }, {
    key: '_calculateChildrenToRender',
    value: function _calculateChildrenToRender() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var cellRenderer = props.cellRenderer,
          cellRangeRenderer = props.cellRangeRenderer,
          columnCount = props.columnCount,
          deferredMeasurementCache = props.deferredMeasurementCache,
          height = props.height,
          overscanColumnCount = props.overscanColumnCount,
          overscanIndicesGetter = props.overscanIndicesGetter,
          overscanRowCount = props.overscanRowCount,
          rowCount = props.rowCount,
          width = props.width,
          isScrollingOptOut = props.isScrollingOptOut;
      var scrollDirectionHorizontal = state.scrollDirectionHorizontal,
          scrollDirectionVertical = state.scrollDirectionVertical,
          instanceProps = state.instanceProps;


      var scrollTop = this._initialScrollTop > 0 ? this._initialScrollTop : state.scrollTop;
      var scrollLeft = this._initialScrollLeft > 0 ? this._initialScrollLeft : state.scrollLeft;

      var isScrolling = this._isScrolling(props, state);

      this._childrenToDisplay = [];

      // Render only enough columns and rows to cover the visible area of the grid.
      if (height > 0 && width > 0) {
        var visibleColumnIndices = instanceProps.columnSizeAndPositionManager.getVisibleCellRange({
          containerSize: width,
          offset: scrollLeft
        });
        var visibleRowIndices = instanceProps.rowSizeAndPositionManager.getVisibleCellRange({
          containerSize: height,
          offset: scrollTop
        });

        var horizontalOffsetAdjustment = instanceProps.columnSizeAndPositionManager.getOffsetAdjustment({
          containerSize: width,
          offset: scrollLeft
        });
        var verticalOffsetAdjustment = instanceProps.rowSizeAndPositionManager.getOffsetAdjustment({
          containerSize: height,
          offset: scrollTop
        });

        // Store for _invokeOnGridRenderedHelper()
        this._renderedColumnStartIndex = visibleColumnIndices.start;
        this._renderedColumnStopIndex = visibleColumnIndices.stop;
        this._renderedRowStartIndex = visibleRowIndices.start;
        this._renderedRowStopIndex = visibleRowIndices.stop;

        var overscanColumnIndices = overscanIndicesGetter({
          direction: 'horizontal',
          cellCount: columnCount,
          overscanCellsCount: overscanColumnCount,
          scrollDirection: scrollDirectionHorizontal,
          startIndex: typeof visibleColumnIndices.start === 'number' ? visibleColumnIndices.start : 0,
          stopIndex: typeof visibleColumnIndices.stop === 'number' ? visibleColumnIndices.stop : -1
        });

        var overscanRowIndices = overscanIndicesGetter({
          direction: 'vertical',
          cellCount: rowCount,
          overscanCellsCount: overscanRowCount,
          scrollDirection: scrollDirectionVertical,
          startIndex: typeof visibleRowIndices.start === 'number' ? visibleRowIndices.start : 0,
          stopIndex: typeof visibleRowIndices.stop === 'number' ? visibleRowIndices.stop : -1
        });

        // Store for _invokeOnGridRenderedHelper()
        var columnStartIndex = overscanColumnIndices.overscanStartIndex;
        var columnStopIndex = overscanColumnIndices.overscanStopIndex;
        var rowStartIndex = overscanRowIndices.overscanStartIndex;
        var rowStopIndex = overscanRowIndices.overscanStopIndex;

        // Advanced use-cases (eg CellMeasurer) require batched measurements to determine accurate sizes.
        if (deferredMeasurementCache) {
          // If rows have a dynamic height, scan the rows we are about to render.
          // If any have not yet been measured, then we need to render all columns initially,
          // Because the height of the row is equal to the tallest cell within that row,
          // (And so we can't know the height without measuring all column-cells first).
          if (!deferredMeasurementCache.hasFixedHeight()) {
            for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
              if (!deferredMeasurementCache.has(rowIndex, 0)) {
                columnStartIndex = 0;
                columnStopIndex = columnCount - 1;
                break;
              }
            }
          }

          // If columns have a dynamic width, scan the columns we are about to render.
          // If any have not yet been measured, then we need to render all rows initially,
          // Because the width of the column is equal to the widest cell within that column,
          // (And so we can't know the width without measuring all row-cells first).
          if (!deferredMeasurementCache.hasFixedWidth()) {
            for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
              if (!deferredMeasurementCache.has(0, columnIndex)) {
                rowStartIndex = 0;
                rowStopIndex = rowCount - 1;
                break;
              }
            }
          }
        }

        this._childrenToDisplay = cellRangeRenderer({
          cellCache: this._cellCache,
          cellRenderer: cellRenderer,
          columnSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
          columnStartIndex: columnStartIndex,
          columnStopIndex: columnStopIndex,
          deferredMeasurementCache: deferredMeasurementCache,
          horizontalOffsetAdjustment: horizontalOffsetAdjustment,
          isScrolling: isScrolling,
          isScrollingOptOut: isScrollingOptOut,
          parent: this,
          rowSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
          rowStartIndex: rowStartIndex,
          rowStopIndex: rowStopIndex,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          styleCache: this._styleCache,
          verticalOffsetAdjustment: verticalOffsetAdjustment,
          visibleColumnIndices: visibleColumnIndices,
          visibleRowIndices: visibleRowIndices
        });

        // update the indices
        this._columnStartIndex = columnStartIndex;
        this._columnStopIndex = columnStopIndex;
        this._rowStartIndex = rowStartIndex;
        this._rowStopIndex = rowStopIndex;
      }
    }

    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Grid.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */

  }, {
    key: '_debounceScrollEnded',
    value: function _debounceScrollEnded() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;


      if (this._disablePointerEventsTimeoutId) {
        (0, _requestAnimationTimeout.cancelAnimationTimeout)(this._disablePointerEventsTimeoutId);
      }

      this._disablePointerEventsTimeoutId = (0, _requestAnimationTimeout.requestAnimationTimeout)(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
    }
  }, {
    key: '_handleInvalidatedGridSize',


    /**
     * Check for batched CellMeasurer size invalidations.
     * This will occur the first time one or more previously unmeasured cells are rendered.
     */
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === 'number' && typeof this._deferredInvalidateRowIndex === 'number') {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;

        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;

        this.recomputeGridSize({ columnIndex: columnIndex, rowIndex: rowIndex });
      }
    }
  }, {
    key: '_invokeOnScrollMemoizer',
    value: function _invokeOnScrollMemoizer(_ref6) {
      var _this3 = this;

      var scrollLeft = _ref6.scrollLeft,
          scrollTop = _ref6.scrollTop,
          totalColumnsWidth = _ref6.totalColumnsWidth,
          totalRowsHeight = _ref6.totalRowsHeight;

      this._onScrollMemoizer({
        callback: function callback(_ref7) {
          var scrollLeft = _ref7.scrollLeft,
              scrollTop = _ref7.scrollTop;
          var _props7 = _this3.props,
              height = _props7.height,
              onScroll = _props7.onScroll,
              width = _props7.width;


          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalRowsHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalColumnsWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: '_isScrolling',
    value: function _isScrolling() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      // If isScrolling is defined in props, use it to override the value in state
      // This is a performance optimization for WindowScroller + Grid
      return Object.hasOwnProperty.call(props, 'isScrolling') ? Boolean(props.isScrolling) : Boolean(state.isScrolling);
    }
  }, {
    key: '_maybeCallOnScrollbarPresenceChange',
    value: function _maybeCallOnScrollbarPresenceChange() {
      if (this._scrollbarPresenceChanged) {
        var _onScrollbarPresenceChange = this.props.onScrollbarPresenceChange;


        this._scrollbarPresenceChanged = false;

        _onScrollbarPresenceChange({
          horizontal: this._horizontalScrollBarSize > 0,
          size: this.state.instanceProps.scrollbarSize,
          vertical: this._verticalScrollBarSize > 0
        });
      }
    }
  }, {
    key: 'scrollToPosition',


    /**
     * Scroll to the specified offset(s).
     * Useful for animating position changes.
     */
    value: function scrollToPosition(_ref8) {
      var scrollLeft = _ref8.scrollLeft,
          scrollTop = _ref8.scrollTop;

      var stateUpdate = Grid._getScrollToPositionStateUpdate({
        prevState: this.state,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });

      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }, {
    key: '_getCalculatedScrollLeft',
    value: function _getCalculatedScrollLeft() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      return Grid._getCalculatedScrollLeft(props, state);
    }
  }, {
    key: '_updateScrollLeftForScrollToColumn',
    value: function _updateScrollLeftForScrollToColumn() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      var stateUpdate = Grid._getScrollLeftForScrollToColumnStateUpdate(props, state);
      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }, {
    key: '_getCalculatedScrollTop',
    value: function _getCalculatedScrollTop() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      return Grid._getCalculatedScrollTop(props, state);
    }
  }, {
    key: '_resetStyleCache',
    value: function _resetStyleCache() {
      var styleCache = this._styleCache;
      var cellCache = this._cellCache;
      var isScrollingOptOut = this.props.isScrollingOptOut;

      // Reset cell and style caches once scrolling stops.
      // This makes Grid simpler to use (since cells commonly change).
      // And it keeps the caches from growing too large.
      // Performance is most sensitive when a user is scrolling.
      // Don't clear visible cells from cellCache if isScrollingOptOut is specified.
      // This keeps the cellCache to a resonable size.

      this._cellCache = {};
      this._styleCache = {};

      // Copy over the visible cell styles so avoid unnecessary re-render.
      for (var rowIndex = this._rowStartIndex; rowIndex <= this._rowStopIndex; rowIndex++) {
        for (var columnIndex = this._columnStartIndex; columnIndex <= this._columnStopIndex; columnIndex++) {
          var key = rowIndex + '-' + columnIndex;
          this._styleCache[key] = styleCache[key];

          if (isScrollingOptOut) {
            this._cellCache[key] = cellCache[key];
          }
        }
      }
    }
  }, {
    key: '_updateScrollTopForScrollToRow',
    value: function _updateScrollTopForScrollToRow() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      var stateUpdate = Grid._getScrollTopForScrollToRowStateUpdate(props, state);
      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var newState = {};

      if (nextProps.columnCount === 0 && prevState.scrollLeft !== 0 || nextProps.rowCount === 0 && prevState.scrollTop !== 0) {
        newState.scrollLeft = 0;
        newState.scrollTop = 0;

        // only use scroll{Left,Top} from props if scrollTo{Column,Row} isn't specified
        // scrollTo{Column,Row} should override scroll{Left,Top}
      } else if (nextProps.scrollLeft !== prevState.scrollLeft && nextProps.scrollToColumn < 0 || nextProps.scrollTop !== prevState.scrollTop && nextProps.scrollToRow < 0) {
        (0, _assign2.default)(newState, Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: nextProps.scrollLeft,
          scrollTop: nextProps.scrollTop
        }));
      }

      var instanceProps = prevState.instanceProps;

      // Initially we should not clearStyleCache

      newState.needToResetStyleCache = false;
      if (nextProps.columnWidth !== instanceProps.prevColumnWidth || nextProps.rowHeight !== instanceProps.prevRowHeight) {
        // Reset cache. set it to {} in render
        newState.needToResetStyleCache = true;
      }

      instanceProps.columnSizeAndPositionManager.configure({
        cellCount: nextProps.columnCount,
        estimatedCellSize: Grid._getEstimatedColumnSize(nextProps),
        cellSizeGetter: Grid._wrapSizeGetter(nextProps.columnWidth)
      });

      instanceProps.rowSizeAndPositionManager.configure({
        cellCount: nextProps.rowCount,
        estimatedCellSize: Grid._getEstimatedRowSize(nextProps),
        cellSizeGetter: Grid._wrapSizeGetter(nextProps.rowHeight)
      });

      if (instanceProps.prevColumnCount === 0 || instanceProps.prevRowCount === 0) {
        instanceProps.prevColumnCount = 0;
        instanceProps.prevRowCount = 0;
      }

      // If scrolling is controlled outside this component, clear cache when scrolling stops
      if (nextProps.autoHeight && nextProps.isScrolling === false && instanceProps.prevIsScrolling === true) {
        (0, _assign2.default)(newState, {
          isScrolling: false
        });
      }

      var maybeStateA = void 0;
      var maybeStateB = void 0;

      (0, _calculateSizeAndPositionDataAndUpdateScrollOffset2.default)({
        cellCount: instanceProps.prevColumnCount,
        cellSize: typeof instanceProps.prevColumnWidth === 'number' ? instanceProps.prevColumnWidth : null,
        computeMetadataCallback: function computeMetadataCallback() {
          return instanceProps.columnSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.columnCount,
        nextCellSize: typeof nextProps.columnWidth === 'number' ? nextProps.columnWidth : null,
        nextScrollToIndex: nextProps.scrollToColumn,
        scrollToIndex: instanceProps.prevScrollToColumn,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          maybeStateA = Grid._getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState);
        }
      });
      (0, _calculateSizeAndPositionDataAndUpdateScrollOffset2.default)({
        cellCount: instanceProps.prevRowCount,
        cellSize: typeof instanceProps.prevRowHeight === 'number' ? instanceProps.prevRowHeight : null,
        computeMetadataCallback: function computeMetadataCallback() {
          return instanceProps.rowSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.rowCount,
        nextCellSize: typeof nextProps.rowHeight === 'number' ? nextProps.rowHeight : null,
        nextScrollToIndex: nextProps.scrollToRow,
        scrollToIndex: instanceProps.prevScrollToRow,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          maybeStateB = Grid._getScrollTopForScrollToRowStateUpdate(nextProps, prevState);
        }
      });

      instanceProps.prevColumnCount = nextProps.columnCount;
      instanceProps.prevColumnWidth = nextProps.columnWidth;
      instanceProps.prevIsScrolling = nextProps.isScrolling === true;
      instanceProps.prevRowCount = nextProps.rowCount;
      instanceProps.prevRowHeight = nextProps.rowHeight;
      instanceProps.prevScrollToColumn = nextProps.scrollToColumn;
      instanceProps.prevScrollToRow = nextProps.scrollToRow;

      // getting scrollBarSize (moved from componentWillMount)
      instanceProps.scrollbarSize = nextProps.getScrollbarSize();
      if (instanceProps.scrollbarSize === undefined) {
        instanceProps.scrollbarSizeMeasured = false;
        instanceProps.scrollbarSize = 0;
      } else {
        instanceProps.scrollbarSizeMeasured = true;
      }

      newState.instanceProps = instanceProps;

      return (0, _extends3.default)({}, newState, maybeStateA, maybeStateB);
    }
  }, {
    key: '_getEstimatedColumnSize',
    value: function _getEstimatedColumnSize(props) {
      return typeof props.columnWidth === 'number' ? props.columnWidth : props.estimatedColumnSize;
    }
  }, {
    key: '_getEstimatedRowSize',
    value: function _getEstimatedRowSize(props) {
      return typeof props.rowHeight === 'number' ? props.rowHeight : props.estimatedRowSize;
    }
  }, {
    key: '_getScrollToPositionStateUpdate',


    /**
     * Get the updated state after scrolling to
     * scrollLeft and scrollTop
     */
    value: function _getScrollToPositionStateUpdate(_ref9) {
      var prevState = _ref9.prevState,
          scrollLeft = _ref9.scrollLeft,
          scrollTop = _ref9.scrollTop;

      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };

      if (typeof scrollLeft === 'number' && scrollLeft >= 0) {
        newState.scrollDirectionHorizontal = scrollLeft > prevState.scrollLeft ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD;
        newState.scrollLeft = scrollLeft;
      }

      if (typeof scrollTop === 'number' && scrollTop >= 0) {
        newState.scrollDirectionVertical = scrollTop > prevState.scrollTop ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD;
        newState.scrollTop = scrollTop;
      }

      if (typeof scrollLeft === 'number' && scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft || typeof scrollTop === 'number' && scrollTop >= 0 && scrollTop !== prevState.scrollTop) {
        return newState;
      }
      return null;
    }
  }, {
    key: '_wrapSizeGetter',
    value: function _wrapSizeGetter(value) {
      return typeof value === 'function' ? value : function () {
        return value;
      };
    }
  }, {
    key: '_getCalculatedScrollLeft',
    value: function _getCalculatedScrollLeft(nextProps, prevState) {
      var columnCount = nextProps.columnCount,
          height = nextProps.height,
          scrollToAlignment = nextProps.scrollToAlignment,
          scrollToColumn = nextProps.scrollToColumn,
          width = nextProps.width;
      var scrollLeft = prevState.scrollLeft,
          instanceProps = prevState.instanceProps;


      if (columnCount > 0) {
        var finalColumn = columnCount - 1;
        var targetIndex = scrollToColumn < 0 ? finalColumn : Math.min(finalColumn, scrollToColumn);
        var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
        var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalRowsHeight > height ? instanceProps.scrollbarSize : 0;

        return instanceProps.columnSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: width - scrollBarSize,
          currentOffset: scrollLeft,
          targetIndex: targetIndex
        });
      }
      return 0;
    }
  }, {
    key: '_getScrollLeftForScrollToColumnStateUpdate',
    value: function _getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState) {
      var scrollLeft = prevState.scrollLeft;

      var calculatedScrollLeft = Grid._getCalculatedScrollLeft(nextProps, prevState);

      if (typeof calculatedScrollLeft === 'number' && calculatedScrollLeft >= 0 && scrollLeft !== calculatedScrollLeft) {
        return Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: calculatedScrollLeft,
          scrollTop: -1
        });
      }
      return null;
    }
  }, {
    key: '_getCalculatedScrollTop',
    value: function _getCalculatedScrollTop(nextProps, prevState) {
      var height = nextProps.height,
          rowCount = nextProps.rowCount,
          scrollToAlignment = nextProps.scrollToAlignment,
          scrollToRow = nextProps.scrollToRow,
          width = nextProps.width;
      var scrollTop = prevState.scrollTop,
          instanceProps = prevState.instanceProps;


      if (rowCount > 0) {
        var finalRow = rowCount - 1;
        var targetIndex = scrollToRow < 0 ? finalRow : Math.min(finalRow, scrollToRow);
        var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
        var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;

        return instanceProps.rowSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: height - scrollBarSize,
          currentOffset: scrollTop,
          targetIndex: targetIndex
        });
      }
      return 0;
    }
  }, {
    key: '_getScrollTopForScrollToRowStateUpdate',
    value: function _getScrollTopForScrollToRowStateUpdate(nextProps, prevState) {
      var scrollTop = prevState.scrollTop;

      var calculatedScrollTop = Grid._getCalculatedScrollTop(nextProps, prevState);

      if (typeof calculatedScrollTop === 'number' && calculatedScrollTop >= 0 && scrollTop !== calculatedScrollTop) {
        return Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: -1,
          scrollTop: calculatedScrollTop
        });
      }
      return null;
    }
  }]);
  return Grid;
}(React.PureComponent);

Grid.defaultProps = {
  'aria-label': 'grid',
  'aria-readonly': true,
  autoContainerWidth: false,
  autoHeight: false,
  autoWidth: false,
  cellRangeRenderer: _defaultCellRangeRenderer2.default,
  containerRole: 'rowgroup',
  containerStyle: {},
  estimatedColumnSize: 100,
  estimatedRowSize: 30,
  getScrollbarSize: _scrollbarSize2.default,
  noContentRenderer: renderNull,
  onScroll: function onScroll() {},
  onScrollbarPresenceChange: function onScrollbarPresenceChange() {},
  onSectionRendered: function onSectionRendered() {},
  overscanColumnCount: 0,
  overscanIndicesGetter: _defaultOverscanIndicesGetter2.default,
  overscanRowCount: 10,
  role: 'grid',
  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
  scrollToAlignment: 'auto',
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  tabIndex: 0,
  isScrollingOptOut: false
};
Grid.propTypes =  true ? null : {
  "aria-label": _propTypes2.default.string.isRequired,
  "aria-readonly": _propTypes2.default.bool,


  /**
   * Set the width of the inner scrollable container to 'auto'.
   * This is useful for single-column Grids to ensure that the column doesn't extend below a vertical scrollbar.
   */
  autoContainerWidth: _propTypes2.default.bool.isRequired,


  /**
   * Removes fixed height from the scrollingContainer so that the total height of rows can stretch the window.
   * Intended for use with WindowScroller
   */
  autoHeight: _propTypes2.default.bool.isRequired,


  /**
   * Removes fixed width from the scrollingContainer so that the total width of rows can stretch the window.
   * Intended for use with WindowScroller
   */
  autoWidth: _propTypes2.default.bool.isRequired,


  /** Responsible for rendering a cell given an row and column index.  */
  cellRenderer: function cellRenderer() {
    return (typeof _types.bpfrpt_proptype_CellRenderer === 'function' ? _types.bpfrpt_proptype_CellRenderer.isRequired ? _types.bpfrpt_proptype_CellRenderer.isRequired : _types.bpfrpt_proptype_CellRenderer : _propTypes2.default.shape(_types.bpfrpt_proptype_CellRenderer).isRequired).apply(this, arguments);
  },


  /** Responsible for rendering a group of cells given their index ranges.  */
  cellRangeRenderer: function cellRangeRenderer() {
    return (typeof _types.bpfrpt_proptype_CellRangeRenderer === 'function' ? _types.bpfrpt_proptype_CellRangeRenderer.isRequired ? _types.bpfrpt_proptype_CellRangeRenderer.isRequired : _types.bpfrpt_proptype_CellRangeRenderer : _propTypes2.default.shape(_types.bpfrpt_proptype_CellRangeRenderer).isRequired).apply(this, arguments);
  },


  /** Optional custom CSS class name to attach to root Grid element.  */
  className: _propTypes2.default.string,


  /** Number of columns in grid.  */
  columnCount: _propTypes2.default.number.isRequired,


  /** Either a fixed column width (number) or a function that returns the width of a column given its index.  */
  columnWidth: function columnWidth() {
    return (typeof _types.bpfrpt_proptype_CellSize === 'function' ? _types.bpfrpt_proptype_CellSize.isRequired ? _types.bpfrpt_proptype_CellSize.isRequired : _types.bpfrpt_proptype_CellSize : _propTypes2.default.shape(_types.bpfrpt_proptype_CellSize).isRequired).apply(this, arguments);
  },


  /** Unfiltered props for the Grid container. */
  containerProps: _propTypes2.default.object,


  /** ARIA role for the cell-container.  */
  containerRole: _propTypes2.default.string.isRequired,


  /** Optional inline style applied to inner cell-container */
  containerStyle: _propTypes2.default.object.isRequired,


  /**
   * If CellMeasurer is used to measure this Grid's children, this should be a pointer to its CellMeasurerCache.
   * A shared CellMeasurerCache reference enables Grid and CellMeasurer to share measurement data.
   */
  deferredMeasurementCache: _propTypes2.default.object,


  /**
   * Used to estimate the total width of a Grid before all of its columns have actually been measured.
   * The estimated total width is adjusted as columns are rendered.
   */
  estimatedColumnSize: _propTypes2.default.number.isRequired,


  /**
   * Used to estimate the total height of a Grid before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  estimatedRowSize: _propTypes2.default.number.isRequired,


  /** Exposed for testing purposes only.  */
  getScrollbarSize: _propTypes2.default.func.isRequired,


  /** Height of Grid; this property determines the number of visible (vs virtualized) rows.  */
  height: _propTypes2.default.number.isRequired,


  /** Optional custom id to attach to root Grid element.  */
  id: _propTypes2.default.string,


  /**
   * Override internal is-scrolling state tracking.
   * This property is primarily intended for use with the WindowScroller component.
   */
  isScrolling: _propTypes2.default.bool,


  /**
   * Opt-out of isScrolling param passed to cellRangeRenderer.
   * To avoid the extra render when scroll stops.
   */
  isScrollingOptOut: _propTypes2.default.bool.isRequired,


  /** Optional renderer to be used in place of rows when either :rowCount or :columnCount is 0.  */
  noContentRenderer: function noContentRenderer() {
    return (typeof _types.bpfrpt_proptype_NoContentRenderer === 'function' ? _types.bpfrpt_proptype_NoContentRenderer.isRequired ? _types.bpfrpt_proptype_NoContentRenderer.isRequired : _types.bpfrpt_proptype_NoContentRenderer : _propTypes2.default.shape(_types.bpfrpt_proptype_NoContentRenderer).isRequired).apply(this, arguments);
  },


  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   */
  onScroll: _propTypes2.default.func.isRequired,


  /**
   * Called whenever a horizontal or vertical scrollbar is added or removed.
   * This prop is not intended for end-user use;
   * It is used by MultiGrid to support fixed-row/fixed-column scroll syncing.
   */
  onScrollbarPresenceChange: _propTypes2.default.func.isRequired,


  /** Callback invoked with information about the section of the Grid that was just rendered.  */
  onSectionRendered: _propTypes2.default.func.isRequired,


  /**
   * Number of columns to render before/after the visible section of the grid.
   * These columns can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
   */
  overscanColumnCount: _propTypes2.default.number.isRequired,


  /**
   * Calculates the number of cells to overscan before and after a specified range.
   * This function ensures that overscanning doesn't exceed the available cells.
   */
  overscanIndicesGetter: function overscanIndicesGetter() {
    return (typeof _types.bpfrpt_proptype_OverscanIndicesGetter === 'function' ? _types.bpfrpt_proptype_OverscanIndicesGetter.isRequired ? _types.bpfrpt_proptype_OverscanIndicesGetter.isRequired : _types.bpfrpt_proptype_OverscanIndicesGetter : _propTypes2.default.shape(_types.bpfrpt_proptype_OverscanIndicesGetter).isRequired).apply(this, arguments);
  },


  /**
   * Number of rows to render above/below the visible section of the grid.
   * These rows can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
   */
  overscanRowCount: _propTypes2.default.number.isRequired,


  /** ARIA role for the grid element.  */
  role: _propTypes2.default.string.isRequired,


  /**
   * Either a fixed row height (number) or a function that returns the height of a row given its index.
   * Should implement the following interface: ({ index: number }): number
   */
  rowHeight: function rowHeight() {
    return (typeof _types.bpfrpt_proptype_CellSize === 'function' ? _types.bpfrpt_proptype_CellSize.isRequired ? _types.bpfrpt_proptype_CellSize.isRequired : _types.bpfrpt_proptype_CellSize : _propTypes2.default.shape(_types.bpfrpt_proptype_CellSize).isRequired).apply(this, arguments);
  },


  /** Number of rows in grid.  */
  rowCount: _propTypes2.default.number.isRequired,


  /** Wait this amount of time after the last scroll event before resetting Grid `pointer-events`. */
  scrollingResetTimeInterval: _propTypes2.default.number.isRequired,


  /** Horizontal offset. */
  scrollLeft: _propTypes2.default.number,


  /**
   * Controls scroll-to-cell behavior of the Grid.
   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
   */
  scrollToAlignment: function scrollToAlignment() {
    return (typeof _types.bpfrpt_proptype_Alignment === 'function' ? _types.bpfrpt_proptype_Alignment.isRequired ? _types.bpfrpt_proptype_Alignment.isRequired : _types.bpfrpt_proptype_Alignment : _propTypes2.default.shape(_types.bpfrpt_proptype_Alignment).isRequired).apply(this, arguments);
  },


  /** Column index to ensure visible (by forcefully scrolling if necessary) */
  scrollToColumn: _propTypes2.default.number.isRequired,


  /** Vertical offset. */
  scrollTop: _propTypes2.default.number,


  /** Row index to ensure visible (by forcefully scrolling if necessary) */
  scrollToRow: _propTypes2.default.number.isRequired,


  /** Optional inline style */
  style: _propTypes2.default.object.isRequired,


  /** Tab index for focus */
  tabIndex: _propTypes2.default.number,


  /** Width of Grid; this property determines the number of visible (vs virtualized) columns.  */
  width: _propTypes2.default.number.isRequired
};


(0, _reactLifecyclesCompat.polyfill)(Grid);
exports.default = Grid;

/***/ }),

/***/ 2215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calculateSizeAndPositionDataAndUpdateScrollOffset;
function calculateSizeAndPositionDataAndUpdateScrollOffset(_ref) {
  var cellCount = _ref.cellCount,
      cellSize = _ref.cellSize,
      computeMetadataCallback = _ref.computeMetadataCallback,
      computeMetadataCallbackProps = _ref.computeMetadataCallbackProps,
      nextCellsCount = _ref.nextCellsCount,
      nextCellSize = _ref.nextCellSize,
      nextScrollToIndex = _ref.nextScrollToIndex,
      scrollToIndex = _ref.scrollToIndex,
      updateScrollOffsetForScrollToIndex = _ref.updateScrollOffsetForScrollToIndex;

  // Don't compare cell sizes if they are functions because inline functions would cause infinite loops.
  // In that event users should use the manual recompute methods to inform of changes.
  if (cellCount !== nextCellsCount || (typeof cellSize === 'number' || typeof nextCellSize === 'number') && cellSize !== nextCellSize) {
    computeMetadataCallback(computeMetadataCallbackProps);

    // Updated cell metadata may have hidden the previous scrolled-to item.
    // In this case we should also update the scrollTop to ensure it stays visible.
    if (scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex) {
      updateScrollOffsetForScrollToIndex();
    }
  }
}

/**
 * Helper method that determines when to recalculate row or column metadata.
 */

/***/ }),

/***/ 2216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _types = __webpack_require__(1980);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Just-in-time calculates and caches size and position information for a collection of cells.
 */

var CellSizeAndPositionManager = function () {

  // Used in deferred mode to track which cells have been queued for measurement.

  // Cache of size and position data for cells, mapped by cell index.
  // Note that invalid values may exist in this map so only rely on cells up to this._lastMeasuredIndex
  function CellSizeAndPositionManager(_ref) {
    var cellCount = _ref.cellCount,
        cellSizeGetter = _ref.cellSizeGetter,
        estimatedCellSize = _ref.estimatedCellSize;
    (0, _classCallCheck3.default)(this, CellSizeAndPositionManager);
    this._cellSizeAndPositionData = {};
    this._lastMeasuredIndex = -1;
    this._lastBatchedIndex = -1;

    this._cellSizeGetter = cellSizeGetter;
    this._cellCount = cellCount;
    this._estimatedCellSize = estimatedCellSize;
  }

  // Measurements for cells up to this index can be trusted; cells afterward should be estimated.


  (0, _createClass3.default)(CellSizeAndPositionManager, [{
    key: 'areOffsetsAdjusted',
    value: function areOffsetsAdjusted() {
      return false;
    }
  }, {
    key: 'configure',
    value: function configure(_ref2) {
      var cellCount = _ref2.cellCount,
          estimatedCellSize = _ref2.estimatedCellSize,
          cellSizeGetter = _ref2.cellSizeGetter;

      this._cellCount = cellCount;
      this._estimatedCellSize = estimatedCellSize;
      this._cellSizeGetter = cellSizeGetter;
    }
  }, {
    key: 'getCellCount',
    value: function getCellCount() {
      return this._cellCount;
    }
  }, {
    key: 'getEstimatedCellSize',
    value: function getEstimatedCellSize() {
      return this._estimatedCellSize;
    }
  }, {
    key: 'getLastMeasuredIndex',
    value: function getLastMeasuredIndex() {
      return this._lastMeasuredIndex;
    }
  }, {
    key: 'getOffsetAdjustment',
    value: function getOffsetAdjustment() {
      return 0;
    }

    /**
     * This method returns the size and position for the cell at the specified index.
     * It just-in-time calculates (or used cached values) for cells leading up to the index.
     */

  }, {
    key: 'getSizeAndPositionOfCell',
    value: function getSizeAndPositionOfCell(index) {
      if (index < 0 || index >= this._cellCount) {
        throw Error('Requested index ' + index + ' is outside of range 0..' + this._cellCount);
      }

      if (index > this._lastMeasuredIndex) {
        var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
        var _offset = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;

        for (var i = this._lastMeasuredIndex + 1; i <= index; i++) {
          var _size = this._cellSizeGetter({ index: i });

          // undefined or NaN probably means a logic error in the size getter.
          // null means we're using CellMeasurer and haven't yet measured a given index.
          if (_size === undefined || isNaN(_size)) {
            throw Error('Invalid size returned for cell ' + i + ' of value ' + _size);
          } else if (_size === null) {
            this._cellSizeAndPositionData[i] = {
              offset: _offset,
              size: 0
            };

            this._lastBatchedIndex = index;
          } else {
            this._cellSizeAndPositionData[i] = {
              offset: _offset,
              size: _size
            };

            _offset += _size;

            this._lastMeasuredIndex = index;
          }
        }
      }

      return this._cellSizeAndPositionData[index];
    }
  }, {
    key: 'getSizeAndPositionOfLastMeasuredCell',
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._lastMeasuredIndex >= 0 ? this._cellSizeAndPositionData[this._lastMeasuredIndex] : {
        offset: 0,
        size: 0
      };
    }

    /**
     * Total size of all cells being measured.
     * This value will be completely estimated initially.
     * As cells are measured, the estimate will be updated.
     */

  }, {
    key: 'getTotalSize',
    value: function getTotalSize() {
      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var totalSizeOfMeasuredCells = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;
      var numUnmeasuredCells = this._cellCount - this._lastMeasuredIndex - 1;
      var totalSizeOfUnmeasuredCells = numUnmeasuredCells * this._estimatedCellSize;
      return totalSizeOfMeasuredCells + totalSizeOfUnmeasuredCells;
    }

    /**
     * Determines a new offset that ensures a certain cell is visible, given the current offset.
     * If the cell is already visible then the current offset will be returned.
     * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
     *
     * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
     * @param containerSize Size (width or height) of the container viewport
     * @param currentOffset Container's current (x or y) offset
     * @param totalSize Total size (width or height) of all cells
     * @return Offset to use to ensure the specified cell is visible
     */

  }, {
    key: 'getUpdatedOffsetForIndex',
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
          align = _ref3$align === undefined ? 'auto' : _ref3$align,
          containerSize = _ref3.containerSize,
          currentOffset = _ref3.currentOffset,
          targetIndex = _ref3.targetIndex;

      if (containerSize <= 0) {
        return 0;
      }

      var datum = this.getSizeAndPositionOfCell(targetIndex);
      var maxOffset = datum.offset;
      var minOffset = maxOffset - containerSize + datum.size;

      var idealOffset = void 0;

      switch (align) {
        case 'start':
          idealOffset = maxOffset;
          break;
        case 'end':
          idealOffset = minOffset;
          break;
        case 'center':
          idealOffset = maxOffset - (containerSize - datum.size) / 2;
          break;
        default:
          idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
          break;
      }

      var totalSize = this.getTotalSize();

      return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
    }
  }, {
    key: 'getVisibleCellRange',
    value: function getVisibleCellRange(params) {
      var containerSize = params.containerSize,
          offset = params.offset;


      var totalSize = this.getTotalSize();

      if (totalSize === 0) {
        return {};
      }

      var maxOffset = offset + containerSize;
      var start = this._findNearestCell(offset);

      var datum = this.getSizeAndPositionOfCell(start);
      offset = datum.offset + datum.size;

      var stop = start;

      while (offset < maxOffset && stop < this._cellCount - 1) {
        stop++;

        offset += this.getSizeAndPositionOfCell(stop).size;
      }

      return {
        start: start,
        stop: stop
      };
    }

    /**
     * Clear all cached values for cells after the specified index.
     * This method should be called for any cell that has changed its size.
     * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionOfCell() is called.
     */

  }, {
    key: 'resetCell',
    value: function resetCell(index) {
      this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
    }
  }, {
    key: '_binarySearch',
    value: function _binarySearch(high, low, offset) {
      while (low <= high) {
        var middle = low + Math.floor((high - low) / 2);
        var _currentOffset = this.getSizeAndPositionOfCell(middle).offset;

        if (_currentOffset === offset) {
          return middle;
        } else if (_currentOffset < offset) {
          low = middle + 1;
        } else if (_currentOffset > offset) {
          high = middle - 1;
        }
      }

      if (low > 0) {
        return low - 1;
      } else {
        return 0;
      }
    }
  }, {
    key: '_exponentialSearch',
    value: function _exponentialSearch(index, offset) {
      var interval = 1;

      while (index < this._cellCount && this.getSizeAndPositionOfCell(index).offset < offset) {
        index += interval;
        interval *= 2;
      }

      return this._binarySearch(Math.min(index, this._cellCount - 1), Math.floor(index / 2), offset);
    }

    /**
     * Searches for the cell (index) nearest the specified offset.
     *
     * If no exact match is found the next lowest cell index will be returned.
     * This allows partially visible cells (with offsets just before/above the fold) to be visible.
     */

  }, {
    key: '_findNearestCell',
    value: function _findNearestCell(offset) {
      if (isNaN(offset)) {
        throw Error('Invalid offset ' + offset + ' specified');
      }

      // Our search algorithms find the nearest match at or below the specified offset.
      // So make sure the offset is at least 0 or no match will be found.
      offset = Math.max(0, offset);

      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var lastMeasuredIndex = Math.max(0, this._lastMeasuredIndex);

      if (lastMeasuredCellSizeAndPosition.offset >= offset) {
        // If we've already measured cells within this range just use a binary search as it's faster.
        return this._binarySearch(lastMeasuredIndex, 0, offset);
      } else {
        // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
        // The exponential search avoids pre-computing sizes for the full set of cells as a binary search would.
        // The overall complexity for this approach is O(log n).
        return this._exponentialSearch(lastMeasuredIndex, offset);
      }
    }
  }]);
  return CellSizeAndPositionManager;
}();

exports.default = CellSizeAndPositionManager;

/***/ }),

/***/ 2217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEFAULT_MAX_ELEMENT_SIZE = 1500000;
var CHROME_MAX_ELEMENT_SIZE = 1.67771e7;

var isBrowser = function isBrowser() {
  return typeof window !== 'undefined';
};

var isChrome = function isChrome() {
  return !!window.chrome && !!window.chrome.webstore;
};

var getMaxElementSize = exports.getMaxElementSize = function getMaxElementSize() {
  if (isBrowser()) {
    if (isChrome()) {
      return CHROME_MAX_ELEMENT_SIZE;
    }
  }
  return DEFAULT_MAX_ELEMENT_SIZE;
};

/***/ }),

/***/ 2218:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(2219), __esModule: true };

/***/ }),

/***/ 2219:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2220);
module.exports = __webpack_require__(45).Object.keys;


/***/ }),

/***/ 2220:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(182);
var $keys = __webpack_require__(180);

__webpack_require__(391)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ 2221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateScrollIndexHelper;

var _ScalingCellSizeAndPositionManager = __webpack_require__(1987);

var _ScalingCellSizeAndPositionManager2 = _interopRequireDefault(_ScalingCellSizeAndPositionManager);

var _types = __webpack_require__(1980);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Helper function that determines when to update scroll offsets to ensure that a scroll-to-index remains visible.
 * This function also ensures that the scroll ofset isn't past the last column/row of cells.
 */

function updateScrollIndexHelper(_ref) {
  var cellSize = _ref.cellSize,
      cellSizeAndPositionManager = _ref.cellSizeAndPositionManager,
      previousCellsCount = _ref.previousCellsCount,
      previousCellSize = _ref.previousCellSize,
      previousScrollToAlignment = _ref.previousScrollToAlignment,
      previousScrollToIndex = _ref.previousScrollToIndex,
      previousSize = _ref.previousSize,
      scrollOffset = _ref.scrollOffset,
      scrollToAlignment = _ref.scrollToAlignment,
      scrollToIndex = _ref.scrollToIndex,
      size = _ref.size,
      sizeJustIncreasedFromZero = _ref.sizeJustIncreasedFromZero,
      updateScrollIndexCallback = _ref.updateScrollIndexCallback;

  var cellCount = cellSizeAndPositionManager.getCellCount();
  var hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount;
  var sizeHasChanged = size !== previousSize || sizeJustIncreasedFromZero || !previousCellSize || typeof cellSize === 'number' && cellSize !== previousCellSize;

  // If we have a new scroll target OR if height/row-height has changed,
  // We should ensure that the scroll target is visible.
  if (hasScrollToIndex && (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex)) {
    updateScrollIndexCallback(scrollToIndex);

    // If we don't have a selected item but list size or number of children have decreased,
    // Make sure we aren't scrolled too far past the current content.
  } else if (!hasScrollToIndex && cellCount > 0 && (size < previousSize || cellCount < previousCellsCount)) {
    // We need to ensure that the current scroll offset is still within the collection's range.
    // To do this, we don't need to measure everything; CellMeasurer would perform poorly.
    // Just check to make sure we're still okay.
    // Only adjust the scroll position if we've scrolled below the last set of rows.
    if (scrollOffset > cellSizeAndPositionManager.getTotalSize() - size) {
      updateScrollIndexCallback(cellCount - 1);
    }
  }
}

/***/ }),

/***/ 2222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (recalc) {
  if (!size && size !== 0 || recalc) {
    if (_inDOM2.default) {
      var scrollDiv = document.createElement('div');

      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';

      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
};

var _inDOM = __webpack_require__(2223);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var size = void 0;

module.exports = exports['default'];

/***/ }),

/***/ 2223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];

/***/ }),

/***/ 2224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SCROLL_DIRECTION_VERTICAL = exports.SCROLL_DIRECTION_HORIZONTAL = exports.SCROLL_DIRECTION_FORWARD = exports.SCROLL_DIRECTION_BACKWARD = undefined;
exports.default = defaultOverscanIndicesGetter;

var _types = __webpack_require__(1980);

var SCROLL_DIRECTION_BACKWARD = exports.SCROLL_DIRECTION_BACKWARD = -1;

var SCROLL_DIRECTION_FORWARD = exports.SCROLL_DIRECTION_FORWARD = 1;

var SCROLL_DIRECTION_HORIZONTAL = exports.SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
var SCROLL_DIRECTION_VERTICAL = exports.SCROLL_DIRECTION_VERTICAL = 'vertical';

/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 */

function defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;

  // Make sure we render at least 1 cell extra before and after (except near boundaries)
  // This is necessary in order to support keyboard navigation (TAB/SHIFT+TAB) in some cases
  // For more info see issues #625
  overscanCellsCount = Math.max(1, overscanCellsCount);

  if (scrollDirection === SCROLL_DIRECTION_FORWARD) {
    return {
      overscanStartIndex: Math.max(0, startIndex - 1),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + 1)
    };
  }
}

/***/ }),

/***/ 2225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfiniteLoader = undefined;

var _InfiniteLoader = __webpack_require__(2226);

var _InfiniteLoader2 = _interopRequireDefault(_InfiniteLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _InfiniteLoader2.default;
exports.InfiniteLoader = _InfiniteLoader2.default;

/***/ }),

/***/ 2226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(666);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.isRangeVisible = isRangeVisible;
exports.scanForUnloadedRanges = scanForUnloadedRanges;
exports.forceUpdateReactVirtualizedComponent = forceUpdateReactVirtualizedComponent;

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createCallbackMemoizer = __webpack_require__(1998);

var _createCallbackMemoizer2 = _interopRequireDefault(_createCallbackMemoizer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Higher-order component that manages lazy-loading for "infinite" data.
 * This component decorates a virtual component and just-in-time prefetches rows as a user scrolls.
 * It is intended as a convenience component; fork it if you'd like finer-grained control over data-loading.
 */
var InfiniteLoader = function (_React$PureComponent) {
  (0, _inherits3.default)(InfiniteLoader, _React$PureComponent);

  function InfiniteLoader(props, context) {
    (0, _classCallCheck3.default)(this, InfiniteLoader);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InfiniteLoader.__proto__ || (0, _getPrototypeOf2.default)(InfiniteLoader)).call(this, props, context));

    _this._loadMoreRowsMemoizer = (0, _createCallbackMemoizer2.default)();

    _this._onRowsRendered = _this._onRowsRendered.bind(_this);
    _this._registerChild = _this._registerChild.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(InfiniteLoader, [{
    key: 'resetLoadMoreRowsCache',
    value: function resetLoadMoreRowsCache(autoReload) {
      this._loadMoreRowsMemoizer = (0, _createCallbackMemoizer2.default)();

      if (autoReload) {
        this._doStuff(this._lastRenderedStartIndex, this._lastRenderedStopIndex);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return children({
        onRowsRendered: this._onRowsRendered,
        registerChild: this._registerChild
      });
    }
  }, {
    key: '_loadUnloadedRanges',
    value: function _loadUnloadedRanges(unloadedRanges) {
      var _this2 = this;

      var loadMoreRows = this.props.loadMoreRows;


      unloadedRanges.forEach(function (unloadedRange) {
        var promise = loadMoreRows(unloadedRange);
        if (promise) {
          promise.then(function () {
            // Refresh the visible rows if any of them have just been loaded.
            // Otherwise they will remain in their unloaded visual state.
            if (isRangeVisible({
              lastRenderedStartIndex: _this2._lastRenderedStartIndex,
              lastRenderedStopIndex: _this2._lastRenderedStopIndex,
              startIndex: unloadedRange.startIndex,
              stopIndex: unloadedRange.stopIndex
            })) {
              if (_this2._registeredChild) {
                forceUpdateReactVirtualizedComponent(_this2._registeredChild, _this2._lastRenderedStartIndex);
              }
            }
          });
        }
      });
    }
  }, {
    key: '_onRowsRendered',
    value: function _onRowsRendered(_ref) {
      var startIndex = _ref.startIndex,
          stopIndex = _ref.stopIndex;

      this._lastRenderedStartIndex = startIndex;
      this._lastRenderedStopIndex = stopIndex;

      this._doStuff(startIndex, stopIndex);
    }
  }, {
    key: '_doStuff',
    value: function _doStuff(startIndex, stopIndex) {
      var _this3 = this;

      var _props = this.props,
          isRowLoaded = _props.isRowLoaded,
          minimumBatchSize = _props.minimumBatchSize,
          rowCount = _props.rowCount,
          threshold = _props.threshold;


      var unloadedRanges = scanForUnloadedRanges({
        isRowLoaded: isRowLoaded,
        minimumBatchSize: minimumBatchSize,
        rowCount: rowCount,
        startIndex: Math.max(0, startIndex - threshold),
        stopIndex: Math.min(rowCount - 1, stopIndex + threshold)
      });

      // For memoize comparison
      var squashedUnloadedRanges = unloadedRanges.reduce(function (reduced, unloadedRange) {
        return reduced.concat([unloadedRange.startIndex, unloadedRange.stopIndex]);
      }, []);

      this._loadMoreRowsMemoizer({
        callback: function callback() {
          _this3._loadUnloadedRanges(unloadedRanges);
        },
        indices: { squashedUnloadedRanges: squashedUnloadedRanges }
      });
    }
  }, {
    key: '_registerChild',
    value: function _registerChild(registeredChild) {
      this._registeredChild = registeredChild;
    }
  }]);
  return InfiniteLoader;
}(React.PureComponent);

/**
 * Determines if the specified start/stop range is visible based on the most recently rendered range.
 */


InfiniteLoader.defaultProps = {
  minimumBatchSize: 10,
  rowCount: 0,
  threshold: 15
};
exports.default = InfiniteLoader;
InfiniteLoader.propTypes =  false ? {
  /**
   * Function responsible for rendering a virtualized component.
   * This function should implement the following signature:
   * ({ onRowsRendered, registerChild }) => PropTypes.element
   *
   * The specified :onRowsRendered function should be passed through to the child's :onRowsRendered property.
   * The :registerChild callback should be set as the virtualized component's :ref.
   */
  children: _propTypes2.default.func.isRequired,

  /**
   * Function responsible for tracking the loaded state of each row.
   * It should implement the following signature: ({ index: number }): boolean
   */
  isRowLoaded: _propTypes2.default.func.isRequired,

  /**
   * Callback to be invoked when more rows must be loaded.
   * It should implement the following signature: ({ startIndex, stopIndex }): Promise
   * The returned Promise should be resolved once row data has finished loading.
   * It will be used to determine when to refresh the list with the newly-loaded data.
   * This callback may be called multiple times in reaction to a single scroll event.
   */
  loadMoreRows: _propTypes2.default.func.isRequired,

  /**
   * Minimum number of rows to be loaded at a time.
   * This property can be used to batch requests to reduce HTTP requests.
   */
  minimumBatchSize: _propTypes2.default.number.isRequired,

  /**
   * Number of rows in list; can be arbitrary high number if actual number is unknown.
   */
  rowCount: _propTypes2.default.number.isRequired,

  /**
   * Threshold at which to pre-fetch data.
   * A threshold X means that data will start loading when a user scrolls within X rows.
   * This value defaults to 15.
   */
  threshold: _propTypes2.default.number.isRequired
} : {};
function isRangeVisible(_ref2) {
  var lastRenderedStartIndex = _ref2.lastRenderedStartIndex,
      lastRenderedStopIndex = _ref2.lastRenderedStopIndex,
      startIndex = _ref2.startIndex,
      stopIndex = _ref2.stopIndex;

  return !(startIndex > lastRenderedStopIndex || stopIndex < lastRenderedStartIndex);
}

/**
 * Returns all of the ranges within a larger range that contain unloaded rows.
 */
function scanForUnloadedRanges(_ref3) {
  var isRowLoaded = _ref3.isRowLoaded,
      minimumBatchSize = _ref3.minimumBatchSize,
      rowCount = _ref3.rowCount,
      startIndex = _ref3.startIndex,
      stopIndex = _ref3.stopIndex;

  var unloadedRanges = [];

  var rangeStartIndex = null;
  var rangeStopIndex = null;

  for (var index = startIndex; index <= stopIndex; index++) {
    var loaded = isRowLoaded({ index: index });

    if (!loaded) {
      rangeStopIndex = index;
      if (rangeStartIndex === null) {
        rangeStartIndex = index;
      }
    } else if (rangeStopIndex !== null) {
      unloadedRanges.push({
        startIndex: rangeStartIndex,
        stopIndex: rangeStopIndex
      });

      rangeStartIndex = rangeStopIndex = null;
    }
  }

  // If :rangeStopIndex is not null it means we haven't ran out of unloaded rows.
  // Scan forward to try filling our :minimumBatchSize.
  if (rangeStopIndex !== null) {
    var potentialStopIndex = Math.min(Math.max(rangeStopIndex, rangeStartIndex + minimumBatchSize - 1), rowCount - 1);

    for (var _index = rangeStopIndex + 1; _index <= potentialStopIndex; _index++) {
      if (!isRowLoaded({ index: _index })) {
        rangeStopIndex = _index;
      } else {
        break;
      }
    }

    unloadedRanges.push({
      startIndex: rangeStartIndex,
      stopIndex: rangeStopIndex
    });
  }

  // Check to see if our first range ended prematurely.
  // In this case we should scan backwards to try filling our :minimumBatchSize.
  if (unloadedRanges.length) {
    var firstUnloadedRange = unloadedRanges[0];

    while (firstUnloadedRange.stopIndex - firstUnloadedRange.startIndex + 1 < minimumBatchSize && firstUnloadedRange.startIndex > 0) {
      var _index2 = firstUnloadedRange.startIndex - 1;

      if (!isRowLoaded({ index: _index2 })) {
        firstUnloadedRange.startIndex = _index2;
      } else {
        break;
      }
    }
  }

  return unloadedRanges;
}

/**
 * Since RV components use shallowCompare we need to force a render (even though props haven't changed).
 * However InfiniteLoader may wrap a Grid or it may wrap a Table or List.
 * In the first case the built-in React forceUpdate() method is sufficient to force a re-render,
 * But in the latter cases we need to use the RV-specific forceUpdateGrid() method.
 * Else the inner Grid will not be re-rendered and visuals may be stale.
 *
 * Additionally, while a Grid is scrolling the cells can be cached,
 * So it's important to invalidate that cache by recalculating sizes
 * before forcing a rerender.
 */
function forceUpdateReactVirtualizedComponent(component) {
  var currentIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var recomputeSize = typeof component.recomputeGridSize === 'function' ? component.recomputeGridSize : component.recomputeRowHeights;

  if (recomputeSize) {
    recomputeSize.call(component, currentIndex);
  } else {
    component.forceUpdate();
  }
}

/***/ }),

/***/ 2227:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可通过 ",
        [
          "code",
          "loadMore"
        ],
        " 属性实现加载更多功能。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Load more list with ",
        [
          "code",
          "loadMore"
        ],
        " property."
      ]
    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "加载更多",
      "en-US": "Load more"
    },
    "filename": "components/list/demo/loadmore.md",
    "id": "components-list-demo-loadmore"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Avatar<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Skeleton <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">import</span> reqwest <span class=\"token keyword\">from</span> <span class=\"token string\">'reqwest'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> count <span class=\"token operator\">=</span> <span class=\"token number\">3</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> fakeDataUrl <span class=\"token operator\">=</span> <span class=\"token template-string\"><span class=\"token string\">`https://randomuser.me/api/?results=</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>count<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">&amp;inc=name,gender,email,nat&amp;noinfo`</span></span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">LoadMoreList</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    initLoading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    data<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    list<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">getData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        initLoading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        data<span class=\"token punctuation\">:</span> res<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">,</span>\n        list<span class=\"token punctuation\">:</span> res<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  getData <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>callback<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">reqwest</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      url<span class=\"token punctuation\">:</span> fakeDataUrl<span class=\"token punctuation\">,</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'json'</span><span class=\"token punctuation\">,</span>\n      method<span class=\"token punctuation\">:</span> <span class=\"token string\">'get'</span><span class=\"token punctuation\">,</span>\n      contentType<span class=\"token punctuation\">:</span> <span class=\"token string\">'application/json'</span><span class=\"token punctuation\">,</span>\n      success<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  onLoadMore <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      list<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token keyword\">new</span> <span class=\"token class-name\">Array</span><span class=\"token punctuation\">(</span>count<span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> name<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">getData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        data<span class=\"token punctuation\">,</span>\n        list<span class=\"token punctuation\">:</span> data<span class=\"token punctuation\">,</span>\n        loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// Resetting window's offsetTop so as to display react-virtualized demo underfloor.</span>\n        <span class=\"token comment\" spellcheck=\"true\">// In real scene, you can using public method of react-virtualized:</span>\n        <span class=\"token comment\" spellcheck=\"true\">// https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized</span>\n        window<span class=\"token punctuation\">.</span><span class=\"token function\">dispatchEvent</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">new</span> <span class=\"token class-name\">Event</span><span class=\"token punctuation\">(</span><span class=\"token string\">'resize'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> initLoading<span class=\"token punctuation\">,</span> loading<span class=\"token punctuation\">,</span> list <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> loadMore <span class=\"token operator\">=</span> <span class=\"token operator\">!</span>initLoading <span class=\"token operator\">&amp;&amp;</span> <span class=\"token operator\">!</span>loading <span class=\"token operator\">?</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> textAlign<span class=\"token punctuation\">:</span> <span class=\"token string\">'center'</span><span class=\"token punctuation\">,</span> marginTop<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span><span class=\"token punctuation\">,</span> height<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span> lineHeight<span class=\"token punctuation\">:</span> <span class=\"token string\">'32px'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onLoadMore<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>loading more<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span>\n        <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo-loadmore-list<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">loading</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>initLoading<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">itemLayout</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>horizontal<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">loadMore</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>loadMore<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>list<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span> <span class=\"token attr-name\">actions={[&lt;a</span><span class=\"token punctuation\">></span></span>edit<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span><span class=\"token punctuation\">></span></span>more<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Skeleton</span> <span class=\"token attr-name\">avatar</span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">loading</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>loading<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">active</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item.Meta</span>\n                <span class=\"token attr-name\">avatar={&lt;Avatar</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span>\n                title<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://ant.design<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span>last<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n                description<span class=\"token operator\">=</span><span class=\"token string\">\"Ant Design, a design language for background applications, is refined by Ant UED Team\"</span>\n              <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Skeleton</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n      <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>LoadMoreList</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  var _reqwest = __webpack_require__(1981);

  var _reqwest2 = _interopRequireDefault(_reqwest);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var count = 3;
  var fakeDataUrl = "https://randomuser.me/api/?results=" + count + "&inc=name,gender,email,nat&noinfo";

  var LoadMoreList = function (_React$Component) {
    _inherits(LoadMoreList, _React$Component);

    function LoadMoreList() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, LoadMoreList);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoadMoreList.__proto__ || Object.getPrototypeOf(LoadMoreList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        initLoading: true,
        loading: false,
        data: [],
        list: []
      }, _this.getData = function (callback) {
        (0, _reqwest2.default)({
          url: fakeDataUrl,
          type: 'json',
          method: 'get',
          contentType: 'application/json',
          success: function success(res) {
            callback(res);
          }
        });
      }, _this.onLoadMore = function () {
        _this.setState({
          loading: true,
          list: _this.state.data.concat([].concat(_toConsumableArray(new Array(count))).map(function () {
            return {
              loading: true,
              name: {}
            };
          }))
        });

        _this.getData(function (res) {
          var data = _this.state.data.concat(res.results);

          _this.setState({
            data: data,
            list: data,
            loading: false
          }, function () {
            // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            // In real scene, you can using public method of react-virtualized:
            // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            window.dispatchEvent(new Event('resize'));
          });
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(LoadMoreList, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.getData(function (res) {
          _this2.setState({
            initLoading: false,
            data: res.results,
            list: res.results
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _state = this.state,
            initLoading = _state.initLoading,
            loading = _state.loading,
            list = _state.list;
        var loadMore = !initLoading && !loading ? React.createElement(
          "div",
          {
            style: {
              textAlign: 'center',
              marginTop: 12,
              height: 32,
              lineHeight: '32px'
            }
          },
          React.createElement(
            _antd.Button,
            {
              onClick: this.onLoadMore
            },
            "loading more"
          )
        ) : null;
        return React.createElement(_antd.List, {
          className: "demo-loadmore-list",
          loading: initLoading,
          itemLayout: "horizontal",
          loadMore: loadMore,
          dataSource: list,
          renderItem: function renderItem(item) {
            return React.createElement(
              _antd.List.Item,
              {
                actions: [React.createElement(
                  "a",
                  null,
                  "edit"
                ), React.createElement(
                  "a",
                  null,
                  "more"
                )]
              },
              React.createElement(
                _antd.Skeleton,
                {
                  avatar: true,
                  title: false,
                  loading: item.loading,
                  active: true
                },
                React.createElement(_antd.List.Item.Meta, {
                  avatar: React.createElement(_antd.Avatar, {
                    src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  }),
                  title: React.createElement(
                    "a",
                    {
                      href: "https://ant.design"
                    },
                    item.name.last
                  ),
                  description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
                }),
                React.createElement(
                  "div",
                  null,
                  "content"
                )
              )
            );
          }
        });
      }
    }]);

    return LoadMoreList;
  }(React.Component);

  return React.createElement(LoadMoreList, null);
},
  "style": ".demo-loadmore-list {\n  min-height: 350px;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.demo-loadmore-list</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">min-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">350</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ 2228:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "响应式的栅格列表。尺寸与 ",
        [
          "a",
          {
            "title": null,
            "href": "https://ant.design/components/grid-cn/#Col"
          },
          "Layout Grid"
        ],
        " 保持一致。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Responsive grid list. The size property is as same as ",
        [
          "a",
          {
            "title": null,
            "href": "https://ant.design/components/grid/#Col"
          },
          "Layout Grid"
        ],
        "."
      ]
    ]
  },
  "meta": {
    "order": 5,
    "title": {
      "zh-CN": "响应式的栅格列表",
      "en-US": "Responsive grid list"
    },
    "filename": "components/list/demo/resposive.md",
    "id": "components-list-demo-resposive"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Card <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Title 1'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Title 2'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Title 3'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Title 4'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Title 5'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Title 6'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span>\n    <span class=\"token attr-name\">grid</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> gutter<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> xs<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span> sm<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span> md<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span><span class=\"token punctuation\">,</span> lg<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span><span class=\"token punctuation\">,</span> xl<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span><span class=\"token punctuation\">,</span> xxl<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>Card title<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Card content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Card</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var data = [{
    title: 'Title 1'
  }, {
    title: 'Title 2'
  }, {
    title: 'Title 3'
  }, {
    title: 'Title 4'
  }, {
    title: 'Title 5'
  }, {
    title: 'Title 6'
  }];
  return React.createElement(_antd.List, {
    grid: {
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3
    },
    dataSource: data,
    renderItem: function renderItem(item) {
      return React.createElement(
        _antd.List.Item,
        null,
        React.createElement(
          _antd.Card,
          {
            title: item.title
          },
          "Card content"
        )
      );
    }
  });
}
};

/***/ }),

/***/ 2229:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "列表拥有大、中、小三种尺寸。"
      ],
      [
        "p",
        "通过设置 ",
        [
          "code",
          "size"
        ],
        " 为 ",
        [
          "code",
          "large"
        ],
        " ",
        [
          "code",
          "small"
        ],
        " 分别把按钮设为大、小尺寸。若不设置 ",
        [
          "code",
          "size"
        ],
        "，则尺寸为中。"
      ],
      [
        "p",
        "可通过设置 ",
        [
          "code",
          "header"
        ],
        " 和 ",
        [
          "code",
          "footer"
        ],
        "，来自定义列表头部和尾部。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Ant Design supports a default list size as well as a large and small size."
      ],
      [
        "p",
        "If a large or small list is desired, set the size property to either large or small respectively. Omit the size property for a list with the default size."
      ],
      [
        "p",
        "Customizing the header and footer of list by setting ",
        [
          "code",
          "header"
        ],
        " and ",
        [
          "code",
          "footer"
        ],
        " property."
      ]
    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "简单列表",
      "en-US": "Simple list"
    },
    "filename": "components/list/demo/simple.md",
    "id": "components-list-demo-simple"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token string\">'Racing car sprays burning fuel into crowd.'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'Japanese princess to wed commoner.'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'Australian walks 100km after outback crash.'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'Man charged over missing wedding girl.'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'Los Angeles battles huge wildfires.'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h3</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Default Size<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h3</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span>\n      <span class=\"token attr-name\">header={&lt;div</span><span class=\"token punctuation\">></span></span>Header<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n      footer<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>Footer<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n      bordered\n      dataSource<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span>\n      renderItem<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h3</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'16px 0'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Small Size<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h3</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span>\n      <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">header={&lt;div</span><span class=\"token punctuation\">></span></span>Header<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n      footer<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>Footer<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n      bordered\n      dataSource<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span>\n      renderItem<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h3</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'16px 0'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Large Size<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h3</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span>\n      <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">header={&lt;div</span><span class=\"token punctuation\">></span></span>Header<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n      footer<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>Footer<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n      bordered\n      dataSource<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span>\n      renderItem<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var data = ['Racing car sprays burning fuel into crowd.', 'Japanese princess to wed commoner.', 'Australian walks 100km after outback crash.', 'Man charged over missing wedding girl.', 'Los Angeles battles huge wildfires.'];
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h3",
      {
        style: {
          marginBottom: 16
        }
      },
      "Default Size"
    ),
    React.createElement(_antd.List, {
      header: React.createElement(
        "div",
        null,
        "Header"
      ),
      footer: React.createElement(
        "div",
        null,
        "Footer"
      ),
      bordered: true,
      dataSource: data,
      renderItem: function renderItem(item) {
        return React.createElement(
          _antd.List.Item,
          null,
          item
        );
      }
    }),
    React.createElement(
      "h3",
      {
        style: {
          margin: '16px 0'
        }
      },
      "Small Size"
    ),
    React.createElement(_antd.List, {
      size: "small",
      header: React.createElement(
        "div",
        null,
        "Header"
      ),
      footer: React.createElement(
        "div",
        null,
        "Footer"
      ),
      bordered: true,
      dataSource: data,
      renderItem: function renderItem(item) {
        return React.createElement(
          _antd.List.Item,
          null,
          item
        );
      }
    }),
    React.createElement(
      "h3",
      {
        style: {
          margin: '16px 0'
        }
      },
      "Large Size"
    ),
    React.createElement(_antd.List, {
      size: "large",
      header: React.createElement(
        "div",
        null,
        "Header"
      ),
      footer: React.createElement(
        "div",
        null,
        "Footer"
      ),
      bordered: true,
      dataSource: data,
      renderItem: function renderItem(item) {
        return React.createElement(
          _antd.List.Item,
          null,
          item
        );
      }
    })
  );
}
};

/***/ }),

/***/ 2230:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "通过设置 ",
        [
          "code",
          "itemLayout"
        ],
        " 属性为 ",
        [
          "code",
          "vertical"
        ],
        " 可实现竖排列表样式。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Setting ",
        [
          "code",
          "itemLayout"
        ],
        " property with ",
        [
          "code",
          "vertical"
        ],
        " to create a vertical list."
      ]
    ]
  },
  "meta": {
    "order": 3,
    "title": {
      "zh-CN": "竖排列表样式",
      "en-US": "Vertical"
    },
    "filename": "components/list/demo/vertical.md",
    "id": "components-list-demo-vertical"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Avatar<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> listData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">23</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  listData<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    href<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://ant.design'</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`ant design part </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n    avatar<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token string\">'Ant Design, a design language for background applications, is refined by Ant UED Team.'</span><span class=\"token punctuation\">,</span>\n    content<span class=\"token punctuation\">:</span> <span class=\"token string\">'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> IconText <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">,</span> text <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>type<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginRight<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span>\n    <span class=\"token attr-name\">itemLayout</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>vertical<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">pagination</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n      onChange<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>page<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>page<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      pageSize<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span></span><span class=\"token attr-name\">}</span>\n    <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>listData<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">footer={&lt;div</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>b</span><span class=\"token punctuation\">></span></span>ant design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>b</span><span class=\"token punctuation\">></span></span> footer part<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n    renderItem<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span>\n        <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">actions={[&lt;IconText</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>star-o<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">text</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>156<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>IconText</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>like-o<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">text</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>156<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>IconText</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>message<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">text</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span>\n        extra<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">width</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">272</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">alt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>logo<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span>\n      <span class=\"token operator\">></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item.Meta</span>\n          <span class=\"token attr-name\">avatar</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>Avatar src<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>avatar<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span>\n          title<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>href<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n          description<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>description<span class=\"token punctuation\">}</span>\n        <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>content<span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var listData = [];

  for (var i = 0; i < 23; i++) {
    listData.push({
      href: 'http://ant.design',
      title: "ant design part " + i,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    });
  }

  var IconText = function IconText(_ref) {
    var type = _ref.type,
        text = _ref.text;
    return React.createElement(
      "span",
      null,
      React.createElement(_antd.Icon, {
        type: type,
        style: {
          marginRight: 8
        }
      }),
      text
    );
  };

  return React.createElement(_antd.List, {
    itemLayout: "vertical",
    size: "large",
    pagination: {
      onChange: function onChange(page) {
        console.log(page);
      },
      pageSize: 3
    },
    dataSource: listData,
    footer: React.createElement(
      "div",
      null,
      React.createElement(
        "b",
        null,
        "ant design"
      ),
      " footer part"
    ),
    renderItem: function renderItem(item) {
      return React.createElement(
        _antd.List.Item,
        {
          key: item.title,
          actions: [React.createElement(IconText, {
            type: "star-o",
            text: "156"
          }), React.createElement(IconText, {
            type: "like-o",
            text: "156"
          }), React.createElement(IconText, {
            type: "message",
            text: "2"
          })],
          extra: React.createElement("img", {
            width: 272,
            alt: "logo",
            src: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          })
        },
        React.createElement(_antd.List.Item.Meta, {
          avatar: React.createElement(_antd.Avatar, {
            src: item.avatar
          }),
          title: React.createElement(
            "a",
            {
              href: item.href
            },
            item.title
          ),
          description: item.description
        }),
        item.content
      );
    }
  });
}
};

/***/ })

});