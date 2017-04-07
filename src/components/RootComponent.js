import React, { Component } from 'react';
import { connect } from 'react-redux';
import Character from '../components/Character/Character';
import Equipment from '../components/Equipment/Equipment';

class RootComponent extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <Character />
              </td>
              <td>
                <Equipment />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect()(RootComponent);
