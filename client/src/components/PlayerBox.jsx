//NPM Packages
var React = require('react');
var className = require('classnames');

var PlayerHand = require('./PlayerHand.jsx');

var PlayerBox = React.createClass({
	nextPlayer: function(e) {
		this.props.changePlayer();
	},

	render: function() {
		let playerBoxClassNames = className('player-box', `player-${this.props.className}`);
		return (
			<div className={playerBoxClassNames}>
				Player Box <br />
			<h4>PLAYER {this.props.playerId + 1}</h4>
				<h4>CARDS: {this.props.cardData.cards.length}</h4>
				<PlayerHand
					className={this.props.playerId + 1}
					playerHand={this.props.cardData}
					playCardTowerOfPower={this.props.playCardTowerOfPower}
					changePlayer={this.props.changePlayer}
				/>
			<input
				type="button"
				value="Change player"
				onClick={this.nextPlayer}
			/>
			<input
				type="button"
				value="Temp Card Power Check"
			/>
			</div>
		)
	}
});


module.exports = PlayerBox;
