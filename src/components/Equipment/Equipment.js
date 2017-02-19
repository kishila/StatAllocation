import React from 'react';
import WeaponSelect from './WeaponSelect';
import store from '../../store';

export default function Equipment() {
  return (
    <div>
      <WeaponSelect
        componentNum = {"right1"}
        shakeHand = {"右 武器1："}
        currentWeaponName = {store.getState().rightHandWeapon1}
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
      <WeaponSelect
        componentNum = {"right2"}
        shakeHand = {"右 武器2："}
        currentWeaponName = {store.getState().rightHandWeapon2}
        onClickDecideWeapon = {(e) =>
          {
            store.dispatch({
              type: "DECIDE_WEAPON",
              hand: "right",
              number: "2"
            })
          }
        }
      />
      <WeaponSelect
        componentNum = {"right3"}
        shakeHand = {"右 武器3："}
        currentWeaponName = {store.getState().rightHandWeapon2}
        onClickDecideWeapon = {(e) =>
          {
            store.dispatch({
              type: "DECIDE_WEAPON",
              hand: "right",
              number: "3"
            })
          }
        }
      />
    </div>
  );
}
