'use strict';

var React = require('react');
var Slider = require('rc-slider');

var AntSlider = React.createClass({
  displayName: 'AntSlider',

  getDefaultProps: function getDefaultProps() {
    return {
      className: 'ant-slider'
    };
  },
  render: function render() {
    return React.createElement(Slider, this.props);
  }
});

module.exports = AntSlider;