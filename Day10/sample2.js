var LiveText = React.createClass({
    getInitialState() {
        return {
            textValue: "initial value"
        };
    },
    changeText(e) {
        this.setState({textValue: this.refs.inputText.getDOMNode().value });
    },
    render() {
        return (
            <div>
                <p>{this.state.textValue}</p>
                <input type="text" ref="inputText" defaultValue="initial value" />
                <button onClick={this.changeText}>change</button>
            </div>
        );
    }
});

ReactDOM.render(<LiveText />, document.getElementById('app2'));