import React from 'react';

import { useNavigate } from 'react-router-dom';

import '../css/pageNotFound.scss';
import astronaut from '../assets/astronaut.png';
import earth from '../assets/imgs/nasa-Yj1M5riCKk4-large-noAstro-unsplash.jpg';

const PageNotFound = ({ component: RouteComponent, ...rest }) => {
  let navigate = useNavigate();
	const handleAstronautClick = () => {
		document.getElementById('astronaut').classList.add('hideAstronaut');
		setTimeout(function () {
			navigate('/');
		}, 2000);
	};

	return (
		<div id='pageNotFoundContainer'>
			<img id='earthBackground' src={earth} alt='Earth' />
			<div id='pageNotFoundHeaderContainer'>
				<span className='pageNotFoundTitle'>Looks like you're lost...</span>
				<span className='pageNotFoundDetail'>
					Click the astronaut or{' '}
					<span
						id='homeRedirect'
						className='link-hover-light'
						onClick={handleAstronautClick}
					>
						here
					</span>{' '}
					to bring you home.
				</span>
			</div>
			<img
				id='astronaut'
				src={astronaut}
				alt='Floating astronaut'
				onClick={handleAstronautClick}
			/>
		</div>
	);
};

export default PageNotFound;
