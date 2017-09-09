import React from 'react';



var Content = React.createClass({


	render: function() {
		return (
			<main>
				<div className="container" >
					<div className="row" >
						{this.props.children}
					</div>
				</div>
			</main>
			
			
			);
	}

});

export default Content;





			