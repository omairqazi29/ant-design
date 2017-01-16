webpackJsonp([161,210],{

/***/ 1528:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "Mention component。"], ["h2", "When To Use"], ["p", "When need to mention someone or something."]],
	  "meta": {
	    "category": "Components",
	    "type": "Data Entry",
	    "title": "Mention",
	    "filename": "components/mention/index.en-US.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#When-To-Use"
	  }, "When To Use"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Mention</span>\n  <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span>\n  <span class=\"token attr-name\">suggestions</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'afc163'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'benjycui'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'yiminghe'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'jljsj33'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'dqaria'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'RaoHai'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n<span class=\"token punctuation\">/></span></span>"
	  }, ["code", "<Mention\n  onChange={onChange}\n  suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}\n/>"]], ["h3", "Mention API"], ["table", ["thead", ["tr", ["th", "API"], ["th", "Description"], ["th", "Type"]]], ["tbody", ["tr", ["td", "toString"], ["td", "convert EditorState to string"], ["td", "Function(editorState: EditorState): String"]], ["tr", ["td", "toEditorState"], ["td", "convert string to  EditorState"], ["td", "Function(string: String): EditorState"]], ["tr", ["td", "getMentions"], ["td", "get mentioned people in current editorState"], ["td", "Function(editorState: EditorState): Array", ["string"]]]]], ["h3", "Mention props"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "suggestions"], ["td", "suggestion content"], ["td", "Array", ["string"], " or Array<Mention.Nav>"], ["td", "[]"]], ["tr", ["td", "suggestionStyle"], ["td", "style of suggestion container"], ["td", "Object"], ["td", "{}"]], ["tr", ["td", "onSearchChange"], ["td", "Callback function called when search content changes"], ["td", "function(value:String)"], ["td", "[]"]], ["tr", ["td", "onChange"], ["td", "Callback function called when content of input changes"], ["td", "function(editorState: EditorState)"], ["td", "null"]], ["tr", ["td", "onSelect"], ["td", "Callback function called when select from suggestions"], ["td", "function(suggestion: String, data?: any)"], ["td", "null"]], ["tr", ["td", "notFoundContent"], ["td", "suggestion when suggestions empty"], ["td", "string"], ["td", "'无匹配结果，轻敲空格完成输入'"]], ["tr", ["td", "loading"], ["td", "loading mode"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "multiLines"], ["td", "multilines mode"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "prefix"], ["td", "character which will trigger Mention to show mention list"], ["td", "string"], ["td", "'@'"]], ["tr", ["td", "defaultValue"], ["td", "default value"], ["td", "EditorState, you can use ", ["code", "Mention.toEditorState"], " to convert text to ", ["code", "EditorState"]], ["td", "null"]], ["tr", ["td", "value"], ["td", "core state of mention"], ["td", "EditorState"], ["td", "null"]], ["tr", ["td", "placeHolder"], ["td", "placeholder of input"], ["td", "string"], ["td", "null"]], ["tr", ["td", "getSuggestionContainer"], ["td", "rendered to the root of the menu. Default rendered to the body dom. If gets any problem of the menu while scrolling. Try to make the root the dom scrolled, and make it position relative."], ["td", "Function()"], ["td", "() => document.body"]], ["tr", ["td", "onFocus"], ["td", "Callback function called when mention component get focus"], ["td", "function()"], ["td", "null"]], ["tr", ["td", "onBlur"], ["td", "Callback function called when mention component blur"], ["td", "function()"], ["td", "nul"]]]], ["h3", "Nav props"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "value"], ["td", "value of suggestion，the value will insert into input filed while selected"], ["td", "string"], ["td", "\"\""]], ["tr", ["td", "children"], ["td", "suggestion content"], ["td", "Object"], ["td", "{}"]]]]]
	};

/***/ }

});