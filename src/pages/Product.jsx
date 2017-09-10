import React from 'react';
import products from './../data.json';
import './Product.scss'

function Product(){
	
	

		//var curProduct = products.find(product=>product.id==match.params.id) 
		
		return (
			
		        <div className="product">
		        <div className="col-lg-offset-5 col-md-offset-5 col-sm-offset-5 lol col-lg-7  col-md-7 col-sm-7">
		              <div className="product__image">
		                <img src="img/3.jpg" alt=""/>
		              </div>
		          </div>
		            <div className="col-lg-6 col-md-6 col-sm-6 qwe ">
		              <div className="product__text">
		              	<h1>London Sandwich</h1>
		              	<p>loremLorem ipsum dolor sit amet, consectetur adipisicing elit. At qui doloribus perferendis eaque reiciendis repellat porro, sapiente maxime in, eos commodi laborum cupiditate fugiat debitis facere deleniti alias minus dignissimos.</p>
		                
						<button className="card-button">
							<span className="lnr lnr-cart"></span>
							<span className="card-button__text">Add to cart</span>
						</button>
		              </div>

		            </div>
		            
       		 </div> 
       
		);
	

};

module.exports = Product;