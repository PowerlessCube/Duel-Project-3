var GameState = require('../gameState.js');
var CardMovement = require('../cardMovement.js');
var GameRules = require('../gameRules.js');
var CardData = require('../cardData.js');

var assert = require('chai').assert;

describe('Card Movement Logic', function() {

	beforeEach(function() {
		game = new GameState();
		gameRules = new GameRules();
		cardMovement = new CardMovement();
		game.addPlayers(CardData);
		player1 = game.players[0][0];
		player1Cards = player1.cards;
		targetCard = player1Cards[1];
	});

	//find Card function
	it('findCard: return matching card', function() {
		assert.equal(player1Cards[1], cardMovement.findCard(player1Cards, targetCard));
	});

	//RemoveCard - function
	it('removeCard Part 1: returns target card', function() {
		assert.deepEqual(targetCard,
	 	cardMovement.removeCard(player1Cards, targetCard));
	});

	it('removeCard Part 2: Playerhand is reduced to 2 cards', function() {
		assert.equal(2, player1Cards.length);
	});

	it('addCard: adds card to chosen deck', function() {
		cardMovement.addCard(gameRules.towerOfPower, targetCard);
		assert.deepEqual([targetCard], gameRules.towerOfPower);
	});

	it('ToP: on play ToP should have 1 card', function() {
		cardMovement.moveCard(player1Cards, targetCard, gameRules.towerOfPower);
		assert.equal(1, gameRules.towerOfPower.length );
	});

});

describe('Randomised Selection Functions', function() {

	beforeEach( function() {
		game = new GameState();
		game.addPlayers(CardData);
		player2 = game.players[1][0];
		player2Cards = player2.cards;
	});

	// HACK: Not sure the best way to test for a random selection.
	it('randomly selects a card from a deck', function() {
		console.log(cardMovement.randomCard(player2Cards));
	});

});
