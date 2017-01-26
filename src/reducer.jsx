const jsonData = require('../json/classes.json');

const initialState = {
  selectedClass: "knight",
  selectedClassValues: {
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
    var selClassData = jsonData[selectedClass];
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
    return {
      "level":nextSelectedClassObject.level,
      "vigor":nextSelectedClassObject.vigor + nextAllocationObject.vigor,
      "attunement":nextSelectedClassObject.attunement,
      "endurance":nextSelectedClassObject.endurance,
      "vitality":nextSelectedClassObject.vitality,
      "strength":nextSelectedClassObject.strength,
      "dexterity":nextSelectedClassObject.dexterity,
      "intelligence":nextSelectedClassObject.intelligence,
      "faith":nextSelectedClassObject.faith,
      "luck":nextSelectedClassObject.luck
    }
  }

  // 素性の変更
  const updateClass = (selectedClassName) => {
    var nextSelectedClassObject = getSelectedClassObjectData(selectedClassName);
    var nextStatus = updateStatus(nextSelectedClassObject, state.allocationValue);
    return Object.assign({}, state, {
      selectedClass: selectedClass,
      selectedClassValues: nextSelectedClassObject,
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
      var selectedClass = "mercenary"
      return updateClass(selectedClass);
    }
    case 'SELECT_WARRIOR_CLASS': {
      var selectedClass = "warrior"
      return updateClass(selectedClass);
    }
    case 'SELECT_HERALD_CLASS': {
      var selectedClass = "herald"
      return updateClass(selectedClass);
    }
    case 'SELECT_THIEF_CLASS': {
      var selectedClass = "thief"
      return updateClass(selectedClass);
    }
    case 'SELECT_ASSASSIN_CLASS': {
      var selectedClass = "assassin"
      return updateClass(selectedClass);
    }
    case 'SELECT_SORCERER_CLASS': {
      var selectedClass = "sorcerer"
      return updateClass(selectedClass);
    }
    case 'SELECT_PYROMANCER_CLASS': {
      var selectedClass = "pyromancer"
      return updateClass(selectedClass);
    }
    case 'SELECT_CLERIC_CLASS': {
      var selectedClass = "cleric"
      return updateClass(selectedClass);
    }
    case 'SELECT_DEPRIVED_CLASS': {
      var selectedClass = "deprived"
      return updateClass(selectedClass);
    }

    //- ステ振り時のアクション
    case 'ALLOCATION_VIGOR_UP': {
      var selectedClassParam = state.selectedClassValues.vigor;
      var nextParam = state.allocationValue.vigor + 1;
      if((selectedClassParam + nextParam)  > 99) return state;
      var nextAllocationObject = Object.assign({}, state.allocationValue, {"vigor": nextParam});
      var nextStatus = updateStatus(state.selectedClassValues, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }
    case 'ALLOCATION_VIGOR_DOWN': {
      var selectedClassParam = state.selectedClassValues.vigor;
      var nextParam = state.allocationValue.vigor - 1;
      if(nextParam  < 0) return state;
      var nextAllocationObject = Object.assign({}, state.allocationValue, {"vigor": nextParam});
      var nextStatus = updateStatus(state.selectedClassValues, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }

    default:
      return state
  }
}
