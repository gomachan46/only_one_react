# Form

# Controlled Component

Controlled ComponentとはStateによって値を管理するComponentのこと。

テキストフィールドは以下のようになる。

```js
var Text = React.createClass({
  getInitialState() {
    return {
      textValue: "initial value"
    };
  },
  changeText(e) {
    this.setState({textValue: e.target.value});
  },
  render() {
    return (
      <div>
        <p>{this.state.textValue}</p>
        <input type="text" value={this.state.textValue} onChange={this.changeText} />
      </div>
    );
  }
});
```

valueの値をStateで管理しつつ、onChangeで明示的にsetStateして更新してあげる必要がある。

# UnControlled Component

逆に値を管理しないComponent。

初期値を設定した場合は`defaultValue`に設定する必要がある。

```js
var LiveText = React.createClass({
  getInitialState() {
    return {
      textValue: "initial value"
    };
  },
  changeText(e) {
    this.setState({textValue: this.refs.inputText.getDOMNode().value });
  },
  render() {
    return (
      <div>
        <p>{this.state.textValue}</p>
        <input type="text" ref="inputText" defaultValue="initial value" />
        <button onClick={this.changeText}>change</button>
      </div>
    );
  }
});
```
