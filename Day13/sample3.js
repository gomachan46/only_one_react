var ImageText = React.createClass({
    onClick() {
        console.log('clicked');
    },
    render() {
        var {text, ...other} = this.props;
        return (
            <span>{text}<img {...other} onClick={this.onClick} /></span>
        );
    }
});

ReactDOM.render(<ImageText text="名前です" src="./img/foo.png" width="100" height="200" alt="名前ですしおすし" />, document.getElementById('app3'));
