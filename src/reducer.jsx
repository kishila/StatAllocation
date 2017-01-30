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
      selectedClass: nextSelectedClassObject,
      selectedClassValue: nextSelectedClassObject,
      status: nextStatus
    })
  }

  switch(action.type) {
    //- セレクターによる素性選択時のアクション
    case 'SELECT_CLASS': {
      const selectedClass = action.class
      return updateClass(selectedClass);
    }

    //- ステ振り時のアクション
    case 'ALLOCATION_UP': {
      const paramName = action.param;
      const selectedClassParam = state.selectedClassValue[paramName];
      const nextParam = state.allocationValue[paramName] + 1;
      if((selectedClassParam + nextParam)  > 99) return state;
      const nextParamObj = {[paramName]: nextParam};
      const nextAllocationObject = Object.assign({}, state.allocationValue, nextParamObj);
      const nextStatus = updateStatus(state.selectedClassValue, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }
    case 'ALLOCATION_DOWN': {
      const paramName = action.param;
      const selectedClassParam = state.selectedClassValue[paramName];
      const nextParam = state.allocationValue[paramName] - 1;
      if(nextParam  < 0) return state;
      const nextParamObj = {[paramName]: nextParam};
      const nextAllocationObject = Object.assign({}, state.allocationValue, nextParamObj);
      const nextStatus = updateStatus(state.selectedClassValue, nextAllocationObject);
      return Object.assign({}, state, {
        allocationValue: nextAllocationObject,
        status: nextStatus
      });
    }
    case 'RESET_ALLOCATION': {
      console.log("as");
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
