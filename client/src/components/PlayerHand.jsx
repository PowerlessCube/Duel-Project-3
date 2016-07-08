var React = require('react');

var PlayerHand = React.createClass({

	render: function() {
		var playerHandDisplay = this.props.playerHand.map(function(card, index) {
			return(
				<div key={index} className="card">
					<ul>
						<li>{card.powerLevel}</li>
						<li>{card.cardTitle}</li>
						<li>{card.cardImage}</li>
					</ul>
				</div>
			)
		}.bind(this))
		return (
			<div className="player-hand">
				{playerHandDisplay}
			</div>
		)
	}

});

module.exports = PlayerHand;
