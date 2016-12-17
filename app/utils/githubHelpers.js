// var React = require('react');
var axios = require('axios');

// if GH rate limits you
var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo (username) {
  // returns a promise
  // return axios.get('https://api.github.com/users/' + username + param)
  return axios.get('https://api.github.com/users/' + username)
}

var helpers = {
  getPlayersInfo: function (players) {
    return axios.all(players.map(function (username) {
      // returns the axios promise
      return getUserInfo(username)
    }))
    .then(function (info) {
      return info.map(function (user) {
        return user.data
      })
    })
    .catch( function(err) {
      console.warn('Error in getPlayersInfo', err)
    })
  }
}

module.exports = helpers;
