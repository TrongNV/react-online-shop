import React from 'react';
import {Link} from 'react-router-dom';
import './ProductCard.scss'

var ProductCard = React.createClass({

	render: function() {
		return (
			<div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 article_wr">
				<article className="article ">
					<div className="article__photo">
						<div className="article__more">
							<Link className=" card-button_white" to={`/products/product/${this.props.product.id}`}>
								<span className="lnr lnr-arrow-right-circle"></span>
								
							</Link>
							
						</div>
						<img src={`/img/${this.props.product.image}`}  alt=""/>
						
					</div>

					<div className="article__title">
						<h2>{this.props.product.name}</h2>
					</div>
					<div className="article__button">
						<button className="card-button" onClick={this.props.OnClickBuy.bind(null,this.props.product.price)}>
							<span className="lnr lnr-cart"></span>
							<span className="card-button__text">$ {this.props.product.price}</span>
						</button>
					</div>
				</article>

			</div>
			
			);
	}

});

export default ProductCard;


