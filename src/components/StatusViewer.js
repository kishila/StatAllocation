import React from 'react';

// 数字を2桁の文字列に揃える
const completeNum = (num) => {return (" " + num).slice(-2)}

const paramNames = [
  {enName: "vigor", jpName: "生命力"},
  {enName: "attunement", jpName: "集中力"},
  {enName: "endurance", jpName: "持久力"},
  {enName: "vitality", jpName: "体力"},
  {enName: "strength", jpName: "筋力"},
  {enName: "dexterity", jpName: "技量"},
  {enName: "intelligence", jpName: "理力"},
  {enName: "faith", jpName: "信仰"},
  {enName: "luck", jpName: "運"},
]

export default function StatusViewer({
  status, selectedClassValue, allocationValue,
  onClickAllocationDown, onClickAllocationUp,
  onClickReset
}) {
  const AllocationParam = React.createClass({
    propTypes: {
      enName: React.PropTypes.string.isRequired,
      jpName: React.PropTypes.string.isRequired
    },
    render() {
      return (
        <tr>
          <td width="100">{this.props.jpName}</td>
          <td width="25">{status[this.props.enName]}</td>
          <td width="70">
            <span>({completeNum(selectedClassValue[this.props.enName])} + {completeNum(allocationValue[this.props.enName])})</span>
          </td>
          <td><span id={this.props.enName} className="glyphicon glyphicon-arrow-down" onClick={onClickAllocationDown}></span></td>
          <td><span id={this.props.enName} className="glyphicon glyphicon-arrow-up" onClick={onClickAllocationUp}></span></td>
        </tr>
      );
    }
  });
  const allocationParames = paramNames.map((param, i) => {
    return <AllocationParam enName={param.enName} jpName={param.jpName} key={i} />
  });

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
          {allocationParames}
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
