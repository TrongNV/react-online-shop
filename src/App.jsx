import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import CategoryComponent from './components/CategoryComponent.jsx'

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
			ttlPrc:0 ,
			searchQuery:''
		};
	},
	handleSearch(e){
		
		var query=e.target.value.toLowerCase();
		console.log("QUERY " + query)
		this.setState({
				searchQuery:query
			});
	},
	handleBuy(product){
		console.log("###########################");
		console.log(product);
		var found=false;
		
		var newProductsInCart=this.state.productsInCart.map(function(elem) {
			if (elem.id==product.id) {
				found=true;
				elem.dublicate++;
				return elem;
			}else{
				return elem;
			}
		});


		if(!found){

			newProductsInCart.unshift({id:product.id,
				name:product.name,
				price:product.price,
				image:product.image,
				about:product.about,
				dublicate:1})
		}


		this.setState({
			productsInCart:newProductsInCart,
			ttlPrc: this.state.ttlPrc+product.price
		});

	},
	handleDelProductCart(delProduct){ 

		var dublicate=false;
		//var newProductsInCart = this.state.productsInCart.slice();


		var newProductsInCart = this.state.productsInCart.map(function(elem) {
			if ((elem.id == delProduct.id) &&(elem.dublicate>1)) {
				console.log("ЕСТЬ ДУБЛИКАТЫ");
				dublicate=true;
				elem.dublicate--;
				return elem;
			}else{
				return elem;
			}
		});
		if (!dublicate) {
			console.log("НЕТ ДУБЛИКАТОВ");
			newProductsInCart = this.state.productsInCart.filter(function(elem) {
				return elem.id !== delProduct.id;
			});
		}


		this.setState({
			productsInCart:newProductsInCart,
			ttlPrc: this.state.ttlPrc-delProduct.price
		});

		//  newProductsInCart = newProductsInCart.filter(function(elem) {
		//   return elem.id !== delProduct.id;
		// });
		// this.setState({
		// 	productsInCart:newProductsInCart,
		// 	ttlPrc: this.state.ttlPrc-delProduct.price
		// });
	},




	render: function() {
		return (
			<Router>
			<div className="app">
			<Header 

			handleSearch={this.handleSearch}
			productsInCart={this.state.productsInCart}
			total={this.state.ttlPrc}
			onHandleDelProductCart={this.handleDelProductCart}
			>

			</Header>

			<Content>
			<Route  exact path="/products/:cat?" render={props=><CategoryComponent categories={this.props.categories} {...props} /> } />
			<Switch>

			<Route exact path="/" component={Home} />
			<Route path="/about" component={About}  />
			<Route exact path="/products/:cat?" render={props=><Products searchQuery={this.state.searchQuery} OnHandleBuy={this.handleBuy} products={this.props.products} {...props}/> } />
			<Route  path="/products/product/:id"  render={props=><Product OnHandleBuy={this.handleBuy} products={this.props.products} {...props}/> } />


			<Route  component={NotFound}  />
			</Switch>
			</Content>
			</div>
			</Router>
			);
	}

});

export default App;