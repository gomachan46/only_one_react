var Items = React.createClass({
    itemName(item) {
        return `${item.name}:${item.count}`;
    },
    render() {
        var items = this.props.items.map(item => <span key={item.key}>{this.itemName(item)}</span>);
        return (
            <div>{items}</div>
        );
    }
});

var items = [
    {key:0, name: 'hoge', count: 5},
    {key:1, name: 'fuga', count: 10}
];

ReactDOM.render(<Items name="React" items={items}/>, document.getElementById("app"));
