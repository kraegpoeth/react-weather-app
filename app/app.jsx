const React = require('react');
const ReactDOM = require('react-dom');

var obj1 = {
  name: 'Kasper',
  location: 'Sverige'
}

var obj2 = {
  age: 'Kristina',
  ...obj1
}
console.log(obj2);
ReactDOM.render(
  <h1>Boilerplate App</h1>,
  document.getElementById('app')
);
