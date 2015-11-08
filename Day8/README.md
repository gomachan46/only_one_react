# ライフサイクル

Componentの状態の変化に合わせていろいろとメソッドを呼んでくれる

* componentWillMount()
* componentDidMount()
* componentWillReceiveProps(nextProps)
* shouldComponentUpdate()
* componentWillUpdate(nextProps, nextState)
* componentDidUpdate(prevProps, prevState)
* componentWillUnmount()
* isMounted()

![lifecycle](https://kunigami.files.wordpress.com/2016/01/react.png)

いい感じにまとまってるぽい図があった

よく使うのは`componentDidMount`や`componentWillUnmount`あたりらしい。

イベントの登録をcomponentDidMountでやってcomponentWillUnmountで解除。

とりあえずはそこだけ覚えておいて、ほかのフックポイントが使いたいような感じになったらその時に調べる、で良さそう。

`isMounted`はマウントされているかどうかをチェックできる関数。