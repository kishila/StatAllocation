import React from 'react';
import ClassesSelect from './ClassesSelect';
import StatusViewer from './StatusViewer';
import store from '../../store';

export default function Character() {
  return (
    <div>
      <ClassesSelect
        selectedClass={store.getState().selectedClass}
        onChangeClass={(e) =>
          {
            store.dispatch({
              type: "SELECT_CLASS",
              class: e.target.value
            })
          }
        }
      />
      <StatusViewer
        status={store.getState().status}
        selectedClassValue={store.getState().selectedClassValue}
        allocationValue={store.getState().allocationValue}
        onClickAllocationDown={(e) => {store.dispatch({type: "ALLOCATION_DOWN", param: e.target.id})}}
        onClickAllocationUp={(e) => {store.dispatch({type: "ALLOCATION_UP", param: e.target.id})}}
        onClickReset={(e) => {store.dispatch({type: "RESET_ALLOCATION"})}}
      />
    </div>
  );
}
