import React from 'react';
import './Header.scss';


var Header = React.createClass({

	render: function() {
		return (
			<header >
				<div className="container">
					<div className="header">
						<div className="header__logo">HEADER</div>
						
							<ul className="header-nav">
							
								<li><a className="header-nav__link" href="">MENU</a></li>
								<li><a className="header-nav__link" href="">ABOUT</a></li>
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