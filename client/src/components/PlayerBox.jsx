var React = require('react');
var PlayerHand = require('./PlayerHand.jsx');

var PlayerBox = React.createClass({

	render: function() {
		return (
			<div className="player-box">
				<h4>PLAYER {this.props.cardData[0].player}</h4>
				<PlayerHand
					playerHand={this.props.cardData}
				/>
			</div>
		)
	}
});


module.exports = PlayerBox;
