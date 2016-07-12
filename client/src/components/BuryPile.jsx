var React = require('react');
var className = require('classnames');

var BuryPile = React.createClass({

	render: function() {
		let buryPileClassNames = className('card', 'bury-pile')
		let BuryPileDeckDisplay = this.props.buryPile.map(function(card, index) {
			return(
				<div key={index} className={buryPileClassNames}>
					<img src={card.cardImage} />
				</div>
			)
			console.log(BuryPileDeckDisplay);
		});
		return (
			<div className="bury-pile">
				Bury Pile <br/>
				{BuryPileDeckDisplay}
			</div>
		)
	}

})


module.exports = BuryPile;
