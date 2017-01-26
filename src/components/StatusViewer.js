import React from 'react';

export default function StatusViewer({ status, onClickVigorDown, onClickVigorUp}) {
  return (
    <table>
      <tbody>
        <tr>
          <td>レベル</td>
          <td>{status.level}</td>
        </tr>
        <tr>
          <td>生命力</td>
          <td>
            <span onClick={onClickVigorDown}>&lt;</span>
            <span>{status.vigor}</span>
            <span onClick={onClickVigorUp}>&gt;</span>
          </td>
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
  );
}
