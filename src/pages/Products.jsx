import React from 'react';

import ProductCard from './../components/ProductCard.jsx';
import products from './../data.json';


var Products = React.createClass({
// componentDidUpdate: function(prevProps) {
//         if (this.props.noteText !== prevProps.noteText) {
//             this.msnry.reloadItems();
//             this.msnry.layout();
//         }
//     },
componentDidMount(){
var grid = this.refs.grid;
	imagesLoaded( document.querySelector('.products_wrap'), function( instance ) {

  	
        this.msnry = new Masonry( grid, {
            itemSelector: '.article_wr',
            columnWidth: '.article_wr',
            //gutter: 10,
            //isFitWidth: true
        });
});


    },
	render: function() {

		var displayProducts=this.props.match.params.cat? products.filter(elem=>elem.category==this.props.match.params.cat):products;
		
		return (
			<div className="row" >
					<div className="products_wrap" ref="grid" >
						{
							displayProducts.map(prd=> (<ProductCard 
												key={prd.id}
							  					product={prd}
							  					OnClickBuy={this.props.OnHandleBuy}></ProductCard>)
							)

						}
					</div>
				
			</div>
			
			);
	}

});

export default Products;





			