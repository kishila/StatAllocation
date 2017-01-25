import React from 'react';

export default function ClassesSelect({ selectedClass, onChangeClass }) {
  return (
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
  );
}
