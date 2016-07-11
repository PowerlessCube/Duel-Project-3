var GameRules = require('../gameRules.js');
var CardData = require('../cardData.js');

var assert = require('chai').assert;

describe('Game Rules Logic', function() {

	beforeEach(function() {
		gameRules = new GameRules();
		player2Hand = CardData[1][0].cards;
	});

	it('Tower of Power should be an empty array', function() {
		assert.deepEqual([], gameRules.towerOfPower);
	});

	it('Bury Pile should be an empty array', function() {
		assert.deepEqual([], gameRules.buryPile);
	});

	it('play card, should move chosen card to TowerOfPower', function() {
		gameRules.playCard(player2Hand, player2Hand[2]);
		assert.deepEqual([player2Hand[2]], gameRules.towerOfPower);
	});

});
