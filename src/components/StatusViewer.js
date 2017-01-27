import React from 'react';

// 数字を2桁の文字列に揃える
const completeNum = (num) => {return (" " + num).slice(-2)}

export default function StatusViewer({
  status, selectedClassValue, allocationValue,
  onClickVigorDown, onClickVigorUp,
  onClickAttunementDown, onClickAttunementUp,
  onClickEnduranceDown, onClickEnduranceUp,
  onClickVitalityDown, onClickVitalityUp,
  onClickStrengthDown, onClickStrengthUp,
  onClickDexterityDown, onClickDexterityUp,
  onClickIntelligenceDown, onClickIntelligenceUp,
  onClickFaithDown, onClickFaithUp,
  onClickLuckDown, onClickLuckUp,
  onClickReset
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
            <span>{completeNum(status.vigor)}({completeNum(selectedClassValue.vigor)} + {completeNum(allocationValue.vigor)})</span>
            <span onClick={onClickVigorUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>集中力</td>
          <td>
            <span onClick={onClickAttunementDown}>&lt;</span>
            <span>{completeNum(status.attunement)}({completeNum(selectedClassValue.attunement)} + {completeNum(allocationValue.attunement)})</span>
            <span onClick={onClickAttunementUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>持久力</td>
          <td>
            <span onClick={onClickEnduranceDown}>&lt;</span>
            <span>{completeNum(status.endurance)}({completeNum(selectedClassValue.endurance)} + {completeNum(allocationValue.endurance)})</span>
            <span onClick={onClickEnduranceUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>体力</td>
          <td>
            <span onClick={onClickVitalityDown}>&lt;</span>
            <span>{completeNum(status.vitality)}( {completeNum(selectedClassValue.vitality)} + {completeNum(allocationValue.vitality)})</span>
            <span onClick={onClickVitalityUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>筋力</td>
          <td>
            <span onClick={onClickStrengthDown}>&lt;</span>
            <span>{completeNum(status.strength)}({completeNum(selectedClassValue.strength)} + {completeNum(allocationValue.strength)})</span>
            <span onClick={onClickStrengthUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>技量</td>
          <td>
            <span onClick={onClickDexterityDown}>&lt;</span>
            <span>{completeNum(status.dexterity)}({completeNum(selectedClassValue.dexterity)} + {completeNum(allocationValue.dexterity)})</span>
            <span onClick={onClickDexterityUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>理力</td>
          <td>
            <span onClick={onClickIntelligenceDown}>&lt;</span>
            <span>{completeNum(status.intelligence)}({completeNum(selectedClassValue.intelligence)} + {completeNum(allocationValue.intelligence)})</span>
            <span onClick={onClickIntelligenceUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>信仰</td>
          <td>
            <span onClick={onClickFaithDown}>&lt;</span>
            <span>{completeNum(status.faith)}({completeNum(selectedClassValue.faith)} + {completeNum(allocationValue.faith)})</span>
            <span onClick={onClickFaithUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>運</td>
          <td>
            <span onClick={onClickLuckDown}>&lt;</span>
            <span>{completeNum(status.luck)}({completeNum(selectedClassValue.luck)} + {completeNum(allocationValue.luck)})</span>
            <span onClick={onClickLuckUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <hr />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <span onClick={onClickReset}>リセット</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
