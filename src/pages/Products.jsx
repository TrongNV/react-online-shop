import React from 'react';

import ProductCard from './../components/ProductCard.jsx';



var Products = React.createClass({

componentDidMount(){
var grid = this.refs.grid;
	imagesLoaded( document.querySelector('.products_wrap'),  instance=> {

  	
        this.msnry = new Masonry( grid, {
            itemSelector: '.article_wr',
            columnWidth: '.article_wr',
            //gutter: 10,
            //isFitWidth: true
        });
});


    },
    componentDidUpdate: function(prevProps) {
        if (this.props.match.params.cat !== prevProps.match.params.cat) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
        else if (this.props.searchQuery!== prevProps.searchQuery) {
        	console.log("componentDidUpdate Search")
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    },
	render: function() {
var products=this.props.products;
		var displayProducts=this.props.match.params.cat? products.filter(elem=>elem.category==this.props.match.params.cat):products;
		if (this.props.searchQuery) {
			var searchQuery=this.props.searchQuery
var filtredItems = displayProducts.filter(function(prd) {
		var prdText = prd.name.toLowerCase();
	    return prdText.indexOf(searchQuery) !== -1;;
	});
return (
			<div className="row" >
					<div className="products_wrap" ref="grid" >
						{
							filtredItems.map(prd=> (<ProductCard 
												key={prd.id}
							  					product={prd}
							  					OnClickBuy={this.props.OnHandleBuy}></ProductCard>)
							)

						}
					</div>
				
			</div>
			
			);


		}
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





			