# Hello React.js

Hello World的なComponentを作成

## 基本の流れ

`React.createClass`でComponentを作ってそれらのComponentを組み合わせてページを作っていく

`React.render`でDOMとひも付けて実際の表示を行う

## JSX

```js
var Hello = React.createClass({
  render: function() {
    return (
      <div className="container">Hello {this.props.name}</div>
    );
  }
})

ReactDOM.render(<Hello name="React" />, document.getElementById("app"));
```

renderメソッドは変更があったようで、`React.render`ではなく`ReactDOM.render`になっていた。

JSの中にXML likeにマークアップを直接かけてる

## JSX + ES6,7のsyntax

JSXのtransformにはharmony optionがある

これを有効にすればES6,7の一部syntaxに適応できる。

```js
var Hello = React.createClass({
  render() {
    return (
      <div className="container">Hello {this.props.name}</div>
    );
  }
})

ReactDOM.render(<Hello name="React" />, document.getElementById("app"));
```
