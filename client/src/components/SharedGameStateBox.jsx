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
				<div className="player-image">
					<img src="image/player-1-image.png" className="player-1-image"/>
				</div>
				<TowerOfPower
					towerOfPower={this.props.towerOfPower}
				/>
				<BuryPile
					buryPile={this.props.buryPile}
				/>
				<div className="player-image">
					<img src="image/player-2-image.png" className="player-2-image"/>
				</div>
				<br/>
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
