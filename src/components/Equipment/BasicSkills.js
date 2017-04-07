import React, { Component } from 'react';
import { connect } from 'react-redux';

class BasicSkills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const hp = this.props.hp;
    const fp = this.props.fp;
    const stamina = this.props.stamina;
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td width="100">HP</td>
              <td>{hp}</td>
            </tr>
            <tr>
              <td width="100">FP</td>
              <td>{fp}</td>
            </tr>
            <tr>
              <td width="100">スタミナ</td>
              <td>{stamina}</td>
            </tr>
            <tr>
              <td colSpan="2"><hr /></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  state => ({
    hp: state.equipment.hp,
    fp: state.equipment.fp,
    stamina: state.equipment.stamina,
  })
)(BasicSkills);
