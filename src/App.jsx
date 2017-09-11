import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header.jsx';
import Content from './components/Content.jsx';

import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Product from './pages/Product.jsx';
import NotFound from './pages/NotFound.jsx';

import './App.scss';

var App = React.createClass({
	getInitialState: function() {
		return {
			productsInCart:[],
			ttlPrc:0 
		};
	},
	handleBuy(product){
		console.log(product);
		var newProductsInCart = this.state.productsInCart.slice();
        newProductsInCart.unshift(product);
		this.setState({
			productsInCart:newProductsInCart,
			ttlPrc: this.state.ttlPrc+product.price
		});

	},
	render: function() {
		return (
			<Router>
				<div className="app">
					<Header 
					productsInCart={this.state.productsInCart}
					total={this.state.ttlPrc}>
						
					</Header>
					<Content>
						<Switch>
							
							<Route exact path="/" component={Home} />
							<Route exact path="/products" render={props=><Products OnHandleBuy={this.handleBuy}/> } />
							<Route path="/products/product/:id" component={Product} />
							<Route path="/about" component={About}  />
							<Route  component={NotFound}  />
						 </Switch>
					</Content>
				</div>
			</Router>
		);
	}

});
 
export default App;