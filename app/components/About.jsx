const React = require('react');

const About = React.createClass({
  render(){
    return (
      <div>
        <h1 className="text-center">Examples component</h1>
        <p>A small project to play around with <a href="https://facebook.github.io/react">React</a>, <a href="http://openweathermap.org">3rd party APIs</a> and <a href="http://heroku.com">Heroku</a> deployment.</p>
      </div>
    );
  }
});

module.exports = About;
