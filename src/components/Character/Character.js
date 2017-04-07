import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClassesSelect from './ClassesSelect';
import StatusViewer from './StatusViewer';
import store from '../../store';

class Character extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ClassesSelect
          selectedClass={this.props.selectedClass}
          onChangeClass={(e) =>
            {
              this.props.dispatch({
                type: "SELECT_CLASS",
                class: e.target.value
              })
            }
          }
        />
        <StatusViewer
          status={this.props.status}
          selectedClassValue={this.props.selectedClassValue}
          allocationValue={this.props.allocationValue}
          onClickAllocationDown={(e) => {this.props.dispatch({type: "ALLOCATION_DOWN", param: e.target.id})}}
          onClickAllocationUp={(e) => {this.props.dispatch({type: "ALLOCATION_UP", param: e.target.id})}}
          onClickReset={(e) => {this.props.dispatch({type: "RESET_ALLOCATION"})}}
          />
      </div>
    );
  }
}

export default connect(
  state => ({
    selectedClass: state.character.selectedClass,
    selectedClassValue: state.character.selectedClassValue,
    allocationValue: state.character.allocationValue,
    status: state.character.status,
  })
)(Character);
