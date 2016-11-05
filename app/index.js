var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = 'b90234238cb744d6b8cdf782c6e2ba3e'
var sentryApp = '112159'
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp

var _APP_INFO = {
    name: 'Github Battle',
    brand: 'video4',
    version: '1.0'
}

Raven.config(sentryURL, {
    release: _APP_INFO.version,
    tags: {
        branch: _APP_INFO.branch
    }
}).install()

ReactDOM.render( routes, document.getElementById('app'));
