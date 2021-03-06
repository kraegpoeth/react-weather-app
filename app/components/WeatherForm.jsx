const React = require('react');

const WeatherForm = React.createClass({
  onFormSubmit(e){
    e.preventDefault();

    const location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render(){
    return (

        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref="location" placeholder="Enter City Name"/>
          <button className="expanded hollow button">Get Weather</button>
        </form>

    );
  }
});

module.exports = WeatherForm;
