var OreTextArea = React.createClass({
    getInitialState() {
        return {
            textAreaValue: "initial value"
        };
    },
    onChangeText(e) {
        this.setState({textAreaValue: e.target.value});
    },
    onClick() {
        this.setState({textAreaValue: this.refs.textArea.getDOMNode().value});
    },
    render() {
        return (
            <div>
                <div>{this.state.textAreaValue}</div>
                <div>
                    <textarea value={this.state.textAreaValue} onChange={this.onChangeText} />
                </div>
                <div>
                    <textarea ref="textArea">this is default value</textarea>
                    <button onClick={this.onClick}>change</button>
                </div>
            </div>
        );
    }
});