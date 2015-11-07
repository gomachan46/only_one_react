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
