var React = require('react');
var PlayerHand = require('./PlayerHand.jsx');

var PlayerBox = React.createClass({

	render: function() {
		return (
			<div className="player-box">
				PlayerBox
				<PlayerHand
					playerHand={this.props.cardData}
				/>
			</div>
		)
	}
});


module.exports = PlayerBox;
