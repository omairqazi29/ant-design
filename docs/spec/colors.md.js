webpackJsonp([48,206],{

/***/ 869:
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

/***/ 1760:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", ["h2", "有意义的色彩"], ["p", "色彩在界面设计中的使用应同时具备品牌识别性以及界面设计功能性。色彩是相当感性的东西，设计中对色彩的运用首要应考虑到品牌层面的表达，另外很重要的一点是色彩的运用应达到信息传递，动作指引，交互反馈，或是强化和凸现某一个元素的目的。任何颜色的选取和使用应该是有意义的。"], ["h2", "Ant Design Colors"], ["p", "Ant Design 的色板由 9 种基本色彩组成，每种基本色又衍生出九宫格色板，在此基础上还可以通过黑白叠加的方式实现色彩明暗的效果。"], function jsonmlReactLoader() {
	    var Palette = _react2.default.createClass({
	      displayName: 'Palette',
	      render: function render() {
	        var color = this.props.color;return _react2.default.createElement(
	          'div',
	          { className: 'color-palette' },
	          _react2.default.createElement(
	            'div',
	            { className: 'main-color' },
	            color.colors.map(function (color) {
	              return _react2.default.createElement('div', { key: color, style: {
	                  backgroundColor: color } });
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: "color-msg" },
	            _react2.default.createElement(
	              'p',
	              { className: "color-msg-title" },
	              color.title
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: "color-msg-description" },
	              color.description
	            )
	          )
	        );
	      }
	    });var ExtendPalettes = _react2.default.createClass({
	      displayName: 'ExtendPalettes',
	      render: function render() {
	        var colors = [{ 'title': 'Primary Color', 'description': '尽管同一种颜色传达的含义会因人而异，受到文化和地域的影响。但颜色还是可以提取出一些共通的特性，例如暖色系的红、橙、黄通常用于象征活力，激情，积极；而冷色系的绿、蓝、紫通常给人感觉是安全、稳定、专业。', 'colors': ["#E01515", "#FF6600", "#FAC450", "#E4249B", "#CCCCCC", "#5FBC29", "#582DAA", "#0097DA", "#01B3CA"] }, { 'title': 'Grey #CCCCCC', 'description': '灰色是中性化的颜色，通常传递出来的感觉是沉稳，在配色心理学中描述 “专业化、系统化”的词条中灰色的使用占了较高的比例。建议可用于字体颜色的选择以及界面中大面积背景的底色搭配。', 'colors': ["#FFFFFF", "#FCFCFC", "#ECECEC", "#989898", "#CCCCCC", "#D9D9D9", "#666666", "#323232", "#000000"] }, { 'title': 'Red #E01515', 'description': '红色是具有强烈情感因素的颜色，通常红色传递的心理暗示有激情、欲望、战争以及危险。考虑到红色的特性，在后台系统的设计中建议作为辅助色来突出元素特性或是强化信息，常见的有图表元素，状态，危险信号，错误提示等。', 'colors': ["#F9CCD6", "#FFA5B4", "#FA727D", "#BB0606", "#E01515", "#FF3858", "#881414", "#4E1212", "#260404"] }, { 'title': 'Green #60BE29', 'description': '绿色是非常务实的颜色，它吸收了蓝色的沉稳同时具备黄色的活力。绿色蕴含着和平、生命、希望、轻松、富饶的含义。在我们的设计实例中绿色可用来传达任务完成、健康状态以及安全感等状态。', 'colors': ["#E2F582", "#D0EE9C", "#A6E33C", "#39A30E", "#60BE29", "#70D445", "#18791B", "#1F4A12", "#102803"] }, { 'title': 'Blue #00A0E9', 'description': '这里的蓝色沿用的是蚂蚁金服的品牌色，深蓝色的运用可以传递出可靠和稳定的情绪，而浅蓝色系则更为友好和清新，同时还代表了科技感与想象力。在很多专业类、管理类的后台系统设计中蓝色系常常会被选择作为设计的主色来使用。', 'colors': ["#CCE4F6", "#95CCF5", "#6AC2F5", "#1D80D3", "#00A0E9", "#2DB7F5", "#1F5AA3", "#0B366A", "#08172F"] }, { 'title': 'Magenta #E9259E', 'description': '玫红色是较为正面的色彩，含有鼓励、友好、活力的意义。但考虑到洋红色的特性，建议作为辅助色来使用。', 'colors': ["#F8C5ED", "#F5A6D3", "#F387C0", "#BC0F69", "#E9259E", "#F056AD", "#890B4C", "#5E0B36", "#230213"] }, { 'title': 'Orange #FF6100', 'description': '介于红色和黄色之间，传达愉悦，创造力，热情，吸引力。但橙色又不如红色那样具侵略性，同时又能够很好的引起视觉的注意力。可以作为设计的主色也可以用于辅助色。但大面积使用时需要慎重。', 'colors': ["#F1DDBD", "#FBCA72", "#FDAC23", "#CE630F", "#FF6100", "#FF8A0C", "#8B4A04", "#523A13", "#341F0B"] }, { 'title': 'Purple #5E30B5', 'description': '紫色是赤黄黄绿青蓝紫中最后一名，也是人类可见光谱中波长最短的光，有华贵、信仰、神秘等含义，同时是红与蓝的结合体，传达中性、中立等信息。在界面设计中建议作为辅助颜色使用。', 'colors': ["#E8DFFA", "#B196EE", "#8867D2", "#581CB6", "#5E30B5", "#7A43E2", "#3F187D", "#2B1845", "#0F061B"] }, { 'title': 'Yellow #FAC450', 'description': '黄色传达了愉悦，活力，创造力等正面的情绪，是具正能量的色彩。在具体设计中黄色常常于表达警示性的信息。建议作为辅助色来使用。', 'colors': ["#FAF4B2", "#FDF161", "#FDE023", "#D9B416", "#FAC450", "#F7CD07", "#B48513", "#6B4C01", "#241A06"] }, { 'title': 'Cyan #01BAD2', 'description': '介于蓝色和绿色之间，带有专业、冷静、从容的心理暗示。在体验专业化和结构化的设计中常常被用到，可以作为系统主色来使用。', 'colors': ["#E0F7FA", "#B2EBF2", "#80DEEA", "#00ACC2", "#01BAD2", "#26C6DA", "#00708F", "#014B62", "#031213"] }];return _react2.default.createElement(
	          'div',
	          null,
	          colors.map(function (color, i) {
	            return _react2.default.createElement(Palette, { key: i, color: color });
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
	    var Values = __webpack_require__(869);var CopyToClipboard = __webpack_require__(387);var classNames = __webpack_require__(7);var antd = __webpack_require__(48);var Button = antd.Button;var InputNumber = antd.InputNumber;var Slider = antd.Slider;var Tooltip = antd.Tooltip;var TintShadeTool = _react2.default.createClass({
	      displayName: 'TintShadeTool',
	      getInitialState: function getInitialState() {
	        return { result: '#2db7f5', color: '#2db7f5', justCopied: false, darkBackground: false, value: 80 };
	      },
	      handleChangeColor: function handleChangeColor(e) {
	        this.setState({ color: e.target.value }, this.calculate);
	      },
	      handleChangeValue: function handleChangeValue(value) {
	        this.setState({ value: value }, this.calculate);
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
	        var _this = this;

	        this.setState({ justCopied: true }, function () {
	          setTimeout(function () {
	            _this.setState({ justCopied: false });
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