var Hello = React.createClass({
    render() {
        return (
            <div className="container">Hello {this.props.name}</div>
        );
    }
})

ReactDOM.render(<Hello name="React" />, document.getElementById("app"));