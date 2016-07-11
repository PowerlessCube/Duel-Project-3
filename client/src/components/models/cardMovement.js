//MOVING CARDS FROM ARRAYS
var _ = require('lodash');

var CardMovement = function() {
};

CardMovement.prototype = {

	findCard: function(deck, findCard) {
		for (var card of deck) {
			if (card === findCard) {
				return card;
			}
		}
	},

	removeCard: function(deck, card) {
		var index = deck.indexOf(card);
		return deck.splice(index, 1)[0];
	},

	addCard: function(deck, card) {
		deck.unshift(card);
	},

	moveCard: function(fromDeck, card, targetDeck) {
		var targetCard = this.findCard(fromDeck, card);
		this.removeCard(fromDeck, targetCard);
		this.addCard(targetDeck, targetCard);
	},

	//Randomised Selection Function
	randomCard: function(deck) {
		return deck[Math.floor(Math.random() * deck.length)];
	}
};

module.exports = CardMovement;
