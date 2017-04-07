import React from 'react';
import WeaponSelect from './WeaponSelect/WeaponSelect';
import BasicSkills from './BasicSkills';
import store from '../../store';

export default function Equipment() {
  return (
    <div>
      <BasicSkills />
      <WeaponSelect
        componentNum = {"right1"}
        shakeHand = {"右 武器1："}
        currentWeaponName = {store.getState().equipment.rightHandWeapon1}
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
        currentWeaponName = {store.getState().equipment.rightHandWeapon2}
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
        currentWeaponName = {store.getState().equipment.rightHandWeapon3}
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
      <WeaponSelect
        componentNum = {"left1"}
        shakeHand = {"左 武器1："}
        currentWeaponName = {store.getState().equipment.leftHandWeapon1}
        onClickDecideWeapon = {(e) =>
          {
            store.dispatch({
              type: "DECIDE_WEAPON",
              hand: "left",
              number: "1"
            })
          }
        }
      />
      <WeaponSelect
        componentNum = {"left2"}
        shakeHand = {"左 武器2："}
        currentWeaponName = {store.getState().equipment.leftHandWeapon2}
        onClickDecideWeapon = {(e) =>
          {
            store.dispatch({
              type: "DECIDE_WEAPON",
              hand: "left",
              number: "2"
            })
          }
        }
      />
      <WeaponSelect
        componentNum = {"left3"}
        shakeHand = {"左 武器3："}
        currentWeaponName = {store.getState().equipment.leftHandWeapon3}
        onClickDecideWeapon = {(e) =>
          {
            store.dispatch({
              type: "DECIDE_WEAPON",
              hand: "left",
              number: "3"
            })
          }
        }
      />
    </div>
  );
}
