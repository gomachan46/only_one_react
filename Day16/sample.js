var React = require('react');
var ReactDOM = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


var Hello = React.createClass({
  getInitialState: function() {
    return {
      value: '(´・ω・｀)'
    };
  },
  onClick: function() {
    var value = this.state.value === '(´・ω・｀)' ? '(｀･ω･´)ゞ' : '(´・ω・｀)';
    this.setState({ value: value });
  },
  render: function() {
    var value = <span className="sample" key={this.state.value}>{this.state.value}</span>;
    return (
      <div>
        <div>Animation!!<button onClick={this.onClick}>click!!</button></div>
        <ReactCSSTransitionGroup transitionName="sample" transitionEnterTimeout={1000} transitionLeaveTimeout={500}>
          {value}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

ReactDOM.render(<Hello />, document.getElementById('app'));
