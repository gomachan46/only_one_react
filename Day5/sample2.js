var Avatar = React.createClass({
    propTypes: {
        name:   React.PropTypes.string.isRequired,
        id:     React.PropTypes.number.isRequired,
        width:  React.PropTypes.number.isRequired,
        height: React.PropTypes.number.isRequired,
        alt:    React.PropTypes.string
    },
    render() {
        var src = `./img/avatar_${this.props.id}.png`;
        return (
            <div>
                <img src={src} width={this.props.width} height={this.props.height} alt={this.props.alt} />
                <span>{this.props.name}</span>
            </div>
        );
    }
});

ReactDOM.render(<Avatar name="foo" id={10} width={100} height={100} />, document.getElementById('app2'));