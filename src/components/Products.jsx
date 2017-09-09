import React from 'react';
import Product from './Product.jsx';
import products from './data.json';


var Products = React.createClass({

componentDidMount(){
var grid = this.refs.grid;
	imagesLoaded( document.querySelector('.products_wrap'), function( instance ) {
  console.log('all images are loaded');
  	
        this.msnry = new Masonry( grid, {
            itemSelector: '.article_wr',
            columnWidth: '.article_wr',
            //gutter: 10,
            //isFitWidth: true
        });
});


    },
	render: function() {
		
		return (
			
					<div className="products_wrap" ref="grid">
						{
							products.map(function(prd) {
							  return (<Product key={prd.id} image={prd.image}></Product>)
							})

						}
					</div>
				
			
			
			);
	}

});

export default Products;





			