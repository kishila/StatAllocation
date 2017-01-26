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
      />
    </div>
  );
}
