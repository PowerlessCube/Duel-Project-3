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

	gameStartBuryCard: function() {
		console.log("gameStartBuryCard Function:");
		let mappedPlayers = this.state.playerCards.map(function(player) {
			return player.cards = CardMovement.removeCard(player.cards, CardMovement.randomCard(player.cards))
		})
		console.log("mappedPlayers: ", mappedPlayers);
		console.log("playerCards State: ", this.state.playerCards);
		console.log("buryPile: ", this.state.buryPile);
		this.setState({ playerCards: this.state.playerCards})

		// this.setState({ playerCards: mappedPlayers});

		// let player1Cards = this.state.playerCards[0].cards
		// this.state.playerCards[0].cards = CardMovement.removeCard(player1Cards, CardMovement.randomCard(player1Cards))
		//
		// let player2Cards = this.state.playerCards[1].cards
		// this.state.playerCards[0].cards = CardMovement.removeCard(player2Cards, CardMovement.randomCard(player2Cards))

	},

	render: function() {
		let currentPlayer = this.currentPlayer()
		// let buryCard = this.gameStartBuryCard()
		return (
			<div className="game-box">
				Game Box
				<SharedGameStateBox
					towerOfPower={this.state.towerOfPower}
					buryPile={this.state.buryPile}
					gameStartBuryCard={this.gameStartBuryCard}
				/>
				<PlayerBox
					className= {this.state.currentPlayer + 1}
					cardData={currentPlayer}
					changePlayer={this.changePlayer}
					playCard={this.playCard}
					playerId={this.state.currentPlayer}
				/>
			</div>
		)
	}
});

module.exports = GameBox;
