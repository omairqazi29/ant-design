webpackJsonp([0],{

/***/ 1879:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'ajax': __webpack_require__(2369),
    'basic': __webpack_require__(2370),
    'bordered': __webpack_require__(2371),
    'colspan-rowspan': __webpack_require__(2372),
    'custom-filter-panel': __webpack_require__(2373),
    'drag-sorting': __webpack_require__(2374),
    'dynamic-settings': __webpack_require__(2429),
    'edit-cell': __webpack_require__(2430),
    'edit-row': __webpack_require__(2431),
    'expand-children': __webpack_require__(2432),
    'expand': __webpack_require__(2433),
    'fixed-columns-header': __webpack_require__(2434),
    'fixed-columns': __webpack_require__(2435),
    'fixed-header': __webpack_require__(2436),
    'grouping-columns': __webpack_require__(2437),
    'head': __webpack_require__(2438),
    'jsx': __webpack_require__(2439),
    'nested-table': __webpack_require__(2440),
    'reset-filter': __webpack_require__(2441),
    'resizable-column': __webpack_require__(2442),
    'row-selection-and-operation': __webpack_require__(2447),
    'row-selection-custom': __webpack_require__(2448),
    'row-selection': __webpack_require__(2449),
    'size': __webpack_require__(2450),
}

/***/ }),

/***/ 1983:
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
      XHR2 = __webpack_require__(1984)
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

/***/ 1984:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1985:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var matchesType_1 = __webpack_require__(2005);
var invariant = __webpack_require__(125);
var isObject = __webpack_require__(46);
exports.BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
exports.PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
exports.HOVER = 'dnd-core/HOVER';
exports.DROP = 'dnd-core/DROP';
exports.END_DRAG = 'dnd-core/END_DRAG';
function createDragDropActions(manager) {
    return {
        beginDrag: function (sourceIds, _a) {
            if (sourceIds === void 0) { sourceIds = []; }
            var _b = _a === void 0 ? {
                publishSource: true,
            } : _a, publishSource = _b.publishSource, clientOffset = _b.clientOffset, getSourceClientOffset = _b.getSourceClientOffset;
            var monitor = manager.getMonitor();
            var registry = manager.getRegistry();
            invariant(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');
            for (var _i = 0, sourceIds_1 = sourceIds; _i < sourceIds_1.length; _i++) {
                var s = sourceIds_1[_i];
                invariant(registry.getSource(s), 'Expected sourceIds to be registered.');
            }
            var sourceId = null;
            for (var i = sourceIds.length - 1; i >= 0; i--) {
                if (monitor.canDragSource(sourceIds[i])) {
                    sourceId = sourceIds[i];
                    break;
                }
            }
            if (sourceId === null) {
                return;
            }
            var sourceClientOffset = null;
            if (clientOffset) {
                invariant(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
                sourceClientOffset = getSourceClientOffset(sourceId);
            }
            var source = registry.getSource(sourceId);
            var item = source.beginDrag(monitor, sourceId);
            invariant(isObject(item), 'Item must be an object.');
            registry.pinSource(sourceId);
            var itemType = registry.getSourceType(sourceId);
            return {
                type: exports.BEGIN_DRAG,
                payload: {
                    itemType: itemType,
                    item: item,
                    sourceId: sourceId,
                    clientOffset: clientOffset || null,
                    sourceClientOffset: sourceClientOffset || null,
                    isSourcePublic: !!publishSource,
                },
            };
        },
        publishDragSource: function () {
            var monitor = manager.getMonitor();
            if (!monitor.isDragging()) {
                return;
            }
            return { type: exports.PUBLISH_DRAG_SOURCE };
        },
        hover: function (targetIdsArg, _a) {
            var clientOffset = (_a === void 0 ? {} : _a).clientOffset;
            invariant(Array.isArray(targetIdsArg), 'Expected targetIds to be an array.');
            var targetIds = targetIdsArg.slice(0);
            var monitor = manager.getMonitor();
            var registry = manager.getRegistry();
            invariant(monitor.isDragging(), 'Cannot call hover while not dragging.');
            invariant(!monitor.didDrop(), 'Cannot call hover after drop.');
            // First check invariants.
            for (var i = 0; i < targetIds.length; i++) {
                var targetId = targetIds[i];
                invariant(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');
                var target = registry.getTarget(targetId);
                invariant(target, 'Expected targetIds to be registered.');
            }
            var draggedItemType = monitor.getItemType();
            // Remove those targetIds that don't match the targetType.  This
            // fixes shallow isOver which would only be non-shallow because of
            // non-matching targets.
            for (var i = targetIds.length - 1; i >= 0; i--) {
                var targetId = targetIds[i];
                var targetType = registry.getTargetType(targetId);
                if (!matchesType_1.default(targetType, draggedItemType)) {
                    targetIds.splice(i, 1);
                }
            }
            // Finally call hover on all matching targets.
            for (var _i = 0, targetIds_1 = targetIds; _i < targetIds_1.length; _i++) {
                var targetId = targetIds_1[_i];
                var target = registry.getTarget(targetId);
                target.hover(monitor, targetId);
            }
            return {
                type: exports.HOVER,
                payload: {
                    targetIds: targetIds,
                    clientOffset: clientOffset || null,
                },
            };
        },
        drop: function (options) {
            if (options === void 0) { options = {}; }
            var monitor = manager.getMonitor();
            var registry = manager.getRegistry();
            invariant(monitor.isDragging(), 'Cannot call drop while not dragging.');
            invariant(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
            var targetIds = monitor
                .getTargetIds()
                .filter(monitor.canDropOnTarget, monitor);
            targetIds.reverse();
            // Multiple actions are dispatched here, which is why this doesn't return an action
            targetIds.forEach(function (targetId, index) {
                var target = registry.getTarget(targetId);
                var dropResult = target.drop(monitor, targetId);
                invariant(typeof dropResult === 'undefined' || isObject(dropResult), 'Drop result must either be an object or undefined.');
                if (typeof dropResult === 'undefined') {
                    dropResult = index === 0 ? {} : monitor.getDropResult();
                }
                var action = {
                    type: exports.DROP,
                    payload: {
                        dropResult: __assign({}, options, dropResult),
                    },
                };
                manager.dispatch(action);
            });
        },
        endDrag: function () {
            var monitor = manager.getMonitor();
            var registry = manager.getRegistry();
            invariant(monitor.isDragging(), 'Cannot call endDrag while not dragging.');
            var sourceId = monitor.getSourceId();
            var source = registry.getSource(sourceId, true);
            source.endDrag(monitor, sourceId);
            registry.unpinSource();
            return { type: exports.END_DRAG };
        },
    };
}
exports.default = createDragDropActions;


/***/ }),

/***/ 1986:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ADD_SOURCE = 'dnd-core/ADD_SOURCE';
exports.ADD_TARGET = 'dnd-core/ADD_TARGET';
exports.REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
exports.REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
function addSource(sourceId) {
    return {
        type: exports.ADD_SOURCE,
        payload: {
            sourceId: sourceId,
        },
    };
}
exports.addSource = addSource;
function addTarget(targetId) {
    return {
        type: exports.ADD_TARGET,
        payload: {
            targetId: targetId,
        },
    };
}
exports.addTarget = addTarget;
function removeSource(sourceId) {
    return {
        type: exports.REMOVE_SOURCE,
        payload: {
            sourceId: sourceId,
        },
    };
}
exports.removeSource = removeSource;
function removeTarget(targetId) {
    return {
        type: exports.REMOVE_TARGET,
        payload: {
            targetId: targetId,
        },
    };
}
exports.removeTarget = removeTarget;


/***/ }),

/***/ 1987:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function checkDecoratorArguments(functionName, signature) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (false) {
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var arg = args_1[_a];
            if (arg && arg.prototype && arg.prototype.render) {
                // tslint:disable-next-line no-console
                console.error('You seem to be applying the arguments in the wrong order. ' +
                    ("It should be " + functionName + "(" + signature + ")(Component), not the other way around. ") +
                    'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#you-seem-to-be-applying-the-arguments-in-the-wrong-order');
                return;
            }
        }
    }
}
exports.default = checkDecoratorArguments;


/***/ }),

/***/ 1990:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var React = __webpack_require__(0);
var dnd_core_1 = __webpack_require__(2376);
var checkDecoratorArguments_1 = __webpack_require__(1987);
var invariant = __webpack_require__(125);
var hoistStatics = __webpack_require__(241);
var isClassComponent = __webpack_require__(1991).default;
/**
 * Create the React Context
 */
exports.Consumer = (_a = React.createContext({ dragDropManager: undefined }), _a.Consumer), exports.Provider = _a.Provider;
/**
 * Creates the context object we're providing
 * @param backend
 * @param context
 */
function createChildContext(backend, context) {
    return {
        dragDropManager: dnd_core_1.createDragDropManager(backend, context),
    };
}
exports.createChildContext = createChildContext;
/**
 * A React component that provides the React-DnD context
 */
exports.DragDropContextProvider = function (_a) {
    var backend = _a.backend, context = _a.context, children = _a.children;
    var contextValue = createChildContext(backend, context);
    return React.createElement(exports.Provider, { value: contextValue }, children);
};
/**
 * Wrap the root component of your application with DragDropContext decorator to set up React DnD.
 * This lets you specify the backend, and sets up the shared DnD state behind the scenes.
 * @param backendFactory The DnD backend factory
 * @param backendContext The backend context
 */
function DragDropContext(backendFactory, backendContext) {
    checkDecoratorArguments_1.default('DragDropContext', 'backend', backendFactory);
    var childContext = createChildContext(backendFactory, backendContext);
    return function decorateContext(DecoratedComponent) {
        var Decorated = DecoratedComponent;
        var displayName = Decorated.displayName || Decorated.name || 'Component';
        var DragDropContextContainer = /** @class */ (function (_super) {
            __extends(DragDropContextContainer, _super);
            function DragDropContextContainer() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.ref = React.createRef();
                return _this;
            }
            DragDropContextContainer.prototype.getDecoratedComponentInstance = function () {
                invariant(this.ref.current, 'In order to access an instance of the decorated component it can not be a stateless component.');
                return this.ref.current;
            };
            DragDropContextContainer.prototype.getManager = function () {
                return childContext.dragDropManager;
            };
            DragDropContextContainer.prototype.render = function () {
                return (React.createElement(exports.Provider, { value: childContext },
                    React.createElement(Decorated, __assign({}, this.props, { ref: isClassComponent(Decorated) ? this.ref : undefined }))));
            };
            DragDropContextContainer.DecoratedComponent = DecoratedComponent;
            DragDropContextContainer.displayName = "DragDropContext(" + displayName + ")";
            return DragDropContextContainer;
        }(React.Component));
        return hoistStatics(DragDropContextContainer, DecoratedComponent);
    };
}
exports.DragDropContext = DragDropContext;


/***/ }),

/***/ 1991:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && typeof Component.prototype.render === 'function');
};

exports.default = isClassComponent;

/***/ }),

/***/ 1992:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FILE = '__NATIVE_FILE__';
exports.URL = '__NATIVE_URL__';
exports.TEXT = '__NATIVE_TEXT__';


/***/ }),

/***/ 2004:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HandlerRole;
(function (HandlerRole) {
    HandlerRole["SOURCE"] = "SOURCE";
    HandlerRole["TARGET"] = "TARGET";
})(HandlerRole = exports.HandlerRole || (exports.HandlerRole = {}));


/***/ }),

/***/ 2005:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function matchesType(targetType, draggedItemType) {
    if (draggedItemType === null) {
        return targetType === null;
    }
    return Array.isArray(targetType)
        ? targetType.some(function (t) { return t === draggedItemType; })
        : targetType === draggedItemType;
}
exports.default = matchesType;


/***/ }),

/***/ 2006:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.strictEquality = function (a, b) { return a === b; };
/**
 * Determine if two cartesian coordinate offsets are equal
 * @param offsetA
 * @param offsetB
 */
function areCoordsEqual(offsetA, offsetB) {
    if (!offsetA && !offsetB) {
        return true;
    }
    else if (!offsetA || !offsetB) {
        return false;
    }
    else {
        return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
    }
}
exports.areCoordsEqual = areCoordsEqual;
/**
 * Determines if two arrays of items are equal
 * @param a The first array of items
 * @param b The second array of items
 */
function areArraysEqual(a, b, isEqual) {
    if (isEqual === void 0) { isEqual = exports.strictEquality; }
    if (a.length !== b.length) {
        return false;
    }
    for (var i = 0; i < a.length; ++i) {
        if (!isEqual(a[i], b[i])) {
            return false;
        }
    }
    return true;
}
exports.areArraysEqual = areArraysEqual;


/***/ }),

/***/ 2007:
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(2008),
    baseRest = __webpack_require__(667),
    isArrayLikeObject = __webpack_require__(668);

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, values)
    : [];
});

module.exports = without;


/***/ }),

/***/ 2008:
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(384),
    arrayIncludes = __webpack_require__(671),
    arrayIncludesWith = __webpack_require__(672),
    arrayMap = __webpack_require__(242),
    baseUnary = __webpack_require__(244),
    cacheHas = __webpack_require__(385);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),

/***/ 2009:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var intersection = __webpack_require__(2388);
exports.NONE = [];
exports.ALL = [];
/**
 * Determines if the given handler IDs are dirty or not.
 *
 * @param dirtyIds The set of dirty handler ids
 * @param handlerIds The set of handler ids to check
 */
function areDirty(dirtyIds, handlerIds) {
    if (dirtyIds === exports.NONE) {
        return false;
    }
    if (dirtyIds === exports.ALL || typeof handlerIds === 'undefined') {
        return true;
    }
    return intersection(handlerIds, dirtyIds).length > 0;
}
exports.areDirty = areDirty;


/***/ }),

/***/ 2010:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(392),
    isFlattenable = __webpack_require__(2393);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ 2011:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var DragDropContext_1 = __webpack_require__(1990);
var disposables_1 = __webpack_require__(2404);
var isClassComponent = __webpack_require__(1991).default;
var isPlainObject = __webpack_require__(383);
var invariant = __webpack_require__(125);
var hoistStatics = __webpack_require__(241);
var shallowEqual = __webpack_require__(37);
function decorateHandler(_a) {
    var DecoratedComponent = _a.DecoratedComponent, createHandler = _a.createHandler, createMonitor = _a.createMonitor, createConnector = _a.createConnector, registerHandler = _a.registerHandler, containerDisplayName = _a.containerDisplayName, getType = _a.getType, collect = _a.collect, options = _a.options;
    var _b = options.arePropsEqual, arePropsEqual = _b === void 0 ? shallowEqual : _b;
    var Decorated = DecoratedComponent;
    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';
    var DragDropContainer = /** @class */ (function (_super) {
        __extends(DragDropContainer, _super);
        function DragDropContainer(props) {
            var _this = _super.call(this, props) || this;
            _this.isCurrentlyMounted = false;
            _this.handleChange = _this.handleChange.bind(_this);
            _this.disposable = new disposables_1.SerialDisposable();
            _this.receiveProps(props);
            _this.dispose();
            return _this;
        }
        DragDropContainer.prototype.getHandlerId = function () {
            return this.handlerId;
        };
        DragDropContainer.prototype.getDecoratedComponentInstance = function () {
            if (!this.handler) {
                return null;
            }
            return this.handler.ref.current;
        };
        DragDropContainer.prototype.shouldComponentUpdate = function (nextProps, nextState) {
            return (!arePropsEqual(nextProps, this.props) ||
                !shallowEqual(nextState, this.state));
        };
        DragDropContainer.prototype.componentDidMount = function () {
            this.isCurrentlyMounted = true;
            this.disposable = new disposables_1.SerialDisposable();
            this.currentType = undefined;
            this.receiveProps(this.props);
            this.handleChange();
        };
        DragDropContainer.prototype.componentDidUpdate = function (prevProps) {
            if (!arePropsEqual(this.props, prevProps)) {
                this.receiveProps(this.props);
                this.handleChange();
            }
        };
        DragDropContainer.prototype.componentWillUnmount = function () {
            this.dispose();
            this.isCurrentlyMounted = false;
        };
        DragDropContainer.prototype.receiveProps = function (props) {
            if (!this.handler) {
                return;
            }
            this.handler.receiveProps(props);
            this.receiveType(getType(props));
        };
        DragDropContainer.prototype.receiveType = function (type) {
            if (!this.handlerMonitor || !this.manager || !this.handlerConnector) {
                return;
            }
            if (type === this.currentType) {
                return;
            }
            this.currentType = type;
            var _a = registerHandler(type, this.handler, this.manager), handlerId = _a.handlerId, unregister = _a.unregister;
            this.handlerId = handlerId;
            this.handlerMonitor.receiveHandlerId(handlerId);
            this.handlerConnector.receiveHandlerId(handlerId);
            var globalMonitor = this.manager.getMonitor();
            var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, { handlerIds: [handlerId] });
            this.disposable.setDisposable(new disposables_1.CompositeDisposable(new disposables_1.Disposable(unsubscribe), new disposables_1.Disposable(unregister)));
        };
        DragDropContainer.prototype.handleChange = function () {
            if (!this.isCurrentlyMounted) {
                return;
            }
            var nextState = this.getCurrentState();
            if (!shallowEqual(nextState, this.state)) {
                this.setState(nextState);
            }
        };
        DragDropContainer.prototype.dispose = function () {
            this.disposable.dispose();
            if (this.handlerConnector) {
                this.handlerConnector.receiveHandlerId(null);
            }
        };
        DragDropContainer.prototype.getCurrentState = function () {
            if (!this.handlerConnector) {
                return {};
            }
            var nextState = collect(this.handlerConnector.hooks, this.handlerMonitor);
            if (false) {
                invariant(isPlainObject(nextState), 'Expected `collect` specified as the second argument to ' +
                    '%s for %s to return a plain object of props to inject. ' +
                    'Instead, received %s.', containerDisplayName, displayName, nextState);
            }
            return nextState;
        };
        DragDropContainer.prototype.render = function () {
            var _this = this;
            return (React.createElement(DragDropContext_1.Consumer, null, function (_a) {
                var dragDropManager = _a.dragDropManager;
                if (dragDropManager === undefined) {
                    return null;
                }
                _this.receiveDragDropManager(dragDropManager);
                // Let componentDidMount fire to initialize the collected state
                if (!_this.isCurrentlyMounted) {
                    return null;
                }
                return (React.createElement(Decorated, __assign({}, _this.props, _this.state, { ref: _this.handler && isClassComponent(Decorated)
                        ? _this.handler.ref
                        : undefined })));
            }));
        };
        DragDropContainer.prototype.receiveDragDropManager = function (dragDropManager) {
            if (this.manager !== undefined) {
                return;
            }
            this.manager = dragDropManager;
            invariant(typeof dragDropManager === 'object', 'Could not find the drag and drop manager in the context of %s. ' +
                'Make sure to wrap the top-level component of your app with DragDropContext. ' +
                'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);
            this.handlerMonitor = createMonitor(dragDropManager);
            this.handlerConnector = createConnector(dragDropManager.getBackend());
            this.handler = createHandler(this.handlerMonitor);
        };
        DragDropContainer.DecoratedComponent = DecoratedComponent;
        DragDropContainer.displayName = containerDisplayName + "(" + displayName + ")";
        return DragDropContainer;
    }(React.Component));
    return hoistStatics(DragDropContainer, DecoratedComponent);
}
exports.default = decorateHandler;


/***/ }),

/***/ 2012:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var cloneWithRef_1 = __webpack_require__(2412);
function throwIfCompositeComponentElement(element) {
    // Custom components can no longer be wrapped directly in React DnD 2.0
    // so that we don't need to depend on findDOMNode() from react-dom.
    if (typeof element.type === 'string') {
        return;
    }
    var displayName = element.type.displayName || element.type.name || 'the component';
    throw new Error('Only native element nodes can now be passed to React DnD connectors.' +
        ("You can either wrap " + displayName + " into a <div>, or turn it into a ") +
        'drag source or a drop target itself.');
}
function wrapHookToRecognizeElement(hook) {
    return function (elementOrNode, options) {
        if (elementOrNode === void 0) { elementOrNode = null; }
        if (options === void 0) { options = null; }
        // When passed a node, call the hook straight away.
        if (!react_1.isValidElement(elementOrNode)) {
            var node = elementOrNode;
            hook(node, options);
            return undefined;
        }
        // If passed a ReactElement, clone it and attach this function as a ref.
        // This helps us achieve a neat API where user doesn't even know that refs
        // are being used under the hood.
        var element = elementOrNode;
        throwIfCompositeComponentElement(element);
        // When no options are passed, use the hook directly
        var ref = options ? function (node) { return hook(node, options); } : hook;
        return cloneWithRef_1.default(element, ref);
    };
}
function wrapConnectorHooks(hooks) {
    var wrappedHooks = {};
    Object.keys(hooks).forEach(function (key) {
        var hook = hooks[key];
        var wrappedHook = wrapHookToRecognizeElement(hook);
        wrappedHooks[key] = function () { return wrappedHook; };
    });
    return wrappedHooks;
}
exports.default = wrapConnectorHooks;


/***/ }),

/***/ 2013:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isValidType(type, allowArray) {
    return (typeof type === 'string' ||
        typeof type === 'symbol' ||
        (!!allowArray &&
            Array.isArray(type) &&
            type.every(function (t) { return isValidType(t, false); })));
}
exports.default = isValidType;


/***/ }),

/***/ 2014:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var memoize = __webpack_require__(678);
exports.isFirefox = memoize(function () {
    return /firefox/i.test(navigator.userAgent);
});
exports.isSafari = memoize(function () { return Boolean(window.safari); });


/***/ }),

/***/ 2015:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDraggable = __webpack_require__(2444);

var _cloneElement = __webpack_require__(2445);

var _cloneElement2 = _interopRequireDefault(_cloneElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Resizable = function (_React$Component) {
  _inherits(Resizable, _React$Component);

  function Resizable() {
    var _temp, _this, _ret;

    _classCallCheck(this, Resizable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      resizing: false,
      width: _this.props.width, height: _this.props.height,
      slackW: 0, slackH: 0
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Resizable.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    // If parent changes height/width, set that in our state.
    if (!this.state.resizing && (nextProps.width !== this.props.width || nextProps.height !== this.props.height)) {
      this.setState({
        width: nextProps.width,
        height: nextProps.height
      });
    }
  };

  Resizable.prototype.lockAspectRatio = function lockAspectRatio(width, height, aspectRatio) {
    height = width / aspectRatio;
    width = height * aspectRatio;
    return [width, height];
  };

  // If you do this, be careful of constraints


  Resizable.prototype.runConstraints = function runConstraints(width, height) {
    var _ref = [this.props.minConstraints, this.props.maxConstraints],
        min = _ref[0],
        max = _ref[1];


    if (this.props.lockAspectRatio) {
      var ratio = this.state.width / this.state.height;
      height = width / ratio;
      width = height * ratio;
    }

    if (!min && !max) return [width, height];

    var oldW = width,
        oldH = height;

    // Add slack to the values used to calculate bound position. This will ensure that if
    // we start removing slack, the element won't react to it right away until it's been
    // completely removed.

    var _state = this.state,
        slackW = _state.slackW,
        slackH = _state.slackH;

    width += slackW;
    height += slackH;

    if (min) {
      width = Math.max(min[0], width);
      height = Math.max(min[1], height);
    }
    if (max) {
      width = Math.min(max[0], width);
      height = Math.min(max[1], height);
    }

    // If the numbers changed, we must have introduced some slack. Record it for the next iteration.
    slackW += oldW - width;
    slackH += oldH - height;
    if (slackW !== this.state.slackW || slackH !== this.state.slackH) {
      this.setState({ slackW: slackW, slackH: slackH });
    }

    return [width, height];
  };

  /**
   * Wrapper around drag events to provide more useful data.
   *
   * @param  {String} handlerName Handler name to wrap.
   * @return {Function}           Handler function.
   */


  Resizable.prototype.resizeHandler = function resizeHandler(handlerName) {
    var _this2 = this;

    return function (e, _ref2) {
      var node = _ref2.node,
          deltaX = _ref2.deltaX,
          deltaY = _ref2.deltaY;


      // Axis restrictions
      var canDragX = _this2.props.axis === 'both' || _this2.props.axis === 'x';
      var canDragY = _this2.props.axis === 'both' || _this2.props.axis === 'y';

      // Update w/h
      var width = _this2.state.width + (canDragX ? deltaX : 0);
      var height = _this2.state.height + (canDragY ? deltaY : 0);

      // Early return if no change
      var widthChanged = width !== _this2.state.width,
          heightChanged = height !== _this2.state.height;
      if (handlerName === 'onResize' && !widthChanged && !heightChanged) return;

      // Set the appropriate state for this handler.
      var _runConstraints = _this2.runConstraints(width, height);

      width = _runConstraints[0];
      height = _runConstraints[1];
      var newState = {};
      if (handlerName === 'onResizeStart') {
        newState.resizing = true;
      } else if (handlerName === 'onResizeStop') {
        newState.resizing = false;
        newState.slackW = newState.slackH = 0;
      } else {
        // Early return if no change after constraints
        if (width === _this2.state.width && height === _this2.state.height) return;
        newState.width = width;
        newState.height = height;
      }

      var hasCb = typeof _this2.props[handlerName] === 'function';
      if (hasCb) {
        if (typeof e.persist === 'function') e.persist();
        _this2.setState(newState, function () {
          return _this2.props[handlerName](e, { node: node, size: { width: width, height: height } });
        });
      } else {
        _this2.setState(newState);
      }
    };
  };

  Resizable.prototype.render = function render() {
    // eslint-disable-next-line no-unused-vars
    var _props = this.props,
        children = _props.children,
        draggableOpts = _props.draggableOpts,
        width = _props.width,
        height = _props.height,
        handleSize = _props.handleSize,
        lockAspectRatio = _props.lockAspectRatio,
        axis = _props.axis,
        minConstraints = _props.minConstraints,
        maxConstraints = _props.maxConstraints,
        onResize = _props.onResize,
        onResizeStop = _props.onResizeStop,
        onResizeStart = _props.onResizeStart,
        p = _objectWithoutProperties(_props, ['children', 'draggableOpts', 'width', 'height', 'handleSize', 'lockAspectRatio', 'axis', 'minConstraints', 'maxConstraints', 'onResize', 'onResizeStop', 'onResizeStart']);

    var className = p.className ? p.className + ' react-resizable' : 'react-resizable';

    // What we're doing here is getting the child of this element, and cloning it with this element's props.
    // We are then defining its children as:
    // Its original children (resizable's child's children), and
    // A draggable handle.
    return (0, _cloneElement2.default)(children, _extends({}, p, {
      className: className,
      children: [children.props.children, _react2.default.createElement(
        _reactDraggable.DraggableCore,
        _extends({}, draggableOpts, {
          key: 'resizableHandle',
          onStop: this.resizeHandler('onResizeStop'),
          onStart: this.resizeHandler('onResizeStart'),
          onDrag: this.resizeHandler('onResize')
        }),
        _react2.default.createElement('span', { className: 'react-resizable-handle' })
      )]
    }));
  };

  return Resizable;
}(_react2.default.Component);

Resizable.propTypes = {
  //
  // Required Props
  //

  // Require that one and only one child be present.
  children: _propTypes2.default.element.isRequired,

  // Initial w/h
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired,

  //
  // Optional props
  //

  // If you change this, be sure to update your css
  handleSize: _propTypes2.default.array,

  // If true, will only allow width/height to move in lockstep
  lockAspectRatio: _propTypes2.default.bool,

  // Restricts resizing to a particular axis (default: 'both')
  // 'both' - allows resizing by width or height
  // 'x' - only allows the width to be changed
  // 'y' - only allows the height to be changed
  // 'none' - disables resizing altogether
  axis: _propTypes2.default.oneOf(['both', 'x', 'y', 'none']),

  // Min/max size
  minConstraints: _propTypes2.default.arrayOf(_propTypes2.default.number),
  maxConstraints: _propTypes2.default.arrayOf(_propTypes2.default.number),

  // Callbacks
  onResizeStop: _propTypes2.default.func,
  onResizeStart: _propTypes2.default.func,
  onResize: _propTypes2.default.func,

  // These will be passed wholesale to react-draggable's DraggableCore
  draggableOpts: _propTypes2.default.object
};
Resizable.defaultProps = {
  handleSize: [20, 20],
  lockAspectRatio: false,
  axis: 'both',
  minConstraints: [20, 20],
  maxConstraints: [Infinity, Infinity]
};
exports.default = Resizable;

/***/ }),

/***/ 2369:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "这个例子通过简单的 ajax 读取方式，演示了如何从服务端读取并展现数据，具有筛选、排序等功能以及页面 loading 效果。开发者可以自行接入其他数据处理方式。"
      ],
      [
        "p",
        "另外，本例也展示了筛选排序功能如何交给服务端实现，列不需要指定具体的 ",
        [
          "code",
          "onFilter"
        ],
        " 和 ",
        [
          "code",
          "sorter"
        ],
        " 函数，而是在把筛选和排序的参数发到服务端来处理。"
      ],
      [
        "p",
        [
          "strong",
          "注意，此示例使用 ",
          [
            "a",
            {
              "title": null,
              "href": "https://randomuser.me"
            },
            "模拟接口"
          ],
          "，展示数据可能不准确，请打开网络面板查看请求。"
        ]
      ]
    ],
    "en-US": [
      [
        "p",
        "This example shows how to fetch and present data from a remote server, and how to implement filtering and sorting in server side by sending related parameters to server."
      ],
      [
        "p",
        [
          "strong",
          "Note, this example use ",
          [
            "a",
            {
              "title": null,
              "href": "https://randomuser.me"
            },
            "Mock API"
          ],
          " that you can look up in Network Console."
        ]
      ]
    ]
  },
  "meta": {
    "order": 9,
    "title": {
      "en-US": "Ajax",
      "zh-CN": "远程加载数据"
    },
    "filename": "components/table/demo/ajax.md",
    "id": "components-table-demo-ajax"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> reqwest <span class=\"token keyword\">from</span> <span class=\"token string\">'reqwest'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  sorter<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> name <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>name<span class=\"token punctuation\">.</span>first<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>name<span class=\"token punctuation\">.</span>last<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token string\">'20%'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Gender'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'gender'</span><span class=\"token punctuation\">,</span>\n  filters<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span> text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Male'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'male'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span> text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Female'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'female'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token string\">'20%'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Email'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'email'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    data<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    pagination<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleTableChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>pagination<span class=\"token punctuation\">,</span> filters<span class=\"token punctuation\">,</span> sorter<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> pager <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token operator\">...</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>pagination <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    pager<span class=\"token punctuation\">.</span>current <span class=\"token operator\">=</span> pagination<span class=\"token punctuation\">.</span>current<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      pagination<span class=\"token punctuation\">:</span> pager<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">fetch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      results<span class=\"token punctuation\">:</span> pagination<span class=\"token punctuation\">.</span>pageSize<span class=\"token punctuation\">,</span>\n      page<span class=\"token punctuation\">:</span> pagination<span class=\"token punctuation\">.</span>current<span class=\"token punctuation\">,</span>\n      sortField<span class=\"token punctuation\">:</span> sorter<span class=\"token punctuation\">.</span>field<span class=\"token punctuation\">,</span>\n      sortOrder<span class=\"token punctuation\">:</span> sorter<span class=\"token punctuation\">.</span>order<span class=\"token punctuation\">,</span>\n      <span class=\"token operator\">...</span>filters<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  fetch <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>params <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'params:'</span><span class=\"token punctuation\">,</span> params<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token function\">reqwest</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      url<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://randomuser.me/api'</span><span class=\"token punctuation\">,</span>\n      method<span class=\"token punctuation\">:</span> <span class=\"token string\">'get'</span><span class=\"token punctuation\">,</span>\n      data<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        results<span class=\"token punctuation\">:</span> <span class=\"token number\">10</span><span class=\"token punctuation\">,</span>\n        <span class=\"token operator\">...</span>params<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'json'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">then</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> pagination <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token operator\">...</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>pagination <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n      <span class=\"token comment\" spellcheck=\"true\">// Read total count from server</span>\n      <span class=\"token comment\" spellcheck=\"true\">// pagination.total = data.totalCount;</span>\n      pagination<span class=\"token punctuation\">.</span>total <span class=\"token operator\">=</span> <span class=\"token number\">200</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        data<span class=\"token punctuation\">:</span> data<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">,</span>\n        pagination<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">fetch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span>\n        <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">rowKey</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>record <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>login<span class=\"token punctuation\">.</span>uuid<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">pagination</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>pagination<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">loading</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleTableChange<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  var _reqwest = __webpack_require__(1983);

  var _reqwest2 = _interopRequireDefault(_reqwest);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var columns = [{
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: function render(name) {
      return name.first + " " + name.last;
    },
    width: '20%'
  }, {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [{
      text: 'Male',
      value: 'male'
    }, {
      text: 'Female',
      value: 'female'
    }],
    width: '20%'
  }, {
    title: 'Email',
    dataIndex: 'email'
  }];

  var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, App);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        data: [],
        pagination: {},
        loading: false
      }, _this.handleTableChange = function (pagination, filters, sorter) {
        var pager = _extends({}, _this.state.pagination);

        pager.current = pagination.current;

        _this.setState({
          pagination: pager
        });

        _this.fetch(_extends({
          results: pagination.pageSize,
          page: pagination.current,
          sortField: sorter.field,
          sortOrder: sorter.order
        }, filters));
      }, _this.fetch = function () {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        console.log('params:', params);

        _this.setState({
          loading: true
        });

        (0, _reqwest2.default)({
          url: 'https://randomuser.me/api',
          method: 'get',
          data: _extends({
            results: 10
          }, params),
          type: 'json'
        }).then(function (data) {
          var pagination = _extends({}, _this.state.pagination); // Read total count from server
          // pagination.total = data.totalCount;


          pagination.total = 200;

          _this.setState({
            loading: false,
            data: data.results,
            pagination: pagination
          });
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.fetch();
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(_antd.Table, {
          columns: columns,
          rowKey: function rowKey(record) {
            return record.login.uuid;
          },
          dataSource: this.state.data,
          pagination: this.state.pagination,
          loading: this.state.loading,
          onChange: this.handleTableChange
        });
      }
    }]);

    return App;
  }(React.Component);

  return React.createElement(App, null);
}
};

/***/ }),

/***/ 2370:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "简单的表格，最后一列是各种操作。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Simple table with actions."
      ]
    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "en-US": "Basic Usage",
      "zh-CN": "基本用法"
    },
    "filename": "components/table/demo/basic.md",
    "id": "components-table-demo-basic"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table<span class=\"token punctuation\">,</span> Divider<span class=\"token punctuation\">,</span> Tag <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> text <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Tags'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'tags'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'tags'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> tags <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">{</span>tags<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>tag <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>blue<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Action'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'action'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Invite <span class=\"token punctuation\">{</span>record<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Divider</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>vertical<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Delete<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n  tags<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'nice'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'developer'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n  tags<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'loser'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n  tags<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'cool'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'teacher'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: function render(text) {
      return React.createElement(
        "a",
        {
          href: "javascript:;"
        },
        text
      );
    }
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: function render(tags) {
      return React.createElement(
        "span",
        null,
        tags.map(function (tag) {
          return React.createElement(
            _antd.Tag,
            {
              color: "blue",
              key: tag
            },
            tag
          );
        })
      );
    }
  }, {
    title: 'Action',
    key: 'action',
    render: function render(text, record) {
      return React.createElement(
        "span",
        null,
        React.createElement(
          "a",
          {
            href: "javascript:;"
          },
          "Invite ",
          record.name
        ),
        React.createElement(_antd.Divider, {
          type: "vertical"
        }),
        React.createElement(
          "a",
          {
            href: "javascript:;"
          },
          "Delete"
        )
      );
    }
  }];
  var data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }];
  return React.createElement(_antd.Table, {
    columns: columns,
    dataSource: data
  });
}
};

/***/ }),

