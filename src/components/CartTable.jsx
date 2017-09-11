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
						 	 this.props.CartProducts.map(elem=>
						   ( 
						   	<tr key={elem.id}>
						     <td className="cartTable__productTD">
								<img src={`/img/${elem.image}`} alt=""/>
								{elem.name}
								{elem.dublicate>1?elem.dublicate:""


									}
						     </td>
						    
						     <td>$ {elem.price}</td>
						      <td>
							      <span className="lnr lnr-trash" onClick={this.props.delProduct.bind(null,elem)}></span>

						      </td>
						  	</tr>
								  )
								 )
								}
						 
						 
						  
						 </tbody>
					</table>
			): (<h3>Корзина пуста</h3>)

						 }














				</div>
				
		);
	}

});

module.exports = CartTable;