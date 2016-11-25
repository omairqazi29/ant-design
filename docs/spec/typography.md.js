webpackJsonp([49,202],{

/***/ 1077:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", {}, ["h2", "行高和段落"], ["p", "考虑到阅读的舒适度和节奏感，句子和段落间需要合适的间距。行距決定了段落中各行文字的垂直距离，通过字体本身行高来控制，我们行高默认为字号的 1.5 倍。段落间距決定了段落上下的间距，一般为字号的一倍宽。"], ["div", {
	    "class": "row",
	    "style": "width: 80%;"
	  }, ["div", {
	    "class": "col col-12 paragraph-12px"
	  }, ["h3", "12px 段落"], ["p", "汉学家称这个空白字为「盘古之白」，因为它劈开了全角字和半角字之间的混沌。"], ["p", "另有研究显示，打字的时候不喜欢在中文和英文之间加空格的人，感情路都走得很辛苦，有七成的比例会在 34 岁的时候跟自己不爱的人结婚，而其余三成的人最后只能把遗产留给自己的猫。毕竟爱情跟书写都需要适时地留白。"], ["p", "文案来自 ", ["a", {
	    "href": "https://github.com/vinta/paranoid-auto-spacing#%E7%82%BA%E4%BB%80%E9%BA%BC%E4%BD%A0%E5%80%91%E5%B0%B1%E6%98%AF%E4%B8%8D%E8%83%BD%E5%8A%A0%E5%80%8B%E7%A9%BA%E6%A0%BC%E5%91%A2"
	  }, "此处"], "。"]], ["div", {
	    "class": "col col-12 paragraph-14px"
	  }, ["h3", "14px 段落"], ["p", "汉学家称这个空白字为「盘古之白」，因为它劈开了全角字和半角字之间的混沌。"], ["p", "另有研究显示，打字的时候不喜欢在中文和英文之间加空格的人，感情路都走得很辛苦，有七成的比例会在 34 岁的时候跟自己不爱的人结婚，而其余三成的人最后只能把遗产留给自己的猫。毕竟爱情跟书写都需要适时地留白。"], ["p", "文案来自 ", ["a", {
	    "href": "https://github.com/vinta/paranoid-auto-spacing#%E7%82%BA%E4%BB%80%E9%BA%BC%E4%BD%A0%E5%80%91%E5%B0%B1%E6%98%AF%E4%B8%8D%E8%83%BD%E5%8A%A0%E5%80%8B%E7%A9%BA%E6%A0%BC%E5%91%A2"
	  }, "此处"], "。"]]], ["style", "\n.paragraph-14px, .paragraph-12px {\n  padding: 15px;\n  line-height: 1.5;\n}\n.paragraph-14px p,\n.paragraph-12px p {\n  margin: 1em 0;\n}\n.paragraph-14px {\n  font-size: 14px;\n}\n.paragraph-12px {\n  font-size: 12px;\n}\n"], ["h2", "标点和空格"], ["p", ["img", {
	    "style": "float: right; width: 200px;",
	    "src": "https://t.alipayobjects.com/images/T1KrXhXlxnXXXXXXXX.png"
	  }]], ["ol", ["li", ["p", "使用全角中文标点。"]], ["li", ["p", "遇到完整的英文整句、特殊名词，其内容使用半角标点。"]], ["li", ["p", "数字使用半角字符。"]], ["li", ["p", "不重复使用标点符号。"]]], ["h3", "空格规范"], ["ol", ["li", ["p", "中文和英文间需要空格。"]], ["li", ["p", "数字与单位之间需要增加空格。\n例外：度、百分比与数字之间不需要增加空格。"]], ["li", ["p", "中文链接之间增加空格。"]]], ["h2", "文字背景"], ["p", "当文字和背景明暗对比小于一定比值时，人眼识别文字信息将会变得吃力，尤其在明亮的室外或晃动的情况下。"], ["p", "方法：若彩色背景，可先将色彩去色转为黑白，分别吸取并查看背景和文字的 ", ["code", "HSV"], " 色值。\n两者的 V 值的差额便是明暗对比差。这个明暗对比差建议不小于 40。"], ["p", ["img", {
	    "src": "https://t.alipayobjects.com/images/T1UYphXe8lXXXXXXXX.png",
	    "width": "90%"
	  }]], ["h2", "对齐"], ["h3", "中文/英文居左对齐"], ["p", "中文和英文均采用左对齐的方式，是因为文字的阅读顺序一般是从左到右的。"], ["p", ["img", {
	    "src": "https://t.alipayobjects.com/images/T1nHhhXl4mXXXXXXXX.png",
	    "width": "100%"
	  }]], ["h3", "数字/小数点对齐"], ["p", ["img", {
	    "style": "float: right; width: 400px;",
	    "src": "https://t.alipayobjects.com/images/T1YbthXhRkXXXXXXXX.png"
	  }]], ["p", {
	    "style": "height: 220px; width: 380px;"
	  }, "数字通常采用右对齐或小数点对齐，这样便于对个十百千位上的数字进行对比。"], ["h3", "冒号对齐"], ["p", ["img", {
	    "style": "float: right; width: 400px;",
	    "src": "https://t.alipayobjects.com/images/T1hcJhXnlXXXXXXXXX.png"
	  }]], ["p", {
	    "style": "height: 220px; width: 380px;"
	  }, "以冒号对齐的方式在表单中尤其常见。主要是为了区分标题和内容区块，除了美观简洁外，让用户能迅速看清标题减少出错概率。"], ["h2", "文案长度"], ["p", "语言通常是越简单越明确，而提示性文字更需要简明扼要，让用户一目了然，减少操作失误。提示性句子长度视业务而定，建议一般不超过 16–18 个字。"], ["p", ["img", {
	    "style": "float: right; width: 300px; margin: 30px 100px;",
	    "src": "https://t.alipayobjects.com/images/T17cthXgpbXXXXXXXX.png"
	  }]], ["p", "保持简明准确的方法："], ["ul", ["li", ["p", "每个句子只包含一个观点；"]], ["li", ["p", "使用明确的词；"]], ["li", ["p", "尽可能使用主动语态少用被动语态；"]]], ["h2", "层级引导"], ["p", "我们通常使用对比的手法来区分出信息的层次感，信息主次分明能准确地将信息清晰地传达给用户，让用户第一眼获取所需资讯，提升阅读体验。"], ["p", ["img", {
	    "src": "https://t.alipayobjects.com/images/T1GYBhXghjXXXXXXXX.png",
	    "width": "600"
	  }]], ["h3", "Squint test"], ["p", "我们可以采用 ", ["a", {
	    "title": null,
	    "href": "https://chrome.google.com/webstore/detail/the-squint-test/gppnipfbappicilfniaimcnagbpfflpg"
	  }, "模糊测试"], " 的方法，即眯起眼睛从整体来检视结构上的合理与否。"], ["p", ["img", {
	    "src": "https://t.alipayobjects.com/images/T1bY4hXkpfXXXXXXXX.png",
	    "width": "600"
	  }]]],
	  "meta": {
	    "category": {
	      "zh-CN": "设计基础",
	      "en-US": "Design Fundamental"
	    },
	    "order": 1,
	    "title": {
	      "zh-CN": "排版",
	      "en-US": "Typography"
	    },
	    "filename": "docs/spec/typography.md"
	  },
	  "description": ["section", ["p", "良好的排版规范能大大提升用户的视觉体验。"]],
	  "toc": ["ul", ["li", ["a", {
	    "href": "#行高和段落"
	  }, "行高和段落"]], ["li", ["a", {
	    "href": "#标点和空格"
	  }, "标点和空格"]], ["li", ["a", {
	    "href": "#文字背景"
	  }, "文字背景"]], ["li", ["a", {
	    "href": "#对齐"
	  }, "对齐"]], ["li", ["a", {
	    "href": "#文案长度"
	  }, "文案长度"]], ["li", ["a", {
	    "href": "#层级引导"
	  }, "层级引导"]]]
	};

/***/ }

});