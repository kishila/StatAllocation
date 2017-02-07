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

const ClassSelect = React.createClass({
  propTypes: {
    enName: React.PropTypes.string.isRequired,
    jpName: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <option value={this.props.enName}>{this.props.jpName}</option>
    );
  }
});

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
