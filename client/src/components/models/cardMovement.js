//MOVING CARDS FROM ARRAYS
module.exports = {

	removeCard: function(deck, cardToRemove) {
		return deck.filter(function(card){
			return cardToRemove.powerLevel != card.powerLevel;
		});
	},

	randomCard: function(deck) {
		return deck[Math.floor(Math.random() * deck.length)];
	}
};
