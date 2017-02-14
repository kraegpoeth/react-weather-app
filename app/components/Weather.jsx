const React = require('react');
const WeatherForm = require('./WeatherForm.jsx');
const WeatherMessage = require('./WeatherMessage.jsx');
const openWeatherMap = require('../api/openWeatherMap.jsx');
const ErrorModal = require('./ErrorModal.jsx');

const Weather = React.createClass({
  getInitialState(){
    return {
      isLoading: false
    }
  },
  handleSearch(location){
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      })
    }, function(errorMessage){
      that.setState({
        isLoading: false,
        errorMessage: errorMessage

      });
    })
  },
  render(){
    var {isLoading, temp, location} = this.state;
    var errorMessage = String(this.state.errorMessage);


    function renderMessage(){
      if (isLoading) {
        return <h3 className="text-center">Fetching data...</h3>
      } else if(temp && location) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }

    function renderError(){
      if (errorMessage) {
        console.log(typeof errorMessage);

        <ErrorModal message={errorMessage}/>
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Temperature</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
