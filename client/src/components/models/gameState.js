var _ = require('lodash');


var GameState = function() {
	this.players = [];
	this.towerOfPower = [];
	this.buryPile = [];
	this.turnIndex= 0;
};

GameState.prototype = {
	//ADDING PLAYERS
	addPlayers: function( mapPlayers ) {
		return mapPlayers.map(function(player) {
			return this.addPlayer(player);
		}.bind(this));
	},

	addPlayer: function( player ) {
		return this.players.push( player );
	},

	//TURN LOGIC
	// HACK: This function may cause trouble later on when alterning state in React. Also limits game to 2 player, will require modification if stretch goal of more players introduced.
	nextPlayer: function() {
		this.players = this.players.reverse();
		return this.players[0];
	},

	findCard: function(deck, findCard) {
		for (var card of deck) {
			if (card === findCard) {
				return card;
			}
		}
	},

	// playCard: function(player, card) {
	// 	// TODO: I want to pick a matching card from the player's hand.
	// 	// TODO: I want to remove that matching card from the player's hand
	// 	// TODO: I want to insert that card into the first position of the tower of power array.
	// }



};

module.exports = GameState;
