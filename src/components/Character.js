import React from 'react';
import ClassesSelect from './ClassesSelect';
import StatusViewer from './StatusViewer';
import store from '../store';

export default function Character() {
  return (
    <div>
      <ClassesSelect
        selectedClass={store.getState().selectedClass}
        onChangeClass={(e) =>
          {
            var action = "SELECT_" + e.target.value.toUpperCase() + "_CLASS";
            store.dispatch({
              type: action
            })
          }
        }
      />
      <StatusViewer
        status={store.getState().status}
        onClickVigorDown={(e) =>
          {
            store.dispatch({
              type: "ALLOCATION_VIGOR_DOWN"
            })
          }
        }
        onClickVigorUp={(e) =>
          {
            store.dispatch({
              type: "ALLOCATION_VIGOR_UP"
            })
          }
        }

        onClickAttunementDown={(e) => {store.dispatch({type: "ALLOCATION_ATTUNEMENT_DOWN"})}}
        onClickAttunementUp={(e) => {store.dispatch({type: "ALLOCATION_ATTUNEMENT_UP"})}}
        onClickEnduranceDown={(e) => {store.dispatch({type: "ALLOCATION_ENDURANCE_DOWN"})}}
        onClickEnduranceUp={(e) => {store.dispatch({type: "ALLOCATION_ENDURANCE_UP"})}}
        onClickVitalityDown={(e) => {store.dispatch({type: "ALLOCATION_VITALITY_DOWN"})}}
        onClickVitalityUp={(e) => {store.dispatch({type: "ALLOCATION_VITALITY_UP"})}}
        onClickStrengthDown={(e) => {store.dispatch({type: "ALLOCATION_STRENGTH_DOWN"})}}
        onClickStrengthUp={(e) => {store.dispatch({type: "ALLOCATION_STRENGTH_UP"})}}
        onClickDexterityDown={(e) => {store.dispatch({type: "ALLOCATION_DEXTERITY_DOWN"})}}
        onClickDexterityUp={(e) => {store.dispatch({type: "ALLOCATION_DEXTERITY_UP"})}}
        onClickIntelligenceDown={(e) => {store.dispatch({type: "ALLOCATION_INTELLIGENCE_DOWN"})}}
        onClickIntelligenceUp={(e) => {store.dispatch({type: "ALLOCATION_INTELLIGENCE_UP"})}}
        onClickFaithDown={(e) => {store.dispatch({type: "ALLOCATION_FAITH_DOWN"})}}
        onClickFaithUp={(e) => {store.dispatch({type: "ALLOCATION_FAITH_UP"})}}
        onClickLuckDown={(e) => {store.dispatch({type: "ALLOCATION_LUCK_DOWN"})}}
        onClickLuckUp={(e) => {store.dispatch({type: "ALLOCATION_LUCK_UP"})}}
      />
    </div>
  );
}
