'use strict';
const myarea = {
    width: '90%',
    height: 1000,
};


export function getContent() {
    return this.state.value;
}
const h3 = {backgroundColor: '#00ff00'}
export default class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {value: 'Type some *markdown* here!'};
        getContent=getContent.bind(this);
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
            <div className="row">
                <div className="col-6">
                    <h3 className="title">Input</h3>
                        <textarea style={myarea} onChange={this.handleChange} ref="textarea"
                                  defaultValue={this.state.value}/>
                </div>
                <div className="col-6">
                    <h3>Output</h3>
                    <div className="markdown-body" dangerouslySetInnerHTML={this.getRawMarkup()}/>
                </div>
            </div>
        );
    }
}


