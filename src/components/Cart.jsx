import React from 'react';
import './Cart.scss';



var Cart = React.createClass({

	render: function() {
		return (
			<a className="cart" href="">
				<span className="lnr lnr-cart"></span>
				<span className="cart__text">($ 34.5 )</span> 
			</a>
		);
	}

});

module.exports = Cart;