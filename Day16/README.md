# Animation

Addonとしてサポートされている。

方法としては2パターン。

* CSS Animationを使ったCSSTransitionGroup
* ComponentのLifecycle MethodのようにMethodでフック

# CSSTransitionGroup

Componentの追加・削除時にCSSアニメーションさせることが可能。

追加時・削除時にclassが追加されるのでcssにアニメーションを記述する、と言った感じ。

```js
var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var Hello = React.createClass({
  getInitialState: function() {
    return {
      value: '(´・ω・｀)'
    };
  },
  onClick: function() {
    var value = this.state.value === '(´・ω・｀)' ? '(｀･ω･´)ゞ' : '(´・ω・｀)';
    this.setState({ value: value });
  },
  render: function() {
    var value = <span className="sample" key={this.state.value}>{this.state.value}</span>; 
    return (
      <div>
        <div>Animation!!<button onClick={this.onClick}>click!!</button></div>
        <CSSTransitionGroup transitionName="sample">
          {value}
        </CSSTransitionGroup>
      </div>
    );
  }
});
```

```css
.sample-enter {
     -webkit-transition: 1s ease-in;
}
.sample-enter.sample-enter-active {
    font-size: 80px;
}
.sample-leave {
    -webkit-transition: .5s ease-out;
}
.sample-leave.sample-leave-active {
    font-size: 10px;
}
```

ReactCSSTransitionGroupはReactTransitionGroupのインターフェース。なるほど。

これを使えばCSSアニメーションをReactで簡単に使えるよ、と。

なのでReactTransitionGroupは直接触ることはなさそう？

## メモ

色々と勝手が変わっていた気がする。(間違ってる可能性も)

まず、パッケージを入れた。

```
npm install --save react-addons-css-transition-group
```

んでsample.jsを以下のようにした。

```js
var React = require('react');
var ReactDOM = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


var Hello = React.createClass({
  getInitialState: function() {
    return {
      value: '(´・ω・｀)'
    };
  },
  onClick: function() {
    var value = this.state.value === '(´・ω・｀)' ? '(｀･ω･´)ゞ' : '(´・ω・｀)';
    this.setState({ value: value });
  },
  render: function() {
    var value = <span className="sample" key={this.state.value}>{this.state.value}</span>;
    return (
      <div>
        <div>Animation!!<button onClick={this.onClick}>click!!</button></div>
        <ReactCSSTransitionGroup transitionName="sample" transitionEnterTimeout={1000} transitionLeaveTimeout={500}>
          {value}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

ReactDOM.render(<Hello />, document.getElementById('app'));
```

ReactCSSTransitionGroupをReact.addonsから取るのではなく先ほど入れたパッケージから取るようにした。

また、`react-addons` はdeprecatedになったっぽい？

あと`<ReactCSSTransitionGroup />`の属性に`transitionEnterTimeout`と`transitionLeaveTimeout`の項目が追加で必要になっていた。

これらはアニメーションのON、OFFのタイムアウト時間を記述するものの様子。単位はms。

css側に書いているアニメーションと時間を合わせて置けばぴったりに動くし、ちょっとずらしたりしても面白くなるのかもしれない。(イマイチイメージ出来ないけど)
