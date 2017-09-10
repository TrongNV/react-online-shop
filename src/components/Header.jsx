import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';


var Header = React.createClass({

	render: function() {
		return (
			<header >
				<div className="container">
					<div className="header">
						<div className="header__logo">HEADER</div>
						
							<ul className="header-nav">
								<li><NavLink exact className="header-nav__link" to="/">MAIN</NavLink></li>
								<li><NavLink className="header-nav__link" to="/products">PRODUCTS</NavLink></li>
								<li><NavLink className="header-nav__link" to="/about">ABOUT</NavLink></li>
								<li className="cart">
									<a className="cartt" href="">

										<span className="lnr lnr-cart"></span>
										<span className="cart__text">($ 34 )</span> 
									</a>
								</li>
							</ul>
					</div>
				</div>
			</header>
			
		);
	}

});

export default Header;