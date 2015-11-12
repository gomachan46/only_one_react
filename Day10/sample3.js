var OreTextArea = React.createClass({
    getInitialState() {
        return {
            textAreaValue: "initial value"
        };
    },
    onChangeText(e) {
        this.setState({textAreaValue: e.target.value});
    },
    render() {
        return (
            <div>
                <div>{this.state.textAreaValue}</div>
                <div>
                    <textarea value={this.state.textAreaValue} onChange={this.onChangeText} />
                </div>
            </div>
        );
    }
});

ReactDOM.render(<OreTextArea />, document.getElementById('app3'));
