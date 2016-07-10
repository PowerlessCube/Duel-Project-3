var React = require('react');

var PlayerHand = React.createClass({

	render: function() {
		var playerHandDisplay = this.props.playerHand.map(function(card, index) {
			console.log(card.cardImage);
			return(
				<div key={index} className="card">
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
