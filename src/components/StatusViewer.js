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
          <td style={{textAlign:"center"}}>{status.level}</td>
        </tr>
        <tr>
          <td colSpan="5">
            <hr />
          </td>
        </tr>
        <tr>
          <td width="100">生命力</td>
          <td width="25">{status.vigor}</td>
          <td width="70">
            <span>({completeNum(selectedClassValue.vigor)} + {completeNum(allocationValue.vigor)})</span>
          </td>
          <td><span id="vigor" className="glyphicon glyphicon-arrow-down" onClick={onClickAllocationDown}></span></td>
          <td><span id="vigor" className="glyphicon glyphicon-arrow-up" onClick={onClickAllocationUp}></span></td>
        </tr>
        <tr>
          <td>集中力</td>
          <td>{completeNum(status.attunement)}</td>
          <td>
            <span>({completeNum(selectedClassValue.attunement)} + {completeNum(allocationValue.attunement)})</span>
          </td>
          <td><span id="attunement" className="glyphicon glyphicon-arrow-down" onClick={onClickAllocationDown}></span></td>
          <td><span id="attunement" className="glyphicon glyphicon-arrow-up" onClick={onClickAllocationUp}></span></td>
        </tr>
        <tr>
          <td>持久力</td>
          <td>{completeNum(status.endurance)}</td>
          <td>
            <span>({completeNum(selectedClassValue.endurance)} + {completeNum(allocationValue.endurance)})</span>
          </td>
          <td><span id="endurance" className="glyphicon glyphicon-arrow-down" onClick={onClickAllocationDown}></span></td>
          <td><span id="endurance" className="glyphicon glyphicon-arrow-up"  onClick={onClickAllocationUp}></span></td>
        </tr>
        <tr>
          <td>体力</td>
          <td>{completeNum(status.vitality)}</td>
          <td>
            <span>({completeNum(selectedClassValue.vitality)} + {completeNum(allocationValue.vitality)})</span>
          </td>
          <td><span id="vitality" className="glyphicon glyphicon-arrow-down" onClick={onClickAllocationDown}></span></td>
          <td><span id="vitality" className="glyphicon glyphicon-arrow-up"  onClick={onClickAllocationUp}></span></td>
        </tr>
        <tr>
          <td>筋力</td>
          <td>{completeNum(status.strength)}</td>
          <td>
            <span>({completeNum(selectedClassValue.strength)} + {completeNum(allocationValue.strength)})</span>
          </td>
          <td><span id="strength" className="glyphicon glyphicon-arrow-down" onClick={onClickAllocationDown}></span></td>
          <td><span id="strength" className="glyphicon glyphicon-arrow-up"  onClick={onClickAllocationUp}></span></td>
        </tr>
        <tr>
          <td>技量</td>
          <td>{completeNum(status.dexterity)}</td>
          <td>
            <span>({completeNum(selectedClassValue.dexterity)} + {completeNum(allocationValue.dexterity)})</span>
          </td>
          <td><span id="dexterity" className="glyphicon glyphicon-arrow-down" onClick={onClickAllocationDown}></span></td>
          <td><span id="dexterity" className="glyphicon glyphicon-arrow-up"  onClick={onClickAllocationUp}></span></td>
        </tr>
        <tr>
          <td>理力</td>
          <td>{completeNum(status.intelligence)}</td>
          <td>
            <span>({completeNum(selectedClassValue.intelligence)} + {completeNum(allocationValue.intelligence)})</span>
          </td>
          <td><span id="intelligence" className="glyphicon glyphicon-arrow-down" onClick={onClickAllocationDown}></span></td>
          <td><span id="intelligence" className="glyphicon glyphicon-arrow-up"  onClick={onClickAllocationUp}></span></td>
        </tr>
        <tr>
          <td>信仰</td>
          <td>{completeNum(status.faith)}</td>
          <td>
            <span>({completeNum(selectedClassValue.faith)} + {completeNum(allocationValue.faith)})</span>
          </td>
          <td><span id="faith" className="glyphicon glyphicon-arrow-down" onClick={onClickAllocationDown}></span></td>
          <td><span id="faith" className="glyphicon glyphicon-arrow-up"  onClick={onClickAllocationUp}></span></td>
        </tr>
        <tr>
          <td>運</td>
          <td>{completeNum(status.luck)}</td>
          <td>
            <span>({completeNum(selectedClassValue.luck)} + {completeNum(allocationValue.luck)})</span>
          </td>
          <td><span id="luck" className="glyphicon glyphicon-arrow-down" onClick={onClickAllocationDown}></span></td>
          <td><span id="luck" className="glyphicon glyphicon-arrow-up"  onClick={onClickAllocationUp}></span></td>
        </tr>
        <tr>
          <td colSpan="5">
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
