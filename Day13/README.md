# Componentの拡張

既存のComponentを拡張してComponentを作る、といったことについて学ぶ。

# テキスト付きの画像Componentの例

テキストと画像がセットになった、`ImageText`というComponentを作ってみる。

```js
var ImageText = React.createClass({
    render() {
        return (
            <span>{this.props.text}<img src={this.props.src} width={this.props.width} height={this.props.height} /></span>
        );
    }
});

<ImageText text="名前です" src="./img/foo.png" width="100" height="200" />
```

単純な実装はこんな感じだが、`spread attributes`を使うともっと楽に書ける。

```js
var ImageText = React.createClass({
    render() {
        var {text, ...other} = this.props;
        return (
            <span>{text}<img {...other} /></span>
        );
    }
});
```

このようにするとtextとだけ特別扱いして、他のpropsに関してはimgのattributesに突っ込める。おお。

ただし、Componentのインターフェースがわかりにくくなってしまう点があるので、なるべくPropTypesを指定してあげると一覧性も高くなってよい。

# クリックイベントを送信するようにしてみる

```js
var request = require('superagent');
var ImageText = React.createClass({
  onClick() {
    request.get("/click_img", { img: this.props.src });
  },
  render() {
    var {text, ...other} = this.props;
    return (
      <span>{text}<img {...other} onClick={this.onClick} /></span>
    );
  }
});
```

こんな風にonClickを追加してあげるとPropの値をマージしてくれる。

ただし、`{...other}`の前に持ってくると`onClick`の挙動が上書きされてしまうので、後ろに持ってきて後からマージさせてあげること。
