# mixin

Reactにもmixinの機構がある。(もうすでに若干触っている気がするけど)

使い方は簡単で`mixins`というキーに配列でmixinしたいObjectを渡してあげるだけ。

```js
var Logger = {
  logging(str) {
    console.log(str);
  },
  componentDidMount() {
    this.logging("component did mount");
  }
};

var Hello = React.createClass({
  mixins: [Logger],
  render() {
    this.logging("render");
    return <div>Hello</div>
  }
});
```

楽ちんだ！！！

## 呼ばれる順番

呼ばれる順番としては配列の順番通りに呼ばれて、最後にComponentのものが呼ばれる。

## stateやpropの定義

`getInitializeState()`や`getDefaultProps()`周りをmixinすると、mixinしたものとマージされる。

キーが同じものをmixinするとエラーになってしまうので注意が必要。

## 同じメソッド名の定義

多重定義は許されていないので、エラーとなる。