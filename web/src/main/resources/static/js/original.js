'use strict';

class Image extends React.Component {


    render() {
        return (
            <div className="img-left">
                <img src="/static/img/blog1.jpg" alt=""/>
            </div>
        );
    }
}

class Text extends React.Component {

    render() {
        // var blog = this.props.blog;
        return (
            <div className="text-right">
                <h6 >date</h6>
                <h3 ><a href="#">title</a></h3>
                <img src="/static/img/line.png" alt=""/>
                <p>摘要</p>
                <p><a href="#">MORE</a></p>
            </div>
        );
    }
}


class Original extends React.Component {
    render() {
        return (
            <div className="row">
                <Image />
                <Text />
            </div>
        );
    }
}

ReactDOM.render(<Original />, document.getElementById("original"));


// img,time,title,digest
