const React = require('react');
var $ = require('jquery');

var ErrorModal = React.createClass({
  getDefaultProps(){
    return {
      title: 'Error'
    }
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render() {
    var {title, message} = this.props;
    <div id="error-modal" className="reveal tiny text-center" data-reveal="">
      <h4>{title}</h4>
      <p>{message}</p>
      <p>
        <button className="button hollow" data-close="">
          OK
        </button>
      </p>
    </div>
  }
});

module.exports = ErrorModal;
