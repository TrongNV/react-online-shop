import ReactDOM from 'react-dom';
import React from 'react';
import data from './data.json';
import categories from './categories.json';


import App from './App.jsx'




ReactDOM.render(
	<App products={data} categories={categories}/>
		,
	 document.getElementById('container'))