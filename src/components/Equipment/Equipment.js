import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeaponSelect from './WeaponSelect/WeaponSelect';
import BasicSkills from './BasicSkills';

  class Equipment extends Component {
    constructor(props) {
      super(props);
    }

  render() {
    return (
      <div>
        <BasicSkills />
        <WeaponSelect
          componentNum = {"right1"}
          shakeHand = {"右 武器1："}
          currentWeaponName = {this.props.rightHandWeaponName1}
          onClickDecideWeapon = {(e) =>
            {
              this.props.dispatch({
                type: "DECIDE_WEAPON",
                hand: "right",
                number: "1"
              })
            }
          }
          />
        <WeaponSelect
          componentNum = {"right2"}
          shakeHand = {"右 武器2："}
          currentWeaponName = {this.props.rightHandWeaponName2}
          onClickDecideWeapon = {(e) =>
            {
              this.props.dispatch({
                type: "DECIDE_WEAPON",
                hand: "right",
                number: "2"
              })
            }
          }
        />
        <WeaponSelect
          componentNum = {"right3"}
          shakeHand = {"右 武器3："}
          currentWeaponName = {this.props.rightHandWeaponName3}
          onClickDecideWeapon = {(e) =>
            {
              this.props.dispatch({
                type: "DECIDE_WEAPON",
                hand: "right",
                number: "3"
              })
            }
          }
          />
        <WeaponSelect
          componentNum = {"left1"}
          shakeHand = {"左 武器1："}
          currentWeaponName = {this.props.leftHandWeaponName1}
          onClickDecideWeapon = {(e) =>
            {
              this.props.dispatch({
                type: "DECIDE_WEAPON",
                hand: "left",
                number: "1"
              })
            }
          }
          />
        <WeaponSelect
          componentNum = {"left2"}
          shakeHand = {"左 武器2："}
          currentWeaponName = {this.props.leftHandWeaponName2}
          onClickDecideWeapon = {(e) =>
            {
              this.props.dispatch({
                type: "DECIDE_WEAPON",
                hand: "left",
                number: "2"
              })
            }
          }
          />
        <WeaponSelect
          componentNum = {"left3"}
          shakeHand = {"左 武器3："}
          currentWeaponName = {this.props.leftHandWeaponName3}
          onClickDecideWeapon = {(e) =>
            {
              this.props.dispatch({
                type: "DECIDE_WEAPON",
                hand: "left",
                number: "3"
              })
            }
          }
          />
      </div>
    );
  }
}

export default connect(
  state => ({
    rightHandWeaponName1: state.equipment.rightHandWeaponName1,
    rightHandWeaponName2: state.equipment.rightHandWeaponName2,
    rightHandWeaponName3: state.equipment.rightHandWeaponName3,
    leftHandWeaponName1: state.equipment.leftHandWeaponName1,
    leftHandWeaponName2: state.equipment.leftHandWeaponName2,
    leftHandWeaponName3: state.equipment.leftHandWeaponName3,
  })
)(Equipment);
