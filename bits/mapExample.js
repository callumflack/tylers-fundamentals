// map
var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen'];
var listItems = friends.map(function(friend){
  return "<li> " + friend + "</li>";
});
console.log(listItems); // ["<li> Ean Platter </li>", "<li> Murphy Randall</li>", "<li> Merrick Christensen </li>"];


// Building UIs with Pure Functions and Function Composition in React.
// f(d)=V. A Function takes in some Data and returns a View.

// Each function has a specific purpose and we're composing our functions by having one function which leverages the other two functions.

var getProfilePic = function (username) {
  return 'https://photo.fb.com/' + username
}
var getProfileLink = function (username) {
  return 'https://www.fb.com/' + username
}
var getProfileData = function (username) {
  return {
    pic: getProfilePic(username),
    link: getProfileLink(username)
  }
}
getProfileData('tylermcginnis')

// and now in React:

var ProfilePic = React.createClass({
   render: function() {
     return (
       <img src={'https://photo.fb.com/' + this.props.username} />
     )
   }
 })
 var ProfileLink = React.createClass({
   render: function() {
     return (
       <a href={'https://www.fb.com/' + this.props.username}>
         {this.props.username}
       </a>
     )
   }
 })
 var Avatar = React.createClass({
   render: function() {
     return (
       <div>
         <ProfilePic username={this.props.username} />
         <ProfileLink username={this.props.username} />
       </div>
     )
   }
 })
 <Avatar username="tylermcginnis" />

// and as React Stateless Functional Components which allows the code above to be written as normal functions, or pure functions:

 var ProfilePic = function (props) {
   return <img src={'https://photo.fb.com/' + props.username} />
 }
 var ProfileLink = function (props) {
   return (
     <a href={'https://www.fb.com/' + props.username}>
       {props.username}
     </a>
   )
 }
 var Avatar = function (props) {
   return (
     <div>
       <ProfilePic username={props.username} />
       <ProfileLink username={props.username} />
     </div>
   )
 }
 <Avatar username="tylermcginnis" />

 // - Pure functions always return the same result given the same arguments.
 // - Pure function's execution doesn't depend on the state of the application.
 // - Pure functions don't modify the variables outside of their scope. No mutations.

// consider .slice v .splice:

var friends = ['Ryan', 'Michael', 'Dan']
friends.slice(0, 1) // 'Ryan'
friends.slice(0, 1) // 'Ryan'
friends.slice(0, 1) // 'Ryan'
// Notice .slice is also a pure function. Given the same arguments, it will always return the same value. It's predictable. It makes a shallow copy and modifying that copy Reproducible results.

var friends = ['Ryan', 'Michael', 'Dan']
friends.splice(0, 1) // ["Ryan"]
friends.splice(0, 1) // ["Michael"]
friends.splice(0, 1) // ["Dan"]
// .splice is not a pure function since each time we invoke it passing in the same arguments, we get a different result. It's also modifying state.
