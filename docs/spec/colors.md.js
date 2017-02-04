webpackJsonp([77,211],{

/***/ 1145:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": [
	    "article",
	    [
	      "p",
	      "设计中对色彩的运用不仅应考虑品牌的识别性，还需达到信息传递、操作指引、交互反馈，或是强化和凸显某一个元素的目的。基于操作系统更注重高效、清晰等特点，Ant Design 的用色上更偏向简洁实用一些。在选择色彩时有以下三个注意点："
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          "色彩应与产品定位相匹配，且符合用户心理认知；"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "视觉层次应清晰分明，为重要行动点或关键信息定义一个主色，并建立视觉连续性；"
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "遵守 WCAG 2.0 的 标准，保证足够的对比度，让色彩更容易被视障碍（色盲）用户识别。"
	        ]
	      ]
	    ],
	    [
	      "h2",
	      "Ant Design Colors"
	    ],
	    [
	      "p",
	      "Ant Design PC 端的色板由 10 个由浅至深的色彩单元格组成，我们为部分色彩格定义了默认使用场景，用户在进行色彩配色时只需根据关键词选择一条色板即可得到一套完整的系统配色方案。在理论上，在 UI 设计中的色彩都应取自这份色板。"
	    ],
	    [
	      "p",
	      "经过设计师和程序员的精心调教，结合了色彩加白、加黑、加深，贝塞尔曲线，以及针对冷暖色的不同旋转角度，得出一套",
	      [
	        "a",
	        {
	          "title": null,
	          "href": "https://github.com/ant-design/ant-design/blob/734beb84ffc3f0469fbae1566aa8450f966cb261/components/style/color/colorPalette.less"
	        },
	        "色板生成算法"
	      ],
	      "。使用者只需指定主色，便可导出一条完整的渐变色板。"
	    ],
	    [
	      "p",
	      "Ant Design 的色板由 8 种基本色彩组成，每种基本色（第 6 格）又按上述算法衍生出 10 种渐变色。"
	    ],
	    [
	      "blockquote",
	      [
	        "p",
	        "注：在由浅至深的色板里，第 6 格色彩单元格普遍满足 ",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "http://leaverou.github.io/contrast-ratio/"
	          },
	          "WCAG 2.0"
	        ],
	        " 的 4.5:1 最小对比度（AA 级），我们将其定义为色板的默认品牌色。"
	      ]
	    ],
	    function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var rgbToHex = function rgbToHex(rgbString) {
	    var hexChars = '0123456789ABCDEF';
	    var rgb = rgbString.match(/\d+/g);
	    var r = parseInt(rgb[0]).toString(16);
	    var g = parseInt(rgb[1]).toString(16);
	    var b = parseInt(rgb[2]).toString(16);
	    r = r.length === 1 ? "0" + r : r;
	    g = g.length === 1 ? "0" + g : g;
	    b = b.length === 1 ? "0" + b : b;
	    return '#' + r + g + b;
	  };

	  var Palette = React.createClass({
	    displayName: "Palette",
	    getInitialState: function getInitialState() {
	      return {
	        hexColors: null
	      };
	    },
	    componentDidMount: function componentDidMount() {
	      var _this = this;

	      var hexColors = {};
	      Object.keys(this.colorNodes).forEach(function (key) {
	        hexColors[key] = rgbToHex(getComputedStyle(_this.colorNodes[key])['background-color']);
	      });
	      this.setState({
	        hexColors: hexColors
	      });
	    },
	    render: function render() {
	      var _this2 = this;

	      this.colorNodes = this.colorNodes || {};
	      var _props$color = this.props.color,
	          name = _props$color.name,
	          description = _props$color.description,
	          color = _props$color.color;
	      var hexColors = this.state.hexColors;
	      var colors = [];

	      var _loop = function _loop(i) {
	        colors.push(React.createElement(
	          "div",
	          {
	            key: i,
	            ref: function ref(node) {
	              _this2.colorNodes[name + "-" + i] = node;
	            },
	            className: "main-color-item palatte-" + name + "-" + i,
	            style: {
	              color: i > 5 ? '#fff' : 'unset',
	              fontWeight: i === 6 ? 'bold' : 'normal'
	            }
	          },
	          name,
	          "-",
	          i,
	          hexColors ? React.createElement(
	            "span",
	            {
	              className: "main-color-value"
	            },
	            hexColors[name + "-" + i]
	          ) : null
	        ));
	      };

	      for (var i = 1; i <= 10; i++) {
	        _loop(i);
	      }

	      return React.createElement(
	        "div",
	        {
	          className: "color-palette"
	        },
	        React.createElement(
	          "div",
	          {
	            className: "color-title"
	          },
	          name,
	          React.createElement(
	            "span",
	            {
	              className: "color-description"
	            },
	            description
	          )
	        ),
	        React.createElement(
	          "div",
	          {
	            className: "main-color"
	          },
	          colors
	        )
	      );
	    }
	  });
	  var ExtendPalettes = React.createClass({
	    displayName: "ExtendPalettes",
	    render: function render() {
	      var colors = [{
	        name: 'red',
	        description: '热情、警示'
	      }, {
	        name: 'green',
	        description: '成功、通过、安全'
	      }, {
	        name: 'blue',
	        description: '专业、科技'
	      }, {
	        name: 'pink',
	        description: '典雅、明快、女性'
	      }, {
	        name: 'orange',
	        description: '醒目、温暖'
	      }, {
	        name: 'purple',
	        description: '高雅、浪漫'
	      }, {
	        name: 'yellow',
	        description: '活力、提示'
	      }, {
	        name: 'cyan',
	        description: '清新、冷静、结构化'
	      }];
	      return React.createElement(
	        "div",
	        null,
	        colors.map(function (color, i) {
	          return React.createElement(Palette, {
	            key: color.name,
	            color: color
	          });
	        })
	      );
	    }
	  });
	  return React.createElement(ExtendPalettes, {
	    key: "palettes"
	  });
	}
	  ],
	  "meta": {
	    "category": {
	      "zh-CN": "设计基础",
	      "en-US": "Design Fundamental"
	    },
	    "order": 2,
	    "title": {
	      "zh-CN": "色彩",
	      "en-US": "Colors"
	    },
	    "filename": "docs/spec/colors.md"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#Ant-Design-Colors"
	        },
	        "Ant Design Colors"
	      ]
	    ]
	  ]
	};

/***/ }

});