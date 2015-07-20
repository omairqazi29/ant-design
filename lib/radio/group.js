'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var Radio = require('./index');

var AntRadioGroup = React.createClass({
  displayName: 'AntRadioGroup',

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-radio-group'
    };
  },
  getInitialState: function getInitialState() {
    var value = null;
    this.props.children.forEach(function (radio) {
      if (radio.props && radio.props.checked) {
        value = radio.props.value;
      }
      return false;
    });
    return {
      selectedValue: value
    };
  },
  render: function render() {
    var self = this;
    var props = self.props;
    var children = props.children.map(function (radio) {
      if (radio.props) {
        return React.createElement(Radio, _extends({}, radio.props, {
          onChange: self.onRadioChange,
          checked: self.state.selectedValue === radio.props.value
        }));
      }
      return radio;
    });
    return React.createElement(
      'div',
      { className: props.prefixCls },
      children
    );
  },
  onRadioChange: function onRadioChange(ev) {
    this.setState({
      selectedValue: ev.target.value
    });
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(ev);
    }
  }
});

module.exports = AntRadioGroup;