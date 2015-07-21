(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("jquery"), require("antd"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "jquery", "antd"], factory);
	else if(typeof exports === 'object')
		exports["antd"] = factory(require("react"), require("jquery"), require("antd"));
	else
		root["antd"] = factory(root["React"], root["jQuery"], root["antd"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_66__, __WEBPACK_EXTERNAL_MODULE_274__, __WEBPACK_EXTERNAL_MODULE_313__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	window['css-animation'] = __webpack_require__(105);
	window['react-router'] = window.ReactRouter;
	var antd = __webpack_require__(313);
	
	var $ = __webpack_require__(274);
	var React = __webpack_require__(66);
	
	$(function () {
	  // auto complete for components
	  var Select = antd.Select;
	  var Option = Select.Option;
	  // 获取搜索数据
	  var searchData = window.ANT_COMPONENTS;
	
	  var AutoComplete = React.createClass({
	    displayName: 'AutoComplete',
	
	    getOptions: function getOptions() {
	      return searchData.map(function (s) {
	        return React.createElement(
	          Option,
	          { sData: s, key: s.title },
	          React.createElement(
	            'strong',
	            null,
	            s.title
	          ),
	          ' ',
	          React.createElement(
	            'span',
	            null,
	            s.desc
	          )
	        );
	      });
	    },
	
	    handleSelect: function handleSelect(value) {
	      location.pathname = '/components/' + value.replace(/([a-z])([A-Z])/g, function (m, m1, m2) {
	        return m1 + '-' + m2;
	      }).toLowerCase();
	    },
	
	    filterOption: function filterOption(input, option) {
	      return option.props.sData.title.toLowerCase().indexOf(input.toLowerCase()) !== -1 || option.props.sData.desc.indexOf(input) !== -1;
	    },
	
	    render: function render() {
	      return React.createElement(
	        Select,
	        { combobox: true, style: { width: 200 },
	          onSelect: this.handleSelect,
	          dropdownMenuStyle: { maxHeight: 200, overflow: 'auto' },
	          searchPlaceholder: '搜索组件...',
	          renderDropdownToBody: true,
	          filterOption: this.filterOption },
	        this.getOptions()
	      );
	    }
	  });
	
	  React.render(React.createElement(AutoComplete, null), document.getElementById('autoComplete'));
	});
	
	module.exports = antd;

/***/ },

/***/ 66:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_66__;

/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Event = __webpack_require__(106);
	var Css = __webpack_require__(107);
	
	var cssAnimation = function cssAnimation(node, transitionName, callback) {
	  var className = transitionName;
	  var activeClassName = className + '-active';
	
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    Css.removeClass(node, className);
	    Css.removeClass(node, activeClassName);
	
	    Event.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  Event.addEndEventListener(node, node.rcEndListener);
	
	  Css.addClass(node, className);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    Css.addClass(node, activeClassName);
	    node.rcAnimTimeout = null;
	  }, 0);
	};
	
	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    Event.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  Event.addEndEventListener(node, node.rcEndListener);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      node.style[s] = style[s];
	    }
	    node.rcAnimTimeout = null;
	  }, 0);
	};
	
	cssAnimation.setTransition = function (node, property, v) {
	  property = property || '';
	  ['Webkit', 'Moz', 'O',
	  // ms is special .... !
	  'ms'].forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};
	
	cssAnimation.addClass = Css.addClass;
	cssAnimation.removeClass = Css.removeClass;
	
	module.exports = cssAnimation;

/***/ },

/***/ 106:
/***/ function(module, exports) {

	
	'use strict';
	
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },
	
	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}
	
	if (typeof window !== 'undefined') {
	  detectEvents();
	}
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  endEvents: endEvents,
	
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	module.exports = TransitionEvents;

/***/ },

/***/ 107:
/***/ function(module, exports) {

	'use strict';
	
	var SPACE = ' ';
	var RE_CLASS = /[\n\t\r]/g;
	
	var norm = function norm(elemClass) {
	  return (SPACE + elemClass + SPACE).replace(RE_CLASS, SPACE);
	};
	
	module.exports = {
	  addClass: function addClass(elem, className) {
	    elem.className += ' ' + className;
	  },
	
	  removeClass: function removeClass(elem, needle) {
	    var elemClass = elem.className.trim();
	    var className = norm(elemClass);
	    needle = needle.trim();
	    needle = SPACE + needle + SPACE;
	    // 一个 cls 有可能多次出现：'link link2 link link3 link'
	    while (className.indexOf(needle) >= 0) {
	      className = className.replace(needle, SPACE);
	    }
	    elem.className = className.trim();
	  }
	};

/***/ },

/***/ 274:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_274__;

/***/ },

/***/ 313:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_313__;

/***/ }

/******/ })
});
;
//# sourceMappingURL=demo.js.map