/***/ 2371:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "添加表格边框线，页头和页脚。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Add border, title and footer for table."
      ]
    ]
  },
  "meta": {
    "order": 11,
    "title": {
      "en-US": "border, title and footer",
      "zh-CN": "带边框"
    },
    "filename": "components/table/demo/bordered.md",
    "id": "components-table-demo-bordered"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> text <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Cash Assets'</span><span class=\"token punctuation\">,</span>\n  className<span class=\"token punctuation\">:</span> <span class=\"token string\">'column-money'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'money'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  money<span class=\"token punctuation\">:</span> <span class=\"token string\">'￥300,000.00'</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  money<span class=\"token punctuation\">:</span> <span class=\"token string\">'￥1,256,000.00'</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  money<span class=\"token punctuation\">:</span> <span class=\"token string\">'￥120,000.00'</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span>\n    <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">bordered</span>\n    <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token string\">'Header'</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">footer</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token string\">'Footer'</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var columns = [{
    title: 'Name',
    dataIndex: 'name',
    render: function render(text) {
      return React.createElement(
        "a",
        {
          href: "javascript:;"
        },
        text
      );
    }
  }, {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money'
  }, {
    title: 'Address',
    dataIndex: 'address'
  }];
  var data = [{
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park'
  }, {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park'
  }, {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park'
  }];
  return React.createElement(_antd.Table, {
    columns: columns,
    dataSource: data,
    bordered: true,
    title: function title() {
      return 'Header';
    },
    footer: function footer() {
      return 'Footer';
    }
  });
},
  "style": "th.column-money,\ntd.column-money {\n  text-align: right !important;\n}",
  "highlightedStyle": "<span class=\"token selector\">th<span class=\"token class\">.column-money</span>,\ntd<span class=\"token class\">.column-money</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> right <span class=\"token important\">!important</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ 2372:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "表头只支持列合并，使用 column 里的 colSpan 进行设置。"
      ],
      [
        "p",
        "表格支持行/列合并，使用 render 里的单元格属性 colSpan 或者 rowSpan 设值为 0 时，设置的表格不会渲染。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Table column title supports ",
        [
          "code",
          "colSpan"
        ],
        " that set in ",
        [
          "code",
          "column"
        ],
        "."
      ],
      [
        "p",
        "Table cell supports ",
        [
          "code",
          "colSpan"
        ],
        " and ",
        [
          "code",
          "rowSpan"
        ],
        " that set in render return object. When each of them is set to ",
        [
          "code",
          "0"
        ],
        ", the cell will not be rendered."
      ]
    ]
  },
  "meta": {
    "order": 14,
    "title": {
      "en-US": "colSpan and rowSpan",
      "zh-CN": "表格行/列合并"
    },
    "filename": "components/table/demo/colspan-rowspan.md",
    "id": "components-table-demo-colspan-rowspan"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// In the fifth row, other columns are merged into first column</span>\n<span class=\"token comment\" spellcheck=\"true\">// by setting it's colSpan to be 0</span>\n<span class=\"token keyword\">const</span> renderContent <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> row<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> obj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    children<span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">,</span>\n    props<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>index <span class=\"token operator\">===</span> <span class=\"token number\">4</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    obj<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>colSpan <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> obj<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> row<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>index <span class=\"token operator\">&lt;</span> <span class=\"token number\">4</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      children<span class=\"token punctuation\">:</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n      props<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        colSpan<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> renderContent<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Home phone'</span><span class=\"token punctuation\">,</span>\n  colSpan<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'tel'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> row<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> obj <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      children<span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">,</span>\n      props<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>index <span class=\"token operator\">===</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      obj<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>rowSpan <span class=\"token operator\">=</span> <span class=\"token number\">2</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token comment\" spellcheck=\"true\">// These two are merged into above cell</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>index <span class=\"token operator\">===</span> <span class=\"token number\">3</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      obj<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>rowSpan <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>index <span class=\"token operator\">===</span> <span class=\"token number\">4</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      obj<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>colSpan <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> obj<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Phone'</span><span class=\"token punctuation\">,</span>\n  colSpan<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'phone'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> renderContent<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> renderContent<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  tel<span class=\"token punctuation\">:</span> <span class=\"token string\">'0571-22098909'</span><span class=\"token punctuation\">,</span>\n  phone<span class=\"token punctuation\">:</span> <span class=\"token number\">18889898989</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  tel<span class=\"token punctuation\">:</span> <span class=\"token string\">'0571-22098333'</span><span class=\"token punctuation\">,</span>\n  phone<span class=\"token punctuation\">:</span> <span class=\"token number\">18889898888</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  tel<span class=\"token punctuation\">:</span> <span class=\"token string\">'0575-22098909'</span><span class=\"token punctuation\">,</span>\n  phone<span class=\"token punctuation\">:</span> <span class=\"token number\">18900010002</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'4'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Red'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">18</span><span class=\"token punctuation\">,</span>\n  tel<span class=\"token punctuation\">:</span> <span class=\"token string\">'0575-22098909'</span><span class=\"token punctuation\">,</span>\n  phone<span class=\"token punctuation\">:</span> <span class=\"token number\">18900010002</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 2 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'5'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jake White'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">18</span><span class=\"token punctuation\">,</span>\n  tel<span class=\"token punctuation\">:</span> <span class=\"token string\">'0575-22098909'</span><span class=\"token punctuation\">,</span>\n  phone<span class=\"token punctuation\">:</span> <span class=\"token number\">18900010002</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Dublin No. 2 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">bordered</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  // In the fifth row, other columns are merged into first column
  // by setting it's colSpan to be 0
  var renderContent = function renderContent(value, row, index) {
    var obj = {
      children: value,
      props: {}
    };

    if (index === 4) {
      obj.props.colSpan = 0;
    }

    return obj;
  };

  var columns = [{
    title: 'Name',
    dataIndex: 'name',
    render: function render(text, row, index) {
      if (index < 4) {
        return React.createElement(
          "a",
          {
            href: "javascript:;"
          },
          text
        );
      }

      return {
        children: React.createElement(
          "a",
          {
            href: "javascript:;"
          },
          text
        ),
        props: {
          colSpan: 5
        }
      };
    }
  }, {
    title: 'Age',
    dataIndex: 'age',
    render: renderContent
  }, {
    title: 'Home phone',
    colSpan: 2,
    dataIndex: 'tel',
    render: function render(value, row, index) {
      var obj = {
        children: value,
        props: {}
      };

      if (index === 2) {
        obj.props.rowSpan = 2;
      } // These two are merged into above cell


      if (index === 3) {
        obj.props.rowSpan = 0;
      }

      if (index === 4) {
        obj.props.colSpan = 0;
      }

      return obj;
    }
  }, {
    title: 'Phone',
    colSpan: 0,
    dataIndex: 'phone',
    render: renderContent
  }, {
    title: 'Address',
    dataIndex: 'address',
    render: renderContent
  }];
  var data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park'
  }, {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park'
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park'
  }, {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park'
  }];
  return React.createElement(_antd.Table, {
    columns: columns,
    dataSource: data,
    bordered: true
  });
}
};

/***/ }),

/***/ 2373:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "通过 ",
        [
          "code",
          "filterDropdown"
        ],
        " 自定义的列筛选功能，并实现一个搜索列的示例。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Implement a customized column search example via ",
        [
          "code",
          "filterDropdown"
        ],
        "."
      ]
    ]
  },
  "meta": {
    "order": 8,
    "title": {
      "en-US": "Customized filter panel",
      "zh-CN": "自定义筛选菜单"
    },
    "filename": "components/table/demo/custom-filter-panel.md",
    "id": "components-table-demo-custom-filter-panel"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'4'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Red'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 2 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    searchText<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleSearch <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>selectedKeys<span class=\"token punctuation\">,</span> confirm<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">confirm</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> searchText<span class=\"token punctuation\">:</span> selectedKeys<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleReset <span class=\"token operator\">=</span> clearFilters <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">clearFilters</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> searchText<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n      filterDropdown<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> setSelectedKeys<span class=\"token punctuation\">,</span> selectedKeys<span class=\"token punctuation\">,</span> confirm<span class=\"token punctuation\">,</span> clearFilters <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>custom-filter-dropdown<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span>\n            <span class=\"token attr-name\">ref</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>ele <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>searchInput <span class=\"token operator\">=</span> ele<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Search</span> <span class=\"token attr-name\">name\"</span>\n            <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>selectedKeys<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>e <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">setSelectedKeys</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value <span class=\"token operator\">?</span> <span class=\"token punctuation\">[</span>e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">]</span> <span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onPressEnter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleSearch</span><span class=\"token punctuation\">(</span>selectedKeys<span class=\"token punctuation\">,</span> confirm<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleSearch</span><span class=\"token punctuation\">(</span>selectedKeys<span class=\"token punctuation\">,</span> confirm<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Search<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleReset</span><span class=\"token punctuation\">(</span>clearFilters<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Reset<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      filterIcon<span class=\"token punctuation\">:</span> filtered <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>smile-o<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> filtered <span class=\"token operator\">?</span> <span class=\"token string\">'#108ee9'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'#aaa'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n      onFilter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span><span class=\"token function\">toLowerCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">includes</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">.</span><span class=\"token function\">toLowerCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      onFilterDropdownVisibleChange<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>visible<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>visible<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n          <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>searchInput<span class=\"token punctuation\">.</span><span class=\"token function\">focus</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> searchText <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">return</span> searchText <span class=\"token operator\">?</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">.</span><span class=\"token function\">split</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">new</span> <span class=\"token class-name\">RegExp</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`(?&lt;=</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>searchText<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">)|(?=</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>searchText<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">)`</span></span><span class=\"token punctuation\">,</span> <span class=\"token string\">'i'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>fragment<span class=\"token punctuation\">,</span> i<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n              fragment<span class=\"token punctuation\">.</span><span class=\"token function\">toLowerCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> searchText<span class=\"token punctuation\">.</span><span class=\"token function\">toLowerCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n                <span class=\"token operator\">?</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>i<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>highlight<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>fragment<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span> <span class=\"token punctuation\">:</span> fragment <span class=\"token comment\" spellcheck=\"true\">// eslint-disable-line</span>\n            <span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> text<span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n      filters<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n        text<span class=\"token punctuation\">:</span> <span class=\"token string\">'London'</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'London'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n        text<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York'</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      onFilter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>address<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  }, {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park'
  }, {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }];

  var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, App);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        searchText: ''
      }, _this.handleSearch = function (selectedKeys, confirm) {
        return function () {
          confirm();

          _this.setState({
            searchText: selectedKeys[0]
          });
        };
      }, _this.handleReset = function (clearFilters) {
        return function () {
          clearFilters();

          _this.setState({
            searchText: ''
          });
        };
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var columns = [{
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          filterDropdown: function filterDropdown(_ref2) {
            var setSelectedKeys = _ref2.setSelectedKeys,
                selectedKeys = _ref2.selectedKeys,
                confirm = _ref2.confirm,
                clearFilters = _ref2.clearFilters;
            return React.createElement(
              "div",
              {
                className: "custom-filter-dropdown"
              },
              React.createElement(_antd.Input, {
                ref: function ref(ele) {
                  return _this2.searchInput = ele;
                },
                placeholder: "Search name",
                value: selectedKeys[0],
                onChange: function onChange(e) {
                  return setSelectedKeys(e.target.value ? [e.target.value] : []);
                },
                onPressEnter: _this2.handleSearch(selectedKeys, confirm)
              }),
              React.createElement(
                _antd.Button,
                {
                  type: "primary",
                  onClick: _this2.handleSearch(selectedKeys, confirm)
                },
                "Search"
              ),
              React.createElement(
                _antd.Button,
                {
                  onClick: _this2.handleReset(clearFilters)
                },
                "Reset"
              )
            );
          },
          filterIcon: function filterIcon(filtered) {
            return React.createElement(_antd.Icon, {
              type: "smile-o",
              style: {
                color: filtered ? '#108ee9' : '#aaa'
              }
            });
          },
          onFilter: function onFilter(value, record) {
            return record.name.toLowerCase().includes(value.toLowerCase());
          },
          onFilterDropdownVisibleChange: function onFilterDropdownVisibleChange(visible) {
            if (visible) {
              setTimeout(function () {
                _this2.searchInput.focus();
              });
            }
          },
          render: function render(text) {
            var searchText = _this2.state.searchText;
            return searchText ? React.createElement(
              "span",
              null,
              text.split(new RegExp("(?<=" + searchText + ")|(?=" + searchText + ")", 'i')).map(function (fragment, i) {
                return fragment.toLowerCase() === searchText.toLowerCase() ? React.createElement(
                  "span",
                  {
                    key: i,
                    className: "highlight"
                  },
                  fragment
                ) : fragment // eslint-disable-line
                ;
              })
            ) : text;
          }
        }, {
          title: 'Age',
          dataIndex: 'age',
          key: 'age'
        }, {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
          filters: [{
            text: 'London',
            value: 'London'
          }, {
            text: 'New York',
            value: 'New York'
          }],
          onFilter: function onFilter(value, record) {
            return record.address.indexOf(value) === 0;
          }
        }];
        return React.createElement(_antd.Table, {
          columns: columns,
          dataSource: data
        });
      }
    }]);

    return App;
  }(React.Component);

  return React.createElement(App, null);
},
  "style": ".custom-filter-dropdown {\n  padding: 8px;\n  border-radius: 6px;\n  background: #fff;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, .2);\n}\n\n.custom-filter-dropdown input {\n  width: 130px;\n  margin-right: 8px;\n}\n\n.custom-filter-dropdown button {\n  margin-right: 8px;\n}\n\n.highlight {\n  color: #f50;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.custom-filter-dropdown</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">box-shadow</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">1</span>px <span class=\"token number\">6</span>px <span class=\"token function\">rgba</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span>, <span class=\"token number\">0</span>, <span class=\"token number\">0</span>, <span class=\"token number\">.2</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.custom-filter-dropdown</span> input </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">130</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.custom-filter-dropdown</span> button </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.highlight</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#f50</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ 2374:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "使用自定义元素，我们可以集成 react-dnd 来实现拖拽排序。"
      ]
    ],
    "en-US": [
      [
        "p",
        "By using custom components, we can integrate table with react-dnd to implement drag sorting."
      ]
    ]
  },
  "meta": {
    "order": 25,
    "title": {
      "en-US": "Drag sorting",
      "zh-CN": "拖拽排序"
    },
    "filename": "components/table/demo/drag-sorting.md",
    "id": "components-table-demo-drag-sorting"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> DragDropContext<span class=\"token punctuation\">,</span> DragSource<span class=\"token punctuation\">,</span> DropTarget <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react-dnd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> HTML5Backend <span class=\"token keyword\">from</span> <span class=\"token string\">'react-dnd-html5-backend'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> update <span class=\"token keyword\">from</span> <span class=\"token string\">'immutability-helper'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">dragDirection</span><span class=\"token punctuation\">(</span>\n  dragIndex<span class=\"token punctuation\">,</span>\n  hoverIndex<span class=\"token punctuation\">,</span>\n  initialClientOffset<span class=\"token punctuation\">,</span>\n  clientOffset<span class=\"token punctuation\">,</span>\n  sourceClientOffset<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> hoverMiddleY <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>initialClientOffset<span class=\"token punctuation\">.</span>y <span class=\"token operator\">-</span> sourceClientOffset<span class=\"token punctuation\">.</span>y<span class=\"token punctuation\">)</span> <span class=\"token operator\">/</span> <span class=\"token number\">2</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">const</span> hoverClientY <span class=\"token operator\">=</span> clientOffset<span class=\"token punctuation\">.</span>y <span class=\"token operator\">-</span> sourceClientOffset<span class=\"token punctuation\">.</span>y<span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>dragIndex <span class=\"token operator\">&lt;</span> hoverIndex <span class=\"token operator\">&amp;&amp;</span> hoverClientY <span class=\"token operator\">></span> hoverMiddleY<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token string\">'downward'</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>dragIndex <span class=\"token operator\">></span> hoverIndex <span class=\"token operator\">&amp;&amp;</span> hoverClientY <span class=\"token operator\">&lt;</span> hoverMiddleY<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token string\">'upward'</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">BodyRow</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>\n      isOver<span class=\"token punctuation\">,</span>\n      connectDragSource<span class=\"token punctuation\">,</span>\n      connectDropTarget<span class=\"token punctuation\">,</span>\n      moveRow<span class=\"token punctuation\">,</span>\n      dragRow<span class=\"token punctuation\">,</span>\n      clientOffset<span class=\"token punctuation\">,</span>\n      sourceClientOffset<span class=\"token punctuation\">,</span>\n      initialClientOffset<span class=\"token punctuation\">,</span>\n      <span class=\"token operator\">...</span>restProps\n    <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> style <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> <span class=\"token operator\">...</span>restProps<span class=\"token punctuation\">.</span>style<span class=\"token punctuation\">,</span> cursor<span class=\"token punctuation\">:</span> <span class=\"token string\">'move'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">let</span> className <span class=\"token operator\">=</span> restProps<span class=\"token punctuation\">.</span>className<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>isOver <span class=\"token operator\">&amp;&amp;</span> initialClientOffset<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> direction <span class=\"token operator\">=</span> <span class=\"token function\">dragDirection</span><span class=\"token punctuation\">(</span>\n        dragRow<span class=\"token punctuation\">.</span>index<span class=\"token punctuation\">,</span>\n        restProps<span class=\"token punctuation\">.</span>index<span class=\"token punctuation\">,</span>\n        initialClientOffset<span class=\"token punctuation\">,</span>\n        clientOffset<span class=\"token punctuation\">,</span>\n        sourceClientOffset\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>direction <span class=\"token operator\">===</span> <span class=\"token string\">'downward'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        className <span class=\"token operator\">+</span><span class=\"token operator\">=</span> <span class=\"token string\">' drop-over-downward'</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>direction <span class=\"token operator\">===</span> <span class=\"token string\">'upward'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        className <span class=\"token operator\">+</span><span class=\"token operator\">=</span> <span class=\"token string\">' drop-over-upward'</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token function\">connectDragSource</span><span class=\"token punctuation\">(</span>\n      <span class=\"token function\">connectDropTarget</span><span class=\"token punctuation\">(</span>\n        <span class=\"token operator\">&lt;</span>tr\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>restProps<span class=\"token punctuation\">}</span>\n          className<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>className<span class=\"token punctuation\">}</span>\n          style<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>style<span class=\"token punctuation\">}</span>\n        <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token punctuation\">)</span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> rowSource <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">beginDrag</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      index<span class=\"token punctuation\">:</span> props<span class=\"token punctuation\">.</span>index<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> rowTarget <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">drop</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">,</span> monitor<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> dragIndex <span class=\"token operator\">=</span> monitor<span class=\"token punctuation\">.</span><span class=\"token function\">getItem</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span>index<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> hoverIndex <span class=\"token operator\">=</span> props<span class=\"token punctuation\">.</span>index<span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// Don't replace items with themselves</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>dragIndex <span class=\"token operator\">===</span> hoverIndex<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// Time to actually perform the action</span>\n    props<span class=\"token punctuation\">.</span><span class=\"token function\">moveRow</span><span class=\"token punctuation\">(</span>dragIndex<span class=\"token punctuation\">,</span> hoverIndex<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// Note: we're mutating the monitor item here!</span>\n    <span class=\"token comment\" spellcheck=\"true\">// Generally it's better to avoid mutations,</span>\n    <span class=\"token comment\" spellcheck=\"true\">// but it's good here for the sake of performance</span>\n    <span class=\"token comment\" spellcheck=\"true\">// to avoid expensive index searches.</span>\n    monitor<span class=\"token punctuation\">.</span><span class=\"token function\">getItem</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span>index <span class=\"token operator\">=</span> hoverIndex<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> DragableBodyRow <span class=\"token operator\">=</span> <span class=\"token function\">DropTarget</span><span class=\"token punctuation\">(</span><span class=\"token string\">'row'</span><span class=\"token punctuation\">,</span> rowTarget<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span>connect<span class=\"token punctuation\">,</span> monitor<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  connectDropTarget<span class=\"token punctuation\">:</span> connect<span class=\"token punctuation\">.</span><span class=\"token function\">dropTarget</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n  isOver<span class=\"token punctuation\">:</span> monitor<span class=\"token punctuation\">.</span><span class=\"token function\">isOver</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n  sourceClientOffset<span class=\"token punctuation\">:</span> monitor<span class=\"token punctuation\">.</span><span class=\"token function\">getSourceClientOffset</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n  <span class=\"token function\">DragSource</span><span class=\"token punctuation\">(</span><span class=\"token string\">'row'</span><span class=\"token punctuation\">,</span> rowSource<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span>connect<span class=\"token punctuation\">,</span> monitor<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    connectDragSource<span class=\"token punctuation\">:</span> connect<span class=\"token punctuation\">.</span><span class=\"token function\">dragSource</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    dragRow<span class=\"token punctuation\">:</span> monitor<span class=\"token punctuation\">.</span><span class=\"token function\">getItem</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    clientOffset<span class=\"token punctuation\">:</span> monitor<span class=\"token punctuation\">.</span><span class=\"token function\">getClientOffset</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    initialClientOffset<span class=\"token punctuation\">:</span> monitor<span class=\"token punctuation\">.</span><span class=\"token function\">getInitialClientOffset</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>BodyRow<span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">DragSortingTable</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    data<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n      age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n      address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n      age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n      address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n      age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n      address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span>\n\n  components <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    body<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n      row<span class=\"token punctuation\">:</span> DragableBodyRow<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span>\n\n  moveRow <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>dragIndex<span class=\"token punctuation\">,</span> hoverIndex<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> data <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> dragRow <span class=\"token operator\">=</span> data<span class=\"token punctuation\">[</span>dragIndex<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>\n      <span class=\"token function\">update</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n        data<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n          $splice<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">[</span>dragIndex<span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">[</span>hoverIndex<span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> dragRow<span class=\"token punctuation\">]</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span>\n        <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">components</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>components<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onRow</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n          index<span class=\"token punctuation\">,</span>\n          moveRow<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>moveRow<span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> Demo <span class=\"token operator\">=</span> <span class=\"token function\">DragDropContext</span><span class=\"token punctuation\">(</span>HTML5Backend<span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>DragSortingTable<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  var _reactDnd = __webpack_require__(2375);

  var _reactDndHtml5Backend = __webpack_require__(2418);

  var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

  var _immutabilityHelper = __webpack_require__(2428);

  var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function dragDirection(dragIndex, hoverIndex, initialClientOffset, clientOffset, sourceClientOffset) {
    var hoverMiddleY = (initialClientOffset.y - sourceClientOffset.y) / 2;
    var hoverClientY = clientOffset.y - sourceClientOffset.y;

    if (dragIndex < hoverIndex && hoverClientY > hoverMiddleY) {
      return 'downward';
    }

    if (dragIndex > hoverIndex && hoverClientY < hoverMiddleY) {
      return 'upward';
    }
  }

  var BodyRow = function (_React$Component) {
    _inherits(BodyRow, _React$Component);

    function BodyRow() {
      _classCallCheck(this, BodyRow);

      return _possibleConstructorReturn(this, (BodyRow.__proto__ || Object.getPrototypeOf(BodyRow)).apply(this, arguments));
    }

    _createClass(BodyRow, [{
      key: "render",
      value: function render() {
        var _props = this.props,
            isOver = _props.isOver,
            connectDragSource = _props.connectDragSource,
            connectDropTarget = _props.connectDropTarget,
            moveRow = _props.moveRow,
            dragRow = _props.dragRow,
            clientOffset = _props.clientOffset,
            sourceClientOffset = _props.sourceClientOffset,
            initialClientOffset = _props.initialClientOffset,
            restProps = _objectWithoutProperties(_props, ["isOver", "connectDragSource", "connectDropTarget", "moveRow", "dragRow", "clientOffset", "sourceClientOffset", "initialClientOffset"]);

        var style = _extends({}, restProps.style, {
          cursor: 'move'
        });

        var className = restProps.className;

        if (isOver && initialClientOffset) {
          var direction = dragDirection(dragRow.index, restProps.index, initialClientOffset, clientOffset, sourceClientOffset);

          if (direction === 'downward') {
            className += ' drop-over-downward';
          }

          if (direction === 'upward') {
            className += ' drop-over-upward';
          }
        }

        return connectDragSource(connectDropTarget(React.createElement("tr", _extends({}, restProps, {
          className: className,
          style: style
        }))));
      }
    }]);

    return BodyRow;
  }(React.Component);

  var rowSource = {
    beginDrag: function beginDrag(props) {
      return {
        index: props.index
      };
    }
  };
  var rowTarget = {
    drop: function drop(props, monitor) {
      var dragIndex = monitor.getItem().index;
      var hoverIndex = props.index; // Don't replace items with themselves

      if (dragIndex === hoverIndex) {
        return;
      } // Time to actually perform the action


      props.moveRow(dragIndex, hoverIndex); // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.

      monitor.getItem().index = hoverIndex;
    }
  };
  var DragableBodyRow = (0, _reactDnd.DropTarget)('row', rowTarget, function (connect, monitor) {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),
      sourceClientOffset: monitor.getSourceClientOffset()
    };
  })((0, _reactDnd.DragSource)('row', rowSource, function (connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      dragRow: monitor.getItem(),
      clientOffset: monitor.getClientOffset(),
      initialClientOffset: monitor.getInitialClientOffset()
    };
  })(BodyRow));
  var columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }];

  var DragSortingTable = function (_React$Component2) {
    _inherits(DragSortingTable, _React$Component2);

    function DragSortingTable() {
      var _ref;

      var _temp, _this2, _ret;

      _classCallCheck(this, DragSortingTable);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = DragSortingTable.__proto__ || Object.getPrototypeOf(DragSortingTable)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
        data: [{
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park'
        }, {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park'
        }, {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park'
        }]
      }, _this2.components = {
        body: {
          row: DragableBodyRow
        }
      }, _this2.moveRow = function (dragIndex, hoverIndex) {
        var data = _this2.state.data;
        var dragRow = data[dragIndex];

        _this2.setState((0, _immutabilityHelper2.default)(_this2.state, {
          data: {
            $splice: [[dragIndex, 1], [hoverIndex, 0, dragRow]]
          }
        }));
      }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(DragSortingTable, [{
      key: "render",
      value: function render() {
        var _this3 = this;

        return React.createElement(_antd.Table, {
          columns: columns,
          dataSource: this.state.data,
          components: this.components,
          onRow: function onRow(record, index) {
            return {
              index: index,
              moveRow: _this3.moveRow
            };
          }
        });
      }
    }]);

    return DragSortingTable;
  }(React.Component);

  var Demo = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(DragSortingTable);
  return React.createElement(Demo, null);
},
  "style": "#components-table-demo-drag-sorting tr.drop-over-downward td {\n  border-bottom: 2px dashed #1890ff;\n}\n\n#components-table-demo-drag-sorting tr.drop-over-upward td {\n  border-top: 2px dashed #1890ff;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-table-demo-drag-sorting</span> tr<span class=\"token class\">.drop-over-downward</span> td </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">border-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">2</span>px dashed <span class=\"token hexcode\">#1890ff</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token id\">#components-table-demo-drag-sorting</span> tr<span class=\"token class\">.drop-over-upward</span> td </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">border-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">2</span>px dashed <span class=\"token hexcode\">#1890ff</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ 2375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DragDropContext_1 = __webpack_require__(1990);
exports.DragDropContext = DragDropContext_1.DragDropContext;
exports.DragDropContextProvider = DragDropContext_1.DragDropContextProvider;
var DragLayer_1 = __webpack_require__(2402);
exports.DragLayer = DragLayer_1.default;
var DragSource_1 = __webpack_require__(2403);
exports.DragSource = DragSource_1.default;
var DropTarget_1 = __webpack_require__(2413);
exports.DropTarget = DropTarget_1.default;


/***/ }),

/***/ 2376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(2004));
__export(__webpack_require__(2377));


/***/ }),

/***/ 2377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DragDropManagerImpl_1 = __webpack_require__(2378);
function createDragDropManager(backend, context) {
    return new DragDropManagerImpl_1.default(backend, context);
}
exports.createDragDropManager = createDragDropManager;


/***/ }),

/***/ 2378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(2379);
var reducers_1 = __webpack_require__(2383);
var dragDrop_1 = __webpack_require__(1985);
var DragDropMonitorImpl_1 = __webpack_require__(2395);
var HandlerRegistryImpl_1 = __webpack_require__(2397);
var DragDropManagerImpl = /** @class */ (function () {
    function DragDropManagerImpl(createBackend, context) {
        if (context === void 0) { context = {}; }
        this.context = context;
        this.isSetUp = false;
        var store = redux_1.createStore(reducers_1.default);
        this.store = store;
        this.monitor = new DragDropMonitorImpl_1.default(store, new HandlerRegistryImpl_1.default(store));
        this.backend = createBackend(this);
        store.subscribe(this.handleRefCountChange.bind(this));
    }
    DragDropManagerImpl.prototype.getContext = function () {
        return this.context;
    };
    DragDropManagerImpl.prototype.getMonitor = function () {
        return this.monitor;
    };
    DragDropManagerImpl.prototype.getBackend = function () {
        return this.backend;
    };
    DragDropManagerImpl.prototype.getRegistry = function () {
        return this.monitor.registry;
    };
    DragDropManagerImpl.prototype.getActions = function () {
        var manager = this;
        var dispatch = this.store.dispatch;
        function bindActionCreator(actionCreator) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var action = actionCreator.apply(manager, args);
                if (typeof action !== 'undefined') {
                    dispatch(action);
                }
            };
        }
        var actions = dragDrop_1.default(this);
        return Object.keys(actions).reduce(function (boundActions, key) {
            var action = actions[key];
            boundActions[key] = bindActionCreator(action);
            return boundActions;
        }, {});
    };
    DragDropManagerImpl.prototype.dispatch = function (action) {
        this.store.dispatch(action);
    };
    DragDropManagerImpl.prototype.handleRefCountChange = function () {
        var shouldSetUp = this.store.getState().refCount > 0;
        if (shouldSetUp && !this.isSetUp) {
            this.backend.setup();
            this.isSetUp = true;
        }
        else if (!shouldSetUp && this.isSetUp) {
            this.backend.teardown();
            this.isSetUp = false;
        }
    };
    return DragDropManagerImpl;
}());
exports.default = DragDropManagerImpl;


/***/ }),

/***/ 2379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_symbol_observable__ = __webpack_require__(2380);


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers);
  var unexpectedKeyCache;

  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error("Dispatching while constructing your middleware is not allowed. " + "Other middleware would not be applied to this dispatch.");
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ 2380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__(2382);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(23), __webpack_require__(2381)(module)))

/***/ }),

/***/ 2381:
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 2382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ 2383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dragOffset_1 = __webpack_require__(2384);
var dragOperation_1 = __webpack_require__(2385);
var refCount_1 = __webpack_require__(2386);
var dirtyHandlerIds_1 = __webpack_require__(2387);
var stateId_1 = __webpack_require__(2394);
var get = __webpack_require__(250);
function reduce(state, action) {
    if (state === void 0) { state = {}; }
    return {
        dirtyHandlerIds: dirtyHandlerIds_1.default(state.dirtyHandlerIds, {
            type: action.type,
            payload: __assign({}, action.payload, { prevTargetIds: get(state, 'dragOperation.targetIds', []) }),
        }),
        dragOffset: dragOffset_1.default(state.dragOffset, action),
        refCount: refCount_1.default(state.refCount, action),
        dragOperation: dragOperation_1.default(state.dragOperation, action),
        stateId: stateId_1.default(state.stateId),
    };
}
exports.default = reduce;


/***/ }),

/***/ 2384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dragDrop_1 = __webpack_require__(1985);
var equality_1 = __webpack_require__(2006);
var initialState = {
    initialSourceClientOffset: null,
    initialClientOffset: null,
    clientOffset: null,
};
function dragOffset(state, action) {
    if (state === void 0) { state = initialState; }
    var payload = action.payload;
    switch (action.type) {
        case dragDrop_1.BEGIN_DRAG:
            return {
                initialSourceClientOffset: payload.sourceClientOffset,
                initialClientOffset: payload.clientOffset,
                clientOffset: payload.clientOffset,
            };
        case dragDrop_1.HOVER:
            if (equality_1.areCoordsEqual(state.clientOffset, payload.clientOffset)) {
                return state;
            }
            return __assign({}, state, { clientOffset: payload.clientOffset });
        case dragDrop_1.END_DRAG:
        case dragDrop_1.DROP:
            return initialState;
        default:
            return state;
    }
}
exports.default = dragOffset;


/***/ }),

/***/ 2385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dragDrop_1 = __webpack_require__(1985);
var registry_1 = __webpack_require__(1986);
var without = __webpack_require__(2007);
var initialState = {
    itemType: null,
    item: null,
    sourceId: null,
    targetIds: [],
    dropResult: null,
    didDrop: false,
    isSourcePublic: null,
};
function dragOperation(state, action) {
    if (state === void 0) { state = initialState; }
    var payload = action.payload;
    switch (action.type) {
        case dragDrop_1.BEGIN_DRAG:
            return __assign({}, state, { itemType: payload.itemType, item: payload.item, sourceId: payload.sourceId, isSourcePublic: payload.isSourcePublic, dropResult: null, didDrop: false });
        case dragDrop_1.PUBLISH_DRAG_SOURCE:
            return __assign({}, state, { isSourcePublic: true });
        case dragDrop_1.HOVER:
            return __assign({}, state, { targetIds: payload.targetIds });
        case registry_1.REMOVE_TARGET:
            if (state.targetIds.indexOf(payload.targetId) === -1) {
                return state;
            }
            return __assign({}, state, { targetIds: without(state.targetIds, payload.targetId) });
        case dragDrop_1.DROP:
            return __assign({}, state, { dropResult: payload.dropResult, didDrop: true, targetIds: [] });
        case dragDrop_1.END_DRAG:
            return __assign({}, state, { itemType: null, item: null, sourceId: null, dropResult: null, didDrop: false, isSourcePublic: null, targetIds: [] });
        default:
            return state;
    }
}
exports.default = dragOperation;


/***/ }),

/***/ 2386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var registry_1 = __webpack_require__(1986);
function refCount(state, action) {
    if (state === void 0) { state = 0; }
    switch (action.type) {
        case registry_1.ADD_SOURCE:
        case registry_1.ADD_TARGET:
            return state + 1;
        case registry_1.REMOVE_SOURCE:
        case registry_1.REMOVE_TARGET:
            return state - 1;
        default:
            return state;
    }
}
exports.default = refCount;


/***/ }),

/***/ 2387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dragDrop_1 = __webpack_require__(1985);
var registry_1 = __webpack_require__(1986);
var equality_1 = __webpack_require__(2006);
var dirtiness_1 = __webpack_require__(2009);
var xor = __webpack_require__(2391);
function dirtyHandlerIds(state, action) {
    if (state === void 0) { state = dirtiness_1.NONE; }
    switch (action.type) {
        case dragDrop_1.HOVER:
            break;
        case registry_1.ADD_SOURCE:
        case registry_1.ADD_TARGET:
        case registry_1.REMOVE_TARGET:
        case registry_1.REMOVE_SOURCE:
            return dirtiness_1.NONE;
        case dragDrop_1.BEGIN_DRAG:
        case dragDrop_1.PUBLISH_DRAG_SOURCE:
        case dragDrop_1.END_DRAG:
        case dragDrop_1.DROP:
        default:
            return dirtiness_1.ALL;
    }
    var _a = action.payload, _b = _a.targetIds, targetIds = _b === void 0 ? [] : _b, _c = _a.prevTargetIds, prevTargetIds = _c === void 0 ? [] : _c;
    var result = xor(targetIds, prevTargetIds);
    var didChange = result.length > 0 || !equality_1.areArraysEqual(targetIds, prevTargetIds);
    if (!didChange) {
        return dirtiness_1.NONE;
    }
    // Check the target ids at the innermost position. If they are valid, add them
    // to the result
    var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
    var innermostTargetId = targetIds[targetIds.length - 1];
    if (prevInnermostTargetId !== innermostTargetId) {
        if (prevInnermostTargetId) {
            result.push(prevInnermostTargetId);
        }
        if (innermostTargetId) {
            result.push(innermostTargetId);
        }
    }
    return result;
}
exports.default = dirtyHandlerIds;


/***/ }),

/***/ 2388:
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(242),
    baseIntersection = __webpack_require__(2389),
    baseRest = __webpack_require__(667),
    castArrayLikeObject = __webpack_require__(2390);

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
var intersection = baseRest(function(arrays) {
  var mapped = arrayMap(arrays, castArrayLikeObject);
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped)
    : [];
});

module.exports = intersection;


/***/ }),

/***/ 2389:
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(384),
    arrayIncludes = __webpack_require__(671),
    arrayIncludesWith = __webpack_require__(672),
    arrayMap = __webpack_require__(242),
    baseUnary = __webpack_require__(244),
    cacheHas = __webpack_require__(385);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith : arrayIncludes,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, baseUnary(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
      ? new SetCache(othIndex && array)
      : undefined;
  }
  array = arrays[0];

  var index = -1,
      seen = caches[0];

  outer:
  while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (!(seen
          ? cacheHas(seen, computed)
          : includes(result, computed, comparator)
        )) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache
              ? cacheHas(cache, computed)
              : includes(arrays[othIndex], computed, comparator))
            ) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseIntersection;


/***/ }),

/***/ 2390:
/***/ (function(module, exports, __webpack_require__) {

var isArrayLikeObject = __webpack_require__(668);

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : [];
}

module.exports = castArrayLikeObject;


/***/ }),

