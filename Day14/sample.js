var Logger = {
    logging(str) {
        console.log(str);
    },
    componentDidMount() {
        this.logging("component did mount");
    }
};

var Hello = React.createClass({
    mixins: [Logger],
    render() {
        this.logging("render");
        return <div>Hello</div>
    }
});

ReactDOM.render(<Hello />, document.getElementById('app'));