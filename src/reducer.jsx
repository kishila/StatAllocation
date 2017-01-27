const jsonData = require('../json/classes.json');

const initialState = {
  selectedClass: "knight",
  selectedClassValue: {
    "level":jsonData.knight.level,
    "vigor":jsonData.knight.vigor,
    "attunement":jsonData.knight.attunement,
    "endurance":jsonData.knight.endurance,
    "vitality":jsonData.knight.vitality,
    "strength":jsonData.knight.strength,
    "dexterity":jsonData.knight.dexterity,
    "intelligence":jsonData.knight.intelligence,
    "faith":jsonData.knight.faith,
    "luck":jsonData.knight.luck
  },
  allocationValue: {
    "level": 0,
    "vigor": 0,
    "attunement": 0,
    "endurance": 0,
    "vitality": 0,
    "strength": 0,
    "dexterity": 0,
    "intelligence": 0,
    "faith": 0,
    "luck": 0
  },
  status: {
    "level":jsonData.knight.level,
    "vigor":jsonData.knight.vigor,
    "attunement":jsonData.knight.attunement,
    "endurance":jsonData.knight.endurance,
    "vitality":jsonData.knight.vitality,
    "strength":jsonData.knight.strength,
    "dexterity":jsonData.knight.dexterity,
    "intelligence":jsonData.knight.intelligence,
    "faith":jsonData.knight.faith,
    "luck":jsonData.knight.luck
  }
}

