import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/footer';

const Photography = () => {
	return (
		<div>
			<Helmet>
				<title>Kenta Young - Photography</title>
				<meta name='description' content='Photographer based in Long Beach California.' />
			</Helmet>
			<div className='page'>
				<section className='section-container'>
					<h2 className='section-header'>Gallery</h2>
					<div className='section-content'>Coming Soon...</div>
				</section>
			</div>
			<Footer />
		</div>
	);
};

export default Photography;
