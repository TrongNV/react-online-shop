import React from 'react';
import './Cart.scss';



var Cart = React.createClass({
	getInitialState: function() {
		return {
			totalPrice:0 
		};
	},
	
	render: function() {
		return (
			<a className="cart" href="123">
				<span className="lnr lnr-cart"></span>
				<span className="cart__text">($ {this.props.total} )</span> 
			</a>
		);
	}

});

module.exports = Cart;