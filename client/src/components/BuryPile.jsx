var React = require('react');
var className = require('classnames');

var BuryPile = React.createClass({

	render: function() {
		let buryPileClassNames = className('card', 'bury-pile')
		let buryPileDeckDisplay = this.props.buryPile.map(function(card, index) {
			return(
				<div key={index} className={buryPileClassNames}>
					<img src={card.cardBackImage} />
				</div>
			)
			console.log(buryPileDeckDisplay);
		});
		return (
			<div className="bury-pile">
				Bury Pile <br/>
			{buryPileDeckDisplay[buryPileDeckDisplay.length-1]}
			</div>
		)
	}

})


module.exports = BuryPile;
