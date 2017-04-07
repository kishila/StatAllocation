import React from 'react';
import store from '../../../store';

export default function WeaponStatus({ weapon }) {
  return (
    <table>
      <tbody>
        <tr>
          <td colSpan="4">能力補正/必要能力</td>
        </tr>
        <tr>
          <td>筋</td>
          <td>技</td>
          <td>理</td>
          <td>信</td>
        </tr>
        <tr>
          <td>{weapon.bonuses[0]}</td>
          <td>{weapon.bonuses[1]}</td>
          <td>{weapon.bonuses[2]}</td>
          <td>{weapon.bonuses[3]}</td>
        </tr>
      </tbody>
    </table>
  );
}
