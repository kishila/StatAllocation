const weaponData = require('../../json/weapons.json');
const weapons = Object.assign({}, weaponData["proximity"], weaponData["shooting"], weaponData["spell_tools"], weaponData["shields"]);

const initialState = {
  hp: 454,
  fp: 93,
  stamina: 95,

  rightHandWeapon1: "------",
  rightWeaponCategory1: "",
  rightWeaponNum1: "",
  rightHandWeapon2: "------",
  rightWeaponCategory2: "",
  rightWeaponNum2: "",
  rightHandWeapon3: "------",
  rightWeaponCategory3: "",
  rightWeaponNum3: "",
  leftHandWeapon1: "------",
  leftHandWeapon2: "------",
  leftHandWeapon3: "------",
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
      if(action.hand == "right") {
        switch(action.number) {
          case '1': {
            return Object.assign({}, state, {
              rightHandWeapon1: decidedWeaponName,
              rightWeaponCategory1: state.selectedWeaponCategory,
              rightWeaponNum1: state.selectedWeaponNum,
            });
          }
          case '2': {
            return Object.assign({}, state, {
              rightHandWeapon2: decidedWeaponName,
              rightWeaponCategory2: state.selectedWeaponCategory,
              rightWeaponNum2: state.selectedWeaponNum,
            });
          }
          case '3': {
            return Object.assign({}, state, {
              rightHandWeapon3: decidedWeaponName,
              rightWeaponCategory3: state.selectedWeaponCategory,
              rightWeaponNum3: state.selectedWeaponNum,
            });
          }
        }
      } else if(action.hand == "left") {
        switch(action.number) {
          case '1': {
            return Object.assign({}, state, {
              leftHandWeapon1: decidedWeaponName,
              leftWeaponCategory1: state.selectedWeaponCategory,
              leftWeaponNum1: state.selectedWeaponNum,
            });
          }
          case '2': {
            return Object.assign({}, state, {
              leftHandWeapon2: decidedWeaponName,
              leftWeaponCategory2: state.selectedWeaponCategory,
              leftWeaponNum2: state.selectedWeaponNum,
            });
          }
          case '3': {
            return Object.assign({}, state, {
              leftHandWeapon3: decidedWeaponName,
              leftWeaponCategory3: state.selectedWeaponCategory,
              leftWeaponNum3: state.selectedWeaponNum,
            });
          }
        }
      }

    }
    default:
      return state
  }
}
