var React = require('react');
var PlayerHand = require('./PlayerHand.jsx');

var PlayerBox = React.createClass({
	nextPlayer: function(e) {
		this.props.changePlayer();
		
	},

	render: function() {
		return (
			<div className="player-box">
				<h4>PLAYER {this.props.CardData[0].player}</h4>
				<PlayerHand
					playerHand={this.props.CardData}
				/>
			<input
				type="submit"
				value="Change player"
				onClick={this.nextPlayer}
			/>
			</div>
		)
	}
});


module.exports = PlayerBox;
