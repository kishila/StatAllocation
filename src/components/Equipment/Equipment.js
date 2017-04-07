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
          currentWeaponName = {this.props.rightHandWeapon1}
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
          currentWeaponName = {this.props.rightHandWeapon2}
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
          currentWeaponName = {this.props.rightHandWeapon3}
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
          currentWeaponName = {this.props.leftHandWeapon1}
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
          currentWeaponName = {this.props.leftHandWeapon2}
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
          currentWeaponName = {this.props.leftHandWeapon3}
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
    rightHandWeapon1: state.equipment.rightHandWeapon1,
    rightHandWeapon2: state.equipment.rightHandWeapon2,
    rightHandWeapon3: state.equipment.rightHandWeapon3,
    leftHandWeapon1: state.equipment.leftHandWeapon1,
    leftHandWeapon2: state.equipment.leftHandWeapon2,
    leftHandWeapon3: state.equipment.leftHandWeapon3,
  })
)(Equipment);
