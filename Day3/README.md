# JSXを使ってみる

```jsx
<div>Hello {this.props.name}</div>
```

こんな感じのhtmlっぽいのがJSX。

基本はhtmlと変わらずかけるが、jsの予約語とかぶっているところは避けられている

* classはclassName
* labelのfor属性はhtmlfor
* etc?

詳しくは以下

http://facebook.github.io/jsx/

いろいろ変換方法はある様子だけど、今回は公式サイトに習ってdownloadしてきたソース+babelのcdnで動かしている

## JSXを使う意味

* HTMLに近い感じで記述できてわかりやすい
* 裏でよしなにやってくれる
* ES6,7のfeatureを利用可能
* 別に学習コストはない

## 変換結果の確認

```
ちょっと変換を確認したい場合は↓などを活用すると便利です。

JSXの変換結果の確認
* http://facebook.github.io/react/jsx-compiler.html
HTMLをもとにどうJSXを書けばいいのかの確認
* http://facebook.github.io/react/html-jsx.html
```

となっていたけれど、jsx-compilerの方を見てみると、

```
JSX Compiler Service
This tool has been removed as JSXTransformer has been deprecated.
We recommend using another tool such as the Babel REPL.
```

とか言われていた。流れはえ〜。

もう片一方は健在のご様子だった。

JSXTransformerはもうdeprecatedなので見ないことにしよう。

## サンプル動かしてみた

```jsx
var Items = React.createClass({
    itemName(item) {
        return `${item.name}:${item.count}`;
    },
    render() {
        var items = this.props.items.map(item => <span key={item.key}>{this.itemName(item)}</span>);
        return (
            <div>{items}</div>
        );
    }
});

var items = [
    {key:0, name: 'hoge', count: 5},
    {key:1, name: 'fuga', count: 10}
];

ReactDOM.render(<Items name="React" items={items}/>, document.getElementById("app"));

```

記事に書いてあったのを書き写してみただけのつもりだったけど動かなかったのでメモ

* this.propsに要素を加えるときはrenderするときにattributeを追加する必要がある
  * items={items}のところ
* 配列を回してliの要素などを作っていく時はkey属性を付与してあげないとreactが怒ってくる
  * 再描画時とかに見てるのかな？