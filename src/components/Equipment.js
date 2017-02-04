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
              type: "SELECT_WEAPON",
              hand: "RIGHT",
              number: "1"
            })
          }
        }
      />
    </div>
  );
}
