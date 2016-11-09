var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  // doing routing? need contextTypes
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    // console.log('QUERY', query);
    //  fetch info form Github then update state
  },
  render: function () {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}/>
    );
  }

});

module.exports = ConfirmBattleContainer;
