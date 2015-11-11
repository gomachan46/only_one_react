var Text = React.createClass({
    getInitialState() {
        return {
            textValue: "initial value"
        };
    },
    changeText(e) {
        this.setState({textValue: e.target.value});
    },
    render() {
        return (
            <div>
                <p>{this.state.textValue}</p>
                <input type="text" value={this.state.textValue} onChange={this.changeText} />
            </div>
        );
    }
});

ReactDOM.render(<Text />, document.getElementById('app'));