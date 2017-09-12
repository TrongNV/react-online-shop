import React from 'react';
import {NavLink} from 'react-router-dom';
import Cart from './Cart.jsx';
import CartTable from './CartTable.jsx';
import Search from './Search.jsx';
import './Header.scss';


var Header = React.createClass({

getInitialState: function() {
		return {
			showCart:false 
		};
	},
showCart(event){
		event.preventDefault();
console.log("33");
		this.setState({
			showCart: !this.state.showCart
		});
		
	},
	render: function() {
		return (
			<header >
				<div className="container relat">
					<div className="header">
						<div className="header__logo">
							<Search></Search>
						</div>
						
							<ul className="header-nav">
								<li><NavLink exact className="header-nav__link" to="/">NEWS</NavLink></li>
								<li><NavLink className="header-nav__link" to="/products">PRODUCTS</NavLink></li>
								<li><NavLink className="header-nav__link" to="/about">ABOUT</NavLink></li>
							<Cart  showCartClick={this.showCart}  total={this.props.total}></Cart>
							
							</ul>

					</div>
				<div className="col-lg-offset-5 col-lg-7 col-md-offset-5 col-md-7 col-sm-12 col-xs-12">
				{this.state.showCart?(<CartTable delProduct={this.props.onHandleDelProductCart}

											 CartProducts={this.props.productsInCart}></CartTable>):null
				}
				</div>
					
					
				</div>

			</header>
			
		);
	}

});

export default Header;