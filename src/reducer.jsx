var jsonData;
$.ajaxSetup({ async: false });
$.getJSON('../json/classes.json',
  function(data) {
    jsonData = data;
  }
);
$.ajaxSetup({ async: true }); // 非同期に戻す

const initialState = {
  selectedClass: "knight",
  selectedClassValue: {
    "level":jsonData.knight.level,
    "vigor":jsonData.knight.vigor,
    "attunement":jsonData.knight.attunment,
    "endurance":jsonData.knight.endurance,
    "vitality":jsonData.knight.vitality,
    "strength":jsonData.knight.strength,
    "dexterity":jsonData.knight.dexterity,
    "intelligence":jsonData.knight.intelligence,
    "faith":jsonData.knight.faith,
    "luck":jsonData.knight.luck
  },
  status: {
    "level":jsonData.knight.level,
    "vigor":jsonData.knight.vigor,
    "attunement":jsonData.knight.attunment,
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
  // 選択された素性のデータを取得
   var setSelectedClassValue = function(selectedClass){
     var selClassData = jsonData[selectedClass];
     return {
       "level":selClassData.level,
       "vigor":selClassData.vigor,
       "attunement":selClassData.attunment,
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
   var updateStatus = function(tmpClassValue){
     return {
       "level":tmpClassValue.level,
       "vigor":tmpClassValue.vigor,
       "attunement":tmpClassValue.attunment,
       "endurance":tmpClassValue.endurance,
       "vitality":tmpClassValue.vitality,
       "strength":tmpClassValue.strength,
       "dexterity":tmpClassValue.dexterity,
       "intelligence":tmpClassValue.intelligence,
       "faith":tmpClassValue.faith,
       "luck":tmpClassValue.luck
     }
   }

  switch(action.type) {
    //- セレクターによる素性選択時のアクション
    case 'SELECT_KNIGHT_CLASS': {
      var selectedClass = "knight"
      var tmpClassValue = setSelectedClassValue(selectedClass);
      var tmpStatus = updateStatus(tmpClassValue);
      return Object.assign({}, state, {
        selectedClass: selectedClass,
        selectedClassValue: tmpClassValue,
        status: tmpStatus
      });
    }
    case 'SELECT_MERCENARY_CLASS': {
      var selectedClass = "mercenary"
      var tmpClassValue = setSelectedClassValue(selectedClass);
      var tmpStatus = updateStatus(tmpClassValue);
      return Object.assign({}, state, {
        selectedClass: selectedClass,
        selectedClassValue: tmpClassValue,
        status: tmpStatus
      });
    }
    case 'SELECT_WARRIOR_CLASS': {
      var selectedClass = "warrior"
      var tmpClassValue = setSelectedClassValue(selectedClass);
      var tmpStatus = updateStatus(tmpClassValue);
      return Object.assign({}, state, {
        selectedClass: selectedClass,
        selectedClassValue: tmpClassValue,
        status: tmpStatus
      });
    }
    case 'SELECT_HERALD_CLASS': {
      var selectedClass = "herald"
      var tmpClassValue = setSelectedClassValue(selectedClass);
      var tmpStatus = updateStatus(tmpClassValue);
      return Object.assign({}, state, {
        selectedClass: selectedClass,
        selectedClassValue: tmpClassValue,
        status: tmpStatus
      });
    }
    case 'SELECT_THIEF_CLASS': {
      var selectedClass = "thief"
      var tmpClassValue = setSelectedClassValue(selectedClass);
      var tmpStatus = updateStatus(tmpClassValue);
      return Object.assign({}, state, {
        selectedClass: selectedClass,
        selectedClassValue: tmpClassValue,
        status: tmpStatus
      });
    }
    case 'SELECT_ASSASSIN_CLASS': {
      var selectedClass = "assassin"
      var tmpClassValue = setSelectedClassValue(selectedClass);
      var tmpStatus = updateStatus(tmpClassValue);
      return Object.assign({}, state, {
        selectedClass: selectedClass,
        selectedClassValue: tmpClassValue,
        status: tmpStatus
      });
    }
    case 'SELECT_SORCERER_CLASS': {
      var selectedClass = "sorcerer"
      var tmpClassValue = setSelectedClassValue(selectedClass);
      var tmpStatus = updateStatus(tmpClassValue);
      return Object.assign({}, state, {
        selectedClass: selectedClass,
        selectedClassValue: tmpClassValue,
        status: tmpStatus
      });
    }
    case 'SELECT_PYROMANCER_CLASS': {
      var selectedClass = "pyromancer"
      var tmpClassValue = setSelectedClassValue(selectedClass);
      var tmpStatus = updateStatus(tmpClassValue);
      return Object.assign({}, state, {
        selectedClass: selectedClass,
        selectedClassValue: tmpClassValue,
        status: tmpStatus
      });
    }
    case 'SELECT_CLERIC_CLASS': {
      var selectedClass = "cleric"
      var tmpClassValue = setSelectedClassValue(selectedClass);
      var tmpStatus = updateStatus(tmpClassValue);
      return Object.assign({}, state, {
        selectedClass: selectedClass,
        selectedClassValue: tmpClassValue,
        status: tmpStatus
      });
    }
    case 'SELECT_DEPRIVED_CLASS': {
      var selectedClass = "deprived"
      var tmpClassValue = setSelectedClassValue(selectedClass);
      var tmpStatus = updateStatus(tmpClassValue);
      return Object.assign({}, state, {
        selectedClass: selectedClass,
        selectedClassValue: tmpClassValue,
        status: tmpStatus
      });
    }
    default:
      return state
  }
}
