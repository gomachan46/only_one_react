# 地味だけど重要なkey

ユーザーが意識するべき点である、keyについて。

# key

React.jsではPropにkeyという値を指定できるようになっている。

これをリストを表示するようなときにつけていないと怒られる。

> Each child in an array should have a unique "key" prop. Check the render method of KeyTrap. See http://fb.me/react-warning-keys for more information.

このkeyはVirtualDOMのdiffから実際のDOMに反映させるときに最小限の変更にするために活用される。

なので、配列の要素にはUniqueなIDを指定しいておいてあげると変更の合ったところだけDOMに反映させれば良くなるので良い。

# ReactCSSTransitionGroup

React.jsにはCSSアニメーションのためのaddonがある。それがReactCSSTransitionGroup。

これは要素が一つの場合もアニメーションさせる要素には必ずkeyを付けてあげる必要がある。

要素の追加や削除を効率的に追従するにはkeyが必要。

# keyは意外と大事！