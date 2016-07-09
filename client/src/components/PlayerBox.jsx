var React = require('react');
var PlayerHand = require('./PlayerHand.jsx');

var PlayerBox = React.createClass({

	render: function() {
		return (
			<div className="player-box">
				<h4>PLAYER {this.props.CardData[0].player}</h4>
				<PlayerHand
					playerHand={this.props.CardData}
				/>
			</div>
		)
	}
});


module.exports = PlayerBox;
