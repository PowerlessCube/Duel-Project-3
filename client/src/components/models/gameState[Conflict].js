var GameState = function() {
	this.players = [];
	this.turnIndex= 0;
};

GameState.prototype = {

	addPlayers: function( mapPlayers ) {
		return mapPlayers.map(function(player) {
			return this.addPlayer(player);
		}.bind(this));
	},

	addPlayer: function( player ) {
		return this.players.push( player );
	},

	nextPlayer: function() {
		var playerIndex = this.turnIndex += 1;
		if(playerIndex > (this.players.length - 1)) {
			playerIndex = 0;
		}
		console.log(playerIndex);
		console.log(this.players[playerIndex]);
		return this.players[playerIndex];
	}

};

module.exports = GameState;
