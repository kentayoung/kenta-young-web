import { motion } from 'framer-motion';

import '../css/photography.scss';
import { Helmet } from 'react-helmet-async';
import ImageGallery from '../components/imageGallery/image-gallery';
import Footer from '../components/footer';

const Photography = () => {
	window.scrollTo(0,0);

	return (
		<motion.div
			initial={{ opacity: 0, y: -50}}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 0}}
			transition={{ duration: 0.5 }}
		>
			<Helmet>
				<title>Kenta Young - Photography</title>
				<meta name='description' content='Photographer based in Idaho.' />
			</Helmet>
			<div className='page'>
				<section className='section-container-wide'>
					<h2 className='section-header'>Photography</h2>
					<ImageGallery />
				</section>
			</div>
			<Footer />
		</motion.div>
	);
};

export default Photography;
