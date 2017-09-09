import React from 'react';

import Products from './Products.jsx';

var Content = React.createClass({


	render: function() {
		return (
			<main>
				<div className="container" >
					<div className="row" >
						<Products></Products>
					</div>
				</div>
			</main>
			
			
			);
	}

});

export default Content;





			