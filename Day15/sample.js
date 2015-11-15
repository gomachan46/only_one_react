var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');


var Hello = React.createClass({
    getInitialState() {
        return {
            isWarning: false,
            isImportant: false
        };
    },
    toggleWarning() {
        this.setState({ isWarning: !this.state.isWarning });
    },
    toggleImportant() {
        this.setState({ isImportant: !this.state.isImportant});
    },
    render() {
        var style = classNames({
            'is-warning': this.state.isWarning,
            'is-important': this.state.isImportant
        });
        return (
            <div>
                <button onClick={this.toggleWarning}>warning</button>
                <button onClick={this.toggleImportant}>important</button>
                <p className={style}>hogehoge</p>
            </div>
        );
    }
});

ReactDOM.render(<Hello />, document.getElementById('app'));