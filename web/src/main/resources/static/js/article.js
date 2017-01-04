'use strict';
export function copyarr(arr, start, end) {
    var four_article = [];
    for (var i = start; i <= end; i++) {
        four_article.push(arr[i]);
    }

    return four_article;
}
export const hstyle = {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    font: 'inherit',
    verticalAlign: 'baseline',
}

const refreshButton = {
    position: 'fixed',
    width: '7%',
    height: '6%',
    zIndex: 100,
    left: '1%',
    mixBlendMode: 'difference',
    background: '#606c76',
    top: '2%',
    cursor: 'pointer',
}

class Image extends React.Component {


    render() {
        return (
            <div className="img-left">
                <img src={this.props.src} alt=""/>
            </div>
        );
    }
}

class Text extends React.Component {

    render() {
        var article = this.props.article;
        var link=article.link+article.id;
        return (
            <div className="text-right">
                <h6 style={hstyle}>{article.date}</h6>
                <h3 style={hstyle}><a href={link}  target="_blank">{article.title}</a></h3>
                <img src="/static/img/line.png" alt=""/>
                <p>{article.digest}</p>
                <p><a href={link}  target="_blank">MORE</a></p>
            </div>
        );
    }
}


class LinkArticle extends React.Component {

    render() {
        var article = this.props.article;
        return (
            article != undefined && article != null &&
            <div className={this.props.className}>
                <Image src={article.imgSrc}/>
                <Text article={this.props.article}/>
                <div className="clear"></div>
            </div>

        );
    }

    constructor(props) {
        super(props);
    }
}


class BlogGrid extends React.Component {
    render() {
        return (
            <div className="blog-grid">
                <LinkArticle className="blog-left" article={this.props.articles[0]}/>
                <LinkArticle className="blog-right" article={this.props.articles[1]}/>
                <div className="clear"></div>
            </div>
        );
    }
}

export class Blog extends React.Component {


    render() {

        var temp = this.props.temp;
        return (
            temp.articles != null &&
            <div className="wrap">
                <BlogGrid articles={[temp.articles[0],temp.articles[1]]}/>
                <BlogGrid articles={[temp.articles[2],temp.articles[3]]}/>
            </div>


        );
    }
}

export class TempBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: null,
            four_article: [],
            next_index: 0,
        };
    }

    getArticles() {
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
                next_index: next_index,
            });
            console.log("next_index:" + this.state.next_index);
            console.log(result);

        }.bind(this));
    }

    componentWillMount(prevProps, prevState) {
        this.getArticles();
    }


    handleNextClick() {
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
        console.log(next_index)
        this.setState({
            four_article: four_article,
            next_index: next_index,
        });

    }

    handlePreClick() {
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
            next_index: pre_index,
        })

    }

    render() {
        return (
            <div className="blog s3" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-1">
                            <button className="btn btn-outline-inverted" onClick={this.handlePreClick.bind(this)}>pre
                            </button>
                        </div>
                        <div className="col-1">
                            <button className="btn btn-outline-inverted" onClick={this.handleNextClick.bind(this)}>
                                next
                            </button>
                        </div>
                        <div className="blog-head">
                            <h3 >{this.props.temp.head}</h3>
                            <p>{this.props.temp.info}</p>
                        </div>
                    </div>
                </div>
                
                <Blog temp={{
                    articles:this.state.four_article,
                    head: this.state.head,
                    info: this.state.info,
                }}/>
            </div>
        );
    }
}


export default class ShareBlog extends React.Component {


    render() {

        return (
            <div>
                <TempBlog temp={{
                 head: 'Share',
                 info: 'best articles for everyone',
                 ajaxurl:'/articles',
                }}/>
            </div>
        );
    }
}


