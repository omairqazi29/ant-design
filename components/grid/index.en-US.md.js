webpackJsonp([173,210],{

/***/ 1490:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "24 Grids System。"], ["h2", "Design concept"], ["div", {
	    "class": "grid-demo"
	  }, ["div", {
	    "class": "ant-row demo-row"
	  }, ["div", {
	    "class": "ant-col-24 demo-col demo-col-1"
	  }, "\n    100%\n  "]], ["div", {
	    "class": "ant-row demo-row"
	  }, ["div", {
	    "class": "ant-col-6 demo-col demo-col-2"
	  }, "\n    25%\n  "], ["div", {
	    "class": "ant-col-6 demo-col demo-col-3"
	  }, "\n    25%\n  "], ["div", {
	    "class": "ant-col-6 demo-col demo-col-2"
	  }, "\n    25%\n  "], ["div", {
	    "class": "ant-col-6 demo-col demo-col-3"
	  }, "\n    25%\n  "]], ["div", {
	    "class": "ant-row demo-row"
	  }, ["div", {
	    "class": "ant-col-8 demo-col demo-col-4"
	  }, "\n    33.33%\n  "], ["div", {
	    "class": "ant-col-8 demo-col demo-col-5"
	  }, "\n    33.33%\n  "], ["div", {
	    "class": "ant-col-8 demo-col demo-col-4"
	  }, "\n    33.33%\n  "]], ["div", {
	    "class": "ant-row demo-row"
	  }, ["div", {
	    "class": "ant-col-12 demo-col demo-col-1"
	  }, "\n    50%\n  "], ["div", {
	    "class": "ant-col-12 demo-col demo-col-3"
	  }, "\n    50%\n  "]], ["div", {
	    "class": "ant-row demo-row"
	  }, ["div", {
	    "class": "ant-col-16 demo-col demo-col-4"
	  }, "\n    66.66%\n  "], ["div", {
	    "class": "ant-col-8 demo-col demo-col-5"
	  }, "\n    33.33%\n  "]]], ["p", "In most business situations,Ant Design need solve a lot of information storage problems within the design area,so based on 12 Grids System,we divided the design area into 24 aliquots."], ["p", "We name the divided area as 'box'.We suggest that four boxes horizontal arrangement at most, one at least.Box on the proportion of the entire screen as above picture.To ensure that the level of visual comfort,we custom typography inside of the box based on the box unit."], ["h2", "Outline"], ["p", "In the grid system, we define the frame outside the information area based on row and column, to ensure that every area can steady arrangement."], ["p", "Following is a brief look at how it works:"], ["ul", ["li", ["p", "To establish a set of ", ["code", "column"], " in the horizontal direction by", ["code", "row"], " (abbreviated col)"]], ["li", ["p", "Direct your content elements should be placed in the ", ["code", "col"], ", and only", ["code", "col"], " as the ", ["code", "row"]]], ["li", ["p", "The column grid system is a value of 1-24 to represent its range spans.For example, three columns of equal width can be created by ", ["code", ".col-8"], "."]], ["li", ["p", "If a ", ["code", "row"], " sum of", ["code", "col"], " more than 24, then the extra ", ["code", "col"], " as a whole will start a new line arrangement."]]], ["h2", "Flex layout"], ["p", "Our grid systems support Flex layout to allow the child elements within the parent horizontal alignment - Left, center, right of abode, and other wide arrangement, decentralized arrangement. Between sub-elements and sub-elements, support the top of the aligned vertically centered, bottom-aligned manner. At the same time, you can define the order of elements by using 'order'."], ["p", "Flex layout is based on a grid 24 to define each \"box\" in width, but not rigidly adhere to the grid layout."]],
	  "meta": {
	    "category": "Components",
	    "type": "Layout",
	    "cols": 1,
	    "title": "Grid",
	    "filename": "components/grid/index.en-US.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Design-concept"
	  }, "Design concept"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Outline"
	  }, "Outline"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Flex-layout"
	  }, "Flex layout"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["p", "Ant Design layout component if it can not meet your needs, you can use the excellent layout of the components of the community:"], ["ul", ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://roylee0704.github.io/react-flexbox-grid/"
	  }, "react-flexbox-grid"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://whoisandie.github.io/react-blocks/"
	  }, "react-blocks"]]]], ["h3", "Row"], ["table", ["thead", ["tr", ["th", "Member"], ["th", "Explanation"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "gutter"], ["td", "grid spacing"], ["td", "number"], ["td", "0"]], ["tr", ["td", "type"], ["td", "layout mode, the optional ", ["code", "flex"], ", effective modern browser"], ["td", "string"], ["td"]], ["tr", ["td", "align"], ["td", "the vertical alignment of the layout of flex: ", ["code", "top"], " ", ["code", "middle"], " ", ["code", "bottom"]], ["td", "string"], ["td", ["code", "top"]]], ["tr", ["td", "justify"], ["td", "horizontal arrangement of the layout of flex: ", ["code", "start"], " ", ["code", "end"], " ", ["code", "center"], " ", ["code", "space-around"], " ", ["code", "space-between"]], ["td", "string"], ["td", ["code", "start"]]]]], ["h3", "Col"], ["table", ["thead", ["tr", ["th", "Member"], ["th", "Explanation"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "span"], ["td", "raster occupying the number of cells,0 corresponds to ", ["code", "display: none"]], ["td", "number"], ["td", "none"]], ["tr", ["td", "order"], ["td", "raster order, under ", ["code", "flex"], " effective layout mode"], ["td", "number"], ["td", "0"]], ["tr", ["td", "offset"], ["td", "the number of cells to the left of the grid spacing, no cell in grid spacing"], ["td", "number"], ["td", "0"]], ["tr", ["td", "push"], ["td", "the number of cells that raster move to the right"], ["td", "number"], ["td", "0"]], ["tr", ["td", "pull"], ["td", "the number of cells that raster move to the left"], ["td", "number"], ["td", "0"]]]]]
	};

/***/ }

});