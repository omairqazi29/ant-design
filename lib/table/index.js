'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _rcTable = require('rc-table');

var _rcTable2 = _interopRequireDefault(_rcTable);

var _dropdown = require('../dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _filterMenu = require('./filterMenu');

var _filterMenu2 = _interopRequireDefault(_filterMenu);

var _pagination = require('../pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

exports['default'] = _react2['default'].createClass({
  displayName: 'index',

  getInitialState: function getInitialState() {
    this.initDataSource(this.props.dataSource);

    var noPagination = this.props.pagination === false;
    var pagination = this.initPagination(this.props.pagination);

    return {
      selectedRowKeys: [],
      loading: false,
      pagination: pagination,
      noPagination: noPagination,
      data: []
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-table',
      useFixedHeader: false,
      rowSelection: null,
      size: 'normal'
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('pagination' in nextProps) {
      var noPagination = nextProps.pagination === false;
      this.setState({
        pagination: this.initPagination(nextProps.pagination),
        noPagination: noPagination
      });
    }
    if ('dataSource' in nextProps) {
      this.initDataSource(nextProps.dataSource);
      this.setState({
        data: nextProps.dataSource
      });
    }
  },
  initDataSource: function initDataSource(dataSource) {
    // 支持两种模式
    if (Array.isArray(dataSource)) {
      this.mode = 'local';
      // 保留原来的数据
      this.originDataSource = dataSource.slice(0);
    } else {
      this.mode = 'remote';
      this.dataSource = (0, _objectAssign2['default'])({
        resolve: function resolve(data) {
          return data || [];
        },
        getParams: function getParams() {},
        getPagination: function getPagination() {}
      }, dataSource);
    }
  },
  initPagination: function initPagination(pagination) {
    return (0, _objectAssign2['default'])({
      pageSize: 10,
      total: this.props.dataSource.length
    }, pagination);
  },
  toggleSortOrder: function toggleSortOrder(order, column) {
    var sortColumn = this.state.sortColumn;
    var sortOrder = this.state.sortOrder;
    var sorter = undefined;
    // 同时允许一列进行排序，否则会导致排序顺序的逻辑问题
    if (sortColumn) {
      sortColumn.className = '';
    }
    if (sortColumn !== column) {
      // 当前列未排序
      sortOrder = order;
      sortColumn = column;
      sortColumn.className = 'ant-table-column-sort';
    } else {
      // 当前列已排序
      if (sortOrder === order) {
        // 切换为未排序状态
        sortOrder = '';
        sortColumn = null;
      } else {
        // 切换为排序状态
        sortOrder = order;
        sortColumn.className = 'ant-table-column-sort';
      }
    }
    if (this.mode === 'local') {
      sorter = function () {
        var result = column.sorter.apply(this, arguments);
        if (sortOrder === 'ascend') {
          return result;
        } else if (sortOrder === 'descend') {
          return -result;
        }
      };
    }
    this.setState({
      sortOrder: sortOrder,
      sortColumn: sortColumn,
      sorter: sorter
    }, this.fetch);
  },
  handleFilter: function handleFilter(column) {
    var columnIndex = this.props.columns.indexOf(column);
    var filterFns = [];
    if (this.mode === 'local') {
      filterFns[columnIndex] = function (record) {
        if (column.selectedFilters.length === 0) {
          return true;
        }
        return column.selectedFilters.some(function (value) {
          return column.onFilter.call(this, value, record);
        });
      };
    }
    this.setState({
      filterFns: filterFns
    }, this.fetch);
  },
  handleSelect: function handleSelect(rowIndex, e) {
    var _this = this;

    var checked = e.target.checked;
    if (checked) {
      this.state.selectedRowKeys.push(rowIndex);
    } else {
      this.state.selectedRowKeys = this.state.selectedRowKeys.filter(function (i) {
        return rowIndex !== i;
      });
    }
    this.setState({
      selectedRowKeys: this.state.selectedRowKeys
    });
    if (this.props.rowSelection.onSelect) {
      var currentRow = this.state.data[rowIndex - 1];
      var selectedRows = this.state.data.filter(function (row, i) {
        return _this.state.selectedRowKeys.indexOf(i + 1) >= 0;
      });
      this.props.rowSelection.onSelect(currentRow, checked, selectedRows);
    }
  },
  handleSelectAllRow: function handleSelectAllRow(e) {
    var checked = e.target.checked;
    var selectedRowKeys = checked ? this.state.data.map(function (item, i) {
      return i + 1;
    }) : [];
    this.setState({
      selectedRowKeys: selectedRowKeys
    });
    if (this.props.rowSelection.onSelectAll) {
      var selectedRows = this.state.data.filter(function (row, i) {
        return selectedRowKeys.indexOf(i + 1) >= 0;
      });
      this.props.rowSelection.onSelectAll(checked, selectedRows);
    }
  },
  handlePageChange: function handlePageChange(current) {
    var pagination = this.state.pagination || {};
    if (current) {
      pagination.current = current;
    } else {
      pagination.current = pagination.current || 1;
    }
    this.setState({
      pagination: pagination
    }, this.fetch);
  },
  renderSelectionCheckBox: function renderSelectionCheckBox(value, record, index) {
    var rowIndex = index + 1; // 从 1 开始
    var checked = this.state.selectedRowKeys.indexOf(rowIndex) >= 0;
    return _react2['default'].createElement(_checkbox2['default'], { checked: checked, onChange: this.handleSelect.bind(this, rowIndex) });
  },
  renderRowSelection: function renderRowSelection() {
    var columns = this.props.columns;
    if (this.props.rowSelection) {
      var checked = this.state.data.every(function (item, i) {
        return this.state.selectedRowKeys.indexOf(i + 1) >= 0;
      }, this);
      var checkboxAll = _react2['default'].createElement(_checkbox2['default'], { checked: checked, onChange: this.handleSelectAllRow });
      var selectionColumn = {
        key: 'selection-column',
        title: checkboxAll,
        width: 60,
        render: this.renderSelectionCheckBox,
        className: 'ant-table-selection-column'
      };
      if (columns[0] && columns[0].key === 'selection-column') {
        columns[0] = selectionColumn;
      } else {
        columns.unshift(selectionColumn);
      }
    }
    return columns;
  },
  renderColumnsDropdown: function renderColumnsDropdown() {
    var _this2 = this;

    return this.props.columns.map(function (column) {
      if (!column.originTitle) {
        column.originTitle = column.title;
      }
      var filterDropdown = undefined,
          menus = undefined,
          sortButton = undefined;
      if (column.filters && column.filters.length > 0) {
        column.selectedFilters = column.selectedFilters || [];
        menus = _react2['default'].createElement(_filterMenu2['default'], { column: column, confirmFilter: _this2.handleFilter.bind(_this2, column) });
        var dropdownSelectedClass = '';
        if (column.selectedFilters && column.selectedFilters.length > 0) {
          dropdownSelectedClass = 'ant-table-filter-selected';
        }
        filterDropdown = _react2['default'].createElement(
          _dropdown2['default'],
          { trigger: "click",
            closeOnSelect: false,
            overlay: menus },
          _react2['default'].createElement('i', { title: "筛选", className: 'anticon anticon-bars ' + dropdownSelectedClass })
        );
      }
      if (column.sorter) {
        var isSortColumn = _this2.state.sortColumn === column;
        sortButton = _react2['default'].createElement(
          'div',
          { className: "ant-table-column-sorter" },
          _react2['default'].createElement(
            'span',
            { className: 'ant-table-column-sorter-up ' + (isSortColumn && _this2.state.sortOrder === 'ascend' ? 'on' : 'off'),
              title: "升序排序",
              onClick: _this2.toggleSortOrder.bind(_this2, 'ascend', column) },
            _react2['default'].createElement('i', { className: "anticon anticon-caret-up" })
          ),
          _react2['default'].createElement(
            'span',
            { className: 'ant-table-column-sorter-down ' + (isSortColumn && _this2.state.sortOrder === 'descend' ? 'on' : 'off'),
              title: "降序排序",
              onClick: _this2.toggleSortOrder.bind(_this2, 'descend', column) },
            _react2['default'].createElement('i', { className: "anticon anticon-caret-down" })
          )
        );
      }
      column.title = [column.originTitle, sortButton, filterDropdown];
      return column;
    });
  },
  renderPagination: function renderPagination() {
    // 强制不需要分页
    if (this.state.noPagination) {
      return '';
    }
    var classString = 'ant-table-pagination';
    if (this.props.size === 'small') {
      classString += ' mini';
    }
    return _react2['default'].createElement(_pagination2['default'], _extends({ className: classString,
      onChange: this.handlePageChange
    }, this.state.pagination));
  },
  prepareParamsArguments: function prepareParamsArguments() {
    // 准备筛选、排序、分页的参数
    var pagination = undefined;
    var filters = {};
    var sorter = {};
    pagination = this.state.pagination;
    this.props.columns.forEach(function (column) {
      if (column.dataIndex && column.selectedFilters && column.selectedFilters.length > 0) {
        filters[column.dataIndex] = column.selectedFilters;
      }
    });
    if (this.state.sortColumn && this.state.sortOrder && this.state.sortColumn.dataIndex) {
      sorter.field = this.state.sortColumn.dataIndex;
      sorter.order = this.state.sortOrder;
    }
    return [pagination, filters, sorter];
  },
  fetch: function fetch() {
    var _this3 = this;

    if (this.mode === 'remote') {
      (function () {
        // remote 模式使用 this.dataSource
        var dataSource = _this3.dataSource;
        _this3.setState({
          loading: true
        });
        _jquery2['default'].ajax({
          url: dataSource.url,
          data: dataSource.getParams.apply(_this3, _this3.prepareParamsArguments()) || {},
          headers: dataSource.headers,
          dataType: 'json',
          success: function success(result) {
            if (_this3.isMounted()) {
              var pagination = (0, _objectAssign2['default'])(_this3.state.pagination, dataSource.getPagination.call(_this3, result));
              _this3.setState({
                data: dataSource.resolve.call(_this3, result),
                pagination: pagination,
                loading: false
              });
            }
          },
          error: function error() {
            _this3.setState({
              loading: false
            });
          }
        });
      })();
    } else {
      (function () {
        var data = _this3.props.dataSource;
        var current = undefined,
            pageSize = undefined;
        // 如果没有分页的话，默认全部展示
        if (_this3.state.noPagination) {
          pageSize = Number.MAX_VALUE;
          current = 1;
        } else {
          pageSize = _this3.state.pagination.pageSize;
          current = _this3.state.pagination.current;
        }
        // 排序
        if (_this3.state.sortOrder && _this3.state.sorter) {
          data = data.sort(_this3.state.sorter);
        } else {
          data = _this3.originDataSource.slice();
        }
        // 筛选
        if (_this3.state.filterFns) {
          _this3.state.filterFns.forEach(function (filterFn) {
            if (typeof filterFn === 'function') {
              data = data.filter(filterFn);
            }
          });
        }
        // 分页
        // ---
        // 当数据量少于每页数量时，直接设置数据
        // 否则进行读取分页数据
        if (data.length > pageSize || pageSize === Number.MAX_VALUE) {
          data = data.filter(function (item, i) {
            if (i >= (current - 1) * pageSize && i < current * pageSize) {
              return item;
            }
          });
        }
        // 完成数据
        _this3.setState({
          data: data
        });
      })();
    }
  },
  componentDidMount: function componentDidMount() {
    this.handlePageChange();
  },
  render: function render() {
    this.props.columns = this.renderRowSelection();

    var classString = '';
    if (this.state.loading) {
      classString += ' ant-table-loading';
    }
    if (this.props.size === 'small') {
      classString += ' ant-table-small';
    }

    return _react2['default'].createElement(
      'div',
      { className: "clearfix" },
      _react2['default'].createElement(_rcTable2['default'], _extends({ data: this.state.data,
        columns: this.renderColumnsDropdown(),
        className: classString
      }, this.props)),
      this.renderPagination()
    );
  }
});
module.exports = exports['default'];