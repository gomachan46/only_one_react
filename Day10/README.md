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

# textarea

テキストエリアの場合はテキストフィールドと同じようにvalueに値を設定する。

`defaultValue`ではなく、`<textarea>xxxx</textarea>`のように普通にHTMLのようにしてあげればOK！

```js
var OreTextArea = React.createClass({
  getInitialState() {
    return {
      textAreaValue: "initial value"
    };
  },
  onChangeText(e) {
    this.setState({textAreaValue: e.target.value});
  },
  onClick() {
    this.setState({textAreaValue: this.refs.textArea.getDOMNode().value}); 
  },
  render() {
    return (
      <div>
        <div>{this.state.textAreaValue}</div>
        <div>
          <textarea value={this.state.textAreaValue} onChange={this.onChangeText} />
        </div>
        <div>
          <textarea ref="textArea">this is default value</textarea>
          <button onClick={this.onClick}>change</button>
        </div>
      </div>
    );
  }
});
```
