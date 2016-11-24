var Character = React.createClass({
  getInitialState: function(){
    return {
      classes: {},
      selectedClass: {},
      status: null
    };
  },

  loadCommentsFromServer: function(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: 'false',
			success: function(data){
				this.setState({ classes: data });
			}.bind(this),
			error: function(xhr, status, err){
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
  componentDidMount: function(){
    this.loadCommentsFromServer();
  },

  setStateSelectedClass: function(value){
    var selClass = this.state.classes[value];
    this.setState({ selectedClass:
      {
        "level": selClass.level,
        "vigor": selClass.vigor,
        "attunement": selClass.attunement,
        "endurance": selClass.endurance,
        "vitality": selClass.vitality,
        "strength": selClass.strength,
        "dexterity": selClass.dexterity,
        "intelligence": selClass.intelligence,
        "faith": selClass.faith,
        "luck": selClass.luck
      }
    });
  },

  render: function() {
    if (this.state.classes === null) return null;
    return (
      <div>
        <ClassesSelect classes={this.state.classes} onChange={this.setStateSelectedClass} />
        <StatusViewer selectedClass={this.state.selectedClass} />
      </div>
    );
  }
});

var ClassesSelect = React.createClass({
  _onChange: function (e) {
    this.props.onChange(e.target.value);
  },

  render: function() {
    return (
      <select onChange={this._onChange}>
        <option value="knight">騎士</option>
        <option value="mercenary">傭兵</option>
        <option value="warrior">戦士</option>
        <option value="herald">伝令</option>
        <option value="thief">盗人</option>
        <option value="assassin">刺客</option>
        <option value="sorcerer">魔術師</option>
        <option value="pyromancer">呪術師</option>
        <option value="cleric">聖職者</option>
        <option value="deprived">持たざる者</option>
      </select>
    );
  }
});

var StatusViewer = React.createClass({
  render: function() {
    return(
      <table>
        <tbody>
          <tr>
            <td>レベル</td>
            <td>{this.props.selectedClass.level}</td>
          </tr>
          <tr>
            <td>生命力</td>
            <td>{this.props.selectedClass.vigor}</td>
          </tr>
          <tr>
            <td>集中力</td>
            <td>{this.props.selectedClass.attunement}</td>
          </tr>
          <tr>
            <td>持久力</td>
            <td>{this.props.selectedClass.endurance}</td>
          </tr>
          <tr>
            <td>体力</td>
            <td>{this.props.selectedClass.vitality}</td>
          </tr>
          <tr>
            <td>筋力</td>
            <td>{this.props.selectedClass.strength}</td>
          </tr>
          <tr>
            <td>技量</td>
            <td>{this.props.selectedClass.dexterity}</td>
          </tr>
          <tr>
            <td>理力</td>
            <td>{this.props.selectedClass.intelligence}</td>
          </tr>
          <tr>
            <td>信仰</td>
            <td>{this.props.selectedClass.faith}</td>
          </tr>
          <tr>
            <td>運</td>
            <td>{this.props.selectedClass.luck}</td>
          </tr>
        </tbody>
      </table>
    );
  }
});

ReactDOM.render(
	<Character url="./json/classes.json" />,
	document.getElementById('app')
);
