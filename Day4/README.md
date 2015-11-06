# React.jsのComponentについて

Reactは基本的にはComponentを作って組み合わせていくことでアプリケーションを作成していく。

そのComponentの基礎を学んでいく

# render

ComponentはReact.createClassにrenderメソッドをもったオブジェクトを渡すことで作成可能

```js
var Hello = React.createClass({
    render() {
        return (
            <div><span>hello</span></div>
        )
    }
})
```

その際、renderメソッドはComponentを一つだけ返す必要がある。

複数とか0個とかはダメ。

また、renderメソッドは何回呼ばれても良いようにする必要がある

# 関心の分離ではなく技術の分離

> ところで、React.jsではComponentとして、マークアップとViewのロジックをcreateClassの中に書いていくのですが、他のフレームワークのようにマークアップはHTMLやmustacheで書いてViewのロジックをJSで書くみたいに分かれてなくて気持ち悪い！という人もいるのではないでしょうか？

確かに見慣れない感はあって違和感。

だがReact.jsの開発者であるPete Huntは『それは「関心の分離(Separation of concerns)」ではなくて「技術の分離(Separation of technologies)」だ』と、そういっているらしい

なので、マークアップとViewのロジックは密であるべきだ、ということらしい。

ふむふむ

# Component間のやりとり

propがI/Fとなって外部とやりとりできる。

これは前に試しててわかったところかな。

`Hello name="foo" />` のようにすると`this.props.name`として参照可能になる。

```js
var Hello = React.createClass({
  render() {
    return (
      <div>Hello {this.props.name}</div>
    )
  }
});

ReactDOM.render(<Hello name="React"/>, document.getElementById("app"));
```

# 動的に更新する

ユーザのアクションやAjaxリクエストなどによって動的に値が変化するときは`State`が使える。

`this.state.xxx`で参照可能。

更新するときは`this.setState`を使用する。

```js
var Counter = React.createClass({
  getInitialState() {
    return {
      count: 0
    };
  },
  onClick() {
    this.setState({count: this.state.count + 1});
  },
  render() {
    return (
      <div>
        <div>count:{this.state.count}</div>
        <button onClick={this.onClick}>click!</button>
      </div>
    );

  }
});
```

`onClick`の部分がポイント。

this.setStateで取るのはオブジェクトで、その他のstateも一括更新可能っぽい

# React.createClassについて

前は「Componentの定義を作って、Elementを返す」というところまでやっていたようだが、いまは責務が分離された。

* Componentの定義を返すのがcreateClass
* Elementを作るのがcreateElement

いい話っぽい。
ただし、JSXを使っている場合は同じようにReact.createClassの戻り値を直接渡してもOK。

```js
var Hello = React.createClass({
  render() {
    return <div>{this.props.name}</div>;
  }
});

React.render(React.createElement(Hello, {name: "foo"}), document.body);
// or
React.render(React.createFactory(Hello)({name: "foo"}), document.body);
// JSXはそのままでOK
React.render(<Hello name="foo" />, document.body);
```


