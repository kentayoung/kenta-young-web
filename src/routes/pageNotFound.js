import React from 'react';

const PageNotFound = ({ component: RouteComponent, ...rest }) => {
	return (
		<div className='page'>
			<div className='section-container'><h2>Hmm... I can't seem to find that page...</h2></div>
		</div>
	);
};

export default PageNotFound;
