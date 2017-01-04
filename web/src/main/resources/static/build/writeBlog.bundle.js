/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _markdown = __webpack_require__(3);

	var _markdown2 = _interopRequireDefault(_markdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import React from 'react';
	// import ReactDOM from 'react-dom';
	var WriteBlog = function (_React$Component) {
	    _inherits(WriteBlog, _React$Component);

	    function WriteBlog() {
	        _classCallCheck(this, WriteBlog);

	        return _possibleConstructorReturn(this, (WriteBlog.__proto__ || Object.getPrototypeOf(WriteBlog)).apply(this, arguments));
	    }

	    _createClass(WriteBlog, [{
	        key: "handleSubmit",
	        value: function handleSubmit(e) {
	            e.preventDefault();
	            var submitData = {
	                "title": this.refs.title.value,
	                "type": this.refs.type.value,
	                "imgsrc": this.refs.imgsrc.value,
	                "digest": this.refs.digest.value,
	                "content": (0, _markdown.getContent)()
	            };

	            console.log(submitData);
	            $.ajax({
	                url: "/insert",
	                type: "POST",
	                headers: {
	                    // "Accept": "text/plain; charset=utf-8",
	                    "Content-Type": "application/json;charset=UTF-8"
	                },
	                /*
	                 beforeSend: function(jqXHR, settings) {
	                 jqXHR.setRequestHeader('Accept', 'text/plain; charset=utf-8');
	                 jqXHR.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
	                 },
	                 */
	                data: JSON.stringify(submitData),
	                success: function success(data, textStatus, jqXHR) {
	                    alert("数据：" + data + "\n状态：" + textStatus);
	                    console.log("数据：" + data + "\n状态：" + textStatus);
	                }
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                null,
	                React.createElement(
	                    "form",
	                    { onSubmit: this.handleSubmit.bind(this) },
	                    React.createElement(
	                        "div",
	                        { className: "row" },
	                        React.createElement(
	                            "div",
	                            { className: "col-2" },
	                            React.createElement(
	                                "select",
	                                { placeholder: "Select One", ref: "type" },
	                                React.createElement(
	                                    "option",
	                                    { value: "1" },
	                                    "\u539F\u521B"
	                                ),
	                                React.createElement(
	                                    "option",
	                                    { value: "0" },
	                                    "\u5206\u4EAB"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-2" },
	                            React.createElement("input", { type: "text", placeholder: "article title", ref: "title" })
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-2" },
	                            React.createElement("input", { type: "text", ref: "imgsrc", placeholder: "\u56FE\u7247\u94FE\u63A5" })
	                        )
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "row" },
	                        React.createElement(
	                            "div",
	                            { className: "col-12" },
	                            React.createElement("textarea", { ref: "digest", type: "text", placeholder: "\u6458\u8981\u6216\u7B80\u8BC4", maxLength: "100" })
	                        )
	                    ),
	                    React.createElement("input", { type: "submit", value: "Submit" }),
	                    React.createElement(_markdown2.default, null)
	                )
	            );
	        }
	    }]);

	    return WriteBlog;
	}(React.Component);

	ReactDOM.render(React.createElement(WriteBlog, null), document.getElementById("writeBlog"));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.getContent = getContent;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var myarea = {
	    width: '90%',
	    height: 1000
	};

	function getContent() {
	    return this.state.value;
	}
	var h3 = { backgroundColor: '#00ff00' };

	var MarkdownEditor = function (_React$Component) {
	    _inherits(MarkdownEditor, _React$Component);

	    function MarkdownEditor(props) {
	        _classCallCheck(this, MarkdownEditor);

	        var _this = _possibleConstructorReturn(this, (MarkdownEditor.__proto__ || Object.getPrototypeOf(MarkdownEditor)).call(this, props));

	        _this.handleChange = _this.handleChange.bind(_this);
	        _this.state = { value: 'Type some *markdown* here!' };
	        exports.getContent = getContent = getContent.bind(_this);
	        return _this;
	    }

	    _createClass(MarkdownEditor, [{
	        key: 'handleChange',
	        value: function handleChange() {
	            this.setState({ value: this.refs.textarea.value });
	        }
	    }, {
	        key: 'getRawMarkup',
	        value: function getRawMarkup() {
	            var md = new Remarkable();
	            return { __html: md.render(this.state.value) };
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {
	            hljs.initHighlighting.called = false;
	            hljs.initHighlighting();
	            console.log("componentDidUpdate");
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount(prevProps, prevState) {
	            // hljs.initHighlighting();
	            console.log("componentDidMount");
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            return React.createElement(
	                'div',
	                { className: 'row' },
	                React.createElement(
	                    'div',
	                    { className: 'col-6' },
	                    React.createElement(
	                        'h3',
	                        { className: 'title' },
	                        'Input'
	                    ),
	                    React.createElement('textarea', { style: myarea, onChange: this.handleChange, ref: 'textarea',
	                        defaultValue: this.state.value })
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'col-6' },
	                    React.createElement(
	                        'h3',
	                        null,
	                        'Output'
	                    ),
	                    React.createElement('div', { className: 'markdown-body', dangerouslySetInnerHTML: this.getRawMarkup() })
	                )
	            );
	        }
	    }]);

	    return MarkdownEditor;
	}(React.Component);

	exports.default = MarkdownEditor;

/***/ }
/******/ ]);