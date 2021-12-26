import './App.css';
import './css/kentaYoungWeb.scss';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from './config/firebaseConfig';
import { getAnalytics } from 'firebase/analytics';
import { HelmetProvider } from 'react-helmet-async';

import Navbar from './components/navbar/navbar';
import AnimatedRoutes from './routes/animatedRoutes';

function App() {
	if (window.location.host.indexOf('kentayoung') !== -1) {
		getAnalytics(firebase);
	} else {
		console.log('localhost: turning off analytics');
	}

	const updateViewportHeight = () => {
		document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
	};

	window.addEventListener('resize', updateViewportHeight);

	updateViewportHeight();

	return (
		<div className='app'>
			<HelmetProvider>
				<Router>
					<Navbar Router={Router} />
					<AnimatedRoutes />
				</Router>
			</HelmetProvider>
		</div>
	);
}

export default App;
