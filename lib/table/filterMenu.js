'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcMenu = require('rc-menu');

var _rcMenu2 = _interopRequireDefault(_rcMenu);

exports['default'] = _react2['default'].createClass({
  displayName: 'filterMenu',

  getInitialState: function getInitialState() {
    return {
      selectedFilters: []
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      handleFilter: function handleFilter() {},
      column: null
    };
  },
  handleSelectFilter: function handleSelectFilter(selected) {
    this.state.selectedFilters.push(selected);
    this.setState({
      selectedFilters: this.state.selectedFilters
    });
  },
  handleDeselectFilter: function handleDeselectFilter(key) {
    var index = this.state.selectedFilters.indexOf(key);
    if (index !== -1) {
      this.state.selectedFilters.splice(index, 1);
    }
    this.setState({
      selectedFilters: this.state.selectedFilters
    });
  },
  handleClearFilters: function handleClearFilters() {
    this.setState({
      selectedFilters: []
    });
  },
  renderMenus: function renderMenus(items) {
    var menuItems = items.map(function (item) {
      return _react2['default'].createElement(
        _rcMenu2['default'].Item,
        { key: item.value },
        item.text
      );
    });
    return menuItems;
  },
  render: function render() {
    var column = this.props.column;
    column.selectedFilters = this.state.selectedFilters;
    return _react2['default'].createElement(
      _rcMenu2['default'],
      { multiple: true,
        prefixCls: "ant-dropdown-menu",
        className: "ant-table-filter-dropdown",
        onSelect: this.handleSelectFilter,
        onDeselect: this.handleDeselectFilter,
        selectedKeys: column.selectedFilters },
      this.renderMenus(column.filters),
      _react2['default'].createElement(_rcMenu2['default'].Divider, null),
      _react2['default'].createElement(
        _rcMenu2['default'].Item,
        { disabled: true },
        _react2['default'].createElement(
          'a',
          { className: "ant-table-filter-dropdown-link confirm",
            style: {
              cursor: 'pointer',
              pointerEvents: 'visible'
            },
            onClick: this.props.confirmFilter },
          '确定'
        ),
        _react2['default'].createElement(
          'a',
          { className: "ant-table-filter-dropdown-link clear",
            style: {
              cursor: 'pointer',
              pointerEvents: 'visible'
            },
            onClick: this.handleClearFilters },
          '清空'
        )
      )
    );
  }
});
module.exports = exports['default'];