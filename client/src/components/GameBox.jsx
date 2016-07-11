//NPM Packages
var React = require('react');
var classNames = require('classnames');

//React/Java Objects
var PlayerBox = require('./PlayerBox.jsx');
var SharedGameStateBox = require('./SharedGameStateBox.jsx');
var CardData = require('./models/cardData.js');
var GameState = require('./models/gameState.js');
var CardMovement = require('./models/cardMovement.js');
var GameState = new GameState();
var cardMovement = CardMovement

var GameBox = React.createClass({

	getInitialState: function() {
		return {
			playerCards: CardData,
			players: GameState.addPlayers(CardData),
			currentPlayer: CardData[0],
			towerOfPower: [],
			buryPile: []
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
				<SharedGameStateBox
					towerOfPower={this.state.towerOfPower}
					buryPile={this.state.buryPile}
				/>
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
