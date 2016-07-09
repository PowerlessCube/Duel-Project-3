var GameState = require( '../GameState.js' );
var assert = require( 'chai' ).assert;

describe('Game State Logic', function() {

  beforeEach( function() {
    game = new GameState();
  });

  it('it should have an empty array of players', function() {
    assert.deepEqual([], game.players );
  });

});
