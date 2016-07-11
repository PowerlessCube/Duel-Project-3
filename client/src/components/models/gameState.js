var _ = require('lodash');

var GameState = function() {
	this.players = [];
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
	}

};

module.exports = GameState;
