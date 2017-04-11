import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeaponStatus from './WeaponStatus';

const weaponData = require('../../../../json/weapons.json');

const proximity = weaponData["proximity"];
const shooting = weaponData["shooting"];
const spellTools = weaponData["spell_tools"];
const shields = weaponData["shields"];
const weapons = Object.assign({}, proximity, shooting, spellTools, shields);

const proximityNames = [
  {enName: "daggers", jpName: "短剣"},
  {enName: "straight_swords", jpName: "直剣"},
  {enName: "greatswords", jpName: "大剣"},
  {enName: "ultra_greatswords", jpName: "特大剣"},
  {enName: "curved_swords", jpName: "曲剣"},
  {enName: "curved_greatswords", jpName: "大曲剣"},
  {enName: "thrusting_swords", jpName: "刺剣"},
  {enName: "katanas", jpName: "刀"},
  {enName: "axes", jpName: "斧"},
  {enName: "greataxes", jpName: "大斧"},
  {enName: "hammers", jpName: "槌"},
  {enName: "great_hammers", jpName: "大槌"},
  {enName: "spears", jpName: "槍"},
  {enName: "pikes", jpName: "長槍"},
  {enName: "halberds", jpName: "斧槍"},
  {enName: "reapers", jpName: "鎌"},
  {enName: "whips", jpName: "ムチ"},
  {enName: "fists", jpName: "拳"},
  {enName: "claws", jpName: "爪"}
]
const shootingNames = [
  {enName: "bows", jpName: "弓"},
  {enName: "greatbows", jpName: "大弓"},
  {enName: "crossbows", jpName: "クロスボウ"}
]
const spellToolsNames = [
  {enName: "staves", jpName: "杖"},
  {enName: "flames", jpName: "呪術の火"},
  {enName: "talismans", jpName: "タリスマン"},
  {enName: "chimes", jpName: "聖鈴"}
]
const shieldsNames = [
  {enName: "torches", jpName: "松明"},
  {enName: "small_shields", jpName: "小盾"},
  {enName: "normal_shields", jpName: "中盾"},
  {enName: "greatshields", jpName: "大盾"}
]

// セレクタの<option>部分のコンポーネント
class OptionComponent extends React.Component {
  render() {
    return (
      <option value={this.props.value}>{this.props.body}</option>
    );
  }
}
// 武器のカテゴリーの数だけ<option>の生成
const selectProximity = proximityNames.map((proximityName, i) => {
  return <OptionComponent value={proximityName.enName} body={proximityName.jpName} key={i} />
});
const selectShooting = shootingNames.map((shootingName, i) => {
  return <OptionComponent value={shootingName.enName} body={shootingName.jpName} key={i} />
});
const selectSpellTools = spellToolsNames.map((spellToolsName, i) => {
  return <OptionComponent value={spellToolsName.enName} body={spellToolsName.jpName} key={i} />
});
const selectShields = shieldsNames.map((shieldsName, i) => {
  return <OptionComponent value={shieldsName.enName} body={shieldsName.jpName} key={i} />
});

class WeaponSelect extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const selectedWeaponCategory = this.props.selectedWeaponCategory;
    const selectedWeaponNum = this.props.selectedWeaponNum;
    const selectedCategoryData = weapons[selectedWeaponCategory];
    const selectedWeaponObject = selectedCategoryData[selectedWeaponNum];

    const optionWeapon = selectedCategoryData.map((weponData, i) => {
      return <OptionComponent value={i} body={weponData.name} key={i} selected />
    });
    const onSelectWeaponCategory = (e) =>
    {
      const nextSelectedWeaponCategory = e.target.value;
      this.props.dispatch({
        type: "SELECT_WEAPON_CATEGORY",
        weapon: nextSelectedWeaponCategory
      })
    }
    const onSelectWeaponNum = (e) =>
    {
      const nextSelectedWeaponNum = e.target.value;
      this.props.dispatch({
        type: "SELECT_WEAPON_NUM",
        num: nextSelectedWeaponNum
      })
    }

    return (
      <table>
        <tbody>
          <tr>
            <td>
              <select size="15" style={{width: 80}} onChange={onSelectWeaponCategory}>
                {selectProximity}
                {selectShooting}
                {selectSpellTools}
                {selectShields}
              </select>
            </td>
            <td>
              <select size="15" style={{width: 200}} value={selectedWeaponNum} onChange={onSelectWeaponNum}>
                {optionWeapon}
              </select>
            </td>
            <td>
              <WeaponStatus weapon = {selectedWeaponObject} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default connect(
  state => ({
    selectedWeaponCategory: state.equipment.selectedWeaponCategory,
    selectedWeaponNum: state.equipment.selectedWeaponNum,
  })
)(WeaponSelect);
