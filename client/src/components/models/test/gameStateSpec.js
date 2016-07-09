var GameState = require( '../gameState.js' );
var assert = require( 'chai' ).assert;

describe('Game State Logic', function() {

  beforeEach( function() {
    game = new GameState();
  });

  it('it should have an empty array of players', function() {
    assert.deepEqual([], game.players);
  });

	it('Should have a turnIndex = to 0', function() {
		assert.equal(0, game.turnIndex);
	});

	it('It should addPlayer', function() {
		game.addPlayer("Player 1");
		assert.deepEqual(["Player 1"], game.players);
	});

	it('It should add multiple players', function() {
		game.addPlayers(["Player 1", "Player 2"]);
		assert.deepEqual(["Player 1", "Player 2"], game.players);
	});

});

describe('Game State Logic - 2 player game:', function() {
	beforeEach( function() {
		var players = ["Player 1", "Player 2"];
		game = new GameState();
		game.addPlayers(players);
  });

	it('Taking a turn should change from player 1 to player 2', function() {
		assert.equal(game.nextPlayer(), game.players[0]);
	});

	it('Taking 2 turns should change from player 2 to player 1', function() {
		game.nextPlayer();
		assert.equal(game.nextPlayer(), game.players[0]);
	});

	it('Taking 3 turns should change from player 1 to player 2', function() {
		game.nextPlayer();
		game.nextPlayer();
		game.nextPlayer();
		assert.equal(game.nextPlayer(), game.players[0]);
	});

});