/***/ 2391:
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(686),
    baseRest = __webpack_require__(667),
    baseXor = __webpack_require__(2392),
    isArrayLikeObject = __webpack_require__(668);

/**
 * Creates an array of unique values that is the
 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
 * of the given arrays. The order of result values is determined by the order
 * they occur in the arrays.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.without
 * @example
 *
 * _.xor([2, 1], [2, 3]);
 * // => [1, 3]
 */
var xor = baseRest(function(arrays) {
  return baseXor(arrayFilter(arrays, isArrayLikeObject));
});

module.exports = xor;


/***/ }),

/***/ 2392:
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(2008),
    baseFlatten = __webpack_require__(2010),
    baseUniq = __webpack_require__(670);

/**
 * The base implementation of methods like `_.xor`, without support for
 * iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of values.
 */
function baseXor(arrays, iteratee, comparator) {
  var length = arrays.length;
  if (length < 2) {
    return length ? baseUniq(arrays[0]) : [];
  }
  var index = -1,
      result = Array(length);

  while (++index < length) {
    var array = arrays[index],
        othIndex = -1;

    while (++othIndex < length) {
      if (othIndex != index) {
        result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
      }
    }
  }
  return baseUniq(baseFlatten(result, 1), iteratee, comparator);
}

module.exports = baseXor;


/***/ }),

/***/ 2393:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(130),
    isArguments = __webpack_require__(249),
    isArray = __webpack_require__(47);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ 2394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function stateId(state) {
    if (state === void 0) { state = 0; }
    return state + 1;
}
exports.default = stateId;


/***/ }),

/***/ 2395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var matchesType_1 = __webpack_require__(2005);
var coords_1 = __webpack_require__(2396);
var dirtiness_1 = __webpack_require__(2009);
var invariant = __webpack_require__(125);
var DragDropMonitorImpl = /** @class */ (function () {
    function DragDropMonitorImpl(store, registry) {
        this.store = store;
        this.registry = registry;
    }
    DragDropMonitorImpl.prototype.subscribeToStateChange = function (listener, options) {
        var _this = this;
        if (options === void 0) { options = { handlerIds: undefined }; }
        var handlerIds = options.handlerIds;
        invariant(typeof listener === 'function', 'listener must be a function.');
        invariant(typeof handlerIds === 'undefined' || Array.isArray(handlerIds), 'handlerIds, when specified, must be an array of strings.');
        var prevStateId = this.store.getState().stateId;
        var handleChange = function () {
            var state = _this.store.getState();
            var currentStateId = state.stateId;
            try {
                var canSkipListener = currentStateId === prevStateId ||
                    (currentStateId === prevStateId + 1 &&
                        !dirtiness_1.areDirty(state.dirtyHandlerIds, handlerIds));
                if (!canSkipListener) {
                    listener();
                }
            }
            finally {
                prevStateId = currentStateId;
            }
        };
        return this.store.subscribe(handleChange);
    };
    DragDropMonitorImpl.prototype.subscribeToOffsetChange = function (listener) {
        var _this = this;
        invariant(typeof listener === 'function', 'listener must be a function.');
        var previousState = this.store.getState().dragOffset;
        var handleChange = function () {
            var nextState = _this.store.getState().dragOffset;
            if (nextState === previousState) {
                return;
            }
            previousState = nextState;
            listener();
        };
        return this.store.subscribe(handleChange);
    };
    DragDropMonitorImpl.prototype.canDragSource = function (sourceId) {
        var source = this.registry.getSource(sourceId);
        invariant(source, 'Expected to find a valid source.');
        if (this.isDragging()) {
            return false;
        }
        return source.canDrag(this, sourceId);
    };
    DragDropMonitorImpl.prototype.canDropOnTarget = function (targetId) {
        var target = this.registry.getTarget(targetId);
        invariant(target, 'Expected to find a valid target.');
        if (!this.isDragging() || this.didDrop()) {
            return false;
        }
        var targetType = this.registry.getTargetType(targetId);
        var draggedItemType = this.getItemType();
        return (matchesType_1.default(targetType, draggedItemType) && target.canDrop(this, targetId));
    };
    DragDropMonitorImpl.prototype.isDragging = function () {
        return Boolean(this.getItemType());
    };
    DragDropMonitorImpl.prototype.isDraggingSource = function (sourceId) {
        var source = this.registry.getSource(sourceId, true);
        invariant(source, 'Expected to find a valid source.');
        if (!this.isDragging() || !this.isSourcePublic()) {
            return false;
        }
        var sourceType = this.registry.getSourceType(sourceId);
        var draggedItemType = this.getItemType();
        if (sourceType !== draggedItemType) {
            return false;
        }
        return source.isDragging(this, sourceId);
    };
    DragDropMonitorImpl.prototype.isOverTarget = function (targetId, options) {
        if (options === void 0) { options = { shallow: false }; }
        var shallow = options.shallow;
        if (!this.isDragging()) {
            return false;
        }
        var targetType = this.registry.getTargetType(targetId);
        var draggedItemType = this.getItemType();
        if (draggedItemType && !matchesType_1.default(targetType, draggedItemType)) {
            return false;
        }
        var targetIds = this.getTargetIds();
        if (!targetIds.length) {
            return false;
        }
        var index = targetIds.indexOf(targetId);
        if (shallow) {
            return index === targetIds.length - 1;
        }
        else {
            return index > -1;
        }
    };
    DragDropMonitorImpl.prototype.getItemType = function () {
        return this.store.getState().dragOperation.itemType;
    };
    DragDropMonitorImpl.prototype.getItem = function () {
        return this.store.getState().dragOperation.item;
    };
    DragDropMonitorImpl.prototype.getSourceId = function () {
        return this.store.getState().dragOperation.sourceId;
    };
    DragDropMonitorImpl.prototype.getTargetIds = function () {
        return this.store.getState().dragOperation.targetIds;
    };
    DragDropMonitorImpl.prototype.getDropResult = function () {
        return this.store.getState().dragOperation.dropResult;
    };
    DragDropMonitorImpl.prototype.didDrop = function () {
        return this.store.getState().dragOperation.didDrop;
    };
    DragDropMonitorImpl.prototype.isSourcePublic = function () {
        return this.store.getState().dragOperation.isSourcePublic;
    };
    DragDropMonitorImpl.prototype.getInitialClientOffset = function () {
        return this.store.getState().dragOffset.initialClientOffset;
    };
    DragDropMonitorImpl.prototype.getInitialSourceClientOffset = function () {
        return this.store.getState().dragOffset.initialSourceClientOffset;
    };
    DragDropMonitorImpl.prototype.getClientOffset = function () {
        return this.store.getState().dragOffset.clientOffset;
    };
    DragDropMonitorImpl.prototype.getSourceClientOffset = function () {
        return coords_1.getSourceClientOffset(this.store.getState().dragOffset);
    };
    DragDropMonitorImpl.prototype.getDifferenceFromInitialOffset = function () {
        return coords_1.getDifferenceFromInitialOffset(this.store.getState().dragOffset);
    };
    return DragDropMonitorImpl;
}());
exports.default = DragDropMonitorImpl;


/***/ }),

/***/ 2396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Coordinate addition
 * @param a The first coordinate
 * @param b The second coordinate
 */
function add(a, b) {
    return {
        x: a.x + b.x,
        y: a.y + b.y,
    };
}
exports.add = add;
/**
 * Coordinate subtraction
 * @param a The first coordinate
 * @param b The second coordinate
 */
function subtract(a, b) {
    return {
        x: a.x - b.x,
        y: a.y - b.y,
    };
}
exports.subtract = subtract;
/**
 * Returns the cartesian distance of the drag source component's position, based on its position
 * at the time when the current drag operation has started, and the movement difference.
 *
 * Returns null if no item is being dragged.
 *
 * @param state The offset state to compute from
 */
function getSourceClientOffset(state) {
    var clientOffset = state.clientOffset, initialClientOffset = state.initialClientOffset, initialSourceClientOffset = state.initialSourceClientOffset;
    if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
        return null;
    }
    return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
exports.getSourceClientOffset = getSourceClientOffset;
/**
 * Determines the x,y offset between the client offset and the initial client offset
 *
 * @param state The offset state to compute from
 */
function getDifferenceFromInitialOffset(state) {
    var clientOffset = state.clientOffset, initialClientOffset = state.initialClientOffset;
    if (!clientOffset || !initialClientOffset) {
        return null;
    }
    return subtract(clientOffset, initialClientOffset);
}
exports.getDifferenceFromInitialOffset = getDifferenceFromInitialOffset;


/***/ }),

/***/ 2397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var registry_1 = __webpack_require__(1986);
var getNextUniqueId_1 = __webpack_require__(2398);
var interfaces_1 = __webpack_require__(2004);
var contracts_1 = __webpack_require__(2399);
var invariant = __webpack_require__(125);
var asap = __webpack_require__(2400);
function getNextHandlerId(role) {
    var id = getNextUniqueId_1.default().toString();
    switch (role) {
        case interfaces_1.HandlerRole.SOURCE:
            return "S" + id;
        case interfaces_1.HandlerRole.TARGET:
            return "T" + id;
        default:
            throw new Error("Unknown Handler Role: " + role);
    }
}
function parseRoleFromHandlerId(handlerId) {
    switch (handlerId[0]) {
        case 'S':
            return interfaces_1.HandlerRole.SOURCE;
        case 'T':
            return interfaces_1.HandlerRole.TARGET;
        default:
            invariant(false, "Cannot parse handler ID: " + handlerId);
    }
}
function mapContainsValue(map, searchValue) {
    var entries = map.entries();
    var isDone = false;
    do {
        var _a = entries.next(), done = _a.done, _b = _a.value, value = _b[1];
        if (value === searchValue) {
            return true;
        }
        isDone = done;
    } while (!isDone);
    return false;
}
var HandlerRegistryImpl = /** @class */ (function () {
    function HandlerRegistryImpl(store) {
        this.store = store;
        this.types = new Map();
        this.dragSources = new Map();
        this.dropTargets = new Map();
        this.pinnedSourceId = null;
        this.pinnedSource = null;
    }
    HandlerRegistryImpl.prototype.addSource = function (type, source) {
        contracts_1.validateType(type);
        contracts_1.validateSourceContract(source);
        var sourceId = this.addHandler(interfaces_1.HandlerRole.SOURCE, type, source);
        this.store.dispatch(registry_1.addSource(sourceId));
        return sourceId;
    };
    HandlerRegistryImpl.prototype.addTarget = function (type, target) {
        contracts_1.validateType(type, true);
        contracts_1.validateTargetContract(target);
        var targetId = this.addHandler(interfaces_1.HandlerRole.TARGET, type, target);
        this.store.dispatch(registry_1.addTarget(targetId));
        return targetId;
    };
    HandlerRegistryImpl.prototype.containsHandler = function (handler) {
        return (mapContainsValue(this.dragSources, handler) ||
            mapContainsValue(this.dropTargets, handler));
    };
    HandlerRegistryImpl.prototype.getSource = function (sourceId, includePinned) {
        if (includePinned === void 0) { includePinned = false; }
        invariant(this.isSourceId(sourceId), 'Expected a valid source ID.');
        var isPinned = includePinned && sourceId === this.pinnedSourceId;
        var source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
        return source;
    };
    HandlerRegistryImpl.prototype.getTarget = function (targetId) {
        invariant(this.isTargetId(targetId), 'Expected a valid target ID.');
        return this.dropTargets.get(targetId);
    };
    HandlerRegistryImpl.prototype.getSourceType = function (sourceId) {
        invariant(this.isSourceId(sourceId), 'Expected a valid source ID.');
        return this.types.get(sourceId);
    };
    HandlerRegistryImpl.prototype.getTargetType = function (targetId) {
        invariant(this.isTargetId(targetId), 'Expected a valid target ID.');
        return this.types.get(targetId);
    };
    HandlerRegistryImpl.prototype.isSourceId = function (handlerId) {
        var role = parseRoleFromHandlerId(handlerId);
        return role === interfaces_1.HandlerRole.SOURCE;
    };
    HandlerRegistryImpl.prototype.isTargetId = function (handlerId) {
        var role = parseRoleFromHandlerId(handlerId);
        return role === interfaces_1.HandlerRole.TARGET;
    };
    HandlerRegistryImpl.prototype.removeSource = function (sourceId) {
        var _this = this;
        invariant(this.getSource(sourceId), 'Expected an existing source.');
        this.store.dispatch(registry_1.removeSource(sourceId));
        asap(function () {
            _this.dragSources.delete(sourceId);
            _this.types.delete(sourceId);
        });
    };
    HandlerRegistryImpl.prototype.removeTarget = function (targetId) {
        invariant(this.getTarget(targetId), 'Expected an existing target.');
        this.store.dispatch(registry_1.removeTarget(targetId));
        this.dropTargets.delete(targetId);
        this.types.delete(targetId);
    };
    HandlerRegistryImpl.prototype.pinSource = function (sourceId) {
        var source = this.getSource(sourceId);
        invariant(source, 'Expected an existing source.');
        this.pinnedSourceId = sourceId;
        this.pinnedSource = source;
    };
    HandlerRegistryImpl.prototype.unpinSource = function () {
        invariant(this.pinnedSource, 'No source is pinned at the time.');
        this.pinnedSourceId = null;
        this.pinnedSource = null;
    };
    HandlerRegistryImpl.prototype.addHandler = function (role, type, handler) {
        var id = getNextHandlerId(role);
        this.types.set(id, type);
        if (role === interfaces_1.HandlerRole.SOURCE) {
            this.dragSources.set(id, handler);
        }
        else if (role === interfaces_1.HandlerRole.TARGET) {
            this.dropTargets.set(id, handler);
        }
        return id;
    };
    return HandlerRegistryImpl;
}());
exports.default = HandlerRegistryImpl;


/***/ }),

/***/ 2398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var nextUniqueId = 0;
function getNextUniqueId() {
    return nextUniqueId++;
}
exports.default = getNextUniqueId;


/***/ }),

/***/ 2399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var invariant = __webpack_require__(125);
function validateSourceContract(source) {
    invariant(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
    invariant(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
    invariant(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
}
exports.validateSourceContract = validateSourceContract;
function validateTargetContract(target) {
    invariant(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
    invariant(typeof target.hover === 'function', 'Expected hover to be a function.');
    invariant(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
}
exports.validateTargetContract = validateTargetContract;
function validateType(type, allowArray) {
    if (allowArray && Array.isArray(type)) {
        type.forEach(function (t) { return validateType(t, false); });
        return;
    }
    invariant(typeof type === 'string' || typeof type === 'symbol', allowArray
        ? 'Type can only be a string, a symbol, or an array of either.'
        : 'Type can only be a string or a symbol.');
}
exports.validateType = validateType;


/***/ }),

/***/ 2400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// rawAsap provides everything we need except exception management.
var rawAsap = __webpack_require__(2401);
// RawTasks are recycled to reduce GC churn.
var freeTasks = [];
// We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.
var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}

/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawAsap(rawTask);
}

// We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.
function RawTask() {
    this.task = null;
}

// The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.
RawTask.prototype.call = function () {
    try {
        this.task.call();
    } catch (error) {
        if (asap.onerror) {
            // This hook exists purely for testing purposes.
            // Its name will be periodically randomized to break any code that
            // depends on its existence.
            asap.onerror(error);
        } else {
            // In a web browser, exceptions are not fatal. However, to avoid
            // slowing down the queue of pending tasks, we rethrow the error in a
            // lower priority turn.
            pendingErrors.push(error);
            requestErrorThrow();
        }
    } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
    }
};


/***/ }),

/***/ 2401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ }),

/***/ 2402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var checkDecoratorArguments_1 = __webpack_require__(1987);
var DragDropContext_1 = __webpack_require__(1990);
var hoistStatics = __webpack_require__(241);
var isPlainObject = __webpack_require__(383);
var invariant = __webpack_require__(125);
var shallowEqual = __webpack_require__(37);
var isClassComponent = __webpack_require__(1991).default;
function DragLayer(collect, options) {
    if (options === void 0) { options = {}; }
    checkDecoratorArguments_1.default('DragLayer', 'collect[, options]', collect, options);
    invariant(typeof collect === 'function', 'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ', 'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html', collect);
    invariant(isPlainObject(options), 'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. ' +
        'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html', options);
    return function decorateLayer(DecoratedComponent) {
        var Decorated = DecoratedComponent;
        var _a = options.arePropsEqual, arePropsEqual = _a === void 0 ? shallowEqual : _a;
        var displayName = Decorated.displayName || Decorated.name || 'Component';
        var DragLayerContainer = /** @class */ (function (_super) {
            __extends(DragLayerContainer, _super);
            function DragLayerContainer(props) {
                var _this = _super.call(this, props) || this;
                _this.isCurrentlyMounted = false;
                _this.ref = React.createRef();
                _this.handleChange = _this.handleChange.bind(_this);
                return _this;
            }
            Object.defineProperty(DragLayerContainer.prototype, "DecoratedComponent", {
                get: function () {
                    return DecoratedComponent;
                },
                enumerable: true,
                configurable: true
            });
            DragLayerContainer.prototype.getDecoratedComponentInstance = function () {
                invariant(this.ref.current, 'In order to access an instance of the decorated component it can not be a stateless component.');
                return this.ref.current;
            };
            DragLayerContainer.prototype.shouldComponentUpdate = function (nextProps, nextState) {
                return (!arePropsEqual(nextProps, this.props) ||
                    !shallowEqual(nextState, this.state));
            };
            DragLayerContainer.prototype.componentDidMount = function () {
                this.isCurrentlyMounted = true;
                this.handleChange();
            };
            DragLayerContainer.prototype.componentWillUnmount = function () {
                this.isCurrentlyMounted = false;
                if (this.unsubscribeFromOffsetChange) {
                    this.unsubscribeFromOffsetChange();
                    this.unsubscribeFromOffsetChange = undefined;
                }
                if (this.unsubscribeFromStateChange) {
                    this.unsubscribeFromStateChange();
                    this.unsubscribeFromStateChange = undefined;
                }
            };
            DragLayerContainer.prototype.render = function () {
                var _this = this;
                return (React.createElement(DragDropContext_1.Consumer, null, function (_a) {
                    var dragDropManager = _a.dragDropManager;
                    if (dragDropManager === undefined) {
                        return null;
                    }
                    _this.receiveDragDropManager(dragDropManager);
                    // Let componentDidMount fire to initialize the collected state
                    if (!_this.isCurrentlyMounted) {
                        return null;
                    }
                    return (React.createElement(Decorated, __assign({}, _this.props, _this.state, { ref: isClassComponent(Decorated) ? _this.ref : undefined })));
                }));
            };
            DragLayerContainer.prototype.receiveDragDropManager = function (dragDropManager) {
                if (this.manager !== undefined) {
                    return;
                }
                this.manager = dragDropManager;
                invariant(typeof dragDropManager === 'object', 'Could not find the drag and drop manager in the context of %s. ' +
                    'Make sure to wrap the top-level component of your app with DragDropContext. ' +
                    'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);
                var monitor = this.manager.getMonitor();
                this.unsubscribeFromOffsetChange = monitor.subscribeToOffsetChange(this.handleChange);
                this.unsubscribeFromStateChange = monitor.subscribeToStateChange(this.handleChange);
            };
            DragLayerContainer.prototype.handleChange = function () {
                if (!this.isCurrentlyMounted) {
                    return;
                }
                var nextState = this.getCurrentState();
                if (!shallowEqual(nextState, this.state)) {
                    this.setState(nextState);
                }
            };
            DragLayerContainer.prototype.getCurrentState = function () {
                if (!this.manager) {
                    return {};
                }
                var monitor = this.manager.getMonitor();
                return collect(monitor, this.props);
            };
            DragLayerContainer.displayName = "DragLayer(" + displayName + ")";
            return DragLayerContainer;
        }(React.Component));
        return hoistStatics(DragLayerContainer, DecoratedComponent);
    };
}
exports.default = DragLayer;


/***/ }),

/***/ 2403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var checkDecoratorArguments_1 = __webpack_require__(1987);
var decorateHandler_1 = __webpack_require__(2011);
var registerSource_1 = __webpack_require__(2408);
var createSourceFactory_1 = __webpack_require__(2409);
var createSourceMonitor_1 = __webpack_require__(2410);
var createSourceConnector_1 = __webpack_require__(2411);
var isValidType_1 = __webpack_require__(2013);
var invariant = __webpack_require__(125);
var isPlainObject = __webpack_require__(383);
/**
 * Decorates a component as a dragsource
 * @param type The dragsource type
 * @param spec The drag source specification
 * @param collect The props collector function
 * @param options DnD optinos
 */
function DragSource(type, spec, collect, options) {
    if (options === void 0) { options = {}; }
    checkDecoratorArguments_1.default('DragSource', 'type, spec, collect[, options]', type, spec, collect, options);
    var getType = type;
    if (typeof type !== 'function') {
        invariant(isValidType_1.default(type), 'Expected "type" provided as the first argument to DragSource to be ' +
            'a string, or a function that returns a string given the current props. ' +
            'Instead, received %s. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', type);
        getType = function () { return type; };
    }
    invariant(isPlainObject(spec), 'Expected "spec" provided as the second argument to DragSource to be ' +
        'a plain object. Instead, received %s. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', spec);
    var createSource = createSourceFactory_1.default(spec);
    invariant(typeof collect === 'function', 'Expected "collect" provided as the third argument to DragSource to be ' +
        'a function that returns a plain object of props to inject. ' +
        'Instead, received %s. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', collect);
    invariant(isPlainObject(options), 'Expected "options" provided as the fourth argument to DragSource to be ' +
        'a plain object when specified. ' +
        'Instead, received %s. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', collect);
    return function decorateSource(DecoratedComponent) {
        return decorateHandler_1.default({
            containerDisplayName: 'DragSource',
            createHandler: createSource,
            registerHandler: registerSource_1.default,
            createMonitor: createSourceMonitor_1.default,
            createConnector: createSourceConnector_1.default,
            DecoratedComponent: DecoratedComponent,
            getType: getType,
            collect: collect,
            options: options,
        });
    };
}
exports.default = DragSource;


/***/ }),

/***/ 2404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(2405));
__export(__webpack_require__(2406));
__export(__webpack_require__(2407));


/***/ }),

/***/ 2405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isFunction = __webpack_require__(248);
var noop = __webpack_require__(687);
/**
 * Provides a set of static methods for creating Disposables.
 * @param {Function} action Action to run during the first call to dispose.
 * The action is guaranteed to be run at most once.
 */
var Disposable = /** @class */ (function () {
    function Disposable(action) {
        this.isDisposed = false;
        this.action = isFunction(action) ? action : noop;
    }
    /**
     * Validates whether the given object is a disposable
     * @param {Object} Object to test whether it has a dispose method
     * @returns {Boolean} true if a disposable object, else false.
     */
    Disposable.isDisposable = function (d) {
        return d && isFunction(d.dispose);
    };
    Disposable._fixup = function (result) {
        return Disposable.isDisposable(result) ? result : Disposable.empty;
    };
    /**
     * Creates a disposable object that invokes the specified action when disposed.
     * @param {Function} dispose Action to run during the first call to dispose.
     * The action is guaranteed to be run at most once.
     * @return {Disposable} The disposable object that runs the given action upon disposal.
     */
    Disposable.create = function (action) {
        return new Disposable(action);
    };
    /** Performs the task of cleaning up resources. */
    Disposable.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.action();
            this.isDisposed = true;
        }
    };
    /**
     * Gets the disposable that does nothing when disposed.
     */
    Disposable.empty = { dispose: noop };
    return Disposable;
}());
exports.Disposable = Disposable;


/***/ }),

/***/ 2406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a disposable resource whose underlying disposable resource can
 * be replaced by another disposable resource, causing automatic disposal of
 * the previous underlying disposable resource.
 */
var SerialDisposable = /** @class */ (function () {
    function SerialDisposable() {
        this.isDisposed = false;
    }
    /**
     * Gets the underlying disposable.
     * @returns {Any} the underlying disposable.
     */
    SerialDisposable.prototype.getDisposable = function () {
        return this.current;
    };
    SerialDisposable.prototype.setDisposable = function (value) {
        var shouldDispose = this.isDisposed;
        if (!shouldDispose) {
            var old = this.current;
            this.current = value;
            if (old) {
                old.dispose();
            }
        }
        if (shouldDispose && value) {
            value.dispose();
        }
    };
    /** Performs the task of cleaning up resources. */
    SerialDisposable.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            var old = this.current;
            this.current = undefined;
            if (old) {
                old.dispose();
            }
        }
    };
    return SerialDisposable;
}());
exports.SerialDisposable = SerialDisposable;


/***/ }),

/***/ 2407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a group of disposable resources that are disposed together.
 * @constructor
 */
var CompositeDisposable = /** @class */ (function () {
    function CompositeDisposable() {
        var disposables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            disposables[_i] = arguments[_i];
        }
        this.isDisposed = false;
        this.disposables = disposables;
    }
    /**
     * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
     * @param {Any} item Disposable to add.
     */
    CompositeDisposable.prototype.add = function (item) {
        if (this.isDisposed) {
            item.dispose();
        }
        else {
            this.disposables.push(item);
        }
    };
    /**
     * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
     * @param {Any} item Disposable to remove.
     * @returns {Boolean} true if found; false otherwise.
     */
    CompositeDisposable.prototype.remove = function (item) {
        var shouldDispose = false;
        if (!this.isDisposed) {
            var idx = this.disposables.indexOf(item);
            if (idx !== -1) {
                shouldDispose = true;
                this.disposables.splice(idx, 1);
                item.dispose();
            }
        }
        return shouldDispose;
    };
    /**
     *  Disposes all disposables in the group and removes them from the group but
     *  does not dispose the CompositeDisposable.
     */
    CompositeDisposable.prototype.clear = function () {
        if (!this.isDisposed) {
            var len = this.disposables.length;
            var currentDisposables = new Array(len);
            for (var i = 0; i < len; i++) {
                currentDisposables[i] = this.disposables[i];
            }
            this.disposables = [];
            for (var i = 0; i < len; i++) {
                currentDisposables[i].dispose();
            }
        }
    };
    /**
     *  Disposes all disposables in the group and removes them from the group.
     */
    CompositeDisposable.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            var len = this.disposables.length;
            var currentDisposables = new Array(len);
            for (var i = 0; i < len; i++) {
                currentDisposables[i] = this.disposables[i];
            }
            this.disposables = [];
            for (var i = 0; i < len; i++) {
                currentDisposables[i].dispose();
            }
        }
    };
    return CompositeDisposable;
}());
exports.CompositeDisposable = CompositeDisposable;


/***/ }),

/***/ 2408:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function registerSource(type, source, manager) {
    var registry = manager.getRegistry();
    var sourceId = registry.addSource(type, source);
    function unregisterSource() {
        registry.removeSource(sourceId);
    }
    return {
        handlerId: sourceId,
        unregister: unregisterSource,
    };
}
exports.default = registerSource;


/***/ }),

/***/ 2409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var invariant = __webpack_require__(125);
var isPlainObject = __webpack_require__(383);
var ALLOWED_SPEC_METHODS = ['canDrag', 'beginDrag', 'isDragging', 'endDrag'];
var REQUIRED_SPEC_METHODS = ['beginDrag'];
function createSourceFactory(spec) {
    Object.keys(spec).forEach(function (key) {
        invariant(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have ' +
            'some of the following keys: %s. ' +
            'Instead received a specification with an unexpected "%s" key. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', ALLOWED_SPEC_METHODS.join(', '), key);
        invariant(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' +
            'Instead received a specification with %s: %s. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
    });
    REQUIRED_SPEC_METHODS.forEach(function (key) {
        invariant(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' +
            'Instead received a specification with %s: %s. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
    });
    var SourceImpl = /** @class */ (function () {
        function SourceImpl(monitor) {
            this.monitor = monitor;
            this.props = null;
            this.ref = react_1.createRef();
            this.beginDrag = this.beginDrag.bind(this);
        }
        SourceImpl.prototype.receiveProps = function (props) {
            this.props = props;
        };
        SourceImpl.prototype.canDrag = function () {
            if (!this.props) {
                return false;
            }
            if (!spec.canDrag) {
                return true;
            }
            return spec.canDrag(this.props, this.monitor);
        };
        SourceImpl.prototype.isDragging = function (globalMonitor, sourceId) {
            if (!this.props) {
                return false;
            }
            if (!spec.isDragging) {
                return sourceId === globalMonitor.getSourceId();
            }
            return spec.isDragging(this.props, this.monitor);
        };
        SourceImpl.prototype.beginDrag = function () {
            if (!this.props) {
                return;
            }
            var item = spec.beginDrag(this.props, this.monitor, this.ref.current);
            if (false) {
                invariant(isPlainObject(item), 'beginDrag() must return a plain object that represents the dragged item. ' +
                    'Instead received %s. ' +
                    'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', item);
            }
            return item;
        };
        SourceImpl.prototype.endDrag = function () {
            if (!this.props) {
                return;
            }
            if (!spec.endDrag) {
                return;
            }
            spec.endDrag(this.props, this.monitor, this.ref.current);
        };
        return SourceImpl;
    }());
    return function createSource(monitor) {
        return new SourceImpl(monitor);
    };
}
exports.default = createSourceFactory;


/***/ }),

/***/ 2410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var invariant = __webpack_require__(125);
var isCallingCanDrag = false;
var isCallingIsDragging = false;
var SourceMonitor = /** @class */ (function () {
    function SourceMonitor(manager) {
        this.internalMonitor = manager.getMonitor();
    }
    SourceMonitor.prototype.receiveHandlerId = function (sourceId) {
        this.sourceId = sourceId;
    };
    SourceMonitor.prototype.canDrag = function () {
        invariant(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html');
        try {
            isCallingCanDrag = true;
            return this.internalMonitor.canDragSource(this.sourceId);
        }
        finally {
            isCallingCanDrag = false;
        }
    };
    SourceMonitor.prototype.isDragging = function () {
        invariant(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html');
        try {
            isCallingIsDragging = true;
            return this.internalMonitor.isDraggingSource(this.sourceId);
        }
        finally {
            isCallingIsDragging = false;
        }
    };
    SourceMonitor.prototype.subscribeToStateChange = function (listener, options) {
        return this.internalMonitor.subscribeToStateChange(listener, options);
    };
    SourceMonitor.prototype.isDraggingSource = function (sourceId) {
        return this.internalMonitor.isDraggingSource(sourceId);
    };
    SourceMonitor.prototype.isOverTarget = function (targetId, options) {
        return this.internalMonitor.isOverTarget(targetId, options);
    };
    SourceMonitor.prototype.getTargetIds = function () {
        return this.internalMonitor.getTargetIds();
    };
    SourceMonitor.prototype.isSourcePublic = function () {
        return this.internalMonitor.isSourcePublic();
    };
    SourceMonitor.prototype.getSourceId = function () {
        return this.internalMonitor.getSourceId();
    };
    SourceMonitor.prototype.subscribeToOffsetChange = function (listener) {
        return this.internalMonitor.subscribeToOffsetChange(listener);
    };
    SourceMonitor.prototype.canDragSource = function (sourceId) {
        return this.internalMonitor.canDragSource(sourceId);
    };
    SourceMonitor.prototype.canDropOnTarget = function (targetId) {
        return this.internalMonitor.canDropOnTarget(targetId);
    };
    SourceMonitor.prototype.getItemType = function () {
        return this.internalMonitor.getItemType();
    };
    SourceMonitor.prototype.getItem = function () {
        return this.internalMonitor.getItem();
    };
    SourceMonitor.prototype.getDropResult = function () {
        return this.internalMonitor.getDropResult();
    };
    SourceMonitor.prototype.didDrop = function () {
        return this.internalMonitor.didDrop();
    };
    SourceMonitor.prototype.getInitialClientOffset = function () {
        return this.internalMonitor.getInitialClientOffset();
    };
    SourceMonitor.prototype.getInitialSourceClientOffset = function () {
        return this.internalMonitor.getInitialSourceClientOffset();
    };
    SourceMonitor.prototype.getSourceClientOffset = function () {
        return this.internalMonitor.getSourceClientOffset();
    };
    SourceMonitor.prototype.getClientOffset = function () {
        return this.internalMonitor.getClientOffset();
    };
    SourceMonitor.prototype.getDifferenceFromInitialOffset = function () {
        return this.internalMonitor.getDifferenceFromInitialOffset();
    };
    return SourceMonitor;
}());
function createSourceMonitor(manager) {
    return new SourceMonitor(manager);
}
exports.default = createSourceMonitor;


/***/ }),

/***/ 2411:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var wrapConnectorHooks_1 = __webpack_require__(2012);
var shallowEqual = __webpack_require__(37);
function createSourceConnector(backend) {
    var currentHandlerId;
    var currentDragSourceNode;
    var currentDragSourceOptions;
    var disconnectCurrentDragSource;
    var currentDragPreviewNode;
    var currentDragPreviewOptions;
    var disconnectCurrentDragPreview;
    function reconnectDragSource() {
        if (disconnectCurrentDragSource) {
            disconnectCurrentDragSource();
            disconnectCurrentDragSource = undefined;
        }
        if (currentHandlerId && currentDragSourceNode) {
            disconnectCurrentDragSource = backend.connectDragSource(currentHandlerId, currentDragSourceNode, currentDragSourceOptions);
        }
    }
    function reconnectDragPreview() {
        if (disconnectCurrentDragPreview) {
            disconnectCurrentDragPreview();
            disconnectCurrentDragPreview = undefined;
        }
        if (currentHandlerId && currentDragPreviewNode) {
            disconnectCurrentDragPreview = backend.connectDragPreview(currentHandlerId, currentDragPreviewNode, currentDragPreviewOptions);
        }
    }
    function receiveHandlerId(handlerId) {
        if (handlerId === currentHandlerId) {
            return;
        }
        currentHandlerId = handlerId;
        reconnectDragSource();
        reconnectDragPreview();
    }
    var hooks = wrapConnectorHooks_1.default({
        dragSource: function connectDragSource(node, options) {
            if (node === currentDragSourceNode &&
                shallowEqual(options, currentDragSourceOptions)) {
                return;
            }
            currentDragSourceNode = node;
            currentDragSourceOptions = options;
            reconnectDragSource();
        },
        dragPreview: function connectDragPreview(node, options) {
            if (node === currentDragPreviewNode &&
                shallowEqual(options, currentDragPreviewOptions)) {
                return;
            }
            currentDragPreviewNode = node;
            currentDragPreviewOptions = options;
            reconnectDragPreview();
        },
    });
    return {
        receiveHandlerId: receiveHandlerId,
        hooks: hooks,
    };
}
exports.default = createSourceConnector;


/***/ }),

/***/ 2412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var invariant = __webpack_require__(125);
function cloneWithRef(element, newRef) {
    var previousRef = element.ref;
    invariant(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' +
        'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' +
        'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');
    if (!previousRef) {
        // When there is no ref on the element, use the new ref directly
        return react_1.cloneElement(element, {
            ref: newRef,
        });
    }
    return react_1.cloneElement(element, {
        ref: function (node) {
            newRef(node);
            if (previousRef) {
                previousRef(node);
            }
        },
    });
}
exports.default = cloneWithRef;


/***/ }),

/***/ 2413:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var checkDecoratorArguments_1 = __webpack_require__(1987);
var decorateHandler_1 = __webpack_require__(2011);
var registerTarget_1 = __webpack_require__(2414);
var createTargetFactory_1 = __webpack_require__(2415);
var createTargetMonitor_1 = __webpack_require__(2416);
var createTargetConnector_1 = __webpack_require__(2417);
var isValidType_1 = __webpack_require__(2013);
var invariant = __webpack_require__(125);
var isPlainObject = __webpack_require__(383);
function DropTarget(type, spec, collect, options) {
    if (options === void 0) { options = {}; }
    checkDecoratorArguments_1.default('DropTarget', 'type, spec, collect[, options]', type, spec, collect, options);
    var getType = type;
    if (typeof type !== 'function') {
        invariant(isValidType_1.default(type, true), 'Expected "type" provided as the first argument to DropTarget to be ' +
            'a string, an array of strings, or a function that returns either given ' +
            'the current props. Instead, received %s. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', type);
        getType = function () { return type; };
    }
    invariant(isPlainObject(spec), 'Expected "spec" provided as the second argument to DropTarget to be ' +
        'a plain object. Instead, received %s. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', spec);
    var createTarget = createTargetFactory_1.default(spec);
    invariant(typeof collect === 'function', 'Expected "collect" provided as the third argument to DropTarget to be ' +
        'a function that returns a plain object of props to inject. ' +
        'Instead, received %s. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', collect);
    invariant(isPlainObject(options), 'Expected "options" provided as the fourth argument to DropTarget to be ' +
        'a plain object when specified. ' +
        'Instead, received %s. ' +
        'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', collect);
    return function decorateTarget(DecoratedComponent) {
        return decorateHandler_1.default({
            containerDisplayName: 'DropTarget',
            createHandler: createTarget,
            registerHandler: registerTarget_1.default,
            createMonitor: createTargetMonitor_1.default,
            createConnector: createTargetConnector_1.default,
            DecoratedComponent: DecoratedComponent,
            getType: getType,
            collect: collect,
            options: options,
        });
    };
}
exports.default = DropTarget;


