var jsonData;
$.ajaxSetup({ async: false });
$.getJSON('../json/classes.json',
  function(data) {
    jsonData = data;
  }
);
$.ajaxSetup({ async: true }); // 非同期に戻す
console.log(jsonData);

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
  }
}


export default function reducer(state = initialState, action) {
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

  switch(action.type) {
    //-- セレクターによる素性選択時のアクション
    case 'SELECT_KNIGHT_CLASS': {
      var selectedClass = "knight"
      var tmp = setSelectedClassValue(selectedClass);
      return Object.assign({}, state, {
        selectedClass: selectedClass,
        selectedClassValue: tmp
      });
    }
    case 'SELECT_MERCENARY_CLASS': {
      var selectedClass = "mercenary"
      var tmp = setSelectedClassValue(selectedClass);
      return Object.assign({}, state, {
        selectedClass: selectedClass,
        selectedClassValue: tmp
      });
    }
    case 'SELECT_WARRIOR_CLASS': {
      var selectedClass = "warrior"
      var tmp = setSelectedClassValue(selectedClass);
      return Object.assign({}, state, {
        selectedClass: selectedClass,
        selectedClassValue: tmp
      });
    }
    case 'SELECT_HERALD_CLASS': {
      var selectedClass = "herald"
      var tmp = setSelectedClassValue(selectedClass);
      return Object.assign({}, state, {
        selectedClass: selectedClass,
        selectedClassValue: tmp
      });
    }
    case 'SELECT_THIEF_CLASS': {
      var selectedClass = "thief"
      var tmp = setSelectedClassValue(selectedClass);
      return Object.assign({}, state, {
        selectedClass: selectedClass,
        selectedClassValue: tmp
      });
    }
    case 'SELECT_ASSASSIN_CLASS': {
      var selectedClass = "assassin"
      var tmp = setSelectedClassValue(selectedClass);
      return Object.assign({}, state, {
        selectedClass: selectedClass,
        selectedClassValue: tmp
      });
    }
    case 'SELECT_SORCERER_CLASS': {
      var selectedClass = "sorcerer"
      var tmp = setSelectedClassValue(selectedClass);
      return Object.assign({}, state, {
        selectedClass: selectedClass,
        selectedClassValue: tmp
      });
    }
    case 'SELECT_PYROMANCER_CLASS': {
      var selectedClass = "pyromancer"
      var tmp = setSelectedClassValue(selectedClass);
      return Object.assign({}, state, {
        selectedClass: selectedClass,
        selectedClassValue: tmp
      });
    }
    case 'SELECT_CLERIC_CLASS': {
      var selectedClass = "cleric"
      var tmp = setSelectedClassValue(selectedClass);
      return Object.assign({}, state, {
        selectedClass: selectedClass,
        selectedClassValue: tmp
      });
    }
    case 'SELECT_DEPRIVED_CLASS': {
      var selectedClass = "deprived"
      var tmp = setSelectedClassValue(selectedClass);
      return Object.assign({}, state, {
        selectedClass: selectedClass,
        selectedClassValue: tmp
      });
    }
    default:
      return state
  }
}
