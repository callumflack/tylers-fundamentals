var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      username: ''
    };
  },
  // naming pattern: the function uses 'handle'
  handleUpdateUser: function (e) {
    this.setState({
      username: e.target.value
    })
  },
  // naming pattern: the function uses 'handle'
  handleSubmitUser: function (e) {
    e.preventDefault();
    // cache the username so the prev input doesn't show again
    var username = this.state.username;
    this.setState({
      username: ''
    });

    // dynamically change routes w/ ReactRouter.
    // depends on the router object off context types, so you don't have to pass in router as a prop down thru all children.
    // context.router.push can use an object with pathname, queries & state, or just straight up combine a string.
    // TODO: finish react-router tute & go read about the context object options.
    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
  // note naming pattern: props uses 'on', the function uses 'handle'
  render: function () {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
});

module.exports = PromptContainer;
