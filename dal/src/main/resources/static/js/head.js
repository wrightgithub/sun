'use strict';

class Head extends React.Component {
    constructor() {
        super();
    }

    handleClick(arg) {
        console.log(arg);
        var ret=$.get("/"+arg,function (result) {
           console.log(result);
        });
        console.log(ret);


        var ret=$.get("/test?name=妈妈",function (result) {
            console.log(result);
        });
    }

    render() {
        return (
            <div className="row">
                <div className="center">
                    <button className="col-3" onClick={this.handleClick.bind(this,1)}><h4>分享</h4></button>
                    <button className="col-3" onClick={this.handleClick.bind(this,2)}><h4>原创</h4></button>
                    <button className="col-3" onClick={this.handleClick.bind(this,3)}><h4>写文章</h4></button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Head />, document.getElementById("head1"));
