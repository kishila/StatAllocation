const weaponData = require('../../json/weapons.json');
const weapons = Object.assign({}, weaponData["proximity"], weaponData["shooting"], weaponData["spell_tools"], weaponData["shields"]);

const initialState = {
  hp: 454,
  fp: 93,
  stamina: 95,

  weightEquipped: 0,
  equipLoad: 0,

  rightHandWeaponName1: "------",
  rightWeaponObject1: {},
  rightHandWeaponName2: "------",
  rightWeaponObject2: {},
  rightHandWeaponName3: "------",
  rightWeaponObject3: {},

  leftHandWeaponName1: "------",
  leftWeaponObject1: {},
  leftHandWeaponName2: "------",
  leftWeaponObject2: {},
  leftHandWeaponName3: "------",
  leftWeaponObject3: {},

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
    default:
      return state
  }
}
