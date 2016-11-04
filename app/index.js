var USER_DATA = {
  name: 'Millinius Smith',
  username: 'johnsmith',
  image: 'http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjMzOTc0MTk1NzI0.jpg'
}

var React = require('react');
var ReactDOM = require('react-dom');

// fn(data)=view

// Your components shoudl be:
// Focused
// Independent
// Reusable
// Small
// Testable

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function () {
    return <div>{this.props.name}</div>
  }
});

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
