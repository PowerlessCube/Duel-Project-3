var React = require('react');
var className = require('classnames');

var TowerOfPower = React.createClass({

	render: function() {
		let towerOfPowerClassNames = className('card', 'tower-of-power')
		let towerOfPowerDeckDisplay = this.props.towerOfPower.map(function(card, index) {
			return(
				<div key={index} className={towerOfPowerClassNames}>
					<img src={card.cardImage} />
				</div>
			)
			console.log(towerOfPowerDeckDisplay);
		});
		return (
			<div className="tower-of-power">
				Tower Of Power <br/>
			{towerOfPowerDeckDisplay}
			</div>
		)
	}

})


module.exports = TowerOfPower;
