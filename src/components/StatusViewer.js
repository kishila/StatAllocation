import React from 'react';

// 数字を2桁の文字列に揃える
const completeNum = (num) => {return (" " + num).slice(-2)}

export default function StatusViewer({
  status, selectedClassValue, allocationValue,
  onClickAllocationDown, onClickAllocationUp,
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
            <span id="vigor" onClick={onClickAllocationDown}>&lt;</span>
            <span>{completeNum(status.vigor)}({completeNum(selectedClassValue.vigor)} + {completeNum(allocationValue.vigor)})</span>
            <span id="vigor" onClick={onClickAllocationUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>集中力</td>
          <td>
            <span id="attunement" onClick={onClickAllocationDown}>&lt;</span>
            <span>{completeNum(status.attunement)}({completeNum(selectedClassValue.attunement)} + {completeNum(allocationValue.attunement)})</span>
            <span id="attunement" onClick={onClickAllocationUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>持久力</td>
          <td>
            <span id="endurance" onClick={onClickAllocationDown}>&lt;</span>
            <span>{completeNum(status.endurance)}({completeNum(selectedClassValue.endurance)} + {completeNum(allocationValue.endurance)})</span>
            <span id="endurance" onClick={onClickAllocationUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>体力</td>
          <td>
            <span id="vitality" onClick={onClickAllocationDown}>&lt;</span>
            <span>{completeNum(status.vitality)}( {completeNum(selectedClassValue.vitality)} + {completeNum(allocationValue.vitality)})</span>
            <span id="vitality" onClick={onClickAllocationUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>筋力</td>
          <td>
            <span id="strength" onClick={onClickAllocationDown}>&lt;</span>
            <span>{completeNum(status.strength)}({completeNum(selectedClassValue.strength)} + {completeNum(allocationValue.strength)})</span>
            <span id="strength" onClick={onClickAllocationUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>技量</td>
          <td>
            <span id="dexterity" onClick={onClickAllocationDown}>&lt;</span>
            <span>{completeNum(status.dexterity)}({completeNum(selectedClassValue.dexterity)} + {completeNum(allocationValue.dexterity)})</span>
            <span id="dexterity" onClick={onClickAllocationUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>理力</td>
          <td>
            <span id="intelligence" onClick={onClickAllocationDown}>&lt;</span>
            <span>{completeNum(status.intelligence)}({completeNum(selectedClassValue.intelligence)} + {completeNum(allocationValue.intelligence)})</span>
            <span id="intelligence" onClick={onClickAllocationUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>信仰</td>
          <td>
            <span id="faith" onClick={onClickAllocationDown}>&lt;</span>
            <span>{completeNum(status.faith)}({completeNum(selectedClassValue.faith)} + {completeNum(allocationValue.faith)})</span>
            <span id="faith" onClick={onClickAllocationUp}>&gt;</span>
          </td>
        </tr>
        <tr>
          <td>運</td>
          <td>
            <span id="luck" onClick={onClickAllocationDown}>&lt;</span>
            <span>{completeNum(status.luck)}({completeNum(selectedClassValue.luck)} + {completeNum(allocationValue.luck)})</span>
            <span id="luck" onClick={onClickAllocationUp}>&gt;</span>
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
