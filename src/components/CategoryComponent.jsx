import React from 'react';
import './CategoryComponent.scss';
import categories from './../categories.json';
import {NavLink} from 'react-router-dom';


var CategoryComponent = React.createClass({

	render: function() {
		return (
			<div className="row" >
				<div className="col-lg-12 col-md-12">
					<div className="category-component">
						<ul className="category-component_nav">
						<li ><NavLink exact to={`/products/`}>All</NavLink></li>
						{
							categories.map(function(elem) {
							  return (<li key={elem.id}><NavLink to={`/products/${elem.id}`}>{elem.title}</NavLink></li>)
							})


						}
							
							
						</ul>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = CategoryComponent;