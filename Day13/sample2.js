var ImageText = React.createClass({
    render() {
        var {text, hoge, ...other} = this.props;
        return (
            <div>
                <span>{text}<img {...other} /></span>
                <p>{hoge}</p>
            </div>
        );
    }
});

ReactDOM.render(<ImageText text="名前です" hoge="複数個spreadもできる" src="./img/foo.png" width="100" height="200" alt="名前ですしおすし" />, document.getElementById('app2'));
