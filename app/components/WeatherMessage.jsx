const React = require('react');

const WeatherMessage = React.createClass({
  render(){
    return (

        <div>
          <h2 className="text-center">It is {this.props.temp} in {this.props.location}</h2>
        </div>

    );
  }
});

module.exports = WeatherMessage;
