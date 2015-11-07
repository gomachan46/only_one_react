# State

ImmutableなPropと、MutableなState。

# 基本的な使い方

`getInitialState`でstateの初期値を返して、データに変更があった時に`this.setState`で更新する。

基本のノリはpropと一緒で、setStateもあるしreplaceStateもある。

# Stateを使う場面

一番良く使うのがテキストフィールドのような、Component内でユーザのアクションによって変化する値を管理したいようなとき。

あとはAjaxの時とか。

# Stateの注意点

値の直接更新はダメ、ゼッタイ。

必ずsetState経由で更新する。

やはり理由としてはsetStateすることでrerenderされるかららしい。

# Stateの値自体もなるべくImmutableであると考える

なので、例えば`this.state.list`な値があってlistに要素を追加して更新したい時も、既存のlistにpushしてsetStateするよりは新しい配列をsetStateするほうがいいらしい。

# Stateの使用は最低限に

Propだけで済ませられるならそれが良い。(わかりやすいので)

基本的にはPropで考えていて、どうしてもStateで管理したい時だけStateを出すようにする意識を持ったほうが良い。
