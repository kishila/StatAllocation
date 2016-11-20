// 親：<Parent />の定義
var ClassesSelect = React.createClass({
  _onChange: function (e) {

  },

  render: function() {
    return (
      <select onChange={this._onChange}>
        <option>騎士</option>
        <option>傭兵</option>
        <option>戦士</option>
        <option>伝令</option>
        <option>盗人</option>
        <option>刺客</option>
        <option>魔術師</option>
        <option>呪術師</option>
        <option>聖職者</option>
        <option>持たざる者</option>
      </select>
    );
  }
});

// id='app' に <Parent />を表示する（マウント）
var m = React.render(<ClassesSelect />, document.getElementById('app'));
