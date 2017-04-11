import React from 'react';

export default function WeaponStatus({ weapon }) {
  return (
    <table className="table-bordered text-center">
      <tbody>

        <tr className="bg-primary">
          <td colSpan="6">攻撃力/カット率</td>
        </tr>
        <tr className="bg-primary">
          <td style={{width: 45}}>物</td>
          <td style={{width: 45}}>魔</td>
          <td style={{width: 45}}>炎</td>
          <td style={{width: 45}}>雷</td>
          <td style={{width: 45}}>闇</td>
          <td style={{width: 60}}>致/受</td>
        </tr>
        <tr>
          <td>{weapon.damage[0]}</td>
          <td>{weapon.damage[1]}</td>
          <td>{weapon.damage[2]}</td>
          <td>{weapon.damage[3]}</td>
          <td>{weapon.damage[4]}</td>
          <td>{weapon.critical_damage}</td>
        </tr>
        <tr>
          <td>{weapon.damage_reduction[0]}</td>
          <td>{weapon.damage_reduction[1]}</td>
          <td>{weapon.damage_reduction[2]}</td>
          <td>{weapon.damage_reduction[3]}</td>
          <td>{weapon.damage_reduction[4]}</td>
          <td>{weapon.stability}</td>
        </tr>

        <tr className="bg-primary">
          <td colSpan="4">能力補正/必要能力</td>
        </tr>
        <tr className="bg-primary">
          <td >筋</td>
          <td >技</td>
          <td >理</td>
          <td >信</td>
        </tr>
        <tr>
          <td>{weapon.bonuses[0]}</td>
          <td>{weapon.bonuses[1]}</td>
          <td>{weapon.bonuses[2]}</td>
          <td>{weapon.bonuses[3]}</td>
        </tr>
        <tr>
          <td>{weapon.requirements[0]}</td>
          <td>{weapon.requirements[1]}</td>
          <td>{weapon.requirements[2]}</td>
          <td>{weapon.requirements[3]}</td>
        </tr>
      </tbody>
    </table>
  );
}
