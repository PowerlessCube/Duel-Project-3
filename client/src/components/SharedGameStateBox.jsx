var React = require('react');
var TowerOfPower = require('./TowerOfPower.jsx');
var BuryPile = require('./BuryPile.jsx');

var SharedGameStateBox = React.createClass({

	render: function() {
		return (
			<div className="game-box">
				SharedGameStateBox Loaded
				<TowerOfPower />
				<BuryPile />
			</div>
		)
	}

});


module.exports = SharedGameStateBox;
