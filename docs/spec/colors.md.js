webpackJsonp([49,209],{

/***/ 868:
/***/ function(module, exports) {

	/**
	 * values.js - Get the tints and shades of a color
	 * @version v1.0.3
	 * @link http://noeldelgado.github.io/Values.js/
	 * @license MIT
	 */
	 (function() {
	    var Utils = {
	        reHash : new RegExp("^#"),
	        reHEX : new RegExp("^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$"),
	        reRGB : new RegExp("rgba?\\s*\\((\\d+)\\,\\s*(\\d+)\\,\\s*(\\d+)(,\\s*((\\d+)?(\\.\\d+)?))?\\)","i"),
	        reHSL : new RegExp("hsla?\\((\\d+),\\s*([\\d.]+)%,\\s*([\\d.]+)%,?\\s*(?:0?(\\.\\d+)?|1(\\.0)?)?\\)","i"),

	        isHEX : function isHEX(value) {
	            return this.reHEX.test(value);
	        },

	        isRGB : function isRGB(value) {
	            var rgb = value.match(this.reRGB);

	            if (rgb) {
	                if ((rgb[1] <= 255) && (rgb[2] <= 255) && (rgb[3] <= 255)) {
	                    return true;
	                }
	            }

	            return false;
	        },

	        isHSL : function isHSL(value) {
	            var hsl = value.match(this.reHSL);

	            if (hsl) {
	                if ((hsl[1] <= 360) && (hsl[2] <= 100) && (hsl[3] <= 100)) {
	                    return true;
	                }
	            }

	            return false;
	        },

	        HEXtoRGB : function HEXtoRGB(hex) {
	            hex = hex.replace('#', '');

	            if (hex.length === 3) {
	                var h1 = hex.charAt(0), h2 = hex.charAt(1), h3 = hex.charAt(2);
	                hex = h1 + h1 + h2 + h2 + h3 + h3;
	            }
	            var bw = parseInt(hex, 16);

	            return {r: (bw >> 16) & 255, g: (bw >> 8) & 255, b: bw & 255};
	        },

	        RGBtoHEX : function RGBtoHEX(r, g, b) {
	            return (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
	        },

	        RGBtoHSL : function RGBtoHSL(r, g, b) {
	            var min, max, h, s, l;

	            r = (r / 255);
	            g = (g / 255);
	            b = (b / 255);

	            max = Math.max(r, g, b);
	            min = Math.min(r, g, b);
	            l = ((max + min) / 2);

	            if (max === min) {
	                h = s = 0;
	            } else {
	                var d = (max - min);
	                s = (l > 0.5) ? (d / (2 - max - min)) : (d / (max + min));

	                if (max === r)      {h = ((g - b) / d + (g < b ? 6 : 0));}
	                else if (max === g) {h = ((b - r) / d + 2);}
	                else if (max === b) {h = ((r - g) / d + 4);}

	                h /= 6;
	            }

	            return {h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100)};
	        },

	        HUEtoRGB : function HUEtoRGB(v1, v2, vh) {
	            if (vh < 0) {vh += 1;}
	            if (vh > 1) {vh -= 1;}

	            if ((6 * vh) < 1) {return (v1 + (v2 - v1) * 6 * vh);}
	            if ((2 * vh) < 1) {return v2;}
	            if ((3 * vh) < 2) {return (v1 + (v2 - v1) * ((2/3) - vh) * 6);}
	            return v1;
	        },

	        HSLtoRGB : function HSLtoRGB(h, s, l) {
	            var r, g, b;

	            h /= 360;
	            s /= 100;
	            l /= 100;

	            if (s === 0) {r = g = b = l;}
	            else {
	                var q = (l < 0.5) ? (l * (1 + s)) : (l + s - l * s);
	                var p = (2 * l - q);
	                r = this.HUEtoRGB(p, q, h + 1/3);
	                g = this.HUEtoRGB(p, q, h);
	                b = this.HUEtoRGB(p, q, h - 1/3);
	            }

	            return {r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255)};
	        },

	        mix : function mix(color1, color2, percentage) {
	            percentage = (typeof percentage === 'undefined') ? 50 : percentage;

	            var weight = (percentage / 100.0);
	            var w = (weight * 2 - 1);
	            var a = 0;

	            var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
	            var w2 = (1 - w1);

	            var r = Math.round(color1.rgb.r * w1 + color2.rgb.r * w2);
	            var g = Math.round(color1.rgb.g * w1 + color2.rgb.g * w2);
	            var b = Math.round(color1.rgb.b * w1 + color2.rgb.b * w2);

	            return new Values(Utils.RGBtoHEX(r,g,b));
	        }
	    };

	    function Values(color) {
	        this.hex = '';
	        this.hsl = {};
	        this.rgb = {};

	        if (color) {
	            return this.setColor(color);
	        }

	        return this;
	    }

	    Values.Utils = Utils;

	    /**
	    Sets the base color for which all operations are based. Updates the instance's properties.
	    @method setColor <public> [Function]
	    @param color <required> [String] A valid color format (#000, rgb(0,0,0), hsl(0,0%,0%))
	    @return Values instance || Error [Object]
	    */
	    Values.prototype.setColor = function(color) {
	        if (Utils.isHEX(color)) {
	            return this._setFromHexString(color);
	        } else if (Utils.isRGB(color)) {
	            return this._setFromRGBString(color);
	        } else if (Utils.isHSL(color)) {
	            return this._setFromHSLString(color);
	        }

	        return new Error('Invalid Color Format');
	    };

	    /**
	    Lightens the instance by mixing it with white as specified by @percentage.
	    @method tint <public> [Function]
	    @param percentage <optional> [Number] {50}
	    @return new Values instance [Object]
	    */
	    Values.prototype.tint = function tint(percentage) {
	        return Utils.mix({rgb:{r:255, g:255, b:255}}, this, percentage);
	    };

	    /**
	    Darkens the instance color by mixing it with black as specified by @percentage.
	    @method shade <public> [Function]
	    @param percentage <optional> [Number] {50}
	    @return new Values instance [Object]
	    */
	    Values.prototype.shade = function shade(percentage) {
	        return Utils.mix({rgb:{r:0, g:0, b:0}}, this, percentage);
	    };

	    /**
	    Generates the tints of the instance color as specified by @percentage.
	    @method tints <public> [Function]
	    @param percentage <optional> [Number] {10}
	    @return Array of Values instances [Array]
	    */
	    Values.prototype.tints = function tint(percentage) {
	        var i = percentage = (percentage || 10), tints = [];

	        while (i <= 100) {
	            tints.push(this.tint(i));
	            i += percentage;
	        }

	        return tints;
	    };

	    /**
	    Generates the shades of the instance color as specified by @percentage.
	    @method shades <public> [Function]
	    @param percentage <optional> [Number] {10}
	    @return Array of Values instances [Array]
	    */
	    Values.prototype.shades = function tint(percentage) {
	        var i = percentage = (percentage || 10), shades = [];

	        while (i <= 100) {
	            shades.push(this.shade(i));
	            i += percentage;
	        }

	        return shades;
	    };

	    /**
	    Generates the tints and shades of the instance color as specified by @percentage.
	    @method all <public> [Function]
	    @param percentage <optional> [Number] {10}
	    @return Array of Values instances [Array]
	    */
	    Values.prototype.all = function all(percentage) {
	        percentage = percentage;

	        var tints = this.tints(percentage).reverse();
	        var shades = this.shades(percentage);
	        tints.push(this);

	        return tints.concat(shades);
	    };

	    /**
	    Calculates and returns the brightness of the instance base-color.
	    @return brightness [Number]
	    */
	    Values.prototype.getBrightness = function getBrightness() {
	        var sum = (this.rgb.r + this.rgb.g + this.rgb.b);
	        return Math.round(sum / (255 * 3) * 100);
	    };

	    /**
	    Returns the instance color in hexadecimal string form.
	    @returns '#000000' [String]
	    */
	    Values.prototype.hexString = function() {
	        return '#' + this.hex;
	    };

	    /**
	    Returns the instance color in rgb string form.
	    @returns 'rgb(0, 0, 0)' [String]
	    */
	    Values.prototype.rgbString = function() {
	        return 'rgb(' + this.rgb.r + ', ' + this.rgb.g + ', ' + this.rgb.b + ')';
	    };

	    /**
	    Returns the instance color in hsl string form.
	    @returns 'hsl(0, 0%, 0%)' [String]
	    */
	    Values.prototype.hslString = function() {
	        return 'hsl(' + this.hsl.h + ', ' + this.hsl.s + '%, ' + this.hsl.l + '%)';
	    };

	    /**
	    Updates the instance base-color properties from a valid hex string.
	    @method _setFromHexString <private> [Function]
	    @param color <required> [String]
	    */
	    Values.prototype._setFromHexString = function _setFromHexString(color) {
	        this.hex = (Utils.reHash.test(color)) ? color.replace('#','') : color;
	        this.rgb = Utils.HEXtoRGB(color);
	        this.hsl = Utils.RGBtoHSL(this.rgb.r, this.rgb.g, this.rgb.b);

	        return this;
	    };

	    /**
	    Updates the instance base-color properties from a valid rgb string.
	    @method _setFromRGBString <private> [Function]
	    @param color <required> [String]
	    */
	    Values.prototype._setFromRGBString = function _setFromRGBString(color) {
	        var rgb = color.replace(/[^\d,]/g, '').split(','),
	            r = parseInt(rgb[0], 10),
	            g = parseInt(rgb[1], 10),
	            b = parseInt(rgb[2], 10);

	        this.rgb = {r: r, g: g, b: b};
	        this.hex = Utils.RGBtoHEX(r, g, b);
	        this.hsl = Utils.RGBtoHSL(this.rgb.r, this.rgb.g, this.rgb.b);

	        return this;
	    };

	    /**
	    Updates the instance base-color properties from a valid hsl string.
	    @method _setFromHSLString <private> [Function]
	    @param color <required> [String]
	    */
	    Values.prototype._setFromHSLString = function _setFromHSLString(color) {
	        var hsl = color.match(Utils.reHSL),
	            h = Math.round(hsl[1]),
	            s = Math.round(hsl[2]),
	            l = Math.round(hsl[3]);

	        this.hsl = {h: h, s: s, l: l};
	        this.rgb = Utils.HSLtoRGB(h, s, l);
	        this.hex = Utils.RGBtoHEX(this.rgb.r, this.rgb.g, this.rgb.b);

	        return this;
	    };

	    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	        module.exports = Values;
	    } else {window.Values = Values;}
	})();


/***/ },

