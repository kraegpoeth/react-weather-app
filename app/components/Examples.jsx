const React = require('react');
var {Link} = require('react-router');

const Examples = React.createClass({
  render(){
    return (
      <div>
        <h1 className="text-center">Examples component</h1>
        <p>Here are a few example locations</p>
        <ol>
          <li><Link to="/?location=Philadelphia">Philadelphia</Link></li>
          <li><Link to="/?location=Trelleborg">Trelleborg, Sweden</Link></li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;
