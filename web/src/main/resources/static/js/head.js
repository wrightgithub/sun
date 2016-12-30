'use strict';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state={name:this.props.value};
    }

    handleClick(arg) {
        var ret = $.get("/" + arg, function (result) {
            console.log(result);
            this.setState({name: result});
        }.bind(this));

        // var ret = $.get("/test?name=妈妈", function (result) {
        //     console.log(result);
        // });
    }

    render() {
        console.log( this.state.name);
        return (
            <button className="col-3" onClick={this.handleClick.bind(this,this.props.arg)}>
                <h1>{this.state.name}</h1>
            </button>
        );
    }
}

class Head extends React.Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div className="row">
                <div className="center">
                    <Button arg="1" value="分享"/>
                    <Button arg="2" value="原创"/>
                    <Button arg="3" value="写文章"/>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<Head />, document.getElementById("head1"));


// var sex="boy";
// var echo=function(value){
//     console.log(value)
// }
// export {sex,echo}
