import React from 'react';
import products from './../data.json';
import './Product.scss'

function Product(){
	
	

		//var curProduct = products.find(product=>product.id==match.params.id) 
		
		return (
			
		        <div className="product">
		            <div className="col-lg-6 col-md-6 ">
		              <div className="product__text">
		              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eum corporis nihil impedit autem numquam enim sapiente, iusto iure magnam dolores ea sunt unde dolore veniam, facilis temporibus blanditiis nemo.
		              </div>
		            </div>
		            <div className="col-lg-7 col-md-7 absolute">
		              <div className="product__image">
		                <img src="img/3.jpg" alt=""/>
		              </div>
		          </div>
       		 </div> 
       
		);
	

};

module.exports = Product;