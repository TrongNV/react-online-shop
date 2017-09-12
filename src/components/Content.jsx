import React from 'react';



var Content = React.createClass({


	render: function() {
		return (
			<main>
				<div className="container" >
				
						{this.props.children}
					
				</div>
			</main>
			
			
			);
	}

});

export default Content;





			