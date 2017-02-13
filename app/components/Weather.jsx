const React = require('react');
const WeatherForm = require('./WeatherForm.jsx');
const WeatherMessage = require('./WeatherMessage.jsx');
const openWeatherMap = require('../api/openWeatherMap.jsx')

const Weather = React.createClass({
  getInitialState(){
    return {
      isLoading: false
    }
  },
  handleSearch(location){
    var that = this;

    this.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      })
    }, function(errorMessage){
      that.setState({
        isLoading: false
      });
      alert(errorMessage);
    })
  },
  render(){
    const {isLoading, temp, location} = this.state;

    function renderMessage(){
      if (isLoading) {
        return <h3 className="text-center">Fetching data...</h3>
      } else if(temp && location) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Temperature</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
