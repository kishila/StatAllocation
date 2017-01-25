import expect from 'expect'
import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducer.jsx'

const Character = () => (
  <div>
    <ClassesSelect
      selectedClass={store.getState().selectedClass}
      onChangeClass={(e) =>
        {
          var action = "SELECT_" + e.target.value.toUpperCase() + "_CLASS";
          store.dispatch({
            type: action
          })
        }
      }
    />
    <StatusViewer
      status={store.getState().status}
    />
  </div>
)

const ClassesSelect = ({
  selectedClass,
  onChangeClass
}) => (
  <select onChange={onChangeClass}>
    <option value="knight">騎士</option>
    <option value="mercenary">傭兵</option>
    <option value="warrior">戦士</option>
    <option value="herald">伝令</option>
    <option value="thief">盗人</option>
    <option value="assassin">刺客</option>
    <option value="sorcerer">魔術師</option>
    <option value="pyromancer">呪術師</option>
    <option value="cleric">聖職者</option>
    <option value="deprived">持たざる者</option>
  </select>
)

const StatusViewer = ({
  status,
}) => (
  <table>
    <tbody>
      <tr>
        <td>レベル</td>
        <td>{status.level}</td>
      </tr>
      <tr>
          <td>生命力</td>
          <td>{status.vigor}</td>
      </tr>
      <tr>
          <td>集中力</td>
          <td>{status.attunement}</td>
      </tr>
      <tr>
          <td>持久力</td>
          <td>{status.endurance}</td>
      </tr>
      <tr>
          <td>体力</td>
          <td>{status.vitality}</td>
      </tr>
      <tr>
          <td>筋力</td>
          <td>{status.strength}</td>
      </tr>
      <tr>
          <td>技量</td>
          <td>{status.dexterity}</td>
      </tr>
      <tr>
          <td>理力</td>
          <td>{status.intelligence}</td>
      </tr>
      <tr>
          <td>信仰</td>
          <td>{status.faith}</td>
      </tr>
      <tr>
          <td>運</td>
          <td>{status.luck}</td>
      </tr>
    </tbody>
  </table>
)

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

//最初に画面を表示（1が表示される)
render()
