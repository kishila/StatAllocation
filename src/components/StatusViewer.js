import React from 'react';

export default function StatusViewer({ status,
  onClickVigorDown, onClickVigorUp,
  onClickAttunementDown, onClickAttunementUp,
  onClickEnduranceDown, onClickEnduranceUp,
  onClickVitalityDown, onClickVitalityUp,
  onClickStrengthDown, onClickStrengthUp,
  onClickDexterityDown, onClickDexterityUp,
  onClickIntelligenceDown, onClickIntelligenceUp,
  onClickFaithDown, onClickFaithUp,
  onClickLuckDown, onClickLuckUp

}) {
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
          <td>
            <span onClick={onClickAttunementDown}>&lt;</span>
            <span>{status.attunement}</span>
            <span onClick={onClickAttunementUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>持久力</td>
          <td>
            <span onClick={onClickEnduranceDown}>&lt;</span>
            <span>{status.endurance}</span>
            <span onClick={onClickEnduranceUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>体力</td>
          <td>
            <span onClick={onClickVitalityDown}>&lt;</span>
            <span>{status.vitality}</span>
            <span onClick={onClickVitalityUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>筋力</td>
          <td>
            <span onClick={onClickStrengthDown}>&lt;</span>
            <span>{status.strength}</span>
            <span onClick={onClickStrengthUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>技量</td>
          <td>
            <span onClick={onClickDexterityDown}>&lt;</span>
            <span>{status.dexterity}</span>
            <span onClick={onClickDexterityUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>理力</td>
          <td>
            <span onClick={onClickIntelligenceDown}>&lt;</span>
            <span>{status.intelligence}</span>
            <span onClick={onClickIntelligenceUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>信仰</td>
          <td>
            <span onClick={onClickFaithDown}>&lt;</span>
            <span>{status.faith}</span>
            <span onClick={onClickFaithUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>運</td>
          <td>
            <span onClick={onClickLuckDown}>&lt;</span>
            <span>{status.luck}</span>
            <span onClick={onClickLuckUp}>&gt;</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
