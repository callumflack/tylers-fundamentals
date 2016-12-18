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

function getRepos (username) {
  // fetch username repos
  // return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100')
  return axios.get('https://api.github.com/users/' + username + '/repos')
}

function getTotalsStars (repos) {
  // calculate all the stars that the user has
  // (the log below shows all the user's repos as objects)
  // console.log(repos.data);
  return repos.data.reduce( function (prev, current) {
    return prev + current.stargazers_count
  }, 0)
}

function getPlayersData (player) {
  // getRepos
  // getTotalsStars
  // return obj with that data
  return getRepos(player.login)
    .then(getTotalsStars)
    .then( function (totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores (players) {
  // return an array after doing simple algorithm to determine a winner
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
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
      console.warn('Error in getPlayersInfo: ', err)
    })
  },
  battle: function (players) {
    // these are both promises cause that's what the getPlayersData func is:
    var playerOneData = getPlayersData(players[0])
    var playerTwoData = getPlayersData(players[1])

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function (err) {
        console.warn('Error in battle function: ', err);
      })
  }
}

module.exports = helpers;