/***/ }),

/***/ 2414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function registerTarget(type, target, manager) {
    var registry = manager.getRegistry();
    var targetId = registry.addTarget(type, target);
    function unregisterTarget() {
        registry.removeTarget(targetId);
    }
    return {
        handlerId: targetId,
        unregister: unregisterTarget,
    };
}
exports.default = registerTarget;


/***/ }),

/***/ 2415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var invariant = __webpack_require__(125);
var isPlainObject = __webpack_require__(383);
var ALLOWED_SPEC_METHODS = ['canDrop', 'hover', 'drop'];
function createTargetFactory(spec) {
    Object.keys(spec).forEach(function (key) {
        invariant(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drop target specification to only have ' +
            'some of the following keys: %s. ' +
            'Instead received a specification with an unexpected "%s" key. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', ALLOWED_SPEC_METHODS.join(', '), key);
        invariant(typeof spec[key] === 'function', 'Expected %s in the drop target specification to be a function. ' +
            'Instead received a specification with %s: %s. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', key, key, spec[key]);
    });
    var TargetImpl = /** @class */ (function () {
        function TargetImpl(monitor) {
            this.monitor = monitor;
            this.props = null;
            this.ref = react_1.createRef();
        }
        TargetImpl.prototype.receiveProps = function (props) {
            this.props = props;
        };
        TargetImpl.prototype.receiveMonitor = function (monitor) {
            this.monitor = monitor;
        };
        TargetImpl.prototype.canDrop = function () {
            if (!spec.canDrop) {
                return true;
            }
            return spec.canDrop(this.props, this.monitor);
        };
        TargetImpl.prototype.hover = function () {
            if (!spec.hover) {
                return;
            }
            spec.hover(this.props, this.monitor, this.ref.current);
        };
        TargetImpl.prototype.drop = function () {
            if (!spec.drop) {
                return undefined;
            }
            var dropResult = spec.drop(this.props, this.monitor, this.ref.current);
            if (false) {
                invariant(typeof dropResult === 'undefined' || isPlainObject(dropResult), 'drop() must either return undefined, or an object that represents the drop result. ' +
                    'Instead received %s. ' +
                    'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', dropResult);
            }
            return dropResult;
        };
        return TargetImpl;
    }());
    return function createTarget(monitor) {
        return new TargetImpl(monitor);
    };
}
exports.default = createTargetFactory;


/***/ }),

/***/ 2416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var invariant = __webpack_require__(125);
var isCallingCanDrop = false;
var TargetMonitor = /** @class */ (function () {
    function TargetMonitor(manager) {
        this.internalMonitor = manager.getMonitor();
    }
    TargetMonitor.prototype.receiveHandlerId = function (targetId) {
        this.targetId = targetId;
    };
    TargetMonitor.prototype.canDrop = function () {
        invariant(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target-monitor.html');
        try {
            isCallingCanDrop = true;
            return this.internalMonitor.canDropOnTarget(this.targetId);
        }
        finally {
            isCallingCanDrop = false;
        }
    };
    TargetMonitor.prototype.isOver = function (options) {
        return this.internalMonitor.isOverTarget(this.targetId, options);
    };
    TargetMonitor.prototype.getItemType = function () {
        return this.internalMonitor.getItemType();
    };
    TargetMonitor.prototype.getItem = function () {
        return this.internalMonitor.getItem();
    };
    TargetMonitor.prototype.getDropResult = function () {
        return this.internalMonitor.getDropResult();
    };
    TargetMonitor.prototype.didDrop = function () {
        return this.internalMonitor.didDrop();
    };
    TargetMonitor.prototype.getInitialClientOffset = function () {
        return this.internalMonitor.getInitialClientOffset();
    };
    TargetMonitor.prototype.getInitialSourceClientOffset = function () {
        return this.internalMonitor.getInitialSourceClientOffset();
    };
    TargetMonitor.prototype.getSourceClientOffset = function () {
        return this.internalMonitor.getSourceClientOffset();
    };
    TargetMonitor.prototype.getClientOffset = function () {
        return this.internalMonitor.getClientOffset();
    };
    TargetMonitor.prototype.getDifferenceFromInitialOffset = function () {
        return this.internalMonitor.getDifferenceFromInitialOffset();
    };
    return TargetMonitor;
}());
exports.TargetMonitor = TargetMonitor;
function createTargetMonitor(manager) {
    return new TargetMonitor(manager);
}
exports.default = createTargetMonitor;


/***/ }),

/***/ 2417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var wrapConnectorHooks_1 = __webpack_require__(2012);
var shallowEqual = __webpack_require__(37);
function createTargetConnector(backend) {
    var currentHandlerId;
    var currentDropTargetNode;
    var currentDropTargetOptions;
    var disconnectCurrentDropTarget;
    function reconnectDropTarget() {
        if (disconnectCurrentDropTarget) {
            disconnectCurrentDropTarget();
            disconnectCurrentDropTarget = undefined;
        }
        if (currentHandlerId && currentDropTargetNode) {
            disconnectCurrentDropTarget = backend.connectDropTarget(currentHandlerId, currentDropTargetNode, currentDropTargetOptions);
        }
    }
    function receiveHandlerId(handlerId) {
        if (handlerId === currentHandlerId) {
            return;
        }
        currentHandlerId = handlerId;
        reconnectDropTarget();
    }
    var hooks = wrapConnectorHooks_1.default({
        dropTarget: function connectDropTarget(node, options) {
            if (node === currentDropTargetNode &&
                shallowEqual(options, currentDropTargetOptions)) {
                return;
            }
            currentDropTargetNode = node;
            currentDropTargetOptions = options;
            reconnectDropTarget();
        },
    });
    return {
        receiveHandlerId: receiveHandlerId,
        hooks: hooks,
    };
}
exports.default = createTargetConnector;


/***/ }),

/***/ 2418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HTML5Backend_1 = __webpack_require__(2419);
var getEmptyImage_1 = __webpack_require__(2427);
exports.getEmptyImage = getEmptyImage_1.default;
var NativeTypes = __webpack_require__(1992);
exports.NativeTypes = NativeTypes;
function createHTML5Backend(manager) {
    return new HTML5Backend_1.default(manager);
}
exports.default = createHTML5Backend;


/***/ }),

/***/ 2419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var EnterLeaveCounter_1 = __webpack_require__(2420);
var BrowserDetector_1 = __webpack_require__(2014);
var OffsetUtils_1 = __webpack_require__(2422);
var NativeDragSources_1 = __webpack_require__(2424);
var NativeTypes = __webpack_require__(1992);
var autobind_decorator_1 = __webpack_require__(2425);
var defaults = __webpack_require__(2426);
var shallowEqual = __webpack_require__(37);
var HTML5Backend = /** @class */ (function () {
    function HTML5Backend(manager) {
        this.sourcePreviewNodes = new Map();
        this.sourcePreviewNodeOptions = new Map();
        this.sourceNodes = new Map();
        this.sourceNodeOptions = new Map();
        this.enterLeaveCounter = new EnterLeaveCounter_1.default();
        this.dragStartSourceIds = null;
        this.dropTargetIds = [];
        this.dragEnterTargetIds = [];
        this.currentNativeSource = null;
        this.currentNativeHandle = null;
        this.currentDragSourceNode = null;
        this.currentDragSourceNodeOffset = null;
        this.currentDragSourceNodeOffsetChanged = false;
        this.altKeyPressed = false;
        this.mouseMoveTimeoutTimer = null;
        this.asyncEndDragFrameId = null;
        this.dragOverTargetIds = null;
        this.actions = manager.getActions();
        this.monitor = manager.getMonitor();
        this.registry = manager.getRegistry();
        this.context = manager.getContext();
    }
    Object.defineProperty(HTML5Backend.prototype, "window", {
        // public for test
        get: function () {
            if (this.context && this.context.window) {
                return this.context.window;
            }
            else if (typeof window !== 'undefined') {
                return window;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    HTML5Backend.prototype.setup = function () {
        if (this.window === undefined) {
            return;
        }
        if (this.window.__isReactDndBackendSetUp) {
            throw new Error('Cannot have two HTML5 backends at the same time.');
        }
        this.window.__isReactDndBackendSetUp = true;
        this.addEventListeners(this.window);
    };
    HTML5Backend.prototype.teardown = function () {
        if (this.window === undefined) {
            return;
        }
        this.window.__isReactDndBackendSetUp = false;
        this.removeEventListeners(this.window);
        this.clearCurrentDragSourceNode();
        if (this.asyncEndDragFrameId) {
            this.window.cancelAnimationFrame(this.asyncEndDragFrameId);
        }
    };
    HTML5Backend.prototype.connectDragPreview = function (sourceId, node, options) {
        var _this = this;
        this.sourcePreviewNodeOptions.set(sourceId, options);
        this.sourcePreviewNodes.set(sourceId, node);
        return function () {
            _this.sourcePreviewNodes.delete(sourceId);
            _this.sourcePreviewNodeOptions.delete(sourceId);
        };
    };
    HTML5Backend.prototype.connectDragSource = function (sourceId, node, options) {
        var _this = this;
        this.sourceNodes.set(sourceId, node);
        this.sourceNodeOptions.set(sourceId, options);
        var handleDragStart = function (e) { return _this.handleDragStart(e, sourceId); };
        var handleSelectStart = function (e) { return _this.handleSelectStart(e); };
        node.setAttribute('draggable', true);
        node.addEventListener('dragstart', handleDragStart);
        node.addEventListener('selectstart', handleSelectStart);
        return function () {
            _this.sourceNodes.delete(sourceId);
            _this.sourceNodeOptions.delete(sourceId);
            node.removeEventListener('dragstart', handleDragStart);
            node.removeEventListener('selectstart', handleSelectStart);
            node.setAttribute('draggable', false);
        };
    };
    HTML5Backend.prototype.connectDropTarget = function (targetId, node) {
        var _this = this;
        var handleDragEnter = function (e) { return _this.handleDragEnter(e, targetId); };
        var handleDragOver = function (e) { return _this.handleDragOver(e, targetId); };
        var handleDrop = function (e) { return _this.handleDrop(e, targetId); };
        node.addEventListener('dragenter', handleDragEnter);
        node.addEventListener('dragover', handleDragOver);
        node.addEventListener('drop', handleDrop);
        return function () {
            node.removeEventListener('dragenter', handleDragEnter);
            node.removeEventListener('dragover', handleDragOver);
            node.removeEventListener('drop', handleDrop);
        };
    };
    HTML5Backend.prototype.addEventListeners = function (target) {
        // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
        if (!target.addEventListener) {
            return;
        }
        target.addEventListener('dragstart', this.handleTopDragStart);
        target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
        target.addEventListener('dragend', this.handleTopDragEndCapture, true);
        target.addEventListener('dragenter', this.handleTopDragEnter);
        target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
        target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
        target.addEventListener('dragover', this.handleTopDragOver);
        target.addEventListener('dragover', this.handleTopDragOverCapture, true);
        target.addEventListener('drop', this.handleTopDrop);
        target.addEventListener('drop', this.handleTopDropCapture, true);
    };
    HTML5Backend.prototype.removeEventListeners = function (target) {
        // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
        if (!target.removeEventListener) {
            return;
        }
        target.removeEventListener('dragstart', this.handleTopDragStart);
        target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
        target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
        target.removeEventListener('dragenter', this.handleTopDragEnter);
        target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
        target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
        target.removeEventListener('dragover', this.handleTopDragOver);
        target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
        target.removeEventListener('drop', this.handleTopDrop);
        target.removeEventListener('drop', this.handleTopDropCapture, true);
    };
    HTML5Backend.prototype.getCurrentSourceNodeOptions = function () {
        var sourceId = this.monitor.getSourceId();
        var sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
        return defaults(sourceNodeOptions || {}, {
            dropEffect: this.altKeyPressed ? 'copy' : 'move',
        });
    };
    HTML5Backend.prototype.getCurrentDropEffect = function () {
        if (this.isDraggingNativeItem()) {
            // It makes more sense to default to 'copy' for native resources
            return 'copy';
        }
        return this.getCurrentSourceNodeOptions().dropEffect;
    };
    HTML5Backend.prototype.getCurrentSourcePreviewNodeOptions = function () {
        var sourceId = this.monitor.getSourceId();
        var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
        return defaults(sourcePreviewNodeOptions || {}, {
            anchorX: 0.5,
            anchorY: 0.5,
            captureDraggingState: false,
        });
    };
    HTML5Backend.prototype.getSourceClientOffset = function (sourceId) {
        return OffsetUtils_1.getNodeClientOffset(this.sourceNodes.get(sourceId));
    };
    HTML5Backend.prototype.isDraggingNativeItem = function () {
        var itemType = this.monitor.getItemType();
        return Object.keys(NativeTypes).some(function (key) { return NativeTypes[key] === itemType; });
    };
    HTML5Backend.prototype.beginDragNativeItem = function (type) {
        this.clearCurrentDragSourceNode();
        var SourceType = NativeDragSources_1.createNativeDragSource(type);
        this.currentNativeSource = new SourceType();
        this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
        this.actions.beginDrag([this.currentNativeHandle]);
    };
    HTML5Backend.prototype.endDragNativeItem = function () {
        if (!this.isDraggingNativeItem()) {
            return;
        }
        this.actions.endDrag();
        this.registry.removeSource(this.currentNativeHandle);
        this.currentNativeHandle = null;
        this.currentNativeSource = null;
    };
    HTML5Backend.prototype.isNodeInDocument = function (node) {
        // Check the node either in the main document or in the current context
        return ((!!document && document.body.contains(node)) ||
            (!!this.window && this.window.document.body.contains(node)));
    };
    HTML5Backend.prototype.endDragIfSourceWasRemovedFromDOM = function () {
        var node = this.currentDragSourceNode;
        if (this.isNodeInDocument(node)) {
            return;
        }
        if (this.clearCurrentDragSourceNode()) {
            this.actions.endDrag();
        }
    };
    HTML5Backend.prototype.setCurrentDragSourceNode = function (node) {
        var _this = this;
        this.clearCurrentDragSourceNode();
        this.currentDragSourceNode = node;
        this.currentDragSourceNodeOffset = OffsetUtils_1.getNodeClientOffset(node);
        this.currentDragSourceNodeOffsetChanged = false;
        // A timeout of > 0 is necessary to resolve Firefox issue referenced
        // See:
        //   * https://github.com/react-dnd/react-dnd/pull/928
        //   * https://github.com/react-dnd/react-dnd/issues/869
        var MOUSE_MOVE_TIMEOUT = 1000;
        // Receiving a mouse event in the middle of a dragging operation
        // means it has ended and the drag source node disappeared from DOM,
        // so the browser didn't dispatch the dragend event.
        //
        // We need to wait before we start listening for mousemove events.
        // This is needed because the drag preview needs to be drawn or else it fires an 'mousemove' event
        // immediately in some browsers.
        //
        // See:
        //   * https://github.com/react-dnd/react-dnd/pull/928
        //   * https://github.com/react-dnd/react-dnd/issues/869
        //
        this.mouseMoveTimeoutTimer = setTimeout(function () {
            return (_this.window &&
                _this.window.addEventListener('mousemove', _this.endDragIfSourceWasRemovedFromDOM, true));
        }, MOUSE_MOVE_TIMEOUT);
    };
    HTML5Backend.prototype.clearCurrentDragSourceNode = function () {
        if (this.currentDragSourceNode) {
            this.currentDragSourceNode = null;
            this.currentDragSourceNodeOffset = null;
            this.currentDragSourceNodeOffsetChanged = false;
            if (this.window) {
                this.window.clearTimeout(this.mouseMoveTimeoutTimer);
                this.window.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
            }
            this.mouseMoveTimeoutTimer = null;
            return true;
        }
        return false;
    };
    HTML5Backend.prototype.checkIfCurrentDragSourceRectChanged = function () {
        var node = this.currentDragSourceNode;
        if (!node) {
            return false;
        }
        if (this.currentDragSourceNodeOffsetChanged) {
            return true;
        }
        this.currentDragSourceNodeOffsetChanged = !shallowEqual(OffsetUtils_1.getNodeClientOffset(node), this.currentDragSourceNodeOffset);
        return this.currentDragSourceNodeOffsetChanged;
    };
    HTML5Backend.prototype.handleTopDragStartCapture = function () {
        this.clearCurrentDragSourceNode();
        this.dragStartSourceIds = [];
    };
    HTML5Backend.prototype.handleDragStart = function (e, sourceId) {
        if (!this.dragStartSourceIds) {
            this.dragStartSourceIds = [];
        }
        this.dragStartSourceIds.unshift(sourceId);
    };
    HTML5Backend.prototype.handleTopDragStart = function (e) {
        var _this = this;
        var dragStartSourceIds = this.dragStartSourceIds;
        this.dragStartSourceIds = null;
        var clientOffset = OffsetUtils_1.getEventClientOffset(e);
        // Avoid crashing if we missed a drop event or our previous drag died
        if (this.monitor.isDragging()) {
            this.actions.endDrag();
        }
        // Don't publish the source just yet (see why below)
        this.actions.beginDrag(dragStartSourceIds || [], {
            publishSource: false,
            getSourceClientOffset: this.getSourceClientOffset,
            clientOffset: clientOffset,
        });
        var dataTransfer = e.dataTransfer;
        var nativeType = NativeDragSources_1.matchNativeItemType(dataTransfer);
        if (this.monitor.isDragging()) {
            if (typeof dataTransfer.setDragImage === 'function') {
                // Use custom drag image if user specifies it.
                // If child drag source refuses drag but parent agrees,
                // use parent's node as drag image. Neither works in IE though.
                var sourceId = this.monitor.getSourceId();
                var sourceNode = this.sourceNodes.get(sourceId);
                var dragPreview = this.sourcePreviewNodes.get(sourceId) || sourceNode;
                var _a = this.getCurrentSourcePreviewNodeOptions(), anchorX = _a.anchorX, anchorY = _a.anchorY, offsetX = _a.offsetX, offsetY = _a.offsetY;
                var anchorPoint = { anchorX: anchorX, anchorY: anchorY };
                var offsetPoint = { offsetX: offsetX, offsetY: offsetY };
                var dragPreviewOffset = OffsetUtils_1.getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
                dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
            }
            try {
                // Firefox won't drag without setting data
                dataTransfer.setData('application/json', {});
            }
            catch (err) {
                // IE doesn't support MIME types in setData
            }
            // Store drag source node so we can check whether
            // it is removed from DOM and trigger endDrag manually.
            this.setCurrentDragSourceNode(e.target);
            // Now we are ready to publish the drag source.. or are we not?
            var captureDraggingState = this.getCurrentSourcePreviewNodeOptions().captureDraggingState;
            if (!captureDraggingState) {
                // Usually we want to publish it in the next tick so that browser
                // is able to screenshot the current (not yet dragging) state.
                //
                // It also neatly avoids a situation where render() returns null
                // in the same tick for the source element, and browser freaks out.
                setTimeout(function () { return _this.actions.publishDragSource(); }, 0);
            }
            else {
                // In some cases the user may want to override this behavior, e.g.
                // to work around IE not supporting custom drag previews.
                //
                // When using a custom drag layer, the only way to prevent
                // the default drag preview from drawing in IE is to screenshot
                // the dragging state in which the node itself has zero opacity
                // and height. In this case, though, returning null from render()
                // will abruptly end the dragging, which is not obvious.
                //
                // This is the reason such behavior is strictly opt-in.
                this.actions.publishDragSource();
            }
        }
        else if (nativeType) {
            // A native item (such as URL) dragged from inside the document
            this.beginDragNativeItem(nativeType);
        }
        else if (!dataTransfer.types &&
            (!e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
            // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
            // Just let it drag. It's a native type (URL or text) and will be picked up in
            // dragenter handler.
            return;
        }
        else {
            // If by this time no drag source reacted, tell browser not to drag.
            e.preventDefault();
        }
    };
    HTML5Backend.prototype.handleTopDragEndCapture = function () {
        if (this.clearCurrentDragSourceNode()) {
            // Firefox can dispatch this event in an infinite loop
            // if dragend handler does something like showing an alert.
            // Only proceed if we have not handled it already.
            this.actions.endDrag();
        }
    };
    HTML5Backend.prototype.handleTopDragEnterCapture = function (e) {
        this.dragEnterTargetIds = [];
        var isFirstEnter = this.enterLeaveCounter.enter(e.target);
        if (!isFirstEnter || this.monitor.isDragging()) {
            return;
        }
        var dataTransfer = e.dataTransfer;
        var nativeType = NativeDragSources_1.matchNativeItemType(dataTransfer);
        if (nativeType) {
            // A native item (such as file or URL) dragged from outside the document
            this.beginDragNativeItem(nativeType);
        }
    };
    HTML5Backend.prototype.handleDragEnter = function (e, targetId) {
        this.dragEnterTargetIds.unshift(targetId);
    };
    HTML5Backend.prototype.handleTopDragEnter = function (e) {
        var _this = this;
        var dragEnterTargetIds = this.dragEnterTargetIds;
        this.dragEnterTargetIds = [];
        if (!this.monitor.isDragging()) {
            // This is probably a native item type we don't understand.
            return;
        }
        this.altKeyPressed = e.altKey;
        if (!BrowserDetector_1.isFirefox()) {
            // Don't emit hover in `dragenter` on Firefox due to an edge case.
            // If the target changes position as the result of `dragenter`, Firefox
            // will still happily dispatch `dragover` despite target being no longer
            // there. The easy solution is to only fire `hover` in `dragover` on FF.
            this.actions.hover(dragEnterTargetIds, {
                clientOffset: OffsetUtils_1.getEventClientOffset(e),
            });
        }
        var canDrop = dragEnterTargetIds.some(function (targetId) {
            return _this.monitor.canDropOnTarget(targetId);
        });
        if (canDrop) {
            // IE requires this to fire dragover events
            e.preventDefault();
            e.dataTransfer.dropEffect = this.getCurrentDropEffect();
        }
    };
    HTML5Backend.prototype.handleTopDragOverCapture = function () {
        this.dragOverTargetIds = [];
    };
    HTML5Backend.prototype.handleDragOver = function (e, targetId) {
        if (this.dragOverTargetIds === null) {
            this.dragOverTargetIds = [];
        }
        this.dragOverTargetIds.unshift(targetId);
    };
    HTML5Backend.prototype.handleTopDragOver = function (e) {
        var _this = this;
        var dragOverTargetIds = this.dragOverTargetIds;
        this.dragOverTargetIds = [];
        if (!this.monitor.isDragging()) {
            // This is probably a native item type we don't understand.
            // Prevent default "drop and blow away the whole document" action.
            e.preventDefault();
            e.dataTransfer.dropEffect = 'none';
            return;
        }
        this.altKeyPressed = e.altKey;
        this.actions.hover(dragOverTargetIds || [], {
            clientOffset: OffsetUtils_1.getEventClientOffset(e),
        });
        var canDrop = (dragOverTargetIds || []).some(function (targetId) {
            return _this.monitor.canDropOnTarget(targetId);
        });
        if (canDrop) {
            // Show user-specified drop effect.
            e.preventDefault();
            e.dataTransfer.dropEffect = this.getCurrentDropEffect();
        }
        else if (this.isDraggingNativeItem()) {
            // Don't show a nice cursor but still prevent default
            // "drop and blow away the whole document" action.
            e.preventDefault();
            e.dataTransfer.dropEffect = 'none';
        }
        else if (this.checkIfCurrentDragSourceRectChanged()) {
            // Prevent animating to incorrect position.
            // Drop effect must be other than 'none' to prevent animation.
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        }
    };
    HTML5Backend.prototype.handleTopDragLeaveCapture = function (e) {
        if (this.isDraggingNativeItem()) {
            e.preventDefault();
        }
        var isLastLeave = this.enterLeaveCounter.leave(e.target);
        if (!isLastLeave) {
            return;
        }
        if (this.isDraggingNativeItem()) {
            this.endDragNativeItem();
        }
    };
    HTML5Backend.prototype.handleTopDropCapture = function (e) {
        this.dropTargetIds = [];
        e.preventDefault();
        if (this.isDraggingNativeItem()) {
            this.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer);
        }
        this.enterLeaveCounter.reset();
    };
    HTML5Backend.prototype.handleDrop = function (e, targetId) {
        this.dropTargetIds.unshift(targetId);
    };
    HTML5Backend.prototype.handleTopDrop = function (e) {
        var dropTargetIds = this.dropTargetIds;
        this.dropTargetIds = [];
        this.actions.hover(dropTargetIds, {
            clientOffset: OffsetUtils_1.getEventClientOffset(e),
        });
        this.actions.drop({ dropEffect: this.getCurrentDropEffect() });
        if (this.isDraggingNativeItem()) {
            this.endDragNativeItem();
        }
        else {
            this.endDragIfSourceWasRemovedFromDOM();
        }
    };
    HTML5Backend.prototype.handleSelectStart = function (e) {
        var target = e.target;
        // Only IE requires us to explicitly say
        // we want drag drop operation to start
        if (typeof target.dragDrop !== 'function') {
            return;
        }
        // Inputs and textareas should be selectable
        if (target.tagName === 'INPUT' ||
            target.tagName === 'SELECT' ||
            target.tagName === 'TEXTAREA' ||
            target.isContentEditable) {
            return;
        }
        // For other targets, ask IE
        // to enable drag and drop
        e.preventDefault();
        target.dragDrop();
    };
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "getSourceClientOffset", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "endDragNativeItem", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "isNodeInDocument", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "endDragIfSourceWasRemovedFromDOM", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "handleTopDragStartCapture", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "handleTopDragStart", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "handleTopDragEndCapture", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "handleTopDragEnterCapture", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "handleTopDragEnter", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "handleTopDragOverCapture", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "handleTopDragOver", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "handleTopDragLeaveCapture", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "handleTopDropCapture", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "handleTopDrop", null);
    __decorate([
        autobind_decorator_1.default
    ], HTML5Backend.prototype, "handleSelectStart", null);
    return HTML5Backend;
}());
exports.default = HTML5Backend;


/***/ }),

/***/ 2420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var union = __webpack_require__(2421);
var without = __webpack_require__(2007);
var EnterLeaveCounter = /** @class */ (function () {
    function EnterLeaveCounter() {
        this.entered = [];
    }
    EnterLeaveCounter.prototype.enter = function (enteringNode) {
        var previousLength = this.entered.length;
        var isNodeEntered = function (node) {
            return document.documentElement.contains(node) &&
                (!node.contains || node.contains(enteringNode));
        };
        this.entered = union(this.entered.filter(isNodeEntered), [enteringNode]);
        return previousLength === 0 && this.entered.length > 0;
    };
    EnterLeaveCounter.prototype.leave = function (leavingNode) {
        var previousLength = this.entered.length;
        this.entered = without(this.entered.filter(function (node) { return document.documentElement.contains(node); }), leavingNode);
        return previousLength > 0 && this.entered.length === 0;
    };
    EnterLeaveCounter.prototype.reset = function () {
        this.entered = [];
    };
    return EnterLeaveCounter;
}());
exports.default = EnterLeaveCounter;


/***/ }),

/***/ 2421:
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(2010),
    baseRest = __webpack_require__(667),
    baseUniq = __webpack_require__(670),
    isArrayLikeObject = __webpack_require__(668);

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = baseRest(function(arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});

module.exports = union;


/***/ }),

/***/ 2422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BrowserDetector_1 = __webpack_require__(2014);
var MonotonicInterpolant_1 = __webpack_require__(2423);
var ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
    var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
    if (!el) {
        return null;
    }
    var _a = el.getBoundingClientRect(), top = _a.top, left = _a.left;
    return { x: left, y: top };
}
exports.getNodeClientOffset = getNodeClientOffset;
function getEventClientOffset(e) {
    return {
        x: e.clientX,
        y: e.clientY,
    };
}
exports.getEventClientOffset = getEventClientOffset;
function isImageNode(node) {
    return (node.nodeName === 'IMG' &&
        (BrowserDetector_1.isFirefox() || !document.documentElement.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
    var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
    var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
    // Work around @2x coordinate discrepancies in browsers
    if (BrowserDetector_1.isSafari() && isImage) {
        dragPreviewHeight /= window.devicePixelRatio;
        dragPreviewWidth /= window.devicePixelRatio;
    }
    return { dragPreviewWidth: dragPreviewWidth, dragPreviewHeight: dragPreviewHeight };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
    // The browsers will use the image intrinsic size under different conditions.
    // Firefox only cares if it's an image, but WebKit also wants it to be detached.
    var isImage = isImageNode(dragPreview);
    var dragPreviewNode = isImage ? sourceNode : dragPreview;
    var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
    var offsetFromDragPreview = {
        x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
        y: clientOffset.y - dragPreviewNodeOffsetFromClient.y,
    };
    var sourceWidth = sourceNode.offsetWidth, sourceHeight = sourceNode.offsetHeight;
    var anchorX = anchorPoint.anchorX, anchorY = anchorPoint.anchorY;
    var _a = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight), dragPreviewWidth = _a.dragPreviewWidth, dragPreviewHeight = _a.dragPreviewHeight;
    var calculateYOffset = function () {
        var interpolantY = new MonotonicInterpolant_1.default([0, 0.5, 1], [
            // Dock to the top
            offsetFromDragPreview.y,
            // Align at the center
            offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
            // Dock to the bottom
            offsetFromDragPreview.y + dragPreviewHeight - sourceHeight,
        ]);
        var y = interpolantY.interpolate(anchorY);
        // Work around Safari 8 positioning bug
        if (BrowserDetector_1.isSafari() && isImage) {
            // We'll have to wait for @3x to see if this is entirely correct
            y += (window.devicePixelRatio - 1) * dragPreviewHeight;
        }
        return y;
    };
    var calculateXOffset = function () {
        // Interpolate coordinates depending on anchor point
        // If you know a simpler way to do this, let me know
        var interpolantX = new MonotonicInterpolant_1.default([0, 0.5, 1], [
            // Dock to the left
            offsetFromDragPreview.x,
            // Align at the center
            offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
            // Dock to the right
            offsetFromDragPreview.x + dragPreviewWidth - sourceWidth,
        ]);
        return interpolantX.interpolate(anchorX);
    };
    // Force offsets if specified in the options.
    var offsetX = offsetPoint.offsetX, offsetY = offsetPoint.offsetY;
    var isManualOffsetX = offsetX === 0 || offsetX;
    var isManualOffsetY = offsetY === 0 || offsetY;
    return {
        x: isManualOffsetX ? offsetX : calculateXOffset(),
        y: isManualOffsetY ? offsetY : calculateYOffset(),
    };
}
exports.getDragPreviewOffset = getDragPreviewOffset;


/***/ }),

/***/ 2423:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MonotonicInterpolant = /** @class */ (function () {
    function MonotonicInterpolant(xs, ys) {
        var length = xs.length;
        // Rearrange xs and ys so that xs is sorted
        var indexes = [];
        for (var i = 0; i < length; i++) {
            indexes.push(i);
        }
        indexes.sort(function (a, b) { return (xs[a] < xs[b] ? -1 : 1); });
        // Get consecutive differences and slopes
        var dys = [];
        var dxs = [];
        var ms = [];
        var dx;
        var dy;
        for (var i = 0; i < length - 1; i++) {
            dx = xs[i + 1] - xs[i];
            dy = ys[i + 1] - ys[i];
            dxs.push(dx);
            dys.push(dy);
            ms.push(dy / dx);
        }
        // Get degree-1 coefficients
        var c1s = [ms[0]];
        for (var i = 0; i < dxs.length - 1; i++) {
            var m2 = ms[i];
            var mNext = ms[i + 1];
            if (m2 * mNext <= 0) {
                c1s.push(0);
            }
            else {
                dx = dxs[i];
                var dxNext = dxs[i + 1];
                var common = dx + dxNext;
                c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
            }
        }
        c1s.push(ms[ms.length - 1]);
        // Get degree-2 and degree-3 coefficients
        var c2s = [];
        var c3s = [];
        var m;
        for (var i = 0; i < c1s.length - 1; i++) {
            m = ms[i];
            var c1 = c1s[i];
            var invDx = 1 / dxs[i];
            var common = c1 + c1s[i + 1] - m - m;
            c2s.push((m - c1 - common) * invDx);
            c3s.push(common * invDx * invDx);
        }
        this.xs = xs;
        this.ys = ys;
        this.c1s = c1s;
        this.c2s = c2s;
        this.c3s = c3s;
    }
    MonotonicInterpolant.prototype.interpolate = function (x) {
        var _a = this, xs = _a.xs, ys = _a.ys, c1s = _a.c1s, c2s = _a.c2s, c3s = _a.c3s;
        // The rightmost point in the dataset should give an exact result
        var i = xs.length - 1;
        if (x === xs[i]) {
            return ys[i];
        }
        // Search for the interval x is in, returning the corresponding y if x is one of the original xs
        var low = 0;
        var high = c3s.length - 1;
        var mid;
        while (low <= high) {
            mid = Math.floor(0.5 * (low + high));
            var xHere = xs[mid];
            if (xHere < x) {
                low = mid + 1;
            }
            else if (xHere > x) {
                high = mid - 1;
            }
            else {
                return ys[mid];
            }
        }
        i = Math.max(0, high);
        // Interpolate
        var diff = x - xs[i];
        var diffSq = diff * diff;
        return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
    };
    return MonotonicInterpolant;
}());
exports.default = MonotonicInterpolant;


/***/ }),

/***/ 2424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var NativeTypes = __webpack_require__(1992);
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
    var result = typesToTry.reduce(function (resultSoFar, typeToTry) { return resultSoFar || dataTransfer.getData(typeToTry); }, null);
    return result != null ? result : defaultValue;
}
var nativeTypesConfig = (_a = {},
    _a[NativeTypes.FILE] = {
        exposeProperty: 'files',
        matchesTypes: ['Files'],
        getData: function (dataTransfer) {
            return Array.prototype.slice.call(dataTransfer.files);
        },
    },
    _a[NativeTypes.URL] = {
        exposeProperty: 'urls',
        matchesTypes: ['Url', 'text/uri-list'],
        getData: function (dataTransfer, matchesTypes) {
            return getDataFromDataTransfer(dataTransfer, matchesTypes, '').split('\n');
        },
    },
    _a[NativeTypes.TEXT] = {
        exposeProperty: 'text',
        matchesTypes: ['Text', 'text/plain'],
        getData: function (dataTransfer, matchesTypes) {
            return getDataFromDataTransfer(dataTransfer, matchesTypes, '');
        },
    },
    _a);
function createNativeDragSource(type) {
    var _a = nativeTypesConfig[type], exposeProperty = _a.exposeProperty, matchesTypes = _a.matchesTypes, getData = _a.getData;
    return /** @class */ (function () {
        function NativeDragSource() {
            var _a;
            this.item = (_a = {},
                Object.defineProperty(_a, exposeProperty, {
                    get: function () {
                        // tslint:disable-next-line no-console
                        console.warn("Browser doesn't allow reading \"" + exposeProperty + "\" until the drop event.");
                        return null;
                    },
                    enumerable: true,
                    configurable: true
                }),
                _a);
        }
        NativeDragSource.prototype.mutateItemByReadingDataTransfer = function (dataTransfer) {
            delete this.item[exposeProperty];
            this.item[exposeProperty] = getData(dataTransfer, matchesTypes);
        };
        NativeDragSource.prototype.canDrag = function () {
            return true;
        };
        NativeDragSource.prototype.beginDrag = function () {
            return this.item;
        };
        NativeDragSource.prototype.isDragging = function (monitor, handle) {
            return handle === monitor.getSourceId();
        };
        NativeDragSource.prototype.endDrag = function () {
            // empty
        };
        return NativeDragSource;
    }());
}
exports.createNativeDragSource = createNativeDragSource;
function matchNativeItemType(dataTransfer) {
    var dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
    return (Object.keys(nativeTypesConfig).filter(function (nativeItemType) {
        var matchesTypes = nativeTypesConfig[nativeItemType].matchesTypes;
        return matchesTypes.some(function (t) { return dataTransferTypes.indexOf(t) > -1; });
    })[0] || null);
}
exports.matchNativeItemType = matchNativeItemType;


/***/ }),

/***/ 2425:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = autobind;
/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 *
 * The decorator may be used on classes or methods
 * ```
 * @autobind
 * class FullBound {}
 *
 * class PartBound {
 *   @autobind
 *   method () {}
 * }
 * ```
 */
