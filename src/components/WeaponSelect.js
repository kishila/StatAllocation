import React from 'react';

const weaponData = require('../../json/weapons.json');
console.log(weaponData);

const proximity = weaponData["proximity"];
const shooting = weaponData["shooting"];
const spellTools = weaponData["spell_tools"];
const shields = weaponData["shields"];

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

for(var key in weaponData){
}

// セレクタの<option>部分のコンポーネント
class OptionComponent extends React.Component {
  render() {
    return (
      <option value={this.props.enName}>{this.props.jpName}</option>
    );
  }
}
// 武器のカテゴリーの数だけ<option>の生成
const selectProximity = proximityNames.map((proximityName, i) => {
  return <OptionComponent enName={proximityName.enName} jpName={proximityName.jpName} key={i} />
});
const selectShooting = shootingNames.map((shootingName, i) => {
  return <OptionComponent enName={shootingName.enName} jpName={shootingName.jpName} key={i} />
});
const selectSpellTools = spellToolsNames.map((spellToolsName, i) => {
  return <OptionComponent enName={spellToolsName.enName} jpName={spellToolsName.jpName} key={i} />
});
const selectShields = shieldsNames.map((shieldsName, i) => {
  return <OptionComponent enName={shieldsName.enName} jpName={shieldsName.jpName} key={i} />
});


export default function WeaponSelect({ selectedWeaponGenre, onSelectWeaponGenre, onClickDecideWeapon }) {
  return (
    <div>
      <a className="btn" data-toggle="modal" data-target="#modal-example">
        -------
      </a>

      {/* <!-- 2.モーダルの配置 --> */}
      <div className="modal" id="modal-example">
        <div className="modal-dialog">

          {/* <!-- 3.モーダルのコンテンツ --> */}
          <div className="modal-content">
              {/* <!-- 4.モーダルのヘッダ --> */}
              <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">
                      <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 className="modal-title" id="modal-label">ダイアログ</h4>
              </div>
              {/* <!-- 5.モーダルのボディ --> */}
              <div className="modal-body">
                <select size="15" style={{width: 80}} onChange={onSelectWeaponGenre}>
                  {selectProximity}
                  {selectShooting}
                  {selectSpellTools}
                  {selectShields}
                </select>
              </div>
              {/* <!-- 6.モーダルのフッタ --> */}
              <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal" onClick={onClickDecideWeapon}>OK</button>
              </div>
          </div>
        </div>
      </div>

    </div>
  );
}
