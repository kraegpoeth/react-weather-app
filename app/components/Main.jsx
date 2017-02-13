const React = require('react');

const Nav = require('./Nav.jsx')

const Main = React.createClass({
  render(){
    return (
      <div>
        <Nav/>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            {this.props.children}
          </div>
        </div>

      </div>

    );
  }
});

module.exports = Main;
