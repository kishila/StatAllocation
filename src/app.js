import expect from 'expect'
import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducer.jsx'


const Counter = ({
  value1,
  value2,
  onIncrement1,
  onDecrement1,
  onIncrement2,
  onDecrement2,
}) => (
  <div>
    <h1>{value1}</h1>
    <button onClick={onIncrement1}>+</button>
    <button onClick={onDecrement1}>-</button>
    <br />
    <h1>{value2}</h1>
    <button onClick={onIncrement2}>+</button>
    <button onClick={onDecrement2}>-</button>
  </div>
)

//作成したreducerであるcounter関数を引数に指定してstoreを作成
const store = createStore(reducer)

//画面更新用の関数を作成
const render = () => {
  ReactDOM.render(
    <Counter
      value1={store.getState().count1}
      value2={store.getState().count2}
    onIncrement1={() =>
      store.dispatch({
        type: 'INCREMENT1'
      })}
    onDecrement1={() =>
      store.dispatch({
        type: 'DECREMENT1'
      })}
    onIncrement2={() =>
      store.dispatch({
        type: 'INCREMENT2'
      })}
    onDecrement2={() =>
      store.dispatch({
        type: 'DECREMENT2'
      })}
    />,
    document.getElementById('root')
  )
}

//subscribe関数に、現在のstateの状況を画面に表示する関数をセット
store.subscribe(render)

//最初に画面を表示（1が表示される)
render()
