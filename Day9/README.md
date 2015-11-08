# イベント

DOMのイベントの扱いについて

# SyntheticEvent

DOMをVirtualDOMとしてwrapしているように、DOMのイベントについてもSyntheticEventとしてwrapしている。

それによってクロスブラウザ対応されている。

I/Fはこんな感じらしい。

> boolean bubbles
> boolean cancelable
> DOMEventTarget currentTarget
> boolean defaultPrevented
> Number eventPhase
> boolean isTrusted
> DOMEvent nativeEvent
> void preventDefault()
> void stopPropagation()
> DOMEventTarget target
> Date timeStamp
> String type

# イベントハンドラ

基本的なイベントは一通りサポートされている模様。


```js
var Counter = React.createClass({
  getInitialState() {
    return {
      count: 0
    };
  },
  onClick(e) {
    // e is SyntheticEvent
    this.setState({ count: this.state.count + 1 });
  },
  render() {
    return (
      <div>
        <span>click count is {this.state.count}</span>
        <button onClick={this.onClick}>click!</button>
      </div>
    );

  }
});
```

onClickの中で`this.setState`していることからわかるように、`this`はReact.jsがComponentのインスタンスにbindしてくれている。

# Event delegation

React.jsではrootの要素にだけイベントリスナを登録して、一度そこで全部受ける。

そして内部的にマッピング情報を持っているのでそれを辿って対象のComponentでイベントを発行している。

# Not provided event

React.jsでサポートされていないイベント(windowのresizeイベントやjQuery Plugin独自のイベントなど)を使いたい場合は、イベントリスナーを追加する必要がある。

`componentDidMount`で`addEventListener`などを使ってイベントを取り扱えるようにする必要がある。

その時は`componentWillUnmount`で`removeEventListener`するなどしてイベントを解除すること。

```js
var Box = React.createClass({
  getInitialState() {
    return {
      windowWidth: window.innerWidth
    };
  },
  handleResize(e) {
    this.setState({windowWidth: window.innerWidth});
  },
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  },
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  render() {
    return <div>Current window width: {this.state.windowWidth}</div>;
  }
});
ReactDOM.render(<Box />, mountNode);
```

# touch event

タッチ系のイベントはデフォルトでは対象になっていないので、有効にする必要がある。

```
React.initializeTouchEvents(true)
```

などと呼んであげると有効になる。

## メモ

と、書いてあったけどもう0.14のご時世だと不要そう？

呼び出したところエラーになった。

調べてみたところもう削除されたっぽい？

https://github.com/facebook/react/issues/2468

https://github.com/facebook/react/pull/3442


Eventもwrapされていたんだなぁというのがハイライト。
