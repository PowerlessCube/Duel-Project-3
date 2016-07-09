var React = require('react');
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
		console.log("Who is the current player? ", this.state.currentPlayer );
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
			<input type="submit" value="Change player" onClick={this.changePlayer}/>
			</div>
		)
	}
});

module.exports = GameBox;
