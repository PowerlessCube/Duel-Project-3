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

	killingBlow: function() {
		console.log("killing blow");
	},

	hiddenStrength: function() {
		console.log("hidden strength:");
	},

	precisionStrike: function() {
		console.log("precision strike:");
	},

	feint: function() {
		console.log("feint function:");
	},

	copyCat: function() {
		console.log("copycat function:");
	},

	changeStance: function() {
		console.log("change stance function:");
	},

	disarm: function() {
		console.log("disarm function:");
	},

	backStab: function() {
		console.log("backStab");
	},

	dodge: function() {
		console.log("dodge function:");
	},

	cardAbilitySwitch: function(powerLevel) {
		switch (powerLevel) {
			case 0:
				this.killingBlow()
				break;
			case 1:
				this.hiddenStrength()
				break;
			case 2:
				this.precisionStrike()
				break;
			case 3:
				this.feint()
				break;
			case 4:
				this.copyCat()
				break;
			case 5:
				this.changeStance()
				break;
			case 6:
				this.disarm()
				break;
			case 7:
				this.backStab()
				break;
			case 8:
				this.dodge()
			break;
			default:
				console.log("nothing to do here.");
		}
	},

	playCard: function(card) {
		console.log("card: ", card);
		this.cardAbilitySwitch(card.powerLevel)
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
			//Allows first card to be played to an empty towerOfPower or the Dodge
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
		return (
			<div className="game-box">
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
