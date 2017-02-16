import React from 'react';
import WeaponSelect from './WeaponSelect';
import store from '../store';

export default function Equipment() {
  return (
    <div>
      <WeaponSelect
        selectedWeaponCategory = {store.getState().selectedWeaponCategory}
        onSelectWeaponCategory = {(e) =>
          {
            const selectedWeaponCategory = e.target.value;
            store.dispatch({
              type: "SELECT_WEAPON_CATEGORY",
              weapon: selectedWeaponCategory
            })
          }
        }
        selectedWeapononNum = {store.getState().selectedWeaponNum}
        onSelectWeaponNum = {(e) =>
          {
            const selectedWeaponNum = e.target.value;
            store.dispatch({
              type: "SELECT_WEAPON_NUM",
              num: selectedWeaponNum
            })
          }
        }
        onClickDecideWeapon = {(e) =>
          {
            store.dispatch({
              type: "DECIDE_WEAPON",
              hand: "right",
              number: "1"
            })
          }
        }
      />
    </div>
  );
}
