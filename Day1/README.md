# React.jsとは

http://facebook.github.io/react/

MVCフレームワークでいうところのViewの部分をComponentとして作っていくためのライブラリ。

本当にComponentを作るだけ。

## 特徴

* JUST THE UI
  * 覚えること少ない
  * 導入もしやすい
    * 他のjsフレームワークに混ぜるとかもできる
* VIRTUAL DOM
  * 仮想のDOMで高速処理を実現
  * DOM Treeのような構造体を持っていて、再描画時にその前後の状態を比較して賢く実際のDOMに反映
  * 開発者は気にせずとも裏で勝手にやってくれている
* DATA FLOW
  * 双方向データバインディングなフレームワークのようにはっきりと書くコードの量が減るわけではない
  * データ管理のComponentがいて、そのデータを子のComponentに渡していく一方向なデータの流れになっていてわかりやすい
  * Fluxがほげほげって話が出てくるのはここがゆえかな？
* JSX
  * XMLライクなシンタックスが利用可能
  * 気持ち悪いなら使わずjsで書いていくこともできる
* Flux
  * FluxはMVCのようなアーキテクチャの話
  * 処理を一方向の流れでやっていきますよ〜っていう考えとざっくり思っている
  
## ちょいちょいお試しする環境

jsfiddleが便利。

* JSXあり
  * http://jsfiddle.net/vjeux/kb3gN/
* JSXなし
  * http://jsfiddle.net/vjeux/VkebS/