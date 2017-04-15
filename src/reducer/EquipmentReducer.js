const weaponData = require('../../json/weapons.json');
const weapons = Object.assign({}, weaponData["proximity"], weaponData["shooting"], weaponData["spell_tools"], weaponData["shields"]);

const initialWeapnObject = {
  aux_effect: ["0", "0", "0"],
  bonuses: ["-", "-", "-" , "-"],
  critical_damage: "0",
  damage: ["0", "0", "0", "0", "0"],
  damage_reduction: ["0", "0", "0", "0", "0"],
  durability:"0",
  name: "------",
  requirements: ["0", "0", "0", "0"],
  skill:"------",
  skill_fp_cost:"0(-/-)",
  stability:"0",
  strengthening:"-",
  weight:"0",
}

const initialState = {
  hp: 454,
  fp: 93,
  stamina: 95,

  equippingWeight: 0,
  equipAbleWeight: 0,

  rightHandWeaponName1: "------",
  rightWeaponObject1: initialWeapnObject,
  rightHandWeaponName2: "------",
  rightWeaponObject2: initialWeapnObject,
  rightHandWeaponName3: "------",
  rightWeaponObject3: initialWeapnObject,

  leftHandWeaponName1: "------",
  leftWeaponObject1: initialWeapnObject,
  leftHandWeaponName2: "------",
  leftWeaponObject2: initialWeapnObject,
  leftHandWeaponName3: "------",
  leftWeaponObject3: initialWeapnObject,

  selectedWeaponCategory: "daggers",
  selectedWeaponNum: "0"
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'SELECT_WEAPON_CATEGORY': {
      return Object.assign({}, state, {
        selectedWeaponCategory: action.weapon,
        selectedWeaponNum: "0"
      });
    }

    case 'SELECT_WEAPON_NUM': {
      return Object.assign({}, state, {
        selectedWeaponNum: action.num
      });
    }

    case 'DECIDE_WEAPON': {
      const decidedWeaponCategoryData = weapons[state.selectedWeaponCategory];
      const decidedWeaponName = decidedWeaponCategoryData[state.selectedWeaponNum].name;
      const decidedWeaponObject = decidedWeaponCategoryData[state.selectedWeaponNum];
      if(action.hand == "right") {
        switch(action.number) {
          case '1': {
            return Object.assign({}, state, {
              rightHandWeaponName1: decidedWeaponName,
              rightWeaponObject1: decidedWeaponObject,
            });
          }
          case '2': {
            return Object.assign({}, state, {
              rightHandWeaponName2: decidedWeaponName,
              rightWeaponObject2: decidedWeaponObject,
            });
          }
          case '3': {
            return Object.assign({}, state, {
              rightHandWeaponName3: decidedWeaponName,
              rightWeaponObject3: decidedWeaponObject,
            });
          }
        }
      } else if(action.hand == "left") {
        switch(action.number) {
          case '1': {
            return Object.assign({}, state, {
              leftHandWeaponName1: decidedWeaponName,
              leftWeaponObject1: decidedWeaponObject,
            });
          }
          case '2': {
            return Object.assign({}, state, {
              leftHandWeaponName2: decidedWeaponName,
              leftWeaponObject2: decidedWeaponObject,
            });
          }
          case '3': {
            return Object.assign({}, state, {
              leftHandWeaponName3: decidedWeaponName,
              leftWeaponObject3: decidedWeaponObject,
            });
          }
        }
      }
    }

    case 'UPDATE_EQUIPPING_WEIGHT': {
      return Object.assign({}, state, {
        equippingWeight: action.num
      });
    }

    default:
      return state
  }
}
