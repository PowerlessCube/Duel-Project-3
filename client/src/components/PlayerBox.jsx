//NPM Packages
var React = require('react');
var className = require('classnames');

var PlayerHand = require('./PlayerHand.jsx');

var PlayerBox = React.createClass({
	nextPlayer: function(e) {
		this.props.changePlayer();
	},

	render: function() {
		let playerBoxh4 = className( `player-${this.props.className}` )
		let playerBoxClassNames = className('player-box', `player-${this.props.className}`);
		return (
			<div className={playerBoxClassNames}>
				Player Box <br />
				<h4 className={playerBoxClassNames}>PLAYER {this.props.playerId + 1}</h4>
				<h4>CARDS: {this.props.cardData.cards.length}</h4><br/>
				<PlayerHand
					className={this.props.playerId + 1}
					playerHand={this.props.cardData}
					playCardTowerOfPower={this.props.playCardTowerOfPower}
					changePlayer={this.props.changePlayer}
				/>
				<br/>
				<input
					type="button"
					value="Temp Change player"
					onClick={this.nextPlayer}
				/>
			</div>
		)
	}
});


module.exports = PlayerBox;
