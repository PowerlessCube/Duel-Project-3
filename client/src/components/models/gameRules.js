var _ = require('lodash');
var CardMovement = require('./cardMovement.js');

var GameRules = function() {
	this.towerOfPower = [];
	this.buryPile = [];
	this.cardMovement = new CardMovement();
};

GameRules.prototype = {
	playCard: function(playerHand, card) {
		// console.log("What is playerHand? ", playerHand);
		// console.log("What is card? ", card);
		// console.log("what is this.towerOfPower? ", this.towerOfPower);
		console.log("what is this.cardMovement? ", this.cardMovement.moveCard(playerHand, card, this.towerOfPower));
		this.cardMovement.moveCard(playerHand, card, this.towerOfPower);
	}
};

module.exports = GameRules;
