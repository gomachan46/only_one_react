var User = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        id:   React.PropTypes.number.isRequired
    },
    render() {
        return (
            <div>{this.props.id}:{this.props.name}</div>
        );
    }
});

var Users = React.createClass({
    getInitialState() {
        return {
            users: [ {id: 1, name: "foo"}, {id: 2, name: "bar"} ]
        }
    },
    componentDidMount() {
        this.setState({users: [{id: 1, name: "foobar"}, {id: 2, name: "piyopiyo"}, {id: 3, name: "hoge"}]});
    },
    render() {
        var users = this.state.users.map((user) => {
            return <User id={user.id} name={user.name} key={user.id}/>
        });
        return (
            <div>
                <p>ユーザー一覧</p>
                {users}
            </div>
        );
    }
});

ReactDOM.render(<Users name="React"/>, document.getElementById('app'));