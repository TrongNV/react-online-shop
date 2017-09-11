import React from 'react';
import './Cart.scss';



var Cart = React.createClass({
	
	
	render: function() {
		return (

		
				<button className="cart" href="" onClick={this.props.showCartClick}>
					<span className="lnr lnr-cart"></span>
					<span className="cart__text">($ {this.props.total} )</span> 
				</button>
				


		
		);
	}

});

module.exports = Cart;