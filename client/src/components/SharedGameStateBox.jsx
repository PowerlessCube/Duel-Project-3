var React = require('react');
var TowerOfPower = require('./TowerOfPower.jsx');
var BuryPile = require('./BuryPile.jsx');

var SharedGameStateBox = React.createClass({
	buryCard: function() {
		this.props.gameStartBuryCard()
	},

	render: function() {
		return (
			<div className="shared-game-state-box">
				SharedGameStateBox Loaded
				<TowerOfPower
					towerOfPower={this.props.towerOfPower}
				/>
				<BuryPile
					buryPile={this.props.buryPile}
				/>
			<input
				type="button"
				value="Temp Bury Card Button"
				onClick={this.buryCard}
			/>
			</div>
		)
	}

});


module.exports = SharedGameStateBox;
