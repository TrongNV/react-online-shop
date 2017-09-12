import React from 'react';
import './Product.scss'




var Product = React.createClass({

	render: function() {
		var products=this.props.products;
var curProduct = products.find(product=>product.id==this.props.match.params.id) 
		console.log(this.props)

	return (
			
		        <div className="product">
		        <div className="col-lg-offset-5 col-md-offset-5 col-sm-offset-5 lol col-lg-7  col-md-7 col-sm-7">
		              <div className="product__image">
		                <img src={`/react-online-shop/img/${curProduct.image}`}  alt=""/>
		              </div>
		          </div>
		            <div className="col-lg-6 col-md-6 col-sm-6 qwe ">
		              <div className="product__text">
		              	<h1>{curProduct.name}</h1>
		              	<p>{curProduct.about}</p>
		                
						<button className="card-button" onClick={this.props.OnHandleBuy.bind(null,curProduct)}>
							<span className="lnr lnr-cart"></span>
							<span className="card-button__text">$ {curProduct.price}</span>
						</button>
		              </div>

		            </div>
		            
       		 </div> 
       
		);
	}

});





// function Product({match, props}){
	
	

// 		var curProduct = products.find(product=>product.id==match.params.id) 
// 		console.log(props)
// 		// onClick={this.props.OnHandleBuy.bind(null,curProduct)}
// 		return (
			
// 		        <div className="product">
// 		        <div className="col-lg-offset-5 col-md-offset-5 col-sm-offset-5 lol col-lg-7  col-md-7 col-sm-7">
// 		              <div className="product__image">
// 		                <img src={`/img/${curProduct.image}`}  alt=""/>
// 		              </div>
// 		          </div>
// 		            <div className="col-lg-6 col-md-6 col-sm-6 qwe ">
// 		              <div className="product__text">
// 		              	<h1>{curProduct.name}</h1>
// 		              	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At qui doloribus perferendis eaque reiciendis repellat porro, sapiente maxime in, eos commodi laborum cupiditate fugiat debitis facere deleniti alias minus dignissimos.</p>
		                
// 						<button className="card-button" onClick={props.OnHandleBuy.bind(null,curProduct)}>
// 							<span className="lnr lnr-cart"></span>
// 							<span className="card-button__text">$ {curProduct.price}</span>
// 						</button>
// 		              </div>

// 		            </div>
		            
//        		 </div> 
       
// 		);
	

// };

module.exports = Product;