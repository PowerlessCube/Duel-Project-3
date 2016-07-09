var React = require('react');
var PlayerBox = require('./PlayerBox.jsx');
var SharedGameStateBox = require('./SharedGameStateBox.jsx');
var CardData = require('../cardData.js');
var GameState = require('../models/gameState.js');

var GameBox = React.createClass({
	// TODO: The following details will be in the state:
	// Player box
	// - keeping a track of the players hand of cards
	// GameStateBox
	// - Tower of Power - The pile of face-up played cards
	// - Bury Pile - The pile of face-down cards
	getInitialState: function() {
		return {
			// players: GameState.addPlayer("Player 1"),
			playerCards: CardData
		}
	},

	render: function() {
		return (
			<div className="game-box">
				Game Box Loaded
				<SharedGameStateBox />
				<PlayerBox
					CardData={this.state.playerCards[0]}
				/>
				<PlayerBox
					CardData={this.state.playerCards[1]}
				/>
			</div>
		)
	}
});

module.exports = GameBox;
