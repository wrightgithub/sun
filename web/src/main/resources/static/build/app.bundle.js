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

	var _article = __webpack_require__(1);

	var _article2 = _interopRequireDefault(_article);

	var _original = __webpack_require__(2);

	var _original2 = _interopRequireDefault(_original);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SunApp = function (_React$Component) {
	    _inherits(SunApp, _React$Component);

	    function SunApp() {
	        _classCallCheck(this, SunApp);

	        return _possibleConstructorReturn(this, (SunApp.__proto__ || Object.getPrototypeOf(SunApp)).apply(this, arguments));
	    }

	    _createClass(SunApp, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'div',
	                    { id: 'articles' },
	                    React.createElement(_article2.default, null)
	                ),
	                React.createElement(
	                    'div',
	                    { id: 'original' },
	                    React.createElement(_original2.default, null)
	                )
	            );
	        }
	    }]);

	    return SunApp;
	}(React.Component);

	ReactDOM.render(React.createElement(SunApp, null), document.getElementById("sunapp"));

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.copyarr = copyarr;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function copyarr(arr, start, end) {
	    var four_article = [];
	    for (var i = start; i <= end; i++) {
	        four_article.push(arr[i]);
	    }

	    return four_article;
	}
	var hstyle = exports.hstyle = {
	    margin: 0,
	    padding: 0,
	    border: 0,
	    fontSize: '100%',
	    font: 'inherit',
	    verticalAlign: 'baseline'
	};

	var refreshButton = {
	    position: 'fixed',
	    width: '7%',
	    height: '6%',
	    zIndex: 100,
	    left: '1%',
	    mixBlendMode: 'difference',
	    background: '#606c76',
	    top: '2%',
	    cursor: 'pointer'
	};
	var row_wrap = {
	    width: '100%',
	    height: 'auto'
	};
	var bt_left = {
	    float: 'left'
	};

	var Image = function (_React$Component) {
	    _inherits(Image, _React$Component);

	    function Image() {
	        _classCallCheck(this, Image);

	        return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
	    }

	    _createClass(Image, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'img-left' },
	                React.createElement('img', { src: this.props.src, alt: '' })
	            );
	        }
	    }]);

	    return Image;
	}(React.Component);

	var Text = function (_React$Component2) {
	    _inherits(Text, _React$Component2);

	    function Text() {
	        _classCallCheck(this, Text);

	        return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
	    }

	    _createClass(Text, [{
	        key: 'render',
	        value: function render() {
	            var article = this.props.article;

	            var link = article.type == '0' ? article.link : "/originalBlog?id=" + article.id;
	            return React.createElement(
	                'div',
	                { className: 'text-right' },
	                React.createElement(
	                    'h6',
	                    { style: hstyle },
	                    article.date
	                ),
	                React.createElement(
	                    'h3',
	                    { style: hstyle },
	                    React.createElement(
	                        'a',
	                        { href: link, target: '_blank' },
	                        article.title
	                    )
	                ),
	                React.createElement('img', { src: '/static/img/line.png', alt: '' }),
	                React.createElement(
	                    'p',
	                    null,
	                    article.digest
	                ),
	                React.createElement(
	                    'p',
	                    null,
	                    React.createElement(
	                        'a',
	                        { href: link, target: '_blank' },
	                        'MORE'
	                    )
	                )
	            );
	        }
	    }]);

	    return Text;
	}(React.Component);

	var LinkArticle = function (_React$Component3) {
	    _inherits(LinkArticle, _React$Component3);

	    _createClass(LinkArticle, [{
	        key: 'render',
	        value: function render() {
	            var article = this.props.article;
	            return article != undefined && article != null && React.createElement(
	                'div',
	                { className: this.props.className },
	                React.createElement(Image, { src: article.imgSrc }),
	                React.createElement(Text, { article: this.props.article }),
	                React.createElement('div', { className: 'clear' })
	            );
	        }
	    }]);

	    function LinkArticle(props) {
	        _classCallCheck(this, LinkArticle);

	        return _possibleConstructorReturn(this, (LinkArticle.__proto__ || Object.getPrototypeOf(LinkArticle)).call(this, props));
	    }

	    return LinkArticle;
	}(React.Component);

	var BlogGrid = function (_React$Component4) {
	    _inherits(BlogGrid, _React$Component4);

	    function BlogGrid() {
	        _classCallCheck(this, BlogGrid);

	        return _possibleConstructorReturn(this, (BlogGrid.__proto__ || Object.getPrototypeOf(BlogGrid)).apply(this, arguments));
	    }

	    _createClass(BlogGrid, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'blog-grid' },
	                React.createElement(LinkArticle, { className: 'blog-left', article: this.props.articles[0] }),
	                React.createElement(LinkArticle, { className: 'blog-right', article: this.props.articles[1] }),
	                React.createElement('div', { className: 'clear' })
	            );
	        }
	    }]);

	    return BlogGrid;
	}(React.Component);

	var Blog = exports.Blog = function (_React$Component5) {
	    _inherits(Blog, _React$Component5);

	    function Blog() {
	        _classCallCheck(this, Blog);

	        return _possibleConstructorReturn(this, (Blog.__proto__ || Object.getPrototypeOf(Blog)).apply(this, arguments));
	    }

	    _createClass(Blog, [{
	        key: 'render',
	        value: function render() {

	            var temp = this.props.temp;
	            return temp.articles != null && React.createElement(
	                'div',
	                { className: 'wrap' },
	                React.createElement(BlogGrid, { articles: [temp.articles[0], temp.articles[1]] }),
	                React.createElement(BlogGrid, { articles: [temp.articles[2], temp.articles[3]] })
	            );
	        }
	    }]);

	    return Blog;
	}(React.Component);

	var TempBlog = exports.TempBlog = function (_React$Component6) {
	    _inherits(TempBlog, _React$Component6);

	    function TempBlog(props) {
	        _classCallCheck(this, TempBlog);

	        var _this6 = _possibleConstructorReturn(this, (TempBlog.__proto__ || Object.getPrototypeOf(TempBlog)).call(this, props));

	        _this6.state = {
	            articles: null,
	            four_article: [],
	            next_index: 0
	        };
	        return _this6;
	    }

	    _createClass(TempBlog, [{
	        key: 'getArticles',
	        value: function getArticles() {
	            $.get(this.props.temp.ajaxurl, function (result) {
	                var four_article = [];
	                var next_index = 0;
	                if (result.length <= 4) {
	                    four_article = result;
	                    next_index = result.length - 1;
	                } else {
	                    four_article = copyarr(result, 0, 3);
	                    next_index = 3;
	                }

	                this.setState({
	                    articles: result,
	                    four_article: four_article,
	                    next_index: next_index
	                });
	                console.log("next_index:" + this.state.next_index);
	                console.log(result);
	            }.bind(this));
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount(prevProps, prevState) {
	            this.getArticles();
	        }
	    }, {
	        key: 'handleNextClick',
	        value: function handleNextClick() {
	            var next_index = this.state.next_index;
	            var len = this.state.articles.length;
	            if (next_index >= len - 1) {
	                return;
	            }
	            var four_article = this.state.four_article;

	            if (len - 1 - next_index <= 4) {
	                four_article = copyarr(this.state.articles, next_index + 1, len - 1);
	                next_index = len - 1;
	            } else {
	                four_article = copyarr(this.state.articles, next_index + 1, next_index + 4);
	                next_index = next_index + 4;
	            }
	            console.log(four_article);
	            console.log(next_index);
	            this.setState({
	                four_article: four_article,
	                next_index: next_index
	            });
	        }
	    }, {
	        key: 'handlePreClick',
	        value: function handlePreClick() {
	            var pre_index = this.state.next_index - this.state.four_article.length;
	            if (pre_index < 0) {
	                return;
	            }
	            var four_article = this.state.four_article;

	            if (pre_index - 4 <= 0) {
	                four_article = copyarr(this.state.articles, 0, pre_index);
	            } else {
	                four_article = copyarr(this.state.articles, pre_index - 3, pre_index);
	            }
	            console.log(four_article);
	            console.log("pre_index:" + pre_index);
	            this.setState({
	                four_article: four_article,
	                next_index: pre_index
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'blog s3', id: 'blog' },
	                React.createElement(
	                    'div',
	                    { className: 'container' },
	                    React.createElement(
	                        'div',
	                        { className: 'row' },
	                        React.createElement(
	                            'div',
	                            { style: bt_left },
	                            React.createElement(
	                                'button',
	                                { className: 'btn btn-outline-inverted', onClick: this.handlePreClick.bind(this) },
	                                '\u4E0A\u4E00\u9875'
	                            )
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: bt_left },
	                            React.createElement(
	                                'button',
	                                { className: 'btn btn-outline-inverted', onClick: this.handleNextClick.bind(this) },
	                                '\u4E0B\u4E00\u9875'
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { className: 'blog-head' },
	                        React.createElement(
	                            'h3',
	                            null,
	                            this.props.temp.head
	                        ),
	                        React.createElement(
	                            'p',
	                            null,
	                            this.props.temp.info
	                        )
	                    )
	                ),
	                React.createElement(Blog, { temp: {
	                        articles: this.state.four_article,
	                        head: this.state.head,
	                        info: this.state.info
	                    } })
	            );
	        }
	    }]);

	    return TempBlog;
	}(React.Component);

	var ShareBlog = function (_React$Component7) {
	    _inherits(ShareBlog, _React$Component7);

	    function ShareBlog() {
	        _classCallCheck(this, ShareBlog);

	        return _possibleConstructorReturn(this, (ShareBlog.__proto__ || Object.getPrototypeOf(ShareBlog)).apply(this, arguments));
	    }

	    _createClass(ShareBlog, [{
	        key: 'render',
	        value: function render() {

	            return React.createElement(
	                'div',
	                null,
	                React.createElement(TempBlog, { temp: {
	                        head: 'Share',
	                        info: 'best articles for everyone',
	                        ajaxurl: '/articles'
	                    } })
	            );
	        }
	    }]);

	    return ShareBlog;
	}(React.Component);

	exports.default = ShareBlog;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _article = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var OriginalBlog = function (_React$Component) {
	    _inherits(OriginalBlog, _React$Component);

	    function OriginalBlog() {
	        _classCallCheck(this, OriginalBlog);

	        return _possibleConstructorReturn(this, (OriginalBlog.__proto__ || Object.getPrototypeOf(OriginalBlog)).apply(this, arguments));
	    }

	    _createClass(OriginalBlog, [{
	        key: 'render',
	        value: function render() {

	            return React.createElement(
	                'div',
	                null,
	                React.createElement(_article.TempBlog, { temp: {
	                        head: 'Blog',
	                        info: 'Original Blog ',
	                        ajaxurl: '/original'
	                    } })
	            );
	        }
	    }]);

	    return OriginalBlog;
	}(React.Component);

	exports.default = OriginalBlog;

/***/ }
/******/ ]);