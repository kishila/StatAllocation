import React from 'react';
import ClassesSelect from './ClassesSelect';
import StatusViewer from './StatusViewer';

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
      />
    </div>
  );
}
