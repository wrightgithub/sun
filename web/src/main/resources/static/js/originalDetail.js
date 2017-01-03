'use strict';
class OriginalDetail extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {value: 'Type some *markdown* here!'};
    }

    getBlog() {
        $.get("/originaldetail", function (result) {
            // console.log(result);
            this.setState({value: result});
        }.bind(this));
    }

    highLight() {
        hljs.initHighlighting.called = false;
        hljs.initHighlighting();
    }

    handleChange() {
        this.getBlog();
    }

    getRawMarkup() {
        var md = new Remarkable();
        return {__html: md.render(this.state.value)};
    }

    // 先插入dom
    componentDidMount(prevProps, prevState) {
        console.log("didmount");
        this.getBlog();
    }

    // 再高亮
    componentDidUpdate(prevProps, prevState) {
        console.log("update");
        this.highLight();
    }

    render() {

        return (
            <div className="markdown-body" dangerouslySetInnerHTML={this.getRawMarkup()}/>
        );
    }
}

ReactDOM.render(<OriginalDetail />, document.getElementById('originalBlog'));

