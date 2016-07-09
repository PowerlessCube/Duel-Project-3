var GameState = function() {
	this.players = [];
	this.turnIndex= 0;
};

GameState.prototype = {

	addPlayer: function( player ) {
		return this.players.push( player );
	},

	nextPlayer: function() {
		this.turnIndex += 1;
		if( this.turnIndex > (this.players.length - 1) ) {
			this.turnIndex = 0;
		}
	}

};

module.exports = GameState;
