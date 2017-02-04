import React from 'react';

export default function WeaponSelect({ selectedWeapon, onSelectedWeapon }) {
  return (
    <div>
      <a className="" data-toggle="modal" data-target="#modal-example">
        -------
      </a>

      {/* <!-- 2.モーダルの配置 --> */}
      <div className="modal" id="modal-example">
        <div className="modal-dialog">

          {/* <!-- 3.モーダルのコンテンツ --> */}
          <div className="modal-content">
              {/* <!-- 4.モーダルのヘッダ --> */}
              <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">
                      <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 className="modal-title" id="modal-label">ダイアログ</h4>
              </div>
              {/* <!-- 5.モーダルのボディ --> */}
              <div className="modal-body">
                <select size="15" style={{width: 80}}>
                  <option value="daggers">短剣</option>
                  <option value="straight_swords">直剣</option>
                  <option value="greatswords">大剣</option>
                  <option value="ultra_greatswords">特大剣</option>
                  <option value="curved_swords">曲剣</option>
                  <option value="curved_greatswords">大曲剣</option>
                  <option value="thrusting_swords">刺剣</option>
                  <option value="katanas">刀</option>
                  <option value="axes">斧</option>
                  <option value="greataxes">大斧</option>
                  <option value="hammers">槌</option>
                  <option value="great_hammers">大槌</option>
                  <option value="spears">槍</option>
                  <option value="pikes">長槍</option>
                  <option value="halberds">斧槍</option>
                  <option value="reapers">鎌</option>
                  <option value="whips">ムチ</option>
                  <option value="fists">拳</option>
                  <option value="claws">爪</option>
                </select>

                <select size="15" style={{width: 160}}>
                  <option value="daggers">短剣</option>
                  <option value="straight_swords">直剣</option>
                  <option value="greatswords">大剣</option>
                  <option value="ultra_greatswords">特大剣</option>
                  <option value="curved_swords">曲剣</option>
                  <option value="curved_greatswords">大曲剣</option>
                  <option value="thrusting_swords">刺剣</option>
                  <option value="katanas">刀</option>
                  <option value="axes">斧</option>
                  <option value="greataxes">大斧</option>
                  <option value="hammers">槌</option>
                  <option value="great_hammers">大槌</option>
                  <option value="spears">槍</option>
                  <option value="pikes">長槍</option>
                  <option value="halberds">斧槍</option>
                  <option value="reapers">鎌</option>
                  <option value="whips">ムチ</option>
                  <option value="fists">拳</option>
                  <option value="claws">爪</option>
                </select>
              </div>
              {/* <!-- 6.モーダルのフッタ --> */}
              <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">OK</button>
              </div>
          </div>
        </div>
      </div>

    </div>
  );
}
