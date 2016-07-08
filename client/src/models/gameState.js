var gameState = function() {
	this.players = [];
	this.turnIndex= 0;
};

gameState.prototype = {

	addPlayer: function(player) {
		this.players.push( player );
	},

	nextPlayer: function() {
		this.turnIndex += 1;
		if( this.turnIndex > (this.players.length - 1) ) {
			this.turnIndex = 0;
		}
	}

};
