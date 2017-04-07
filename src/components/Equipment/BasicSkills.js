import React from 'react';
import store from '../../store';

export default function BasicSkills() {
  const hp = store.getState().equipment.hp;
  const fp = store.getState().equipment.fp;
  const stamina = store.getState().equipment.stamina;

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td width="100">HP</td>
            <td>{hp}</td>
          </tr>
          <tr>
            <td width="100">FP</td>
            <td>{fp}</td>
          </tr>
          <tr>
            <td width="100">スタミナ</td>
            <td>{stamina}</td>
          </tr>
          <tr>
            <td colSpan="2"><hr /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