function autobind() {
  if (arguments.length === 1) {
    return boundClass.apply(undefined, arguments);
  } else {
    return boundMethod.apply(undefined, arguments);
  }
}

/**
 * Use boundMethod to bind all methods on the target.prototype
 */
function boundClass(target) {
  // (Using reflect to get all keys including symbols)
  var keys = void 0;
  // Use Reflect if exists
  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
    keys = Reflect.ownKeys(target.prototype);
  } else {
    keys = Object.getOwnPropertyNames(target.prototype);
    // use symbols if support is provided
    if (typeof Object.getOwnPropertySymbols === 'function') {
      keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
    }
  }

  keys.forEach(function (key) {
    // Ignore special case target method
    if (key === 'constructor') {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

    // Only methods need binding
    if (typeof descriptor.value === 'function') {
      Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
    }
  });
  return target;
}

/**
 * Return a descriptor removing the value and returning a getter
 * The getter will return a .bind version of the function
 * and memoize the result against a symbol on the instance
 */
function boundMethod(target, key, descriptor) {
  var fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new Error('@autobind decorator can only be applied to methods not: ' + (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)));
  }

  // In IE11 calling Object.defineProperty has a side-effect of evaluating the
  // getter for the property which is being replaced. This causes infinite
  // recursion and an "Out of stack space" error.
  var definingProperty = false;

  return {
    configurable: true,
    get: function get() {
      if (definingProperty || this === target.prototype || this.hasOwnProperty(key) || typeof fn !== 'function') {
        return fn;
      }

      var boundFn = fn.bind(this);
      definingProperty = true;
      Object.defineProperty(this, key, {
        configurable: true,
        get: function get() {
          return boundFn;
        },
        set: function set(value) {
          fn = value;
          delete this[key];
        }
      });
      definingProperty = false;
      return boundFn;
    },
    set: function set(value) {
      fn = value;
    }
  };
}


/***/ }),

/***/ 2426:
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(667),
    eq = __webpack_require__(152),
    isIterateeCall = __webpack_require__(685),
    keysIn = __webpack_require__(183);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;


/***/ }),

/***/ 2427:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var emptyImage;
function getEmptyImage() {
    if (!emptyImage) {
        emptyImage = new Image();
        emptyImage.src =
            'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
    }
    return emptyImage;
}
exports.default = getEmptyImage;


/***/ }),

/***/ 2428:
/***/ (function(module, exports, __webpack_require__) {

var invariant = __webpack_require__(125);

var hasOwnProperty = Object.prototype.hasOwnProperty;
var splice = Array.prototype.splice;

var toString = Object.prototype.toString
var type = function(obj) {
  return toString.call(obj).slice(8, -1);
}

var assign = Object.assign || /* istanbul ignore next */ function assign(target, source) {
  getAllKeys(source).forEach(function(key) {
    if (hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  });
  return target;
};

var getAllKeys = typeof Object.getOwnPropertySymbols === 'function' ?
  function(obj) { return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj)) } :
  /* istanbul ignore next */ function(obj) { return Object.keys(obj) };

/* istanbul ignore next */
function copy(object) {
  if (Array.isArray(object)) {
    return assign(object.constructor(object.length), object)
  } else if (type(object) === 'Map') {
    return new Map(object)
  } else if (type(object) === 'Set') {
    return new Set(object)
  } else if (object && typeof object === 'object') {
    var prototype = Object.getPrototypeOf(object);
    return assign(Object.create(prototype), object);
  } else {
    return object;
  }
}

function newContext() {
  var commands = assign({}, defaultCommands);
  update.extend = function(directive, fn) {
    commands[directive] = fn;
  };
  update.isEquals = function(a, b) { return a === b; };

  return update;

  function update(object, spec) {
    if (typeof spec === 'function') {
      spec = { $apply: spec };
    }

    if (!(Array.isArray(object) && Array.isArray(spec))) {
      invariant(
        !Array.isArray(spec),
        'update(): You provided an invalid spec to update(). The spec may ' +
        'not contain an array except as the value of $set, $push, $unshift, ' +
        '$splice or any custom command allowing an array value.'
      );
    }

    invariant(
      typeof spec === 'object' && spec !== null,
      'update(): You provided an invalid spec to update(). The spec and ' +
      'every included key path must be plain objects containing one of the ' +
      'following commands: %s.',
      Object.keys(commands).join(', ')
    );

    var nextObject = object;
    var index, key;
    getAllKeys(spec).forEach(function(key) {
      if (hasOwnProperty.call(commands, key)) {
        var objectWasNextObject = object === nextObject;
        nextObject = commands[key](spec[key], nextObject, spec, object);
        if (objectWasNextObject && update.isEquals(nextObject, object)) {
          nextObject = object;
        }
      } else {
        var nextValueForKey =
          type(object) === 'Map'
            ? update(object.get(key), spec[key])
            : update(object[key], spec[key]);
        var nextObjectValue =
          type(nextObject) === 'Map'
              ? nextObject.get(key)
              : nextObject[key];
        if (!update.isEquals(nextValueForKey, nextObjectValue) || typeof nextValueForKey === 'undefined' && !hasOwnProperty.call(object, key)) {
          if (nextObject === object) {
            nextObject = copy(object);
          }
          if (type(nextObject) === 'Map') {
            nextObject.set(key, nextValueForKey);
          } else {
            nextObject[key] = nextValueForKey;
          }
        }
      }
    })
    return nextObject;
  }

}

var defaultCommands = {
  $push: function(value, nextObject, spec) {
    invariantPushAndUnshift(nextObject, spec, '$push');
    return value.length ? nextObject.concat(value) : nextObject;
  },
  $unshift: function(value, nextObject, spec) {
    invariantPushAndUnshift(nextObject, spec, '$unshift');
    return value.length ? value.concat(nextObject) : nextObject;
  },
  $splice: function(value, nextObject, spec, originalObject) {
    invariantSplices(nextObject, spec);
    value.forEach(function(args) {
      invariantSplice(args);
      if (nextObject === originalObject && args.length) nextObject = copy(originalObject);
      splice.apply(nextObject, args);
    });
    return nextObject;
  },
  $set: function(value, nextObject, spec) {
    invariantSet(spec);
    return value;
  },
  $toggle: function(targets, nextObject) {
    invariantSpecArray(targets, '$toggle');
    var nextObjectCopy = targets.length ? copy(nextObject) : nextObject;

    targets.forEach(function(target) {
      nextObjectCopy[target] = !nextObject[target];
    });

    return nextObjectCopy;
  },
  $unset: function(value, nextObject, spec, originalObject) {
    invariantSpecArray(value, '$unset');
    value.forEach(function(key) {
      if (Object.hasOwnProperty.call(nextObject, key)) {
        if (nextObject === originalObject) nextObject = copy(originalObject);
        delete nextObject[key];
      }
    });
    return nextObject;
  },
  $add: function(value, nextObject, spec, originalObject) {
    invariantMapOrSet(nextObject, '$add');
    invariantSpecArray(value, '$add');
    if (type(nextObject) === 'Map') {
      value.forEach(function(pair) {
        var key = pair[0];
        var value = pair[1];
        if (nextObject === originalObject && nextObject.get(key) !== value) nextObject = copy(originalObject);
        nextObject.set(key, value);
      });
    } else {
      value.forEach(function(value) {
        if (nextObject === originalObject && !nextObject.has(value)) nextObject = copy(originalObject);
        nextObject.add(value);
      });
    }
    return nextObject;
  },
  $remove: function(value, nextObject, spec, originalObject) {
    invariantMapOrSet(nextObject, '$remove');
    invariantSpecArray(value, '$remove');
    value.forEach(function(key) {
      if (nextObject === originalObject && nextObject.has(key)) nextObject = copy(originalObject);
      nextObject.delete(key);
    });
    return nextObject;
  },
  $merge: function(value, nextObject, spec, originalObject) {
    invariantMerge(nextObject, value);
    getAllKeys(value).forEach(function(key) {
      if (value[key] !== nextObject[key]) {
        if (nextObject === originalObject) nextObject = copy(originalObject);
        nextObject[key] = value[key];
      }
    });
    return nextObject;
  },
  $apply: function(value, original) {
    invariantApply(value);
    return value(original);
  }
};

var contextForExport = newContext();

module.exports = contextForExport;
module.exports.default = contextForExport;
module.exports.newContext = newContext;

// invariants

function invariantPushAndUnshift(value, spec, command) {
  invariant(
    Array.isArray(value),
    'update(): expected target of %s to be an array; got %s.',
    command,
    value
  );
  invariantSpecArray(spec[command], command)
}

function invariantSpecArray(spec, command) {
  invariant(
    Array.isArray(spec),
    'update(): expected spec of %s to be an array; got %s. ' +
    'Did you forget to wrap your parameter in an array?',
    command,
    spec
  );
}

function invariantSplices(value, spec) {
  invariant(
    Array.isArray(value),
    'Expected $splice target to be an array; got %s',
    value
  );
  invariantSplice(spec['$splice']);
}

function invariantSplice(value) {
  invariant(
    Array.isArray(value),
    'update(): expected spec of $splice to be an array of arrays; got %s. ' +
    'Did you forget to wrap your parameters in an array?',
    value
  );
}

function invariantApply(fn) {
  invariant(
    typeof fn === 'function',
    'update(): expected spec of $apply to be a function; got %s.',
    fn
  );
}

function invariantSet(spec) {
  invariant(
    Object.keys(spec).length === 1,
    'Cannot have more than one key in an object with $set'
  );
}

function invariantMerge(target, specValue) {
  invariant(
    specValue && typeof specValue === 'object',
    'update(): $merge expects a spec of type \'object\'; got %s',
    specValue
  );
  invariant(
    target && typeof target === 'object',
    'update(): $merge expects a target of type \'object\'; got %s',
    target
  );
}

function invariantMapOrSet(target, command) {
  var typeOfTarget = type(target);
  invariant(
    typeOfTarget === 'Map' || typeOfTarget === 'Set',
    'update(): %s expects a target of type Set or Map; got %s',
    command,
    typeOfTarget
  );
}


/***/ }),

/***/ 2429:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "选择不同配置组合查看效果。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Select different settings to see the result."
      ]
    ]
  },
  "meta": {
    "order": 27,
    "title": {
      "en-US": "Dynamic Settings",
      "zh-CN": "动态控制表格属性"
    },
    "filename": "components/table/demo/dynamic-settings.md",
    "id": "components-table-demo-dynamic-settings"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Switch<span class=\"token punctuation\">,</span> Radio<span class=\"token punctuation\">,</span> Form<span class=\"token punctuation\">,</span> Divider <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> text <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token number\">70</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Action'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'action'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token number\">360</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Action 一 <span class=\"token punctuation\">{</span>record<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Divider</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>vertical<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Delete<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Divider</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>vertical<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-dropdown-link<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        More actions <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>down<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;=</span> <span class=\"token number\">10</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  data<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">2`</span></span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`New York No. </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> Lake Park`</span></span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`My name is John Brown, I am </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">2 years old, living in New York No. </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> Lake Park.`</span></span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> expandedRowRender <span class=\"token operator\">=</span> record <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>record<span class=\"token punctuation\">.</span>description<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> title <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token string\">'Here is title'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> showHeader <span class=\"token operator\">=</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> footer <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token string\">'Here is footer'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> scroll <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> y<span class=\"token punctuation\">:</span> <span class=\"token number\">240</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> pagination <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> position<span class=\"token punctuation\">:</span> <span class=\"token string\">'bottom'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    bordered<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    pagination<span class=\"token punctuation\">,</span>\n    size<span class=\"token punctuation\">:</span> <span class=\"token string\">'default'</span><span class=\"token punctuation\">,</span>\n    expandedRowRender<span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span> undefined<span class=\"token punctuation\">,</span>\n    showHeader<span class=\"token punctuation\">,</span>\n    footer<span class=\"token punctuation\">,</span>\n    rowSelection<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    scroll<span class=\"token punctuation\">:</span> undefined<span class=\"token punctuation\">,</span>\n    hasData<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleToggle <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>prop<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>enable<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> <span class=\"token punctuation\">[</span>prop<span class=\"token punctuation\">]</span><span class=\"token punctuation\">:</span> enable <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleSizeChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> size<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleExpandChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>enable<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> expandedRowRender<span class=\"token punctuation\">:</span> enable <span class=\"token operator\">?</span> expandedRowRender <span class=\"token punctuation\">:</span> undefined <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleTitleChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>enable<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> enable <span class=\"token operator\">?</span> title <span class=\"token punctuation\">:</span> undefined <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleHeaderChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>enable<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> showHeader<span class=\"token punctuation\">:</span> enable <span class=\"token operator\">?</span> showHeader <span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleFooterChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>enable<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> footer<span class=\"token punctuation\">:</span> enable <span class=\"token operator\">?</span> footer <span class=\"token punctuation\">:</span> undefined <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleRowSelectionChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>enable<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> rowSelection<span class=\"token punctuation\">:</span> enable <span class=\"token operator\">?</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span> <span class=\"token punctuation\">:</span> undefined <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleScollChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>enable<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> scroll<span class=\"token punctuation\">:</span> enable <span class=\"token operator\">?</span> scroll <span class=\"token punctuation\">:</span> undefined <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleDataChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>hasData<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> hasData <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handlePaginationChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      pagination<span class=\"token punctuation\">:</span> value <span class=\"token operator\">===</span> <span class=\"token string\">'none'</span> <span class=\"token operator\">?</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> position<span class=\"token punctuation\">:</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> state <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>components-table-demo-control-bar<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">layout</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>inline<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Bordered<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>state<span class=\"token punctuation\">.</span>bordered<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleToggle</span><span class=\"token punctuation\">(</span><span class=\"token string\">'bordered'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>loading<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>state<span class=\"token punctuation\">.</span>loading<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleToggle</span><span class=\"token punctuation\">(</span><span class=\"token string\">'loading'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Title<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">!</span><span class=\"token operator\">!</span>state<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleTitleChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Column</span> <span class=\"token attr-name\">Header\"</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">!</span><span class=\"token operator\">!</span>state<span class=\"token punctuation\">.</span>showHeader<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleHeaderChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Footer<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">!</span><span class=\"token operator\">!</span>state<span class=\"token punctuation\">.</span>footer<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleFooterChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Expandable<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">!</span><span class=\"token operator\">!</span>state<span class=\"token punctuation\">.</span>expandedRowRender<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleExpandChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Checkbox<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">!</span><span class=\"token operator\">!</span>state<span class=\"token punctuation\">.</span>rowSelection<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleRowSelectionChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Fixed</span> <span class=\"token attr-name\">Header\"</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">!</span><span class=\"token operator\">!</span>state<span class=\"token punctuation\">.</span>scroll<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleScollChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Has</span> <span class=\"token attr-name\">Data\"</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">!</span><span class=\"token operator\">!</span>state<span class=\"token punctuation\">.</span>hasData<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleDataChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Size<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Group</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>default<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>state<span class=\"token punctuation\">.</span>size<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSizeChange<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>default<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Default<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>middle<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Middle<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Small<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Group</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Pagination<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Group</span>\n                <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>state<span class=\"token punctuation\">.</span>pagination <span class=\"token operator\">?</span> state<span class=\"token punctuation\">.</span>pagination<span class=\"token punctuation\">.</span>position <span class=\"token punctuation\">:</span> <span class=\"token string\">'none'</span><span class=\"token punctuation\">}</span></span>\n                <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handlePaginationChange<span class=\"token punctuation\">}</span></span>\n              <span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>top<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Top<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Bottom<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>both<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Both<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>none<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>None<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Group</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>Table <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">}</span> columns<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span> dataSource<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>state<span class=\"token punctuation\">.</span>hasData <span class=\"token operator\">?</span> data <span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var FormItem = _antd.Form.Item;
  var columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    render: function render(text) {
      return React.createElement(
        "a",
        {
          href: "javascript:;"
        },
        text
      );
    }
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 70
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }, {
    title: 'Action',
    key: 'action',
    width: 360,
    render: function render(text, record) {
      return React.createElement(
        "span",
        null,
        React.createElement(
          "a",
          {
            href: "javascript:;"
          },
          "Action 一 ",
          record.name
        ),
        React.createElement(_antd.Divider, {
          type: "vertical"
        }),
        React.createElement(
          "a",
          {
            href: "javascript:;"
          },
          "Delete"
        ),
        React.createElement(_antd.Divider, {
          type: "vertical"
        }),
        React.createElement(
          "a",
          {
            href: "javascript:;",
            className: "ant-dropdown-link"
          },
          "More actions ",
          React.createElement(_antd.Icon, {
            type: "down"
          })
        )
      );
    }
  }];
  var data = [];

  for (var i = 1; i <= 10; i++) {
    data.push({
      key: i,
      name: 'John Brown',
      age: i + "2",
      address: "New York No. " + i + " Lake Park",
      description: "My name is John Brown, I am " + i + "2 years old, living in New York No. " + i + " Lake Park."
    });
  }

  var expandedRowRender = function expandedRowRender(record) {
    return React.createElement(
      "p",
      null,
      record.description
    );
  };

  var title = function title() {
    return 'Here is title';
  };

  var showHeader = true;

  var footer = function footer() {
    return 'Here is footer';
  };

  var scroll = {
    y: 240
  };
  var pagination = {
    position: 'bottom'
  };

  var Demo = function (_React$Component) {
    _inherits(Demo, _React$Component);

    function Demo() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Demo);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        bordered: false,
        loading: false,
        pagination: pagination,
        size: 'default',
        expandedRowRender: expandedRowRender,
        title: undefined,
        showHeader: showHeader,
        footer: footer,
        rowSelection: {},
        scroll: undefined,
        hasData: true
      }, _this.handleToggle = function (prop) {
        return function (enable) {
          _this.setState(_defineProperty({}, prop, enable));
        };
      }, _this.handleSizeChange = function (e) {
        _this.setState({
          size: e.target.value
        });
      }, _this.handleExpandChange = function (enable) {
        _this.setState({
          expandedRowRender: enable ? expandedRowRender : undefined
        });
      }, _this.handleTitleChange = function (enable) {
        _this.setState({
          title: enable ? title : undefined
        });
      }, _this.handleHeaderChange = function (enable) {
        _this.setState({
          showHeader: enable ? showHeader : false
        });
      }, _this.handleFooterChange = function (enable) {
        _this.setState({
          footer: enable ? footer : undefined
        });
      }, _this.handleRowSelectionChange = function (enable) {
        _this.setState({
          rowSelection: enable ? {} : undefined
        });
      }, _this.handleScollChange = function (enable) {
        _this.setState({
          scroll: enable ? scroll : undefined
        });
      }, _this.handleDataChange = function (hasData) {
        _this.setState({
          hasData: hasData
        });
      }, _this.handlePaginationChange = function (e) {
        var value = e.target.value;

        _this.setState({
          pagination: value === 'none' ? false : {
            position: value
          }
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
        var state = this.state;
        return React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            {
              className: "components-table-demo-control-bar"
            },
            React.createElement(
              _antd.Form,
              {
                layout: "inline"
              },
              React.createElement(
                FormItem,
                {
                  label: "Bordered"
                },
                React.createElement(_antd.Switch, {
                  checked: state.bordered,
                  onChange: this.handleToggle('bordered')
                })
              ),
              React.createElement(
                FormItem,
                {
                  label: "loading"
                },
                React.createElement(_antd.Switch, {
                  checked: state.loading,
                  onChange: this.handleToggle('loading')
                })
              ),
              React.createElement(
                FormItem,
                {
                  label: "Title"
                },
                React.createElement(_antd.Switch, {
                  checked: !!state.title,
                  onChange: this.handleTitleChange
                })
              ),
              React.createElement(
                FormItem,
                {
                  label: "Column Header"
                },
                React.createElement(_antd.Switch, {
                  checked: !!state.showHeader,
                  onChange: this.handleHeaderChange
                })
              ),
              React.createElement(
                FormItem,
                {
                  label: "Footer"
                },
                React.createElement(_antd.Switch, {
                  checked: !!state.footer,
                  onChange: this.handleFooterChange
                })
              ),
              React.createElement(
                FormItem,
                {
                  label: "Expandable"
                },
                React.createElement(_antd.Switch, {
                  checked: !!state.expandedRowRender,
                  onChange: this.handleExpandChange
                })
              ),
              React.createElement(
                FormItem,
                {
                  label: "Checkbox"
                },
                React.createElement(_antd.Switch, {
                  checked: !!state.rowSelection,
                  onChange: this.handleRowSelectionChange
                })
              ),
              React.createElement(
                FormItem,
                {
                  label: "Fixed Header"
                },
                React.createElement(_antd.Switch, {
                  checked: !!state.scroll,
                  onChange: this.handleScollChange
                })
              ),
              React.createElement(
                FormItem,
                {
                  label: "Has Data"
                },
                React.createElement(_antd.Switch, {
                  checked: !!state.hasData,
                  onChange: this.handleDataChange
                })
              ),
              React.createElement(
                FormItem,
                {
                  label: "Size"
                },
                React.createElement(
                  _antd.Radio.Group,
                  {
                    size: "default",
                    value: state.size,
                    onChange: this.handleSizeChange
                  },
                  React.createElement(
                    _antd.Radio.Button,
                    {
                      value: "default"
                    },
                    "Default"
                  ),
                  React.createElement(
                    _antd.Radio.Button,
                    {
                      value: "middle"
                    },
                    "Middle"
                  ),
                  React.createElement(
                    _antd.Radio.Button,
                    {
                      value: "small"
                    },
                    "Small"
                  )
                )
              ),
              React.createElement(
                FormItem,
                {
                  label: "Pagination"
                },
                React.createElement(
                  _antd.Radio.Group,
                  {
                    value: state.pagination ? state.pagination.position : 'none',
                    onChange: this.handlePaginationChange
                  },
                  React.createElement(
                    _antd.Radio.Button,
                    {
                      value: "top"
                    },
                    "Top"
                  ),
                  React.createElement(
                    _antd.Radio.Button,
                    {
                      value: "bottom"
                    },
                    "Bottom"
                  ),
                  React.createElement(
                    _antd.Radio.Button,
                    {
                      value: "both"
                    },
                    "Both"
                  ),
                  React.createElement(
                    _antd.Radio.Button,
                    {
                      value: "none"
                    },
                    "None"
                  )
                )
              )
            )
          ),
          React.createElement(_antd.Table, _extends({}, this.state, {
            columns: columns,
            dataSource: state.hasData ? data : null
          }))
        );
      }
    }]);

    return Demo;
  }(React.Component);

  return React.createElement(Demo, null);
},
  "style": "\n.components-table-demo-control-bar {\n  margin-bottom: 10px;\n}\n.components-table-demo-control-bar .ant-form-item {\n  margin-right: 16px;\n  margin-bottom: 8px;\n}\n"
};

/***/ }),

