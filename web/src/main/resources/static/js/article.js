'use strict';

const hstyle = {
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
        return (
            <div className="text-right">
                <h6 style={hstyle}>{article.date}</h6>
                <h3 style={hstyle}><a href="#">{article.title}</a></h3>
                <img src="/static/img/line.png" alt=""/>
                <p>{article.digest}</p>
                <p><a href="#">MORE</a></p>
            </div>
        );
    }
}


class LinkArticle extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var article = this.props.article;
        return (
            <div className={this.props.className}>
                <Image src={article.imgSrc}/>
                <Text article={this.props.article}/>
                <div className="clear"></div>
            </div>
        );
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

export  class Blog extends React.Component {


    render() {

        var temp = this.props.temp;
        return (
            temp.articles != null &&
            <div className="wrap">
                <div className="blog-head">
                    <h3 >{temp.head}</h3>
                    <p>{temp.info}</p>
                </div>
                <BlogGrid articles={[temp.articles[0],temp.articles[1]]}/>
                <BlogGrid articles={[temp.articles[2],temp.articles[3]]}/>
            </div>


        );
    }
}

export default class ShareBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: null,
            head: 'Share',
            info: 'best articles for everyone',
        };
    }

    getArticles() {
        $.get("/articles", function (result) {
            this.setState({articles: result});
            console.log(result);
        }.bind(this));
    }

    componentWillMount(prevProps, prevState) {
        this.getArticles();
    }


    handleClick() {
        this.getArticles();
    }

    render() {
        return (
            <div className="blog s3" id="blog">
                <button style={refreshButton} onClick={this.handleClick.bind(this)}>refresh</button>
                <Blog temp={this.state}/>
            </div>
        );
    }
}



// var dom=$("#blog.wrap")[0];
//  ReactDOM.render(<ShareBlog />, document.getElementById("articles"));

// img,time,title,digest
