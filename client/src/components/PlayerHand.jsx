//NPM PACKAGES REQUIRED
var React = require('react');
var className = require('classnames');

var PlayerHand = React.createClass({

	render: function() {
		let playerHandClassNames = className('card', `player-${this.props.className}`);
		var playerHandDisplay = this.props.playerHand.cards.map(function(card, index) {
			return(
				<div key={index} className={playerHandClassNames} onDoubleClick={ function(){ this.props.playCardTowerOfPower(card)
				this.props.changePlayer()
			}.bind(this) }>
					<img src={card.cardImage} />
				</div>
			)
		}.bind(this))
		return (
			<div className="player-hand">
				Player Hand <br/>
				{playerHandDisplay}
			</div>
		)
	}

});

module.exports = PlayerHand;