/***/ 2430:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "带单元格编辑功能的表格。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Table with editable cells."
      ]
    ]
  },
  "meta": {
    "order": 22,
    "title": {
      "en-US": "Editable Cells",
      "zh-CN": "可编辑单元格"
    },
    "filename": "components/table/demo/edit-cell.md",
    "id": "components-table-demo-edit-cell"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Popconfirm<span class=\"token punctuation\">,</span> Form <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> EditableContext <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createContext</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> EditableRow <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> form<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">,</span> <span class=\"token operator\">...</span>props <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EditableContext.Provider</span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>form<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token operator\">&lt;</span>tr <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>EditableContext.Provider</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> EditableFormRow <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>EditableRow<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">EditableCell</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    editing<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>editable<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      document<span class=\"token punctuation\">.</span><span class=\"token function\">addEventListener</span><span class=\"token punctuation\">(</span><span class=\"token string\">'click'</span><span class=\"token punctuation\">,</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleClickOutside<span class=\"token punctuation\">,</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">componentWillUnmount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>editable<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      document<span class=\"token punctuation\">.</span><span class=\"token function\">removeEventListener</span><span class=\"token punctuation\">(</span><span class=\"token string\">'click'</span><span class=\"token punctuation\">,</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleClickOutside<span class=\"token punctuation\">,</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n\n  toggleEdit <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> editing <span class=\"token operator\">=</span> <span class=\"token operator\">!</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>editing<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> editing <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>editing<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>input<span class=\"token punctuation\">.</span><span class=\"token function\">focus</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleClickOutside <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> editing <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>editing <span class=\"token operator\">&amp;&amp;</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>cell <span class=\"token operator\">!==</span> e<span class=\"token punctuation\">.</span>target <span class=\"token operator\">&amp;&amp;</span> <span class=\"token operator\">!</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>cell<span class=\"token punctuation\">.</span><span class=\"token function\">contains</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">save</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n\n  save <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> record<span class=\"token punctuation\">,</span> handleSave <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>error<span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>error<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">toggleEdit</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token function\">handleSave</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> <span class=\"token operator\">...</span>record<span class=\"token punctuation\">,</span> <span class=\"token operator\">...</span>values <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> editing <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>\n      editable<span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">,</span>\n      title<span class=\"token punctuation\">,</span>\n      record<span class=\"token punctuation\">,</span>\n      index<span class=\"token punctuation\">,</span>\n      handleSave<span class=\"token punctuation\">,</span>\n      <span class=\"token operator\">...</span>restProps\n    <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>td</span> <span class=\"token attr-name\">ref</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>node <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>cell <span class=\"token operator\">=</span> node<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">{...restProps}</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>editable <span class=\"token operator\">?</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EditableContext.Consumer</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>form<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n              <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>form <span class=\"token operator\">=</span> form<span class=\"token punctuation\">;</span>\n              <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n                editing <span class=\"token operator\">?</span> <span class=\"token punctuation\">(</span>\n                  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n                    <span class=\"token punctuation\">{</span>form<span class=\"token punctuation\">.</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span>dataIndex<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n                      rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n                        required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n                        message<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>title<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> is required.`</span></span><span class=\"token punctuation\">,</span>\n                      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n                      initialValue<span class=\"token punctuation\">:</span> record<span class=\"token punctuation\">[</span>dataIndex<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n                    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\n                      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span>\n                        <span class=\"token attr-name\">ref</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>node <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>input <span class=\"token operator\">=</span> node<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n                        <span class=\"token attr-name\">onPressEnter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>save<span class=\"token punctuation\">}</span></span>\n                      <span class=\"token punctuation\">/></span></span>\n                    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n                  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>\n                  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span>\n                    <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>editable-cell-value-wrap<span class=\"token punctuation\">\"</span></span>\n                    <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> paddingRight<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n                    <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>toggleEdit<span class=\"token punctuation\">}</span></span>\n                  <span class=\"token punctuation\">></span></span>\n                    <span class=\"token punctuation\">{</span>restProps<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">}</span>\n                  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token punctuation\">)</span>\n              <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>EditableContext.Consumer</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> restProps<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>td</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">EditableTable</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n      width<span class=\"token punctuation\">:</span> <span class=\"token string\">'30%'</span><span class=\"token punctuation\">,</span>\n      editable<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'operation'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'operation'</span><span class=\"token punctuation\">,</span>\n      render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>dataSource<span class=\"token punctuation\">.</span>length <span class=\"token operator\">>=</span> <span class=\"token number\">1</span>\n            <span class=\"token operator\">?</span> <span class=\"token punctuation\">(</span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popconfirm</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Sure</span> <span class=\"token attr-name\">to</span> <span class=\"token attr-name\">delete?\"</span> <span class=\"token attr-name\">onConfirm</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleDelete</span><span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Delete<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popconfirm</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      dataSource<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Edward King 0'</span><span class=\"token punctuation\">,</span>\n        age<span class=\"token punctuation\">:</span> <span class=\"token string\">'32'</span><span class=\"token punctuation\">,</span>\n        address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London, Park Lane no. 0'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Edward King 1'</span><span class=\"token punctuation\">,</span>\n        age<span class=\"token punctuation\">:</span> <span class=\"token string\">'32'</span><span class=\"token punctuation\">,</span>\n        address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London, Park Lane no. 1'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      count<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleDelete <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> dataSource <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>dataSource<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> dataSource<span class=\"token punctuation\">:</span> dataSource<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span>key <span class=\"token operator\">!==</span> key<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleAdd <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> count<span class=\"token punctuation\">,</span> dataSource <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> newData <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      key<span class=\"token punctuation\">:</span> count<span class=\"token punctuation\">,</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`Edward King </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>count<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n      age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n      address<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`London, Park Lane no. </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>count<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      dataSource<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>dataSource<span class=\"token punctuation\">,</span> newData<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      count<span class=\"token punctuation\">:</span> count <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleSave <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>row<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> newData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>dataSource<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> index <span class=\"token operator\">=</span> newData<span class=\"token punctuation\">.</span><span class=\"token function\">findIndex</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> row<span class=\"token punctuation\">.</span>key <span class=\"token operator\">===</span> item<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> item <span class=\"token operator\">=</span> newData<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    newData<span class=\"token punctuation\">.</span><span class=\"token function\">splice</span><span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token operator\">...</span>item<span class=\"token punctuation\">,</span>\n      <span class=\"token operator\">...</span>row<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> dataSource<span class=\"token punctuation\">:</span> newData <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> dataSource <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> components <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      body<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        row<span class=\"token punctuation\">:</span> EditableFormRow<span class=\"token punctuation\">,</span>\n        cell<span class=\"token punctuation\">:</span> EditableCell<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>columns<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>col<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>col<span class=\"token punctuation\">.</span>editable<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> col<span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token operator\">...</span>col<span class=\"token punctuation\">,</span>\n        onCell<span class=\"token punctuation\">:</span> record <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n          record<span class=\"token punctuation\">,</span>\n          editable<span class=\"token punctuation\">:</span> col<span class=\"token punctuation\">.</span>editable<span class=\"token punctuation\">,</span>\n          dataIndex<span class=\"token punctuation\">:</span> col<span class=\"token punctuation\">.</span>dataIndex<span class=\"token punctuation\">,</span>\n          title<span class=\"token punctuation\">:</span> col<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">,</span>\n          handleSave<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSave<span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleAdd<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          Add a row\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span>\n          <span class=\"token attr-name\">components</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>components<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">rowClassName</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token string\">'editable-row'</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">bordered</span>\n          <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>dataSource<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EditableTable</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  var FormItem = _antd.Form.Item;
  var EditableContext = React.createContext();

  var EditableRow = function EditableRow(_ref) {
    var form = _ref.form,
        index = _ref.index,
        props = _objectWithoutProperties(_ref, ["form", "index"]);

    return React.createElement(
      EditableContext.Provider,
      {
        value: form
      },
      React.createElement("tr", props)
    );
  };

  var EditableFormRow = _antd.Form.create()(EditableRow);

  var EditableCell = function (_React$Component) {
    _inherits(EditableCell, _React$Component);

    function EditableCell() {
      var _ref2;

      var _temp, _this, _ret;

      _classCallCheck(this, EditableCell);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = EditableCell.__proto__ || Object.getPrototypeOf(EditableCell)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
        editing: false
      }, _this.toggleEdit = function () {
        var editing = !_this.state.editing;

        _this.setState({
          editing: editing
        }, function () {
          if (editing) {
            _this.input.focus();
          }
        });
      }, _this.handleClickOutside = function (e) {
        var editing = _this.state.editing;

        if (editing && _this.cell !== e.target && !_this.cell.contains(e.target)) {
          _this.save();
        }
      }, _this.save = function () {
        var _this$props = _this.props,
            record = _this$props.record,
            handleSave = _this$props.handleSave;

        _this.form.validateFields(function (error, values) {
          if (error) {
            return;
          }

          _this.toggleEdit();

          handleSave(_extends({}, record, values));
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EditableCell, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.editable) {
          document.addEventListener('click', this.handleClickOutside, true);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.props.editable) {
          document.removeEventListener('click', this.handleClickOutside, true);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var editing = this.state.editing;

        var _props = this.props,
            editable = _props.editable,
            dataIndex = _props.dataIndex,
            title = _props.title,
            record = _props.record,
            index = _props.index,
            handleSave = _props.handleSave,
            restProps = _objectWithoutProperties(_props, ["editable", "dataIndex", "title", "record", "index", "handleSave"]);

        return React.createElement(
          "td",
          _extends({
            ref: function ref(node) {
              return _this2.cell = node;
            }
          }, restProps),
          editable ? React.createElement(
            EditableContext.Consumer,
            null,
            function (form) {
              _this2.form = form;
              return editing ? React.createElement(
                FormItem,
                {
                  style: {
                    margin: 0
                  }
                },
                form.getFieldDecorator(dataIndex, {
                  rules: [{
                    required: true,
                    message: title + " is required."
                  }],
                  initialValue: record[dataIndex]
                })(React.createElement(_antd.Input, {
                  ref: function ref(node) {
                    return _this2.input = node;
                  },
                  onPressEnter: _this2.save
                }))
              ) : React.createElement(
                "div",
                {
                  className: "editable-cell-value-wrap",
                  style: {
                    paddingRight: 24
                  },
                  onClick: _this2.toggleEdit
                },
                restProps.children
              );
            }
          ) : restProps.children
        );
      }
    }]);

    return EditableCell;
  }(React.Component);

  var EditableTable = function (_React$Component2) {
    _inherits(EditableTable, _React$Component2);

    function EditableTable(props) {
      _classCallCheck(this, EditableTable);

      var _this3 = _possibleConstructorReturn(this, (EditableTable.__proto__ || Object.getPrototypeOf(EditableTable)).call(this, props));

      _this3.handleDelete = function (key) {
        var dataSource = [].concat(_toConsumableArray(_this3.state.dataSource));

        _this3.setState({
          dataSource: dataSource.filter(function (item) {
            return item.key !== key;
          })
        });
      };

      _this3.handleAdd = function () {
        var _this3$state = _this3.state,
            count = _this3$state.count,
            dataSource = _this3$state.dataSource;
        var newData = {
          key: count,
          name: "Edward King " + count,
          age: 32,
          address: "London, Park Lane no. " + count
        };

        _this3.setState({
          dataSource: [].concat(_toConsumableArray(dataSource), [newData]),
          count: count + 1
        });
      };

      _this3.handleSave = function (row) {
        var newData = [].concat(_toConsumableArray(_this3.state.dataSource));
        var index = newData.findIndex(function (item) {
          return row.key === item.key;
        });
        var item = newData[index];
        newData.splice(index, 1, _extends({}, item, row));

        _this3.setState({
          dataSource: newData
        });
      };

      _this3.columns = [{
        title: 'name',
        dataIndex: 'name',
        width: '30%',
        editable: true
      }, {
        title: 'age',
        dataIndex: 'age'
      }, {
        title: 'address',
        dataIndex: 'address'
      }, {
        title: 'operation',
        dataIndex: 'operation',
        render: function render(text, record) {
          return _this3.state.dataSource.length >= 1 ? React.createElement(
            _antd.Popconfirm,
            {
              title: "Sure to delete?",
              onConfirm: function onConfirm() {
                return _this3.handleDelete(record.key);
              }
            },
            React.createElement(
              "a",
              {
                href: "javascript:;"
              },
              "Delete"
            )
          ) : null;
        }
      }];
      _this3.state = {
        dataSource: [{
          key: '0',
          name: 'Edward King 0',
          age: '32',
          address: 'London, Park Lane no. 0'
        }, {
          key: '1',
          name: 'Edward King 1',
          age: '32',
          address: 'London, Park Lane no. 1'
        }],
        count: 2
      };
      return _this3;
    }

    _createClass(EditableTable, [{
      key: "render",
      value: function render() {
        var _this4 = this;

        var dataSource = this.state.dataSource;
        var components = {
          body: {
            row: EditableFormRow,
            cell: EditableCell
          }
        };
        var columns = this.columns.map(function (col) {
          if (!col.editable) {
            return col;
          }

          return _extends({}, col, {
            onCell: function onCell(record) {
              return {
                record: record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave: _this4.handleSave
              };
            }
          });
        });
        return React.createElement(
          "div",
          null,
          React.createElement(
            _antd.Button,
            {
              onClick: this.handleAdd,
              type: "primary",
              style: {
                marginBottom: 16
              }
            },
            "Add a row"
          ),
          React.createElement(_antd.Table, {
            components: components,
            rowClassName: function rowClassName() {
              return 'editable-row';
            },
            bordered: true,
            dataSource: dataSource,
            columns: columns
          })
        );
      }
    }]);

    return EditableTable;
  }(React.Component);

  return React.createElement(EditableTable, null);
},
  "style": ".editable-cell {\n  position: relative;\n}\n\n.editable-cell-value-wrap {\n  padding: 5px 12px;\n  cursor: pointer;\n}\n\n.editable-row:hover .editable-cell-value-wrap {\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  padding: 4px 11px;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.editable-cell</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.editable-cell-value-wrap</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">5</span>px <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">cursor</span><span class=\"token punctuation\">:</span> pointer<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.editable-row</span><span class=\"token pseudo-class\">:hover</span> <span class=\"token class\">.editable-cell-value-wrap</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">border</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#d9d9d9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px <span class=\"token number\">11</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ 2431:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "带行编辑功能的表格。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Table with editable rows."
      ]
    ]
  },
  "meta": {
    "order": 23,
    "title": {
      "en-US": "Editable Rows",
      "zh-CN": "可编辑行"
    },
    "filename": "components/table/demo/edit-row.md",
    "id": "components-table-demo-edit-row"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> InputNumber<span class=\"token punctuation\">,</span> Popconfirm<span class=\"token punctuation\">,</span> Form <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">100</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  data<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`Edrward </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`London Park no. </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token keyword\">const</span> FormItem <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span>Item<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> EditableContext <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createContext</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> EditableRow <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> form<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">,</span> <span class=\"token operator\">...</span>props <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EditableContext.Provider</span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>form<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token operator\">&lt;</span>tr <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>EditableContext.Provider</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> EditableFormRow <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>EditableRow<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">EditableCell</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  getInput <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>inputType <span class=\"token operator\">===</span> <span class=\"token string\">'number'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InputNumber</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>\n      editing<span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">,</span>\n      title<span class=\"token punctuation\">,</span>\n      inputType<span class=\"token punctuation\">,</span>\n      record<span class=\"token punctuation\">,</span>\n      index<span class=\"token punctuation\">,</span>\n      <span class=\"token operator\">...</span>restProps\n    <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EditableContext.Consumer</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>form<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n          <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> form<span class=\"token punctuation\">;</span>\n          <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>td <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>restProps<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n              <span class=\"token punctuation\">{</span>editing <span class=\"token operator\">?</span> <span class=\"token punctuation\">(</span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>FormItem</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n                  <span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span>dataIndex<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n                    rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n                      required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n                      message<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`Please Input </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>title<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">!`</span></span><span class=\"token punctuation\">,</span>\n                    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n                    initialValue<span class=\"token punctuation\">:</span> record<span class=\"token punctuation\">[</span>dataIndex<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n                  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">getInput</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>FormItem</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> restProps<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>td</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>EditableContext.Consumer</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">EditableTable</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> data<span class=\"token punctuation\">,</span> editingKey<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n        dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n        width<span class=\"token punctuation\">:</span> <span class=\"token string\">'25%'</span><span class=\"token punctuation\">,</span>\n        editable<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n        dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n        width<span class=\"token punctuation\">:</span> <span class=\"token string\">'15%'</span><span class=\"token punctuation\">,</span>\n        editable<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n        dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n        width<span class=\"token punctuation\">:</span> <span class=\"token string\">'40%'</span><span class=\"token punctuation\">,</span>\n        editable<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'operation'</span><span class=\"token punctuation\">,</span>\n        dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'operation'</span><span class=\"token punctuation\">,</span>\n        render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n          <span class=\"token keyword\">const</span> editable <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">isEditing</span><span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">{</span>editable <span class=\"token operator\">?</span> <span class=\"token punctuation\">(</span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n                  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EditableContext.Consumer</span><span class=\"token punctuation\">></span></span>\n                    <span class=\"token punctuation\">{</span>form <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n                      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span>\n                        <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span>\n                        <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">save</span><span class=\"token punctuation\">(</span>form<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n                        <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginRight<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n                      <span class=\"token punctuation\">></span></span>\n                        Save\n                      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n                    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n                  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>EditableContext.Consumer</span><span class=\"token punctuation\">></span></span>\n                  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popconfirm</span>\n                    <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Sure</span> <span class=\"token attr-name\">to</span> <span class=\"token attr-name\">cancel?\"</span>\n                    <span class=\"token attr-name\">onConfirm</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">cancel</span><span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n                  <span class=\"token punctuation\">></span></span>\n                    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span><span class=\"token punctuation\">></span></span>Cancel<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n                  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popconfirm</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">edit</span><span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Edit<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  isEditing <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> record<span class=\"token punctuation\">.</span>key <span class=\"token operator\">===</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>editingKey<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">edit</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> editingKey<span class=\"token punctuation\">:</span> key <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">save</span><span class=\"token punctuation\">(</span>form<span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    form<span class=\"token punctuation\">.</span><span class=\"token function\">validateFields</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>error<span class=\"token punctuation\">,</span> row<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>error<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      <span class=\"token keyword\">const</span> newData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">const</span> index <span class=\"token operator\">=</span> newData<span class=\"token punctuation\">.</span><span class=\"token function\">findIndex</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> key <span class=\"token operator\">===</span> item<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>index <span class=\"token operator\">></span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">const</span> item <span class=\"token operator\">=</span> newData<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n        newData<span class=\"token punctuation\">.</span><span class=\"token function\">splice</span><span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n          <span class=\"token operator\">...</span>item<span class=\"token punctuation\">,</span>\n          <span class=\"token operator\">...</span>row<span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> data<span class=\"token punctuation\">:</span> newData<span class=\"token punctuation\">,</span> editingKey<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token punctuation\">{</span>\n        newData<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>row<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> data<span class=\"token punctuation\">:</span> newData<span class=\"token punctuation\">,</span> editingKey<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  cancel <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> editingKey<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> components <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      body<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        row<span class=\"token punctuation\">:</span> EditableFormRow<span class=\"token punctuation\">,</span>\n        cell<span class=\"token punctuation\">:</span> EditableCell<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>columns<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>col<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>col<span class=\"token punctuation\">.</span>editable<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> col<span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token operator\">...</span>col<span class=\"token punctuation\">,</span>\n        onCell<span class=\"token punctuation\">:</span> record <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n          record<span class=\"token punctuation\">,</span>\n          inputType<span class=\"token punctuation\">:</span> col<span class=\"token punctuation\">.</span>dataIndex <span class=\"token operator\">===</span> <span class=\"token string\">'age'</span> <span class=\"token operator\">?</span> <span class=\"token string\">'number'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'text'</span><span class=\"token punctuation\">,</span>\n          dataIndex<span class=\"token punctuation\">:</span> col<span class=\"token punctuation\">.</span>dataIndex<span class=\"token punctuation\">,</span>\n          title<span class=\"token punctuation\">:</span> col<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">,</span>\n          editing<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">isEditing</span><span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span>\n        <span class=\"token attr-name\">components</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>components<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">bordered</span>\n        <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">rowClassName</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>editable-row<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EditableTable</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  var data = [];

  for (var i = 0; i < 100; i++) {
    data.push({
      key: i.toString(),
      name: "Edrward " + i,
      age: 32,
      address: "London Park no. " + i
    });
  }

  var FormItem = _antd.Form.Item;
  var EditableContext = React.createContext();

  var EditableRow = function EditableRow(_ref) {
    var form = _ref.form,
        index = _ref.index,
        props = _objectWithoutProperties(_ref, ["form", "index"]);

    return React.createElement(
      EditableContext.Provider,
      {
        value: form
      },
      React.createElement("tr", props)
    );
  };

  var EditableFormRow = _antd.Form.create()(EditableRow);

  var EditableCell = function (_React$Component) {
    _inherits(EditableCell, _React$Component);

    function EditableCell() {
      var _ref2;

      var _temp, _this, _ret;

      _classCallCheck(this, EditableCell);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = EditableCell.__proto__ || Object.getPrototypeOf(EditableCell)).call.apply(_ref2, [this].concat(args))), _this), _this.getInput = function () {
        if (_this.props.inputType === 'number') {
          return React.createElement(_antd.InputNumber, null);
        }

        return React.createElement(_antd.Input, null);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EditableCell, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            editing = _props.editing,
            dataIndex = _props.dataIndex,
            title = _props.title,
            inputType = _props.inputType,
            record = _props.record,
            index = _props.index,
            restProps = _objectWithoutProperties(_props, ["editing", "dataIndex", "title", "inputType", "record", "index"]);

        return React.createElement(
          EditableContext.Consumer,
          null,
          function (form) {
            var getFieldDecorator = form.getFieldDecorator;
            return React.createElement(
              "td",
              restProps,
              editing ? React.createElement(
                FormItem,
                {
                  style: {
                    margin: 0
                  }
                },
                getFieldDecorator(dataIndex, {
                  rules: [{
                    required: true,
                    message: "Please Input " + title + "!"
                  }],
                  initialValue: record[dataIndex]
                })(_this2.getInput())
              ) : restProps.children
            );
          }
        );
      }
    }]);

    return EditableCell;
  }(React.Component);

  var EditableTable = function (_React$Component2) {
    _inherits(EditableTable, _React$Component2);

    function EditableTable(props) {
      _classCallCheck(this, EditableTable);

      var _this3 = _possibleConstructorReturn(this, (EditableTable.__proto__ || Object.getPrototypeOf(EditableTable)).call(this, props));

      _this3.isEditing = function (record) {
        return record.key === _this3.state.editingKey;
      };

      _this3.cancel = function () {
        _this3.setState({
          editingKey: ''
        });
      };

      _this3.state = {
        data: data,
        editingKey: ''
      };
      _this3.columns = [{
        title: 'name',
        dataIndex: 'name',
        width: '25%',
        editable: true
      }, {
        title: 'age',
        dataIndex: 'age',
        width: '15%',
        editable: true
      }, {
        title: 'address',
        dataIndex: 'address',
        width: '40%',
        editable: true
      }, {
        title: 'operation',
        dataIndex: 'operation',
        render: function render(text, record) {
          var editable = _this3.isEditing(record);

          return React.createElement(
            "div",
            null,
            editable ? React.createElement(
              "span",
              null,
              React.createElement(
                EditableContext.Consumer,
                null,
                function (form) {
                  return React.createElement(
                    "a",
                    {
                      href: "javascript:;",
                      onClick: function onClick() {
                        return _this3.save(form, record.key);
                      },
                      style: {
                        marginRight: 8
                      }
                    },
                    "Save"
                  );
                }
              ),
              React.createElement(
                _antd.Popconfirm,
                {
                  title: "Sure to cancel?",
                  onConfirm: function onConfirm() {
                    return _this3.cancel(record.key);
                  }
                },
                React.createElement(
                  "a",
                  null,
                  "Cancel"
                )
              )
            ) : React.createElement(
              "a",
              {
                onClick: function onClick() {
                  return _this3.edit(record.key);
                }
              },
              "Edit"
            )
          );
        }
      }];
      return _this3;
    }

    _createClass(EditableTable, [{
      key: "edit",
      value: function edit(key) {
        this.setState({
          editingKey: key
        });
      }
    }, {
      key: "save",
      value: function save(form, key) {
        var _this4 = this;

        form.validateFields(function (error, row) {
          if (error) {
            return;
          }

          var newData = [].concat(_toConsumableArray(_this4.state.data));
          var index = newData.findIndex(function (item) {
            return key === item.key;
          });

          if (index > -1) {
            var item = newData[index];
            newData.splice(index, 1, _extends({}, item, row));

            _this4.setState({
              data: newData,
              editingKey: ''
            });
          } else {
            newData.push(row);

            _this4.setState({
              data: newData,
              editingKey: ''
            });
          }
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this5 = this;

        var components = {
          body: {
            row: EditableFormRow,
            cell: EditableCell
          }
        };
        var columns = this.columns.map(function (col) {
          if (!col.editable) {
            return col;
          }

          return _extends({}, col, {
            onCell: function onCell(record) {
              return {
                record: record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: _this5.isEditing(record)
              };
            }
          });
        });
        return React.createElement(_antd.Table, {
          components: components,
          bordered: true,
          dataSource: this.state.data,
          columns: columns,
          rowClassName: "editable-row"
        });
      }
    }]);

    return EditableTable;
  }(React.Component);

  return React.createElement(EditableTable, null);
},
  "style": ".editable-row .ant-form-explain {\n  position: absolute;\n  font-size: 12px;\n  margin-top: -4px;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.editable-row</span> <span class=\"token class\">.ant-form-explain</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-top</span><span class=\"token punctuation\">:</span> -<span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ 2432:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "表格支持树形数据的展示，可以通过设置 ",
        [
          "code",
          "indentSize"
        ],
        " 以控制每一层的缩进宽度。"
      ],
      [
        "blockquote",
        [
          "p",
          "注：暂不支持父子数据递归关联选择。"
        ]
      ]
    ],
    "en-US": [
      [
        "p",
        "Display tree structure data in Table, control the indent width by setting ",
        [
          "code",
          "indentSize"
        ],
        "."
      ],
      [
        "blockquote",
        [
          "p",
          "Note, no support for recursive selection of tree structure data table yet."
        ]
      ]
    ]
  },
  "meta": {
    "order": 16,
    "title": {
      "en-US": "Tree data",
      "zh-CN": "树形数据展示"
    },
    "filename": "components/table/demo/expand-children.md",
    "id": "components-table-demo-expand-children"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token string\">'12%'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token string\">'30%'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown sr.'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">60</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token number\">11</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 2 Lake Park'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown jr.'</span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token number\">30</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 3 Lake Park'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token number\">121</span><span class=\"token punctuation\">,</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jimmy Brown'</span><span class=\"token punctuation\">,</span>\n      age<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span>\n      address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 3 Lake Park'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token number\">13</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green sr.'</span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token number\">72</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token number\">131</span><span class=\"token punctuation\">,</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n      age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n      address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 2 Lake Park'</span><span class=\"token punctuation\">,</span>\n      children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token number\">1311</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green jr.'</span><span class=\"token punctuation\">,</span>\n        age<span class=\"token punctuation\">:</span> <span class=\"token number\">25</span><span class=\"token punctuation\">,</span>\n        address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 3 Lake Park'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token number\">1312</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jimmy Green sr.'</span><span class=\"token punctuation\">,</span>\n        age<span class=\"token punctuation\">:</span> <span class=\"token number\">18</span><span class=\"token punctuation\">,</span>\n        address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 4 Lake Park'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// rowSelection objects indicates the need for row selection</span>\n<span class=\"token keyword\">const</span> rowSelection <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  onChange<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>selectedRowKeys<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`selectedRowKeys: </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>selectedRowKeys<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span> <span class=\"token string\">'selectedRows: '</span><span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  onSelect<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">,</span> selected<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">,</span> selected<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  onSelectAll<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>selected<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">,</span> changeRows<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>selected<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">,</span> changeRows<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">rowSelection</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>rowSelection<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%'
  }, {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address'
  }];
  var data = [{
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [{
      key: 11,
      name: 'John Brown',
      age: 42,
      address: 'New York No. 2 Lake Park'
    }, {
      key: 12,
      name: 'John Brown jr.',
      age: 30,
      address: 'New York No. 3 Lake Park',
      children: [{
        key: 121,
        name: 'Jimmy Brown',
        age: 16,
        address: 'New York No. 3 Lake Park'
      }]
    }, {
      key: 13,
      name: 'Jim Green sr.',
      age: 72,
      address: 'London No. 1 Lake Park',
      children: [{
        key: 131,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 2 Lake Park',
        children: [{
          key: 1311,
          name: 'Jim Green jr.',
          age: 25,
          address: 'London No. 3 Lake Park'
        }, {
          key: 1312,
          name: 'Jimmy Green sr.',
          age: 18,
          address: 'London No. 4 Lake Park'
        }]
      }]
    }]
  }, {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }]; // rowSelection objects indicates the need for row selection

  var rowSelection = {
    onChange: function onChange(selectedRowKeys, selectedRows) {
      console.log("selectedRowKeys: " + selectedRowKeys, 'selectedRows: ', selectedRows);
    },
    onSelect: function onSelect(record, selected, selectedRows) {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: function onSelectAll(selected, selectedRows, changeRows) {
      console.log(selected, selectedRows, changeRows);
    }
  };
  return React.createElement(_antd.Table, {
    columns: columns,
    rowSelection: rowSelection,
    dataSource: data
  });
}
};

/***/ }),

/***/ 2433:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "当表格内容较多不能一次性完全展示时。"
      ]
    ],
    "en-US": [
      [
        "p",
        "When there's too much information to show and the table can't display all at once."
      ]
    ]
  },
  "meta": {
    "order": 13,
    "title": {
      "en-US": "Expandable Row",
      "zh-CN": "可展开"
    },
    "filename": "components/table/demo/expand.md",
    "id": "components-table-demo-expand"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Action'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'x'</span><span class=\"token punctuation\">,</span> render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Delete<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span> key<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span> age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span> address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span> description<span class=\"token punctuation\">:</span> <span class=\"token string\">'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> key<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span> age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span> address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span> description<span class=\"token punctuation\">:</span> <span class=\"token string\">'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> key<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span> age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span> address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span> description<span class=\"token punctuation\">:</span> <span class=\"token string\">'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span>\n    <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">expandedRowRender</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>record <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>p style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>record<span class=\"token punctuation\">.</span>description<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n    dataSource<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span>\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }, {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: function render() {
      return React.createElement(
        "a",
        {
          href: "javascript:;"
        },
        "Delete"
      );
    }
  }];
  var data = [{
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
  }, {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
  }, {
    key: 3,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
  }];
  return React.createElement(_antd.Table, {
    columns: columns,
    expandedRowRender: function expandedRowRender(record) {
      return React.createElement(
        "p",
        {
          style: {
            margin: 0
          }
        },
        record.description
      );
    },
    dataSource: data
  });
}
};

/***/ }),

/***/ 2434:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "适合同时展示有大量数据和数据列。"
      ],
      [
        "blockquote",
        [
          "p",
          "若列头与内容不对齐或出现列重复，请指定列的宽度 ",
          [
            "code",
            "width"
          ],
          "。"
        ],
        [
          "p",
          "建议指定 ",
          [
            "code",
            "scroll.x"
          ],
          " 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 ",
          [
            "code",
            "scroll.x"
          ],
          "。"
        ]
      ]
    ],
    "en-US": [
      [
        "p",
        "A Solution for displaying large amounts of data with long columns."
      ],
      [
        "blockquote",
        [
          "p",
          "Specify the width of columns if header and cell do not align properly."
        ],
        [
          "p",
          "A fixed value which is greater than table width for ",
          [
            "code",
            "scroll.x"
          ],
          " is recommended. The sum of unfixed columns should not greater than ",
          [
            "code",
            "scroll.x"
          ],
          "."
        ]
      ]
    ]
  },
  "meta": {
    "order": 19,
    "title": {
      "en-US": "Fixed Columns and Header",
      "zh-CN": "固定头和列"
    },
    "filename": "components/table/demo/fixed-columns-header.md",
    "id": "components-table-demo-fixed-columns-header"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Full Name'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span> fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 1'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 2'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 3'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 4'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'4'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 5'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'5'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 6'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'6'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 7'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'7'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 8'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'8'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Action'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'operation'</span><span class=\"token punctuation\">,</span>\n    fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'right'</span><span class=\"token punctuation\">,</span>\n    width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n    render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>action<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">100</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  data<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`Edrward </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`London Park no. </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">scroll</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> x<span class=\"token punctuation\">:</span> <span class=\"token number\">1500</span><span class=\"token punctuation\">,</span> y<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var columns = [{
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left'
  }, {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left'
  }, {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150
  }, {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150
  }, {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150
  }, {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 150
  }, {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 150
  }, {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150
  }, {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150
  }, {
    title: 'Column 8',
    dataIndex: 'address',
    key: '8'
  }, {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: function render() {
      return React.createElement(
        "a",
        {
          href: "javascript:;"
        },
        "action"
      );
    }
  }];
  var data = [];

  for (var i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: "Edrward " + i,
      age: 32,
      address: "London Park no. " + i
    });
  }

  return React.createElement(_antd.Table, {
    columns: columns,
    dataSource: data,
    scroll: {
      x: 1500,
      y: 300
    }
  });
}
};

/***/ }),

/***/ 2435:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据，需要和 ",
        [
          "code",
          "scroll.x"
        ],
        " 配合使用。"
      ],
      [
        "blockquote",
        [
          "p",
          "若列头与内容不对齐或出现列重复，请指定列的宽度 ",
          [
            "code",
            "width"
          ],
          "。"
        ],
        [
          "p",
          "建议指定 ",
          [
            "code",
            "scroll.x"
          ],
          " 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 ",
          [
            "code",
            "scroll.x"
          ],
          "。"
        ]
      ]
    ],
    "en-US": [
      [
        "p",
        "To fix some columns and scroll inside other columns, and you must set ",
        [
          "code",
          "scroll.x"
        ],
        " meanwhile."
      ],
      [
        "blockquote",
        [
          "p",
          "Specify the width of columns if header and cell do not align properly."
        ],
        [
          "p",
          "A fixed value which is greater than table width for ",
          [
            "code",
            "scroll.x"
          ],
          " is recommended. The sum of unfixed columns should not greater than ",
          [
            "code",
            "scroll.x"
          ],
          "."
        ]
      ]
    ]
  },
  "meta": {
    "order": 18,
    "title": {
      "en-US": "Fixed Columns",
      "zh-CN": "固定列"
    },
    "filename": "components/table/demo/fixed-columns.md",
    "id": "components-table-demo-fixed-columns"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Full Name'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span> fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 1'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 2'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 3'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 4'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'4'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 5'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'5'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 6'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'6'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 7'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'7'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Column 8'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'8'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Action'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'operation'</span><span class=\"token punctuation\">,</span>\n    fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'right'</span><span class=\"token punctuation\">,</span>\n    width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n    render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>action<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">40</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">scroll</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> x<span class=\"token punctuation\">:</span> <span class=\"token number\">1300</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var columns = [{
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left'
  }, {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left'
  }, {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1'
  }, {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2'
  }, {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3'
  }, {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4'
  }, {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5'
  }, {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6'
  }, {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7'
  }, {
    title: 'Column 8',
    dataIndex: 'address',
    key: '8'
  }, {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: function render() {
      return React.createElement(
        "a",
        {
          href: "javascript:;"
        },
        "action"
      );
    }
  }];
  var data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park'
  }, {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park'
  }];
  return React.createElement(_antd.Table, {
    columns: columns,
    dataSource: data,
    scroll: {
      x: 1300
    }
  });
}
};

/***/ }),

/***/ 2436:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "方便一页内展示大量数据。"
      ],
      [
        "p",
        "需要指定 column 的 ",
        [
          "code",
          "width"
        ],
        " 属性，否则列头和内容可能不对齐。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Display large amounts of data in scrollable view."
      ],
      [
        "blockquote",
        [
          "p",
          "Specify the width of each column if header and cell do not align properly."
        ]
      ]
    ]
  },
  "meta": {
    "order": 17,
    "title": {
      "en-US": "Fixed Header",
      "zh-CN": "固定表头"
    },
    "filename": "components/table/demo/fixed-header.md",
    "id": "components-table-demo-fixed-header"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">100</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  data<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`Edward King </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`London, Park Lane no. </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">pagination</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> pageSize<span class=\"token punctuation\">:</span> <span class=\"token number\">50</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">scroll</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> y<span class=\"token punctuation\">:</span> <span class=\"token number\">240</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var columns = [{
    title: 'Name',
    dataIndex: 'name',
    width: 150
  }, {
    title: 'Age',
    dataIndex: 'age',
    width: 150
  }, {
    title: 'Address',
    dataIndex: 'address'
  }];
  var data = [];

  for (var i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: "Edward King " + i,
      age: 32,
      address: "London, Park Lane no. " + i
    });
  }

  return React.createElement(_antd.Table, {
    columns: columns,
    dataSource: data,
    pagination: {
      pageSize: 50
    },
    scroll: {
      y: 240
    }
  });
}
};

/***/ }),

/***/ 2437:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        [
          "code",
          "columns[n]"
        ],
        " 可以内嵌 ",
        [
          "code",
          "children"
        ],
        "，以渲染分组表头。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Group table head with ",
        [
          "code",
          "columns[n].children"
        ],
        "."
      ]
    ]
  },
  "meta": {
    "order": 21,
    "title": {
      "en-US": "Grouping table head",
      "zh-CN": "表头分组"
    },
    "filename": "components/table/demo/grouping-columns.md",
    "id": "components-table-demo-grouping-columns"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n  fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span><span class=\"token punctuation\">,</span>\n  filters<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'John'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'John'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  onFilter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Other'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n    dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n    width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span><span class=\"token punctuation\">,</span>\n    sorter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> a<span class=\"token punctuation\">.</span>age <span class=\"token operator\">-</span> b<span class=\"token punctuation\">.</span>age<span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Street'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'street'</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'street'</span><span class=\"token punctuation\">,</span>\n      width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Block'</span><span class=\"token punctuation\">,</span>\n      children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Building'</span><span class=\"token punctuation\">,</span>\n        dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'building'</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'building'</span><span class=\"token punctuation\">,</span>\n        width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Door No.'</span><span class=\"token punctuation\">,</span>\n        dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'number'</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'number'</span><span class=\"token punctuation\">,</span>\n        width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Company'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Company Address'</span><span class=\"token punctuation\">,</span>\n    dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'companyAddress'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'companyAddress'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Company Name'</span><span class=\"token punctuation\">,</span>\n    dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'companyName'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'companyName'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Gender'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'gender'</span><span class=\"token punctuation\">,</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'gender'</span><span class=\"token punctuation\">,</span>\n  width<span class=\"token punctuation\">:</span> <span class=\"token number\">80</span><span class=\"token punctuation\">,</span>\n  fixed<span class=\"token punctuation\">:</span> <span class=\"token string\">'right'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">100</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  data<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n    street<span class=\"token punctuation\">:</span> <span class=\"token string\">'Lake Park'</span><span class=\"token punctuation\">,</span>\n    building<span class=\"token punctuation\">:</span> <span class=\"token string\">'C'</span><span class=\"token punctuation\">,</span>\n    number<span class=\"token punctuation\">:</span> <span class=\"token number\">2035</span><span class=\"token punctuation\">,</span>\n    companyAddress<span class=\"token punctuation\">:</span> <span class=\"token string\">'Lake Street 42'</span><span class=\"token punctuation\">,</span>\n    companyName<span class=\"token punctuation\">:</span> <span class=\"token string\">'SoftLake Co'</span><span class=\"token punctuation\">,</span>\n    gender<span class=\"token punctuation\">:</span> <span class=\"token string\">'M'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span>\n    <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">bordered</span>\n    <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>middle<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">scroll</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> x<span class=\"token punctuation\">:</span> <span class=\"token string\">'130%'</span><span class=\"token punctuation\">,</span> y<span class=\"token punctuation\">:</span> <span class=\"token number\">240</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    fixed: 'left',
    filters: [{
      text: 'Joe',
      value: 'Joe'
    }, {
      text: 'John',
      value: 'John'
    }],
    onFilter: function onFilter(value, record) {
      return record.name.indexOf(value) === 0;
    }
  }, {
    title: 'Other',
    children: [{
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 200,
      sorter: function sorter(a, b) {
        return a.age - b.age;
      }
    }, {
      title: 'Address',
      children: [{
        title: 'Street',
        dataIndex: 'street',
        key: 'street',
        width: 200
      }, {
        title: 'Block',
        children: [{
          title: 'Building',
          dataIndex: 'building',
          key: 'building',
          width: 100
        }, {
          title: 'Door No.',
          dataIndex: 'number',
          key: 'number',
          width: 100
        }]
      }]
    }]
  }, {
    title: 'Company',
    children: [{
      title: 'Company Address',
      dataIndex: 'companyAddress',
      key: 'companyAddress'
    }, {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'companyName'
    }]
  }, {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    width: 80,
    fixed: 'right'
  }];
  var data = [];

  for (var i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: 'John Brown',
      age: i + 1,
      street: 'Lake Park',
      building: 'C',
      number: 2035,
      companyAddress: 'Lake Street 42',
      companyName: 'SoftLake Co',
      gender: 'M'
    });
  }

  return React.createElement(_antd.Table, {
    columns: columns,
    dataSource: data,
    bordered: true,
    size: "middle",
    scroll: {
      x: '130%',
      y: 240
    }
  });
}
};

/***/ }),

/***/ 2438:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "对某一列数据进行筛选，使用列的 ",
        [
          "code",
          "filters"
        ],
        " 属性来指定需要筛选菜单的列，",
        [
          "code",
          "onFilter"
        ],
        " 用于筛选当前数据，",
        [
          "code",
          "filterMultiple"
        ],
        " 用于指定多选和单选。"
      ],
      [
        "p",
        "对某一列数据进行排序，通过指定列的 ",
        [
          "code",
          "sorter"
        ],
        " 函数即可启动排序按钮。",
        [
          "code",
          "sorter: function(rowA, rowB) { ... }"
        ],
        "， rowA、rowB 为比较的两个行数据。"
      ],
      [
        "p",
        "使用 ",
        [
          "code",
          "defaultSortOrder"
        ],
        " 属性，设置列的默认排序顺序。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Use ",
        [
          "code",
          "filters"
        ],
        " to generate filter menu in columns, ",
        [
          "code",
          "onFilter"
        ],
        " to determine filtered result, and ",
        [
          "code",
          "filterMultiple"
        ],
        " to indicate whether it's multiple or single selection."
      ],
      [
        "p",
        "Use ",
        [
          "code",
          "sorter"
        ],
        " to make a column sortable. ",
        [
          "code",
          "sorter"
        ],
        " can be a function of the type ",
        [
          "code",
          "function(a, b) { ... }"
        ],
        " for sorting data locally."
      ],
      [
        "p",
        "Uses ",
        [
          "code",
          "defaultSortOrder"
        ],
        " to make a column sorted by default."
      ],
      [
        "p",
        "If a ",
        [
          "code",
          "sortOrder"
        ],
        " or ",
        [
          "code",
          "defaultSortOrder"
        ],
        " is specified with the value ",
        [
          "code",
          "ascend"
        ],
        " or ",
        [
          "code",
          "descend"
        ],
        ", you can access this value from within the function passed to the ",
        [
          "code",
          "sorter"
        ],
        " as explained above. Such a function can take the form: ",
        [
          "code",
          "function(a, b, sortOrder) { ... }"
        ],
        "."
      ]
    ]
  },
  "meta": {
    "order": 7,
    "title": {
      "en-US": "Filter and sorter",
      "zh-CN": "筛选和排序"
    },
    "filename": "components/table/demo/head.md",
    "id": "components-table-demo-head"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  filters<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Submenu'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Submenu'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Green'</span><span class=\"token punctuation\">,</span>\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Green'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Black'</span><span class=\"token punctuation\">,</span>\n      value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Black'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token comment\" spellcheck=\"true\">// specify the condition of filtering result</span>\n  <span class=\"token comment\" spellcheck=\"true\">// here is that finding the name started with `value`</span>\n  onFilter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  sorter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> a<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> b<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n  defaultSortOrder<span class=\"token punctuation\">:</span> <span class=\"token string\">'descend'</span><span class=\"token punctuation\">,</span>\n  sorter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> a<span class=\"token punctuation\">.</span>age <span class=\"token operator\">-</span> b<span class=\"token punctuation\">.</span>age<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n  filters<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'London'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'London'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  filterMultiple<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  onFilter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>address<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  sorter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> a<span class=\"token punctuation\">.</span>address<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> b<span class=\"token punctuation\">.</span>address<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'4'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Red'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 2 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>pagination<span class=\"token punctuation\">,</span> filters<span class=\"token punctuation\">,</span> sorter<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'params'</span><span class=\"token punctuation\">,</span> pagination<span class=\"token punctuation\">,</span> filters<span class=\"token punctuation\">,</span> sorter<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var columns = [{
    title: 'Name',
    dataIndex: 'name',
    filters: [{
      text: 'Joe',
      value: 'Joe'
    }, {
      text: 'Jim',
      value: 'Jim'
    }, {
      text: 'Submenu',
      value: 'Submenu',
      children: [{
        text: 'Green',
        value: 'Green'
      }, {
        text: 'Black',
        value: 'Black'
      }]
    }],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: function onFilter(value, record) {
      return record.name.indexOf(value) === 0;
    },
    sorter: function sorter(a, b) {
      return a.name.length - b.name.length;
    }
  }, {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: function sorter(a, b) {
      return a.age - b.age;
    }
  }, {
    title: 'Address',
    dataIndex: 'address',
    filters: [{
      text: 'London',
      value: 'London'
    }, {
      text: 'New York',
      value: 'New York'
    }],
    filterMultiple: false,
    onFilter: function onFilter(value, record) {
      return record.address.indexOf(value) === 0;
    },
    sorter: function sorter(a, b) {
      return a.address.length - b.address.length;
    }
  }];
  var data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }];

  function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }

  return React.createElement(_antd.Table, {
    columns: columns,
    dataSource: data,
    onChange: onChange
  });
}
};

/***/ }),

/***/ 2439:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "使用 JSX 风格的 API（2.5.0 以后引入）"
      ],
      [
        "blockquote",
        [
          "p",
          "这个只是一个描述 ",
          [
            "code",
            "columns"
          ],
          " 的语法糖，所以你不能用其他组件去包裹 ",
          [
            "code",
            "Column"
          ],
          " 和 ",
          [
            "code",
            "ColumnGroup"
          ],
          "。"
        ]
      ]
    ],
    "en-US": [
      [
        "p",
        "Using JSX style API (introduced in 2.5.0)"
      ],
      [
        "blockquote",
        [
          "p",
          "Since this is just a syntax sugar for the prop ",
          [
            "code",
            "columns"
          ],
          ", you can't compose ",
          [
            "code",
            "Column"
          ],
          " and ",
          [
            "code",
            "ColumnGroup"
          ],
          " with other Components."
        ]
      ]
    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "en-US": "JSX style API",
      "zh-CN": "JSX 风格的 API"
    },
    "filename": "components/table/demo/jsx.md",
    "id": "components-table-demo-jsx"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table<span class=\"token punctuation\">,</span> Divider<span class=\"token punctuation\">,</span> Tag <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Column<span class=\"token punctuation\">,</span> ColumnGroup <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Table<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  firstName<span class=\"token punctuation\">:</span> <span class=\"token string\">'John'</span><span class=\"token punctuation\">,</span>\n  lastName<span class=\"token punctuation\">:</span> <span class=\"token string\">'Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n  tags<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'nice'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'developer'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  firstName<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim'</span><span class=\"token punctuation\">,</span>\n  lastName<span class=\"token punctuation\">:</span> <span class=\"token string\">'Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n  tags<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'loser'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  firstName<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe'</span><span class=\"token punctuation\">,</span>\n  lastName<span class=\"token punctuation\">:</span> <span class=\"token string\">'Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n  tags<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'cool'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'teacher'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ColumnGroup</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Name<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Column</span>\n        <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>First</span> <span class=\"token attr-name\">Name\"</span>\n        <span class=\"token attr-name\">dataIndex</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>firstName<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>firstName<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Column</span>\n        <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Last</span> <span class=\"token attr-name\">Name\"</span>\n        <span class=\"token attr-name\">dataIndex</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>lastName<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>lastName<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ColumnGroup</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Column</span>\n      <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Age<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">dataIndex</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>age<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>age<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Column</span>\n      <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Address<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">dataIndex</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>address<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>address<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Column</span>\n      <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tags<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">dataIndex</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>tags<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>tags<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">render</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>tags <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span>tags<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>tag <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>Tag color<span class=\"token operator\">=</span><span class=\"token string\">\"blue\"</span> key<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Column</span>\n      <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Action<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>action<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">render</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Invite <span class=\"token punctuation\">{</span>record<span class=\"token punctuation\">.</span>lastName<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Divider</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>vertical<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Delete<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Table</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var Column = _antd.Table.Column,
      ColumnGroup = _antd.Table.ColumnGroup;
  var data = [{
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  }, {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  }, {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }];
  return React.createElement(
    _antd.Table,
    {
      dataSource: data
    },
    React.createElement(
      ColumnGroup,
      {
        title: "Name"
      },
      React.createElement(Column, {
        title: "First Name",
        dataIndex: "firstName",
        key: "firstName"
      }),
      React.createElement(Column, {
        title: "Last Name",
        dataIndex: "lastName",
        key: "lastName"
      })
    ),
    React.createElement(Column, {
      title: "Age",
      dataIndex: "age",
      key: "age"
    }),
    React.createElement(Column, {
      title: "Address",
      dataIndex: "address",
      key: "address"
    }),
    React.createElement(Column, {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: function render(tags) {
        return React.createElement(
          "span",
          null,
          tags.map(function (tag) {
            return React.createElement(
              _antd.Tag,
              {
                color: "blue",
                key: tag
              },
              tag
            );
          })
        );
      }
    }),
    React.createElement(Column, {
      title: "Action",
      key: "action",
      render: function render(text, record) {
        return React.createElement(
          "span",
          null,
          React.createElement(
            "a",
            {
              href: "javascript:;"
            },
            "Invite ",
            record.lastName
          ),
          React.createElement(_antd.Divider, {
            type: "vertical"
          }),
          React.createElement(
            "a",
            {
              href: "javascript:;"
            },
            "Delete"
          )
        );
      }
    })
  );
}
};

