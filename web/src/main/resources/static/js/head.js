'use strict';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: this.props.value};
    }


    handleClick(arg) {
        $.get("/" + arg, function (result) {
            console.log(result);
            this.setState({name: result});
        }.bind(this));


    }


    render() {
        return (
            <a href={this.props.href}>
                <button className="col-4" onClick={this.handleClick.bind(this,this.props.arg)}>
                    <h1>{this.state.name}</h1>
                </button>
            </a>
        );
    }
}

class Head extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="row">
                <div >
                    <Button href="#articles" arg="1" value="分享"/>
                    <Button href="#original" arg="2" value="原创"/>
                    <Button arg="3" value="写文章"/>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<Head />, document.getElementById("head1"));


