import expect from 'expect'
import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducer.jsx'
import Character from './components/Character';

//作成したreducerであるcounter関数を引数に指定してstoreを作成
const store = createStore(reducer)

//画面更新用の関数を作成
const render = () => {
  ReactDOM.render(
    <Character />,
    document.getElementById('root')
  )
}

//subscribe関数に、現在のstateの状況を画面に表示する関数をセット
store.subscribe(render)

window.store = store;

//最初に画面を表示（1が表示される)
window.onload = render;
