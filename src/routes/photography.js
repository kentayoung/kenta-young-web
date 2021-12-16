import React from 'react';

import '../css/photography.scss';
import { Helmet } from 'react-helmet';
import ImageGallery from '../components/imageGallery/image-gallery';
import Footer from '../components/footer';

const Photography = () => {
	return (
		<div>
			<Helmet>
				<title>Kenta Young - Photography</title>
				<meta name='description' content='Photographer based in Long Beach California.' />
			</Helmet>
			<div className='page'>
				<section className='section-container-wide'>
					<h2 className='section-header'>Photography</h2>
					<ImageGallery />
				</section>
			</div>
			<Footer />
		</div>
	);
};

export default Photography;
