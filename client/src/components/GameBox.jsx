var React = require('react');
var PlayerBox = require('./PlayerBox.jsx');
var SharedGameStateBox = require('./SharedGameStateBox.jsx');
var cardData = require('../cardData.js');

var GameBox = React.createClass({
	// TODO: The following details will be in the state:
	// Player box
	// - keeping a track of the players hand of cards
	// GameStateBox
	// - Tower of Power - The pile of face-up played cards
	// - Bury Pile - The pile of face-down cards
	getInitialState: function() {
		return {
			PlayerCards: cardData
		}
	},

	render: function() {
		return (
			<div className="game-box">
				Game Box Loaded
				<SharedGameStateBox />
				<PlayerBox
					cardData={this.state.playerCards}
				/>
				<PlayerBox
				/>
			</div>
		)
	}
});

module.exports = GameBox;
