'use strict';
import {Blog} from './article';
export default class OriginalBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: null,
            head: 'Blog',
            info: 'Original Blog ',
        };
    }

    getArticles() {
        $.get("/original", function (result) {
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
                <Blog temp={this.state}/>
            </div>
        );
    }
}



// img,time,title,digest
