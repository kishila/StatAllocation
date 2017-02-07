import React from 'react';
import WeaponSelect from './WeaponSelect';
import store from '../store';

export default function Equipment() {
  return (
    <div>
      <WeaponSelect
        selectedWeapon={store.getState().selectedClass}
        onSelectedWeapon={(e) =>
          {
            store.dispatch({
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
