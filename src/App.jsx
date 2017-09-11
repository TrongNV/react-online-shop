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

	handleBuy(){
		console.log("BUY")
	},
	render: function() {
		return (
			<Router>
				<div className="app">
					<Header>
						
					</Header>
					<Content>
						<Switch>
							
							<Route exact path="/" component={Home} />
							<Route exact path="/products" component={Products} />
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