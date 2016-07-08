var React = require('react');
var PlayerBox = require('./PlayerBox.jsx');
var SharedGameStateBox = require('./SharedGameStateBox.jsx');

var GameBox = React.createClass({
	// TODO: The following details will be in the state:
	// Player box
	// - keeping a track of the players hand of cards
	// GameStateBox
	// - Tower of Power - The pile of face-up played cards
	// - Bury Pile - The pile of face-down cards

	render: function() {
		return (
			<div className="game-box">
				Game Box Loaded
				<SharedGameStateBox />
				<PlayerBox />
				<PlayerBox />
			</div>
		)
	}
});

module.exports = GameBox;
