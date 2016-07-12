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

var GameBox = React.createClass({

	getInitialState: function() {
		return {
			playerCards: CardData,
			currentPlayer: 0,
			towerOfPower: [],
			buryPile: []
		}
	},

	changePlayer: function(e) {
		if( this.state.currentPlayer === 0){
			this.setState({currentPlayer: 1})
		}else{
			this.setState({currentPlayer: 0})
		}

	},

	currentPlayer: function() {
		return this.state.playerCards[ this.state.currentPlayer ]
	},

	playCard: function(card) {
		let playerToUpdate = this.currentPlayer();
		playerToUpdate.cards = CardMovement.removeCard( playerToUpdate.cards, card )
		let newPlayerCards = this.state.playerCards
		newPlayerCards[this.state.currentPlayer] = playerToUpdate
		var newTowerOfPower = this.state.towerOfPower.concat( [ card ] )
		this.setState( { playerCards: newPlayerCards, towerOfPower: newTowerOfPower } )
	},

	render: function() {
		let currentPlayer = this.currentPlayer()
		return (
			<div className="game-box">
				Game Box
				<SharedGameStateBox
					towerOfPower={this.state.towerOfPower}
					buryPile={this.state.buryPile}
				/>
				<PlayerBox
					className= { this.state.currentPlayer + 1 }
					cardData={ currentPlayer }
					changePlayer={ this.changePlayer }
					playCard={ this.playCard }
					playerId = { this.state.currentPlayer }
				/>
			</div>
		)
	}
});

module.exports = GameBox;
