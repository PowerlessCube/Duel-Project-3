//NPM Packages
var React = require('react');
var classNames = require('classnames');

//React/Java Objects
var PlayerBox = require('./PlayerBox.jsx');
var SharedGameStateBox = require('./SharedGameStateBox.jsx');
var CardData = require('./models/cardData.js');
var CardMovement = require('./models/cardMovement.js');

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
	//Card Abilities:
	dodge: function() {
		console.log("dodge function:");
	},

	backStab: function() {
		console.log("backStab");
	},

	disarm: function() {
		console.log("disarm function:");
	},

	changeStance: function() {
		console.log("change stance function:");
	},

	copyCat: function() {
		console.log("copycat function:");
	},

	feint: function() {
		console.log("copycat function:");
	},

	precisionStrike: function() {
		console.log("precision strike:");
	},

	hiddenStrength: function() {
		console.log("hidden strength:");
	},

	killingBlow: function() {
		console.log("killing blow");
	},

	playCard: function(card) {
		console.log("card: ", card);
		// let cardAbility = JSON.parse(card.cardAbility);
		// console.log("what is cardAbility: ", cardAbility);
		let playerToUpdate = this.currentPlayer();
		playerToUpdate.cards = CardMovement.removeCard( playerToUpdate.cards, card )
		let newPlayerCards = this.state.playerCards
		newPlayerCards[this.state.currentPlayer] = playerToUpdate
		var newTowerOfPower = this.state.towerOfPower.concat( [ card ] )
		this.setState( { playerCards: newPlayerCards, towerOfPower: newTowerOfPower } )
	},

	playCardTowerOfPower: function(card) {
		let towerOfPower = this.state.towerOfPower
		if (towerOfPower.length == 0 || card.powerLevel === 8 ) {
			//Allows first card to be played to an empty towerOfPower
			this.playCard(card);
		}
		else {
			//Adds card to ToP after a card has already been played
			if (card.powerLevel < towerOfPower[towerOfPower.length-1].powerLevel) {
				this.playCard(card);
			} else {
				console.log("You can't play that card");
			}
		}

	},

	gameStartBuryCard: function() {
		let removedCards = []
		this.state.playerCards.forEach(function(player) {
			let randomCard = CardMovement.randomCard(player.cards)
			removedCards.push( randomCard )
			return player.cards = CardMovement.removeCard(player.cards, randomCard)
		})
		let newBuryPile = this.state.buryPile.concat( removedCards )
		this.setState({
			playerCards: this.state.playerCards,
			buryPile: newBuryPile
		})
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
					playCardTowerOfPower={this.playCardTowerOfPower}
					playerId={this.state.currentPlayer}
				/>
			</div>
		)
	}
});

module.exports = GameBox;
