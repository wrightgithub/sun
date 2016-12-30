'use strict';
const myarea = {
    width: 300,
    height: 300,
};
const h3 = {backgroundColor: '#00ff00'}
class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {value: 'Type some *markdown* here!'};
    }

    handleChange() {
        this.setState({value: this.refs.textarea.value});
    }

    getRawMarkup() {
        var md = new Remarkable();
        return {__html: md.render(this.state.value)};
    }

    componentDidUpdate(prevProps, prevState) {
        hljs.initHighlighting.called = false;
        hljs.initHighlighting();
        console.log("componentDidUpdate");
    }

    componentDidMount(prevProps, prevState) {
        // hljs.initHighlighting();
        console.log("componentDidMount");
    }


    render() {

        return (
            <div className="MarkdownEditor">
                <h3 className="title">Input</h3>
            <textarea style={myarea} onChange={this.handleChange} ref="textarea"
                      defaultValue={this.state.value}/>
                <h3>Output</h3>
                <div className="markdown-body" dangerouslySetInnerHTML={this.getRawMarkup()}/>
            </div>
        );
    }
}

ReactDOM.render(<MarkdownEditor />, document.getElementById('example'));

