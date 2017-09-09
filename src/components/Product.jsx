import React from 'react';
import './Product.scss'

var Product = React.createClass({

	render: function() {
		return (
			<div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 article_wr">
				<article className="article ">
					<div className="article__photo">
						<div className="article__more">
							<a className=" card-button_white" href="#">
								<span className="lnr lnr-arrow-right-circle"></span>
								
							</a>
							
						</div>
						<img src={`/img/${this.props.image}`}  alt=""/>
						
					</div>

					<div className="article__title">
						<h2>Burger</h2>
					</div>
					<div className="article__button">
						<button className="card-button">
							<span className="lnr lnr-cart"></span>
							<span className="card-button__text">$ 17</span>
						</button>
					</div>
				</article>

			</div>
			
			);
	}

});

export default Product;


