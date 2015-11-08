var Counter = React.createClass({
    getInitialState() {
        return {
            count: 0
        };
    },
    onClick(e) {
        // e is SyntheticEvent
        this.setState({ count: this.state.count + 1 });
    },
    render() {
        return (
            <div>
                <span>click count is {this.state.count}</span>
                <button onClick={this.onClick}>click!</button>
            </div>
        );

    }
});

ReactDOM.render(<Counter />, document.getElementById('app'));