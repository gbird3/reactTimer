var React = require('react');
var Controls = require('Controls');

var CountdownForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    if (strSeconds.match(/^[0-9]+$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds), 10);
    }
  },
  render: function () {
    var {countdownStatus} = this.props;
    var renderControls = () => {
      if(countdownStatus === 'stopped'){
        return <button className="button expanded">Start</button>
      } else {
        return <Controls countdownStatus="paused"/>
      }
    };
    return(
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" placeholder="Enter time in seconds" ref="seconds"/>
            <button className="button expanded">Start</button>
            {renderControls()}
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
