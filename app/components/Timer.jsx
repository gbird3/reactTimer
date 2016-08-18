var React = require('react');

var Timer = React.createClass({
  render: function () {
    return(
      <div>
        <h3>Timer Component</h3>
        <button className="button">Start Timer</button>
      </div>
    );
  }
});

module.exports = Timer;
