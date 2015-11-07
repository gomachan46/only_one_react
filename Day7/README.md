# PropやStateを使ってComponent間のやりとりをする

# Componentの設計

まずはPropとしてI/Fを考えて、そのComponentが管理すべき値で変更されるものをStateとして定義していく。

Component間での親子の関係を意識して、親がStateを持っていて、子にPropとして渡すのが基本。

つまり、変更は親だけ知っていれば良くて、子は値を使うだけなのでImmutableなPropで良い、という考え方。

```js
var User = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    id:   React.PropTypes.number.isRequired
  },
  render() {
    return (
      <div>{this.props.id}:{this.props.name}</div>
    );
  }
});

var request = require('superagent');

var Users = React.createClass({
  getInitialState() {
    return {
      users: [ {id: 1, name: "foo"}, {id: 2, name: "bar"} ]
    }
  },
  componentDidMount() {
    request.get('http://example.com/users/', (res) => {
      this.setState({users: res.body.users});
    });
  },
  render() {
    var users = this.state.users.map((user) => {
      return <User id={user.id} name={user.name} key={user.id}/>
    });
    return (
      <div>
        <p>ユーザー一覧</p>
        {users}
      </div>
    );
  }
});
```

動作サンプルでは`request`周りはそいでる。

apiを叩いてapiのけっくぉ取ってくるから動的に値が変わるよ、というイメージかな。

この例だと親がUsersで子がUserで、Usersはapiからとってきた情報をもとにusersを更新するのでusersはStateだけど、その情報を使ってhogehogeするUserの方はPropだけで事足りる。

# 子でのイベントを親でハンドリングする

子のComponentの中で発生するイベントで親がハンドリングしたい場合は子がハンドリングするための関数をPropでI/Fとして公開して、そこに親が処理を渡す形になる。

TodoListの例だと、

* 各Todoが子のComponent
* TodoListが親のComponent
* 子のComponentに削除や編集のUIがあるときに、そういった処理は親側で書いておいて、子からdelegateされるイメージ

```js
var Todo = React.createClass({
    propTypes: {
        todo: React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            text: React.PropTypes.string.isRequired
        }),
        // 削除するための処理をI/Fとして定義
        onDelete: React.PropTypes.func.isRequired
    },
    // 親に処理を委譲する
    _onDelete() {
        this.props.onDelete(this.props.todo.id);
    },
    render() {
        return (
            <div>
                <span>{this.props.todo.text}</span>
                <button onClick={this._onDelete}>delete</button>
            </div>
        );
    }
});

var TodoList = React.createClass({
    getInitialState() {
        return {
            todos: [
                {id:1, text:"advent calendar1"},
                {id:2, text:"advent calendar2"},
                {id:3, text:"advent calendar3"}
            ]
        };
    },
    // TodoListはこのComponentが管理しているので削除する処理もここにあるべき
    deleteTodo(id) {
        this.setState({
            todos: this.state.todos.filter((todo) => {
                return todo.id !== id;
            })
        });
    },
    render() {
        var todos = this.state.todos.map((todo) => {
            return <li key={todo.id}><Todo onDelete={this.deleteTodo} todo={todo} /></li>;
        });
        return <ul>{todos}</ul>;
    }
});

ReactDOM.render(<TodoList name="React"/>, document.getElementById('app2'));
```

> <Todo onDelete={this.deleteTodo} 

ここがポイントかな。

`onDelete`という子のPropに親の`deleteTodo`を渡してる。

# ref

refをComponentに対して指定することで、`this.refs.xxx`という形で子のComponentに対する参照を取得できる

基本的にはrefはdivやbuttonなどの組み込みのComponentに対して使うものにとどめておいたほうがComponent間の関係が複雑にならずにすむ。

```js
var Test = React.createClass({
  componentDidMount() {
    console.log(this.refs.myDiv.props.children);  // xxx
  },
  render() {
    return (
      <div ref="myDiv">xxx</div>
    );
  }
});
```

# getDOMNode

VirtualDOMで基本隠蔽されているDOM操作だが、focusをあわせるなど、直接DOMを触りたい時もあるはず。

そういったときにrefとセットでgetDOMNodeを使うとDOMへの参照が取れる。

ただし、DOMは書き換えないこと。(VirtualDOMとの整合性が取れなくなってしまう)

```js
var Focus = React.createClass({
  componentDidMount() {
    this.refs.myText.getDOMNode().focus();
  },
  render() {
    return (
      <div>
        <p>set focus</p>
        <input type="text" ref="myText" />
      </div>
    );
  }
});
```

# props.children

`<myComponent>xxx</myComponent>`のように書いた時のxxxを取得するには、`this.props.children`で取得可能。

refの項で出ていた表現。

```js
var Hello = React.createClass({
  render() {
    return <div>{this.props.children}</div>;
  }
});

console.log(
  React.render(
    <Hello>xxx</Hello>,
    document.body
  ).props.children
);
// => xxx

console.log(
  React.render(
     <Hello><span>1</span><span>2</span></Hello>,
     document.body
  ).props.children
);
// => [React.Element, React.Element]

console.log(
  React.render(
    <Hello></Hello>,
    document.body
  ).props.children
);
// undefined
```

props.childrenは、中身を取り出すので、その中身によって様々な結果が帰ってくる。

例えば文字列だったり、配列だったり、undefinedだったりなどなど。

こういった場合に違いを吸収してくれるのがReact.childrenに用意されている`count`や`forEach`、`map`、`only`などの関数。

```js
var Hello = React.createClass({
  render() {
    return <div>{this.props.children}</div>;
  }
});

[
  <Hello>xxx</Hello>,
  <Hello><span>1</span><span>2</span></Hello>,
  <Hello></Hello>
].forEach( jsx => {
  var children = React.render(jsx, document.body).props.children;
  console.log("#########" + children + "##########");
  console.log(React.Children.count(children));
  React.Children.forEach(children, (child) => { console.log(child) });
});

// #########xxx##########
// 1
// xxx
// #########[object Object],[object Object]##########
// 2
// ReactElement {type: "span", key: null, ref: null, _owner: null, _context: Object…}
// ReactElement {type: "span", key: null, ref: null, _owner: null, _context: Object…}
// #########undefined##########

```


オブジェクトの差をうまく吸収して正しく結果を返してくれる:)
