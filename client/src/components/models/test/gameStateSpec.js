var GameState = require('../gameState.js');
var assert = require('chai').assert;

var cardData = require('../cardData.js');

describe('Game State Logic', function() {

  beforeEach( function() {
    game = new GameState();
  });

	//GETTER SETTER TESTS
  it('it should have an empty array of players', function() {
    assert.deepEqual([], game.players);
  });

	it('Tower of Power should be an empty array', function() {
		assert.deepEqual([], game.towerOfPower);
	});

	it('Tower of Power should be an empty array', function() {
		assert.deepEqual([], game.towerOfPower);
	});

	it('Bury Pile should be an empty array', function() {
		assert.deepEqual([], game.buryPile);
	});

	it('Should have a turnIndex = to 0', function() {
		assert.equal(0, game.turnIndex);
	});

	//FUNCTIONS TESTS
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
		var players = cardData;
		game = new GameState();
		game.addPlayers(players);
  });

	//TURNLOGIC TESTS
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

describe('Tower Of Power Game Logic', function() {

	beforeEach(function() {
		game = new GameState();
		game.addPlayers(cardData);
		player1 = game.players[0][0];
		player1Cards = player1.cards;
		targetCard = player1Cards[1];
	});

	it('findCard: return matching card', function() {
		assert.equal(player1Cards[1], game.findCard(player1Cards, targetCard));
	});

	it('removeCard Part 1: returns target card', function() {
		assert.deepEqual(targetCard,
	 	game.removeCard(player1Cards, targetCard));
	});

	// it('ToP Prt1: on play ToP should have 1 card', function() {
	// 	game.moveCard(player1Cards, targetCard, this.game.towerOfPower);
	// 	assert.equal(1, game.towerOfPower.length );
	// });

});
