import React from 'react';

const classNames = [
  {enName: "knight", jpName: "騎士"},
  {enName: "mercenary", jpName: "傭兵"},
  {enName: "warrior", jpName: "戦士"},
  {enName: "herald", jpName: "伝令"},
  {enName: "thief", jpName: "盗人"},
  {enName: "assassin", jpName: "刺客"},
  {enName: "sorcerer", jpName: "魔術師"},
  {enName: "pyromancer", jpName: "呪術師"},
  {enName: "cleric", jpName: "聖職者"},
  {enName: "deprived", jpName: "持たざる者"}
]

// 素性のセレクタの<option>部分のコンポーネント
class ClassSelect extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <option value={this.props.enName}>{this.props.jpName}</option>
    );
  }
}
// 素性の数だけコンポーネントの生成
const selectClass = classNames.map((className, i) => {
  return <ClassSelect enName={className.enName} jpName={className.jpName} key={i} />
});

export default function ClassesSelect({ selectedClass, onChangeClass }) {

  return (
    <select onChange={onChangeClass}>
      {selectClass}
    </select>
  );
}