/***/ }),

/***/ 2440:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "展示每行数据更详细的信息。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Showing more detailed info of every row."
      ]
    ]
  },
  "meta": {
    "order": 24,
    "title": {
      "en-US": "Nested tables",
      "zh-CN": "嵌套子表格"
    },
    "filename": "components/table/demo/nested-table.md",
    "id": "components-table-demo-nested-table"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table<span class=\"token punctuation\">,</span> Badge<span class=\"token punctuation\">,</span> Menu<span class=\"token punctuation\">,</span> Dropdown<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> menu <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n      Action <span class=\"token number\">1</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n      Action <span class=\"token number\">2</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">NestedTable</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> expandedRowRender <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Date'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'date'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'date'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Status'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'state'</span><span class=\"token punctuation\">,</span> render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">status</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>Finished<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Upgrade Status'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'upgradeNum'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'upgradeNum'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Action'</span><span class=\"token punctuation\">,</span>\n        dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'operation'</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'operation'</span><span class=\"token punctuation\">,</span>\n        render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>table-operation<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Pause<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Stop<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Dropdown</span> <span class=\"token attr-name\">overlay</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>menu<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n                More <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>down<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Dropdown</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">3</span><span class=\"token punctuation\">;</span> <span class=\"token operator\">++</span>i<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      data<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">,</span>\n        date<span class=\"token punctuation\">:</span> <span class=\"token string\">'2014-12-24 23:12:00'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is production name'</span><span class=\"token punctuation\">,</span>\n        upgradeNum<span class=\"token punctuation\">:</span> <span class=\"token string\">'Upgraded: 56'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span>\n        <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">pagination</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Platform'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'platform'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'platform'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Version'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'version'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'version'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Upgraded'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'upgradeNum'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'upgradeNum'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Creator'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'creator'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'creator'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Date'</span><span class=\"token punctuation\">,</span> dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'createdAt'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'createdAt'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Action'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'operation'</span><span class=\"token punctuation\">,</span> render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Publish<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">3</span><span class=\"token punctuation\">;</span> <span class=\"token operator\">++</span>i<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    data<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">,</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Screem'</span><span class=\"token punctuation\">,</span>\n      platform<span class=\"token punctuation\">:</span> <span class=\"token string\">'iOS'</span><span class=\"token punctuation\">,</span>\n      version<span class=\"token punctuation\">:</span> <span class=\"token string\">'10.3.4.5654'</span><span class=\"token punctuation\">,</span>\n      upgradeNum<span class=\"token punctuation\">:</span> <span class=\"token number\">500</span><span class=\"token punctuation\">,</span>\n      creator<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jack'</span><span class=\"token punctuation\">,</span>\n      createdAt<span class=\"token punctuation\">:</span> <span class=\"token string\">'2014-12-24 23:12:00'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span>\n      <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>components-table-demo-nested<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">expandedRowRender</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>expandedRowRender<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>NestedTable</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var menu = React.createElement(
    _antd.Menu,
    null,
    React.createElement(
      _antd.Menu.Item,
      null,
      "Action 1"
    ),
    React.createElement(
      _antd.Menu.Item,
      null,
      "Action 2"
    )
  );

  function NestedTable() {
    var expandedRowRender = function expandedRowRender() {
      var columns = [{
        title: 'Date',
        dataIndex: 'date',
        key: 'date'
      }, {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      }, {
        title: 'Status',
        key: 'state',
        render: function render() {
          return React.createElement(
            "span",
            null,
            React.createElement(_antd.Badge, {
              status: "success"
            }),
            "Finished"
          );
        }
      }, {
        title: 'Upgrade Status',
        dataIndex: 'upgradeNum',
        key: 'upgradeNum'
      }, {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: function render() {
          return React.createElement(
            "span",
            {
              className: "table-operation"
            },
            React.createElement(
              "a",
              {
                href: "javascript:;"
              },
              "Pause"
            ),
            React.createElement(
              "a",
              {
                href: "javascript:;"
              },
              "Stop"
            ),
            React.createElement(
              _antd.Dropdown,
              {
                overlay: menu
              },
              React.createElement(
                "a",
                {
                  href: "javascript:;"
                },
                "More ",
                React.createElement(_antd.Icon, {
                  type: "down"
                })
              )
            )
          );
        }
      }];
      var data = [];

      for (var i = 0; i < 3; ++i) {
        data.push({
          key: i,
          date: '2014-12-24 23:12:00',
          name: 'This is production name',
          upgradeNum: 'Upgraded: 56'
        });
      }

      return React.createElement(_antd.Table, {
        columns: columns,
        dataSource: data,
        pagination: false
      });
    };

    var columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: 'Platform',
      dataIndex: 'platform',
      key: 'platform'
    }, {
      title: 'Version',
      dataIndex: 'version',
      key: 'version'
    }, {
      title: 'Upgraded',
      dataIndex: 'upgradeNum',
      key: 'upgradeNum'
    }, {
      title: 'Creator',
      dataIndex: 'creator',
      key: 'creator'
    }, {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt'
    }, {
      title: 'Action',
      key: 'operation',
      render: function render() {
        return React.createElement(
          "a",
          {
            href: "javascript:;"
          },
          "Publish"
        );
      }
    }];
    var data = [];

    for (var i = 0; i < 3; ++i) {
      data.push({
        key: i,
        name: 'Screem',
        platform: 'iOS',
        version: '10.3.4.5654',
        upgradeNum: 500,
        creator: 'Jack',
        createdAt: '2014-12-24 23:12:00'
      });
    }

    return React.createElement(_antd.Table, {
      className: "components-table-demo-nested",
      columns: columns,
      expandedRowRender: expandedRowRender,
      dataSource: data
    });
  }

  return React.createElement(NestedTable, null);
},
  "style": ".components-table-demo-nested .ant-table-expanded-row > td:last-child {\n  padding: 0 48px 0 8px;\n}\n\n.components-table-demo-nested .ant-table-expanded-row > td:last-child .ant-table-thead th {\n  border-bottom: 1px solid #e9e9e9;\n}\n\n.components-table-demo-nested .ant-table-expanded-row > td:last-child .ant-table-thead th:first-child {\n  padding-left: 0;\n}\n\n.components-table-demo-nested .ant-table-expanded-row > td:last-child .ant-table-row td:first-child {\n  padding-left: 0;\n}\n\n.components-table-demo-nested .ant-table-expanded-row .ant-table-row:last-child td {\n  border: none;\n}\n\n.components-table-demo-nested .ant-table-expanded-row .ant-table-thead > tr > th {\n  background: none;\n}\n\n.components-table-demo-nested .table-operation a:not(:last-child) {\n  margin-right: 24px;\n}\n\n.components-table-demo-nested .ant-table-expanded-row:hover > td {\n  background: #fbfbfb;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.components-table-demo-nested</span> <span class=\"token class\">.ant-table-expanded-row</span> > td<span class=\"token pseudo-class\">:last-child</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">48</span>px <span class=\"token number\">0</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.components-table-demo-nested</span> <span class=\"token class\">.ant-table-expanded-row</span> > td<span class=\"token pseudo-class\">:last-child</span> <span class=\"token class\">.ant-table-thead</span> th </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">border-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.components-table-demo-nested</span> <span class=\"token class\">.ant-table-expanded-row</span> > td<span class=\"token pseudo-class\">:last-child</span> <span class=\"token class\">.ant-table-thead</span> th<span class=\"token pseudo-class\">:first-child</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding-left</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.components-table-demo-nested</span> <span class=\"token class\">.ant-table-expanded-row</span> > td<span class=\"token pseudo-class\">:last-child</span> <span class=\"token class\">.ant-table-row</span> td<span class=\"token pseudo-class\">:first-child</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding-left</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.components-table-demo-nested</span> <span class=\"token class\">.ant-table-expanded-row</span> <span class=\"token class\">.ant-table-row</span><span class=\"token pseudo-class\">:last-child</span> td </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">border</span><span class=\"token punctuation\">:</span> none<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.components-table-demo-nested</span> <span class=\"token class\">.ant-table-expanded-row</span> <span class=\"token class\">.ant-table-thead</span> > tr > th </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> none<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.components-table-demo-nested</span> <span class=\"token class\">.table-operation</span> a<span class=\"token pseudo-class\">:not(:last-child)</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.components-table-demo-nested</span> <span class=\"token class\">.ant-table-expanded-row</span><span class=\"token pseudo-class\">:hover</span> > td </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fbfbfb</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ 2441:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "使用受控属性对筛选和排序状态进行控制。"
      ],
      [
        "blockquote",
        [
          "ol",
          [
            "li",
            [
              "p",
              "columns 中定义了 filteredValue 和 sortOrder 属性即视为受控模式。"
            ]
          ],
          [
            "li",
            [
              "p",
              "只支持同时对一列进行排序，请保证只有一列的 sortOrder 属性是生效的。"
            ]
          ],
          [
            "li",
            [
              "p",
              "务必指定 ",
              [
                "code",
                "column.key"
              ],
              "。"
            ]
          ]
        ]
      ]
    ],
    "en-US": [
      [
        "p",
        "Control filters and sorters by ",
        [
          "code",
          "filteredValue"
        ],
        " and ",
        [
          "code",
          "sortOrder"
        ],
        "."
      ],
      [
        "blockquote",
        [
          "ol",
          [
            "li",
            [
              "p",
              "Defining ",
              [
                "code",
                "filteredValue"
              ],
              " or ",
              [
                "code",
                "sortOrder"
              ],
              " means that it is in the controlled mode."
            ]
          ],
          [
            "li",
            [
              "p",
              "Make sure ",
              [
                "code",
                "sortOrder"
              ],
              " is assigned for only one column."
            ]
          ],
          [
            "li",
            [
              "p",
              [
                "code",
                "column.key"
              ],
              " is required."
            ]
          ]
        ]
      ]
    ]
  },
  "meta": {
    "order": 7,
    "title": {
      "en-US": "Reset filters and sorters",
      "zh-CN": "可控的筛选和排序"
    },
    "filename": "components/table/demo/reset-filter.md",
    "id": "components-table-demo-reset-filter"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'4'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Red'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 2 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    filteredInfo<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n    sortedInfo<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>pagination<span class=\"token punctuation\">,</span> filters<span class=\"token punctuation\">,</span> sorter<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Various parameters'</span><span class=\"token punctuation\">,</span> pagination<span class=\"token punctuation\">,</span> filters<span class=\"token punctuation\">,</span> sorter<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      filteredInfo<span class=\"token punctuation\">:</span> filters<span class=\"token punctuation\">,</span>\n      sortedInfo<span class=\"token punctuation\">:</span> sorter<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  clearFilters <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> filteredInfo<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  clearAll <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      filteredInfo<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n      sortedInfo<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  setAgeSort <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      sortedInfo<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        order<span class=\"token punctuation\">:</span> <span class=\"token string\">'descend'</span><span class=\"token punctuation\">,</span>\n        columnKey<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> <span class=\"token punctuation\">{</span> sortedInfo<span class=\"token punctuation\">,</span> filteredInfo <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    sortedInfo <span class=\"token operator\">=</span> sortedInfo <span class=\"token operator\">||</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    filteredInfo <span class=\"token operator\">=</span> filteredInfo <span class=\"token operator\">||</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n      filters<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span> text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      filteredValue<span class=\"token punctuation\">:</span> filteredInfo<span class=\"token punctuation\">.</span>name <span class=\"token operator\">||</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n      onFilter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span><span class=\"token function\">includes</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      sorter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> a<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> b<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">,</span>\n      sortOrder<span class=\"token punctuation\">:</span> sortedInfo<span class=\"token punctuation\">.</span>columnKey <span class=\"token operator\">===</span> <span class=\"token string\">'name'</span> <span class=\"token operator\">&amp;&amp;</span> sortedInfo<span class=\"token punctuation\">.</span>order<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n      sorter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> a<span class=\"token punctuation\">.</span>age <span class=\"token operator\">-</span> b<span class=\"token punctuation\">.</span>age<span class=\"token punctuation\">,</span>\n      sortOrder<span class=\"token punctuation\">:</span> sortedInfo<span class=\"token punctuation\">.</span>columnKey <span class=\"token operator\">===</span> <span class=\"token string\">'age'</span> <span class=\"token operator\">&amp;&amp;</span> sortedInfo<span class=\"token punctuation\">.</span>order<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n      filters<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span> text<span class=\"token punctuation\">:</span> <span class=\"token string\">'London'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'London'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> text<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      filteredValue<span class=\"token punctuation\">:</span> filteredInfo<span class=\"token punctuation\">.</span>address <span class=\"token operator\">||</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n      onFilter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>address<span class=\"token punctuation\">.</span><span class=\"token function\">includes</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      sorter<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> a<span class=\"token punctuation\">.</span>address<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> b<span class=\"token punctuation\">.</span>address<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">,</span>\n      sortOrder<span class=\"token punctuation\">:</span> sortedInfo<span class=\"token punctuation\">.</span>columnKey <span class=\"token operator\">===</span> <span class=\"token string\">'address'</span> <span class=\"token operator\">&amp;&amp;</span> sortedInfo<span class=\"token punctuation\">.</span>order<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>table-operations<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>setAgeSort<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Sort age<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>clearFilters<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Clear filters<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>clearAll<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Clear filters and sorters<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }];

  var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, App);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        filteredInfo: null,
        sortedInfo: null
      }, _this.handleChange = function (pagination, filters, sorter) {
        console.log('Various parameters', pagination, filters, sorter);

        _this.setState({
          filteredInfo: filters,
          sortedInfo: sorter
        });
      }, _this.clearFilters = function () {
        _this.setState({
          filteredInfo: null
        });
      }, _this.clearAll = function () {
        _this.setState({
          filteredInfo: null,
          sortedInfo: null
        });
      }, _this.setAgeSort = function () {
        _this.setState({
          sortedInfo: {
            order: 'descend',
            columnKey: 'age'
          }
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
      key: "render",
      value: function render() {
        var _state = this.state,
            sortedInfo = _state.sortedInfo,
            filteredInfo = _state.filteredInfo;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        var columns = [{
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          filters: [{
            text: 'Joe',
            value: 'Joe'
          }, {
            text: 'Jim',
            value: 'Jim'
          }],
          filteredValue: filteredInfo.name || null,
          onFilter: function onFilter(value, record) {
            return record.name.includes(value);
          },
          sorter: function sorter(a, b) {
            return a.name.length - b.name.length;
          },
          sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order
        }, {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          sorter: function sorter(a, b) {
            return a.age - b.age;
          },
          sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order
        }, {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
          filters: [{
            text: 'London',
            value: 'London'
          }, {
            text: 'New York',
            value: 'New York'
          }],
          filteredValue: filteredInfo.address || null,
          onFilter: function onFilter(value, record) {
            return record.address.includes(value);
          },
          sorter: function sorter(a, b) {
            return a.address.length - b.address.length;
          },
          sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order
        }];
        return React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            {
              className: "table-operations"
            },
            React.createElement(
              _antd.Button,
              {
                onClick: this.setAgeSort
              },
              "Sort age"
            ),
            React.createElement(
              _antd.Button,
              {
                onClick: this.clearFilters
              },
              "Clear filters"
            ),
            React.createElement(
              _antd.Button,
              {
                onClick: this.clearAll
              },
              "Clear filters and sorters"
            )
          ),
          React.createElement(_antd.Table, {
            columns: columns,
            dataSource: data,
            onChange: this.handleChange
          })
        );
      }
    }]);

    return App;
  }(React.Component);

  return React.createElement(App, null);
},
  "style": ".table-operations {\n  margin-bottom: 16px;\n}\n\n.table-operations > button {\n  margin-right: 8px;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.table-operations</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.table-operations</span> > button </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ 2442:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "集成 react-resizable 来实现可伸缩列。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Implement resizable column by integrate with react-resizable."
      ]
    ]
  },
  "meta": {
    "order": 26,
    "title": {
      "en-US": "Resizable column",
      "zh-CN": "可伸缩列"
    },
    "filename": "components/table/demo/resizable-column.md",
    "id": "components-table-demo-resizable-column"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Resizable <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react-resizable'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> ResizeableTitle <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> onResize<span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">,</span> <span class=\"token operator\">...</span>restProps <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> props<span class=\"token punctuation\">;</span>\n\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>width<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token operator\">&lt;</span>th <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>restProps<span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Resizable</span> <span class=\"token attr-name\">width</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>width<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">height</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">0</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onResize</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onResize<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token operator\">&lt;</span>th <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>restProps<span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Resizable</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    columns<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Date'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'date'</span><span class=\"token punctuation\">,</span>\n      width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Amount'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'amount'</span><span class=\"token punctuation\">,</span>\n      width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Type'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'type'</span><span class=\"token punctuation\">,</span>\n      width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Note'</span><span class=\"token punctuation\">,</span>\n      dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'note'</span><span class=\"token punctuation\">,</span>\n      width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Action'</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">'action'</span><span class=\"token punctuation\">,</span>\n      render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Delete<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  components <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    header<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n      cell<span class=\"token punctuation\">:</span> ResizeableTitle<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token punctuation\">:</span> <span class=\"token string\">'2018-02-11'</span><span class=\"token punctuation\">,</span>\n    amount<span class=\"token punctuation\">:</span> <span class=\"token number\">120</span><span class=\"token punctuation\">,</span>\n    type<span class=\"token punctuation\">:</span> <span class=\"token string\">'income'</span><span class=\"token punctuation\">,</span>\n    note<span class=\"token punctuation\">:</span> <span class=\"token string\">'transfer'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token punctuation\">:</span> <span class=\"token string\">'2018-03-11'</span><span class=\"token punctuation\">,</span>\n    amount<span class=\"token punctuation\">:</span> <span class=\"token number\">243</span><span class=\"token punctuation\">,</span>\n    type<span class=\"token punctuation\">:</span> <span class=\"token string\">'income'</span><span class=\"token punctuation\">,</span>\n    note<span class=\"token punctuation\">:</span> <span class=\"token string\">'transfer'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token punctuation\">:</span> <span class=\"token string\">'2018-04-11'</span><span class=\"token punctuation\">,</span>\n    amount<span class=\"token punctuation\">:</span> <span class=\"token number\">98</span><span class=\"token punctuation\">,</span>\n    type<span class=\"token punctuation\">:</span> <span class=\"token string\">'income'</span><span class=\"token punctuation\">,</span>\n    note<span class=\"token punctuation\">:</span> <span class=\"token string\">'transfer'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n  handleResize <span class=\"token operator\">=</span> index <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> size <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> columns <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> nextColumns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>columns<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n      nextColumns<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token operator\">...</span>nextColumns<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        width<span class=\"token punctuation\">:</span> size<span class=\"token punctuation\">.</span>width<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span> columns<span class=\"token punctuation\">:</span> nextColumns <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>columns<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>col<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      <span class=\"token operator\">...</span>col<span class=\"token punctuation\">,</span>\n      onHeaderCell<span class=\"token punctuation\">:</span> column <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        width<span class=\"token punctuation\">:</span> column<span class=\"token punctuation\">.</span>width<span class=\"token punctuation\">,</span>\n        onResize<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleResize</span><span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span>\n        <span class=\"token attr-name\">bordered</span>\n        <span class=\"token attr-name\">components</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>components<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  var _reactResizable = __webpack_require__(2443);

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  var ResizeableTitle = function ResizeableTitle(props) {
    var onResize = props.onResize,
        width = props.width,
        restProps = _objectWithoutProperties(props, ["onResize", "width"]);

    if (!width) {
      return React.createElement("th", restProps);
    }

    return React.createElement(
      _reactResizable.Resizable,
      {
        width: width,
        height: 0,
        onResize: onResize
      },
      React.createElement("th", restProps)
    );
  };

  var Demo = function (_React$Component) {
    _inherits(Demo, _React$Component);

    function Demo() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Demo);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        columns: [{
          title: 'Date',
          dataIndex: 'date',
          width: 200
        }, {
          title: 'Amount',
          dataIndex: 'amount',
          width: 100
        }, {
          title: 'Type',
          dataIndex: 'type',
          width: 100
        }, {
          title: 'Note',
          dataIndex: 'note',
          width: 100
        }, {
          title: 'Action',
          key: 'action',
          render: function render() {
            return React.createElement(
              "a",
              {
                href: "javascript:;"
              },
              "Delete"
            );
          }
        }]
      }, _this.components = {
        header: {
          cell: ResizeableTitle
        }
      }, _this.data = [{
        key: 0,
        date: '2018-02-11',
        amount: 120,
        type: 'income',
        note: 'transfer'
      }, {
        key: 1,
        date: '2018-03-11',
        amount: 243,
        type: 'income',
        note: 'transfer'
      }, {
        key: 2,
        date: '2018-04-11',
        amount: 98,
        type: 'income',
        note: 'transfer'
      }], _this.handleResize = function (index) {
        return function (e, _ref2) {
          var size = _ref2.size;

          _this.setState(function (_ref3) {
            var columns = _ref3.columns;
            var nextColumns = [].concat(_toConsumableArray(columns));
            nextColumns[index] = _extends({}, nextColumns[index], {
              width: size.width
            });
            return {
              columns: nextColumns
            };
          });
        };
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var columns = this.state.columns.map(function (col, index) {
          return _extends({}, col, {
            onHeaderCell: function onHeaderCell(column) {
              return {
                width: column.width,
                onResize: _this2.handleResize(index)
              };
            }
          });
        });
        return React.createElement(_antd.Table, {
          bordered: true,
          components: this.components,
          columns: columns,
          dataSource: this.data
        });
      }
    }]);

    return Demo;
  }(React.Component);

  return React.createElement(Demo, null);
},
  "style": "#components-table-demo-resizable-column .react-resizable {\n  position: relative;\n}\n\n#components-table-demo-resizable-column .react-resizable-handle {\n  position: absolute;\n  width: 10px;\n  height: 100%;\n  bottom: 0;\n  right: -5px;\n  cursor: col-resize;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-table-demo-resizable-column</span> <span class=\"token class\">.react-resizable</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token id\">#components-table-demo-resizable-column</span> <span class=\"token class\">.react-resizable-handle</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">10</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">right</span><span class=\"token punctuation\">:</span> -<span class=\"token number\">5</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">cursor</span><span class=\"token punctuation\">:</span> col-resize<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ 2443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function() {
  throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
};

module.exports.Resizable = __webpack_require__(2015).default;
module.exports.ResizableBox = __webpack_require__(2446).default;


/***/ }),

/***/ 2444:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(8), __webpack_require__(0));
	else if(typeof define === 'function' && define.amd)
		define(["react-dom", "react"], factory);
	else if(typeof exports === 'object')
		exports["ReactDraggable"] = factory(require("react-dom"), require("react"));
	else
		root["ReactDraggable"] = factory(root["ReactDOM"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findInArray = findInArray;
exports.isFunction = isFunction;
exports.isNum = isNum;
exports.int = int;
exports.dontSetMe = dontSetMe;

// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
function findInArray(array /*: Array<any> | TouchList*/, callback /*: Function*/) /*: any*/ {
  for (var i = 0, length = array.length; i < length; i++) {
    if (callback.apply(callback, [array[i], i, array])) return array[i];
  }
}

function isFunction(func /*: any*/) /*: boolean*/ {
  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
}

function isNum(num /*: any*/) /*: boolean*/ {
  return typeof num === 'number' && !isNaN(num);
}

function int(a /*: string*/) /*: number*/ {
  return parseInt(a, 10);
}

function dontSetMe(props /*: Object*/, propName /*: string*/, componentName /*: string*/) {
  if (props[propName]) {
    return new Error('Invalid prop ' + propName + ' passed to ' + componentName + ' - do not set this, set it on the child.');
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.matchesSelector = matchesSelector;
exports.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
exports.addEvent = addEvent;
exports.removeEvent = removeEvent;
exports.outerHeight = outerHeight;
exports.outerWidth = outerWidth;
exports.innerHeight = innerHeight;
exports.innerWidth = innerWidth;
exports.offsetXYFromParent = offsetXYFromParent;
exports.createCSSTransform = createCSSTransform;
exports.createSVGTransform = createSVGTransform;
exports.getTouch = getTouch;
exports.getTouchIdentifier = getTouchIdentifier;
exports.addUserSelectStyles = addUserSelectStyles;
exports.removeUserSelectStyles = removeUserSelectStyles;
exports.styleHacks = styleHacks;
exports.addClassName = addClassName;
exports.removeClassName = removeClassName;

var _shims = __webpack_require__(0);

var _getPrefix = __webpack_require__(19);

var _getPrefix2 = _interopRequireDefault(_getPrefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*:: import type {ControlPosition, MouseTouchEvent} from './types';*/


var matchesSelectorFunc = '';
function matchesSelector(el /*: Node*/, selector /*: string*/) /*: boolean*/ {
  if (!matchesSelectorFunc) {
    matchesSelectorFunc = (0, _shims.findInArray)(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
      // $FlowIgnore: Doesn't think elements are indexable
      return (0, _shims.isFunction)(el[method]);
    });
  }

  // Might not be found entirely (not an Element?) - in that case, bail
  // $FlowIgnore: Doesn't think elements are indexable
  if (!(0, _shims.isFunction)(el[matchesSelectorFunc])) return false;

  // $FlowIgnore: Doesn't think elements are indexable
  return el[matchesSelectorFunc](selector);
}

// Works up the tree to the draggable itself attempting to match selector.
function matchesSelectorAndParentsTo(el /*: Node*/, selector /*: string*/, baseNode /*: Node*/) /*: boolean*/ {
  var node = el;
  do {
    if (matchesSelector(node, selector)) return true;
    if (node === baseNode) return false;
    node = node.parentNode;
  } while (node);

  return false;
}

function addEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
  if (!el) {
    return;
  }
  if (el.attachEvent) {
    el.attachEvent('on' + event, handler);
  } else if (el.addEventListener) {
    el.addEventListener(event, handler, true);
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = handler;
  }
}

function removeEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
  if (!el) {
    return;
  }
  if (el.detachEvent) {
    el.detachEvent('on' + event, handler);
  } else if (el.removeEventListener) {
    el.removeEventListener(event, handler, true);
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = null;
  }
}

function outerHeight(node /*: HTMLElement*/) /*: number*/ {
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetTop which is including margin. See getBoundPosition
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height += (0, _shims.int)(computedStyle.borderTopWidth);
  height += (0, _shims.int)(computedStyle.borderBottomWidth);
  return height;
}

function outerWidth(node /*: HTMLElement*/) /*: number*/ {
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetLeft which is including margin. See getBoundPosition
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width += (0, _shims.int)(computedStyle.borderLeftWidth);
  width += (0, _shims.int)(computedStyle.borderRightWidth);
  return width;
}
function innerHeight(node /*: HTMLElement*/) /*: number*/ {
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height -= (0, _shims.int)(computedStyle.paddingTop);
  height -= (0, _shims.int)(computedStyle.paddingBottom);
  return height;
}

function innerWidth(node /*: HTMLElement*/) /*: number*/ {
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width -= (0, _shims.int)(computedStyle.paddingLeft);
  width -= (0, _shims.int)(computedStyle.paddingRight);
  return width;
}

// Get from offsetParent
function offsetXYFromParent(evt /*: {clientX: number, clientY: number}*/, offsetParent /*: HTMLElement*/) /*: ControlPosition*/ {
  var isBody = offsetParent === offsetParent.ownerDocument.body;
  var offsetParentRect = isBody ? { left: 0, top: 0 } : offsetParent.getBoundingClientRect();

  var x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left;
  var y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top;

  return { x: x, y: y };
}

function createCSSTransform(_ref) /*: Object*/ {
  var x = _ref.x,
      y = _ref.y;

  // Replace unitless items with px
  return _defineProperty({}, (0, _getPrefix.browserPrefixToKey)('transform', _getPrefix2.default), 'translate(' + x + 'px,' + y + 'px)');
}

function createSVGTransform(_ref3) /*: string*/ {
  var x = _ref3.x,
      y = _ref3.y;

  return 'translate(' + x + ',' + y + ')';
}

function getTouch(e /*: MouseTouchEvent*/, identifier /*: number*/) /*: ?{clientX: number, clientY: number}*/ {
  return e.targetTouches && (0, _shims.findInArray)(e.targetTouches, function (t) {
    return identifier === t.identifier;
  }) || e.changedTouches && (0, _shims.findInArray)(e.changedTouches, function (t) {
    return identifier === t.identifier;
  });
}

function getTouchIdentifier(e /*: MouseTouchEvent*/) /*: ?number*/ {
  if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
}

// User-select Hacks:
//
// Useful for preventing blue highlights all over everything when dragging.

// Note we're passing `document` b/c we could be iframed
function addUserSelectStyles(doc /*: ?Document*/) {
  if (!doc) return;
  var styleEl = doc.getElementById('react-draggable-style-el');
  if (!styleEl) {
    styleEl = doc.createElement('style');
    styleEl.type = 'text/css';
    styleEl.id = 'react-draggable-style-el';
    styleEl.innerHTML = '.react-draggable-transparent-selection *::-moz-selection {background: transparent;}\n';
    styleEl.innerHTML += '.react-draggable-transparent-selection *::selection {background: transparent;}\n';
    doc.getElementsByTagName('head')[0].appendChild(styleEl);
  }
  if (doc.body) addClassName(doc.body, 'react-draggable-transparent-selection');
}

function removeUserSelectStyles(doc /*: ?Document*/) {
  try {
    if (doc && doc.body) removeClassName(doc.body, 'react-draggable-transparent-selection');
    window.getSelection().removeAllRanges(); // remove selection caused by scroll
  } catch (e) {
    // probably IE
  }
}

function styleHacks() /*: Object*/ {
  var childStyle /*: Object*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // Workaround IE pointer events; see #51
  // https://github.com/mzabriskie/react-draggable/issues/51#issuecomment-103488278
  return _extends({
    touchAction: 'none'
  }, childStyle);
}

function addClassName(el /*: HTMLElement*/, className /*: string*/) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    if (!el.className.match(new RegExp('(?:^|\\s)' + className + '(?!\\S)'))) {
      el.className += ' ' + className;
    }
  }
}

function removeClassName(el /*: HTMLElement*/, className /*: string*/) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g'), '');
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(14)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(17)();
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(1);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBoundPosition = getBoundPosition;
exports.snapToGrid = snapToGrid;
exports.canDragX = canDragX;
exports.canDragY = canDragY;
exports.getControlPosition = getControlPosition;
exports.createCoreData = createCoreData;
exports.createDraggableData = createDraggableData;

var _shims = __webpack_require__(0);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _domFns = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*:: import type Draggable from '../Draggable';*/
/*:: import type {Bounds, ControlPosition, DraggableData, MouseTouchEvent} from './types';*/
/*:: import type DraggableCore from '../DraggableCore';*/
function getBoundPosition(draggable /*: Draggable*/, x /*: number*/, y /*: number*/) /*: [number, number]*/ {
  // If no bounds, short-circuit and move on
  if (!draggable.props.bounds) return [x, y];

  // Clone new bounds
  var bounds = draggable.props.bounds;

  bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
  var node = findDOMNode(draggable);

  if (typeof bounds === 'string') {
    var ownerDocument = node.ownerDocument;

    var ownerWindow = ownerDocument.defaultView;
    var boundNode = void 0;
    if (bounds === 'parent') {
      boundNode = node.parentNode;
    } else {
      boundNode = ownerDocument.querySelector(bounds);
    }
    if (!(boundNode instanceof HTMLElement)) {
      throw new Error('Bounds selector "' + bounds + '" could not find an element.');
    }
    var nodeStyle = ownerWindow.getComputedStyle(node);
    var boundNodeStyle = ownerWindow.getComputedStyle(boundNode);
    // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.
    bounds = {
      left: -node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingLeft) + (0, _shims.int)(nodeStyle.marginLeft),
      top: -node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingTop) + (0, _shims.int)(nodeStyle.marginTop),
      right: (0, _domFns.innerWidth)(boundNode) - (0, _domFns.outerWidth)(node) - node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingRight) - (0, _shims.int)(nodeStyle.marginRight),
      bottom: (0, _domFns.innerHeight)(boundNode) - (0, _domFns.outerHeight)(node) - node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingBottom) - (0, _shims.int)(nodeStyle.marginBottom)
    };
  }

  // Keep x and y below right and bottom limits...
  if ((0, _shims.isNum)(bounds.right)) x = Math.min(x, bounds.right);
  if ((0, _shims.isNum)(bounds.bottom)) y = Math.min(y, bounds.bottom);

  // But above left and top limits.
  if ((0, _shims.isNum)(bounds.left)) x = Math.max(x, bounds.left);
  if ((0, _shims.isNum)(bounds.top)) y = Math.max(y, bounds.top);

  return [x, y];
}

function snapToGrid(grid /*: [number, number]*/, pendingX /*: number*/, pendingY /*: number*/) /*: [number, number]*/ {
  var x = Math.round(pendingX / grid[0]) * grid[0];
  var y = Math.round(pendingY / grid[1]) * grid[1];
  return [x, y];
}

function canDragX(draggable /*: Draggable*/) /*: boolean*/ {
  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
}

function canDragY(draggable /*: Draggable*/) /*: boolean*/ {
  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
}

// Get {x, y} positions from event.
function getControlPosition(e /*: MouseTouchEvent*/, touchIdentifier /*: ?number*/, draggableCore /*: DraggableCore*/) /*: ?ControlPosition*/ {
  var touchObj = typeof touchIdentifier === 'number' ? (0, _domFns.getTouch)(e, touchIdentifier) : null;
  if (typeof touchIdentifier === 'number' && !touchObj) return null; // not the right touch
  var node = findDOMNode(draggableCore);
  // User can provide an offsetParent if desired.
  var offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
  return (0, _domFns.offsetXYFromParent)(touchObj || e, offsetParent);
}

// Create an data object exposed by <DraggableCore>'s events
function createCoreData(draggable /*: DraggableCore*/, x /*: number*/, y /*: number*/) /*: DraggableData*/ {
  var state = draggable.state;
  var isStart = !(0, _shims.isNum)(state.lastX);
  var node = findDOMNode(draggable);

  if (isStart) {
    // If this is our first move, use the x and y as last coords.
    return {
      node: node,
      deltaX: 0, deltaY: 0,
      lastX: x, lastY: y,
      x: x, y: y
    };
  } else {
    // Otherwise calculate proper values.
    return {
      node: node,
      deltaX: x - state.lastX, deltaY: y - state.lastY,
      lastX: state.lastX, lastY: state.lastY,
      x: x, y: y
    };
  }
}

// Create an data exposed by <Draggable>'s events
function createDraggableData(draggable /*: Draggable*/, coreData /*: DraggableData*/) /*: DraggableData*/ {
  return {
    node: coreData.node,
    x: draggable.state.x + coreData.deltaX,
    y: draggable.state.y + coreData.deltaY,
    deltaX: coreData.deltaX,
    deltaY: coreData.deltaY,
    lastX: draggable.state.x,
    lastY: draggable.state.y
  };
}

// A lot faster than stringify/parse
function cloneBounds(bounds /*: Bounds*/) /*: Bounds*/ {
  return {
    left: bounds.left,
    top: bounds.top,
    right: bounds.right,
    bottom: bounds.bottom
  };
}

