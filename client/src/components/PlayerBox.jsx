//NPM Packages
var React = require('react');
var className = require('classnames');


var PlayerHand = require('./PlayerHand.jsx');

var PlayerBox = React.createClass({
	nextPlayer: function(e) {
		this.props.changePlayer();
		// TODO: Change visibility of playerbox so current player is visible and next player is hidden.
	},

	render: function() {
		let playerBoxClassNames = className('player-box', `player-${this.props.className}`);
		return (
			<div className={playerBoxClassNames}>
				Player Box <br />
			<h4>PLAYER {this.props.CardData[0].player}</h4>
				<h4>CARDS: {this.props.CardData[0].cards.length}</h4>
				<PlayerHand
					playerHand={this.props.CardData[0].cards}
				/>
			<input
				type="submit"
				value="Change player"
				onClick={this.nextPlayer}
			/>
			</div>
		)
	}
});


module.exports = PlayerBox;
