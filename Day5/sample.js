var Avatar = React.createClass({
    render() {
        var avatarImg = `./img/avatar_${this.props.user.id}.png`;
        return(
            <div>
                <span>{this.props.user.name}</span>
                <img src={avatarImg} />
            </div>
        );
    }
});

var user = {
    id: 10,
    name: "Hoge"
};

ReactDOM.render(<Avatar user={user} />, document.getElementById('app'));