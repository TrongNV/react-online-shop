import React from 'react';
import Product from './Product.jsx';
import products from './data.json';


var Grid = React.createClass({

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
			<main>
				<div className="container" >
				<div className="row products_wrap" ref="grid">

					{
						products.map(function(prd) {
						  return (<Product key={prd.id} image={prd.image}></Product>)
						})

					}

				</div>
				
						
						
						
				</div>
			</main>
			
			
			);
	}

});

export default Grid;

//<span className="lnr lnr-cart"></span>



			