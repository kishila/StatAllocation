var Character = React.createClass({
  render: function() {
    var data = {
      level: 9,
      vigor: 12,
      attunement: 10,
      endurance: 11,
      vitality: 15,
      strength: 13,
      dexterity: 12,
      intelligence: 9,
      faith: 9,
      luck: 7,
    };

    return (
      <div>
        <ClassesSelect />
        <StatusViewer classData={data} />
      </div>
    );
  }
});

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

var StatusViewer = React.createClass({
  getInitialState: function () {
    return {
      classData: this.props.classData
    };
  },

  render: function() {
    var json_text = JSON.stringify(this.state.classData);
    console.log(json_text);
    return (
      <table>
      {/*
        <tr>
          <td>生命力</td>
          <td>{this.state.vigor}</td>
        </tr>
        <tr>
          <td>集中力</td>
          <td>{this.state.attunement}</td>
        </tr>
        <tr>
          <td>持久力</td>
          <td>{this.state.}</td>
        </tr>
        <tr>
          <td>体力</td>
          <td>{this.state.}</td>
        </tr>
        <tr>
          <td>筋力</td>
          <td>{this.state.}</td>
        </tr>
        <tr>
          <td>技量</td>
          <td>{this.state.}</td>
        </tr>
        <tr>
          <td>理力</td>
          <td>{this.state.}</td>
        </tr>
        <tr>
          <td>信仰</td>
          <td>{this.state.}</td>
        </tr>
        <tr>
          <td>運</td>
          <td>{this.state.}</td>
        </tr>
        */}
      </table>
    );
  }
});


// id='app' に <Parent />を表示する（マウント）
var m = React.render(<Character />, document.getElementById('app'));
