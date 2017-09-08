import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, hashHistory} from 'react-router'

import App from './App.jsx'



ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={App}></Route>

	</Router>,
	 document.getElementById('container'))