export default function reducer(state = initialState, action) {
  // 選択された素性のオブジェクトデータを取得
  const getSelectedClassObjectData = (selectedClass) => {
    const selClassData = jsonData[selectedClass];
    return {
      "level":selClassData.level,
      "vigor":selClassData.vigor,
      "attunement":selClassData.attunement,
      "endurance":selClassData.endurance,
      "vitality":selClassData.vitality,
      "strength":selClassData.strength,
      "dexterity":selClassData.dexterity,
      "intelligence":selClassData.intelligence,
      "faith":selClassData.faith,
      "luck":selClassData.luck
    };
  }

  //  ステータスの更新
  const updateStatus = (nextSelectedClassObject, nextAllocationObject) => {
    const sum = nextAllocationObject.vigor + nextAllocationObject.attunement + nextAllocationObject.endurance + nextAllocationObject.vitality
     + nextAllocationObject.strength + nextAllocationObject.dexterity + nextAllocationObject.intelligence + nextAllocationObject.faith + nextAllocationObject.luck;
    return {
      "level":nextSelectedClassObject.level + sum,
      "vigor":nextSelectedClassObject.vigor + nextAllocationObject.vigor,
      "attunement":nextSelectedClassObject.attunement + nextAllocationObject.attunement,
      "endurance":nextSelectedClassObject.endurance + nextAllocationObject.endurance,
      "vitality":nextSelectedClassObject.vitality + nextAllocationObject.vitality,
      "strength":nextSelectedClassObject.strength + nextAllocationObject.strength,
      "dexterity":nextSelectedClassObject.dexterity + nextAllocationObject.dexterity,
      "intelligence":nextSelectedClassObject.intelligence + nextAllocationObject.intelligence,
      "faith":nextSelectedClassObject.faith + nextAllocationObject.faith,
      "luck":nextSelectedClassObject.luck + nextAllocationObject.luck
    }
  }

  // 素性の変更
  const updateClass = (selectedClassName) => {
    const nextSelectedClassObject = getSelectedClassObjectData(selectedClassName);
    const nextStatus = updateStatus(nextSelectedClassObject, state.allocationValue);
    return Object.assign({}, state, {
      selectedClass: selectedClass,
      selectedClassValue: nextSelectedClassObject,
      status: nextStatus
    })
  }

  switch(action.type) {
    //- セレクターによる素性選択時のアクション
    case 'SELECT_KNIGHT_CLASS': {
      const selectedClass = "knight"
      return updateClass(selectedClass);
    }
    case 'SELECT_MERCENARY_CLASS': {
      const selectedClass = "mercenary"
      return updateClass(selectedClass);
    }
    case 'SELECT_WARRIOR_CLASS': {
      const selectedClass = "warrior"
      return updateClass(selectedClass);
    }
    case 'SELECT_HERALD_CLASS': {
      const selectedClass = "herald"
      return updateClass(selectedClass);
    }
    case 'SELECT_THIEF_CLASS': {
      const selectedClass = "thief"
      return updateClass(selectedClass);
    }
    case 'SELECT_ASSASSIN_CLASS': {
      const selectedClass = "assassin"
      return updateClass(selectedClass);
    }
    case 'SELECT_SORCERER_CLASS': {
      const selectedClass = "sorcerer"
      return updateClass(selectedClass);
    }
    case 'SELECT_PYROMANCER_CLASS': {
      const selectedClass = "pyromancer"
      return updateClass(selectedClass);
    }
    case 'SELECT_CLERIC_CLASS': {
      const selectedClass = "cleric"
      return updateClass(selectedClass);
    }
    case 'SELECT_DEPRIVED_CLASS': {
      const selectedClass = "deprived"
      return updateClass(selectedClass);
    }

    //- ステ振り時のアクション
    case 'ALLOCATION_VIGOR_UP': {
      const selectedClassParam = state.selectedClassValue.vigor;
      const nextParam = state.allocationValue.vigor + 1;
      if((selectedClassParam + nextParam)  > 99) return state;
      const nextAllocationObject = Object.assign({}, state.allocationValue, {"vigor": nextParam});
      const nextStatus = updateStatus(state.selectedClassValue, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }
    case 'ALLOCATION_VIGOR_DOWN': {
      const selectedClassParam = state.selectedClassValue.vigor;
      const nextParam = state.allocationValue.vigor - 1;
      if(nextParam  < 0) return state;
      const nextAllocationObject = Object.assign({}, state.allocationValue, {"vigor": nextParam});
      const nextStatus = updateStatus(state.selectedClassValue, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }
    case 'ALLOCATION_ATTUNEMENT_UP': {
      const selectedClassParam = state.selectedClassValue.attunement;
      const nextParam = state.allocationValue.attunement + 1;
      if((selectedClassParam + nextParam)  > 99) return state;
      const nextAllocationObject = Object.assign({}, state.allocationValue, {"attunement": nextParam});
      const nextStatus = updateStatus(state.selectedClassValue, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }
    case 'ALLOCATION_ATTUNEMENT_DOWN': {
      const selectedClassParam = state.selectedClassValue.attunement;
      const nextParam = state.allocationValue.attunement - 1;
      if(nextParam  < 0) return state;
      const nextAllocationObject = Object.assign({}, state.allocationValue, {"attunement": nextParam});
      const nextStatus = updateStatus(state.selectedClassValue, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }
    case 'ALLOCATION_ENDURANCE_UP': {
      const selectedClassParam = state.selectedClassValue.endurance;
      const nextParam = state.allocationValue.endurance + 1;
      if((selectedClassParam + nextParam)  > 99) return state;
      const nextAllocationObject = Object.assign({}, state.allocationValue, {"endurance": nextParam});
      const nextStatus = updateStatus(state.selectedClassValue, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }
    case 'ALLOCATION_ENDURANCE_DOWN': {
      const selectedClassParam = state.selectedClassValue.endurance;
      const nextParam = state.allocationValue.endurance - 1;
      if(nextParam  < 0) return state;
      const nextAllocationObject = Object.assign({}, state.allocationValue, {"endurance": nextParam});
      const nextStatus = updateStatus(state.selectedClassValue, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }
    case 'ALLOCATION_VITALITY_UP': {
      const selectedClassParam = state.selectedClassValue.vitality;
      const nextParam = state.allocationValue.vitality + 1;
      if((selectedClassParam + nextParam)  > 99) return state;
      const nextAllocationObject = Object.assign({}, state.allocationValue, {"vitality": nextParam});
      const nextStatus = updateStatus(state.selectedClassValue, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }
    case 'ALLOCATION_VITALITY_DOWN': {
      const selectedClassParam = state.selectedClassValue.vitality;
      const nextParam = state.allocationValue.vitality - 1;
      if(nextParam  < 0) return state;
      const nextAllocationObject = Object.assign({}, state.allocationValue, {"vitality": nextParam});
      const nextStatus = updateStatus(state.selectedClassValue, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }
    case 'ALLOCATION_STRENGTH_UP': {
      const selectedClassParam = state.selectedClassValue.strength;
      const nextParam = state.allocationValue.strength + 1;
      if((selectedClassParam + nextParam)  > 99) return state;
      const nextAllocationObject = Object.assign({}, state.allocationValue, {"strength": nextParam});
      const nextStatus = updateStatus(state.selectedClassValue, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }
    case 'ALLOCATION_STRENGTH_DOWN': {
      const selectedClassParam = state.selectedClassValue.strength;
      const nextParam = state.allocationValue.strength - 1;
      if(nextParam  < 0) return state;
      const nextAllocationObject = Object.assign({}, state.allocationValue, {"strength": nextParam});
      const nextStatus = updateStatus(state.selectedClassValue, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }
    case 'ALLOCATION_DEXTERITY_UP': {
      const selectedClassParam = state.selectedClassValue.dexterity;
      const nextParam = state.allocationValue.dexterity + 1;
      if((selectedClassParam + nextParam)  > 99) return state;
      const nextAllocationObject = Object.assign({}, state.allocationValue, {"dexterity": nextParam});
      const nextStatus = updateStatus(state.selectedClassValue, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }
    case 'ALLOCATION_DEXTERITY_DOWN': {
      const selectedClassParam = state.selectedClassValue.dexterity;
      const nextParam = state.allocationValue.dexterity - 1;
      if(nextParam  < 0) return state;
      const nextAllocationObject = Object.assign({}, state.allocationValue, {"dexterity": nextParam});
      const nextStatus = updateStatus(state.selectedClassValue, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }
    case 'ALLOCATION_INTELLIGENCE_UP': {
      const selectedClassParam = state.selectedClassValue.intelligence;
      const nextParam = state.allocationValue.intelligence + 1;
      if((selectedClassParam + nextParam)  > 99) return state;
      const nextAllocationObject = Object.assign({}, state.allocationValue, {"intelligence": nextParam});
      const nextStatus = updateStatus(state.selectedClassValue, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }
    case 'ALLOCATION_INTELLIGENCE_DOWN': {
      const selectedClassParam = state.selectedClassValue.intelligence;
      const nextParam = state.allocationValue.intelligence - 1;
      if(nextParam  < 0) return state;
      const nextAllocationObject = Object.assign({}, state.allocationValue, {"intelligence": nextParam});
      const nextStatus = updateStatus(state.selectedClassValue, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }
    case 'ALLOCATION_FAITH_UP': {
      const selectedClassParam = state.selectedClassValue.faith;
      const nextParam = state.allocationValue.faith + 1;
      if((selectedClassParam + nextParam)  > 99) return state;
      const nextAllocationObject = Object.assign({}, state.allocationValue, {"faith": nextParam});
      const nextStatus = updateStatus(state.selectedClassValue, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }
    case 'ALLOCATION_FAITH_DOWN': {
      const selectedClassParam = state.selectedClassValue.faith;
      const nextParam = state.allocationValue.faith - 1;
      if(nextParam  < 0) return state;
      const nextAllocationObject = Object.assign({}, state.allocationValue, {"faith": nextParam});
      const nextStatus = updateStatus(state.selectedClassValue, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }
    case 'ALLOCATION_LUCK_UP': {
      const selectedClassParam = state.selectedClassValue.luck;
      const nextParam = state.allocationValue.luck + 1;
      if((selectedClassParam + nextParam)  > 99) return state;
      const nextAllocationObject = Object.assign({}, state.allocationValue, {"luck": nextParam});
      const nextStatus = updateStatus(state.selectedClassValue, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }
    case 'ALLOCATION_LUCK_DOWN': {
      const selectedClassParam = state.selectedClassValue.luck;
      const nextParam = state.allocationValue.luck - 1;
      if(nextParam  < 0) return state;
      const nextAllocationObject = Object.assign({}, state.allocationValue, {"luck": nextParam});
      const nextStatus = updateStatus(state.selectedClassValue, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }
    case 'RESET_ALLOCATION': {
      const nextAllocationObject = {
        "level": 0,
        "vigor": 0,
        "attunement": 0,
        "endurance": 0,
        "vitality": 0,
        "strength": 0,
        "dexterity": 0,
        "intelligence": 0,
        "faith": 0,
        "luck": 0
      };
      const nextStatus = updateStatus(state.selectedClassValue, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }

    default:
      return state
  }
}
