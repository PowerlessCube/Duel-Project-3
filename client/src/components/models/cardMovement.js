//MOVING CARDS FROM ARRAYS
module.exports = {

	// findCard: function(deck, findCard) {
	// 	for (var card of deck) {
	// 		if (card === findCard) {
	// 			return card;
	// 		}
	// 	}
	// },

	removeCard: function(deck, cardToRemove) {
		return deck.filter(function(card){
			return cardToRemove.powerLevel != card.powerLevel;
		});
	},

	// addCard: function(deck, card) {
	// 	deck.unshift(card);
	// },
	//
	// moveCard: function(fromDeck, card, targetDeck) {
	// 	var targetCard = this.findCard(fromDeck, card);
	// 	this.removeCard(fromDeck, targetCard);
	// 	this.addCard(targetDeck, targetCard);
	// },

	//Randomised Selection Function
	randomCard: function(deck) {
		return deck[Math.floor(Math.random() * deck.length)];
	}
};
