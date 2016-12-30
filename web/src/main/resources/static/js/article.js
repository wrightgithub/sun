'use strict';

// import {sex,echo} from "./head.js";
//
// console.log(sex)   // boy
// echo(sex) // boy

const hstyle = {
    margin: '0',
    padding: '0',
    border: '0',
    fontSize: '100%',
    font: 'inherit',
    verticalAlign: 'baseline',
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
        var article=this.props.article;
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

class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    getArticles() {
        $.get("/articles", function (result) {
            console.log(result);
            this.setState({
                articles: result
            });
            console.log(result);
        }.bind(this));

    }


    componentDidUpdate(prevProps, prevState) {

    }

    componentWillMount(prevProps, prevState) {
        this.getArticles();
    }

    // componentDidMount(prevProps, prevState) {
    //     this.getArticles();
    // }

    handleClick() {
        this.getArticles();
    }

    render() {
        return (
            <div className="blog s3" id="blog">
                <button className="btn btn-outline" onClick={this.handleClick.bind(this)}>refresh</button>
                <div className="wrap">
                    <div className="blog-head">
                        <h3 >BLOG</h3>
                        <p>Proin iaculis purus consequat sem cure.</p>
                    </div>
                    <BlogGrid articles={[this.state.articles[0],this.state.articles[1]]}/>
                    <BlogGrid articles={[this.state.articles[2],this.state.articles[3]]}/>
                </div>
            </div>
        );
    }
}

// var dom=$("#blog.wrap")[0];
ReactDOM.render(<Blog />, document.getElementById("articles"));


// img,time,title,digest
