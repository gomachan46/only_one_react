# React.jsのComponentについて

Reactは基本的にはComponentを作って組み合わせていくことでアプリケーションを作成していく。

そのComponentの基礎を学んでいく

# render

ComponentはReact.createClassにrenderメソッドをもったオブジェクトを渡すことで作成可能

```js
var Hello = React.createClass({
    render() {
        return (
            <div><span>hello</span></div>
        )
    }
})
```

その際、renderメソッドはComponentを一つだけ返す必要がある。

複数とか0個とかはダメ。

また、renderメソッドは何回呼ばれても良いようにする必要がある

# 関心の分離ではなく技術の分離

> ところで、React.jsではComponentとして、マークアップとViewのロジックをcreateClassの中に書いていくのですが、他のフレームワークのようにマークアップはHTMLやmustacheで書いてViewのロジックをJSで書くみたいに分かれてなくて気持ち悪い！という人もいるのではないでしょうか？

確かに見慣れない感はあって違和感。

だがReact.jsの開発者であるPete Huntは『それは「関心の分離(Separation of concerns)」ではなくて「技術の分離(Separation of technologies)」だ』と、そういっているらしい

なので、マークアップとViewのロジックは密であるべきだ、ということらしい。

ふむふむ
