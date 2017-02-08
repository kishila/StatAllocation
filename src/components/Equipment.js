import React from 'react';
import WeaponSelect from './WeaponSelect';
import store from '../store';

export default function Equipment() {
  return (
    <div>
      <WeaponSelect
        selectedWeaponGenre={store.getState().selectedWeaponGenre}
        onSelectWeaponGenre={(e) =>
          {
            const selectedWeaponGenre = e.target.value;
            store.dispatch({
              type: "SELECT_WEAPON_GENRE",
              weapon: selectedWeaponGenre
            })
          }
        }
        onClickDecideWeapon={(e) =>
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
