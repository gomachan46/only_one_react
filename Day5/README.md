# Propについて

# 基本的な使い方

基本的にはComponentのattributeとして定義してComponentの中では`this.props.xxx`として参照する。

それだけ。

Objectでも関数でも何でもOK。

```js
var Avatar = React.createClass({
  render() {
    var avatarImg = `/img/avatar_${this.props.user.id}.png`;
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

ReactDom.render(<Avatar user={user} />, document.getElementById('app'));
// <Avatar user={user} />
```

Propはあくまで外部から渡された値で、そのComponentが管理している値ではない。

なので変更してはいけない。

そのComponentが変更を管理するような値の場合にはStateを使うべき。

なのでPropはImmutableであり、外部とのI/Fとなっている。

# PropType

外部とのインターフェースとなるもので、そうなってくるとバリデーションしたくなってくる。

そこで出てくるのがPropTypesで、Propについての型などの制約を指定することが可能。

```js
var Avatar = React.createClass({
  propTypes: {
    name:   React.PropTypes.string.isRequired,
    id:     React.PropTypes.number.isRequired,
    width:  React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    alt:    React.PropTypes.string
  },
  render() {
    var src = `/img/avatar/${this.props.id}.png`;
    return (
      <div>
        <img src={src} width={this.props.width} height={this.props.height} alt={this.props.alt} />
        <span>{this.props.name}</span>
      </div>
    );
  }
});
```

## メモ

呼び出しのところを、例に習って以下のようにしていたけれど、エラーが発生していた。

```js
ReactDOM.render(<Avatar name="foo" id=1 width=100 height=100 />, document.getElementById('app'));
```

> JSX value should be either an expression or a quoted JSX text

調べてみると、以下のissueにたどり着いた

https://github.com/facebook/react/issues/468

どうやら、`{}`で囲ってほしいとのこと。了解です。

```js
ReactDOM.render(<Avatar name="foo" id={1} width={100} height={100} />, document.getElementById('app'));
```

無事に動くようになった。

PropTypes、いろいろありそうなのでつかいたいな〜と思った時にちらちら調べてみるのが吉っぽそう。

## PropTypesの注意点

> 注意点としては、ここで指定した制約については、パフォーマンス的な理由からProduction環境ではチェックされずに、Developでもエラーになるわけではなくてconsole.warnで出力されるのみです。
> エラーにしてほしいというissueも上がってたりしたので今後エラーになるなどの変更もあるかもですが...。

現時点ではwarningだったなぁ...

検知して処理を抜けることも可能、だったりエラーにもオプションでできるよ、とかそんな感じだったりしないかな〜

# デフォルト値を設ける

getDefaultPropsでObjectを返すことでデフォルト値の設定も可能。

Componentの定義が作られるときにだけ呼ばれる。

```js
var Hello = React.createClass({
  getDefaultProps() {
    return {
      name: "React"
    };  
  },
  render() {
    return <div>Hello {this.props.name}</div>
  }
});

```

`name="React"` みたいに書かなくてもはじめから`React`って出してくれる。

# setPropsとreplaceProps

`ReactDOM.render`の返り値がcomponentなので、それにたいしてhogehogeすることで値を書き換えてrerenderしてくれる。

```js
var Test = React.createClass({
  getDefaultProps: function() {
    return {
      id: 1
    };
  },
  render: function() {
    return (
      <div>{this.props.id}:{this.props.name}</div>
    );
  }
});

var component = React.render(<Test name="bar" />, document.body);

component.setProps({ name: "foo" });      // <div>1:foo</div>
component.replaceProps({ name: "hoge" }); // <div>:hoge</div>
```

setとreplaceの違いはmergeするか置き換えるか。

上記の例だとsetだとidの値は1のまま残るが、replaceだとidの値はnullになる