function findDOMNode(draggable /*: Draggable | DraggableCore*/) /*: HTMLElement*/ {
  var node = _reactDom2.default.findDOMNode(draggable);
  if (!node) {
    throw new Error('<DraggableCore>: Unmounted during event!');
  }
  // $FlowIgnore we can't assert on HTMLElement due to tests... FIXME
  return node;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _domFns = __webpack_require__(5);

var _positionFns = __webpack_require__(9);

var _shims = __webpack_require__(0);

var _log = __webpack_require__(11);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*:: import type {EventHandler, MouseTouchEvent} from './utils/types';*/


// Simple abstraction for dragging events names.
/*:: import type {Element as ReactElement} from 'react';*/
var eventsFor = {
  touch: {
    start: 'touchstart',
    move: 'touchmove',
    stop: 'touchend'
  },
  mouse: {
    start: 'mousedown',
    move: 'mousemove',
    stop: 'mouseup'
  }
};

// Default to mouse events.
var dragEventFor = eventsFor.mouse;

/*:: type DraggableCoreState = {
  dragging: boolean,
  lastX: number,
  lastY: number,
  touchIdentifier: ?number
};*/
/*:: export type DraggableBounds = {
  left: number,
  right: number,
  top: number,
  bottom: number,
};*/
/*:: export type DraggableData = {
  node: HTMLElement,
  x: number, y: number,
  deltaX: number, deltaY: number,
  lastX: number, lastY: number,
};*/
/*:: export type DraggableEventHandler = (e: MouseEvent, data: DraggableData) => void;*/
/*:: export type ControlPosition = {x: number, y: number};*/


//
// Define <DraggableCore>.
//
// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
// work well with libraries that require more control over the element.
//

/*:: export type DraggableCoreProps = {
  allowAnyClick: boolean,
  cancel: string,
  children: ReactElement<any>,
  disabled: boolean,
  enableUserSelectHack: boolean,
  offsetParent: HTMLElement,
  grid: [number, number],
  handle: string,
  onStart: DraggableEventHandler,
  onDrag: DraggableEventHandler,
  onStop: DraggableEventHandler,
  onMouseDown: (e: MouseEvent) => void,
};*/

var DraggableCore = function (_React$Component) {
  _inherits(DraggableCore, _React$Component);

  function DraggableCore() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DraggableCore);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DraggableCore.__proto__ || Object.getPrototypeOf(DraggableCore)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dragging: false,
      // Used while dragging to determine deltas.
      lastX: NaN, lastY: NaN,
      touchIdentifier: null
    }, _this.handleDragStart = function (e) {
      // Make it possible to attach event handlers on top of this one.
      _this.props.onMouseDown(e);

      // Only accept left-clicks.
      if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false;

      // Get nodes. Be sure to grab relative document (could be iframed)
      var thisNode = _reactDom2.default.findDOMNode(_this);
      if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
        throw new Error('<DraggableCore> not mounted on DragStart!');
      }
      var ownerDocument = thisNode.ownerDocument;

      // Short circuit if handle or cancel prop was provided and selector doesn't match.

      if (_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !(0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.handle, thisNode) || _this.props.cancel && (0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.cancel, thisNode)) {
        return;
      }

      // Set touch identifier in component state if this is a touch event. This allows us to
      // distinguish between individual touches on multitouch screens by identifying which
      // touchpoint was set to this element.
      var touchIdentifier = (0, _domFns.getTouchIdentifier)(e);
      _this.setState({ touchIdentifier: touchIdentifier });

      // Get the current drag point from the event. This is used as the offset.
      var position = (0, _positionFns.getControlPosition)(e, touchIdentifier, _this);
      if (position == null) return; // not possible but satisfies flow
      var x = position.x,
          y = position.y;

      // Create an event object with all the data parents need to make a decision here.

      var coreEvent = (0, _positionFns.createCoreData)(_this, x, y);

      (0, _log2.default)('DraggableCore: handleDragStart: %j', coreEvent);

      // Call event handler. If it returns explicit false, cancel.
      (0, _log2.default)('calling', _this.props.onStart);
      var shouldUpdate = _this.props.onStart(e, coreEvent);
      if (shouldUpdate === false) return;

      // Add a style to the body to disable user-select. This prevents text from
      // being selected all over the page.
      if (_this.props.enableUserSelectHack) (0, _domFns.addUserSelectStyles)(ownerDocument);

      // Initiate dragging. Set the current x and y as offsets
      // so we know how much we've moved during the drag. This allows us
      // to drag elements around even if they have been moved, without issue.
      _this.setState({
        dragging: true,

        lastX: x,
        lastY: y
      });

      // Add events to the document directly so we catch when the user's mouse/touch moves outside of
      // this element. We use different events depending on whether or not we have detected that this
      // is a touch-capable device.
      (0, _domFns.addEvent)(ownerDocument, dragEventFor.move, _this.handleDrag);
      (0, _domFns.addEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
    }, _this.handleDrag = function (e) {

      // Prevent scrolling on mobile devices, like ipad/iphone.
      if (e.type === 'touchmove') e.preventDefault();

      // Get the current drag point from the event. This is used as the offset.
      var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _this);
      if (position == null) return;
      var x = position.x,
          y = position.y;

      // Snap to grid if prop has been provided

      if (Array.isArray(_this.props.grid)) {
        var _deltaX = x - _this.state.lastX,
            _deltaY = y - _this.state.lastY;

        var _snapToGrid = (0, _positionFns.snapToGrid)(_this.props.grid, _deltaX, _deltaY);

        var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);

        _deltaX = _snapToGrid2[0];
        _deltaY = _snapToGrid2[1];

        if (!_deltaX && !_deltaY) return; // skip useless drag
        x = _this.state.lastX + _deltaX, y = _this.state.lastY + _deltaY;
      }

      var coreEvent = (0, _positionFns.createCoreData)(_this, x, y);

      (0, _log2.default)('DraggableCore: handleDrag: %j', coreEvent);

      // Call event handler. If it returns explicit false, trigger end.
      var shouldUpdate = _this.props.onDrag(e, coreEvent);
      if (shouldUpdate === false) {
        try {
          // $FlowIgnore
          _this.handleDragStop(new MouseEvent('mouseup'));
        } catch (err) {
          // Old browsers
          var event = ((document.createEvent('MouseEvents') /*: any*/) /*: MouseTouchEvent*/);
          // I see why this insanity was deprecated
          // $FlowIgnore
          event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
          _this.handleDragStop(event);
        }
        return;
      }

      _this.setState({
        lastX: x,
        lastY: y
      });
    }, _this.handleDragStop = function (e) {
      if (!_this.state.dragging) return;

      var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _this);
      if (position == null) return;
      var x = position.x,
          y = position.y;

      var coreEvent = (0, _positionFns.createCoreData)(_this, x, y);

      var thisNode = _reactDom2.default.findDOMNode(_this);
      if (thisNode) {
        // Remove user-select hack
        if (_this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(thisNode.ownerDocument);
      }

      (0, _log2.default)('DraggableCore: handleDragStop: %j', coreEvent);

      // Reset the el.
      _this.setState({
        dragging: false,
        lastX: NaN,
        lastY: NaN
      });

      // Call event handler
      _this.props.onStop(e, coreEvent);

      if (thisNode) {
        // Remove event handlers
        (0, _log2.default)('DraggableCore: Removing handlers');
        (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.move, _this.handleDrag);
        (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.stop, _this.handleDragStop);
      }
    }, _this.onMouseDown = function (e) {
      dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse

      return _this.handleDragStart(e);
    }, _this.onMouseUp = function (e) {
      dragEventFor = eventsFor.mouse;

      return _this.handleDragStop(e);
    }, _this.onTouchStart = function (e) {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;

      return _this.handleDragStart(e);
    }, _this.onTouchEnd = function (e) {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;

      return _this.handleDragStop(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DraggableCore, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // Remove any leftover event handlers. Remove both touch and mouse handlers in case
      // some browser quirk caused a touch event to fire during a mouse move, or vice versa.
      var thisNode = _reactDom2.default.findDOMNode(this);
      if (thisNode) {
        var ownerDocument = thisNode.ownerDocument;

        (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
        if (this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(ownerDocument);
      }
    }

    // Same as onMouseDown (start drag), but now consider this a touch device.

  }, {
    key: 'render',
    value: function render() {
      // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)
      return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
        style: (0, _domFns.styleHacks)(this.props.children.props.style),

        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        onMouseUp: this.onMouseUp,
        onTouchEnd: this.onTouchEnd
      });
    }
  }]);

  return DraggableCore;
}(_react2.default.Component);

DraggableCore.displayName = 'DraggableCore';
DraggableCore.propTypes = {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: _propTypes2.default.bool,

  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: _propTypes2.default.bool,

  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: _propTypes2.default.bool,

  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function offsetParent(props /*: DraggableCoreProps*/, propName /*: $Keys<DraggableCoreProps>*/) {
    if (process.browser === true && props[propName] && props[propName].nodeType !== 1) {
      throw new Error('Draggable\'s offsetParent must be a DOM Node.');
    }
  },

  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: _propTypes2.default.arrayOf(_propTypes2.default.number),

  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: _propTypes2.default.string,

  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: _propTypes2.default.string,

  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: _propTypes2.default.func,

  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: _propTypes2.default.func,

  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: _propTypes2.default.func,

  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: _propTypes2.default.func,

  /**
   * These properties should be defined on the child, not here.
   */
  className: _shims.dontSetMe,
  style: _shims.dontSetMe,
  transform: _shims.dontSetMe
};
DraggableCore.defaultProps = {
  allowAnyClick: false, // by default only accept left click
  cancel: null,
  disabled: false,
  enableUserSelectHack: true,
  offsetParent: null,
  handle: null,
  grid: null,
  transform: null,
  onStart: function onStart() {},
  onDrag: function onDrag() {},
  onStop: function onStop() {},
  onMouseDown: function onMouseDown() {}
};
exports.default = DraggableCore;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = log;

/*eslint no-console:0*/
function log() {
  var _console;

  if (undefined) (_console = console).log.apply(_console, arguments);
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Draggable = __webpack_require__(13).default;

// Previous versions of this lib exported <Draggable> as the root export. As to not break
// them, or TypeScript, we export *both* as the root and as 'default'.
// See https://github.com/mzabriskie/react-draggable/pull/254
// and https://github.com/mzabriskie/react-draggable/issues/266
module.exports = Draggable;
module.exports.default = Draggable;
module.exports.DraggableCore = __webpack_require__(10).default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(18);

var _classnames2 = _interopRequireDefault(_classnames);

var _domFns = __webpack_require__(5);

var _positionFns = __webpack_require__(9);

var _shims = __webpack_require__(0);

var _DraggableCore = __webpack_require__(10);

var _DraggableCore2 = _interopRequireDefault(_DraggableCore);

var _log = __webpack_require__(11);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*:: import type {ControlPosition, DraggableBounds, DraggableCoreProps} from './DraggableCore';*/
/*:: import type {DraggableEventHandler} from './utils/types';*/
/*:: import type {Element as ReactElement} from 'react';*/
/*:: type DraggableState = {
  dragging: boolean,
  dragged: boolean,
  x: number, y: number,
  slackX: number, slackY: number,
  isElementSVG: boolean
};*/


//
// Define <Draggable>
//

/*:: export type DraggableProps = {
  ...$Exact<DraggableCoreProps>,
  axis: 'both' | 'x' | 'y' | 'none',
  bounds: DraggableBounds | string | false,
  defaultClassName: string,
  defaultClassNameDragging: string,
  defaultClassNameDragged: string,
  defaultPosition: ControlPosition,
  position: ControlPosition,
};*/

var Draggable = function (_React$Component) {
  _inherits(Draggable, _React$Component);

  function Draggable(props /*: DraggableProps*/) {
    _classCallCheck(this, Draggable);

    var _this = _possibleConstructorReturn(this, (Draggable.__proto__ || Object.getPrototypeOf(Draggable)).call(this, props));

    _this.onDragStart = function (e, coreData) {
      (0, _log2.default)('Draggable: onDragStart: %j', coreData);

      // Short-circuit if user's callback killed it.
      var shouldStart = _this.props.onStart(e, (0, _positionFns.createDraggableData)(_this, coreData));
      // Kills start event on core as well, so move handlers are never bound.
      if (shouldStart === false) return false;

      _this.setState({ dragging: true, dragged: true });
    };

    _this.onDrag = function (e, coreData) {
      if (!_this.state.dragging) return false;
      (0, _log2.default)('Draggable: onDrag: %j', coreData);

      var uiData = (0, _positionFns.createDraggableData)(_this, coreData);

      var newState /*: $Shape<DraggableState>*/ = {
        x: uiData.x,
        y: uiData.y
      };

      // Keep within bounds.
      if (_this.props.bounds) {
        // Save original x and y.
        var _x = newState.x,
            _y = newState.y;

        // Add slack to the values used to calculate bound position. This will ensure that if
        // we start removing slack, the element won't react to it right away until it's been
        // completely removed.

        newState.x += _this.state.slackX;
        newState.y += _this.state.slackY;

        // Get bound position. This will ceil/floor the x and y within the boundaries.

        var _getBoundPosition = (0, _positionFns.getBoundPosition)(_this, newState.x, newState.y),
            _getBoundPosition2 = _slicedToArray(_getBoundPosition, 2),
            newStateX = _getBoundPosition2[0],
            newStateY = _getBoundPosition2[1];

        newState.x = newStateX;
        newState.y = newStateY;

        // Recalculate slack by noting how much was shaved by the boundPosition handler.
        newState.slackX = _this.state.slackX + (_x - newState.x);
        newState.slackY = _this.state.slackY + (_y - newState.y);

        // Update the event we fire to reflect what really happened after bounds took effect.
        uiData.x = newState.x;
        uiData.y = newState.y;
        uiData.deltaX = newState.x - _this.state.x;
        uiData.deltaY = newState.y - _this.state.y;
      }

      // Short-circuit if user's callback killed it.
      var shouldUpdate = _this.props.onDrag(e, uiData);
      if (shouldUpdate === false) return false;

      _this.setState(newState);
    };

    _this.onDragStop = function (e, coreData) {
      if (!_this.state.dragging) return false;

      // Short-circuit if user's callback killed it.
      var shouldStop = _this.props.onStop(e, (0, _positionFns.createDraggableData)(_this, coreData));
      if (shouldStop === false) return false;

      (0, _log2.default)('Draggable: onDragStop: %j', coreData);

      var newState /*: $Shape<DraggableState>*/ = {
        dragging: false,
        slackX: 0,
        slackY: 0
      };

      // If this is a controlled component, the result of this operation will be to
      // revert back to the old position. We expect a handler on `onDragStop`, at the least.
      var controlled = Boolean(_this.props.position);
      if (controlled) {
        var _this$props$position = _this.props.position,
            _x2 = _this$props$position.x,
            _y2 = _this$props$position.y;

        newState.x = _x2;
        newState.y = _y2;
      }

      _this.setState(newState);
    };

    _this.state = {
      // Whether or not we are currently dragging.
      dragging: false,

      // Whether or not we have been dragged before.
      dragged: false,

      // Current transform x and y.
      x: props.position ? props.position.x : props.defaultPosition.x,
      y: props.position ? props.position.y : props.defaultPosition.y,

      // Used for compensating for out-of-bounds drags
      slackX: 0, slackY: 0,

      // Can only determine if SVG after mounting
      isElementSVG: false
    };
    return _this;
  }

  _createClass(Draggable, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.position && !(this.props.onDrag || this.props.onStop)) {
        // eslint-disable-next-line
        console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' + 'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the ' + '`position` of this element.');
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Check to see if the element passed is an instanceof SVGElement
      if (typeof window.SVGElement !== 'undefined' && _reactDom2.default.findDOMNode(this) instanceof window.SVGElement) {
        this.setState({ isElementSVG: true });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps /*: Object*/) {
      // Set x/y if position has changed
      if (nextProps.position && (!this.props.position || nextProps.position.x !== this.props.position.x || nextProps.position.y !== this.props.position.y)) {
        this.setState({ x: nextProps.position.x, y: nextProps.position.y });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.setState({ dragging: false }); // prevents invariant if unmounted while dragging
    }
  }, {
    key: 'render',
    value: function render() /*: ReactElement<any>*/ {
      var _classNames;

      var style = {},
          svgTransform = null;

      // If this is controlled, we don't want to move it - unless it's dragging.
      var controlled = Boolean(this.props.position);
      var draggable = !controlled || this.state.dragging;

      var position = this.props.position || this.props.defaultPosition;
      var transformOpts = {
        // Set left if horizontal drag is enabled
        x: (0, _positionFns.canDragX)(this) && draggable ? this.state.x : position.x,

        // Set top if vertical drag is enabled
        y: (0, _positionFns.canDragY)(this) && draggable ? this.state.y : position.y
      };

      // If this element was SVG, we use the `transform` attribute.
      if (this.state.isElementSVG) {
        svgTransform = (0, _domFns.createSVGTransform)(transformOpts);
      } else {
        // Add a CSS transform to move the element around. This allows us to move the element around
        // without worrying about whether or not it is relatively or absolutely positioned.
        // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
        // has a clean slate.
        style = (0, _domFns.createCSSTransform)(transformOpts);
      }

      var _props = this.props,
          defaultClassName = _props.defaultClassName,
          defaultClassNameDragging = _props.defaultClassNameDragging,
          defaultClassNameDragged = _props.defaultClassNameDragged;


      var children = _react2.default.Children.only(this.props.children);

      // Mark with class while dragging
      var className = (0, _classnames2.default)(children.props.className || '', defaultClassName, (_classNames = {}, _defineProperty(_classNames, defaultClassNameDragging, this.state.dragging), _defineProperty(_classNames, defaultClassNameDragged, this.state.dragged), _classNames));

      // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)
      return _react2.default.createElement(
        _DraggableCore2.default,
        _extends({}, this.props, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }),
        _react2.default.cloneElement(children, {
          className: className,
          style: _extends({}, children.props.style, style),
          transform: svgTransform
        })
      );
    }
  }]);

  return Draggable;
}(_react2.default.Component);

Draggable.displayName = 'Draggable';
Draggable.propTypes = _extends({}, _DraggableCore2.default.propTypes, {

  /**
   * `axis` determines which axis the draggable can move.
   *
   *  Note that all callbacks will still return data as normal. This only
   *  controls flushing to the DOM.
   *
   * 'both' allows movement horizontally and vertically.
   * 'x' limits movement to horizontal axis.
   * 'y' limits movement to vertical axis.
   * 'none' limits all movement.
   *
   * Defaults to 'both'.
   */
  axis: _propTypes2.default.oneOf(['both', 'x', 'y', 'none']),

  /**
   * `bounds` determines the range of movement available to the element.
   * Available values are:
   *
   * 'parent' restricts movement within the Draggable's parent node.
   *
   * Alternatively, pass an object with the following properties, all of which are optional:
   *
   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
   *
   * All values are in px.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable bounds={{right: 300, bottom: 300}}>
   *              <div>Content</div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  bounds: _propTypes2.default.oneOfType([_propTypes2.default.shape({
    left: _propTypes2.default.number,
    right: _propTypes2.default.number,
    top: _propTypes2.default.number,
    bottom: _propTypes2.default.number
  }), _propTypes2.default.string, _propTypes2.default.oneOf([false])]),

  defaultClassName: _propTypes2.default.string,
  defaultClassNameDragging: _propTypes2.default.string,
  defaultClassNameDragged: _propTypes2.default.string,

  /**
   * `defaultPosition` specifies the x and y that the dragged item should start at
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable defaultPosition={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  defaultPosition: _propTypes2.default.shape({
    x: _propTypes2.default.number,
    y: _propTypes2.default.number
  }),

  /**
   * `position`, if present, defines the current position of the element.
   *
   *  This is similar to how form elements in React work - if no `position` is supplied, the component
   *  is uncontrolled.
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable position={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  position: _propTypes2.default.shape({
    x: _propTypes2.default.number,
    y: _propTypes2.default.number
  }),

  /**
   * These properties should be defined on the child, not here.
   */
  className: _shims.dontSetMe,
  style: _shims.dontSetMe,
  transform: _shims.dontSetMe
});
Draggable.defaultProps = _extends({}, _DraggableCore2.default.defaultProps, {
  axis: 'both',
  bounds: false,
  defaultClassName: 'react-draggable',
  defaultClassNameDragging: 'react-draggable-dragging',
  defaultClassNameDragged: 'react-draggable-dragged',
  defaultPosition: { x: 0, y: 0 },
  position: null
});
exports.default = Draggable;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(1);
var invariant = __webpack_require__(2);
var warning = __webpack_require__(8);
var assign = __webpack_require__(15);

var ReactPropTypesSecret = __webpack_require__(3);
var checkPropTypes = __webpack_require__(16);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production') {
  var invariant = __webpack_require__(2);
  var warning = __webpack_require__(8);
  var ReactPropTypesSecret = __webpack_require__(3);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (Object({"DRAGGABLE_DEBUG":undefined}).NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(1);
var invariant = __webpack_require__(2);
var ReactPropTypesSecret = __webpack_require__(3);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrefix = getPrefix;
exports.browserPrefixToKey = browserPrefixToKey;
exports.browserPrefixToStyle = browserPrefixToStyle;
var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
function getPrefix() /*: string*/ {
  var prop /*: string*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

  // Checking specifically for 'window.document' is for pseudo-browser server-side
  // environments that define 'window' as the global context.
  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
  if (typeof window === 'undefined' || typeof window.document === 'undefined') return '';

  var style = window.document.documentElement.style;

  if (prop in style) return '';

  for (var i = 0; i < prefixes.length; i++) {
    if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
  }

  return '';
}

function browserPrefixToKey(prop /*: string*/, prefix /*: string*/) /*: string*/ {
  return prefix ? '' + prefix + kebabToTitleCase(prop) : prop;
}

function browserPrefixToStyle(prop /*: string*/, prefix /*: string*/) /*: string*/ {
  return prefix ? '-' + prefix.toLowerCase() + '-' + prop : prop;
}

function kebabToTitleCase(str /*: string*/) /*: string*/ {
  var out = '';
  var shouldCapitalize = true;
  for (var i = 0; i < str.length; i++) {
    if (shouldCapitalize) {
      out += str[i].toUpperCase();
      shouldCapitalize = false;
    } else if (str[i] === '-') {
      shouldCapitalize = true;
    } else {
      out += str[i];
    }
  }
  return out;
}

// Default export is the prefix itself, like 'Moz', 'Webkit', etc
// Note that you may have to re-test for certain things; for instance, Chrome 50
// can handle unprefixed `transform`, but not unprefixed `user-select`
exports.default = getPrefix();

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })
/******/ ]);
});
//# sourceMappingURL=react-draggable.js.map

/***/ }),

/***/ 2445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// React.addons.cloneWithProps look-alike that merges style & className.
module.exports = function cloneElement(element, props) {
  if (props.style && element.props.style) {
    props.style = _extends({}, element.props.style, props.style);
  }
  if (props.className && element.props.className) {
    props.className = element.props.className + ' ' + props.className;
  }
  return _react2.default.cloneElement(element, props);
};

/***/ }),

/***/ 2446:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Resizable = __webpack_require__(2015);

var _Resizable2 = _interopRequireDefault(_Resizable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// An example use of Resizable.
var ResizableBox = function (_React$Component) {
  _inherits(ResizableBox, _React$Component);

  function ResizableBox() {
    var _temp, _this, _ret;

    _classCallCheck(this, ResizableBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      width: _this.props.width,
      height: _this.props.height
    }, _this.onResize = function (e, data) {
      var size = data.size;
      var width = size.width,
          height = size.height;


      if (_this.props.onResize) {
        e.persist && e.persist();
        _this.setState(size, function () {
          return _this.props.onResize && _this.props.onResize(e, data);
        });
      } else {
        _this.setState(size);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ResizableBox.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.width !== this.props.width || nextProps.height !== this.props.height) {
      this.setState({
        width: nextProps.width,
        height: nextProps.height
      });
    }
  };

  ResizableBox.prototype.render = function render() {
    // Basic wrapper around a Resizable instance.
    // If you use Resizable directly, you are responsible for updating the child component
    // with a new width and height.
    var _props = this.props,
        handleSize = _props.handleSize,
        onResize = _props.onResize,
        onResizeStart = _props.onResizeStart,
        onResizeStop = _props.onResizeStop,
        draggableOpts = _props.draggableOpts,
        minConstraints = _props.minConstraints,
        maxConstraints = _props.maxConstraints,
        lockAspectRatio = _props.lockAspectRatio,
        axis = _props.axis,
        width = _props.width,
        height = _props.height,
        props = _objectWithoutProperties(_props, ['handleSize', 'onResize', 'onResizeStart', 'onResizeStop', 'draggableOpts', 'minConstraints', 'maxConstraints', 'lockAspectRatio', 'axis', 'width', 'height']);

    return _react2.default.createElement(
      _Resizable2.default,
      {
        handleSize: handleSize,
        width: this.state.width,
        height: this.state.height,
        onResizeStart: onResizeStart,
        onResize: this.onResize,
        onResizeStop: onResizeStop,
        draggableOpts: draggableOpts,
        minConstraints: minConstraints,
        maxConstraints: maxConstraints,
        lockAspectRatio: lockAspectRatio,
        axis: axis
      },
      _react2.default.createElement('div', _extends({ style: { width: this.state.width + 'px', height: this.state.height + 'px' } }, props))
    );
  };

  return ResizableBox;
}(_react2.default.Component);

ResizableBox.propTypes = {
  height: _propTypes2.default.number,
  width: _propTypes2.default.number
};
ResizableBox.defaultProps = {
  handleSize: [20, 20]
};
exports.default = ResizableBox;

/***/ }),

/***/ 2447:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "选择后进行操作，完成后清空选择，通过 ",
        [
          "code",
          "rowSelection.selectedRowKeys"
        ],
        " 来控制选中项。"
      ]
    ],
    "en-US": [
      [
        "p",
        "To perform operations and clear selections after selecting some rows, use ",
        [
          "code",
          "rowSelection.selectedRowKeys"
        ],
        " to control selected rows."
      ]
    ]
  },
  "meta": {
    "order": 3,
    "title": {
      "en-US": "Selection and operation",
      "zh-CN": "选择和操作"
    },
    "filename": "components/table/demo/row-selection-and-operation.md",
    "id": "components-table-demo-row-selection-and-operation"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">46</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  data<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`Edward King </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`London, Park Lane no. </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    selectedRowKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// Check here to configure the default column</span>\n    loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  start <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// ajax request after empty completing</span>\n    <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        selectedRowKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  onSelectChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>selectedRowKeys<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'selectedRowKeys changed: '</span><span class=\"token punctuation\">,</span> selectedRowKeys<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> selectedRowKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> loading<span class=\"token punctuation\">,</span> selectedRowKeys <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> rowSelection <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      selectedRowKeys<span class=\"token punctuation\">,</span>\n      onChange<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onSelectChange<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> hasSelected <span class=\"token operator\">=</span> selectedRowKeys<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span>\n            <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>start<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">disabled</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">!</span>hasSelected<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">loading</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>loading<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">></span></span>\n            Reload\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">{</span>hasSelected <span class=\"token operator\">?</span> <span class=\"token template-string\"><span class=\"token string\">`Selected </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>selectedRowKeys<span class=\"token punctuation\">.</span>length<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> items`</span></span> <span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">rowSelection</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>rowSelection<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var columns = [{
    title: 'Name',
    dataIndex: 'name'
  }, {
    title: 'Age',
    dataIndex: 'age'
  }, {
    title: 'Address',
    dataIndex: 'address'
  }];
  var data = [];

  for (var i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: "Edward King " + i,
      age: 32,
      address: "London, Park Lane no. " + i
    });
  }

  var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, App);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        selectedRowKeys: [],
        // Check here to configure the default column
        loading: false
      }, _this.start = function () {
        _this.setState({
          loading: true
        }); // ajax request after empty completing


        setTimeout(function () {
          _this.setState({
            selectedRowKeys: [],
            loading: false
          });
        }, 1000);
      }, _this.onSelectChange = function (selectedRowKeys) {
        console.log('selectedRowKeys changed: ', selectedRowKeys);

        _this.setState({
          selectedRowKeys: selectedRowKeys
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
      key: "render",
      value: function render() {
        var _state = this.state,
            loading = _state.loading,
            selectedRowKeys = _state.selectedRowKeys;
        var rowSelection = {
          selectedRowKeys: selectedRowKeys,
          onChange: this.onSelectChange
        };
        var hasSelected = selectedRowKeys.length > 0;
        return React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            {
              style: {
                marginBottom: 16
              }
            },
            React.createElement(
              _antd.Button,
              {
                type: "primary",
                onClick: this.start,
                disabled: !hasSelected,
                loading: loading
              },
              "Reload"
            ),
            React.createElement(
              "span",
              {
                style: {
                  marginLeft: 8
                }
              },
              hasSelected ? "Selected " + selectedRowKeys.length + " items" : ''
            )
          ),
          React.createElement(_antd.Table, {
            rowSelection: rowSelection,
            columns: columns,
            dataSource: data
          })
        );
      }
    }]);

    return App;
  }(React.Component);

  return React.createElement(App, null);
}
};

/***/ }),

/***/ 2448:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "通过 ",
        [
          "code",
          "rowSelection.selections"
        ],
        " 自定义选择项，默认不显示下拉选项，设为 ",
        [
          "code",
          "true"
        ],
        " 时显示默认选择项。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Use ",
        [
          "code",
          "rowSelection.selections"
        ],
        " custom selections, default no select dropdown, show default selections via setting to ",
        [
          "code",
          "true"
        ],
        "."
      ]
    ]
  },
  "meta": {
    "order": 4,
    "title": {
      "en-US": "Custom selection",
      "zh-CN": "自定义选择项"
    },
    "filename": "components/table/demo/row-selection-custom.md",
    "id": "components-table-demo-row-selection-custom"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">46</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  data<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`Edward King </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n    age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`London, Park Lane no. </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    selectedRowKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// Check here to configure the default column</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onSelectChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>selectedRowKeys<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'selectedRowKeys changed: '</span><span class=\"token punctuation\">,</span> selectedRowKeys<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> selectedRowKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> selectedRowKeys <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> rowSelection <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      selectedRowKeys<span class=\"token punctuation\">,</span>\n      onChange<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onSelectChange<span class=\"token punctuation\">,</span>\n      hideDefaultSelections<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      selections<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'all-data'</span><span class=\"token punctuation\">,</span>\n        text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Select All Data'</span><span class=\"token punctuation\">,</span>\n        onSelect<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n          <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n            selectedRowKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token function\">Array</span><span class=\"token punctuation\">(</span><span class=\"token number\">46</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">keys</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 0...45</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'odd'</span><span class=\"token punctuation\">,</span>\n        text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Select Odd Row'</span><span class=\"token punctuation\">,</span>\n        onSelect<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>changableRowKeys<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n          <span class=\"token keyword\">let</span> newSelectedRowKeys <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n          newSelectedRowKeys <span class=\"token operator\">=</span> changableRowKeys<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>index <span class=\"token operator\">%</span> <span class=\"token number\">2</span> <span class=\"token operator\">!==</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n              <span class=\"token keyword\">return</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span>\n            <span class=\"token keyword\">return</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">;</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> selectedRowKeys<span class=\"token punctuation\">:</span> newSelectedRowKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'even'</span><span class=\"token punctuation\">,</span>\n        text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Select Even Row'</span><span class=\"token punctuation\">,</span>\n        onSelect<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>changableRowKeys<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n          <span class=\"token keyword\">let</span> newSelectedRowKeys <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n          newSelectedRowKeys <span class=\"token operator\">=</span> changableRowKeys<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>index <span class=\"token operator\">%</span> <span class=\"token number\">2</span> <span class=\"token operator\">!==</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n              <span class=\"token keyword\">return</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span>\n            <span class=\"token keyword\">return</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">;</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> selectedRowKeys<span class=\"token punctuation\">:</span> newSelectedRowKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      onSelection<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onSelection<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">rowSelection</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>rowSelection<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var columns = [{
    title: 'Name',
    dataIndex: 'name'
  }, {
    title: 'Age',
    dataIndex: 'age'
  }, {
    title: 'Address',
    dataIndex: 'address'
  }];
  var data = [];

  for (var i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: "Edward King " + i,
      age: 32,
      address: "London, Park Lane no. " + i
    });
  }

  var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, App);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        selectedRowKeys: [] // Check here to configure the default column

      }, _this.onSelectChange = function (selectedRowKeys) {
        console.log('selectedRowKeys changed: ', selectedRowKeys);

        _this.setState({
          selectedRowKeys: selectedRowKeys
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var selectedRowKeys = this.state.selectedRowKeys;
        var rowSelection = {
          selectedRowKeys: selectedRowKeys,
          onChange: this.onSelectChange,
          hideDefaultSelections: true,
          selections: [{
            key: 'all-data',
            text: 'Select All Data',
            onSelect: function onSelect() {
              _this2.setState({
                selectedRowKeys: [].concat(_toConsumableArray(Array(46).keys())) // 0...45

              });
            }
          }, {
            key: 'odd',
            text: 'Select Odd Row',
            onSelect: function onSelect(changableRowKeys) {
              var newSelectedRowKeys = [];
              newSelectedRowKeys = changableRowKeys.filter(function (key, index) {
                if (index % 2 !== 0) {
                  return false;
                }

                return true;
              });

              _this2.setState({
                selectedRowKeys: newSelectedRowKeys
              });
            }
          }, {
            key: 'even',
            text: 'Select Even Row',
            onSelect: function onSelect(changableRowKeys) {
              var newSelectedRowKeys = [];
              newSelectedRowKeys = changableRowKeys.filter(function (key, index) {
                if (index % 2 !== 0) {
                  return true;
                }

                return false;
              });

              _this2.setState({
                selectedRowKeys: newSelectedRowKeys
              });
            }
          }],
          onSelection: this.onSelection
        };
        return React.createElement(_antd.Table, {
          rowSelection: rowSelection,
          columns: columns,
          dataSource: data
        });
      }
    }]);

    return App;
  }(React.Component);

  return React.createElement(App, null);
}
};

/***/ }),

/***/ 2449:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "第一列是联动的选择框。"
      ],
      [
        "blockquote",
        [
          "p",
          "默认点击 checkbox 触发选择行为，需要点击行触发可以参考例子：",
          [
            "a",
            {
              "title": null,
              "href": "https://codesandbox.io/s/000vqw38rl"
            },
            "https://codesandbox.io/s/000vqw38rl"
          ]
        ]
      ]
    ],
    "en-US": [
      [
        "p",
        "Rows can be selectable by making first column as a selectable column."
      ],
      [
        "blockquote",
        [
          "p",
          "selection happens when clicking checkbox defaultly. You can see ",
          [
            "a",
            {
              "title": null,
              "href": "https://codesandbox.io/s/000vqw38rl"
            },
            "https://codesandbox.io/s/000vqw38rl"
          ],
          " if you need row-click selection behavior."
        ]
      ]
    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "en-US": "selection",
      "zh-CN": "可选择"
    },
    "filename": "components/table/demo/row-selection.md",
    "id": "components-table-demo-row-selection"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  render<span class=\"token punctuation\">:</span> text <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>javascript:;<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'4'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Disabled User'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">99</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// rowSelection object indicates the need for row selection</span>\n<span class=\"token keyword\">const</span> rowSelection <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  onChange<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>selectedRowKeys<span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`selectedRowKeys: </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>selectedRowKeys<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span> <span class=\"token string\">'selectedRows: '</span><span class=\"token punctuation\">,</span> selectedRows<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  getCheckboxProps<span class=\"token punctuation\">:</span> record <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    disabled<span class=\"token punctuation\">:</span> record<span class=\"token punctuation\">.</span>name <span class=\"token operator\">===</span> <span class=\"token string\">'Disabled User'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// Column configuration not to be checked</span>\n    name<span class=\"token punctuation\">:</span> record<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">rowSelection</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>rowSelection<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var columns = [{
    title: 'Name',
    dataIndex: 'name',
    render: function render(text) {
      return React.createElement(
        "a",
        {
          href: "javascript:;"
        },
        text
      );
    }
  }, {
    title: 'Age',
    dataIndex: 'age'
  }, {
    title: 'Address',
    dataIndex: 'address'
  }];
  var data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park'
  }]; // rowSelection object indicates the need for row selection

  var rowSelection = {
    onChange: function onChange(selectedRowKeys, selectedRows) {
      console.log("selectedRowKeys: " + selectedRowKeys, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: function getCheckboxProps(record) {
      return {
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name
      };
    }
  };
  return React.createElement(_antd.Table, {
    rowSelection: rowSelection,
    columns: columns,
    dataSource: data
  });
}
};

/***/ }),

/***/ 2450:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "两种紧凑型的列表，小型列表只用于对话框内。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Two compacted table size: ",
        [
          "code",
          "middle"
        ],
        " and ",
        [
          "code",
          "small"
        ],
        ", ",
        [
          "code",
          "small"
        ],
        " size is used in Modal only."
      ]
    ]
  },
  "meta": {
    "order": 10,
    "title": {
      "en-US": "size",
      "zh-CN": "紧凑型"
    },
    "filename": "components/table/demo/size.md",
    "id": "components-table-demo-size"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Age'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'age'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Address'</span><span class=\"token punctuation\">,</span>\n  dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'address'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'John Brown'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'New York No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jim Green'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'London No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Joe Black'</span><span class=\"token punctuation\">,</span>\n  age<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n  address<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidney No. 1 Lake Park'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h4</span><span class=\"token punctuation\">></span></span>Middle size table<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h4</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>middle<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h4</span><span class=\"token punctuation\">></span></span>Small size table<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h4</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Table</span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var columns = [{
    title: 'Name',
    dataIndex: 'name'
  }, {
    title: 'Age',
    dataIndex: 'age'
  }, {
    title: 'Address',
    dataIndex: 'address'
  }];
  var data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }];
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h4",
      null,
      "Middle size table"
    ),
    React.createElement(_antd.Table, {
      columns: columns,
      dataSource: data,
      size: "middle"
    }),
    React.createElement(
      "h4",
      null,
      "Small size table"
    ),
    React.createElement(_antd.Table, {
      columns: columns,
      dataSource: data,
      size: "small"
    })
  );
},
  "style": "#components-table-demo-size h4 { margin-bottom: 16px; }"
};

/***/ })

});