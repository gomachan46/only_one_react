var OreSelectBox = React.createClass({
  getDefaultProps: function() {
    return {
      answers: [1, 10, 100, 1000]
    };
  },
  getInitialState: function() {
    return {
      selectValue: 1,
      selectValues: [1,100]
    };
  },
  onChangeSelectValue: function(e) {
    this.setState({selectValue: e.target.value});
  },
  onChangeSelectValues: function(e) {
    var values = _.chain(e.target.options)
            .filter(function(option) { return option.selected })
            .map(function(option) { return +option.value })
            .value()
        ;
    this.setState({selectValues: values});
  },
  render: function() {
    var options = this.props.answers.map(function(answer) {
      return <option value={answer} key={answer}>{answer}</option>;
    });
    return (
        <div>
          <div>selectValue: {this.state.selectValue}</div>
          <div>
            <select value={this.state.selectValue} onChange={this.onChangeSelectValue}>
              {options}
            </select>
          </div>
          <div>selectValues: {this.state.selectValues.join(",")}</div>
          <div>
            <select multiple={true} defaultValue={this.state.selectValues} onChange={this.onChangeSelectValues}>
              {options}
            </select>
          </div>
        </div>
    );
  }
});

ReactDOM.render(<OreSelectBox />, document.getElementById('app4'));