/***/ 1776:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", ["h2", "有意义的色彩"], ["p", "色彩在界面设计中的使用应同时具备品牌识别性以及界面设计功能性。色彩是相当感性的东西，设计中对色彩的运用首要应考虑到品牌层面的表达，另外很重要的一点是色彩的运用应达到信息传递，动作指引，交互反馈，或是强化和凸现某一个元素的目的。任何颜色的选取和使用应该是有意义的。"], ["h2", "Ant Design Colors"], ["p", "Ant Design 的色板由 8 种基本色彩组成，通过一套", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/blob/734beb84ffc3f0469fbae1566aa8450f966cb261/components/style/color/colorPalette.less"
	  }, "精心设计的色彩算法"], "，每种基本色又自动衍生出 10 种渐变色，其中第 6 种为基本色。"], ["blockquote", ["p", "我们结合了色彩加白、加黑、加深，贝塞尔曲线，以及针对冷暖色的不同旋转角度，调教出一套色彩算法。使用者只需指定主色，便可导出一条完整的渐变色板。"]], function jsonmlReactLoader() {
	    var rgbToHex = function rgbToHex(rgbString) {
	      var hexChars = '0123456789ABCDEF';var rgb = rgbString.match(/\d+/g);var r = parseInt(rgb[0]).toString(16);var g = parseInt(rgb[1]).toString(16);var b = parseInt(rgb[2]).toString(16);r = r.length === 1 ? '0' + r : r;
	      g = g.length === 1 ? '0' + g : g;b = b.length === 1 ? '0' + b : b;return '#' + r + g + b;
	    };var Palette = _react2.default.createClass({
	      displayName: 'Palette',
	      getInitialState: function getInitialState() {
	        return { hexColors: null };
	      },
	      componentDidMount: function componentDidMount() {
	        var _this = this;

	        var hexColors = {};Object.keys(this.colorNodes).forEach(function (key) {
	          hexColors[key] = rgbToHex(getComputedStyle(_this.colorNodes[key])['background-color']);
	        });this.setState({ hexColors: hexColors });
	      },
	      render: function render() {
	        var _this2 = this;

	        this.colorNodes = this.colorNodes || {};var _props$color = this.props.color,
	            name = _props$color.name,
	            description = _props$color.description,
	            color = _props$color.color;
	        var hexColors = this.state.hexColors;
	        var colors = [];
	        var _loop = function _loop(i) {
	          colors.push(_react2.default.createElement(
	            'div',
	            { key: i, ref: function ref(node) {
	                _this2.colorNodes[name + '-' + i] = node;
	              }, className: 'main-color-item palatte-' + name + '-' + i, style: { color: i > 5 ? '#fff' : 'unset', fontWeight: i === 6 ? 'bold' : 'normal' } },
	            name,
	            '-',
	            i,
	            hexColors ? _react2.default.createElement(
	              'span',
	              { className: 'main-color-value' },
	              hexColors[name + '-' + i]
	            ) : null
	          ));
	        };

	        for (var i = 1; i <= 10; i++) {
	          _loop(i);
	        }return _react2.default.createElement(
	          'div',
	          { className: 'color-palette' },
	          _react2.default.createElement(
	            'div',
	            { className: 'color-title' },
	            name,
	            _react2.default.createElement(
	              'span',
	              { className: 'color-description' },
	              description
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'main-color' },
	            colors
	          )
	        );
	      }
	    });var ExtendPalettes = _react2.default.createClass({
	      displayName: 'ExtendPalettes',
	      render: function render() {
	        var colors = [{ name: 'red', description: '热情、警示' }, { name: 'green', description: '成功、通过、安全' }, { name: 'blue', description: '专业、科技' }, { name: 'pink', description: '典雅、明快、女性' }, { name: 'orange', description: '醒目、温暖' }, { name: 'purple', description: '高雅、浪漫' }, { name: 'yellow', description: '活力、提示' }, { name: 'cyan', description: '清新、冷静、结构化' }];return _react2.default.createElement(
	          'div',
	          null,
	          colors.map(function (color, i) {
	            return _react2.default.createElement(Palette, { key: color.name, color: color });
	          })
	        );
	      }
	    });return _react2.default.createElement(ExtendPalettes, { key: 'palettes' });
	  }, ["h2", "色彩和交互"], ["p", "设计元素本身由于交互行为会引发一系列细微的视觉变化，而元素本身的颜色变化有时也能很好的实现这一目的。在进行这类设计的同时，建议采取在颜色上添加黑色或者白色并按照 ", ["code", "n+5%"], " 的规律递增的方式来实现。以下图为例，当鼠标 hover 某个特定元素，就视为浮起，对应颜色就相应增加白色叠加，相反点击的行为可以理解为按下去，在颜色上就相应的增加黑色的叠加。"], ["p", ["img", {
	    "src": "https://t.alipayobjects.com/images/T1ZHxhXdNmXXXXXXXX.png",
	    "width": "100%"
	  }]], ["p", ["img", {
	    "src": "https://t.alipayobjects.com/images/T1fZJhXahgXXXXXXXX.png",
	    "width": "100%"
	  }]], ["h2", "色彩识别"], ["p", "合适的色彩对比为信息传达加分，同时也应放考虑到有颜色识别障碍人群的需求。我们将每种主色衍生出来的颜色进行了打标，在考虑对比颜色的选择时建议两种颜色对应标签数值的差要大于等于 5。"], ["p", ["img", {
	    "src": "https://t.alipayobjects.com/images/rmsweb/T1hLphXgXcXXXXXXXX.png",
	    "width": "100%"
	  }]], ["p", ["img", {
	    "src": "https://t.alipayobjects.com/images/rmsweb/T1v2phXj8bXXXXXXXX.png",
	    "width": "100%"
	  }]], ["h2", "色彩换算工具"], ["blockquote", ["p", "正数为变淡 ", ["code", "tint"], " ，负数为加深 ", ["code", "shade"], "。"]], function jsonmlReactLoader() {
	    var Values = __webpack_require__(868);var CopyToClipboard = __webpack_require__(388);var classNames = __webpack_require__(7);var antd = __webpack_require__(51);var Button = antd.Button;var InputNumber = antd.InputNumber;var Slider = antd.Slider;var Tooltip = antd.Tooltip;var TintShadeTool = _react2.default.createClass({
	      displayName: 'TintShadeTool',
	      getInitialState: function getInitialState() {
	        return { result: '#2db7f5', color: '#2db7f5', justCopied: false, darkBackground: false, value: 80 };
	      },
	      handleChangeColor: function handleChangeColor(e) {
	        this.setState({ color: e.target.value }, this.calculate);
	      },
	      handleChangeValue: function handleChangeValue(value) {
	        this.setState({
	          value: value }, this.calculate);
	      },
	      componentDidMount: function componentDidMount() {
	        this.calculate();
	      },
	      calculate: function calculate() {
	        if (this.state.value === 0) {
	          this.setState({ result: this.state.color });return;
	        }var tintOrShade = this.state.value > 0 ? 'tint' : 'shade';var c = new Values(this.state.color);var resultColor = c[tintOrShade](Math.abs(this.state.value));this.setState({ result: '#' + resultColor.hex, darkBackground: resultColor.getBrightness() < 50 });
	      },
	      copySuccess: function copySuccess(e) {
	        var _this3 = this;

	        this.setState({ justCopied: true }, function () {
	          setTimeout(function () {
	            _this3.setState({ justCopied: false });
	          }, 1000);
	        });
	      },
	      render: function render() {
	        var marks = { '-100': '加黑', '0': '原色', '100': '加白' };var className = classNames({ 'color-block': true, copied: this.state.justCopied, dark: this.state.darkBackground });return _react2.default.createElement(
	          'div',
	          { style: { margin: '40px 0' } },
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              Tooltip,
	              { title: '\u70B9\u51FB\u8272\u5757\u590D\u5236\u8272\u503C' },
	              _react2.default.createElement(
	                CopyToClipboard,
	                { className: className, onCopy: this.copySuccess, text: this.state.result },
	                _react2.default.createElement('div', { style: { backgroundColor: this.state.result } })
	              )
	            ),
	            _react2.default.createElement(
	              'span',
	              { style: { width: 188, display: 'inline-block', fontFamily: 'Consolas' } },
	              this.state.result
	            ),
	            _react2.default.createElement('input', { className: 'ant-input', style: { width: 80, color: this.state.color, marginRight: 8 }, value: this.state.color, onChange: this.handleChangeColor }),
	            _react2.default.createElement(InputNumber, { style: { width: 70 }, value: this.state.value, onChange: this.handleChangeValue, min: -100, max: 100, step: 5 }),
	            _react2.default.createElement(
	              'span',
	              { style: { margin: '0 0 0 8px' } },
	              '%'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: { width: 420, margin: '40px 10px 60px' } },
	            _react2.default.createElement(Slider, { value: this.state.value, onChange: this.handleChangeValue, min: -100, max: 100, step: 5, marks: marks })
	          )
	        );
	      }
	    });return _react2.default.createElement(TintShadeTool, { key: 'tintShadeTool' });
	  }, ["p", "Ant Design 专用色彩换算工具，用于解析类似 ", ["code", "#2db7f5 tint 80%"], " 的色彩标注。"], ["p", "less 或 scss 语言可以直接使用 ", ["code", "tint(#2db7f5, 80%)"], " 和  ", ["code", "shade(#2db7f5, 80%)"], " 的语法。"]],
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#有意义的色彩"
	  }, "有意义的色彩"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Ant-Design-Colors"
	  }, "Ant Design Colors"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#色彩和交互"
	  }, "色彩和交互"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#色彩识别"
	  }, "色彩识别"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#色彩换算工具"
	  }, "色彩换算工具"]]]
	};

/***/ }

});