const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = React.createClass({
  render(){
    return (
      <div>
        <h2>This is nav compoenent</h2>
        <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
        <Link to="/about" activeClassName="active">About</Link>
        <Link to="/examples" activeClassName="active">Examples</Link>
      </div>
    );
  }
});

module.exports = Nav;
