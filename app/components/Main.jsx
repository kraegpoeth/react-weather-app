const React = require('react');

const Nav = require('./Nav.jsx')

const Main = React.createClass({
  render(){
    return (
      <div>
        <Nav/>
        <h2>Main compoenent</h2>
        {this.props.children}
      </div>

    );
  }
});

module.exports = Main;
