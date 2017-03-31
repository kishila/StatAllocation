import { combineReducers } from 'redux';
import equipment from './EquipmentReducer'
import character from './CharacterReducer'

export default combineReducers({
  equipment,
  character
})
