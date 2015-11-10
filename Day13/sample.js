var ImageText = React.createClass({
    render() {
        return (
            <span>{this.props.text}<img src={this.props.src} width={this.props.width}
                                        height={this.props.height}/></span>
        );
    }
});

ReactDOM.render(<ImageText text="名前です" src="./img/foo.png" width="100" height="200" />, document.getElementById('app'));