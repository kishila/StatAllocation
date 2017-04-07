import React from 'react';
import WeaponSelecter from './WeaponSelecter';

export default function WeaponSelect({ componentNum, shakeHand, currentWeaponName, onClickDecideWeapon }) {
  return (
    <div>
      {shakeHand}
      <a className="" data-toggle="modal" data-target={"#modal" + componentNum}>
        {currentWeaponName}
      </a>

      {/* <!-- 2.モーダルの配置 --> */}
      <div className="modal" id={"modal" + componentNum}>
        <div className="modal-dialog">

          {/* <!-- 3.モーダルのコンテンツ --> */}
          <div className="modal-content">
              {/* <!-- 4.モーダルのヘッダ --> */}
              <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">
                      <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 className="modal-title" id="modal-label">{shakeHand}{currentWeaponName}</h4>
              </div>
              {/* <!-- 5.モーダルのボディ --> */}
              <div className="modal-body">
                <WeaponSelecter />
              </div>
              {/* <!-- 6.モーダルのフッタ --> */}
              <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal" onClick={onClickDecideWeapon}>OK</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
