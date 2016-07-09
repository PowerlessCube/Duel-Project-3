var React = require('react');
var PlayerHand = require('./PlayerHand.jsx');

var PlayerBox = React.createClass({
	changePlayer: function(e) {
		console.log("clicky, clicky");
		this.props.changePlayer
	},

	render: function() {
		return (
			<div className="player-box">
				<h4>PLAYER {this.props.CardData[0].player}</h4>
				<PlayerHand
					playerHand={this.props.CardData}
				/>
				<input type="submit" value="Change player" onClick={this.changePlayer}/>
			</div>
		)
	}
});


module.exports = PlayerBox;
