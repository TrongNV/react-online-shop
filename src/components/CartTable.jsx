import React from 'react';
import './CartTable.scss';


var CartTable = React.createClass({

	render: function() {
		return (
			<div className="cartTable" >
			 {
							this.props.CartProducts.length?
						 	(
					<table className="cartTable__table" >
						 <thead>
						  <tr>
						     <th>Product</th>
						     <th>Price</th>
						     <th></th>
						  </tr>
						 </thead>
						 <tbody>
						{
						 	 this.props.CartProducts.map(function(elem) {
						   return ( 
						   	<tr key={elem.id}>
						     <td className="cartTable__productTD">
								<img src={`/img/${elem.image}`} alt=""/>
								{elem.name}
						     </td>
						    
						     <td>$ {elem.price}</td>
						      <td>
							      <span className="lnr lnr-trash"></span>

						      </td>
						  	</tr>
								  )
								 })
								}
						 
						 
						  
						 </tbody>
					</table>
			): (<h1>НЕТ ТОВАРОВ</h1>)

						 }














				</div>
				
		);
	}

});

module.exports = CartTable;