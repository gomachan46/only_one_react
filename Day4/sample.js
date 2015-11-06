var Hello = React.createClass({
    render() {
        return (
            <div>Hello {this.props.name}</div>
        )
    }
});

ReactDOM.render(<Hello name="React" />, document.getElementById("app"));
