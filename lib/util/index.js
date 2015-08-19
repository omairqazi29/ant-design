'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _rcUtil = require('rc-util');

var transitionEndEvent = whichTransitionEvent();
exports.transitionEndEvent = transitionEndEvent;
var animationEndEvent = whichAnimationEvent();

exports.animationEndEvent = animationEndEvent;
function whichTransitionEvent() {
  var transitions = {
    'transition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'MozTransition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd'
  };
  for (var t in transitions) {
    if (t in document.documentElement.style) {
      return transitions[t];
    }
  }
  return false;
}

function whichAnimationEvent() {
  var animation = {
    'animation': 'animationend',
    'OAnimation': 'oAnimationEnd',
    'MozAnimation': 'animationend',
    'WebkitAnimation': 'webkitAnimationEnd'
  };
  for (var t in animation) {
    if (t in document.documentElement.style) {
      return animation[t];
    }
  }
  return false;
}

var addEventListenerOnce = function addEventListenerOnce(element, type, handler) {
  var eventListener = _rcUtil.Dom.addEventListener(element, type, function (event) {
    eventListener && eventListener.remove();
    handler(event);
  });
};
exports.addEventListenerOnce = addEventListenerOnce;