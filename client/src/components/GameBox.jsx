//NPM Packages
var React = require('react');
var classNames = require('classnames');

//React/Java Objects
var PlayerBox = require('./PlayerBox.jsx');
var SharedGameStateBox = require('./SharedGameStateBox.jsx');
var CardData = require('../cardData.js');
var GameState = require('./models/gameState.js');

var GameState = new GameState();
var GameBox = React.createClass({
	// TODO: The following details will be in the state:
	// Player box
	// - keeping a track of the players hand of cards
	// GameStateBox
	// - Tower of Power - The pile of face-up played cards
	// - Bury Pile - The pile of face-down cards
	getInitialState: function() {
		return {
			playerCards: CardData,
			players: GameState.addPlayers(CardData),
			currentPlayer: CardData[0]
		}
	},

	changePlayer: function(e) {
		let nextPlayer = GameState.nextPlayer();
		this.setState({currentPlayer: nextPlayer})
	},

	render: function() {

		return (
			<div className="game-box">
				Game Box
				<SharedGameStateBox />
				<PlayerBox
					className={this.state.currentPlayer[0].player}
					CardData={this.state.currentPlayer}
					changePlayer={this.changePlayer}
				/>
			</div>
		)
	}
});

module.exports = GameBox;
