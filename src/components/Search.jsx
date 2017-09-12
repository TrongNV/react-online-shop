import React from 'react'
import './Search.scss';


var Search = React.createClass({

	render: function() {
		return (
			<div className="search">

				<i className="lnr lnr-magnifier" ></i>
				<input type="text"  placeholder="Search..."/>
				
			</div>
		);
	}

});

module.exports = Search; 